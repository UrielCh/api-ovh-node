import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1.0",
  "resourcePath": "/license/directadmin",
  "models": {
    "license.DirectAdminOrderConfiguration": {
      "properties": {
        "serviceType": {
          "canBeNull": false,
          "type": "license.LicenseTypeEnum",
          "description": null
        },
        "orderableVersions": {
          "canBeNull": false,
          "type": "license.OrderableDirectAdminCompatibilityInfos[]",
          "description": null
        }
      },
      "namespace": "license",
      "description": "The serviceTypes allowed to Order a DirectAdmin version",
      "id": "DirectAdminOrderConfiguration"
    },
    "services.Service": {
      "properties": {
        "possibleRenewPeriod": {
          "description": "All the possible renew period of your service in month",
          "type": "long[]",
          "fullType": "long[]",
          "readOnly": true,
          "canBeNull": true
        },
        "serviceId": {
          "type": "long",
          "description": null,
          "readOnly": true,
          "fullType": "coreTypes.ServiceId:long",
          "canBeNull": false
        },
        "status": {
          "type": "service.StateEnum",
          "description": null,
          "fullType": "service.StateEnum",
          "readOnly": true,
          "canBeNull": false
        },
        "domain": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "description": null,
          "type": "string"
        },
        "renewalType": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "service.RenewalTypeEnum",
          "type": "service.RenewalTypeEnum",
          "description": null
        },
        "renew": {
          "type": "service.RenewType",
          "description": "Way of handling the renew",
          "readOnly": false,
          "fullType": "service.RenewType",
          "canBeNull": true
        },
        "contactBilling": {
          "type": "string",
          "description": null,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "canBeNull": false
        },
        "engagedUpTo": {
          "canBeNull": true,
          "readOnly": true,
          "fullType": "date",
          "description": null,
          "type": "date"
        },
        "contactTech": {
          "description": null,
          "type": "string",
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "canBeNull": false
        },
        "canDeleteAtExpiration": {
          "fullType": "boolean",
          "readOnly": true,
          "canBeNull": false,
          "type": "boolean",
          "description": "Indicates that the service can be set up to be deleted at expiration"
        },
        "contactAdmin": {
          "type": "string",
          "description": null,
          "readOnly": true,
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false
        },
        "expiration": {
          "description": null,
          "type": "date",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "date"
        },
        "creation": {
          "description": null,
          "type": "date",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "date"
        }
      },
      "description": "Details about a Service",
      "namespace": "services",
      "id": "Service"
    },
    "license.OrderableDirectAdminVersionEnum": {
      "id": "OrderableDirectAdminVersionEnum",
      "enumType": "string",
      "description": "All versions available for DirectAdmin products",
      "enum": [
        "DIRECTADMIN_1",
        "directadmin-license"
      ],
      "namespace": "license"
    },
    "license.DirectAdminOsEnum": {
      "namespace": "license",
      "enum": [
        "CentOs_5.0_32",
        "CentOs_5.0_64",
        "CentOs_6_32",
        "CentOs_6_64",
        "CentOs_7_64",
        "Debian_5.0_32",
        "Debian_5.0_64",
        "Debian_6.0_32",
        "Debian_6.0_64",
        "Debian_7.0_32",
        "Debian_7.0_64",
        "Debian_8.0_64",
        "FreeBSD_7.x_32",
        "FreeBSD_7.x_64",
        "FreeBSD_8.x_64",
        "FreeBSD_9.x_64"
      ],
      "description": "All operating systems available for DirectAdmin products",
      "enumType": "string",
      "id": "DirectAdminOsEnum"
    },
    "service.RenewType": {
      "namespace": "service",
      "description": "Map a possible renew for a specific service",
      "properties": {
        "period": {
          "canBeNull": true,
          "description": "period of renew in month",
          "type": "long"
        },
        "automatic": {
          "description": "The service is automatically renewed",
          "type": "boolean",
          "canBeNull": false
        },
        "forced": {
          "canBeNull": false,
          "description": "The service forced to be renewed",
          "type": "boolean"
        },
        "manualPayment": {
          "canBeNull": true,
          "type": "boolean",
          "description": "The service needs to be manually renewed and paid"
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "The service will be deleted at expiration",
          "type": "boolean"
        }
      },
      "id": "RenewType"
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
    "license.directadmin.DirectAdmin": {
      "namespace": "license.directadmin",
      "description": "Your DirectAdmin license",
      "properties": {
        "version": {
          "type": "license.DirectAdminVersionEnum",
          "description": "This license version",
          "fullType": "license.DirectAdminVersionEnum",
          "readOnly": true,
          "canBeNull": false
        },
        "os": {
          "canBeNull": false,
          "readOnly": false,
          "fullType": "license.DirectAdminOsEnum",
          "type": "license.DirectAdminOsEnum",
          "description": "This license operating system"
        },
        "status": {
          "readOnly": true,
          "fullType": "license.StateEnum",
          "canBeNull": false,
          "type": "license.StateEnum",
          "description": "This license state"
        },
        "licenseId": {
          "description": "The license id on license provider side",
          "type": "string",
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false
        },
        "ip": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "ipv4",
          "description": "The ip on which this license is attached",
          "type": "ipv4"
        },
        "creation": {
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime",
          "description": "This license creation date"
        },
        "deleteAtExpiration": {
          "type": "boolean",
          "description": "Shall we delete this on expiration ?",
          "fullType": "boolean",
          "readOnly": false,
          "canBeNull": false
        },
        "clientId": {
          "description": "The client id on license provider side",
          "type": "long",
          "fullType": "long",
          "readOnly": true,
          "canBeNull": false
        },
        "domain": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "type": "string",
          "description": "The internal name of your license"
        }
      },
      "id": "DirectAdmin"
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
    "license.OrderableDirectAdminCompatibilityInfos": {
      "id": "OrderableDirectAdminCompatibilityInfos",
      "properties": {
        "version": {
          "canBeNull": false,
          "type": "license.OrderableDirectAdminVersionEnum",
          "description": null
        }
      },
      "namespace": "license",
      "description": "All versions available for DirectAdmin products"
    },
    "license.DirectAdminVersionEnum": {
      "enum": [
        "DIRECTADMIN_1",
        "directadmin-license"
      ],
      "namespace": "license",
      "description": "All versions for DirectAdmin products",
      "enumType": "string",
      "id": "DirectAdminVersionEnum"
    },
    "license.ChangeIpStatus": {
      "id": "ChangeIpStatus",
      "properties": {
        "message": {
          "description": null,
          "type": "license.ChangeIpMessageEnum",
          "canBeNull": false
        },
        "success": {
          "description": null,
          "type": "boolean",
          "canBeNull": false
        }
      },
      "namespace": "license",
      "description": "License change ip status return"
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
    "license.Task": {
      "id": "Task",
      "description": "licenses Todos",
      "namespace": "license",
      "properties": {
        "lastUpdate": {
          "type": "datetime",
          "description": "The last time this Task was updated",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "datetime"
        },
        "action": {
          "type": "license.ActionType",
          "description": "This Task description",
          "fullType": "license.ActionType",
          "readOnly": true,
          "canBeNull": false
        },
        "name": {
          "description": "This Task name",
          "type": "string",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string"
        },
        "status": {
          "type": "license.TaskStateEnum",
          "description": "Current Taks status",
          "fullType": "license.TaskStateEnum",
          "readOnly": true,
          "canBeNull": false
        },
        "doneDate": {
          "description": "When was this Task done",
          "type": "datetime",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "datetime"
        },
        "todoDate": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "datetime",
          "type": "datetime",
          "description": "When was this Task created"
        },
        "taskId": {
          "type": "long",
          "description": "This Task id",
          "fullType": "long",
          "readOnly": true,
          "canBeNull": false
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
    }
  },
  "apis": [
    {
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "description": "Your license Ip",
              "fullType": "ipv4",
              "paramType": "query",
              "dataType": "ipv4",
              "name": "ip"
            }
          ],
          "responseFullType": "license.DirectAdminOrderConfiguration[]",
          "resellerOnly": false,
          "description": "Get the orderable DirectAdmin versions",
          "httpMethod": "GET",
          "responseType": "license.DirectAdminOrderConfiguration[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ],
      "path": "/license/directadmin/orderableVersions",
      "description": "Get the orderable DirectAdmin versions"
    },
    {
      "description": "Your DirectAdmin license",
      "path": "/license/directadmin/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "license.directadmin.DirectAdmin",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "description": "The name of your DirectAdmin license",
              "required": true
            }
          ],
          "responseFullType": "license.directadmin.DirectAdmin",
          "noAuthentication": false
        },
        {
          "responseFullType": "void",
          "parameters": [
            {
              "fullType": "license.directadmin.DirectAdmin",
              "paramType": "body",
              "name": null,
              "dataType": "license.directadmin.DirectAdmin",
              "required": true,
              "description": "New object properties"
            },
            {
              "description": "The name of your DirectAdmin license",
              "required": true,
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "PUT",
          "resellerOnly": false,
          "description": "Alter this object properties",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ]
    },
    {
      "description": "allowedDestinationIp operations",
      "operations": [
        {
          "parameters": [
            {
              "required": true,
              "description": "The name of your DirectAdmin license",
              "fullType": "string",
              "paramType": "path",
              "name": "serviceName",
              "dataType": "string"
            }
          ],
          "responseFullType": "ipBlock[]",
          "noAuthentication": false,
          "httpMethod": "GET",
          "resellerOnly": false,
          "description": "Returns an array of ips where the license can be moved to",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "ipBlock[]"
        }
      ],
      "path": "/license/directadmin/{serviceName}/allowedDestinationIp"
    },
    {
      "operations": [
        {
          "httpMethod": "POST",
          "description": "Confirm termination of your service",
          "resellerOnly": false,
          "responseType": "string",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseFullType": "string",
          "parameters": [
            {
              "description": "What next after your termination request",
              "required": false,
              "name": "futureUse",
              "dataType": "service.TerminationFutureUseEnum",
              "paramType": "body",
              "fullType": "service.TerminationFutureUseEnum"
            },
            {
              "fullType": "service.TerminationReasonEnum",
              "paramType": "body",
              "dataType": "service.TerminationReasonEnum",
              "name": "reason",
              "required": false,
              "description": "Reason of your termination request"
            },
            {
              "required": false,
              "description": "Commentary about your termination request",
              "fullType": "string",
              "paramType": "body",
              "name": "commentary",
              "dataType": "string"
            },
            {
              "description": "The termination token sent by mail to the admin contact",
              "required": true,
              "dataType": "string",
              "name": "token",
              "paramType": "body",
              "fullType": "string"
            },
            {
              "required": true,
              "description": "The name of your DirectAdmin license",
              "fullType": "string",
              "paramType": "path",
              "dataType": "string",
              "name": "serviceName"
            }
          ],
          "noAuthentication": false
        }
      ],
      "path": "/license/directadmin/{serviceName}/confirmTermination",
      "description": "Confirm termination of your service"
    },
    {
      "description": "Details about a Service",
      "path": "/license/directadmin/{serviceName}/serviceInfos",
      "operations": [
        {
          "responseFullType": "services.Service",
          "parameters": [
            {
              "description": "The name of your DirectAdmin license",
              "required": true,
              "dataType": "string",
              "name": "serviceName",
              "paramType": "path",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "services.Service",
          "httpMethod": "GET",
          "resellerOnly": false,
          "description": "Get this object properties"
        },
        {
          "resellerOnly": false,
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "name": null,
              "dataType": "services.Service",
              "paramType": "body",
              "fullType": "services.Service",
              "description": "New object properties",
              "required": true
            },
            {
              "description": "The name of your DirectAdmin license",
              "required": true,
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string"
            }
          ],
          "responseFullType": "void"
        }
      ]
    },
    {
      "description": "licenses Todos",
      "operations": [
        {
          "description": "Get this object properties",
          "resellerOnly": false,
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "license.Task",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "description": "The name of your DirectAdmin license",
              "fullType": "string",
              "paramType": "path",
              "dataType": "string",
              "name": "serviceName"
            },
            {
              "required": true,
              "description": "This Task id",
              "fullType": "long",
              "paramType": "path",
              "dataType": "long",
              "name": "taskId"
            }
          ],
          "responseFullType": "license.Task"
        }
      ],
      "path": "/license/directadmin/{serviceName}/tasks/{taskId}"
    },
    {
      "description": "List the license.Task objects",
      "path": "/license/directadmin/{serviceName}/tasks",
      "operations": [
        {
          "resellerOnly": false,
          "description": "tasks linked to this license",
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "long[]",
          "noAuthentication": false,
          "parameters": [
            {
              "required": false,
              "description": "Filter the value of status property (=)",
              "fullType": "license.TaskStateEnum",
              "paramType": "query",
              "dataType": "license.TaskStateEnum",
              "name": "status"
            },
            {
              "required": false,
              "description": "Filter the value of action property (=)",
              "fullType": "license.ActionType",
              "paramType": "query",
              "name": "action",
              "dataType": "license.ActionType"
            },
            {
              "fullType": "string",
              "paramType": "path",
              "name": "serviceName",
              "dataType": "string",
              "required": true,
              "description": "The name of your DirectAdmin license"
            }
          ],
          "responseFullType": "long[]"
        }
      ]
    },
    {
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "license.ChangeIpStatus",
          "httpMethod": "GET",
          "resellerOnly": false,
          "description": "Will tell if the ip can accept the license",
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
              "required": true,
              "description": "The name of your DirectAdmin license",
              "fullType": "string",
              "paramType": "path",
              "name": "serviceName",
              "dataType": "string"
            }
          ],
          "responseFullType": "license.ChangeIpStatus",
          "noAuthentication": false
        }
      ],
      "path": "/license/directadmin/{serviceName}/canLicenseBeMovedTo",
      "description": "canLicenseBeMovedTo operations"
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "responseFullType": "license.Task",
          "parameters": [
            {
              "description": "The operating system you want for this license",
              "required": true,
              "dataType": "license.DirectAdminOsEnum",
              "name": "os",
              "paramType": "body",
              "fullType": "license.DirectAdminOsEnum"
            },
            {
              "description": "The name of your DirectAdmin license",
              "required": true,
              "dataType": "string",
              "name": "serviceName",
              "paramType": "path",
              "fullType": "string"
            }
          ],
          "description": "Change the Operating System for a license",
          "resellerOnly": false,
          "httpMethod": "POST",
          "responseType": "license.Task",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ],
      "path": "/license/directadmin/{serviceName}/changeOs",
      "description": "changeOs operations"
    },
    {
      "path": "/license/directadmin/{serviceName}/terminate",
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "string",
          "description": "Terminate your service",
          "resellerOnly": false,
          "httpMethod": "POST",
          "noAuthentication": false,
          "responseFullType": "string",
          "parameters": [
            {
              "description": "The name of your DirectAdmin license",
              "required": true,
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string"
            }
          ]
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
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "license.Task",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "description": "The Ip on which you want to move this license",
              "fullType": "ipv4",
              "paramType": "body",
              "name": "destinationIp",
              "dataType": "ipv4"
            },
            {
              "fullType": "string",
              "paramType": "path",
              "dataType": "string",
              "name": "serviceName",
              "required": true,
              "description": "The name of your DirectAdmin license"
            }
          ],
          "responseFullType": "license.Task"
        }
      ],
      "path": "/license/directadmin/{serviceName}/changeIp"
    },
    {
      "description": "Operations about the LICENSE service",
      "path": "/license/directadmin",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [],
          "responseFullType": "string[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "string[]",
          "resellerOnly": false,
          "description": "List available services",
          "httpMethod": "GET"
        }
      ]
    }
  ],
  "basePath": "https://ca.api.soyoustart.com/1.0"
}