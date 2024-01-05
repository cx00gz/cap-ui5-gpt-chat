import { OpenAIClient, AzureKeyCredential, ChatMessage } from "@azure/openai";
import { ListModelsResponse } from "openai";

import { Service, Inject } from "typedi";
import { Readable } from "stream";
import CompletionStream from "./CompletionStream";

import fs from 'fs';
import axios, { AxiosResponse } from 'axios';

const KEY_FILE: string = 'key.json';

export interface OpenAIConfing {
    apiKey: string;
    completionAttributes?: CompletionAttributes;
}
export interface CompletionAttributes {
    max_tokens?: number;
    temperature?: number;
    top_p?: number;
    frequency_penalty?: number;
    presence_penalty?: number;
    baseurl?: string;
}



export interface ServiceKey {
    uaa: {
        url: string;
        clientid: string;
        clientsecret: string;
    };
    url: string;
}

export interface RequestData {
    deployment_id: string;
    messages: Array<{ role: string; content: string }>;
    max_tokens: number;
    temperature: number;
    frequency_penalty: number;
    presence_penalty: number;
    top_p: number;
    stop: string;
}


@Service()
export default class BTPOpenAIService {
    @Inject("openai-config")
    config: OpenAIConfing;

    private apiInstance: OpenAIClient;

    get api(): OpenAIClient {
        this.apiInstance ??= new OpenAIClient(
            this.config.completionAttributes.baseurl,
            new AzureKeyCredential(`Bearer ${this.config.apiKey}`)
        );

        return this.apiInstance;
    }


    // Load the service key
    public loadKey(): ServiceKey {
        const rawData: string = fs.readFileSync(KEY_FILE, 'utf-8');
        return JSON.parse(rawData);
    }

    // Get Token
    public async getToken(svcKey: ServiceKey): Promise<string> {
        const uaaUrl: string = svcKey.uaa.url;
        const clientId: string = svcKey.uaa.clientid;
        const clientSecret: string = svcKey.uaa.clientsecret;

        const params = {
            grant_type: 'client_credentials'
        };

        const response: AxiosResponse = await axios.post(`${uaaUrl}/oauth/token`, null, {
            auth: {
                username: clientId,
                password: clientSecret
            },
            params
        });

        return response.data.access_token;
    }


    public async makeRequest(data: RequestData) {
        const mySvcKey: ServiceKey = this.loadKey();
        const myToken: string = await this.getToken(mySvcKey);

        const headers = {
            'Authorization': `Bearer ${myToken}`,
            'Content-Type': 'application/json'
        };

        const response: AxiosResponse = await axios.post(`${mySvcKey.url}/api/v1/completions`, data, {
            headers
        });

        return response.data;
    }

    /**
     * Returns a list of all models
     *
     * @returns {Promise<ListModelsResponse>} the list of models
     */
    public async listModelsLocal(): Promise<ListModelsResponse> {

        return {
            "object": "",
            "data": [
                {
                    "id": "text-davinci-003 (default)",
                    "object": "Azure OpenAI text-davinci-003 model",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "code-davinci-002",
                    "object": "Azure OpenAI codex model",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "alephalpha",
                    "object": "Aleph Alpha luminous-base model",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "gpt-35-turbo",
                    "object": "Azure OpenAI ChatGPT (gpt-35-turbo) model",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "gpt-4",
                    "object": "Azure OpenAI GPT-4 model accepting 8k maximum tokens",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "gpt-4-32k",
                    "object": "Azure OpenAI GPT-4 model accepting 32k maximum tokens",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "bloom-7b1",
                    "object": "BLOOM model hosted on AI Core supporting more parameters",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "gptj-full",
                    "object": "GPT-J model hosted on AI Core supporting more parameters",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "gcp-text-bison-001 (Preview)",
                    "object": "Google text-bison@001 model for text completions",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "anthropic-claude-v1 (Preview)",
                    "object": "AWS Bedrock Anthropic Claude v1 model for text completions",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "anthropic-claude-instant-v1 (Preview)",
                    "object": "AWS Bedrock Anthropic Claude Instant v1 model for text completions",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "ai21-j2-grande-instruct (Preview)",
                    "object": "AWS Bedrock - Jurassic-2 Grande Instruct model by AI21 Labs for text completions",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "ai21-j2-jumbo-instruct (Preview)",
                    "object": "AWS Bedrock - Jurassic-2 Jumbo Instruct model by AI21 Labs for text completions",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "amazon-titan-tg1-large (Preview)",
                    "object": "AWS Bedrock Amazon Titan Text Large model for text completions",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "falcon-7b",
                    "object": "Falcon-7B model deployed on AI Core for text completions",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "falcon-40b-instruct",
                    "object": "Falcon-40B-instruct model deployed on AI Core for text completions",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "llama2-13b-chat-hf",
                    "object": "Llama 2 13b chat hf model deployed on AI Core for text completions",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "anthropic-claude-v2 (Preview)",
                    "object": "AWS Bedrock Anthropic Claude v2 model for text completions",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "gcp-chat-bison-001 (Preview)",
                    "object": "gcp Vertex AI chat-bison model for chat completions",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "gpt-35-turbo-16k",
                    "object": "Azure OpenAI ChatGPT (gpt-35-turbo-16k) model",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "llama2-70b-chat-hf",
                    "object": "Llama 2 70b chat hf model deployed on AI Core for text completions",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "cohere-command (Preview)",
                    "object": "Cohere command model for text completions",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "anthropic-claude-v1-100k (Preview)",
                    "object": "AWS Bedrock Anthropic Claude v1 model for text completions",
                    "created": 0,
                    "owned_by": ""
                },
                {
                    "id": "anthropic-claude-v2-100k (Preview)",
                    "object": "AWS Bedrock Anthropic Claude v2 model for text completions",
                    "created": 0,
                    "owned_by": ""
                }
            ]
        }


    }

