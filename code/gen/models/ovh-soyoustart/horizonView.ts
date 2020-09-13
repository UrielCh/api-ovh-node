import {Schema} from '../../src/schema';

// imported from https://eu.api.soyoustart.com:443/1.0/horizonView.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the HORIZONVIEW service",
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
      "path": "/horizonView"
    },
    {
      "description": "Cloud Desktop Infrastructure Datacenter",
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
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Datacenter"
        }
      ],
      "path": "/horizonView/{serviceName}"
    },
    {
      "description": "List the horizonView.Pool objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Pool associated with this Datacenter",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
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
          "description": "Add new access point to create a new network",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "horizonView.PoolType",
              "description": "The type of pool you want to deploy. ",
              "fullType": "horizonView.PoolType",
              "name": "poolType",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "You can customize your pool by choosing the private network (Ex : 10.0.0.0/16)",
              "fullType": "ipBlock",
              "name": "privateBlock",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "You can customize your pool by choosing its private Vlan ID. (smaller than 4095) ",
              "fullType": "long",
              "name": "privateVlan",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ip",
              "description": "You need to use a public Ip if you want to deploy a public pool. ",
              "fullType": "ip",
              "name": "vrouterPoolPublicIp",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task[]"
        }
      ],
      "path": "/horizonView/{serviceName}/accessPoint"
    },
    {
      "description": "All informations about access point",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this access point ",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Pool id",
              "fullType": "long",
              "name": "accessPointId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task[]"
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
              "dataType": "long",
              "description": "Pool id",
              "fullType": "long",
              "name": "accessPointId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Pool"
        }
      ],
      "path": "/horizonView/{serviceName}/accessPoint/{accessPointId}"
    },
    {
      "description": "changeSessionTimeout operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Manage your session Timeout on Unified Access Gateway",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Timeout (in hour)",
              "fullType": "long",
              "name": "expiration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "horizonView.AccessPointTypeEnum",
              "description": "Update timeout session on a single Unified Access Gateway (only for hybrid Pool)",
              "fullType": "horizonView.AccessPointTypeEnum",
              "name": "onSingleAP",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Pool id",
              "fullType": "long",
              "name": "accessPointId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task"
        }
      ],
      "path": "/horizonView/{serviceName}/accessPoint/{accessPointId}/changeSessionTimeout"
    },
    {
      "description": "List the horizonView.CustomerNetworkPool objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "You can reach from the Desktops your private network",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Pool id",
              "fullType": "long",
              "name": "accessPointId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
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
          "description": "Add a new network ",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "The private network you want to reach.",
              "fullType": "ipBlock",
              "name": "network",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Pool id",
              "fullType": "long",
              "name": "accessPointId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task[]"
        }
      ],
      "path": "/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork"
    },
    {
      "description": "You can reach from your virtual desktops, your customer network ",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this Customer Network",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Pool id",
              "fullType": "long",
              "name": "accessPointId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Customer Network id",
              "fullType": "long",
              "name": "customerNetworkId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task[]"
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
              "dataType": "long",
              "description": "Pool id",
              "fullType": "long",
              "name": "accessPointId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Customer Network id",
              "fullType": "long",
              "name": "customerNetworkId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.CustomerNetworkPool"
        }
      ],
      "path": "/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}"
    },
    {
      "description": "disableTwoFA operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable two factor authentication on your pool",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Pool id",
              "fullType": "long",
              "name": "accessPointId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task"
        }
      ],
      "path": "/horizonView/{serviceName}/accessPoint/{accessPointId}/disableTwoFA"
    },
    {
      "description": "disableWindowsUsernameOption operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable windows Username option on Unified Access Gateway",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "horizonView.AccessPointTypeEnum",
              "description": "Disable windows Username option on a single Unified Access Gateway (only for hybrid Pool)",
              "fullType": "horizonView.AccessPointTypeEnum",
              "name": "onSingleAP",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Pool id",
              "fullType": "long",
              "name": "accessPointId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task"
        }
      ],
      "path": "/horizonView/{serviceName}/accessPoint/{accessPointId}/disableWindowsUsernameOption"
    },
    {
      "description": "enableTwoFA operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Enable two factor authentication on your pool",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "horizonView.AccessPointTypeEnum",
              "description": "Enable the 2FA on a single Access Point (only for hybrid Pool)",
              "fullType": "horizonView.AccessPointTypeEnum",
              "name": "onSingleAP",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipv4",
              "description": "The server radius IP",
              "fullType": "ipv4",
              "name": "radiusIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "password",
              "description": "The secret password for the two factor authentication",
              "fullType": "password",
              "name": "secret",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Pool id",
              "fullType": "long",
              "name": "accessPointId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task"
        }
      ],
      "path": "/horizonView/{serviceName}/accessPoint/{accessPointId}/enableTwoFA"
    },
    {
      "description": "enableWindowsUsernameOption operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Enable windows Username option on Unified Access Gateway",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "horizonView.AccessPointTypeEnum",
              "description": "Enable windows Username option on a single Unified Access Gateway (only for hybrid Pool)",
              "fullType": "horizonView.AccessPointTypeEnum",
              "name": "onSingleAP",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Pool id",
              "fullType": "long",
              "name": "accessPointId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task"
        }
      ],
      "path": "/horizonView/{serviceName}/accessPoint/{accessPointId}/enableWindowsUsernameOption"
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
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/horizonView/{serviceName}/confirmTermination"
    },
    {
      "description": "List the horizonView.CustomerNetwork objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "You can reach from the Desktops your private network",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
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
          "description": "Add a new network ",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name your network",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "The private network you want to reach.",
              "fullType": "ipBlock",
              "name": "network",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task[]"
        }
      ],
      "path": "/horizonView/{serviceName}/customerNetwork"
    },
    {
      "description": "You can reach from your virtual desktops, your customer network ",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this Customer Network",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Customer Network id",
              "fullType": "long",
              "name": "customerNetworkId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task[]"
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
              "dataType": "long",
              "description": "Customer Network id",
              "fullType": "long",
              "name": "customerNetworkId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.CustomerNetwork"
        }
      ],
      "path": "/horizonView/{serviceName}/customerNetwork/{customerNetworkId}"
    },
    {
      "description": "Horizon View as a Service",
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
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.DedicatedHorizon"
        }
      ],
      "path": "/horizonView/{serviceName}/dedicatedHorizon"
    },
    {
      "description": "List the horizonView.CustomerUser objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Account to access to your pool",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
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
          "description": "Create a new customer user ",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email for your new user in Active diRectory.",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "password",
              "description": "New password for this Horizon View user. It must fits your HaaS password policy. If this field is empty, a random password will be generated and sent to your  email.",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Username for your new user in Active Directory.",
              "fullType": "string",
              "name": "username",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task[]"
        }
      ],
      "path": "/horizonView/{serviceName}/dedicatedHorizon/customerUser"
    },
    {
      "description": "Horizon As A Service Customer  User",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this Customer User",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Customer username of your HaaS User",
              "fullType": "string",
              "name": "username",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task[]"
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
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Customer username of your HaaS User",
              "fullType": "string",
              "name": "username",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.CustomerUser"
        }
      ],
      "path": "/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}"
    },
    {
      "description": "changePassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change Horizon View Customer  user password",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "New password for this Horizon View user. It must fits your HaaS password policy. If this field is empty, a random password will be generated and sent to you by email.",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Customer username of your HaaS User",
              "fullType": "string",
              "name": "username",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task"
        }
      ],
      "path": "/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}/changePassword"
    },
    {
      "description": "disableStorageAccelerator operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable the View Storage Accelerator option on VCenter",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task"
        }
      ],
      "path": "/horizonView/{serviceName}/dedicatedHorizon/disableStorageAccelerator"
    },
    {
      "description": "enableStorageAccelerator operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Enable the View Storage Accelerator option on VCenter",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task"
        }
      ],
      "path": "/horizonView/{serviceName}/dedicatedHorizon/enableStorageAccelerator"
    },
    {
      "description": "List the horizonView.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Tasks associated with this Dedicated Horizon",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "horizonView.TaskStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "horizonView.TaskStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/horizonView/{serviceName}/dedicatedHorizon/task"
    },
    {
      "description": "Operation on a Horizon View component",
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
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task"
        }
      ],
      "path": "/horizonView/{serviceName}/dedicatedHorizon/task/{taskId}"
    },
    {
      "description": "Horizon As A Service User",
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
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.User"
        }
      ],
      "path": "/horizonView/{serviceName}/dedicatedHorizon/user"
    },
    {
      "description": "changePassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change Horizon View user password",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "New password for this Horizon View user. It must fits your HaaS password policy. If this field is empty, a random password will be generated and sent to you by email.",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task"
        }
      ],
      "path": "/horizonView/{serviceName}/dedicatedHorizon/user/changePassword"
    },
    {
      "description": "changeProperties operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change horizon view user properties",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Change email of your admin user",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task"
        }
      ],
      "path": "/horizonView/{serviceName}/dedicatedHorizon/user/changeProperties"
    },
    {
      "description": "List the horizonView.DomainTrust objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all Active Directories linked to your CDI Active Directory",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
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
          "description": "Link your Active Directory to your CDI Active Directory",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "IP of your Active Directory",
              "fullType": "ip",
              "name": "activeDirectoryIP",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "IP of your first DNS",
              "fullType": "ip",
              "name": "dns1",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ip",
              "description": "IP of your second DNS",
              "fullType": "ip",
              "name": "dns2",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain of your active directory (for example domain.local)",
              "fullType": "string",
              "name": "domain",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task[]"
        }
      ],
      "path": "/horizonView/{serviceName}/domainTrust"
    },
    {
      "description": "List all Active Directories linked to your CDI Active Directory",
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
              "dataType": "long",
              "description": "Domain trust id",
              "fullType": "long",
              "name": "domainTrustId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.DomainTrust"
        }
      ],
      "path": "/horizonView/{serviceName}/domainTrust/{domainTrustId}"
    },
    {
      "description": "addChildDomain operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a child domain for this domain.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "IP of your Active Directory",
              "fullType": "ipv4",
              "name": "activeDirectoryIP",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your private domain",
              "fullType": "string",
              "name": "domain",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "password",
              "description": "Shared passphrase to create the Active Directory trust",
              "fullType": "password",
              "name": "passphrase",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "password",
              "description": "Password of the horizonUI service account",
              "fullType": "password",
              "name": "serviceAccountPassword",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Domain trust id",
              "fullType": "long",
              "name": "domainTrustId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task"
        }
      ],
      "path": "/horizonView/{serviceName}/domainTrust/{domainTrustId}/addChildDomain"
    },
    {
      "description": "addDomainController operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a Domain Controller for this domain.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your Domain Controller (example : domain.local)",
              "fullType": "string",
              "name": "domain",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "IP of your Domain Controller",
              "fullType": "ip",
              "name": "domainControllerIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Domain trust id",
              "fullType": "long",
              "name": "domainTrustId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task"
        }
      ],
      "path": "/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainController"
    },
    {
      "description": "addDomainUserOnComposer operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a domain user to add your desktop in your Active Directory",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your Domain (example : domain.local)",
              "fullType": "string",
              "name": "domain",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "password",
              "description": "Password of the user",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the User who is going to add the Desktop in your Active Directory",
              "fullType": "string",
              "name": "username",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Domain trust id",
              "fullType": "long",
              "name": "domainTrustId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task"
        }
      ],
      "path": "/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainUserOnComposer"
    },
    {
      "description": "createTrust operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change Horizon View user password",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "Shared passphrase to create the Active Directory trust",
              "fullType": "password",
              "name": "passphrase",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "password",
              "description": "Password of the horizonUI service account",
              "fullType": "password",
              "name": "serviceAccountPassword",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Domain trust id",
              "fullType": "long",
              "name": "domainTrustId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "horizonView.Task"
        }
      ],
      "path": "/horizonView/{serviceName}/domainTrust/{domainTrustId}/createTrust"
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
              "description": "Domain of the service",
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
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/horizonView/{serviceName}/serviceInfos"
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
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/horizonView/{serviceName}/terminate"
    }
  ],
  "basePath": "https://eu.api.soyoustart.com/1.0",
  "models": {
    "horizonView.AccessPointTypeEnum": {
      "description": "Access Point type the customer can deploy",
      "enum": [
        "privateAccessPoint",
        "publicAccessPoint"
      ],
      "enumType": "string",
      "id": "AccessPointTypeEnum",
      "namespace": "horizonView"
    },
    "horizonView.CustomerNetwork": {
      "description": "You can reach from your virtual desktops, your customer network ",
      "id": "CustomerNetwork",
      "namespace": "horizonView",
      "properties": {
        "customerNetworkId": {
          "canBeNull": false,
          "description": "Customer Network id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of your network",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "network": {
          "canBeNull": false,
          "description": "Customer network",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "horizonView.CustomerNetworkPool": {
      "description": "You can reach from your virtual desktops, your customer network ",
      "id": "CustomerNetworkPool",
      "namespace": "horizonView",
      "properties": {
        "customerNetworkId": {
          "canBeNull": false,
          "description": "Customer Network id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of your network",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "network": {
          "canBeNull": false,
          "description": "Customer network",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "horizonView.CustomerUser": {
      "description": "Horizon As A Service Customer  User",
      "id": "CustomerUser",
      "namespace": "horizonView",
      "properties": {
        "email": {
          "canBeNull": true,
          "description": "Email of your HaaS User",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Customer id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "username": {
          "canBeNull": false,
          "description": "Customer username of your HaaS User",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "horizonView.Datacenter": {
      "description": "Cloud Desktop Infrastructure Datacenter",
      "id": "Datacenter",
      "namespace": "horizonView",
      "properties": {
        "activeDirectoryIP": {
          "canBeNull": false,
          "description": "IP of the VDI Active Directory",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "adminDomain": {
          "canBeNull": false,
          "description": "Domain of the admin infrastructure",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "adminNetworkNextHop": {
          "canBeNull": false,
          "description": "Next hop to contact the private admin network",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "adminPrivateNetwork": {
          "canBeNull": false,
          "description": "Private network of the admin infrastructure",
          "fullType": "ipBlock",
          "readOnly": true,
          "required": false,
          "type": "ipBlock"
        },
        "customerIntercoIP": {
          "canBeNull": false,
          "description": "Customer interco IP allows you to communicate between your private infrastructure and your CDI infrastructure throw the vrack.",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "customerIntercoMask": {
          "canBeNull": false,
          "description": "Customer interco netmask allows you to communicate between your private infrastructure and your CDI infrastructure throw the vrack.",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "customerIntercoVlanId": {
          "canBeNull": false,
          "description": "Customer interco vlan allows you to communicate between your private infrastructure and your CDI infrastructure throw the vrack.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "datacenterId": {
          "canBeNull": false,
          "description": "Datacenter ids",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the datacenter",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Domain of your Horizon",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "horizonView.DedicatedHorizon": {
      "description": "Horizon View as a Service",
      "id": "DedicatedHorizon",
      "namespace": "horizonView",
      "properties": {
        "masterZone": {
          "canBeNull": false,
          "description": "The location of your administration servers in our datacenter",
          "fullType": "horizonView.Zone",
          "readOnly": true,
          "required": false,
          "type": "horizonView.Zone"
        },
        "privateCloudName": {
          "canBeNull": false,
          "description": "Your Horizon Private Cloud ",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "privateCloudZone": {
          "canBeNull": false,
          "description": "The location of your datacenter",
          "fullType": "horizonView.Zone",
          "readOnly": true,
          "required": false,
          "type": "horizonView.Zone"
        },
        "publicUrl": {
          "canBeNull": false,
          "description": "Url of your Dedicated Horizon",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of your Dedicated Horizon",
          "fullType": "horizonView.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "horizonView.StateEnum"
        },
        "storageAccelerator": {
          "canBeNull": false,
          "description": "View Storage Accelerator for Vcenter",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "version": {
          "canBeNull": false,
          "description": "Version of your Dedicated Horizon",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "horizonView.DomainTrust": {
      "description": "List all Active Directories linked to your CDI Active Directory",
      "id": "DomainTrust",
      "namespace": "horizonView",
      "properties": {
        "activeDirectoryIP": {
          "canBeNull": false,
          "description": "IP of your Active Directory",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "dns1": {
          "canBeNull": true,
          "description": "IP of your first DNS",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "dns2": {
          "canBeNull": true,
          "description": "IP of your second DNS",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "domain": {
          "canBeNull": false,
          "description": "Name of your private domain",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "domainTrustId": {
          "canBeNull": false,
          "description": "Domain trust id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "horizonView.Pool": {
      "description": "All informations about access point",
      "id": "Pool",
      "namespace": "horizonView",
      "properties": {
        "accessPointId": {
          "canBeNull": false,
          "description": "Pool id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "dhcpNetmask": {
          "canBeNull": false,
          "description": "DHCP netmask in this port group",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "dhcpNetwork": {
          "canBeNull": false,
          "description": "DHCP network in this port group",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "externalUrl": {
          "canBeNull": false,
          "description": "External url of your access point",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "intercoNextHop": {
          "canBeNull": true,
          "description": "Next hop IP to reach virtual desktops network for public Access Point",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "intercoPrivateNextHop": {
          "canBeNull": true,
          "description": "Next hop IP to reach virtual desktops network for private Access Point",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "portGroupId": {
          "canBeNull": false,
          "description": "Port group id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Network state",
          "fullType": "horizonView.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "horizonView.StateEnum"
        },
        "twoFA": {
          "canBeNull": false,
          "description": "Two factor authentication",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "type": {
          "canBeNull": false,
          "description": "Pool type",
          "fullType": "horizonView.PoolType",
          "readOnly": true,
          "required": false,
          "type": "horizonView.PoolType"
        }
      }
    },
    "horizonView.PoolType": {
      "description": "Pool type the customer can deploy",
      "enum": [
        "hybridPool",
        "privatePool",
        "publicPool"
      ],
      "enumType": "string",
      "id": "PoolType",
      "namespace": "horizonView"
    },
    "horizonView.StateEnum": {
      "description": "All states a dedicated horizon  can be in",
      "enum": [
        "available",
        "creating",
        "delivered",
        "disabled",
        "error",
        "reserved"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "horizonView"
    },
    "horizonView.Task": {
      "description": "Operation on a Horizon View component",
      "id": "Task",
      "namespace": "horizonView",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Current progress description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lastModificationDate": {
          "canBeNull": true,
          "description": "Task last modification date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Task name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "progress": {
          "canBeNull": false,
          "description": "Current progress",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "Current Task state",
          "fullType": "horizonView.TaskStateEnum",
          "readOnly": true,
          "required": false,
          "type": "horizonView.TaskStateEnum"
        },
        "taskId": {
          "canBeNull": false,
          "description": "Task id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "horizonView.TaskStateEnum": {
      "description": "All states a Horizon View  Task can be in",
      "enum": [
        "canceled",
        "doing",
        "done",
        "error",
        "fixing",
        "toCancel",
        "toCreate",
        "todo",
        "unknown",
        "waitingForChilds",
        "waitingTodo"
      ],
      "enumType": "string",
      "id": "TaskStateEnum",
      "namespace": "horizonView"
    },
    "horizonView.User": {
      "description": "Horizon As A Service User",
      "id": "User",
      "namespace": "horizonView",
      "properties": {
        "username": {
          "canBeNull": false,
          "description": "Username of your HaaS User",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "horizonView.Zone": {
      "description": "All zones a Cloud Desktop Infrastructure can be in",
      "enum": [
        "Beauharnois",
        "Roubaix",
        "Strasbourg"
      ],
      "enumType": "string",
      "id": "Zone",
      "namespace": "horizonView"
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
  "resourcePath": "/horizonView"
}