import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/veeamCloudConnect",
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
      "description": "Operations about the VEEAMCC service"
    },
    {
      "path": "/veeamCloudConnect/{serviceName}",
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
          "responseType": "veeamCloudConnect.Account",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Veeam Cloud Connect account"
    },
    {
      "path": "/veeamCloudConnect/{serviceName}/backupRepository",
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
          "description": "Veeam Backup Repository linked to this Veeam Cloud Connect account"
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
          "responseType": "veeamCloudConnect.Task[]",
          "noAuthentication": false,
          "description": "Add a new Backup Repository to your professional account"
        }
      ],
      "description": "List the veeamCloudConnect.BackupRepository objects"
    },
    {
      "path": "/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}",
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
              "name": "inventoryName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Inventory name"
            }
          ],
          "responseType": "veeamCloudConnect.Task[]",
          "noAuthentication": false,
          "description": "Delete this backup Repository. "
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
              "name": "inventoryName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Inventory name"
            }
          ],
          "responseType": "veeamCloudConnect.BackupRepository",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Veeam Backup Repository"
    },
    {
      "path": "/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "newQuota",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "my new quota in GB"
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
              "name": "inventoryName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Inventory name"
            }
          ],
          "responseType": "veeamCloudConnect.Task[]",
          "noAuthentication": false,
          "description": "Change your quota"
        }
      ],
      "description": "upgradeQuota operations"
    },
    {
      "path": "/veeamCloudConnect/{serviceName}/capabilities",
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
          "responseType": "veeamCloudConnect.offerCapabilities",
          "noAuthentication": false,
          "description": "Show capabilities of your current offer"
        }
      ],
      "description": "capabilities operations"
    },
    {
      "path": "/veeamCloudConnect/{serviceName}/orderableUpgrade",
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
          "responseType": "veeamCloudConnect.Offer[]",
          "noAuthentication": false,
          "description": "List the possible upgrades on your Veeam Cloud Connect account"
        }
      ],
      "description": "orderableUpgrade operations"
    },
    {
      "path": "/veeamCloudConnect/{serviceName}/resetPassword",
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
          "responseType": "veeamCloudConnect.Task",
          "noAuthentication": false,
          "description": "Reset your Cloud Tenant Password"
        }
      ],
      "description": "resetPassword operations"
    },
    {
      "path": "/veeamCloudConnect/{serviceName}/serviceInfos",
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
      "path": "/veeamCloudConnect/{serviceName}/task",
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
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of name property (like)"
            },
            {
              "name": "state",
              "dataType": "veeamCloudConnect.TaskStateEnum",
              "paramType": "query",
              "fullType": "veeamCloudConnect.TaskStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Tasks associated with Cloud Tenant"
        }
      ],
      "description": "List the veeamCloudConnect.Task objects"
    },
    {
      "path": "/veeamCloudConnect/{serviceName}/task/{taskId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "taskId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Task ID"
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
          "responseType": "veeamCloudConnect.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Operation with the Cloud Tenant Account"
    }
  ],
  "resourcePath": "/veeamCloudConnect",
  "basePath": "https://eu.api.soyoustart.com/1.0",
  "models": {
    "complexType.UnitAndValue<T>": {
      "id": "UnitAndValue",
      "namespace": "complexType",
      "description": "A numeric value tagged with its unit",
      "generics": [
        "T"
      ],
      "properties": {
        "unit": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "T",
          "fullType": "T",
          "canBeNull": false,
          "readOnly": false,
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
    "veeamCloudConnect.Account": {
      "id": "Account",
      "namespace": "veeamCloudConnect",
      "description": "Veeam Cloud Connect account",
      "properties": {
        "location": {
          "type": "veeamCloudConnect.Location",
          "fullType": "veeamCloudConnect.Location",
          "canBeNull": false,
          "readOnly": true,
          "description": "Datacenter where your Cloud is physically located",
          "required": true
        },
        "productOffer": {
          "type": "veeamCloudConnect.Offer",
          "fullType": "veeamCloudConnect.Offer",
          "canBeNull": false,
          "readOnly": true,
          "description": "The commercial offer linked to your veeam cloud connect",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Your login in the Veeam Cloud Connect interface",
          "required": true
        },
        "vmCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Backuped VMs quantity on your account",
          "required": false
        }
      }
    },
    "veeamCloudConnect.BackupRepository": {
      "id": "BackupRepository",
      "namespace": "veeamCloudConnect",
      "description": "Veeam Backup Repository",
      "properties": {
        "inventoryName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The inventory name of your backup repository",
          "required": true
        },
        "quota": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": true,
          "description": "The quota allowed on this Backup repository",
          "required": true
        },
        "quotaUsed": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": true,
          "description": "The quota used on this Backup repository",
          "required": false
        },
        "replicationZone": {
          "type": "veeamCloudConnect.Location",
          "fullType": "veeamCloudConnect.Location",
          "canBeNull": true,
          "readOnly": true,
          "description": "The replication zone of your repository",
          "required": false
        },
        "state": {
          "type": "veeamCloudConnect.BackupRepositoryStateEnum",
          "fullType": "veeamCloudConnect.BackupRepositoryStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The state of your backup repository",
          "required": true
        },
        "usage": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "The usage in percent of this backup repository",
          "required": false
        }
      }
    },
    "veeamCloudConnect.BackupRepositoryStateEnum": {
      "id": "BackupRepositoryStateEnum",
      "namespace": "veeamCloudConnect",
      "description": "All states a Cloud Tenant backup repository can be in",
      "enum": [
        "configuring",
        "delivered",
        "disabled",
        "disabling",
        "error",
        "migrating",
        "removing"
      ],
      "enumType": "string"
    },
    "veeamCloudConnect.Location": {
      "id": "Location",
      "namespace": "veeamCloudConnect",
      "description": "All Location where cloud can be physically located",
      "enum": [
        "bhs1",
        "rbx2",
        "sbg1"
      ],
      "enumType": "string"
    },
    "veeamCloudConnect.Offer": {
      "id": "Offer",
      "namespace": "veeamCloudConnect",
      "description": "All orderable Veeam Cloud Connect offers",
      "enum": [
        "advanced",
        "demo",
        "starter"
      ],
      "enumType": "string"
    },
    "veeamCloudConnect.Task": {
      "id": "Task",
      "namespace": "veeamCloudConnect",
      "description": "Operation with the Cloud Tenant Account",
      "properties": {
        "endDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Done task date and time",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task name",
          "required": true
        },
        "progress": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current progress",
          "required": true
        },
        "startDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Start task date and time",
          "required": false
        },
        "state": {
          "type": "veeamCloudConnect.TaskStateEnum",
          "fullType": "veeamCloudConnect.TaskStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current Task state",
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
    "veeamCloudConnect.TaskStateEnum": {
      "id": "TaskStateEnum",
      "namespace": "veeamCloudConnect",
      "description": "All states a Cloud Tenant Task can be in",
      "enum": [
        "canceled",
        "doing",
        "done",
        "error",
        "fixing",
        "problem",
        "toCreate",
        "todo",
        "unknown",
        "waitingTodo"
      ],
      "enumType": "string"
    },
    "veeamCloudConnect.offerCapabilities": {
      "id": "offerCapabilities",
      "namespace": "veeamCloudConnect",
      "description": "Details about Veeam Cloud Connect offer",
      "properties": {
        "defaultQuota": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Default quota applied on new repositories in GB",
          "required": true
        },
        "maxQuota": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum quota you can apply on your repositories in GB",
          "required": true
        },
        "maxStoragesCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Max number of repositories you can add on your account",
          "required": true
        },
        "minimumUsage": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Required usage on all repositories to add a new one (percent)",
          "required": true
        },
        "multiStorages": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Is account allowed to add new repositories",
          "required": true
        },
        "replication": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Are data replicated over two storages",
          "required": true
        },
        "vmCapacity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Included storage per vm",
          "required": true
        },
        "wanAccelerator": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Is wan accelerator enabled",
          "required": true
        }
      }
    }
  }
}