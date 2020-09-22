"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = {
    "apiVersion": "1.0",
    "apis": [
        {
            "description": "Operations about the VEEAMCC service",
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
            "path": "/veeamCloudConnect"
        },
        {
            "description": "Veeam Cloud Connect account",
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
                            "description": "Domain of the service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "veeamCloudConnect.Account"
                }
            ],
            "path": "/veeamCloudConnect/{serviceName}"
        },
        {
            "description": "List the veeamCloudConnect.BackupRepository objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Veeam Backup Repository linked to this Veeam Cloud Connect account",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Domain of the service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Add a new Backup Repository to your professional account",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Domain of the service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "veeamCloudConnect.Task[]"
                }
            ],
            "path": "/veeamCloudConnect/{serviceName}/backupRepository"
        },
        {
            "description": "Veeam Backup Repository",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete this backup Repository. ",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The inventory name of your backup repository",
                            "fullType": "string",
                            "name": "inventoryName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Domain of the service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "veeamCloudConnect.Task[]"
                },
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
                            "description": "The inventory name of your backup repository",
                            "fullType": "string",
                            "name": "inventoryName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Domain of the service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "veeamCloudConnect.BackupRepository"
                }
            ],
            "path": "/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}"
        },
        {
            "description": "upgradeQuota operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Change your quota",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "long",
                            "description": "my new quota in GB",
                            "fullType": "long",
                            "name": "newQuota",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The inventory name of your backup repository",
                            "fullType": "string",
                            "name": "inventoryName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Domain of the service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "veeamCloudConnect.Task[]"
                }
            ],
            "path": "/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota"
        },
        {
            "description": "capabilities operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Show capabilities of your current offer",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Domain of the service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "veeamCloudConnect.offerCapabilities"
                }
            ],
            "path": "/veeamCloudConnect/{serviceName}/capabilities"
        },
        {
            "description": "orderableUpgrade operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List the possible upgrades on your Veeam Cloud Connect account",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Domain of the service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "veeamCloudConnect.Offer[]"
                }
            ],
            "path": "/veeamCloudConnect/{serviceName}/orderableUpgrade"
        },
        {
            "description": "resetPassword operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Reset your Cloud Tenant Password",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Domain of the service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "veeamCloudConnect.Task"
                }
            ],
            "path": "/veeamCloudConnect/{serviceName}/resetPassword"
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
                            "description": "Domain of the service",
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
                            "description": "Domain of the service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                }
            ],
            "path": "/veeamCloudConnect/{serviceName}/serviceInfos"
        },
        {
            "description": "List the veeamCloudConnect.Task objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Tasks associated with Cloud Tenant",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Domain of the service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Filter the value of name property (like)",
                            "fullType": "string",
                            "name": "name",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "veeamCloudConnect.TaskStateEnum",
                            "description": "Filter the value of state property (=)",
                            "fullType": "veeamCloudConnect.TaskStateEnum",
                            "name": "state",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "long[]"
                }
            ],
            "path": "/veeamCloudConnect/{serviceName}/task"
        },
        {
            "description": "Operation with the Cloud Tenant Account",
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
                            "description": "Domain of the service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "long",
                            "description": "",
                            "fullType": "long",
                            "name": "taskId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "veeamCloudConnect.Task"
                }
            ],
            "path": "/veeamCloudConnect/{serviceName}/task/{taskId}"
        }
    ],
    "basePath": "https://eu.api.kimsufi.com/1.0",
    "models": {
        "complexType.UnitAndValue<T>": {
            "description": "A numeric value tagged with its unit",
            "generics": [
                "T"
            ],
            "id": "UnitAndValue",
            "namespace": "complexType",
            "properties": {
                "unit": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "value": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "T"
                }
            }
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
        },
        "veeamCloudConnect.Account": {
            "description": "Veeam Cloud Connect account",
            "id": "Account",
            "namespace": "veeamCloudConnect",
            "properties": {
                "location": {
                    "canBeNull": false,
                    "description": "Datacenter where your Cloud is physically located",
                    "fullType": "veeamCloudConnect.Location",
                    "readOnly": true,
                    "required": false,
                    "type": "veeamCloudConnect.Location"
                },
                "productOffer": {
                    "canBeNull": false,
                    "description": "The commercial offer linked to your veeam cloud connect",
                    "fullType": "veeamCloudConnect.Offer",
                    "readOnly": true,
                    "required": false,
                    "type": "veeamCloudConnect.Offer"
                },
                "serviceName": {
                    "canBeNull": false,
                    "description": "Your login in the Veeam Cloud Connect interface",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "vmCount": {
                    "canBeNull": true,
                    "description": "Backuped VMs quantity on your account",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "veeamCloudConnect.BackupRepository": {
            "description": "Veeam Backup Repository",
            "id": "BackupRepository",
            "namespace": "veeamCloudConnect",
            "properties": {
                "inventoryName": {
                    "canBeNull": false,
                    "description": "The inventory name of your backup repository",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "quota": {
                    "canBeNull": false,
                    "description": "The quota allowed on this Backup repository",
                    "fullType": "complexType.UnitAndValue<long>",
                    "readOnly": true,
                    "required": false,
                    "type": "complexType.UnitAndValue<long>"
                },
                "quotaUsed": {
                    "canBeNull": true,
                    "description": "The quota used on this Backup repository",
                    "fullType": "complexType.UnitAndValue<long>",
                    "readOnly": true,
                    "required": false,
                    "type": "complexType.UnitAndValue<long>"
                },
                "replicationZone": {
                    "canBeNull": true,
                    "description": "The replication zone of your repository",
                    "fullType": "veeamCloudConnect.Location",
                    "readOnly": true,
                    "required": false,
                    "type": "veeamCloudConnect.Location"
                },
                "state": {
                    "canBeNull": false,
                    "description": "The state of your backup repository",
                    "fullType": "veeamCloudConnect.BackupRepositoryStateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "veeamCloudConnect.BackupRepositoryStateEnum"
                },
                "usage": {
                    "canBeNull": true,
                    "description": "The usage in percent of this backup repository",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "veeamCloudConnect.BackupRepositoryStateEnum": {
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
            "enumType": "string",
            "id": "BackupRepositoryStateEnum",
            "namespace": "veeamCloudConnect"
        },
        "veeamCloudConnect.Location": {
            "description": "All Location where cloud can be physically located",
            "enum": [
                "bhs1",
                "rbx2",
                "sbg1"
            ],
            "enumType": "string",
            "id": "Location",
            "namespace": "veeamCloudConnect"
        },
        "veeamCloudConnect.Offer": {
            "description": "All orderable Veeam Cloud Connect offers",
            "enum": [
                "advanced",
                "demo",
                "starter"
            ],
            "enumType": "string",
            "id": "Offer",
            "namespace": "veeamCloudConnect"
        },
        "veeamCloudConnect.Task": {
            "description": "Operation with the Cloud Tenant Account",
            "id": "Task",
            "namespace": "veeamCloudConnect",
            "properties": {
                "endDate": {
                    "canBeNull": true,
                    "description": "Done task date and time",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Task name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "progress": {
                    "canBeNull": false,
                    "description": "Current progress",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "startDate": {
                    "canBeNull": true,
                    "description": "Start task date and time",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "state": {
                    "canBeNull": false,
                    "description": "Current Task state",
                    "fullType": "veeamCloudConnect.TaskStateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "veeamCloudConnect.TaskStateEnum"
                },
                "taskId": {
                    "canBeNull": false,
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "veeamCloudConnect.TaskStateEnum": {
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
            "enumType": "string",
            "id": "TaskStateEnum",
            "namespace": "veeamCloudConnect"
        },
        "veeamCloudConnect.offerCapabilities": {
            "description": "Details about Veeam Cloud Connect offer",
            "id": "offerCapabilities",
            "namespace": "veeamCloudConnect",
            "properties": {
                "defaultQuota": {
                    "canBeNull": false,
                    "description": "Default quota applied on new repositories in GB",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "maxQuota": {
                    "canBeNull": false,
                    "description": "Maximum quota you can apply on your repositories in GB",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "maxStoragesCount": {
                    "canBeNull": false,
                    "description": "Max number of repositories you can add on your account",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "minimumUsage": {
                    "canBeNull": false,
                    "description": "Required usage on all repositories to add a new one (percent)",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "multiStorages": {
                    "canBeNull": false,
                    "description": "Is account allowed to add new repositories",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "replication": {
                    "canBeNull": false,
                    "description": "Are data replicated over two storages",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "vmCapacity": {
                    "canBeNull": false,
                    "description": "Included storage per vm",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "wanAccelerator": {
                    "canBeNull": false,
                    "description": "Is wan accelerator enabled",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                }
            }
        }
    },
    "resourcePath": "/veeamCloudConnect"
};
//# sourceMappingURL=veeamCloudConnect.js.map