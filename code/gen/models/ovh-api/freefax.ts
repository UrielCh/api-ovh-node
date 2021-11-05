import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/freefax.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the VOIP service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/freefax/all"
          ]
        }
      ],
      "path": "/freefax"
    },
    {
      "description": "Freefax properties",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Freefax number",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "freefax.FreefaxProperties",
          "scopes": [
            "all",
            "product/freefax/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "freefax.FreefaxProperties",
              "description": "New object properties",
              "fullType": "freefax.FreefaxProperties",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Freefax number",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/freefax/all"
          ]
        }
      ],
      "path": "/freefax/{serviceName}"
    },
    {
      "description": "changePassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generates a new password for your fax account",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Freefax number",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "password",
          "scopes": [
            "all",
            "product/freefax/all"
          ]
        }
      ],
      "path": "/freefax/{serviceName}/changePassword"
    },
    {
      "description": "Directory Informations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Freefax number",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "telephony.DirectoryInfo",
          "scopes": [
            "all",
            "product/freefax/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "telephony.DirectoryInfo",
              "description": "New object properties",
              "fullType": "telephony.DirectoryInfo",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Freefax number",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/freefax/all"
          ]
        }
      ],
      "path": "/freefax/{serviceName}/directory"
    },
    {
      "description": "fetchEntrepriseInformations operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get company entreprise informations by providing entreprise number",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Entreprise number to fetch informations from",
              "fullType": "string",
              "name": "entrepriseNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Freefax number",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "telephony.EntrepriseNumberInformationsTask",
          "scopes": [
            "all",
            "product/freefax/all"
          ]
        }
      ],
      "path": "/freefax/{serviceName}/directory/fetchEntrepriseInformations"
    },
    {
      "description": "getDirectoryServiceCode operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get directory service code from an APE code ( principal activity of the firm code )",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Freefax number",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "apeCode",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "telephony.DirectoryHeadingPJ[]",
          "scopes": [
            "all",
            "product/freefax/all"
          ]
        }
      ],
      "path": "/freefax/{serviceName}/directory/getDirectoryServiceCode"
    },
    {
      "description": "getWayTypes operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all the way types availables",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Freefax number",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "telephony.DirectoryWayType[]",
          "scopes": [
            "all",
            "product/freefax/all"
          ]
        }
      ],
      "path": "/freefax/{serviceName}/directory/getWayTypes"
    },
    {
      "description": "mainService operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Main service attached to freefax",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Freefax number",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/freefax/all"
          ]
        }
      ],
      "path": "/freefax/{serviceName}/mainService"
    },
    {
      "description": "Details about a Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Freefax number",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service",
          "scopes": [
            "all",
            "product/freefax/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "services.Service",
              "description": "New object properties",
              "fullType": "services.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Freefax number",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/freefax/all"
          ]
        }
      ],
      "path": "/freefax/{serviceName}/serviceInfos"
    },
    {
      "description": "Voicemail Properties",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Freefax number",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "telephony.VoicemailProperties",
          "scopes": [
            "all",
            "product/freefax/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "telephony.VoicemailProperties",
              "description": "New object properties",
              "fullType": "telephony.VoicemailProperties",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Freefax number",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/freefax/all"
          ]
        }
      ],
      "path": "/freefax/{serviceName}/voicemail"
    },
    {
      "description": "changePassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the voicemail password. It must be 4 digit",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "The password",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Freefax number",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/freefax/all"
          ]
        }
      ],
      "path": "/freefax/{serviceName}/voicemail/changePassword"
    },
    {
      "description": "changeRouting operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable/Enable voicemail. Available only if the line has fax capabilities",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "telephony.VoicefaxRoutingEnum",
              "description": "Activate or Desactivate voicemail on the line",
              "fullType": "telephony.VoicefaxRoutingEnum",
              "name": "routing",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Freefax number",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/freefax/all"
          ]
        }
      ],
      "path": "/freefax/{serviceName}/voicemail/changeRouting"
    },
    {
      "description": "routing operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status of the voicemail. Available only if the line has fax capabilities",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Freefax number",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "telephony.VoicefaxRoutingEnum",
          "scopes": [
            "all",
            "product/freefax/all"
          ]
        }
      ],
      "path": "/freefax/{serviceName}/voicemail/routing"
    },
    {
      "description": "voicemailNumbers operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get number for internal and external voicemail",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Freefax number",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "telephony.VoicemailNumbers",
          "scopes": [
            "all",
            "product/freefax/all"
          ]
        }
      ],
      "path": "/freefax/{serviceName}/voicemail/voicemailNumbers"
    },
    {
      "description": "Get the credit balance and the remaining pages available for all our freefax",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the credit balance and the remaining pages available for all our freefax",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "freefax.BalanceInformations",
          "scopes": [
            "all",
            "product/freefax/all"
          ]
        }
      ],
      "path": "/freefax/credits"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "freefax.BalanceInformations": {
      "description": "Return credit balance informations structure",
      "id": "BalanceInformations",
      "namespace": "freefax",
      "properties": {
        "faxs": {
          "canBeNull": false,
          "description": "The number of equivalement remaining french faxs",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "points": {
          "canBeNull": false,
          "description": "Total balance available in points",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "freefax.FreefaxProperties": {
      "description": "Freefax properties",
      "id": "FreefaxProperties",
      "namespace": "freefax",
      "properties": {
        "faxMaxCall": {
          "canBeNull": false,
          "description": "Number of max tentative of fax sending",
          "fullType": "telephony.FaxSendingTries",
          "readOnly": false,
          "required": false,
          "type": "telephony.FaxSendingTries"
        },
        "faxQuality": {
          "canBeNull": false,
          "description": "Quality of fax sending",
          "fullType": "telephony.FaxQualityEnum",
          "readOnly": false,
          "required": false,
          "type": "telephony.FaxQualityEnum"
        },
        "faxTagLine": {
          "canBeNull": false,
          "description": "Customised freefax header",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "fromEmail": {
          "canBeNull": false,
          "description": "FROM email header",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "fromName": {
          "canBeNull": false,
          "description": "Name of the sender of the email",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "number": {
          "canBeNull": false,
          "description": "Freefax number in international format",
          "fullType": "phoneNumber",
          "readOnly": true,
          "required": false,
          "type": "phoneNumber"
        },
        "redirectionEmail": {
          "canBeNull": false,
          "description": "Email address to redirect fax response.",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        }
      }
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
    "service.RenewType": {
      "description": "Map a possible renew for a specific service",
      "id": "RenewType",
      "namespace": "service",
      "properties": {
        "automatic": {
          "canBeNull": false,
          "description": "The service is automatically renewed",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "The service will be deleted at expiration",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "forced": {
          "canBeNull": false,
          "description": "The service forced to be renewed",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "manualPayment": {
          "canBeNull": true,
          "description": "The service needs to be manually renewed and paid",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "period": {
          "canBeNull": true,
          "description": "period of renew in month",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "service.RenewalTypeEnum": {
      "description": "Detailed renewal type of a service",
      "enum": [
        "automaticForcedProduct",
        "automaticV2012",
        "automaticV2014",
        "automaticV2016",
        "manual",
        "oneShot",
        "option"
      ],
      "enumType": "string",
      "id": "RenewalTypeEnum",
      "namespace": "service"
    },
    "service.StateEnum": {
      "enum": [
        "expired",
        "inCreation",
        "ok",
        "pendingDebt",
        "unPaid"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "service"
    },
    "services.Service": {
      "description": "Details about a Service",
      "id": "Service",
      "namespace": "services",
      "properties": {
        "canDeleteAtExpiration": {
          "canBeNull": false,
          "description": "Indicates that the service can be set up to be deleted at expiration",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "contactAdmin": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "contactBilling": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "contactTech": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "creation": {
          "canBeNull": false,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "engagedUpTo": {
          "canBeNull": true,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "expiration": {
          "canBeNull": false,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "possibleRenewPeriod": {
          "canBeNull": true,
          "description": "All the possible renew period of your service in month",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        },
        "renew": {
          "canBeNull": true,
          "description": "Way of handling the renew",
          "fullType": "service.RenewType",
          "readOnly": false,
          "required": false,
          "type": "service.RenewType"
        },
        "renewalType": {
          "canBeNull": false,
          "fullType": "service.RenewalTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "service.RenewalTypeEnum"
        },
        "serviceId": {
          "canBeNull": false,
          "fullType": "coreTypes.ServiceId:long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "fullType": "service.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "service.StateEnum"
        }
      }
    },
    "telephony.DirectoryHeadingPJ": {
      "description": "Directory Informations",
      "id": "DirectoryHeadingPJ",
      "namespace": "telephony",
      "properties": {
        "apeCode": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "apeDescription": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "directoryServiceCode": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "directoryServiceDescription": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "notification": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "telephony.DirectoryInfo": {
      "description": "Directory Informations",
      "id": "DirectoryInfo",
      "namespace": "telephony",
      "properties": {
        "PJSocialNomination": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "address": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "addressExtra": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ape": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "areaCode": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "birthDate": {
          "canBeNull": true,
          "fullType": "date",
          "readOnly": false,
          "required": false,
          "type": "date"
        },
        "cedex": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "city": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "country": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "directoryServiceCode": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "displayFirstName": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "displayMarketingDirectory": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "displayOnlyCity": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "displaySearchReverse": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "displayUniversalDirectory": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "email": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "firstName": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "gender": {
          "canBeNull": true,
          "fullType": "nichandle.GenderEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.GenderEnum"
        },
        "inseeCode": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "legalForm": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lineDescription": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "modificationDate": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "modificationType": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "number": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "occupation": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "postBox": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "postCode": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "receivePJDirectory": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "siret": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "socialNomination": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "socialNominationExtra": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "urbanDistrict": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "wayName": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "wayNumber": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "wayNumberExtra": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "wayType": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "telephony.DirectoryWayType": {
      "description": "Directory way type",
      "id": "DirectoryWayType",
      "namespace": "telephony",
      "properties": {
        "abbreviatedName": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "wayName": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "telephony.EntrepriseNumberInformations": {
      "description": "Task informations about an entreprise",
      "id": "EntrepriseNumberInformations",
      "namespace": "telephony",
      "properties": {
        "address": {
          "canBeNull": true,
          "description": "Address of the entreprise",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ape": {
          "canBeNull": true,
          "description": "Entreprise's category code for directory services",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "brand": {
          "canBeNull": true,
          "description": "Brand of the entreprise",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "entrepriseNumber": {
          "canBeNull": false,
          "description": "Entreprise number",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "isValid": {
          "canBeNull": false,
          "description": "Is this a valid entreprise number?",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the entreprise",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "siren": {
          "canBeNull": true,
          "description": "Short version of the entreprise number (FR only)",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "telephony.EntrepriseNumberInformationsTask": {
      "description": "Task about getting entreprise informations",
      "id": "EntrepriseNumberInformationsTask",
      "namespace": "telephony",
      "properties": {
        "informations": {
          "canBeNull": false,
          "description": "Informations about the enterprise",
          "readOnly": false,
          "required": false,
          "type": "telephony.EntrepriseNumberInformations"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "readOnly": false,
          "required": false,
          "type": "telephony.TaskStatusEnum"
        }
      }
    },
    "telephony.FaxQualityEnum": {
      "description": "Available quality for fax documents",
      "enum": [
        "best",
        "high",
        "normal"
      ],
      "enumType": "string",
      "id": "FaxQualityEnum",
      "namespace": "telephony"
    },
    "telephony.FaxSendingTries": {
      "description": "Number of tries when sending a fax",
      "enum": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
      ],
      "enumType": "long",
      "id": "FaxSendingTries",
      "namespace": "telephony"
    },
    "telephony.ServiceVoicemailAudioFormatEnum": {
      "description": "Voicemail audio format",
      "enum": [
        "aiff",
        "au",
        "flac",
        "mp3",
        "ogg",
        "wav"
      ],
      "enumType": "string",
      "id": "ServiceVoicemailAudioFormatEnum",
      "namespace": "telephony"
    },
    "telephony.ServiceVoicemailMailOptionEnum": {
      "description": "Voicemail configuration",
      "enum": [
        "attachment",
        "simple"
      ],
      "enumType": "string",
      "id": "ServiceVoicemailMailOptionEnum",
      "namespace": "telephony"
    },
    "telephony.ServiceVoicemailNotifications": {
      "description": "Voicemail configuration",
      "id": "ServiceVoicemailNotifications",
      "namespace": "telephony",
      "properties": {
        "email": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "telephony.ServiceVoicemailMailOptionEnum"
        }
      }
    },
    "telephony.TaskStatusEnum": {
      "description": "Task status",
      "enum": [
        "doing",
        "done",
        "error",
        "pause",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "telephony"
    },
    "telephony.VoicefaxRoutingEnum": {
      "description": "All existing type of routing for a voicemail",
      "enum": [
        "fax",
        "voicemail"
      ],
      "enumType": "string",
      "id": "VoicefaxRoutingEnum",
      "namespace": "telephony"
    },
    "telephony.VoicemailGreetingEnum": {
      "description": "Greeting type",
      "enum": [
        "default",
        "full",
        "short"
      ],
      "enumType": "string",
      "id": "VoicemailGreetingEnum",
      "namespace": "telephony"
    },
    "telephony.VoicemailNumbers": {
      "description": "Internal and external numbers for voicemail service",
      "id": "VoicemailNumbers",
      "namespace": "telephony",
      "properties": {
        "external": {
          "canBeNull": false,
          "description": "The external voicemail number",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "internal": {
          "canBeNull": false,
          "description": "The internal voicemail number",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "telephony.VoicemailProperties": {
      "description": "Voicemail Properties",
      "id": "VoicemailProperties",
      "namespace": "telephony",
      "properties": {
        "annouceMessage": {
          "canBeNull": false,
          "description": "Name of the voicemail panel announce file",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "audioFormat": {
          "canBeNull": false,
          "description": "Format of the voicemail audio file attached to emails",
          "fullType": "telephony.ServiceVoicemailAudioFormatEnum",
          "readOnly": false,
          "required": false,
          "type": "telephony.ServiceVoicemailAudioFormatEnum"
        },
        "doNotRecord": {
          "canBeNull": false,
          "description": "Don't allow callers to leave voicemails",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "forcePassword": {
          "canBeNull": false,
          "description": "Force password request to access the voicemail panel",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "fromEmail": {
          "canBeNull": false,
          "description": "Email address from which emails will be sent",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "fromName": {
          "canBeNull": false,
          "description": "Name from which emails will be sent",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "fullGreetingSoundId": {
          "canBeNull": true,
          "description": "Sound ID of the long greeeting",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "greetingType": {
          "canBeNull": false,
          "description": "Type of the greeting to play",
          "fullType": "telephony.VoicemailGreetingEnum",
          "readOnly": false,
          "required": false,
          "type": "telephony.VoicemailGreetingEnum"
        },
        "isNewVersion": {
          "canBeNull": false,
          "description": "Current voicemail version",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "keepMessage": {
          "canBeNull": false,
          "description": "Don't delete voicemails after they've been sent by email",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "redirectionEmails": {
          "canBeNull": false,
          "description": "Email addresses to notify when a new voicemail is left",
          "fullType": "telephony.ServiceVoicemailNotifications[]",
          "readOnly": false,
          "required": false,
          "type": "telephony.ServiceVoicemailNotifications[]"
        },
        "shortGreetingSoundId": {
          "canBeNull": true,
          "description": "Sound ID of the short greeting played before an automated message",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "temporaryGreetingActivated": {
          "canBeNull": false,
          "description": "Play the temporary greeting instead of the regular one",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "temporaryGreetingSoundId": {
          "canBeNull": true,
          "description": "Sound ID of the temporary greeeting",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "unreadMessages": {
          "canBeNull": false,
          "description": "Quantity of unread voicemails",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    }
  },
  "resourcePath": "/freefax"
}