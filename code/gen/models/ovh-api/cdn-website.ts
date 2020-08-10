import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/cdn/website",
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
      "description": "Operations about the CDNWEBSITE service"
    },
    {
      "path": "/cdn/website/{serviceName}",
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
          "responseType": "cdn.website.Website",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Website CDN"
    },
    {
      "path": "/cdn/website/{serviceName}/serviceInfos",
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
      "path": "/cdn/website/{serviceName}/zone",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
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
          "responseType": "cdn.website.Task",
          "noAuthentication": false,
          "description": "Remove a zone from the CDN"
        },
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
          "responseType": "cdn.website.Zone",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "zone",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "zone DNS name to add on CDN"
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
          "responseType": "cdn.website.Zone",
          "noAuthentication": false,
          "description": "Configure a zone on CDN"
        }
      ],
      "description": "Zone on CDN"
    },
    {
      "path": "/cdn/website/{serviceName}/zone/backends",
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
          "responseType": "ipv4[]",
          "noAuthentication": false,
          "description": "Backend associated to this zone"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ipv4",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "ip to configure on the zone"
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
          "responseType": "cdn.website.Task",
          "noAuthentication": false,
          "description": "Configure a backend on the zone"
        }
      ],
      "description": "List the cdn.website.Backend objects"
    },
    {
      "path": "/cdn/website/{serviceName}/zone/backends/{ipv4}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
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
              "name": "ipv4",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ipv4"
            }
          ],
          "responseType": "cdn.website.Task",
          "noAuthentication": false,
          "description": "Remove a backend from the zone"
        },
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
            },
            {
              "name": "ipv4",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ipv4"
            }
          ],
          "responseType": "cdn.website.Backend",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Backend on zone"
    },
    {
      "path": "/cdn/website/{serviceName}/zone/backends/{ipv4}/tasks",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ipv4",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ipv4"
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
          "description": "Task associated to this backend"
        }
      ],
      "description": "List the cdn.website.Task objects"
    },
    {
      "path": "/cdn/website/{serviceName}/zone/backends/{ipv4}/tasks/{taskId}",
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
            },
            {
              "name": "ipv4",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ipv4"
            },
            {
              "name": "taskId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Task ID"
            }
          ],
          "responseType": "cdn.website.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Task on CDN"
    },
    {
      "path": "/cdn/website/{serviceName}/zone/domains",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Domain associated to this zone"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "domain to add on CDN"
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
          "responseType": "cdn.website.Domain",
          "noAuthentication": false,
          "description": "Configure a domain on CDN"
        }
      ],
      "description": "List the cdn.website.Domain objects"
    },
    {
      "path": "/cdn/website/{serviceName}/zone/domains/{domain}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "cdn.website.Task",
          "noAuthentication": false,
          "description": "Remove a domain from the CDN"
        },
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
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "cdn.website.Domain",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Domain on CDN"
    },
    {
      "path": "/cdn/website/{serviceName}/zone/domains/{domain}/flush",
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
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "cdn.website.Task",
          "noAuthentication": false,
          "description": "Flush all cache"
        }
      ],
      "description": "flush operations"
    },
    {
      "path": "/cdn/website/{serviceName}/zone/domains/{domain}/statistics",
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
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "period",
              "dataType": "cdn.website.StatsPeriodEnum",
              "paramType": "query",
              "fullType": "cdn.website.StatsPeriodEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "value",
              "dataType": "cdn.website.StatsValueEnum",
              "paramType": "query",
              "fullType": "cdn.website.StatsValueEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "type",
              "dataType": "cdn.website.StatsTypeEnum",
              "paramType": "query",
              "fullType": "cdn.website.StatsTypeEnum",
              "required": true,
              "description": ""
            }
          ],
          "responseType": "cdn.website.StatsDataType[]",
          "noAuthentication": false,
          "description": "Get statistics about request on CDN, bandwidth value in Bytes"
        }
      ],
      "description": "statistics operations"
    },
    {
      "path": "/cdn/website/{serviceName}/zone/domains/{domain}/tasks",
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
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Task associated to this domain"
        }
      ],
      "description": "List the cdn.website.Task objects"
    },
    {
      "path": "/cdn/website/{serviceName}/zone/domains/{domain}/tasks/{taskId}",
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
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "taskId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Task ID"
            }
          ],
          "responseType": "cdn.website.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Task on CDN"
    },
    {
      "path": "/cdn/website/{serviceName}/zone/tasks",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Task associated to this zone"
        }
      ],
      "description": "List the cdn.website.Task objects"
    },
    {
      "path": "/cdn/website/{serviceName}/zone/tasks/{taskId}",
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
            },
            {
              "name": "taskId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Task ID"
            }
          ],
          "responseType": "cdn.website.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Task on CDN"
    }
  ],
  "resourcePath": "/cdn/website",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "cdn.website.Backend": {
      "id": "Backend",
      "namespace": "cdn.website",
      "description": "Backend on zone",
      "properties": {
        "ipv4": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "cdn.website.BackendStatusEnum",
          "fullType": "cdn.website.BackendStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "cdn.website.BackendStatusEnum": {
      "id": "BackendStatusEnum",
      "namespace": "cdn.website",
      "description": "All states a status can be in",
      "enum": [
        "creating",
        "error",
        "on",
        "removing"
      ],
      "enumType": "string"
    },
    "cdn.website.Domain": {
      "id": "Domain",
      "namespace": "cdn.website",
      "description": "Domain on CDN",
      "properties": {
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "cdn.website.DomainStatusEnum",
          "fullType": "cdn.website.DomainStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "cdn.website.DomainStatusEnum": {
      "id": "DomainStatusEnum",
      "namespace": "cdn.website",
      "description": "All states a status can be in",
      "enum": [
        "error",
        "on",
        "removing"
      ],
      "enumType": "string"
    },
    "cdn.website.DomainZoneStatusEnum": {
      "id": "DomainZoneStatusEnum",
      "namespace": "cdn.website",
      "description": "All states a status can be in",
      "enum": [
        "error",
        "on",
        "removing"
      ],
      "enumType": "string"
    },
    "cdn.website.StatsDataType": {
      "id": "StatsDataType",
      "namespace": "cdn.website",
      "description": "A structure describing type of a stats hash",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "cdn.website.StatsPeriodEnum": {
      "id": "StatsPeriodEnum",
      "namespace": "cdn.website",
      "description": "Period of the statistics",
      "enum": [
        "day",
        "month",
        "week"
      ],
      "enumType": "string"
    },
    "cdn.website.StatsTypeEnum": {
      "id": "StatsTypeEnum",
      "namespace": "cdn.website",
      "description": "Type of statistics related to cache",
      "enum": [
        "backend",
        "cdn"
      ],
      "enumType": "string"
    },
    "cdn.website.StatsValueEnum": {
      "id": "StatsValueEnum",
      "namespace": "cdn.website",
      "description": "Value bandwidth or request",
      "enum": [
        "bandwidth",
        "request"
      ],
      "enumType": "string"
    },
    "cdn.website.Task": {
      "id": "Task",
      "namespace": "cdn.website",
      "description": "Task on CDN",
      "properties": {
        "comment": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "function": {
          "type": "cdn.website.TaskFunctionEnum",
          "fullType": "cdn.website.TaskFunctionEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "cdn.website.TaskStateEnum",
          "fullType": "cdn.website.TaskStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "cdn.website.TaskFunctionEnum": {
      "id": "TaskFunctionEnum",
      "namespace": "cdn.website",
      "description": "All function CDN task can be",
      "enum": [
        "flushAll",
        "installBackend",
        "removeBackend",
        "removeDomain",
        "removeZone"
      ],
      "enumType": "string"
    },
    "cdn.website.TaskStateEnum": {
      "id": "TaskStateEnum",
      "namespace": "cdn.website",
      "description": "All states a CDN task can be in",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string"
    },
    "cdn.website.Website": {
      "id": "Website",
      "namespace": "cdn.website",
      "description": "Website CDN",
      "properties": {
        "anycast": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "offer": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "service": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "cdn.website.Zone": {
      "id": "Zone",
      "namespace": "cdn.website",
      "description": "Zone on CDN",
      "properties": {
        "status": {
          "type": "cdn.website.DomainZoneStatusEnum",
          "fullType": "cdn.website.DomainZoneStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "zone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
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
    }
  }
}