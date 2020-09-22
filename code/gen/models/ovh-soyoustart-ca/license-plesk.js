"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = {
    "apiVersion": "1.0",
    "apis": [
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
                            "description": "The name of your Plesk license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "resellerOnly": false,
                    "responseFullType": "string",
                    "responseType": "string"
                }
            ],
            "path": "/license/plesk/{serviceName}/terminate"
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
                            "description": "The name of your Plesk license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "resellerOnly": false,
                    "responseFullType": "services.Service",
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
                            "name": null,
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The name of your Plesk license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "resellerOnly": false,
                    "responseFullType": "void",
                    "responseType": "void"
                }
            ],
            "path": "/license/plesk/{serviceName}/serviceInfos"
        },
        {
            "description": "canLicenseBeMovedTo operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Will tell if the ip can accept the license",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The name of your Plesk license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "ipv4",
                            "description": "The Ip on which you want to move this license",
                            "fullType": "ipv4",
                            "name": "destinationIp",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "resellerOnly": false,
                    "responseFullType": "license.ChangeIpStatus",
                    "responseType": "license.ChangeIpStatus"
                }
            ],
            "path": "/license/plesk/{serviceName}/canLicenseBeMovedTo"
        },
        {
            "description": "allowedDestinationIp operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns an array of ips where the license can be moved to",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The name of your Plesk license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "resellerOnly": false,
                    "responseFullType": "ipBlock[]",
                    "responseType": "ipBlock[]"
                }
            ],
            "path": "/license/plesk/{serviceName}/allowedDestinationIp"
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
                            "description": "The name of your Plesk license",
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
                    "resellerOnly": false,
                    "responseFullType": "long[]",
                    "responseType": "long[]"
                }
            ],
            "path": "/license/plesk/{serviceName}/tasks"
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
                            "description": "The name of your Plesk license",
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
                    "resellerOnly": false,
                    "responseFullType": "license.Task",
                    "responseType": "license.Task"
                }
            ],
            "path": "/license/plesk/{serviceName}/tasks/{taskId}"
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
                            "description": "The name of your Plesk license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "resellerOnly": false,
                    "responseFullType": "string",
                    "responseType": "string"
                }
            ],
            "path": "/license/plesk/{serviceName}/confirmTermination"
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
                            "description": "The name of your Plesk license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "resellerOnly": false,
                    "responseFullType": "license.OptionLabel[]",
                    "responseType": "license.OptionLabel[]"
                }
            ],
            "path": "/license/plesk/{serviceName}/option"
        },
        {
            "description": "Your License options",
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
                            "dataType": "license.OptionLabel",
                            "description": "This option designation",
                            "fullType": "license.OptionLabel",
                            "name": "label",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The name of your Plesk license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "resellerOnly": false,
                    "responseFullType": "license.Option",
                    "responseType": "license.Option"
                },
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
                            "description": "The name of your Plesk license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "resellerOnly": false,
                    "responseFullType": "license.Task",
                    "responseType": "license.Task"
                }
            ],
            "path": "/license/plesk/{serviceName}/option/{label}"
        },
        {
            "description": "Your Plesk license",
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
                            "description": "The name of your Plesk license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "resellerOnly": false,
                    "responseFullType": "license.plesk.Plesk",
                    "responseType": "license.plesk.Plesk"
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
                            "dataType": "license.plesk.Plesk",
                            "description": "New object properties",
                            "fullType": "license.plesk.Plesk",
                            "name": null,
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The name of your Plesk license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "resellerOnly": false,
                    "responseFullType": "void",
                    "responseType": "void"
                }
            ],
            "path": "/license/plesk/{serviceName}"
        },
        {
            "description": "changeIp operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Move this license to another Ip",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "ipv4",
                            "description": "The Ip on which you want to move this license",
                            "fullType": "ipv4",
                            "name": "destinationIp",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The name of your Plesk license",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "resellerOnly": false,
                    "responseFullType": "license.Task",
                    "responseType": "license.Task"
                }
            ],
            "path": "/license/plesk/{serviceName}/changeIp"
        },
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
                    "resellerOnly": false,
                    "responseFullType": "string[]",
                    "responseType": "string[]"
                }
            ],
            "path": "/license/plesk"
        },
        {
            "description": "Get the orderable Plesk versions and their associated compatibilities",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get the orderable Plesk versions and their associated compatibilities",
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
                    "resellerOnly": false,
                    "responseFullType": "license.PleskOrderConfiguration[]",
                    "responseType": "license.PleskOrderConfiguration[]"
                }
            ],
            "path": "/license/plesk/orderableVersions"
        }
    ],
    "basePath": "https://ca.api.soyoustart.com/1.0",
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
        "license.ChangeIpMessageEnum": {
            "description": "Messages from change IP",
            "enum": [
                "OK",
                "destinationNotAllowed",
                "licenseAlreadyExists",
                "notAllowedToHandleThis",
                "notSameType",
                "sameIp",
                "versionNotAllowed"
            ],
            "enumType": "string",
            "id": "ChangeIpMessageEnum",
            "namespace": "license"
        },
        "license.ChangeIpStatus": {
            "description": "License change ip status return",
            "id": "ChangeIpStatus",
            "namespace": "license",
            "properties": {
                "message": {
                    "canBeNull": false,
                    "description": null,
                    "type": "license.ChangeIpMessageEnum"
                },
                "success": {
                    "canBeNull": false,
                    "description": null,
                    "type": "boolean"
                }
            }
        },
        "license.DomainNumberEnum": {
            "description": "All quantities of domain available for a license",
            "enum": [
                "0",
                "1",
                "10",
                "100",
                "30",
                "300",
                "unlimited"
            ],
            "enumType": "string",
            "id": "DomainNumberEnum",
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
                    "type": "string"
                },
                "canBeDeleted": {
                    "canBeNull": false,
                    "description": "Specifies whether this option can be released or not",
                    "fullType": "boolean",
                    "readOnly": true,
                    "type": "boolean"
                },
                "expirationDate": {
                    "canBeNull": false,
                    "description": "This option expiration date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "type": "datetime"
                },
                "label": {
                    "canBeNull": false,
                    "description": "This option designation",
                    "fullType": "license.OptionLabel",
                    "readOnly": true,
                    "type": "license.OptionLabel"
                },
                "version": {
                    "canBeNull": true,
                    "description": "This option related version",
                    "fullType": "string",
                    "readOnly": true,
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
        "license.OrderableAntivirusEnum": {
            "description": "All antivirus available for Plesk products",
            "enum": [
                "DR_WEB",
                "KASPERSKY_UNLIMITED_MAILBOXES",
                "kaspersky"
            ],
            "enumType": "string",
            "id": "OrderableAntivirusEnum",
            "namespace": "license"
        },
        "license.OrderablePleskCompatibilityInfos": {
            "description": "All versions available for Plesk products",
            "id": "OrderablePleskCompatibilityInfos",
            "namespace": "license",
            "properties": {
                "canHavePowerPack": {
                    "canBeNull": false,
                    "description": null,
                    "type": "boolean"
                },
                "canHaveResellerManagement": {
                    "canBeNull": false,
                    "description": null,
                    "type": "boolean"
                },
                "canHaveWordpressToolkit": {
                    "canBeNull": false,
                    "description": null,
                    "type": "boolean"
                },
                "compliantAntivirus": {
                    "canBeNull": false,
                    "description": null,
                    "type": "license.OrderableAntivirusEnum[]"
                },
                "compliantApplicationSets": {
                    "canBeNull": false,
                    "description": null,
                    "type": "license.PleskApplicationSetEnum[]"
                },
                "compliantDomains": {
                    "canBeNull": false,
                    "description": null,
                    "type": "license.OrderablePleskDomainNumberEnum[]"
                },
                "compliantLanguagePack": {
                    "canBeNull": false,
                    "description": null,
                    "type": "license.OrderablePleskLanguagePackEnum[]"
                },
                "potentialProblems": {
                    "canBeNull": false,
                    "description": null,
                    "type": "license.PotentialProblemPleskEnum[]"
                },
                "version": {
                    "canBeNull": false,
                    "description": null,
                    "type": "license.PleskVersionEnum"
                }
            }
        },
        "license.OrderablePleskDomainNumberEnum": {
            "description": "All domain available for Plesk products",
            "enum": [
                "10",
                "100",
                "30",
                "300",
                "hostingsuite",
                "unlimited"
            ],
            "enumType": "string",
            "id": "OrderablePleskDomainNumberEnum",
            "namespace": "license"
        },
        "license.OrderablePleskLanguagePackEnum": {
            "description": "All language pack numbers available for Plesk products",
            "enum": [
                "1",
                "1-extra-language-for-plesk12",
                "2",
                "2-extra-languages-for-plesk12",
                "3",
                "3-extra-languages-for-plesk12",
                "4",
                "4-extra-languages-for-plesk12",
                "5",
                "5-extra-languages-for-plesk12",
                "unlimited",
                "unlimited-extra-languages-for-plesk12"
            ],
            "enumType": "string",
            "id": "OrderablePleskLanguagePackEnum",
            "namespace": "license"
        },
        "license.PleskApplicationSetEnum": {
            "description": "Application set available for Plesk products",
            "enum": [
                "applicationpack",
                "developerpack",
                "power-pack-for-plesk12",
                "powerpack"
            ],
            "enumType": "string",
            "id": "PleskApplicationSetEnum",
            "namespace": "license"
        },
        "license.PleskOrderConfiguration": {
            "description": "The serviceTypes allowed to Order a plesk version and associated Versions",
            "id": "PleskOrderConfiguration",
            "namespace": "license",
            "properties": {
                "orderableVersions": {
                    "canBeNull": false,
                    "description": null,
                    "type": "license.OrderablePleskCompatibilityInfos[]"
                },
                "serviceType": {
                    "canBeNull": false,
                    "description": null,
                    "type": "license.LicenseTypeEnum"
                }
            }
        },
        "license.PleskVersionEnum": {
            "description": "All versions available for Plesk products",
            "enum": [
                "PLESK_10_AND_LATER",
                "PLESK_10_AND_LATER_FOR_KVM",
                "PLESK_10_AND_LATER_FOR_VMWARE",
                "PLESK_10_AND_LATER_FOR_VZ",
                "PLESK_10_AND_LATER_FOR_WIN",
                "PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE",
                "PLESK_10_AND_LATER_FOR_WIN_FOR_VZ",
                "PLESK_10_AND_LATER_FOR_WIN_FOR_XEN",
                "PLESK_10_AND_LATER_FOR_XEN",
                "PLESK_12_VPS_WEB_ADMIN",
                "PLESK_12_VPS_WEB_APP",
                "PLESK_12_VPS_WEB_HOST",
                "PLESK_12_VPS_WEB_HOST_CLNX",
                "PLESK_12_VPS_WEB_PRO",
                "PLESK_12_VPS_WEB_PRO_CLNX",
                "PLESK_12_WEB_ADMIN",
                "PLESK_12_WEB_APP",
                "PLESK_12_WEB_HOST",
                "PLESK_12_WEB_HOST_CLNX",
                "PLESK_12_WEB_PRO",
                "PLESK_12_WEB_PRO_CLNX",
                "PLESK_75_RELOADED",
                "PLESK_80",
                "PLESK_80_FOR_VZ",
                "PLESK_81_FOR_WIN",
                "PLESK_9",
                "PLESK_95",
                "PLESK_95_FOR_VZ",
                "PLESK_95_FOR_WIN",
                "PLESK_9_FOR_VZ",
                "PLESK_9_FOR_WIN",
                "PLESK_ONYX_VPS_WEB_ADMIN",
                "PLESK_ONYX_VPS_WEB_APP",
                "PLESK_ONYX_VPS_WEB_HOST",
                "PLESK_ONYX_VPS_WEB_HOST_CLNX",
                "PLESK_ONYX_VPS_WEB_PRO",
                "PLESK_ONYX_VPS_WEB_PRO_CLNX",
                "PLESK_ONYX_WEB_ADMIN",
                "PLESK_ONYX_WEB_APP",
                "PLESK_ONYX_WEB_HOST",
                "PLESK_ONYX_WEB_HOST_CLNX",
                "PLESK_ONYX_WEB_PRO",
                "PLESK_ONYX_WEB_PRO_CLNX",
                "plesk-12-webadmin-for-vps",
                "plesk-12-webhost",
                "plesk-12-webhost-for-vps",
                "plesk-12-webpro",
                "plesk-12-webpro-for-vps"
            ],
            "enumType": "string",
            "id": "PleskVersionEnum",
            "namespace": "license"
        },
        "license.PotentialProblemPleskEnum": {
            "description": "Tests that have failed for Plesk products",
            "enum": [
                "isHostOsHyperVLike",
                "isHostOsVMwareLike",
                "isHostOsVirtuozzo4Like",
                "isHostOsXenLike",
                "isLinuxOs",
                "isOsCloudLinux",
                "isOsPlesk10andLater",
                "isOsPlesk12",
                "isOsPleskOnyx",
                "isWindowsOs"
            ],
            "enumType": "string",
            "id": "PotentialProblemPleskEnum",
            "namespace": "license"
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
                    "type": "license.ActionType"
                },
                "doneDate": {
                    "canBeNull": true,
                    "description": "When was this Task done",
                    "fullType": "datetime",
                    "readOnly": true,
                    "type": "datetime"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "The last time this Task was updated",
                    "fullType": "datetime",
                    "readOnly": true,
                    "type": "datetime"
                },
                "name": {
                    "canBeNull": false,
                    "description": "This Task name",
                    "fullType": "string",
                    "readOnly": true,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Current Taks status",
                    "fullType": "license.TaskStateEnum",
                    "readOnly": true,
                    "type": "license.TaskStateEnum"
                },
                "taskId": {
                    "canBeNull": false,
                    "description": "This Task id",
                    "fullType": "long",
                    "readOnly": true,
                    "type": "long"
                },
                "todoDate": {
                    "canBeNull": false,
                    "description": "When was this Task created",
                    "fullType": "datetime",
                    "readOnly": true,
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
        "license.plesk.Plesk": {
            "description": "Your Plesk license",
            "id": "Plesk",
            "namespace": "license.plesk",
            "properties": {
                "creation": {
                    "canBeNull": false,
                    "description": "This license creation date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "type": "datetime"
                },
                "deleteAtExpiration": {
                    "canBeNull": false,
                    "description": "Shall we delete this on expiration ?",
                    "fullType": "boolean",
                    "readOnly": false,
                    "type": "boolean"
                },
                "domain": {
                    "canBeNull": false,
                    "description": "The internal name of your license",
                    "fullType": "string",
                    "readOnly": true,
                    "type": "string"
                },
                "domainNumber": {
                    "canBeNull": true,
                    "description": "The amount of domain this license can manage",
                    "fullType": "license.DomainNumberEnum",
                    "readOnly": true,
                    "type": "license.DomainNumberEnum"
                },
                "informationKey": {
                    "canBeNull": true,
                    "description": "This license Information key",
                    "fullType": "string",
                    "readOnly": true,
                    "type": "string"
                },
                "ip": {
                    "canBeNull": false,
                    "description": "The ip on which this license is attached",
                    "fullType": "ipv4",
                    "readOnly": true,
                    "type": "ipv4"
                },
                "key": {
                    "canBeNull": false,
                    "description": "This license key",
                    "fullType": "string",
                    "readOnly": true,
                    "type": "string"
                },
                "licenseId": {
                    "canBeNull": false,
                    "description": "The license id on license provider side",
                    "fullType": "string",
                    "readOnly": true,
                    "type": "string"
                },
                "productKey": {
                    "canBeNull": true,
                    "description": "This license product key",
                    "fullType": "string",
                    "readOnly": true,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "This license state",
                    "fullType": "license.StateEnum",
                    "readOnly": true,
                    "type": "license.StateEnum"
                },
                "version": {
                    "canBeNull": false,
                    "description": "This license version",
                    "fullType": "license.PleskVersionEnum",
                    "readOnly": true,
                    "type": "license.PleskVersionEnum"
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
                    "type": "boolean"
                },
                "deleteAtExpiration": {
                    "canBeNull": false,
                    "description": "The service will be deleted at expiration",
                    "type": "boolean"
                },
                "forced": {
                    "canBeNull": false,
                    "description": "The service forced to be renewed",
                    "type": "boolean"
                },
                "manualPayment": {
                    "canBeNull": true,
                    "description": "The service needs to be manually renewed and paid",
                    "type": "boolean"
                },
                "period": {
                    "canBeNull": true,
                    "description": "period of renew in month",
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
            "description": "",
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
                    "type": "boolean"
                },
                "contactAdmin": {
                    "canBeNull": false,
                    "description": null,
                    "fullType": "coreTypes.AccountId:string",
                    "readOnly": true,
                    "type": "string"
                },
                "contactBilling": {
                    "canBeNull": false,
                    "description": null,
                    "fullType": "coreTypes.AccountId:string",
                    "readOnly": true,
                    "type": "string"
                },
                "contactTech": {
                    "canBeNull": false,
                    "description": null,
                    "fullType": "coreTypes.AccountId:string",
                    "readOnly": true,
                    "type": "string"
                },
                "creation": {
                    "canBeNull": false,
                    "description": null,
                    "fullType": "date",
                    "readOnly": true,
                    "type": "date"
                },
                "domain": {
                    "canBeNull": false,
                    "description": null,
                    "fullType": "string",
                    "readOnly": true,
                    "type": "string"
                },
                "engagedUpTo": {
                    "canBeNull": true,
                    "description": null,
                    "fullType": "date",
                    "readOnly": true,
                    "type": "date"
                },
                "expiration": {
                    "canBeNull": false,
                    "description": null,
                    "fullType": "date",
                    "readOnly": true,
                    "type": "date"
                },
                "possibleRenewPeriod": {
                    "canBeNull": true,
                    "description": "All the possible renew period of your service in month",
                    "fullType": "long[]",
                    "readOnly": true,
                    "type": "long[]"
                },
                "renew": {
                    "canBeNull": true,
                    "description": "Way of handling the renew",
                    "fullType": "service.RenewType",
                    "readOnly": false,
                    "type": "service.RenewType"
                },
                "renewalType": {
                    "canBeNull": false,
                    "description": null,
                    "fullType": "service.RenewalTypeEnum",
                    "readOnly": true,
                    "type": "service.RenewalTypeEnum"
                },
                "serviceId": {
                    "canBeNull": false,
                    "description": null,
                    "fullType": "coreTypes.ServiceId:long",
                    "readOnly": true,
                    "type": "long"
                },
                "status": {
                    "canBeNull": false,
                    "description": null,
                    "fullType": "service.StateEnum",
                    "readOnly": true,
                    "type": "service.StateEnum"
                }
            }
        }
    },
    "resourcePath": "/license/plesk"
};
//# sourceMappingURL=license-plesk.js.map