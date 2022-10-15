import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/vrack.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the VRACK service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack"
    },
    {
      "description": "vrack",
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
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.vrack",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
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
              "dataType": "vrack.vrack",
              "description": "New object properties",
              "fullType": "vrack.vrack",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}"
    },
    {
      "description": "allowedServices operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all services allowed in this vrack",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "vrack.AllowedServiceEnum",
              "description": "Filter on a specific service family",
              "fullType": "vrack.AllowedServiceEnum",
              "name": "serviceFamily",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "vrack.AllowedServices",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/allowedServices"
    },
    {
      "description": "List the vrack.cloudProject objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "vrack for publicCloud project",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "add a publicCloud project to this vrack",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "publicCloud project to add",
              "fullType": "string",
              "name": "project",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/cloudProject"
    },
    {
      "description": "PublicCloud project in vrack",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "remove this publicCloud project from this vrack",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "publicCloud project",
              "fullType": "string",
              "name": "project",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
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
              "description": "publicCloud project",
              "fullType": "string",
              "name": "project",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.cloudProject",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/cloudProject/{project}"
    },
    {
      "description": "List the vrack.dedicatedCloud objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "vrack dedicated cloud (VmNetwork)",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "add a dedicatedCloud (VmNetwork) to this vrack",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "dedicatedCloud",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/dedicatedCloud"
    },
    {
      "description": "vrack dedicated cloud interface",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "remove this dedicatedCloud (VmNetwork) from this vrack",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "your dedicated cloud service",
              "fullType": "string",
              "name": "dedicatedCloud",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
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
              "description": "your dedicated cloud service",
              "fullType": "string",
              "name": "dedicatedCloud",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.dedicatedCloud",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}"
    },
    {
      "description": "List the vrack.pccDatacenter objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "vrack dedicated cloud datacenter",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/dedicatedCloudDatacenter"
    },
    {
      "description": "vrack datacenter interface",
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
              "description": "Your dedicatedCloud datacenter name",
              "fullType": "string",
              "name": "datacenter",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.pccDatacenter",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}"
    },
    {
      "description": "allowedVrack operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Vracks allowed for your dedicatedCloud datacenter",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Your dedicatedCloud datacenter name",
              "fullType": "string",
              "name": "datacenter",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/allowedVrack"
    },
    {
      "description": "move operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Move your dedicatedCloud datacenter from a Vrack to another",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your target vrack",
              "fullType": "string",
              "name": "targetServiceName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Your dedicatedCloud datacenter name",
              "fullType": "string",
              "name": "datacenter",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/move"
    },
    {
      "description": "List the vrack.dedicatedConnect objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "vrack dedicated connect",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/dedicatedConnect"
    },
    {
      "description": "vrack dedicated connect interface",
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
              "description": "A name for your dedicatedConnect link",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.dedicatedConnect",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
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
              "dataType": "vrack.dedicatedConnect",
              "description": "New object properties",
              "fullType": "vrack.dedicatedConnect",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "A name for your dedicatedConnect link",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/dedicatedConnect/{name}"
    },
    {
      "description": "List the vrack.dedicatedServer objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "vrack for dedicated server",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "add a dedicated server to this vrack (LEGACY)",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Dedicated server to add ",
              "fullType": "string",
              "name": "dedicatedServer",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/dedicatedServer"
    },
    {
      "description": "vrack dedicated server interfaces (LEGACY)",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "remove this server from this vrack (LEGACY)",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Dedicated Server",
              "fullType": "string",
              "name": "dedicatedServer",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
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
              "description": "Dedicated Server",
              "fullType": "string",
              "name": "dedicatedServer",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.dedicatedServer",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/dedicatedServer/{dedicatedServer}"
    },
    {
      "description": "mrtg operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-04-23T00:00:00+01:00",
            "deprecatedDate": "2017-10-23T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dedicated/server/{serviceName}/networkInterfaceController",
            "value": "DEPRECATED"
          },
          "description": "Retrieve vrack traffic graph values (LEGACY)",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Dedicated Server",
              "fullType": "string",
              "name": "dedicatedServer",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.MrtgPeriodEnum",
              "description": "mrtg period",
              "fullType": "dedicated.server.MrtgPeriodEnum",
              "name": "period",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicated.server.MrtgTypeEnum",
              "description": "mrtg type",
              "fullType": "dedicated.server.MrtgTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "dedicated.server.MrtgTimestampValue[]",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/dedicatedServer/{dedicatedServer}/mrtg"
    },
    {
      "description": "List the vrack.dedicatedServerInterface objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "vrack for dedicated server interface",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "add a dedicated server interface to this vrack",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Dedicated server interface to add ",
              "fullType": "string",
              "name": "dedicatedServerInterface",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/dedicatedServerInterface"
    },
    {
      "description": "vrack dedicated server interfaces",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "remove this server interface from this vrack",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Dedicated Server Interface",
              "fullType": "string",
              "name": "dedicatedServerInterface",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
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
              "description": "Dedicated Server Interface",
              "fullType": "string",
              "name": "dedicatedServerInterface",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.dedicatedServerInterface",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}"
    },
    {
      "description": "dedicatedServerInterfaceDetails operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Details for all dedicated server interfaces in this vrack",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.AllowedDedicatedServerInterfaces[]",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/dedicatedServerInterfaceDetails"
    },
    {
      "description": "List all eligible services for this vRack asynchronously",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List all eligible services for this vRack asynchronously",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.EligibleServicesResponse"
        }
      ],
      "path": "/vrack/{serviceName}/eligibleServices"
    },
    {
      "description": "List the vrack.ip objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "vrack for IP blocks",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipBlock[]",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "add an IP block to this vrack",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "Your IP block",
              "fullType": "ipBlock",
              "name": "block",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/ip"
    },
    {
      "description": "IP block in vrack",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "remove this IP block from this vrack",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "Your IP block",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
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
              "dataType": "ipBlock",
              "description": "Your IP block",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.ip",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/ip/{ip}"
    },
    {
      "description": "announceInZone operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Announce IP to zone for vrack",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vrack.VrackZoneEnum",
              "description": "Zone to announce in",
              "fullType": "vrack.VrackZoneEnum",
              "name": "zone",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "Your IP block",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/ip/{ip}/announceInZone"
    },
    {
      "description": "availableZone operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Zone available to announce your block",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "Your IP block",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.VrackZoneEnum[]",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/ip/{ip}/availableZone"
    },
    {
      "description": "List the vrack.iplb objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "vrack for ipLoadbalancing",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "add an ipLoadbalancing to this vrack",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Your ipLoadbalancing",
              "fullType": "string",
              "name": "ipLoadbalancing",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/ipLoadbalancing"
    },
    {
      "description": "ipLoadbalancing in vrack",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "remove this ipLoadbalancing from this vrack",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Your ipLoadbalancing",
              "fullType": "string",
              "name": "ipLoadbalancing",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        },
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
              "description": "Your ipLoadbalancing",
              "fullType": "string",
              "name": "ipLoadbalancing",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.iplb",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}"
    },
    {
      "description": "List the vrack.legacyVrack objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "vrack for legacy vrack",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "add a legacy vrack (vrackXXXX) to this vrack (pn-XXXX)",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "legacyVrack",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/legacyVrack"
    },
    {
      "description": "interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX)",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "remove this legacy vrack (vrackXXXX) from this vrack (pn-XXXX)",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "your legacy vrack service",
              "fullType": "string",
              "name": "legacyVrack",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
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
              "description": "your legacy vrack service",
              "fullType": "string",
              "name": "legacyVrack",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.legacyVrack",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/legacyVrack/{legacyVrack}"
    },
    {
      "description": "List the vrack.ovhCloudConnect objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "vrack for ovhCloudConnect",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add an ovhCloudConnect to the vrack",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "ovhCloudConnect service name",
              "fullType": "uuid",
              "name": "ovhCloudConnect",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/ovhCloudConnect"
    },
    {
      "description": "ovhCloudConnect in vrack",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove the ovhCloudConnect from the vrack",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "ovhCloudConnect service name",
              "fullType": "uuid",
              "name": "ovhCloudConnect",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
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
              "dataType": "uuid",
              "description": "ovhCloudConnect service name",
              "fullType": "uuid",
              "name": "ovhCloudConnect",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.ovhCloudConnect",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/ovhCloudConnect/{ovhCloudConnect}"
    },
    {
      "description": "Details about a non-expiring Service",
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
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.NonExpiringService",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/serviceInfos"
    },
    {
      "description": "List the vrack.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "vrack tasks",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/task"
    },
    {
      "description": "vrack tasks",
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
              "description": "The internal name of your vrack",
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
          "responseType": "vrack.Task",
          "scopes": [
            "all",
            "product/vrack/all"
          ]
        }
      ],
      "path": "/vrack/{serviceName}/task/{taskId}"
    }
  ],
  "basePath": "https://ca.api.ovh.com/1.0",
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
    "dedicated.server.MrtgPeriodEnum": {
      "description": "distincts MRTG period",
      "enum": [
        "daily",
        "hourly",
        "monthly",
        "weekly",
        "yearly"
      ],
      "enumType": "string",
      "id": "MrtgPeriodEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.MrtgTimestampValue": {
      "description": "A timestamp associated to a value",
      "id": "MrtgTimestampValue",
      "namespace": "dedicated.server",
      "properties": {
        "timestamp": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "value": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<double>"
        }
      }
    },
    "dedicated.server.MrtgTypeEnum": {
      "description": "distincts MRTG type",
      "enum": [
        "errors:download",
        "errors:upload",
        "packets:download",
        "packets:upload",
        "traffic:download",
        "traffic:upload"
      ],
      "enumType": "string",
      "id": "MrtgTypeEnum",
      "namespace": "dedicated.server"
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
    "services.NonExpiringService": {
      "description": "Details about a non-expiring Service",
      "id": "NonExpiringService",
      "namespace": "services",
      "properties": {
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
    "vrack.AllowedDedicatedServerInterfaces": {
      "description": "A structure giving all dedicated server interfaces allowed for this vrack",
      "id": "AllowedDedicatedServerInterfaces",
      "namespace": "vrack",
      "properties": {
        "dedicatedServer": {
          "canBeNull": false,
          "description": "the name of dedicatedServer",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "dedicatedServerInterface": {
          "canBeNull": false,
          "description": "the unique identifier of dedicatedServerInterface",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "the name of dedicatedServerInterface",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "vrack.AllowedServiceEnum": {
      "description": "Possible values for vrack allowed service",
      "enum": [
        "cloudProject",
        "dedicatedCloud",
        "dedicatedCloudDatacenter",
        "dedicatedConnect",
        "dedicatedServer",
        "dedicatedServerInterface",
        "ip",
        "ipLoadbalancing",
        "legacyVrack",
        "ovhCloudConnect"
      ],
      "enumType": "string",
      "id": "AllowedServiceEnum",
      "namespace": "vrack"
    },
    "vrack.AllowedServices": {
      "description": "A structure given all service allowed for this vrack",
      "id": "AllowedServices",
      "namespace": "vrack",
      "properties": {
        "cloudProject": {
          "canBeNull": true,
          "description": "list of publicCloud projects allowed to be connected to vrack",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "dedicatedCloud": {
          "canBeNull": true,
          "description": "list of dedicated cloud allowed to be connected to vrack",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "dedicatedCloudDatacenter": {
          "canBeNull": true,
          "description": "list of dedicated cloud datacenters allowed to be connected to vrack",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "dedicatedConnect": {
          "canBeNull": true,
          "description": "list of dedicated connect links allowed to be connected to vrack",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "dedicatedServer": {
          "canBeNull": true,
          "description": "list of dedicated servers allowed to be connected to vrack",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "dedicatedServerInterface": {
          "canBeNull": true,
          "description": "list of dedicated server interfaces allowed to be connected to vrack",
          "readOnly": false,
          "required": false,
          "type": "vrack.AllowedDedicatedServerInterfaces[]"
        },
        "ip": {
          "canBeNull": true,
          "description": "list of blocks allowed to be connected to vrack",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        },
        "ipLoadbalancing": {
          "canBeNull": true,
          "description": "list of ipLoadbalancing allowed to be connected to vrack",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "legacyVrack": {
          "canBeNull": true,
          "description": "list of legacy vrack (1.0) allowed to be connected to vrack",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "ovhCloudConnect": {
          "canBeNull": true,
          "description": "List of the ovhCloudConnect services allowed to be connected to vrack",
          "readOnly": false,
          "required": false,
          "type": "uuid[]"
        }
      }
    },
    "vrack.EligibleDedicatedServerInterfaces": {
      "description": "Dedicated server interfaces allowed for this vRack",
      "id": "EligibleDedicatedServerInterfaces",
      "namespace": "vrack",
      "properties": {
        "dedicatedServer": {
          "canBeNull": false,
          "description": "The name of the dedicatedServer",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "dedicatedServerInterface": {
          "canBeNull": false,
          "description": "The unique identifier of the dedicatedServerInterface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "The name of the dedicatedServerInterface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vrack.EligibleServices": {
      "description": "Eligible services for this vRack",
      "id": "EligibleServices",
      "namespace": "vrack",
      "properties": {
        "cloudProject": {
          "canBeNull": true,
          "description": "List of publicCloud projects allowed to be connected to this vRack",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "dedicatedCloud": {
          "canBeNull": true,
          "description": "List of dedicated cloud allowed to be connected to this vRack",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "dedicatedCloudDatacenter": {
          "canBeNull": true,
          "description": "List of dedicated cloud datacenters allowed to be connected to this vRack",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "dedicatedConnect": {
          "canBeNull": true,
          "description": "List of dedicated connect links allowed to be connected to this vRack",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "dedicatedServer": {
          "canBeNull": true,
          "description": "List of dedicated servers allowed to be connected to this vRack",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "dedicatedServerInterface": {
          "canBeNull": true,
          "description": "List of dedicated server interfaces allowed to be connected to this vRack",
          "fullType": "vrack.EligibleDedicatedServerInterfaces[]",
          "readOnly": true,
          "required": false,
          "type": "vrack.EligibleDedicatedServerInterfaces[]"
        },
        "ip": {
          "canBeNull": true,
          "description": "List of blocks allowed to be connected to this vRack",
          "fullType": "ipBlock[]",
          "readOnly": true,
          "required": false,
          "type": "ipBlock[]"
        },
        "ipLoadbalancing": {
          "canBeNull": true,
          "description": "List of ipLoadbalancing allowed to be connected to this vRack",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "legacyVrack": {
          "canBeNull": true,
          "description": "List of legacy vRack (1.0) allowed to be connected to this vRack",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "ovhCloudConnect": {
          "canBeNull": true,
          "description": "List of the ovhCloudConnect services allowed to be connected to this vRack",
          "fullType": "uuid[]",
          "readOnly": true,
          "required": false,
          "type": "uuid[]"
        }
      }
    },
    "vrack.EligibleServicesResponse": {
      "description": "Eligible services call response",
      "id": "EligibleServicesResponse",
      "namespace": "vrack",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "Creation date of the call",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "errors": {
          "canBeNull": false,
          "description": "List of services where an error has been encountered",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "result": {
          "canBeNull": false,
          "description": "Eligible services for this vRack",
          "fullType": "vrack.EligibleServices",
          "readOnly": true,
          "required": false,
          "type": "vrack.EligibleServices"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the call",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vrack.Task": {
      "description": "vrack tasks",
      "id": "Task",
      "namespace": "vrack",
      "properties": {
        "function": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastUpdate": {
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "orderId": {
          "canBeNull": true,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "serviceName": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "vrack.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "vrack.TaskStatusEnum"
        },
        "targetDomain": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "todoDate": {
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "vrack.TaskStatusEnum": {
      "description": "All states a vRack Task can be in",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "init",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "vrack"
    },
    "vrack.VrackZoneEnum": {
      "description": "Possible values for vrack zone",
      "enum": [
        "bhs",
        "fra1",
        "gra",
        "lon1",
        "pdx1",
        "rbx",
        "sbg",
        "sgp1",
        "syd1",
        "syd2",
        "was1",
        "waw"
      ],
      "enumType": "string",
      "id": "VrackZoneEnum",
      "namespace": "vrack"
    },
    "vrack.cloudProject": {
      "description": "PublicCloud project in vrack",
      "id": "cloudProject",
      "namespace": "vrack",
      "properties": {
        "project": {
          "canBeNull": false,
          "description": "publicCloud project",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "vrack": {
          "canBeNull": false,
          "description": "vrack name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vrack.dedicatedCloud": {
      "description": "vrack dedicated cloud interface",
      "id": "dedicatedCloud",
      "namespace": "vrack",
      "properties": {
        "dedicatedCloud": {
          "canBeNull": false,
          "description": "your dedicated cloud service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "vlanId": {
          "canBeNull": true,
          "description": "Dedicated cloud vlanId used",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "vrack": {
          "canBeNull": false,
          "description": "vrack name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vrack.dedicatedConnect": {
      "description": "vrack dedicated connect interface",
      "id": "dedicatedConnect",
      "namespace": "vrack",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "A name for your dedicatedConnect link",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "vrack.dedicatedServer": {
      "description": "vrack dedicated server interfaces (LEGACY)",
      "id": "dedicatedServer",
      "namespace": "vrack",
      "properties": {
        "dedicatedServer": {
          "canBeNull": false,
          "description": "Dedicated Server",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "vrack": {
          "canBeNull": false,
          "description": "vrack name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vrack.dedicatedServerInterface": {
      "description": "vrack dedicated server interfaces",
      "id": "dedicatedServerInterface",
      "namespace": "vrack",
      "properties": {
        "dedicatedServerInterface": {
          "canBeNull": false,
          "description": "Dedicated Server Interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "vrack": {
          "canBeNull": false,
          "description": "vrack name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vrack.ip": {
      "description": "IP block in vrack",
      "id": "ip",
      "namespace": "vrack",
      "properties": {
        "gateway": {
          "canBeNull": true,
          "description": "Your gateway",
          "fullType": "ipBlock",
          "readOnly": true,
          "required": false,
          "type": "ipBlock"
        },
        "ip": {
          "canBeNull": false,
          "description": "Your IP block",
          "fullType": "ipBlock",
          "readOnly": true,
          "required": false,
          "type": "ipBlock"
        },
        "zone": {
          "canBeNull": true,
          "description": "Where you want your block announced on the network",
          "fullType": "vrack.VrackZoneEnum",
          "readOnly": true,
          "required": false,
          "type": "vrack.VrackZoneEnum"
        }
      }
    },
    "vrack.iplb": {
      "description": "ipLoadbalancing in vrack",
      "id": "iplb",
      "namespace": "vrack",
      "properties": {
        "ipLoadbalancing": {
          "canBeNull": false,
          "description": "Your ipLoadbalancing",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "vrack": {
          "canBeNull": false,
          "description": "vrack name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vrack.legacyVrack": {
      "description": "interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX)",
      "id": "legacyVrack",
      "namespace": "vrack",
      "properties": {
        "legacyVrack": {
          "canBeNull": false,
          "description": "your legacy vrack service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "vlanId": {
          "canBeNull": false,
          "description": "vlan to set on legacy vrack equipments",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "vrack.nasha": {
      "description": "vrack (1.5) nasha server interfaces",
      "id": "nasha",
      "namespace": "vrack",
      "properties": {
        "serviceIp": {
          "canBeNull": false,
          "description": "service ip",
          "fullType": "ipBlock",
          "readOnly": true,
          "required": false,
          "type": "ipBlock"
        },
        "zpool": {
          "canBeNull": false,
          "description": "Name of Nasha zpool",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vrack.ovhCloudConnect": {
      "description": "ovhCloudConnect in vrack",
      "id": "ovhCloudConnect",
      "namespace": "vrack",
      "properties": {
        "ovhCloudConnect": {
          "canBeNull": false,
          "description": "ovhCloudConnect service name",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "vrack": {
          "canBeNull": false,
          "description": "vrack name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vrack.pccDatacenter": {
      "description": "vrack datacenter interface",
      "id": "pccDatacenter",
      "namespace": "vrack",
      "properties": {
        "datacenter": {
          "canBeNull": false,
          "description": "Your dedicatedCloud datacenter name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "dedicatedCloud": {
          "canBeNull": false,
          "description": "Your dedicatedCloud name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "vrack": {
          "canBeNull": false,
          "description": "vrack name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vrack.publicRoutingOption": {
      "description": "A structure describing the public routing option",
      "id": "publicRoutingOption",
      "namespace": "vrack",
      "properties": {
        "bandwidth": {
          "canBeNull": true,
          "description": "Global bandwidth for blocks in your vrack (in Mbps)",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "vrack.vrack": {
      "description": "vrack",
      "id": "vrack",
      "namespace": "vrack",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "yourvrackdescription",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "yourvrackname",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    }
  },
  "resourcePath": "/vrack"
}