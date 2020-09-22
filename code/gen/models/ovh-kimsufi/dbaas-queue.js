"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = {
    "apiVersion": "1.0",
    "apis": [
        {
            "description": "Operations about the PAAS_QUEUE service",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "List available services",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [],
                    "responseType": "string[]"
                }
            ],
            "path": "/dbaas/queue"
        },
        {
            "description": "App",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get an application",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Application ID",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.queue.App"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Update an application",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Application name",
                            "fullType": "string",
                            "name": "name",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Application ID",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.queue.App"
                }
            ],
            "path": "/dbaas/queue/{serviceName}"
        },
        {
            "description": "Key",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "List all keys of the application",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Application ID",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string[]"
                }
            ],
            "path": "/dbaas/queue/{serviceName}/key"
        },
        {
            "description": "Key",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get a key",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Key ID",
                            "fullType": "string",
                            "name": "keyId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Application ID",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.queue.Key"
                }
            ],
            "path": "/dbaas/queue/{serviceName}/key/{keyId}"
        },
        {
            "description": "Metrics",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get metrics account",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Application ID",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.queue.MetricsAccount"
                }
            ],
            "path": "/dbaas/queue/{serviceName}/metrics/account"
        },
        {
            "description": "Region",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "List all regions ID",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Application ID",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string[]"
                }
            ],
            "path": "/dbaas/queue/{serviceName}/region"
        },
        {
            "description": "Region",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get one region",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Region ID",
                            "fullType": "string",
                            "name": "regionId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Application ID",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.queue.Region"
                }
            ],
            "path": "/dbaas/queue/{serviceName}/region/{regionId}"
        },
        {
            "description": "Role",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "List all roles of the application",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Application ID",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string[]"
                }
            ],
            "path": "/dbaas/queue/{serviceName}/role"
        },
        {
            "description": "Role",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get a role",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Role name",
                            "fullType": "string",
                            "name": "roleName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Application ID",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.queue.Role"
                }
            ],
            "path": "/dbaas/queue/{serviceName}/role/{roleName}"
        },
        {
            "description": "Details about a Service",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get this object properties",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The internal ID of your Queue app",
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
                        "description": "Beta version",
                        "value": "BETA"
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
                            "description": "The internal ID of your Queue app",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                }
            ],
            "path": "/dbaas/queue/{serviceName}/serviceInfos"
        },
        {
            "description": "Topic",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "List all topics of the application",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Application ID",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string[]"
                }
            ],
            "path": "/dbaas/queue/{serviceName}/topic"
        },
        {
            "description": "Topic",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Delete a topic",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Application ID",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Topic ID",
                            "fullType": "string",
                            "name": "topicId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get a topic",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Application ID",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Topic ID",
                            "fullType": "string",
                            "name": "topicId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.queue.Topic"
                }
            ],
            "path": "/dbaas/queue/{serviceName}/topic/{topicId}"
        },
        {
            "description": "User",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "List all users of the application",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Application ID",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string[]"
                }
            ],
            "path": "/dbaas/queue/{serviceName}/user"
        },
        {
            "description": "User",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get a user",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Application ID",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "User ID",
                            "fullType": "string",
                            "name": "userId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.queue.User"
                }
            ],
            "path": "/dbaas/queue/{serviceName}/user/{userId}"
        },
        {
            "description": "User",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Generate a new user password",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Application ID",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "User ID",
                            "fullType": "string",
                            "name": "userId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.queue.UserWithPassword"
                }
            ],
            "path": "/dbaas/queue/{serviceName}/user/{userId}/changePassword"
        },
        {
            "description": "User roles",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get user roles",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Application ID",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "User ID",
                            "fullType": "string",
                            "name": "userId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string[]"
                }
            ],
            "path": "/dbaas/queue/{serviceName}/user/{userId}/roles"
        }
    ],
    "basePath": "https://eu.api.kimsufi.com/1.0",
    "models": {
        "dbaas.queue.App": {
            "description": "App",
            "id": "App",
            "namespace": "dbaas.queue",
            "properties": {
                "humanId": {
                    "canBeNull": false,
                    "description": "Human ID of the application",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Application ID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Application name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "regionId": {
                    "canBeNull": false,
                    "description": "Region ID of the application",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Application status",
                    "fullType": "dbaas.queue.AppStatus",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.queue.AppStatus"
                }
            }
        },
        "dbaas.queue.AppConfiguration": {
            "description": "AppConfiguration",
            "id": "AppConfiguration",
            "namespace": "dbaas.queue",
            "properties": {
                "app": {
                    "canBeNull": false,
                    "description": "Application",
                    "fullType": "dbaas.queue.App",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.queue.App"
                },
                "metricsAccount": {
                    "canBeNull": false,
                    "description": "Metrics account",
                    "fullType": "dbaas.queue.MetricsAccount",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.queue.MetricsAccount"
                },
                "roles": {
                    "canBeNull": false,
                    "description": "List of created roles",
                    "fullType": "dbaas.queue.Role[]",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.queue.Role[]"
                },
                "users": {
                    "canBeNull": false,
                    "description": "List of created users",
                    "fullType": "dbaas.queue.UserWithPassword[]",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.queue.UserWithPassword[]"
                }
            }
        },
        "dbaas.queue.AppStatus": {
            "description": "AppStatus",
            "enum": [
                "not_configured",
                "active",
                "deleted"
            ],
            "enumType": "string",
            "id": "AppStatus",
            "namespace": "dbaas.queue"
        },
        "dbaas.queue.Key": {
            "description": "Key",
            "id": "Key",
            "namespace": "dbaas.queue",
            "properties": {
                "humanAppId": {
                    "canBeNull": false,
                    "description": "Human ID of the key's application",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Key ID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Key name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "dbaas.queue.KeyWithSecret": {
            "description": "KeyWithSecret",
            "id": "KeyWithSecret",
            "namespace": "dbaas.queue",
            "properties": {
                "humanAppId": {
                    "canBeNull": false,
                    "description": "Human ID of the key's application",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Key ID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Key name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "secret": {
                    "canBeNull": false,
                    "description": "Key secret",
                    "fullType": "password",
                    "readOnly": true,
                    "required": false,
                    "type": "password"
                }
            }
        },
        "dbaas.queue.MetricsAccount": {
            "description": "MetricsAccount",
            "id": "MetricsAccount",
            "namespace": "dbaas.queue",
            "properties": {
                "host": {
                    "canBeNull": false,
                    "description": "OpenTSDB host url",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "token": {
                    "canBeNull": false,
                    "description": "Token for OpenTSDB metrics access",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "dbaas.queue.Region": {
            "description": "Region",
            "id": "Region",
            "namespace": "dbaas.queue",
            "properties": {
                "id": {
                    "canBeNull": false,
                    "description": "Region ID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Region name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "url": {
                    "canBeNull": false,
                    "description": "Region URL",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "dbaas.queue.Role": {
            "description": "Role",
            "id": "Role",
            "namespace": "dbaas.queue",
            "properties": {
                "autoCreateAcl": {
                    "canBeNull": false,
                    "description": "Automatically create non-existing topics on read & write operations",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Role name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "readAcl": {
                    "canBeNull": false,
                    "description": "List of topics with read access",
                    "fullType": "string[]",
                    "readOnly": true,
                    "required": false,
                    "type": "string[]"
                },
                "writeAcl": {
                    "canBeNull": false,
                    "description": "List of topics with write access",
                    "fullType": "string[]",
                    "readOnly": true,
                    "required": false,
                    "type": "string[]"
                }
            }
        },
        "dbaas.queue.Topic": {
            "description": "Topic",
            "id": "Topic",
            "namespace": "dbaas.queue",
            "properties": {
                "id": {
                    "canBeNull": false,
                    "description": "Topic ID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "partitions": {
                    "canBeNull": false,
                    "description": "Number of partitions",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "replicationFactor": {
                    "canBeNull": false,
                    "description": "Replication factor",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "dbaas.queue.User": {
            "description": "User",
            "id": "User",
            "namespace": "dbaas.queue",
            "properties": {
                "id": {
                    "canBeNull": false,
                    "description": "User ID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "User name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "roles": {
                    "canBeNull": false,
                    "description": "List of roles this user belongs to",
                    "fullType": "string[]",
                    "readOnly": true,
                    "required": false,
                    "type": "string[]"
                }
            }
        },
        "dbaas.queue.UserWithPassword": {
            "description": "UserWithPassword",
            "id": "UserWithPassword",
            "namespace": "dbaas.queue",
            "properties": {
                "id": {
                    "canBeNull": false,
                    "description": "User ID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "User name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "password": {
                    "canBeNull": false,
                    "description": "User password",
                    "fullType": "password",
                    "readOnly": true,
                    "required": false,
                    "type": "password"
                },
                "roles": {
                    "canBeNull": false,
                    "description": "List of roles this user belongs to",
                    "fullType": "string[]",
                    "readOnly": true,
                    "required": false,
                    "type": "string[]"
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
    "resourcePath": "/dbaas/queue"
};
//# sourceMappingURL=dbaas-queue.js.map