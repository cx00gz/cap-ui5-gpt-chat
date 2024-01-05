import { Request } from "@sap/cds/apis/services";
import { Func, Handler, Param, Req } from "cds-routing-handlers";
import { Inject, Service } from "typedi";
import ChatBuilder from "../services/ChatBuilder";
import CompletionStream from "../services/CompletionStream";
import OpenAIService from "../services/OpenAIService";
import BTPOpenAIService from "../services/BTPOpenAIService";
import { FuncGetCompletionReturn, FuncGetModelsReturn } from "../types/ChatService";

@Handler()
@Service()
export default class ChatServiceHandler {
  @Inject()
  //private openAIService: OpenAIService;
  private BTPOpenAIService: BTPOpenAIService;

  @Inject()
  private chatBuilder: ChatBuilder;

  @Func("getModels")
  public async getModels(@Req() req: Request): Promise<FuncGetModelsReturn> {
    const models = await this.BTPOpenAIService.readModels().catch((error) => {
      req.notify(500, error.message);
    });
    return <FuncGetModelsReturn>models;
  }

  @Func("getCompletion")
  public async getCompletion(
    @Param("model") model: string,
    @Param("personality") personalityId: string,
    @Param("chat") chatId: string,
    @Req() req: Request
  ): Promise<FuncGetCompletionReturn> {
    let response: string;

    if (model.startsWith("gpt-3.5") || model.startsWith("gpt-4")) {
      const messages = await this.chatBuilder.getChatAsMessages(chatId, personalityId);
      response = await this.BTPOpenAIService.createChatCompletion(messages, model);
    } else {
      const prompt = await this.chatBuilder.getChatAsPrompt(chatId, personalityId);
      response = await this.BTPOpenAIService.createCompletion(prompt, model);
    }

    return <FuncGetCompletionReturn>{
      message: response,
    };
  }

  @Func("getCompletionAsStream")
  public async getCompletionAsStream(
    @Param("model") model: string,
    @Param("personality") personalityId: string,
    @Param("chat") chatId: string,
    @Req() req: Request
  ): Promise<void> {
    let stream: CompletionStream;

    // Since we are using functionality not exposed from the @sap/cds API, we need to access the response object directly.
    // TODO: Have a closer look at the @sap/cds API and see if there is a way to enable streaming without accessing the response object directly.
    // @ts-ignore
    const httpRes = req._.res as ServerResponse;

    httpRes.setHeader("Content-Type", "text/event-stream");
    httpRes.setHeader("Cache-Control", "no-cache");
    httpRes.setHeader("Connection", "keep-alive");

    if (model.startsWith("gpt-3.5") || model.startsWith("gpt-4")) {
      const messages = await this.chatBuilder.getChatAsMessages(chatId, personalityId);
      stream = await this.BTPOpenAIService.createChatCompletionAsStream(messages, model);
    } else {
      const prompt = await this.chatBuilder.getChatAsPrompt(chatId, personalityId);
      stream = await this.BTPOpenAIService.createCompletionAsStream(prompt, model);
    }

    await new Promise((resolve) => {
      stream.on("chunk", async (chunk) => {
        httpRes.write(JSON.stringify({ message: chunk }));
        httpRes.flush();
      });

      stream.on("end", () => {
        httpRes.end();
        resolve(null);
      });

      stream.on("error", (error) => {
        //httpRes.end(JSON.stringify({ error: error.message }));
        //resolve(null);
      });
    });
  }
}
