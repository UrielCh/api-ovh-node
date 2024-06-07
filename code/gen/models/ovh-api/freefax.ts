import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/freefax.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List Freefax line accounts",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "freefax:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "map[string][]iam.resource.TagFilter",
              "description": "Filter resources on IAM tags",
              "name": "iamTags",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "phoneNumber[]"
        }
      ],
      "path": "/freefax"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get Freefax information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "freefax:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "phoneNumber",
              "description": "Service name",
              "fullType": "phoneNumber",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "freefax.FreefaxPropertiesWithIAM"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Edit the Freefax properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "freefax:apiovh:put",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "freefax.FreefaxProperties",
              "description": "Request Body",
              "fullType": "freefax.FreefaxProperties",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "phoneNumber",
              "description": "Service name",
              "fullType": "phoneNumber",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/freefax/{serviceName}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generates a new password for your fax account",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "freefax:apiovh:changePassword",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "phoneNumber",
              "description": "Service name",
              "fullType": "phoneNumber",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "password"
        }
      ],
      "path": "/freefax/{serviceName}/changePassword"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get Freefax directory information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "freefax:apiovh:directory/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "phoneNumber",
              "description": "Service name",
              "fullType": "phoneNumber",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "telephony.DirectoryInfo"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Edit Freefax directory information",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "freefax:apiovh:directory/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "telephony.DirectoryInfo",
              "description": "Request Body",
              "fullType": "telephony.DirectoryInfo",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "phoneNumber",
              "description": "Service name",
              "fullType": "phoneNumber",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/freefax/{serviceName}/directory"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get enterprise information by providing enterprise number",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "freefax:apiovh:directory/fetchEntrepriseInformations",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "telephony.EntrepriseNumber",
              "description": "Request Body",
              "fullType": "telephony.EntrepriseNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "phoneNumber",
              "description": "Service name",
              "fullType": "phoneNumber",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "telephony.EntrepriseNumberInformationsTask"
        }
      ],
      "path": "/freefax/{serviceName}/directory/fetchEntrepriseInformations"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get directory service code from an APE code (principal activity of the firm code)",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "freefax:apiovh:directory/getDirectoryServiceCode",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "phoneNumber",
              "description": "Service name",
              "fullType": "phoneNumber",
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
          "responseType": "telephony.DirectoryHeadingPJ[]"
        }
      ],
      "path": "/freefax/{serviceName}/directory/getDirectoryServiceCode"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all the way types available",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "freefax:apiovh:directory/getWayTypes",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "phoneNumber",
              "description": "Service name",
              "fullType": "phoneNumber",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "telephony.DirectoryWayType[]"
        }
      ],
      "path": "/freefax/{serviceName}/directory/getWayTypes"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get main service attached to the Freefax",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "freefax:apiovh:mainService/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "phoneNumber",
              "description": "Service name",
              "fullType": "phoneNumber",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/freefax/{serviceName}/mainService"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get service information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "freefax:apiovh:serviceInfos/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "phoneNumber",
              "description": "Service name",
              "fullType": "phoneNumber",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update service information",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "freefax:apiovh:serviceInfos/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "services.Service",
              "description": "Request Body",
              "fullType": "services.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "phoneNumber",
              "description": "Service name",
              "fullType": "phoneNumber",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/freefax/{serviceName}/serviceInfos"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the Freefax voicemail information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "freefax:apiovh:voicemail/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "phoneNumber",
              "description": "Service name",
              "fullType": "phoneNumber",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "telephony.VoicemailProperties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Edit the Freefax voicemail",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "freefax:apiovh:voicemail/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "telephony.VoicemailProperties",
              "description": "Request Body",
              "fullType": "telephony.VoicemailProperties",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "phoneNumber",
              "description": "Service name",
              "fullType": "phoneNumber",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/freefax/{serviceName}/voicemail"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the voicemail password. It must be 4 digit",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "freefax:apiovh:voicemail/changePassword",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "telephony.voicemail.ChangePassword",
              "description": "Request Body",
              "fullType": "telephony.voicemail.ChangePassword",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "phoneNumber",
              "description": "Service name",
              "fullType": "phoneNumber",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/freefax/{serviceName}/voicemail/changePassword"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable/Enable voicemail. Available only if the line has fax capabilities",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "freefax:apiovh:voicemail/changeRouting",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "telephony.voicemail.ChangeRouting",
              "description": "Request Body",
              "fullType": "telephony.voicemail.ChangeRouting",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "phoneNumber",
              "description": "Service name",
              "fullType": "phoneNumber",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/freefax/{serviceName}/voicemail/changeRouting"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status of the voicemail. Available only if the line has fax capabilities",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "freefax:apiovh:voicemail/routing/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "phoneNumber",
              "description": "Service name",
              "fullType": "phoneNumber",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "telephony.VoicefaxRoutingEnum"
        }
      ],
      "path": "/freefax/{serviceName}/voicemail/routing"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get number for internal and external voicemail",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "freefax:apiovh:voicemail/voicemailNumbers/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "phoneNumber",
              "description": "Service name",
              "fullType": "phoneNumber",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "telephony.VoicemailNumbers"
        }
      ],
      "path": "/freefax/{serviceName}/voicemail/voicemailNumbers"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the credit balance and the remaining pages available for all our freefax",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:freefax/credits/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "freefax.BalanceInformations"
        }
      ],
      "path": "/freefax/credits"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "freefax.BalanceInformations": {
      "description": "Return credit balance information structure",
      "id": "BalanceInformations",
      "namespace": "freefax",
      "properties": {
        "faxs": {
          "canBeNull": false,
          "description": "The number of equivalement remaining french faxs",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "points": {
          "canBeNull": false,
          "description": "Total balance available in points",
          "fullType": "long",
          "readOnly": true,
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
          "description": "Number of tries when sending a fax",
          "fullType": "telephony.FaxSendingTriesEnum",
          "readOnly": false,
          "required": false,
          "type": "telephony.FaxSendingTriesEnum"
        },
        "faxQuality": {
          "canBeNull": false,
          "description": "Available quality for fax documents",
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
          "description": "Phone number",
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
    "freefax.FreefaxPropertiesWithIAM": {
      "description": "Freefax properties",
      "id": "FreefaxProperties",
      "namespace": "freefax",
      "properties": {
        "faxMaxCall": {
          "canBeNull": false,
          "description": "Number of tries when sending a fax",
          "fullType": "telephony.FaxSendingTriesEnum",
          "readOnly": false,
          "required": false,
          "type": "telephony.FaxSendingTriesEnum"
        },
        "faxQuality": {
          "canBeNull": false,
          "description": "Available quality for fax documents",
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
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
        },
        "number": {
          "canBeNull": false,
          "description": "Phone number",
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
    "iam.ResourceMetadata": {
      "description": "IAM resource metadata embedded in services models",
      "id": "ResourceMetadata",
      "namespace": "iam",
      "properties": {
        "displayName": {
          "canBeNull": true,
          "description": "Resource display name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Unique identifier of the resource",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "tags": {
          "canBeNull": true,
          "description": "Resource tags. Tags that were internally computed are prefixed with ovh:",
          "fullType": "map[string]string",
          "readOnly": true,
          "required": false,
          "type": "map[string]string"
        },
        "urn": {
          "canBeNull": false,
          "description": "Unique resource name used in policies",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "iam.resource.TagFilter": {
      "description": "Resource tag filter",
      "id": "TagFilter",
      "namespace": "iam.resource",
      "properties": {
        "operator": {
          "canBeNull": true,
          "description": "Operator to use in order to filter on the value (defaults to 'EQ')",
          "fullType": "iam.resource.TagFilter.OperatorEnum",
          "readOnly": true,
          "required": false,
          "type": "iam.resource.TagFilter.OperatorEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "Value to use in order to filter tags",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "iam.resource.TagFilter.OperatorEnum": {
      "description": "Operator that can be used in order to filter resources tags",
      "enum": [
        "EQ"
      ],
      "enumType": "string",
      "id": "OperatorEnum",
      "namespace": "iam.resource.TagFilter"
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
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "The service will be deleted at expiration",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "forced": {
          "canBeNull": false,
          "description": "The service forced to be renewed",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "manualPayment": {
          "canBeNull": true,
          "description": "The service needs to be manually renewed and paid",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "period": {
          "canBeNull": true,
          "description": "period of renew in month",
          "fullType": "long",
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
      "description": "service.StateEnum",
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "contactBilling": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "contactTech": {
          "canBeNull": false,
          "fullType": "string",
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
          "fullType": "long",
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
      "description": "Directory information",
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
      "description": "Directory information",
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
          "canBeNull": false,
          "description": "All genders a person can choose",
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
    "telephony.EntrepriseNumber": {
      "description": "Enterprise number",
      "id": "EntrepriseNumber",
      "namespace": "telephony",
      "properties": {
        "entrepriseNumber": {
          "canBeNull": false,
          "description": "Entreprise number to fetch information from",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "telephony.EntrepriseNumberInformations": {
      "description": "Task information about an entreprise",
      "id": "EntrepriseNumberInformations",
      "namespace": "telephony",
      "properties": {
        "address": {
          "canBeNull": true,
          "description": "Address of the entreprise",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ape": {
          "canBeNull": true,
          "description": "Entreprise's category code for directory services",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "brand": {
          "canBeNull": true,
          "description": "Brand of the entreprise",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "entrepriseNumber": {
          "canBeNull": false,
          "description": "Entreprise number",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isValid": {
          "canBeNull": false,
          "description": "Is this a valid entreprise number?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the entreprise",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "siren": {
          "canBeNull": true,
          "description": "Short version of the entreprise number (FR only)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "telephony.EntrepriseNumberInformationsTask": {
      "description": "Task about getting entreprise information",
      "id": "EntrepriseNumberInformationsTask",
      "namespace": "telephony",
      "properties": {
        "informations": {
          "canBeNull": false,
          "description": "Task information about an entreprise",
          "fullType": "telephony.EntrepriseNumberInformations",
          "readOnly": true,
          "required": false,
          "type": "telephony.EntrepriseNumberInformations"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "telephony.TaskStatusEnum",
          "readOnly": true,
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
    "telephony.FaxSendingTriesEnum": {
      "description": "Number of tries when sending a fax",
      "enum": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "enumType": "long",
      "id": "FaxSendingTriesEnum",
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
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Voicemail configuration",
          "fullType": "telephony.ServiceVoicemailMailOptionEnum",
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "internal": {
          "canBeNull": false,
          "description": "The internal voicemail number",
          "fullType": "string",
          "readOnly": true,
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
          "description": "Voicemail audio format",
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
          "description": "Greeting type",
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
    },
    "telephony.voicemail.ChangePassword": {
      "description": "Change voicemail password",
      "id": "ChangePassword",
      "namespace": "telephony.voicemail",
      "properties": {
        "password": {
          "canBeNull": false,
          "description": "The password",
          "fullType": "password",
          "readOnly": false,
          "required": true,
          "type": "password"
        }
      }
    },
    "telephony.voicemail.ChangeRouting": {
      "description": "Change voicemail routing",
      "id": "ChangeRouting",
      "namespace": "telephony.voicemail",
      "properties": {
        "routing": {
          "canBeNull": false,
          "description": "All existing type of routing for a voicemail",
          "fullType": "telephony.VoicefaxRoutingEnum",
          "readOnly": false,
          "required": true,
          "type": "telephony.VoicefaxRoutingEnum"
        }
      }
    }
  },
  "resourcePath": "/freefax"
}