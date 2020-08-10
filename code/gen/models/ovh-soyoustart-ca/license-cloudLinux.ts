import {Schema} from '../../src/schema';

export const schema: Schema = {
  "resourcePath": "/license/cloudLinux",
  "apis": [
    {
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "license.cloudLinux.CloudLinux",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The name of your CloudLinux license"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "license.cloudLinux.CloudLinux"
        }
      ],
      "description": "Your CloudLinux license",
      "path": "/license/cloudLinux/{serviceName}"
    },
    {
      "path": "/license/cloudLinux/{serviceName}/tasks",
      "description": "List the license.Task objects",
      "operations": [
        {
          "description": "Tasks linked to this license",
          "parameters": [
            {
              "dataType": "license.ActionType",
              "required": false,
              "paramType": "query",
              "name": "action",
              "fullType": "license.ActionType",
              "description": "Filter the value of action property (=)"
            },
            {
              "dataType": "license.TaskStateEnum",
              "required": false,
              "paramType": "query",
              "name": "status",
              "fullType": "license.TaskStateEnum",
              "description": "Filter the value of status property (=)"
            },
            {
              "description": "The name of your CloudLinux license",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "long[]",
          "httpMethod": "GET",
          "responseFullType": "long[]",
          "resellerOnly": false
        }
      ]
    },
    {
      "path": "/license/cloudLinux/{serviceName}/tasks/{taskId}",
      "description": "licenses Todos",
      "operations": [
        {
          "responseFullType": "license.Task",
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseType": "license.Task",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The name of your CloudLinux license",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "description": "This Task id",
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "taskId"
            }
          ],
          "description": "Get this object properties"
        }
      ]
    },
    {
      "description": "Confirm termination of your service",
      "path": "/license/cloudLinux/{serviceName}/confirmTermination",
      "operations": [
        {
          "responseFullType": "string",
          "resellerOnly": false,
          "responseType": "string",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "description": "What next after your termination request",
              "dataType": "service.TerminationFutureUseEnum",
              "required": false,
              "paramType": "body",
              "name": "futureUse",
              "fullType": "service.TerminationFutureUseEnum"
            },
            {
              "fullType": "service.TerminationReasonEnum",
              "name": "reason",
              "paramType": "body",
              "required": false,
              "dataType": "service.TerminationReasonEnum",
              "description": "Reason of your termination request"
            },
            {
              "dataType": "string",
              "required": false,
              "paramType": "body",
              "name": "commentary",
              "fullType": "string",
              "description": "Commentary about your termination request"
            },
            {
              "description": "The termination token sent by mail to the admin contact",
              "required": true,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "token"
            },
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The name of your CloudLinux license"
            }
          ],
          "noAuthentication": false,
          "description": "Confirm termination of your service"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string",
          "httpMethod": "POST",
          "responseType": "string",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The name of your CloudLinux license",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            }
          ],
          "description": "Terminate your service"
        }
      ],
      "description": "Terminate your service",
      "path": "/license/cloudLinux/{serviceName}/terminate"
    },
    {
      "path": "/license/cloudLinux/{serviceName}/serviceInfos",
      "description": "Details about a Service",
      "operations": [
        {
          "responseFullType": "services.Service",
          "resellerOnly": false,
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The name of your CloudLinux license"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "services.Service",
          "httpMethod": "GET"
        },
        {
          "httpMethod": "PUT",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "description": "Alter this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "services.Service",
              "name": null,
              "paramType": "body",
              "required": true,
              "dataType": "services.Service",
              "description": "New object properties"
            },
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The name of your CloudLinux license"
            }
          ],
          "responseFullType": "void",
          "resellerOnly": false
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "license.CloudLinuxOrderConfiguration[]",
          "responseType": "license.CloudLinuxOrderConfiguration[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "description": "Your license Ip",
              "required": true,
              "paramType": "query",
              "dataType": "ipv4",
              "fullType": "ipv4",
              "name": "ip"
            }
          ],
          "noAuthentication": false,
          "description": "Get the orderable CloudLinux versions"
        }
      ],
      "path": "/license/cloudLinux/orderableVersions",
      "description": "Get the orderable CloudLinux versions"
    },
    {
      "path": "/license/cloudLinux",
      "description": "Operations about the LICENSE service",
      "operations": [
        {
          "responseFullType": "string[]",
          "resellerOnly": false,
          "responseType": "string[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "parameters": [],
          "noAuthentication": false,
          "description": "List available services"
        }
      ]
    }
  ],
  "apiVersion": "1.0",
  "models": {
    "license.OrderableCloudLinuxCompatibilityInfos": {
      "namespace": "license",
      "properties": {
        "version": {
          "description": null,
          "type": "license.CloudLinuxVersionEnum",
          "canBeNull": false
        }
      },
      "id": "OrderableCloudLinuxCompatibilityInfos",
      "description": "All versions available for CloudLinux products"
    },
    "service.TerminationReasonEnum": {
      "enumType": "string",
      "description": "All reasons you can provide for a service termination",
      "id": "TerminationReasonEnum",
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
      "namespace": "service"
    },
    "services.Service": {
      "namespace": "services",
      "properties": {
        "contactBilling": {
          "readOnly": true,
          "description": null,
          "type": "string",
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string"
        },
        "engagedUpTo": {
          "fullType": "date",
          "canBeNull": true,
          "type": "date",
          "description": null,
          "readOnly": true
        },
        "contactTech": {
          "readOnly": true,
          "description": null,
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "type": "string"
        },
        "serviceId": {
          "readOnly": true,
          "description": null,
          "type": "long",
          "canBeNull": false,
          "fullType": "coreTypes.ServiceId:long"
        },
        "contactAdmin": {
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "type": "string",
          "readOnly": true,
          "description": null
        },
        "expiration": {
          "readOnly": true,
          "description": null,
          "type": "date",
          "canBeNull": false,
          "fullType": "date"
        },
        "status": {
          "fullType": "service.StateEnum",
          "canBeNull": false,
          "type": "service.StateEnum",
          "description": null,
          "readOnly": true
        },
        "possibleRenewPeriod": {
          "type": "long[]",
          "canBeNull": true,
          "fullType": "long[]",
          "readOnly": true,
          "description": "All the possible renew period of your service in month"
        },
        "renew": {
          "fullType": "service.RenewType",
          "canBeNull": true,
          "type": "service.RenewType",
          "description": "Way of handling the renew",
          "readOnly": false
        },
        "creation": {
          "readOnly": true,
          "description": null,
          "fullType": "date",
          "canBeNull": false,
          "type": "date"
        },
        "renewalType": {
          "fullType": "service.RenewalTypeEnum",
          "canBeNull": false,
          "type": "service.RenewalTypeEnum",
          "description": null,
          "readOnly": true
        },
        "domain": {
          "type": "string",
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "description": null
        },
        "canDeleteAtExpiration": {
          "readOnly": true,
          "description": "Indicates that the service can be set up to be deleted at expiration",
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean"
        }
      },
      "id": "Service",
      "description": "Details about a Service"
    },
    "license.CloudLinuxOrderConfiguration": {
      "id": "CloudLinuxOrderConfiguration",
      "description": "Allowed CloudLinux versions per matching serviceTypes",
      "properties": {
        "orderableVersions": {
          "description": null,
          "canBeNull": false,
          "type": "license.OrderableCloudLinuxCompatibilityInfos[]"
        },
        "serviceType": {
          "description": null,
          "type": "license.LicenseTypeEnum",
          "canBeNull": false
        }
      },
      "namespace": "license"
    },
    "license.TaskStateEnum": {
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStateEnum",
      "description": "All states a license Task can be in",
      "namespace": "license"
    },
    "service.RenewalTypeEnum": {
      "namespace": "service",
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
      "description": "Detailed renewal type of a service",
      "id": "RenewalTypeEnum"
    },
    "service.RenewType": {
      "namespace": "service",
      "properties": {
        "forced": {
          "type": "boolean",
          "canBeNull": false,
          "description": "The service forced to be renewed"
        },
        "deleteAtExpiration": {
          "description": "The service will be deleted at expiration",
          "type": "boolean",
          "canBeNull": false
        },
        "manualPayment": {
          "description": "The service needs to be manually renewed and paid",
          "canBeNull": true,
          "type": "boolean"
        },
        "period": {
          "canBeNull": true,
          "type": "long",
          "description": "period of renew in month"
        },
        "automatic": {
          "canBeNull": false,
          "type": "boolean",
          "description": "The service is automatically renewed"
        }
      },
      "id": "RenewType",
      "description": "Map a possible renew for a specific service"
    },
    "service.StateEnum": {
      "namespace": "service",
      "description": "",
      "id": "StateEnum",
      "enumType": "string",
      "enum": [
        "expired",
        "inCreation",
        "ok",
        "pendingDebt",
        "unPaid"
      ]
    },
    "license.ActionType": {
      "namespace": "license",
      "enumType": "string",
      "id": "ActionType",
      "description": "A short description of what does the Task on your license",
      "enum": [
        "addWindowFromExistingSerial",
        "changeIp",
        "changeOs",
        "installLicense",
        "optionUpgrade",
        "releaseOption",
        "versionUpgrade"
      ]
    },
    "license.LicenseTypeEnum": {
      "namespace": "license",
      "enumType": "string",
      "id": "LicenseTypeEnum",
      "description": "Possible values for license type",
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
      ]
    },
    "service.TerminationFutureUseEnum": {
      "enum": [
        "NOT_REPLACING_SERVICE",
        "OTHER",
        "SUBSCRIBE_AN_OTHER_SERVICE",
        "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
        "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
      ],
      "enumType": "string",
      "description": "All future uses you can provide for a service termination",
      "id": "TerminationFutureUseEnum",
      "namespace": "service"
    },
    "license.CloudLinuxVersionEnum": {
      "enum": [
        "SINGLE",
        "WITH_CPANEL",
        "WITH_PLESK12",
        "cloudlinux-license"
      ],
      "id": "CloudLinuxVersionEnum",
      "description": "All versions for CloudLinux product",
      "enumType": "string",
      "namespace": "license"
    },
    "license.StateEnum": {
      "enum": [
        "ok",
        "released",
        "terminated",
        "toDeliver"
      ],
      "description": "All states a license can be in",
      "id": "StateEnum",
      "enumType": "string",
      "namespace": "license"
    },
    "license.Task": {
      "description": "licenses Todos",
      "id": "Task",
      "properties": {
        "lastUpdate": {
          "canBeNull": false,
          "fullType": "datetime",
          "type": "datetime",
          "description": "The last time this Task was updated",
          "readOnly": true
        },
        "action": {
          "readOnly": true,
          "description": "This Task description",
          "type": "license.ActionType",
          "fullType": "license.ActionType",
          "canBeNull": false
        },
        "status": {
          "canBeNull": false,
          "fullType": "license.TaskStateEnum",
          "type": "license.TaskStateEnum",
          "readOnly": true,
          "description": "Current Taks status"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "readOnly": true,
          "description": "This Task name"
        },
        "taskId": {
          "canBeNull": false,
          "fullType": "long",
          "type": "long",
          "readOnly": true,
          "description": "This Task id"
        },
        "todoDate": {
          "canBeNull": false,
          "fullType": "datetime",
          "type": "datetime",
          "description": "When was this Task created",
          "readOnly": true
        },
        "doneDate": {
          "description": "When was this Task done",
          "readOnly": true,
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true
        }
      },
      "namespace": "license"
    },
    "license.cloudLinux.CloudLinux": {
      "properties": {
        "version": {
          "readOnly": true,
          "description": "This license version",
          "canBeNull": false,
          "fullType": "license.CloudLinuxVersionEnum",
          "type": "license.CloudLinuxVersionEnum"
        },
        "licenseId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "description": "The license id on license provider side",
          "readOnly": true
        },
        "creation": {
          "description": "This license creation date",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "datetime",
          "type": "datetime"
        },
        "status": {
          "description": "This license state",
          "readOnly": true,
          "type": "license.StateEnum",
          "fullType": "license.StateEnum",
          "canBeNull": false
        },
        "domain": {
          "readOnly": true,
          "description": "The internal name of your license",
          "type": "string",
          "fullType": "string",
          "canBeNull": false
        },
        "ip": {
          "canBeNull": false,
          "fullType": "ipv4",
          "type": "ipv4",
          "description": "The ip on which this license is attached",
          "readOnly": true
        }
      },
      "id": "CloudLinux",
      "description": "Your CloudLinux license",
      "namespace": "license.cloudLinux"
    }
  },
  "basePath": "https://ca.api.soyoustart.com/1.0"
}