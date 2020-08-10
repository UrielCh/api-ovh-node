import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apis": [
    {
      "operations": [
        {
          "noAuthentication": true,
          "responseFullType": "string[]",
          "parameters": [
            {
              "description": null,
              "required": true,
              "dataType": "nichandle.CountryEnum",
              "name": "country",
              "paramType": "query",
              "fullType": "nichandle.CountryEnum"
            }
          ],
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "All available legal forms for a given country",
          "resellerOnly": false,
          "httpMethod": "GET"
        }
      ],
      "path": "/newAccount/legalform",
      "description": "All available legal forms for a given country"
    },
    {
      "description": "All available countries for an ovh company and an ovh subsidiary",
      "path": "/newAccount/countries",
      "operations": [
        {
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhCompanyEnum",
              "name": "ovhCompany",
              "paramType": "query",
              "fullType": "nichandle.OvhCompanyEnum",
              "description": null,
              "required": true
            },
            {
              "required": true,
              "description": null,
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum"
            }
          ],
          "responseFullType": "nichandle.CountryEnum[]",
          "description": "All available countries for an ovh company and an ovh subsidiary",
          "resellerOnly": false,
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "nichandle.CountryEnum[]"
        }
      ]
    },
    {
      "operations": [
        {
          "noAuthentication": true,
          "parameters": [
            {
              "paramType": "query",
              "fullType": "nichandle.OvhCompanyEnum",
              "dataType": "nichandle.OvhCompanyEnum",
              "name": "ovhCompany",
              "required": true,
              "description": null
            },
            {
              "dataType": "nichandle.LegalFormEnum",
              "name": "legalform",
              "fullType": "nichandle.LegalFormEnum",
              "paramType": "query",
              "description": null,
              "required": true
            },
            {
              "dataType": "nichandle.CountryEnum",
              "name": "country",
              "fullType": "nichandle.CountryEnum",
              "paramType": "query",
              "description": null,
              "required": true
            },
            {
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": null
            }
          ],
          "responseFullType": "nichandle.CreationRules",
          "description": "Give all the rules to follow in order to create an OVH identifier",
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseType": "nichandle.CreationRules",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/newAccount/creationRules",
      "description": "Give all the rules to follow in order to create an OVH identifier"
    },
    {
      "path": "/newAccount/corporationType",
      "operations": [
        {
          "httpMethod": "GET",
          "description": "All available corporation types for a given country",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "parameters": [
            {
              "dataType": "nichandle.CountryEnum",
              "name": "country",
              "paramType": "query",
              "fullType": "nichandle.CountryEnum",
              "description": null,
              "required": true
            }
          ],
          "responseFullType": "string[]",
          "noAuthentication": true
        }
      ],
      "description": "All available corporation types for a given country"
    },
    {
      "path": "/newAccount/contracts",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Contract[]",
          "httpMethod": "GET",
          "resellerOnly": false,
          "description": "Returns the contracts that governs the creation of an OVH identifier",
          "responseFullType": "order.Contract[]",
          "parameters": [
            {
              "dataType": "nichandle.OvhCompanyEnum",
              "name": "company",
              "fullType": "nichandle.OvhCompanyEnum",
              "paramType": "query",
              "description": null,
              "required": true
            },
            {
              "description": null,
              "required": true,
              "name": "subsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query"
            }
          ],
          "noAuthentication": true
        }
      ],
      "description": "Returns the contracts that governs the creation of an OVH identifier"
    },
    {
      "description": "All available areas for a given country",
      "operations": [
        {
          "httpMethod": "GET",
          "description": "All available areas for a given country",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "responseFullType": "string[]",
          "parameters": [
            {
              "dataType": "nichandle.CountryEnum",
              "name": "country",
              "fullType": "nichandle.CountryEnum",
              "paramType": "query",
              "description": null,
              "required": true
            }
          ],
          "noAuthentication": true
        }
      ],
      "path": "/newAccount/area"
    },
    {
      "path": "/newAccount",
      "operations": [
        {
          "noAuthentication": true,
          "responseFullType": "nichandle.NewAccountAndToken",
          "parameters": [
            {
              "name": "language",
              "dataType": "nichandle.LanguageEnum",
              "fullType": "nichandle.LanguageEnum",
              "paramType": "body",
              "description": null,
              "required": false
            },
            {
              "description": null,
              "required": false,
              "dataType": "string",
              "name": "corporationType",
              "fullType": "string",
              "paramType": "body"
            },
            {
              "description": null,
              "required": false,
              "name": "city",
              "dataType": "string",
              "fullType": "string",
              "paramType": "body"
            },
            {
              "paramType": "body",
              "fullType": "string",
              "name": "zip",
              "dataType": "string",
              "required": false,
              "description": null
            },
            {
              "dataType": "string",
              "name": "organisation",
              "fullType": "string",
              "paramType": "body",
              "description": null,
              "required": false
            },
            {
              "required": false,
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "name": "italianSDI",
              "dataType": "string"
            },
            {
              "name": "phoneCountry",
              "dataType": "nichandle.CountryEnum",
              "fullType": "nichandle.CountryEnum",
              "paramType": "body",
              "description": null,
              "required": false
            },
            {
              "paramType": "body",
              "fullType": "string",
              "name": "spareEmail",
              "dataType": "string",
              "required": false,
              "description": null
            },
            {
              "name": "ovhCompany",
              "dataType": "nichandle.OvhCompanyEnum",
              "fullType": "nichandle.OvhCompanyEnum",
              "paramType": "body",
              "description": null,
              "required": true
            },
            {
              "dataType": "string",
              "name": "area",
              "fullType": "string",
              "paramType": "body",
              "description": null,
              "required": false
            },
            {
              "required": true,
              "description": null,
              "paramType": "body",
              "fullType": "nichandle.LegalFormEnum",
              "dataType": "nichandle.LegalFormEnum",
              "name": "legalform"
            },
            {
              "description": null,
              "required": false,
              "dataType": "string",
              "name": "phone",
              "fullType": "string",
              "paramType": "body"
            },
            {
              "required": true,
              "description": null,
              "paramType": "body",
              "fullType": "nichandle.CountryEnum",
              "name": "country",
              "dataType": "nichandle.CountryEnum"
            },
            {
              "dataType": "string",
              "name": "vat",
              "fullType": "string",
              "paramType": "body",
              "description": null,
              "required": false
            },
            {
              "required": false,
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "name": "name",
              "dataType": "string"
            },
            {
              "paramType": "body",
              "fullType": "string",
              "dataType": "string",
              "name": "nationalIdentificationNumber",
              "required": false,
              "description": null
            },
            {
              "required": true,
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "dataType": "string",
              "name": "email"
            },
            {
              "required": false,
              "description": null,
              "paramType": "body",
              "fullType": "nichandle.GenderEnum",
              "dataType": "nichandle.GenderEnum",
              "name": "sex"
            },
            {
              "paramType": "body",
              "fullType": "string",
              "dataType": "string",
              "name": "address",
              "required": false,
              "description": null
            },
            {
              "description": null,
              "required": true,
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "body"
            },
            {
              "required": false,
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "name": "companyNationalIdentificationNumber",
              "dataType": "string"
            },
            {
              "paramType": "body",
              "fullType": "string",
              "name": "birthCity",
              "dataType": "string",
              "required": false,
              "description": null
            },
            {
              "paramType": "body",
              "fullType": "string",
              "name": "fax",
              "dataType": "string",
              "required": false,
              "description": null
            },
            {
              "dataType": "string",
              "name": "firstname",
              "fullType": "string",
              "paramType": "body",
              "description": null,
              "required": false
            },
            {
              "description": null,
              "required": false,
              "name": "birthDay",
              "dataType": "string",
              "fullType": "string",
              "paramType": "body"
            }
          ],
          "responseType": "nichandle.NewAccountAndToken",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new OVH identifier",
          "resellerOnly": false,
          "httpMethod": "POST"
        }
      ],
      "description": "Create a new OVH identifier"
    },
    {
      "description": "Give all the rules to follow in order to create and update an OVH identifier",
      "operations": [
        {
          "resellerOnly": false,
          "description": "Give all the rules to follow in order to create and update an OVH identifier",
          "httpMethod": "POST",
          "responseType": "nichandle.CreationRule[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": true,
          "responseFullType": "nichandle.CreationRule[]",
          "parameters": [
            {
              "name": "italianSDI",
              "dataType": "string",
              "fullType": "string",
              "paramType": "body",
              "description": null,
              "required": false
            },
            {
              "paramType": "body",
              "fullType": "string",
              "dataType": "string",
              "name": "organisation",
              "required": false,
              "description": null
            },
            {
              "description": null,
              "required": false,
              "dataType": "string",
              "name": "zip",
              "fullType": "string",
              "paramType": "body"
            },
            {
              "description": null,
              "required": false,
              "dataType": "string",
              "name": "city",
              "fullType": "string",
              "paramType": "body"
            },
            {
              "description": null,
              "required": false,
              "dataType": "string",
              "name": "corporationType",
              "fullType": "string",
              "paramType": "body"
            },
            {
              "required": false,
              "description": null,
              "paramType": "body",
              "fullType": "nichandle.LanguageEnum",
              "dataType": "nichandle.LanguageEnum",
              "name": "language"
            },
            {
              "description": null,
              "required": false,
              "dataType": "nichandle.CreationRulesActionEnum",
              "name": "action",
              "fullType": "nichandle.CreationRulesActionEnum",
              "paramType": "body"
            },
            {
              "paramType": "body",
              "fullType": "nichandle.OvhCompanyEnum",
              "name": "ovhCompany",
              "dataType": "nichandle.OvhCompanyEnum",
              "required": false,
              "description": null
            },
            {
              "paramType": "body",
              "fullType": "nichandle.CountryEnum",
              "dataType": "nichandle.CountryEnum",
              "name": "phoneCountry",
              "required": false,
              "description": null
            },
            {
              "description": null,
              "required": false,
              "name": "spareEmail",
              "dataType": "string",
              "fullType": "string",
              "paramType": "body"
            },
            {
              "paramType": "body",
              "fullType": "nichandle.CountryEnum",
              "dataType": "nichandle.CountryEnum",
              "name": "country",
              "required": false,
              "description": null
            },
            {
              "description": null,
              "required": false,
              "dataType": "string",
              "name": "vat",
              "fullType": "string",
              "paramType": "body"
            },
            {
              "required": false,
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "name": "phone",
              "dataType": "string"
            },
            {
              "name": "legalform",
              "dataType": "nichandle.LegalFormEnum",
              "fullType": "nichandle.LegalFormEnum",
              "paramType": "body",
              "description": null,
              "required": false
            },
            {
              "dataType": "string",
              "name": "area",
              "fullType": "string",
              "paramType": "body",
              "description": null,
              "required": false
            },
            {
              "description": null,
              "required": false,
              "name": "birthCity",
              "dataType": "string",
              "fullType": "string",
              "paramType": "body"
            },
            {
              "dataType": "string",
              "name": "companyNationalIdentificationNumber",
              "fullType": "string",
              "paramType": "body",
              "description": null,
              "required": false
            },
            {
              "required": false,
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "dataType": "string",
              "name": "fax"
            },
            {
              "required": false,
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "dataType": "string",
              "name": "birthDay"
            },
            {
              "required": false,
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "name": "firstname",
              "dataType": "string"
            },
            {
              "paramType": "body",
              "fullType": "nichandle.GenderEnum",
              "dataType": "nichandle.GenderEnum",
              "name": "sex",
              "required": false,
              "description": null
            },
            {
              "description": null,
              "required": false,
              "dataType": "string",
              "name": "address",
              "fullType": "string",
              "paramType": "body"
            },
            {
              "required": false,
              "description": null,
              "paramType": "body",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary"
            },
            {
              "required": false,
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "name": "email",
              "dataType": "string"
            },
            {
              "paramType": "body",
              "fullType": "string",
              "name": "name",
              "dataType": "string",
              "required": false,
              "description": null
            },
            {
              "name": "nationalIdentificationNumber",
              "dataType": "string",
              "fullType": "string",
              "paramType": "body",
              "description": null,
              "required": false
            }
          ]
        }
      ],
      "path": "/newAccount/rules"
    }
  ],
  "basePath": "https://ca.api.soyoustart.com/1.0",
  "resourcePath": "/newAccount",
  "models": {
    "nichandle.NewAccountAndToken": {
      "properties": {
        "ovhIdentifier": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "consumerKey": {
          "description": null,
          "type": "string",
          "canBeNull": true
        }
      },
      "description": "Newly created OVH identifier and a login token for the API",
      "namespace": "nichandle",
      "id": "NewAccountAndToken"
    },
    "nichandle.OvhSubsidiaryEnum": {
      "enumType": "string",
      "description": "OVH subsidiaries",
      "enum": [
        "ASIA",
        "AU",
        "CA",
        "CZ",
        "DE",
        "ES",
        "EU",
        "FI",
        "FR",
        "GB",
        "IE",
        "IT",
        "LT",
        "MA",
        "NL",
        "PL",
        "PT",
        "QC",
        "SG",
        "SN",
        "TN",
        "US",
        "WE",
        "WS"
      ],
      "namespace": "nichandle",
      "id": "OvhSubsidiaryEnum"
    },
    "nichandle.LanguageEnum": {
      "id": "LanguageEnum",
      "namespace": "nichandle",
      "enum": [
        "cs_CZ",
        "de_DE",
        "en_AU",
        "en_CA",
        "en_GB",
        "en_IE",
        "en_US",
        "es_ES",
        "fi_FI",
        "fr_CA",
        "fr_FR",
        "fr_MA",
        "fr_SN",
        "fr_TN",
        "it_IT",
        "lt_LT",
        "nl_NL",
        "pl_PL",
        "pt_PT"
      ],
      "description": "Languages a nichandle can choose",
      "enumType": "string"
    },
    "order.Contract": {
      "description": "A contract",
      "namespace": "order",
      "properties": {
        "url": {
          "canBeNull": false,
          "type": "string",
          "description": null
        },
        "name": {
          "canBeNull": false,
          "type": "string",
          "description": null
        },
        "content": {
          "canBeNull": false,
          "type": "text",
          "description": null
        }
      },
      "id": "Contract"
    },
    "nichandle.OvhCompanyEnum": {
      "id": "OvhCompanyEnum",
      "description": "OVH subsidiaries",
      "enumType": "string",
      "enum": [
        "kimsufi",
        "ovh",
        "soyoustart"
      ],
      "namespace": "nichandle"
    },
    "nichandle.LegalFormEnum": {
      "id": "LegalFormEnum",
      "description": "Legal forms a nichandle can be registered as",
      "enumType": "string",
      "enum": [
        "administration",
        "association",
        "corporation",
        "individual",
        "other",
        "personalcorporation"
      ],
      "namespace": "nichandle"
    },
    "nichandle.GenderEnum": {
      "id": "GenderEnum",
      "namespace": "nichandle",
      "enum": [
        "female",
        "male"
      ],
      "description": "All genders a person can choose",
      "enumType": "string"
    },
    "nichandle.CountryEnum": {
      "namespace": "nichandle",
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
      "description": "Countries a nichandle can choose",
      "enumType": "string",
      "id": "CountryEnum"
    },
    "nichandle.CreationRule": {
      "id": "CreationRule",
      "properties": {
        "examples": {
          "canBeNull": true,
          "type": "string[]",
          "description": "Examples of values for the fields"
        },
        "in": {
          "canBeNull": true,
          "type": "string[]",
          "description": "List of allowed values for the field"
        },
        "fieldName": {
          "canBeNull": true,
          "type": "string",
          "description": "Name of the field"
        },
        "prefix": {
          "canBeNull": true,
          "description": "Prefix of the field value",
          "type": "string"
        },
        "mandatory": {
          "type": "boolean",
          "description": "Whether the field is mandatory",
          "canBeNull": false
        },
        "regularExpression": {
          "description": "Regular expression to validate the field value",
          "type": "string",
          "canBeNull": true
        },
        "defaultValue": {
          "type": "string",
          "description": "Default value of the field",
          "canBeNull": true
        }
      },
      "namespace": "nichandle",
      "description": "Describe all rules for a given field"
    },
    "nichandle.CreationRules": {
      "properties": {
        "ovhCompany": {
          "type": "nichandle.CreationRule",
          "description": null,
          "canBeNull": false
        },
        "spareEmail": {
          "description": null,
          "type": "nichandle.CreationRule",
          "canBeNull": false
        },
        "phoneCountry": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "italianSDI": {
          "type": "nichandle.CreationRule",
          "description": null,
          "canBeNull": false
        },
        "organisation": {
          "type": "nichandle.CreationRule",
          "description": null,
          "canBeNull": false
        },
        "zip": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "city": {
          "canBeNull": false,
          "type": "nichandle.CreationRule",
          "description": null
        },
        "corporationType": {
          "type": "nichandle.CreationRule",
          "description": null,
          "canBeNull": false
        },
        "language": {
          "canBeNull": false,
          "type": "nichandle.CreationRule",
          "description": null
        },
        "companyNationalIdentificationNumber": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "birthCity": {
          "canBeNull": false,
          "type": "nichandle.CreationRule",
          "description": null
        },
        "fax": {
          "description": null,
          "type": "nichandle.CreationRule",
          "canBeNull": false
        },
        "birthDay": {
          "canBeNull": false,
          "type": "nichandle.CreationRule",
          "description": null
        },
        "firstname": {
          "description": null,
          "type": "nichandle.CreationRule",
          "canBeNull": false
        },
        "sex": {
          "canBeNull": false,
          "type": "nichandle.CreationRule",
          "description": null
        },
        "address": {
          "description": null,
          "type": "nichandle.CreationRule",
          "canBeNull": false
        },
        "ovhSubsidiary": {
          "canBeNull": false,
          "type": "nichandle.CreationRule",
          "description": null
        },
        "email": {
          "description": null,
          "type": "nichandle.CreationRule",
          "canBeNull": false
        },
        "name": {
          "canBeNull": false,
          "type": "nichandle.CreationRule",
          "description": null
        },
        "nationalIdentificationNumber": {
          "description": null,
          "type": "nichandle.CreationRule",
          "canBeNull": false
        },
        "country": {
          "canBeNull": false,
          "type": "nichandle.CreationRule",
          "description": null
        },
        "vat": {
          "type": "nichandle.CreationRule",
          "description": null,
          "canBeNull": false
        },
        "phone": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "legalform": {
          "canBeNull": false,
          "type": "nichandle.CreationRule",
          "description": null
        },
        "area": {
          "description": null,
          "type": "nichandle.CreationRule",
          "canBeNull": false
        }
      },
      "namespace": "nichandle",
      "description": "Describe rules foreach field in order to create a nic",
      "id": "CreationRules"
    },
    "nichandle.CreationRulesActionEnum": {
      "id": "CreationRulesActionEnum",
      "description": "Action a nichandle can perform on his account.",
      "enumType": "string",
      "enum": [
        "create",
        "update"
      ],
      "namespace": "nichandle"
    }
  },
  "apiVersion": "1.0"
}