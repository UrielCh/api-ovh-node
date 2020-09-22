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
            "path": "/license/windows"
        },
        {
            "description": "Get the orderable Windows versions",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get the orderable Windows versions",
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
                    "responseType": "license.WindowsOrderConfiguration[]"
                }
            ],
            "path": "/license/windows/orderableVersions"
        },
        {
            "description": "Your Windows license",
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
                            "description": "The name of your Windows license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "license.windows.Windows"
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
                            "dataType": "license.windows.Windows",
                            "description": "New object properties",
                            "fullType": "license.windows.Windows",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The name of your Windows license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                }
            ],
            "path": "/license/windows/{serviceName}"
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
                            "description": "The name of your Windows license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string"
                }
            ],
            "path": "/license/windows/{serviceName}/confirmTermination"
        },
        {
            "description": "List the license.Option objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "options attached to this license",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The name of your Windows license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "license.OptionLabel[]"
                }
            ],
            "path": "/license/windows/{serviceName}/option"
        },
        {
            "description": "Your License options",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "release this Option",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "license.OptionLabel",
                            "description": "This option designation",
                            "fullType": "license.OptionLabel",
                            "name": "label",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The name of your Windows license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "license.Task"
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
                            "dataType": "license.OptionLabel",
                            "description": "This option designation",
                            "fullType": "license.OptionLabel",
                            "name": "label",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The name of your Windows license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "license.Option"
                }
            ],
            "path": "/license/windows/{serviceName}/option/{label}"
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
                            "description": "The name of your Windows license",
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
                            "description": "The name of your Windows license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                }
            ],
            "path": "/license/windows/{serviceName}/serviceInfos"
        },
        {
            "description": "sqlServer operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Link your own sql server license to this Windows license",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Your license serial number",
                            "fullType": "string",
                            "name": "licenseId",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "license.WindowsSqlVersionEnum",
                            "description": "Your license version",
                            "fullType": "license.WindowsSqlVersionEnum",
                            "name": "version",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The name of your Windows license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "license.Task"
                }
            ],
            "path": "/license/windows/{serviceName}/sqlServer"
        },
        {
            "description": "List the license.Task objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "tasks linked to this license",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The name of your Windows license",
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
            "path": "/license/windows/{serviceName}/tasks"
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
                            "description": "The name of your Windows license",
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
            "path": "/license/windows/{serviceName}/tasks/{taskId}"
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
                            "description": "The name of your Windows license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string"
                }
            ],
            "path": "/license/windows/{serviceName}/terminate"
        }
    ],
    "basePath": "https://ca.api.ovh.com/1.0",
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
        "license.Option": {
            "description": "Your License options",
            "id": "Option",
            "namespace": "license",
            "properties": {
                "amount": {
                    "canBeNull": true,
                    "description": "Quantity or corresponding label of the designated option enabled on your license",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "canBeDeleted": {
                    "canBeNull": false,
                    "description": "Specifies whether this option can be released or not",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "expirationDate": {
                    "canBeNull": false,
                    "description": "This option expiration date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "label": {
                    "canBeNull": false,
                    "description": "This option designation",
                    "fullType": "license.OptionLabel",
                    "readOnly": true,
                    "required": false,
                    "type": "license.OptionLabel"
                },
                "version": {
                    "canBeNull": true,
                    "description": "This option related version",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "license.OptionLabel": {
            "description": "The name of an option currently enabled on your license",
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
            "enumType": "string",
            "id": "OptionLabel",
            "namespace": "license"
        },
        "license.OrderableWindowsCompatibilityInfos": {
            "description": "All SQL options available for Windows products",
            "id": "OrderableWindowsCompatibilityInfos",
            "namespace": "license",
            "properties": {
                "compliantSql": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "license.WindowsSqlVersionEnum[]"
                },
                "version": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "license.WindowsOsVersionEnum"
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
        "license.WindowsOrderConfiguration": {
            "description": "Allowed windows versions and their compliant options per matching serviceTypes",
            "id": "WindowsOrderConfiguration",
            "namespace": "license",
            "properties": {
                "orderableVersions": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "license.OrderableWindowsCompatibilityInfos[]"
                },
                "serviceType": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "license.LicenseTypeEnum"
                }
            }
        },
        "license.WindowsOsVersionEnum": {
            "description": "All versions for Windows products",
            "enum": [
                "WINDOWS_SERVER_2003_ENTERPRISE_EDITION",
                "WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU",
                "WINDOWS_SERVER_2003_STANDARD_EDITION",
                "WINDOWS_SERVER_2003_WEB_EDITION",
                "WINDOWS_SERVER_2003_WEB_EDITION_2_CPU",
                "WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION",
                "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION",
                "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU",
                "WINDOWS_SERVER_2008_DATACENTER_EDITION",
                "WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU",
                "WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU",
                "WINDOWS_SERVER_2008_ENTERPRISE_EDITION",
                "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU",
                "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU",
                "WINDOWS_SERVER_2008_STANDARD_EDITION",
                "WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU",
                "WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU",
                "WINDOWS_SERVER_2008_WEB_EDITION",
                "WINDOWS_SERVER_2008_WEB_EDITION_2_CPU",
                "WINDOWS_SERVER_2008_WEB_EDITION_4_CPU",
                "WINDOWS_SERVER_2008_WEB_STANDARD_EDITION",
                "WINDOWS_SERVER_2012_DATACENTER_EDITION",
                "WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU",
                "WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU",
                "WINDOWS_SERVER_2012_ENTERPRISE_EDITION",
                "WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU",
                "WINDOWS_SERVER_2012_STANDARD_EDITION",
                "WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU",
                "WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU",
                "WINDOWS_SERVER_2012_WEB_EDITION",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES",
                "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES",
                "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES",
                "WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES",
                "WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES",
                "windows-server-2008-license-datacenter-edition-1-cpu",
                "windows-server-2008-license-datacenter-edition-2-cpu",
                "windows-server-2008-license-datacenter-edition-4-cpu",
                "windows-server-2008-license-enterprise-edition-1-cpu",
                "windows-server-2008-license-enterprise-edition-2-cpu",
                "windows-server-2008-license-enterprise-edition-4-cpu",
                "windows-server-2008-license-standard-edition-1-cpu",
                "windows-server-2008-license-standard-edition-2-cpu",
                "windows-server-2008-license-standard-edition-4-cpu",
                "windows-server-2008-license-web-edition-1-cpu",
                "windows-server-2008-license-web-edition-2-cpu",
                "windows-server-2008-license-web-edition-4-cpu",
                "windows-server-2012-license-datacenter-edition-1-cpu",
                "windows-server-2012-license-datacenter-edition-2-cpu",
                "windows-server-2012-license-datacenter-edition-4-cpu",
                "windows-server-2012-license-standard-edition-1-cpu",
                "windows-server-2012-license-standard-edition-2-cpu",
                "windows-server-2012-license-standard-edition-4-cpu",
                "windows-server-2016-license-datacenter-edition-1-cpu-10-cores",
                "windows-server-2016-license-datacenter-edition-1-cpu-12-cores",
                "windows-server-2016-license-datacenter-edition-1-cpu-14-cores",
                "windows-server-2016-license-datacenter-edition-1-cpu-16-cores",
                "windows-server-2016-license-datacenter-edition-1-cpu-18-cores",
                "windows-server-2016-license-datacenter-edition-1-cpu-20-cores",
                "windows-server-2016-license-datacenter-edition-1-cpu-22-cores",
                "windows-server-2016-license-datacenter-edition-1-cpu-24-cores",
                "windows-server-2016-license-datacenter-edition-1-cpu-8-cores",
                "windows-server-2016-license-datacenter-edition-2-cpu-10-cores",
                "windows-server-2016-license-datacenter-edition-2-cpu-12-cores",
                "windows-server-2016-license-datacenter-edition-2-cpu-14-cores",
                "windows-server-2016-license-datacenter-edition-2-cpu-16-cores",
                "windows-server-2016-license-datacenter-edition-2-cpu-18-cores",
                "windows-server-2016-license-datacenter-edition-2-cpu-20-cores",
                "windows-server-2016-license-datacenter-edition-2-cpu-22-cores",
                "windows-server-2016-license-datacenter-edition-2-cpu-24-cores",
                "windows-server-2016-license-datacenter-edition-2-cpu-8-cores",
                "windows-server-2016-license-datacenter-edition-4-cpu-10-cores",
                "windows-server-2016-license-datacenter-edition-4-cpu-12-cores",
                "windows-server-2016-license-datacenter-edition-4-cpu-14-cores",
                "windows-server-2016-license-datacenter-edition-4-cpu-16-cores",
                "windows-server-2016-license-datacenter-edition-4-cpu-18-cores",
                "windows-server-2016-license-datacenter-edition-4-cpu-20-cores",
                "windows-server-2016-license-datacenter-edition-4-cpu-22-cores",
                "windows-server-2016-license-datacenter-edition-4-cpu-24-cores",
                "windows-server-2016-license-datacenter-edition-4-cpu-8-cores",
                "windows-server-2016-license-standard-edition-1-cpu-10-cores",
                "windows-server-2016-license-standard-edition-1-cpu-12-cores",
                "windows-server-2016-license-standard-edition-1-cpu-14-cores",
                "windows-server-2016-license-standard-edition-1-cpu-16-cores",
                "windows-server-2016-license-standard-edition-1-cpu-18-cores",
                "windows-server-2016-license-standard-edition-1-cpu-20-cores",
                "windows-server-2016-license-standard-edition-1-cpu-22-cores",
                "windows-server-2016-license-standard-edition-1-cpu-24-cores",
                "windows-server-2016-license-standard-edition-1-cpu-8-cores",
                "windows-server-2016-license-standard-edition-2-cpu-10-cores",
                "windows-server-2016-license-standard-edition-2-cpu-12-cores",
                "windows-server-2016-license-standard-edition-2-cpu-14-cores",
                "windows-server-2016-license-standard-edition-2-cpu-16-cores",
                "windows-server-2016-license-standard-edition-2-cpu-18-cores",
                "windows-server-2016-license-standard-edition-2-cpu-20-cores",
                "windows-server-2016-license-standard-edition-2-cpu-22-cores",
                "windows-server-2016-license-standard-edition-2-cpu-24-cores",
                "windows-server-2016-license-standard-edition-2-cpu-8-cores",
                "windows-server-2016-license-standard-edition-4-cpu-10-cores",
                "windows-server-2016-license-standard-edition-4-cpu-12-cores",
                "windows-server-2016-license-standard-edition-4-cpu-14-cores",
                "windows-server-2016-license-standard-edition-4-cpu-16-cores",
                "windows-server-2016-license-standard-edition-4-cpu-18-cores",
                "windows-server-2016-license-standard-edition-4-cpu-20-cores",
                "windows-server-2016-license-standard-edition-4-cpu-22-cores",
                "windows-server-2016-license-standard-edition-4-cpu-24-cores",
                "windows-server-2016-license-standard-edition-4-cpu-8-cores",
                "windows-server-2019-license-datacenter-edition-10-cores",
                "windows-server-2019-license-datacenter-edition-12-cores",
                "windows-server-2019-license-datacenter-edition-14-cores",
                "windows-server-2019-license-datacenter-edition-16-cores",
                "windows-server-2019-license-datacenter-edition-18-cores",
                "windows-server-2019-license-datacenter-edition-20-cores",
                "windows-server-2019-license-datacenter-edition-22-cores",
                "windows-server-2019-license-datacenter-edition-24-cores",
                "windows-server-2019-license-datacenter-edition-26-cores",
                "windows-server-2019-license-datacenter-edition-28-cores",
                "windows-server-2019-license-datacenter-edition-30-cores",
                "windows-server-2019-license-datacenter-edition-32-cores",
                "windows-server-2019-license-datacenter-edition-34-cores",
                "windows-server-2019-license-datacenter-edition-36-cores",
                "windows-server-2019-license-datacenter-edition-38-cores",
                "windows-server-2019-license-datacenter-edition-40-cores",
                "windows-server-2019-license-datacenter-edition-42-cores",
                "windows-server-2019-license-datacenter-edition-44-cores",
                "windows-server-2019-license-datacenter-edition-46-cores",
                "windows-server-2019-license-datacenter-edition-48-cores",
                "windows-server-2019-license-datacenter-edition-50-cores",
                "windows-server-2019-license-datacenter-edition-52-cores",
                "windows-server-2019-license-datacenter-edition-54-cores",
                "windows-server-2019-license-datacenter-edition-56-cores",
                "windows-server-2019-license-datacenter-edition-58-cores",
                "windows-server-2019-license-datacenter-edition-60-cores",
                "windows-server-2019-license-datacenter-edition-62-cores",
                "windows-server-2019-license-datacenter-edition-64-cores",
                "windows-server-2019-license-datacenter-edition-8-cores",
                "windows-server-2019-license-standard-edition-10-cores",
                "windows-server-2019-license-standard-edition-12-cores",
                "windows-server-2019-license-standard-edition-14-cores",
                "windows-server-2019-license-standard-edition-16-cores",
                "windows-server-2019-license-standard-edition-18-cores",
                "windows-server-2019-license-standard-edition-20-cores",
                "windows-server-2019-license-standard-edition-22-cores",
                "windows-server-2019-license-standard-edition-24-cores",
                "windows-server-2019-license-standard-edition-26-cores",
                "windows-server-2019-license-standard-edition-28-cores",
                "windows-server-2019-license-standard-edition-30-cores",
                "windows-server-2019-license-standard-edition-32-cores",
                "windows-server-2019-license-standard-edition-34-cores",
                "windows-server-2019-license-standard-edition-36-cores",
                "windows-server-2019-license-standard-edition-38-cores",
                "windows-server-2019-license-standard-edition-40-cores",
                "windows-server-2019-license-standard-edition-42-cores",
                "windows-server-2019-license-standard-edition-44-cores",
                "windows-server-2019-license-standard-edition-46-cores",
                "windows-server-2019-license-standard-edition-48-cores",
                "windows-server-2019-license-standard-edition-50-cores",
                "windows-server-2019-license-standard-edition-52-cores",
                "windows-server-2019-license-standard-edition-54-cores",
                "windows-server-2019-license-standard-edition-56-cores",
                "windows-server-2019-license-standard-edition-58-cores",
                "windows-server-2019-license-standard-edition-60-cores",
                "windows-server-2019-license-standard-edition-62-cores",
                "windows-server-2019-license-standard-edition-64-cores",
                "windows-server-2019-license-standard-edition-8-cores"
            ],
            "enumType": "string",
            "id": "WindowsOsVersionEnum",
            "namespace": "license"
        },
        "license.WindowsSqlVersionEnum": {
            "description": "All SQL Server versions for Windows products",
            "enum": [
                "SQL_SERVER_2008_STANDARD_EDITION",
                "SQL_SERVER_2008_STANDARD_EDITION_2_CPU",
                "SQL_SERVER_2008_WEB_EDITION",
                "SQL_SERVER_2008_WEB_EDITION_2_CPU",
                "SQL_SERVER_2012_STANDARD_EDITION",
                "SQL_SERVER_2012_STANDARD_EDITION_12_CORES",
                "SQL_SERVER_2012_STANDARD_EDITION_16_CORES",
                "SQL_SERVER_2012_STANDARD_EDITION_18_CORES",
                "SQL_SERVER_2012_STANDARD_EDITION_20_CORES",
                "SQL_SERVER_2012_STANDARD_EDITION_24_CORES",
                "SQL_SERVER_2012_STANDARD_EDITION_2_CPU",
                "SQL_SERVER_2012_STANDARD_EDITION_32_CORES",
                "SQL_SERVER_2012_STANDARD_EDITION_4_CORES",
                "SQL_SERVER_2012_STANDARD_EDITION_6_CORES",
                "SQL_SERVER_2012_STANDARD_EDITION_8_CORES",
                "SQL_SERVER_2012_WEB_EDITION_12_CORES",
                "SQL_SERVER_2012_WEB_EDITION_16_CORES",
                "SQL_SERVER_2012_WEB_EDITION_18_CORES",
                "SQL_SERVER_2012_WEB_EDITION_20_CORES",
                "SQL_SERVER_2012_WEB_EDITION_24_CORES",
                "SQL_SERVER_2012_WEB_EDITION_32_CORES",
                "SQL_SERVER_2012_WEB_EDITION_4_CORES",
                "SQL_SERVER_2012_WEB_EDITION_6_CORES",
                "SQL_SERVER_2012_WEB_EDITION_8_CORES"
            ],
            "enumType": "string",
            "id": "WindowsSqlVersionEnum",
            "namespace": "license"
        },
        "license.windows.Windows": {
            "description": "Your Windows license",
            "id": "Windows",
            "namespace": "license.windows",
            "properties": {
                "creation": {
                    "canBeNull": false,
                    "description": "This license creation date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "deleteAtExpiration": {
                    "canBeNull": false,
                    "description": "Shall we delete this on expiration ?",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
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
                    "fullType": "license.WindowsOsVersionEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "license.WindowsOsVersionEnum"
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
    "resourcePath": "/license/windows"
};
//# sourceMappingURL=license-windows.js.map