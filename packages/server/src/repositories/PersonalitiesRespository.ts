import { Service } from "typedi";
import { IPersonalities, Entity } from "../types/p36.capui5gpt.chat";

@Service()
export default class PersonalitiesRespository {
  public async getPersonality(personalityId: string): Promise<IPersonalities> {
    switch (personalityId) {
      case '1cfb5b32-f65d-4175-8c0b-6af09c46f709'://'SQLMaster_BOPF':

        return {
          ID: personalityId,
          name: 'SQLMaster_BOPF',
          instructions: `

        YOu are a SQL developer, you need to build sql for user base on below db information:
    
        'DB Table: '/BOBF/OBM_ASSOC ' Description: 'BOPF Configuration: Association
        
        DB Table Fields
        TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
        /BOBF/OBM_ASSOC	ALIAS_DELETE	 	 	Component name
        /BOBF/OBM_ASSOC	ALIAS_DELETE_S	 	 	Component name
        /BOBF/OBM_ASSOC	ALIAS_RETRIEVE	 	 	Component name
        /BOBF/OBM_ASSOC	ALIAS_RETRIEVE_S	 	 	Component name
        /BOBF/OBM_ASSOC	ASSOC_CAT	 	 	Association Category
        /BOBF/OBM_ASSOC	ASSOC_CLASS	 	 	Object Type Name
        /BOBF/OBM_ASSOC	ASSOC_KEY	X	 	Association
        /BOBF/OBM_ASSOC	ASSOC_MODELED	 	 	Data element for domain BOOLE: TRUE (='X') and FALSE (=' ')
        /BOBF/OBM_ASSOC	ASSOC_NAME	 	 	Name
        /BOBF/OBM_ASSOC	ASSOC_RESOLVE	 	 	Resolving Node for Association
        /BOBF/OBM_ASSOC	ASSOC_TYPE	 	 	Association Type (Composition or Association)
        /BOBF/OBM_ASSOC	ATTR_NAME_SOURCE	 	 	Name
        /BOBF/OBM_ASSOC	BO_KEY	 	 	Business Object
        /BOBF/OBM_ASSOC	CARDINALITY	 	 	Association Cardinality
        /BOBF/OBM_ASSOC	CHANGE_RESOLVE	 	 	Resolving Location of Association Canges
        /BOBF/OBM_ASSOC	CHANGE_TIME	 	 	Date on which the Settings Were Changed Last
        /BOBF/OBM_ASSOC	CHANGE_USER	 	 	User that was Last to Change the Setting
        /BOBF/OBM_ASSOC	CREATE_TIME	 	 	Date on Which the Settings were Created
        /BOBF/OBM_ASSOC	CREATE_USER	 	 	User that Created the Setting
        /BOBF/OBM_ASSOC	ESR_PARAM_DATA_T	 	*	Name of a structure
        /BOBF/OBM_ASSOC	EXTENSION	X	 	Data element for domain BOOLE: TRUE (='X') and FALSE (=' ')
        /BOBF/OBM_ASSOC	LAST_RELEVANT_DDIC_CHANGE	 	 	UTC Time Stamp in Short Form (YYYYMMDDhhmmss)
        /BOBF/OBM_ASSOC	NAME	X	 	Name
        /BOBF/OBM_ASSOC	OBJECT_MODEL_GENERATED	 	 	Indicator: BO Data Model is generated from CDS view
        /BOBF/OBM_ASSOC	PARAM_DATA_TYPE	 	*	Name of a structure
        /BOBF/OBM_ASSOC	QUERY_KEY	 	 	Query
        /BOBF/OBM_ASSOC	SECKEYNAME	 	 	Name of Secondary Key for Table Type
        /BOBF/OBM_ASSOC	SOURCE_NODE_KEY	 	 	Node
        /BOBF/OBM_ASSOC	SP_MAPPER_CLASS	 	 	Object Type Name
        /BOBF/OBM_ASSOC	TARGET_NODE_KEY	 	 	Node
        /BOBF/OBM_ASSOC	TD_CONTAINER	 	 	Test Data Container
        /BOBF/OBM_ASSOC	TD_CONTAINER_VAR	 	 	Variant Name
        /BOBF/OBM_ASSOC	USE_PROXY_TYPE	 	 	Use proxy data types in internal model
        /BOBF/OBM_ASSOC	VERSION	X	 	Version
        
        'DB Table: '/BOBF/OBM_BO ' Description: 'BOPF Configuration: Business Objects
        
        DB Table Fields
        TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
        /BOBF/OBM_BO	BO_DELETED	X	 	Data element for domain BOOLE: TRUE (='X') and FALSE (=' ')
        /BOBF/OBM_BO	BO_GENERATED	 	 	Business Object Processing Model was generated
        /BOBF/OBM_BO	BO_KEY	 	 	Business Object
        /BOBF/OBM_BO	BO_NAME	X	 	Name
        /BOBF/OBM_BO	CHANGE_TIME	 	 	Date on which the Settings Were Changed Last
        /BOBF/OBM_BO	CHANGE_USER	 	 	User that was Last to Change the Setting
        /BOBF/OBM_BO	CREATE_TIME	 	 	Date on Which the Settings were Created
        /BOBF/OBM_BO	CREATE_USER	 	 	User that Created the Setting
        /BOBF/OBM_BO	CUSTOMER_BO	 	 	Data element for domain BOOLE: TRUE (='X') and FALSE (=' ')
        /BOBF/OBM_BO	EXTENSION	X	 	Data element for domain BOOLE: TRUE (='X') and FALSE (=' ')
        /BOBF/OBM_BO	EXTENSION_KEY	 	 	Business Object
        /BOBF/OBM_BO	OBJCAT	 	 	Business Object Category
        /BOBF/OBM_BO	SUPER_BO_KEY	 	 	Business Object
        /BOBF/OBM_BO	SUPER_BO_NAME	 	 	Name
        
        'DB Table: '/BOBF/OBM_NODE ' Description: 'BOPF Configuration: Node
        
        DB Table Fields
        TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
        /BOBF/OBM_NODE	ACTIVE_PERSISTENCE_KEY_TYPE	 	 	Persistency key type
        /BOBF/OBM_NODE	ALIAS_CREATE_S	 	 	Component name
        /BOBF/OBM_NODE	ALIAS_DELETE_S	 	 	Component name
        /BOBF/OBM_NODE	ALIAS_RETRIEVE	 	 	Component name
        /BOBF/OBM_NODE	ALIAS_RETRIEVE_S	 	 	Component name
        /BOBF/OBM_NODE	ALIAS_UPDATE_S	 	 	Component name
        /BOBF/OBM_NODE	AUTH_CHECK_CLASS	 	 	Node authorization check class
        /BOBF/OBM_NODE	AUTH_CHECK_RELEVANT	 	 	Node has own authorization checks
        /BOBF/OBM_NODE	BO_KEY	 	 	Business Object
        /BOBF/OBM_NODE	BUF_CLASS	 	 	Object Type Name
        /BOBF/OBM_NODE	CHANGE_TIME	 	 	Date on which the Settings Were Changed Last
        /BOBF/OBM_NODE	CHANGE_USER	 	 	User that was Last to Change the Setting
        /BOBF/OBM_NODE	CREATE_TIME	 	 	Date on Which the Settings were Created
        /BOBF/OBM_NODE	CREATE_USER	 	 	User that Created the Setting
        /BOBF/OBM_NODE	DATABASE_TABLE	 	 	Table name, 16 characters
        /BOBF/OBM_NODE	DATA_DATA_TYPE	 	DD02L	Name of a structure
        /BOBF/OBM_NODE	DATA_DATA_TYPE_T	 	 	Name of a structure
        /BOBF/OBM_NODE	DATA_TABLE_TYPE	 	DD40L	Name of table type
        /BOBF/OBM_NODE	DATA_TYPE	 	DD02L	Name of a structure
        /BOBF/OBM_NODE	DELEGATION_CLASS	 	 	Object Type Name
        /BOBF/OBM_NODE	DRAFT_CLASS	 	 	Object Type Name
        /BOBF/OBM_NODE	DRAFT_DATA_TYPE	 	 	Name of a structure
        /BOBF/OBM_NODE	DRAFT_PERSISTENCE_KEY_TYPE	 	 	Persistency key type
        /BOBF/OBM_NODE	EXTENDIBLE	 	 	Business Object can be enhanced
        /BOBF/OBM_NODE	EXTENSION	X	 	Data element for domain BOOLE: TRUE (='X') and FALSE (=' ')
        /BOBF/OBM_NODE	EXT_INCL_NAME	 	DD02L	Name of a structure
        /BOBF/OBM_NODE	EXT_INCL_NAME_T	 	 	Name of a structure
        /BOBF/OBM_NODE	GDT_DATA_TYPE	 	 	GDT Structure Name
        /BOBF/OBM_NODE	KEY_INHERITED	 	 	Key is equal to parent key
        /BOBF/OBM_NODE	KEY_SECKEYNAME	 	 	Name of Secondary Key for Table Type
        /BOBF/OBM_NODE	LAST_RELEVANT_DDIC_CHANGE	 	 	UTC Time Stamp in Short Form (YYYYMMDDhhmmss)
        /BOBF/OBM_NODE	LCP_WRAP_CLASS	 	 	Object Type Name
        /BOBF/OBM_NODE	LOADABLE	 	 	Node is loadable separately
        /BOBF/OBM_NODE	LOCKABLE	 	 	Node is lockable separately
        /BOBF/OBM_NODE	MAPPER_CLASS	 	 	Object Type Name
        /BOBF/OBM_NODE	NAME	X	 	Name
        /BOBF/OBM_NODE	NODE_CAT_KEY	 	 	Standard Node Category
        /BOBF/OBM_NODE	NODE_CLASS	 	 	Object Type Name
        /BOBF/OBM_NODE	NODE_KEY	X	 	Node
        /BOBF/OBM_NODE	NODE_NAME	 	 	Name
        /BOBF/OBM_NODE	NODE_TYPE	 	 	Node Type
        /BOBF/OBM_NODE	OBJECT_MDL_ACTIVE_PERSISTENCE	 	 	Table Name
        /BOBF/OBM_NODE	OBJECT_MDL_DRAFT_PERSISTENCE	 	 	Table Name
        /BOBF/OBM_NODE	OBJECT_MDL_LASTSTATECHANGEID	 	 	Component name
        /BOBF/OBM_NODE	OBJECT_MODEL_CDS_VIEW_NAME	 	 	Name of a CDS view
        /BOBF/OBM_NODE	OBJECT_MODEL_DATA_CATEGORY	 	 	Object Model Data Category
        /BOBF/OBM_NODE	OBJECT_MODEL_DELETED_IND	 	 	Indicator: Node has been deleted in Object Model (CDS)
        /BOBF/OBM_NODE	OBJECT_MODEL_GENERATED	 	 	Indicator: BO Data Model is generated from CDS view
        /BOBF/OBM_NODE	OBJ_KEY	 	 	Business Object Version
        /BOBF/OBM_NODE	PRX_DAT_DAT_TYPE	 	DD02L	Name of a structure
        /BOBF/OBM_NODE	REF_BO_KEY	 	 	Business Object
        /BOBF/OBM_NODE	REF_NODE_KEY	 	 	Node
        /BOBF/OBM_NODE	ROOT_SECKEYNAME	 	 	Name of Secondary Key for Table Type
        /BOBF/OBM_NODE	SEMANTICS_CREATED_AT	 	 	Component name
        /BOBF/OBM_NODE	SEMANTICS_CREATED_AT_DATE	 	 	Component name
        /BOBF/OBM_NODE	SEMANTICS_CREATED_AT_TIME	 	 	Component name
        /BOBF/OBM_NODE	SEMANTICS_CREATED_BY	 	 	Component name
        /BOBF/OBM_NODE	SEMANTICS_LAST_CHANGED_AT	 	 	Component name
        /BOBF/OBM_NODE	SEMANTICS_LAST_CHANGED_AT_DATE	 	 	Component name
        /BOBF/OBM_NODE	SEMANTICS_LAST_CHANGED_AT_TIME	 	 	Component name
        /BOBF/OBM_NODE	SEMANTICS_LAST_CHANGED_BY	 	 	Component name
        /BOBF/OBM_NODE	SP_ID_MAP_CLASS	 	 	Object Type Name
        /BOBF/OBM_NODE	SP_MAPPER_CLASS	 	 	Object Type Name
        /BOBF/OBM_NODE	STA_CHILD_ASSOC	 	 	Association
        /BOBF/OBM_NODE	STA_PARENT_ASSOC	 	 	Association
        /BOBF/OBM_NODE	SUBTREE_PROPERTY	 	 	Node can have properties relevant for complete subtree
        /BOBF/OBM_NODE	TEXT_NODE_ADT	 	 	Text Node Indicator (ADT)
        /BOBF/OBM_NODE	TRANSIENT	 	 	Node is transient
        /BOBF/OBM_NODE	USE_PROXY_TYPE	 	 	Use proxy data types in internal model
        /BOBF/OBM_NODE	VERSION	X	 	Version
        
        'DB Table: '/BOBF/OBM_OBJ ' Description: 'BOPF Configuration: Version
        
        DB Table Fields
        TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
        /BOBF/OBM_OBJ	ACCESS_CLASS	 	 	Object Type Name
        /BOBF/OBM_OBJ	AUTH_CHECK_RELEVANT	 	 	BO has authorization checks
        /BOBF/OBM_OBJ	BO_KEY	 	 	Business Object
        /BOBF/OBM_OBJ	BUFFER_CLASS	 	SEOCLASS	Object Type Name
        /BOBF/OBM_OBJ	CHANGE_TIME	 	 	Date on which the Settings Were Changed Last
        /BOBF/OBM_OBJ	CHANGE_USER	 	 	User that was Last to Change the Setting
        /BOBF/OBM_OBJ	CHECK_SERVICES	 	 	Check Service Calls (Never trust the caller)
        /BOBF/OBM_OBJ	CHK_SERV_ACTION	 	 	Check Service Calls (Never trust the caller)
        /BOBF/OBM_OBJ	CHK_SERV_ASSOC	 	 	Check Service Calls (Never trust the caller)
        /BOBF/OBM_OBJ	CLEANUP_MODE	 	 	Transaction Behavior During Save (Transaction Mode)
        /BOBF/OBM_OBJ	CONST_INTERFACE	 	 	Object Type Name
        /BOBF/OBM_OBJ	CREATE_TIME	 	 	Date on Which the Settings were Created
        /BOBF/OBM_OBJ	CREATE_USER	 	 	User that Created the Setting
        /BOBF/OBM_OBJ	DERIVATOR_CLASS	 	 	Object Type Name
        /BOBF/OBM_OBJ	ENQUEUE_SCOPE	 	 	Lock Behavior
        /BOBF/OBM_OBJ	ES_DATA_EXTRACTOR_CLASS	 	 	Data extractor class for Enterprise Search
        /BOBF/OBM_OBJ	ES_RELEVANT	 	 	Business object is relevant to Enterprise Search
        /BOBF/OBM_OBJ	EXTENDIBLE	 	 	Business Object can be enhanced
        /BOBF/OBM_OBJ	EXTENSION	X	 	Data element for domain BOOLE: TRUE (='X') and FALSE (=' ')
        /BOBF/OBM_OBJ	FEATURE_ANNOTATION	 	 	Feature annotations
        /BOBF/OBM_OBJ	FINAL	 	 	Business Object is final
        /BOBF/OBM_OBJ	LAST_CHANGE_TIME	 	 	Date on which the Settings Were Changed Last
        /BOBF/OBM_OBJ	LAST_CHANGE_USER	 	 	User that was Last to Change the Setting
        /BOBF/OBM_OBJ	LAST_CI_GENERATION	 	 	UTC Time Stamp in Short Form (YYYYMMDDhhmmss)
        /BOBF/OBM_OBJ	LAST_CI_RELEVANT_CHANGE	 	 	UTC Time Stamp in Short Form (YYYYMMDDhhmmss)
        /BOBF/OBM_OBJ	MAPPER_CLASS	 	SEOCLASS	Object Type Name
        /BOBF/OBM_OBJ	NAME	X	/BOBF/OBM_BO	Name
        /BOBF/OBM_OBJ	NAMESPACE	 	 	Namespace
        /BOBF/OBM_OBJ	OBJCAT	 	 	Business Object Category
        /BOBF/OBM_OBJ	OBJECT_MODEL_CDS_VIEW_NAME	 	 	Name of a CDS view
        /BOBF/OBM_OBJ	OBJECT_MODEL_GENERATED	 	 	Indicator: BO Data Model is generated from CDS view
        /BOBF/OBM_OBJ	OBJ_KEY	X	 	Business Object Version
        /BOBF/OBM_OBJ	PROXY_CHECKSUM	 	 	Character field of length 40
        /BOBF/OBM_OBJ	PROXY_INCOMPLETE	 	 	Proxy not imported completely
        /BOBF/OBM_OBJ	PROXY_TIME	 	 	Date on which the Settings Were Changed Last
        /BOBF/OBM_OBJ	ROOT_NODE_KEY	 	 	Node
        /BOBF/OBM_OBJ	SMART_VALIDATIONS	 	 	Enable smart execution of validations
        /BOBF/OBM_OBJ	SP_CLASS	 	SEOCLASS	Object Type Name
        /BOBF/OBM_OBJ	SP_MAPPER_CLASS	 	 	Object Type Name
        /BOBF/OBM_OBJ	STATUS_CLASS	 	 	Object Type Name
        /BOBF/OBM_OBJ	TD_CONTAINER	 	 	Test Data Container
        /BOBF/OBM_OBJ	VERSION	X	 	Version
                
        `
        }

      case 'd0fdc35c-a612-453b-9ea0-ba419251c8fa'://'SQLMaster_SFLIGHT':
        return {
          ID: personalityId,
          name: 'SQLMaster_SFLIGHT',
          instructions: `
          You are a SQL developer, you need to build sql for user base on below SAP SFLIGHT related db information.
          Also don't forget to add comments for each field and table in SQL.
          
          DB Table
          TABNAME	DDTEXT
          SAIRPORT	Airports
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SAIRPORT	ID	X	 	Code des Flughafens
          SAIRPORT	ID	X	 	Airport Code
          SAIRPORT	MANDT	X	T000	Mandant
          SAIRPORT	MANDT	X	T000	Client
          SAIRPORT	NAME	 	 	Flughafenname
          SAIRPORT	NAME	 	 	Airport name
          SAIRPORT	TIME_ZONE	 	TTZZ	Zeitzone eines Flughafens
          SAIRPORT	TIME_ZONE	 	TTZZ	Airport time zone
          
          DB Table
          TABNAME	DDTEXT
          SAPLANE	Plane
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SAPLANE	CAP_UNIT	 	 	Maß für WB Trainingsdatenmodell BC_Travel
          SAPLANE	CAP_UNIT	 	 	Mass unit
          SAPLANE	CONSUM	 	 	Durchschnittlicher Verbrauch
          SAPLANE	CONSUM	 	 	Average consumption
          SAPLANE	CON_UNIT	 	 	Einheit Treibstoffverbrauch
          SAPLANE	CON_UNIT	 	 	Unit of fuel consumption
          SAPLANE	LENG	 	 	Länge des Flugzeuges
          SAPLANE	LENG	 	 	Length of plane
          SAPLANE	LENG_UNIT	 	 	Maßeinheit für WB Trainingsdatenmodell BC_Travel
          SAPLANE	LENG_UNIT	 	 	Length unit for Workbench training data model BC_Travel
          SAPLANE	MANDT	X	T000	Mandant
          SAPLANE	MANDT	X	T000	Client
          SAPLANE	OP_SPEED	 	 	Reisegeschwindigkeit
          SAPLANE	OP_SPEED	 	 	Speed
          SAPLANE	PLANETYPE	X	 	Flugzeugtyp
          SAPLANE	PLANETYPE	X	 	Aircraft Type
          SAPLANE	PRODUCER	 	 	Flugzeughersteller
          SAPLANE	PRODUCER	 	 	Plane manufacturer
          SAPLANE	SEATSMAX	 	 	Maximale Belegung Economy Class
          SAPLANE	SEATSMAX	 	 	Maximum capacity in economy class
          SAPLANE	SEATSMAX_B	 	 	Maximale Belegung Business Class
          SAPLANE	SEATSMAX_B	 	 	Maximum capacity in business class
          SAPLANE	SEATSMAX_F	 	 	Maximale Belegung First Class
          SAPLANE	SEATSMAX_F	 	 	Maximum capacity in first class
          SAPLANE	SPAN	 	 	Spannweite
          SAPLANE	SPAN	 	 	Span
          SAPLANE	SPAN_UNIT	 	 	Maßeinheit für WB Trainingsdatenmodell BC_Travel
          SAPLANE	SPAN_UNIT	 	 	Length unit for Workbench training data model BC_Travel
          SAPLANE	SPEED_UNIT	 	 	Maßeinheit für WB Trainingsdatenmodell BC_Travel
          SAPLANE	SPEED_UNIT	 	 	Length unit for Workbench training data model BC_Travel
          SAPLANE	TANKCAP	 	 	Maximale Treibstoffmenge
          SAPLANE	TANKCAP	 	 	Maximum fuel capacity
          SAPLANE	WEIGHT	 	 	Gewicht des Flugzeugs
          SAPLANE	WEIGHT	 	 	Weight of plane
          SAPLANE	WEI_UNIT	 	 	Maßeinheit Gewicht
          SAPLANE	WEI_UNIT	 	 	Mass unit of weight
          
          DB Table
          TABNAME	DDTEXT
          SBOOK	Single Flight Booking
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SBOOK	AGENCYNUM	 	STRAVELAG	Nummer des Reisebüros
          SBOOK	AGENCYNUM	 	STRAVELAG	Travel Agency Number
          SBOOK	BOOKID	X	 	Buchungsnummer
          SBOOK	BOOKID	X	 	Booking number
          SBOOK	CANCELLED	 	 	Stornierungskennzeichen
          SBOOK	CANCELLED	 	 	Cancelation flag
          SBOOK	CARRID	X	SCARR	Kurzbezeichnung der Fluggesellschaft
          SBOOK	CARRID	X	SCARR	Airline Code
          SBOOK	CLASS	 	 	Flugklasse
          SBOOK	CLASS	 	 	Flight Class
          SBOOK	CONNID	X	SPFLI	Code der Einzelflugverbindung
          SBOOK	CONNID	X	SPFLI	Flight Connection Number
          SBOOK	COUNTER	 	SCOUNTER	Nummer der Verkaufsstelle
          SBOOK	COUNTER	 	SCOUNTER	Number of sales office
          SBOOK	CUSTOMID	 	SCUSTOM	Flugkundennummer
          SBOOK	CUSTOMID	 	SCUSTOM	Customer Number
          SBOOK	CUSTTYPE	 	 	Kundentyp
          SBOOK	CUSTTYPE	 	 	Customer type
          SBOOK	FLDATE	X	SFLIGHT	Flugdatum
          SBOOK	FLDATE	X	SFLIGHT	Flight date
          SBOOK	FORCURAM	 	 	Preis der Buchung in Fremdwährung (abhängig vom Buch.-Ort)
          SBOOK	FORCURAM	 	 	Booking price in foreign currency (dependent on location)
          SBOOK	FORCURKEY	 	SCURX	Zahlungswährung
          SBOOK	FORCURKEY	 	SCURX	Payment currency
          SBOOK	INVOICE	 	 	Rechnungsstellung
          SBOOK	INVOICE	 	 	Invoice flag
          SBOOK	LOCCURAM	 	 	Preis der Buchung in Hauswährung der Fluggesellschaft
          SBOOK	LOCCURAM	 	 	Price of booking in local currency of airline
          SBOOK	LOCCURKEY	 	SCURX	Hauswährung der Fluggesellschaft
          SBOOK	LOCCURKEY	 	SCURX	Local currency of airline
          SBOOK	LUGGWEIGHT	 	 	Gewicht des Fluggepäcks
          SBOOK	LUGGWEIGHT	 	 	Weight of Luggage
          SBOOK	MANDT	X	T000	Mandant
          SBOOK	MANDT	X	T000	Client
          SBOOK	ORDER_DATE	 	 	Buchungsdatum
          SBOOK	ORDER_DATE	 	 	Booking Date
          SBOOK	PASSBIRTH	 	*	Geburtsdatum eines Passagiers
          SBOOK	PASSBIRTH	 	*	Date of Birth of a Passenger
          SBOOK	PASSFORM	 	 	Anrede
          SBOOK	PASSFORM	 	 	Form of address
          SBOOK	PASSNAME	 	 	Name des Passagiers
          SBOOK	PASSNAME	 	 	Name of the Passenger
          SBOOK	RESERVED	 	 	Reservierungskennzeichen
          SBOOK	RESERVED	 	 	Reservation flag
          SBOOK	SMOKER	 	 	Raucherplatz
          SBOOK	SMOKER	 	 	Smoker
          SBOOK	WUNIT	 	T006	Gewichtseinheit
          SBOOK	WUNIT	 	T006	Weight Unit
          
          DB Table
          TABNAME	DDTEXT
          SBUSPART	Airline Partner
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SBUSPART	BUSPARTNUM	X	 	Nummer des Fluggeschäftspartners
          SBUSPART	BUSPARTNUM	X	 	Flight Partner Number
          SBUSPART	BUSPATYP	 	 	Geschäftspartnerkennz. für WB Trainingsdatenmodell BC_Travel
          SBUSPART	BUSPATYP	 	 	Business partner ID number for training data model BC_Travel
          SBUSPART	CONTACT	 	 	Ansprechpartner für WB Trainingsdatenmodell BC_Travel
          SBUSPART	CONTACT	 	 	Contact person for Workbench training model BC_Travel
          SBUSPART	CONTPHONO	 	 	Telefonnummer eines Ansprechpartners
          SBUSPART	CONTPHONO	 	 	Telephone number of contact person
          SBUSPART	MANDANT	X	T000	Mandant
          SBUSPART	MANDANT	X	T000	Client
          
          DB Table
          TABNAME	DDTEXT
          SCARPLAN	Plane-airline assignment
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SCARPLAN	CARRID	X	SCARR	Kurzbezeichnung der Fluggesellschaft
          SCARPLAN	CARRID	X	SCARR	Airline Code
          SCARPLAN	MANDT	X	T000	Mandant
          SCARPLAN	MANDT	X	T000	Client
          SCARPLAN	PLANETYPE	X	SAPLANE	Flugzeugtyp
          SCARPLAN	PLANETYPE	X	SAPLANE	Aircraft Type
          SCARPLAN	SNUMBER	 	 	Anzahl Flugzeuge
          SCARPLAN	SNUMBER	 	 	Number of flights
          
          DB Table
          TABNAME	DDTEXT
          SCARR	Airline
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SCARR	CARRID	X	 	Kurzbezeichnung der Fluggesellschaft
          SCARR	CARRID	X	 	Airline Code
          SCARR	CARRNAME	 	 	Name einer Fluggesellschaft
          SCARR	CARRNAME	 	 	Airline name
          SCARR	CURRCODE	 	SCURX	Hauswährung der Fluggesellschaft
          SCARR	CURRCODE	 	SCURX	Local currency of airline
          SCARR	MANDT	X	T000	Mandant
          SCARR	MANDT	X	T000	Client
          SCARR	URL	 	 	URL einer Fluggesellschaft
          SCARR	URL	 	 	Airline URL
          
          DB Table
          TABNAME	DDTEXT
          SCITAIRP	City-Airport assignment
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SCITAIRP	AIRPORT	X	SAIRPORT	Code des Flughafens
          SCITAIRP	AIRPORT	X	SAIRPORT	Airport Code
          SCITAIRP	CITY	X	SGEOCITY	Ort
          SCITAIRP	CITY	X	SGEOCITY	City
          SCITAIRP	COUNTRY	X	SGEOCITY	Länderschlüssel
          SCITAIRP	COUNTRY	X	SGEOCITY	Country Key
          SCITAIRP	MANDANT	X	T000	Mandant
          SCITAIRP	MANDANT	X	T000	Client
          SCITAIRP	MASTERCITY	 	SGEOCITY	Ort
          SCITAIRP	MASTERCITY	 	SGEOCITY	City
          
          DB Table
          TABNAME	DDTEXT
          SCOUNTER	Sales counter
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SCOUNTER	AIRPORT	 	SAIRPORT	Code des Flughafens
          SCOUNTER	AIRPORT	 	SAIRPORT	Airport Code
          SCOUNTER	CARRID	X	SCARR	Kurzbezeichnung der Fluggesellschaft
          SCOUNTER	CARRID	X	SCARR	Airline Code
          SCOUNTER	COUNTNUM	X	 	Nummer der Verkaufsstelle
          SCOUNTER	COUNTNUM	X	 	Number of sales office
          SCOUNTER	MANDT	X	T000	Mandant
          SCOUNTER	MANDT	X	T000	Client
          
          DB Table
          TABNAME	DDTEXT
          SCPLANE	Cargo Plane
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SCPLANE	CARGOMAX	 	 	Maximaler Frachtraum
          SCPLANE	CARGOMAX	 	 	Maximum freight space
          SCPLANE	CAR_UNIT	 	 	Maß für Frachtraum
          SCPLANE	CAR_UNIT	 	 	Mass unit freight space
          SCPLANE	MANDT	X	T000	Mandant
          SCPLANE	MANDT	X	T000	Client
          SCPLANE	PLANETYPE	X	SAPLANE	Typbezeichnung eines Frachtflugzeugs
          SCPLANE	PLANETYPE	X	SAPLANE	Type of cargo plane
          
          DB Table
          TABNAME	DDTEXT
          SCURR	Exchange rates for Workbench training model BC_Travel
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SCURR	FCURR	X	*	Von-Währung
          SCURR	FCURR	X	*	From currency
          SCURR	FFACT	 	 	Faktor für die Einheiten der Von-Währung
          SCURR	FFACT	 	 	Ratio for the "from" currency units
          SCURR	GDATU	X	 	Datum, ab dem der Kurs gültig ist
          SCURR	GDATU	X	 	Date As of Which the Exchange Rate Is Effective
          SCURR	KURST	X	*	Kurstyp
          SCURR	KURST	X	*	Exchange rate type
          SCURR	MANDT	X	T000	Mandant
          SCURR	MANDT	X	T000	Client
          SCURR	TCURR	X	*	Nach-Währung
          SCURR	TCURR	X	*	To-currency
          SCURR	TFACT	 	 	Faktor für die Einheiten der Nach-Währung
          SCURR	TFACT	 	 	Ratio for the "to" currency units
          SCURR	UKURS	 	 	Umrechnungskurs
          SCURR	UKURS	 	 	Exchange Rate
          
          DB Table
          TABNAME	DDTEXT
          SCURX	Currency for Workbench training data model BC_Travel
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SCURX	CURRDEC	 	 	Anzahl Dezimalstellen
          SCURX	CURRDEC	 	 	Number of decimal places
          SCURX	CURRKEY	X	 	Zahlungswährung
          SCURX	CURRKEY	X	 	Payment currency
          
          DB Table
          TABNAME	DDTEXT
          SCUSTOM	Flight customers
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SCUSTOM	CITY	 	 	Ort
          SCUSTOM	CITY	 	 	City
          SCUSTOM	COUNTRY	 	 	Länderkennzeichen
          SCUSTOM	COUNTRY	 	 	Country Code
          SCUSTOM	CUSTTYPE	 	 	Kundentyp
          SCUSTOM	CUSTTYPE	 	 	Customer type
          SCUSTOM	DISCOUNT	 	 	Rabattsatz
          SCUSTOM	DISCOUNT	 	 	Discount rate
          SCUSTOM	EMAIL	 	 	E-Mail-Adresse eines Flugkunden
          SCUSTOM	EMAIL	 	 	Customer e-mail address
          SCUSTOM	FORM	 	 	Anrede
          SCUSTOM	FORM	 	 	Form of address
          SCUSTOM	ID	X	SBUSPART	Flugkundennummer
          SCUSTOM	ID	X	SBUSPART	Customer Number
          SCUSTOM	LANGU	 	T002	Sprachenschlüssel
          SCUSTOM	LANGU	 	T002	Language Key
          SCUSTOM	MANDT	X	T000	Mandant
          SCUSTOM	MANDT	X	T000	Client
          SCUSTOM	NAME	 	 	Name des Flugkunden
          SCUSTOM	NAME	 	 	Customer name
          SCUSTOM	POSTBOX	 	 	Postfach
          SCUSTOM	POSTBOX	 	 	PO Box
          SCUSTOM	POSTCODE	 	 	Postleitzahl
          SCUSTOM	POSTCODE	 	 	Postal Code
          SCUSTOM	REGION	 	 	Region
          SCUSTOM	REGION	 	 	Region
          SCUSTOM	STREET	 	 	Straße
          SCUSTOM	STREET	 	 	Street
          SCUSTOM	TELEPHONE	 	 	Telefonnummer eines Flugkunden
          SCUSTOM	TELEPHONE	 	 	Telephone number of flight customer
          SCUSTOM	WEBUSER	 	 	Webusername für Flugkunden
          SCUSTOM	WEBUSER	 	 	Web user name for customer
          
          DB Table
          TABNAME	DDTEXT
          SDESSERT	Inflight meal/Dessert
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SDESSERT	CARRID	X	SCARR	Kurzbezeichnung der Fluggesellschaft
          SDESSERT	CARRID	X	SCARR	Airline Code
          SDESSERT	HOT	 	 	Flag, ob eine Vorspeise kalt oder warm serviert wird
          SDESSERT	HOT	 	 	Is dessert served hot or cold?
          SDESSERT	MANDANT	X	T000	Mandant
          SDESSERT	MANDANT	X	T000	Client
          SDESSERT	MEALNUMBER	X	SMEAL	Nachspeise eines Menues
          SDESSERT	MEALNUMBER	X	SMEAL	Dessert from menu
          
          DB Table
          TABNAME	DDTEXT
          SFLIGHT	Flight
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SFLIGHT	CARRID	X	SCARR	Kurzbezeichnung der Fluggesellschaft
          SFLIGHT	CARRID	X	SCARR	Airline Code
          SFLIGHT	CONNID	X	SPFLI	Code der Einzelflugverbindung
          SFLIGHT	CONNID	X	SPFLI	Flight Connection Number
          SFLIGHT	CURRENCY	 	SCURX	Hauswährung der Fluggesellschaft
          SFLIGHT	CURRENCY	 	SCURX	Local currency of airline
          SFLIGHT	FLDATE	X	 	Flugdatum
          SFLIGHT	FLDATE	X	 	Flight date
          SFLIGHT	MANDT	X	T000	Mandant
          SFLIGHT	MANDT	X	T000	Client
          SFLIGHT	PAYMENTSUM	 	 	Summe der bisherigen Buchungseinnahmen
          SFLIGHT	PAYMENTSUM	 	 	Total of current bookings
          SFLIGHT	PLANETYPE	 	SAPLANE	Flugzeugtyp
          SFLIGHT	PLANETYPE	 	SAPLANE	Aircraft Type
          SFLIGHT	PRICE	 	 	Flugpreis
          SFLIGHT	PRICE	 	 	Airfare
          SFLIGHT	SEATSMAX	 	 	Maximale Belegung Economy Class
          SFLIGHT	SEATSMAX	 	 	Maximum capacity in economy class
          SFLIGHT	SEATSMAX_B	 	 	Maximale Belegung Business Class
          SFLIGHT	SEATSMAX_B	 	 	Maximum capacity in business class
          SFLIGHT	SEATSMAX_F	 	 	Maximale Belegung First Class
          SFLIGHT	SEATSMAX_F	 	 	Maximum capacity in first class
          SFLIGHT	SEATSOCC	 	 	Belegte Plätze Economy Class
          SFLIGHT	SEATSOCC	 	 	Occupied seats in economy class
          SFLIGHT	SEATSOCC_B	 	 	Belegte Plätze Business Class
          SFLIGHT	SEATSOCC_B	 	 	Occupied seats in business class
          SFLIGHT	SEATSOCC_F	 	 	Belegte Plätze First Class
          SFLIGHT	SEATSOCC_F	 	 	Occupied seats in first class
          
          DB Table
          TABNAME	DDTEXT
          SFLIMEAL	Flight-Meal assignment
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SFLIMEAL	CARRID	X	SCARR	Kurzbezeichnung der Fluggesellschaft
          SFLIMEAL	CARRID	X	SCARR	Airline Code
          SFLIMEAL	CONNID	X	SPFLI	Code der Einzelflugverbindung
          SFLIMEAL	CONNID	X	SPFLI	Flight Connection Number
          SFLIMEAL	MANDANT	X	T000	Mandant
          SFLIMEAL	MANDANT	X	T000	Client
          SFLIMEAL	MEALNUMBER	X	SMEAL	Nummer der Flugmahlzeit
          SFLIMEAL	MEALNUMBER	X	SMEAL	Number of inflight meals
          
          DB Table
          TABNAME	DDTEXT
          SFL_AUX	Internal Help Structure for Flight Booking
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SFL_AUX	EXT_CUST	 	 	Externer Flugkunde bei Flugbuchung
          SFL_AUX	EXT_CUST	 	 	External customer for flight booking
          SFL_AUX	TESTRUN	 	 	Umschalten auf Simulations-Modus bei schreibenden BAPIs
          SFL_AUX	TESTRUN	 	 	Switch to Simulation Session for Write BAPIs
          
          DB Table
          TABNAME	DDTEXT
          SGEOCITY	Geographical position of a city
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SGEOCITY	CITY	X	 	Ort
          SGEOCITY	CITY	X	 	City
          SGEOCITY	COUNTRY	X	*	Länderschlüssel
          SGEOCITY	COUNTRY	X	*	Country Key
          SGEOCITY	LATITUDE	 	 	Geogr. Breite
          SGEOCITY	LATITUDE	 	 	Latitude
          SGEOCITY	LONGITUDE	 	 	Geogr. Länge
          SGEOCITY	LONGITUDE	 	 	Longitude
          SGEOCITY	MANDT	X	T000	Mandant
          SGEOCITY	MANDT	X	T000	Client
          
          DB Table
          TABNAME	DDTEXT
          SMACOURSE	Inflight meal/Main course
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SMACOURSE	CARRID	X	SCARR	Kurzbezeichnung der Fluggesellschaft
          SMACOURSE	CARRID	X	SCARR	Airline Code
          SMACOURSE	MANDANT	X	T000	Mandant
          SMACOURSE	MANDANT	X	T000	Client
          SMACOURSE	MEALNUMBER	X	SMEAL	Hauptgang eines Menues
          SMACOURSE	MEALNUMBER	X	SMEAL	Main course
          
          DB Table
          TABNAME	DDTEXT
          SMEAL	Inflight Meal
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SMEAL	CARRID	X	SCARR	Kurzbezeichnung der Fluggesellschaft
          SMEAL	CARRID	X	SCARR	Airline Code
          SMEAL	MANDANT	X	T000	Mandant
          SMEAL	MANDANT	X	T000	Client
          SMEAL	MEALNUMBER	X	 	Nummer der Flugmahlzeit
          SMEAL	MEALNUMBER	X	 	Number of inflight meals
          SMEAL	MEALTYPE	 	 	Typ eines Gerichts, z.B. vegetarisch
          SMEAL	MEALTYPE	 	 	Type of dish, for example vegetarian
          
          DB Table
          TABNAME	DDTEXT
          SMEALT	Inflight meal/Description
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SMEALT	CARRID	X	SCARR	Kurzbezeichnung der Fluggesellschaft
          SMEALT	CARRID	X	SCARR	Airline Code
          SMEALT	MANDANT	X	T000	Mandant
          SMEALT	MANDANT	X	T000	Client
          SMEALT	MEALNUMBER	X	SMEAL	Nummer der Flugmahlzeit
          SMEALT	MEALNUMBER	X	SMEAL	Number of inflight meals
          SMEALT	SPRACHE	X	T002	Sprachenschlüssel
          SMEALT	SPRACHE	X	T002	Language Key
          SMEALT	TEXT	 	 	Beschreibung einer Mahlzeit
          SMEALT	TEXT	 	 	Meal description
          
          DB Table
          TABNAME	DDTEXT
          SMENU	Menu
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SMENU	CARRID	X	SCARR	Kurzbezeichnung der Fluggesellschaft
          SMENU	CARRID	X	SCARR	Airline Code
          SMENU	DESSERT	 	SDESSERT	Nachspeise eines Menues
          SMENU	DESSERT	 	SDESSERT	Dessert from menu
          SMENU	MAINCOURSE	 	SMACOURSE	Hauptgang eines Menues
          SMENU	MAINCOURSE	 	SMACOURSE	Main course
          SMENU	MANDANT	X	T000	Mandant
          SMENU	MANDANT	X	T000	Client
          SMENU	MENUNUMBER	X	 	Die Nummer eines Menues
          SMENU	MENUNUMBER	X	 	Menu number
          SMENU	STARTER	 	SSTARTER	Vorspeise eines Menues
          SMENU	STARTER	 	SSTARTER	Menu appetizer
          
          DB Table
          TABNAME	DDTEXT
          SNVOICE	Invoice
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SNVOICE	AMOUNT	 	 	Preis der Buchung in Hauswährung der Fluggesellschaft
          SNVOICE	AMOUNT	 	 	Price of booking in local currency of airline
          SNVOICE	ARCHIVE_	 	 	SAP interne Verwendung
          SNVOICE	ARCHIVE_	 	 	Internal SAP use
          SNVOICE	BOOKID	X	 	Buchungsnummer
          SNVOICE	BOOKID	X	 	Booking number
          SNVOICE	CARRID	X	SCARR	Kurzbezeichnung der Fluggesellschaft
          SNVOICE	CARRID	X	SCARR	Airline Code
          SNVOICE	CONNID	X	SPFLI	Code der Einzelflugverbindung
          SNVOICE	CONNID	X	SPFLI	Flight Connection Number
          SNVOICE	CURRENCY	 	SCURX	Hauswährung der Fluggesellschaft
          SNVOICE	CURRENCY	 	SCURX	Local currency of airline
          SNVOICE	CUSTOMID	X	SCUSTOM	Flugkundennummer
          SNVOICE	CUSTOMID	X	SCUSTOM	Customer Number
          SNVOICE	FLDATE	X	SFLIGHT	Flugdatum
          SNVOICE	FLDATE	X	SFLIGHT	Flight date
          SNVOICE	INSTNO	X	 	(Teil-) Rechnungsnummer
          SNVOICE	INSTNO	X	 	(Partial) invoice number
          SNVOICE	MANDT	X	T000	Mandant
          SNVOICE	MANDT	X	T000	Client
          SNVOICE	PAYMETH	 	 	Zahlungsart
          SNVOICE	PAYMETH	 	 	Payment method
          
          DB Table
          TABNAME	DDTEXT
          SPFLI	Flight schedule
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SPFLI	AIRPFROM	 	SAIRPORT	Abflughafen
          SPFLI	AIRPFROM	 	SAIRPORT	Departure airport
          SPFLI	AIRPTO	 	SAIRPORT	Zielflughafen
          SPFLI	AIRPTO	 	SAIRPORT	Destination airport
          SPFLI	ARRTIME	 	 	Ankunftzeit
          SPFLI	ARRTIME	 	 	Arrival time
          SPFLI	CARRID	X	SCARR	Kurzbezeichnung der Fluggesellschaft
          SPFLI	CARRID	X	SCARR	Airline Code
          SPFLI	CITYFROM	 	SGEOCITY	Abflugstadt
          SPFLI	CITYFROM	 	SGEOCITY	Departure city
          SPFLI	CITYTO	 	SGEOCITY	Ankunftstadt
          SPFLI	CITYTO	 	SGEOCITY	Arrival city
          SPFLI	CONNID	X	 	Code der Einzelflugverbindung
          SPFLI	CONNID	X	 	Flight Connection Number
          SPFLI	COUNTRYFR	 	SGEOCITY	Länderschlüssel
          SPFLI	COUNTRYFR	 	SGEOCITY	Country Key
          SPFLI	COUNTRYTO	 	SGEOCITY	Länderschlüssel
          SPFLI	COUNTRYTO	 	SGEOCITY	Country Key
          SPFLI	DEPTIME	 	 	Abflugzeit
          SPFLI	DEPTIME	 	 	Departure time
          SPFLI	DISTANCE	 	 	Entfernung
          SPFLI	DISTANCE	 	 	Distance
          SPFLI	DISTID	 	*	Maß der Entfernung
          SPFLI	DISTID	 	*	Mass unit of distance (kms, miles)
          SPFLI	FLTIME	 	 	Flugdauer
          SPFLI	FLTIME	 	 	Flight time
          SPFLI	FLTYPE	 	 	Flugtyp
          SPFLI	FLTYPE	 	 	Flight type
          SPFLI	MANDT	X	T000	Mandant
          SPFLI	MANDT	X	T000	Client
          SPFLI	PERIOD	 	 	Ankunft n Tage später
          SPFLI	PERIOD	 	 	Arrival n day(s) later
          
          DB Table
          TABNAME	DDTEXT
          SPPLANE	Passenger Plane
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SPPLANE	ANZ_NOTAUS	 	 	Anzahl der Notausgänge eines Passagierflugzeugs
          SPPLANE	ANZ_NOTAUS	 	 	Number of emergency exits on passenger plane
          SPPLANE	ANZ_PERS	 	 	Anzahl der benötigten Servicemitarbeiter eines Flugzeugs
          SPPLANE	ANZ_PERS	 	 	Number of service workers needed for airplane
          SPPLANE	ANZ_SBER	 	 	Anzahl der Servicebereiche eines Flugzeugs
          SPPLANE	ANZ_SBER	 	 	Number of service areas per plane
          SPPLANE	MANDT	X	T000	Mandant
          SPPLANE	MANDT	X	T000	Client
          SPPLANE	PLANETYPE	X	SAPLANE	Typbezeichnung eines Passagierflugzeugs
          SPPLANE	PLANETYPE	X	SAPLANE	Type of passenger plane
          
          DB Table
          TABNAME	DDTEXT
          SSTARTER	Inflight meal/Appetizer
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          SSTARTER	CARRID	X	SCARR	Kurzbezeichnung der Fluggesellschaft
          SSTARTER	CARRID	X	SCARR	Airline Code
          SSTARTER	HOT	 	 	Flag, ob eine Vorspeise kalt oder warm serviert wird
          SSTARTER	HOT	 	 	Is dessert served hot or cold?
          SSTARTER	MANDANT	X	T000	Mandant
          SSTARTER	MANDANT	X	T000	Client
          SSTARTER	MEALNUMBER	X	SMEAL	Vorspeise eines Menues
          SSTARTER	MEALNUMBER	X	SMEAL	Menu appetizer
          
          DB Table
          TABNAME	DDTEXT
          STICKET	Flight Ticket
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          STICKET	ARCHIVE_	 	 	SAP interne Verwendung
          STICKET	ARCHIVE_	 	 	Internal SAP use
          STICKET	BOOKID	X	SBOOK	Buchungsnummer
          STICKET	BOOKID	X	SBOOK	Booking number
          STICKET	CARRID	X	SCARR	Kurzbezeichnung der Fluggesellschaft
          STICKET	CARRID	X	SCARR	Airline Code
          STICKET	CONNID	X	SPFLI	Code der Einzelflugverbindung
          STICKET	CONNID	X	SPFLI	Flight Connection Number
          STICKET	CUSTOMID	X	SCUSTOM	Flugkundennummer
          STICKET	CUSTOMID	X	SCUSTOM	Customer Number
          STICKET	FLDATE	X	SFLIGHT	Flugdatum
          STICKET	FLDATE	X	SFLIGHT	Flight date
          STICKET	MANDT	X	T000	Mandant
          STICKET	MANDT	X	T000	Client
          STICKET	PLACE	 	 	Verwendungsort des Tickets
          STICKET	PLACE	 	 	Ticket use location
          STICKET	TICKET	X	 	Art des Tickets
          STICKET	TICKET	X	 	Ticket type
          
          DB Table
          TABNAME	DDTEXT
          STRAVELAG	Travel agency
          
          DB Table Fields
          TABNAME	FIELDNAME	KEYFLAG	CHECKTABLE	DDTEXT
          STRAVELAG	AGENCYNUM	X	SBUSPART	Nummer des Reisebüros
          STRAVELAG	AGENCYNUM	X	SBUSPART	Travel Agency Number
          STRAVELAG	CITY	 	 	Ort
          STRAVELAG	CITY	 	 	City
          STRAVELAG	COUNTRY	 	 	Länderkennzeichen
          STRAVELAG	COUNTRY	 	 	Country Code
          STRAVELAG	CURRENCY	 	*	Hauswährung des Reisebüros
          STRAVELAG	CURRENCY	 	*	Travel agency local currency
          STRAVELAG	LANGU	 	T002	Sprachenschlüssel
          STRAVELAG	LANGU	 	T002	Language Key
          STRAVELAG	MANDT	X	T000	Mandant
          STRAVELAG	MANDT	X	T000	Client
          STRAVELAG	NAME	 	 	Name des Reisebüros
          STRAVELAG	NAME	 	 	Travel agency name
          STRAVELAG	POSTBOX	 	 	Postfach
          STRAVELAG	POSTBOX	 	 	PO Box
          STRAVELAG	POSTCODE	 	 	Postleitzahl
          STRAVELAG	POSTCODE	 	 	Postal Code
          STRAVELAG	REGION	 	 	Region
          STRAVELAG	REGION	 	 	Region
          STRAVELAG	STREET	 	 	Straße
          STRAVELAG	STREET	 	 	Street
          STRAVELAG	TELEPHONE	 	 	Telefonnummer eines Flugkunden
          STRAVELAG	TELEPHONE	 	 	Telephone number of flight customer
          STRAVELAG	URL	 	 	URL zur Homepage des Reisebüros
          STRAVELAG	URL	 	 	Travel agency homepage URL
          `
        }
      default:
        return await SELECT.one.from(Entity.Personalities, personalityId);
    }

  }
}
