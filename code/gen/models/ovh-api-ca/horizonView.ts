import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/horizonView",
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
      "description": "Operations about the HORIZONVIEW service"
    },
    {
      "path": "/horizonView/{serviceName}",
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
          "responseType": "horizonView.Datacenter",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Cloud Desktop Infrastructure Datacenter"
    },
    {
      "path": "/horizonView/{serviceName}/accessPoint",
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
          "description": "Pool associated with this Datacenter"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "vrouterPoolPublicIp",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": false,
              "description": "You need to use a public Ip if you want to deploy a public pool. "
            },
            {
              "name": "poolType",
              "dataType": "horizonView.PoolType",
              "paramType": "body",
              "fullType": "horizonView.PoolType",
              "required": true,
              "description": "The type of pool you want to deploy. "
            },
            {
              "name": "privateBlock",
              "dataType": "ipBlock",
              "paramType": "body",
              "fullType": "ipBlock",
              "required": false,
              "description": "You can customize your pool by choosing the private network (Ex : 10.0.0.0/16)"
            },
            {
              "name": "privateVlan",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "You can customize your pool by choosing its private Vlan ID. (smaller than 4095) "
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
          "responseType": "horizonView.Task[]",
          "noAuthentication": false,
          "description": "Add new access point to create a new network"
        }
      ],
      "description": "List the horizonView.Pool objects"
    },
    {
      "path": "/horizonView/{serviceName}/accessPoint/{accessPointId}",
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
              "name": "accessPointId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Access point ID"
            }
          ],
          "responseType": "horizonView.Task[]",
          "noAuthentication": false,
          "description": "Delete this access point "
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
              "name": "accessPointId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Access point ID"
            }
          ],
          "responseType": "horizonView.Pool",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "All informations about access point"
    },
    {
      "path": "/horizonView/{serviceName}/accessPoint/{accessPointId}/changeSessionTimeout",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "expiration",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Timeout (in hour)"
            },
            {
              "name": "onSingleAP",
              "dataType": "horizonView.AccessPointTypeEnum",
              "paramType": "body",
              "fullType": "horizonView.AccessPointTypeEnum",
              "required": false,
              "description": "Update timeout session on a single Unified Access Gateway (only for hybrid Pool)"
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
              "name": "accessPointId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Access point ID"
            }
          ],
          "responseType": "horizonView.Task",
          "noAuthentication": false,
          "description": "Manage your session Timeout on Unified Access Gateway"
        }
      ],
      "description": "changeSessionTimeout operations"
    },
    {
      "path": "/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork",
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
              "name": "accessPointId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Access point ID"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "You can reach from the Desktops your private network"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "network",
              "dataType": "ipBlock",
              "paramType": "body",
              "fullType": "ipBlock",
              "required": true,
              "description": "The private network you want to reach."
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
              "name": "accessPointId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Access point ID"
            }
          ],
          "responseType": "horizonView.Task[]",
          "noAuthentication": false,
          "description": "Add a new network "
        }
      ],
      "description": "List the horizonView.CustomerNetworkPool objects"
    },
    {
      "path": "/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}",
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
              "name": "accessPointId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Access point ID"
            },
            {
              "name": "customerNetworkId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Customer network ID"
            }
          ],
          "responseType": "horizonView.Task[]",
          "noAuthentication": false,
          "description": "Delete this Customer Network"
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
              "name": "accessPointId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Access point ID"
            },
            {
              "name": "customerNetworkId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Customer network ID"
            }
          ],
          "responseType": "horizonView.CustomerNetworkPool",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "You can reach from your virtual desktops, your customer network "
    },
    {
      "path": "/horizonView/{serviceName}/accessPoint/{accessPointId}/disableTwoFA",
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
              "name": "accessPointId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Access point ID"
            }
          ],
          "responseType": "horizonView.Task",
          "noAuthentication": false,
          "description": "Disable two factor authentication on your pool"
        }
      ],
      "description": "disableTwoFA operations"
    },
    {
      "path": "/horizonView/{serviceName}/accessPoint/{accessPointId}/disableWindowsUsernameOption",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "onSingleAP",
              "dataType": "horizonView.AccessPointTypeEnum",
              "paramType": "body",
              "fullType": "horizonView.AccessPointTypeEnum",
              "required": false,
              "description": "Disable windows Username option on a single Unified Access Gateway (only for hybrid Pool)"
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
              "name": "accessPointId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Access point ID"
            }
          ],
          "responseType": "horizonView.Task",
          "noAuthentication": false,
          "description": "Disable windows Username option on Unified Access Gateway"
        }
      ],
      "description": "disableWindowsUsernameOption operations"
    },
    {
      "path": "/horizonView/{serviceName}/accessPoint/{accessPointId}/enableTwoFA",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "radiusIp",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "The server radius IP"
            },
            {
              "name": "secret",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "The secret password for the two factor authentication"
            },
            {
              "name": "onSingleAP",
              "dataType": "horizonView.AccessPointTypeEnum",
              "paramType": "body",
              "fullType": "horizonView.AccessPointTypeEnum",
              "required": false,
              "description": "Enable the 2FA on a single Access Point (only for hybrid Pool)"
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
              "name": "accessPointId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Access point ID"
            }
          ],
          "responseType": "horizonView.Task",
          "noAuthentication": false,
          "description": "Enable two factor authentication on your pool"
        }
      ],
      "description": "enableTwoFA operations"
    },
    {
      "path": "/horizonView/{serviceName}/accessPoint/{accessPointId}/enableWindowsUsernameOption",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "onSingleAP",
              "dataType": "horizonView.AccessPointTypeEnum",
              "paramType": "body",
              "fullType": "horizonView.AccessPointTypeEnum",
              "required": false,
              "description": "Enable windows Username option on a single Unified Access Gateway (only for hybrid Pool)"
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
              "name": "accessPointId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Access point ID"
            }
          ],
          "responseType": "horizonView.Task",
          "noAuthentication": false,
          "description": "Enable windows Username option on Unified Access Gateway"
        }
      ],
      "description": "enableWindowsUsernameOption operations"
    },
    {
      "path": "/horizonView/{serviceName}/confirmTermination",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "futureUse",
              "dataType": "service.TerminationFutureUseEnum",
              "paramType": "body",
              "fullType": "service.TerminationFutureUseEnum",
              "required": false,
              "description": "What next after your termination request"
            },
            {
              "name": "reason",
              "dataType": "service.TerminationReasonEnum",
              "paramType": "body",
              "fullType": "service.TerminationReasonEnum",
              "required": false,
              "description": "Reason of your termination request"
            },
            {
              "name": "commentary",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Commentary about your termination request"
            },
            {
              "name": "token",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The termination token sent by mail to the admin contact"
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Confirm termination of your service"
        }
      ],
      "description": "Confirm termination of your service"
    },
    {
      "path": "/horizonView/{serviceName}/customerNetwork",
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
          "description": "You can reach from the Desktops your private network"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name your network"
            },
            {
              "name": "network",
              "dataType": "ipBlock",
              "paramType": "body",
              "fullType": "ipBlock",
              "required": true,
              "description": "The private network you want to reach."
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
          "responseType": "horizonView.Task[]",
          "noAuthentication": false,
          "description": "Add a new network "
        }
      ],
      "description": "List the horizonView.CustomerNetwork objects"
    },
    {
      "path": "/horizonView/{serviceName}/customerNetwork/{customerNetworkId}",
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
              "name": "customerNetworkId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Customer network ID"
            }
          ],
          "responseType": "horizonView.Task[]",
          "noAuthentication": false,
          "description": "Delete this Customer Network"
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
              "name": "customerNetworkId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Customer network ID"
            }
          ],
          "responseType": "horizonView.CustomerNetwork",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "You can reach from your virtual desktops, your customer network "
    },
    {
      "path": "/horizonView/{serviceName}/dedicatedHorizon",
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
          "responseType": "horizonView.DedicatedHorizon",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Horizon View as a Service"
    },
    {
      "path": "/horizonView/{serviceName}/dedicatedHorizon/customerUser",
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
          "description": "Account to access to your pool"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "username",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Username for your new user in Active Directory."
            },
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": false,
              "description": "New password for this Horizon View user. It must fits your HaaS password policy. If this field is empty, a random password will be generated and sent to your  email."
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Email for your new user in Active diRectory."
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
          "responseType": "horizonView.Task[]",
          "noAuthentication": false,
          "description": "Create a new customer user "
        }
      ],
      "description": "List the horizonView.CustomerUser objects"
    },
    {
      "path": "/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}",
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
              "name": "username",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Username"
            }
          ],
          "responseType": "horizonView.Task[]",
          "noAuthentication": false,
          "description": "Delete this Customer User"
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
              "name": "username",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Username"
            }
          ],
          "responseType": "horizonView.CustomerUser",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Horizon As A Service Customer  User"
    },
    {
      "path": "/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}/changePassword",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": false,
              "description": "New password for this Horizon View user. It must fits your HaaS password policy. If this field is empty, a random password will be generated and sent to you by email."
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
              "name": "username",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Username"
            }
          ],
          "responseType": "horizonView.Task",
          "noAuthentication": false,
          "description": "Change Horizon View Customer  user password"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/horizonView/{serviceName}/dedicatedHorizon/disableStorageAccelerator",
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
            }
          ],
          "responseType": "horizonView.Task",
          "noAuthentication": false,
          "description": "Disable the View Storage Accelerator option on VCenter"
        }
      ],
      "description": "disableStorageAccelerator operations"
    },
    {
      "path": "/horizonView/{serviceName}/dedicatedHorizon/enableStorageAccelerator",
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
            }
          ],
          "responseType": "horizonView.Task",
          "noAuthentication": false,
          "description": "Enable the View Storage Accelerator option on VCenter"
        }
      ],
      "description": "enableStorageAccelerator operations"
    },
    {
      "path": "/horizonView/{serviceName}/dedicatedHorizon/task",
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
              "name": "state",
              "dataType": "horizonView.TaskStateEnum",
              "paramType": "query",
              "fullType": "horizonView.TaskStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Tasks associated with this Dedicated Horizon"
        }
      ],
      "description": "List the horizonView.Task objects"
    },
    {
      "path": "/horizonView/{serviceName}/dedicatedHorizon/task/{taskId}",
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
          "responseType": "horizonView.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Operation on a Horizon View component"
    },
    {
      "path": "/horizonView/{serviceName}/dedicatedHorizon/user",
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
          "responseType": "horizonView.User",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Horizon As A Service User"
    },
    {
      "path": "/horizonView/{serviceName}/dedicatedHorizon/user/changePassword",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": false,
              "description": "New password for this Horizon View user. It must fits your HaaS password policy. If this field is empty, a random password will be generated and sent to you by email."
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
          "responseType": "horizonView.Task",
          "noAuthentication": false,
          "description": "Change Horizon View user password"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/horizonView/{serviceName}/dedicatedHorizon/user/changeProperties",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Change email of your admin user"
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
          "responseType": "horizonView.Task",
          "noAuthentication": false,
          "description": "Change horizon view user properties"
        }
      ],
      "description": "changeProperties operations"
    },
    {
      "path": "/horizonView/{serviceName}/domainTrust",
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
          "description": "List all Active Directories linked to your CDI Active Directory"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Domain of your active directory (for example domain.local)"
            },
            {
              "name": "dns1",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": false,
              "description": "IP of your first DNS"
            },
            {
              "name": "dns2",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": false,
              "description": "IP of your second DNS"
            },
            {
              "name": "activeDirectoryIP",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": true,
              "description": "IP of your Active Directory"
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
          "responseType": "horizonView.Task[]",
          "noAuthentication": false,
          "description": "Link your Active Directory to your CDI Active Directory"
        }
      ],
      "description": "List the horizonView.DomainTrust objects"
    },
    {
      "path": "/horizonView/{serviceName}/domainTrust/{domainTrustId}",
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
              "name": "domainTrustId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Domain trust ID"
            }
          ],
          "responseType": "horizonView.DomainTrust",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "List all Active Directories linked to your CDI Active Directory"
    },
    {
      "path": "/horizonView/{serviceName}/domainTrust/{domainTrustId}/addChildDomain",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "passphrase",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Shared passphrase to create the Active Directory trust"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of your private domain"
            },
            {
              "name": "activeDirectoryIP",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "IP of your Active Directory"
            },
            {
              "name": "serviceAccountPassword",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Password of the horizonUI service account"
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
              "name": "domainTrustId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Domain trust ID"
            }
          ],
          "responseType": "horizonView.Task",
          "noAuthentication": false,
          "description": "Add a child domain for this domain."
        }
      ],
      "description": "addChildDomain operations"
    },
    {
      "path": "/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainController",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "domainControllerIp",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": true,
              "description": "IP of your Domain Controller"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of your Domain Controller (example : domain.local)"
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
              "name": "domainTrustId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Domain trust ID"
            }
          ],
          "responseType": "horizonView.Task",
          "noAuthentication": false,
          "description": "Add a Domain Controller for this domain."
        }
      ],
      "description": "addDomainController operations"
    },
    {
      "path": "/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainUserOnComposer",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "username",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of the User who is going to add the Desktop in your Active Directory"
            },
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Password of the user"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of your Domain (example : domain.local)"
            },
            {
              "name": "domainTrustId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Domain trust ID"
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
          "responseType": "horizonView.Task",
          "noAuthentication": false,
          "description": "Add a domain user to add your desktop in your Active Directory"
        }
      ],
      "description": "addDomainUserOnComposer operations"
    },
    {
      "path": "/horizonView/{serviceName}/domainTrust/{domainTrustId}/createTrust",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "passphrase",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Shared passphrase to create the Active Directory trust"
            },
            {
              "name": "serviceAccountPassword",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Password of the horizonUI service account"
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
              "name": "domainTrustId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Domain trust ID"
            }
          ],
          "responseType": "horizonView.Task",
          "noAuthentication": false,
          "description": "Change Horizon View user password"
        }
      ],
      "description": "createTrust operations"
    },
    {
      "path": "/horizonView/{serviceName}/serviceInfos",
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
      "path": "/horizonView/{serviceName}/terminate",
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
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Terminate your service"
        }
      ],
      "description": "Terminate your service"
    }
  ],
  "resourcePath": "/horizonView",
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "horizonView.AccessPointTypeEnum": {
      "id": "AccessPointTypeEnum",
      "namespace": "horizonView",
      "description": "Access Point type the customer can deploy",
      "enum": [
        "privateAccessPoint",
        "publicAccessPoint"
      ],
      "enumType": "string"
    },
    "horizonView.CustomerNetwork": {
      "id": "CustomerNetwork",
      "namespace": "horizonView",
      "description": "You can reach from your virtual desktops, your customer network ",
      "properties": {
        "customerNetworkId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Customer Network id",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of your network",
          "required": true
        },
        "network": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Customer network",
          "required": true
        }
      }
    },
    "horizonView.CustomerNetworkPool": {
      "id": "CustomerNetworkPool",
      "namespace": "horizonView",
      "description": "You can reach from your virtual desktops, your customer network ",
      "properties": {
        "customerNetworkId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Customer Network id",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of your network",
          "required": true
        },
        "network": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Customer network",
          "required": true
        }
      }
    },
    "horizonView.CustomerUser": {
      "id": "CustomerUser",
      "namespace": "horizonView",
      "description": "Horizon As A Service Customer  User",
      "properties": {
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Email of your HaaS User",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Customer id",
          "required": true
        },
        "username": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Customer username of your HaaS User",
          "required": true
        }
      }
    },
    "horizonView.Datacenter": {
      "id": "Datacenter",
      "namespace": "horizonView",
      "description": "Cloud Desktop Infrastructure Datacenter",
      "properties": {
        "activeDirectoryIP": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": true,
          "description": "IP of the VDI Active Directory",
          "required": true
        },
        "adminDomain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain of the admin infrastructure",
          "required": true
        },
        "adminNetworkNextHop": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Next hop to contact the private admin network",
          "required": true
        },
        "adminPrivateNetwork": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": true,
          "description": "Private network of the admin infrastructure",
          "required": true
        },
        "customerIntercoIP": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": true,
          "description": "Customer interco IP allows you to communicate between your private infrastructure and your CDI infrastructure throw the vrack.",
          "required": true
        },
        "customerIntercoMask": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": true,
          "description": "Customer interco netmask allows you to communicate between your private infrastructure and your CDI infrastructure throw the vrack.",
          "required": true
        },
        "customerIntercoVlanId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Customer interco vlan allows you to communicate between your private infrastructure and your CDI infrastructure throw the vrack.",
          "required": true
        },
        "datacenterId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Datacenter ids",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the datacenter",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain of your Horizon",
          "required": true
        }
      }
    },
    "horizonView.DedicatedHorizon": {
      "id": "DedicatedHorizon",
      "namespace": "horizonView",
      "description": "Horizon View as a Service",
      "properties": {
        "masterZone": {
          "type": "horizonView.Zone",
          "fullType": "horizonView.Zone",
          "canBeNull": false,
          "readOnly": true,
          "description": "The location of your administration servers in our datacenter",
          "required": true
        },
        "privateCloudName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Your Horizon Private Cloud ",
          "required": true
        },
        "privateCloudZone": {
          "type": "horizonView.Zone",
          "fullType": "horizonView.Zone",
          "canBeNull": false,
          "readOnly": true,
          "description": "The location of your datacenter",
          "required": true
        },
        "publicUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Url of your Dedicated Horizon",
          "required": true
        },
        "state": {
          "type": "horizonView.StateEnum",
          "fullType": "horizonView.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current state of your Dedicated Horizon",
          "required": true
        },
        "storageAccelerator": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "View Storage Accelerator for Vcenter",
          "required": true
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Version of your Dedicated Horizon",
          "required": true
        }
      }
    },
    "horizonView.DomainTrust": {
      "id": "DomainTrust",
      "namespace": "horizonView",
      "description": "List all Active Directories linked to your CDI Active Directory",
      "properties": {
        "activeDirectoryIP": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": true,
          "description": "IP of your Active Directory",
          "required": true
        },
        "dns1": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "IP of your first DNS",
          "required": false
        },
        "dns2": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "IP of your second DNS",
          "required": false
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of your private domain",
          "required": true
        },
        "domainTrustId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain trust id",
          "required": true
        }
      }
    },
    "horizonView.Pool": {
      "id": "Pool",
      "namespace": "horizonView",
      "description": "All informations about access point",
      "properties": {
        "accessPointId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pool id",
          "required": true
        },
        "dhcpNetmask": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": true,
          "description": "DHCP netmask in this port group",
          "required": true
        },
        "dhcpNetwork": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": true,
          "description": "DHCP network in this port group",
          "required": true
        },
        "externalUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "External url of your access point",
          "required": true
        },
        "intercoNextHop": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "Next hop IP to reach virtual desktops network for public Access Point",
          "required": false
        },
        "intercoPrivateNextHop": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "Next hop IP to reach virtual desktops network for private Access Point",
          "required": false
        },
        "portGroupId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Port group id",
          "required": true
        },
        "state": {
          "type": "horizonView.StateEnum",
          "fullType": "horizonView.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Network state",
          "required": true
        },
        "twoFA": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Two factor authentication",
          "required": true
        },
        "type": {
          "type": "horizonView.PoolType",
          "fullType": "horizonView.PoolType",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pool type",
          "required": true
        }
      }
    },
    "horizonView.PoolType": {
      "id": "PoolType",
      "namespace": "horizonView",
      "description": "Pool type the customer can deploy",
      "enum": [
        "hybridPool",
        "privatePool",
        "publicPool"
      ],
      "enumType": "string"
    },
    "horizonView.StateEnum": {
      "id": "StateEnum",
      "namespace": "horizonView",
      "description": "All states a dedicated horizon  can be in",
      "enum": [
        "available",
        "creating",
        "delivered",
        "disabled",
        "error",
        "reserved"
      ],
      "enumType": "string"
    },
    "horizonView.Task": {
      "id": "Task",
      "namespace": "horizonView",
      "description": "Operation on a Horizon View component",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current progress description",
          "required": false
        },
        "lastModificationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Task last modification date",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task name",
          "required": true
        },
        "progress": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current progress",
          "required": true
        },
        "state": {
          "type": "horizonView.TaskStateEnum",
          "fullType": "horizonView.TaskStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current Task state",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task id",
          "required": true
        }
      }
    },
    "horizonView.TaskStateEnum": {
      "id": "TaskStateEnum",
      "namespace": "horizonView",
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
      "enumType": "string"
    },
    "horizonView.User": {
      "id": "User",
      "namespace": "horizonView",
      "description": "Horizon As A Service User",
      "properties": {
        "username": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Username of your HaaS User",
          "required": true
        }
      }
    },
    "horizonView.Zone": {
      "id": "Zone",
      "namespace": "horizonView",
      "description": "All zones a Cloud Desktop Infrastructure can be in",
      "enum": [
        "Beauharnois",
        "Roubaix",
        "Strasbourg"
      ],
      "enumType": "string"
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
    "service.TerminationFutureUseEnum": {
      "id": "TerminationFutureUseEnum",
      "namespace": "service",
      "description": "All future uses you can provide for a service termination",
      "enum": [
        "NOT_REPLACING_SERVICE",
        "OTHER",
        "SUBSCRIBE_AN_OTHER_SERVICE",
        "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
        "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
      ],
      "enumType": "string"
    },
    "service.TerminationReasonEnum": {
      "id": "TerminationReasonEnum",
      "namespace": "service",
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