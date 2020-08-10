import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/router.json

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "description": "Operations about the ROUTER service",
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
      "path": "/router"
    },
    {
      "description": "Router",
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "router.Router"
        }
      ],
      "path": "/router/{serviceName}"
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
              "description": "Commentary about your termination request",
              "fullType": "string",
              "name": "commentary",
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/router/{serviceName}/confirmTermination"
    },
    {
      "description": "List the router.Network objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Networks mounted on this Router",
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
          "responseType": "ip[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a network to your router",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Vlan tag from range 1 to 4094 or NULL for untagged traffic",
              "fullType": "long",
              "name": "vlanTag",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "Gateway IP / CIDR Netmask, (e.g. 192.168.1.254/24)",
              "fullType": "ip",
              "name": "ipNet",
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
          "responseType": "router.Task"
        }
      ],
      "path": "/router/{serviceName}/network"
    },
    {
      "description": "Network",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove this network from your router",
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
              "dataType": "ipInterface",
              "description": "Ip net",
              "fullType": "ipInterface",
              "name": "ipNet",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "router.Task"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipInterface",
              "description": "Ip net",
              "fullType": "ipInterface",
              "name": "ipNet",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "router.Network"
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
              "dataType": "router.Network",
              "description": "Request Body",
              "fullType": "router.Network",
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
              "dataType": "ipInterface",
              "description": "Ip net",
              "fullType": "ipInterface",
              "name": "ipNet",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/router/{serviceName}/network/{ipNet}"
    },
    {
      "description": "List the router.PrivateLink objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Private links set up on this router",
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new Private Link to your Router service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "serviceName of the router service you want to create a private link with",
              "fullType": "string",
              "name": "peerServiceName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Your memory-friendly name for this private link",
              "fullType": "string",
              "name": "name",
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
          "responseType": "string"
        }
      ],
      "path": "/router/{serviceName}/privateLink"
    },
    {
      "description": "Private Link to another service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove an existing Private Link from your Router service",
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
              "dataType": "string",
              "description": "Peer service name",
              "fullType": "string",
              "name": "peerServiceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "router.Task"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Peer service name",
              "fullType": "string",
              "name": "peerServiceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "router.PrivateLink"
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
              "dataType": "router.PrivateLink",
              "description": "Request Body",
              "fullType": "router.PrivateLink",
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
              "dataType": "string",
              "description": "Peer service name",
              "fullType": "string",
              "name": "peerServiceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/router/{serviceName}/privateLink/{peerServiceName}"
    },
    {
      "description": "Received Private Link requests",
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Peer service name",
              "fullType": "string",
              "name": "peerServiceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "router.PrivateLinkRequest"
        }
      ],
      "path": "/router/{serviceName}/privateLink/{peerServiceName}/request"
    },
    {
      "description": "manage operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Accept, reject or cancel a pending request",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "router.PrivLinkReqActionEnum",
              "description": "",
              "fullType": "router.PrivLinkReqActionEnum",
              "name": "action",
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
              "dataType": "string",
              "description": "Peer service name",
              "fullType": "string",
              "name": "peerServiceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/router/{serviceName}/privateLink/{peerServiceName}/request/manage"
    },
    {
      "description": "List the router.PrivateLinkRoute objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Routes set up in a Private Link",
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
              "dataType": "string",
              "description": "Peer service name",
              "fullType": "string",
              "name": "peerServiceName",
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
          "description": "Add a new outgoing route to your router",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "Network to be routed outside your router (CIDR format, e.g. 10.1.0.0./16",
              "fullType": "ipBlock",
              "name": "network",
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
              "dataType": "string",
              "description": "Peer service name",
              "fullType": "string",
              "name": "peerServiceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "router.Task"
        }
      ],
      "path": "/router/{serviceName}/privateLink/{peerServiceName}/route"
    },
    {
      "description": "Outgoing routes configured inside a Private Link",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an existing route from your router",
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
              "dataType": "string",
              "description": "Peer service name",
              "fullType": "string",
              "name": "peerServiceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "Network",
              "fullType": "ipBlock",
              "name": "network",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "router.Task"
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
              "description": "Peer service name",
              "fullType": "string",
              "name": "peerServiceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "Network",
              "fullType": "ipBlock",
              "name": "network",
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
          "responseType": "router.PrivateLinkRoute"
        }
      ],
      "path": "/router/{serviceName}/privateLink/{peerServiceName}/route/{network}"
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
              "description": "Service name",
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
              "description": "Request Body",
              "fullType": "services.Service",
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
          "responseType": "void"
        }
      ],
      "path": "/router/{serviceName}/serviceInfos"
    },
    {
      "description": "List the router.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Tasks for this Router",
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
              "dataType": "router.TaskFunctionEnum",
              "description": "Filter the value of function property (=)",
              "fullType": "router.TaskFunctionEnum",
              "name": "function",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "router.TaskStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "router.TaskStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/router/{serviceName}/task"
    },
    {
      "description": "Task",
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "router.Task"
        }
      ],
      "path": "/router/{serviceName}/task/{id}"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/router/{serviceName}/terminate"
    },
    {
      "description": "List the router.Vpn objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "VPN associated with this Router",
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
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a VPN to your router",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "Your PSK key",
              "fullType": "password",
              "name": "psk",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "Client's private network",
              "fullType": "ip",
              "name": "clientPrivNet",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "IP you will be connecting from / NULL (allow all)",
              "fullType": "ip",
              "name": "clientIp",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ip",
              "description": "Server's private network",
              "fullType": "ip",
              "name": "serverPrivNet",
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
          "responseType": "router.Vpn"
        }
      ],
      "path": "/router/{serviceName}/vpn"
    },
    {
      "description": "Virtual Private Network",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a VPN from your router",
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
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "router.Task"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "router.Vpn"
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
              "dataType": "router.Vpn",
              "description": "Request Body",
              "fullType": "router.Vpn",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
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
          "responseType": "void"
        }
      ],
      "path": "/router/{serviceName}/vpn/{id}"
    },
    {
      "description": "setPsk operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change your VPN's PSK",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "Your PSK key",
              "fullType": "password",
              "name": "psk",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
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
          "responseType": "router.Task"
        }
      ],
      "path": "/router/{serviceName}/vpn/{id}/setPsk"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "router.IpStatusEnum": {
      "description": "All states this object can be in",
      "enum": [
        "blacklisted",
        "deleted",
        "free",
        "installing",
        "ok",
        "quarantined",
        "removing",
        "suspended"
      ],
      "enumType": "string",
      "id": "IpStatusEnum",
      "namespace": "router"
    },
    "router.Network": {
      "description": "Network",
      "id": "Network",
      "namespace": "router",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "description": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "ipNet": {
          "canBeNull": false,
          "description": "Gateway IP / CIDR Netmask",
          "fullType": "ip",
          "readOnly": true,
          "required": true,
          "type": "ip"
        },
        "status": {
          "canBeNull": false,
          "fullType": "router.IpStatusEnum",
          "readOnly": true,
          "required": true,
          "type": "router.IpStatusEnum"
        },
        "vlanTag": {
          "canBeNull": true,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "router.PrivLinkReqActionEnum": {
      "description": "Action to be taken against the Private Link request",
      "enum": [
        "accept",
        "cancel",
        "reject"
      ],
      "enumType": "string",
      "id": "PrivLinkReqActionEnum",
      "namespace": "router"
    },
    "router.PrivLinkReqStatusEnum": {
      "description": "Request status of this private link (all links have to be accepted before being created)",
      "enum": [
        "accepted",
        "cancelled",
        "error",
        "pending",
        "rejected"
      ],
      "enumType": "string",
      "id": "PrivLinkReqStatusEnum",
      "namespace": "router"
    },
    "router.PrivateLink": {
      "description": "Private Link to another service",
      "id": "PrivateLink",
      "namespace": "router",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Your memory-friendly name of this private link",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "peerServiceName": {
          "canBeNull": false,
          "description": "Service name of the other side of this link",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "fullType": "router.StatusEnum",
          "readOnly": true,
          "required": true,
          "type": "router.StatusEnum"
        }
      }
    },
    "router.PrivateLinkRequest": {
      "description": "Received Private Link requests",
      "id": "PrivateLinkRequest",
      "namespace": "router",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "fullType": "router.PrivLinkReqStatusEnum",
          "readOnly": true,
          "required": true,
          "type": "router.PrivLinkReqStatusEnum"
        }
      }
    },
    "router.PrivateLinkRoute": {
      "description": "Outgoing routes configured inside a Private Link",
      "id": "PrivateLinkRoute",
      "namespace": "router",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "network": {
          "canBeNull": false,
          "description": "Network allowed to be routed outside",
          "fullType": "ipBlock",
          "readOnly": true,
          "required": true,
          "type": "ipBlock"
        },
        "status": {
          "canBeNull": false,
          "fullType": "router.StatusEnum",
          "readOnly": true,
          "required": true,
          "type": "router.StatusEnum"
        }
      }
    },
    "router.Router": {
      "description": "Router",
      "id": "Router",
      "namespace": "router",
      "properties": {
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "service": {
          "canBeNull": false,
          "description": "The internal name of your Router offer",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "fullType": "router.StatusEnum",
          "readOnly": true,
          "required": true,
          "type": "router.StatusEnum"
        }
      }
    },
    "router.StatusEnum": {
      "description": "All states this object can be in",
      "enum": [
        "creating",
        "error",
        "off",
        "on",
        "removing",
        "suspended"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "router"
    },
    "router.Task": {
      "description": "Task",
      "id": "Task",
      "namespace": "router",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "finishDate": {
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "fullType": "router.TaskFunctionEnum",
          "readOnly": true,
          "required": true,
          "type": "router.TaskFunctionEnum"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "fullType": "router.TaskStatusEnum",
          "readOnly": true,
          "required": true,
          "type": "router.TaskStatusEnum"
        }
      }
    },
    "router.TaskFunctionEnum": {
      "description": "All executable types of tasks",
      "enum": [
        "addDnat",
        "addDnatMaster",
        "addNetwork",
        "addNetworkMaster",
        "addPrivateLink",
        "addPrivateLinkMaster",
        "addPrivateLinkRoute",
        "addPrivateLinkRouteMaster",
        "addSnat",
        "addSnatMaster",
        "delDnat",
        "delDnatMaster",
        "delNetwork",
        "delNetworkMaster",
        "delPrivateLink",
        "delPrivateLinkMaster",
        "delPrivateLinkRoute",
        "delPrivateLinkRouteMaster",
        "delSnat",
        "delSnatMaster",
        "vpnCreation",
        "vpnDeletion",
        "vpnSetConfig",
        "vpnSetConfigMaster",
        "vpnSetSecrets",
        "vpnSetSecretsMaster"
      ],
      "enumType": "string",
      "id": "TaskFunctionEnum",
      "namespace": "router"
    },
    "router.TaskStatusEnum": {
      "description": "All states a Task can be in",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "router"
    },
    "router.Vpn": {
      "description": "Virtual Private Network",
      "id": "Vpn",
      "namespace": "router",
      "properties": {
        "clientIp": {
          "canBeNull": true,
          "description": "IP you will be connecting from / NULL (allow all)",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "clientPrivNet": {
          "canBeNull": false,
          "description": "Client's private network",
          "fullType": "ip",
          "readOnly": false,
          "required": true,
          "type": "ip"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "serverIp": {
          "canBeNull": false,
          "description": "Your VPN server IP",
          "fullType": "ip",
          "readOnly": true,
          "required": true,
          "type": "ip"
        },
        "serverPrivNet": {
          "canBeNull": false,
          "description": "Server's private network",
          "fullType": "ip",
          "readOnly": false,
          "required": true,
          "type": "ip"
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
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "The service will be deleted at expiration",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "forced": {
          "canBeNull": false,
          "description": "The service forced to be renewed",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "manualPayment": {
          "canBeNull": true,
          "description": "The service needs to be manually renewed and paid",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "period": {
          "canBeNull": true,
          "description": "period of renew in month",
          "fullType": "long",
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
          "required": true,
          "type": "boolean"
        },
        "contactAdmin": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.AccountId:string"
        },
        "contactBilling": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.AccountId:string"
        },
        "contactTech": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.AccountId:string"
        },
        "creation": {
          "canBeNull": false,
          "fullType": "date",
          "readOnly": true,
          "required": true,
          "type": "date"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
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
          "required": true,
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
          "required": true,
          "type": "service.RenewalTypeEnum"
        },
        "serviceId": {
          "canBeNull": false,
          "fullType": "coreTypes.ServiceId:long",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.ServiceId:long"
        },
        "status": {
          "canBeNull": false,
          "fullType": "service.StateEnum",
          "readOnly": true,
          "required": true,
          "type": "service.StateEnum"
        }
      }
    }
  },
  "resourcePath": "/router"
}