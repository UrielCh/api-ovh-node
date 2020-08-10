import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/dbaas/logs",
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
      "description": "Operations about the DBAAS-LOGS service"
    },
    {
      "path": "/dbaas/logs/input/engine",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Returns the list of available input engines"
        }
      ],
      "description": "Engines"
    },
    {
      "path": "/dbaas/logs/input/engine/{engineId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "engineId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Engine ID"
            }
          ],
          "responseType": "dbaas.logs.Engine",
          "noAuthentication": false,
          "description": "Returns details of specified input engine"
        }
      ],
      "description": "Engine"
    },
    {
      "path": "/dbaas/logs/input/engine/{engineId}/helper",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "engineId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Engine ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Return the list of available helpers for the given input engine"
        }
      ],
      "description": "Input engine helpers"
    },
    {
      "path": "/dbaas/logs/input/engine/{engineId}/helper/{helperId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "helperId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Helper ID"
            },
            {
              "name": "engineId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Engine ID"
            }
          ],
          "responseType": "dbaas.logs.Helper",
          "noAuthentication": false,
          "description": "Returns details of specified input engine helper"
        }
      ],
      "description": "Input engine helpers"
    },
    {
      "path": "/dbaas/logs/offer/{reference}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-06-01T00:00:00+00:00",
            "deprecatedDate": "2020-04-08T17:41:02+02:00",
            "replacement": "/dbaas/logs/{serviceName}"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "reference",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Reference"
            }
          ],
          "responseType": "dbaas.logs.PublicOffer",
          "noAuthentication": false,
          "description": "Display specified offer"
        }
      ],
      "description": "Offer"
    },
    {
      "path": "/dbaas/logs/{serviceName}",
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
          "responseType": "dbaas.logs.Service",
          "noAuthentication": false,
          "description": "Returns the service object of connected identity."
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dbaas.logs.Update",
              "paramType": "body",
              "fullType": "dbaas.logs.Update",
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
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Update the service properties"
        }
      ],
      "description": "Operations about the DBAAS-LOGS service"
    },
    {
      "path": "/dbaas/logs/{serviceName}/changeContact",
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
      "path": "/dbaas/logs/{serviceName}/cluster",
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
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Returns the list of allowed cluster"
        }
      ],
      "description": "Service Clusters"
    },
    {
      "path": "/dbaas/logs/{serviceName}/cluster/{clusterId}",
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
              "name": "clusterId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "dbaas.logs.Cluster",
          "noAuthentication": false,
          "description": "Returns details of an allowed cluster"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dbaas.logs.ClusterAllowedNetworks",
              "paramType": "body",
              "fullType": "dbaas.logs.ClusterAllowedNetworks",
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
            },
            {
              "name": "clusterId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Update details of an allowed cluster"
        }
      ],
      "description": "Service Clusters"
    },
    {
      "path": "/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-06-01T00:00:00+00:00",
            "deprecatedDate": "2019-07-23T17:41:02+02:00",
            "replacement": "/dbaas/logs/{serviceName}/cluster"
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
              "name": "clusterId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "List all the network ID allowed to contact given cluster"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-06-01T00:00:00+00:00",
            "deprecatedDate": "2019-07-23T17:41:02+02:00",
            "replacement": "/dbaas/logs/{serviceName}/cluster"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.ClusterAllowedNetworkCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.ClusterAllowedNetworkCreation",
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
            },
            {
              "name": "clusterId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Allow an IP to contact cluster"
        }
      ],
      "description": "Cluster allowed networks"
    },
    {
      "path": "/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-06-01T00:00:00+00:00",
            "deprecatedDate": "2019-07-23T17:41:02+02:00",
            "replacement": "/dbaas/logs/{serviceName}/cluster"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "allowedNetworkId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Allowed network ID"
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
              "name": "clusterId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Remove the specified IP from the list of allowed networks"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-06-01T00:00:00+00:00",
            "deprecatedDate": "2019-07-23T17:41:02+02:00",
            "replacement": "/dbaas/logs/{serviceName}/cluster"
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
              "name": "clusterId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Cluster ID"
            },
            {
              "name": "allowedNetworkId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Allowed network ID"
            }
          ],
          "responseType": "dbaas.logs.ClusterAllowedNetwork",
          "noAuthentication": false,
          "description": "Returns details of an allowed network"
        }
      ],
      "description": "Cluster allowed networks"
    },
    {
      "path": "/dbaas/logs/{serviceName}/cluster/{clusterId}/retention",
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
              "name": "clusterId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "List all the retention ID available for a given cluster"
        }
      ],
      "description": "Cluster available retentions"
    },
    {
      "path": "/dbaas/logs/{serviceName}/cluster/{clusterId}/retention/{retentionId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "retentionId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Retention ID"
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
              "name": "clusterId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "dbaas.logs.ClusterRetention",
          "noAuthentication": false,
          "description": "Returns details of a retention"
        }
      ],
      "description": "Cluster available retentions"
    },
    {
      "path": "/dbaas/logs/{serviceName}/input",
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
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Returns the list of registered input attached to the logged user"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.InputCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.InputCreation",
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
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Register a new input object"
        }
      ],
      "description": "Inputs"
    },
    {
      "path": "/dbaas/logs/{serviceName}/input/{inputId}",
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
              "name": "inputId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Input ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Remove the specified input object"
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
              "name": "inputId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Input ID"
            }
          ],
          "responseType": "dbaas.logs.Input",
          "noAuthentication": false,
          "description": "Returns details of specified input"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dbaas.logs.InputUpdate",
              "paramType": "body",
              "fullType": "dbaas.logs.InputUpdate",
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
            },
            {
              "name": "inputId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Input ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Update information of specified input object"
        }
      ],
      "description": "Input"
    },
    {
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/action",
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
              "name": "inputId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Input ID"
            }
          ],
          "responseType": "dbaas.logs.InputAction[]",
          "noAuthentication": false,
          "description": "Returns actions of specified input"
        }
      ],
      "description": "InputActions"
    },
    {
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-06-01T00:00:00+00:00",
            "deprecatedDate": "2019-07-23T17:41:02+02:00",
            "replacement": "/dbaas/logs/{serviceName}/input"
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
              "name": "inputId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Input ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "List all network ID allowed to join input"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-06-01T00:00:00+00:00",
            "deprecatedDate": "2019-07-23T17:41:02+02:00",
            "replacement": "/dbaas/logs/{serviceName}/input"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.InputAllowedNetworkCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.InputAllowedNetworkCreation",
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
            },
            {
              "name": "inputId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Input ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Allow an ip to join input"
        }
      ],
      "description": "InputAllowedNetworks"
    },
    {
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-06-01T00:00:00+00:00",
            "deprecatedDate": "2019-07-23T17:41:02+02:00",
            "replacement": "/dbaas/logs/{serviceName}/input"
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
              "name": "inputId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Input ID"
            },
            {
              "name": "allowedNetworkId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Allowed network ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Remove the specified IP from the list of allowed networks"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-06-01T00:00:00+00:00",
            "deprecatedDate": "2019-07-23T17:41:02+02:00",
            "replacement": "/dbaas/logs/{serviceName}/input"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "allowedNetworkId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Allowed network ID"
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
              "name": "inputId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Input ID"
            }
          ],
          "responseType": "dbaas.logs.AllowedNetwork",
          "noAuthentication": false,
          "description": "List all network ID allowed to join input"
        }
      ],
      "description": "InputAllowedNetwork"
    },
    {
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/configtest",
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
              "name": "inputId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Input ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Validate configuration of specified input"
        }
      ],
      "description": "InputConfigtest"
    },
    {
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/configtest/result",
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
              "name": "inputId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Input ID"
            }
          ],
          "responseType": "dbaas.logs.TestResult",
          "noAuthentication": false,
          "description": "Returns the config test operation result"
        }
      ],
      "description": "InputConfigtestResult"
    },
    {
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger",
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
              "name": "inputId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Input ID"
            }
          ],
          "responseType": "dbaas.logs.FlowggerConfiguration",
          "noAuthentication": false,
          "description": "Returns the flowgger configuration"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dbaas.logs.InputConfigurationFlowggerUpdate",
              "paramType": "body",
              "fullType": "dbaas.logs.InputConfigurationFlowggerUpdate",
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
            },
            {
              "name": "inputId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Input ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Update the flowgger configuration"
        }
      ],
      "description": "FlowggerConfiguration"
    },
    {
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash",
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
              "name": "inputId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Input ID"
            }
          ],
          "responseType": "dbaas.logs.LogstashConfiguration",
          "noAuthentication": false,
          "description": "Returns the logstash configuration"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dbaas.logs.InputConfigurationLogstashUpdate",
              "paramType": "body",
              "fullType": "dbaas.logs.InputConfigurationLogstashUpdate",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "inputId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Input ID"
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
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Update the logstash configuration"
        }
      ],
      "description": "LogstashConfiguration"
    },
    {
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/end",
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
              "name": "inputId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Input ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Schedule the end of specified input"
        }
      ],
      "description": "InputEnd"
    },
    {
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/logs/url",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "inputId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Input ID"
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
          "responseType": "dbaas.logs.TemporaryLogsLink",
          "noAuthentication": false,
          "description": "Generate a temporary url to retrieve input logs"
        }
      ],
      "description": "InputLogs"
    },
    {
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/restart",
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
              "name": "inputId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Input ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Schedule the restart of specified input"
        }
      ],
      "description": "InputRestart"
    },
    {
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/start",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "inputId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Input ID"
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
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Schedule the start of specified input"
        }
      ],
      "description": "InputStart"
    },
    {
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/url",
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
              "name": "inputId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Input ID"
            }
          ],
          "responseType": "dbaas.logs.Url[]",
          "noAuthentication": false,
          "description": "Returns the list of urls of specified input"
        }
      ],
      "description": "InputUrls"
    },
    {
      "path": "/dbaas/logs/{serviceName}/metrics",
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
          "responseType": "dbaas.logs.ServiceMetric",
          "noAuthentication": false,
          "description": "Returns Metrics credentials"
        }
      ],
      "description": "Service Metrics"
    },
    {
      "path": "/dbaas/logs/{serviceName}/offer",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-06-01T00:00:00+00:00",
            "deprecatedDate": "2020-04-08T17:41:02+02:00",
            "replacement": "/dbaas/logs/{serviceName}"
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
          "responseType": "dbaas.logs.Offer",
          "noAuthentication": false,
          "description": "Returns the subscribed offer"
        }
      ],
      "description": "ServiceOffer"
    },
    {
      "path": "/dbaas/logs/{serviceName}/operation",
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
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Latest operations"
        }
      ],
      "description": "Operations"
    },
    {
      "path": "/dbaas/logs/{serviceName}/operation/{operationId}",
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
              "name": "operationId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Operation ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Returns details of specified operation"
        }
      ],
      "description": "Operation"
    },
    {
      "path": "/dbaas/logs/{serviceName}/option",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-06-01T00:00:00+00:00",
            "deprecatedDate": "2020-04-08T17:41:02+02:00",
            "replacement": "/dbaas/logs/{serviceName}"
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
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Returns the subscribed additional options"
        }
      ],
      "description": "ServiceOptions"
    },
    {
      "path": "/dbaas/logs/{serviceName}/option/{optionId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-06-01T00:00:00+00:00",
            "deprecatedDate": "2020-04-08T17:41:02+02:00",
            "replacement": "/dbaas/logs/{serviceName}"
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
              "name": "optionId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Option ID"
            }
          ],
          "responseType": "dbaas.logs.Option",
          "noAuthentication": false,
          "description": "Returns details of a subscribed option"
        }
      ],
      "description": "ServiceOption"
    },
    {
      "path": "/dbaas/logs/{serviceName}/option/{optionId}/terminate",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-06-01T00:00:00+00:00",
            "deprecatedDate": "2020-04-08T17:41:02+02:00",
            "replacement": "/dbaas/logs/{serviceName}"
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
              "name": "optionId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Option ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Remove the specified subscribed option"
        }
      ],
      "description": "ServiceOption"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias",
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
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Returns the list of alias for connected user"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputElasticsearchAliasCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.OutputElasticsearchAliasCreation",
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
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Register a new elasticsearch alias"
        }
      ],
      "description": "Aliases"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}",
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
              "name": "aliasId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Alias ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Remove specified elasticsearch alias"
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
              "name": "aliasId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Alias ID"
            }
          ],
          "responseType": "dbaas.logs.Alias",
          "noAuthentication": false,
          "description": "Returns specified elasticsearch alias"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputElasticsearchAliasUpdate",
              "paramType": "body",
              "fullType": "dbaas.logs.OutputElasticsearchAliasUpdate",
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
            },
            {
              "name": "aliasId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Alias ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Update specified elasticsearch alias"
        }
      ],
      "description": "Alias"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index",
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
              "name": "aliasId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Alias ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Returns the list of elasticsearch indexes attached to specified\n        elasticsearch alias"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputElasticsearchAliasIndexCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.OutputElasticsearchAliasIndexCreation",
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
            },
            {
              "name": "aliasId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Alias ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Attach a elasticsearch index to specified elasticsearch alias"
        }
      ],
      "description": "AliasStreams"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index/{indexId}",
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
              "name": "aliasId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Alias ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Detach a elasticsearch index from specified elasticsearch alias"
        }
      ],
      "description": "AliasStream"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream",
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
              "name": "aliasId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Alias ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Returns the list of graylog streams attached to specified\n        elasticsearch alias"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputElasticsearchAliasStreamCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.OutputElasticsearchAliasStreamCreation",
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
            },
            {
              "name": "aliasId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Alias ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Attach a graylog stream to specified elasticsearch alias"
        }
      ],
      "description": "AliasStreams"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream/{streamId}",
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
              "name": "aliasId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Alias ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Detach a graylog stream from specified elasticsearch alias"
        }
      ],
      "description": "AliasStream"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/url",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "aliasId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Alias ID"
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
          "responseType": "dbaas.logs.Url[]",
          "noAuthentication": false,
          "description": "Returns the list of urls of specified alias"
        }
      ],
      "description": "AliasUrls"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/index",
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
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Returns the list of elasticsearch indexes"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputElasticsearchIndexCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.OutputElasticsearchIndexCreation",
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
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Register a new elasticsearch index"
        }
      ],
      "description": "Indexes"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "indexId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Index ID"
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
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Remove specified elasticsearch index"
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
              "name": "indexId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Index ID"
            }
          ],
          "responseType": "dbaas.logs.Index",
          "noAuthentication": false,
          "description": "Returns specified elasticsearch index"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputElasticsearchIndexUpdate",
              "paramType": "body",
              "fullType": "dbaas.logs.OutputElasticsearchIndexUpdate",
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
            },
            {
              "name": "indexId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Index ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Update specified elasticsearch index"
        }
      ],
      "description": "Index"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}/url",
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
              "name": "indexId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Index ID"
            }
          ],
          "responseType": "dbaas.logs.Url[]",
          "noAuthentication": false,
          "description": "Returns the list of urls of specified index"
        }
      ],
      "description": "IndexUrls"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/kibana",
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
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Returns the list of Kibana instances"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.KibanaCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.KibanaCreation",
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
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Register a new Kibana instance"
        }
      ],
      "description": "Kibana instances"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/kibana/{kibanaId}",
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
              "name": "kibanaId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Kibana ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Remove specified Kibana instance"
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
              "name": "kibanaId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Kibana ID"
            }
          ],
          "responseType": "dbaas.logs.Kibana",
          "noAuthentication": false,
          "description": "Returns specified Kibana instance"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dbaas.logs.KibanaUpdate",
              "paramType": "body",
              "fullType": "dbaas.logs.KibanaUpdate",
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
            },
            {
              "name": "kibanaId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Kibana ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Update specified Kibana instance"
        }
      ],
      "description": "Kibana instances"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/kibana/{kibanaId}/url",
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
              "name": "kibanaId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Kibana ID"
            }
          ],
          "responseType": "dbaas.logs.Url[]",
          "noAuthentication": false,
          "description": "Returns the list of urls of specified Kibana"
        }
      ],
      "description": "KibanaUrls"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/graylog/dashboard",
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
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Returns the list of graylog dashboards"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputGraylogDashboardCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.OutputGraylogDashboardCreation",
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
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Register a new graylog dashboard"
        }
      ],
      "description": "Dashboards"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}",
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
              "name": "dashboardId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Dashboard ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Remove specified graylog dashboard"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "dashboardId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Dashboard ID"
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
          "responseType": "dbaas.logs.Dashboard",
          "noAuthentication": false,
          "description": "Returns details of specified graylog dashboard"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputGraylogDashboardUpdate",
              "paramType": "body",
              "fullType": "dbaas.logs.OutputGraylogDashboardUpdate",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "dashboardId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Dashboard ID"
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
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Update information of specified graylog dashboard"
        }
      ],
      "description": "Dashboard"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/duplicate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputGraylogDashboardDuplicateCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.OutputGraylogDashboardDuplicateCreation",
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
            },
            {
              "name": "dashboardId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Dashboard ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Copy all widgets from specified dashboard to a new one"
        }
      ],
      "description": "DashboardClone"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/url",
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
              "name": "dashboardId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Dashboard ID"
            }
          ],
          "responseType": "dbaas.logs.Url[]",
          "noAuthentication": false,
          "description": "Returns the list of urls of specified graylog dashboard"
        }
      ],
      "description": "DashboardUrls"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream",
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
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Returns the list of graylog streams"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputGraylogStreamCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.OutputGraylogStreamCreation",
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
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Register a new graylog stream"
        }
      ],
      "description": "Streams"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}",
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Remove specified graylog stream"
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            }
          ],
          "responseType": "dbaas.logs.Stream",
          "noAuthentication": false,
          "description": "Returns details of specified graylog stream"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputGraylogStreamUpdate",
              "paramType": "body",
              "fullType": "dbaas.logs.OutputGraylogStreamUpdate",
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
            },
            {
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Update information of specified graylog stream"
        }
      ],
      "description": "Stream"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert",
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Returns the list of configured alerts of specified graylog stream"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputGraylogStreamAlertCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.OutputGraylogStreamAlertCreation",
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
            },
            {
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Register a new alert on specified graylog stream"
        }
      ],
      "description": "StreamAlerts"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}",
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            },
            {
              "name": "alertId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Alert ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Remove alert from specified graylog stream"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            },
            {
              "name": "alertId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Alert ID"
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
          "responseType": "dbaas.logs.StreamAlertCondition",
          "noAuthentication": false,
          "description": "Returns details of specified graylog stream alert"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputGraylogStreamAlertUpdate",
              "paramType": "body",
              "fullType": "dbaas.logs.OutputGraylogStreamAlertUpdate",
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
            },
            {
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            },
            {
              "name": "alertId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Alert ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Update alert information of specified graylog stream"
        }
      ],
      "description": "StreamAlert"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive",
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Returns the list of archives"
        }
      ],
      "description": "StreamArchives"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "archiveId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Archive ID"
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            }
          ],
          "responseType": "dbaas.logs.Archive",
          "noAuthentication": false,
          "description": "Returns details of specified archive"
        }
      ],
      "description": "StreamArchive"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}/url",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            },
            {
              "name": "archiveId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Archive ID"
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
          "responseType": "dbaas.logs.ArchiveUrl",
          "noAuthentication": false,
          "description": "Get a public temporary URL to access the archive"
        }
      ],
      "description": "Streams"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule",
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Returns the list of rules of specified graylog stream"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputGraylogStreamRuleCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.OutputGraylogStreamRuleCreation",
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
            },
            {
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Register a new rule on specified graylog stream"
        }
      ],
      "description": "StreamRules"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}",
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            },
            {
              "name": "ruleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Rule ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Remove specified graylog stream rule"
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            },
            {
              "name": "ruleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Rule ID"
            }
          ],
          "responseType": "dbaas.logs.StreamRule",
          "noAuthentication": false,
          "description": "Returns details of specified graylog stream rule"
        }
      ],
      "description": "StreamRule"
    },
    {
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/url",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
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
          "responseType": "dbaas.logs.Url[]",
          "noAuthentication": false,
          "description": "Returns the list of urls of specified graylog stream"
        }
      ],
      "description": "StreamUrls"
    },
    {
      "path": "/dbaas/logs/{serviceName}/quota",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-06-01T00:00:00+00:00",
            "deprecatedDate": "2020-04-08T17:41:02+02:00",
            "replacement": "/dbaas/logs/{serviceName}"
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
          "responseType": "dbaas.logs.Quota",
          "noAuthentication": false,
          "description": "Returns the overall quota limits"
        }
      ],
      "description": "ServiceQuota"
    },
    {
      "path": "/dbaas/logs/{serviceName}/role",
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
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Returns the list of roles"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.RoleCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.RoleCreation",
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
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Register a new role"
        }
      ],
      "description": "Roles"
    },
    {
      "path": "/dbaas/logs/{serviceName}/role/{roleId}",
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
              "name": "roleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Role ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Remove specified role"
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
              "name": "roleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Role ID"
            }
          ],
          "responseType": "dbaas.logs.Role",
          "noAuthentication": false,
          "description": "Returns details of specified role"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dbaas.logs.RoleUpdate",
              "paramType": "body",
              "fullType": "dbaas.logs.RoleUpdate",
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
            },
            {
              "name": "roleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Role ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Update information of specified role"
        }
      ],
      "description": "Role"
    },
    {
      "path": "/dbaas/logs/{serviceName}/role/{roleId}/member",
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
              "name": "roleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Role ID"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Returns the member list of specified role"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.RoleMemberCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.RoleMemberCreation",
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
            },
            {
              "name": "roleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Role ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Append user into the member list of specified role"
        }
      ],
      "description": "RoleMembers"
    },
    {
      "path": "/dbaas/logs/{serviceName}/role/{roleId}/member/{username}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "roleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Role ID"
            },
            {
              "name": "username",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Username"
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
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Remove user from the member list of specified role"
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
              "name": "roleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Role ID"
            },
            {
              "name": "username",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Username"
            }
          ],
          "responseType": "dbaas.logs.Member",
          "noAuthentication": false,
          "description": "Returns the member metadata"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dbaas.logs.RoleMemberUpdate",
              "paramType": "body",
              "fullType": "dbaas.logs.RoleMemberUpdate",
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
            },
            {
              "name": "roleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Role ID"
            },
            {
              "name": "username",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Username"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Update the member metadata"
        }
      ],
      "description": "RoleMember"
    },
    {
      "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission",
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
              "name": "roleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Role ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Returns the list of permissions of specified role"
        }
      ],
      "description": "RolePermissions"
    },
    {
      "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission/alias",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.RolePermissionAliasCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.RolePermissionAliasCreation",
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
            },
            {
              "name": "roleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Role ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Append a elasticsearch alias permission to role"
        }
      ],
      "description": "RolePermissionAlias"
    },
    {
      "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission/dashboard",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.RolePermissionDashboardCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.RolePermissionDashboardCreation",
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
            },
            {
              "name": "roleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Role ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Append a graylog dashboard permission to role"
        }
      ],
      "description": "RolePermissionIndex"
    },
    {
      "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission/index",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.RolePermissionIndexCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.RolePermissionIndexCreation",
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
            },
            {
              "name": "roleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Role ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Append a elasticsearch index permission to role"
        }
      ],
      "description": "RolePermissionIndex"
    },
    {
      "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission/kibana",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.RolePermissionKibanaCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.RolePermissionKibanaCreation",
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
            },
            {
              "name": "roleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Role ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Append a kibana permission to role"
        }
      ],
      "description": "RolePermissionKibana"
    },
    {
      "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission/stream",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.RolePermissionStreamCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.RolePermissionStreamCreation",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "roleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Role ID"
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
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Append a graylog stream permission to role"
        }
      ],
      "description": "RolePermissionIndex"
    },
    {
      "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "permissionId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Permission ID"
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
              "name": "roleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Role ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Remove specified permission"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "roleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Role ID"
            },
            {
              "name": "permissionId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Permission ID"
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
          "responseType": "dbaas.logs.Permission",
          "noAuthentication": false,
          "description": "Returns details of specified permission"
        }
      ],
      "description": "RolePermission"
    },
    {
      "path": "/dbaas/logs/{serviceName}/serviceInfos",
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
      "path": "/dbaas/logs/{serviceName}/token",
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
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Returns the list of service tokens"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.TokenCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.TokenCreation",
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
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Add a new token"
        }
      ],
      "description": "Tokens"
    },
    {
      "path": "/dbaas/logs/{serviceName}/token/{tokenId}",
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
              "name": "tokenId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Token ID"
            }
          ],
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Delete the specified token"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "tokenId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Token ID"
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
          "responseType": "dbaas.logs.Token",
          "noAuthentication": false,
          "description": "Returns the specified token"
        }
      ],
      "description": "Token"
    },
    {
      "path": "/dbaas/logs/{serviceName}/url",
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
          "responseType": "dbaas.logs.Url[]",
          "noAuthentication": false,
          "description": "Returns platform useful urls."
        }
      ],
      "description": "ServiceUrls"
    },
    {
      "path": "/dbaas/logs/{serviceName}/user/changePassword",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "dbaas.logs.UserChangePasswordCreation",
              "paramType": "body",
              "fullType": "dbaas.logs.UserChangePasswordCreation",
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
          "responseType": "dbaas.logs.Operation",
          "noAuthentication": false,
          "description": "Initiate a password change procedure."
        }
      ],
      "description": "ServiceChangePassword"
    }
  ],
  "resourcePath": "/dbaas/logs",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "dbaas.logs.Alias": {
      "id": "Alias",
      "namespace": "dbaas.logs",
      "description": "Elasticsearch alias",
      "properties": {
        "aliasId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Alias ID",
          "required": false
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Input creation",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Alias description",
          "required": false
        },
        "isEditable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if you are allowed to edit entry",
          "required": false
        },
        "isShareable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if you are allowed to share entry",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Alias name",
          "required": false
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "DEPRECATED: Associated DBaaS Logs option",
          "required": false
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Input last update",
          "required": false
        }
      }
    },
    "dbaas.logs.AllowedNetwork": {
      "id": "AllowedNetwork",
      "namespace": "dbaas.logs",
      "description": "Network allowed to join input",
      "properties": {
        "allowedNetworkId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Network ID",
          "required": false
        },
        "network": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": true,
          "description": "IP block",
          "required": false
        }
      }
    },
    "dbaas.logs.Archive": {
      "id": "Archive",
      "namespace": "dbaas.logs",
      "description": "Stream archive",
      "properties": {
        "archiveId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Archive ID",
          "required": false
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Create date",
          "required": false
        },
        "filename": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Filename",
          "required": false
        },
        "md5": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "MD5 checksum",
          "required": false
        },
        "retrievalDelay": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Retrieval delay",
          "required": false
        },
        "retrievalState": {
          "type": "dbaas.logs.ArchiveRetrievalStateEnum",
          "fullType": "dbaas.logs.ArchiveRetrievalStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Retrieval state",
          "required": false
        },
        "sha256": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "sha256 checksum",
          "required": false
        },
        "size": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "File size in bytes",
          "required": false
        }
      }
    },
    "dbaas.logs.ArchiveRetrievalStateEnum": {
      "id": "ArchiveRetrievalStateEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for ArchiveRetrievalStateEnum",
      "enum": [
        "sealed",
        "unsealing",
        "unsealed"
      ],
      "enumType": "string"
    },
    "dbaas.logs.ArchiveUrl": {
      "id": "ArchiveUrl",
      "namespace": "dbaas.logs",
      "description": "Stream archive url",
      "properties": {
        "expirationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Temporary URL expiration date",
          "required": false
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Temporary URL to get archive",
          "required": false
        }
      }
    },
    "dbaas.logs.Cluster": {
      "id": "Cluster",
      "namespace": "dbaas.logs",
      "description": "Cluster",
      "properties": {
        "clusterId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster ID",
          "required": false
        },
        "clusterType": {
          "type": "dbaas.logs.ClusterClusterTypeEnum",
          "fullType": "dbaas.logs.ClusterClusterTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster type",
          "required": false
        },
        "dedicatedInputPEM": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "PEM for dedicated inputs",
          "required": false
        },
        "defaultRetentionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Retention ID used by default when none is given on new stream",
          "required": false
        },
        "directInputAllowedNetworks": {
          "type": "ipBlock[]",
          "fullType": "ipBlock[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Allowed networks for DIRECT_INPUT flow type",
          "required": false
        },
        "directInputPEM": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "PEM for direct inputs",
          "required": false
        },
        "hostname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Hostname",
          "required": false
        },
        "isDefault": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "All content generated by given service will be placed on this cluster",
          "required": false
        },
        "isUnlocked": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Allow given service to perform advanced operations on cluster",
          "required": false
        },
        "queryAllowedNetworks": {
          "type": "ipBlock[]",
          "fullType": "ipBlock[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Allowed networks for QUERY flow type",
          "required": false
        },
        "region": {
          "type": "dbaas.logs.ClusterRegionEnum",
          "fullType": "dbaas.logs.ClusterRegionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Data center localization",
          "required": false
        }
      }
    },
    "dbaas.logs.ClusterAllowedNetwork": {
      "id": "ClusterAllowedNetwork",
      "namespace": "dbaas.logs",
      "description": "Cluster allowed network",
      "properties": {
        "allowedNetworkId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Network ID",
          "required": false
        },
        "flowType": {
          "type": "dbaas.logs.ClusterAllowedNetworkFlowTypeEnum",
          "fullType": "dbaas.logs.ClusterAllowedNetworkFlowTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Flow type",
          "required": false
        },
        "network": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": true,
          "description": "IP block",
          "required": false
        }
      }
    },
    "dbaas.logs.ClusterAllowedNetworkCreation": {
      "id": "ClusterAllowedNetworkCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "flowType": {
          "type": "dbaas.logs.ClusterAllowedNetworkFlowTypeEnum",
          "fullType": "dbaas.logs.ClusterAllowedNetworkFlowTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Flow type",
          "required": true
        },
        "network": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": false,
          "description": "IP block",
          "required": true
        }
      }
    },
    "dbaas.logs.ClusterAllowedNetworkFlowTypeEnum": {
      "id": "ClusterAllowedNetworkFlowTypeEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for ClusterAllowedNetworkFlowTypeEnum",
      "enum": [
        "QUERY",
        "DIRECT_INPUT",
        "ALL"
      ],
      "enumType": "string"
    },
    "dbaas.logs.ClusterAllowedNetworks": {
      "id": "ClusterAllowedNetworks",
      "namespace": "dbaas.logs",
      "description": "Cluster allowed networks",
      "properties": {
        "directInputAllowedNetworks": {
          "type": "ipBlock[]",
          "fullType": "ipBlock[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Allowed networks for DIRECT_INPUT flow type",
          "required": false
        },
        "queryAllowedNetworks": {
          "type": "ipBlock[]",
          "fullType": "ipBlock[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Allowed networks for QUERY flow type",
          "required": false
        }
      }
    },
    "dbaas.logs.ClusterClusterTypeEnum": {
      "id": "ClusterClusterTypeEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for ClusterClusterTypeEnum",
      "enum": [
        "TRIAL",
        "PRO",
        "DEDICATED"
      ],
      "enumType": "string"
    },
    "dbaas.logs.ClusterRegionEnum": {
      "id": "ClusterRegionEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for ClusterRegionEnum",
      "enum": [
        "GRA",
        "RBX",
        "BHS",
        "SBG",
        "P-19"
      ],
      "enumType": "string"
    },
    "dbaas.logs.ClusterRetention": {
      "id": "ClusterRetention",
      "namespace": "dbaas.logs",
      "description": "Cluster retention",
      "properties": {
        "duration": {
          "type": "duration",
          "fullType": "duration",
          "canBeNull": true,
          "readOnly": true,
          "description": "Indexed duration expressed in ISO-8601 format",
          "required": false
        },
        "isSupported": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if a new stream can use it",
          "required": false
        },
        "retentionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Retention ID",
          "required": false
        }
      }
    },
    "dbaas.logs.Dashboard": {
      "id": "Dashboard",
      "namespace": "dbaas.logs",
      "description": "Graylog dashboard",
      "properties": {
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Dashboard creation",
          "required": false
        },
        "dashboardId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Dashboard ID",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Dashboard description",
          "required": false
        },
        "isEditable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if you are allowed to edit entry",
          "required": false
        },
        "isShareable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if you are allowed to share entry",
          "required": false
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "DEPRECATED: Associated DBaaS Logs option",
          "required": false
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Dashboard description",
          "required": false
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Dashboard last update",
          "required": false
        }
      }
    },
    "dbaas.logs.DeliveryStatusEnum": {
      "id": "DeliveryStatusEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for DeliveryStatusEnum",
      "enum": [
        "DELIVERING",
        "READY",
        "DELETING"
      ],
      "enumType": "string"
    },
    "dbaas.logs.Engine": {
      "id": "Engine",
      "namespace": "dbaas.logs",
      "description": "Input engine",
      "properties": {
        "engineId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Input engine ID",
          "required": false
        },
        "isDeprecated": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if engine will soon not be supported",
          "required": false
        },
        "name": {
          "type": "dbaas.logs.EngineNameEnum",
          "fullType": "dbaas.logs.EngineNameEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Software name",
          "required": false
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Software version",
          "required": false
        }
      }
    },
    "dbaas.logs.EngineNameEnum": {
      "id": "EngineNameEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for EngineNameEnum",
      "enum": [
        "FLOWGGER",
        "LOGSTASH",
        "TEST"
      ],
      "enumType": "string"
    },
    "dbaas.logs.FlowggerConfiguration": {
      "id": "FlowggerConfiguration",
      "namespace": "dbaas.logs",
      "description": "Flowgger configuration",
      "properties": {
        "logFormat": {
          "type": "dbaas.logs.FlowggerConfigurationLogFormatEnum",
          "fullType": "dbaas.logs.FlowggerConfigurationLogFormatEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type of format to decode",
          "required": false
        },
        "logFraming": {
          "type": "dbaas.logs.FlowggerConfigurationLogFramingEnum",
          "fullType": "dbaas.logs.FlowggerConfigurationLogFramingEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates how messages are delimited",
          "required": false
        }
      }
    },
    "dbaas.logs.FlowggerConfigurationLogFormatEnum": {
      "id": "FlowggerConfigurationLogFormatEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for FlowggerConfigurationLogFormatEnum",
      "enum": [
        "RFC5424",
        "LTSV",
        "GELF",
        "CAPNP"
      ],
      "enumType": "string"
    },
    "dbaas.logs.FlowggerConfigurationLogFramingEnum": {
      "id": "FlowggerConfigurationLogFramingEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for FlowggerConfigurationLogFramingEnum",
      "enum": [
        "LINE",
        "NUL",
        "SYSLEN",
        "CAPNP"
      ],
      "enumType": "string"
    },
    "dbaas.logs.Helper": {
      "id": "Helper",
      "namespace": "dbaas.logs",
      "description": "Helper",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Helper description",
          "required": false
        },
        "engineId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Input engine UUID",
          "required": false
        },
        "helperId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Helper UUID",
          "required": false
        },
        "sections": {
          "type": "dbaas.logs.HelperSection[]",
          "fullType": "dbaas.logs.HelperSection[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Helper sections",
          "required": false
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Helper title",
          "required": false
        }
      }
    },
    "dbaas.logs.HelperSection": {
      "id": "HelperSection",
      "namespace": "dbaas.logs",
      "description": "Helper section",
      "properties": {
        "content": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Section content",
          "required": false
        },
        "name": {
          "type": "dbaas.logs.HelperSectionNameEnum",
          "fullType": "dbaas.logs.HelperSectionNameEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Section name",
          "required": false
        }
      }
    },
    "dbaas.logs.HelperSectionNameEnum": {
      "id": "HelperSectionNameEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for HelperSectionName",
      "enum": [
        "LOGSTASH_INPUT",
        "LOGSTASH_FILTER",
        "LOGSTASH_PATTERN"
      ],
      "enumType": "string"
    },
    "dbaas.logs.Index": {
      "id": "Index",
      "namespace": "dbaas.logs",
      "description": "Elasticsearch index",
      "properties": {
        "alertNotifyEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "If set, notify when size is near 80, 90 or 100 % of its maximum capacity",
          "required": false
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Index creation",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Index description",
          "required": false
        },
        "indexId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Index ID",
          "required": false
        },
        "isEditable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if you are allowed to edit entry",
          "required": false
        },
        "isShareable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if you are allowed to share entry",
          "required": false
        },
        "maxSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum index size (in bytes)",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Index name",
          "required": false
        },
        "nbShard": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Number of shard",
          "required": false
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "DEPRECATED: Associated DBaaS Logs option",
          "required": false
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Index last update",
          "required": false
        }
      }
    },
    "dbaas.logs.Input": {
      "id": "Input",
      "namespace": "dbaas.logs",
      "description": "Input",
      "properties": {
        "allowedNetworks": {
          "type": "ipBlock[]",
          "fullType": "ipBlock[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "IP blocks",
          "required": false
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Input creation",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Input description",
          "required": false
        },
        "engineId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Input engine ID",
          "required": false
        },
        "exposedPort": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Port",
          "required": false
        },
        "hostname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Hostname",
          "required": false
        },
        "inputId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Input ID",
          "required": false
        },
        "isRestartRequired": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicate if input need to be restarted",
          "required": false
        },
        "nbInstance": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Number of instance running",
          "required": false
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "DEPRECATED: Associated DBaaS Logs option",
          "required": false
        },
        "publicAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Input IP address",
          "required": false
        },
        "singleInstanceEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "DEPRECATED: Force only one instance",
          "required": false
        },
        "sslCertificate": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Input SSL certificate",
          "required": false
        },
        "status": {
          "type": "dbaas.logs.InputStatusEnum",
          "fullType": "dbaas.logs.InputStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "init: configuration required, pending: ready to start, running: available",
          "required": false
        },
        "streamId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Associated Graylog stream",
          "required": false
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Input title",
          "required": false
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Input last update",
          "required": false
        }
      }
    },
    "dbaas.logs.InputAction": {
      "id": "InputAction",
      "namespace": "dbaas.logs",
      "description": "Action on input",
      "properties": {
        "isAllowed": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if action is allowed",
          "required": false
        },
        "type": {
          "type": "dbaas.logs.InputActionTypeEnum",
          "fullType": "dbaas.logs.InputActionTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Action type",
          "required": false
        }
      }
    },
    "dbaas.logs.InputActionTypeEnum": {
      "id": "InputActionTypeEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for InputActionTypeEnum",
      "enum": [
        "END",
        "LOG",
        "START",
        "TEST",
        "DESTROY",
        "RESTART"
      ],
      "enumType": "string"
    },
    "dbaas.logs.InputAllowedNetworkCreation": {
      "id": "InputAllowedNetworkCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "network": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": false,
          "description": "IP block",
          "required": true
        }
      }
    },
    "dbaas.logs.InputConfigurationFlowggerUpdate": {
      "id": "InputConfigurationFlowggerUpdate",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "logFormat": {
          "type": "dbaas.logs.FlowggerConfigurationLogFormatEnum",
          "fullType": "dbaas.logs.FlowggerConfigurationLogFormatEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "configuration log format",
          "required": true
        },
        "logFraming": {
          "type": "dbaas.logs.FlowggerConfigurationLogFramingEnum",
          "fullType": "dbaas.logs.FlowggerConfigurationLogFramingEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Log framing",
          "required": true
        }
      }
    },
    "dbaas.logs.InputConfigurationLogstashUpdate": {
      "id": "InputConfigurationLogstashUpdate",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "filterSection": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Filter section",
          "required": false
        },
        "inputSection": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Input section",
          "required": true
        },
        "patternSection": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Pattern section",
          "required": false
        }
      }
    },
    "dbaas.logs.InputCreation": {
      "id": "InputCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "allowedNetworks": {
          "type": "ipBlock[]",
          "fullType": "ipBlock[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "IP blocks",
          "required": false
        },
        "autoSelectOption": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: If set, automatically selects a compatible option",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description",
          "required": true
        },
        "engineId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": false,
          "description": "Engine ID",
          "required": true
        },
        "exposedPort": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Exposed port",
          "required": false
        },
        "nbInstance": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number of instance running",
          "required": false
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: Option ID",
          "required": false
        },
        "singleInstanceEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: Indicate if input have only a single instance",
          "required": false
        },
        "streamId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": false,
          "description": "Stream ID",
          "required": true
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Title",
          "required": true
        }
      }
    },
    "dbaas.logs.InputStatusEnum": {
      "id": "InputStatusEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for InputStatusEnum",
      "enum": [
        "INIT",
        "PENDING",
        "RUNNING",
        "PROCESSING"
      ],
      "enumType": "string"
    },
    "dbaas.logs.InputUpdate": {
      "id": "InputUpdate",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "allowedNetworks": {
          "type": "ipBlock[]",
          "fullType": "ipBlock[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "IP blocks",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description",
          "required": true
        },
        "engineId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": false,
          "description": "Engine ID",
          "required": true
        },
        "exposedPort": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Exposed port",
          "required": false
        },
        "nbInstance": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number of instance running",
          "required": false
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: Option ID",
          "required": false
        },
        "singleInstanceEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: Indicate if input have only a single instance",
          "required": false
        },
        "streamId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": false,
          "description": "Stream ID",
          "required": true
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Title",
          "required": true
        }
      }
    },
    "dbaas.logs.Kibana": {
      "id": "Kibana",
      "namespace": "dbaas.logs",
      "description": "Kibana instance",
      "properties": {
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Kibana creation",
          "required": false
        },
        "deliveryStatus": {
          "type": "dbaas.logs.DeliveryStatusEnum",
          "fullType": "dbaas.logs.DeliveryStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of the delivering process",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Kibana description",
          "required": false
        },
        "isEditable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if you are allowed to edit entry",
          "required": false
        },
        "kibanaId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Kibana ID",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Kibana name",
          "required": false
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Kibana last update",
          "required": false
        }
      }
    },
    "dbaas.logs.KibanaCreation": {
      "id": "KibanaCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description",
          "required": true
        }
      }
    },
    "dbaas.logs.KibanaUpdate": {
      "id": "KibanaUpdate",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description",
          "required": true
        }
      }
    },
    "dbaas.logs.LogstashConfiguration": {
      "id": "LogstashConfiguration",
      "namespace": "dbaas.logs",
      "description": "Logstash configuration",
      "properties": {
        "filterSection": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "The filter section of logstash.conf",
          "required": false
        },
        "inputSection": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The filter section of logstash.conf",
          "required": false
        },
        "patternSection": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "The list of customs Grok patterns",
          "required": false
        }
      }
    },
    "dbaas.logs.Member": {
      "id": "Member",
      "namespace": "dbaas.logs",
      "description": "Member",
      "properties": {
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Membership creation",
          "required": false
        },
        "note": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Custom note",
          "required": false
        },
        "username": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Username on DBaaS Logs",
          "required": false
        }
      }
    },
    "dbaas.logs.Offer": {
      "id": "Offer",
      "namespace": "dbaas.logs",
      "description": "DBaaS Logs offer",
      "properties": {
        "curNbAlias": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current number of alias booked",
          "required": false
        },
        "curNbDashboard": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current number of dashboard booked",
          "required": false
        },
        "curNbIndex": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current number of index booked",
          "required": false
        },
        "curNbInput": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current number of input booked",
          "required": false
        },
        "curNbRole": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current number of role booked",
          "required": false
        },
        "curNbStream": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current number of stream booked",
          "required": false
        },
        "esStorage": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Number of GB stored per month included",
          "required": false
        },
        "maxNbAlias": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of alias allowed",
          "required": false
        },
        "maxNbDashboard": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of dashboard allowed",
          "required": false
        },
        "maxNbIndex": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of index allowed",
          "required": false
        },
        "maxNbInput": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of input allowed",
          "required": false
        },
        "maxNbRole": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of role allowed",
          "required": false
        },
        "maxNbStream": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of stream allowed",
          "required": false
        },
        "reference": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Option unique reference",
          "required": false
        },
        "retention": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Data retention in hours",
          "required": false
        }
      }
    },
    "dbaas.logs.Operation": {
      "id": "Operation",
      "namespace": "dbaas.logs",
      "description": "Asynchronous operation",
      "properties": {
        "aliasId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Alias used",
          "required": false
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Operation creation",
          "required": false
        },
        "dashboardId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Dashboard used",
          "required": false
        },
        "indexId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Index used",
          "required": false
        },
        "inputId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Input used",
          "required": false
        },
        "operationId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Operation ID",
          "required": false
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "DEPRECATED: Option used",
          "required": false
        },
        "roleId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Role used",
          "required": false
        },
        "state": {
          "type": "dbaas.logs.OperationStateEnum",
          "fullType": "dbaas.logs.OperationStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Operation status",
          "required": false
        },
        "streamId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Stream used",
          "required": false
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Operation last update",
          "required": false
        }
      }
    },
    "dbaas.logs.OperationStateEnum": {
      "id": "OperationStateEnum",
      "namespace": "dbaas.logs",
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
      "enumType": "string"
    },
    "dbaas.logs.Option": {
      "id": "Option",
      "namespace": "dbaas.logs",
      "description": "DBaaS Logs option",
      "properties": {
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service creation",
          "required": false
        },
        "curNbAlias": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current number of alias booked",
          "required": false
        },
        "curNbDashboard": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current number of dashboard booked",
          "required": false
        },
        "curNbIndex": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current number of index booked",
          "required": false
        },
        "curNbInput": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current number of input booked",
          "required": false
        },
        "curNbRole": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current number of role booked",
          "required": false
        },
        "curNbStream": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current number of stream booked",
          "required": false
        },
        "indexSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Index size in bytes",
          "required": false
        },
        "maxNbAlias": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of alias allowed",
          "required": false
        },
        "maxNbDashboard": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of dashboard allowed",
          "required": false
        },
        "maxNbIndex": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of index allowed",
          "required": false
        },
        "maxNbInput": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of input allowed",
          "required": false
        },
        "maxNbRole": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of role allowed",
          "required": false
        },
        "maxNbStream": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of stream allowed",
          "required": false
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Option ID",
          "required": false
        },
        "reference": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Option unique reference",
          "required": false
        },
        "state": {
          "type": "dbaas.logs.OptionStateEnum",
          "fullType": "dbaas.logs.OptionStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Option state",
          "required": false
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Service last update",
          "required": false
        }
      }
    },
    "dbaas.logs.OptionStateEnum": {
      "id": "OptionStateEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for OptionStateEnum",
      "enum": [
        "ENABLED",
        "DISABLED"
      ],
      "enumType": "string"
    },
    "dbaas.logs.OutputElasticsearchAliasCreation": {
      "id": "OutputElasticsearchAliasCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "autoSelectOption": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: If set, automatically selects a compatible option",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description",
          "required": true
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: Option ID",
          "required": false
        },
        "suffix": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Suffix",
          "required": true
        }
      }
    },
    "dbaas.logs.OutputElasticsearchAliasIndexCreation": {
      "id": "OutputElasticsearchAliasIndexCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "indexId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": false,
          "description": "Index ID",
          "required": true
        }
      }
    },
    "dbaas.logs.OutputElasticsearchAliasStreamCreation": {
      "id": "OutputElasticsearchAliasStreamCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "streamId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": false,
          "description": "Stream ID",
          "required": true
        }
      }
    },
    "dbaas.logs.OutputElasticsearchAliasUpdate": {
      "id": "OutputElasticsearchAliasUpdate",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description",
          "required": true
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: Option ID",
          "required": false
        }
      }
    },
    "dbaas.logs.OutputElasticsearchIndexCreation": {
      "id": "OutputElasticsearchIndexCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "alertNotifyEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "If set, notify when size is near 80, 90 or 100 % of its maximum capacity",
          "required": false
        },
        "autoSelectOption": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: If set, automatically selects a compatible option",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description",
          "required": true
        },
        "nbShard": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number of shard",
          "required": false
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: Option ID",
          "required": false
        },
        "suffix": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Suffix",
          "required": true
        }
      }
    },
    "dbaas.logs.OutputElasticsearchIndexUpdate": {
      "id": "OutputElasticsearchIndexUpdate",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "alertNotifyEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "If set, notify when size is near 80, 90 or 100 % of its maximum capacity",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description",
          "required": true
        }
      }
    },
    "dbaas.logs.OutputGraylogDashboardCreation": {
      "id": "OutputGraylogDashboardCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "autoSelectOption": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: If set, automatically selects a compatible option",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description",
          "required": true
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: Option ID",
          "required": false
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Title",
          "required": true
        }
      }
    },
    "dbaas.logs.OutputGraylogDashboardDuplicateCreation": {
      "id": "OutputGraylogDashboardDuplicateCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "autoSelectOption": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: If set, automatically selects a compatible option",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description",
          "required": true
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: Option ID",
          "required": false
        },
        "streamId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": false,
          "description": "Stream ID",
          "required": false
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Title",
          "required": true
        }
      }
    },
    "dbaas.logs.OutputGraylogDashboardUpdate": {
      "id": "OutputGraylogDashboardUpdate",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description",
          "required": true
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: Option ID",
          "required": false
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Title",
          "required": true
        }
      }
    },
    "dbaas.logs.OutputGraylogStreamAlertCreation": {
      "id": "OutputGraylogStreamAlertCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "backlog": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Backlog",
          "required": true
        },
        "conditionType": {
          "type": "dbaas.logs.StreamAlertConditionConditionTypeEnum",
          "fullType": "dbaas.logs.StreamAlertConditionConditionTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Condition type",
          "required": false
        },
        "constraintType": {
          "type": "dbaas.logs.StreamAlertConditionConstraintTypeEnum",
          "fullType": "dbaas.logs.StreamAlertConditionConstraintTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Constraint type",
          "required": false
        },
        "field": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Field",
          "required": false
        },
        "grace": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Grace period",
          "required": true
        },
        "queryFilter": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Query filter",
          "required": false
        },
        "repeatNotificationsEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Repeat notifications enabled",
          "required": false
        },
        "threshold": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Threshold",
          "required": false
        },
        "thresholdType": {
          "type": "dbaas.logs.StreamAlertConditionThresholdTypeEnum",
          "fullType": "dbaas.logs.StreamAlertConditionThresholdTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Threshold type",
          "required": false
        },
        "time": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Time",
          "required": false
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Title",
          "required": true
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Value",
          "required": false
        }
      }
    },
    "dbaas.logs.OutputGraylogStreamAlertUpdate": {
      "id": "OutputGraylogStreamAlertUpdate",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "backlog": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Backlog",
          "required": true
        },
        "conditionType": {
          "type": "dbaas.logs.StreamAlertConditionConditionTypeEnum",
          "fullType": "dbaas.logs.StreamAlertConditionConditionTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Condition type",
          "required": false
        },
        "constraintType": {
          "type": "dbaas.logs.StreamAlertConditionConstraintTypeEnum",
          "fullType": "dbaas.logs.StreamAlertConditionConstraintTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Constraint type",
          "required": false
        },
        "field": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Field",
          "required": false
        },
        "grace": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Grace period",
          "required": true
        },
        "queryFilter": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Query filter",
          "required": false
        },
        "repeatNotificationsEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Repeat notifications enabled",
          "required": false
        },
        "threshold": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Threshold",
          "required": false
        },
        "thresholdType": {
          "type": "dbaas.logs.StreamAlertConditionThresholdTypeEnum",
          "fullType": "dbaas.logs.StreamAlertConditionThresholdTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Threshold type",
          "required": false
        },
        "time": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Time",
          "required": false
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Title",
          "required": true
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Value",
          "required": false
        }
      }
    },
    "dbaas.logs.OutputGraylogStreamCreation": {
      "id": "OutputGraylogStreamCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "autoSelectOption": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: If set, automatically selects a compatible option",
          "required": false
        },
        "coldStorageCompression": {
          "type": "dbaas.logs.StreamColdStorageCompressionEnum",
          "fullType": "dbaas.logs.StreamColdStorageCompressionEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cold storage compression",
          "required": false
        },
        "coldStorageContent": {
          "type": "dbaas.logs.StreamColdStorageContentEnum",
          "fullType": "dbaas.logs.StreamColdStorageContentEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cold storage archive content",
          "required": false
        },
        "coldStorageEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cold storage enabled",
          "required": false
        },
        "coldStorageNotifyEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cold storage notify enabled",
          "required": false
        },
        "coldStorageRetention": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cold storage retention time",
          "required": false
        },
        "coldStorageTarget": {
          "type": "dbaas.logs.StreamColdStorageTargetEnum",
          "fullType": "dbaas.logs.StreamColdStorageTargetEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cold storage destination",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description",
          "required": true
        },
        "indexingEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "ES indexing enabled",
          "required": false
        },
        "indexingMaxSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Maximum indexing size (in GB)",
          "required": false
        },
        "indexingNotifyEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "If set, notify when size is near 80, 90 or 100 % of the maximum configured setting",
          "required": false
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: Option ID",
          "required": false
        },
        "parentStreamId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": false,
          "description": "Parent stream ID",
          "required": false
        },
        "pauseIndexingOnMaxSize": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "If set, pause indexing when maximum size is reach",
          "required": false
        },
        "retentionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": false,
          "description": "Retention ID",
          "required": false
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Title",
          "required": true
        },
        "webSocketEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Web Socket enabled",
          "required": false
        }
      }
    },
    "dbaas.logs.OutputGraylogStreamRuleCreation": {
      "id": "OutputGraylogStreamRuleCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "field": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Field name",
          "required": true
        },
        "isInverted": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Invert condition",
          "required": false
        },
        "operator": {
          "type": "dbaas.logs.StreamRuleOperatorEnum",
          "fullType": "dbaas.logs.StreamRuleOperatorEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Field operator",
          "required": true
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Field value",
          "required": true
        }
      }
    },
    "dbaas.logs.OutputGraylogStreamUpdate": {
      "id": "OutputGraylogStreamUpdate",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "coldStorageCompression": {
          "type": "dbaas.logs.StreamColdStorageCompressionEnum",
          "fullType": "dbaas.logs.StreamColdStorageCompressionEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cold storage compression",
          "required": false
        },
        "coldStorageContent": {
          "type": "dbaas.logs.StreamColdStorageContentEnum",
          "fullType": "dbaas.logs.StreamColdStorageContentEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cold storage content",
          "required": false
        },
        "coldStorageEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cold storage enabled",
          "required": false
        },
        "coldStorageNotifyEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cold storage notify enabled",
          "required": false
        },
        "coldStorageRetention": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cold storage retention time",
          "required": false
        },
        "coldStorageTarget": {
          "type": "dbaas.logs.StreamColdStorageTargetEnum",
          "fullType": "dbaas.logs.StreamColdStorageTargetEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cold storage destination",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description",
          "required": true
        },
        "indexingEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "ES indexing enabled",
          "required": false
        },
        "indexingMaxSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Maximum indexing size (in GB)",
          "required": false
        },
        "indexingNotifyEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "If set, notify when size is near 80, 90 or 100 % of the maximum configured setting",
          "required": false
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: Option ID",
          "required": false
        },
        "pauseIndexingOnMaxSize": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "If set, pause indexing when maximum size is reach",
          "required": false
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Title",
          "required": true
        },
        "webSocketEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Web socket enabled",
          "required": false
        }
      }
    },
    "dbaas.logs.Permission": {
      "id": "Permission",
      "namespace": "dbaas.logs",
      "description": "Role permission",
      "properties": {
        "aliasId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Associated Elasticsearch alias",
          "required": false
        },
        "dashboardId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Associated Graylog dashboard",
          "required": false
        },
        "indexId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Associated Elasticsearch index",
          "required": false
        },
        "kibanaId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Associated Kibana instance",
          "required": false
        },
        "permissionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Permission ID",
          "required": false
        },
        "permissionType": {
          "type": "dbaas.logs.PermissionTypeEnum",
          "fullType": "dbaas.logs.PermissionTypeEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Permission type",
          "required": false
        },
        "streamId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Associated Graylog stream",
          "required": false
        }
      }
    },
    "dbaas.logs.PermissionTypeEnum": {
      "id": "PermissionTypeEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for PermissionTypeEnum",
      "enum": [
        "READ_ONLY",
        "READ_WRITE"
      ],
      "enumType": "string"
    },
    "dbaas.logs.PublicOffer": {
      "id": "PublicOffer",
      "namespace": "dbaas.logs",
      "description": "DBaaS Logs offer",
      "properties": {
        "esStorage": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number of GB stored per month included",
          "required": false
        },
        "maxNbAlias": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of alias allowed",
          "required": false
        },
        "maxNbDashboard": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of dashboard allowed",
          "required": false
        },
        "maxNbIndex": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of index allowed",
          "required": false
        },
        "maxNbInput": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of input allowed",
          "required": false
        },
        "maxNbRole": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of role allowed",
          "required": false
        },
        "maxNbStream": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of stream allowed",
          "required": false
        },
        "reference": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Option unique reference",
          "required": false
        }
      }
    },
    "dbaas.logs.Quota": {
      "id": "Quota",
      "namespace": "dbaas.logs",
      "description": "DBaaS Logs quota",
      "properties": {
        "curNbAlias": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current number of alias booked",
          "required": false
        },
        "curNbDashboard": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current number of dashboard booked",
          "required": false
        },
        "curNbIndex": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current number of index booked",
          "required": false
        },
        "curNbInput": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current number of input booked",
          "required": false
        },
        "curNbRole": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current number of role booked",
          "required": false
        },
        "curNbStream": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current number of stream booked",
          "required": false
        },
        "maxNbAlias": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of alias allowed",
          "required": false
        },
        "maxNbDashboard": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of dashboard allowed",
          "required": false
        },
        "maxNbIndex": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of index allowed",
          "required": false
        },
        "maxNbInput": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of input allowed",
          "required": false
        },
        "maxNbRole": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of role allowed",
          "required": false
        },
        "maxNbStream": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of stream allowed",
          "required": false
        }
      }
    },
    "dbaas.logs.Role": {
      "id": "Role",
      "namespace": "dbaas.logs",
      "description": "Role",
      "properties": {
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Role creation",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Role description",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Role name",
          "required": false
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "DEPRECATED: Associated DBaaS Logs option",
          "required": false
        },
        "roleId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Role ID",
          "required": false
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Role last update",
          "required": false
        }
      }
    },
    "dbaas.logs.RoleCreation": {
      "id": "RoleCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "autoSelectOption": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: If set, automatically selects a compatible option",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name",
          "required": true
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: Option ID",
          "required": false
        }
      }
    },
    "dbaas.logs.RoleMemberCreation": {
      "id": "RoleMemberCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "note": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Custom note",
          "required": false
        },
        "username": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Username",
          "required": true
        }
      }
    },
    "dbaas.logs.RoleMemberUpdate": {
      "id": "RoleMemberUpdate",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "note": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Custom note",
          "required": false
        }
      }
    },
    "dbaas.logs.RolePermissionAliasCreation": {
      "id": "RolePermissionAliasCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "aliasId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": false,
          "description": "Alias ID",
          "required": true
        }
      }
    },
    "dbaas.logs.RolePermissionDashboardCreation": {
      "id": "RolePermissionDashboardCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "dashboardId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": false,
          "description": "Dashboard ID",
          "required": true
        },
        "permissionType": {
          "type": "dbaas.logs.PermissionTypeEnum",
          "fullType": "dbaas.logs.PermissionTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Permission type",
          "required": false
        }
      }
    },
    "dbaas.logs.RolePermissionIndexCreation": {
      "id": "RolePermissionIndexCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "indexId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": false,
          "description": "Index ID",
          "required": true
        },
        "permissionType": {
          "type": "dbaas.logs.PermissionTypeEnum",
          "fullType": "dbaas.logs.PermissionTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Permission type",
          "required": false
        }
      }
    },
    "dbaas.logs.RolePermissionKibanaCreation": {
      "id": "RolePermissionKibanaCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "kibanaId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": false,
          "description": "Kibana ID",
          "required": true
        },
        "permissionType": {
          "type": "dbaas.logs.PermissionTypeEnum",
          "fullType": "dbaas.logs.PermissionTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Permission type",
          "required": false
        }
      }
    },
    "dbaas.logs.RolePermissionStreamCreation": {
      "id": "RolePermissionStreamCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "streamId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": false,
          "description": "Stream ID",
          "required": true
        }
      }
    },
    "dbaas.logs.RoleUpdate": {
      "id": "RoleUpdate",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name",
          "required": true
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: Option ID",
          "required": false
        }
      }
    },
    "dbaas.logs.Service": {
      "id": "Service",
      "namespace": "dbaas.logs",
      "description": "Service",
      "properties": {
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service creation",
          "required": false
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Service custom name",
          "required": false
        },
        "isCapped": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "DEPRECATED: Is capped plan enabled?",
          "required": false
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service name",
          "required": false
        },
        "state": {
          "type": "dbaas.logs.ServiceStateEnum",
          "fullType": "dbaas.logs.ServiceStateEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Service state",
          "required": false
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Service last update",
          "required": false
        },
        "username": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Username on DBaaS Logs",
          "required": false
        }
      }
    },
    "dbaas.logs.ServiceMetric": {
      "id": "ServiceMetric",
      "namespace": "dbaas.logs",
      "description": "Metrics access",
      "properties": {
        "host": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Metrics server url",
          "required": false
        },
        "token": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Metrics credentials",
          "required": false
        }
      }
    },
    "dbaas.logs.ServiceStateEnum": {
      "id": "ServiceStateEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for ServiceStateEnum",
      "enum": [
        "INIT",
        "TO_CONFIG",
        "ENABLED",
        "DISABLED"
      ],
      "enumType": "string"
    },
    "dbaas.logs.Stream": {
      "id": "Stream",
      "namespace": "dbaas.logs",
      "description": "Graylog stream",
      "properties": {
        "canAlert": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if the current user can create alert on the stream",
          "required": false
        },
        "coldStorageCompression": {
          "type": "dbaas.logs.StreamColdStorageCompressionEnum",
          "fullType": "dbaas.logs.StreamColdStorageCompressionEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Cold storage compression method",
          "required": false
        },
        "coldStorageContent": {
          "type": "dbaas.logs.StreamColdStorageContentEnum",
          "fullType": "dbaas.logs.StreamColdStorageContentEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "ColdStorage content",
          "required": false
        },
        "coldStorageEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Is Cold storage enabled?",
          "required": false
        },
        "coldStorageNotifyEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Notify on new Cold storage archive",
          "required": false
        },
        "coldStorageRetention": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Cold storage retention in year",
          "required": false
        },
        "coldStorageTarget": {
          "type": "dbaas.logs.StreamColdStorageTargetEnum",
          "fullType": "dbaas.logs.StreamColdStorageTargetEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "ColdStorage destination",
          "required": false
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Stream creation",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Stream description",
          "required": false
        },
        "indexingEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Enable ES indexing",
          "required": false
        },
        "indexingMaxSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Maximum indexing size (in GB)",
          "required": false
        },
        "indexingNotifyEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "If set, notify when size is near 80, 90 or 100 % of the maximum configured setting",
          "required": false
        },
        "isEditable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if you are allowed to edit entry",
          "required": false
        },
        "isShareable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if you are allowed to share entry",
          "required": false
        },
        "nbAlertCondition": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number of alert condition",
          "required": false
        },
        "nbArchive": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number of coldstored archives",
          "required": false
        },
        "optionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "DEPRECATED: Associated DBaaS Logs option ID",
          "required": false
        },
        "parentStreamId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Parent stream ID",
          "required": false
        },
        "pauseIndexingOnMaxSize": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "If set, pause indexing when maximum size is reach",
          "required": false
        },
        "retentionId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Retention ID",
          "required": false
        },
        "streamId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Stream ID",
          "required": false
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Stream description",
          "required": false
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Stream last update",
          "required": false
        },
        "webSocketEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Enable Websocket",
          "required": false
        }
      }
    },
    "dbaas.logs.StreamAlertCondition": {
      "id": "StreamAlertCondition",
      "namespace": "dbaas.logs",
      "description": "Alert condition",
      "properties": {
        "alertId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Stream alert condition ID",
          "required": false
        },
        "backlog": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Backlog size",
          "required": false
        },
        "conditionType": {
          "type": "dbaas.logs.StreamAlertConditionConditionTypeEnum",
          "fullType": "dbaas.logs.StreamAlertConditionConditionTypeEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Alert condition type",
          "required": false
        },
        "constraintType": {
          "type": "dbaas.logs.StreamAlertConditionConstraintTypeEnum",
          "fullType": "dbaas.logs.StreamAlertConditionConstraintTypeEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Constraint type",
          "required": false
        },
        "field": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Field name",
          "required": false
        },
        "grace": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Grace period in minutes",
          "required": false
        },
        "queryFilter": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Query filter",
          "required": false
        },
        "repeatNotificationsEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Repeat notifications",
          "required": false
        },
        "threshold": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Threshold",
          "required": false
        },
        "thresholdType": {
          "type": "dbaas.logs.StreamAlertConditionThresholdTypeEnum",
          "fullType": "dbaas.logs.StreamAlertConditionThresholdTypeEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Threshold condition",
          "required": false
        },
        "time": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Time lapse in minutes",
          "required": false
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Condition label",
          "required": false
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Field value",
          "required": false
        }
      }
    },
    "dbaas.logs.StreamAlertConditionConditionTypeEnum": {
      "id": "StreamAlertConditionConditionTypeEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for StreamAlertConditionConditionTypeEnum",
      "enum": [
        "MESSAGE_COUNT",
        "FIELD_VALUE",
        "FIELD_CONTENT_VALUE"
      ],
      "enumType": "string"
    },
    "dbaas.logs.StreamAlertConditionConstraintTypeEnum": {
      "id": "StreamAlertConditionConstraintTypeEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for StreamAlertConditionConstraintTypeEnum",
      "enum": [
        "MEAN",
        "MIN",
        "MAX",
        "SUM",
        "STDDEV"
      ],
      "enumType": "string"
    },
    "dbaas.logs.StreamAlertConditionThresholdTypeEnum": {
      "id": "StreamAlertConditionThresholdTypeEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for StreamAlertConditionThresholdTypeEnum",
      "enum": [
        "MORE",
        "LESS",
        "LOWER",
        "HIGHER"
      ],
      "enumType": "string"
    },
    "dbaas.logs.StreamColdStorageCompressionEnum": {
      "id": "StreamColdStorageCompressionEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for StreamColdStorageCompressionEnum",
      "enum": [
        "LZMA",
        "GZIP",
        "DEFLATED",
        "ZSTD"
      ],
      "enumType": "string"
    },
    "dbaas.logs.StreamColdStorageContentEnum": {
      "id": "StreamColdStorageContentEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for StreamColdStorageContentEnum",
      "enum": [
        "ALL",
        "GELF",
        "PLAIN"
      ],
      "enumType": "string"
    },
    "dbaas.logs.StreamColdStorageTargetEnum": {
      "id": "StreamColdStorageTargetEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for StreamColdStorageTargetEnum",
      "enum": [
        "PCA",
        "PCS"
      ],
      "enumType": "string"
    },
    "dbaas.logs.StreamRule": {
      "id": "StreamRule",
      "namespace": "dbaas.logs",
      "description": "Stream rule",
      "properties": {
        "field": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Field name",
          "required": false
        },
        "isInverted": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Invert condition",
          "required": false
        },
        "operator": {
          "type": "dbaas.logs.StreamRuleOperatorEnum",
          "fullType": "dbaas.logs.StreamRuleOperatorEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Field operator",
          "required": false
        },
        "ruleId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Stream rule ID",
          "required": false
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Field value",
          "required": false
        }
      }
    },
    "dbaas.logs.StreamRuleOperatorEnum": {
      "id": "StreamRuleOperatorEnum",
      "namespace": "dbaas.logs",
      "description": "Possible values for StreamRuleOperatorEnum",
      "enum": [
        "MATCH_EXACTLY",
        "GREATER_THAN",
        "SMALLER_THAN",
        "FIELD_PRESENCE"
      ],
      "enumType": "string"
    },
    "dbaas.logs.TemporaryLogsLink": {
      "id": "TemporaryLogsLink",
      "namespace": "dbaas.logs",
      "description": "Temporary url informations",
      "properties": {
        "expirationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Temporary url expiration date",
          "required": false
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Temporary url",
          "required": false
        }
      }
    },
    "dbaas.logs.TestResult": {
      "id": "TestResult",
      "namespace": "dbaas.logs",
      "description": "Config test results",
      "properties": {
        "stderr": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Standard error",
          "required": false
        },
        "stdout": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Standard output",
          "required": false
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last config test update",
          "required": false
        }
      }
    },
    "dbaas.logs.Token": {
      "id": "Token",
      "namespace": "dbaas.logs",
      "description": "Token",
      "properties": {
        "clusterId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Cluster ID",
          "required": false
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Token creation",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Token name",
          "required": false
        },
        "tokenId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Token ID",
          "required": false
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Token last update",
          "required": false
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Token value",
          "required": false
        }
      }
    },
    "dbaas.logs.TokenCreation": {
      "id": "TokenCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "clusterId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cluster ID",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Token name",
          "required": true
        }
      }
    },
    "dbaas.logs.Update": {
      "id": "Update",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Service custom name",
          "required": false
        },
        "isCapped": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED: If set, block indexation when plan's limit is reached",
          "required": false
        }
      }
    },
    "dbaas.logs.Url": {
      "id": "Url",
      "namespace": "dbaas.logs",
      "description": "Web address",
      "properties": {
        "address": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Web URI",
          "required": false
        },
        "type": {
          "type": "dbaas.logs.UrlTypeEnum",
          "fullType": "dbaas.logs.UrlTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service type",
          "required": false
        }
      }
    },
    "dbaas.logs.UrlTypeEnum": {
      "id": "UrlTypeEnum",
      "namespace": "dbaas.logs",
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
      "enumType": "string"
    },
    "dbaas.logs.UserChangePasswordCreation": {
      "id": "UserChangePasswordCreation",
      "namespace": "dbaas.logs",
      "description": "Missing description",
      "properties": {
        "password": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": false,
          "description": "Password must be at least 12 characters long contain a number, an uppercase, a lowercase and a special letter",
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
    }
  }
}