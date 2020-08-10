import {Schema} from '../../src/schema';

export const schema: Schema = {
  "resourcePath": "/newAccount",
  "apis": [
    {
      "description": "Returns the contracts that governs the creation of an OVH identifier",
      "path": "/newAccount/contracts",
      "operations": [
        {
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "company",
              "required": true,
              "paramType": "query",
              "fullType": "nichandle.OvhCompanyEnum",
              "description": null,
              "dataType": "nichandle.OvhCompanyEnum"
            },
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": null,
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "name": "subsidiary"
            }
          ],
          "noAuthentication": true,
          "responseFullType": "order.Contract[]",
          "description": "Returns the contracts that governs the creation of an OVH identifier",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseType": "order.Contract[]"
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "string[]",
          "resellerOnly": false,
          "description": "All available corporation types for a given country",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "string[]",
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "country",
              "required": true,
              "fullType": "nichandle.CountryEnum",
              "paramType": "query",
              "description": null,
              "dataType": "nichandle.CountryEnum"
            }
          ],
          "noAuthentication": true
        }
      ],
      "description": "All available corporation types for a given country",
      "path": "/newAccount/corporationType"
    },
    {
      "description": "Create a new OVH identifier",
      "path": "/newAccount",
      "operations": [
        {
          "responseType": "nichandle.NewAccountAndToken",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Create a new OVH identifier",
          "resellerOnly": false,
          "responseFullType": "nichandle.NewAccountAndToken",
          "noAuthentication": true,
          "parameters": [
            {
              "name": "organisation",
              "required": false,
              "fullType": "string",
              "paramType": "body",
              "description": null,
              "dataType": "string"
            },
            {
              "required": true,
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "description": null,
              "fullType": "string"
            },
            {
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "dataType": "string",
              "name": "italianSDI",
              "required": false
            },
            {
              "name": "country",
              "required": true,
              "fullType": "nichandle.CountryEnum",
              "paramType": "body",
              "description": null,
              "dataType": "nichandle.CountryEnum"
            },
            {
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "dataType": "string",
              "name": "corporationType",
              "required": false
            },
            {
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "description": null,
              "required": false,
              "name": "city"
            },
            {
              "required": false,
              "name": "vat",
              "dataType": "string",
              "paramType": "body",
              "description": null,
              "fullType": "string"
            },
            {
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "description": null,
              "required": false,
              "name": "area"
            },
            {
              "description": null,
              "paramType": "body",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "required": true
            },
            {
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "description": null,
              "required": false,
              "name": "address"
            },
            {
              "name": "spareEmail",
              "required": false,
              "fullType": "string",
              "paramType": "body",
              "description": null,
              "dataType": "string"
            },
            {
              "name": "firstname",
              "required": false,
              "fullType": "string",
              "paramType": "body",
              "description": null,
              "dataType": "string"
            },
            {
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "description": null,
              "required": false,
              "name": "phone"
            },
            {
              "name": "sex",
              "required": false,
              "fullType": "nichandle.GenderEnum",
              "paramType": "body",
              "description": null,
              "dataType": "nichandle.GenderEnum"
            },
            {
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "description": null,
              "required": false,
              "name": "companyNationalIdentificationNumber"
            },
            {
              "name": "nationalIdentificationNumber",
              "required": false,
              "fullType": "string",
              "paramType": "body",
              "description": null,
              "dataType": "string"
            },
            {
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "dataType": "string",
              "name": "zip",
              "required": false
            },
            {
              "name": "language",
              "required": false,
              "fullType": "nichandle.LanguageEnum",
              "paramType": "body",
              "description": null,
              "dataType": "nichandle.LanguageEnum"
            },
            {
              "name": "birthDay",
              "required": false,
              "fullType": "string",
              "paramType": "body",
              "description": null,
              "dataType": "string"
            },
            {
              "name": "phoneCountry",
              "required": false,
              "fullType": "nichandle.CountryEnum",
              "paramType": "body",
              "description": null,
              "dataType": "nichandle.CountryEnum"
            },
            {
              "dataType": "nichandle.OvhCompanyEnum",
              "paramType": "body",
              "fullType": "nichandle.OvhCompanyEnum",
              "description": null,
              "required": true,
              "name": "ovhCompany"
            },
            {
              "name": "name",
              "required": false,
              "fullType": "string",
              "paramType": "body",
              "description": null,
              "dataType": "string"
            },
            {
              "required": false,
              "name": "fax",
              "dataType": "string",
              "paramType": "body",
              "description": null,
              "fullType": "string"
            },
            {
              "dataType": "nichandle.LegalFormEnum",
              "paramType": "body",
              "fullType": "nichandle.LegalFormEnum",
              "description": null,
              "required": true,
              "name": "legalform"
            },
            {
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "description": null,
              "required": false,
              "name": "birthCity"
            }
          ],
          "httpMethod": "POST"
        }
      ]
    },
    {
      "description": "All available countries for an ovh company and an ovh subsidiary",
      "path": "/newAccount/countries",
      "operations": [
        {
          "parameters": [
            {
              "required": true,
              "name": "ovhCompany",
              "dataType": "nichandle.OvhCompanyEnum",
              "paramType": "query",
              "description": null,
              "fullType": "nichandle.OvhCompanyEnum"
            },
            {
              "description": null,
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "required": true
            }
          ],
          "httpMethod": "GET",
          "noAuthentication": true,
          "responseFullType": "nichandle.CountryEnum[]",
          "responseType": "nichandle.CountryEnum[]",
          "resellerOnly": false,
          "description": "All available countries for an ovh company and an ovh subsidiary",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ]
    },
    {
      "path": "/newAccount/area",
      "description": "All available areas for a given country",
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "All available areas for a given country",
          "resellerOnly": false,
          "responseType": "string[]",
          "responseFullType": "string[]",
          "noAuthentication": true,
          "parameters": [
            {
              "name": "country",
              "required": true,
              "fullType": "nichandle.CountryEnum",
              "paramType": "query",
              "description": null,
              "dataType": "nichandle.CountryEnum"
            }
          ],
          "httpMethod": "GET"
        }
      ]
    },
    {
      "description": "Give all the rules to follow in order to create and update an OVH identifier",
      "path": "/newAccount/rules",
      "operations": [
        {
          "responseType": "nichandle.CreationRule[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Give all the rules to follow in order to create and update an OVH identifier",
          "resellerOnly": false,
          "responseFullType": "nichandle.CreationRule[]",
          "noAuthentication": true,
          "httpMethod": "POST",
          "parameters": [
            {
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "dataType": "string",
              "name": "zip",
              "required": false
            },
            {
              "description": null,
              "paramType": "body",
              "fullType": "nichandle.LanguageEnum",
              "dataType": "nichandle.LanguageEnum",
              "name": "language",
              "required": false
            },
            {
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "description": null,
              "required": false,
              "name": "nationalIdentificationNumber"
            },
            {
              "required": false,
              "name": "action",
              "dataType": "nichandle.CreationRulesActionEnum",
              "paramType": "body",
              "description": null,
              "fullType": "nichandle.CreationRulesActionEnum"
            },
            {
              "name": "companyNationalIdentificationNumber",
              "required": false,
              "fullType": "string",
              "paramType": "body",
              "description": null,
              "dataType": "string"
            },
            {
              "dataType": "nichandle.OvhCompanyEnum",
              "paramType": "body",
              "fullType": "nichandle.OvhCompanyEnum",
              "description": null,
              "required": false,
              "name": "ovhCompany"
            },
            {
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "description": null,
              "required": false,
              "name": "birthDay"
            },
            {
              "description": null,
              "paramType": "body",
              "fullType": "nichandle.CountryEnum",
              "dataType": "nichandle.CountryEnum",
              "name": "phoneCountry",
              "required": false
            },
            {
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "description": null,
              "required": false,
              "name": "fax"
            },
            {
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "dataType": "string",
              "name": "name",
              "required": false
            },
            {
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "dataType": "string",
              "name": "birthCity",
              "required": false
            },
            {
              "required": false,
              "name": "legalform",
              "dataType": "nichandle.LegalFormEnum",
              "paramType": "body",
              "description": null,
              "fullType": "nichandle.LegalFormEnum"
            },
            {
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "dataType": "string",
              "name": "italianSDI",
              "required": false
            },
            {
              "required": false,
              "name": "country",
              "dataType": "nichandle.CountryEnum",
              "paramType": "body",
              "description": null,
              "fullType": "nichandle.CountryEnum"
            },
            {
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "dataType": "string",
              "name": "email",
              "required": false
            },
            {
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "description": null,
              "required": false,
              "name": "organisation"
            },
            {
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "dataType": "string",
              "name": "city",
              "required": false
            },
            {
              "name": "corporationType",
              "required": false,
              "fullType": "string",
              "paramType": "body",
              "description": null,
              "dataType": "string"
            },
            {
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "dataType": "string",
              "name": "firstname",
              "required": false
            },
            {
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "dataType": "string",
              "name": "spareEmail",
              "required": false
            },
            {
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "dataType": "string",
              "name": "address",
              "required": false
            },
            {
              "description": null,
              "paramType": "body",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "required": false
            },
            {
              "description": null,
              "paramType": "body",
              "fullType": "string",
              "dataType": "string",
              "name": "vat",
              "required": false
            },
            {
              "required": false,
              "name": "area",
              "dataType": "string",
              "paramType": "body",
              "description": null,
              "fullType": "string"
            },
            {
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "description": null,
              "required": false,
              "name": "phone"
            },
            {
              "name": "sex",
              "required": false,
              "fullType": "nichandle.GenderEnum",
              "paramType": "body",
              "description": null,
              "dataType": "nichandle.GenderEnum"
            }
          ]
        }
      ]
    },
    {
      "operations": [
        {
          "noAuthentication": true,
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "country",
              "required": true,
              "fullType": "nichandle.CountryEnum",
              "paramType": "query",
              "description": null,
              "dataType": "nichandle.CountryEnum"
            }
          ],
          "responseType": "string[]",
          "description": "All available legal forms for a given country",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "string[]"
        }
      ],
      "path": "/newAccount/legalform",
      "description": "All available legal forms for a given country"
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "dataType": "nichandle.CountryEnum",
              "paramType": "query",
              "fullType": "nichandle.CountryEnum",
              "description": null,
              "required": true,
              "name": "country"
            },
            {
              "required": true,
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "description": null,
              "fullType": "nichandle.OvhSubsidiaryEnum"
            },
            {
              "dataType": "nichandle.LegalFormEnum",
              "paramType": "query",
              "fullType": "nichandle.LegalFormEnum",
              "description": null,
              "required": true,
              "name": "legalform"
            },
            {
              "dataType": "nichandle.OvhCompanyEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhCompanyEnum",
              "description": null,
              "required": true,
              "name": "ovhCompany"
            }
          ],
          "httpMethod": "GET",
          "noAuthentication": true,
          "responseFullType": "nichandle.CreationRules",
          "responseType": "nichandle.CreationRules",
          "description": "Give all the rules to follow in order to create an OVH identifier",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false
        }
      ],
      "path": "/newAccount/creationRules",
      "description": "Give all the rules to follow in order to create an OVH identifier"
    }
  ],
  "apiVersion": "1.0",
  "basePath": "https://ca.api.kimsufi.com/1.0",
  "models": {
    "nichandle.GenderEnum": {
      "enum": [
        "female",
        "male"
      ],
      "id": "GenderEnum",
      "namespace": "nichandle",
      "description": "All genders a person can choose",
      "enumType": "string"
    },
    "nichandle.CreationRulesActionEnum": {
      "id": "CreationRulesActionEnum",
      "enum": [
        "create",
        "update"
      ],
      "enumType": "string",
      "namespace": "nichandle",
      "description": "Action a nichandle can perform on his account."
    },
    "nichandle.CreationRules": {
      "properties": {
        "fax": {
          "description": null,
          "type": "nichandle.CreationRule",
          "canBeNull": false
        },
        "name": {
          "description": null,
          "type": "nichandle.CreationRule",
          "canBeNull": false
        },
        "birthCity": {
          "type": "nichandle.CreationRule",
          "canBeNull": false,
          "description": null
        },
        "legalform": {
          "type": "nichandle.CreationRule",
          "canBeNull": false,
          "description": null
        },
        "language": {
          "canBeNull": false,
          "type": "nichandle.CreationRule",
          "description": null
        },
        "zip": {
          "canBeNull": false,
          "type": "nichandle.CreationRule",
          "description": null
        },
        "companyNationalIdentificationNumber": {
          "description": null,
          "type": "nichandle.CreationRule",
          "canBeNull": false
        },
        "nationalIdentificationNumber": {
          "description": null,
          "type": "nichandle.CreationRule",
          "canBeNull": false
        },
        "ovhCompany": {
          "canBeNull": false,
          "type": "nichandle.CreationRule",
          "description": null
        },
        "phoneCountry": {
          "type": "nichandle.CreationRule",
          "canBeNull": false,
          "description": null
        },
        "birthDay": {
          "description": null,
          "type": "nichandle.CreationRule",
          "canBeNull": false
        },
        "spareEmail": {
          "type": "nichandle.CreationRule",
          "canBeNull": false,
          "description": null
        },
        "firstname": {
          "canBeNull": false,
          "type": "nichandle.CreationRule",
          "description": null
        },
        "area": {
          "canBeNull": false,
          "type": "nichandle.CreationRule",
          "description": null
        },
        "vat": {
          "description": null,
          "type": "nichandle.CreationRule",
          "canBeNull": false
        },
        "ovhSubsidiary": {
          "description": null,
          "type": "nichandle.CreationRule",
          "canBeNull": false
        },
        "address": {
          "type": "nichandle.CreationRule",
          "canBeNull": false,
          "description": null
        },
        "phone": {
          "canBeNull": false,
          "type": "nichandle.CreationRule",
          "description": null
        },
        "sex": {
          "canBeNull": false,
          "type": "nichandle.CreationRule",
          "description": null
        },
        "organisation": {
          "description": null,
          "canBeNull": false,
          "type": "nichandle.CreationRule"
        },
        "email": {
          "description": null,
          "type": "nichandle.CreationRule",
          "canBeNull": false
        },
        "italianSDI": {
          "description": null,
          "type": "nichandle.CreationRule",
          "canBeNull": false
        },
        "country": {
          "canBeNull": false,
          "type": "nichandle.CreationRule",
          "description": null
        },
        "city": {
          "type": "nichandle.CreationRule",
          "canBeNull": false,
          "description": null
        },
        "corporationType": {
          "description": null,
          "type": "nichandle.CreationRule",
          "canBeNull": false
        }
      },
      "id": "CreationRules",
      "namespace": "nichandle",
      "description": "Describe rules foreach field in order to create a nic"
    },
    "nichandle.OvhCompanyEnum": {
      "id": "OvhCompanyEnum",
      "enum": [
        "kimsufi",
        "ovh",
        "soyoustart"
      ],
      "description": "OVH subsidiaries",
      "namespace": "nichandle",
      "enumType": "string"
    },
    "nichandle.LanguageEnum": {
      "enumType": "string",
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
      "id": "LanguageEnum"
    },
    "nichandle.LegalFormEnum": {
      "namespace": "nichandle",
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
      "id": "LegalFormEnum"
    },
    "nichandle.NewAccountAndToken": {
      "properties": {
        "consumerKey": {
          "description": null,
          "canBeNull": true,
          "type": "string"
        },
        "ovhIdentifier": {
          "description": null,
          "canBeNull": false,
          "type": "string"
        }
      },
      "id": "NewAccountAndToken",
      "namespace": "nichandle",
      "description": "Newly created OVH identifier and a login token for the API"
    },
    "nichandle.OvhSubsidiaryEnum": {
      "id": "OvhSubsidiaryEnum",
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
      "description": "OVH subsidiaries",
      "namespace": "nichandle"
    },
    "nichandle.CreationRule": {
      "id": "CreationRule",
      "properties": {
        "prefix": {
          "type": "string",
          "canBeNull": true,
          "description": "Prefix of the field value"
        },
        "mandatory": {
          "description": "Whether the field is mandatory",
          "canBeNull": false,
          "type": "boolean"
        },
        "defaultValue": {
          "type": "string",
          "canBeNull": true,
          "description": "Default value of the field"
        },
        "regularExpression": {
          "description": "Regular expression to validate the field value",
          "type": "string",
          "canBeNull": true
        },
        "examples": {
          "type": "string[]",
          "canBeNull": true,
          "description": "Examples of values for the fields"
        },
        "fieldName": {
          "type": "string",
          "canBeNull": true,
          "description": "Name of the field"
        },
        "in": {
          "canBeNull": true,
          "type": "string[]",
          "description": "List of allowed values for the field"
        }
      },
      "description": "Describe all rules for a given field",
      "namespace": "nichandle"
    },
    "order.Contract": {
      "id": "Contract",
      "properties": {
        "content": {
          "type": "text",
          "canBeNull": false,
          "description": null
        },
        "url": {
          "type": "string",
          "canBeNull": false,
          "description": null
        },
        "name": {
          "description": null,
          "canBeNull": false,
          "type": "string"
        }
      },
      "namespace": "order",
      "description": "A contract"
    },
    "nichandle.CountryEnum": {
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
      "id": "CountryEnum",
      "namespace": "nichandle",
      "description": "Countries a nichandle can choose",
      "enumType": "string"
    }
  }
}