import {Schema} from '../../src/schema';

// imported from https://eu.api.soyoustart.com:443/1.0/hosting/reseller.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the HOSTING_RESELLER service",
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
      "path": "/hosting/reseller"
    },
    {
      "description": "Reseller",
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
              "description": "The internal name of your reseller service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.reseller.product"
        }
      ],
      "path": "/hosting/reseller/{serviceName}"
    },
    {
      "description": "Change the contacts of this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Launch a contact change procedure",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The contact to set as admin contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactAdmin",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The contact to set as billing contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactBilling",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The contact to set as tech contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactTech",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your reseller service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/hosting/reseller/{serviceName}/changeContact"
    },
    {
      "description": "Reseller.change_email",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change user email",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "New email",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your reseller service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/hosting/reseller/{serviceName}/email"
    },
    {
      "description": "Reseller.change_language",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change language of the Plesk instance",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "reseller.pleskLanguageTypeEnum",
              "description": "Locale value",
              "fullType": "reseller.pleskLanguageTypeEnum",
              "name": "language",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your reseller service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/hosting/reseller/{serviceName}/language"
    },
    {
      "description": "Reseller.reboot",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Restart instance",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your reseller service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Force a hard reboot",
              "fullType": "boolean",
              "name": "hard",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/hosting/reseller/{serviceName}/reboot"
    },
    {
      "description": "Reseller.reinstall",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reinstall instance",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your reseller service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/hosting/reseller/{serviceName}/reinstall"
    },
    {
      "description": "Reseller.resetPassword",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get reset instance password url",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your reseller service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/hosting/reseller/{serviceName}/resetPasswordUrl"
    },
    {
      "description": "Reseller.set_reverse",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Set new reverse to ip",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain to set the ip reverse",
              "fullType": "string",
              "name": "reverse",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your reseller service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/hosting/reseller/{serviceName}/reverse"
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
              "description": "The internal name of your reseller service",
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
              "description": "New object properties",
              "fullType": "services.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your reseller service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/hosting/reseller/{serviceName}/serviceInfos"
    },
    {
      "description": "Reseller.list_snapshot",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List instance's current snapshots",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your reseller service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "reseller.snapshot[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Make manual snapshot",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your reseller service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/hosting/reseller/{serviceName}/snapshot"
    },
    {
      "description": "Reseller.get_snapshot",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Detail of a snapshot",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your reseller service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Snapshot targeted",
              "fullType": "string",
              "name": "snapshotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "reseller.snapshot"
        }
      ],
      "path": "/hosting/reseller/{serviceName}/snapshot/{snapshotId}"
    },
    {
      "description": "Reseller.restore_snapshot",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Restore a snapshot",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your reseller service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Snapshot to restore",
              "fullType": "string",
              "name": "snapshotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/hosting/reseller/{serviceName}/snapshot/{snapshotId}/restore"
    },
    {
      "description": "Reseller.list_task",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get list of tasks",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your reseller service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "reseller.task[]"
        }
      ],
      "path": "/hosting/reseller/{serviceName}/task"
    },
    {
      "description": "Reseller.get_task",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get task information given its id",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your reseller service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Task id to retrieve",
              "fullType": "string",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "reseller.task"
        }
      ],
      "path": "/hosting/reseller/{serviceName}/task/{taskId}"
    }
  ],
  "basePath": "https://eu.api.soyoustart.com/1.0",
  "models": {
    "hosting.reseller.metaType": {
      "description": "Plesk instance meta details",
      "id": "metaType",
      "namespace": "hosting.reseller",
      "properties": {
        "email": {
          "canBeNull": false,
          "description": "Customer email",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Region hosting the cloud instance",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.reseller.product": {
      "description": "Reseller",
      "id": "product",
      "namespace": "hosting.reseller",
      "properties": {
        "action": {
          "canBeNull": true,
          "description": "Current action done on the instance",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": true,
          "description": "Ip address of the Plesk instance",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "meta": {
          "canBeNull": false,
          "description": "Additional information about the plesk",
          "fullType": "hosting.reseller.metaType",
          "readOnly": true,
          "required": false,
          "type": "hosting.reseller.metaType"
        },
        "progress": {
          "canBeNull": true,
          "description": "Progression of an action on the instance if any",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the instance",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Reseller flavor",
          "fullType": "hosting.reseller.resellerTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.reseller.resellerTypeEnum"
        },
        "typeDetail": {
          "canBeNull": false,
          "description": "Details about the plesk type",
          "fullType": "hosting.reseller.productType",
          "readOnly": true,
          "required": false,
          "type": "hosting.reseller.productType"
        },
        "url": {
          "canBeNull": true,
          "description": "Plesk server address",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.reseller.productType": {
      "description": "Plesk instance type details",
      "id": "productType",
      "namespace": "hosting.reseller",
      "properties": {
        "consumers": {
          "canBeNull": false,
          "description": "Number of allowed customers",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "cpu": {
          "canBeNull": false,
          "description": "Instance's cpu",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "databases": {
          "canBeNull": false,
          "description": "Number of allowed databases",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "diskSize": {
          "canBeNull": false,
          "description": "Disk size of the instance (in GB)",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "emailAccounts": {
          "canBeNull": false,
          "description": "Number of allowed email accounts",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "ram": {
          "canBeNull": false,
          "description": "Instance's ram (in GB)",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "Type name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "vCores": {
          "canBeNull": false,
          "description": "Number of vCore",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "websites": {
          "canBeNull": false,
          "description": "Number of allowed websites",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "hosting.reseller.resellerTypeEnum": {
      "description": "Reseller type",
      "enum": [
        "TYPE1",
        "TYPE2",
        "TYPE3",
        "TYPE4",
        "TYPE5"
      ],
      "enumType": "string",
      "id": "resellerTypeEnum",
      "namespace": "hosting.reseller"
    },
    "reseller.pleskLanguageTypeEnum": {
      "description": "Possible values for language type",
      "enum": [
        "ar",
        "zh-CN",
        "zh-TW",
        "cs-CZ",
        "da-DK",
        "nl-NL",
        "en-US",
        "fi-FI",
        "fr-FR",
        "de-DE",
        "el-GR",
        "he-IL",
        "hu-HU",
        "id-ID",
        "it-IT",
        "ja-JP",
        "ko-KR",
        "ms-MY",
        "nb-NO",
        "pl-PL",
        "pt-BR",
        "pt-PT",
        "ro-RO",
        "ru-RU",
        "es-ES",
        "sv-SE",
        "tl-PH",
        "th-TH",
        "tr-TR",
        "uk-UA",
        "vi-VN"
      ],
      "enumType": "string",
      "id": "pleskLanguageTypeEnum",
      "namespace": "reseller"
    },
    "reseller.snapshot": {
      "description": "Reseller snapshot",
      "id": "snapshot",
      "namespace": "reseller",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Snapshot creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Snapshot id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "snashotName": {
          "canBeNull": false,
          "description": "Snapshot name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Snapshot type",
          "fullType": "reseller.snapshotTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "reseller.snapshotTypeEnum"
        }
      }
    },
    "reseller.snapshotTypeEnum": {
      "description": "Possible values for snapshot type",
      "enum": [
        "automatic",
        "manual"
      ],
      "enumType": "string",
      "id": "snapshotTypeEnum",
      "namespace": "reseller"
    },
    "reseller.task": {
      "description": "Reseller task",
      "id": "task",
      "namespace": "reseller",
      "properties": {
        "currentStep": {
          "canBeNull": false,
          "description": "Task current step",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "expectedDoneDate": {
          "canBeNull": true,
          "description": "Task expected done date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Task id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lastUpdateDate": {
          "canBeNull": true,
          "description": "Task last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "productDomain": {
          "canBeNull": false,
          "description": "Linked product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "progress": {
          "canBeNull": false,
          "description": "Task percentage progression",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "taskName": {
          "canBeNull": false,
          "description": "Task name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "taskStatus": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "reseller.taskTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "reseller.taskTypeEnum"
        }
      }
    },
    "reseller.taskTypeEnum": {
      "description": "Possible values for task status",
      "enum": [
        "done",
        "error",
        "doing",
        "todo",
        "unknown"
      ],
      "enumType": "string",
      "id": "taskTypeEnum",
      "namespace": "reseller"
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
    }
  },
  "resourcePath": "/hosting/reseller"
}