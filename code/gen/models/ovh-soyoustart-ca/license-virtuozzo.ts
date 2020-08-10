import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apis": [
    {
      "description": "Confirm termination of your service",
      "path": "/license/virtuozzo/{serviceName}/confirmTermination",
      "operations": [
        {
          "responseType": "string",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST",
          "resellerOnly": false,
          "description": "Confirm termination of your service",
          "responseFullType": "string",
          "parameters": [
            {
              "dataType": "service.TerminationFutureUseEnum",
              "name": "futureUse",
              "paramType": "body",
              "fullType": "service.TerminationFutureUseEnum",
              "description": "What next after your termination request",
              "required": false
            },
            {
              "fullType": "service.TerminationReasonEnum",
              "paramType": "body",
              "name": "reason",
              "dataType": "service.TerminationReasonEnum",
              "required": false,
              "description": "Reason of your termination request"
            },
            {
              "name": "commentary",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "description": "Commentary about your termination request",
              "required": false
            },
            {
              "required": true,
              "description": "The termination token sent by mail to the admin contact",
              "fullType": "string",
              "paramType": "body",
              "dataType": "string",
              "name": "token"
            },
            {
              "required": true,
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "paramType": "path",
              "dataType": "string",
              "name": "serviceName"
            }
          ],
          "noAuthentication": false
        }
      ]
    },
    {
      "path": "/license/virtuozzo/{serviceName}/canLicenseBeMovedTo",
      "operations": [
        {
          "parameters": [
            {
              "dataType": "ipv4",
              "name": "destinationIp",
              "paramType": "query",
              "fullType": "ipv4",
              "description": "The Ip on which you want to move this license",
              "required": true
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "description": "The name of your Virtuozzo license",
              "required": true
            }
          ],
          "responseFullType": "license.ChangeIpStatus",
          "noAuthentication": false,
          "responseType": "license.ChangeIpStatus",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "resellerOnly": false,
          "description": "Will tell if the ip can accept the license"
        }
      ],
      "description": "canLicenseBeMovedTo operations"
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The name of your Virtuozzo license",
              "required": true,
              "dataType": "string",
              "name": "serviceName",
              "fullType": "string",
              "paramType": "path"
            }
          ],
          "responseFullType": "services.Service",
          "description": "Get this object properties",
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseType": "services.Service",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        },
        {
          "noAuthentication": false,
          "responseFullType": "void",
          "parameters": [
            {
              "paramType": "body",
              "fullType": "services.Service",
              "dataType": "services.Service",
              "name": null,
              "required": true,
              "description": "New object properties"
            },
            {
              "description": "The name of your Virtuozzo license",
              "required": true,
              "name": "serviceName",
              "dataType": "string",
              "fullType": "string",
              "paramType": "path"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "description": "Alter this object properties",
          "resellerOnly": false,
          "httpMethod": "PUT"
        }
      ],
      "path": "/license/virtuozzo/{serviceName}/serviceInfos",
      "description": "Details about a Service"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "long[]",
          "httpMethod": "GET",
          "resellerOnly": false,
          "description": "tasks linked to this license",
          "responseFullType": "long[]",
          "parameters": [
            {
              "name": "status",
              "dataType": "license.TaskStateEnum",
              "fullType": "license.TaskStateEnum",
              "paramType": "query",
              "description": "Filter the value of status property (=)",
              "required": false
            },
            {
              "description": "Filter the value of action property (=)",
              "required": false,
              "name": "action",
              "dataType": "license.ActionType",
              "fullType": "license.ActionType",
              "paramType": "query"
            },
            {
              "dataType": "string",
              "name": "serviceName",
              "fullType": "string",
              "paramType": "path",
              "description": "The name of your Virtuozzo license",
              "required": true
            }
          ],
          "noAuthentication": false
        }
      ],
      "path": "/license/virtuozzo/{serviceName}/tasks",
      "description": "List the license.Task objects"
    },
    {
      "description": "licenses Todos",
      "path": "/license/virtuozzo/{serviceName}/tasks/{taskId}",
      "operations": [
        {
          "httpMethod": "GET",
          "description": "Get this object properties",
          "resellerOnly": false,
          "responseType": "license.Task",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [
            {
              "required": true,
              "description": "The name of your Virtuozzo license",
              "paramType": "path",
              "fullType": "string",
              "dataType": "string",
              "name": "serviceName"
            },
            {
              "description": "This Task id",
              "required": true,
              "name": "taskId",
              "dataType": "long",
              "fullType": "long",
              "paramType": "path"
            }
          ],
          "responseFullType": "license.Task",
          "noAuthentication": false
        }
      ]
    },
    {
      "path": "/license/virtuozzo/{serviceName}/terminate",
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "string",
          "httpMethod": "POST",
          "description": "Terminate your service",
          "resellerOnly": false,
          "responseFullType": "string",
          "parameters": [
            {
              "paramType": "path",
              "fullType": "string",
              "name": "serviceName",
              "dataType": "string",
              "required": true,
              "description": "The name of your Virtuozzo license"
            }
          ],
          "noAuthentication": false
        }
      ],
      "description": "Terminate your service"
    },
    {
      "description": "changeIp operations",
      "operations": [
        {
          "description": "Move this license to another Ip",
          "resellerOnly": false,
          "httpMethod": "POST",
          "responseType": "license.Task",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "paramType": "body",
              "fullType": "ipv4",
              "name": "destinationIp",
              "dataType": "ipv4",
              "required": true,
              "description": "The Ip on which you want to move this license"
            },
            {
              "required": true,
              "description": "The name of your Virtuozzo license",
              "paramType": "path",
              "fullType": "string",
              "name": "serviceName",
              "dataType": "string"
            }
          ],
          "responseFullType": "license.Task"
        }
      ],
      "path": "/license/virtuozzo/{serviceName}/changeIp"
    },
    {
      "description": "Your Virtuozzo license",
      "operations": [
        {
          "noAuthentication": false,
          "responseFullType": "license.virtuozzo.Virtuozzo",
          "parameters": [
            {
              "required": true,
              "description": "The name of your Virtuozzo license",
              "paramType": "path",
              "fullType": "string",
              "name": "serviceName",
              "dataType": "string"
            }
          ],
          "resellerOnly": false,
          "description": "Get this object properties",
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "license.virtuozzo.Virtuozzo"
        },
        {
          "parameters": [
            {
              "paramType": "body",
              "fullType": "license.virtuozzo.Virtuozzo",
              "dataType": "license.virtuozzo.Virtuozzo",
              "name": null,
              "required": true,
              "description": "New object properties"
            },
            {
              "paramType": "path",
              "fullType": "string",
              "name": "serviceName",
              "dataType": "string",
              "required": true,
              "description": "The name of your Virtuozzo license"
            }
          ],
          "responseFullType": "void",
          "noAuthentication": false,
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "PUT",
          "resellerOnly": false,
          "description": "Alter this object properties"
        }
      ],
      "path": "/license/virtuozzo/{serviceName}"
    },
    {
      "description": "List the license.Option objects",
      "operations": [
        {
          "noAuthentication": false,
          "responseFullType": "license.OptionLabel[]",
          "parameters": [
            {
              "required": false,
              "description": "Filter the value of label property (=)",
              "paramType": "query",
              "fullType": "license.OptionLabel",
              "name": "label",
              "dataType": "license.OptionLabel"
            },
            {
              "required": true,
              "description": "The name of your Virtuozzo license",
              "paramType": "path",
              "fullType": "string",
              "name": "serviceName",
              "dataType": "string"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "license.OptionLabel[]",
          "description": "Options linked to this license",
          "resellerOnly": false,
          "httpMethod": "GET"
        }
      ],
      "path": "/license/virtuozzo/{serviceName}/option"
    },
    {
      "description": "Your License options",
      "operations": [
        {
          "description": "Get this object properties",
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseType": "license.Option",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "responseFullType": "license.Option",
          "parameters": [
            {
              "required": true,
              "description": "The name of your Virtuozzo license",
              "paramType": "path",
              "fullType": "string",
              "dataType": "string",
              "name": "serviceName"
            },
            {
              "paramType": "path",
              "fullType": "license.OptionLabel",
              "name": "label",
              "dataType": "license.OptionLabel",
              "required": true,
              "description": "This option designation"
            }
          ]
        },
        {
          "description": "release this Option",
          "resellerOnly": false,
          "httpMethod": "DELETE",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "license.Task",
          "noAuthentication": false,
          "responseFullType": "license.Task",
          "parameters": [
            {
              "required": true,
              "description": "The name of your Virtuozzo license",
              "paramType": "path",
              "fullType": "string",
              "dataType": "string",
              "name": "serviceName"
            },
            {
              "name": "label",
              "dataType": "license.OptionLabel",
              "fullType": "license.OptionLabel",
              "paramType": "path",
              "description": "This option designation",
              "required": true
            }
          ]
        }
      ],
      "path": "/license/virtuozzo/{serviceName}/option/{label}"
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "responseFullType": "ipBlock[]",
          "parameters": [
            {
              "required": true,
              "description": "The name of your Virtuozzo license",
              "paramType": "path",
              "fullType": "string",
              "name": "serviceName",
              "dataType": "string"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "ipBlock[]",
          "resellerOnly": false,
          "description": "Returns an array of ips where the license can be moved to",
          "httpMethod": "GET"
        }
      ],
      "path": "/license/virtuozzo/{serviceName}/allowedDestinationIp",
      "description": "allowedDestinationIp operations"
    },
    {
      "description": "Get the orderable Virtuozzo versions",
      "operations": [
        {
          "responseFullType": "license.VirtuozzoOrderConfiguration[]",
          "parameters": [
            {
              "description": "Your license Ip",
              "required": true,
              "dataType": "ipv4",
              "name": "ip",
              "fullType": "ipv4",
              "paramType": "query"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "GET",
          "description": "Get the orderable Virtuozzo versions",
          "resellerOnly": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "license.VirtuozzoOrderConfiguration[]"
        }
      ],
      "path": "/license/virtuozzo/orderableVersions"
    },
    {
      "description": "Operations about the LICENSE service",
      "path": "/license/virtuozzo",
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "string[]",
          "httpMethod": "GET",
          "description": "List available services",
          "resellerOnly": false,
          "responseFullType": "string[]",
          "parameters": [],
          "noAuthentication": false
        }
      ]
    }
  ],
  "basePath": "https://ca.api.soyoustart.com/1.0",
  "apiVersion": "1.0",
  "resourcePath": "/license/virtuozzo",
  "models": {
    "license.ChangeIpStatus": {
      "id": "ChangeIpStatus",
      "properties": {
        "message": {
          "type": "license.ChangeIpMessageEnum",
          "description": null,
          "canBeNull": false
        },
        "success": {
          "canBeNull": false,
          "type": "boolean",
          "description": null
        }
      },
      "namespace": "license",
      "description": "License change ip status return"
    },
    "license.Option": {
      "description": "Your License options",
      "namespace": "license",
      "properties": {
        "amount": {
          "readOnly": true,
          "canBeNull": true,
          "fullType": "string",
          "description": "Quantity or corresponding label of the designated option enabled on your license",
          "type": "string"
        },
        "label": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "license.OptionLabel",
          "type": "license.OptionLabel",
          "description": "This option designation"
        },
        "version": {
          "readOnly": true,
          "canBeNull": true,
          "fullType": "string",
          "description": "This option related version",
          "type": "string"
        },
        "expirationDate": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "datetime",
          "type": "datetime",
          "description": "This option expiration date"
        },
        "canBeDeleted": {
          "type": "boolean",
          "description": "Specifies whether this option can be released or not",
          "readOnly": true,
          "fullType": "boolean",
          "canBeNull": false
        }
      },
      "id": "Option"
    },
    "license.Task": {
      "id": "Task",
      "description": "licenses Todos",
      "namespace": "license",
      "properties": {
        "lastUpdate": {
          "description": "The last time this Task was updated",
          "type": "datetime",
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false
        },
        "action": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "license.ActionType",
          "type": "license.ActionType",
          "description": "This Task description"
        },
        "name": {
          "type": "string",
          "description": "This Task name",
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false
        },
        "status": {
          "description": "Current Taks status",
          "type": "license.TaskStateEnum",
          "readOnly": true,
          "fullType": "license.TaskStateEnum",
          "canBeNull": false
        },
        "doneDate": {
          "type": "datetime",
          "description": "When was this Task done",
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": true
        },
        "todoDate": {
          "type": "datetime",
          "description": "When was this Task created",
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": false
        },
        "taskId": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "long",
          "description": "This Task id",
          "type": "long"
        }
      }
    },
    "license.TaskStateEnum": {
      "enumType": "string",
      "description": "All states a license Task can be in",
      "namespace": "license",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "id": "TaskStateEnum"
    },
    "service.StateEnum": {
      "id": "StateEnum",
      "enum": [
        "expired",
        "inCreation",
        "ok",
        "pendingDebt",
        "unPaid"
      ],
      "namespace": "service",
      "enumType": "string",
      "description": ""
    },
    "service.RenewalTypeEnum": {
      "id": "RenewalTypeEnum",
      "enum": [
        "automaticForcedProduct",
        "automaticV2012",
        "automaticV2014",
        "automaticV2016",
        "manual",
        "oneShot",
        "option"
      ],
      "namespace": "service",
      "description": "Detailed renewal type of a service",
      "enumType": "string"
    },
    "license.ActionType": {
      "namespace": "license",
      "enum": [
        "addWindowFromExistingSerial",
        "changeIp",
        "changeOs",
        "installLicense",
        "optionUpgrade",
        "releaseOption",
        "versionUpgrade"
      ],
      "enumType": "string",
      "description": "A short description of what does the Task on your license",
      "id": "ActionType"
    },
    "service.TerminationFutureUseEnum": {
      "namespace": "service",
      "enum": [
        "NOT_REPLACING_SERVICE",
        "OTHER",
        "SUBSCRIBE_AN_OTHER_SERVICE",
        "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
        "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
      ],
      "enumType": "string",
      "description": "All future uses you can provide for a service termination",
      "id": "TerminationFutureUseEnum"
    },
    "service.TerminationReasonEnum": {
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
      "namespace": "service",
      "enumType": "string",
      "description": "All reasons you can provide for a service termination",
      "id": "TerminationReasonEnum"
    },
    "license.LicenseTypeEnum": {
      "namespace": "license",
      "enum": [
        "dedicated",
        "dedicatedCloud",
        "dedicatedFailover",
        "failover",
        "vm",
        "vps",
        "vps_ceph",
        "vps_classic",
        "vps_cloud",
        "vps_cloud_2016",
        "vps_ssd"
      ],
      "enumType": "string",
      "description": "Possible values for license type",
      "id": "LicenseTypeEnum"
    },
    "license.VirtuozzoContainerNumberEnum": {
      "id": "VirtuozzoContainerNumberEnum",
      "enum": [
        "2_CPU_001_CONTAINER",
        "2_CPU_003_CONTAINER",
        "2_CPU_010_CONTAINER",
        "2_CPU_030_CONTAINER",
        "2_CPU_060_CONTAINER",
        "2_CPU_100_CONTAINER"
      ],
      "namespace": "license",
      "enumType": "string",
      "description": "All quantities of container available for a Virtuozzo license"
    },
    "license.OrderableVirtuozzoCompatibilityInfos": {
      "description": "All versions available for Virtuozzo products",
      "namespace": "license",
      "properties": {
        "version": {
          "description": null,
          "type": "license.OrderableVirtuozzoVersionEnum",
          "canBeNull": false
        },
        "potentialProblems": {
          "type": "license.PotentialProblemVirtuozzoEnum[]",
          "description": null,
          "canBeNull": false
        },
        "compliantContainers": {
          "type": "license.OrderableVirtuozzoContainerNumberEnum[]",
          "description": null,
          "canBeNull": false
        }
      },
      "id": "OrderableVirtuozzoCompatibilityInfos"
    },
    "license.StateEnum": {
      "id": "StateEnum",
      "namespace": "license",
      "enum": [
        "ok",
        "released",
        "terminated",
        "toDeliver"
      ],
      "description": "All states a license can be in",
      "enumType": "string"
    },
    "license.ChangeIpMessageEnum": {
      "enumType": "string",
      "description": "Messages from change IP",
      "namespace": "license",
      "enum": [
        "OK",
        "destinationNotAllowed",
        "licenseAlreadyExists",
        "notAllowedToHandleThis",
        "notSameType",
        "sameIp",
        "versionNotAllowed"
      ],
      "id": "ChangeIpMessageEnum"
    },
    "license.OrderableVirtuozzoVersionEnum": {
      "enumType": "string",
      "description": "All versions available for Virtuozzo products",
      "namespace": "license",
      "enum": [
        "VIRTUOZZO_CONTAINERS_4_FOR_LINUX",
        "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS",
        "virtuozzo-4",
        "virtuozzo-4-for-windows"
      ],
      "id": "OrderableVirtuozzoVersionEnum"
    },
    "license.OrderableVirtuozzoContainerNumberEnum": {
      "enum": [
        "2_CPU_001_CONTAINER",
        "2_CPU_003_CONTAINER",
        "2_CPU_010_CONTAINER",
        "2_CPU_030_CONTAINER",
        "2_CPU_060_CONTAINER",
        "2_CPU_100_CONTAINER"
      ],
      "namespace": "license",
      "enumType": "string",
      "description": "All quantities of container available for a Virtuozzo license",
      "id": "OrderableVirtuozzoContainerNumberEnum"
    },
    "license.virtuozzo.Virtuozzo": {
      "id": "Virtuozzo",
      "properties": {
        "licenseId": {
          "description": "The license id on license provider side",
          "type": "string",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string"
        },
        "containerNumber": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "license.VirtuozzoContainerNumberEnum",
          "type": "license.VirtuozzoContainerNumberEnum",
          "description": "The amount of containers this license can manage"
        },
        "ip": {
          "fullType": "ipv4",
          "readOnly": true,
          "canBeNull": false,
          "description": "The ip on which this license is attached",
          "type": "ipv4"
        },
        "status": {
          "description": "This license state",
          "type": "license.StateEnum",
          "readOnly": true,
          "fullType": "license.StateEnum",
          "canBeNull": false
        },
        "version": {
          "fullType": "license.VirtuozzoVersionEnum",
          "readOnly": true,
          "canBeNull": false,
          "description": "This license version",
          "type": "license.VirtuozzoVersionEnum"
        },
        "domain": {
          "description": "The internal name of your license",
          "type": "string",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false
        },
        "deleteAtExpiration": {
          "type": "boolean",
          "description": "Shall we delete this on expiration ?",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "boolean"
        },
        "informationKey": {
          "fullType": "string",
          "readOnly": true,
          "canBeNull": true,
          "type": "string",
          "description": "This license Information key"
        },
        "creation": {
          "type": "datetime",
          "description": "This license creation date",
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false
        },
        "productKey": {
          "fullType": "string",
          "readOnly": true,
          "canBeNull": true,
          "type": "string",
          "description": "This license product key"
        }
      },
      "namespace": "license.virtuozzo",
      "description": "Your Virtuozzo license"
    },
    "license.VirtuozzoOrderConfiguration": {
      "properties": {
        "orderableVersions": {
          "description": null,
          "type": "license.OrderableVirtuozzoCompatibilityInfos[]",
          "canBeNull": false
        },
        "serviceType": {
          "type": "license.LicenseTypeEnum",
          "description": null,
          "canBeNull": false
        }
      },
      "description": "The serviceTypes allowed to Order a Virtuozzo version",
      "namespace": "license",
      "id": "VirtuozzoOrderConfiguration"
    },
    "service.RenewType": {
      "namespace": "service",
      "description": "Map a possible renew for a specific service",
      "properties": {
        "period": {
          "type": "long",
          "description": "period of renew in month",
          "canBeNull": true
        },
        "automatic": {
          "canBeNull": false,
          "description": "The service is automatically renewed",
          "type": "boolean"
        },
        "forced": {
          "canBeNull": false,
          "type": "boolean",
          "description": "The service forced to be renewed"
        },
        "manualPayment": {
          "type": "boolean",
          "description": "The service needs to be manually renewed and paid",
          "canBeNull": true
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "The service will be deleted at expiration",
          "type": "boolean"
        }
      },
      "id": "RenewType"
    },
    "license.PotentialProblemVirtuozzoEnum": {
      "id": "PotentialProblemVirtuozzoEnum",
      "enumType": "string",
      "description": "Tests that have failed for Virtuozzo products",
      "enum": [
        "isLinuxOs",
        "isOsVirtuozzo4Like",
        "isWindowsOs"
      ],
      "namespace": "license"
    },
    "license.VirtuozzoVersionEnum": {
      "enumType": "string",
      "description": "All versions available for Virtuozzo products",
      "namespace": "license",
      "enum": [
        "VIRTUOZZO_CONTAINERS_4_FOR_LINUX",
        "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS"
      ],
      "id": "VirtuozzoVersionEnum"
    },
    "license.OptionLabel": {
      "enumType": "string",
      "description": "The name of an option currently enabled on your license",
      "namespace": "license",
      "enum": [
        "ANTISPAM_SPAMASSASSIN",
        "ANTIVIRUS_DRWEB",
        "ANTIVIRUS_KASPERSKY",
        "DOMAINS",
        "LANGUAGE_PACK",
        "POWERPACK",
        "SQL_SERVER",
        "VIRTUOZZO_CONTAINERS"
      ],
      "id": "OptionLabel"
    },
    "services.Service": {
      "properties": {
        "possibleRenewPeriod": {
          "readOnly": true,
          "canBeNull": true,
          "fullType": "long[]",
          "type": "long[]",
          "description": "All the possible renew period of your service in month"
        },
        "serviceId": {
          "description": null,
          "type": "long",
          "readOnly": true,
          "fullType": "coreTypes.ServiceId:long",
          "canBeNull": false
        },
        "status": {
          "fullType": "service.StateEnum",
          "readOnly": true,
          "canBeNull": false,
          "type": "service.StateEnum",
          "description": null
        },
        "domain": {
          "type": "string",
          "description": null,
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false
        },
        "renewalType": {
          "fullType": "service.RenewalTypeEnum",
          "readOnly": true,
          "canBeNull": false,
          "type": "service.RenewalTypeEnum",
          "description": null
        },
        "renew": {
          "readOnly": false,
          "canBeNull": true,
          "fullType": "service.RenewType",
          "type": "service.RenewType",
          "description": "Way of handling the renew"
        },
        "contactBilling": {
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "engagedUpTo": {
          "type": "date",
          "description": null,
          "readOnly": true,
          "fullType": "date",
          "canBeNull": true
        },
        "contactTech": {
          "description": null,
          "type": "string",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "coreTypes.AccountId:string"
        },
        "canDeleteAtExpiration": {
          "fullType": "boolean",
          "readOnly": true,
          "canBeNull": false,
          "type": "boolean",
          "description": "Indicates that the service can be set up to be deleted at expiration"
        },
        "contactAdmin": {
          "description": null,
          "type": "string",
          "readOnly": true,
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false
        },
        "expiration": {
          "type": "date",
          "description": null,
          "readOnly": true,
          "fullType": "date",
          "canBeNull": false
        },
        "creation": {
          "description": null,
          "type": "date",
          "readOnly": true,
          "fullType": "date",
          "canBeNull": false
        }
      },
      "description": "Details about a Service",
      "namespace": "services",
      "id": "Service"
    }
  }
}