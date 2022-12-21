import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/ipLoadbalancing.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the IPLB service",
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
      "path": "/ipLoadbalancing"
    },
    {
      "description": "Your IP load balancing",
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
          "responseType": "ipLoadbalancing.Ip"
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
              "dataType": "ipLoadbalancing.Ip",
              "description": "New object properties",
              "fullType": "ipLoadbalancing.Ip",
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
      "path": "/ipLoadbalancing/{serviceName}"
    },
    {
      "description": "availableFarmProbes operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Available farm probes for health checks",
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
          "responseType": "ipLoadbalancing.FarmAvailableProbe[]"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/availableFarmProbes"
    },
    {
      "description": "availableFarmType operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Available farm types",
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
          "responseType": "string[]"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/availableFarmType"
    },
    {
      "description": "availableFrontendType operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Available frontend type",
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
          "responseType": "string[]"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/availableFrontendType"
    },
    {
      "description": "availableRouteActions operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Available route actions",
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
          "responseType": "ipLoadbalancing.RouteAvailableAction[]"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/availableRouteActions"
    },
    {
      "description": "availableRouteRules operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Available route match rules",
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
          "responseType": "ipLoadbalancing.RouteAvailableRule[]"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/availableRouteRules"
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
      "path": "/ipLoadbalancing/{serviceName}/changeContact"
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
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/confirmTermination"
    },
    {
      "description": "definedFarms operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of defined farms, and whether they are HTTP, TCP or UDP",
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
              "description": "The vrack network id you want to filter on",
              "fullType": "long",
              "name": "vrackNetworkId",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "ipLoadbalancing.DefinedFarm[]"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/definedFarms"
    },
    {
      "description": "definedFrontends operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of defined frontends, and whether they are HTTP, TCP or UDP",
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
          "responseType": "ipLoadbalancing.DefinedFrontend[]"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/definedFrontends"
    },
    {
      "description": "definedRoutes operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of defined routes, and whether they are HTTP or TCP",
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
          "responseType": "ipLoadbalancing.DefinedRoute[]"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/definedRoutes"
    },
    {
      "description": "failover operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all failover ip routed to this IPLB",
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
          "responseType": "ipBlock[]"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/failover"
    },
    {
      "description": "freeCertificate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Order a free certificate. We order and deliver it for you",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string[]",
              "description": "The FQDN for which you want a free certificate. A DCV (Domain Control Validation) http request will be made to http://your_domain.abc, make sure this domain exists and resolves to your iplb ip before ordering",
              "fullType": "string[]",
              "name": "fqdn",
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
          "responseType": "ipLoadbalancing.Task.Task"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/freeCertificate"
    },
    {
      "description": "List the ipLoadbalancing.backendHttp.BackendHttp objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "HTTP Farm for this iplb",
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
              "description": "Filter the value of vrackNetworkId property (=)",
              "fullType": "long",
              "name": "vrackNetworkId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of zone property (=)",
              "fullType": "string",
              "name": "zone",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new HTTP Farm on your IP Load Balancing",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipLoadbalancing.BalanceHTTPEnum",
              "description": "Load balancing algorithm. 'roundrobin' if null",
              "fullType": "ipLoadbalancing.BalanceHTTPEnum",
              "name": "balance",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Human readable name for your backend, this field is for you",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Port attached to your farm ([1..49151]). Inherited from frontend if null",
              "fullType": "long",
              "name": "port",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipLoadbalancing.BackendProbe",
              "description": "Probe used to determine if a backend is alive and can handle requests",
              "fullType": "ipLoadbalancing.BackendProbe",
              "name": "probe",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipLoadbalancing.StickinessHTTPEnum",
              "description": "Stickiness type. No stickiness if null",
              "fullType": "ipLoadbalancing.StickinessHTTPEnum",
              "name": "stickiness",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Internal Load Balancer identifier of the vRack private network to attach to your farm, mandatory when your Load Balancer is attached to a vRack",
              "fullType": "long",
              "name": "vrackNetworkId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Zone of your farm",
              "fullType": "string",
              "name": "zone",
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
          "responseType": "ipLoadbalancing.backendHttp.BackendHttp"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/http/farm"
    },
    {
      "description": "HTTP Farm",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an HTTP Farm",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
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
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.backendHttp.BackendHttp"
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
              "dataType": "ipLoadbalancing.backendHttp.BackendHttp",
              "description": "New object properties",
              "fullType": "ipLoadbalancing.backendHttp.BackendHttp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
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
      "path": "/ipLoadbalancing/{serviceName}/http/farm/{farmId}"
    },
    {
      "description": "List the ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "HTTP Farm's Servers",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
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
              "description": "Filter the value of address property (=)",
              "fullType": "ipv4",
              "name": "address",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of cookie property (like)",
              "fullType": "string",
              "name": "cookie",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a server to an HTTP Farm",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Address of your server",
              "fullType": "ipv4",
              "name": "address",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Set server as backup. Default: 'false'",
              "fullType": "boolean",
              "name": "backup",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "text",
              "description": "Certificate chain. Allow server certificate verification (Avoid man-in-the-middle attacks)",
              "fullType": "text",
              "name": "chain",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Set the cookie value used when 'cookie' stickiness is set in the farm. Auto generate the cookie if none provided and required.",
              "fullType": "string",
              "name": "cookie",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Human readable name for your server, this field is for you",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipLoadbalancing.OnMarkedDownEnum",
              "description": "Enable action when backend marked down. (No action if null)",
              "fullType": "ipLoadbalancing.OnMarkedDownEnum",
              "name": "onMarkedDown",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Port attached to your server ([1..49151]). Inherited from farm if null",
              "fullType": "long",
              "name": "port",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Enable/disable probe. Default: 'false'",
              "fullType": "boolean",
              "name": "probe",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipLoadbalancing.ProxyProtocolVersionEnum",
              "description": "Disabled if null. Send PROXY protocol header. Requires a compatible server.",
              "fullType": "ipLoadbalancing.ProxyProtocolVersionEnum",
              "name": "proxyProtocolVersion",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "SSL ciphering. Probes will also be sent ciphered. Default: 'false'",
              "fullType": "boolean",
              "name": "ssl",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "description": "Enable or disable your server",
              "fullType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "name": "status",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Set weight on that server [1..256]. 0 if not used in load balancing. 1 if left null. Servers with higher weight get more requests.",
              "fullType": "long",
              "name": "weight",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server"
    },
    {
      "description": "HTTP Farm's Server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a server from an HTTP Farm",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your server",
              "fullType": "long",
              "name": "serverId",
              "paramType": "path",
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
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your server",
              "fullType": "long",
              "name": "serverId",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer"
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
              "dataType": "ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer",
              "description": "New object properties",
              "fullType": "ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your server",
              "fullType": "long",
              "name": "serverId",
              "paramType": "path",
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
      "path": "/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}"
    },
    {
      "description": "List the ipLoadbalancing.frontendHttp.FrontendHttp objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "HTTP frontends for this iplb",
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
              "description": "Filter the value of defaultFarmId property (=)",
              "fullType": "long",
              "name": "defaultFarmId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of defaultSslId property (=)",
              "fullType": "long",
              "name": "defaultSslId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of port property (like)",
              "fullType": "string",
              "name": "port",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of zone property (=)",
              "fullType": "string",
              "name": "zone",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new http frontend on your IP Load Balancing",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock[]",
              "description": "Restrict IP Load Balancing access to these ip block. No restriction if null. You cannot specify allowedSource and deniedSource both at the same time",
              "fullType": "ipBlock[]",
              "name": "allowedSource",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipBlock[]",
              "description": "Only attach frontend on these ip. No restriction if null",
              "fullType": "ipBlock[]",
              "name": "dedicatedIpfo",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Default HTTP Farm of your frontend",
              "fullType": "long",
              "name": "defaultFarmId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Default ssl served to your customer",
              "fullType": "long",
              "name": "defaultSslId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipBlock[]",
              "description": "Deny IP Load Balancing access to these ip block. No restriction if null. You cannot specify allowedSource and deniedSource both at the same time",
              "fullType": "ipBlock[]",
              "name": "deniedSource",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Disable your frontend. Default: 'false'",
              "fullType": "boolean",
              "name": "disabled",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Human readable name for your frontend, this field is for you",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "HTTP Strict Transport Security. Default: 'false'",
              "fullType": "boolean",
              "name": "hsts",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string[]",
              "description": "Add header to your frontend. Useful variables admitted : %ci <=> client_ip, %cp <=> client_port",
              "fullType": "string[]",
              "name": "httpHeader",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Port(s) attached to your frontend. Supports single port (numerical value), range (2 dash-delimited increasing ports) and comma-separated list of 'single port' and/or 'range'. Each port must be in the [1;49151] range.",
              "fullType": "string",
              "name": "port",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "HTTP redirection (Ex : http://www.ovh.com)",
              "fullType": "string",
              "name": "redirectLocation",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "SSL deciphering. Default: 'false'",
              "fullType": "boolean",
              "name": "ssl",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Zone of your frontend. Use \"all\" for all owned zone.",
              "fullType": "string",
              "name": "zone",
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
          "responseType": "ipLoadbalancing.frontendHttp.FrontendHttp"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/http/frontend"
    },
    {
      "description": "Frontend HTTP",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an HTTP frontend",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your frontend",
              "fullType": "long",
              "name": "frontendId",
              "paramType": "path",
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
              "description": "Id of your frontend",
              "fullType": "long",
              "name": "frontendId",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.frontendHttp.FrontendHttp"
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
              "dataType": "ipLoadbalancing.frontendHttp.FrontendHttp",
              "description": "New object properties",
              "fullType": "ipLoadbalancing.frontendHttp.FrontendHttp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your frontend",
              "fullType": "long",
              "name": "frontendId",
              "paramType": "path",
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
      "path": "/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}"
    },
    {
      "description": "List the ipLoadbalancing.RouteHttp.RouteHttp objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "HTTP routes for this iplb",
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
              "description": "Filter the value of frontendId property (=)",
              "fullType": "long",
              "name": "frontendId",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new HTTP route to your frontend",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipLoadbalancing.RouteHttpAction",
              "description": "Action triggered when all rules match",
              "fullType": "ipLoadbalancing.RouteHttpAction",
              "name": "action",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Human readable name for your route, this field is for you",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Route traffic for this frontend",
              "fullType": "long",
              "name": "frontendId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Route priority ([0..255]). 0 if null. Highest priority routes are evaluated last. Only the first matching route will trigger an action",
              "fullType": "long",
              "name": "weight",
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
          "responseType": "ipLoadbalancing.RouteHttp.RouteHttp"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/http/route"
    },
    {
      "description": "HTTP Route",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this HTTP route",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your route",
              "fullType": "long",
              "name": "routeId",
              "paramType": "path",
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
              "description": "Id of your route",
              "fullType": "long",
              "name": "routeId",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.RouteHttp.RouteHttp"
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
              "dataType": "ipLoadbalancing.RouteHttp.RouteHttp",
              "description": "New object properties",
              "fullType": "ipLoadbalancing.RouteHttp.RouteHttp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your route",
              "fullType": "long",
              "name": "routeId",
              "paramType": "path",
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
      "path": "/ipLoadbalancing/{serviceName}/http/route/{routeId}"
    },
    {
      "description": "List the ipLoadbalancing.RouteRule.RouteRule objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "HTTP routes for this iplb",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your route",
              "fullType": "long",
              "name": "routeId",
              "paramType": "path",
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
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new rule to your route",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Human readable name for your rule",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Name of the field to match like \"protocol\" or \"host\". See \"/ipLoadbalancing/{serviceName}/availableRouteRules\" for a list of available rules",
              "fullType": "string",
              "name": "field",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipLoadbalancing.RouteRuleMatchesEnum",
              "description": "Matching operator. Not all operators are available for all fields. See \"/ipLoadbalancing/{serviceName}/availableRouteRules\"",
              "fullType": "ipLoadbalancing.RouteRuleMatchesEnum",
              "name": "match",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Invert the matching operator effect",
              "fullType": "boolean",
              "name": "negate",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Value to match against this match. Interpretation if this field depends on the match and field",
              "fullType": "string",
              "name": "pattern",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Name of sub-field, if applicable. This may be a Cookie or Header name for instance",
              "fullType": "string",
              "name": "subField",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Id of your route",
              "fullType": "long",
              "name": "routeId",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.RouteRule.RouteRule"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule"
    },
    {
      "description": "Rule of a route",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this rule from the route",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your route",
              "fullType": "long",
              "name": "routeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your rule",
              "fullType": "long",
              "name": "ruleId",
              "paramType": "path",
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
              "description": "Id of your route",
              "fullType": "long",
              "name": "routeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your rule",
              "fullType": "long",
              "name": "ruleId",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.RouteRule.RouteRule"
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
              "dataType": "ipLoadbalancing.RouteRule.RouteRule",
              "description": "New object properties",
              "fullType": "ipLoadbalancing.RouteRule.RouteRule",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your route",
              "fullType": "long",
              "name": "routeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your rule",
              "fullType": "long",
              "name": "ruleId",
              "paramType": "path",
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
      "path": "/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}"
    },
    {
      "description": "instancesState operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-10-17T00:00:00+01:00",
            "deprecatedDate": "2018-09-17T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get the effective state of your IPLB instances on IPLB servers",
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
          "responseType": "ipLoadbalancing.InstancesState[]"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/instancesState"
    },
    {
      "description": "natIp operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Ip subnet used by OVH to nat requests on your IPLB to your backends. You must ensure that your backends are not part of a network that overlap with this one",
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
          "responseType": "ipLoadbalancing.NatIps[]"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/natIp"
    },
    {
      "description": "pendingChanges operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List the pending changes on your Load Balancer configuration, per zone",
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
          "responseType": "ipLoadbalancing.PendingChanges[]"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/pendingChanges"
    },
    {
      "description": "List the ipLoadbalancing.Quota.Quota objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Available quota informations for current billing period per zone",
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
          "responseType": "string[]"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/quota"
    },
    {
      "description": "Quota informations for current billing period for this zone",
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
              "dataType": "string",
              "description": "Zone of your quota",
              "fullType": "string",
              "name": "zone",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipLoadbalancing.Quota.Quota"
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
              "dataType": "ipLoadbalancing.Quota.Quota",
              "description": "New object properties",
              "fullType": "ipLoadbalancing.Quota.Quota",
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
              "dataType": "string",
              "description": "Zone of your quota",
              "fullType": "string",
              "name": "zone",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/quota/{zone}"
    },
    {
      "description": "List the ipLoadbalancing.QuotaHistory.QuotaHistory objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Quota history informations, per month",
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
              "dataType": "date",
              "description": "Filter the value of historizedDate property (>=)",
              "fullType": "date",
              "name": "historizedDate.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "date",
              "description": "Filter the value of historizedDate property (<=)",
              "fullType": "date",
              "name": "historizedDate.to",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of zone property (=)",
              "fullType": "string",
              "name": "zone",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/quotaHistory"
    },
    {
      "description": "QuotaHistory",
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
              "description": "Id of your quota",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.QuotaHistory.QuotaHistory"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/quotaHistory/{id}"
    },
    {
      "description": "refresh operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Apply the configuration to your iplb",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The zone(s) of your iplb",
              "fullType": "string",
              "name": "zone",
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
          "responseType": "ipLoadbalancing.Task.Task"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/refresh"
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
      "path": "/ipLoadbalancing/{serviceName}/serviceInfos"
    },
    {
      "description": "List the ipLoadbalancing.Ssl.Ssl objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Ssl for this iplb",
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
              "dataType": "datetime",
              "description": "Filter the value of expireDate property (<)",
              "fullType": "datetime",
              "name": "expireDate",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of fingerprint property (like)",
              "fullType": "string",
              "name": "fingerprint",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of serial property (like)",
              "fullType": "string",
              "name": "serial",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipLoadbalancing.SslTypeEnum",
              "description": "Filter the value of type property (=)",
              "fullType": "ipLoadbalancing.SslTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new custom SSL certificate on your IP Load Balancing",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "text",
              "description": "Certificate",
              "fullType": "text",
              "name": "certificate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "text",
              "description": "Certificate chain",
              "fullType": "text",
              "name": "chain",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Human readable name for your ssl certificate, this field is for you",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "text",
              "description": "Certificate key",
              "fullType": "text",
              "name": "key",
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
          "responseType": "ipLoadbalancing.Ssl.Ssl"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/ssl"
    },
    {
      "description": "Ssl",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a custom SSL certificate",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your SSL certificate",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
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
              "description": "Id of your SSL certificate",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.Ssl.Ssl"
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
              "dataType": "ipLoadbalancing.Ssl.Ssl",
              "description": "New object properties",
              "fullType": "ipLoadbalancing.Ssl.Ssl",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your SSL certificate",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
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
      "path": "/ipLoadbalancing/{serviceName}/ssl/{id}"
    },
    {
      "description": "status operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the global status of your IPLB",
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
          "responseType": "ipLoadbalancing.Status"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/status"
    },
    {
      "description": "List the ipLoadbalancing.Task.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Task for this iplb",
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
              "dataType": "ipLoadbalancing.TaskActionEnum",
              "description": "Filter the value of action property (=)",
              "fullType": "ipLoadbalancing.TaskActionEnum",
              "name": "action",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of creationDate property (>=)",
              "fullType": "datetime",
              "name": "creationDate.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of creationDate property (<=)",
              "fullType": "datetime",
              "name": "creationDate.to",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of doneDate property (>=)",
              "fullType": "datetime",
              "name": "doneDate.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of doneDate property (<=)",
              "fullType": "datetime",
              "name": "doneDate.to",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipLoadbalancing.TaskStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "ipLoadbalancing.TaskStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/task"
    },
    {
      "description": "IP Load Balancing Operations",
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
              "description": "Id of the operation",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.Task.Task"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/task/{id}"
    },
    {
      "description": "List the ipLoadbalancing.backendTcp.BackendTcp objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "TCP Farm for this iplb",
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
              "description": "Filter the value of vrackNetworkId property (=)",
              "fullType": "long",
              "name": "vrackNetworkId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of zone property (=)",
              "fullType": "string",
              "name": "zone",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new TCP Farm on your IP Load Balancing",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipLoadbalancing.BalanceTCPEnum",
              "description": "Load balancing algorithm. 'roundrobin' if null",
              "fullType": "ipLoadbalancing.BalanceTCPEnum",
              "name": "balance",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Human readable name for your backend, this field is for you",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Port attached to your farm ([1..49151]). Inherited from frontend if null",
              "fullType": "long",
              "name": "port",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipLoadbalancing.BackendProbe",
              "description": "Probe used to determine if a backend is alive and can handle requests",
              "fullType": "ipLoadbalancing.BackendProbe",
              "name": "probe",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipLoadbalancing.StickinessTCPEnum",
              "description": "Stickiness type. No stickiness if null",
              "fullType": "ipLoadbalancing.StickinessTCPEnum",
              "name": "stickiness",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Internal Load Balancer identifier of the vRack private network to attach to your farm, mandatory when your Load Balancer is attached to a vRack",
              "fullType": "long",
              "name": "vrackNetworkId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Zone of your farm",
              "fullType": "string",
              "name": "zone",
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
          "responseType": "ipLoadbalancing.backendTcp.BackendTcp"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/tcp/farm"
    },
    {
      "description": "TCP Farm",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a TCP Farm",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
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
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.backendTcp.BackendTcp"
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
              "dataType": "ipLoadbalancing.backendTcp.BackendTcp",
              "description": "New object properties",
              "fullType": "ipLoadbalancing.backendTcp.BackendTcp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
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
      "path": "/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}"
    },
    {
      "description": "List the ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "TCP Farm's Servers",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
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
              "description": "Filter the value of address property (=)",
              "fullType": "ipv4",
              "name": "address",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a server to a TCP Farm",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Address of your server",
              "fullType": "ipv4",
              "name": "address",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Set server as backup. Default: 'false'",
              "fullType": "boolean",
              "name": "backup",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "text",
              "description": "Certificate chain. Allow server certificate verification (Avoid man-in-the-middle attacks)",
              "fullType": "text",
              "name": "chain",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Human readable name for your server, this field is for you",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipLoadbalancing.OnMarkedDownEnum",
              "description": "Enable action when backend marked down. (No action if null)",
              "fullType": "ipLoadbalancing.OnMarkedDownEnum",
              "name": "onMarkedDown",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Port attached to your server ([1..49151]). Inherited from farm if null",
              "fullType": "long",
              "name": "port",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Enable/disable probe. Default: 'false'",
              "fullType": "boolean",
              "name": "probe",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipLoadbalancing.ProxyProtocolVersionEnum",
              "description": "Disabled if null. Send PROXY protocol header. Requires a compatible server.",
              "fullType": "ipLoadbalancing.ProxyProtocolVersionEnum",
              "name": "proxyProtocolVersion",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "SSL ciphering. Probes will also be sent ciphered. Default: 'false'",
              "fullType": "boolean",
              "name": "ssl",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "description": "Enable or disable your server",
              "fullType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "name": "status",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Set weight on that server [1..256]. 0 if not used in load balancing. 1 if left null. Servers with higher weight get more requests.",
              "fullType": "long",
              "name": "weight",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server"
    },
    {
      "description": "TCP Farm's Server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a server from a TCP Farm",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your server",
              "fullType": "long",
              "name": "serverId",
              "paramType": "path",
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
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your server",
              "fullType": "long",
              "name": "serverId",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer"
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
              "dataType": "ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer",
              "description": "New object properties",
              "fullType": "ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your server",
              "fullType": "long",
              "name": "serverId",
              "paramType": "path",
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
      "path": "/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}"
    },
    {
      "description": "List the ipLoadbalancing.frontendTcp.FrontendTcp objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "TCP frontends for this iplb",
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
              "description": "Filter the value of defaultFarmId property (=)",
              "fullType": "long",
              "name": "defaultFarmId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of defaultSslId property (=)",
              "fullType": "long",
              "name": "defaultSslId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of port property (like)",
              "fullType": "string",
              "name": "port",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of zone property (=)",
              "fullType": "string",
              "name": "zone",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new TCP frontend on your IP Load Balancing",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock[]",
              "description": "Restrict IP Load Balancing access to these ip block. No restriction if null. You cannot specify allowedSource and deniedSource both at the same time",
              "fullType": "ipBlock[]",
              "name": "allowedSource",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipBlock[]",
              "description": "Only attach frontend on these ip. No restriction if null",
              "fullType": "ipBlock[]",
              "name": "dedicatedIpfo",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Default TCP Farm of your frontend",
              "fullType": "long",
              "name": "defaultFarmId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Default ssl served to your customer",
              "fullType": "long",
              "name": "defaultSslId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipBlock[]",
              "description": "Deny IP Load Balancing access to these ip block. No restriction if null. You cannot specify allowedSource and deniedSource both at the same time",
              "fullType": "ipBlock[]",
              "name": "deniedSource",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Disable your frontend. Default: 'false'",
              "fullType": "boolean",
              "name": "disabled",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Human readable name for your frontend, this field is for you",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Port(s) attached to your frontend. Supports single port (numerical value), range (2 dash-delimited increasing ports) and comma-separated list of 'single port' and/or 'range'. Each port must be in the [1;49151] range.",
              "fullType": "string",
              "name": "port",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "SSL deciphering. Default: 'false'",
              "fullType": "boolean",
              "name": "ssl",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Zone of your frontend. Use \"all\" for all owned zone.",
              "fullType": "string",
              "name": "zone",
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
          "responseType": "ipLoadbalancing.frontendTcp.FrontendTcp"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/tcp/frontend"
    },
    {
      "description": "Frontend TCP",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an TCP frontend",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your frontend",
              "fullType": "long",
              "name": "frontendId",
              "paramType": "path",
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
              "description": "Id of your frontend",
              "fullType": "long",
              "name": "frontendId",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.frontendTcp.FrontendTcp"
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
              "dataType": "ipLoadbalancing.frontendTcp.FrontendTcp",
              "description": "New object properties",
              "fullType": "ipLoadbalancing.frontendTcp.FrontendTcp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your frontend",
              "fullType": "long",
              "name": "frontendId",
              "paramType": "path",
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
      "path": "/ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}"
    },
    {
      "description": "List the ipLoadbalancing.RouteTcp.RouteTcp objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "TCP routes for this iplb",
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
              "description": "Filter the value of frontendId property (=)",
              "fullType": "long",
              "name": "frontendId",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new TCP route to your frontend",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipLoadbalancing.RouteTcpAction",
              "description": "Action triggered when all rules match",
              "fullType": "ipLoadbalancing.RouteTcpAction",
              "name": "action",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Human readable name for your route, this field is for you",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Route traffic for this frontend",
              "fullType": "long",
              "name": "frontendId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Route priority ([0..255]). 0 if null. Highest priority routes are evaluated last. Only the first matching route will trigger an action",
              "fullType": "long",
              "name": "weight",
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
          "responseType": "ipLoadbalancing.RouteTcp.RouteTcp"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/tcp/route"
    },
    {
      "description": "TCP Route",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this TCP route",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your route",
              "fullType": "long",
              "name": "routeId",
              "paramType": "path",
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
              "description": "Id of your route",
              "fullType": "long",
              "name": "routeId",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.RouteTcp.RouteTcp"
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
              "dataType": "ipLoadbalancing.RouteTcp.RouteTcp",
              "description": "New object properties",
              "fullType": "ipLoadbalancing.RouteTcp.RouteTcp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your route",
              "fullType": "long",
              "name": "routeId",
              "paramType": "path",
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
      "path": "/ipLoadbalancing/{serviceName}/tcp/route/{routeId}"
    },
    {
      "description": "List the ipLoadbalancing.RouteRule.RouteRule objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "HTTP routes for this iplb",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your route",
              "fullType": "long",
              "name": "routeId",
              "paramType": "path",
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
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new rule to your route",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Human readable name for your rule",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Name of the field to match like \"protocol\" or \"host\". See \"/ipLoadbalancing/{serviceName}/availableRouteRules\" for a list of available rules",
              "fullType": "string",
              "name": "field",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipLoadbalancing.RouteRuleMatchesEnum",
              "description": "Matching operator. Not all operators are available for all fields. See \"/ipLoadbalancing/{serviceName}/availableRouteRules\"",
              "fullType": "ipLoadbalancing.RouteRuleMatchesEnum",
              "name": "match",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Invert the matching operator effect",
              "fullType": "boolean",
              "name": "negate",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Value to match against this match. Interpretation if this field depends on the match and field",
              "fullType": "string",
              "name": "pattern",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Name of sub-field, if applicable. This may be a Cookie or Header name for instance",
              "fullType": "string",
              "name": "subField",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Id of your route",
              "fullType": "long",
              "name": "routeId",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.RouteRule.RouteRule"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule"
    },
    {
      "description": "Rule of a route",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this rule from the route",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your route",
              "fullType": "long",
              "name": "routeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your rule",
              "fullType": "long",
              "name": "ruleId",
              "paramType": "path",
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
              "description": "Id of your route",
              "fullType": "long",
              "name": "routeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your rule",
              "fullType": "long",
              "name": "ruleId",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.RouteRule.RouteRule"
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
              "dataType": "ipLoadbalancing.RouteRule.RouteRule",
              "description": "New object properties",
              "fullType": "ipLoadbalancing.RouteRule.RouteRule",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your route",
              "fullType": "long",
              "name": "routeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your rule",
              "fullType": "long",
              "name": "ruleId",
              "paramType": "path",
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
      "path": "/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}"
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
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/terminate"
    },
    {
      "description": "List the ipLoadbalancing.backendUdp.BackendUdp objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "UDP Farm for this iplb",
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
              "description": "Filter the value of vrackNetworkId property (=)",
              "fullType": "long",
              "name": "vrackNetworkId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of zone property (=)",
              "fullType": "string",
              "name": "zone",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Add a new UDP Farm on your IP Load Balancing",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Human readable name for your backend, this field is for you",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Port attached to your farm ([1..49151]). Inherited from frontend if null",
              "fullType": "long",
              "name": "port",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Internal Load Balancer identifier of the vRack private network to attach to your farm, mandatory when your Load Balancer is attached to a vRack",
              "fullType": "long",
              "name": "vrackNetworkId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Zone of your farm",
              "fullType": "string",
              "name": "zone",
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
          "responseType": "ipLoadbalancing.backendUdp.BackendUdp"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/udp/farm"
    },
    {
      "description": "UDP Farm",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete an UDP Farm",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
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
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.backendUdp.BackendUdp"
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
              "dataType": "ipLoadbalancing.backendUdp.BackendUdp",
              "description": "New object properties",
              "fullType": "ipLoadbalancing.backendUdp.BackendUdp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
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
      "path": "/ipLoadbalancing/{serviceName}/udp/farm/{farmId}"
    },
    {
      "description": "List the ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "UDP Farm's Servers",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
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
              "description": "Filter the value of address property (=)",
              "fullType": "ipv4",
              "name": "address",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Add a server to an UDP Farm",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Address of your server",
              "fullType": "ipv4",
              "name": "address",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Human readable name for your server, this field is for you",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Port attached to your server ([1..49151]). Inherited from farm if null",
              "fullType": "long",
              "name": "port",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "description": "Enable or disable your server",
              "fullType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "name": "status",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server"
    },
    {
      "description": "UDP Farm's Server",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete a server from an UDP Farm",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your server",
              "fullType": "long",
              "name": "serverId",
              "paramType": "path",
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
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your server",
              "fullType": "long",
              "name": "serverId",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer"
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
              "dataType": "ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer",
              "description": "New object properties",
              "fullType": "ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your farm",
              "fullType": "long",
              "name": "farmId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your server",
              "fullType": "long",
              "name": "serverId",
              "paramType": "path",
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
      "path": "/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}"
    },
    {
      "description": "List the ipLoadbalancing.frontendUdp.FrontendUdp objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "UDP frontends for this iplb",
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
              "description": "Filter the value of defaultFarmId property (=)",
              "fullType": "long",
              "name": "defaultFarmId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of port property (like)",
              "fullType": "string",
              "name": "port",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of zone property (=)",
              "fullType": "string",
              "name": "zone",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Add a new UDP frontend on your IP Load Balancing",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock[]",
              "description": "Only attach frontend on these ip. No restriction if null",
              "fullType": "ipBlock[]",
              "name": "dedicatedIpfo",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Default UDP Farm of your frontend",
              "fullType": "long",
              "name": "defaultFarmId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Disable your frontend. Default: 'false'",
              "fullType": "boolean",
              "name": "disabled",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Human readable name for your frontend, this field is for you",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Port(s) attached to your frontend. Supports single port (numerical value), range (2 dash-delimited increasing ports) and comma-separated list of 'single port' and/or 'range'. Each port must be in the [1;49151] range.",
              "fullType": "string",
              "name": "port",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Zone of your frontend. Use \"all\" for all owned zone.",
              "fullType": "string",
              "name": "zone",
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
          "responseType": "ipLoadbalancing.frontendUdp.FrontendUdp"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/udp/frontend"
    },
    {
      "description": "Frontend UDP",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete an UDP frontend",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your frontend",
              "fullType": "long",
              "name": "frontendId",
              "paramType": "path",
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
              "dataType": "long",
              "description": "Id of your frontend",
              "fullType": "long",
              "name": "frontendId",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.frontendUdp.FrontendUdp"
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
              "dataType": "ipLoadbalancing.frontendUdp.FrontendUdp",
              "description": "New object properties",
              "fullType": "ipLoadbalancing.frontendUdp.FrontendUdp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your frontend",
              "fullType": "long",
              "name": "frontendId",
              "paramType": "path",
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
      "path": "/ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}"
    },
    {
      "description": "List the ipLoadbalancing.VrackNetwork.VrackNetwork objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Descriptions of private networks in the vRack attached to this Load Balancer",
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
              "dataType": "ipBlock",
              "description": "Filter the value of subnet property (=)",
              "fullType": "ipBlock",
              "name": "subnet",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of vlan property (=)",
              "fullType": "long",
              "name": "vlan",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Add a description of a private network in the attached vRack",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Human readable name for your vrack network",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long[]",
              "description": "Farm Id you want to attach to that vrack network",
              "fullType": "long[]",
              "name": "farmId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "An IP block used as a pool of IPs by this Load Balancer to connect to the servers in this private network. The block must be in the private network and reserved for the Load Balancer",
              "fullType": "ipBlock",
              "name": "natIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "IP Block of the private network in the vRack",
              "fullType": "ipBlock",
              "name": "subnet",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "VLAN of the private network in the vRack. 0 if the private network is not in a VLAN",
              "fullType": "long",
              "name": "vlan",
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
          "responseType": "ipLoadbalancing.VrackNetwork.VrackNetwork"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/vrack/network"
    },
    {
      "description": "Represents a private network in the vRack",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete this description of a private network in the vRack. It must not be used by any farm server",
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
              "dataType": "long",
              "description": "Internal Load Balancer identifier of the vRack private network description",
              "fullType": "long",
              "name": "vrackNetworkId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
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
              "description": "The internal name of your IP load balancing",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Internal Load Balancer identifier of the vRack private network description",
              "fullType": "long",
              "name": "vrackNetworkId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipLoadbalancing.VrackNetwork.VrackNetwork"
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
              "dataType": "ipLoadbalancing.VrackNetwork.VrackNetwork",
              "description": "New object properties",
              "fullType": "ipLoadbalancing.VrackNetwork.VrackNetwork",
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
              "dataType": "long",
              "description": "Internal Load Balancer identifier of the vRack private network description",
              "fullType": "long",
              "name": "vrackNetworkId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}"
    },
    {
      "description": "updateFarmId operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Update farm attached to that vrack network id",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long[]",
              "description": "Farm Id you want to attach to that vrack network",
              "fullType": "long[]",
              "name": "farmId",
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
              "dataType": "long",
              "description": "Internal Load Balancer identifier of the vRack private network description",
              "fullType": "long",
              "name": "vrackNetworkId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipLoadbalancing.VrackNetwork.VrackNetwork"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}/updateFarmId"
    },
    {
      "description": "networkCreationRules operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Rules to create a network attached to a vrack",
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
          "responseType": "ipLoadbalancing.VrackNetworkCreationRules"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/vrack/networkCreationRules"
    },
    {
      "description": "status operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Information about vRack for your Load Balancer",
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
          "responseType": "ipLoadbalancing.VrackInformation"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/vrack/status"
    },
    {
      "description": "List the ipLoadbalancing.Zone.Zone objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Zone for this iplb",
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
          "responseType": "string[]"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/zone"
    },
    {
      "description": "IP Load Balancing Zone",
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
              "description": "Name of your zone",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
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
          "responseType": "ipLoadbalancing.Zone.Zone"
        }
      ],
      "path": "/ipLoadbalancing/{serviceName}/zone/{name}"
    },
    {
      "description": "cancelTermination operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cancel the termination request of your service zone option",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your zone",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
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
      "path": "/ipLoadbalancing/{serviceName}/zone/{name}/cancelTermination"
    },
    {
      "description": "terminate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Terminate your service zone option",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your zone",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
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
      "path": "/ipLoadbalancing/{serviceName}/zone/{name}/terminate"
    },
    {
      "description": "List of zone available for an IP load balancing",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-06-11T00:00:00+01:00",
            "deprecatedDate": "2018-05-10T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "List of zone available for an IP load balancing",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/ipLoadbalancing/availableZones"
    }
  ],
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "ipLoadbalancing.BackendCustomerServerStatusEnum": {
      "description": "Possible values for server status",
      "enum": [
        "active",
        "inactive"
      ],
      "enumType": "string",
      "id": "BackendCustomerServerStatusEnum",
      "namespace": "ipLoadbalancing"
    },
    "ipLoadbalancing.BackendProbe": {
      "description": "Probe used to determine if a backend is alive and can handle requests",
      "id": "BackendProbe",
      "namespace": "ipLoadbalancing",
      "properties": {
        "forceSsl": {
          "canBeNull": true,
          "description": "Force probe to run over a SSL layer. Defaults to false",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "interval": {
          "canBeNull": true,
          "description": "Seconds between each probe check. Must be > 30sec. Defaults to 30",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "match": {
          "canBeNull": true,
          "description": "Matcher to use to valide \"expect\". \"default\" uses HAProxy's default behavior for this type of check. \"status\" is only supported for HTTP probes",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.ProbeExpectMatchEnum"
        },
        "method": {
          "canBeNull": true,
          "description": "HTTP method to use with \"http\" probe. Consider using HEAD to save bandwidth when possible. Defaults to \"GET\"",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.ProbeMethodEnum"
        },
        "negate": {
          "canBeNull": true,
          "description": "Invert the matching operator effect",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "pattern": {
          "canBeNull": true,
          "description": "Server response expected when UP. Empty for \"default\", comma delimited list of statuses for \"status\", string for \"contains\", regex for \"matches\"",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "port": {
          "canBeNull": true,
          "description": "Port used to probe your backend. Equal to farm port if null. Ignored for oco probe type",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": true,
          "description": "Probe type. \"tcp\" if null",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.ProbeTypeEnum"
        },
        "url": {
          "canBeNull": true,
          "description": "URL to use for HTTP probes of the form [www.example.com]/path/to/check. Protocol will be ignored. Defaults to \"/\"",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.BalanceHTTPEnum": {
      "description": "Possible values for load balancing balance algorithm",
      "enum": [
        "first",
        "leastconn",
        "roundrobin",
        "source",
        "uri"
      ],
      "enumType": "string",
      "id": "BalanceHTTPEnum",
      "namespace": "ipLoadbalancing"
    },
    "ipLoadbalancing.BalanceTCPEnum": {
      "description": "Possible values for load balancing balance algorithm",
      "enum": [
        "first",
        "leastconn",
        "roundrobin",
        "source"
      ],
      "enumType": "string",
      "id": "BalanceTCPEnum",
      "namespace": "ipLoadbalancing"
    },
    "ipLoadbalancing.DefinedFarm": {
      "description": "a list of { type => [ Farm ids ] }",
      "id": "DefinedFarm",
      "namespace": "ipLoadbalancing",
      "properties": {
        "id": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.DefinedFrontend": {
      "description": "a list of {type=>[Frontend ids]}",
      "id": "DefinedFrontend",
      "namespace": "ipLoadbalancing",
      "properties": {
        "id": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.DefinedRoute": {
      "description": "Defined routes name, type and id. Typically used to generate autocomplete lists.",
      "id": "DefinedRoute",
      "namespace": "ipLoadbalancing",
      "properties": {
        "displayName": {
          "canBeNull": true,
          "description": "Human readable name for your route",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "routeId": {
          "canBeNull": false,
          "description": "Id of your route",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "Protocol supported by this route",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.FarmAvailableProbe": {
      "description": "Available farm probes options",
      "id": "FarmAvailableProbe",
      "namespace": "ipLoadbalancing",
      "properties": {
        "matches": {
          "canBeNull": false,
          "description": "List of possible probe result checkers for this type of probe",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "method": {
          "canBeNull": true,
          "description": "List of available HTTP method, if available",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "negatableMatches": {
          "canBeNull": false,
          "description": "List of matches operators that accept the negate option for this type of probe",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "port": {
          "canBeNull": false,
          "description": "True is this probe type supports a custom port",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "type": {
          "canBeNull": false,
          "description": "Probe protocol name. See probe \"type\" field in the farm probe",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": "True is this probe type supports a URL",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "ipLoadbalancing.Frontend.Frontend": {
      "description": "Frontend",
      "id": "Frontend",
      "namespace": "ipLoadbalancing.Frontend",
      "properties": {
        "allowedSource": {
          "canBeNull": true,
          "description": "Restrict iplb access to these ip block. No restriction if null. You cannot specify allowedSource and deniedSource both at the same time",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        },
        "dedicatedIpfo": {
          "canBeNull": true,
          "description": "Only attach frontend on these ip. No restriction if null",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        },
        "defaultBackendId": {
          "canBeNull": true,
          "description": "Default Backend of your frontend",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "defaultSslId": {
          "canBeNull": true,
          "description": "Default ssl served to your customer",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "deniedSource": {
          "canBeNull": true,
          "description": "Deny iplb access to these ip block. No restriction if null. You cannot specify allowedSource and deniedSource both at the same time",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        },
        "disabled": {
          "canBeNull": false,
          "description": "Disable frontend. Default: 'false'",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "hsts": {
          "canBeNull": false,
          "description": "HTTP Strict Transport Security. Default: 'false'",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "httpHeader": {
          "canBeNull": true,
          "description": "Add header to your frontend. Useful variables admitted : %ci <=> client_ip, %cp <=> client_port",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of your frontend",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "port": {
          "canBeNull": false,
          "description": "Port(s) attached to your frontend",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "redirectLocation": {
          "canBeNull": true,
          "description": "HTTP redirection (Ex : http://www.ovh.com)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ssl": {
          "canBeNull": false,
          "description": "SSL deciphering. Default: 'false'",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of your frontend",
          "fullType": "ipLoadbalancing.ProxyTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "ipLoadbalancing.ProxyTypeEnum"
        },
        "zone": {
          "canBeNull": false,
          "description": "Zone of you frontend",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.InstancesState": {
      "description": "A structure describing the current state of an IPLB instances",
      "id": "InstancesState",
      "namespace": "ipLoadbalancing",
      "properties": {
        "internalId": {
          "canBeNull": false,
          "description": "Internal ID of this IPLB instance",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "lastUpdateDate": {
          "canBeNull": false,
          "description": "Last update date",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of this IPLB instance",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zone": {
          "canBeNull": false,
          "description": "zone of this IPLB instance",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.Ip": {
      "description": "Your IP load balancing",
      "id": "Ip",
      "namespace": "ipLoadbalancing",
      "properties": {
        "displayName": {
          "canBeNull": true,
          "description": "Set the name displayed in ManagerV6 for your iplb (max 50 chars)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ipLoadbalancing": {
          "canBeNull": false,
          "description": "Your IP load balancing",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "ipv4": {
          "canBeNull": true,
          "description": "The IPV4 associated to your IP load balancing",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "ipv6": {
          "canBeNull": true,
          "description": "The IPV6 associated to your IP load balancing",
          "fullType": "ipv6",
          "readOnly": true,
          "required": false,
          "type": "ipv6"
        },
        "metricsToken": {
          "canBeNull": true,
          "description": "The metrics token associated with your IP load balancing",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "offer": {
          "canBeNull": false,
          "description": "The offer of your IP load balancing",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "orderableZone": {
          "canBeNull": false,
          "description": "Available additional zone for your Load Balancer",
          "fullType": "ipLoadbalancing.OrderableZone[]",
          "readOnly": true,
          "required": false,
          "type": "ipLoadbalancing.OrderableZone[]"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "The internal name of your IP load balancing",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "sslConfiguration": {
          "canBeNull": true,
          "description": "Modern oldest compatible clients : Firefox 27, Chrome 30, IE 11 on Windows 7, Edge, Opera 17, Safari 9, Android 5.0, and Java 8. Intermediate oldest compatible clients : Firefox 1, Chrome 1, IE 7, Opera 5, Safari 1, Windows XP IE8, Android 2.3, Java 7. Intermediate if null.",
          "fullType": "ipLoadbalancing.SslConfigurationEnum",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.SslConfigurationEnum"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of your IP",
          "fullType": "ipLoadbalancing.IpStateEnum",
          "readOnly": true,
          "required": false,
          "type": "ipLoadbalancing.IpStateEnum"
        },
        "vrackEligibility": {
          "canBeNull": false,
          "description": "Vrack eligibility",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "vrackName": {
          "canBeNull": true,
          "description": "Name of the vRack on which the current Load Balancer is attached to, as it is named on vRack product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "zone": {
          "canBeNull": false,
          "description": "Location where your service is",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "ipLoadbalancing.IpStateEnum": {
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
      "id": "IpStateEnum",
      "namespace": "ipLoadbalancing"
    },
    "ipLoadbalancing.NatIps": {
      "description": "a list of {zone, nat Ip}",
      "id": "NatIps",
      "namespace": "ipLoadbalancing",
      "properties": {
        "ip": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        },
        "zone": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.OnMarkedDownEnum": {
      "description": "Possible values for OnMarkedDown type",
      "enum": [
        "shutdown-sessions"
      ],
      "enumType": "string",
      "id": "OnMarkedDownEnum",
      "namespace": "ipLoadbalancing"
    },
    "ipLoadbalancing.OrderableZone": {
      "description": "Available additional zone to order for a Load Balancer",
      "id": "OrderableZone",
      "namespace": "ipLoadbalancing",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "The zone three letter code",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "planCode": {
          "canBeNull": false,
          "description": "The billing planCode for this zone",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.PendingChanges": {
      "description": "The pending changes for a Load Balancer zone",
      "id": "PendingChanges",
      "namespace": "ipLoadbalancing",
      "properties": {
        "number": {
          "canBeNull": false,
          "description": "The number of changes waiting to be applied",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "zone": {
          "canBeNull": false,
          "description": "The Load Balancer zone with pending changes",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.ProbeExpectMatchEnum": {
      "description": "List of possible probe result matches. \"status\" is only supported for HTTP probes",
      "enum": [
        "contains",
        "default",
        "internal",
        "matches",
        "status"
      ],
      "enumType": "string",
      "id": "ProbeExpectMatchEnum",
      "namespace": "ipLoadbalancing"
    },
    "ipLoadbalancing.ProbeMethodEnum": {
      "description": "List of possible method for HTTP probes. Consider using HEAD to save bandwidth when possible.",
      "enum": [
        "GET",
        "HEAD",
        "OPTIONS",
        "internal"
      ],
      "enumType": "string",
      "id": "ProbeMethodEnum",
      "namespace": "ipLoadbalancing"
    },
    "ipLoadbalancing.ProbeTypeEnum": {
      "description": "Possible values for farm probe",
      "enum": [
        "http",
        "internal",
        "mysql",
        "oco",
        "pgsql",
        "smtp",
        "tcp"
      ],
      "enumType": "string",
      "id": "ProbeTypeEnum",
      "namespace": "ipLoadbalancing"
    },
    "ipLoadbalancing.ProxyProtocolVersionEnum": {
      "description": "Possible values for proxy type",
      "enum": [
        "v1",
        "v2",
        "v2-ssl",
        "v2-ssl-cn"
      ],
      "enumType": "string",
      "id": "ProxyProtocolVersionEnum",
      "namespace": "ipLoadbalancing"
    },
    "ipLoadbalancing.ProxyTypeEnum": {
      "description": "Possible values for proxy type",
      "enum": [
        "http",
        "tcp"
      ],
      "enumType": "string",
      "id": "ProxyTypeEnum",
      "namespace": "ipLoadbalancing"
    },
    "ipLoadbalancing.Quota.Quota": {
      "description": "Quota informations for current billing period for this zone",
      "id": "Quota",
      "namespace": "ipLoadbalancing.Quota",
      "properties": {
        "alert": {
          "canBeNull": true,
          "description": "Quota alert value in bytes. When reached, we will send you an alert. Default : included quota with your offer",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "included": {
          "canBeNull": true,
          "description": "Included quota value with your offer, in bytes",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastUpdateDate": {
          "canBeNull": true,
          "description": "The last time your quota was updated from your Load Balancer instance",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "resetDate": {
          "canBeNull": true,
          "description": "The last time your quota was resetted (billed)",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "total": {
          "canBeNull": true,
          "description": "Total used quota value in bytes",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "zone": {
          "canBeNull": false,
          "description": "Zone of your quota",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.QuotaHistory.QuotaHistory": {
      "description": "QuotaHistory",
      "id": "QuotaHistory",
      "namespace": "ipLoadbalancing.QuotaHistory",
      "properties": {
        "historizedDate": {
          "canBeNull": false,
          "description": "Historized date for this quota entry",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of your quota",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastUpdateDate": {
          "canBeNull": false,
          "description": "The last time your quota was updated from your Load Balancer instance",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "resetDate": {
          "canBeNull": false,
          "description": "The last time your quota was resetted (billed)",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "total": {
          "canBeNull": false,
          "description": "Total used quota value in bytes",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "zone": {
          "canBeNull": false,
          "description": "Zone of your quota",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.RouteAvailableAction": {
      "description": "Available route actions options",
      "id": "RouteAvailableAction",
      "namespace": "ipLoadbalancing",
      "properties": {
        "destination": {
          "canBeNull": true,
          "description": "Type of the destination for this action",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Action name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": true,
          "description": "List of available HTTP status code if applicable",
          "readOnly": false,
          "required": false,
          "type": "long[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Protocol supported by this action",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.RouteAvailableRule": {
      "description": "Match rule to combine to build routes",
      "id": "RouteAvailableRule",
      "namespace": "ipLoadbalancing",
      "properties": {
        "enum": {
          "canBeNull": true,
          "description": "If pattern is \"enum\", list of available options",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "hasSubField": {
          "canBeNull": false,
          "description": "If true, this rule needs a subfield. Typically a cookie or header name",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "matches": {
          "canBeNull": false,
          "description": "List of match operators compatible with this rule",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "name": {
          "canBeNull": false,
          "description": "Rule name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "pattern": {
          "canBeNull": false,
          "description": "Expected type for the pattern. Like \"enum\", \"backend\", \"cidr\", ...",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Protocol supported by this action",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.RouteHttp.RouteHttp": {
      "description": "HTTP Route",
      "id": "RouteHttp",
      "namespace": "ipLoadbalancing.RouteHttp",
      "properties": {
        "action": {
          "canBeNull": false,
          "description": "Action triggered when all rules match",
          "fullType": "ipLoadbalancing.RouteHttpAction",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.RouteHttpAction"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Human readable name for your route, this field is for you",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "frontendId": {
          "canBeNull": true,
          "description": "Route traffic for this frontend",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "routeId": {
          "canBeNull": false,
          "description": "Id of your route",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "rules": {
          "canBeNull": false,
          "description": "List of rules to match to trigger action",
          "fullType": "ipLoadbalancing.RouteRule[]",
          "readOnly": true,
          "required": false,
          "type": "ipLoadbalancing.RouteRule[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Route status. Routes in \"ok\" state are ready to operate",
          "fullType": "ipLoadbalancing.RouteStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "ipLoadbalancing.RouteStatusEnum"
        },
        "weight": {
          "canBeNull": false,
          "description": "Route priority ([0..255]). 0 if null. Highest priority routes are evaluated last. Only the first matching route will trigger an action",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "ipLoadbalancing.RouteHttpAction": {
      "description": "Action triggered when all rules from route match",
      "id": "RouteHttpAction",
      "namespace": "ipLoadbalancing",
      "properties": {
        "status": {
          "canBeNull": true,
          "description": "HTTP status code for \"redirect\" and \"reject\" actions",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "target": {
          "canBeNull": true,
          "description": "Farm ID for \"farm\" action type or URL template for \"redirect\" action. You may use ${uri}, ${protocol}, ${host}, ${port} and ${path} variables in redirect target",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Action to trigger if all the rules of this route matches",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.RouteRule": {
      "description": "Match rule to combine to build routes",
      "id": "RouteRule",
      "namespace": "ipLoadbalancing",
      "properties": {
        "field": {
          "canBeNull": false,
          "description": "Name of the field to match like \"protocol\" or \"host\". See \"/ipLoadbalancing/{serviceName}/route/availableRules\" for a list of available rules",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "match": {
          "canBeNull": false,
          "description": "Matching operator. Not all operators are available for all fields. See \"/availableRules\"",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.RouteRuleMatchesEnum"
        },
        "negate": {
          "canBeNull": false,
          "description": "Invert the matching operator effect",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "pattern": {
          "canBeNull": true,
          "description": "Value to match against this match. Interpretation if this field depends on the match and field",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ruleId": {
          "canBeNull": false,
          "description": "Id of your rule",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "subField": {
          "canBeNull": true,
          "description": "Name of sub-field, if applicable. This may be a Cookie or Header name for instance",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.RouteRule.RouteRule": {
      "description": "Rule of a route",
      "id": "RouteRule",
      "namespace": "ipLoadbalancing.RouteRule",
      "properties": {
        "displayName": {
          "canBeNull": true,
          "description": "Human readable name for your rule",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "field": {
          "canBeNull": false,
          "description": "Name of the field to match like \"protocol\" or \"host\". See \"/ipLoadbalancing/{serviceName}/availableRouteRules\" for a list of available rules",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "match": {
          "canBeNull": false,
          "description": "Matching operator. Not all operators are available for all fields. See \"/ipLoadbalancing/{serviceName}/availableRouteRules\"",
          "fullType": "ipLoadbalancing.RouteRuleMatchesEnum",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.RouteRuleMatchesEnum"
        },
        "negate": {
          "canBeNull": false,
          "description": "Invert the matching operator effect",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "pattern": {
          "canBeNull": true,
          "description": "Value to match against this match. Interpretation if this field depends on the match and field",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ruleId": {
          "canBeNull": false,
          "description": "Id of your rule",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "subField": {
          "canBeNull": true,
          "description": "Name of sub-field, if applicable. This may be a Cookie or Header name for instance",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.RouteRuleMatchesEnum": {
      "description": "List of possible route rule matches",
      "enum": [
        "contains",
        "endswith",
        "exists",
        "in",
        "internal",
        "is",
        "matches",
        "startswith"
      ],
      "enumType": "string",
      "id": "RouteRuleMatchesEnum",
      "namespace": "ipLoadbalancing"
    },
    "ipLoadbalancing.RouteStatusEnum": {
      "description": "Route configuration status",
      "enum": [
        "creating",
        "deleting",
        "internal",
        "ok",
        "updating"
      ],
      "enumType": "string",
      "id": "RouteStatusEnum",
      "namespace": "ipLoadbalancing"
    },
    "ipLoadbalancing.RouteTcp.RouteTcp": {
      "description": "TCP Route",
      "id": "RouteTcp",
      "namespace": "ipLoadbalancing.RouteTcp",
      "properties": {
        "action": {
          "canBeNull": false,
          "description": "Action triggered when all rules match",
          "fullType": "ipLoadbalancing.RouteTcpAction",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.RouteTcpAction"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Human readable name for your route, this field is for you",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "frontendId": {
          "canBeNull": true,
          "description": "Route traffic for this frontend",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "routeId": {
          "canBeNull": false,
          "description": "Id of your route",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "rules": {
          "canBeNull": false,
          "description": "List of rules to match to trigger action",
          "fullType": "ipLoadbalancing.RouteRule[]",
          "readOnly": true,
          "required": false,
          "type": "ipLoadbalancing.RouteRule[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Route status. Routes in \"ok\" state are ready to operate",
          "fullType": "ipLoadbalancing.RouteStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "ipLoadbalancing.RouteStatusEnum"
        },
        "weight": {
          "canBeNull": false,
          "description": "Route priority ([0..255]). 0 if null. Highest priority routes are evaluated last. Only the first matching route will trigger an action",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "ipLoadbalancing.RouteTcpAction": {
      "description": "Action triggered when all rules from route match",
      "id": "RouteTcpAction",
      "namespace": "ipLoadbalancing",
      "properties": {
        "target": {
          "canBeNull": true,
          "description": "Farm ID for \"farm\" action type, empty for others",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Action to trigger if all the rules of this route matches",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.ServerState": {
      "description": "Available servers states",
      "id": "ServerState",
      "namespace": "ipLoadbalancing",
      "properties": {
        "checkCode": {
          "canBeNull": true,
          "description": "Layer5-7 code, if available",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "checkStatus": {
          "canBeNull": true,
          "description": "Status of last health check",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "checkTime": {
          "canBeNull": true,
          "description": "Time of last health check",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "instanceId": {
          "canBeNull": false,
          "description": "Id of your instance",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "lastCheckContent": {
          "canBeNull": true,
          "description": "Last health check contents or textual error",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": true,
          "description": "Status",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.Ssl.Ssl": {
      "description": "Ssl",
      "id": "Ssl",
      "namespace": "ipLoadbalancing.Ssl",
      "properties": {
        "displayName": {
          "canBeNull": true,
          "description": "Human readable name for your ssl certificate, this field is for you",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "expireDate": {
          "canBeNull": false,
          "description": "Expire date of your SSL certificate",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "fingerprint": {
          "canBeNull": false,
          "description": "Fingerprint of your SSL certificate",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of your SSL certificate",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "san": {
          "canBeNull": false,
          "description": "Subject Alternative Name of your SSL certificate",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "serial": {
          "canBeNull": false,
          "description": "Serial of your SSL certificate (Deprecated, use fingerprint instead !)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "subject": {
          "canBeNull": false,
          "description": "Subject of your SSL certificate",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": true,
          "description": "Type of your SSL certificate.\n'built' for SSL certificates managed by the IP Load Balancing. 'custom' for user manager certificates.",
          "fullType": "ipLoadbalancing.SslTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "ipLoadbalancing.SslTypeEnum"
        }
      }
    },
    "ipLoadbalancing.SslConfigurationEnum": {
      "description": "Possible values for ssl ciphers",
      "enum": [
        "intermediate",
        "modern"
      ],
      "enumType": "string",
      "id": "SslConfigurationEnum",
      "namespace": "ipLoadbalancing"
    },
    "ipLoadbalancing.SslTypeEnum": {
      "description": "Possible values for ssl type",
      "enum": [
        "built",
        "built_not_routed",
        "custom"
      ],
      "enumType": "string",
      "id": "SslTypeEnum",
      "namespace": "ipLoadbalancing"
    },
    "ipLoadbalancing.Status": {
      "description": "The global status of a Load Balancer",
      "id": "Status",
      "namespace": "ipLoadbalancing",
      "properties": {
        "farms": {
          "canBeNull": false,
          "description": "The Load Balancer farms status informations",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.status.Component"
        },
        "frontends": {
          "canBeNull": false,
          "description": "The Load Balancer frontends status informations",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.status.Component"
        },
        "servers": {
          "canBeNull": false,
          "description": "The Load Balancer servers status informations",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.status.Component"
        },
        "service": {
          "canBeNull": false,
          "description": "The Load Balancer service status informations",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.status.Service"
        }
      }
    },
    "ipLoadbalancing.StickinessHTTPEnum": {
      "description": "Possible values for HTTP backend stickiness",
      "enum": [
        "cookie",
        "sourceIp"
      ],
      "enumType": "string",
      "id": "StickinessHTTPEnum",
      "namespace": "ipLoadbalancing"
    },
    "ipLoadbalancing.StickinessTCPEnum": {
      "description": "Possible values for TCP backend stickiness",
      "enum": [
        "sourceIp"
      ],
      "enumType": "string",
      "id": "StickinessTCPEnum",
      "namespace": "ipLoadbalancing"
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
    "ipLoadbalancing.VrackInformation": {
      "description": "Information about vRack for your Load Balancer",
      "id": "VrackInformation",
      "namespace": "ipLoadbalancing",
      "properties": {
        "state": {
          "canBeNull": false,
          "description": "State of the vRack link to your Load Balancer",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.VrackStateEnum"
        },
        "task": {
          "canBeNull": false,
          "description": "Ongoing task related to vRack installation or uninstallation on your Load Balancer",
          "readOnly": false,
          "required": false,
          "type": "long[]"
        },
        "vrackName": {
          "canBeNull": true,
          "description": "Name of the vRack on which the current Load Balancer is attached to, as it is named on vRack product",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.VrackNetwork.VrackNetwork": {
      "description": "Represents a private network in the vRack",
      "id": "VrackNetwork",
      "namespace": "ipLoadbalancing.VrackNetwork",
      "properties": {
        "displayName": {
          "canBeNull": true,
          "description": "Human readable name for your vrack network",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "farmId": {
          "canBeNull": false,
          "description": "Farm Id your vrack network is attached to and their type",
          "fullType": "ipLoadbalancing.DefinedFarm[]",
          "readOnly": true,
          "required": false,
          "type": "ipLoadbalancing.DefinedFarm[]"
        },
        "natIp": {
          "canBeNull": false,
          "description": "An IP block used as a pool of IPs by this Load Balancer to connect to the servers in this private network. The block must be in the private network and reserved for the Load Balancer",
          "fullType": "ipBlock",
          "readOnly": false,
          "required": false,
          "type": "ipBlock"
        },
        "subnet": {
          "canBeNull": false,
          "description": "IP block of the private network in the vRack",
          "fullType": "ipBlock",
          "readOnly": true,
          "required": false,
          "type": "ipBlock"
        },
        "vlan": {
          "canBeNull": false,
          "description": "VLAN of the private network in the vRack. 0 if the private network is not in a VLAN",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "vrackNetworkId": {
          "canBeNull": false,
          "description": "Internal Load Balancer identifier of the vRack private network description",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "ipLoadbalancing.VrackNetworkCreationRules": {
      "description": "Rules to create a new description of a private network in the vRack",
      "id": "VrackNetworkCreationRules",
      "namespace": "ipLoadbalancing",
      "properties": {
        "minNatIps": {
          "canBeNull": false,
          "description": "Minimum number of IPs needed to forward requests to your servers using NAT in your private network behind the current Load Balancer. Ip Block given on Load Balancer vRack network must contain at least this number of IP.",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "remainingNetworks": {
          "canBeNull": false,
          "description": "Number of remaining private network descriptions available for creation for this Load Balancer",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "vrackName": {
          "canBeNull": false,
          "description": "Name of the vRack on which the current Load Balancer is attached to, as it is named on vRack product",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.VrackStateEnum": {
      "description": "Possible values for load balancing vRack state",
      "enum": [
        "activating",
        "active",
        "deactivating",
        "inactive"
      ],
      "enumType": "string",
      "id": "VrackStateEnum",
      "namespace": "ipLoadbalancing"
    },
    "ipLoadbalancing.VrackTransparentGateways": {
      "description": "Aims to help you configure needed transparent interfaces",
      "id": "VrackTransparentGateways",
      "namespace": "ipLoadbalancing",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "address",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "gateway": {
          "canBeNull": false,
          "description": "gateway",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "vlan": {
          "canBeNull": false,
          "description": "vlan",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "ipLoadbalancing.VrackTransparentIp.VrackTransparentIp": {
      "description": "Server's vrack transparent ip",
      "id": "VrackTransparentIp",
      "namespace": "ipLoadbalancing.VrackTransparentIp",
      "properties": {
        "address": {
          "canBeNull": false,
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "farmId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "serverId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "slotId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "ipLoadbalancing.Zone.Zone": {
      "description": "IP Load Balancing Zone",
      "id": "Zone",
      "namespace": "ipLoadbalancing.Zone",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of your zone",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "State of your zone",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.backendHttp.BackendHttp": {
      "description": "HTTP Farm",
      "id": "BackendHttp",
      "namespace": "ipLoadbalancing.backendHttp",
      "properties": {
        "balance": {
          "canBeNull": true,
          "description": "Load balancing algorithm. 'roundrobin' if null",
          "fullType": "ipLoadbalancing.BalanceHTTPEnum",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.BalanceHTTPEnum"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Human readable name for your backend, this field is for you",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "farmId": {
          "canBeNull": false,
          "description": "Id of your farm",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "port": {
          "canBeNull": true,
          "description": "Port attached to your farm. Inherited from frontend if null",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "probe": {
          "canBeNull": true,
          "description": "Probe used to determine if a backend is alive and can handle requests. Defaults to tcp on the same port as the farm",
          "fullType": "ipLoadbalancing.BackendProbe",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.BackendProbe"
        },
        "stickiness": {
          "canBeNull": true,
          "description": "Stickiness type. No stickiness if null",
          "fullType": "ipLoadbalancing.StickinessHTTPEnum",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.StickinessHTTPEnum"
        },
        "vrackNetworkId": {
          "canBeNull": true,
          "description": "Internal Load Balancer identifier of the vRack private network attached to your farm, mandatory when your Load Balancer is attached to a vRack",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "zone": {
          "canBeNull": false,
          "description": "Zone of you farm",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer": {
      "description": "HTTP Farm's Server",
      "id": "BackendHTTPServer",
      "namespace": "ipLoadbalancing.backendHttpCustomerServer",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "Address of your server",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "backendId": {
          "canBeNull": false,
          "description": "farm id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "backup": {
          "canBeNull": false,
          "description": "Backup state. Default: 'false'",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "chain": {
          "canBeNull": true,
          "description": "Certificate chain. Allow server certificate verification (Avoid man-in-the-middle attacks)",
          "fullType": "text",
          "readOnly": false,
          "required": false,
          "type": "text"
        },
        "cookie": {
          "canBeNull": true,
          "description": "Server cookie value configured for cookie stickiness",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Human readable name for your server, this field is for you",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "onMarkedDown": {
          "canBeNull": true,
          "description": "Set action when backend marked down. (No action if null)",
          "fullType": "ipLoadbalancing.OnMarkedDownEnum",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.OnMarkedDownEnum"
        },
        "port": {
          "canBeNull": true,
          "description": "Port attached to your server. Inherited from farm if null",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "probe": {
          "canBeNull": false,
          "description": "Probe state. Default: 'false'",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "proxyProtocolVersion": {
          "canBeNull": true,
          "description": "Disabled if null. Send PROXY protocol header. Requires a compatible server.",
          "fullType": "ipLoadbalancing.ProxyProtocolVersionEnum",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.ProxyProtocolVersionEnum"
        },
        "serverId": {
          "canBeNull": false,
          "description": "Id of your server",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "serverState": {
          "canBeNull": false,
          "description": "Server state",
          "fullType": "ipLoadbalancing.ServerState[]",
          "readOnly": true,
          "required": false,
          "type": "ipLoadbalancing.ServerState[]"
        },
        "ssl": {
          "canBeNull": false,
          "description": "SSL ciphering. Probes will also be sent ciphered. Default: 'false'",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "status": {
          "canBeNull": false,
          "description": "Status attached to your server",
          "fullType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.BackendCustomerServerStatusEnum"
        },
        "weight": {
          "canBeNull": true,
          "description": "Weight value. Defaults to 1. 0 if not used in load balancing. Servers with higher weight get more requests.",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "ipLoadbalancing.backendTcp.BackendTcp": {
      "description": "TCP Farm",
      "id": "BackendTcp",
      "namespace": "ipLoadbalancing.backendTcp",
      "properties": {
        "balance": {
          "canBeNull": true,
          "description": "Load balancing algorithm. 'roundrobin' if null",
          "fullType": "ipLoadbalancing.BalanceTCPEnum",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.BalanceTCPEnum"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Human readable name for your backend, this field is for you",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "farmId": {
          "canBeNull": false,
          "description": "Id of your farm",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "port": {
          "canBeNull": true,
          "description": "Port attached to your farm. Inherited from frontend if null",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "probe": {
          "canBeNull": true,
          "description": "Probe used to determine if a backend is alive and can handle requests. Defaults to tcp on the same port as the farm",
          "fullType": "ipLoadbalancing.BackendProbe",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.BackendProbe"
        },
        "stickiness": {
          "canBeNull": true,
          "description": "Stickiness type. No stickiness if null",
          "fullType": "ipLoadbalancing.StickinessTCPEnum",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.StickinessTCPEnum"
        },
        "vrackNetworkId": {
          "canBeNull": true,
          "description": "Internal Load Balancer identifier of the vRack private network attached to your farm, mandatory when your Load Balancer is attached to a vRack",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "zone": {
          "canBeNull": false,
          "description": "Zone of you farm",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer": {
      "description": "TCP Farm's Server",
      "id": "BackendTCPServer",
      "namespace": "ipLoadbalancing.backendTcpCustomerServer",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "Address of your server",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "backendId": {
          "canBeNull": false,
          "description": "Farm id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "backup": {
          "canBeNull": false,
          "description": "Backup state. Default: 'false'",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "chain": {
          "canBeNull": true,
          "description": "Certificate chain. Allow server certificate verification (Avoid man-in-the-middle attacks)",
          "fullType": "text",
          "readOnly": false,
          "required": false,
          "type": "text"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Human readable name for your server, this field is for you",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "onMarkedDown": {
          "canBeNull": true,
          "description": "Set action when backend marked down. (No action if null)",
          "fullType": "ipLoadbalancing.OnMarkedDownEnum",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.OnMarkedDownEnum"
        },
        "port": {
          "canBeNull": true,
          "description": "Port attached to your server. Inherited from farm if null",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "probe": {
          "canBeNull": false,
          "description": "Probe state. Default: 'false'",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "proxyProtocolVersion": {
          "canBeNull": true,
          "description": "Disabled if null. Send PROXY protocol header. Requires a compatible server.",
          "fullType": "ipLoadbalancing.ProxyProtocolVersionEnum",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.ProxyProtocolVersionEnum"
        },
        "serverId": {
          "canBeNull": false,
          "description": "Id of your server",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "serverState": {
          "canBeNull": false,
          "description": "Server state",
          "fullType": "ipLoadbalancing.ServerState[]",
          "readOnly": true,
          "required": false,
          "type": "ipLoadbalancing.ServerState[]"
        },
        "ssl": {
          "canBeNull": false,
          "description": "SSL ciphering. Probes will also be sent ciphered",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "status": {
          "canBeNull": false,
          "description": "Status attached to your server",
          "fullType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.BackendCustomerServerStatusEnum"
        },
        "weight": {
          "canBeNull": true,
          "description": "Weight value. Defaults to 1. 0 if not used in load balancing. Servers with higher weight get more requests.",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "ipLoadbalancing.backendUdp.BackendUdp": {
      "description": "UDP Farm",
      "id": "BackendUdp",
      "namespace": "ipLoadbalancing.backendUdp",
      "properties": {
        "displayName": {
          "canBeNull": true,
          "description": "Human readable name for your backend, this field is for you",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "farmId": {
          "canBeNull": false,
          "description": "Id of your farm",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "port": {
          "canBeNull": false,
          "description": "Port attached to your farm. Inherited from frontend if null",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "vrackNetworkId": {
          "canBeNull": true,
          "description": "Internal Load Balancer identifier of the vRack private network attached to your farm, mandatory when your Load Balancer is attached to a vRack",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "zone": {
          "canBeNull": false,
          "description": "Zone of you farm",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer": {
      "description": "UDP Farm's Server",
      "id": "BackendUDPServer",
      "namespace": "ipLoadbalancing.backendUdpCustomerServer",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "Address of your server",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "backendId": {
          "canBeNull": false,
          "description": "farm id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Human readable name for your server, this field is for you",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "port": {
          "canBeNull": true,
          "description": "Port attached to your server. Inherited from farm if null",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "serverId": {
          "canBeNull": false,
          "description": "Id of your server",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Status attached to your server",
          "fullType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.BackendCustomerServerStatusEnum"
        }
      }
    },
    "ipLoadbalancing.frontendHttp.FrontendHttp": {
      "description": "Frontend HTTP",
      "id": "FrontendHttp",
      "namespace": "ipLoadbalancing.frontendHttp",
      "properties": {
        "allowedSource": {
          "canBeNull": true,
          "description": "Restrict IP Load Balancing access to these ip block. No restriction if null. You cannot specify allowedSource and deniedSource both at the same time",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        },
        "dedicatedIpfo": {
          "canBeNull": true,
          "description": "Only attach frontend on these ip. No restriction if null",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        },
        "defaultFarmId": {
          "canBeNull": true,
          "description": "Default HTTP Farm of your frontend",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "defaultSslId": {
          "canBeNull": true,
          "description": "Default ssl served to your customer",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "deniedSource": {
          "canBeNull": true,
          "description": "Deny IP Load Balancing access to these ip block. No restriction if null. You cannot specify allowedSource and deniedSource both at the same time",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        },
        "disabled": {
          "canBeNull": false,
          "description": "Disable frontend. Default: 'false'",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Human readable name for your frontend, this field is for you",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "frontendId": {
          "canBeNull": false,
          "description": "Id of your frontend",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "hsts": {
          "canBeNull": false,
          "description": "HTTP Strict Transport Security. Default: 'false'",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "httpHeader": {
          "canBeNull": true,
          "description": "Add header to your frontend. Useful variables admitted : %ci <=> client_ip, %cp <=> client_port",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "port": {
          "canBeNull": false,
          "description": "Listening port(s) on the server",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "redirectLocation": {
          "canBeNull": true,
          "description": "HTTP redirection (Ex : http://www.ovh.com)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ssl": {
          "canBeNull": false,
          "description": "SSL deciphering. Default: 'false'",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "vrackNetworkId": {
          "canBeNull": true,
          "description": "Internal Load Balancer identifier of the vRack private network attached to your frontend.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "vrackVrouterId": {
          "canBeNull": true,
          "description": "Virtual Router Identifier. 1-255",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "zone": {
          "canBeNull": false,
          "description": "Zone of you frontend",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.frontendTcp.FrontendTcp": {
      "description": "Frontend TCP",
      "id": "FrontendTcp",
      "namespace": "ipLoadbalancing.frontendTcp",
      "properties": {
        "allowedSource": {
          "canBeNull": true,
          "description": "Restrict IP Load Balancing access to these ip block. No restriction if null. You cannot specify allowedSource and deniedSource both at the same time",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        },
        "dedicatedIpfo": {
          "canBeNull": true,
          "description": "Only attach frontend on these ip. No restriction if null",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        },
        "defaultFarmId": {
          "canBeNull": true,
          "description": "Default TCP Farm of your frontend",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "defaultSslId": {
          "canBeNull": true,
          "description": "Default ssl served to your customer",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "deniedSource": {
          "canBeNull": true,
          "description": "Deny IP Load Balancing access to these ip block. No restriction if null. You cannot specify allowedSource and deniedSource both at the same time",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        },
        "disabled": {
          "canBeNull": false,
          "description": "Disable frontend. Default: 'false'",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Human readable name for your frontend, this field is for you",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "frontendId": {
          "canBeNull": false,
          "description": "Id of your frontend",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "port": {
          "canBeNull": false,
          "description": "Listening port(s) on the server",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ssl": {
          "canBeNull": false,
          "description": "SSL deciphering. Default: 'false'",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "vrackNetworkId": {
          "canBeNull": true,
          "description": "Internal Load Balancer identifier of the vRack private network attached to your frontend.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "vrackVrouterId": {
          "canBeNull": true,
          "description": "Virtual Router Identifier. 1-255",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "zone": {
          "canBeNull": false,
          "description": "Zone of you frontend",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.frontendUdp.FrontendUdp": {
      "description": "Frontend UDP",
      "id": "FrontendUdp",
      "namespace": "ipLoadbalancing.frontendUdp",
      "properties": {
        "dedicatedIpfo": {
          "canBeNull": true,
          "description": "Only attach frontend on these ip. No restriction if null",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        },
        "defaultFarmId": {
          "canBeNull": true,
          "description": "Default UDP Farm of your frontend",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "disabled": {
          "canBeNull": false,
          "description": "Disable frontend. Default: 'false'",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Human readable name for your frontend, this field is for you",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "frontendId": {
          "canBeNull": false,
          "description": "Id of your frontend",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "port": {
          "canBeNull": false,
          "description": "Listening port(s) on the server",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zone": {
          "canBeNull": false,
          "description": "Zone of you frontend",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ipLoadbalancing.status.Component": {
      "description": "The global status of a Load Balancer component",
      "id": "Component",
      "namespace": "ipLoadbalancing.status",
      "properties": {
        "status": {
          "canBeNull": false,
          "description": "The global status of your Load Balancer component",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.status.ComponentStatus"
        },
        "total": {
          "canBeNull": false,
          "description": "The Load Balancer total component count",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "ipLoadbalancing.status.ComponentStatus": {
      "description": "The statuses of a Load Balancer component",
      "id": "ComponentStatus",
      "namespace": "ipLoadbalancing.status",
      "properties": {
        "error": {
          "canBeNull": false,
          "description": "The number of component with status error",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "ok": {
          "canBeNull": false,
          "description": "The number of component with status ok",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "unknown": {
          "canBeNull": false,
          "description": "The number of component with status unknown",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "warn": {
          "canBeNull": false,
          "description": "The number of component with status warn",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "ipLoadbalancing.status.Enum": {
      "description": "Possible values for a Load Balancer status",
      "enum": [
        "error",
        "ok",
        "unknown",
        "warn"
      ],
      "enumType": "string",
      "id": "Enum",
      "namespace": "ipLoadbalancing.status"
    },
    "ipLoadbalancing.status.Service": {
      "description": "The status of a Load Balancer service",
      "id": "Service",
      "namespace": "ipLoadbalancing.status",
      "properties": {
        "status": {
          "canBeNull": false,
          "description": "The status of your Load Balancer billing domain",
          "readOnly": false,
          "required": false,
          "type": "ipLoadbalancing.status.Enum"
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
  "resourcePath": "/ipLoadbalancing"
}