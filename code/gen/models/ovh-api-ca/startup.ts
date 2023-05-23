import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/startup.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Startup registration",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get startup status",
          "errors": [
            "Server::NoContent::StartupError",
            "Client::NotFound::StartupNotFound"
          ],
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:startup/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "startup.startup"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Register a startup",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:startup/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "startup.startup",
              "description": "Request Body",
              "fullType": "startup.startup",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/startup"
    }
  ],
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "nichandle.CountryEnum": {
      "description": "Countries a nichandle can choose",
      "enum": [
        "AC",
        "AD",
        "AE",
        "AF",
        "AG",
        "AI",
        "AL",
        "AM",
        "AO",
        "AQ",
        "AR",
        "AS",
        "AT",
        "AU",
        "AW",
        "AX",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BL",
        "BM",
        "BN",
        "BO",
        "BQ",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CC",
        "CD",
        "CF",
        "CG",
        "CH",
        "CI",
        "CK",
        "CL",
        "CM",
        "CN",
        "CO",
        "CR",
        "CU",
        "CV",
        "CW",
        "CX",
        "CY",
        "CZ",
        "DE",
        "DG",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EA",
        "EC",
        "EE",
        "EG",
        "EH",
        "ER",
        "ES",
        "ET",
        "FI",
        "FJ",
        "FK",
        "FM",
        "FO",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GF",
        "GG",
        "GH",
        "GI",
        "GL",
        "GM",
        "GN",
        "GP",
        "GQ",
        "GR",
        "GS",
        "GT",
        "GU",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "IC",
        "ID",
        "IE",
        "IL",
        "IM",
        "IN",
        "IO",
        "IQ",
        "IR",
        "IS",
        "IT",
        "JE",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KP",
        "KR",
        "KW",
        "KY",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MF",
        "MG",
        "MH",
        "MK",
        "ML",
        "MM",
        "MN",
        "MO",
        "MP",
        "MQ",
        "MR",
        "MS",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NC",
        "NE",
        "NF",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NU",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PF",
        "PG",
        "PH",
        "PK",
        "PL",
        "PM",
        "PN",
        "PR",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RE",
        "RO",
        "RS",
        "RU",
        "RW",
        "SA",
        "SB",
        "SC",
        "SD",
        "SE",
        "SG",
        "SH",
        "SI",
        "SJ",
        "SK",
        "SL",
        "SM",
        "SN",
        "SO",
        "SR",
        "SS",
        "ST",
        "SV",
        "SX",
        "SY",
        "SZ",
        "TA",
        "TC",
        "TD",
        "TF",
        "TG",
        "TH",
        "TJ",
        "TK",
        "TL",
        "TM",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "UM",
        "UNKNOWN",
        "US",
        "UY",
        "UZ",
        "VA",
        "VC",
        "VE",
        "VG",
        "VI",
        "VN",
        "VU",
        "WF",
        "WS",
        "XK",
        "YE",
        "YT",
        "ZA",
        "ZM",
        "ZW"
      ],
      "enumType": "string",
      "id": "CountryEnum",
      "namespace": "nichandle"
    },
    "startup.acceptanceStatusEnum": {
      "description": "Acceptance status",
      "enum": [
        "Advanced",
        "AdvancedHandOperated",
        "AdvancedQualified",
        "Banned",
        "Open",
        "Registered",
        "RegisteredQualified",
        "Rejected"
      ],
      "enumType": "string",
      "id": "acceptanceStatusEnum",
      "namespace": "startup"
    },
    "startup.awarnessEnum": {
      "description": "Where did you hear about OVHcloud",
      "enum": [
        "Email",
        "EmpactVenture",
        "Event",
        "Facebook",
        "InternetSearch",
        "LinkedIn",
        "OnlineAdvert",
        "Partner",
        "Twitter",
        "Website",
        "WordOfMouth"
      ],
      "enumType": "string",
      "id": "awarnessEnum",
      "namespace": "startup"
    },
    "startup.employeesNumberEnum": {
      "description": "employeesNumber",
      "enum": [
        "100To199",
        "10To19",
        "1Or2",
        "200To249",
        "20To49",
        "250To499",
        "3To5",
        "50To99",
        "6To9"
      ],
      "enumType": "string",
      "id": "employeesNumberEnum",
      "namespace": "startup"
    },
    "startup.infrastructureUsingEnum": {
      "description": "When do you plan to start using cloud infrastructure ? (months)",
      "enum": [
        "1To6",
        "6To12",
        "DontKnow",
        "Less1",
        "Over12"
      ],
      "enumType": "string",
      "id": "infrastructureUsingEnum",
      "namespace": "startup"
    },
    "startup.lastFundraisingEnum": {
      "description": "last Fundraising",
      "enum": [
        "Crowdfunding",
        "DontShare",
        "More",
        "No",
        "PreSeed",
        "Seed",
        "Series_A",
        "Series_B",
        "Series_C"
      ],
      "enumType": "string",
      "id": "lastFundraisingEnum",
      "namespace": "startup"
    },
    "startup.plannedFundRaisingEnum": {
      "description": "Planned Fund Raising",
      "enum": [
        "DontShare",
        "No",
        "Yes"
      ],
      "enumType": "string",
      "id": "plannedFundRaisingEnum",
      "namespace": "startup"
    },
    "startup.relatedIndustryEnum": {
      "description": "Society Industries",
      "enum": [
        "AI_Wholesale",
        "ARTISANAT",
        "ASP_SI_ITServices",
        "Accommodation_and_FoodServices",
        "Agriculture",
        "Agro_industry",
        "Art_Sport_Entertainment",
        "Automotive",
        "Banking",
        "Construction_and_Architecture",
        "Databases_Wholesale",
        "DigitalServices",
        "E_Retail",
        "EducationalServices",
        "Energy_and_Water",
        "Game_Wholesale",
        "HeadOffice",
        "Healthcare",
        "Host_the_Hoster_Wholesale",
        "Human_Resources",
        "IAASproviders_WebHosters_Data",
        "Life_Sciences",
        "Manufacturing_Industry",
        "Mining_Industry",
        "NonProfit",
        "Other_Services_Business",
        "Other_Services_Personal",
        "Others",
        "PublicSector",
        "Real_Estate",
        "Retail_and_Trade",
        "ScienceR&D",
        "Software Editors",
        "Storage_Wholesale",
        "TV_Media",
        "Telecommunication_Internet",
        "Transportation_Logistics",
        "Ventures_for_Good",
        "Virtualization_Wholesale",
        "WebAgencies"
      ],
      "enumType": "string",
      "id": "relatedIndustryEnum",
      "namespace": "startup"
    },
    "startup.relatedTechnologyEnum": {
      "description": "Related Technologies",
      "enum": [
        "3dPrinting",
        "API",
        "ArtificialIntelligence",
        "AugmentedReality",
        "BankingDataInfrastructure",
        "Big_Data",
        "Blockchain",
        "CRM_ERP",
        "Chatbot",
        "CloudGaming",
        "ContainersDockers",
        "CyberSecurity",
        "Drones",
        "ElearningPlatform",
        "GeoLocalization",
        "Healthcareinfrastructure",
        "IoT",
        "MachineLearningDeepLearning",
        "Marketplace",
        "MobileApplications",
        "Orchestration",
        "Other",
        "PredictiveAnalyticAlgorithms",
        "Robotics",
        "ScientificComputation",
        "Storage",
        "Streaming",
        "VirtualDesktop",
        "VirtualMachines",
        "VoIP"
      ],
      "enumType": "string",
      "id": "relatedTechnologyEnum",
      "namespace": "startup"
    },
    "startup.startup": {
      "description": "Startup Entity",
      "id": "startup",
      "namespace": "startup",
      "properties": {
        "acceptanceStatus": {
          "canBeNull": true,
          "description": "Acceptance Status",
          "fullType": "startup.acceptanceStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "startup.acceptanceStatusEnum"
        },
        "awarness": {
          "canBeNull": false,
          "description": "Where did you hear about OVHcloud",
          "fullType": "startup.awarnessEnum",
          "readOnly": false,
          "required": true,
          "type": "startup.awarnessEnum"
        },
        "company": {
          "canBeNull": false,
          "description": "Company information",
          "fullType": "startup.startup.company",
          "readOnly": false,
          "required": true,
          "type": "startup.startup.company"
        },
        "eventCode": {
          "canBeNull": true,
          "description": "Code given to startups during events or partnerships.",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "fundRaising": {
          "canBeNull": false,
          "description": "Fund raising info",
          "fullType": "startup.startup.fundRaising",
          "readOnly": false,
          "required": true,
          "type": "startup.startup.fundRaising"
        },
        "project": {
          "canBeNull": false,
          "description": "Project information",
          "fullType": "startup.startup.project",
          "readOnly": false,
          "required": true,
          "type": "startup.startup.project"
        }
      }
    },
    "startup.startup.company": {
      "description": "Company info",
      "id": "company",
      "namespace": "startup.startup",
      "properties": {
        "detail": {
          "canBeNull": true,
          "description": "Company detail",
          "fullType": "startup.startup.company.detail",
          "readOnly": false,
          "required": false,
          "type": "startup.startup.company.detail"
        },
        "employeesNumber": {
          "canBeNull": false,
          "description": "Number of employees",
          "fullType": "startup.employeesNumberEnum",
          "readOnly": false,
          "required": true,
          "type": "startup.employeesNumberEnum"
        },
        "incubator": {
          "canBeNull": true,
          "description": "Incubator",
          "fullType": "startup.startup.company.incubator",
          "readOnly": false,
          "required": false,
          "type": "startup.startup.company.incubator"
        },
        "name": {
          "canBeNull": false,
          "description": "Company Name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "relatedIndustry": {
          "canBeNull": false,
          "description": "Society Industries",
          "fullType": "startup.relatedIndustryEnum",
          "readOnly": false,
          "required": true,
          "type": "startup.relatedIndustryEnum"
        },
        "socialNetwork": {
          "canBeNull": true,
          "description": "Social Network info",
          "fullType": "startup.startup.company.socialNetwork",
          "readOnly": false,
          "required": false,
          "type": "startup.startup.company.socialNetwork"
        },
        "societyWebsite": {
          "canBeNull": false,
          "description": "Company website",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "startup.startup.company.detail": {
      "description": "Details that relates to the company",
      "id": "detail",
      "namespace": "startup.startup.company",
      "properties": {
        "creationdate": {
          "canBeNull": true,
          "description": "Creation date of the company, madatory if the company is created",
          "fullType": "date",
          "readOnly": false,
          "required": true,
          "type": "date"
        },
        "lastYearTurnover": {
          "canBeNull": true,
          "description": "Last 12mth turnover, madatory if the company is created",
          "fullType": "double",
          "readOnly": false,
          "required": true,
          "type": "double"
        },
        "vatNumber": {
          "canBeNull": true,
          "description": "vat number, madatory if the company is created",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "startup.startup.company.incubator": {
      "description": "Incubator infos",
      "id": "incubator",
      "namespace": "startup.startup.company",
      "properties": {
        "city": {
          "canBeNull": true,
          "description": "Ecosystem support city",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "country": {
          "canBeNull": true,
          "description": "Ecosystem support country",
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "required": true,
          "type": "nichandle.CountryEnum"
        },
        "name": {
          "canBeNull": true,
          "description": "Do you have startup ecosystem support from any of these",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "startup.startup.company.socialNetwork": {
      "description": "Company social networks",
      "id": "socialNetwork",
      "namespace": "startup.startup.company",
      "properties": {
        "linkedin": {
          "canBeNull": true,
          "description": "Linkedin link",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "twitter": {
          "canBeNull": true,
          "description": "Twitter link",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "startup.startup.fundRaising": {
      "description": "Fundraising infos",
      "id": "fundRaising",
      "namespace": "startup.startup",
      "properties": {
        "lastFundraising": {
          "canBeNull": false,
          "description": "Last fundraising",
          "fullType": "startup.lastFundraisingEnum",
          "readOnly": false,
          "required": true,
          "type": "startup.lastFundraisingEnum"
        },
        "plannedFundRaising": {
          "canBeNull": false,
          "description": "Next fundraising",
          "fullType": "startup.plannedFundRaisingEnum",
          "readOnly": false,
          "required": true,
          "type": "startup.plannedFundRaisingEnum"
        }
      }
    },
    "startup.startup.project": {
      "description": "Project info",
      "id": "project",
      "namespace": "startup.startup",
      "properties": {
        "businessModel": {
          "canBeNull": false,
          "description": "Describe your business model",
          "fullType": "text",
          "readOnly": false,
          "required": true,
          "type": "text"
        },
        "description": {
          "canBeNull": false,
          "description": "What problem are you solving",
          "fullType": "text",
          "readOnly": false,
          "required": true,
          "type": "text"
        },
        "developmentStage": {
          "canBeNull": false,
          "description": "Stage of development description",
          "fullType": "text",
          "readOnly": false,
          "required": true,
          "type": "text"
        },
        "productName": {
          "canBeNull": false,
          "description": "Product / Solution name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "relatedTechnology": {
          "canBeNull": false,
          "description": "Fund raising info",
          "fullType": "startup.relatedTechnologyEnum[]",
          "readOnly": false,
          "required": true,
          "type": "startup.relatedTechnologyEnum[]"
        },
        "requirements": {
          "canBeNull": false,
          "description": "Technical requirements description",
          "fullType": "startup.startup.project.technicalNeed",
          "readOnly": false,
          "required": true,
          "type": "startup.startup.project.technicalNeed"
        }
      }
    },
    "startup.startup.project.technicalNeed": {
      "description": "Project technical need info",
      "id": "technicalNeed",
      "namespace": "startup.startup.project",
      "properties": {
        "infrastructureUsing": {
          "canBeNull": false,
          "description": "When do you plan to start using cloud infrastructure?",
          "fullType": "startup.infrastructureUsingEnum",
          "readOnly": false,
          "required": true,
          "type": "startup.infrastructureUsingEnum"
        },
        "otherCloudProvider": {
          "canBeNull": true,
          "description": "Are you currently using another cloud provider",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "otherCloudProviderInfo": {
          "canBeNull": true,
          "description": "Other cloud provider info",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "technicalNeeds": {
          "canBeNull": false,
          "description": "Technical requirements description",
          "fullType": "text",
          "readOnly": false,
          "required": true,
          "type": "text"
        }
      }
    }
  },
  "resourcePath": "/startup"
}