    /**
     * Returns a list of all models
     *
     * @returns {Promise<{ id: string }[]>} the list of models
     */
    public async readModels(): Promise<{ id: string; category: string }[]> {
        return this.listModelsLocal().then((response) => {
            //const models = response.data.data
            const models = response.data
                .map((model) => {
                    return {
                        id: model.id,
                        category: model.id.startsWith("gpt-4")
                            ? "GPT-4"
                            : model.id.startsWith("gpt-3.5")
                                ? "GPT-3.5"
                                : "GPT-3 and others",
                    };
                })
                .sort((a, b) => b.category.localeCompare(a.category));

            return models;
        }
        );
    }

    public async createChatCompletionAsStream(
        messages: ChatMessage[],
        model: string = "gpt-3.5-turbo"
    ): Promise<CompletionStream> {
        const attributes = this.config.completionAttributes || {};
        const response = await this.api.getChatCompletions(model, messages,
            {
                ...this.mergeAttributesWithDefaults(attributes),
                model: model,
                stream: true,
            }
        );

        const readable = response as any as Readable;
        return this.buildStream(readable, (data) => {
            return data.choices[0]?.delta?.content;
        });
    }

    public async createChatCompletion(
        messages: ChatMessage[],
        model: string = "gpt-3.5-turbo"
    ): Promise<string> {

        const attributes = this.config.completionAttributes || {};

        // Copy from above and replace the value below to try a different model.
        // gpt-4 example, prompt uses Chat Completions API format, note the use of messages array instead of prompt.
        const data = {
            "deployment_id": model,
            "messages": messages,
            "max_tokens": 800,
            "temperature": 0.7,
            "frequency_penalty": 0,
            "presence_penalty": 0,
            "top_p": 0.95,
            "stop": "null",
            ...this.mergeAttributesWithDefaults(attributes)
        };

        const response = await this.makeRequest(data);
        return response.choices[0].message.content
    }

    public async createCompletionAsStream(prompt: string, model: string = "text-davinci-003"): Promise<CompletionStream> {
        const attributes = this.config.completionAttributes || {};
        const response = await this.api.getCompletions(model, [prompt],
            {
                ...this.mergeAttributesWithDefaults(attributes),
                model: model,
                stream: true,
            }
        );

        const readable = response as any as Readable;
        return this.buildStream(readable, (data) => {
            return data.choices[0].text;
        });
    }

    /**
     * Returns a completion for the given prompt and model
     *
     * @param prompt {string}
     * @param model {string}
     * @returns  {Promise<string>} the response of the model
     */
    public async createCompletion(prompt: string, model: string = "text-davinci-003"): Promise<string> {
        const attributes = this.config.completionAttributes || {};
        const response = await this.api
            .getCompletions(model, [prompt], {
                ...this.mergeAttributesWithDefaults(attributes),
                model: model,
                stop: ["\nHuman:", "\nAI:"],
            })
            .then((response) => {
                return response.choices[0].text;
            })
            .catch((error) => {
                return `The OpenAI API sadly returned an error! (Error: ${error.message})`;
            });
        return response;
    }

    private mergeAttributesWithDefaults(attributes: CompletionAttributes): CompletionAttributes {
        return {
            max_tokens: attributes.max_tokens || 1200,
            temperature: attributes.temperature || 0.8,
            top_p: attributes.top_p || 1,
            frequency_penalty: attributes.frequency_penalty || 0,
            presence_penalty: attributes.presence_penalty || 0.6,
        };
    }

    private buildStream(readable: Readable, extractorCallback: (data: any) => string): CompletionStream {
        const stream = new CompletionStream();
        readable.on("data", async (completionData) => {
            try {
                const data = JSON.parse(completionData.toString().trim().replace("data: ", ""));
                const chunk = extractorCallback(data);
                chunk && stream.emit("chunk", chunk);
            } catch (error) {
                stream.emit("error", error);
            }
        });

        readable.on("end", () => {
            stream.emit("end");
        });
        return stream;
    }
}
