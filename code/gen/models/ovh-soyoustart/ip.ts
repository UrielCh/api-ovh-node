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
              "name": "routedTo.serviceName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of routedTo.serviceName property (like)"
            },
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
              "name": "ipOnGame",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on game"
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
              "name": "ports",
              "dataType": "complexType.Range<long>",
              "paramType": "body",
              "fullType": "complexType.Range<long>",
              "required": true,
              "description": "The UDP port range to apply the rule on"
            },
            {
              "name": "protocol",
              "dataType": "ip.GameMitigationRuleProtocolEnum",
              "paramType": "body",
              "fullType": "ip.GameMitigationRuleProtocolEnum",
              "required": true,
              "description": "The protocol running behind the given port"
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
              "name": "state",
              "dataType": "ip.AntiphishingStateEnum",
              "paramType": "query",
              "fullType": "ip.AntiphishingStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            },
            {
              "name": "ipOnAntiphishing",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": false,
              "description": "Filter the value of ipOnAntiphishing property (within or equals)"
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
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
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
  "basePath": "https://eu.api.soyoustart.com/1.0",
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
    }
  }
}