import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/ip.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "List the ip.Ip objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Your OVH IPs",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter the value of description property (like)",
              "fullType": "string",
              "name": "description",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of routedTo.serviceName property (like)",
              "fullType": "string",
              "name": "routedTo.serviceName",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "Filter the value of ip property (contains or equals)",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ip.IpTypeEnum",
              "description": "Filter the value of type property (=)",
              "fullType": "ip.IpTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "ipBlock[]"
        }
      ],
      "path": "/ip"
    },
    {
      "description": "Operations about the IP service",
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
      "path": "/ip/loadBalancing"
    },
    {
      "description": "Your load balancing IP",
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
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.LoadBalancingIp"
        }
      ],
      "path": "/ip/loadBalancing/{serviceName}"
    },
    {
      "description": "allowedBackends operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of backends you can attach to your IP",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip[]"
        }
      ],
      "path": "/ip/loadBalancing/{serviceName}/allowedBackends"
    },
    {
      "description": "List the ip.LoadBalancingBackendIp objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Backends for this IP load balancing",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your IP load balancing",
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
          "description": "Add a new backend on your IP load balancing",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "IP of your backend",
              "fullType": "ipv4",
              "name": "ipBackend",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Weight of the backend on its zone, must be between 1 and 100",
              "fullType": "long",
              "name": "weight",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ip.LoadBalancingBackendProbeEnum",
              "description": "The type of probe used",
              "fullType": "ip.LoadBalancingBackendProbeEnum",
              "name": "probe",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.LoadBalancingTask"
        }
      ],
      "path": "/ip/loadBalancing/{serviceName}/backend"
    },
    {
      "description": "Backends attached to your IP load balancing",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove a backend IP",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "IP of your backend",
              "fullType": "ipv4",
              "name": "backend",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.LoadBalancingTask"
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
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "IP of your backend",
              "fullType": "ipv4",
              "name": "backend",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.LoadBalancingBackendIp"
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
              "dataType": "ip.LoadBalancingBackendIp",
              "description": "New object properties",
              "fullType": "ip.LoadBalancingBackendIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "IP of your backend",
              "fullType": "ipv4",
              "name": "backend",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/ip/loadBalancing/{serviceName}/backend/{backend}"
    },
    {
      "description": "backupState operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Set or unset the backend as a backup of another backend. Requests will be directed to the backup only if the main backend is in probe fail",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Set or unset the backend as backup. mainBackendIp is optional in case of unset",
              "fullType": "boolean",
              "name": "backupStateSet",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "Main backend ip, must be in the same zone as the backup",
              "fullType": "ip",
              "name": "mainBackendIp",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "IP of your backend",
              "fullType": "ipv4",
              "name": "backend",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.LoadBalancingTask"
        }
      ],
      "path": "/ip/loadBalancing/{serviceName}/backend/{backend}/backupState"
    },
    {
      "description": "setWeight operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Set the weight of a backend. For instance, if backend A has a weight of 8 and backup B was a weight of 16, backend B will receive twice more connections as backend A. Backends must be on the same POP for the weight parameter to take effect between them.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "weight of the backend, must be between 1 and 100, default is 8",
              "fullType": "long",
              "name": "weight",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "IP of your backend",
              "fullType": "ipv4",
              "name": "backend",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.LoadBalancingTask"
        }
      ],
      "path": "/ip/loadBalancing/{serviceName}/backend/{backend}/setWeight"
    },
    {
      "description": "importCustomSsl operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Import your own ssl certificate on your IP load balancing. Ssl option is needed to use this url.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "text",
              "description": "certificate key",
              "fullType": "text",
              "name": "key",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "text",
              "description": "certificate",
              "fullType": "text",
              "name": "certificate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "text",
              "description": "certificate chain",
              "fullType": "text",
              "name": "chain",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.LoadBalancingTask"
        }
      ],
      "path": "/ip/loadBalancing/{serviceName}/importCustomSsl"
    },
    {
      "description": "internalNatIp operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Ip subnet used by OVH to nat requests on your ip lb to your backends. You must ensure that your backends are not part of a network that overlap with this one.",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip.LoadBalancingZoneEnum",
              "description": "one of your ip loadbalancing's zone",
              "fullType": "ip.LoadBalancingZoneEnum",
              "name": "zone",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipBlock"
        }
      ],
      "path": "/ip/loadBalancing/{serviceName}/internalNatIp"
    },
    {
      "description": "List the portsRedirection objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all srcPort",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.LoadBalancingAdditionalPortEnum[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new port redirection",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip.LoadBalancingIp.LoadBalancingPort",
              "description": "The port you want to redirect to",
              "fullType": "ip.LoadBalancingIp.LoadBalancingPort",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.LoadBalancingTask"
        }
      ],
      "path": "/ip/loadBalancing/{serviceName}/portsRedirection"
    },
    {
      "description": "Port redirections",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a port redirection",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ip.LoadBalancingAdditionalPortEnum",
              "description": "The port you want to redirect from",
              "fullType": "ip.LoadBalancingAdditionalPortEnum",
              "name": "srcPort",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.LoadBalancingTask"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the value for the given srcPort",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ip.LoadBalancingAdditionalPortEnum",
              "description": "The port you want to redirect from",
              "fullType": "ip.LoadBalancingAdditionalPortEnum",
              "name": "srcPort",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.LoadBalancingIp.LoadBalancingPort"
        }
      ],
      "path": "/ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}"
    },
    {
      "description": "probeIp operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Ip subnet used to send probes to your backends",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip.LoadBalancingZoneEnum",
              "description": "one of your ip loadbalancing's zone",
              "fullType": "ip.LoadBalancingZoneEnum",
              "name": "zone",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipBlock[]"
        }
      ],
      "path": "/ip/loadBalancing/{serviceName}/probeIp"
    },
    {
      "description": "restoreSsl operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Restore OVH' ssl certificate on your IP load balancing. Ssl option is needed to use this url. (A DCV mail will be sent to postmaster@your-domain.abc)",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.LoadBalancingTask"
        }
      ],
      "path": "/ip/loadBalancing/{serviceName}/restoreSsl"
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
              "description": "The internal name of your IP load balancing",
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
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/ip/loadBalancing/{serviceName}/serviceInfos"
    },
    {
      "description": "stickiness operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Set Stickiness type. 'ipSource' will stick clients to a backend by their source ip, 'cookie' will stick them by inserting a cookie, 'none' is to set no stickiness",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip.LoadBalancingStickinessEnum",
              "description": "The stickiness you want on your IP LoadBalancing",
              "fullType": "ip.LoadBalancingStickinessEnum",
              "name": "stickiness",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.LoadBalancingTask"
        }
      ],
      "path": "/ip/loadBalancing/{serviceName}/stickiness"
    },
    {
      "description": "switchToIplbNextGenerationApi operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Switch to ipLoadbalancing next-gen API. Benefits : additionnals probes, DDOS protection.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipLoadbalancing.Task.Task"
        }
      ],
      "path": "/ip/loadBalancing/{serviceName}/switchToIplbNextGenerationApi"
    },
    {
      "description": "List the ip.LoadBalancingTask objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Task list associated with this IP",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/ip/loadBalancing/{serviceName}/task"
    },
    {
      "description": "List of tasks associated with your IP load balancing",
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
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Identifier of your task",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.LoadBalancingTask"
        }
      ],
      "path": "/ip/loadBalancing/{serviceName}/task/{taskId}"
    },
    {
      "description": "Operations about the IP service",
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
      "path": "/ip/service"
    },
    {
      "description": "Your IP linked to service",
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
              "description": "The internal name of your IP services",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.ServiceIp"
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
              "dataType": "ip.ServiceIp",
              "description": "New object properties",
              "fullType": "ip.ServiceIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your IP services",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/ip/service/{serviceName}"
    },
    {
      "description": "Change the contacts of this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "description": "The contact to set as tech contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactTech",
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
              "description": "The internal name of your IP services",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/ip/service/{serviceName}/changeContact"
    },
    {
      "description": "Confirm termination of your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "description": "The internal name of your IP services",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/ip/service/{serviceName}/confirmTermination"
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
              "description": "The internal name of your IP services",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.NonExpiringService"
        }
      ],
      "path": "/ip/service/{serviceName}/serviceInfos"
    },
    {
      "description": "Terminate your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Terminate your service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your IP services",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/ip/service/{serviceName}/terminate"
    },
    {
      "description": "Your IP",
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
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.Ip"
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
              "dataType": "ip.Ip",
              "description": "New object properties",
              "fullType": "ip.Ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/ip/{ip}"
    },
    {
      "description": "List the ip.BlockedIp objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Anti-Hack blocked IP",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip.BlockedIpStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "ip.BlockedIpStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipv4[]"
        }
      ],
      "path": "/ip/{ip}/antihack"
    },
    {
      "description": "Blocked IP information",
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
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "your IP",
              "fullType": "ipv4",
              "name": "ipBlocked",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.BlockedIp"
        }
      ],
      "path": "/ip/{ip}/antihack/{ipBlocked}"
    },
    {
      "description": "unblock operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Unblock this IP",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "your IP",
              "fullType": "ipv4",
              "name": "ipBlocked",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/ip/{ip}/antihack/{ipBlocked}/unblock"
    },
    {
      "description": "List the ip.ArpBlockedIp objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "ARP blocked IP",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip.ArpStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "ip.ArpStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipv4[]"
        }
      ],
      "path": "/ip/{ip}/arp"
    },
    {
      "description": "ARP blocked IP information",
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
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "your IP",
              "fullType": "ipv4",
              "name": "ipBlocked",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.ArpBlockedIp"
        }
      ],
      "path": "/ip/{ip}/arp/{ipBlocked}"
    },
    {
      "description": "unblock operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Unblock this IP",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "your IP",
              "fullType": "ipv4",
              "name": "ipBlocked",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/ip/{ip}/arp/{ipBlocked}/unblock"
    },
    {
      "description": "changeOrg operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change organisation of this IP",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Your organisation id (RIPE_XXXX) to add on block informations",
              "fullType": "string",
              "name": "organisation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.IpTask"
        }
      ],
      "path": "/ip/{ip}/changeOrg"
    },
    {
      "description": "List the ip.ReverseDelegation objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reverse delegation on IPv6 subnet",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
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
          "description": "Add target for reverse delegation on IPv6 subnet",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Target for reverse delegation on IPv6",
              "fullType": "string",
              "name": "target",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.ReverseDelegation"
        }
      ],
      "path": "/ip/{ip}/delegation"
    },
    {
      "description": "Your reverse delegations on IPv6 subnet",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a target for reverse delegation on IPv6 subnet",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "NS target for delegation",
              "fullType": "string",
              "name": "target",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
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
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "NS target for delegation",
              "fullType": "string",
              "name": "target",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.ReverseDelegation"
        }
      ],
      "path": "/ip/{ip}/delegation/{target}"
    },
    {
      "description": "List the ip.FirewallIp objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Ip under firewall",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip.FirewallStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "ip.FirewallStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Filter the value of enabled property (=)",
              "fullType": "boolean",
              "name": "enabled",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
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
          "description": "AntiDDOS option. Add new IP on firewall",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnFirewall",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.FirewallIp"
        }
      ],
      "path": "/ip/{ip}/firewall"
    },
    {
      "description": "Your IP on firewall",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "AntiDDOS option. Delete IP and rules from firewall",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnFirewall",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
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
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnFirewall",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.FirewallIp"
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
              "dataType": "ip.FirewallIp",
              "description": "New object properties",
              "fullType": "ip.FirewallIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnFirewall",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/ip/{ip}/firewall/{ipOnFirewall}"
    },
    {
      "description": "List the ip.FirewallNetworkRule objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Rules for this IP",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip.FirewallRuleStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "ip.FirewallRuleStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnFirewall",
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
          "description": "AntiDDOS option. Add new rule on your IP",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Destination port for your rule. Only with TCP/UDP protocol",
              "fullType": "long",
              "name": "destinationPort",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ip.FirewallOptionTCP",
              "description": "Option on your rule. Can only be used with TCP protocol",
              "fullType": "ip.FirewallOptionTCP",
              "name": "tcpOption",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ip.FirewallProtocolEnum",
              "description": "Network protocol",
              "fullType": "ip.FirewallProtocolEnum",
              "name": "protocol",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4Block",
              "description": "Source ip for your rule. Any if not set",
              "fullType": "ipv4Block",
              "name": "source",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ip.FirewallSequenceRangeEnum",
              "description": "Sequence number of your rule",
              "fullType": "ip.FirewallSequenceRangeEnum",
              "name": "sequence",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip.FirewallActionEnum",
              "description": "Action on this rule",
              "fullType": "ip.FirewallActionEnum",
              "name": "action",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Source port for your rule. Only with TCP/UDP protocol",
              "fullType": "long",
              "name": "sourcePort",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnFirewall",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.FirewallNetworkRule"
        }
      ],
      "path": "/ip/{ip}/firewall/{ipOnFirewall}/rule"
    },
    {
      "description": "Rule on ip",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "AntiDDOS option. Delete rule",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnFirewall",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "sequence",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.FirewallNetworkRule"
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
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnFirewall",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "sequence",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.FirewallNetworkRule"
        }
      ],
      "path": "/ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}"
    },
    {
      "description": "List the ip.GameMitigation objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Ip under game anti-ddos",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipv4[]"
        }
      ],
      "path": "/ip/{ip}/game"
    },
    {
      "description": "GAME Anti-DDoS",
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
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnGame",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.GameMitigation"
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
              "dataType": "ip.GameMitigation",
              "description": "New object properties",
              "fullType": "ip.GameMitigation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnGame",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/ip/{ip}/game/{ipOnGame}"
    },
    {
      "description": "List the ip.GameMitigationRule objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "IDs of rules configured for this IP",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnGame",
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
          "description": "Add new rule on your IP",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip.GameMitigationRuleProtocolEnum",
              "description": "The protocol running behind the given port",
              "fullType": "ip.GameMitigationRuleProtocolEnum",
              "name": "protocol",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "complexType.Range<long>",
              "description": "The UDP port range to apply the rule on",
              "fullType": "complexType.Range<long>",
              "name": "ports",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnGame",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.GameMitigationRule"
        }
      ],
      "path": "/ip/{ip}/game/{ipOnGame}/rule"
    },
    {
      "description": "Rule on ip:ports",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete rule",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnGame",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "ID of the rule",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.GameMitigationRule"
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
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnGame",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "ID of the rule",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.GameMitigationRule"
        }
      ],
      "path": "/ip/{ip}/game/{ipOnGame}/rule/{id}"
    },
    {
      "description": "List the license.cloudLinux.CloudLinux objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cloud Linux licenses associated to this IP",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/ip/{ip}/license/cloudLinux"
    },
    {
      "description": "List the license.cpanel.Cpanel objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cpanel licenses associated to this IP",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/ip/{ip}/license/cpanel"
    },
    {
      "description": "List the license.directadmin.DirectAdmin objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "DirectAdmin licenses associated to this IP",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/ip/{ip}/license/directadmin"
    },
    {
      "description": "List the license.plesk.Plesk objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Plesk licenses associated to this IP",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/ip/{ip}/license/plesk"
    },
    {
      "description": "List the license.sqlserver.SqlServer objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "SQL Server licenses associated to this IP",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/ip/{ip}/license/sqlserver"
    },
    {
      "description": "List the license.virtuozzo.Virtuozzo objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Virtuozzo licenses associated to this IP",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/ip/{ip}/license/virtuozzo"
    },
    {
      "description": "List the license.windows.Windows objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Windows licenses associated to this IP",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/ip/{ip}/license/windows"
    },
    {
      "description": "List the license.worklight.WorkLight objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "WorkLight licenses associated to this IP",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/ip/{ip}/license/worklight"
    },
    {
      "description": "IP migration to OVH",
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
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.IpMigrationToken"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate a migration token",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "destination customer ID",
              "fullType": "string",
              "name": "customerId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.IpMigrationToken"
        }
      ],
      "path": "/ip/{ip}/migrationToken"
    },
    {
      "description": "List the ip.MitigationIp objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Ip under mitigation",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Filter the value of auto property (=)",
              "fullType": "boolean",
              "name": "auto",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ip.MitigationStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "ip.MitigationStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
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
          "description": "AntiDDOS option. Add new IP on permanent mitigation",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnMitigation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.MitigationIp"
        }
      ],
      "path": "/ip/{ip}/mitigation"
    },
    {
      "description": "Your IP on mitigation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "AntiDDOS option. Delete IP from mitigation",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnMitigation",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.MitigationIp"
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
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnMitigation",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.MitigationIp"
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
              "dataType": "ip.MitigationIp",
              "description": "New object properties",
              "fullType": "ip.MitigationIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnMitigation",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/ip/{ip}/mitigation/{ipOnMitigation}"
    },
    {
      "description": "stats operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "AntiDDOS option. Get statistics about your traffic in and out during this mitigation",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Start date",
              "fullType": "datetime",
              "name": "from",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ip.MitigationStatsScaleEnum",
              "description": "Scale of aggregation",
              "fullType": "ip.MitigationStatsScaleEnum",
              "name": "scale",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "datetime",
              "description": "End date",
              "fullType": "datetime",
              "name": "to",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnMitigation",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.MitigationStats[]"
        }
      ],
      "path": "/ip/{ip}/mitigation/{ipOnMitigation}/stats"
    },
    {
      "description": "topStream operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "AntiDDOS option. Get top stream on your ip on a specific timestamp",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Date to view top traffic",
              "fullType": "datetime",
              "name": "date",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ip.MitigationStatsScaleEnum",
              "description": "Scale of aggregation",
              "fullType": "ip.MitigationStatsScaleEnum",
              "name": "scale",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipOnMitigation",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.MitigationDetailedStats[]"
        }
      ],
      "path": "/ip/{ip}/mitigation/{ipOnMitigation}/topStream"
    },
    {
      "description": "List the ip.MitigationProfile objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Manage mitigation profile on your IPs",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
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
          "description": "Create new profile for one of your ip",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip.MitigationProfileAutoMitigationTimeOutEnum",
              "description": "Delay to wait before remove ip from auto mitigation after an attack",
              "fullType": "ip.MitigationProfileAutoMitigationTimeOutEnum",
              "name": "autoMitigationTimeOut",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipMitigationProfile",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.MitigationProfile"
        }
      ],
      "path": "/ip/{ip}/mitigationProfiles"
    },
    {
      "description": "Mitigation profile for your ip",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete mitigation profile",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipMitigationProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
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
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipMitigationProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.MitigationProfile"
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
              "dataType": "ip.MitigationProfile",
              "description": "New object properties",
              "fullType": "ip.MitigationProfile",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ipMitigationProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/ip/{ip}/mitigationProfiles/{ipMitigationProfile}"
    },
    {
      "description": "move operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List services available as a destination",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.Destinations"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Move this IP to another service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service destination",
              "fullType": "string",
              "name": "to",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Nexthop of destination service",
              "fullType": "string",
              "name": "nexthop",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.IpTask"
        }
      ],
      "path": "/ip/{ip}/move"
    },
    {
      "description": "park operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Park this IP",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.IpTask"
        }
      ],
      "path": "/ip/{ip}/park"
    },
    {
      "description": "List the ip.Antiphishing objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Ip under anti-phishing",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Filter the value of ipOnAntiphishing property (within or equals)",
              "fullType": "ipv4",
              "name": "ipOnAntiphishing",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ip.AntiphishingStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "ip.AntiphishingStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/ip/{ip}/phishing"
    },
    {
      "description": "Phishing URLs hosted on your IP",
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
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Internal ID of the phishing entry",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.Antiphishing"
        }
      ],
      "path": "/ip/{ip}/phishing/{id}"
    },
    {
      "description": "List the ip.ReverseIp objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reverse on your ip",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
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
          "description": "Add reverse on an ip",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "reverse",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "",
              "fullType": "ip",
              "name": "ipReverse",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.ReverseIp"
        }
      ],
      "path": "/ip/{ip}/reverse"
    },
    {
      "description": "Your reverse records on IP",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a reverse on one IP",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "",
              "fullType": "ip",
              "name": "ipReverse",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
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
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "",
              "fullType": "ip",
              "name": "ipReverse",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.ReverseIp"
        }
      ],
      "path": "/ip/{ip}/reverse/{ipReverse}"
    },
    {
      "description": "IP block RIPE informations",
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
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.RipeInfos"
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
              "dataType": "ip.RipeInfos",
              "description": "New object properties",
              "fullType": "ip.RipeInfos",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/ip/{ip}/ripe"
    },
    {
      "description": "List the ip.SpamIp objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Ip spamming",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip.SpamStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "ip.SpamStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipv4[]"
        }
      ],
      "path": "/ip/{ip}/spam"
    },
    {
      "description": "Your IP spam stats",
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
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "IP address which is sending spam",
              "fullType": "ipv4",
              "name": "ipSpamming",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.SpamIp"
        }
      ],
      "path": "/ip/{ip}/spam/{ipSpamming}"
    },
    {
      "description": "stats operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get statistics about the email traffic",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Start date",
              "fullType": "datetime",
              "name": "from",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "datetime",
              "description": "End date",
              "fullType": "datetime",
              "name": "to",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "IP address which is sending spam",
              "fullType": "ipv4",
              "name": "ipSpamming",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.SpamStats[]"
        }
      ],
      "path": "/ip/{ip}/spam/{ipSpamming}/stats"
    },
    {
      "description": "unblock operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Release the ip from anti-spam system",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "IP address which is sending spam",
              "fullType": "ipv4",
              "name": "ipSpamming",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.SpamIp"
        }
      ],
      "path": "/ip/{ip}/spam/{ipSpamming}/unblock"
    },
    {
      "description": "List the ip.IpTask objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "IP tasks",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip.TaskFunctionEnum",
              "description": "Filter the value of function property (=)",
              "fullType": "ip.TaskFunctionEnum",
              "name": "function",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ip.TaskStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "ip.TaskStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/ip/{ip}/task"
    },
    {
      "description": "IP tasks",
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
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "the id of the task",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.IpTask"
        }
      ],
      "path": "/ip/{ip}/task/{taskId}"
    },
    {
      "description": "terminate operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2017-01-21T00:00:00+01:00",
            "deprecatedDate": "2016-07-21T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/ip/service/{serviceName}/terminate",
            "value": "DEPRECATED"
          },
          "description": "Delete a failover IP",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip.IpTask"
        }
      ],
      "path": "/ip/{ip}/terminate"
    }
  ],
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "complexType.Range<T>": {
      "description": "Start and end points (inclusive) of a range",
      "generics": [
        "T"
      ],
      "id": "Range",
      "namespace": "complexType",
      "properties": {
        "from": {
          "canBeNull": false,
          "description": "Start point of the range",
          "readOnly": false,
          "required": false,
          "type": "T"
        },
        "to": {
          "canBeNull": false,
          "description": "End point of the range",
          "readOnly": false,
          "required": false,
          "type": "T"
        }
      }
    },
    "coreTypes.CountryEnum": {
      "description": "ISO country codes",
      "enum": [
        "ac",
        "ad",
        "ae",
        "af",
        "ag",
        "ai",
        "al",
        "am",
        "an",
        "ao",
        "aq",
        "ar",
        "as",
        "at",
        "au",
        "aw",
        "ax",
        "az",
        "ba",
        "bb",
        "bd",
        "be",
        "bf",
        "bg",
        "bh",
        "bi",
        "bj",
        "bl",
        "bm",
        "bn",
        "bo",
        "bq",
        "br",
        "bs",
        "bt",
        "bv",
        "bw",
        "by",
        "bz",
        "ca",
        "cc",
        "cd",
        "cf",
        "cg",
        "ch",
        "ci",
        "ck",
        "cl",
        "cm",
        "cn",
        "co",
        "cr",
        "cs",
        "cu",
        "cv",
        "cw",
        "cx",
        "cy",
        "cz",
        "de",
        "dj",
        "dk",
        "dm",
        "do",
        "dz",
        "ec",
        "ee",
        "eg",
        "eh",
        "er",
        "es",
        "et",
        "fc",
        "fd",
        "fi",
        "fj",
        "fk",
        "fm",
        "fo",
        "fr",
        "fx",
        "ga",
        "gb",
        "gd",
        "ge",
        "gf",
        "gg",
        "gh",
        "gi",
        "gl",
        "gm",
        "gn",
        "gp",
        "gq",
        "gr",
        "gs",
        "gt",
        "gu",
        "gw",
        "gy",
        "hk",
        "hm",
        "hn",
        "hr",
        "ht",
        "hu",
        "id",
        "ie",
        "il",
        "im",
        "in",
        "io",
        "iq",
        "ir",
        "is",
        "it",
        "je",
        "jm",
        "jo",
        "jp",
        "ke",
        "kg",
        "kh",
        "ki",
        "km",
        "kn",
        "kp",
        "kr",
        "kw",
        "ky",
        "kz",
        "la",
        "lb",
        "lc",
        "li",
        "lk",
        "lr",
        "ls",
        "lt",
        "lu",
        "lv",
        "ly",
        "ma",
        "mc",
        "md",
        "me",
        "mf",
        "mg",
        "mh",
        "mk",
        "ml",
        "mm",
        "mn",
        "mo",
        "mp",
        "mq",
        "mr",
        "ms",
        "mt",
        "mu",
        "mv",
        "mw",
        "mx",
        "my",
        "mz",
        "na",
        "nc",
        "ne",
        "nf",
        "ng",
        "ni",
        "nl",
        "no",
        "np",
        "nr",
        "nu",
        "nz",
        "om",
        "pa",
        "pe",
        "pf",
        "pg",
        "ph",
        "pk",
        "pl",
        "pm",
        "pn",
        "pr",
        "ps",
        "pt",
        "pw",
        "py",
        "qa",
        "qc",
        "re",
        "ro",
        "rs",
        "ru",
        "rw",
        "sa",
        "sb",
        "sc",
        "sd",
        "se",
        "sg",
        "sh",
        "si",
        "sj",
        "sk",
        "sl",
        "sm",
        "sn",
        "so",
        "sr",
        "ss",
        "st",
        "sv",
        "sx",
        "sy",
        "sz",
        "tc",
        "td",
        "tf",
        "tg",
        "th",
        "tj",
        "tk",
        "tl",
        "tm",
        "tn",
        "to",
        "tp",
        "tr",
        "tt",
        "tv",
        "tw",
        "tz",
        "ua",
        "ug",
        "uk",
        "um",
        "us",
        "uy",
        "uz",
        "va",
        "vc",
        "ve",
        "vg",
        "vi",
        "vn",
        "vu",
        "we",
        "wf",
        "ws",
        "ye",
        "yt",
        "yu",
        "za",
        "zm",
        "zw"
      ],
      "enumType": "string",
      "id": "CountryEnum",
      "namespace": "coreTypes"
    },
    "ip.Antiphishing": {
      "description": "Phishing URLs hosted on your IP",
      "id": "Antiphishing",
      "namespace": "ip",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Date of the event",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Internal ID of the phishing entry",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ipOnAntiphishing": {
          "canBeNull": false,
          "description": "IP address hosting the phishing URL",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of the phishing",
          "fullType": "ip.AntiphishingStateEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.AntiphishingStateEnum"
        },
        "urlPhishing": {
          "canBeNull": false,
          "description": "Phishing URL",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "ip.AntiphishingStateEnum": {
      "description": "Possible values for antiphishing state",
      "enum": [
        "blocked",
        "blocking",
        "unblocked",
        "unblocking"
      ],
      "enumType": "string",
      "id": "AntiphishingStateEnum",
      "namespace": "ip"
    },
    "ip.ArpBlockedIp": {
      "description": "ARP blocked IP information",
      "id": "ArpBlockedIp",
      "namespace": "ip",
      "properties": {
        "blockedSince": {
          "canBeNull": false,
          "description": "The last blocking date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "ipBlocked": {
          "canBeNull": false,
          "description": "your IP",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "logs": {
          "canBeNull": true,
          "description": "ARP logs",
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        },
        "state": {
          "canBeNull": false,
          "description": "this IP address state",
          "fullType": "ip.ArpStateEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.ArpStateEnum"
        },
        "time": {
          "canBeNull": false,
          "description": "Time (in seconds) remaining before you can request your IP to be unblocked",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "ip.ArpStateEnum": {
      "description": "Possible values for IP state",
      "enum": [
        "blocked",
        "unblocking"
      ],
      "enumType": "string",
      "id": "ArpStateEnum",
      "namespace": "ip"
    },
    "ip.BlockedIp": {
      "description": "Blocked IP information",
      "id": "BlockedIp",
      "namespace": "ip",
      "properties": {
        "blockedSince": {
          "canBeNull": false,
          "description": "The last blocking date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "ipBlocked": {
          "canBeNull": false,
          "description": "your IP",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "logs": {
          "canBeNull": true,
          "description": "Logs",
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        },
        "state": {
          "canBeNull": false,
          "description": "this IP address state",
          "fullType": "ip.BlockedIpStateEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.BlockedIpStateEnum"
        },
        "time": {
          "canBeNull": false,
          "description": "Time (in seconds) remaining before you can request your IP to be unblocked",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "ip.BlockedIpStateEnum": {
      "description": "Possible values for IP state",
      "enum": [
        "blocked",
        "unblocking"
      ],
      "enumType": "string",
      "id": "BlockedIpStateEnum",
      "namespace": "ip"
    },
    "ip.Destination": {
      "description": "A structure given service and its nexthops as a destination for failover ips",
      "id": "Destination",
      "namespace": "ip",
      "properties": {
        "nexthop": {
          "canBeNull": true,
          "description": "Nexthops available on this service",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "service": {
          "canBeNull": false,
          "description": "Service destination",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ip.Destinations": {
      "description": "A structure given all services allowed as a destination for this ip",
      "id": "Destinations",
      "namespace": "ip",
      "properties": {
        "cloudProject": {
          "canBeNull": true,
          "description": "list of public cloud projects",
          "readOnly": false,
          "required": false,
          "type": "ip.Destination[]"
        },
        "dedicatedCloud": {
          "canBeNull": true,
          "description": "list of dedicated clouds",
          "readOnly": false,
          "required": false,
          "type": "ip.Destination[]"
        },
        "dedicatedServer": {
          "canBeNull": true,
          "description": "list of dedicated servers",
          "readOnly": false,
          "required": false,
          "type": "ip.Destination[]"
        },
        "hostingReseller": {
          "canBeNull": true,
          "description": "list of hosting reseller services",
          "readOnly": false,
          "required": false,
          "type": "ip.Destination[]"
        },
        "ipLoadbalancing": {
          "canBeNull": true,
          "description": "list of load balancing services",
          "readOnly": false,
          "required": false,
          "type": "ip.Destination[]"
        },
        "vps": {
          "canBeNull": true,
          "description": "list of vps",
          "readOnly": false,
          "required": false,
          "type": "ip.Destination[]"
        }
      }
    },
    "ip.FirewallActionEnum": {
      "description": "Possible values for action",
      "enum": [
        "deny",
        "permit"
      ],
      "enumType": "string",
      "id": "FirewallActionEnum",
      "namespace": "ip"
    },
    "ip.FirewallIp": {
      "description": "Your IP on firewall",
      "id": "FirewallIp",
      "namespace": "ip",
      "properties": {
        "enabled": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "ipOnFirewall": {
          "canBeNull": false,
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of your ip on firewall",
          "fullType": "ip.FirewallStateEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.FirewallStateEnum"
        }
      }
    },
    "ip.FirewallNetworkRule": {
      "description": "Rule on ip",
      "id": "FirewallNetworkRule",
      "namespace": "ip",
      "properties": {
        "action": {
          "canBeNull": false,
          "description": "Action on this rule",
          "fullType": "ip.FirewallActionEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.FirewallActionEnum"
        },
        "creationDate": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "destination": {
          "canBeNull": false,
          "description": "Destination ip for your rule",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "destinationPort": {
          "canBeNull": true,
          "description": "Destination port range for your rule. Only with TCP/UDP protocol",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "fragments": {
          "canBeNull": true,
          "description": "Fragments option",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "protocol": {
          "canBeNull": false,
          "description": "Network protocol",
          "fullType": "ip.FirewallProtocolEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.FirewallProtocolEnum"
        },
        "rule": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "sequence": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "source": {
          "canBeNull": false,
          "description": "Source ip for your rule",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "sourcePort": {
          "canBeNull": true,
          "description": "Source port range for your rule. Only with TCP/UDP protocol",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of your rule",
          "fullType": "ip.FirewallRuleStateEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.FirewallRuleStateEnum"
        },
        "tcpOption": {
          "canBeNull": true,
          "description": "TCP option on your rule",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "ip.FirewallOptionTCP": {
      "description": "Possible option for TCP",
      "id": "FirewallOptionTCP",
      "namespace": "ip",
      "properties": {
        "fragments": {
          "canBeNull": true,
          "description": "TCP fragments",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "option": {
          "canBeNull": true,
          "description": "TCP option",
          "readOnly": false,
          "required": false,
          "type": "ip.FirewallTCPOptionEnum"
        }
      }
    },
    "ip.FirewallProtocolEnum": {
      "description": "Possible values for protocol",
      "enum": [
        "ah",
        "esp",
        "gre",
        "icmp",
        "ipv4",
        "tcp",
        "udp"
      ],
      "enumType": "string",
      "id": "FirewallProtocolEnum",
      "namespace": "ip"
    },
    "ip.FirewallRuleStateEnum": {
      "description": "Possible values for firewall rule state",
      "enum": [
        "creationPending",
        "ok",
        "removalPending"
      ],
      "enumType": "string",
      "id": "FirewallRuleStateEnum",
      "namespace": "ip"
    },
    "ip.FirewallSequenceRangeEnum": {
      "description": "Possible values for action",
      "enum": [
        "0",
        "1",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
      ],
      "enumType": "long",
      "id": "FirewallSequenceRangeEnum",
      "namespace": "ip"
    },
    "ip.FirewallStateEnum": {
      "description": "Possible values for firewall ip state",
      "enum": [
        "disableFirewallPending",
        "enableFirewallPending",
        "ok"
      ],
      "enumType": "string",
      "id": "FirewallStateEnum",
      "namespace": "ip"
    },
    "ip.FirewallTCPOptionEnum": {
      "description": "Possible values for TCP option - only for TCP protocol",
      "enum": [
        "established",
        "syn"
      ],
      "enumType": "string",
      "id": "FirewallTCPOptionEnum",
      "namespace": "ip"
    },
    "ip.GameMitigation": {
      "description": "GAME Anti-DDoS",
      "id": "GameMitigation",
      "namespace": "ip",
      "properties": {
        "firewallModeEnabled": {
          "canBeNull": false,
          "description": "Firewall mode : in UDP, only allow traffic matching your rules (as well as established traffic). If not enabled, traffic to ports not defined in your rules will be permited. TCP traffic is unaffected by this.",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "ipOnGame": {
          "canBeNull": false,
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "state": {
          "canBeNull": false,
          "fullType": "ip.GameMitigationStateEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.GameMitigationStateEnum"
        }
      }
    },
    "ip.GameMitigationRule": {
      "description": "Rule on ip:ports",
      "id": "GameMitigationRule",
      "namespace": "ip",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "ID of the rule",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ports": {
          "canBeNull": false,
          "fullType": "complexType.Range<long>",
          "readOnly": true,
          "required": false,
          "type": "complexType.Range<long>"
        },
        "protocol": {
          "canBeNull": false,
          "fullType": "ip.GameMitigationRuleProtocolEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.GameMitigationRuleProtocolEnum"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of your rule",
          "fullType": "ip.GameMitigationRuleStateEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.GameMitigationRuleStateEnum"
        }
      }
    },
    "ip.GameMitigationRuleProtocolEnum": {
      "description": "Possible values for game rule protocol",
      "enum": [
        "arkSurvivalEvolved",
        "arma",
        "gtaMultiTheftAutoSanAndreas",
        "gtaSanAndreasMultiplayerMod",
        "hl2Source",
        "minecraftPocketEdition",
        "minecraftQuery",
        "mumble",
        "other",
        "rust",
        "teamspeak2",
        "teamspeak3",
        "trackmaniaShootmania"
      ],
      "enumType": "string",
      "id": "GameMitigationRuleProtocolEnum",
      "namespace": "ip"
    },
    "ip.GameMitigationRuleStateEnum": {
      "description": "Possible values for game mitigation rule state",
      "enum": [
        "createRulePending",
        "deleteRulePending",
        "ok"
      ],
      "enumType": "string",
      "id": "GameMitigationRuleStateEnum",
      "namespace": "ip"
    },
    "ip.GameMitigationStateEnum": {
      "description": "Possible values for udp mitigation rule state",
      "enum": [
        "firewallModeDisablePending",
        "firewallModeEnablePending",
        "ok"
      ],
      "enumType": "string",
      "id": "GameMitigationStateEnum",
      "namespace": "ip"
    },
    "ip.Ip": {
      "description": "Your IP",
      "id": "Ip",
      "namespace": "ip",
      "properties": {
        "canBeTerminated": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "country": {
          "canBeNull": true,
          "fullType": "coreTypes.CountryEnum",
          "readOnly": true,
          "required": false,
          "type": "coreTypes.CountryEnum"
        },
        "description": {
          "canBeNull": true,
          "description": "Custom description on your ip",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "fullType": "ipBlock",
          "readOnly": true,
          "required": false,
          "type": "ipBlock"
        },
        "organisationId": {
          "canBeNull": true,
          "description": "IP block organisation Id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "routedTo": {
          "canBeNull": true,
          "description": "Routage information",
          "fullType": "ip.RoutedTo",
          "readOnly": true,
          "required": false,
          "type": "ip.RoutedTo"
        },
        "type": {
          "canBeNull": false,
          "fullType": "ip.IpTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.IpTypeEnum"
        }
      }
    },
    "ip.IpMigrationToken": {
      "description": "IP migration to OVH",
      "id": "IpMigrationToken",
      "namespace": "ip",
      "properties": {
        "customerId": {
          "canBeNull": false,
          "description": "destination customer ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "token": {
          "canBeNull": false,
          "description": "migration token",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "ip.IpTask": {
      "description": "IP tasks",
      "id": "IpTask",
      "namespace": "ip",
      "properties": {
        "comment": {
          "canBeNull": true,
          "description": "Details of this task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "destination": {
          "canBeNull": true,
          "description": "Destination for moveFloatingIp tasks",
          "fullType": "ip.RoutedTo",
          "readOnly": true,
          "required": false,
          "type": "ip.RoutedTo"
        },
        "doneDate": {
          "canBeNull": true,
          "description": "Completion date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Function name",
          "fullType": "ip.TaskFunctionEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.TaskFunctionEnum"
        },
        "lastUpdate": {
          "canBeNull": true,
          "description": "last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Task Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "ip.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.TaskStatusEnum"
        },
        "taskId": {
          "canBeNull": false,
          "description": "the id of the task",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "ip.IpTypeEnum": {
      "description": "Possible values for ip type",
      "enum": [
        "cdn",
        "cloud",
        "dedicated",
        "failover",
        "hosted_ssl",
        "housing",
        "loadBalancing",
        "mail",
        "overthebox",
        "pcc",
        "pci",
        "private",
        "vpn",
        "vps",
        "vrack",
        "xdsl"
      ],
      "enumType": "string",
      "id": "IpTypeEnum",
      "namespace": "ip"
    },
    "ip.LoadBalancingAdditionalPortEnum": {
      "description": "Additional available ports for ip loadbalancing",
      "enum": [
        "3306",
        "443",
        "5432",
        "80"
      ],
      "enumType": "long",
      "id": "LoadBalancingAdditionalPortEnum",
      "namespace": "ip"
    },
    "ip.LoadBalancingBackendIp": {
      "description": "Backends attached to your IP load balancing",
      "id": "LoadBalancingBackendIp",
      "namespace": "ip",
      "properties": {
        "backend": {
          "canBeNull": false,
          "description": "IP of your backend",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "mainBackendIp": {
          "canBeNull": true,
          "description": "If the backend has been configured as backup, this field contains the ip of the main backend",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "probe": {
          "canBeNull": false,
          "description": "Probe used for your backend",
          "fullType": "ip.LoadBalancingBackendProbeEnum",
          "readOnly": false,
          "required": false,
          "type": "ip.LoadBalancingBackendProbeEnum"
        },
        "weight": {
          "canBeNull": false,
          "description": "Weight of the backend on its zone, must be between 1 and 100, default is 8",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "zone": {
          "canBeNull": false,
          "description": "Location where your service is",
          "fullType": "ip.LoadBalancingZoneEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.LoadBalancingZoneEnum"
        }
      }
    },
    "ip.LoadBalancingBackendProbeEnum": {
      "description": "Possible values for your IP load balancing backend probe",
      "enum": [
        "http",
        "icmp",
        "none",
        "oco"
      ],
      "enumType": "string",
      "id": "LoadBalancingBackendProbeEnum",
      "namespace": "ip"
    },
    "ip.LoadBalancingIp": {
      "description": "Your load balancing IP",
      "id": "LoadBalancingIp",
      "namespace": "ip",
      "properties": {
        "ipLoadBalancing": {
          "canBeNull": false,
          "description": "Your IP load balancing",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "The internal name of your IP load balancing",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ssl": {
          "canBeNull": false,
          "description": "Ssl activation state",
          "fullType": "ip.LoadBalancingSslEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.LoadBalancingSslEnum"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of your IP",
          "fullType": "ip.LoadBalancingStateEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.LoadBalancingStateEnum"
        },
        "stickiness": {
          "canBeNull": false,
          "description": "The type of stickiness currently in place on your Ip LoadBalancing",
          "fullType": "ip.LoadBalancingStickinessEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.LoadBalancingStickinessEnum"
        },
        "zone": {
          "canBeNull": false,
          "description": "Location where your service is",
          "fullType": "ip.LoadBalancingZoneEnum[]",
          "readOnly": true,
          "required": false,
          "type": "ip.LoadBalancingZoneEnum[]"
        }
      }
    },
    "ip.LoadBalancingIp.LoadBalancingPort": {
      "description": "LoadBalancingPort mapping",
      "id": "LoadBalancingPort",
      "namespace": "ip.LoadBalancingIp",
      "properties": {
        "dstPort": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "srcPort": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "ip.LoadBalancingAdditionalPortEnum"
        }
      }
    },
    "ip.LoadBalancingSslEnum": {
      "description": "Possible values for ssl state",
      "enum": [
        "customer",
        "none",
        "ovh"
      ],
      "enumType": "string",
      "id": "LoadBalancingSslEnum",
      "namespace": "ip"
    },
    "ip.LoadBalancingStateEnum": {
      "description": "Possible values for load balancing IP state",
      "enum": [
        "blacklisted",
        "deleted",
        "free",
        "ok",
        "quarantined",
        "suspended"
      ],
      "enumType": "string",
      "id": "LoadBalancingStateEnum",
      "namespace": "ip"
    },
    "ip.LoadBalancingStickinessEnum": {
      "description": "Possible values for load balancing IP stickiness",
      "enum": [
        "cookie",
        "none",
        "sourceIp"
      ],
      "enumType": "string",
      "id": "LoadBalancingStickinessEnum",
      "namespace": "ip"
    },
    "ip.LoadBalancingTask": {
      "description": "List of tasks associated with your IP load balancing",
      "id": "LoadBalancingTask",
      "namespace": "ip",
      "properties": {
        "action": {
          "canBeNull": false,
          "description": "The action made",
          "fullType": "ip.LoadBalancingTaskActionEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.LoadBalancingTaskActionEnum"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of your task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Identifier of your task",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Current status of your task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "ip.LoadBalancingTaskActionEnum": {
      "description": "Possible values for load balancing task action",
      "enum": [
        "activateSsl",
        "addBackend",
        "addIpToBackend",
        "announceIpLoadBalancing",
        "backupStateSet",
        "backupStateUnset",
        "changeProbe",
        "delBackend",
        "desactivateSsl",
        "removeIpFromBackend",
        "setPortRedirection",
        "setStickiness",
        "setWeight",
        "unannounceIpLoadBalancing",
        "unsetPortRedirection"
      ],
      "enumType": "string",
      "id": "LoadBalancingTaskActionEnum",
      "namespace": "ip"
    },
    "ip.LoadBalancingZoneEnum": {
      "description": "Possible values for load balancing IP service location",
      "enum": [
        "bhs",
        "gra",
        "rbx",
        "sbg"
      ],
      "enumType": "string",
      "id": "LoadBalancingZoneEnum",
      "namespace": "ip"
    },
    "ip.MitigationAttack": {
      "description": "Mitigation attack on your ip",
      "id": "MitigationAttack",
      "namespace": "ip",
      "properties": {
        "endDate": {
          "canBeNull": true,
          "description": "End of the attack",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "idAttack": {
          "canBeNull": false,
          "description": "Internal id of your attack",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ipAttack": {
          "canBeNull": false,
          "description": "Your ip",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Start of the attack",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "ip.MitigationDetailedStats": {
      "description": "Detailed statistics about your traffic",
      "id": "MitigationDetailedStats",
      "namespace": "ip",
      "properties": {
        "destPort": {
          "canBeNull": true,
          "description": "Traffic dest port",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "fragments": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "icmpCode": {
          "canBeNull": true,
          "description": "ICMP protocol code",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "icmpType": {
          "canBeNull": true,
          "description": "ICMP protocol type",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "in": {
          "canBeNull": true,
          "description": "Traffic in",
          "readOnly": false,
          "required": false,
          "type": "ip.MitigationTraffic"
        },
        "out": {
          "canBeNull": true,
          "description": "Traffic out",
          "readOnly": false,
          "required": false,
          "type": "ip.MitigationTraffic"
        },
        "protocol": {
          "canBeNull": true,
          "description": "Used protocol. See RFC5237 for more information",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "srcPort": {
          "canBeNull": true,
          "description": "Traffic source port",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "syn": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "ip.MitigationIp": {
      "description": "Your IP on mitigation",
      "id": "MitigationIp",
      "namespace": "ip",
      "properties": {
        "auto": {
          "canBeNull": false,
          "description": "Set on true if your ip is on auto-mitigation",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "ipOnMitigation": {
          "canBeNull": false,
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "permanent": {
          "canBeNull": false,
          "description": "Set on true if your ip is on permanent mitigation",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of your ip on mitigation",
          "fullType": "ip.MitigationStateEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.MitigationStateEnum"
        }
      }
    },
    "ip.MitigationProfile": {
      "description": "Mitigation profile for your ip",
      "id": "MitigationProfile",
      "namespace": "ip",
      "properties": {
        "autoMitigationTimeOut": {
          "canBeNull": false,
          "description": "Delay to wait before remove ip from auto mitigation after an attack",
          "fullType": "ip.MitigationProfileAutoMitigationTimeOutEnum",
          "readOnly": false,
          "required": false,
          "type": "ip.MitigationProfileAutoMitigationTimeOutEnum"
        },
        "ipMitigationProfile": {
          "canBeNull": false,
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of your mitigation profile",
          "fullType": "ip.MitigationProfileStateEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.MitigationProfileStateEnum"
        }
      }
    },
    "ip.MitigationProfileAutoMitigationTimeOutEnum": {
      "description": "Possible values for auto mitigation timeout (minutes)",
      "enum": [
        "0",
        "15",
        "1560",
        "360",
        "60"
      ],
      "enumType": "long",
      "id": "MitigationProfileAutoMitigationTimeOutEnum",
      "namespace": "ip"
    },
    "ip.MitigationProfileStateEnum": {
      "description": "Possible values for mitigation profile state",
      "enum": [
        "ok",
        "tasksPending"
      ],
      "enumType": "string",
      "id": "MitigationProfileStateEnum",
      "namespace": "ip"
    },
    "ip.MitigationStateEnum": {
      "description": "Possible values for mitigation state",
      "enum": [
        "creationPending",
        "ok",
        "removalPending"
      ],
      "enumType": "string",
      "id": "MitigationStateEnum",
      "namespace": "ip"
    },
    "ip.MitigationStats": {
      "description": "Traffic statistics in and out on a mitigated ip",
      "id": "MitigationStats",
      "namespace": "ip",
      "properties": {
        "in": {
          "canBeNull": true,
          "description": "Traffic in",
          "readOnly": false,
          "required": false,
          "type": "ip.MitigationTraffic"
        },
        "out": {
          "canBeNull": true,
          "description": "Traffic out",
          "readOnly": false,
          "required": false,
          "type": "ip.MitigationTraffic"
        },
        "timestamp": {
          "canBeNull": false,
          "description": "Traffic timestamp",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "ip.MitigationStatsScaleEnum": {
      "description": "Possible aggregation scale on statistics",
      "enum": [
        "10s",
        "1m",
        "5m"
      ],
      "enumType": "string",
      "id": "MitigationStatsScaleEnum",
      "namespace": "ip"
    },
    "ip.MitigationTraffic": {
      "description": "Traffic on mitigation",
      "id": "MitigationTraffic",
      "namespace": "ip",
      "properties": {
        "bps": {
          "canBeNull": false,
          "description": "Bits per second",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "pps": {
          "canBeNull": false,
          "description": "Paquets per second",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "ip.ReverseDelegation": {
      "description": "Your reverse delegations on IPv6 subnet",
      "id": "ReverseDelegation",
      "namespace": "ip",
      "properties": {
        "target": {
          "canBeNull": false,
          "description": "NS target for delegation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "ip.ReverseIp": {
      "description": "Your reverse records on IP",
      "id": "ReverseIp",
      "namespace": "ip",
      "properties": {
        "ipReverse": {
          "canBeNull": false,
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "reverse": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "ip.RipeInfos": {
      "description": "IP block RIPE informations",
      "id": "RipeInfos",
      "namespace": "ip",
      "properties": {
        "description": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "netname": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ip.RoutedTo": {
      "description": "Information about routing",
      "id": "RoutedTo",
      "namespace": "ip",
      "properties": {
        "serviceName": {
          "canBeNull": true,
          "description": "Service where ip is routed to",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ip.ServiceIp": {
      "description": "Your IP linked to service",
      "id": "ServiceIp",
      "namespace": "ip",
      "properties": {
        "canBeTerminated": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "country": {
          "canBeNull": true,
          "fullType": "coreTypes.CountryEnum",
          "readOnly": true,
          "required": false,
          "type": "coreTypes.CountryEnum"
        },
        "description": {
          "canBeNull": true,
          "description": "Custom description on your ip",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "fullType": "ipBlock",
          "readOnly": true,
          "required": false,
          "type": "ipBlock"
        },
        "organisationId": {
          "canBeNull": true,
          "description": "IP block organisation Id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "routedTo": {
          "canBeNull": true,
          "description": "Routage information",
          "fullType": "ip.RoutedTo",
          "readOnly": true,
          "required": false,
          "type": "ip.RoutedTo"
        },
        "type": {
          "canBeNull": false,
          "fullType": "ip.IpTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.IpTypeEnum"
        }
      }
    },
    "ip.SpamIp": {
      "description": "Your IP spam stats",
      "id": "SpamIp",
      "namespace": "ip",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": "Last date the ip was blocked",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "ipSpamming": {
          "canBeNull": false,
          "description": "IP address which is sending spam",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of the ip",
          "fullType": "ip.SpamStateEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.SpamStateEnum"
        },
        "time": {
          "canBeNull": false,
          "description": "Time (in seconds) while the IP will be blocked",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "ip.SpamStateEnum": {
      "description": "Possible values for spam state",
      "enum": [
        "blockedForSpam",
        "unblocked",
        "unblocking"
      ],
      "enumType": "string",
      "id": "SpamStateEnum",
      "namespace": "ip"
    },
    "ip.SpamStats": {
      "description": "Spam statistics about an IP address",
      "id": "SpamStats",
      "namespace": "ip",
      "properties": {
        "averageSpamscore": {
          "canBeNull": true,
          "description": "Average spam score.",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "detectedSpams": {
          "canBeNull": true,
          "description": "Detailed list of the spams",
          "readOnly": false,
          "required": false,
          "type": "ip.SpamTarget[]"
        },
        "numberOfSpams": {
          "canBeNull": false,
          "description": "Number of spams sent",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "timestamp": {
          "canBeNull": false,
          "description": "Time when the IP address was blocked",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "total": {
          "canBeNull": false,
          "description": "Number of emails sent",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "ip.SpamTarget": {
      "description": "Spam's target information",
      "id": "SpamTarget",
      "namespace": "ip",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": "Timestamp when the email was sent",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "destinationIp": {
          "canBeNull": false,
          "description": "IP address of the target",
          "readOnly": false,
          "required": false,
          "type": "ipv4"
        },
        "messageId": {
          "canBeNull": false,
          "description": "The message-id of the email",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "spamscore": {
          "canBeNull": false,
          "description": "Spam score for the email",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "ip.TaskFunctionEnum": {
      "description": "different task operation",
      "enum": [
        "arinBlockReassign",
        "changeRipeOrg",
        "checkAndReleaseIp",
        "genericMoveFloatingIp"
      ],
      "enumType": "string",
      "id": "TaskFunctionEnum",
      "namespace": "ip"
    },
    "ip.TaskStatusEnum": {
      "description": "different task status",
      "enum": [
        "cancelled",
        "customerError",
        "doing",
        "done",
        "init",
        "ovhError",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "ip"
    },
    "ipLoadbalancing.Task.Task": {
      "description": "IP Load Balancing Operations",
      "id": "Task",
      "namespace": "ipLoadbalancing.Task",
      "properties": {
        "action": {
          "canBeNull": false,
          "description": "Operation type",
          "fullType": "ipLoadbalancing.TaskActionEnum",
          "readOnly": true,
          "required": false,
          "type": "ipLoadbalancing.TaskActionEnum"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of your operation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "doneDate": {
          "canBeNull": true,
          "description": "Done date of your operation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the operation",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "progress": {
          "canBeNull": false,
          "description": "Operation progress percentage",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Current status of your operation",
          "fullType": "ipLoadbalancing.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "ipLoadbalancing.TaskStatusEnum"
        },
        "zones": {
          "canBeNull": false,
          "description": "Zone of your Load Balancer which are updated by current Task",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "ipLoadbalancing.TaskActionEnum": {
      "description": "Possible task action",
      "enum": [
        "deleteIplb",
        "deployIplb",
        "install",
        "installIplb",
        "installZone",
        "orderFreeCertificate",
        "orderPaidCertificate",
        "orderSsl",
        "refreshIplb",
        "releaseIplb",
        "releaseIplbZone",
        "reopenIplb",
        "suspendIplb",
        "suspendZone",
        "switchToIplbNextGenerationApi",
        "vrackAttach",
        "vrackDetach"
      ],
      "enumType": "string",
      "id": "TaskActionEnum",
      "namespace": "ipLoadbalancing"
    },
    "ipLoadbalancing.TaskStatusEnum": {
      "description": "Possible task status",
      "enum": [
        "blocked",
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "ipLoadbalancing"
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
  "resourcePath": "/ip"
}