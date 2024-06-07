import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/vrack.json

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
          "iamActions": [
            {
              "name": "vrack:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "map[string][]iam.resource.TagFilter",
              "description": "Filter resources on IAM tags",
              "name": "iamTags",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:get",
              "required": true
            }
          ],
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
          "responseType": "vrack.vrackWithIAM"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "vrack:apiovh:put",
              "required": true
            }
          ],
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
          "responseType": "void"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:allowedServices/get",
              "required": true
            },
            {
              "description": "Needed on the Cloud Project services to be listed in the response body",
              "name": "publicCloudProject:apiovh:vrack/attach",
              "required": false
            },
            {
              "description": "Needed on the legacy vRack services to be listed in the response body",
              "name": "legacyVrack:apiovh:vrack/attach",
              "required": false
            },
            {
              "description": "Needed on the IP Load Balancer services to be listed in the response body",
              "name": "ipLoadbalancing:apiovh:vrack/attach",
              "required": false
            },
            {
              "description": "Needed on the OVH Cloud Connect services to be listed in the response body",
              "name": "ovhCloudConnect:apiovh:vrack/attach",
              "required": false
            },
            {
              "description": "Needed on the Dedicated Server services to be listed in dedicatedServer and dedicatedServerInterface body entries",
              "name": "dedicatedServer:apiovh:vrack/attach",
              "required": false
            },
            {
              "description": "Needed on the Dedicated Cloud (VMware) services to be listed in the response body",
              "name": "pccVMware:apiovh:vrack/attach",
              "required": false
            },
            {
              "description": "Needed on the VrackServices services to be listed in the response body",
              "name": "vrackServices:apiovh:vrack/attach",
              "required": false
            }
          ],
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
          "responseType": "vrack.AllowedServices"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:cloudProject/get",
              "required": true
            }
          ],
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "add a publicCloud project to this vrack",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vrack:apiovh:cloudProject/attach",
              "required": true
            },
            {
              "name": "publicCloudProject:apiovh:vrack/attach",
              "required": true
            }
          ],
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
          "responseType": "vrack.Task"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:cloudProject/detach",
              "required": true
            }
          ],
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
          "responseType": "vrack.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vrack:apiovh:cloudProject/get",
              "required": true
            }
          ],
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
          "responseType": "vrack.cloudProject"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:pccVMware/get",
              "required": true
            }
          ],
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add VMware on OVHcloud to vRack",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vrack:apiovh:pccVMware/attach",
              "required": true
            },
            {
              "name": "pccVMware:apiovh:vrack/attach",
              "required": true
            }
          ],
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
          "responseType": "vrack.Task"
        }
      ],
      "path": "/vrack/{serviceName}/dedicatedCloud"
    },
    {
      "description": "VMware on OVHcloud vRack link",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove VMware on OVHcloud from vRack",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "vrack:apiovh:pccVMware/detach",
              "required": true
            }
          ],
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
          "responseType": "vrack.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get vRack",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vrack:apiovh:pccVMware/get",
              "required": true
            }
          ],
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
          "responseType": "vrack.dedicatedCloud"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:dedicatedCloudDatacenter/get",
              "required": true
            }
          ],
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
          "responseType": "string[]"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:dedicatedCloudDatacenter/get",
              "required": true
            }
          ],
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
          "responseType": "vrack.pccDatacenter"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:dedicatedCloudDatacenter/allowedVrack/get",
              "required": true
            }
          ],
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
          "responseType": "string[]"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:dedicatedCloudDatacenter/move",
              "required": true
            }
          ],
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
          "responseType": "vrack.Task"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:dedicatedConnect/get",
              "required": true
            }
          ],
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
          "responseType": "string[]"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:dedicatedConnect/get",
              "required": true
            }
          ],
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
          "responseType": "vrack.dedicatedConnect"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "vrack:apiovh:dedicatedConnect/edit",
              "required": true
            }
          ],
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
          "responseType": "void"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:dedicatedServer/get",
              "required": true
            }
          ],
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "add a dedicated server to this vrack (LEGACY)",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vrack:apiovh:dedicatedServer/attach",
              "required": true
            },
            {
              "name": "dedicatedServer:apiovh:vrack/attach",
              "required": true
            }
          ],
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
          "responseType": "vrack.Task"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:dedicatedServer/detach",
              "required": true
            }
          ],
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
          "responseType": "vrack.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vrack:apiovh:dedicatedServer/get",
              "required": true
            }
          ],
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
          "responseType": "vrack.dedicatedServer"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:dedicatedServer/mrtg/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.MrtgTimestampValue[]"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:dedicatedServerInterface/get",
              "required": true
            }
          ],
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "add a dedicated server interface to this vrack",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vrack:apiovh:dedicatedServerInterface/attach",
              "required": true
            },
            {
              "description": "Check the action on the Dedicated Server that bares the Dedicated Server Interface",
              "name": "dedicatedServer:apiovh:vrack/attach",
              "required": true
            }
          ],
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
          "responseType": "vrack.Task"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:dedicatedServerInterface/detach",
              "required": true
            }
          ],
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
          "responseType": "vrack.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vrack:apiovh:dedicatedServerInterface/get",
              "required": true
            }
          ],
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
          "responseType": "vrack.dedicatedServerInterface"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:dedicatedServerInterfaceDetails/get",
              "required": true
            }
          ],
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
          "responseType": "vrack.AllowedDedicatedServerInterfaces[]"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:eligibleServices/get",
              "required": true
            },
            {
              "description": "Needed on the legacy vRack services to be listed in the response body",
              "name": "legacyVrack:apiovh:vrack/attach",
              "required": false
            },
            {
              "description": "Needed on the IP Load Balancer services to be listed in the response body",
              "name": "ipLoadbalancing:apiovh:vrack/attach",
              "required": false
            },
            {
              "description": "Needed on the OVH Cloud Connect services to be listed in the response body",
              "name": "ovhCloudConnect:apiovh:vrack/attach",
              "required": false
            },
            {
              "description": "Needed on the Dedicated Server services to be listed in dedicatedServer and dedicatedServerInterface body entries",
              "name": "dedicatedServer:apiovh:vrack/attach",
              "required": false
            },
            {
              "description": "Needed on the Dedicated Cloud (VMware) services to be listed in the response body",
              "name": "pccVMware:apiovh:vrack/attach",
              "required": false
            },
            {
              "description": "Needed on the VrackServices services to be listed in the response body",
              "name": "vrackServices:apiovh:vrack/attach",
              "required": false
            }
          ],
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
          "iamActions": [
            {
              "name": "vrack:apiovh:ip/get",
              "required": true
            }
          ],
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
          "responseType": "ipBlock[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "add an IP block to this vrack",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vrack:apiovh:ip/attach",
              "required": true
            }
          ],
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
          "responseType": "vrack.Task"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:ip/detach",
              "required": true
            }
          ],
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
          "responseType": "vrack.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vrack:apiovh:ip/get",
              "required": true
            }
          ],
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
          "responseType": "vrack.ip"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:ip/announceInZone",
              "required": true
            }
          ],
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
          "responseType": "vrack.Task"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:ip/availableZone/get",
              "required": true
            }
          ],
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
          "responseType": "vrack.VrackZoneEnum[]"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:ipLoadbalancing/get",
              "required": true
            }
          ],
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "add an ipLoadbalancing to this vrack",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vrack:apiovh:ipLoadbalancing/attach",
              "required": true
            },
            {
              "name": "ipLoadbalancing:apiovh:vrack/attach",
              "required": true
            }
          ],
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
          "responseType": "vrack.Task"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:ipLoadbalancing/detach",
              "required": true
            }
          ],
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
          "responseType": "vrack.Task"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vrack:apiovh:ipLoadbalancing/get",
              "required": true
            }
          ],
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
          "responseType": "vrack.iplb"
        }
      ],
      "path": "/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}"
    },
    {
      "description": "List the vrack.ipv6 objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "vrack for IP v6 blocks",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vrack:apiovh:ipv6/get",
              "required": true
            }
          ],
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
          "responseType": "ipv6Block[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "add an IP v6 block to this vrack",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vrack:apiovh:ipv6/attach",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv6Block",
              "description": "Your IP v6 block",
              "fullType": "ipv6Block",
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
          "responseType": "vrack.Task"
        }
      ],
      "path": "/vrack/{serviceName}/ipv6"
    },
    {
      "description": "IP v6 block in vrack",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "remove this IP v6 block from this vrack",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "vrack:apiovh:ipv6/detach",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv6Block",
              "description": "Your IP v6 block",
              "fullType": "ipv6Block",
              "name": "ipv6",
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
          "responseType": "vrack.Task"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vrack:apiovh:ipv6/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv6Block",
              "description": "Your IP v6 block",
              "fullType": "ipv6Block",
              "name": "ipv6",
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
          "responseType": "vrack.ipv6"
        }
      ],
      "path": "/vrack/{serviceName}/ipv6/{ipv6}"
    },
    {
      "description": "List the vrack.bridgedSubrange objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "subrange bridged into your vrack",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vrack:apiovh:ipv6/bridgedSubrange/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv6Block",
              "description": "Your IP v6 block",
              "fullType": "ipv6Block",
              "name": "ipv6",
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
          "responseType": "ipv6Block[]"
        }
      ],
      "path": "/vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange"
    },
    {
      "description": "Bridged subrange within your IP v6 block",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vrack:apiovh:ipv6/bridgedSubrange/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv6Block",
              "description": "subrange bridged into your vrack",
              "fullType": "ipv6Block",
              "name": "bridgedSubrange",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv6Block",
              "description": "Your IP v6 block",
              "fullType": "ipv6Block",
              "name": "ipv6",
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
          "responseType": "vrack.bridgedSubrange"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Update Slaac status",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "vrack:apiovh:ipv6/bridgedSubrange/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vrack.bridgedSubrange",
              "description": "New object properties",
              "fullType": "vrack.bridgedSubrange",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv6Block",
              "description": "subrange bridged into your vrack",
              "fullType": "ipv6Block",
              "name": "bridgedSubrange",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv6Block",
              "description": "Your IP v6 block",
              "fullType": "ipv6Block",
              "name": "ipv6",
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
          "responseType": "vrack.Task"
        }
      ],
      "path": "/vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange/{bridgedSubrange}"
    },
    {
      "description": "List the vrack.routedSubrange objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "subrange routed into your vrack",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vrack:apiovh:ipv6/routedSubrange/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv6Block",
              "description": "Your IP v6 block",
              "fullType": "ipv6Block",
              "name": "ipv6",
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
          "responseType": "ipv6Block[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "route a subrange of your IP v6 block into your vrack",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vrack:apiovh:ipv6/routedSubrange/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv6",
              "description": "nexthop to configure for your routed subrange (must be part of bridged subrange)",
              "fullType": "ipv6",
              "name": "nexthop",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv6Block",
              "description": "subrange to route into your vrack",
              "fullType": "ipv6Block",
              "name": "routedSubrange",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv6Block",
              "description": "Your IP v6 block",
              "fullType": "ipv6Block",
              "name": "ipv6",
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
          "responseType": "vrack.Task"
        }
      ],
      "path": "/vrack/{serviceName}/ipv6/{ipv6}/routedSubrange"
    },
    {
      "description": "Routed subranges within your IP v6 block",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "unroute subrange from your vrack",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "vrack:apiovh:ipv6/routedSubrange/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv6Block",
              "description": "Your IP v6 block",
              "fullType": "ipv6Block",
              "name": "ipv6",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv6Block",
              "description": "subrange routed into your vrack",
              "fullType": "ipv6Block",
              "name": "routedSubrange",
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
          "responseType": "vrack.Task"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vrack:apiovh:ipv6/routedSubrange/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv6Block",
              "description": "Your IP v6 block",
              "fullType": "ipv6Block",
              "name": "ipv6",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv6Block",
              "description": "subrange routed into your vrack",
              "fullType": "ipv6Block",
              "name": "routedSubrange",
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
          "responseType": "vrack.routedSubrange"
        }
      ],
      "path": "/vrack/{serviceName}/ipv6/{ipv6}/routedSubrange/{routedSubrange}"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:legacyVrack/get",
              "required": true
            }
          ],
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "add a legacy vrack (vrackXXXX) to this vrack (pn-XXXX)",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vrack:apiovh:legacyVrack/attach",
              "required": true
            },
            {
              "name": "legacyVrack:apiovh:vrack/attach",
              "required": true
            }
          ],
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
          "responseType": "vrack.Task"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:legacyVrack/detach",
              "required": true
            }
          ],
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
          "responseType": "vrack.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vrack:apiovh:legacyVrack/get",
              "required": true
            }
          ],
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
          "responseType": "vrack.legacyVrack"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:ovhCloudConnect/get",
              "required": true
            }
          ],
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
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add an ovhCloudConnect to the vrack",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vrack:apiovh:ovhCloudConnect/attach",
              "required": true
            },
            {
              "name": "ovhCloudConnect:apiovh:vrack/attach",
              "required": true
            }
          ],
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
          "responseType": "vrack.Task"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:ovhCloudConnect/detach",
              "required": true
            }
          ],
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
          "responseType": "vrack.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vrack:apiovh:ovhCloudConnect/get",
              "required": true
            }
          ],
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
          "responseType": "vrack.ovhCloudConnect"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:serviceInfos/get",
              "required": true
            }
          ],
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
          "responseType": "services.NonExpiringService"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:task/get",
              "required": true
            }
          ],
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
          "responseType": "long[]"
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
          "iamActions": [
            {
              "name": "vrack:apiovh:task/get",
              "required": true
            }
          ],
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
          "responseType": "vrack.Task"
        }
      ],
      "path": "/vrack/{serviceName}/task/{taskId}"
    },
    {
      "description": "List the vrack.vrackServices objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "vrack for vrackServices",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vrack:apiovh:vrackServices/get",
              "required": true
            }
          ],
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Add a vrackServices to the vrack",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vrack:apiovh:vrackServices/attach",
              "required": true
            },
            {
              "name": "vrackServices:apiovh:vrack/attach",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "vrackServices service name",
              "fullType": "string",
              "name": "vrackServices",
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
          "responseType": "vrack.Task"
        }
      ],
      "path": "/vrack/{serviceName}/vrackServices"
    },
    {
      "description": "vrackServices in vrack",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Remove the vrackServices from the vrack",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "vrack:apiovh:vrackServices/detach",
              "required": true
            }
          ],
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
              "dataType": "string",
              "description": "vrackServices service name",
              "fullType": "string",
              "name": "vrackServices",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vrack:apiovh:vrackServices/get",
              "required": true
            }
          ],
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
              "dataType": "string",
              "description": "vrackServices service name",
              "fullType": "string",
              "name": "vrackServices",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.vrackServices"
        }
      ],
      "path": "/vrack/{serviceName}/vrackServices/{vrackServices}"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
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
    "complexType.UnitAndValue<double>": {
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
    "iam.ResourceMetadata": {
      "description": "IAM resource metadata embedded in services models",
      "id": "ResourceMetadata",
      "namespace": "iam",
      "properties": {
        "displayName": {
          "canBeNull": true,
          "description": "Resource display name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Unique identifier of the resource",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "tags": {
          "canBeNull": true,
          "description": "Resource tags. Tags that were internally computed are prefixed with ovh:",
          "fullType": "map[string]string",
          "readOnly": true,
          "required": false,
          "type": "map[string]string"
        },
        "urn": {
          "canBeNull": false,
          "description": "Unique resource name used in policies",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "iam.resource.TagFilter": {
      "description": "Resource tag filter",
      "id": "TagFilter",
      "namespace": "iam.resource",
      "properties": {
        "operator": {
          "canBeNull": true,
          "description": "Operator to use in order to filter on the value (defaults to 'EQ')",
          "fullType": "iam.resource.TagFilter.OperatorEnum",
          "readOnly": true,
          "required": false,
          "type": "iam.resource.TagFilter.OperatorEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "Value to use in order to filter tags",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "iam.resource.TagFilter.OperatorEnum": {
      "description": "Operator that can be used in order to filter resources tags",
      "enum": [
        "EQ"
      ],
      "enumType": "string",
      "id": "OperatorEnum",
      "namespace": "iam.resource.TagFilter"
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
        "ipv6",
        "legacyVrack",
        "ovhCloudConnect",
        "vrackServices"
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
        "ipv6": {
          "canBeNull": true,
          "description": "list of ipv6 blocks allowed to be connected to vrack",
          "readOnly": false,
          "required": false,
          "type": "ipv6Block[]"
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
        },
        "vrackServices": {
          "canBeNull": true,
          "description": "List of the vrackServices allowed to be connected to vrack",
          "readOnly": false,
          "required": false,
          "type": "string[]"
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
        "ipv6": {
          "canBeNull": true,
          "description": "List of ipv6 blocks allowed to be connected to this vRack",
          "fullType": "ipv6Block[]",
          "readOnly": true,
          "required": false,
          "type": "ipv6Block[]"
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
        },
        "vrackServices": {
          "canBeNull": true,
          "description": "List of the vrackServices allowed to be connected to this vRack",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
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
    "vrack.SlaacEnum": {
      "description": "Possible values for slaac",
      "enum": [
        "disabled",
        "enabled"
      ],
      "enumType": "string",
      "id": "SlaacEnum",
      "namespace": "vrack"
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
    "vrack.bridgedSubrange": {
      "description": "Bridged subrange within your IP v6 block",
      "id": "bridgedSubrange",
      "namespace": "vrack",
      "properties": {
        "bridgedSubrange": {
          "canBeNull": false,
          "description": "subrange bridged into your vrack",
          "fullType": "ipv6Block",
          "readOnly": true,
          "required": false,
          "type": "ipv6Block"
        },
        "gateway": {
          "canBeNull": false,
          "description": "Your gateway",
          "fullType": "ipv6",
          "readOnly": true,
          "required": false,
          "type": "ipv6"
        },
        "slaac": {
          "canBeNull": false,
          "description": "Slaac status",
          "fullType": "vrack.SlaacEnum",
          "readOnly": false,
          "required": false,
          "type": "vrack.SlaacEnum"
        }
      }
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
      "description": "VMware on OVHcloud vRack link",
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
    "vrack.ipv6": {
      "description": "IP v6 block in vrack",
      "id": "ipv6",
      "namespace": "vrack",
      "properties": {
        "ipv6": {
          "canBeNull": false,
          "description": "Your IP v6 block",
          "fullType": "ipv6Block",
          "readOnly": true,
          "required": false,
          "type": "ipv6Block"
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
    "vrack.routedSubrange": {
      "description": "Routed subranges within your IP v6 block",
      "id": "routedSubrange",
      "namespace": "vrack",
      "properties": {
        "nexthop": {
          "canBeNull": false,
          "description": "nexthop used as a gateway for your routed subrange",
          "fullType": "ipv6",
          "readOnly": true,
          "required": false,
          "type": "ipv6"
        },
        "routedSubrange": {
          "canBeNull": false,
          "description": "subrange routed into your vrack",
          "fullType": "ipv6Block",
          "readOnly": true,
          "required": false,
          "type": "ipv6Block"
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
    },
    "vrack.vrackServices": {
      "description": "vrackServices in vrack",
      "id": "vrackServices",
      "namespace": "vrack",
      "properties": {
        "vrack": {
          "canBeNull": false,
          "description": "vrack name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "vrackServices": {
          "canBeNull": false,
          "description": "vrackServices service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vrack.vrackWithIAM": {
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
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
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