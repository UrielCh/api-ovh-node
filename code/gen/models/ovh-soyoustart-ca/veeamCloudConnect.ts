import {Schema} from '../../src/schema';

export const schema: Schema = {
  "resourcePath": "/veeamCloudConnect",
  "apis": [
    {
      "operations": [
        {
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "string[]",
          "description": "List available services",
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "string[]"
        }
      ],
      "path": "/veeamCloudConnect",
      "description": "Operations about the VEEAMCC service"
    },
    {
      "description": "Details about a Service",
      "path": "/veeamCloudConnect/{serviceName}/serviceInfos",
      "operations": [
        {
          "responseFullType": "services.Service",
          "resellerOnly": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "services.Service",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "Domain of the service"
            }
          ]
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "description": "Alter this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "New object properties",
              "required": true,
              "paramType": "body",
              "dataType": "services.Service",
              "fullType": "services.Service",
              "name": null
            },
            {
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "PUT"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "veeamCloudConnect.Task",
          "responseType": "veeamCloudConnect.Task",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Domain of the service",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            }
          ],
          "description": "Reset your Cloud Tenant Password"
        }
      ],
      "path": "/veeamCloudConnect/{serviceName}/resetPassword",
      "description": "resetPassword operations"
    },
    {
      "path": "/veeamCloudConnect/{serviceName}/orderableUpgrade",
      "description": "orderableUpgrade operations",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "veeamCloudConnect.Offer[]",
          "parameters": [
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "Domain of the service"
            }
          ],
          "noAuthentication": false,
          "description": "List the possible upgrades on your Veeam Cloud Connect account",
          "httpMethod": "GET",
          "responseType": "veeamCloudConnect.Offer[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ]
    },
    {
      "description": "capabilities operations",
      "path": "/veeamCloudConnect/{serviceName}/capabilities",
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "veeamCloudConnect.offerCapabilities",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "fullType": "string",
              "description": "Domain of the service"
            }
          ],
          "description": "Show capabilities of your current offer",
          "resellerOnly": false,
          "responseFullType": "veeamCloudConnect.offerCapabilities"
        }
      ]
    },
    {
      "description": "List the veeamCloudConnect.BackupRepository objects",
      "path": "/veeamCloudConnect/{serviceName}/backupRepository",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "fullType": "string",
              "description": "Domain of the service"
            }
          ],
          "description": "Veeam Backup Repository linked to this Veeam Cloud Connect account",
          "httpMethod": "GET",
          "responseType": "string[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "string[]"
        },
        {
          "responseFullType": "veeamCloudConnect.Task[]",
          "resellerOnly": false,
          "parameters": [
            {
              "description": "Domain of the service",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            }
          ],
          "noAuthentication": false,
          "description": "Add a new Backup Repository to your professional account",
          "httpMethod": "POST",
          "responseType": "veeamCloudConnect.Task[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "veeamCloudConnect.Task[]",
          "responseType": "veeamCloudConnect.Task[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "paramType": "body",
              "required": true,
              "dataType": "long",
              "fullType": "long",
              "name": "newQuota",
              "description": "my new quota in GB"
            },
            {
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            },
            {
              "fullType": "string",
              "name": "inventoryName",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "description": "The inventory name of your backup repository"
            }
          ],
          "noAuthentication": false,
          "description": "Change your quota"
        }
      ],
      "description": "upgradeQuota operations",
      "path": "/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota"
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "Domain of the service"
            },
            {
              "name": "inventoryName",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "description": "The inventory name of your backup repository"
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties",
          "responseType": "veeamCloudConnect.BackupRepository",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseFullType": "veeamCloudConnect.BackupRepository"
        },
        {
          "description": "Delete this backup Repository. ",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "description": "Domain of the service"
            },
            {
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "inventoryName",
              "fullType": "string",
              "description": "The inventory name of your backup repository"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "veeamCloudConnect.Task[]",
          "httpMethod": "DELETE",
          "responseFullType": "veeamCloudConnect.Task[]",
          "resellerOnly": false
        }
      ],
      "path": "/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}",
      "description": "Veeam Backup Repository"
    },
    {
      "description": "Veeam Cloud Connect account",
      "path": "/veeamCloudConnect/{serviceName}",
      "operations": [
        {
          "responseFullType": "veeamCloudConnect.Account",
          "resellerOnly": false,
          "responseType": "veeamCloudConnect.Account",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            }
          ],
          "description": "Get this object properties"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "long[]",
          "description": "Tasks associated with Cloud Tenant",
          "parameters": [
            {
              "fullType": "string",
              "name": "name",
              "required": false,
              "paramType": "query",
              "dataType": "string",
              "description": "Filter the value of name property (like)"
            },
            {
              "description": "Filter the value of state property (=)",
              "paramType": "query",
              "required": false,
              "dataType": "veeamCloudConnect.TaskStateEnum",
              "fullType": "veeamCloudConnect.TaskStateEnum",
              "name": "state"
            },
            {
              "description": "Domain of the service",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "long[]"
        }
      ],
      "path": "/veeamCloudConnect/{serviceName}/task",
      "description": "List the veeamCloudConnect.Task objects"
    },
    {
      "description": "Operation with the Cloud Tenant Account",
      "path": "/veeamCloudConnect/{serviceName}/task/{taskId}",
      "operations": [
        {
          "responseFullType": "veeamCloudConnect.Task",
          "resellerOnly": false,
          "responseType": "veeamCloudConnect.Task",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Domain of the service",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            },
            {
              "paramType": "path",
              "required": true,
              "dataType": "long",
              "fullType": "long",
              "name": "taskId",
              "description": null
            }
          ],
          "description": "Get this object properties"
        }
      ]
    }
  ],
  "apiVersion": "1.0",
  "models": {
    "services.Service": {
      "namespace": "services",
      "properties": {
        "contactBilling": {
          "type": "string",
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "description": null
        },
        "engagedUpTo": {
          "description": null,
          "readOnly": true,
          "fullType": "date",
          "canBeNull": true,
          "type": "date"
        },
        "contactTech": {
          "readOnly": true,
          "description": null,
          "type": "string",
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string"
        },
        "serviceId": {
          "type": "long",
          "fullType": "coreTypes.ServiceId:long",
          "canBeNull": false,
          "description": null,
          "readOnly": true
        },
        "contactAdmin": {
          "readOnly": true,
          "description": null,
          "type": "string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false
        },
        "expiration": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": true,
          "description": null
        },
        "status": {
          "type": "service.StateEnum",
          "fullType": "service.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": null
        },
        "possibleRenewPeriod": {
          "canBeNull": true,
          "fullType": "long[]",
          "type": "long[]",
          "description": "All the possible renew period of your service in month",
          "readOnly": true
        },
        "renew": {
          "readOnly": false,
          "description": "Way of handling the renew",
          "canBeNull": true,
          "fullType": "service.RenewType",
          "type": "service.RenewType"
        },
        "creation": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": true,
          "description": null
        },
        "renewalType": {
          "canBeNull": false,
          "fullType": "service.RenewalTypeEnum",
          "type": "service.RenewalTypeEnum",
          "description": null,
          "readOnly": true
        },
        "domain": {
          "readOnly": true,
          "description": null,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "canDeleteAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "description": "Indicates that the service can be set up to be deleted at expiration",
          "readOnly": true
        }
      },
      "id": "Service",
      "description": "Details about a Service"
    },
    "complexType.UnitAndValue<T>": {
      "id": "UnitAndValue",
      "generics": [
        "T"
      ],
      "description": "A numeric value tagged with its unit",
      "properties": {
        "value": {
          "canBeNull": false,
          "type": "T",
          "description": null
        },
        "unit": {
          "description": null,
          "type": "string",
          "canBeNull": false
        }
      },
      "namespace": "complexType"
    },
    "veeamCloudConnect.Account": {
      "namespace": "veeamCloudConnect",
      "properties": {
        "location": {
          "canBeNull": false,
          "fullType": "veeamCloudConnect.Location",
          "type": "veeamCloudConnect.Location",
          "description": "Datacenter where your Cloud is physically located",
          "readOnly": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "description": "Your login in the Veeam Cloud Connect interface",
          "readOnly": true
        },
        "productOffer": {
          "canBeNull": false,
          "fullType": "veeamCloudConnect.Offer",
          "type": "veeamCloudConnect.Offer",
          "readOnly": true,
          "description": "The commercial offer linked to your veeam cloud connect"
        },
        "vmCount": {
          "description": "Backuped VMs quantity on your account",
          "readOnly": true,
          "type": "long",
          "fullType": "long",
          "canBeNull": true
        }
      },
      "id": "Account",
      "description": "Veeam Cloud Connect account"
    },
    "veeamCloudConnect.BackupRepository": {
      "namespace": "veeamCloudConnect",
      "properties": {
        "quotaUsed": {
          "description": "The quota used on this Backup repository",
          "readOnly": true,
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "fullType": "complexType.UnitAndValue<long>"
        },
        "inventoryName": {
          "type": "string",
          "canBeNull": false,
          "fullType": "string",
          "description": "The inventory name of your backup repository",
          "readOnly": true
        },
        "usage": {
          "type": "long",
          "canBeNull": true,
          "fullType": "long",
          "description": "The usage in percent of this backup repository",
          "readOnly": true
        },
        "replicationZone": {
          "type": "veeamCloudConnect.Location",
          "canBeNull": true,
          "fullType": "veeamCloudConnect.Location",
          "description": "The replication zone of your repository",
          "readOnly": true
        },
        "state": {
          "description": "The state of your backup repository",
          "readOnly": true,
          "fullType": "veeamCloudConnect.BackupRepositoryStateEnum",
          "canBeNull": false,
          "type": "veeamCloudConnect.BackupRepositoryStateEnum"
        },
        "quota": {
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "fullType": "complexType.UnitAndValue<long>",
          "description": "The quota allowed on this Backup repository",
          "readOnly": true
        }
      },
      "description": "Veeam Backup Repository",
      "id": "BackupRepository"
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
          "description": "The service forced to be renewed",
          "type": "boolean",
          "canBeNull": false
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "type": "boolean",
          "description": "The service will be deleted at expiration"
        },
        "manualPayment": {
          "description": "The service needs to be manually renewed and paid",
          "canBeNull": true,
          "type": "boolean"
        },
        "period": {
          "description": "period of renew in month",
          "canBeNull": true,
          "type": "long"
        },
        "automatic": {
          "description": "The service is automatically renewed",
          "canBeNull": false,
          "type": "boolean"
        }
      },
      "id": "RenewType",
      "description": "Map a possible renew for a specific service"
    },
    "veeamCloudConnect.BackupRepositoryStateEnum": {
      "namespace": "veeamCloudConnect",
      "description": "All states a Cloud Tenant backup repository can be in",
      "id": "BackupRepositoryStateEnum",
      "enumType": "string",
      "enum": [
        "configuring",
        "delivered",
        "disabled",
        "disabling",
        "error",
        "migrating",
        "removing"
      ]
    },
    "veeamCloudConnect.offerCapabilities": {
      "description": "Details about Veeam Cloud Connect offer",
      "id": "offerCapabilities",
      "properties": {
        "minimumUsage": {
          "type": "long",
          "canBeNull": false,
          "description": "Required usage on all repositories to add a new one (percent)"
        },
        "maxStoragesCount": {
          "type": "long",
          "canBeNull": false,
          "description": "Max number of repositories you can add on your account"
        },
        "maxQuota": {
          "type": "long",
          "canBeNull": false,
          "description": "Maximum quota you can apply on your repositories in GB"
        },
        "defaultQuota": {
          "description": "Default quota applied on new repositories in GB",
          "canBeNull": false,
          "type": "long"
        },
        "replication": {
          "description": "Are data replicated over two storages",
          "type": "boolean",
          "canBeNull": false
        },
        "vmCapacity": {
          "canBeNull": false,
          "type": "long",
          "description": "Included storage per vm"
        },
        "wanAccelerator": {
          "type": "boolean",
          "canBeNull": false,
          "description": "Is wan accelerator enabled"
        },
        "multiStorages": {
          "description": "Is account allowed to add new repositories",
          "type": "boolean",
          "canBeNull": false
        }
      },
      "namespace": "veeamCloudConnect"
    },
    "veeamCloudConnect.Offer": {
      "enumType": "string",
      "id": "Offer",
      "description": "All orderable Veeam Cloud Connect offers",
      "enum": [
        "advanced",
        "demo",
        "starter"
      ],
      "namespace": "veeamCloudConnect"
    },
    "veeamCloudConnect.Location": {
      "description": "All Location where cloud can be physically located",
      "id": "Location",
      "enumType": "string",
      "enum": [
        "bhs1",
        "rbx2",
        "sbg1"
      ],
      "namespace": "veeamCloudConnect"
    },
    "veeamCloudConnect.Task": {
      "namespace": "veeamCloudConnect",
      "properties": {
        "state": {
          "description": "Current Task state",
          "readOnly": true,
          "type": "veeamCloudConnect.TaskStateEnum",
          "canBeNull": false,
          "fullType": "veeamCloudConnect.TaskStateEnum"
        },
        "startDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "description": "Start task date and time",
          "readOnly": true
        },
        "taskId": {
          "type": "long",
          "canBeNull": false,
          "fullType": "long",
          "description": null,
          "readOnly": true
        },
        "progress": {
          "description": "Current progress",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "type": "long"
        },
        "endDate": {
          "description": "Done task date and time",
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": true,
          "type": "datetime"
        },
        "name": {
          "fullType": "string",
          "canBeNull": false,
          "type": "string",
          "description": "Task name",
          "readOnly": true
        }
      },
      "id": "Task",
      "description": "Operation with the Cloud Tenant Account"
    },
    "veeamCloudConnect.TaskStateEnum": {
      "namespace": "veeamCloudConnect",
      "enumType": "string",
      "id": "TaskStateEnum",
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
      ]
    }
  },
  "basePath": "https://ca.api.soyoustart.com/1.0"
}