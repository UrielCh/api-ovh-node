import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/vrack",
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
      "description": "Operations about the VRACK service"
    },
    {
      "path": "/vrack/{serviceName}",
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
          "responseType": "vrack.vrack",
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
              "dataType": "vrack.vrack",
              "paramType": "body",
              "fullType": "vrack.vrack",
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
      "description": "vrack"
    },
    {
      "path": "/vrack/{serviceName}/allowedServices",
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
          "responseType": "vrack.AllowedServices",
          "noAuthentication": false,
          "description": "List all services allowed in this vrack"
        }
      ],
      "description": "allowedServices operations"
    },
    {
      "path": "/vrack/{serviceName}/cloudProject",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "vrack for publicCloud project"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "project",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "publicCloud project to add"
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
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "add a publicCloud project to this vrack"
        }
      ],
      "description": "List the vrack.cloudProject objects"
    },
    {
      "path": "/vrack/{serviceName}/cloudProject/{project}",
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
              "name": "project",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Project"
            }
          ],
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "remove this publicCloud project from this vrack"
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
              "name": "project",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Project"
            }
          ],
          "responseType": "vrack.cloudProject",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "PublicCloud project in vrack"
    },
    {
      "path": "/vrack/{serviceName}/dedicatedCloud",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "vrack dedicated cloud (VmNetwork)"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "dedicatedCloud",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": ""
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
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "add a dedicatedCloud (VmNetwork) to this vrack"
        }
      ],
      "description": "List the vrack.dedicatedCloud objects"
    },
    {
      "path": "/vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}",
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
              "name": "dedicatedCloud",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Dedicated cloud"
            }
          ],
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "remove this dedicatedCloud (VmNetwork) from this vrack"
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
              "name": "dedicatedCloud",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Dedicated cloud"
            }
          ],
          "responseType": "vrack.dedicatedCloud",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "vrack dedicated cloud interface"
    },
    {
      "path": "/vrack/{serviceName}/dedicatedCloudDatacenter",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "vrack dedicated cloud datacenter"
        }
      ],
      "description": "List the vrack.pccDatacenter objects"
    },
    {
      "path": "/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}",
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
              "name": "datacenter",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Datacenter"
            }
          ],
          "responseType": "vrack.pccDatacenter",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "vrack datacenter interface"
    },
    {
      "path": "/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/allowedVrack",
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
              "name": "datacenter",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Datacenter"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Vracks allowed for your dedicatedCloud datacenter"
        }
      ],
      "description": "allowedVrack operations"
    },
    {
      "path": "/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/move",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "targetServiceName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The internal name of your target vrack"
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
              "name": "datacenter",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Datacenter"
            }
          ],
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "Move your dedicatedCloud datacenter from a Vrack to another"
        }
      ],
      "description": "move operations"
    },
    {
      "path": "/vrack/{serviceName}/dedicatedConnect",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "vrack dedicated connect"
        }
      ],
      "description": "List the vrack.dedicatedConnect objects"
    },
    {
      "path": "/vrack/{serviceName}/dedicatedConnect/{name}",
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "vrack.dedicatedConnect",
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
              "dataType": "vrack.dedicatedConnect",
              "paramType": "body",
              "fullType": "vrack.dedicatedConnect",
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "vrack dedicated connect interface"
    },
    {
      "path": "/vrack/{serviceName}/dedicatedServer",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "vrack for dedicated server"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "dedicatedServer",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Dedicated server to add "
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
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "add a dedicated server to this vrack"
        }
      ],
      "description": "List the vrack.dedicatedServer objects"
    },
    {
      "path": "/vrack/{serviceName}/dedicatedServer/{dedicatedServer}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "dedicatedServer",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Dedicated server"
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
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "remove this server from this vrack"
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
              "name": "dedicatedServer",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Dedicated server"
            }
          ],
          "responseType": "vrack.dedicatedServer",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "vrack dedicated server interfaces"
    },
    {
      "path": "/vrack/{serviceName}/dedicatedServer/{dedicatedServer}/mrtg",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-04-23T00:00:00+01:00",
            "deprecatedDate": "2017-10-23T00:00:00+01:00",
            "replacement": "/dedicated/server/{serviceName}/networkInterfaceController"
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
              "name": "dedicatedServer",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Dedicated server"
            },
            {
              "name": "period",
              "dataType": "dedicated.server.MrtgPeriodEnum",
              "paramType": "query",
              "fullType": "dedicated.server.MrtgPeriodEnum",
              "required": true,
              "description": "mrtg period"
            },
            {
              "name": "type",
              "dataType": "dedicated.server.MrtgTypeEnum",
              "paramType": "query",
              "fullType": "dedicated.server.MrtgTypeEnum",
              "required": true,
              "description": "mrtg type"
            }
          ],
          "responseType": "dedicated.server.MrtgTimestampValue[]",
          "noAuthentication": false,
          "description": "Retrieve vrack traffic graph values"
        }
      ],
      "description": "mrtg operations"
    },
    {
      "path": "/vrack/{serviceName}/dedicatedServerInterface",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "vrack for dedicated server interface"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "dedicatedServerInterface",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Dedicated server interface to add "
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
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "add a dedicated server interface to this vrack"
        }
      ],
      "description": "List the vrack.dedicatedServerInterface objects"
    },
    {
      "path": "/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}",
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
              "name": "dedicatedServerInterface",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Dedicated server interface"
            }
          ],
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "remove this server interface from this vrack"
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
              "name": "dedicatedServerInterface",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Dedicated server interface"
            }
          ],
          "responseType": "vrack.dedicatedServerInterface",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "vrack dedicated server interfaces"
    },
    {
      "path": "/vrack/{serviceName}/dedicatedServerInterfaceDetails",
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
          "responseType": "vrack.AllowedDedicatedServerInterfaces[]",
          "noAuthentication": false,
          "description": "Details for all dedicated server interfaces in this vrack"
        }
      ],
      "description": "dedicatedServerInterfaceDetails operations"
    },
    {
      "path": "/vrack/{serviceName}/ip",
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
          "responseType": "ipBlock[]",
          "noAuthentication": false,
          "description": "vrack for IP blocks"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "block",
              "dataType": "ipBlock",
              "paramType": "body",
              "fullType": "ipBlock",
              "required": true,
              "description": "Your IP block"
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
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "add an IP block to this vrack"
        }
      ],
      "description": "List the vrack.ip objects"
    },
    {
      "path": "/vrack/{serviceName}/ip/{ip}",
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
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "remove this IP block from this vrack"
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
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "vrack.ip",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "IP block in vrack"
    },
    {
      "path": "/vrack/{serviceName}/ip/{ip}/announceInZone",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "zone",
              "dataType": "vrack.VrackZoneEnum",
              "paramType": "body",
              "fullType": "vrack.VrackZoneEnum",
              "required": true,
              "description": "Zone to announce in"
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
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "Announce IP to zone for vrack"
        }
      ],
      "description": "announceInZone operations"
    },
    {
      "path": "/vrack/{serviceName}/ip/{ip}/availableZone",
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
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "vrack.VrackZoneEnum[]",
          "noAuthentication": false,
          "description": "Zone available to announce your block"
        }
      ],
      "description": "availableZone operations"
    },
    {
      "path": "/vrack/{serviceName}/ipLoadbalancing",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "vrack for ipLoadbalancing"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ipLoadbalancing",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Your ipLoadbalancing"
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
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "add an ipLoadbalancing to this vrack"
        }
      ],
      "description": "List the vrack.iplb objects"
    },
    {
      "path": "/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "ipLoadbalancing",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Ip loadbalancing"
            }
          ],
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "remove this ipLoadbalancing from this vrack"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "ipLoadbalancing",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Ip loadbalancing"
            }
          ],
          "responseType": "vrack.iplb",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "ipLoadbalancing in vrack"
    },
    {
      "path": "/vrack/{serviceName}/legacyVrack",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "vrack for legacy vrack"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "legacyVrack",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": ""
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
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "add a legacy vrack (vrackXXXX) to this vrack (pn-XXXX)"
        }
      ],
      "description": "List the vrack.legacyVrack objects"
    },
    {
      "path": "/vrack/{serviceName}/legacyVrack/{legacyVrack}",
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
              "name": "legacyVrack",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Legacy vrack"
            }
          ],
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "remove this legacy vrack (vrackXXXX) from this vrack (pn-XXXX)"
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
              "name": "legacyVrack",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Legacy vrack"
            }
          ],
          "responseType": "vrack.legacyVrack",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX)"
    },
    {
      "path": "/vrack/{serviceName}/ovhCloudConnect",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "description": "vrack for ovhCloudConnect"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ovhCloudConnect",
              "dataType": "uuid",
              "paramType": "body",
              "fullType": "uuid",
              "required": true,
              "description": "ovhCloudConnect service name"
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
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "Add an ovhCloudConnect to the vrack"
        }
      ],
      "description": "List the vrack.ovhCloudConnect objects"
    },
    {
      "path": "/vrack/{serviceName}/ovhCloudConnect/{ovhCloudConnect}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "ovhCloudConnect",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Ovh cloud connect"
            }
          ],
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "Remove the ovhCloudConnect from the vrack"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "ovhCloudConnect",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Ovh cloud connect"
            }
          ],
          "responseType": "vrack.ovhCloudConnect",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "ovhCloudConnect in vrack"
    },
    {
      "path": "/vrack/{serviceName}/serviceInfos",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "services.NonExpiringService",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Details about a non-expiring Service"
    },
    {
      "path": "/vrack/{serviceName}/task",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "vrack tasks"
        }
      ],
      "description": "List the vrack.Task objects"
    },
    {
      "path": "/vrack/{serviceName}/task/{taskId}",
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
              "name": "taskId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Task ID"
            }
          ],
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "vrack tasks"
    }
  ],
  "resourcePath": "/vrack",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "complexType.UnitAndValue<T>": {
      "id": "UnitAndValue",
      "namespace": "complexType",
      "description": "A numeric value tagged with its unit",
      "generics": [
        "T"
      ],
      "properties": {
        "unit": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "T",
          "fullType": "T",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "dedicated.server.MrtgPeriodEnum": {
      "id": "MrtgPeriodEnum",
      "namespace": "dedicated.server",
      "description": "distincts MRTG period",
      "enum": [
        "daily",
        "hourly",
        "monthly",
        "weekly",
        "yearly"
      ],
      "enumType": "string"
    },
    "dedicated.server.MrtgTimestampValue": {
      "id": "MrtgTimestampValue",
      "namespace": "dedicated.server",
      "description": "A timestamp associated to a value",
      "properties": {
        "timestamp": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "dedicated.server.MrtgTypeEnum": {
      "id": "MrtgTypeEnum",
      "namespace": "dedicated.server",
      "description": "distincts MRTG type",
      "enum": [
        "errors:download",
        "errors:upload",
        "packets:download",
        "packets:upload",
        "traffic:download",
        "traffic:upload"
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
    "services.NonExpiringService": {
      "id": "NonExpiringService",
      "namespace": "services",
      "description": "Details about a non-expiring Service",
      "properties": {
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
    },
    "vrack.AllowedDedicatedServerInterfaces": {
      "id": "AllowedDedicatedServerInterfaces",
      "namespace": "vrack",
      "description": "A structure giving all dedicated server interfaces allowed for this vrack",
      "properties": {
        "dedicatedServer": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "the name of dedicatedServer",
          "required": true
        },
        "dedicatedServerInterface": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "the unique identifier of dedicatedServerInterface",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "the name of dedicatedServerInterface",
          "required": true
        }
      }
    },
    "vrack.AllowedServices": {
      "id": "AllowedServices",
      "namespace": "vrack",
      "description": "A structure given all service allowed for this vrack",
      "properties": {
        "cloudProject": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "list of publicCloud projects allowed to be connected to vrack",
          "required": false
        },
        "dedicatedCloud": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "list of dedicated cloud allowed to be connected to vrack",
          "required": false
        },
        "dedicatedCloudDatacenter": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "list of dedicated cloud datacenters allowed to be connected to vrack",
          "required": false
        },
        "dedicatedConnect": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "list of dedicated connect links allowed to be connected to vrack",
          "required": false
        },
        "dedicatedServer": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "list of dedicated servers allowed to be connected to vrack",
          "required": false
        },
        "dedicatedServerInterface": {
          "type": "vrack.AllowedDedicatedServerInterfaces[]",
          "fullType": "vrack.AllowedDedicatedServerInterfaces[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "list of dedicated server interfaces allowed to be connected to vrack",
          "required": false
        },
        "ip": {
          "type": "ipBlock[]",
          "fullType": "ipBlock[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "list of blocks allowed to be connected to vrack",
          "required": false
        },
        "ipLoadbalancing": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "list of ipLoadbalancing allowed to be connected to vrack",
          "required": false
        },
        "legacyVrack": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "list of legacy vrack (1.0) allowed to be connected to vrack",
          "required": false
        },
        "ovhCloudConnect": {
          "type": "uuid[]",
          "fullType": "uuid[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "List of the ovhCloudConnect services allowed to be connected to vrack",
          "required": false
        }
      }
    },
    "vrack.Task": {
      "id": "Task",
      "namespace": "vrack",
      "description": "vrack tasks",
      "properties": {
        "function": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "orderId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "status": {
          "type": "vrack.TaskStatusEnum",
          "fullType": "vrack.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task status",
          "required": true
        },
        "targetDomain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "todoDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        }
      }
    },
    "vrack.TaskStatusEnum": {
      "id": "TaskStatusEnum",
      "namespace": "vrack",
      "description": "All states a vRack Task can be in",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "init",
        "todo"
      ],
      "enumType": "string"
    },
    "vrack.VrackZoneEnum": {
      "id": "VrackZoneEnum",
      "namespace": "vrack",
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
        "was1",
        "waw"
      ],
      "enumType": "string"
    },
    "vrack.cloudProject": {
      "id": "cloudProject",
      "namespace": "vrack",
      "description": "PublicCloud project in vrack",
      "properties": {
        "project": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "publicCloud project",
          "required": true
        },
        "vrack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "vrack name",
          "required": true
        }
      }
    },
    "vrack.dedicatedCloud": {
      "id": "dedicatedCloud",
      "namespace": "vrack",
      "description": "vrack dedicated cloud interface",
      "properties": {
        "dedicatedCloud": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "your dedicated cloud service",
          "required": true
        },
        "vlanId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Dedicated cloud vlanId used",
          "required": false
        },
        "vrack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "vrack name",
          "required": true
        }
      }
    },
    "vrack.dedicatedConnect": {
      "id": "dedicatedConnect",
      "namespace": "vrack",
      "description": "vrack dedicated connect interface",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "A name for your dedicatedConnect link",
          "required": true
        }
      }
    },
    "vrack.dedicatedServer": {
      "id": "dedicatedServer",
      "namespace": "vrack",
      "description": "vrack dedicated server interfaces",
      "properties": {
        "dedicatedServer": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Dedicated Server",
          "required": true
        },
        "vrack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "vrack name",
          "required": true
        }
      }
    },
    "vrack.dedicatedServerInterface": {
      "id": "dedicatedServerInterface",
      "namespace": "vrack",
      "description": "vrack dedicated server interfaces",
      "properties": {
        "dedicatedServerInterface": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Dedicated Server Interface",
          "required": true
        },
        "vrack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "vrack name",
          "required": true
        }
      }
    },
    "vrack.ip": {
      "id": "ip",
      "namespace": "vrack",
      "description": "IP block in vrack",
      "properties": {
        "gateway": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": true,
          "readOnly": true,
          "description": "Your gateway",
          "required": false
        },
        "ip": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": true,
          "description": "Your IP block",
          "required": true
        },
        "zone": {
          "type": "vrack.VrackZoneEnum",
          "fullType": "vrack.VrackZoneEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Where you want your block announced on the network",
          "required": false
        }
      }
    },
    "vrack.iplb": {
      "id": "iplb",
      "namespace": "vrack",
      "description": "ipLoadbalancing in vrack",
      "properties": {
        "ipLoadbalancing": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Your ipLoadbalancing",
          "required": true
        },
        "vrack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "vrack name",
          "required": true
        }
      }
    },
    "vrack.legacyVrack": {
      "id": "legacyVrack",
      "namespace": "vrack",
      "description": "interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX)",
      "properties": {
        "legacyVrack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "your legacy vrack service",
          "required": true
        },
        "vlanId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "vlan to set on legacy vrack equipments",
          "required": true
        }
      }
    },
    "vrack.ovhCloudConnect": {
      "id": "ovhCloudConnect",
      "namespace": "vrack",
      "description": "ovhCloudConnect in vrack",
      "properties": {
        "ovhCloudConnect": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "ovhCloudConnect service name",
          "required": true
        },
        "vrack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "vrack name",
          "required": true
        }
      }
    },
    "vrack.pccDatacenter": {
      "id": "pccDatacenter",
      "namespace": "vrack",
      "description": "vrack datacenter interface",
      "properties": {
        "datacenter": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Your dedicatedCloud datacenter name",
          "required": true
        },
        "dedicatedCloud": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Your dedicatedCloud name",
          "required": true
        },
        "vrack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "vrack name",
          "required": true
        }
      }
    },
    "vrack.vrack": {
      "id": "vrack",
      "namespace": "vrack",
      "description": "vrack",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "yourvrackdescription",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "yourvrackname",
          "required": true
        }
      }
    }
  }
}