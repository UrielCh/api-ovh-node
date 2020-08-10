import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/ipLoadbalancing",
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
      "description": "Operations about the IPLB service"
    },
    {
      "path": "/ipLoadbalancing/availableZones",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-06-11T00:00:00+01:00",
            "deprecatedDate": "2018-05-10T00:00:00+01:00"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of zone available for an IP load balancing"
        }
      ],
      "description": "List of zone available for an IP load balancing"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}",
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
          "responseType": "ipLoadbalancing.Ip",
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
              "dataType": "ipLoadbalancing.Ip",
              "paramType": "body",
              "fullType": "ipLoadbalancing.Ip",
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
      "description": "Your IP load balancing"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/availableFarmProbes",
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
          "responseType": "ipLoadbalancing.FarmAvailableProbe[]",
          "noAuthentication": false,
          "description": "Available farm probes for health checks"
        }
      ],
      "description": "availableFarmProbes operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/availableFarmType",
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
          "description": "Available farm types"
        }
      ],
      "description": "availableFarmType operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/availableFrontendType",
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
          "description": "Available frontend type"
        }
      ],
      "description": "availableFrontendType operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/availableRouteActions",
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
          "responseType": "ipLoadbalancing.RouteAvailableAction[]",
          "noAuthentication": false,
          "description": "Available route actions"
        }
      ],
      "description": "availableRouteActions operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/availableRouteRules",
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
          "responseType": "ipLoadbalancing.RouteAvailableRule[]",
          "noAuthentication": false,
          "description": "Available route match rules"
        }
      ],
      "description": "availableRouteRules operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/confirmTermination",
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
      "path": "/ipLoadbalancing/{serviceName}/definedFarms",
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
            },
            {
              "name": "vrackNetworkId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "The vrack network id you want to filter on"
            }
          ],
          "responseType": "ipLoadbalancing.DefinedFarm[]",
          "noAuthentication": false,
          "description": "List of defined farms, and whether they are HTTP, TCP or UDP"
        }
      ],
      "description": "definedFarms operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/definedFrontends",
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
          "responseType": "ipLoadbalancing.DefinedFrontend[]",
          "noAuthentication": false,
          "description": "List of defined frontends, and whether they are HTTP, TCP or UDP"
        }
      ],
      "description": "definedFrontends operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/definedRoutes",
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
          "responseType": "ipLoadbalancing.DefinedRoute[]",
          "noAuthentication": false,
          "description": "List of defined routes, and whether they are HTTP or TCP"
        }
      ],
      "description": "definedRoutes operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/failover",
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
          "responseType": "ipBlock[]",
          "noAuthentication": false,
          "description": "List all failover ip routed to this IPLB"
        }
      ],
      "description": "failover operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/freeCertificate",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "fqdn",
              "dataType": "string[]",
              "paramType": "body",
              "fullType": "string[]",
              "required": true,
              "description": "The FQDN for which you want a free certificate. A DCV (Domain Control Validation) http request will be made to http://your_domain.abc, make sure this domain exists and resolves to your iplb ip before ordering"
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
          "responseType": "ipLoadbalancing.Task.Task",
          "noAuthentication": false,
          "description": "Order a free certificate. We order and deliver it for you"
        }
      ],
      "description": "freeCertificate operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/http/farm",
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
            },
            {
              "name": "vrackNetworkId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of vrackNetworkId property (=)"
            },
            {
              "name": "zone",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of zone property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "HTTP Farm for this iplb"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "port",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Port attached to your farm ([1..49151]). Inherited from frontend if null"
            },
            {
              "name": "zone",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Zone of your farm"
            },
            {
              "name": "stickiness",
              "dataType": "ipLoadbalancing.StickinessHTTPEnum",
              "paramType": "body",
              "fullType": "ipLoadbalancing.StickinessHTTPEnum",
              "required": false,
              "description": "Stickiness type. No stickiness if null"
            },
            {
              "name": "probe",
              "dataType": "ipLoadbalancing.BackendProbe",
              "paramType": "body",
              "fullType": "ipLoadbalancing.BackendProbe",
              "required": false,
              "description": "Probe used to determine if a backend is alive and can handle requests"
            },
            {
              "name": "balance",
              "dataType": "ipLoadbalancing.BalanceHTTPEnum",
              "paramType": "body",
              "fullType": "ipLoadbalancing.BalanceHTTPEnum",
              "required": false,
              "description": "Load balancing algorithm. 'roundrobin' if null"
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Human readable name for your backend, this field is for you"
            },
            {
              "name": "vrackNetworkId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Internal Load Balancer identifier of the vRack private network to attach to your farm, mandatory when your Load Balancer is attached to a vRack"
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
          "responseType": "ipLoadbalancing.backendHttp.BackendHttp",
          "noAuthentication": false,
          "description": "Add a new HTTP Farm on your IP Load Balancing"
        }
      ],
      "description": "List the ipLoadbalancing.backendHttp.BackendHttp objects"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/http/farm/{farmId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "farmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Farm ID"
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
          "description": "Delete an HTTP Farm"
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
              "name": "farmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Farm ID"
            }
          ],
          "responseType": "ipLoadbalancing.backendHttp.BackendHttp",
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
              "dataType": "ipLoadbalancing.backendHttp.BackendHttp",
              "paramType": "body",
              "fullType": "ipLoadbalancing.backendHttp.BackendHttp",
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
              "name": "farmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Farm ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "HTTP Farm"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server",
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
            },
            {
              "name": "farmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Farm ID"
            },
            {
              "name": "cookie",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of cookie property (like)"
            },
            {
              "name": "status",
              "dataType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "paramType": "query",
              "fullType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "name": "address",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": false,
              "description": "Filter the value of address property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "HTTP Farm's Servers"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "weight",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Set weight on that server [1..256]. 0 if not used in load balancing. 1 if left null. Servers with higher weight get more requests."
            },
            {
              "name": "ssl",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "SSL ciphering. Probes will also be sent ciphered. Default: 'false'"
            },
            {
              "name": "proxyProtocolVersion",
              "dataType": "ipLoadbalancing.ProxyProtocolVersionEnum",
              "paramType": "body",
              "fullType": "ipLoadbalancing.ProxyProtocolVersionEnum",
              "required": false,
              "description": "Disabled if null. Send PROXY protocol header. Requires a compatible server."
            },
            {
              "name": "status",
              "dataType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "paramType": "body",
              "fullType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "required": true,
              "description": "Enable or disable your server"
            },
            {
              "name": "cookie",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Set the cookie value used when 'cookie' stickiness is set in the farm. Auto generate the cookie if none provided and required."
            },
            {
              "name": "probe",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Enable/disable probe. Default: 'false'"
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Human readable name for your server, this field is for you"
            },
            {
              "name": "backup",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Set server as backup. Default: 'false'"
            },
            {
              "name": "port",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Port attached to your server ([1..49151]). Inherited from farm if null"
            },
            {
              "name": "address",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Address of your server"
            },
            {
              "name": "chain",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": false,
              "description": "Certificate chain. Allow server certificate verification (Avoid man-in-the-middle attacks)"
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
              "name": "farmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Farm ID"
            }
          ],
          "responseType": "ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer",
          "noAuthentication": false,
          "description": "Add a server to an HTTP Farm"
        }
      ],
      "description": "List the ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer objects"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}",
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
              "name": "farmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Farm ID"
            },
            {
              "name": "serverId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Server ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a server from an HTTP Farm"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "farmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Farm ID"
            },
            {
              "name": "serverId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Server ID"
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
          "responseType": "ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer",
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
              "dataType": "ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer",
              "paramType": "body",
              "fullType": "ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer",
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
              "name": "farmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Farm ID"
            },
            {
              "name": "serverId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Server ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "HTTP Farm's Server"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/http/frontend",
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
            },
            {
              "name": "zone",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of zone property (=)"
            },
            {
              "name": "port",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of port property (like)"
            },
            {
              "name": "defaultFarmId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of defaultFarmId property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "HTTP frontends for this iplb"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "redirectLocation",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "HTTP redirection (Ex : http://www.ovh.com)"
            },
            {
              "name": "hsts",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "HTTP Strict Transport Security. Default: 'false'"
            },
            {
              "name": "allowedSource",
              "dataType": "ipBlock[]",
              "paramType": "body",
              "fullType": "ipBlock[]",
              "required": false,
              "description": "Restrict IP Load Balancing access to these ip block. No restriction if null"
            },
            {
              "name": "zone",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Zone of your frontend. Use \"all\" for all owned zone."
            },
            {
              "name": "port",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Port(s) attached to your frontend. Supports single port (numerical value), range (2 dash-delimited increasing ports) and comma-separated list of 'single port' and/or 'range'. Each port must be in the [1;49151] range."
            },
            {
              "name": "dedicatedIpfo",
              "dataType": "ipBlock[]",
              "paramType": "body",
              "fullType": "ipBlock[]",
              "required": false,
              "description": "Only attach frontend on these ip. No restriction if null"
            },
            {
              "name": "defaultFarmId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Default HTTP Farm of your frontend"
            },
            {
              "name": "ssl",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "SSL deciphering. Default: 'false'"
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Human readable name for your frontend, this field is for you"
            },
            {
              "name": "httpHeader",
              "dataType": "string[]",
              "paramType": "body",
              "fullType": "string[]",
              "required": false,
              "description": "Add header to your frontend. Useful variables admitted : %ci <=> client_ip, %cp <=> client_port"
            },
            {
              "name": "defaultSslId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Default ssl served to your customer"
            },
            {
              "name": "disabled",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Disable your frontend. Default: 'false'"
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
          "responseType": "ipLoadbalancing.frontendHttp.FrontendHttp",
          "noAuthentication": false,
          "description": "Add a new http frontend on your IP Load Balancing"
        }
      ],
      "description": "List the ipLoadbalancing.frontendHttp.FrontendHttp objects"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "frontendId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Frontend ID"
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
          "description": "Delete an HTTP frontend"
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
              "name": "frontendId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Frontend ID"
            }
          ],
          "responseType": "ipLoadbalancing.frontendHttp.FrontendHttp",
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
              "dataType": "ipLoadbalancing.frontendHttp.FrontendHttp",
              "paramType": "body",
              "fullType": "ipLoadbalancing.frontendHttp.FrontendHttp",
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
              "name": "frontendId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Frontend ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Frontend HTTP"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/http/route",
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
            },
            {
              "name": "frontendId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of frontendId property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "HTTP routes for this iplb"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "action",
              "dataType": "ipLoadbalancing.RouteHttpAction",
              "paramType": "body",
              "fullType": "ipLoadbalancing.RouteHttpAction",
              "required": true,
              "description": "Action triggered when all rules match"
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Human readable name for your route, this field is for you"
            },
            {
              "name": "weight",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Route priority ([0..255]). 0 if null. Highest priority routes are evaluated last. Only the first matching route will trigger an action"
            },
            {
              "name": "frontendId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Route traffic for this frontend"
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
          "responseType": "ipLoadbalancing.RouteHttp.RouteHttp",
          "noAuthentication": false,
          "description": "Add a new HTTP route to your frontend"
        }
      ],
      "description": "List the ipLoadbalancing.RouteHttp.RouteHttp objects"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/http/route/{routeId}",
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
              "name": "routeId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Route ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete this HTTP route"
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
              "name": "routeId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Route ID"
            }
          ],
          "responseType": "ipLoadbalancing.RouteHttp.RouteHttp",
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
              "dataType": "ipLoadbalancing.RouteHttp.RouteHttp",
              "paramType": "body",
              "fullType": "ipLoadbalancing.RouteHttp.RouteHttp",
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
              "name": "routeId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Route ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "HTTP Route"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule",
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
            },
            {
              "name": "routeId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Route ID"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "HTTP routes for this iplb"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "negate",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Invert the matching operator effect"
            },
            {
              "name": "field",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of the field to match like \"protocol\" or \"host\". See \"/ipLoadbalancing/{serviceName}/availableRouteRules\" for a list of available rules"
            },
            {
              "name": "subField",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Name of sub-field, if applicable. This may be a Cookie or Header name for instance"
            },
            {
              "name": "pattern",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Value to match against this match. Interpretation if this field depends on the match and field"
            },
            {
              "name": "match",
              "dataType": "ipLoadbalancing.RouteRuleMatchesEnum",
              "paramType": "body",
              "fullType": "ipLoadbalancing.RouteRuleMatchesEnum",
              "required": true,
              "description": "Matching operator. Not all operators are available for all fields. See \"/ipLoadbalancing/{serviceName}/availableRouteRules\""
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Human readable name for your rule"
            },
            {
              "name": "routeId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Route ID"
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
          "responseType": "ipLoadbalancing.RouteRule.RouteRule",
          "noAuthentication": false,
          "description": "Add a new rule to your route"
        }
      ],
      "description": "List the ipLoadbalancing.RouteRule.RouteRule objects"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}",
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
              "name": "routeId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Route ID"
            },
            {
              "name": "ruleId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Rule ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete this rule from the route"
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
              "name": "routeId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Route ID"
            },
            {
              "name": "ruleId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Rule ID"
            }
          ],
          "responseType": "ipLoadbalancing.RouteRule.RouteRule",
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
              "dataType": "ipLoadbalancing.RouteRule.RouteRule",
              "paramType": "body",
              "fullType": "ipLoadbalancing.RouteRule.RouteRule",
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
              "name": "routeId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Route ID"
            },
            {
              "name": "ruleId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Rule ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Rule of a route"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/instancesState",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-10-17T00:00:00+01:00",
            "deprecatedDate": "2018-09-17T00:00:00+01:00"
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
          "responseType": "ipLoadbalancing.InstancesState[]",
          "noAuthentication": false,
          "description": "Get the effective state of your IPLB instances on IPLB servers"
        }
      ],
      "description": "instancesState operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/natIp",
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
          "responseType": "ipLoadbalancing.NatIps[]",
          "noAuthentication": false,
          "description": "Ip subnet used by OVH to nat requests on your IPLB to your backends. You must ensure that your backends are not part of a network that overlap with this one"
        }
      ],
      "description": "natIp operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/pendingChanges",
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
          "responseType": "ipLoadbalancing.PendingChanges[]",
          "noAuthentication": false,
          "description": "List the pending changes on your Load Balancer configuration, per zone"
        }
      ],
      "description": "pendingChanges operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/quota",
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
          "description": "Available quota informations for current billing period per zone"
        }
      ],
      "description": "List the ipLoadbalancing.Quota.Quota objects"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/quota/{zone}",
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
            },
            {
              "name": "zone",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Zone"
            }
          ],
          "responseType": "ipLoadbalancing.Quota.Quota",
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
              "dataType": "ipLoadbalancing.Quota.Quota",
              "paramType": "body",
              "fullType": "ipLoadbalancing.Quota.Quota",
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
              "name": "zone",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Zone"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Quota informations for current billing period for this zone"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/quotaHistory",
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
            },
            {
              "name": "historizedDate.to",
              "dataType": "date",
              "paramType": "query",
              "fullType": "date",
              "required": false,
              "description": "Filter the value of historizedDate property (<=)"
            },
            {
              "name": "zone",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of zone property (=)"
            },
            {
              "name": "historizedDate.from",
              "dataType": "date",
              "paramType": "query",
              "fullType": "date",
              "required": false,
              "description": "Filter the value of historizedDate property (>=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Quota history informations, per month"
        }
      ],
      "description": "List the ipLoadbalancing.QuotaHistory.QuotaHistory objects"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/quotaHistory/{id}",
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
          "responseType": "ipLoadbalancing.QuotaHistory.QuotaHistory",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "QuotaHistory"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/refresh",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "zone",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The zone(s) of your iplb"
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
          "responseType": "ipLoadbalancing.Task.Task",
          "noAuthentication": false,
          "description": "Apply the configuration to your iplb"
        }
      ],
      "description": "refresh operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/serviceInfos",
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
          "responseType": "services.Service",
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
      "path": "/ipLoadbalancing/{serviceName}/ssl",
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
            },
            {
              "name": "serial",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of serial property (like)"
            },
            {
              "name": "type",
              "dataType": "ipLoadbalancing.SslTypeEnum",
              "paramType": "query",
              "fullType": "ipLoadbalancing.SslTypeEnum",
              "required": false,
              "description": "Filter the value of type property (=)"
            },
            {
              "name": "fingerprint",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of fingerprint property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Ssl for this iplb"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "certificate",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "Certificate"
            },
            {
              "name": "chain",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": false,
              "description": "Certificate chain"
            },
            {
              "name": "key",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "Certificate key"
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Human readable name for your ssl certificate, this field is for you"
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
          "responseType": "ipLoadbalancing.Ssl.Ssl",
          "noAuthentication": false,
          "description": "Add a new custom SSL certificate on your IP Load Balancing"
        }
      ],
      "description": "List the ipLoadbalancing.Ssl.Ssl objects"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/ssl/{id}",
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a custom SSL certificate"
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "ipLoadbalancing.Ssl.Ssl",
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
              "dataType": "ipLoadbalancing.Ssl.Ssl",
              "paramType": "body",
              "fullType": "ipLoadbalancing.Ssl.Ssl",
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Ssl"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/status",
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
          "responseType": "ipLoadbalancing.Status",
          "noAuthentication": false,
          "description": "Get the global status of your IPLB"
        }
      ],
      "description": "status operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/task",
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
            },
            {
              "name": "action",
              "dataType": "ipLoadbalancing.TaskActionEnum",
              "paramType": "query",
              "fullType": "ipLoadbalancing.TaskActionEnum",
              "required": false,
              "description": "Filter the value of action property (=)"
            },
            {
              "name": "creationDate.to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDate property (<=)"
            },
            {
              "name": "status",
              "dataType": "ipLoadbalancing.TaskStatusEnum",
              "paramType": "query",
              "fullType": "ipLoadbalancing.TaskStatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "name": "doneDate.to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of doneDate property (<=)"
            },
            {
              "name": "creationDate.from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDate property (>=)"
            },
            {
              "name": "doneDate.from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of doneDate property (>=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Task for this iplb"
        }
      ],
      "description": "List the ipLoadbalancing.Task.Task objects"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/task/{id}",
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
          "responseType": "ipLoadbalancing.Task.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "IP Load Balancing Operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/tcp/farm",
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
            },
            {
              "name": "zone",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of zone property (=)"
            },
            {
              "name": "vrackNetworkId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of vrackNetworkId property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "TCP Farm for this iplb"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "vrackNetworkId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Internal Load Balancer identifier of the vRack private network to attach to your farm, mandatory when your Load Balancer is attached to a vRack"
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Human readable name for your backend, this field is for you"
            },
            {
              "name": "zone",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Zone of your farm"
            },
            {
              "name": "port",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Port attached to your farm ([1..49151]). Inherited from frontend if null"
            },
            {
              "name": "balance",
              "dataType": "ipLoadbalancing.BalanceTCPEnum",
              "paramType": "body",
              "fullType": "ipLoadbalancing.BalanceTCPEnum",
              "required": false,
              "description": "Load balancing algorithm. 'roundrobin' if null"
            },
            {
              "name": "probe",
              "dataType": "ipLoadbalancing.BackendProbe",
              "paramType": "body",
              "fullType": "ipLoadbalancing.BackendProbe",
              "required": false,
              "description": "Probe used to determine if a backend is alive and can handle requests"
            },
            {
              "name": "stickiness",
              "dataType": "ipLoadbalancing.StickinessTCPEnum",
              "paramType": "body",
              "fullType": "ipLoadbalancing.StickinessTCPEnum",
              "required": false,
              "description": "Stickiness type. No stickiness if null"
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
          "responseType": "ipLoadbalancing.backendTcp.BackendTcp",
          "noAuthentication": false,
          "description": "Add a new TCP Farm on your IP Load Balancing"
        }
      ],
      "description": "List the ipLoadbalancing.backendTcp.BackendTcp objects"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}",
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
              "name": "farmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Farm ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a TCP Farm"
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
              "name": "farmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Farm ID"
            }
          ],
          "responseType": "ipLoadbalancing.backendTcp.BackendTcp",
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
              "dataType": "ipLoadbalancing.backendTcp.BackendTcp",
              "paramType": "body",
              "fullType": "ipLoadbalancing.backendTcp.BackendTcp",
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
              "name": "farmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Farm ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "TCP Farm"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "farmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Farm ID"
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
              "name": "address",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": false,
              "description": "Filter the value of address property (=)"
            },
            {
              "name": "status",
              "dataType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "paramType": "query",
              "fullType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "TCP Farm's Servers"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Human readable name for your server, this field is for you"
            },
            {
              "name": "ssl",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "SSL ciphering. Probes will also be sent ciphered. Default: 'false'"
            },
            {
              "name": "weight",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Set weight on that server [1..256]. 0 if not used in load balancing. 1 if left null. Servers with higher weight get more requests."
            },
            {
              "name": "proxyProtocolVersion",
              "dataType": "ipLoadbalancing.ProxyProtocolVersionEnum",
              "paramType": "body",
              "fullType": "ipLoadbalancing.ProxyProtocolVersionEnum",
              "required": false,
              "description": "Disabled if null. Send PROXY protocol header. Requires a compatible server."
            },
            {
              "name": "probe",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Enable/disable probe. Default: 'false'"
            },
            {
              "name": "address",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Address of your server"
            },
            {
              "name": "status",
              "dataType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "paramType": "body",
              "fullType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
              "required": true,
              "description": "Enable or disable your server"
            },
            {
              "name": "chain",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": false,
              "description": "Certificate chain. Allow server certificate verification (Avoid man-in-the-middle attacks)"
            },
            {
              "name": "backup",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Set server as backup. Default: 'false'"
            },
            {
              "name": "port",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Port attached to your server ([1..49151]). Inherited from farm if null"
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
              "name": "farmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Farm ID"
            }
          ],
          "responseType": "ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer",
          "noAuthentication": false,
          "description": "Add a server to a TCP Farm"
        }
      ],
      "description": "List the ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer objects"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}",
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
              "name": "farmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Farm ID"
            },
            {
              "name": "serverId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Server ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a server from a TCP Farm"
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
              "name": "farmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Farm ID"
            },
            {
              "name": "serverId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Server ID"
            }
          ],
          "responseType": "ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer",
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
              "dataType": "ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer",
              "paramType": "body",
              "fullType": "ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer",
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
              "name": "farmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Farm ID"
            },
            {
              "name": "serverId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Server ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "TCP Farm's Server"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/tcp/frontend",
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
            },
            {
              "name": "zone",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of zone property (=)"
            },
            {
              "name": "port",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of port property (like)"
            },
            {
              "name": "defaultFarmId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of defaultFarmId property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "TCP frontends for this iplb"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ssl",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "SSL deciphering. Default: 'false'"
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Human readable name for your frontend, this field is for you"
            },
            {
              "name": "disabled",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Disable your frontend. Default: 'false'"
            },
            {
              "name": "defaultFarmId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Default TCP Farm of your frontend"
            },
            {
              "name": "dedicatedIpfo",
              "dataType": "ipBlock[]",
              "paramType": "body",
              "fullType": "ipBlock[]",
              "required": false,
              "description": "Only attach frontend on these ip. No restriction if null"
            },
            {
              "name": "zone",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Zone of your frontend. Use \"all\" for all owned zone."
            },
            {
              "name": "port",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Port(s) attached to your frontend. Supports single port (numerical value), range (2 dash-delimited increasing ports) and comma-separated list of 'single port' and/or 'range'. Each port must be in the [1;49151] range."
            },
            {
              "name": "allowedSource",
              "dataType": "ipBlock[]",
              "paramType": "body",
              "fullType": "ipBlock[]",
              "required": false,
              "description": "Restrict IP Load Balancing access to these ip block. No restriction if null"
            },
            {
              "name": "defaultSslId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Default ssl served to your customer"
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
          "responseType": "ipLoadbalancing.frontendTcp.FrontendTcp",
          "noAuthentication": false,
          "description": "Add a new TCP frontend on your IP Load Balancing"
        }
      ],
      "description": "List the ipLoadbalancing.frontendTcp.FrontendTcp objects"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}",
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
              "name": "frontendId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Frontend ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete an TCP frontend"
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
              "name": "frontendId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Frontend ID"
            }
          ],
          "responseType": "ipLoadbalancing.frontendTcp.FrontendTcp",
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
              "dataType": "ipLoadbalancing.frontendTcp.FrontendTcp",
              "paramType": "body",
              "fullType": "ipLoadbalancing.frontendTcp.FrontendTcp",
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
              "name": "frontendId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Frontend ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Frontend TCP"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/tcp/route",
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
            },
            {
              "name": "frontendId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of frontendId property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "TCP routes for this iplb"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "weight",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Route priority ([0..255]). 0 if null. Highest priority routes are evaluated last. Only the first matching route will trigger an action"
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Human readable name for your route, this field is for you"
            },
            {
              "name": "frontendId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Route traffic for this frontend"
            },
            {
              "name": "action",
              "dataType": "ipLoadbalancing.RouteTcpAction",
              "paramType": "body",
              "fullType": "ipLoadbalancing.RouteTcpAction",
              "required": true,
              "description": "Action triggered when all rules match"
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
          "responseType": "ipLoadbalancing.RouteTcp.RouteTcp",
          "noAuthentication": false,
          "description": "Add a new TCP route to your frontend"
        }
      ],
      "description": "List the ipLoadbalancing.RouteTcp.RouteTcp objects"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/tcp/route/{routeId}",
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
              "name": "routeId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Route ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete this TCP route"
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
              "name": "routeId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Route ID"
            }
          ],
          "responseType": "ipLoadbalancing.RouteTcp.RouteTcp",
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
              "dataType": "ipLoadbalancing.RouteTcp.RouteTcp",
              "paramType": "body",
              "fullType": "ipLoadbalancing.RouteTcp.RouteTcp",
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
              "name": "routeId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Route ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "TCP Route"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule",
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
            },
            {
              "name": "routeId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Route ID"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "HTTP routes for this iplb"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "field",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of the field to match like \"protocol\" or \"host\". See \"/ipLoadbalancing/{serviceName}/availableRouteRules\" for a list of available rules"
            },
            {
              "name": "subField",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Name of sub-field, if applicable. This may be a Cookie or Header name for instance"
            },
            {
              "name": "pattern",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Value to match against this match. Interpretation if this field depends on the match and field"
            },
            {
              "name": "match",
              "dataType": "ipLoadbalancing.RouteRuleMatchesEnum",
              "paramType": "body",
              "fullType": "ipLoadbalancing.RouteRuleMatchesEnum",
              "required": true,
              "description": "Matching operator. Not all operators are available for all fields. See \"/ipLoadbalancing/{serviceName}/availableRouteRules\""
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Human readable name for your rule"
            },
            {
              "name": "negate",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Invert the matching operator effect"
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
              "name": "routeId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Route ID"
            }
          ],
          "responseType": "ipLoadbalancing.RouteRule.RouteRule",
          "noAuthentication": false,
          "description": "Add a new rule to your route"
        }
      ],
      "description": "List the ipLoadbalancing.RouteRule.RouteRule objects"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "routeId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Route ID"
            },
            {
              "name": "ruleId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Rule ID"
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
          "description": "Delete this rule from the route"
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
              "name": "routeId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Route ID"
            },
            {
              "name": "ruleId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Rule ID"
            }
          ],
          "responseType": "ipLoadbalancing.RouteRule.RouteRule",
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
              "dataType": "ipLoadbalancing.RouteRule.RouteRule",
              "paramType": "body",
              "fullType": "ipLoadbalancing.RouteRule.RouteRule",
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
              "name": "routeId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Route ID"
            },
            {
              "name": "ruleId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Rule ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Rule of a route"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/terminate",
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
      "path": "/ipLoadbalancing/{serviceName}/vrack/network",
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
            },
            {
              "name": "subnet",
              "dataType": "ipBlock",
              "paramType": "query",
              "fullType": "ipBlock",
              "required": false,
              "description": "Filter the value of subnet property (=)"
            },
            {
              "name": "vlan",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of vlan property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Descriptions of private networks in the vRack attached to this Load Balancer"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "natIp",
              "dataType": "ipBlock",
              "paramType": "body",
              "fullType": "ipBlock",
              "required": true,
              "description": "An IP block used as a pool of IPs by this Load Balancer to connect to the servers in this private network. The block must be in the private network and reserved for the Load Balancer"
            },
            {
              "name": "farmId",
              "dataType": "long[]",
              "paramType": "body",
              "fullType": "long[]",
              "required": false,
              "description": "Farm Id you want to attach to that vrack network"
            },
            {
              "name": "subnet",
              "dataType": "ipBlock",
              "paramType": "body",
              "fullType": "ipBlock",
              "required": true,
              "description": "IP Block of the private network in the vRack"
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Human readable name for your vrack network"
            },
            {
              "name": "vlan",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "VLAN of the private network in the vRack. 0 if the private network is not in a VLAN"
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
          "responseType": "ipLoadbalancing.VrackNetwork.VrackNetwork",
          "noAuthentication": false,
          "description": "Add a description of a private network in the attached vRack"
        }
      ],
      "description": "List the ipLoadbalancing.VrackNetwork.VrackNetwork objects"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}",
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
              "name": "vrackNetworkId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Vrack network ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete this description of a private network in the vRack. It must not be used by any farm server"
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
              "name": "vrackNetworkId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Vrack network ID"
            }
          ],
          "responseType": "ipLoadbalancing.VrackNetwork.VrackNetwork",
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
              "dataType": "ipLoadbalancing.VrackNetwork.VrackNetwork",
              "paramType": "body",
              "fullType": "ipLoadbalancing.VrackNetwork.VrackNetwork",
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
              "name": "vrackNetworkId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Vrack network ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Represents a private network in the vRack"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}/updateFarmId",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "farmId",
              "dataType": "long[]",
              "paramType": "body",
              "fullType": "long[]",
              "required": true,
              "description": "Farm Id you want to attach to that vrack network"
            },
            {
              "name": "vrackNetworkId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Vrack network ID"
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
          "responseType": "ipLoadbalancing.VrackNetwork.VrackNetwork",
          "noAuthentication": false,
          "description": "Update farm attached to that vrack network id"
        }
      ],
      "description": "updateFarmId operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/vrack/networkCreationRules",
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
          "responseType": "ipLoadbalancing.VrackNetworkCreationRules",
          "noAuthentication": false,
          "description": "Rules to create a network attached to a vrack"
        }
      ],
      "description": "networkCreationRules operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/vrack/status",
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
          "responseType": "ipLoadbalancing.VrackInformation",
          "noAuthentication": false,
          "description": "Information about vRack for your Load Balancer"
        }
      ],
      "description": "status operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/zone",
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
          "description": "Zone for this iplb"
        }
      ],
      "description": "List the ipLoadbalancing.Zone.Zone objects"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/zone/{name}",
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
          "responseType": "ipLoadbalancing.Zone.Zone",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "IP Load Balancing Zone"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/zone/{name}/cancelTermination",
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
          "description": "Cancel the termination request of your service zone option"
        }
      ],
      "description": "cancelTermination operations"
    },
    {
      "path": "/ipLoadbalancing/{serviceName}/zone/{name}/terminate",
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
          "description": "Terminate your service zone option"
        }
      ],
      "description": "terminate operations"
    }
  ],
  "resourcePath": "/ipLoadbalancing",
  "basePath": "https://api.us.ovhcloud.com/1.0",
  "models": {
    "ipLoadbalancing.BackendCustomerServerStatusEnum": {
      "id": "BackendCustomerServerStatusEnum",
      "namespace": "ipLoadbalancing",
      "description": "Possible values for server status",
      "enum": [
        "active",
        "inactive"
      ],
      "enumType": "string"
    },
    "ipLoadbalancing.BackendProbe": {
      "id": "BackendProbe",
      "namespace": "ipLoadbalancing",
      "description": "Probe used to determine if a backend is alive and can handle requests",
      "properties": {
        "forceSsl": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Force probe to run over a SSL layer. Defaults to false",
          "required": false
        },
        "interval": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Seconds between each probe check. Must be > 30sec. Defaults to 30",
          "required": false
        },
        "match": {
          "type": "ipLoadbalancing.ProbeExpectMatchEnum",
          "fullType": "ipLoadbalancing.ProbeExpectMatchEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Matcher to use to valide \"expect\". \"default\" uses HAProxy's default behavior for this type of check. \"status\" is only supported for HTTP probes",
          "required": false
        },
        "method": {
          "type": "ipLoadbalancing.ProbeMethodEnum",
          "fullType": "ipLoadbalancing.ProbeMethodEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "HTTP method to use with \"http\" probe. Consider using HEAD to save bandwidth when possible. Defaults to \"GET\"",
          "required": false
        },
        "negate": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Invert the matching operator effect",
          "required": false
        },
        "pattern": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Server response expected when UP. Empty for \"default\", comma delimited list of statuses for \"status\", string for \"contains\", regex for \"matches\"",
          "required": false
        },
        "port": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Port used to probe your backend. Equal to farm port if null. Ignored for oco probe type",
          "required": false
        },
        "type": {
          "type": "ipLoadbalancing.ProbeTypeEnum",
          "fullType": "ipLoadbalancing.ProbeTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Probe type. \"tcp\" if null",
          "required": false
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "URL to use for HTTP probes of the form [www.example.com]/path/to/check. Protocol will be ignored. Defaults to \"/\"",
          "required": false
        }
      }
    },
    "ipLoadbalancing.BalanceHTTPEnum": {
      "id": "BalanceHTTPEnum",
      "namespace": "ipLoadbalancing",
      "description": "Possible values for load balancing balance algorithm",
      "enum": [
        "first",
        "leastconn",
        "roundrobin",
        "source",
        "uri"
      ],
      "enumType": "string"
    },
    "ipLoadbalancing.BalanceTCPEnum": {
      "id": "BalanceTCPEnum",
      "namespace": "ipLoadbalancing",
      "description": "Possible values for load balancing balance algorithm",
      "enum": [
        "first",
        "leastconn",
        "roundrobin",
        "source"
      ],
      "enumType": "string"
    },
    "ipLoadbalancing.DefinedFarm": {
      "id": "DefinedFarm",
      "namespace": "ipLoadbalancing",
      "description": "a list of { type => [ Farm ids ] }",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "ipLoadbalancing.DefinedFrontend": {
      "id": "DefinedFrontend",
      "namespace": "ipLoadbalancing",
      "description": "a list of {type=>[Frontend ids]}",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "ipLoadbalancing.DefinedRoute": {
      "id": "DefinedRoute",
      "namespace": "ipLoadbalancing",
      "description": "Defined routes name, type and id. Typically used to generate autocomplete lists.",
      "properties": {
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Human readable name for your route",
          "required": false
        },
        "routeId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Id of your route",
          "required": true
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Protocol supported by this route",
          "required": true
        }
      }
    },
    "ipLoadbalancing.FarmAvailableProbe": {
      "id": "FarmAvailableProbe",
      "namespace": "ipLoadbalancing",
      "description": "Available farm probes options",
      "properties": {
        "matches": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of possible probe result checkers for this type of probe",
          "required": true
        },
        "method": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "List of available HTTP method, if available",
          "required": false
        },
        "negatableMatches": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of matches operators that accept the negate option for this type of probe",
          "required": true
        },
        "port": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "True is this probe type supports a custom port",
          "required": true
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Probe protocol name. See probe \"type\" field in the farm probe",
          "required": true
        },
        "url": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "True is this probe type supports a URL",
          "required": true
        }
      }
    },
    "ipLoadbalancing.InstancesState": {
      "id": "InstancesState",
      "namespace": "ipLoadbalancing",
      "description": "A structure describing the current state of an IPLB instances",
      "properties": {
        "internalId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Internal ID of this IPLB instance",
          "required": true
        },
        "lastUpdateDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Last update date",
          "required": true
        },
        "state": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Current state of this IPLB instance",
          "required": true
        },
        "zone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "zone of this IPLB instance",
          "required": true
        }
      }
    },
    "ipLoadbalancing.Ip": {
      "id": "Ip",
      "namespace": "ipLoadbalancing",
      "description": "Your IP load balancing",
      "properties": {
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Set the name displayed in ManagerV6 for your iplb (max 50 chars)",
          "required": false
        },
        "ipLoadbalancing": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": true,
          "description": "Your IP load balancing",
          "required": true
        },
        "ipv4": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": true,
          "readOnly": true,
          "description": "The IPV4 associated to your IP load balancing",
          "required": false
        },
        "ipv6": {
          "type": "ipv6",
          "fullType": "ipv6",
          "canBeNull": true,
          "readOnly": true,
          "description": "The IPV6 associated to your IP load balancing",
          "required": false
        },
        "metricsToken": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "The metrics token associated with your IP load balancing",
          "required": false
        },
        "offer": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The offer of your IP load balancing",
          "required": true
        },
        "orderableZone": {
          "type": "ipLoadbalancing.OrderableZone[]",
          "fullType": "ipLoadbalancing.OrderableZone[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Available additional zone for your Load Balancer",
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
        "sslConfiguration": {
          "type": "ipLoadbalancing.SslConfigurationEnum",
          "fullType": "ipLoadbalancing.SslConfigurationEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Modern oldest compatible clients : Firefox 27, Chrome 30, IE 11 on Windows 7, Edge, Opera 17, Safari 9, Android 5.0, and Java 8. Intermediate oldest compatible clients : Firefox 1, Chrome 1, IE 7, Opera 5, Safari 1, Windows XP IE8, Android 2.3, Java 7. Intermediate if null.",
          "required": false
        },
        "state": {
          "type": "ipLoadbalancing.IpStateEnum",
          "fullType": "ipLoadbalancing.IpStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current state of your IP",
          "required": true
        },
        "vrackEligibility": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Vrack eligibility",
          "required": true
        },
        "vrackName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Name of the vRack on which the current Load Balancer is attached to, as it is named on vRack product",
          "required": false
        },
        "zone": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Location where your service is",
          "required": true
        }
      }
    },
    "ipLoadbalancing.IpStateEnum": {
      "id": "IpStateEnum",
      "namespace": "ipLoadbalancing",
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
    "ipLoadbalancing.NatIps": {
      "id": "NatIps",
      "namespace": "ipLoadbalancing",
      "description": "a list of {zone, nat Ip}",
      "properties": {
        "ip": {
          "type": "ipBlock[]",
          "fullType": "ipBlock[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "zone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "ipLoadbalancing.OrderableZone": {
      "id": "OrderableZone",
      "namespace": "ipLoadbalancing",
      "description": "Available additional zone to order for a Load Balancer",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The zone three letter code",
          "required": true
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The billing planCode for this zone",
          "required": true
        }
      }
    },
    "ipLoadbalancing.PendingChanges": {
      "id": "PendingChanges",
      "namespace": "ipLoadbalancing",
      "description": "The pending changes for a Load Balancer zone",
      "properties": {
        "number": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The number of changes waiting to be applied",
          "required": true
        },
        "zone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The Load Balancer zone with pending changes",
          "required": true
        }
      }
    },
    "ipLoadbalancing.ProbeExpectMatchEnum": {
      "id": "ProbeExpectMatchEnum",
      "namespace": "ipLoadbalancing",
      "description": "List of possible probe result matches. \"status\" is only supported for HTTP probes",
      "enum": [
        "contains",
        "default",
        "internal",
        "matches",
        "status"
      ],
      "enumType": "string"
    },
    "ipLoadbalancing.ProbeMethodEnum": {
      "id": "ProbeMethodEnum",
      "namespace": "ipLoadbalancing",
      "description": "List of possible method for HTTP probes. Consider using HEAD to save bandwidth when possible.",
      "enum": [
        "GET",
        "HEAD",
        "OPTIONS",
        "internal"
      ],
      "enumType": "string"
    },
    "ipLoadbalancing.ProbeTypeEnum": {
      "id": "ProbeTypeEnum",
      "namespace": "ipLoadbalancing",
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
      "enumType": "string"
    },
    "ipLoadbalancing.ProxyProtocolVersionEnum": {
      "id": "ProxyProtocolVersionEnum",
      "namespace": "ipLoadbalancing",
      "description": "Possible values for proxy type",
      "enum": [
        "v1",
        "v2",
        "v2-ssl",
        "v2-ssl-cn"
      ],
      "enumType": "string"
    },
    "ipLoadbalancing.Quota.Quota": {
      "id": "Quota",
      "namespace": "ipLoadbalancing.Quota",
      "description": "Quota informations for current billing period for this zone",
      "properties": {
        "alert": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Quota alert value in bytes. When reached, we will send you an alert. Default : included quota with your offer",
          "required": false
        },
        "included": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Included quota value with your offer, in bytes",
          "required": false
        },
        "lastUpdateDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "The last time your quota was updated from your Load Balancer instance",
          "required": false
        },
        "resetDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "The last time your quota was resetted (billed)",
          "required": false
        },
        "total": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Total used quota value in bytes",
          "required": false
        },
        "zone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Zone of your quota",
          "required": true
        }
      }
    },
    "ipLoadbalancing.QuotaHistory.QuotaHistory": {
      "id": "QuotaHistory",
      "namespace": "ipLoadbalancing.QuotaHistory",
      "description": "QuotaHistory",
      "properties": {
        "historizedDate": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": true,
          "description": "Historized date for this quota entry",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of your quota",
          "required": true
        },
        "lastUpdateDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "The last time your quota was updated from your Load Balancer instance",
          "required": true
        },
        "resetDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "The last time your quota was resetted (billed)",
          "required": true
        },
        "total": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total used quota value in bytes",
          "required": true
        },
        "zone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Zone of your quota",
          "required": true
        }
      }
    },
    "ipLoadbalancing.RouteAvailableAction": {
      "id": "RouteAvailableAction",
      "namespace": "ipLoadbalancing",
      "description": "Available route actions options",
      "properties": {
        "destination": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Type of the destination for this action",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Action name",
          "required": true
        },
        "status": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "List of available HTTP status code if applicable",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Protocol supported by this action",
          "required": true
        }
      }
    },
    "ipLoadbalancing.RouteAvailableRule": {
      "id": "RouteAvailableRule",
      "namespace": "ipLoadbalancing",
      "description": "Match rule to combine to build routes",
      "properties": {
        "enum": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "If pattern is \"enum\", list of available options",
          "required": false
        },
        "hasSubField": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If true, this rule needs a subfield. Typically a cookie or header name",
          "required": true
        },
        "matches": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of match operators compatible with this rule",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Rule name",
          "required": true
        },
        "pattern": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Expected type for the pattern. Like \"enum\", \"backend\", \"cidr\", ...",
          "required": true
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Protocol supported by this action",
          "required": true
        }
      }
    },
    "ipLoadbalancing.RouteHttp.RouteHttp": {
      "id": "RouteHttp",
      "namespace": "ipLoadbalancing.RouteHttp",
      "description": "HTTP Route",
      "properties": {
        "action": {
          "type": "ipLoadbalancing.RouteHttpAction",
          "fullType": "ipLoadbalancing.RouteHttpAction",
          "canBeNull": false,
          "readOnly": false,
          "description": "Action triggered when all rules match",
          "required": true
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Human readable name for your route, this field is for you",
          "required": false
        },
        "frontendId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Route traffic for this frontend",
          "required": false
        },
        "routeId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of your route",
          "required": true
        },
        "rules": {
          "type": "ipLoadbalancing.RouteRule[]",
          "fullType": "ipLoadbalancing.RouteRule[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of rules to match to trigger action",
          "required": true
        },
        "status": {
          "type": "ipLoadbalancing.RouteStatusEnum",
          "fullType": "ipLoadbalancing.RouteStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Route status. Routes in \"ok\" state are ready to operate",
          "required": true
        },
        "weight": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Route priority ([0..255]). 0 if null. Highest priority routes are evaluated last. Only the first matching route will trigger an action",
          "required": true
        }
      }
    },
    "ipLoadbalancing.RouteHttpAction": {
      "id": "RouteHttpAction",
      "namespace": "ipLoadbalancing",
      "description": "Action triggered when all rules from route match",
      "properties": {
        "status": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "HTTP status code for \"redirect\" and \"reject\" actions",
          "required": false
        },
        "target": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Farm ID for \"farm\" action type or URL template for \"redirect\" action. You may use ${uri}, ${protocol}, ${host}, ${port} and ${path} variables in redirect target",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Action to trigger if all the rules of this route matches",
          "required": true
        }
      }
    },
    "ipLoadbalancing.RouteRule": {
      "id": "RouteRule",
      "namespace": "ipLoadbalancing",
      "description": "Match rule to combine to build routes",
      "properties": {
        "field": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the field to match like \"protocol\" or \"host\". See \"/ipLoadbalancing/{serviceName}/route/availableRules\" for a list of available rules",
          "required": true
        },
        "match": {
          "type": "ipLoadbalancing.RouteRuleMatchesEnum",
          "fullType": "ipLoadbalancing.RouteRuleMatchesEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Matching operator. Not all operators are available for all fields. See \"/availableRules\"",
          "required": true
        },
        "negate": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Invert the matching operator effect",
          "required": true
        },
        "pattern": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Value to match against this match. Interpretation if this field depends on the match and field",
          "required": false
        },
        "ruleId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Id of your rule",
          "required": true
        },
        "subField": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of sub-field, if applicable. This may be a Cookie or Header name for instance",
          "required": false
        }
      }
    },
    "ipLoadbalancing.RouteRule.RouteRule": {
      "id": "RouteRule",
      "namespace": "ipLoadbalancing.RouteRule",
      "description": "Rule of a route",
      "properties": {
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Human readable name for your rule",
          "required": false
        },
        "field": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the field to match like \"protocol\" or \"host\". See \"/ipLoadbalancing/{serviceName}/availableRouteRules\" for a list of available rules",
          "required": true
        },
        "match": {
          "type": "ipLoadbalancing.RouteRuleMatchesEnum",
          "fullType": "ipLoadbalancing.RouteRuleMatchesEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Matching operator. Not all operators are available for all fields. See \"/ipLoadbalancing/{serviceName}/availableRouteRules\"",
          "required": true
        },
        "negate": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Invert the matching operator effect",
          "required": true
        },
        "pattern": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Value to match against this match. Interpretation if this field depends on the match and field",
          "required": false
        },
        "ruleId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of your rule",
          "required": true
        },
        "subField": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of sub-field, if applicable. This may be a Cookie or Header name for instance",
          "required": false
        }
      }
    },
    "ipLoadbalancing.RouteRuleMatchesEnum": {
      "id": "RouteRuleMatchesEnum",
      "namespace": "ipLoadbalancing",
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
      "enumType": "string"
    },
    "ipLoadbalancing.RouteStatusEnum": {
      "id": "RouteStatusEnum",
      "namespace": "ipLoadbalancing",
      "description": "Route configuration status",
      "enum": [
        "creating",
        "deleting",
        "internal",
        "ok",
        "updating"
      ],
      "enumType": "string"
    },
    "ipLoadbalancing.RouteTcp.RouteTcp": {
      "id": "RouteTcp",
      "namespace": "ipLoadbalancing.RouteTcp",
      "description": "TCP Route",
      "properties": {
        "action": {
          "type": "ipLoadbalancing.RouteTcpAction",
          "fullType": "ipLoadbalancing.RouteTcpAction",
          "canBeNull": false,
          "readOnly": false,
          "description": "Action triggered when all rules match",
          "required": true
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Human readable name for your route, this field is for you",
          "required": false
        },
        "frontendId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Route traffic for this frontend",
          "required": false
        },
        "routeId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of your route",
          "required": true
        },
        "rules": {
          "type": "ipLoadbalancing.RouteRule[]",
          "fullType": "ipLoadbalancing.RouteRule[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of rules to match to trigger action",
          "required": true
        },
        "status": {
          "type": "ipLoadbalancing.RouteStatusEnum",
          "fullType": "ipLoadbalancing.RouteStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Route status. Routes in \"ok\" state are ready to operate",
          "required": true
        },
        "weight": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Route priority ([0..255]). 0 if null. Highest priority routes are evaluated last. Only the first matching route will trigger an action",
          "required": true
        }
      }
    },
    "ipLoadbalancing.RouteTcpAction": {
      "id": "RouteTcpAction",
      "namespace": "ipLoadbalancing",
      "description": "Action triggered when all rules from route match",
      "properties": {
        "target": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Farm ID for \"farm\" action type, empty for others",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Action to trigger if all the rules of this route matches",
          "required": true
        }
      }
    },
    "ipLoadbalancing.ServerState": {
      "id": "ServerState",
      "namespace": "ipLoadbalancing",
      "description": "Available servers states",
      "properties": {
        "checkCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Layer5-7 code, if available",
          "required": false
        },
        "checkStatus": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Status of last health check",
          "required": false
        },
        "checkTime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Time of last health check",
          "required": false
        },
        "instanceId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Id of your instance",
          "required": true
        },
        "lastCheckContent": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Last health check contents or textual error",
          "required": false
        },
        "status": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Status",
          "required": false
        }
      }
    },
    "ipLoadbalancing.Ssl.Ssl": {
      "id": "Ssl",
      "namespace": "ipLoadbalancing.Ssl",
      "description": "Ssl",
      "properties": {
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Human readable name for your ssl certificate, this field is for you",
          "required": false
        },
        "expireDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Expire date of your SSL certificate",
          "required": true
        },
        "fingerprint": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Fingerprint of your SSL certificate",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of your SSL certificate",
          "required": true
        },
        "san": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Subject Alternative Name of your SSL certificate",
          "required": true
        },
        "serial": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Serial of your SSL certificate (Deprecated, use fingerprint instead !)",
          "required": true
        },
        "subject": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Subject of your SSL certificate",
          "required": true
        },
        "type": {
          "type": "ipLoadbalancing.SslTypeEnum",
          "fullType": "ipLoadbalancing.SslTypeEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Type of your SSL certificate.\n'built' for SSL certificates managed by the IP Load Balancing. 'custom' for user manager certificates.",
          "required": false
        }
      }
    },
    "ipLoadbalancing.SslConfigurationEnum": {
      "id": "SslConfigurationEnum",
      "namespace": "ipLoadbalancing",
      "description": "Possible values for ssl ciphers",
      "enum": [
        "intermediate",
        "modern"
      ],
      "enumType": "string"
    },
    "ipLoadbalancing.SslTypeEnum": {
      "id": "SslTypeEnum",
      "namespace": "ipLoadbalancing",
      "description": "Possible values for ssl type",
      "enum": [
        "built",
        "built_not_routed",
        "custom"
      ],
      "enumType": "string"
    },
    "ipLoadbalancing.Status": {
      "id": "Status",
      "namespace": "ipLoadbalancing",
      "description": "The global status of a Load Balancer",
      "properties": {
        "farms": {
          "type": "ipLoadbalancing.status.Component",
          "fullType": "ipLoadbalancing.status.Component",
          "canBeNull": false,
          "readOnly": false,
          "description": "The Load Balancer farms status informations",
          "required": true
        },
        "frontends": {
          "type": "ipLoadbalancing.status.Component",
          "fullType": "ipLoadbalancing.status.Component",
          "canBeNull": false,
          "readOnly": false,
          "description": "The Load Balancer frontends status informations",
          "required": true
        },
        "servers": {
          "type": "ipLoadbalancing.status.Component",
          "fullType": "ipLoadbalancing.status.Component",
          "canBeNull": false,
          "readOnly": false,
          "description": "The Load Balancer servers status informations",
          "required": true
        },
        "service": {
          "type": "ipLoadbalancing.status.Service",
          "fullType": "ipLoadbalancing.status.Service",
          "canBeNull": false,
          "readOnly": false,
          "description": "The Load Balancer service status informations",
          "required": true
        }
      }
    },
    "ipLoadbalancing.StickinessHTTPEnum": {
      "id": "StickinessHTTPEnum",
      "namespace": "ipLoadbalancing",
      "description": "Possible values for HTTP backend stickiness",
      "enum": [
        "cookie",
        "sourceIp"
      ],
      "enumType": "string"
    },
    "ipLoadbalancing.StickinessTCPEnum": {
      "id": "StickinessTCPEnum",
      "namespace": "ipLoadbalancing",
      "description": "Possible values for TCP backend stickiness",
      "enum": [
        "sourceIp"
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
    "ipLoadbalancing.VrackInformation": {
      "id": "VrackInformation",
      "namespace": "ipLoadbalancing",
      "description": "Information about vRack for your Load Balancer",
      "properties": {
        "state": {
          "type": "ipLoadbalancing.VrackStateEnum",
          "fullType": "ipLoadbalancing.VrackStateEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "State of the vRack link to your Load Balancer",
          "required": true
        },
        "task": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Ongoing task related to vRack installation or uninstallation on your Load Balancer",
          "required": true
        },
        "vrackName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of the vRack on which the current Load Balancer is attached to, as it is named on vRack product",
          "required": false
        }
      }
    },
    "ipLoadbalancing.VrackNetwork.VrackNetwork": {
      "id": "VrackNetwork",
      "namespace": "ipLoadbalancing.VrackNetwork",
      "description": "Represents a private network in the vRack",
      "properties": {
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Human readable name for your vrack network",
          "required": false
        },
        "farmId": {
          "type": "ipLoadbalancing.DefinedFarm[]",
          "fullType": "ipLoadbalancing.DefinedFarm[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Farm Id your vrack network is attached to and their type",
          "required": true
        },
        "natIp": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": false,
          "description": "An IP block used as a pool of IPs by this Load Balancer to connect to the servers in this private network. The block must be in the private network and reserved for the Load Balancer",
          "required": true
        },
        "subnet": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": true,
          "description": "IP block of the private network in the vRack",
          "required": true
        },
        "vlan": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "VLAN of the private network in the vRack. 0 if the private network is not in a VLAN",
          "required": true
        },
        "vrackNetworkId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Internal Load Balancer identifier of the vRack private network description",
          "required": true
        }
      }
    },
    "ipLoadbalancing.VrackNetworkCreationRules": {
      "id": "VrackNetworkCreationRules",
      "namespace": "ipLoadbalancing",
      "description": "Rules to create a new description of a private network in the vRack",
      "properties": {
        "minNatIps": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Minimum number of IPs needed to forward requests to your servers using NAT in your private network behind the current Load Balancer. Ip Block given on Load Balancer vRack network must contain at least this number of IP.",
          "required": true
        },
        "remainingNetworks": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of remaining private network descriptions available for creation for this Load Balancer",
          "required": true
        },
        "vrackName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the vRack on which the current Load Balancer is attached to, as it is named on vRack product",
          "required": true
        }
      }
    },
    "ipLoadbalancing.VrackStateEnum": {
      "id": "VrackStateEnum",
      "namespace": "ipLoadbalancing",
      "description": "Possible values for load balancing vRack state",
      "enum": [
        "activating",
        "active",
        "deactivating",
        "inactive"
      ],
      "enumType": "string"
    },
    "ipLoadbalancing.Zone.Zone": {
      "id": "Zone",
      "namespace": "ipLoadbalancing.Zone",
      "description": "IP Load Balancing Zone",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of your zone",
          "required": true
        },
        "state": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of your zone",
          "required": true
        }
      }
    },
    "ipLoadbalancing.backendHttp.BackendHttp": {
      "id": "BackendHttp",
      "namespace": "ipLoadbalancing.backendHttp",
      "description": "HTTP Farm",
      "properties": {
        "balance": {
          "type": "ipLoadbalancing.BalanceHTTPEnum",
          "fullType": "ipLoadbalancing.BalanceHTTPEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Load balancing algorithm. 'roundrobin' if null",
          "required": false
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Human readable name for your backend, this field is for you",
          "required": false
        },
        "farmId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of your farm",
          "required": true
        },
        "port": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Port attached to your farm. Inherited from frontend if null",
          "required": false
        },
        "probe": {
          "type": "ipLoadbalancing.BackendProbe",
          "fullType": "ipLoadbalancing.BackendProbe",
          "canBeNull": true,
          "readOnly": false,
          "description": "Probe used to determine if a backend is alive and can handle requests. Defaults to tcp on the same port as the farm",
          "required": false
        },
        "stickiness": {
          "type": "ipLoadbalancing.StickinessHTTPEnum",
          "fullType": "ipLoadbalancing.StickinessHTTPEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Stickiness type. No stickiness if null",
          "required": false
        },
        "vrackNetworkId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Internal Load Balancer identifier of the vRack private network attached to your farm, mandatory when your Load Balancer is attached to a vRack",
          "required": false
        },
        "zone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Zone of you farm",
          "required": true
        }
      }
    },
    "ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer": {
      "id": "BackendHTTPServer",
      "namespace": "ipLoadbalancing.backendHttpCustomerServer",
      "description": "HTTP Farm's Server",
      "properties": {
        "address": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "description": "Address of your server",
          "required": true
        },
        "backendId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "farm id",
          "required": true
        },
        "backup": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Backup state. Default: 'false'",
          "required": true
        },
        "chain": {
          "type": "text",
          "fullType": "text",
          "canBeNull": true,
          "readOnly": false,
          "description": "Certificate chain. Allow server certificate verification (Avoid man-in-the-middle attacks)",
          "required": false
        },
        "cookie": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Server cookie value configured for cookie stickiness",
          "required": false
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Human readable name for your server, this field is for you",
          "required": false
        },
        "port": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Port attached to your server. Inherited from farm if null",
          "required": false
        },
        "probe": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Probe state. Default: 'false'",
          "required": true
        },
        "proxyProtocolVersion": {
          "type": "ipLoadbalancing.ProxyProtocolVersionEnum",
          "fullType": "ipLoadbalancing.ProxyProtocolVersionEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Disabled if null. Send PROXY protocol header. Requires a compatible server.",
          "required": false
        },
        "serverId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of your server",
          "required": true
        },
        "serverState": {
          "type": "ipLoadbalancing.ServerState[]",
          "fullType": "ipLoadbalancing.ServerState[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Server state",
          "required": true
        },
        "ssl": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "SSL ciphering. Probes will also be sent ciphered. Default: 'false'",
          "required": true
        },
        "status": {
          "type": "ipLoadbalancing.BackendCustomerServerStatusEnum",
          "fullType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Status attached to your server",
          "required": true
        },
        "weight": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Weight value. Defaults to 1. 0 if not used in load balancing. Servers with higher weight get more requests.",
          "required": false
        }
      }
    },
    "ipLoadbalancing.backendTcp.BackendTcp": {
      "id": "BackendTcp",
      "namespace": "ipLoadbalancing.backendTcp",
      "description": "TCP Farm",
      "properties": {
        "balance": {
          "type": "ipLoadbalancing.BalanceTCPEnum",
          "fullType": "ipLoadbalancing.BalanceTCPEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Load balancing algorithm. 'roundrobin' if null",
          "required": false
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Human readable name for your backend, this field is for you",
          "required": false
        },
        "farmId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of your farm",
          "required": true
        },
        "port": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Port attached to your farm. Inherited from frontend if null",
          "required": false
        },
        "probe": {
          "type": "ipLoadbalancing.BackendProbe",
          "fullType": "ipLoadbalancing.BackendProbe",
          "canBeNull": true,
          "readOnly": false,
          "description": "Probe used to determine if a backend is alive and can handle requests. Defaults to tcp on the same port as the farm",
          "required": false
        },
        "stickiness": {
          "type": "ipLoadbalancing.StickinessTCPEnum",
          "fullType": "ipLoadbalancing.StickinessTCPEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Stickiness type. No stickiness if null",
          "required": false
        },
        "vrackNetworkId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Internal Load Balancer identifier of the vRack private network attached to your farm, mandatory when your Load Balancer is attached to a vRack",
          "required": false
        },
        "zone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Zone of you farm",
          "required": true
        }
      }
    },
    "ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer": {
      "id": "BackendTCPServer",
      "namespace": "ipLoadbalancing.backendTcpCustomerServer",
      "description": "TCP Farm's Server",
      "properties": {
        "address": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "description": "Address of your server",
          "required": true
        },
        "backendId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Farm id",
          "required": true
        },
        "backup": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Backup state. Default: 'false'",
          "required": true
        },
        "chain": {
          "type": "text",
          "fullType": "text",
          "canBeNull": true,
          "readOnly": false,
          "description": "Certificate chain. Allow server certificate verification (Avoid man-in-the-middle attacks)",
          "required": false
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Human readable name for your server, this field is for you",
          "required": false
        },
        "port": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Port attached to your server. Inherited from farm if null",
          "required": false
        },
        "probe": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Probe state. Default: 'false'",
          "required": true
        },
        "proxyProtocolVersion": {
          "type": "ipLoadbalancing.ProxyProtocolVersionEnum",
          "fullType": "ipLoadbalancing.ProxyProtocolVersionEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Disabled if null. Send PROXY protocol header. Requires a compatible server.",
          "required": false
        },
        "serverId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of your server",
          "required": true
        },
        "serverState": {
          "type": "ipLoadbalancing.ServerState[]",
          "fullType": "ipLoadbalancing.ServerState[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Server state",
          "required": true
        },
        "ssl": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "SSL ciphering. Probes will also be sent ciphered",
          "required": true
        },
        "status": {
          "type": "ipLoadbalancing.BackendCustomerServerStatusEnum",
          "fullType": "ipLoadbalancing.BackendCustomerServerStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Status attached to your server",
          "required": true
        },
        "weight": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Weight value. Defaults to 1. 0 if not used in load balancing. Servers with higher weight get more requests.",
          "required": false
        }
      }
    },
    "ipLoadbalancing.frontendHttp.FrontendHttp": {
      "id": "FrontendHttp",
      "namespace": "ipLoadbalancing.frontendHttp",
      "description": "Frontend HTTP",
      "properties": {
        "allowedSource": {
          "type": "ipBlock[]",
          "fullType": "ipBlock[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Restrict IP Load Balancing access to these ip block. No restriction if null",
          "required": false
        },
        "dedicatedIpfo": {
          "type": "ipBlock[]",
          "fullType": "ipBlock[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Only attach frontend on these ip. No restriction if null",
          "required": false
        },
        "defaultFarmId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Default HTTP Farm of your frontend",
          "required": false
        },
        "defaultSslId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Default ssl served to your customer",
          "required": false
        },
        "disabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Disable frontend. Default: 'false'",
          "required": true
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Human readable name for your frontend, this field is for you",
          "required": false
        },
        "frontendId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of your frontend",
          "required": true
        },
        "hsts": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "HTTP Strict Transport Security. Default: 'false'",
          "required": true
        },
        "httpHeader": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Add header to your frontend. Useful variables admitted : %ci <=> client_ip, %cp <=> client_port",
          "required": false
        },
        "port": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Listening port(s) on the server",
          "required": true
        },
        "redirectLocation": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "HTTP redirection (Ex : http://www.ovh.com)",
          "required": false
        },
        "ssl": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "SSL deciphering. Default: 'false'",
          "required": true
        },
        "zone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Zone of you frontend",
          "required": true
        }
      }
    },
    "ipLoadbalancing.frontendTcp.FrontendTcp": {
      "id": "FrontendTcp",
      "namespace": "ipLoadbalancing.frontendTcp",
      "description": "Frontend TCP",
      "properties": {
        "allowedSource": {
          "type": "ipBlock[]",
          "fullType": "ipBlock[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Restrict IP Load Balancing access to these ip block. No restriction if null",
          "required": false
        },
        "dedicatedIpfo": {
          "type": "ipBlock[]",
          "fullType": "ipBlock[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Only attach frontend on these ip. No restriction if null",
          "required": false
        },
        "defaultFarmId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Default TCP Farm of your frontend",
          "required": false
        },
        "defaultSslId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Default ssl served to your customer",
          "required": false
        },
        "disabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Disable frontend. Default: 'false'",
          "required": true
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Human readable name for your frontend, this field is for you",
          "required": false
        },
        "frontendId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of your frontend",
          "required": true
        },
        "port": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Listening port(s) on the server",
          "required": true
        },
        "ssl": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "SSL deciphering. Default: 'false'",
          "required": true
        },
        "zone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Zone of you frontend",
          "required": true
        }
      }
    },
    "ipLoadbalancing.status.Component": {
      "id": "Component",
      "namespace": "ipLoadbalancing.status",
      "description": "The global status of a Load Balancer component",
      "properties": {
        "status": {
          "type": "ipLoadbalancing.status.ComponentStatus",
          "fullType": "ipLoadbalancing.status.ComponentStatus",
          "canBeNull": false,
          "readOnly": false,
          "description": "The global status of your Load Balancer component",
          "required": true
        },
        "total": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The Load Balancer total component count",
          "required": true
        }
      }
    },
    "ipLoadbalancing.status.ComponentStatus": {
      "id": "ComponentStatus",
      "namespace": "ipLoadbalancing.status",
      "description": "The statuses of a Load Balancer component",
      "properties": {
        "error": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The number of component with status error",
          "required": true
        },
        "ok": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The number of component with status ok",
          "required": true
        },
        "unknown": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The number of component with status unknown",
          "required": true
        },
        "warn": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The number of component with status warn",
          "required": true
        }
      }
    },
    "ipLoadbalancing.status.Enum": {
      "id": "Enum",
      "namespace": "ipLoadbalancing.status",
      "description": "Possible values for a Load Balancer status",
      "enum": [
        "error",
        "ok",
        "unknown",
        "warn"
      ],
      "enumType": "string"
    },
    "ipLoadbalancing.status.Service": {
      "id": "Service",
      "namespace": "ipLoadbalancing.status",
      "description": "The status of a Load Balancer service",
      "properties": {
        "status": {
          "type": "ipLoadbalancing.status.Enum",
          "fullType": "ipLoadbalancing.status.Enum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The status of your Load Balancer billing domain",
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