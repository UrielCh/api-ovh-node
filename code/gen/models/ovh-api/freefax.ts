import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/freefax",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the VOIP service"
    },
    {
      "path": "/freefax/credits",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "freefax.BalanceInformations",
          "noAuthentication": false,
          "description": "Get the credit balance and the remaining pages available for all our freefax"
        }
      ],
      "description": "Get the credit balance and the remaining pages available for all our freefax"
    },
    {
      "path": "/freefax/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "freefax.FreefaxProperties",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "freefax.FreefaxProperties",
              "paramType": "body",
              "fullType": "freefax.FreefaxProperties",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Freefax properties"
    },
    {
      "path": "/freefax/{serviceName}/changePassword",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "password",
          "noAuthentication": false,
          "description": "Generates a new password for your fax account"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/freefax/{serviceName}/mainService",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Main service attached to freefax"
        }
      ],
      "description": "mainService operations"
    },
    {
      "path": "/freefax/{serviceName}/serviceInfos",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "services.Service",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "services.Service",
              "paramType": "body",
              "fullType": "services.Service",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Details about a Service"
    },
    {
      "path": "/freefax/{serviceName}/voicemail",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "telephony.VoicemailProperties",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "telephony.VoicemailProperties",
              "paramType": "body",
              "fullType": "telephony.VoicemailProperties",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Voicemail Properties"
    },
    {
      "path": "/freefax/{serviceName}/voicemail/changePassword",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "The password"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Change the voicemail password. It must be 4 digit"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/freefax/{serviceName}/voicemail/changeRouting",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "routing",
              "dataType": "telephony.VoicefaxRoutingEnum",
              "paramType": "body",
              "fullType": "telephony.VoicefaxRoutingEnum",
              "required": true,
              "description": "Activate or Desactivate voicemail on the line"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Disable/Enable voicemail. Available only if the line has fax capabilities"
        }
      ],
      "description": "changeRouting operations"
    },
    {
      "path": "/freefax/{serviceName}/voicemail/routing",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "telephony.VoicefaxRoutingEnum",
          "noAuthentication": false,
          "description": "Get the status of the voicemail. Available only if the line has fax capabilities"
        }
      ],
      "description": "routing operations"
    },
    {
      "path": "/freefax/{serviceName}/voicemail/voicemailNumbers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "telephony.VoicemailNumbers",
          "noAuthentication": false,
          "description": "Get number for internal and external voicemail"
        }
      ],
      "description": "voicemailNumbers operations"
    }
  ],
  "resourcePath": "/freefax",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "freefax.BalanceInformations": {
      "id": "BalanceInformations",
      "namespace": "freefax",
      "description": "Return credit balance informations structure",
      "properties": {
        "faxs": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The number of equivalement remaining french faxs",
          "required": true
        },
        "points": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Total balance available in points",
          "required": true
        }
      }
    },
    "freefax.FreefaxProperties": {
      "id": "FreefaxProperties",
      "namespace": "freefax",
      "description": "Freefax properties",
      "properties": {
        "faxMaxCall": {
          "type": "telephony.FaxSendingTries",
          "fullType": "telephony.FaxSendingTries",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of max tentative of fax sending",
          "required": true
        },
        "faxQuality": {
          "type": "telephony.FaxQualityEnum",
          "fullType": "telephony.FaxQualityEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Quality of fax sending",
          "required": true
        },
        "faxTagLine": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Customised freefax header",
          "required": true
        },
        "fromEmail": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "FROM email header",
          "required": true
        },
        "fromName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the sender of the email",
          "required": true
        },
        "number": {
          "type": "phoneNumber",
          "fullType": "phoneNumber",
          "canBeNull": false,
          "readOnly": true,
          "description": "Freefax number in international format",
          "required": true
        },
        "redirectionEmail": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Email address to redirect fax response.",
          "required": true
        }
      }
    },
    "service.RenewType": {
      "id": "RenewType",
      "namespace": "service",
      "description": "Map a possible renew for a specific service",
      "properties": {
        "automatic": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "The service is automatically renewed",
          "required": true
        },
        "deleteAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "The service will be deleted at expiration",
          "required": true
        },
        "forced": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "The service forced to be renewed",
          "required": true
        },
        "manualPayment": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "The service needs to be manually renewed and paid",
          "required": false
        },
        "period": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "period of renew in month",
          "required": false
        }
      }
    },
    "service.RenewalTypeEnum": {
      "id": "RenewalTypeEnum",
      "namespace": "service",
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
      "enumType": "string"
    },
    "service.StateEnum": {
      "id": "StateEnum",
      "namespace": "service",
      "enum": [
        "expired",
        "inCreation",
        "ok",
        "pendingDebt",
        "unPaid"
      ],
      "enumType": "string"
    },
    "services.Service": {
      "id": "Service",
      "namespace": "services",
      "description": "Details about a Service",
      "properties": {
        "canDeleteAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates that the service can be set up to be deleted at expiration",
          "required": true
        },
        "contactAdmin": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "contactBilling": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "contactTech": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "creation": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "engagedUpTo": {
          "type": "date",
          "fullType": "date",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "expiration": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "possibleRenewPeriod": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "All the possible renew period of your service in month",
          "required": false
        },
        "renew": {
          "type": "service.RenewType",
          "fullType": "service.RenewType",
          "canBeNull": true,
          "readOnly": false,
          "description": "Way of handling the renew",
          "required": false
        },
        "renewalType": {
          "type": "service.RenewalTypeEnum",
          "fullType": "service.RenewalTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "serviceId": {
          "type": "coreTypes.ServiceId:long",
          "fullType": "coreTypes.ServiceId:long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "service.StateEnum",
          "fullType": "service.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "telephony.FaxQualityEnum": {
      "id": "FaxQualityEnum",
      "namespace": "telephony",
      "description": "Available quality for fax documents",
      "enum": [
        "best",
        "high",
        "normal"
      ],
      "enumType": "string"
    },
    "telephony.FaxSendingTries": {
      "id": "FaxSendingTries",
      "namespace": "telephony",
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
      "enumType": "long"
    },
    "telephony.ServiceVoicemailAudioFormatEnum": {
      "id": "ServiceVoicemailAudioFormatEnum",
      "namespace": "telephony",
      "description": "Voicemail audio format",
      "enum": [
        "aiff",
        "au",
        "flac",
        "mp3",
        "ogg",
        "wav"
      ],
      "enumType": "string"
    },
    "telephony.ServiceVoicemailMailOptionEnum": {
      "id": "ServiceVoicemailMailOptionEnum",
      "namespace": "telephony",
      "description": "Voicemail configuration",
      "enum": [
        "attachment",
        "simple"
      ],
      "enumType": "string"
    },
    "telephony.ServiceVoicemailNotifications": {
      "id": "ServiceVoicemailNotifications",
      "namespace": "telephony",
      "description": "Voicemail configuration",
      "properties": {
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "type": {
          "type": "telephony.ServiceVoicemailMailOptionEnum",
          "fullType": "telephony.ServiceVoicemailMailOptionEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "telephony.VoicefaxRoutingEnum": {
      "id": "VoicefaxRoutingEnum",
      "namespace": "telephony",
      "description": "All existing type of routing for a voicemail",
      "enum": [
        "fax",
        "voicemail"
      ],
      "enumType": "string"
    },
    "telephony.VoicemailGreetingEnum": {
      "id": "VoicemailGreetingEnum",
      "namespace": "telephony",
      "description": "Greeting type",
      "enum": [
        "default",
        "full",
        "short"
      ],
      "enumType": "string"
    },
    "telephony.VoicemailNumbers": {
      "id": "VoicemailNumbers",
      "namespace": "telephony",
      "description": "Internal and external numbers for voicemail service",
      "properties": {
        "external": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The external voicemail number",
          "required": true
        },
        "internal": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The internal voicemail number",
          "required": true
        }
      }
    },
    "telephony.VoicemailProperties": {
      "id": "VoicemailProperties",
      "namespace": "telephony",
      "description": "Voicemail Properties",
      "properties": {
        "annouceMessage": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the voicemail panel announce file",
          "required": true
        },
        "audioFormat": {
          "type": "telephony.ServiceVoicemailAudioFormatEnum",
          "fullType": "telephony.ServiceVoicemailAudioFormatEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Format of the voicemail audio file attached to emails",
          "required": true
        },
        "doNotRecord": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Don't allow callers to leave voicemails",
          "required": true
        },
        "forcePassword": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Force password request to access the voicemail panel",
          "required": true
        },
        "fromEmail": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Email address from which emails will be sent",
          "required": true
        },
        "fromName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name from which emails will be sent",
          "required": true
        },
        "fullGreetingSoundId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Sound ID of the long greeeting",
          "required": false
        },
        "greetingType": {
          "type": "telephony.VoicemailGreetingEnum",
          "fullType": "telephony.VoicemailGreetingEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of the greeting to play",
          "required": true
        },
        "isNewVersion": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current voicemail version",
          "required": true
        },
        "keepMessage": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Don't delete voicemails after they've been sent by email",
          "required": true
        },
        "redirectionEmails": {
          "type": "telephony.ServiceVoicemailNotifications[]",
          "fullType": "telephony.ServiceVoicemailNotifications[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Email addresses to notify when a new voicemail is left",
          "required": true
        },
        "shortGreetingSoundId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Sound ID of the short greeting played before an automated message",
          "required": false
        },
        "temporaryGreetingActivated": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Play the temporary greeting instead of the regular one",
          "required": true
        },
        "temporaryGreetingSoundId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Sound ID of the temporary greeeting",
          "required": false
        },
        "unreadMessages": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Quantity of unread voicemails",
          "required": true
        }
      }
    }
  }
}