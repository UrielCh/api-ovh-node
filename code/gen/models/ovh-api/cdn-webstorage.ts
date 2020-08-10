import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/cdn/webstorage.json

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "description": "Operations about the CDNSTATIC service",
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
          "responseType": "string[]"
        }
      ],
      "path": "/cdn/webstorage"
    },
    {
      "description": "Static CDN",
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cdn.webstorage.Account"
        }
      ],
      "path": "/cdn/webstorage/{serviceName}"
    },
    {
      "description": "credentials operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Gives for customer credentials to accesss swift account",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cdn.webstorage.AccountCredentials"
        }
      ],
      "path": "/cdn/webstorage/{serviceName}/credentials"
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
              "description": "Service name",
              "fullType": "string",
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
          "description": "Alter this object properties",
          "httpMethod": "PUT",
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
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/cdn/webstorage/{serviceName}/serviceInfos"
    },
    {
      "description": "statistics operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return stats about bandwidth consumption",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "cdn.webstorage.StatsTypeEnum",
              "description": "",
              "fullType": "cdn.webstorage.StatsTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "cdn.webstorage.StatsPeriodEnum",
              "description": "",
              "fullType": "cdn.webstorage.StatsPeriodEnum",
              "name": "period",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "cdn.webstorage.StatsDataType[]"
        }
      ],
      "path": "/cdn/webstorage/{serviceName}/statistics"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "cdn.webstorage.Account": {
      "description": "Static CDN",
      "id": "Account",
      "namespace": "cdn.webstorage",
      "properties": {
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "server": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "storageLimit": {
          "canBeNull": false,
          "description": "value in Bytes",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "storageUsage": {
          "canBeNull": false,
          "description": "value in Bytes",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        }
      }
    },
    "cdn.webstorage.AccountCredentials": {
      "description": "A structure with credentials for using openstack account",
      "id": "AccountCredentials",
      "namespace": "cdn.webstorage",
      "properties": {
        "endpoint": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "login": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "password": {
          "canBeNull": false,
          "fullType": "password",
          "readOnly": false,
          "required": true,
          "type": "password"
        },
        "tenant": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cdn.webstorage.StatsDataType": {
      "description": "A structure describing type of a stats hash",
      "id": "StatsDataType",
      "namespace": "cdn.webstorage",
      "properties": {
        "date": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": false,
          "required": true,
          "type": "datetime"
        },
        "value": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "cdn.webstorage.StatsPeriodEnum": {
      "description": "Period of the statistics",
      "enum": [
        "day",
        "month",
        "week"
      ],
      "enumType": "string",
      "id": "StatsPeriodEnum",
      "namespace": "cdn.webstorage"
    },
    "cdn.webstorage.StatsTypeEnum": {
      "description": "Type of statistics related to cache",
      "enum": [
        "backend",
        "cdn",
        "quota"
      ],
      "enumType": "string",
      "id": "StatsTypeEnum",
      "namespace": "cdn.webstorage"
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
          "required": true,
          "type": "boolean"
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "The service will be deleted at expiration",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "forced": {
          "canBeNull": false,
          "description": "The service forced to be renewed",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
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
          "required": true,
          "type": "boolean"
        },
        "contactAdmin": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.AccountId:string"
        },
        "contactBilling": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.AccountId:string"
        },
        "contactTech": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.AccountId:string"
        },
        "creation": {
          "canBeNull": false,
          "fullType": "date",
          "readOnly": true,
          "required": true,
          "type": "date"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
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
          "required": true,
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
          "required": true,
          "type": "service.RenewalTypeEnum"
        },
        "serviceId": {
          "canBeNull": false,
          "fullType": "coreTypes.ServiceId:long",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.ServiceId:long"
        },
        "status": {
          "canBeNull": false,
          "fullType": "service.StateEnum",
          "readOnly": true,
          "required": true,
          "type": "service.StateEnum"
        }
      }
    }
  },
  "resourcePath": "/cdn/webstorage"
}