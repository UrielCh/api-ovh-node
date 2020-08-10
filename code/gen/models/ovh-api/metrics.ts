import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/metrics",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "listMetricsServices",
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the METRICS service"
    },
    {
      "path": "/metrics/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "getMetricsService",
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
          "responseType": "metrics.api.Service",
          "noAuthentication": false,
          "description": "Get service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "editMetricsService",
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "metrics.Update",
              "paramType": "body",
              "fullType": "metrics.Update",
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
          "responseType": "metrics.api.Service",
          "noAuthentication": false,
          "description": "Modify service"
        }
      ],
      "description": "Operations about the METRICS service"
    },
    {
      "path": "/metrics/{serviceName}/changeContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "contactTech",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as tech contact"
            },
            {
              "name": "contactBilling",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as billing contact"
            },
            {
              "name": "contactAdmin",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as admin contact"
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Launch a contact change procedure"
        }
      ],
      "description": "Change the contacts of this service"
    },
    {
      "path": "/metrics/{serviceName}/confirmTermination",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "futureUse",
              "dataType": "service.TerminationFutureUseEnum",
              "paramType": "body",
              "fullType": "service.TerminationFutureUseEnum",
              "required": false,
              "description": "What next after your termination request"
            },
            {
              "name": "reason",
              "dataType": "service.TerminationReasonEnum",
              "paramType": "body",
              "fullType": "service.TerminationReasonEnum",
              "required": false,
              "description": "Reason of your termination request"
            },
            {
              "name": "commentary",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Commentary about your termination request"
            },
            {
              "name": "token",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The termination token sent by mail to the admin contact"
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Confirm termination of your service"
        }
      ],
      "description": "Confirm termination of your service"
    },
    {
      "path": "/metrics/{serviceName}/consumption",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "getMetricsServiceConsumption",
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "duration",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Last 'm' minutes. Default is 60min"
            }
          ],
          "responseType": "metrics.api.Consumption",
          "noAuthentication": false,
          "description": "Get consumption for your service"
        }
      ],
      "description": "Metrics service consumption"
    },
    {
      "path": "/metrics/{serviceName}/lookup/token",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "lookupMetricsToken",
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "metrics.LookupTokenCreation",
              "paramType": "body",
              "fullType": "metrics.LookupTokenCreation",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Find TokenID for a specific token"
        }
      ],
      "description": "Look for service/token"
    },
    {
      "path": "/metrics/{serviceName}/quota",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "setMetricsServiceQuota",
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "metrics.QuotaUpdate",
              "paramType": "body",
              "fullType": "metrics.QuotaUpdate",
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Set overquota"
        }
      ],
      "description": "Metrics service quota management"
    },
    {
      "path": "/metrics/{serviceName}/serviceInfos",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
            "description": "Beta version",
            "value": "BETA"
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
      "path": "/metrics/{serviceName}/terminate",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Terminate your service"
        }
      ],
      "description": "Terminate your service"
    },
    {
      "path": "/metrics/{serviceName}/token",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "listMetricsTokens",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get list of tokens"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "createMetricsToken",
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "metrics.TokenCreation",
              "paramType": "body",
              "fullType": "metrics.TokenCreation",
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
          "responseType": "metrics.api.Token",
          "noAuthentication": false,
          "description": "Create a token"
        }
      ],
      "description": "Metrics service token operations"
    },
    {
      "path": "/metrics/{serviceName}/token/{tokenId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "deleteMetricsToken",
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "tokenId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Token ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Revoke a token"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "getMetricsToken",
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "tokenId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Token ID"
            }
          ],
          "responseType": "metrics.api.Token",
          "noAuthentication": false,
          "description": "Get a specific token"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "editMetricsToken",
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "metrics.TokenUpdate",
              "paramType": "body",
              "fullType": "metrics.TokenUpdate",
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
            },
            {
              "name": "tokenId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Token ID"
            }
          ],
          "responseType": "metrics.api.Token",
          "noAuthentication": false,
          "description": "Modify a token"
        }
      ],
      "description": "Metrics service token operations"
    }
  ],
  "resourcePath": "/metrics",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "metrics.LookupTokenCreation": {
      "id": "LookupTokenCreation",
      "namespace": "metrics",
      "description": "Missing description",
      "properties": {
        "accessToken": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "access token",
          "required": true
        }
      }
    },
    "metrics.QuotaUpdate": {
      "id": "QuotaUpdate",
      "namespace": "metrics",
      "description": "Missing description",
      "properties": {
        "quota": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "New value for overquota",
          "required": true
        }
      }
    },
    "metrics.TokenCreation": {
      "id": "TokenCreation",
      "namespace": "metrics",
      "description": "Missing description",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Description for the new token",
          "required": false
        },
        "labels": {
          "type": "metrics.api.Label[]",
          "fullType": "metrics.api.Label[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Labels for the new token",
          "required": false
        },
        "permission": {
          "type": "metrics.api.PermissionEnum",
          "fullType": "metrics.api.PermissionEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of the new token. Read or Write",
          "required": true
        }
      }
    },
    "metrics.TokenUpdate": {
      "id": "TokenUpdate",
      "namespace": "metrics",
      "description": "Missing description",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "New description for your token",
          "required": false
        }
      }
    },
    "metrics.Update": {
      "id": "Update",
      "namespace": "metrics",
      "description": "Missing description",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "New description for your service",
          "required": false
        }
      }
    },
    "metrics.api.Consumption": {
      "id": "Consumption",
      "namespace": "metrics.api",
      "description": "Structure holding the consumption",
      "properties": {
        "ddp": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current Daily data points",
          "required": false
        },
        "mads": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current monthly active data streams",
          "required": false
        }
      }
    },
    "metrics.api.Label": {
      "id": "Label",
      "namespace": "metrics.api",
      "description": "Structure holding the elements about a label",
      "properties": {
        "key": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Label key",
          "required": false
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Label value",
          "required": false
        }
      }
    },
    "metrics.api.OfferTypeEnum": {
      "id": "OfferTypeEnum",
      "namespace": "metrics.api",
      "description": "Type of the service",
      "enum": [
        "cloud",
        "live"
      ],
      "enumType": "string"
    },
    "metrics.api.Option": {
      "id": "Option",
      "namespace": "metrics.api",
      "description": "Structure holding the options for a service",
      "properties": {
        "ddp": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Daily data points",
          "required": false
        },
        "lastModification": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Time of last modification",
          "required": false
        },
        "mads": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Monthly active device streams",
          "required": false
        }
      }
    },
    "metrics.api.PermissionEnum": {
      "id": "PermissionEnum",
      "namespace": "metrics.api",
      "description": "Metrics service token permissions",
      "enum": [
        "read",
        "write"
      ],
      "enumType": "string"
    },
    "metrics.api.Region": {
      "id": "Region",
      "namespace": "metrics.api",
      "description": "Structure holding the elements about a region",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Description of a region",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of a region",
          "required": false
        }
      }
    },
    "metrics.api.Service": {
      "id": "Service",
      "namespace": "metrics.api",
      "description": "Structure holding the elements about a service",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Description of a service",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of a service",
          "required": false
        },
        "offer": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Offer used for the service",
          "required": false
        },
        "quota": {
          "type": "metrics.api.Option",
          "fullType": "metrics.api.Option",
          "canBeNull": false,
          "readOnly": true,
          "description": "Quota used for the service",
          "required": false
        },
        "region": {
          "type": "metrics.api.Region",
          "fullType": "metrics.api.Region",
          "canBeNull": false,
          "readOnly": true,
          "description": "Region holding the service",
          "required": false
        },
        "shouldUpgrade": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicator if the service should be upgraded based on current quota and offer",
          "required": false
        },
        "status": {
          "type": "metrics.api.ServiceStatusEnum",
          "fullType": "metrics.api.ServiceStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of a service",
          "required": false
        },
        "type": {
          "type": "metrics.api.OfferTypeEnum",
          "fullType": "metrics.api.OfferTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type of the service: cloud or live",
          "required": false
        }
      }
    },
    "metrics.api.ServiceStatusEnum": {
      "id": "ServiceStatusEnum",
      "namespace": "metrics.api",
      "description": "Status of of the service",
      "enum": [
        "new",
        "alive",
        "disabled",
        "dead"
      ],
      "enumType": "string"
    },
    "metrics.api.Token": {
      "id": "Token",
      "namespace": "metrics.api",
      "description": "Structure holding the elements about a token",
      "properties": {
        "access": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": true,
          "description": "The actual access token",
          "required": false
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Token creation date",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Description of the token",
          "required": false
        },
        "expiryAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Token expiration date",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the token",
          "required": false
        },
        "isRevoked": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Is your token revoked?",
          "required": false
        },
        "labels": {
          "type": "metrics.api.Label[]",
          "fullType": "metrics.api.Label[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Labels for the token if set",
          "required": false
        },
        "permission": {
          "type": "metrics.api.PermissionEnum",
          "fullType": "metrics.api.PermissionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Token permission: read or write",
          "required": false
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
    "service.TerminationFutureUseEnum": {
      "id": "TerminationFutureUseEnum",
      "namespace": "service",
      "description": "All future uses you can provide for a service termination",
      "enum": [
        "NOT_REPLACING_SERVICE",
        "OTHER",
        "SUBSCRIBE_AN_OTHER_SERVICE",
        "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
        "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
      ],
      "enumType": "string"
    },
    "service.TerminationReasonEnum": {
      "id": "TerminationReasonEnum",
      "namespace": "service",
      "description": "All reasons you can provide for a service termination",
      "enum": [
        "FEATURES_DONT_SUIT_ME",
        "LACK_OF_PERFORMANCES",
        "MIGRATED_TO_ANOTHER_OVH_PRODUCT",
        "MIGRATED_TO_COMPETITOR",
        "NOT_ENOUGH_RECOGNITION",
        "NOT_NEEDED_ANYMORE",
        "NOT_RELIABLE",
        "NO_ANSWER",
        "OTHER",
        "PRODUCT_DIMENSION_DONT_SUIT_ME",
        "PRODUCT_TOOLS_DONT_SUIT_ME",
        "TOO_EXPENSIVE",
        "TOO_HARD_TO_USE",
        "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
    }
  }
}