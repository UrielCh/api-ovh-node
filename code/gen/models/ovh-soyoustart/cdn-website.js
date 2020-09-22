"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = {
    "apiVersion": "1.0",
    "apis": [
        {
            "description": "Operations about the CDNWEBSITE service",
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
            "path": "/cdn/website"
        },
        {
            "description": "Website CDN",
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
                            "description": "The internal name of your CDN Website offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdn.website.Website"
                }
            ],
            "path": "/cdn/website/{serviceName}"
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
                            "description": "The internal name of your CDN Website offer",
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
                            "description": "The internal name of your CDN Website offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                }
            ],
            "path": "/cdn/website/{serviceName}/serviceInfos"
        },
        {
            "description": "Zone on CDN",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Remove a zone from the CDN",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN Website offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdn.website.Task"
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
                            "description": "The internal name of your CDN Website offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdn.website.Zone"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Configure a zone on CDN",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "zone DNS name to add on CDN",
                            "fullType": "string",
                            "name": "zone",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN Website offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdn.website.Zone"
                }
            ],
            "path": "/cdn/website/{serviceName}/zone"
        },
        {
            "description": "List the cdn.website.Backend objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Backend associated to this zone",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN Website offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "ipv4[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Configure a backend on the zone",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "ipv4",
                            "description": "ip to configure on the zone",
                            "fullType": "ipv4",
                            "name": "ipv4",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN Website offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdn.website.Task"
                }
            ],
            "path": "/cdn/website/{serviceName}/zone/backends"
        },
        {
            "description": "Backend on zone",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Remove a backend from the zone",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "ipv4",
                            "description": "",
                            "fullType": "ipv4",
                            "name": "ipv4",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN Website offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdn.website.Task"
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
                            "dataType": "ipv4",
                            "description": "",
                            "fullType": "ipv4",
                            "name": "ipv4",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN Website offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdn.website.Backend"
                }
            ],
            "path": "/cdn/website/{serviceName}/zone/backends/{ipv4}"
        },
        {
            "description": "List the cdn.website.Task objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Task associated to this backend",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "ipv4",
                            "description": "",
                            "fullType": "ipv4",
                            "name": "ipv4",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN Website offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "long[]"
                }
            ],
            "path": "/cdn/website/{serviceName}/zone/backends/{ipv4}/tasks"
        },
        {
            "description": "Task on CDN",
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
                            "dataType": "ipv4",
                            "description": "",
                            "fullType": "ipv4",
                            "name": "ipv4",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN Website offer",
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
                    "responseType": "cdn.website.Task"
                }
            ],
            "path": "/cdn/website/{serviceName}/zone/backends/{ipv4}/tasks/{taskId}"
        },
        {
            "description": "List the cdn.website.Domain objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Domain associated to this zone",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN Website offer",
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
                    "description": "Configure a domain on CDN",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "domain to add on CDN",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN Website offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdn.website.Domain"
                }
            ],
            "path": "/cdn/website/{serviceName}/zone/domains"
        },
        {
            "description": "Domain on CDN",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Remove a domain from the CDN",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN Website offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdn.website.Task"
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
                            "description": "",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN Website offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdn.website.Domain"
                }
            ],
            "path": "/cdn/website/{serviceName}/zone/domains/{domain}"
        },
        {
            "description": "flush operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Flush all cache",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN Website offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdn.website.Task"
                }
            ],
            "path": "/cdn/website/{serviceName}/zone/domains/{domain}/flush"
        },
        {
            "description": "statistics operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get statistics about request on CDN, bandwidth value in Bytes",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN Website offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "cdn.website.StatsPeriodEnum",
                            "description": "",
                            "fullType": "cdn.website.StatsPeriodEnum",
                            "name": "period",
                            "paramType": "query",
                            "required": true
                        },
                        {
                            "dataType": "cdn.website.StatsTypeEnum",
                            "description": "",
                            "fullType": "cdn.website.StatsTypeEnum",
                            "name": "type",
                            "paramType": "query",
                            "required": true
                        },
                        {
                            "dataType": "cdn.website.StatsValueEnum",
                            "description": "",
                            "fullType": "cdn.website.StatsValueEnum",
                            "name": "value",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "cdn.website.StatsDataType[]"
                }
            ],
            "path": "/cdn/website/{serviceName}/zone/domains/{domain}/statistics"
        },
        {
            "description": "List the cdn.website.Task objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Task associated to this domain",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN Website offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "long[]"
                }
            ],
            "path": "/cdn/website/{serviceName}/zone/domains/{domain}/tasks"
        },
        {
            "description": "Task on CDN",
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
                            "description": "",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN Website offer",
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
                    "responseType": "cdn.website.Task"
                }
            ],
            "path": "/cdn/website/{serviceName}/zone/domains/{domain}/tasks/{taskId}"
        },
        {
            "description": "List the cdn.website.Task objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Task associated to this zone",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN Website offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "long[]"
                }
            ],
            "path": "/cdn/website/{serviceName}/zone/tasks"
        },
        {
            "description": "Task on CDN",
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
                            "description": "The internal name of your CDN Website offer",
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
                    "responseType": "cdn.website.Task"
                }
            ],
            "path": "/cdn/website/{serviceName}/zone/tasks/{taskId}"
        }
    ],
    "basePath": "https://eu.api.soyoustart.com/1.0",
    "models": {
        "cdn.website.Backend": {
            "description": "Backend on zone",
            "id": "Backend",
            "namespace": "cdn.website",
            "properties": {
                "ipv4": {
                    "canBeNull": false,
                    "fullType": "ipv4",
                    "readOnly": true,
                    "required": false,
                    "type": "ipv4"
                },
                "status": {
                    "canBeNull": false,
                    "fullType": "cdn.website.BackendStatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cdn.website.BackendStatusEnum"
                }
            }
        },
        "cdn.website.BackendStatusEnum": {
            "description": "All states a status can be in",
            "enum": [
                "creating",
                "error",
                "on",
                "removing"
            ],
            "enumType": "string",
            "id": "BackendStatusEnum",
            "namespace": "cdn.website"
        },
        "cdn.website.Domain": {
            "description": "Domain on CDN",
            "id": "Domain",
            "namespace": "cdn.website",
            "properties": {
                "domain": {
                    "canBeNull": false,
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "fullType": "cdn.website.DomainStatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cdn.website.DomainStatusEnum"
                }
            }
        },
        "cdn.website.DomainStatusEnum": {
            "description": "All states a status can be in",
            "enum": [
                "error",
                "on",
                "removing"
            ],
            "enumType": "string",
            "id": "DomainStatusEnum",
            "namespace": "cdn.website"
        },
        "cdn.website.DomainZoneStatusEnum": {
            "description": "All states a status can be in",
            "enum": [
                "error",
                "on",
                "removing"
            ],
            "enumType": "string",
            "id": "DomainZoneStatusEnum",
            "namespace": "cdn.website"
        },
        "cdn.website.StatsDataType": {
            "description": "A structure describing type of a stats hash",
            "id": "StatsDataType",
            "namespace": "cdn.website",
            "properties": {
                "date": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "datetime"
                },
                "value": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "cdn.website.StatsPeriodEnum": {
            "description": "Period of the statistics",
            "enum": [
                "day",
                "month",
                "week"
            ],
            "enumType": "string",
            "id": "StatsPeriodEnum",
            "namespace": "cdn.website"
        },
        "cdn.website.StatsTypeEnum": {
            "description": "Type of statistics related to cache",
            "enum": [
                "backend",
                "cdn"
            ],
            "enumType": "string",
            "id": "StatsTypeEnum",
            "namespace": "cdn.website"
        },
        "cdn.website.StatsValueEnum": {
            "description": "Value bandwidth or request",
            "enum": [
                "bandwidth",
                "request"
            ],
            "enumType": "string",
            "id": "StatsValueEnum",
            "namespace": "cdn.website"
        },
        "cdn.website.Task": {
            "description": "Task on CDN",
            "id": "Task",
            "namespace": "cdn.website",
            "properties": {
                "comment": {
                    "canBeNull": true,
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "function": {
                    "canBeNull": false,
                    "fullType": "cdn.website.TaskFunctionEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cdn.website.TaskFunctionEnum"
                },
                "status": {
                    "canBeNull": false,
                    "fullType": "cdn.website.TaskStateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cdn.website.TaskStateEnum"
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
        "cdn.website.TaskFunctionEnum": {
            "description": "All function CDN task can be",
            "enum": [
                "flushAll",
                "installBackend",
                "removeBackend",
                "removeDomain",
                "removeZone"
            ],
            "enumType": "string",
            "id": "TaskFunctionEnum",
            "namespace": "cdn.website"
        },
        "cdn.website.TaskStateEnum": {
            "description": "All states a CDN task can be in",
            "enum": [
                "cancelled",
                "doing",
                "done",
                "error",
                "todo"
            ],
            "enumType": "string",
            "id": "TaskStateEnum",
            "namespace": "cdn.website"
        },
        "cdn.website.Website": {
            "description": "Website CDN",
            "id": "Website",
            "namespace": "cdn.website",
            "properties": {
                "anycast": {
                    "canBeNull": false,
                    "fullType": "ipv4",
                    "readOnly": true,
                    "required": false,
                    "type": "ipv4"
                },
                "offer": {
                    "canBeNull": false,
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "service": {
                    "canBeNull": false,
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cdn.website.Zone": {
            "description": "Zone on CDN",
            "id": "Zone",
            "namespace": "cdn.website",
            "properties": {
                "status": {
                    "canBeNull": false,
                    "fullType": "cdn.website.DomainZoneStatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cdn.website.DomainZoneStatusEnum"
                },
                "zone": {
                    "canBeNull": false,
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
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
        }
    },
    "resourcePath": "/cdn/website"
};
//# sourceMappingURL=cdn-website.js.map