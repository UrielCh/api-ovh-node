import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/ip",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "type",
              "dataType": "ip.IpTypeEnum",
              "paramType": "query",
              "fullType": "ip.IpTypeEnum",
              "required": false,
              "description": "Filter the value of type property (=)"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of description property (like)"
            },
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "query",
              "fullType": "ipBlock",
              "required": false,
              "description": "Filter the value of ip property (contains or equals)"
            },
            {
              "name": "routedTo.serviceName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of routedTo.serviceName property (like)"
            }
          ],
          "responseType": "ipBlock[]",
          "noAuthentication": false,
          "description": "Your OVH IPs"
        }
      ],
      "description": "List the ip.Ip objects"
    },
    {
      "path": "/ip/loadBalancing",
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
      "description": "Operations about the IP service"
    },
    {
      "path": "/ip/loadBalancing/{serviceName}",
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
          "responseType": "ip.LoadBalancingIp",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Your load balancing IP"
    },
    {
      "path": "/ip/loadBalancing/{serviceName}/allowedBackends",
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
          "responseType": "ip[]",
          "noAuthentication": false,
          "description": "List of backends you can attach to your IP"
        }
      ],
      "description": "allowedBackends operations"
    },
    {
      "path": "/ip/loadBalancing/{serviceName}/backend",
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
          "responseType": "ipv4[]",
          "noAuthentication": false,
          "description": "Backends for this IP load balancing"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "probe",
              "dataType": "ip.LoadBalancingBackendProbeEnum",
              "paramType": "body",
              "fullType": "ip.LoadBalancingBackendProbeEnum",
              "required": true,
              "description": "The type of probe used"
            },
            {
              "name": "weight",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Weight of the backend on its zone, must be between 1 and 100"
            },
            {
              "name": "ipBackend",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "IP of your backend"
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
          "responseType": "ip.LoadBalancingTask",
          "noAuthentication": false,
          "description": "Add a new backend on your IP load balancing"
        }
      ],
      "description": "List the ip.LoadBalancingBackendIp objects"
    },
    {
      "path": "/ip/loadBalancing/{serviceName}/backend/{backend}",
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
              "name": "backend",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Backend"
            }
          ],
          "responseType": "ip.LoadBalancingTask",
          "noAuthentication": false,
          "description": "Remove a backend IP"
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
              "name": "backend",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Backend"
            }
          ],
          "responseType": "ip.LoadBalancingBackendIp",
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
              "dataType": "ip.LoadBalancingBackendIp",
              "paramType": "body",
              "fullType": "ip.LoadBalancingBackendIp",
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
              "name": "backend",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Backend"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Backends attached to your IP load balancing"
    },
    {
      "path": "/ip/loadBalancing/{serviceName}/backend/{backend}/backupState",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "backupStateSet",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Set or unset the backend as backup. mainBackendIp is optional in case of unset"
            },
            {
              "name": "mainBackendIp",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": false,
              "description": "Main backend ip, must be in the same zone as the backup"
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
              "name": "backend",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Backend"
            }
          ],
          "responseType": "ip.LoadBalancingTask",
          "noAuthentication": false,
          "description": "Set or unset the backend as a backup of another backend. Requests will be directed to the backup only if the main backend is in probe fail"
        }
      ],
      "description": "backupState operations"
    },
    {
      "path": "/ip/loadBalancing/{serviceName}/backend/{backend}/setWeight",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "weight",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "weight of the backend, must be between 1 and 100, default is 8"
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
              "name": "backend",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Backend"
            }
          ],
          "responseType": "ip.LoadBalancingTask",
          "noAuthentication": false,
          "description": "Set the weight of a backend. For instance, if backend A has a weight of 8 and backup B was a weight of 16, backend B will receive twice more connections as backend A. Backends must be on the same POP for the weight parameter to take effect between them."
        }
      ],
      "description": "setWeight operations"
    },
    {
      "path": "/ip/loadBalancing/{serviceName}/importCustomSsl",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "certificate",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "certificate"
            },
            {
              "name": "key",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "certificate key"
            },
            {
              "name": "chain",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": false,
              "description": "certificate chain"
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
          "responseType": "ip.LoadBalancingTask",
          "noAuthentication": false,
          "description": "Import your own ssl certificate on your IP load balancing. Ssl option is needed to use this url."
        }
      ],
      "description": "importCustomSsl operations"
    },
    {
      "path": "/ip/loadBalancing/{serviceName}/internalNatIp",
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
              "name": "zone",
              "dataType": "ip.LoadBalancingZoneEnum",
              "paramType": "query",
              "fullType": "ip.LoadBalancingZoneEnum",
              "required": true,
              "description": "one of your ip loadbalancing's zone"
            }
          ],
          "responseType": "ipBlock",
          "noAuthentication": false,
          "description": "Ip subnet used by OVH to nat requests on your ip lb to your backends. You must ensure that your backends are not part of a network that overlap with this one."
        }
      ],
      "description": "internalNatIp operations"
    },
    {
      "path": "/ip/loadBalancing/{serviceName}/portsRedirection",
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
          "responseType": "ip.LoadBalancingAdditionalPortEnum[]",
          "noAuthentication": false,
          "description": "Get all srcPort"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "ip.LoadBalancingIp.LoadBalancingPort",
              "paramType": "body",
              "fullType": "ip.LoadBalancingIp.LoadBalancingPort",
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
          "responseType": "ip.LoadBalancingTask",
          "noAuthentication": false,
          "description": "Add a new port redirection"
        }
      ],
      "description": "List the portsRedirection objects"
    },
    {
      "path": "/ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "srcPort",
              "dataType": "ip.LoadBalancingAdditionalPortEnum",
              "paramType": "path",
              "fullType": "ip.LoadBalancingAdditionalPortEnum",
              "required": true,
              "description": "Src port"
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
          "responseType": "ip.LoadBalancingTask",
          "noAuthentication": false,
          "description": "Delete a port redirection"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "srcPort",
              "dataType": "ip.LoadBalancingAdditionalPortEnum",
              "paramType": "path",
              "fullType": "ip.LoadBalancingAdditionalPortEnum",
              "required": true,
              "description": "Src port"
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
          "responseType": "ip.LoadBalancingIp.LoadBalancingPort",
          "noAuthentication": false,
          "description": "Get the value for the given srcPort"
        }
      ],
      "description": "Port redirections"
    },
    {
      "path": "/ip/loadBalancing/{serviceName}/probeIp",
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
              "name": "zone",
              "dataType": "ip.LoadBalancingZoneEnum",
              "paramType": "query",
              "fullType": "ip.LoadBalancingZoneEnum",
              "required": true,
              "description": "one of your ip loadbalancing's zone"
            }
          ],
          "responseType": "ipBlock[]",
          "noAuthentication": false,
          "description": "Ip subnet used to send probes to your backends"
        }
      ],
      "description": "probeIp operations"
    },
    {
      "path": "/ip/loadBalancing/{serviceName}/restoreSsl",
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
          "responseType": "ip.LoadBalancingTask",
          "noAuthentication": false,
          "description": "Restore OVH' ssl certificate on your IP load balancing. Ssl option is needed to use this url. (A DCV mail will be sent to postmaster@your-domain.abc)"
        }
      ],
      "description": "restoreSsl operations"
    },
    {
      "path": "/ip/loadBalancing/{serviceName}/serviceInfos",
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
      "path": "/ip/loadBalancing/{serviceName}/stickiness",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "stickiness",
              "dataType": "ip.LoadBalancingStickinessEnum",
              "paramType": "body",
              "fullType": "ip.LoadBalancingStickinessEnum",
              "required": true,
              "description": "The stickiness you want on your IP LoadBalancing"
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
          "responseType": "ip.LoadBalancingTask",
          "noAuthentication": false,
          "description": "Set Stickiness type. 'ipSource' will stick clients to a backend by their source ip, 'cookie' will stick them by inserting a cookie, 'none' is to set no stickiness"
        }
      ],
      "description": "stickiness operations"
    },
    {
      "path": "/ip/loadBalancing/{serviceName}/switchToIplbNextGenerationApi",
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
          "responseType": "ipLoadbalancing.Task.Task",
          "noAuthentication": false,
          "description": "Switch to ipLoadbalancing next-gen API. Benefits : additionnals probes, DDOS protection."
        }
      ],
      "description": "switchToIplbNextGenerationApi operations"
    },
    {
      "path": "/ip/loadBalancing/{serviceName}/task",
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
          "description": "Task list associated with this IP"
        }
      ],
      "description": "List the ip.LoadBalancingTask objects"
    },
    {
      "path": "/ip/loadBalancing/{serviceName}/task/{taskId}",
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
          "responseType": "ip.LoadBalancingTask",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "List of tasks associated with your IP load balancing"
    },
    {
      "path": "/ip/service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the IP service"
    },
    {
      "path": "/ip/service/{serviceName}",
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
          "responseType": "ip.ServiceIp",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "ip.ServiceIp",
              "paramType": "body",
              "fullType": "ip.ServiceIp",
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
      "description": "Your IP linked to service"
    },
    {
      "path": "/ip/service/{serviceName}/changeContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
      "path": "/ip/service/{serviceName}/confirmTermination",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
      "path": "/ip/service/{serviceName}/serviceInfos",
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
      "path": "/ip/service/{serviceName}/terminate",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
    },
    {
      "path": "/ip/{ip}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "ip.Ip",
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
              "dataType": "ip.Ip",
              "paramType": "body",
              "fullType": "ip.Ip",
              "required": true,
              "description": "Request Body"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Your IP"
    },
    {
      "path": "/ip/{ip}/antihack",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "state",
              "dataType": "ip.BlockedIpStateEnum",
              "paramType": "query",
              "fullType": "ip.BlockedIpStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            }
          ],
          "responseType": "ipv4[]",
          "noAuthentication": false,
          "description": "Anti-Hack blocked IP"
        }
      ],
      "description": "List the ip.BlockedIp objects"
    },
    {
      "path": "/ip/{ip}/antihack/{ipBlocked}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipBlocked",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip blocked"
            }
          ],
          "responseType": "ip.BlockedIp",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Blocked IP information"
    },
    {
      "path": "/ip/{ip}/antihack/{ipBlocked}/unblock",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipBlocked",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip blocked"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Unblock this IP"
        }
      ],
      "description": "unblock operations"
    },
    {
      "path": "/ip/{ip}/arp",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "state",
              "dataType": "ip.ArpStateEnum",
              "paramType": "query",
              "fullType": "ip.ArpStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            }
          ],
          "responseType": "ipv4[]",
          "noAuthentication": false,
          "description": "ARP blocked IP"
        }
      ],
      "description": "List the ip.ArpBlockedIp objects"
    },
    {
      "path": "/ip/{ip}/arp/{ipBlocked}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipBlocked",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip blocked"
            }
          ],
          "responseType": "ip.ArpBlockedIp",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "ARP blocked IP information"
    },
    {
      "path": "/ip/{ip}/arp/{ipBlocked}/unblock",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipBlocked",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip blocked"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Unblock this IP"
        }
      ],
      "description": "unblock operations"
    },
    {
      "path": "/ip/{ip}/changeOrg",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "organisation",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Your organisation id (RIPE_XXXX) to add on block informations"
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
          "responseType": "ip.IpTask",
          "noAuthentication": false,
          "description": "Change organisation of this IP"
        }
      ],
      "description": "changeOrg operations"
    },
    {
      "path": "/ip/{ip}/delegation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Reverse delegation on IPv6 subnet"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "target",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Target for reverse delegation on IPv6"
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
          "responseType": "ip.ReverseDelegation",
          "noAuthentication": false,
          "description": "Add target for reverse delegation on IPv6 subnet"
        }
      ],
      "description": "List the ip.ReverseDelegation objects"
    },
    {
      "path": "/ip/{ip}/delegation/{target}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "target",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Target"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a target for reverse delegation on IPv6 subnet"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "target",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Target"
            }
          ],
          "responseType": "ip.ReverseDelegation",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Your reverse delegations on IPv6 subnet"
    },
    {
      "path": "/ip/{ip}/firewall",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "enabled",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Filter the value of enabled property (=)"
            },
            {
              "name": "state",
              "dataType": "ip.FirewallStateEnum",
              "paramType": "query",
              "fullType": "ip.FirewallStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            }
          ],
          "responseType": "ipv4[]",
          "noAuthentication": false,
          "description": "Ip under firewall"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ipOnFirewall",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": ""
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
          "responseType": "ip.FirewallIp",
          "noAuthentication": false,
          "description": "AntiDDOS option. Add new IP on firewall"
        }
      ],
      "description": "List the ip.FirewallIp objects"
    },
    {
      "path": "/ip/{ip}/firewall/{ipOnFirewall}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipOnFirewall",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on firewall"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "AntiDDOS option. Delete IP and rules from firewall"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ipOnFirewall",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on firewall"
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
          "responseType": "ip.FirewallIp",
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
              "dataType": "ip.FirewallIp",
              "paramType": "body",
              "fullType": "ip.FirewallIp",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipOnFirewall",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on firewall"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Your IP on firewall"
    },
    {
      "path": "/ip/{ip}/firewall/{ipOnFirewall}/rule",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipOnFirewall",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on firewall"
            },
            {
              "name": "state",
              "dataType": "ip.FirewallRuleStateEnum",
              "paramType": "query",
              "fullType": "ip.FirewallRuleStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Rules for this IP"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "sourcePort",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Source port for your rule. Only with TCP/UDP protocol"
            },
            {
              "name": "source",
              "dataType": "ipv4Block",
              "paramType": "body",
              "fullType": "ipv4Block",
              "required": false,
              "description": "Source ip for your rule. Any if not set"
            },
            {
              "name": "action",
              "dataType": "ip.FirewallActionEnum",
              "paramType": "body",
              "fullType": "ip.FirewallActionEnum",
              "required": true,
              "description": "Action on this rule"
            },
            {
              "name": "tcpOption",
              "dataType": "ip.FirewallOptionTCP",
              "paramType": "body",
              "fullType": "ip.FirewallOptionTCP",
              "required": false,
              "description": "Option on your rule. Can only be used with TCP protocol"
            },
            {
              "name": "protocol",
              "dataType": "ip.FirewallProtocolEnum",
              "paramType": "body",
              "fullType": "ip.FirewallProtocolEnum",
              "required": true,
              "description": "Network protocol"
            },
            {
              "name": "sequence",
              "dataType": "ip.FirewallSequenceRangeEnum",
              "paramType": "body",
              "fullType": "ip.FirewallSequenceRangeEnum",
              "required": true,
              "description": "Sequence number of your rule"
            },
            {
              "name": "destinationPort",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Destination port for your rule. Only with TCP/UDP protocol"
            },
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipOnFirewall",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on firewall"
            }
          ],
          "responseType": "ip.FirewallNetworkRule",
          "noAuthentication": false,
          "description": "AntiDDOS option. Add new rule on your IP"
        }
      ],
      "description": "List the ip.FirewallNetworkRule objects"
    },
    {
      "path": "/ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipOnFirewall",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on firewall"
            },
            {
              "name": "sequence",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Sequence"
            }
          ],
          "responseType": "ip.FirewallNetworkRule",
          "noAuthentication": false,
          "description": "AntiDDOS option. Delete rule"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ipOnFirewall",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on firewall"
            },
            {
              "name": "sequence",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Sequence"
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
          "responseType": "ip.FirewallNetworkRule",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Rule on ip"
    },
    {
      "path": "/ip/{ip}/game",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "ipv4[]",
          "noAuthentication": false,
          "description": "Ip under game anti-ddos"
        }
      ],
      "description": "List the ip.GameMitigation objects"
    },
    {
      "path": "/ip/{ip}/game/{ipOnGame}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipOnGame",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on game"
            }
          ],
          "responseType": "ip.GameMitigation",
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
              "dataType": "ip.GameMitigation",
              "paramType": "body",
              "fullType": "ip.GameMitigation",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipOnGame",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on game"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "GAME Anti-DDoS"
    },
    {
      "path": "/ip/{ip}/game/{ipOnGame}/rule",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipOnGame",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on game"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "IDs of rules configured for this IP"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "protocol",
              "dataType": "ip.GameMitigationRuleProtocolEnum",
              "paramType": "body",
              "fullType": "ip.GameMitigationRuleProtocolEnum",
              "required": true,
              "description": "The protocol running behind the given port"
            },
            {
              "name": "ports",
              "dataType": "complexType.Range<long>",
              "paramType": "body",
              "fullType": "complexType.Range<long>",
              "required": true,
              "description": "The UDP port range to apply the rule on"
            },
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipOnGame",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on game"
            }
          ],
          "responseType": "ip.GameMitigationRule",
          "noAuthentication": false,
          "description": "Add new rule on your IP"
        }
      ],
      "description": "List the ip.GameMitigationRule objects"
    },
    {
      "path": "/ip/{ip}/game/{ipOnGame}/rule/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipOnGame",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on game"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "ip.GameMitigationRule",
          "noAuthentication": false,
          "description": "Delete rule"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipOnGame",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on game"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "ip.GameMitigationRule",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Rule on ip:ports"
    },
    {
      "path": "/ip/{ip}/license/cloudLinux",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipAddress",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": false,
              "description": "Filter the value of ipAddress property (=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Cloud Linux licenses associated to this IP"
        }
      ],
      "description": "List the license.cloudLinux.CloudLinux objects"
    },
    {
      "path": "/ip/{ip}/license/cpanel",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipAddress",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": false,
              "description": "Filter the value of ipAddress property (=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Cpanel licenses associated to this IP"
        }
      ],
      "description": "List the license.cpanel.Cpanel objects"
    },
    {
      "path": "/ip/{ip}/license/directadmin",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipAddress",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": false,
              "description": "Filter the value of ipAddress property (=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "DirectAdmin licenses associated to this IP"
        }
      ],
      "description": "List the license.directadmin.DirectAdmin objects"
    },
    {
      "path": "/ip/{ip}/license/plesk",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipAddress",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": false,
              "description": "Filter the value of ipAddress property (=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Plesk licenses associated to this IP"
        }
      ],
      "description": "List the license.plesk.Plesk objects"
    },
    {
      "path": "/ip/{ip}/license/sqlserver",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipAddress",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": false,
              "description": "Filter the value of ipAddress property (=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "SQL Server licenses associated to this IP"
        }
      ],
      "description": "List the license.sqlserver.SqlServer objects"
    },
    {
      "path": "/ip/{ip}/license/virtuozzo",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipAddress",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": false,
              "description": "Filter the value of ipAddress property (=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Virtuozzo licenses associated to this IP"
        }
      ],
      "description": "List the license.virtuozzo.Virtuozzo objects"
    },
    {
      "path": "/ip/{ip}/license/windows",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipAddress",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": false,
              "description": "Filter the value of ipAddress property (=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Windows licenses associated to this IP"
        }
      ],
      "description": "List the license.windows.Windows objects"
    },
    {
      "path": "/ip/{ip}/license/worklight",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipAddress",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": false,
              "description": "Filter the value of ipAddress property (=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "WorkLight licenses associated to this IP"
        }
      ],
      "description": "List the license.worklight.WorkLight objects"
    },
    {
      "path": "/ip/{ip}/migrationToken",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "ip.IpMigrationToken",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "customerId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "destination customer ID"
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
          "responseType": "ip.IpMigrationToken",
          "noAuthentication": false,
          "description": "Generate a migration token"
        }
      ],
      "description": "IP migration to OVH"
    },
    {
      "path": "/ip/{ip}/mitigation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "auto",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Filter the value of auto property (=)"
            },
            {
              "name": "state",
              "dataType": "ip.MitigationStateEnum",
              "paramType": "query",
              "fullType": "ip.MitigationStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            }
          ],
          "responseType": "ipv4[]",
          "noAuthentication": false,
          "description": "Ip under mitigation"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ipOnMitigation",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": ""
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
          "responseType": "ip.MitigationIp",
          "noAuthentication": false,
          "description": "AntiDDOS option. Add new IP on permanent mitigation"
        }
      ],
      "description": "List the ip.MitigationIp objects"
    },
    {
      "path": "/ip/{ip}/mitigation/{ipOnMitigation}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipOnMitigation",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on mitigation"
            }
          ],
          "responseType": "ip.MitigationIp",
          "noAuthentication": false,
          "description": "AntiDDOS option. Delete IP from mitigation"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipOnMitigation",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on mitigation"
            }
          ],
          "responseType": "ip.MitigationIp",
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
              "dataType": "ip.MitigationIp",
              "paramType": "body",
              "fullType": "ip.MitigationIp",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "ipOnMitigation",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on mitigation"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Your IP on mitigation"
    },
    {
      "path": "/ip/{ip}/mitigation/{ipOnMitigation}/stats",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipOnMitigation",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on mitigation"
            },
            {
              "name": "scale",
              "dataType": "ip.MitigationStatsScaleEnum",
              "paramType": "query",
              "fullType": "ip.MitigationStatsScaleEnum",
              "required": true,
              "description": "Scale of aggregation"
            },
            {
              "name": "to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": true,
              "description": "End date"
            },
            {
              "name": "from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": true,
              "description": "Start date"
            }
          ],
          "responseType": "ip.MitigationStats[]",
          "noAuthentication": false,
          "description": "AntiDDOS option. Get statistics about your traffic in and out during this mitigation"
        }
      ],
      "description": "stats operations"
    },
    {
      "path": "/ip/{ip}/mitigation/{ipOnMitigation}/topStream",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipOnMitigation",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on mitigation"
            },
            {
              "name": "date",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": true,
              "description": "Date to view top traffic"
            },
            {
              "name": "scale",
              "dataType": "ip.MitigationStatsScaleEnum",
              "paramType": "query",
              "fullType": "ip.MitigationStatsScaleEnum",
              "required": true,
              "description": "Scale of aggregation"
            }
          ],
          "responseType": "ip.MitigationDetailedStats[]",
          "noAuthentication": false,
          "description": "AntiDDOS option. Get top stream on your ip on a specific timestamp"
        }
      ],
      "description": "topStream operations"
    },
    {
      "path": "/ip/{ip}/mitigationProfiles",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "ipv4[]",
          "noAuthentication": false,
          "description": "Manage mitigation profile on your IPs"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ipMitigationProfile",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": ""
            },
            {
              "name": "autoMitigationTimeOut",
              "dataType": "ip.MitigationProfileAutoMitigationTimeOutEnum",
              "paramType": "body",
              "fullType": "ip.MitigationProfileAutoMitigationTimeOutEnum",
              "required": true,
              "description": "Delay to wait before remove ip from auto mitigation after an attack"
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
          "responseType": "ip.MitigationProfile",
          "noAuthentication": false,
          "description": "Create new profile for one of your ip"
        }
      ],
      "description": "List the ip.MitigationProfile objects"
    },
    {
      "path": "/ip/{ip}/mitigationProfiles/{ipMitigationProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipMitigationProfile",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip mitigation profile"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete mitigation profile"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipMitigationProfile",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip mitigation profile"
            }
          ],
          "responseType": "ip.MitigationProfile",
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
              "dataType": "ip.MitigationProfile",
              "paramType": "body",
              "fullType": "ip.MitigationProfile",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "ipMitigationProfile",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip mitigation profile"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Mitigation profile for your ip"
    },
    {
      "path": "/ip/{ip}/move",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "ip.Destinations",
          "noAuthentication": false,
          "description": "List services available as a destination"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "to",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Service destination"
            },
            {
              "name": "nexthop",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Nexthop of destination service"
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
          "responseType": "ip.IpTask",
          "noAuthentication": false,
          "description": "Move this IP to another service"
        }
      ],
      "description": "move operations"
    },
    {
      "path": "/ip/{ip}/park",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "ip.IpTask",
          "noAuthentication": false,
          "description": "Park this IP"
        }
      ],
      "description": "park operations"
    },
    {
      "path": "/ip/{ip}/phishing",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipOnAntiphishing",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": false,
              "description": "Filter the value of ipOnAntiphishing property (within or equals)"
            },
            {
              "name": "state",
              "dataType": "ip.AntiphishingStateEnum",
              "paramType": "query",
              "fullType": "ip.AntiphishingStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Ip under anti-phishing"
        }
      ],
      "description": "List the ip.Antiphishing objects"
    },
    {
      "path": "/ip/{ip}/phishing/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
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
          "responseType": "ip.Antiphishing",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Phishing URLs hosted on your IP"
    },
    {
      "path": "/ip/{ip}/reverse",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "ip[]",
          "noAuthentication": false,
          "description": "Reverse on your ip"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ipReverse",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": true,
              "description": ""
            },
            {
              "name": "reverse",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": ""
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
          "responseType": "ip.ReverseIp",
          "noAuthentication": false,
          "description": "Add reverse on an ip"
        }
      ],
      "description": "List the ip.ReverseIp objects"
    },
    {
      "path": "/ip/{ip}/reverse/{ipReverse}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipReverse",
              "dataType": "ip",
              "paramType": "path",
              "fullType": "ip",
              "required": true,
              "description": "Ip reverse"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a reverse on one IP"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipReverse",
              "dataType": "ip",
              "paramType": "path",
              "fullType": "ip",
              "required": true,
              "description": "Ip reverse"
            }
          ],
          "responseType": "ip.ReverseIp",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Your reverse records on IP"
    },
    {
      "path": "/ip/{ip}/ripe",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "ip.RipeInfos",
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
              "dataType": "ip.RipeInfos",
              "paramType": "body",
              "fullType": "ip.RipeInfos",
              "required": true,
              "description": "Request Body"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "IP block RIPE informations"
    },
    {
      "path": "/ip/{ip}/spam",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "state",
              "dataType": "ip.SpamStateEnum",
              "paramType": "query",
              "fullType": "ip.SpamStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            }
          ],
          "responseType": "ipv4[]",
          "noAuthentication": false,
          "description": "Ip spamming"
        }
      ],
      "description": "List the ip.SpamIp objects"
    },
    {
      "path": "/ip/{ip}/spam/{ipSpamming}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipSpamming",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip spamming"
            }
          ],
          "responseType": "ip.SpamIp",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Your IP spam stats"
    },
    {
      "path": "/ip/{ip}/spam/{ipSpamming}/stats",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipSpamming",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip spamming"
            },
            {
              "name": "from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": true,
              "description": "Start date"
            },
            {
              "name": "to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": true,
              "description": "End date"
            }
          ],
          "responseType": "ip.SpamStats[]",
          "noAuthentication": false,
          "description": "Get statistics about the email traffic"
        }
      ],
      "description": "stats operations"
    },
    {
      "path": "/ip/{ip}/spam/{ipSpamming}/unblock",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "ipSpamming",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip spamming"
            }
          ],
          "responseType": "ip.SpamIp",
          "noAuthentication": false,
          "description": "Release the ip from anti-spam system"
        }
      ],
      "description": "unblock operations"
    },
    {
      "path": "/ip/{ip}/task",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            },
            {
              "name": "status",
              "dataType": "ip.TaskStatusEnum",
              "paramType": "query",
              "fullType": "ip.TaskStatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "name": "function",
              "dataType": "ip.TaskFunctionEnum",
              "paramType": "query",
              "fullType": "ip.TaskFunctionEnum",
              "required": false,
              "description": "Filter the value of function property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "IP tasks"
        }
      ],
      "description": "List the ip.IpTask objects"
    },
    {
      "path": "/ip/{ip}/task/{taskId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
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
          "responseType": "ip.IpTask",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "IP tasks"
    },
    {
      "path": "/ip/{ip}/terminate",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2017-01-21T00:00:00+01:00",
            "deprecatedDate": "2016-07-21T00:00:00+01:00",
            "replacement": "/ip/service/{serviceName}/terminate"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "ip.IpTask",
          "noAuthentication": false,
          "description": "Delete a failover IP"
        }
      ],
      "description": "terminate operations"
    }
  ],
  "resourcePath": "/ip",
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "complexType.Range<T>": {
      "id": "Range",
      "namespace": "complexType",
      "description": "Start and end points (inclusive) of a range",
      "generics": [
        "T"
      ],
      "properties": {
        "from": {
          "type": "T",
          "fullType": "T",
          "canBeNull": false,
          "readOnly": false,
          "description": "Start point of the range",
          "required": true
        },
        "to": {
          "type": "T",
          "fullType": "T",
          "canBeNull": false,
          "readOnly": false,
          "description": "End point of the range",
          "required": true
        }
      }
    },
    "coreTypes.CountryEnum": {
      "id": "CountryEnum",
      "namespace": "coreTypes",
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
      "enumType": "string"
    },
    "ip.Antiphishing": {
      "id": "Antiphishing",
      "namespace": "ip",
      "description": "Phishing URLs hosted on your IP",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the event",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Internal ID of the phishing entry",
          "required": true
        },
        "ipOnAntiphishing": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "description": "IP address hosting the phishing URL",
          "required": true
        },
        "state": {
          "type": "ip.AntiphishingStateEnum",
          "fullType": "ip.AntiphishingStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current state of the phishing",
          "required": true
        },
        "urlPhishing": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Phishing URL",
          "required": true
        }
      }
    },
    "ip.AntiphishingStateEnum": {
      "id": "AntiphishingStateEnum",
      "namespace": "ip",
      "description": "Possible values for antiphishing state",
      "enum": [
        "blocked",
        "blocking",
        "unblocked",
        "unblocking"
      ],
      "enumType": "string"
    },
    "ip.ArpBlockedIp": {
      "id": "ArpBlockedIp",
      "namespace": "ip",
      "description": "ARP blocked IP information",
      "properties": {
        "blockedSince": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "The last blocking date",
          "required": true
        },
        "ipBlocked": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "description": "your IP",
          "required": true
        },
        "logs": {
          "type": "text",
          "fullType": "text",
          "canBeNull": true,
          "readOnly": true,
          "description": "ARP logs",
          "required": false
        },
        "state": {
          "type": "ip.ArpStateEnum",
          "fullType": "ip.ArpStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "this IP address state",
          "required": true
        },
        "time": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Time (in seconds) remaining before you can request your IP to be unblocked",
          "required": true
        }
      }
    },
    "ip.ArpStateEnum": {
      "id": "ArpStateEnum",
      "namespace": "ip",
      "description": "Possible values for IP state",
      "enum": [
        "blocked",
        "unblocking"
      ],
      "enumType": "string"
    },
    "ip.BlockedIp": {
      "id": "BlockedIp",
      "namespace": "ip",
      "description": "Blocked IP information",
      "properties": {
        "blockedSince": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "The last blocking date",
          "required": true
        },
        "ipBlocked": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "description": "your IP",
          "required": true
        },
        "logs": {
          "type": "text",
          "fullType": "text",
          "canBeNull": true,
          "readOnly": true,
          "description": "Logs",
          "required": false
        },
        "state": {
          "type": "ip.BlockedIpStateEnum",
          "fullType": "ip.BlockedIpStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "this IP address state",
          "required": true
        },
        "time": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Time (in seconds) remaining before you can request your IP to be unblocked",
          "required": true
        }
      }
    },
    "ip.BlockedIpStateEnum": {
      "id": "BlockedIpStateEnum",
      "namespace": "ip",
      "description": "Possible values for IP state",
      "enum": [
        "blocked",
        "unblocking"
      ],
      "enumType": "string"
    },
    "ip.Destination": {
      "id": "Destination",
      "namespace": "ip",
      "description": "A structure given service and its nexthops as a destination for failover ips",
      "properties": {
        "nexthop": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Nexthops available on this service",
          "required": false
        },
        "service": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Service destination",
          "required": true
        }
      }
    },
    "ip.Destinations": {
      "id": "Destinations",
      "namespace": "ip",
      "description": "A structure given all services allowed as a destination for this ip",
      "properties": {
        "cloudProject": {
          "type": "ip.Destination[]",
          "fullType": "ip.Destination[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "list of public cloud projects",
          "required": false
        },
        "dedicatedCloud": {
          "type": "ip.Destination[]",
          "fullType": "ip.Destination[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "list of dedicated clouds",
          "required": false
        },
        "dedicatedServer": {
          "type": "ip.Destination[]",
          "fullType": "ip.Destination[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "list of dedicated servers",
          "required": false
        },
        "hostingReseller": {
          "type": "ip.Destination[]",
          "fullType": "ip.Destination[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "list of hosting reseller services",
          "required": false
        },
        "ipLoadbalancing": {
          "type": "ip.Destination[]",
          "fullType": "ip.Destination[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "list of load balancing services",
          "required": false
        },
        "vps": {
          "type": "ip.Destination[]",
          "fullType": "ip.Destination[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "list of vps",
          "required": false
        }
      }
    },
    "ip.FirewallActionEnum": {
      "id": "FirewallActionEnum",
      "namespace": "ip",
      "description": "Possible values for action",
      "enum": [
        "deny",
        "permit"
      ],
      "enumType": "string"
    },
    "ip.FirewallIp": {
      "id": "FirewallIp",
      "namespace": "ip",
      "description": "Your IP on firewall",
      "properties": {
        "enabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "ipOnFirewall": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "state": {
          "type": "ip.FirewallStateEnum",
          "fullType": "ip.FirewallStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current state of your ip on firewall",
          "required": true
        }
      }
    },
    "ip.FirewallNetworkRule": {
      "id": "FirewallNetworkRule",
      "namespace": "ip",
      "description": "Rule on ip",
      "properties": {
        "action": {
          "type": "ip.FirewallActionEnum",
          "fullType": "ip.FirewallActionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Action on this rule",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "destination": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Destination ip for your rule",
          "required": true
        },
        "destinationPort": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Destination port range for your rule. Only with TCP/UDP protocol",
          "required": false
        },
        "fragments": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Fragments option",
          "required": false
        },
        "protocol": {
          "type": "ip.FirewallProtocolEnum",
          "fullType": "ip.FirewallProtocolEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Network protocol",
          "required": true
        },
        "rule": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "sequence": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "source": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Source ip for your rule",
          "required": true
        },
        "sourcePort": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Source port range for your rule. Only with TCP/UDP protocol",
          "required": false
        },
        "state": {
          "type": "ip.FirewallRuleStateEnum",
          "fullType": "ip.FirewallRuleStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current state of your rule",
          "required": true
        },
        "tcpOption": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "TCP option on your rule",
          "required": false
        }
      }
    },
    "ip.FirewallOptionTCP": {
      "id": "FirewallOptionTCP",
      "namespace": "ip",
      "description": "Possible option for TCP",
      "properties": {
        "fragments": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "TCP fragments",
          "required": false
        },
        "option": {
          "type": "ip.FirewallTCPOptionEnum",
          "fullType": "ip.FirewallTCPOptionEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "TCP option",
          "required": false
        }
      }
    },
    "ip.FirewallProtocolEnum": {
      "id": "FirewallProtocolEnum",
      "namespace": "ip",
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
      "enumType": "string"
    },
    "ip.FirewallRuleStateEnum": {
      "id": "FirewallRuleStateEnum",
      "namespace": "ip",
      "description": "Possible values for firewall rule state",
      "enum": [
        "creationPending",
        "ok",
        "removalPending"
      ],
      "enumType": "string"
    },
    "ip.FirewallSequenceRangeEnum": {
      "id": "FirewallSequenceRangeEnum",
      "namespace": "ip",
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
      "enumType": "long"
    },
    "ip.FirewallStateEnum": {
      "id": "FirewallStateEnum",
      "namespace": "ip",
      "description": "Possible values for firewall ip state",
      "enum": [
        "disableFirewallPending",
        "enableFirewallPending",
        "ok"
      ],
      "enumType": "string"
    },
    "ip.FirewallTCPOptionEnum": {
      "id": "FirewallTCPOptionEnum",
      "namespace": "ip",
      "description": "Possible values for TCP option - only for TCP protocol",
      "enum": [
        "established",
        "syn"
      ],
      "enumType": "string"
    },
    "ip.GameMitigation": {
      "id": "GameMitigation",
      "namespace": "ip",
      "description": "GAME Anti-DDoS",
      "properties": {
        "firewallModeEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Firewall mode : in UDP, only allow traffic matching your rules (as well as established traffic). If not enabled, traffic to ports not defined in your rules will be permited. TCP traffic is unaffected by this.",
          "required": true
        },
        "ipOnGame": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "state": {
          "type": "ip.GameMitigationStateEnum",
          "fullType": "ip.GameMitigationStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "ip.GameMitigationRule": {
      "id": "GameMitigationRule",
      "namespace": "ip",
      "description": "Rule on ip:ports",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "ID of the rule",
          "required": true
        },
        "ports": {
          "type": "complexType.Range<long>",
          "fullType": "complexType.Range<long>",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "protocol": {
          "type": "ip.GameMitigationRuleProtocolEnum",
          "fullType": "ip.GameMitigationRuleProtocolEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "state": {
          "type": "ip.GameMitigationRuleStateEnum",
          "fullType": "ip.GameMitigationRuleStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current state of your rule",
          "required": true
        }
      }
    },
    "ip.GameMitigationRuleProtocolEnum": {
      "id": "GameMitigationRuleProtocolEnum",
      "namespace": "ip",
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
      "enumType": "string"
    },
    "ip.GameMitigationRuleStateEnum": {
      "id": "GameMitigationRuleStateEnum",
      "namespace": "ip",
      "description": "Possible values for game mitigation rule state",
      "enum": [
        "createRulePending",
        "deleteRulePending",
        "ok"
      ],
      "enumType": "string"
    },
    "ip.GameMitigationStateEnum": {
      "id": "GameMitigationStateEnum",
      "namespace": "ip",
      "description": "Possible values for udp mitigation rule state",
      "enum": [
        "firewallModeDisablePending",
        "firewallModeEnablePending",
        "ok"
      ],
      "enumType": "string"
    },
    "ip.Ip": {
      "id": "Ip",
      "namespace": "ip",
      "description": "Your IP",
      "properties": {
        "canBeTerminated": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "country": {
          "type": "coreTypes.CountryEnum",
          "fullType": "coreTypes.CountryEnum",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Custom description on your ip",
          "required": false
        },
        "ip": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "organisationId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "IP block organisation Id",
          "required": false
        },
        "routedTo": {
          "type": "ip.RoutedTo",
          "fullType": "ip.RoutedTo",
          "canBeNull": true,
          "readOnly": true,
          "description": "Routage information",
          "required": false
        },
        "type": {
          "type": "ip.IpTypeEnum",
          "fullType": "ip.IpTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "ip.IpMigrationToken": {
      "id": "IpMigrationToken",
      "namespace": "ip",
      "description": "IP migration to OVH",
      "properties": {
        "customerId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "destination customer ID",
          "required": true
        },
        "token": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "migration token",
          "required": true
        }
      }
    },
    "ip.IpTask": {
      "id": "IpTask",
      "namespace": "ip",
      "description": "IP tasks",
      "properties": {
        "comment": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Details of this task",
          "required": false
        },
        "destination": {
          "type": "ip.RoutedTo",
          "fullType": "ip.RoutedTo",
          "canBeNull": true,
          "readOnly": true,
          "description": "Destination for moveFloatingIp tasks",
          "required": false
        },
        "doneDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Completion date",
          "required": false
        },
        "function": {
          "type": "ip.TaskFunctionEnum",
          "fullType": "ip.TaskFunctionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Function name",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "last update",
          "required": false
        },
        "startDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task Creation date",
          "required": true
        },
        "status": {
          "type": "ip.TaskStatusEnum",
          "fullType": "ip.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task status",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "the id of the task",
          "required": true
        }
      }
    },
    "ip.IpTypeEnum": {
      "id": "IpTypeEnum",
      "namespace": "ip",
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
      "enumType": "string"
    },
    "ip.LoadBalancingAdditionalPortEnum": {
      "id": "LoadBalancingAdditionalPortEnum",
      "namespace": "ip",
      "description": "Additional available ports for ip loadbalancing",
      "enum": [
        "3306",
        "443",
        "5432",
        "80"
      ],
      "enumType": "long"
    },
    "ip.LoadBalancingBackendIp": {
      "id": "LoadBalancingBackendIp",
      "namespace": "ip",
      "description": "Backends attached to your IP load balancing",
      "properties": {
        "backend": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "description": "IP of your backend",
          "required": true
        },
        "mainBackendIp": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "If the backend has been configured as backup, this field contains the ip of the main backend",
          "required": false
        },
        "probe": {
          "type": "ip.LoadBalancingBackendProbeEnum",
          "fullType": "ip.LoadBalancingBackendProbeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Probe used for your backend",
          "required": true
        },
        "weight": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Weight of the backend on its zone, must be between 1 and 100, default is 8",
          "required": true
        },
        "zone": {
          "type": "ip.LoadBalancingZoneEnum",
          "fullType": "ip.LoadBalancingZoneEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Location where your service is",
          "required": true
        }
      }
    },
    "ip.LoadBalancingBackendProbeEnum": {
      "id": "LoadBalancingBackendProbeEnum",
      "namespace": "ip",
      "description": "Possible values for your IP load balancing backend probe",
      "enum": [
        "http",
        "icmp",
        "none",
        "oco"
      ],
      "enumType": "string"
    },
    "ip.LoadBalancingIp": {
      "id": "LoadBalancingIp",
      "namespace": "ip",
      "description": "Your load balancing IP",
      "properties": {
        "ipLoadBalancing": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "description": "Your IP load balancing",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The internal name of your IP load balancing",
          "required": true
        },
        "ssl": {
          "type": "ip.LoadBalancingSslEnum",
          "fullType": "ip.LoadBalancingSslEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Ssl activation state",
          "required": true
        },
        "state": {
          "type": "ip.LoadBalancingStateEnum",
          "fullType": "ip.LoadBalancingStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current state of your IP",
          "required": true
        },
        "stickiness": {
          "type": "ip.LoadBalancingStickinessEnum",
          "fullType": "ip.LoadBalancingStickinessEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The type of stickiness currently in place on your Ip LoadBalancing",
          "required": true
        },
        "zone": {
          "type": "ip.LoadBalancingZoneEnum[]",
          "fullType": "ip.LoadBalancingZoneEnum[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Location where your service is",
          "required": true
        }
      }
    },
    "ip.LoadBalancingIp.LoadBalancingPort": {
      "id": "LoadBalancingPort",
      "namespace": "ip.LoadBalancingIp",
      "description": "LoadBalancingPort mapping",
      "properties": {
        "dstPort": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "srcPort": {
          "type": "ip.LoadBalancingAdditionalPortEnum",
          "fullType": "ip.LoadBalancingAdditionalPortEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "ip.LoadBalancingSslEnum": {
      "id": "LoadBalancingSslEnum",
      "namespace": "ip",
      "description": "Possible values for ssl state",
      "enum": [
        "customer",
        "none",
        "ovh"
      ],
      "enumType": "string"
    },
    "ip.LoadBalancingStateEnum": {
      "id": "LoadBalancingStateEnum",
      "namespace": "ip",
      "description": "Possible values for load balancing IP state",
      "enum": [
        "blacklisted",
        "deleted",
        "free",
        "ok",
        "quarantined",
        "suspended"
      ],
      "enumType": "string"
    },
    "ip.LoadBalancingStickinessEnum": {
      "id": "LoadBalancingStickinessEnum",
      "namespace": "ip",
      "description": "Possible values for load balancing IP stickiness",
      "enum": [
        "cookie",
        "none",
        "sourceIp"
      ],
      "enumType": "string"
    },
    "ip.LoadBalancingTask": {
      "id": "LoadBalancingTask",
      "namespace": "ip",
      "description": "List of tasks associated with your IP load balancing",
      "properties": {
        "action": {
          "type": "ip.LoadBalancingTaskActionEnum",
          "fullType": "ip.LoadBalancingTaskActionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The action made",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of your task",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Identifier of your task",
          "required": true
        },
        "status": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current status of your task",
          "required": true
        }
      }
    },
    "ip.LoadBalancingTaskActionEnum": {
      "id": "LoadBalancingTaskActionEnum",
      "namespace": "ip",
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
      "enumType": "string"
    },
    "ip.LoadBalancingZoneEnum": {
      "id": "LoadBalancingZoneEnum",
      "namespace": "ip",
      "description": "Possible values for load balancing IP service location",
      "enum": [
        "bhs",
        "gra",
        "rbx",
        "sbg"
      ],
      "enumType": "string"
    },
    "ip.MitigationDetailedStats": {
      "id": "MitigationDetailedStats",
      "namespace": "ip",
      "description": "Detailed statistics about your traffic",
      "properties": {
        "destPort": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Traffic dest port",
          "required": false
        },
        "fragments": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "icmpCode": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "ICMP protocol code",
          "required": false
        },
        "icmpType": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "ICMP protocol type",
          "required": false
        },
        "in": {
          "type": "ip.MitigationTraffic",
          "fullType": "ip.MitigationTraffic",
          "canBeNull": true,
          "readOnly": false,
          "description": "Traffic in",
          "required": false
        },
        "out": {
          "type": "ip.MitigationTraffic",
          "fullType": "ip.MitigationTraffic",
          "canBeNull": true,
          "readOnly": false,
          "description": "Traffic out",
          "required": false
        },
        "protocol": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Used protocol. See RFC5237 for more information",
          "required": false
        },
        "srcPort": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Traffic source port",
          "required": false
        },
        "syn": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "ip.MitigationIp": {
      "id": "MitigationIp",
      "namespace": "ip",
      "description": "Your IP on mitigation",
      "properties": {
        "auto": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Set on true if your ip is on auto-mitigation",
          "required": true
        },
        "ipOnMitigation": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "permanent": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Set on true if your ip is on permanent mitigation",
          "required": true
        },
        "state": {
          "type": "ip.MitigationStateEnum",
          "fullType": "ip.MitigationStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current state of your ip on mitigation",
          "required": true
        }
      }
    },
    "ip.MitigationProfile": {
      "id": "MitigationProfile",
      "namespace": "ip",
      "description": "Mitigation profile for your ip",
      "properties": {
        "autoMitigationTimeOut": {
          "type": "ip.MitigationProfileAutoMitigationTimeOutEnum",
          "fullType": "ip.MitigationProfileAutoMitigationTimeOutEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Delay to wait before remove ip from auto mitigation after an attack",
          "required": true
        },
        "ipMitigationProfile": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "state": {
          "type": "ip.MitigationProfileStateEnum",
          "fullType": "ip.MitigationProfileStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current state of your mitigation profile",
          "required": true
        }
      }
    },
    "ip.MitigationProfileAutoMitigationTimeOutEnum": {
      "id": "MitigationProfileAutoMitigationTimeOutEnum",
      "namespace": "ip",
      "description": "Possible values for auto mitigation timeout (minutes)",
      "enum": [
        "0",
        "15",
        "1560",
        "360",
        "60"
      ],
      "enumType": "long"
    },
    "ip.MitigationProfileStateEnum": {
      "id": "MitigationProfileStateEnum",
      "namespace": "ip",
      "description": "Possible values for mitigation profile state",
      "enum": [
        "ok",
        "tasksPending"
      ],
      "enumType": "string"
    },
    "ip.MitigationStateEnum": {
      "id": "MitigationStateEnum",
      "namespace": "ip",
      "description": "Possible values for mitigation state",
      "enum": [
        "creationPending",
        "ok",
        "removalPending"
      ],
      "enumType": "string"
    },
    "ip.MitigationStats": {
      "id": "MitigationStats",
      "namespace": "ip",
      "description": "Traffic statistics in and out on a mitigated ip",
      "properties": {
        "in": {
          "type": "ip.MitigationTraffic",
          "fullType": "ip.MitigationTraffic",
          "canBeNull": true,
          "readOnly": false,
          "description": "Traffic in",
          "required": false
        },
        "out": {
          "type": "ip.MitigationTraffic",
          "fullType": "ip.MitigationTraffic",
          "canBeNull": true,
          "readOnly": false,
          "description": "Traffic out",
          "required": false
        },
        "timestamp": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Traffic timestamp",
          "required": true
        }
      }
    },
    "ip.MitigationStatsScaleEnum": {
      "id": "MitigationStatsScaleEnum",
      "namespace": "ip",
      "description": "Possible aggregation scale on statistics",
      "enum": [
        "10s",
        "1m",
        "5m"
      ],
      "enumType": "string"
    },
    "ip.MitigationTraffic": {
      "id": "MitigationTraffic",
      "namespace": "ip",
      "description": "Traffic on mitigation",
      "properties": {
        "bps": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Bits per second",
          "required": true
        },
        "pps": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Paquets per second",
          "required": true
        }
      }
    },
    "ip.ReverseDelegation": {
      "id": "ReverseDelegation",
      "namespace": "ip",
      "description": "Your reverse delegations on IPv6 subnet",
      "properties": {
        "target": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "NS target for delegation",
          "required": true
        }
      }
    },
    "ip.ReverseIp": {
      "id": "ReverseIp",
      "namespace": "ip",
      "description": "Your reverse records on IP",
      "properties": {
        "ipReverse": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "reverse": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "ip.RipeInfos": {
      "id": "RipeInfos",
      "namespace": "ip",
      "description": "IP block RIPE informations",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "netname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "ip.RoutedTo": {
      "id": "RoutedTo",
      "namespace": "ip",
      "description": "Information about routing",
      "properties": {
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Service where ip is routed to",
          "required": false
        }
      }
    },
    "ip.ServiceIp": {
      "id": "ServiceIp",
      "namespace": "ip",
      "description": "Your IP linked to service",
      "properties": {
        "canBeTerminated": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "country": {
          "type": "coreTypes.CountryEnum",
          "fullType": "coreTypes.CountryEnum",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Custom description on your ip",
          "required": false
        },
        "ip": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "organisationId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "IP block organisation Id",
          "required": false
        },
        "routedTo": {
          "type": "ip.RoutedTo",
          "fullType": "ip.RoutedTo",
          "canBeNull": true,
          "readOnly": true,
          "description": "Routage information",
          "required": false
        },
        "type": {
          "type": "ip.IpTypeEnum",
          "fullType": "ip.IpTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "ip.SpamIp": {
      "id": "SpamIp",
      "namespace": "ip",
      "description": "Your IP spam stats",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last date the ip was blocked",
          "required": true
        },
        "ipSpamming": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "description": "IP address which is sending spam",
          "required": true
        },
        "state": {
          "type": "ip.SpamStateEnum",
          "fullType": "ip.SpamStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current state of the ip",
          "required": true
        },
        "time": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Time (in seconds) while the IP will be blocked",
          "required": true
        }
      }
    },
    "ip.SpamStateEnum": {
      "id": "SpamStateEnum",
      "namespace": "ip",
      "description": "Possible values for spam state",
      "enum": [
        "blockedForSpam",
        "unblocked",
        "unblocking"
      ],
      "enumType": "string"
    },
    "ip.SpamStats": {
      "id": "SpamStats",
      "namespace": "ip",
      "description": "Spam statistics about an IP address",
      "properties": {
        "averageSpamscore": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Average spam score.",
          "required": false
        },
        "detectedSpams": {
          "type": "ip.SpamTarget[]",
          "fullType": "ip.SpamTarget[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Detailed list of the spams",
          "required": false
        },
        "numberOfSpams": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of spams sent",
          "required": true
        },
        "timestamp": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Time when the IP address was blocked",
          "required": true
        },
        "total": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of emails sent",
          "required": true
        }
      }
    },
    "ip.SpamTarget": {
      "id": "SpamTarget",
      "namespace": "ip",
      "description": "Spam's target information",
      "properties": {
        "date": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Timestamp when the email was sent",
          "required": true
        },
        "destinationIp": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": false,
          "description": "IP address of the target",
          "required": true
        },
        "messageId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The message-id of the email",
          "required": true
        },
        "spamscore": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Spam score for the email",
          "required": true
        }
      }
    },
    "ip.TaskFunctionEnum": {
      "id": "TaskFunctionEnum",
      "namespace": "ip",
      "description": "different task operation",
      "enum": [
        "arinBlockReassign",
        "changeRipeOrg",
        "checkAndReleaseIp",
        "genericMoveFloatingIp"
      ],
      "enumType": "string"
    },
    "ip.TaskStatusEnum": {
      "id": "TaskStatusEnum",
      "namespace": "ip",
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
      "enumType": "string"
    },
    "ipLoadbalancing.Task.Task": {
      "id": "Task",
      "namespace": "ipLoadbalancing.Task",
      "description": "IP Load Balancing Operations",
      "properties": {
        "action": {
          "type": "ipLoadbalancing.TaskActionEnum",
          "fullType": "ipLoadbalancing.TaskActionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Operation type",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of your operation",
          "required": true
        },
        "doneDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Done date of your operation",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the operation",
          "required": true
        },
        "progress": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Operation progress percentage",
          "required": true
        },
        "status": {
          "type": "ipLoadbalancing.TaskStatusEnum",
          "fullType": "ipLoadbalancing.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current status of your operation",
          "required": true
        },
        "zones": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Zone of your Load Balancer which are updated by current Task",
          "required": true
        }
      }
    },
    "ipLoadbalancing.TaskActionEnum": {
      "id": "TaskActionEnum",
      "namespace": "ipLoadbalancing",
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
      "enumType": "string"
    },
    "ipLoadbalancing.TaskStatusEnum": {
      "id": "TaskStatusEnum",
      "namespace": "ipLoadbalancing",
      "description": "Possible task status",
      "enum": [
        "blocked",
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
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