import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/hosting/reseller",
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
      "description": "Operations about the HOSTING_RESELLER service"
    },
    {
      "path": "/hosting/reseller/{serviceName}",
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
          "responseType": "hosting.reseller.product",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Reseller"
    },
    {
      "path": "/hosting/reseller/{serviceName}/changeContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "contactAdmin",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as admin contact"
            },
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
      "path": "/hosting/reseller/{serviceName}/email",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "New email"
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
          "description": "Change user email"
        }
      ],
      "description": "Reseller.change_email"
    },
    {
      "path": "/hosting/reseller/{serviceName}/language",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "language",
              "dataType": "reseller.pleskLanguageTypeEnum",
              "paramType": "body",
              "fullType": "reseller.pleskLanguageTypeEnum",
              "required": true,
              "description": "Locale value"
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
          "description": "Change language of the Plesk instance"
        }
      ],
      "description": "Reseller.change_language"
    },
    {
      "path": "/hosting/reseller/{serviceName}/reboot",
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
              "name": "hard",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Force a hard reboot"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Restart instance"
        }
      ],
      "description": "Reseller.reboot"
    },
    {
      "path": "/hosting/reseller/{serviceName}/reinstall",
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Reinstall instance"
        }
      ],
      "description": "Reseller.reinstall"
    },
    {
      "path": "/hosting/reseller/{serviceName}/resetPasswordUrl",
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
          "description": "Get reset instance password url"
        }
      ],
      "description": "Reseller.resetPassword"
    },
    {
      "path": "/hosting/reseller/{serviceName}/reverse",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "reverse",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Domain to set the ip reverse"
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
          "description": "Set new reverse to ip"
        }
      ],
      "description": "Reseller.set_reverse"
    },
    {
      "path": "/hosting/reseller/{serviceName}/serviceInfos",
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
      "path": "/hosting/reseller/{serviceName}/snapshot",
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
          "responseType": "reseller.snapshot[]",
          "noAuthentication": false,
          "description": "List instance's current snapshots"
        },
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Make manual snapshot"
        }
      ],
      "description": "Reseller.list_snapshot"
    },
    {
      "path": "/hosting/reseller/{serviceName}/snapshot/{snapshotId}",
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
              "name": "snapshotId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Snapshot ID"
            }
          ],
          "responseType": "reseller.snapshot",
          "noAuthentication": false,
          "description": "Detail of a snapshot"
        }
      ],
      "description": "Reseller.get_snapshot"
    },
    {
      "path": "/hosting/reseller/{serviceName}/snapshot/{snapshotId}/restore",
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
              "name": "snapshotId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Snapshot ID"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Restore a snapshot"
        }
      ],
      "description": "Reseller.restore_snapshot"
    },
    {
      "path": "/hosting/reseller/{serviceName}/task",
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
          "responseType": "reseller.task[]",
          "noAuthentication": false,
          "description": "Get list of tasks"
        }
      ],
      "description": "Reseller.list_task"
    },
    {
      "path": "/hosting/reseller/{serviceName}/task/{taskId}",
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
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Task ID"
            }
          ],
          "responseType": "reseller.task",
          "noAuthentication": false,
          "description": "Get task information given its id"
        }
      ],
      "description": "Reseller.get_task"
    }
  ],
  "resourcePath": "/hosting/reseller",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "hosting.reseller.metaType": {
      "id": "metaType",
      "namespace": "hosting.reseller",
      "description": "Plesk instance meta details",
      "properties": {
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Customer email",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Region hosting the cloud instance",
          "required": true
        }
      }
    },
    "hosting.reseller.product": {
      "id": "product",
      "namespace": "hosting.reseller",
      "description": "Reseller",
      "properties": {
        "action": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current action done on the instance",
          "required": false
        },
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "Ip address of the Plesk instance",
          "required": false
        },
        "meta": {
          "type": "hosting.reseller.metaType",
          "fullType": "hosting.reseller.metaType",
          "canBeNull": false,
          "readOnly": true,
          "description": "Additional information about the plesk",
          "required": true
        },
        "progress": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Progression of an action on the instance if any",
          "required": false
        },
        "status": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of the instance",
          "required": true
        },
        "type": {
          "type": "hosting.reseller.resellerTypeEnum",
          "fullType": "hosting.reseller.resellerTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Reseller flavor",
          "required": true
        },
        "typeDetail": {
          "type": "hosting.reseller.productType",
          "fullType": "hosting.reseller.productType",
          "canBeNull": false,
          "readOnly": true,
          "description": "Details about the plesk type",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Plesk server address",
          "required": false
        }
      }
    },
    "hosting.reseller.productType": {
      "id": "productType",
      "namespace": "hosting.reseller",
      "description": "Plesk instance type details",
      "properties": {
        "consumers": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of allowed customers",
          "required": true
        },
        "cpu": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Instance's cpu",
          "required": true
        },
        "databases": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of allowed databases",
          "required": true
        },
        "diskSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Disk size of the instance (in GB)",
          "required": true
        },
        "emailAccounts": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of allowed email accounts",
          "required": true
        },
        "ram": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Instance's ram (in GB)",
          "required": true
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type name",
          "required": true
        },
        "vCores": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of vCore",
          "required": true
        },
        "websites": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of allowed websites",
          "required": true
        }
      }
    },
    "hosting.reseller.resellerTypeEnum": {
      "id": "resellerTypeEnum",
      "namespace": "hosting.reseller",
      "description": "Reseller type",
      "enum": [
        "TYPE1",
        "TYPE2",
        "TYPE3",
        "TYPE4",
        "TYPE5"
      ],
      "enumType": "string"
    },
    "reseller.pleskLanguageTypeEnum": {
      "id": "pleskLanguageTypeEnum",
      "namespace": "reseller",
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
      "enumType": "string"
    },
    "reseller.snapshot": {
      "id": "snapshot",
      "namespace": "reseller",
      "description": "Reseller snapshot",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Snapshot creation date",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Snapshot id",
          "required": true
        },
        "snashotName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Snapshot name",
          "required": true
        },
        "type": {
          "type": "reseller.snapshotTypeEnum",
          "fullType": "reseller.snapshotTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Snapshot type",
          "required": true
        }
      }
    },
    "reseller.snapshotTypeEnum": {
      "id": "snapshotTypeEnum",
      "namespace": "reseller",
      "description": "Possible values for snapshot type",
      "enum": [
        "automatic",
        "manual"
      ],
      "enumType": "string"
    },
    "reseller.task": {
      "id": "task",
      "namespace": "reseller",
      "description": "Reseller task",
      "properties": {
        "currentStep": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task current step",
          "required": true
        },
        "expectedDoneDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Task expected done date",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task id",
          "required": true
        },
        "lastUpdateDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Task last update date",
          "required": false
        },
        "productDomain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Linked product",
          "required": true
        },
        "progress": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task percentage progression",
          "required": true
        },
        "taskName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task name",
          "required": true
        },
        "taskStatus": {
          "type": "reseller.taskTypeEnum",
          "fullType": "reseller.taskTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task status",
          "required": true
        }
      }
    },
    "reseller.taskTypeEnum": {
      "id": "taskTypeEnum",
      "namespace": "reseller",
      "description": "Possible values for task status",
      "enum": [
        "done",
        "error",
        "doing",
        "todo",
        "unknown"
      ],
      "enumType": "string"
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