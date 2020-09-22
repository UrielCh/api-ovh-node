import {Schema} from '../../src/schema';

// imported from https://ca.api.soyoustart.com:443/1.0/newAccount.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "All available countries for an ovh company and an ovh subsidiary",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "All available countries for an ovh company and an ovh subsidiary",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhCompanyEnum",
              "description": null,
              "fullType": "nichandle.OvhCompanyEnum",
              "name": "ovhCompany",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": null,
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.CountryEnum[]",
          "responseType": "nichandle.CountryEnum[]"
        }
      ],
      "path": "/newAccount/countries"
    },
    {
      "description": "Create a new OVH identifier",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new OVH identifier",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "address",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "area",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "birthCity",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "birthDay",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "city",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "companyNationalIdentificationNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "corporationType",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.CountryEnum",
              "description": null,
              "fullType": "nichandle.CountryEnum",
              "name": "country",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "fax",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "firstname",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "italianSDI",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.LanguageEnum",
              "description": null,
              "fullType": "nichandle.LanguageEnum",
              "name": "language",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.LegalFormEnum",
              "description": null,
              "fullType": "nichandle.LegalFormEnum",
              "name": "legalform",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "nationalIdentificationNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "organisation",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.OvhCompanyEnum",
              "description": null,
              "fullType": "nichandle.OvhCompanyEnum",
              "name": "ovhCompany",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": null,
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "phone",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.CountryEnum",
              "description": null,
              "fullType": "nichandle.CountryEnum",
              "name": "phoneCountry",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.GenderEnum",
              "description": null,
              "fullType": "nichandle.GenderEnum",
              "name": "sex",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "spareEmail",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "vat",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "zip",
              "paramType": "body",
              "required": false
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.NewAccountAndToken",
          "responseType": "nichandle.NewAccountAndToken"
        }
      ],
      "path": "/newAccount"
    },
    {
      "description": "All available areas for a given country",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "All available areas for a given country",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.CountryEnum",
              "description": null,
              "fullType": "nichandle.CountryEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        }
      ],
      "path": "/newAccount/area"
    },
    {
      "description": "Give all the rules to follow in order to create an OVH identifier",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Give all the rules to follow in order to create an OVH identifier",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.CountryEnum",
              "description": null,
              "fullType": "nichandle.CountryEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "nichandle.LegalFormEnum",
              "description": null,
              "fullType": "nichandle.LegalFormEnum",
              "name": "legalform",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "nichandle.OvhCompanyEnum",
              "description": null,
              "fullType": "nichandle.OvhCompanyEnum",
              "name": "ovhCompany",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": null,
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.CreationRules",
          "responseType": "nichandle.CreationRules"
        }
      ],
      "path": "/newAccount/creationRules"
    },
    {
      "description": "All available corporation types for a given country",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "All available corporation types for a given country",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.CountryEnum",
              "description": null,
              "fullType": "nichandle.CountryEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        }
      ],
      "path": "/newAccount/corporationType"
    },
    {
      "description": "All available legal forms for a given country",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "All available legal forms for a given country",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.CountryEnum",
              "description": null,
              "fullType": "nichandle.CountryEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        }
      ],
      "path": "/newAccount/legalform"
    },
    {
      "description": "Give all the rules to follow in order to create and update an OVH identifier",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Give all the rules to follow in order to create and update an OVH identifier",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.CreationRulesActionEnum",
              "description": null,
              "fullType": "nichandle.CreationRulesActionEnum",
              "name": "action",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "address",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "area",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "birthCity",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "birthDay",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "city",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "companyNationalIdentificationNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "corporationType",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.CountryEnum",
              "description": null,
              "fullType": "nichandle.CountryEnum",
              "name": "country",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "fax",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "firstname",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "italianSDI",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.LanguageEnum",
              "description": null,
              "fullType": "nichandle.LanguageEnum",
              "name": "language",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.LegalFormEnum",
              "description": null,
              "fullType": "nichandle.LegalFormEnum",
              "name": "legalform",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "nationalIdentificationNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "organisation",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.OvhCompanyEnum",
              "description": null,
              "fullType": "nichandle.OvhCompanyEnum",
              "name": "ovhCompany",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": null,
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "phone",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.CountryEnum",
              "description": null,
              "fullType": "nichandle.CountryEnum",
              "name": "phoneCountry",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.GenderEnum",
              "description": null,
              "fullType": "nichandle.GenderEnum",
              "name": "sex",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "spareEmail",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "vat",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "zip",
              "paramType": "body",
              "required": false
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.CreationRule[]",
          "responseType": "nichandle.CreationRule[]"
        }
      ],
      "path": "/newAccount/rules"
    },
    {
      "description": "Returns the contracts that governs the creation of an OVH identifier",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the contracts that governs the creation of an OVH identifier",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhCompanyEnum",
              "description": null,
              "fullType": "nichandle.OvhCompanyEnum",
              "name": "company",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": null,
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "subsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "order.Contract[]",
          "responseType": "order.Contract[]"
        }
      ],
      "path": "/newAccount/contracts"
    }
  ],
  "basePath": "https://ca.api.soyoustart.com/1.0",
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
    "nichandle.CreationRule": {
      "description": "Describe all rules for a given field",
      "id": "CreationRule",
      "namespace": "nichandle",
      "properties": {
        "defaultValue": {
          "canBeNull": true,
          "description": "Default value of the field",
          "type": "string"
        },
        "examples": {
          "canBeNull": true,
          "description": "Examples of values for the fields",
          "type": "string[]"
        },
        "fieldName": {
          "canBeNull": true,
          "description": "Name of the field",
          "type": "string"
        },
        "in": {
          "canBeNull": true,
          "description": "List of allowed values for the field",
          "type": "string[]"
        },
        "mandatory": {
          "canBeNull": false,
          "description": "Whether the field is mandatory",
          "type": "boolean"
        },
        "prefix": {
          "canBeNull": true,
          "description": "Prefix of the field value",
          "type": "string"
        },
        "regularExpression": {
          "canBeNull": true,
          "description": "Regular expression to validate the field value",
          "type": "string"
        }
      }
    },
    "nichandle.CreationRules": {
      "description": "Describe rules foreach field in order to create a nic",
      "id": "CreationRules",
      "namespace": "nichandle",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "area": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "birthCity": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "birthDay": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "city": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "companyNationalIdentificationNumber": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "corporationType": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "country": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "email": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "fax": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "firstname": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "italianSDI": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "language": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "legalform": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "name": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "nationalIdentificationNumber": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "organisation": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "ovhCompany": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "ovhSubsidiary": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "phone": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "phoneCountry": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "sex": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "spareEmail": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "vat": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        },
        "zip": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.CreationRule"
        }
      }
    },
    "nichandle.CreationRulesActionEnum": {
      "description": "Action a nichandle can perform on his account.",
      "enum": [
        "create",
        "update"
      ],
      "enumType": "string",
      "id": "CreationRulesActionEnum",
      "namespace": "nichandle"
    },
    "nichandle.GenderEnum": {
      "description": "All genders a person can choose",
      "enum": [
        "female",
        "male"
      ],
      "enumType": "string",
      "id": "GenderEnum",
      "namespace": "nichandle"
    },
    "nichandle.LanguageEnum": {
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
      "enumType": "string",
      "id": "LanguageEnum",
      "namespace": "nichandle"
    },
    "nichandle.LegalFormEnum": {
      "description": "Legal forms a nichandle can be registered as",
      "enum": [
        "administration",
        "association",
        "corporation",
        "individual",
        "other",
        "personalcorporation"
      ],
      "enumType": "string",
      "id": "LegalFormEnum",
      "namespace": "nichandle"
    },
    "nichandle.NewAccountAndToken": {
      "description": "Newly created OVH identifier and a login token for the API",
      "id": "NewAccountAndToken",
      "namespace": "nichandle",
      "properties": {
        "consumerKey": {
          "canBeNull": true,
          "description": null,
          "type": "string"
        },
        "ovhIdentifier": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        }
      }
    },
    "nichandle.OvhCompanyEnum": {
      "description": "OVH subsidiaries",
      "enum": [
        "kimsufi",
        "ovh",
        "soyoustart"
      ],
      "enumType": "string",
      "id": "OvhCompanyEnum",
      "namespace": "nichandle"
    },
    "nichandle.OvhSubsidiaryEnum": {
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
      "enumType": "string",
      "id": "OvhSubsidiaryEnum",
      "namespace": "nichandle"
    },
    "order.Contract": {
      "description": "A contract",
      "id": "Contract",
      "namespace": "order",
      "properties": {
        "content": {
          "canBeNull": false,
          "description": null,
          "type": "text"
        },
        "name": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        }
      }
    }
  },
  "resourcePath": "/newAccount"
}