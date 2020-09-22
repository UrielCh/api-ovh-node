"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = {
    "apiVersion": "1.0",
    "apis": [
        {
            "description": "Operations about the DBAAS-LOGS service",
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
            "path": "/dbaas/logs"
        },
        {
            "description": "Engines",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of available input engines",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [],
                    "responseType": "uuid[]"
                }
            ],
            "path": "/dbaas/logs/input/engine"
        },
        {
            "description": "Engine",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns details of specified input engine",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Engine ID",
                            "fullType": "uuid",
                            "name": "engineId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Engine"
                }
            ],
            "path": "/dbaas/logs/input/engine/{engineId}"
        },
        {
            "description": "Input engine helpers",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Return the list of available helpers for the given input engine",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Engine ID",
                            "fullType": "uuid",
                            "name": "engineId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                }
            ],
            "path": "/dbaas/logs/input/engine/{engineId}/helper"
        },
        {
            "description": "Input engine helpers",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns details of specified input engine helper",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Engine ID",
                            "fullType": "uuid",
                            "name": "engineId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Helper ID",
                            "fullType": "uuid",
                            "name": "helperId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Helper"
                }
            ],
            "path": "/dbaas/logs/input/engine/{engineId}/helper/{helperId}"
        },
        {
            "description": "Offer",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-06-01T00:00:00+00:00",
                        "deprecatedDate": "2020-04-08T17:41:02+02:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/dbaas/logs/{serviceName}",
                        "value": "DEPRECATED"
                    },
                    "description": "Display specified offer",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Reference",
                            "fullType": "string",
                            "name": "reference",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.PublicOffer"
                }
            ],
            "path": "/dbaas/logs/offer/{reference}"
        },
        {
            "description": "Operations about the DBAAS-LOGS service",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the service object of connected identity.",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Service"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Update the service properties",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.Update",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.Update",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}"
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
                            "description": "The internal ID of your Logs pack",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "long[]"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/changeContact"
        },
        {
            "description": "Service Clusters",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of allowed cluster",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/cluster"
        },
        {
            "description": "Service Clusters",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns details of an allowed cluster",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Cluster ID",
                            "fullType": "uuid",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Cluster"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Update details of an allowed cluster",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.ClusterAllowedNetworks",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.ClusterAllowedNetworks",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Cluster ID",
                            "fullType": "uuid",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/cluster/{clusterId}"
        },
        {
            "description": "Cluster allowed networks",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-06-01T00:00:00+00:00",
                        "deprecatedDate": "2019-07-23T17:41:02+02:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/dbaas/logs/{serviceName}/cluster",
                        "value": "DEPRECATED"
                    },
                    "description": "List all the network ID allowed to contact given cluster",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Cluster ID",
                            "fullType": "uuid",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                },
                {
                    "apiStatus": {
                        "deletionDate": "2020-06-01T00:00:00+00:00",
                        "deprecatedDate": "2019-07-23T17:41:02+02:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/dbaas/logs/{serviceName}/cluster",
                        "value": "DEPRECATED"
                    },
                    "description": "Allow an IP to contact cluster",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.ClusterAllowedNetworkCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.ClusterAllowedNetworkCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Cluster ID",
                            "fullType": "uuid",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork"
        },
        {
            "description": "Cluster allowed networks",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-06-01T00:00:00+00:00",
                        "deprecatedDate": "2019-07-23T17:41:02+02:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/dbaas/logs/{serviceName}/cluster",
                        "value": "DEPRECATED"
                    },
                    "description": "Remove the specified IP from the list of allowed networks",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Allowed network ID",
                            "fullType": "uuid",
                            "name": "allowedNetworkId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Cluster ID",
                            "fullType": "uuid",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                },
                {
                    "apiStatus": {
                        "deletionDate": "2020-06-01T00:00:00+00:00",
                        "deprecatedDate": "2019-07-23T17:41:02+02:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/dbaas/logs/{serviceName}/cluster",
                        "value": "DEPRECATED"
                    },
                    "description": "Returns details of an allowed network",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Allowed network ID",
                            "fullType": "uuid",
                            "name": "allowedNetworkId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Cluster ID",
                            "fullType": "uuid",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.ClusterAllowedNetwork"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}"
        },
        {
            "description": "Cluster available retentions",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List all the retention ID available for a given cluster",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Cluster ID",
                            "fullType": "uuid",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/cluster/{clusterId}/retention"
        },
        {
            "description": "Cluster available retentions",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns details of a retention",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Cluster ID",
                            "fullType": "uuid",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Retention ID",
                            "fullType": "uuid",
                            "name": "retentionId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.ClusterRetention"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/cluster/{clusterId}/retention/{retentionId}"
        },
        {
            "description": "Inputs",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of registered input attached to the logged user",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Register a new input object",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.InputCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.InputCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/input"
        },
        {
            "description": "Input",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Remove the specified input object",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Input ID",
                            "fullType": "uuid",
                            "name": "inputId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns details of specified input",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Input ID",
                            "fullType": "uuid",
                            "name": "inputId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Input"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Update information of specified input object",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.InputUpdate",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.InputUpdate",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Input ID",
                            "fullType": "uuid",
                            "name": "inputId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/input/{inputId}"
        },
        {
            "description": "InputActions",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns actions of specified input",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Input ID",
                            "fullType": "uuid",
                            "name": "inputId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.InputAction[]"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/input/{inputId}/action"
        },
        {
            "description": "InputAllowedNetworks",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-06-01T00:00:00+00:00",
                        "deprecatedDate": "2019-07-23T17:41:02+02:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/dbaas/logs/{serviceName}/input",
                        "value": "DEPRECATED"
                    },
                    "description": "List all network ID allowed to join input",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Input ID",
                            "fullType": "uuid",
                            "name": "inputId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                },
                {
                    "apiStatus": {
                        "deletionDate": "2020-06-01T00:00:00+00:00",
                        "deprecatedDate": "2019-07-23T17:41:02+02:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/dbaas/logs/{serviceName}/input",
                        "value": "DEPRECATED"
                    },
                    "description": "Allow an ip to join input",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.InputAllowedNetworkCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.InputAllowedNetworkCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Input ID",
                            "fullType": "uuid",
                            "name": "inputId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork"
        },
        {
            "description": "InputAllowedNetwork",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-06-01T00:00:00+00:00",
                        "deprecatedDate": "2019-07-23T17:41:02+02:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/dbaas/logs/{serviceName}/input",
                        "value": "DEPRECATED"
                    },
                    "description": "Remove the specified IP from the list of allowed networks",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Allowed network ID",
                            "fullType": "uuid",
                            "name": "allowedNetworkId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Input ID",
                            "fullType": "uuid",
                            "name": "inputId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                },
                {
                    "apiStatus": {
                        "deletionDate": "2020-06-01T00:00:00+00:00",
                        "deprecatedDate": "2019-07-23T17:41:02+02:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/dbaas/logs/{serviceName}/input",
                        "value": "DEPRECATED"
                    },
                    "description": "List all network ID allowed to join input",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Allowed network ID",
                            "fullType": "uuid",
                            "name": "allowedNetworkId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Input ID",
                            "fullType": "uuid",
                            "name": "inputId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.AllowedNetwork"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}"
        },
        {
            "description": "InputConfigtest",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Validate configuration of specified input",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Input ID",
                            "fullType": "uuid",
                            "name": "inputId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/input/{inputId}/configtest"
        },
        {
            "description": "InputConfigtestResult",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the config test operation result",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Input ID",
                            "fullType": "uuid",
                            "name": "inputId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.TestResult"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/input/{inputId}/configtest/result"
        },
        {
            "description": "FlowggerConfiguration",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the flowgger configuration",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Input ID",
                            "fullType": "uuid",
                            "name": "inputId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.FlowggerConfiguration"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Update the flowgger configuration",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.InputConfigurationFlowggerUpdate",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.InputConfigurationFlowggerUpdate",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Input ID",
                            "fullType": "uuid",
                            "name": "inputId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger"
        },
        {
            "description": "LogstashConfiguration",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the logstash configuration",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Input ID",
                            "fullType": "uuid",
                            "name": "inputId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.LogstashConfiguration"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Update the logstash configuration",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.InputConfigurationLogstashUpdate",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.InputConfigurationLogstashUpdate",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Input ID",
                            "fullType": "uuid",
                            "name": "inputId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash"
        },
        {
            "description": "InputEnd",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Schedule the end of specified input",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Input ID",
                            "fullType": "uuid",
                            "name": "inputId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/input/{inputId}/end"
        },
        {
            "description": "InputLogs",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Generate a temporary url to retrieve input logs",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Input ID",
                            "fullType": "uuid",
                            "name": "inputId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.TemporaryLogsLink"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/input/{inputId}/logs/url"
        },
        {
            "description": "InputRestart",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Schedule the restart of specified input",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Input ID",
                            "fullType": "uuid",
                            "name": "inputId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/input/{inputId}/restart"
        },
        {
            "description": "InputStart",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Schedule the start of specified input",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Input ID",
                            "fullType": "uuid",
                            "name": "inputId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/input/{inputId}/start"
        },
        {
            "description": "InputUrls",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of urls of specified input",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Input ID",
                            "fullType": "uuid",
                            "name": "inputId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Url[]"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/input/{inputId}/url"
        },
        {
            "description": "Service Metrics",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns Metrics credentials",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.ServiceMetric"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/metrics"
        },
        {
            "description": "ServiceOffer",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-06-01T00:00:00+00:00",
                        "deprecatedDate": "2020-04-08T17:41:02+02:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/dbaas/logs/{serviceName}",
                        "value": "DEPRECATED"
                    },
                    "description": "Returns the subscribed offer",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Offer"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/offer"
        },
        {
            "description": "Operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Latest operations",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/operation"
        },
        {
            "description": "Operation",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns details of specified operation",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Operation ID",
                            "fullType": "uuid",
                            "name": "operationId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/operation/{operationId}"
        },
        {
            "description": "ServiceOptions",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-06-01T00:00:00+00:00",
                        "deprecatedDate": "2020-04-08T17:41:02+02:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/dbaas/logs/{serviceName}",
                        "value": "DEPRECATED"
                    },
                    "description": "Returns the subscribed additional options",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/option"
        },
        {
            "description": "ServiceOption",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-06-01T00:00:00+00:00",
                        "deprecatedDate": "2020-04-08T17:41:02+02:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/dbaas/logs/{serviceName}",
                        "value": "DEPRECATED"
                    },
                    "description": "Returns details of a subscribed option",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Option ID",
                            "fullType": "uuid",
                            "name": "optionId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Option"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/option/{optionId}"
        },
        {
            "description": "ServiceOption",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-06-01T00:00:00+00:00",
                        "deprecatedDate": "2020-04-08T17:41:02+02:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/dbaas/logs/{serviceName}",
                        "value": "DEPRECATED"
                    },
                    "description": "Remove the specified subscribed option",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Option ID",
                            "fullType": "uuid",
                            "name": "optionId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/option/{optionId}/terminate"
        },
        {
            "description": "Aliases",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of alias for connected user",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Register a new elasticsearch alias",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.OutputElasticsearchAliasCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.OutputElasticsearchAliasCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias"
        },
        {
            "description": "Alias",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Remove specified elasticsearch alias",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Alias ID",
                            "fullType": "uuid",
                            "name": "aliasId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns specified elasticsearch alias",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Alias ID",
                            "fullType": "uuid",
                            "name": "aliasId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Alias"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Update specified elasticsearch alias",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.OutputElasticsearchAliasUpdate",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.OutputElasticsearchAliasUpdate",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Alias ID",
                            "fullType": "uuid",
                            "name": "aliasId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}"
        },
        {
            "description": "AliasStreams",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of elasticsearch indexes attached to specified\n        elasticsearch alias",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Alias ID",
                            "fullType": "uuid",
                            "name": "aliasId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Attach a elasticsearch index to specified elasticsearch alias",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.OutputElasticsearchAliasIndexCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.OutputElasticsearchAliasIndexCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Alias ID",
                            "fullType": "uuid",
                            "name": "aliasId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index"
        },
        {
            "description": "AliasStream",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Detach a elasticsearch index from specified elasticsearch alias",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Alias ID",
                            "fullType": "uuid",
                            "name": "aliasId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Index ID",
                            "fullType": "uuid",
                            "name": "indexId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index/{indexId}"
        },
        {
            "description": "AliasStreams",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of graylog streams attached to specified\n        elasticsearch alias",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Alias ID",
                            "fullType": "uuid",
                            "name": "aliasId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Attach a graylog stream to specified elasticsearch alias",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.OutputElasticsearchAliasStreamCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.OutputElasticsearchAliasStreamCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Alias ID",
                            "fullType": "uuid",
                            "name": "aliasId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream"
        },
        {
            "description": "AliasStream",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Detach a graylog stream from specified elasticsearch alias",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Alias ID",
                            "fullType": "uuid",
                            "name": "aliasId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream/{streamId}"
        },
        {
            "description": "AliasUrls",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of urls of specified alias",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Alias ID",
                            "fullType": "uuid",
                            "name": "aliasId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Url[]"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/url"
        },
        {
            "description": "Indexes",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of elasticsearch indexes",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Register a new elasticsearch index",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.OutputElasticsearchIndexCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.OutputElasticsearchIndexCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/elasticsearch/index"
        },
        {
            "description": "Index",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Remove specified elasticsearch index",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Index ID",
                            "fullType": "uuid",
                            "name": "indexId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns specified elasticsearch index",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Index ID",
                            "fullType": "uuid",
                            "name": "indexId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Index"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Update specified elasticsearch index",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.OutputElasticsearchIndexUpdate",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.OutputElasticsearchIndexUpdate",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Index ID",
                            "fullType": "uuid",
                            "name": "indexId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}"
        },
        {
            "description": "IndexUrls",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of urls of specified index",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Index ID",
                            "fullType": "uuid",
                            "name": "indexId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Url[]"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}/url"
        },
        {
            "description": "Kibana instances",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of Kibana instances",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Register a new Kibana instance",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.KibanaCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.KibanaCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/elasticsearch/kibana"
        },
        {
            "description": "Kibana instances",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Remove specified Kibana instance",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Kibana ID",
                            "fullType": "uuid",
                            "name": "kibanaId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns specified Kibana instance",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Kibana ID",
                            "fullType": "uuid",
                            "name": "kibanaId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Kibana"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Update specified Kibana instance",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.KibanaUpdate",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.KibanaUpdate",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Kibana ID",
                            "fullType": "uuid",
                            "name": "kibanaId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/elasticsearch/kibana/{kibanaId}"
        },
        {
            "description": "KibanaUrls",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of urls of specified Kibana",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Kibana ID",
                            "fullType": "uuid",
                            "name": "kibanaId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Url[]"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/elasticsearch/kibana/{kibanaId}/url"
        },
        {
            "description": "Dashboards",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of graylog dashboards",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Register a new graylog dashboard",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.OutputGraylogDashboardCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.OutputGraylogDashboardCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/graylog/dashboard"
        },
        {
            "description": "Dashboard",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Remove specified graylog dashboard",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Dashboard ID",
                            "fullType": "uuid",
                            "name": "dashboardId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns details of specified graylog dashboard",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Dashboard ID",
                            "fullType": "uuid",
                            "name": "dashboardId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Dashboard"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Update information of specified graylog dashboard",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.OutputGraylogDashboardUpdate",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.OutputGraylogDashboardUpdate",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Dashboard ID",
                            "fullType": "uuid",
                            "name": "dashboardId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}"
        },
        {
            "description": "DashboardClone",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Copy all widgets from specified dashboard to a new one",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.OutputGraylogDashboardDuplicateCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.OutputGraylogDashboardDuplicateCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Dashboard ID",
                            "fullType": "uuid",
                            "name": "dashboardId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/duplicate"
        },
        {
            "description": "DashboardUrls",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of urls of specified graylog dashboard",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Dashboard ID",
                            "fullType": "uuid",
                            "name": "dashboardId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Url[]"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/url"
        },
        {
            "description": "Streams",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of graylog streams",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Register a new graylog stream",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.OutputGraylogStreamCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.OutputGraylogStreamCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/graylog/stream"
        },
        {
            "description": "Stream",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Remove specified graylog stream",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns details of specified graylog stream",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Stream"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Update information of specified graylog stream",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.OutputGraylogStreamUpdate",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.OutputGraylogStreamUpdate",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}"
        },
        {
            "description": "StreamAlerts",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of configured alerts of specified graylog stream",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Register a new alert on specified graylog stream",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.OutputGraylogStreamAlertCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.OutputGraylogStreamAlertCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert"
        },
        {
            "description": "StreamAlert",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Remove alert from specified graylog stream",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Alert ID",
                            "fullType": "uuid",
                            "name": "alertId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns details of specified graylog stream alert",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Alert ID",
                            "fullType": "uuid",
                            "name": "alertId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.StreamAlertCondition"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Update alert information of specified graylog stream",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.OutputGraylogStreamAlertUpdate",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.OutputGraylogStreamAlertUpdate",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Alert ID",
                            "fullType": "uuid",
                            "name": "alertId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}"
        },
        {
            "description": "StreamArchives",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of archives",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive"
        },
        {
            "description": "StreamArchive",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns details of specified archive",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Archive ID",
                            "fullType": "uuid",
                            "name": "archiveId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Archive"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}"
        },
        {
            "description": "Streams",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get a public temporary URL to access the archive",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Archive ID",
                            "fullType": "uuid",
                            "name": "archiveId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.ArchiveUrl"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}/url"
        },
        {
            "description": "StreamRules",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of rules of specified graylog stream",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Register a new rule on specified graylog stream",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.OutputGraylogStreamRuleCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.OutputGraylogStreamRuleCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule"
        },
        {
            "description": "StreamRule",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Remove specified graylog stream rule",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Rule ID",
                            "fullType": "uuid",
                            "name": "ruleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns details of specified graylog stream rule",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Rule ID",
                            "fullType": "uuid",
                            "name": "ruleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.StreamRule"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}"
        },
        {
            "description": "StreamUrls",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of urls of specified graylog stream",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Url[]"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/url"
        },
        {
            "description": "ServiceQuota",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-06-01T00:00:00+00:00",
                        "deprecatedDate": "2020-04-08T17:41:02+02:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/dbaas/logs/{serviceName}",
                        "value": "DEPRECATED"
                    },
                    "description": "Returns the overall quota limits",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Quota"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/quota"
        },
        {
            "description": "Roles",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of roles",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Register a new role",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.RoleCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.RoleCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/role"
        },
        {
            "description": "Role",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Remove specified role",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Role ID",
                            "fullType": "uuid",
                            "name": "roleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns details of specified role",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Role ID",
                            "fullType": "uuid",
                            "name": "roleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Role"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Update information of specified role",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.RoleUpdate",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.RoleUpdate",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Role ID",
                            "fullType": "uuid",
                            "name": "roleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/role/{roleId}"
        },
        {
            "description": "RoleMembers",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the member list of specified role",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Role ID",
                            "fullType": "uuid",
                            "name": "roleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
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
                    "description": "Append user into the member list of specified role",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.RoleMemberCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.RoleMemberCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Role ID",
                            "fullType": "uuid",
                            "name": "roleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/role/{roleId}/member"
        },
        {
            "description": "RoleMember",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Remove user from the member list of specified role",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Role ID",
                            "fullType": "uuid",
                            "name": "roleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Username",
                            "fullType": "string",
                            "name": "username",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the member metadata",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Role ID",
                            "fullType": "uuid",
                            "name": "roleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Username",
                            "fullType": "string",
                            "name": "username",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Member"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Update the member metadata",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.RoleMemberUpdate",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.RoleMemberUpdate",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Role ID",
                            "fullType": "uuid",
                            "name": "roleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Username",
                            "fullType": "string",
                            "name": "username",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/role/{roleId}/member/{username}"
        },
        {
            "description": "RolePermissions",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of permissions of specified role",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Role ID",
                            "fullType": "uuid",
                            "name": "roleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission"
        },
        {
            "description": "RolePermissionAlias",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Append a elasticsearch alias permission to role",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.RolePermissionAliasCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.RolePermissionAliasCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Role ID",
                            "fullType": "uuid",
                            "name": "roleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission/alias"
        },
        {
            "description": "RolePermissionIndex",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Append a graylog dashboard permission to role",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.RolePermissionDashboardCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.RolePermissionDashboardCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Role ID",
                            "fullType": "uuid",
                            "name": "roleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission/dashboard"
        },
        {
            "description": "RolePermissionIndex",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Append a elasticsearch index permission to role",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.RolePermissionIndexCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.RolePermissionIndexCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Role ID",
                            "fullType": "uuid",
                            "name": "roleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission/index"
        },
        {
            "description": "RolePermissionKibana",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Append a kibana permission to role",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.RolePermissionKibanaCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.RolePermissionKibanaCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Role ID",
                            "fullType": "uuid",
                            "name": "roleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission/kibana"
        },
        {
            "description": "RolePermissionIndex",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Append a graylog stream permission to role",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.RolePermissionStreamCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.RolePermissionStreamCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Role ID",
                            "fullType": "uuid",
                            "name": "roleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission/stream"
        },
        {
            "description": "RolePermission",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Remove specified permission",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Permission ID",
                            "fullType": "uuid",
                            "name": "permissionId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Role ID",
                            "fullType": "uuid",
                            "name": "roleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns details of specified permission",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Permission ID",
                            "fullType": "uuid",
                            "name": "permissionId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Role ID",
                            "fullType": "uuid",
                            "name": "roleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Permission"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}"
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
                            "description": "The internal ID of your Logs pack",
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
                            "description": "The internal ID of your Logs pack",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/serviceInfos"
        },
        {
            "description": "Tokens",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the list of service tokens",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Add a new token",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.TokenCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.TokenCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/token"
        },
        {
            "description": "Token",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete the specified token",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Token ID",
                            "fullType": "uuid",
                            "name": "tokenId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns the specified token",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Token ID",
                            "fullType": "uuid",
                            "name": "tokenId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Token"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/token/{tokenId}"
        },
        {
            "description": "ServiceUrls",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Returns platform useful urls.",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Url[]"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/url"
        },
        {
            "description": "ServiceChangePassword",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Initiate a password change procedure.",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "dbaas.logs.UserChangePasswordCreation",
                            "description": "Request Body",
                            "fullType": "dbaas.logs.UserChangePasswordCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Service name",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "dbaas.logs.Operation"
                }
            ],
            "path": "/dbaas/logs/{serviceName}/user/changePassword"
        }
    ],
    "basePath": "https://ca.api.ovh.com/1.0",
    "models": {
        "dbaas.logs.Alias": {
            "description": "Elasticsearch alias",
            "id": "Alias",
            "namespace": "dbaas.logs",
            "properties": {
                "aliasId": {
                    "canBeNull": false,
                    "description": "Alias ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "createdAt": {
                    "canBeNull": false,
                    "description": "Input creation",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "description": {
                    "canBeNull": true,
                    "description": "Alias description",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "isEditable": {
                    "canBeNull": false,
                    "description": "Indicates if you are allowed to edit entry",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "isShareable": {
                    "canBeNull": false,
                    "description": "Indicates if you are allowed to share entry",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Alias name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "optionId": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Associated DBaaS Logs option",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "updatedAt": {
                    "canBeNull": true,
                    "description": "Input last update",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                }
            }
        },
        "dbaas.logs.AllowedNetwork": {
            "description": "Network allowed to join input",
            "id": "AllowedNetwork",
            "namespace": "dbaas.logs",
            "properties": {
                "allowedNetworkId": {
                    "canBeNull": false,
                    "description": "Network ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "network": {
                    "canBeNull": false,
                    "description": "IP block",
                    "fullType": "ipBlock",
                    "readOnly": true,
                    "required": false,
                    "type": "ipBlock"
                }
            }
        },
        "dbaas.logs.Archive": {
            "description": "Stream archive",
            "id": "Archive",
            "namespace": "dbaas.logs",
            "properties": {
                "archiveId": {
                    "canBeNull": false,
                    "description": "Archive ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "createdAt": {
                    "canBeNull": true,
                    "description": "Create date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "filename": {
                    "canBeNull": false,
                    "description": "Filename",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "md5": {
                    "canBeNull": false,
                    "description": "MD5 checksum",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "retrievalDelay": {
                    "canBeNull": false,
                    "description": "Retrieval delay",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "retrievalState": {
                    "canBeNull": false,
                    "description": "Retrieval state",
                    "fullType": "dbaas.logs.ArchiveRetrievalStateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.ArchiveRetrievalStateEnum"
                },
                "sha256": {
                    "canBeNull": false,
                    "description": "sha256 checksum",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "size": {
                    "canBeNull": false,
                    "description": "File size in bytes",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "dbaas.logs.ArchiveRetrievalStateEnum": {
            "description": "Possible values for ArchiveRetrievalStateEnum",
            "enum": [
                "sealed",
                "unsealing",
                "unsealed"
            ],
            "enumType": "string",
            "id": "ArchiveRetrievalStateEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.ArchiveUrl": {
            "description": "Stream archive url",
            "id": "ArchiveUrl",
            "namespace": "dbaas.logs",
            "properties": {
                "expirationDate": {
                    "canBeNull": false,
                    "description": "Temporary URL expiration date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "url": {
                    "canBeNull": false,
                    "description": "Temporary URL to get archive",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.Cluster": {
            "description": "Cluster",
            "id": "Cluster",
            "namespace": "dbaas.logs",
            "properties": {
                "clusterId": {
                    "canBeNull": false,
                    "description": "Cluster ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "clusterType": {
                    "canBeNull": false,
                    "description": "Cluster type",
                    "fullType": "dbaas.logs.ClusterClusterTypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.ClusterClusterTypeEnum"
                },
                "dedicatedInputPEM": {
                    "canBeNull": false,
                    "description": "PEM for dedicated inputs",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "defaultRetentionId": {
                    "canBeNull": false,
                    "description": "Retention ID used by default when none is given on new stream",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "directInputAllowedNetworks": {
                    "canBeNull": false,
                    "description": "Allowed networks for DIRECT_INPUT flow type",
                    "fullType": "ipBlock[]",
                    "readOnly": true,
                    "required": false,
                    "type": "ipBlock[]"
                },
                "directInputPEM": {
                    "canBeNull": false,
                    "description": "PEM for direct inputs",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "hostname": {
                    "canBeNull": false,
                    "description": "Hostname",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "isDefault": {
                    "canBeNull": false,
                    "description": "All content generated by given service will be placed on this cluster",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "isUnlocked": {
                    "canBeNull": false,
                    "description": "Allow given service to perform advanced operations on cluster",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "queryAllowedNetworks": {
                    "canBeNull": false,
                    "description": "Allowed networks for QUERY flow type",
                    "fullType": "ipBlock[]",
                    "readOnly": true,
                    "required": false,
                    "type": "ipBlock[]"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Data center localization",
                    "fullType": "dbaas.logs.ClusterRegionEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.ClusterRegionEnum"
                }
            }
        },
        "dbaas.logs.ClusterAllowedNetwork": {
            "description": "Cluster allowed network",
            "id": "ClusterAllowedNetwork",
            "namespace": "dbaas.logs",
            "properties": {
                "allowedNetworkId": {
                    "canBeNull": false,
                    "description": "Network ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "flowType": {
                    "canBeNull": false,
                    "description": "Flow type",
                    "fullType": "dbaas.logs.ClusterAllowedNetworkFlowTypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.ClusterAllowedNetworkFlowTypeEnum"
                },
                "network": {
                    "canBeNull": false,
                    "description": "IP block",
                    "fullType": "ipBlock",
                    "readOnly": true,
                    "required": false,
                    "type": "ipBlock"
                }
            }
        },
        "dbaas.logs.ClusterAllowedNetworkCreation": {
            "description": "Missing description",
            "id": "ClusterAllowedNetworkCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "flowType": {
                    "canBeNull": false,
                    "description": "Flow type",
                    "fullType": "dbaas.logs.ClusterAllowedNetworkFlowTypeEnum",
                    "readOnly": false,
                    "required": true,
                    "type": "dbaas.logs.ClusterAllowedNetworkFlowTypeEnum"
                },
                "network": {
                    "canBeNull": false,
                    "description": "IP block",
                    "fullType": "ipBlock",
                    "readOnly": false,
                    "required": true,
                    "type": "ipBlock"
                }
            }
        },
        "dbaas.logs.ClusterAllowedNetworkFlowTypeEnum": {
            "description": "Possible values for ClusterAllowedNetworkFlowTypeEnum",
            "enum": [
                "QUERY",
                "DIRECT_INPUT",
                "ALL"
            ],
            "enumType": "string",
            "id": "ClusterAllowedNetworkFlowTypeEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.ClusterAllowedNetworks": {
            "description": "Cluster allowed networks",
            "id": "ClusterAllowedNetworks",
            "namespace": "dbaas.logs",
            "properties": {
                "directInputAllowedNetworks": {
                    "canBeNull": true,
                    "description": "Allowed networks for DIRECT_INPUT flow type",
                    "fullType": "ipBlock[]",
                    "readOnly": false,
                    "required": false,
                    "type": "ipBlock[]"
                },
                "queryAllowedNetworks": {
                    "canBeNull": true,
                    "description": "Allowed networks for QUERY flow type",
                    "fullType": "ipBlock[]",
                    "readOnly": false,
                    "required": false,
                    "type": "ipBlock[]"
                }
            }
        },
        "dbaas.logs.ClusterClusterTypeEnum": {
            "description": "Possible values for ClusterClusterTypeEnum",
            "enum": [
                "TRIAL",
                "PRO",
                "DEDICATED"
            ],
            "enumType": "string",
            "id": "ClusterClusterTypeEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.ClusterRegionEnum": {
            "description": "Possible values for ClusterRegionEnum",
            "enum": [
                "GRA",
                "RBX",
                "BHS",
                "SBG",
                "P-19"
            ],
            "enumType": "string",
            "id": "ClusterRegionEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.ClusterRetention": {
            "description": "Cluster retention",
            "id": "ClusterRetention",
            "namespace": "dbaas.logs",
            "properties": {
                "duration": {
                    "canBeNull": true,
                    "description": "Indexed duration expressed in ISO-8601 format",
                    "fullType": "duration",
                    "readOnly": true,
                    "required": false,
                    "type": "duration"
                },
                "isSupported": {
                    "canBeNull": false,
                    "description": "Indicates if a new stream can use it",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "retentionId": {
                    "canBeNull": false,
                    "description": "Retention ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                }
            }
        },
        "dbaas.logs.Dashboard": {
            "description": "Graylog dashboard",
            "id": "Dashboard",
            "namespace": "dbaas.logs",
            "properties": {
                "createdAt": {
                    "canBeNull": false,
                    "description": "Dashboard creation",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "dashboardId": {
                    "canBeNull": false,
                    "description": "Dashboard ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Dashboard description",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "isEditable": {
                    "canBeNull": false,
                    "description": "Indicates if you are allowed to edit entry",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "isShareable": {
                    "canBeNull": false,
                    "description": "Indicates if you are allowed to share entry",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "optionId": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Associated DBaaS Logs option",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "title": {
                    "canBeNull": false,
                    "description": "Dashboard description",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "updatedAt": {
                    "canBeNull": true,
                    "description": "Dashboard last update",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                }
            }
        },
        "dbaas.logs.DeliveryStatusEnum": {
            "description": "Possible values for DeliveryStatusEnum",
            "enum": [
                "DELIVERING",
                "READY",
                "DELETING"
            ],
            "enumType": "string",
            "id": "DeliveryStatusEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.Engine": {
            "description": "Input engine",
            "id": "Engine",
            "namespace": "dbaas.logs",
            "properties": {
                "engineId": {
                    "canBeNull": false,
                    "description": "Input engine ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "isDeprecated": {
                    "canBeNull": false,
                    "description": "Indicates if engine will soon not be supported",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Software name",
                    "fullType": "dbaas.logs.EngineNameEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.EngineNameEnum"
                },
                "version": {
                    "canBeNull": false,
                    "description": "Software version",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.EngineNameEnum": {
            "description": "Possible values for EngineNameEnum",
            "enum": [
                "FLOWGGER",
                "LOGSTASH",
                "TEST"
            ],
            "enumType": "string",
            "id": "EngineNameEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.FlowggerConfiguration": {
            "description": "Flowgger configuration",
            "id": "FlowggerConfiguration",
            "namespace": "dbaas.logs",
            "properties": {
                "logFormat": {
                    "canBeNull": false,
                    "description": "Type of format to decode",
                    "fullType": "dbaas.logs.FlowggerConfigurationLogFormatEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.FlowggerConfigurationLogFormatEnum"
                },
                "logFraming": {
                    "canBeNull": false,
                    "description": "Indicates how messages are delimited",
                    "fullType": "dbaas.logs.FlowggerConfigurationLogFramingEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.FlowggerConfigurationLogFramingEnum"
                }
            }
        },
        "dbaas.logs.FlowggerConfigurationLogFormatEnum": {
            "description": "Possible values for FlowggerConfigurationLogFormatEnum",
            "enum": [
                "RFC5424",
                "LTSV",
                "GELF",
                "CAPNP"
            ],
            "enumType": "string",
            "id": "FlowggerConfigurationLogFormatEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.FlowggerConfigurationLogFramingEnum": {
            "description": "Possible values for FlowggerConfigurationLogFramingEnum",
            "enum": [
                "LINE",
                "NUL",
                "SYSLEN",
                "CAPNP"
            ],
            "enumType": "string",
            "id": "FlowggerConfigurationLogFramingEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.Helper": {
            "description": "Helper",
            "id": "Helper",
            "namespace": "dbaas.logs",
            "properties": {
                "description": {
                    "canBeNull": false,
                    "description": "Helper description",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "engineId": {
                    "canBeNull": false,
                    "description": "Input engine UUID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "helperId": {
                    "canBeNull": false,
                    "description": "Helper UUID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "sections": {
                    "canBeNull": false,
                    "description": "Helper sections",
                    "fullType": "dbaas.logs.HelperSection[]",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.HelperSection[]"
                },
                "title": {
                    "canBeNull": false,
                    "description": "Helper title",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.HelperSection": {
            "description": "Helper section",
            "id": "HelperSection",
            "namespace": "dbaas.logs",
            "properties": {
                "content": {
                    "canBeNull": false,
                    "description": "Section content",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Section name",
                    "fullType": "dbaas.logs.HelperSectionNameEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.HelperSectionNameEnum"
                }
            }
        },
        "dbaas.logs.HelperSectionNameEnum": {
            "description": "Possible values for HelperSectionName",
            "enum": [
                "LOGSTASH_INPUT",
                "LOGSTASH_FILTER",
                "LOGSTASH_PATTERN"
            ],
            "enumType": "string",
            "id": "HelperSectionNameEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.Index": {
            "description": "Elasticsearch index",
            "id": "Index",
            "namespace": "dbaas.logs",
            "properties": {
                "alertNotifyEnabled": {
                    "canBeNull": true,
                    "description": "If set, notify when size is near 80, 90 or 100 % of its maximum capacity",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "createdAt": {
                    "canBeNull": false,
                    "description": "Index creation",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "description": {
                    "canBeNull": true,
                    "description": "Index description",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "indexId": {
                    "canBeNull": false,
                    "description": "Index ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "isEditable": {
                    "canBeNull": false,
                    "description": "Indicates if you are allowed to edit entry",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "isShareable": {
                    "canBeNull": false,
                    "description": "Indicates if you are allowed to share entry",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "maxSize": {
                    "canBeNull": false,
                    "description": "Maximum index size (in bytes)",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Index name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "nbShard": {
                    "canBeNull": true,
                    "description": "Number of shard",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "optionId": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Associated DBaaS Logs option",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "updatedAt": {
                    "canBeNull": true,
                    "description": "Index last update",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                }
            }
        },
        "dbaas.logs.Input": {
            "description": "Input",
            "id": "Input",
            "namespace": "dbaas.logs",
            "properties": {
                "allowedNetworks": {
                    "canBeNull": true,
                    "description": "IP blocks",
                    "fullType": "ipBlock[]",
                    "readOnly": true,
                    "required": false,
                    "type": "ipBlock[]"
                },
                "createdAt": {
                    "canBeNull": false,
                    "description": "Input creation",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Input description",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "engineId": {
                    "canBeNull": false,
                    "description": "Input engine ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "exposedPort": {
                    "canBeNull": true,
                    "description": "Port",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "hostname": {
                    "canBeNull": false,
                    "description": "Hostname",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "inputId": {
                    "canBeNull": false,
                    "description": "Input ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "isRestartRequired": {
                    "canBeNull": false,
                    "description": "Indicate if input need to be restarted",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "nbInstance": {
                    "canBeNull": true,
                    "description": "Number of instance running",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "optionId": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Associated DBaaS Logs option",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "publicAddress": {
                    "canBeNull": false,
                    "description": "Input IP address",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "singleInstanceEnabled": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Force only one instance",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "sslCertificate": {
                    "canBeNull": false,
                    "description": "Input SSL certificate",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "init: configuration required, pending: ready to start, running: available",
                    "fullType": "dbaas.logs.InputStatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.InputStatusEnum"
                },
                "streamId": {
                    "canBeNull": false,
                    "description": "Associated Graylog stream",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "title": {
                    "canBeNull": false,
                    "description": "Input title",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "updatedAt": {
                    "canBeNull": true,
                    "description": "Input last update",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                }
            }
        },
        "dbaas.logs.InputAction": {
            "description": "Action on input",
            "id": "InputAction",
            "namespace": "dbaas.logs",
            "properties": {
                "isAllowed": {
                    "canBeNull": false,
                    "description": "Indicates if action is allowed",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Action type",
                    "fullType": "dbaas.logs.InputActionTypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.InputActionTypeEnum"
                }
            }
        },
        "dbaas.logs.InputActionTypeEnum": {
            "description": "Possible values for InputActionTypeEnum",
            "enum": [
                "END",
                "LOG",
                "START",
                "TEST",
                "DESTROY",
                "RESTART"
            ],
            "enumType": "string",
            "id": "InputActionTypeEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.InputAllowedNetworkCreation": {
            "description": "Missing description",
            "id": "InputAllowedNetworkCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "network": {
                    "canBeNull": false,
                    "description": "IP block",
                    "fullType": "ipBlock",
                    "readOnly": false,
                    "required": true,
                    "type": "ipBlock"
                }
            }
        },
        "dbaas.logs.InputConfigurationFlowggerUpdate": {
            "description": "Missing description",
            "id": "InputConfigurationFlowggerUpdate",
            "namespace": "dbaas.logs",
            "properties": {
                "logFormat": {
                    "canBeNull": false,
                    "description": "configuration log format",
                    "fullType": "dbaas.logs.FlowggerConfigurationLogFormatEnum",
                    "readOnly": false,
                    "required": true,
                    "type": "dbaas.logs.FlowggerConfigurationLogFormatEnum"
                },
                "logFraming": {
                    "canBeNull": false,
                    "description": "Log framing",
                    "fullType": "dbaas.logs.FlowggerConfigurationLogFramingEnum",
                    "readOnly": false,
                    "required": true,
                    "type": "dbaas.logs.FlowggerConfigurationLogFramingEnum"
                }
            }
        },
        "dbaas.logs.InputConfigurationLogstashUpdate": {
            "description": "Missing description",
            "id": "InputConfigurationLogstashUpdate",
            "namespace": "dbaas.logs",
            "properties": {
                "filterSection": {
                    "canBeNull": true,
                    "description": "Filter section",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "inputSection": {
                    "canBeNull": false,
                    "description": "Input section",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "patternSection": {
                    "canBeNull": true,
                    "description": "Pattern section",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.InputCreation": {
            "description": "Missing description",
            "id": "InputCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "allowedNetworks": {
                    "canBeNull": true,
                    "description": "IP blocks",
                    "fullType": "ipBlock[]",
                    "readOnly": false,
                    "required": false,
                    "type": "ipBlock[]"
                },
                "autoSelectOption": {
                    "canBeNull": true,
                    "description": "DEPRECATED: If set, automatically selects a compatible option",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Description",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "engineId": {
                    "canBeNull": false,
                    "description": "Engine ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": true,
                    "type": "uuid"
                },
                "exposedPort": {
                    "canBeNull": true,
                    "description": "Exposed port",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "nbInstance": {
                    "canBeNull": true,
                    "description": "Number of instance running",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "optionId": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Option ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": false,
                    "type": "uuid"
                },
                "singleInstanceEnabled": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Indicate if input have only a single instance",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "streamId": {
                    "canBeNull": false,
                    "description": "Stream ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": true,
                    "type": "uuid"
                },
                "title": {
                    "canBeNull": false,
                    "description": "Title",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.InputStatusEnum": {
            "description": "Possible values for InputStatusEnum",
            "enum": [
                "INIT",
                "PENDING",
                "RUNNING",
                "PROCESSING"
            ],
            "enumType": "string",
            "id": "InputStatusEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.InputUpdate": {
            "description": "Missing description",
            "id": "InputUpdate",
            "namespace": "dbaas.logs",
            "properties": {
                "allowedNetworks": {
                    "canBeNull": true,
                    "description": "IP blocks",
                    "fullType": "ipBlock[]",
                    "readOnly": false,
                    "required": false,
                    "type": "ipBlock[]"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Description",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "engineId": {
                    "canBeNull": false,
                    "description": "Engine ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": true,
                    "type": "uuid"
                },
                "exposedPort": {
                    "canBeNull": true,
                    "description": "Exposed port",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "nbInstance": {
                    "canBeNull": true,
                    "description": "Number of instance running",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "optionId": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Option ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": false,
                    "type": "uuid"
                },
                "singleInstanceEnabled": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Indicate if input have only a single instance",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "streamId": {
                    "canBeNull": false,
                    "description": "Stream ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": true,
                    "type": "uuid"
                },
                "title": {
                    "canBeNull": false,
                    "description": "Title",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.Kibana": {
            "description": "Kibana instance",
            "id": "Kibana",
            "namespace": "dbaas.logs",
            "properties": {
                "createdAt": {
                    "canBeNull": false,
                    "description": "Kibana creation",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "deliveryStatus": {
                    "canBeNull": false,
                    "description": "Status of the delivering process",
                    "fullType": "dbaas.logs.DeliveryStatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.DeliveryStatusEnum"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Kibana description",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "isEditable": {
                    "canBeNull": false,
                    "description": "Indicates if you are allowed to edit entry",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "kibanaId": {
                    "canBeNull": false,
                    "description": "Kibana ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Kibana name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "updatedAt": {
                    "canBeNull": true,
                    "description": "Kibana last update",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                }
            }
        },
        "dbaas.logs.KibanaCreation": {
            "description": "Missing description",
            "id": "KibanaCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "description": {
                    "canBeNull": false,
                    "description": "Description",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.KibanaUpdate": {
            "description": "Missing description",
            "id": "KibanaUpdate",
            "namespace": "dbaas.logs",
            "properties": {
                "description": {
                    "canBeNull": false,
                    "description": "Description",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.LogstashConfiguration": {
            "description": "Logstash configuration",
            "id": "LogstashConfiguration",
            "namespace": "dbaas.logs",
            "properties": {
                "filterSection": {
                    "canBeNull": true,
                    "description": "The filter section of logstash.conf",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "inputSection": {
                    "canBeNull": false,
                    "description": "The filter section of logstash.conf",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "patternSection": {
                    "canBeNull": true,
                    "description": "The list of customs Grok patterns",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.Member": {
            "description": "Member",
            "id": "Member",
            "namespace": "dbaas.logs",
            "properties": {
                "createdAt": {
                    "canBeNull": false,
                    "description": "Membership creation",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "note": {
                    "canBeNull": true,
                    "description": "Custom note",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "username": {
                    "canBeNull": false,
                    "description": "Username on DBaaS Logs",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.Offer": {
            "description": "DBaaS Logs offer",
            "id": "Offer",
            "namespace": "dbaas.logs",
            "properties": {
                "curNbAlias": {
                    "canBeNull": false,
                    "description": "Current number of alias booked",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "curNbDashboard": {
                    "canBeNull": false,
                    "description": "Current number of dashboard booked",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "curNbIndex": {
                    "canBeNull": false,
                    "description": "Current number of index booked",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "curNbInput": {
                    "canBeNull": false,
                    "description": "Current number of input booked",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "curNbRole": {
                    "canBeNull": false,
                    "description": "Current number of role booked",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "curNbStream": {
                    "canBeNull": false,
                    "description": "Current number of stream booked",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "esStorage": {
                    "canBeNull": true,
                    "description": "Number of GB stored per month included",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbAlias": {
                    "canBeNull": false,
                    "description": "Maximum number of alias allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbDashboard": {
                    "canBeNull": false,
                    "description": "Maximum number of dashboard allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbIndex": {
                    "canBeNull": false,
                    "description": "Maximum number of index allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbInput": {
                    "canBeNull": false,
                    "description": "Maximum number of input allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbRole": {
                    "canBeNull": false,
                    "description": "Maximum number of role allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbStream": {
                    "canBeNull": false,
                    "description": "Maximum number of stream allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "reference": {
                    "canBeNull": false,
                    "description": "Option unique reference",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "retention": {
                    "canBeNull": true,
                    "description": "Data retention in hours",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "dbaas.logs.Operation": {
            "description": "Asynchronous operation",
            "id": "Operation",
            "namespace": "dbaas.logs",
            "properties": {
                "aliasId": {
                    "canBeNull": true,
                    "description": "Alias used",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "createdAt": {
                    "canBeNull": false,
                    "description": "Operation creation",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "dashboardId": {
                    "canBeNull": true,
                    "description": "Dashboard used",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "indexId": {
                    "canBeNull": true,
                    "description": "Index used",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "inputId": {
                    "canBeNull": true,
                    "description": "Input used",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "operationId": {
                    "canBeNull": false,
                    "description": "Operation ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "optionId": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Option used",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "roleId": {
                    "canBeNull": true,
                    "description": "Role used",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "state": {
                    "canBeNull": false,
                    "description": "Operation status",
                    "fullType": "dbaas.logs.OperationStateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.OperationStateEnum"
                },
                "streamId": {
                    "canBeNull": true,
                    "description": "Stream used",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "updatedAt": {
                    "canBeNull": true,
                    "description": "Operation last update",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                }
            }
        },
        "dbaas.logs.OperationStateEnum": {
            "description": "Possible values for OperationStateEnum",
            "enum": [
                "PENDING",
                "RECEIVED",
                "STARTED",
                "SUCCESS",
                "FAILURE",
                "REVOKED",
                "RETRY",
                "RUNNING"
            ],
            "enumType": "string",
            "id": "OperationStateEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.Option": {
            "description": "DBaaS Logs option",
            "id": "Option",
            "namespace": "dbaas.logs",
            "properties": {
                "createdAt": {
                    "canBeNull": false,
                    "description": "Service creation",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "curNbAlias": {
                    "canBeNull": false,
                    "description": "Current number of alias booked",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "curNbDashboard": {
                    "canBeNull": false,
                    "description": "Current number of dashboard booked",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "curNbIndex": {
                    "canBeNull": false,
                    "description": "Current number of index booked",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "curNbInput": {
                    "canBeNull": false,
                    "description": "Current number of input booked",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "curNbRole": {
                    "canBeNull": false,
                    "description": "Current number of role booked",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "curNbStream": {
                    "canBeNull": false,
                    "description": "Current number of stream booked",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "indexSize": {
                    "canBeNull": true,
                    "description": "Index size in bytes",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbAlias": {
                    "canBeNull": false,
                    "description": "Maximum number of alias allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbDashboard": {
                    "canBeNull": false,
                    "description": "Maximum number of dashboard allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbIndex": {
                    "canBeNull": false,
                    "description": "Maximum number of index allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbInput": {
                    "canBeNull": false,
                    "description": "Maximum number of input allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbRole": {
                    "canBeNull": false,
                    "description": "Maximum number of role allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbStream": {
                    "canBeNull": false,
                    "description": "Maximum number of stream allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "optionId": {
                    "canBeNull": false,
                    "description": "Option ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "reference": {
                    "canBeNull": false,
                    "description": "Option unique reference",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "state": {
                    "canBeNull": false,
                    "description": "Option state",
                    "fullType": "dbaas.logs.OptionStateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.OptionStateEnum"
                },
                "updatedAt": {
                    "canBeNull": true,
                    "description": "Service last update",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                }
            }
        },
        "dbaas.logs.OptionStateEnum": {
            "description": "Possible values for OptionStateEnum",
            "enum": [
                "ENABLED",
                "DISABLED"
            ],
            "enumType": "string",
            "id": "OptionStateEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.OutputElasticsearchAliasCreation": {
            "description": "Missing description",
            "id": "OutputElasticsearchAliasCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "autoSelectOption": {
                    "canBeNull": true,
                    "description": "DEPRECATED: If set, automatically selects a compatible option",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Description",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "optionId": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Option ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": false,
                    "type": "uuid"
                },
                "suffix": {
                    "canBeNull": false,
                    "description": "Suffix",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.OutputElasticsearchAliasIndexCreation": {
            "description": "Missing description",
            "id": "OutputElasticsearchAliasIndexCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "indexId": {
                    "canBeNull": false,
                    "description": "Index ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": true,
                    "type": "uuid"
                }
            }
        },
        "dbaas.logs.OutputElasticsearchAliasStreamCreation": {
            "description": "Missing description",
            "id": "OutputElasticsearchAliasStreamCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "streamId": {
                    "canBeNull": false,
                    "description": "Stream ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": true,
                    "type": "uuid"
                }
            }
        },
        "dbaas.logs.OutputElasticsearchAliasUpdate": {
            "description": "Missing description",
            "id": "OutputElasticsearchAliasUpdate",
            "namespace": "dbaas.logs",
            "properties": {
                "description": {
                    "canBeNull": false,
                    "description": "Description",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "optionId": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Option ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": false,
                    "type": "uuid"
                }
            }
        },
        "dbaas.logs.OutputElasticsearchIndexCreation": {
            "description": "Missing description",
            "id": "OutputElasticsearchIndexCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "alertNotifyEnabled": {
                    "canBeNull": true,
                    "description": "If set, notify when size is near 80, 90 or 100 % of its maximum capacity",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "autoSelectOption": {
                    "canBeNull": true,
                    "description": "DEPRECATED: If set, automatically selects a compatible option",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Description",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "nbShard": {
                    "canBeNull": true,
                    "description": "Number of shard",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "optionId": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Option ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": false,
                    "type": "uuid"
                },
                "suffix": {
                    "canBeNull": false,
                    "description": "Suffix",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.OutputElasticsearchIndexUpdate": {
            "description": "Missing description",
            "id": "OutputElasticsearchIndexUpdate",
            "namespace": "dbaas.logs",
            "properties": {
                "alertNotifyEnabled": {
                    "canBeNull": true,
                    "description": "If set, notify when size is near 80, 90 or 100 % of its maximum capacity",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Description",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.OutputGraylogDashboardCreation": {
            "description": "Missing description",
            "id": "OutputGraylogDashboardCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "autoSelectOption": {
                    "canBeNull": true,
                    "description": "DEPRECATED: If set, automatically selects a compatible option",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Description",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "optionId": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Option ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": false,
                    "type": "uuid"
                },
                "title": {
                    "canBeNull": false,
                    "description": "Title",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.OutputGraylogDashboardDuplicateCreation": {
            "description": "Missing description",
            "id": "OutputGraylogDashboardDuplicateCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "autoSelectOption": {
                    "canBeNull": true,
                    "description": "DEPRECATED: If set, automatically selects a compatible option",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Description",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "optionId": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Option ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": false,
                    "type": "uuid"
                },
                "streamId": {
                    "canBeNull": true,
                    "description": "Stream ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": false,
                    "type": "uuid"
                },
                "title": {
                    "canBeNull": false,
                    "description": "Title",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.OutputGraylogDashboardUpdate": {
            "description": "Missing description",
            "id": "OutputGraylogDashboardUpdate",
            "namespace": "dbaas.logs",
            "properties": {
                "description": {
                    "canBeNull": false,
                    "description": "Description",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "optionId": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Option ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": false,
                    "type": "uuid"
                },
                "title": {
                    "canBeNull": false,
                    "description": "Title",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.OutputGraylogStreamAlertCreation": {
            "description": "Missing description",
            "id": "OutputGraylogStreamAlertCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "backlog": {
                    "canBeNull": false,
                    "description": "Backlog",
                    "fullType": "long",
                    "readOnly": false,
                    "required": true,
                    "type": "long"
                },
                "conditionType": {
                    "canBeNull": true,
                    "description": "Condition type",
                    "fullType": "dbaas.logs.StreamAlertConditionConditionTypeEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "dbaas.logs.StreamAlertConditionConditionTypeEnum"
                },
                "constraintType": {
                    "canBeNull": true,
                    "description": "Constraint type",
                    "fullType": "dbaas.logs.StreamAlertConditionConstraintTypeEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "dbaas.logs.StreamAlertConditionConstraintTypeEnum"
                },
                "field": {
                    "canBeNull": true,
                    "description": "Field",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "grace": {
                    "canBeNull": false,
                    "description": "Grace period",
                    "fullType": "long",
                    "readOnly": false,
                    "required": true,
                    "type": "long"
                },
                "queryFilter": {
                    "canBeNull": true,
                    "description": "Query filter",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "repeatNotificationsEnabled": {
                    "canBeNull": true,
                    "description": "Repeat notifications enabled",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "threshold": {
                    "canBeNull": true,
                    "description": "Threshold",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "thresholdType": {
                    "canBeNull": true,
                    "description": "Threshold type",
                    "fullType": "dbaas.logs.StreamAlertConditionThresholdTypeEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "dbaas.logs.StreamAlertConditionThresholdTypeEnum"
                },
                "time": {
                    "canBeNull": true,
                    "description": "Time",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "title": {
                    "canBeNull": false,
                    "description": "Title",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "value": {
                    "canBeNull": true,
                    "description": "Value",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.OutputGraylogStreamAlertUpdate": {
            "description": "Missing description",
            "id": "OutputGraylogStreamAlertUpdate",
            "namespace": "dbaas.logs",
            "properties": {
                "backlog": {
                    "canBeNull": false,
                    "description": "Backlog",
                    "fullType": "long",
                    "readOnly": false,
                    "required": true,
                    "type": "long"
                },
                "conditionType": {
                    "canBeNull": true,
                    "description": "Condition type",
                    "fullType": "dbaas.logs.StreamAlertConditionConditionTypeEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "dbaas.logs.StreamAlertConditionConditionTypeEnum"
                },
                "constraintType": {
                    "canBeNull": true,
                    "description": "Constraint type",
                    "fullType": "dbaas.logs.StreamAlertConditionConstraintTypeEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "dbaas.logs.StreamAlertConditionConstraintTypeEnum"
                },
                "field": {
                    "canBeNull": true,
                    "description": "Field",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "grace": {
                    "canBeNull": false,
                    "description": "Grace period",
                    "fullType": "long",
                    "readOnly": false,
                    "required": true,
                    "type": "long"
                },
                "queryFilter": {
                    "canBeNull": true,
                    "description": "Query filter",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "repeatNotificationsEnabled": {
                    "canBeNull": true,
                    "description": "Repeat notifications enabled",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "threshold": {
                    "canBeNull": true,
                    "description": "Threshold",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "thresholdType": {
                    "canBeNull": true,
                    "description": "Threshold type",
                    "fullType": "dbaas.logs.StreamAlertConditionThresholdTypeEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "dbaas.logs.StreamAlertConditionThresholdTypeEnum"
                },
                "time": {
                    "canBeNull": true,
                    "description": "Time",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "title": {
                    "canBeNull": false,
                    "description": "Title",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "value": {
                    "canBeNull": true,
                    "description": "Value",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.OutputGraylogStreamCreation": {
            "description": "Missing description",
            "id": "OutputGraylogStreamCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "autoSelectOption": {
                    "canBeNull": true,
                    "description": "DEPRECATED: If set, automatically selects a compatible option",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "coldStorageCompression": {
                    "canBeNull": true,
                    "description": "Cold storage compression",
                    "fullType": "dbaas.logs.StreamColdStorageCompressionEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "dbaas.logs.StreamColdStorageCompressionEnum"
                },
                "coldStorageContent": {
                    "canBeNull": true,
                    "description": "Cold storage archive content",
                    "fullType": "dbaas.logs.StreamColdStorageContentEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "dbaas.logs.StreamColdStorageContentEnum"
                },
                "coldStorageEnabled": {
                    "canBeNull": true,
                    "description": "Cold storage enabled",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "coldStorageNotifyEnabled": {
                    "canBeNull": true,
                    "description": "Cold storage notify enabled",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "coldStorageRetention": {
                    "canBeNull": true,
                    "description": "Cold storage retention time",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "coldStorageTarget": {
                    "canBeNull": true,
                    "description": "Cold storage destination",
                    "fullType": "dbaas.logs.StreamColdStorageTargetEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "dbaas.logs.StreamColdStorageTargetEnum"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Description",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "indexingEnabled": {
                    "canBeNull": true,
                    "description": "ES indexing enabled",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "indexingMaxSize": {
                    "canBeNull": true,
                    "description": "Maximum indexing size (in GB)",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "indexingNotifyEnabled": {
                    "canBeNull": true,
                    "description": "If set, notify when size is near 80, 90 or 100 % of the maximum configured setting",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "optionId": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Option ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": false,
                    "type": "uuid"
                },
                "parentStreamId": {
                    "canBeNull": true,
                    "description": "Parent stream ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": false,
                    "type": "uuid"
                },
                "pauseIndexingOnMaxSize": {
                    "canBeNull": true,
                    "description": "If set, pause indexing when maximum size is reach",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "retentionId": {
                    "canBeNull": true,
                    "description": "Retention ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": false,
                    "type": "uuid"
                },
                "title": {
                    "canBeNull": false,
                    "description": "Title",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "webSocketEnabled": {
                    "canBeNull": true,
                    "description": "Web Socket enabled",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                }
            }
        },
        "dbaas.logs.OutputGraylogStreamRuleCreation": {
            "description": "Missing description",
            "id": "OutputGraylogStreamRuleCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "field": {
                    "canBeNull": false,
                    "description": "Field name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "isInverted": {
                    "canBeNull": true,
                    "description": "Invert condition",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "operator": {
                    "canBeNull": false,
                    "description": "Field operator",
                    "fullType": "dbaas.logs.StreamRuleOperatorEnum",
                    "readOnly": false,
                    "required": true,
                    "type": "dbaas.logs.StreamRuleOperatorEnum"
                },
                "value": {
                    "canBeNull": false,
                    "description": "Field value",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.OutputGraylogStreamUpdate": {
            "description": "Missing description",
            "id": "OutputGraylogStreamUpdate",
            "namespace": "dbaas.logs",
            "properties": {
                "coldStorageCompression": {
                    "canBeNull": true,
                    "description": "Cold storage compression",
                    "fullType": "dbaas.logs.StreamColdStorageCompressionEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "dbaas.logs.StreamColdStorageCompressionEnum"
                },
                "coldStorageContent": {
                    "canBeNull": true,
                    "description": "Cold storage content",
                    "fullType": "dbaas.logs.StreamColdStorageContentEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "dbaas.logs.StreamColdStorageContentEnum"
                },
                "coldStorageEnabled": {
                    "canBeNull": true,
                    "description": "Cold storage enabled",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "coldStorageNotifyEnabled": {
                    "canBeNull": true,
                    "description": "Cold storage notify enabled",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "coldStorageRetention": {
                    "canBeNull": true,
                    "description": "Cold storage retention time",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "coldStorageTarget": {
                    "canBeNull": true,
                    "description": "Cold storage destination",
                    "fullType": "dbaas.logs.StreamColdStorageTargetEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "dbaas.logs.StreamColdStorageTargetEnum"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Description",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "indexingEnabled": {
                    "canBeNull": true,
                    "description": "ES indexing enabled",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "indexingMaxSize": {
                    "canBeNull": true,
                    "description": "Maximum indexing size (in GB)",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "indexingNotifyEnabled": {
                    "canBeNull": true,
                    "description": "If set, notify when size is near 80, 90 or 100 % of the maximum configured setting",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "optionId": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Option ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": false,
                    "type": "uuid"
                },
                "pauseIndexingOnMaxSize": {
                    "canBeNull": true,
                    "description": "If set, pause indexing when maximum size is reach",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "title": {
                    "canBeNull": false,
                    "description": "Title",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "webSocketEnabled": {
                    "canBeNull": true,
                    "description": "Web socket enabled",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                }
            }
        },
        "dbaas.logs.Permission": {
            "description": "Role permission",
            "id": "Permission",
            "namespace": "dbaas.logs",
            "properties": {
                "aliasId": {
                    "canBeNull": true,
                    "description": "Associated Elasticsearch alias",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "dashboardId": {
                    "canBeNull": true,
                    "description": "Associated Graylog dashboard",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "indexId": {
                    "canBeNull": true,
                    "description": "Associated Elasticsearch index",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "kibanaId": {
                    "canBeNull": true,
                    "description": "Associated Kibana instance",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "permissionId": {
                    "canBeNull": false,
                    "description": "Permission ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "permissionType": {
                    "canBeNull": true,
                    "description": "Permission type",
                    "fullType": "dbaas.logs.PermissionTypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.PermissionTypeEnum"
                },
                "streamId": {
                    "canBeNull": true,
                    "description": "Associated Graylog stream",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                }
            }
        },
        "dbaas.logs.PermissionTypeEnum": {
            "description": "Possible values for PermissionTypeEnum",
            "enum": [
                "READ_ONLY",
                "READ_WRITE"
            ],
            "enumType": "string",
            "id": "PermissionTypeEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.PublicOffer": {
            "description": "DBaaS Logs offer",
            "id": "PublicOffer",
            "namespace": "dbaas.logs",
            "properties": {
                "esStorage": {
                    "canBeNull": false,
                    "description": "Number of GB stored per month included",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbAlias": {
                    "canBeNull": false,
                    "description": "Maximum number of alias allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbDashboard": {
                    "canBeNull": false,
                    "description": "Maximum number of dashboard allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbIndex": {
                    "canBeNull": false,
                    "description": "Maximum number of index allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbInput": {
                    "canBeNull": false,
                    "description": "Maximum number of input allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbRole": {
                    "canBeNull": false,
                    "description": "Maximum number of role allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbStream": {
                    "canBeNull": false,
                    "description": "Maximum number of stream allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "reference": {
                    "canBeNull": false,
                    "description": "Option unique reference",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.Quota": {
            "description": "DBaaS Logs quota",
            "id": "Quota",
            "namespace": "dbaas.logs",
            "properties": {
                "curNbAlias": {
                    "canBeNull": false,
                    "description": "Current number of alias booked",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "curNbDashboard": {
                    "canBeNull": false,
                    "description": "Current number of dashboard booked",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "curNbIndex": {
                    "canBeNull": false,
                    "description": "Current number of index booked",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "curNbInput": {
                    "canBeNull": false,
                    "description": "Current number of input booked",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "curNbRole": {
                    "canBeNull": false,
                    "description": "Current number of role booked",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "curNbStream": {
                    "canBeNull": false,
                    "description": "Current number of stream booked",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbAlias": {
                    "canBeNull": false,
                    "description": "Maximum number of alias allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbDashboard": {
                    "canBeNull": false,
                    "description": "Maximum number of dashboard allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbIndex": {
                    "canBeNull": false,
                    "description": "Maximum number of index allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbInput": {
                    "canBeNull": false,
                    "description": "Maximum number of input allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbRole": {
                    "canBeNull": false,
                    "description": "Maximum number of role allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maxNbStream": {
                    "canBeNull": false,
                    "description": "Maximum number of stream allowed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "dbaas.logs.Role": {
            "description": "Role",
            "id": "Role",
            "namespace": "dbaas.logs",
            "properties": {
                "createdAt": {
                    "canBeNull": false,
                    "description": "Role creation",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Role description",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Role name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "optionId": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Associated DBaaS Logs option",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "roleId": {
                    "canBeNull": false,
                    "description": "Role ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "updatedAt": {
                    "canBeNull": true,
                    "description": "Role last update",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                }
            }
        },
        "dbaas.logs.RoleCreation": {
            "description": "Missing description",
            "id": "RoleCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "autoSelectOption": {
                    "canBeNull": true,
                    "description": "DEPRECATED: If set, automatically selects a compatible option",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Description",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "optionId": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Option ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": false,
                    "type": "uuid"
                }
            }
        },
        "dbaas.logs.RoleMemberCreation": {
            "description": "Missing description",
            "id": "RoleMemberCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "note": {
                    "canBeNull": true,
                    "description": "Custom note",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "username": {
                    "canBeNull": false,
                    "description": "Username",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.RoleMemberUpdate": {
            "description": "Missing description",
            "id": "RoleMemberUpdate",
            "namespace": "dbaas.logs",
            "properties": {
                "note": {
                    "canBeNull": true,
                    "description": "Custom note",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.RolePermissionAliasCreation": {
            "description": "Missing description",
            "id": "RolePermissionAliasCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "aliasId": {
                    "canBeNull": false,
                    "description": "Alias ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": true,
                    "type": "uuid"
                }
            }
        },
        "dbaas.logs.RolePermissionDashboardCreation": {
            "description": "Missing description",
            "id": "RolePermissionDashboardCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "dashboardId": {
                    "canBeNull": false,
                    "description": "Dashboard ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": true,
                    "type": "uuid"
                },
                "permissionType": {
                    "canBeNull": true,
                    "description": "Permission type",
                    "fullType": "dbaas.logs.PermissionTypeEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "dbaas.logs.PermissionTypeEnum"
                }
            }
        },
        "dbaas.logs.RolePermissionIndexCreation": {
            "description": "Missing description",
            "id": "RolePermissionIndexCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "indexId": {
                    "canBeNull": false,
                    "description": "Index ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": true,
                    "type": "uuid"
                },
                "permissionType": {
                    "canBeNull": true,
                    "description": "Permission type",
                    "fullType": "dbaas.logs.PermissionTypeEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "dbaas.logs.PermissionTypeEnum"
                }
            }
        },
        "dbaas.logs.RolePermissionKibanaCreation": {
            "description": "Missing description",
            "id": "RolePermissionKibanaCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "kibanaId": {
                    "canBeNull": false,
                    "description": "Kibana ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": true,
                    "type": "uuid"
                },
                "permissionType": {
                    "canBeNull": true,
                    "description": "Permission type",
                    "fullType": "dbaas.logs.PermissionTypeEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "dbaas.logs.PermissionTypeEnum"
                }
            }
        },
        "dbaas.logs.RolePermissionStreamCreation": {
            "description": "Missing description",
            "id": "RolePermissionStreamCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "streamId": {
                    "canBeNull": false,
                    "description": "Stream ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": true,
                    "type": "uuid"
                }
            }
        },
        "dbaas.logs.RoleUpdate": {
            "description": "Missing description",
            "id": "RoleUpdate",
            "namespace": "dbaas.logs",
            "properties": {
                "description": {
                    "canBeNull": false,
                    "description": "Description",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "optionId": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Option ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": false,
                    "type": "uuid"
                }
            }
        },
        "dbaas.logs.Service": {
            "description": "Service",
            "id": "Service",
            "namespace": "dbaas.logs",
            "properties": {
                "createdAt": {
                    "canBeNull": false,
                    "description": "Service creation",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "displayName": {
                    "canBeNull": true,
                    "description": "Service custom name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "isCapped": {
                    "canBeNull": false,
                    "description": "DEPRECATED: Is capped plan enabled?",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "serviceName": {
                    "canBeNull": false,
                    "description": "Service name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "state": {
                    "canBeNull": true,
                    "description": "Service state",
                    "fullType": "dbaas.logs.ServiceStateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.ServiceStateEnum"
                },
                "updatedAt": {
                    "canBeNull": true,
                    "description": "Service last update",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "username": {
                    "canBeNull": false,
                    "description": "Username on DBaaS Logs",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.ServiceMetric": {
            "description": "Metrics access",
            "id": "ServiceMetric",
            "namespace": "dbaas.logs",
            "properties": {
                "host": {
                    "canBeNull": false,
                    "description": "Metrics server url",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "token": {
                    "canBeNull": false,
                    "description": "Metrics credentials",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.ServiceStateEnum": {
            "description": "Possible values for ServiceStateEnum",
            "enum": [
                "INIT",
                "TO_CONFIG",
                "ENABLED",
                "DISABLED"
            ],
            "enumType": "string",
            "id": "ServiceStateEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.Stream": {
            "description": "Graylog stream",
            "id": "Stream",
            "namespace": "dbaas.logs",
            "properties": {
                "canAlert": {
                    "canBeNull": false,
                    "description": "Indicates if the current user can create alert on the stream",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "coldStorageCompression": {
                    "canBeNull": true,
                    "description": "Cold storage compression method",
                    "fullType": "dbaas.logs.StreamColdStorageCompressionEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.StreamColdStorageCompressionEnum"
                },
                "coldStorageContent": {
                    "canBeNull": true,
                    "description": "ColdStorage content",
                    "fullType": "dbaas.logs.StreamColdStorageContentEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.StreamColdStorageContentEnum"
                },
                "coldStorageEnabled": {
                    "canBeNull": true,
                    "description": "Is Cold storage enabled?",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "coldStorageNotifyEnabled": {
                    "canBeNull": true,
                    "description": "Notify on new Cold storage archive",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "coldStorageRetention": {
                    "canBeNull": true,
                    "description": "Cold storage retention in year",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "coldStorageTarget": {
                    "canBeNull": true,
                    "description": "ColdStorage destination",
                    "fullType": "dbaas.logs.StreamColdStorageTargetEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.StreamColdStorageTargetEnum"
                },
                "createdAt": {
                    "canBeNull": false,
                    "description": "Stream creation",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Stream description",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "indexingEnabled": {
                    "canBeNull": true,
                    "description": "Enable ES indexing",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "indexingMaxSize": {
                    "canBeNull": true,
                    "description": "Maximum indexing size (in GB)",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "indexingNotifyEnabled": {
                    "canBeNull": true,
                    "description": "If set, notify when size is near 80, 90 or 100 % of the maximum configured setting",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "isEditable": {
                    "canBeNull": false,
                    "description": "Indicates if you are allowed to edit entry",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "isShareable": {
                    "canBeNull": false,
                    "description": "Indicates if you are allowed to share entry",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "nbAlertCondition": {
                    "canBeNull": false,
                    "description": "Number of alert condition",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "nbArchive": {
                    "canBeNull": false,
                    "description": "Number of coldstored archives",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "optionId": {
                    "canBeNull": true,
                    "description": "DEPRECATED: Associated DBaaS Logs option ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "parentStreamId": {
                    "canBeNull": true,
                    "description": "Parent stream ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "pauseIndexingOnMaxSize": {
                    "canBeNull": true,
                    "description": "If set, pause indexing when maximum size is reach",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "retentionId": {
                    "canBeNull": false,
                    "description": "Retention ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "streamId": {
                    "canBeNull": false,
                    "description": "Stream ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "title": {
                    "canBeNull": false,
                    "description": "Stream description",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "updatedAt": {
                    "canBeNull": true,
                    "description": "Stream last update",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "webSocketEnabled": {
                    "canBeNull": true,
                    "description": "Enable Websocket",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                }
            }
        },
        "dbaas.logs.StreamAlertCondition": {
            "description": "Alert condition",
            "id": "StreamAlertCondition",
            "namespace": "dbaas.logs",
            "properties": {
                "alertId": {
                    "canBeNull": false,
                    "description": "Stream alert condition ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "backlog": {
                    "canBeNull": false,
                    "description": "Backlog size",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "conditionType": {
                    "canBeNull": true,
                    "description": "Alert condition type",
                    "fullType": "dbaas.logs.StreamAlertConditionConditionTypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.StreamAlertConditionConditionTypeEnum"
                },
                "constraintType": {
                    "canBeNull": true,
                    "description": "Constraint type",
                    "fullType": "dbaas.logs.StreamAlertConditionConstraintTypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.StreamAlertConditionConstraintTypeEnum"
                },
                "field": {
                    "canBeNull": true,
                    "description": "Field name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "grace": {
                    "canBeNull": false,
                    "description": "Grace period in minutes",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "queryFilter": {
                    "canBeNull": true,
                    "description": "Query filter",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "repeatNotificationsEnabled": {
                    "canBeNull": true,
                    "description": "Repeat notifications",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "threshold": {
                    "canBeNull": true,
                    "description": "Threshold",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "thresholdType": {
                    "canBeNull": true,
                    "description": "Threshold condition",
                    "fullType": "dbaas.logs.StreamAlertConditionThresholdTypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.StreamAlertConditionThresholdTypeEnum"
                },
                "time": {
                    "canBeNull": true,
                    "description": "Time lapse in minutes",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "title": {
                    "canBeNull": false,
                    "description": "Condition label",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "value": {
                    "canBeNull": true,
                    "description": "Field value",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.StreamAlertConditionConditionTypeEnum": {
            "description": "Possible values for StreamAlertConditionConditionTypeEnum",
            "enum": [
                "MESSAGE_COUNT",
                "FIELD_VALUE",
                "FIELD_CONTENT_VALUE"
            ],
            "enumType": "string",
            "id": "StreamAlertConditionConditionTypeEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.StreamAlertConditionConstraintTypeEnum": {
            "description": "Possible values for StreamAlertConditionConstraintTypeEnum",
            "enum": [
                "MEAN",
                "MIN",
                "MAX",
                "SUM",
                "STDDEV"
            ],
            "enumType": "string",
            "id": "StreamAlertConditionConstraintTypeEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.StreamAlertConditionThresholdTypeEnum": {
            "description": "Possible values for StreamAlertConditionThresholdTypeEnum",
            "enum": [
                "MORE",
                "LESS",
                "LOWER",
                "HIGHER"
            ],
            "enumType": "string",
            "id": "StreamAlertConditionThresholdTypeEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.StreamColdStorageCompressionEnum": {
            "description": "Possible values for StreamColdStorageCompressionEnum",
            "enum": [
                "LZMA",
                "GZIP",
                "DEFLATED",
                "ZSTD"
            ],
            "enumType": "string",
            "id": "StreamColdStorageCompressionEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.StreamColdStorageContentEnum": {
            "description": "Possible values for StreamColdStorageContentEnum",
            "enum": [
                "ALL",
                "GELF",
                "PLAIN"
            ],
            "enumType": "string",
            "id": "StreamColdStorageContentEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.StreamColdStorageTargetEnum": {
            "description": "Possible values for StreamColdStorageTargetEnum",
            "enum": [
                "PCA",
                "PCS"
            ],
            "enumType": "string",
            "id": "StreamColdStorageTargetEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.StreamRule": {
            "description": "Stream rule",
            "id": "StreamRule",
            "namespace": "dbaas.logs",
            "properties": {
                "field": {
                    "canBeNull": false,
                    "description": "Field name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "isInverted": {
                    "canBeNull": true,
                    "description": "Invert condition",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "operator": {
                    "canBeNull": true,
                    "description": "Field operator",
                    "fullType": "dbaas.logs.StreamRuleOperatorEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.StreamRuleOperatorEnum"
                },
                "ruleId": {
                    "canBeNull": false,
                    "description": "Stream rule ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "value": {
                    "canBeNull": false,
                    "description": "Field value",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.StreamRuleOperatorEnum": {
            "description": "Possible values for StreamRuleOperatorEnum",
            "enum": [
                "MATCH_EXACTLY",
                "GREATER_THAN",
                "SMALLER_THAN",
                "FIELD_PRESENCE"
            ],
            "enumType": "string",
            "id": "StreamRuleOperatorEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.TemporaryLogsLink": {
            "description": "Temporary url informations",
            "id": "TemporaryLogsLink",
            "namespace": "dbaas.logs",
            "properties": {
                "expirationDate": {
                    "canBeNull": false,
                    "description": "Temporary url expiration date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "url": {
                    "canBeNull": false,
                    "description": "Temporary url",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.TestResult": {
            "description": "Config test results",
            "id": "TestResult",
            "namespace": "dbaas.logs",
            "properties": {
                "stderr": {
                    "canBeNull": true,
                    "description": "Standard error",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "stdout": {
                    "canBeNull": true,
                    "description": "Standard output",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "updatedAt": {
                    "canBeNull": true,
                    "description": "Last config test update",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                }
            }
        },
        "dbaas.logs.Token": {
            "description": "Token",
            "id": "Token",
            "namespace": "dbaas.logs",
            "properties": {
                "clusterId": {
                    "canBeNull": true,
                    "description": "Cluster ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "createdAt": {
                    "canBeNull": false,
                    "description": "Token creation",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Token name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "tokenId": {
                    "canBeNull": false,
                    "description": "Token ID",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "updatedAt": {
                    "canBeNull": true,
                    "description": "Token last update",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "value": {
                    "canBeNull": false,
                    "description": "Token value",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.TokenCreation": {
            "description": "Missing description",
            "id": "TokenCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "clusterId": {
                    "canBeNull": true,
                    "description": "Cluster ID",
                    "fullType": "uuid",
                    "readOnly": false,
                    "required": false,
                    "type": "uuid"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Token name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "dbaas.logs.Update": {
            "description": "Missing description",
            "id": "Update",
            "namespace": "dbaas.logs",
            "properties": {
                "displayName": {
                    "canBeNull": true,
                    "description": "Service custom name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "isCapped": {
                    "canBeNull": true,
                    "description": "DEPRECATED: If set, block indexation when plan's limit is reached",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                }
            }
        },
        "dbaas.logs.Url": {
            "description": "Web address",
            "id": "Url",
            "namespace": "dbaas.logs",
            "properties": {
                "address": {
                    "canBeNull": false,
                    "description": "Web URI",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Service type",
                    "fullType": "dbaas.logs.UrlTypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "dbaas.logs.UrlTypeEnum"
                }
            }
        },
        "dbaas.logs.UrlTypeEnum": {
            "description": "Possible values for UrlTypeEnum",
            "enum": [
                "GRAYLOG_WEBUI",
                "GRAYLOG_API",
                "ELASTICSEARCH_API",
                "KIBANA_WEBUI",
                "CONSOLE",
                "WEB_SOCKET",
                "SERVICE_DOMAIN",
                "TCP_TLS_GELF",
                "TCP_GELF",
                "UDP_GELF",
                "TCP_TLS_RFC5424",
                "TCP_RFC5424",
                "UDP_RFC5424",
                "TCP_TLS_LTSV_LINE",
                "TCP_TLS_LTSV_NUL",
                "TCP_LTSV_LINE",
                "TCP_LTSV_NUL",
                "TCP_TLS_CAP_N_PROTO",
                "TCP_CAP_N_PROTO",
                "UDP_LTSV_NUL",
                "UDP_LTSV_LINE",
                "UDP_CAP_N_PROTO",
                "HTTP_GELF",
                "HTTP_TLS_GELF",
                "TCP_BEATS",
                "TCP_TLS_BEATS"
            ],
            "enumType": "string",
            "id": "UrlTypeEnum",
            "namespace": "dbaas.logs"
        },
        "dbaas.logs.UserChangePasswordCreation": {
            "description": "Missing description",
            "id": "UserChangePasswordCreation",
            "namespace": "dbaas.logs",
            "properties": {
                "password": {
                    "canBeNull": false,
                    "description": "Password must be at least 12 characters long contain a number, an uppercase, a lowercase and a special letter",
                    "fullType": "password",
                    "readOnly": false,
                    "required": true,
                    "type": "password"
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
    "resourcePath": "/dbaas/logs"
};
//# sourceMappingURL=dbaas-logs.js.map