"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = {
    "apiVersion": "1.0",
    "apis": [
        {
            "description": "Operations about the LICENSE service",
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
            "path": "/license/cloudLinux"
        },
        {
            "description": "Get the orderable CloudLinux versions",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get the orderable CloudLinux versions",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "ipv4",
                            "description": "Your license Ip",
                            "fullType": "ipv4",
                            "name": "ip",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "license.CloudLinuxOrderConfiguration[]"
                }
            ],
            "path": "/license/cloudLinux/orderableVersions"
        },
        {
            "description": "Your CloudLinux license",
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
                            "description": "The name of your CloudLinux license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "license.cloudLinux.CloudLinux"
                }
            ],
            "path": "/license/cloudLinux/{serviceName}"
        },
        {
            "description": "Confirm termination of your service",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Confirm termination of your service",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Commentary about your termination request",
                            "fullType": "string",
                            "name": "commentary",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "service.TerminationFutureUseEnum",
                            "description": "What next after your termination request",
                            "fullType": "service.TerminationFutureUseEnum",
                            "name": "futureUse",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "service.TerminationReasonEnum",
                            "description": "Reason of your termination request",
                            "fullType": "service.TerminationReasonEnum",
                            "name": "reason",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "The termination token sent by mail to the admin contact",
                            "fullType": "string",
                            "name": "token",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The name of your CloudLinux license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string"
                }
            ],
            "path": "/license/cloudLinux/{serviceName}/confirmTermination"
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
                            "description": "The name of your CloudLinux license",
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
                            "description": "The name of your CloudLinux license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                }
            ],
            "path": "/license/cloudLinux/{serviceName}/serviceInfos"
        },
        {
            "description": "List the license.Task objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Tasks linked to this license",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The name of your CloudLinux license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "license.ActionType",
                            "description": "Filter the value of action property (=)",
                            "fullType": "license.ActionType",
                            "name": "action",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "license.TaskStateEnum",
                            "description": "Filter the value of status property (=)",
                            "fullType": "license.TaskStateEnum",
                            "name": "status",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "long[]"
                }
            ],
            "path": "/license/cloudLinux/{serviceName}/tasks"
        },
        {
            "description": "licenses Todos",
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
                            "description": "The name of your CloudLinux license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "long",
                            "description": "This Task id",
                            "fullType": "long",
                            "name": "taskId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "license.Task"
                }
            ],
            "path": "/license/cloudLinux/{serviceName}/tasks/{taskId}"
        },
        {
            "description": "Terminate your service",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Terminate your service",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The name of your CloudLinux license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string"
                }
            ],
            "path": "/license/cloudLinux/{serviceName}/terminate"
        }
    ],
    "basePath": "https://eu.api.kimsufi.com/1.0",
    "models": {
        "license.ActionType": {
            "description": "A short description of what does the Task on your license",
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
            "id": "ActionType",
            "namespace": "license"
        },
        "license.CloudLinuxOrderConfiguration": {
            "description": "Allowed CloudLinux versions per matching serviceTypes",
            "id": "CloudLinuxOrderConfiguration",
            "namespace": "license",
            "properties": {
                "orderableVersions": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "license.OrderableCloudLinuxCompatibilityInfos[]"
                },
                "serviceType": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "license.LicenseTypeEnum"
                }
            }
        },
        "license.CloudLinuxVersionEnum": {
            "description": "All versions for CloudLinux product",
            "enum": [
                "SINGLE",
                "WITH_CPANEL",
                "WITH_PLESK12",
                "cloudlinux-license"
            ],
            "enumType": "string",
            "id": "CloudLinuxVersionEnum",
            "namespace": "license"
        },
        "license.LicenseTypeEnum": {
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
            ],
            "enumType": "string",
            "id": "LicenseTypeEnum",
            "namespace": "license"
        },
        "license.OrderableCloudLinuxCompatibilityInfos": {
            "description": "All versions available for CloudLinux products",
            "id": "OrderableCloudLinuxCompatibilityInfos",
            "namespace": "license",
            "properties": {
                "version": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "license.CloudLinuxVersionEnum"
                }
            }
        },
        "license.StateEnum": {
            "description": "All states a license can be in",
            "enum": [
                "ok",
                "released",
                "terminated",
                "toDeliver"
            ],
            "enumType": "string",
            "id": "StateEnum",
            "namespace": "license"
        },
        "license.Task": {
            "description": "licenses Todos",
            "id": "Task",
            "namespace": "license",
            "properties": {
                "action": {
                    "canBeNull": false,
                    "description": "This Task description",
                    "fullType": "license.ActionType",
                    "readOnly": true,
                    "required": false,
                    "type": "license.ActionType"
                },
                "doneDate": {
                    "canBeNull": true,
                    "description": "When was this Task done",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "The last time this Task was updated",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "name": {
                    "canBeNull": false,
                    "description": "This Task name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Current Taks status",
                    "fullType": "license.TaskStateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "license.TaskStateEnum"
                },
                "taskId": {
                    "canBeNull": false,
                    "description": "This Task id",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "todoDate": {
                    "canBeNull": false,
                    "description": "When was this Task created",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                }
            }
        },
        "license.TaskStateEnum": {
            "description": "All states a license Task can be in",
            "enum": [
                "cancelled",
                "doing",
                "done",
                "error",
                "todo"
            ],
            "enumType": "string",
            "id": "TaskStateEnum",
            "namespace": "license"
        },
        "license.cloudLinux.CloudLinux": {
            "description": "Your CloudLinux license",
            "id": "CloudLinux",
            "namespace": "license.cloudLinux",
            "properties": {
                "creation": {
                    "canBeNull": false,
                    "description": "This license creation date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "domain": {
                    "canBeNull": false,
                    "description": "The internal name of your license",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "ip": {
                    "canBeNull": false,
                    "description": "The ip on which this license is attached",
                    "fullType": "ipv4",
                    "readOnly": true,
                    "required": false,
                    "type": "ipv4"
                },
                "licenseId": {
                    "canBeNull": false,
                    "description": "The license id on license provider side",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "This license state",
                    "fullType": "license.StateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "license.StateEnum"
                },
                "version": {
                    "canBeNull": false,
                    "description": "This license version",
                    "fullType": "license.CloudLinuxVersionEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "license.CloudLinuxVersionEnum"
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
        "service.TerminationFutureUseEnum": {
            "description": "All future uses you can provide for a service termination",
            "enum": [
                "NOT_REPLACING_SERVICE",
                "OTHER",
                "SUBSCRIBE_AN_OTHER_SERVICE",
                "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
                "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
            ],
            "enumType": "string",
            "id": "TerminationFutureUseEnum",
            "namespace": "service"
        },
        "service.TerminationReasonEnum": {
            "description": "All reasons you can provide for a service termination",
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
            "enumType": "string",
            "id": "TerminationReasonEnum",
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
    "resourcePath": "/license/cloudLinux"
};
//# sourceMappingURL=license-cloudLinux.js.map