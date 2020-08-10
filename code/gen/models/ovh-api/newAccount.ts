import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/newAccount",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "corporationType",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "phone",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "birthCity",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "language",
              "dataType": "nichandle.LanguageEnum",
              "paramType": "body",
              "fullType": "nichandle.LanguageEnum",
              "required": false,
              "description": ""
            },
            {
              "name": "companyNationalIdentificationNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "legalform",
              "dataType": "nichandle.LegalFormEnum",
              "paramType": "body",
              "fullType": "nichandle.LegalFormEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "phoneCountry",
              "dataType": "nichandle.CountryEnum",
              "paramType": "body",
              "fullType": "nichandle.CountryEnum",
              "required": false,
              "description": ""
            },
            {
              "name": "country",
              "dataType": "nichandle.CountryEnum",
              "paramType": "body",
              "fullType": "nichandle.CountryEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "firstname",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "zip",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "italianSDI",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "spareEmail",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "sex",
              "dataType": "nichandle.GenderEnum",
              "paramType": "body",
              "fullType": "nichandle.GenderEnum",
              "required": false,
              "description": ""
            },
            {
              "name": "vat",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "birthDay",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "body",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "area",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "city",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "ovhCompany",
              "dataType": "nichandle.OvhCompanyEnum",
              "paramType": "body",
              "fullType": "nichandle.OvhCompanyEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "organisation",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": ""
            },
            {
              "name": "nationalIdentificationNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "fax",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "address",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            }
          ],
          "responseType": "nichandle.NewAccountAndToken",
          "noAuthentication": true,
          "description": "Create a new OVH identifier"
        }
      ],
      "description": "Create a new OVH identifier"
    },
    {
      "path": "/newAccount/area",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "country",
              "dataType": "nichandle.CountryEnum",
              "paramType": "query",
              "fullType": "nichandle.CountryEnum",
              "required": true,
              "description": ""
            }
          ],
          "responseType": "string[]",
          "noAuthentication": true,
          "description": "All available areas for a given country"
        }
      ],
      "description": "All available areas for a given country"
    },
    {
      "path": "/newAccount/contracts",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "subsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "company",
              "dataType": "nichandle.OvhCompanyEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhCompanyEnum",
              "required": true,
              "description": ""
            }
          ],
          "responseType": "order.Contract[]",
          "noAuthentication": true,
          "description": "Returns the contracts that governs the creation of an OVH identifier"
        }
      ],
      "description": "Returns the contracts that governs the creation of an OVH identifier"
    },
    {
      "path": "/newAccount/corporationType",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "country",
              "dataType": "nichandle.CountryEnum",
              "paramType": "query",
              "fullType": "nichandle.CountryEnum",
              "required": true,
              "description": ""
            }
          ],
          "responseType": "string[]",
          "noAuthentication": true,
          "description": "All available corporation types for a given country"
        }
      ],
      "description": "All available corporation types for a given country"
    },
    {
      "path": "/newAccount/countries",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhCompany",
              "dataType": "nichandle.OvhCompanyEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhCompanyEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": ""
            }
          ],
          "responseType": "nichandle.CountryEnum[]",
          "noAuthentication": true,
          "description": "All available countries for an ovh company and an ovh subsidiary"
        }
      ],
      "description": "All available countries for an ovh company and an ovh subsidiary"
    },
    {
      "path": "/newAccount/creationRules",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhCompany",
              "dataType": "nichandle.OvhCompanyEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhCompanyEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "legalform",
              "dataType": "nichandle.LegalFormEnum",
              "paramType": "query",
              "fullType": "nichandle.LegalFormEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "country",
              "dataType": "nichandle.CountryEnum",
              "paramType": "query",
              "fullType": "nichandle.CountryEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": ""
            }
          ],
          "responseType": "nichandle.CreationRules",
          "noAuthentication": true,
          "description": "Give all the rules to follow in order to create an OVH identifier"
        }
      ],
      "description": "Give all the rules to follow in order to create an OVH identifier"
    },
    {
      "path": "/newAccount/legalform",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "country",
              "dataType": "nichandle.CountryEnum",
              "paramType": "query",
              "fullType": "nichandle.CountryEnum",
              "required": true,
              "description": ""
            }
          ],
          "responseType": "string[]",
          "noAuthentication": true,
          "description": "All available legal forms for a given country"
        }
      ],
      "description": "All available legal forms for a given country"
    },
    {
      "path": "/newAccount/rules",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "language",
              "dataType": "nichandle.LanguageEnum",
              "paramType": "body",
              "fullType": "nichandle.LanguageEnum",
              "required": false,
              "description": ""
            },
            {
              "name": "companyNationalIdentificationNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "city",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "spareEmail",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "country",
              "dataType": "nichandle.CountryEnum",
              "paramType": "body",
              "fullType": "nichandle.CountryEnum",
              "required": false,
              "description": ""
            },
            {
              "name": "action",
              "dataType": "nichandle.CreationRulesActionEnum",
              "paramType": "body",
              "fullType": "nichandle.CreationRulesActionEnum",
              "required": false,
              "description": ""
            },
            {
              "name": "italianSDI",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "phoneCountry",
              "dataType": "nichandle.CountryEnum",
              "paramType": "body",
              "fullType": "nichandle.CountryEnum",
              "required": false,
              "description": ""
            },
            {
              "name": "ovhCompany",
              "dataType": "nichandle.OvhCompanyEnum",
              "paramType": "body",
              "fullType": "nichandle.OvhCompanyEnum",
              "required": false,
              "description": ""
            },
            {
              "name": "nationalIdentificationNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "birthCity",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "firstname",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "sex",
              "dataType": "nichandle.GenderEnum",
              "paramType": "body",
              "fullType": "nichandle.GenderEnum",
              "required": false,
              "description": ""
            },
            {
              "name": "organisation",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "legalform",
              "dataType": "nichandle.LegalFormEnum",
              "paramType": "body",
              "fullType": "nichandle.LegalFormEnum",
              "required": false,
              "description": ""
            },
            {
              "name": "fax",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "corporationType",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "address",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "area",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "phone",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "zip",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "vat",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "body",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": false,
              "description": ""
            },
            {
              "name": "birthDay",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            }
          ],
          "responseType": "nichandle.CreationRule[]",
          "noAuthentication": true,
          "description": "Give all the rules to follow in order to create and update an OVH identifier"
        }
      ],
      "description": "Give all the rules to follow in order to create and update an OVH identifier"
    }
  ],
  "resourcePath": "/newAccount",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "nichandle.CountryEnum": {
      "id": "CountryEnum",
      "namespace": "nichandle",
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
      "enumType": "string"
    },
    "nichandle.CreationRule": {
      "id": "CreationRule",
      "namespace": "nichandle",
      "description": "Describe all rules for a given field",
      "properties": {
        "defaultValue": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Default value of the field",
          "required": false
        },
        "examples": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Examples of values for the fields",
          "required": false
        },
        "fieldName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of the field",
          "required": false
        },
        "in": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "List of allowed values for the field",
          "required": false
        },
        "mandatory": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether the field is mandatory",
          "required": true
        },
        "prefix": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Prefix of the field value",
          "required": false
        },
        "regularExpression": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Regular expression to validate the field value",
          "required": false
        }
      }
    },
    "nichandle.CreationRules": {
      "id": "CreationRules",
      "namespace": "nichandle",
      "description": "Describe rules foreach field in order to create a nic",
      "properties": {
        "address": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "area": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "birthCity": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "birthDay": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "city": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "companyNationalIdentificationNumber": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "corporationType": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "country": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "email": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "fax": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "firstname": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "italianSDI": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "language": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "legalform": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "name": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "nationalIdentificationNumber": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "organisation": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "ovhCompany": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "ovhSubsidiary": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "phone": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "phoneCountry": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "sex": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "spareEmail": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "vat": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "zip": {
          "type": "nichandle.CreationRule",
          "fullType": "nichandle.CreationRule",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "nichandle.CreationRulesActionEnum": {
      "id": "CreationRulesActionEnum",
      "namespace": "nichandle",
      "description": "Action a nichandle can perform on his account.",
      "enum": [
        "create",
        "update"
      ],
      "enumType": "string"
    },
    "nichandle.GenderEnum": {
      "id": "GenderEnum",
      "namespace": "nichandle",
      "description": "All genders a person can choose",
      "enum": [
        "female",
        "male"
      ],
      "enumType": "string"
    },
    "nichandle.LanguageEnum": {
      "id": "LanguageEnum",
      "namespace": "nichandle",
      "description": "Languages a nichandle can choose",
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
      "enumType": "string"
    },
    "nichandle.LegalFormEnum": {
      "id": "LegalFormEnum",
      "namespace": "nichandle",
      "description": "Legal forms a nichandle can be registered as",
      "enum": [
        "administration",
        "association",
        "corporation",
        "individual",
        "other",
        "personalcorporation"
      ],
      "enumType": "string"
    },
    "nichandle.NewAccountAndToken": {
      "id": "NewAccountAndToken",
      "namespace": "nichandle",
      "description": "Newly created OVH identifier and a login token for the API",
      "properties": {
        "consumerKey": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "ovhIdentifier": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "nichandle.OvhCompanyEnum": {
      "id": "OvhCompanyEnum",
      "namespace": "nichandle",
      "description": "OVH subsidiaries",
      "enum": [
        "kimsufi",
        "ovh",
        "soyoustart"
      ],
      "enumType": "string"
    },
    "nichandle.OvhSubsidiaryEnum": {
      "id": "OvhSubsidiaryEnum",
      "namespace": "nichandle",
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
      "enumType": "string"
    },
    "order.Contract": {
      "id": "Contract",
      "namespace": "order",
      "description": "A contract",
      "properties": {
        "content": {
          "type": "text",
          "fullType": "text",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    }
  }
}