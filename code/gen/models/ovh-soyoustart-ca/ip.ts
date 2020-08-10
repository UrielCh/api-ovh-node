import {Schema} from '../../src/schema';

export const schema: Schema = {
  "resourcePath": "/ip",
  "apiVersion": "1.0",
  "basePath": "https://ca.api.soyoustart.com/1.0",
  "apis": [
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "description": null,
              "fullType": "ipBlock",
              "required": true,
              "dataType": "ipBlock",
              "paramType": "path",
              "name": "ip"
            },
            {
              "paramType": "path",
              "name": "ipReverse",
              "dataType": "ip",
              "required": true,
              "fullType": "ip",
              "description": null
            }
          ],
          "responseFullType": "ip.ReverseIp",
          "noAuthentication": false,
          "resellerOnly": false,
          "responseType": "ip.ReverseIp",
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "responseFullType": "void",
          "parameters": [
            {
              "name": "ip",
              "paramType": "path",
              "dataType": "ipBlock",
              "description": null,
              "fullType": "ipBlock",
              "required": true
            },
            {
              "required": true,
              "description": null,
              "fullType": "ip",
              "paramType": "path",
              "dataType": "ip",
              "name": "ipReverse"
            }
          ],
          "resellerOnly": false,
          "description": "Delete a reverse on one IP",
          "responseType": "void"
        }
      ],
      "description": "Your reverse records on IP",
      "path": "/ip/{ip}/reverse/{ipReverse}"
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
          "responseFullType": "ip[]",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "ipBlock",
              "description": null,
              "required": true,
              "dataType": "ipBlock",
              "paramType": "path",
              "name": "ip"
            }
          ],
          "resellerOnly": false,
          "description": "Reverse on your ip",
          "responseType": "ip[]"
        },
        {
          "httpMethod": "POST",
          "parameters": [
            {
              "required": true,
              "description": null,
              "fullType": "ip",
              "paramType": "body",
              "dataType": "ip",
              "name": "ipReverse"
            },
            {
              "required": true,
              "fullType": "string",
              "description": null,
              "paramType": "body",
              "dataType": "string",
              "name": "reverse"
            },
            {
              "fullType": "ipBlock",
              "description": null,
              "required": true,
              "dataType": "ipBlock",
              "paramType": "path",
              "name": "ip"
            }
          ],
          "noAuthentication": false,
          "responseFullType": "ip.ReverseIp",
          "resellerOnly": false,
          "responseType": "ip.ReverseIp",
          "description": "Add reverse on an ip",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the ip.ReverseIp objects"
    },
    {
      "description": "Phishing URLs hosted on your IP",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "ip.Antiphishing",
          "description": "Get this object properties",
          "resellerOnly": false,
          "parameters": [
            {
              "required": true,
              "fullType": "ipBlock",
              "description": null,
              "paramType": "path",
              "dataType": "ipBlock",
              "name": "ip"
            },
            {
              "name": "id",
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "description": "Internal ID of the phishing entry",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseFullType": "ip.Antiphishing",
          "httpMethod": "GET"
        }
      ],
      "path": "/ip/{ip}/phishing/{id}"
    },
    {
      "path": "/ip/{ip}/phishing",
      "description": "List the ip.Antiphishing objects",
      "operations": [
        {
          "httpMethod": "GET",
          "noAuthentication": false,
          "responseFullType": "long[]",
          "parameters": [
            {
              "required": false,
              "description": "Filter the value of ipOnAntiphishing property (within or equals)",
              "fullType": "ipv4",
              "paramType": "query",
              "dataType": "ipv4",
              "name": "ipOnAntiphishing"
            },
            {
              "paramType": "query",
              "name": "state",
              "dataType": "ip.AntiphishingStateEnum",
              "required": false,
              "fullType": "ip.AntiphishingStateEnum",
              "description": "Filter the value of state property (=)"
            },
            {
              "description": null,
              "fullType": "ipBlock",
              "required": true,
              "dataType": "ipBlock",
              "paramType": "path",
              "name": "ip"
            }
          ],
          "resellerOnly": false,
          "description": "Ip under anti-phishing",
          "responseType": "long[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "noAuthentication": false,
          "responseFullType": "ip.IpTask",
          "parameters": [
            {
              "name": "nexthop",
              "paramType": "body",
              "dataType": "string",
              "description": "Nexthop of destination service",
              "fullType": "string",
              "required": false
            },
            {
              "paramType": "body",
              "name": "to",
              "dataType": "string",
              "required": true,
              "fullType": "string",
              "description": "Service destination"
            },
            {
              "paramType": "path",
              "name": "ip",
              "dataType": "ipBlock",
              "required": true,
              "fullType": "ipBlock",
              "description": null
            }
          ],
          "resellerOnly": false,
          "description": "Move this IP to another service",
          "responseType": "ip.IpTask"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "description": null,
              "fullType": "ipBlock",
              "required": true,
              "paramType": "path",
              "name": "ip",
              "dataType": "ipBlock"
            }
          ],
          "noAuthentication": false,
          "responseFullType": "ip.Destinations",
          "resellerOnly": false,
          "responseType": "ip.Destinations",
          "description": "List services available as a destination"
        }
      ],
      "description": "move operations",
      "path": "/ip/{ip}/move"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseType": "ip.IpTask",
          "description": "Park this IP",
          "httpMethod": "POST",
          "parameters": [
            {
              "fullType": "ipBlock",
              "description": null,
              "required": true,
              "paramType": "path",
              "name": "ip",
              "dataType": "ipBlock"
            }
          ],
          "responseFullType": "ip.IpTask",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "park operations",
      "path": "/ip/{ip}/park"
    },
    {
      "description": "List the ip.GameMitigation objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseFullType": "ipv4[]",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "ip",
              "paramType": "path",
              "dataType": "ipBlock",
              "required": true,
              "fullType": "ipBlock",
              "description": null
            }
          ],
          "httpMethod": "GET",
          "description": "Ip under game anti-ddos",
          "responseType": "ipv4[]",
          "resellerOnly": false
        }
      ],
      "path": "/ip/{ip}/game"
    },
    {
      "path": "/ip/{ip}/game/{ipOnGame}/rule/{id}",
      "description": "Rule on ip:ports",
      "operations": [
        {
          "httpMethod": "GET",
          "parameters": [
            {
              "paramType": "path",
              "dataType": "ipBlock",
              "name": "ip",
              "description": null,
              "fullType": "ipBlock",
              "required": true
            },
            {
              "name": "ipOnGame",
              "paramType": "path",
              "dataType": "ipv4",
              "required": true,
              "fullType": "ipv4",
              "description": null
            },
            {
              "paramType": "path",
              "dataType": "long",
              "name": "id",
              "description": "ID of the rule",
              "fullType": "long",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseFullType": "ip.GameMitigationRule",
          "resellerOnly": false,
          "responseType": "ip.GameMitigationRule",
          "description": "Get this object properties",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "ip.GameMitigationRule",
          "description": "Delete rule",
          "resellerOnly": false,
          "parameters": [
            {
              "required": true,
              "description": null,
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "paramType": "path",
              "name": "ip"
            },
            {
              "description": null,
              "fullType": "ipv4",
              "required": true,
              "paramType": "path",
              "name": "ipOnGame",
              "dataType": "ipv4"
            },
            {
              "fullType": "long",
              "description": "ID of the rule",
              "required": true,
              "paramType": "path",
              "name": "id",
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "responseFullType": "ip.GameMitigationRule",
          "httpMethod": "DELETE"
        }
      ]
    },
    {
      "description": "List the ip.GameMitigationRule objects",
      "operations": [
        {
          "resellerOnly": false,
          "responseType": "long[]",
          "description": "IDs of rules configured for this IP",
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "paramType": "path",
              "dataType": "ipBlock",
              "required": true,
              "description": null,
              "fullType": "ipBlock"
            },
            {
              "name": "ipOnGame",
              "paramType": "path",
              "dataType": "ipv4",
              "required": true,
              "fullType": "ipv4",
              "description": null
            }
          ],
          "responseFullType": "long[]",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "ip.GameMitigationRule",
          "description": "Add new rule on your IP",
          "resellerOnly": false,
          "parameters": [
            {
              "paramType": "body",
              "dataType": "ip.GameMitigationRuleProtocolEnum",
              "name": "protocol",
              "fullType": "ip.GameMitigationRuleProtocolEnum",
              "description": "The protocol running behind the given port",
              "required": true
            },
            {
              "paramType": "body",
              "dataType": "complexType.Range<long>",
              "name": "ports",
              "fullType": "complexType.Range<long>",
              "description": "The UDP port range to apply the rule on",
              "required": true
            },
            {
              "required": true,
              "fullType": "ipBlock",
              "description": null,
              "dataType": "ipBlock",
              "paramType": "path",
              "name": "ip"
            },
            {
              "fullType": "ipv4",
              "description": null,
              "required": true,
              "paramType": "path",
              "name": "ipOnGame",
              "dataType": "ipv4"
            }
          ],
          "noAuthentication": false,
          "responseFullType": "ip.GameMitigationRule",
          "httpMethod": "POST"
        }
      ],
      "path": "/ip/{ip}/game/{ipOnGame}/rule"
    },
    {
      "description": "GAME Anti-DDoS",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseType": "ip.GameMitigation",
          "description": "Get this object properties",
          "httpMethod": "GET",
          "parameters": [
            {
              "description": null,
              "fullType": "ipBlock",
              "required": true,
              "paramType": "path",
              "name": "ip",
              "dataType": "ipBlock"
            },
            {
              "name": "ipOnGame",
              "paramType": "path",
              "dataType": "ipv4",
              "required": true,
              "fullType": "ipv4",
              "description": null
            }
          ],
          "responseFullType": "ip.GameMitigation",
          "noAuthentication": false
        },
        {
          "httpMethod": "PUT",
          "noAuthentication": false,
          "responseFullType": "void",
          "parameters": [
            {
              "description": "New object properties",
              "fullType": "ip.GameMitigation",
              "required": true,
              "paramType": "body",
              "name": null,
              "dataType": "ip.GameMitigation"
            },
            {
              "required": true,
              "fullType": "ipBlock",
              "description": null,
              "dataType": "ipBlock",
              "paramType": "path",
              "name": "ip"
            },
            {
              "required": true,
              "description": null,
              "fullType": "ipv4",
              "dataType": "ipv4",
              "paramType": "path",
              "name": "ipOnGame"
            }
          ],
          "resellerOnly": false,
          "description": "Alter this object properties",
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/ip/{ip}/game/{ipOnGame}"
    },
    {
      "path": "/ip/{ip}/task/{taskId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "required": true,
              "fullType": "ipBlock",
              "description": null,
              "dataType": "ipBlock",
              "paramType": "path",
              "name": "ip"
            },
            {
              "paramType": "path",
              "dataType": "long",
              "name": "taskId",
              "fullType": "long",
              "description": "the id of the task",
              "required": true
            }
          ],
          "responseFullType": "ip.IpTask",
          "noAuthentication": false,
          "httpMethod": "GET",
          "responseType": "ip.IpTask",
          "description": "Get this object properties",
          "resellerOnly": false
        }
      ],
      "description": "IP tasks"
    },
    {
      "description": "List the ip.IpTask objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseType": "long[]",
          "description": "IP tasks",
          "httpMethod": "GET",
          "parameters": [
            {
              "required": false,
              "fullType": "ip.TaskFunctionEnum",
              "description": "Filter the value of function property (=)",
              "dataType": "ip.TaskFunctionEnum",
              "paramType": "query",
              "name": "function"
            },
            {
              "fullType": "ip.TaskStatusEnum",
              "description": "Filter the value of status property (=)",
              "required": false,
              "paramType": "query",
              "name": "status",
              "dataType": "ip.TaskStatusEnum"
            },
            {
              "required": true,
              "description": null,
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "paramType": "path",
              "name": "ip"
            }
          ],
          "responseFullType": "long[]",
          "noAuthentication": false
        }
      ],
      "path": "/ip/{ip}/task"
    },
    {
      "path": "/ip/{ip}/license/plesk",
      "operations": [
        {
          "resellerOnly": false,
          "description": "Plesk licenses associated to this IP",
          "responseType": "string[]",
          "httpMethod": "GET",
          "responseFullType": "string[]",
          "noAuthentication": false,
          "parameters": [
            {
              "required": false,
              "fullType": "ipv4",
              "description": "Filter the value of ipAddress property (=)",
              "dataType": "ipv4",
              "paramType": "query",
              "name": "ipAddress"
            },
            {
              "required": true,
              "description": null,
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "paramType": "path",
              "name": "ip"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the license.plesk.Plesk objects"
    },
    {
      "path": "/ip/{ip}/license/virtuozzo",
      "operations": [
        {
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ipAddress",
              "paramType": "query",
              "dataType": "ipv4",
              "required": false,
              "fullType": "ipv4",
              "description": "Filter the value of ipAddress property (=)"
            },
            {
              "name": "ip",
              "paramType": "path",
              "dataType": "ipBlock",
              "required": true,
              "fullType": "ipBlock",
              "description": null
            }
          ],
          "noAuthentication": false,
          "responseFullType": "string[]",
          "resellerOnly": false,
          "responseType": "string[]",
          "description": "Virtuozzo licenses associated to this IP",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the license.virtuozzo.Virtuozzo objects"
    },
    {
      "path": "/ip/{ip}/license/directadmin",
      "description": "List the license.directadmin.DirectAdmin objects",
      "operations": [
        {
          "resellerOnly": false,
          "description": "DirectAdmin licenses associated to this IP",
          "responseType": "string[]",
          "httpMethod": "GET",
          "responseFullType": "string[]",
          "noAuthentication": false,
          "parameters": [
            {
              "required": false,
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4",
              "dataType": "ipv4",
              "paramType": "query",
              "name": "ipAddress"
            },
            {
              "name": "ip",
              "paramType": "path",
              "dataType": "ipBlock",
              "required": true,
              "description": null,
              "fullType": "ipBlock"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "path": "/ip/{ip}/license/worklight",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "WorkLight licenses associated to this IP",
          "responseType": "string[]",
          "resellerOnly": false,
          "noAuthentication": false,
          "responseFullType": "string[]",
          "parameters": [
            {
              "name": "ipAddress",
              "paramType": "query",
              "dataType": "ipv4",
              "required": false,
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4"
            },
            {
              "paramType": "path",
              "dataType": "ipBlock",
              "name": "ip",
              "description": null,
              "fullType": "ipBlock",
              "required": true
            }
          ],
          "httpMethod": "GET"
        }
      ],
      "description": "List the license.worklight.WorkLight objects"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cloud Linux licenses associated to this IP",
          "responseType": "string[]",
          "resellerOnly": false,
          "noAuthentication": false,
          "responseFullType": "string[]",
          "parameters": [
            {
              "paramType": "query",
              "dataType": "ipv4",
              "name": "ipAddress",
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4",
              "required": false
            },
            {
              "paramType": "path",
              "dataType": "ipBlock",
              "name": "ip",
              "description": null,
              "fullType": "ipBlock",
              "required": true
            }
          ],
          "httpMethod": "GET"
        }
      ],
      "description": "List the license.cloudLinux.CloudLinux objects",
      "path": "/ip/{ip}/license/cloudLinux"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseFullType": "string[]",
          "noAuthentication": false,
          "parameters": [
            {
              "paramType": "query",
              "dataType": "ipv4",
              "name": "ipAddress",
              "fullType": "ipv4",
              "description": "Filter the value of ipAddress property (=)",
              "required": false
            },
            {
              "fullType": "ipBlock",
              "description": null,
              "required": true,
              "paramType": "path",
              "name": "ip",
              "dataType": "ipBlock"
            }
          ],
          "httpMethod": "GET",
          "description": "Windows licenses associated to this IP",
          "responseType": "string[]",
          "resellerOnly": false
        }
      ],
      "description": "List the license.windows.Windows objects",
      "path": "/ip/{ip}/license/windows"
    },
    {
      "description": "List the license.sqlserver.SqlServer objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "responseFullType": "string[]",
          "parameters": [
            {
              "paramType": "query",
              "dataType": "ipv4",
              "name": "ipAddress",
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4",
              "required": false
            },
            {
              "required": true,
              "fullType": "ipBlock",
              "description": null,
              "dataType": "ipBlock",
              "paramType": "path",
              "name": "ip"
            }
          ],
          "resellerOnly": false,
          "description": "SQL Server licenses associated to this IP",
          "responseType": "string[]"
        }
      ],
      "path": "/ip/{ip}/license/sqlserver"
    },
    {
      "path": "/ip/{ip}/license/cpanel",
      "description": "List the license.cpanel.Cpanel objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseFullType": "string[]",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "ipAddress",
              "paramType": "query",
              "dataType": "ipv4",
              "required": false,
              "fullType": "ipv4",
              "description": "Filter the value of ipAddress property (=)"
            },
            {
              "paramType": "path",
              "dataType": "ipBlock",
              "name": "ip",
              "fullType": "ipBlock",
              "description": null,
              "required": true
            }
          ],
          "httpMethod": "GET",
          "description": "Cpanel licenses associated to this IP",
          "responseType": "string[]",
          "resellerOnly": false
        }
      ]
    },
    {
      "description": "IP block RIPE informations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "ip.RipeInfos",
          "description": "Get this object properties",
          "resellerOnly": false,
          "parameters": [
            {
              "required": true,
              "fullType": "ipBlock",
              "description": null,
              "dataType": "ipBlock",
              "paramType": "path",
              "name": "ip"
            }
          ],
          "noAuthentication": false,
          "responseFullType": "ip.RipeInfos",
          "httpMethod": "GET"
        },
        {
          "responseType": "void",
          "description": "Alter this object properties",
          "resellerOnly": false,
          "parameters": [
            {
              "description": "New object properties",
              "fullType": "ip.RipeInfos",
              "required": true,
              "paramType": "body",
              "name": null,
              "dataType": "ip.RipeInfos"
            },
            {
              "description": null,
              "fullType": "ipBlock",
              "required": true,
              "paramType": "path",
              "name": "ip",
              "dataType": "ipBlock"
            }
          ],
          "noAuthentication": false,
          "responseFullType": "void",
          "httpMethod": "PUT",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/ip/{ip}/ripe"
    },
    {
      "operations": [
        {
          "responseType": "ip.IpMigrationToken",
          "description": "Get this object properties",
          "resellerOnly": false,
          "parameters": [
            {
              "description": null,
              "fullType": "ipBlock",
              "required": true,
              "paramType": "path",
              "name": "ip",
              "dataType": "ipBlock"
            }
          ],
          "noAuthentication": false,
          "responseFullType": "ip.IpMigrationToken",
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate a migration token",
          "responseType": "ip.IpMigrationToken",
          "resellerOnly": false,
          "noAuthentication": false,
          "responseFullType": "ip.IpMigrationToken",
          "parameters": [
            {
              "fullType": "string",
              "description": "destination customer ID",
              "required": true,
              "paramType": "body",
              "name": "customerId",
              "dataType": "string"
            },
            {
              "description": null,
              "fullType": "ipBlock",
              "required": true,
              "paramType": "path",
              "name": "ip",
              "dataType": "ipBlock"
            }
          ],
          "httpMethod": "POST"
        }
      ],
      "description": "IP migration to OVH",
      "path": "/ip/{ip}/migrationToken"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "noAuthentication": false,
          "responseFullType": "ip.IpTask",
          "parameters": [
            {
              "paramType": "body",
              "dataType": "string",
              "name": "organisation",
              "fullType": "string",
              "description": "Your organisation id (RIPE_XXXX) to add on block informations",
              "required": true
            },
            {
              "fullType": "ipBlock",
              "description": null,
              "required": true,
              "paramType": "path",
              "name": "ip",
              "dataType": "ipBlock"
            }
          ],
          "resellerOnly": false,
          "description": "Change organisation of this IP",
          "responseType": "ip.IpTask"
        }
      ],
      "description": "changeOrg operations",
      "path": "/ip/{ip}/changeOrg"
    },
    {
      "description": "List the ip.BlockedIp objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseType": "ipv4[]",
          "description": "Anti-Hack blocked IP",
          "httpMethod": "GET",
          "parameters": [
            {
              "paramType": "query",
              "dataType": "ip.BlockedIpStateEnum",
              "name": "state",
              "fullType": "ip.BlockedIpStateEnum",
              "description": "Filter the value of state property (=)",
              "required": false
            },
            {
              "fullType": "ipBlock",
              "description": null,
              "required": true,
              "paramType": "path",
              "name": "ip",
              "dataType": "ipBlock"
            }
          ],
          "responseFullType": "ipv4[]",
          "noAuthentication": false
        }
      ],
      "path": "/ip/{ip}/antihack"
    },
    {
      "description": "Blocked IP information",
      "operations": [
        {
          "description": "Get this object properties",
          "responseType": "ip.BlockedIp",
          "resellerOnly": false,
          "noAuthentication": false,
          "responseFullType": "ip.BlockedIp",
          "parameters": [
            {
              "description": null,
              "fullType": "ipBlock",
              "required": true,
              "paramType": "path",
              "name": "ip",
              "dataType": "ipBlock"
            },
            {
              "required": true,
              "description": "your IP",
              "fullType": "ipv4",
              "dataType": "ipv4",
              "paramType": "path",
              "name": "ipBlocked"
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/ip/{ip}/antihack/{ipBlocked}"
    },
    {
      "path": "/ip/{ip}/antihack/{ipBlocked}/unblock",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "paramType": "path",
              "dataType": "ipBlock",
              "name": "ip",
              "description": null,
              "fullType": "ipBlock",
              "required": true
            },
            {
              "description": "your IP",
              "fullType": "ipv4",
              "required": true,
              "paramType": "path",
              "name": "ipBlocked",
              "dataType": "ipv4"
            }
          ],
          "responseFullType": "void",
          "noAuthentication": false,
          "httpMethod": "POST",
          "responseType": "void",
          "description": "Unblock this IP",
          "resellerOnly": false
        }
      ],
      "description": "unblock operations"
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "noAuthentication": false,
          "responseFullType": "ip.SpamIp",
          "parameters": [
            {
              "required": true,
              "description": null,
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "paramType": "path",
              "name": "ip"
            },
            {
              "paramType": "path",
              "dataType": "ipv4",
              "name": "ipSpamming",
              "fullType": "ipv4",
              "description": "IP address which is sending spam",
              "required": true
            }
          ],
          "resellerOnly": false,
          "description": "Get this object properties",
          "responseType": "ip.SpamIp",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "Your IP spam stats",
      "path": "/ip/{ip}/spam/{ipSpamming}"
    },
    {
      "description": "stats operations",
      "operations": [
        {
          "resellerOnly": false,
          "responseType": "ip.SpamStats[]",
          "description": "Get statistics about the email traffic",
          "httpMethod": "GET",
          "parameters": [
            {
              "description": "Start date",
              "fullType": "datetime",
              "required": true,
              "paramType": "query",
              "name": "from",
              "dataType": "datetime"
            },
            {
              "name": "to",
              "paramType": "query",
              "dataType": "datetime",
              "required": true,
              "description": "End date",
              "fullType": "datetime"
            },
            {
              "name": "ip",
              "paramType": "path",
              "dataType": "ipBlock",
              "required": true,
              "fullType": "ipBlock",
              "description": null
            },
            {
              "paramType": "path",
              "dataType": "ipv4",
              "name": "ipSpamming",
              "description": "IP address which is sending spam",
              "fullType": "ipv4",
              "required": true
            }
          ],
          "responseFullType": "ip.SpamStats[]",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/ip/{ip}/spam/{ipSpamming}/stats"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "ip.SpamIp",
          "description": "Release the ip from anti-spam system",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "ip",
              "paramType": "path",
              "dataType": "ipBlock",
              "required": true,
              "fullType": "ipBlock",
              "description": null
            },
            {
              "required": true,
              "description": "IP address which is sending spam",
              "fullType": "ipv4",
              "dataType": "ipv4",
              "paramType": "path",
              "name": "ipSpamming"
            }
          ],
          "noAuthentication": false,
          "responseFullType": "ip.SpamIp",
          "httpMethod": "POST"
        }
      ],
      "description": "unblock operations",
      "path": "/ip/{ip}/spam/{ipSpamming}/unblock"
    },
    {
      "path": "/ip/{ip}/spam",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "name": "state",
              "paramType": "query",
              "dataType": "ip.SpamStateEnum",
              "required": false,
              "fullType": "ip.SpamStateEnum",
              "description": "Filter the value of state property (=)"
            },
            {
              "name": "ip",
              "paramType": "path",
              "dataType": "ipBlock",
              "required": true,
              "description": null,
              "fullType": "ipBlock"
            }
          ],
          "responseFullType": "ipv4[]",
          "noAuthentication": false,
          "httpMethod": "GET",
          "responseType": "ipv4[]",
          "description": "Ip spamming",
          "resellerOnly": false
        }
      ],
      "description": "List the ip.SpamIp objects"
    },
    {
      "path": "/ip/{ip}",
      "operations": [
        {
          "noAuthentication": false,
          "responseFullType": "ip.Ip",
          "parameters": [
            {
              "fullType": "ipBlock",
              "description": null,
              "required": true,
              "paramType": "path",
              "name": "ip",
              "dataType": "ipBlock"
            }
          ],
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseType": "ip.Ip",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "description": "Alter this object properties",
          "resellerOnly": false,
          "parameters": [
            {
              "paramType": "body",
              "dataType": "ip.Ip",
              "name": null,
              "description": "New object properties",
              "fullType": "ip.Ip",
              "required": true
            },
            {
              "fullType": "ipBlock",
              "description": null,
              "required": true,
              "paramType": "path",
              "name": "ip",
              "dataType": "ipBlock"
            }
          ],
          "noAuthentication": false,
          "responseFullType": "void",
          "httpMethod": "PUT"
        }
      ],
      "description": "Your IP"
    },
    {
      "description": "ARP blocked IP information",
      "operations": [
        {
          "noAuthentication": false,
          "responseFullType": "ip.ArpBlockedIp",
          "parameters": [
            {
              "name": "ip",
              "paramType": "path",
              "dataType": "ipBlock",
              "required": true,
              "description": null,
              "fullType": "ipBlock"
            },
            {
              "required": true,
              "description": "your IP",
              "fullType": "ipv4",
              "dataType": "ipv4",
              "paramType": "path",
              "name": "ipBlocked"
            }
          ],
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseType": "ip.ArpBlockedIp",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/ip/{ip}/arp/{ipBlocked}"
    },
    {
      "path": "/ip/{ip}/arp/{ipBlocked}/unblock",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "description": "Unblock this IP",
          "responseType": "void",
          "httpMethod": "POST",
          "responseFullType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "ip",
              "paramType": "path",
              "dataType": "ipBlock",
              "required": true,
              "fullType": "ipBlock",
              "description": null
            },
            {
              "paramType": "path",
              "dataType": "ipv4",
              "name": "ipBlocked",
              "fullType": "ipv4",
              "description": "your IP",
              "required": true
            }
          ]
        }
      ],
      "description": "unblock operations"
    },
    {
      "description": "List the ip.ArpBlockedIp objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "required": false,
              "fullType": "ip.ArpStateEnum",
              "description": "Filter the value of state property (=)",
              "dataType": "ip.ArpStateEnum",
              "paramType": "query",
              "name": "state"
            },
            {
              "name": "ip",
              "paramType": "path",
              "dataType": "ipBlock",
              "required": true,
              "description": null,
              "fullType": "ipBlock"
            }
          ],
          "noAuthentication": false,
          "responseFullType": "ipv4[]",
          "httpMethod": "GET",
          "responseType": "ipv4[]",
          "description": "ARP blocked IP",
          "resellerOnly": false
        }
      ],
      "path": "/ip/{ip}/arp"
    },
    {
      "path": "/ip/{ip}/terminate",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2017-01-21T00:00:00+01:00",
            "deprecatedDate": "2016-07-21T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "replacement": "/ip/service/{serviceName}/terminate"
          },
          "httpMethod": "POST",
          "responseFullType": "ip.IpTask",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "paramType": "path",
              "name": "ip",
              "required": true,
              "description": null,
              "fullType": "ipBlock"
            }
          ],
          "resellerOnly": false,
          "description": "Delete a failover IP",
          "responseType": "ip.IpTask"
        }
      ],
      "description": "terminate operations"
    },
    {
      "path": "/ip/service/{serviceName}/confirmTermination",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "responseType": "string",
          "description": "Confirm termination of your service",
          "resellerOnly": false,
          "parameters": [
            {
              "required": false,
              "description": "What next after your termination request",
              "fullType": "service.TerminationFutureUseEnum",
              "name": "futureUse",
              "paramType": "body",
              "dataType": "service.TerminationFutureUseEnum"
            },
            {
              "required": false,
              "description": "Reason of your termination request",
              "fullType": "service.TerminationReasonEnum",
              "name": "reason",
              "paramType": "body",
              "dataType": "service.TerminationReasonEnum"
            },
            {
              "required": false,
              "fullType": "string",
              "description": "Commentary about your termination request",
              "name": "commentary",
              "paramType": "body",
              "dataType": "string"
            },
            {
              "required": true,
              "description": "The termination token sent by mail to the admin contact",
              "fullType": "string",
              "name": "token",
              "paramType": "body",
              "dataType": "string"
            },
            {
              "paramType": "path",
              "name": "serviceName",
              "dataType": "string",
              "description": "The internal name of your IP services",
              "fullType": "string",
              "required": true
            }
          ],
          "responseFullType": "string",
          "noAuthentication": false,
          "httpMethod": "POST"
        }
      ],
      "description": "Confirm termination of your service"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "responseFullType": "ip.ServiceIp",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your IP services",
              "fullType": "string",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "name": "serviceName"
            }
          ],
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseType": "ip.ServiceIp",
          "resellerOnly": false
        },
        {
          "parameters": [
            {
              "dataType": "ip.ServiceIp",
              "paramType": "body",
              "name": null,
              "required": true,
              "description": "New object properties",
              "fullType": "ip.ServiceIp"
            },
            {
              "description": "The internal name of your IP services",
              "fullType": "string",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "name": "serviceName"
            }
          ],
          "noAuthentication": false,
          "responseFullType": "void",
          "httpMethod": "PUT",
          "responseType": "void",
          "description": "Alter this object properties",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          }
        }
      ],
      "description": "Your IP linked to service",
      "path": "/ip/service/{serviceName}"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "resellerOnly": false,
          "responseType": "services.NonExpiringService",
          "description": "Get this object properties",
          "httpMethod": "GET",
          "parameters": [
            {
              "paramType": "path",
              "name": "serviceName",
              "dataType": "string",
              "description": "The internal name of your IP services",
              "fullType": "string",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseFullType": "services.NonExpiringService"
        }
      ],
      "description": "Details about a non-expiring Service",
      "path": "/ip/service/{serviceName}/serviceInfos"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "responseType": "string",
          "description": "Terminate your service",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "string",
              "paramType": "path",
              "name": "serviceName",
              "required": true,
              "fullType": "string",
              "description": "The internal name of your IP services"
            }
          ],
          "responseFullType": "string",
          "noAuthentication": false,
          "httpMethod": "POST"
        }
      ],
      "description": "Terminate your service",
      "path": "/ip/service/{serviceName}/terminate"
    },
    {
      "path": "/ip/service",
      "description": "Operations about the IP service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "resellerOnly": false,
          "responseType": "string[]",
          "description": "List available services",
          "httpMethod": "GET",
          "parameters": [],
          "noAuthentication": false,
          "responseFullType": "string[]"
        }
      ]
    },
    {
      "path": "/ip",
      "description": "List the ip.Ip objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "description": "Your OVH IPs",
          "responseType": "ipBlock[]",
          "httpMethod": "GET",
          "noAuthentication": false,
          "responseFullType": "ipBlock[]",
          "parameters": [
            {
              "description": "Filter the value of routedTo.serviceName property (like)",
              "fullType": "string",
              "required": false,
              "paramType": "query",
              "dataType": "string",
              "name": "routedTo.serviceName"
            },
            {
              "required": false,
              "description": "Filter the value of ip property (contains or equals)",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "query",
              "dataType": "ipBlock"
            },
            {
              "fullType": "string",
              "description": "Filter the value of description property (like)",
              "required": false,
              "paramType": "query",
              "dataType": "string",
              "name": "description"
            },
            {
              "paramType": "query",
              "name": "type",
              "dataType": "ip.IpTypeEnum",
              "description": "Filter the value of type property (=)",
              "fullType": "ip.IpTypeEnum",
              "required": false
            }
          ]
        }
      ]
    }
  ],
  "models": {
    "services.NonExpiringService": {
      "namespace": "services",
      "id": "NonExpiringService",
      "properties": {
        "contactTech": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "description": null,
          "type": "string",
          "readOnly": true
        },
        "serviceId": {
          "readOnly": true,
          "description": null,
          "type": "long",
          "fullType": "coreTypes.ServiceId:long",
          "canBeNull": false
        },
        "domain": {
          "type": "string",
          "description": null,
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true
        },
        "contactBilling": {
          "readOnly": true,
          "description": null,
          "type": "string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false
        },
        "contactAdmin": {
          "description": null,
          "type": "string",
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true
        },
        "status": {
          "type": "service.StateEnum",
          "description": null,
          "fullType": "service.StateEnum",
          "canBeNull": false,
          "readOnly": true
        },
        "creation": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "date",
          "type": "date",
          "description": null
        }
      },
      "description": "Details about a non-expiring Service"
    },
    "service.TerminationFutureUseEnum": {
      "namespace": "service",
      "id": "TerminationFutureUseEnum",
      "enum": [
        "NOT_REPLACING_SERVICE",
        "OTHER",
        "SUBSCRIBE_AN_OTHER_SERVICE",
        "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
        "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
      ],
      "description": "All future uses you can provide for a service termination",
      "enumType": "string"
    },
    "ip.MitigationTraffic": {
      "namespace": "ip",
      "id": "MitigationTraffic",
      "description": "Traffic on mitigation",
      "properties": {
        "pps": {
          "canBeNull": false,
          "description": "Paquets per second",
          "type": "long"
        },
        "bps": {
          "canBeNull": false,
          "type": "long",
          "description": "Bits per second"
        }
      }
    },
    "ip.Antiphishing": {
      "properties": {
        "state": {
          "readOnly": true,
          "description": "Current state of the phishing",
          "type": "ip.AntiphishingStateEnum",
          "fullType": "ip.AntiphishingStateEnum",
          "canBeNull": false
        },
        "creationDate": {
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime",
          "description": "Date of the event",
          "readOnly": true
        },
        "id": {
          "type": "long",
          "description": "Internal ID of the phishing entry",
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true
        },
        "ipOnAntiphishing": {
          "fullType": "ipv4",
          "canBeNull": false,
          "type": "ipv4",
          "description": "IP address hosting the phishing URL",
          "readOnly": true
        },
        "urlPhishing": {
          "fullType": "string",
          "canBeNull": false,
          "type": "string",
          "description": "Phishing URL",
          "readOnly": true
        }
      },
      "description": "Phishing URLs hosted on your IP",
      "namespace": "ip",
      "id": "Antiphishing"
    },
    "ip.MitigationStats": {
      "description": "Traffic statistics in and out on a mitigated ip",
      "properties": {
        "timestamp": {
          "description": "Traffic timestamp",
          "type": "long",
          "canBeNull": false
        },
        "out": {
          "canBeNull": true,
          "description": "Traffic out",
          "type": "ip.MitigationTraffic"
        },
        "in": {
          "canBeNull": true,
          "type": "ip.MitigationTraffic",
          "description": "Traffic in"
        }
      },
      "namespace": "ip",
      "id": "MitigationStats"
    },
    "ip.GameMitigationStateEnum": {
      "enumType": "string",
      "description": "Possible values for udp mitigation rule state",
      "id": "GameMitigationStateEnum",
      "namespace": "ip",
      "enum": [
        "firewallModeDisablePending",
        "firewallModeEnablePending",
        "ok"
      ]
    },
    "ip.SpamStateEnum": {
      "enum": [
        "blockedForSpam",
        "unblocked",
        "unblocking"
      ],
      "id": "SpamStateEnum",
      "namespace": "ip",
      "enumType": "string",
      "description": "Possible values for spam state"
    },
    "ip.SpamIp": {
      "namespace": "ip",
      "id": "SpamIp",
      "properties": {
        "time": {
          "canBeNull": false,
          "fullType": "long",
          "type": "long",
          "description": "Time (in seconds) while the IP will be blocked",
          "readOnly": true
        },
        "ipSpamming": {
          "fullType": "ipv4",
          "canBeNull": false,
          "description": "IP address which is sending spam",
          "type": "ipv4",
          "readOnly": true
        },
        "date": {
          "description": "Last date the ip was blocked",
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true
        },
        "state": {
          "readOnly": true,
          "type": "ip.SpamStateEnum",
          "description": "Current state of the ip",
          "fullType": "ip.SpamStateEnum",
          "canBeNull": false
        }
      },
      "description": "Your IP spam stats"
    },
    "ip.BlockedIpStateEnum": {
      "enumType": "string",
      "description": "Possible values for IP state",
      "enum": [
        "blocked",
        "unblocking"
      ],
      "id": "BlockedIpStateEnum",
      "namespace": "ip"
    },
    "ip.ArpStateEnum": {
      "description": "Possible values for IP state",
      "enumType": "string",
      "namespace": "ip",
      "id": "ArpStateEnum",
      "enum": [
        "blocked",
        "unblocking"
      ]
    },
    "ip.MitigationAttack": {
      "id": "MitigationAttack",
      "namespace": "ip",
      "properties": {
        "idAttack": {
          "fullType": "long",
          "canBeNull": false,
          "type": "long",
          "description": "Internal id of your attack",
          "readOnly": true
        },
        "ipAttack": {
          "readOnly": true,
          "description": "Your ip",
          "type": "ipv4",
          "canBeNull": false,
          "fullType": "ipv4"
        },
        "endDate": {
          "type": "datetime",
          "description": "End of the attack",
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true
        },
        "startDate": {
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false,
          "description": "Start of the attack",
          "type": "datetime"
        }
      },
      "description": "Mitigation attack on your ip"
    },
    "ip.Ip": {
      "description": "Your IP",
      "properties": {
        "type": {
          "fullType": "ip.IpTypeEnum",
          "canBeNull": false,
          "type": "ip.IpTypeEnum",
          "description": null,
          "readOnly": true
        },
        "ip": {
          "readOnly": true,
          "description": null,
          "type": "ipBlock",
          "canBeNull": false,
          "fullType": "ipBlock"
        },
        "description": {
          "readOnly": false,
          "canBeNull": true,
          "fullType": "string",
          "description": "Custom description on your ip",
          "type": "string"
        },
        "canBeTerminated": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "boolean",
          "description": null,
          "type": "boolean"
        },
        "organisationId": {
          "type": "string",
          "description": "IP block organisation Id",
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true
        },
        "routedTo": {
          "type": "ip.RoutedTo",
          "description": "Routage information",
          "fullType": "ip.RoutedTo",
          "canBeNull": true,
          "readOnly": true
        },
        "country": {
          "canBeNull": true,
          "fullType": "coreTypes.CountryEnum",
          "type": "coreTypes.CountryEnum",
          "description": null,
          "readOnly": true
        }
      },
      "id": "Ip",
      "namespace": "ip"
    },
    "ip.TaskFunctionEnum": {
      "enum": [
        "arinBlockReassign",
        "changeRipeOrg",
        "checkAndReleaseIp",
        "genericMoveFloatingIp"
      ],
      "id": "TaskFunctionEnum",
      "namespace": "ip",
      "enumType": "string",
      "description": "different task operation"
    },
    "ip.IpMigrationToken": {
      "id": "IpMigrationToken",
      "namespace": "ip",
      "description": "IP migration to OVH",
      "properties": {
        "token": {
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "type": "string",
          "description": "migration token"
        },
        "customerId": {
          "fullType": "string",
          "canBeNull": false,
          "description": "destination customer ID",
          "type": "string",
          "readOnly": true
        }
      }
    },
    "ip.IpTypeEnum": {
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
      "id": "IpTypeEnum",
      "namespace": "ip",
      "enumType": "string",
      "description": "Possible values for ip type"
    },
    "ip.SpamStats": {
      "description": "Spam statistics about an IP address",
      "properties": {
        "numberOfSpams": {
          "canBeNull": false,
          "type": "long",
          "description": "Number of spams sent"
        },
        "total": {
          "type": "long",
          "description": "Number of emails sent",
          "canBeNull": false
        },
        "detectedSpams": {
          "description": "Detailed list of the spams",
          "type": "ip.SpamTarget[]",
          "canBeNull": true
        },
        "timestamp": {
          "canBeNull": false,
          "description": "Time when the IP address was blocked",
          "type": "long"
        },
        "averageSpamscore": {
          "description": "Average spam score.",
          "type": "long",
          "canBeNull": true
        }
      },
      "id": "SpamStats",
      "namespace": "ip"
    },
    "ip.SpamTarget": {
      "namespace": "ip",
      "id": "SpamTarget",
      "properties": {
        "spamscore": {
          "type": "long",
          "description": "Spam score for the email",
          "canBeNull": false
        },
        "date": {
          "description": "Timestamp when the email was sent",
          "type": "long",
          "canBeNull": false
        },
        "destinationIp": {
          "canBeNull": false,
          "description": "IP address of the target",
          "type": "ipv4"
        },
        "messageId": {
          "type": "string",
          "description": "The message-id of the email",
          "canBeNull": false
        }
      },
      "description": "Spam's target information"
    },
    "service.StateEnum": {
      "enumType": "string",
      "description": "",
      "enum": [
        "expired",
        "inCreation",
        "ok",
        "pendingDebt",
        "unPaid"
      ],
      "id": "StateEnum",
      "namespace": "service"
    },
    "ip.ArpBlockedIp": {
      "description": "ARP blocked IP information",
      "properties": {
        "ipBlocked": {
          "description": "your IP",
          "type": "ipv4",
          "canBeNull": false,
          "fullType": "ipv4",
          "readOnly": true
        },
        "state": {
          "readOnly": true,
          "fullType": "ip.ArpStateEnum",
          "canBeNull": false,
          "type": "ip.ArpStateEnum",
          "description": "this IP address state"
        },
        "logs": {
          "readOnly": true,
          "fullType": "text",
          "canBeNull": true,
          "type": "text",
          "description": "ARP logs"
        },
        "time": {
          "description": "Time (in seconds) remaining before you can request your IP to be unblocked",
          "type": "long",
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true
        },
        "blockedSince": {
          "readOnly": true,
          "type": "datetime",
          "description": "The last blocking date",
          "fullType": "datetime",
          "canBeNull": false
        }
      },
      "id": "ArpBlockedIp",
      "namespace": "ip"
    },
    "coreTypes.CountryEnum": {
      "id": "CountryEnum",
      "namespace": "coreTypes",
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
      "description": "ISO country codes"
    },
    "ip.Destination": {
      "id": "Destination",
      "namespace": "ip",
      "properties": {
        "service": {
          "description": "Service destination",
          "type": "string",
          "canBeNull": false
        },
        "nexthop": {
          "description": "Nexthops available on this service",
          "type": "string[]",
          "canBeNull": true
        }
      },
      "description": "A structure given service and its nexthops as a destination for failover ips"
    },
    "ip.GameMitigationRuleProtocolEnum": {
      "description": "Possible values for game rule protocol",
      "enumType": "string",
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
      "namespace": "ip",
      "id": "GameMitigationRuleProtocolEnum"
    },
    "ip.TaskStatusEnum": {
      "enum": [
        "cancelled",
        "customerError",
        "doing",
        "done",
        "init",
        "ovhError",
        "todo"
      ],
      "namespace": "ip",
      "id": "TaskStatusEnum",
      "description": "different task status",
      "enumType": "string"
    },
    "ip.RipeInfos": {
      "namespace": "ip",
      "id": "RipeInfos",
      "description": "IP block RIPE informations",
      "properties": {
        "description": {
          "readOnly": false,
          "canBeNull": true,
          "fullType": "string",
          "type": "string",
          "description": null
        },
        "netname": {
          "readOnly": false,
          "canBeNull": true,
          "fullType": "string",
          "type": "string",
          "description": null
        }
      }
    },
    "ip.ServiceIp": {
      "description": "Your IP linked to service",
      "properties": {
        "canBeTerminated": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "boolean",
          "type": "boolean",
          "description": null
        },
        "routedTo": {
          "type": "ip.RoutedTo",
          "description": "Routage information",
          "fullType": "ip.RoutedTo",
          "canBeNull": true,
          "readOnly": true
        },
        "organisationId": {
          "canBeNull": true,
          "fullType": "string",
          "description": "IP block organisation Id",
          "type": "string",
          "readOnly": true
        },
        "country": {
          "description": null,
          "type": "coreTypes.CountryEnum",
          "canBeNull": true,
          "fullType": "coreTypes.CountryEnum",
          "readOnly": true
        },
        "type": {
          "description": null,
          "type": "ip.IpTypeEnum",
          "canBeNull": false,
          "fullType": "ip.IpTypeEnum",
          "readOnly": true
        },
        "description": {
          "fullType": "string",
          "canBeNull": true,
          "type": "string",
          "description": "Custom description on your ip",
          "readOnly": false
        },
        "ip": {
          "fullType": "ipBlock",
          "canBeNull": false,
          "type": "ipBlock",
          "description": null,
          "readOnly": true
        }
      },
      "namespace": "ip",
      "id": "ServiceIp"
    },
    "ip.GameMitigation": {
      "properties": {
        "ipOnGame": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "ipv4",
          "type": "ipv4",
          "description": null
        },
        "firewallModeEnabled": {
          "canBeNull": false,
          "fullType": "boolean",
          "description": "Firewall mode : in UDP, only allow traffic matching your rules (as well as established traffic). If not enabled, traffic to ports not defined in your rules will be permited. TCP traffic is unaffected by this.",
          "type": "boolean",
          "readOnly": false
        },
        "state": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "ip.GameMitigationStateEnum",
          "type": "ip.GameMitigationStateEnum",
          "description": null
        }
      },
      "description": "GAME Anti-DDoS",
      "id": "GameMitigation",
      "namespace": "ip"
    },
    "ip.GameMitigationRule": {
      "description": "Rule on ip:ports",
      "properties": {
        "ports": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "complexType.Range<long>",
          "type": "complexType.Range<long>",
          "description": null
        },
        "protocol": {
          "description": null,
          "type": "ip.GameMitigationRuleProtocolEnum",
          "canBeNull": false,
          "fullType": "ip.GameMitigationRuleProtocolEnum",
          "readOnly": true
        },
        "id": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "type": "long",
          "description": "ID of the rule"
        },
        "state": {
          "type": "ip.GameMitigationRuleStateEnum",
          "description": "Current state of your rule",
          "fullType": "ip.GameMitigationRuleStateEnum",
          "canBeNull": false,
          "readOnly": true
        }
      },
      "namespace": "ip",
      "id": "GameMitigationRule"
    },
    "complexType.Range<T>": {
      "id": "Range",
      "namespace": "complexType",
      "generics": [
        "T"
      ],
      "description": "Start and end points (inclusive) of a range",
      "properties": {
        "to": {
          "description": "End point of the range",
          "type": "T",
          "canBeNull": false
        },
        "from": {
          "canBeNull": false,
          "type": "T",
          "description": "Start point of the range"
        }
      }
    },
    "service.TerminationReasonEnum": {
      "namespace": "service",
      "id": "TerminationReasonEnum",
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
      "description": "All reasons you can provide for a service termination",
      "enumType": "string"
    },
    "ip.Destinations": {
      "namespace": "ip",
      "id": "Destinations",
      "description": "A structure given all services allowed as a destination for this ip",
      "properties": {
        "cloudProject": {
          "description": "list of public cloud projects",
          "type": "ip.Destination[]",
          "canBeNull": true
        },
        "hostingReseller": {
          "description": "list of hosting reseller services",
          "type": "ip.Destination[]",
          "canBeNull": true
        },
        "dedicatedCloud": {
          "type": "ip.Destination[]",
          "description": "list of dedicated clouds",
          "canBeNull": true
        },
        "ipLoadbalancing": {
          "canBeNull": true,
          "description": "list of load balancing services",
          "type": "ip.Destination[]"
        },
        "dedicatedServer": {
          "type": "ip.Destination[]",
          "description": "list of dedicated servers",
          "canBeNull": true
        },
        "vps": {
          "description": "list of vps",
          "type": "ip.Destination[]",
          "canBeNull": true
        }
      }
    },
    "ip.ReverseIp": {
      "description": "Your reverse records on IP",
      "properties": {
        "ipReverse": {
          "canBeNull": false,
          "fullType": "ip",
          "description": null,
          "type": "ip",
          "readOnly": true
        },
        "reverse": {
          "canBeNull": false,
          "fullType": "string",
          "description": null,
          "type": "string",
          "readOnly": true
        }
      },
      "namespace": "ip",
      "id": "ReverseIp"
    },
    "ip.AntiphishingStateEnum": {
      "description": "Possible values for antiphishing state",
      "enumType": "string",
      "enum": [
        "blocked",
        "blocking",
        "unblocked",
        "unblocking"
      ],
      "namespace": "ip",
      "id": "AntiphishingStateEnum"
    },
    "ip.GameMitigationRuleStateEnum": {
      "id": "GameMitigationRuleStateEnum",
      "namespace": "ip",
      "enum": [
        "createRulePending",
        "deleteRulePending",
        "ok"
      ],
      "enumType": "string",
      "description": "Possible values for game mitigation rule state"
    },
    "ip.RoutedTo": {
      "description": "Information about routing",
      "properties": {
        "serviceName": {
          "description": "Service where ip is routed to",
          "type": "string",
          "canBeNull": true
        }
      },
      "id": "RoutedTo",
      "namespace": "ip"
    },
    "ip.BlockedIp": {
      "properties": {
        "state": {
          "canBeNull": false,
          "fullType": "ip.BlockedIpStateEnum",
          "description": "this IP address state",
          "type": "ip.BlockedIpStateEnum",
          "readOnly": true
        },
        "ipBlocked": {
          "readOnly": true,
          "type": "ipv4",
          "description": "your IP",
          "canBeNull": false,
          "fullType": "ipv4"
        },
        "blockedSince": {
          "readOnly": true,
          "description": "The last blocking date",
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false
        },
        "time": {
          "readOnly": true,
          "type": "long",
          "description": "Time (in seconds) remaining before you can request your IP to be unblocked",
          "canBeNull": false,
          "fullType": "long"
        },
        "logs": {
          "type": "text",
          "description": "Logs",
          "fullType": "text",
          "canBeNull": true,
          "readOnly": true
        }
      },
      "description": "Blocked IP information",
      "id": "BlockedIp",
      "namespace": "ip"
    },
    "ip.IpTask": {
      "namespace": "ip",
      "id": "IpTask",
      "description": "IP tasks",
      "properties": {
        "startDate": {
          "readOnly": true,
          "type": "datetime",
          "description": "Task Creation date",
          "fullType": "datetime",
          "canBeNull": false
        },
        "destination": {
          "description": "Destination for moveFloatingIp tasks",
          "type": "ip.RoutedTo",
          "fullType": "ip.RoutedTo",
          "canBeNull": true,
          "readOnly": true
        },
        "function": {
          "readOnly": true,
          "type": "ip.TaskFunctionEnum",
          "description": "Function name",
          "fullType": "ip.TaskFunctionEnum",
          "canBeNull": false
        },
        "status": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "ip.TaskStatusEnum",
          "type": "ip.TaskStatusEnum",
          "description": "Task status"
        },
        "comment": {
          "readOnly": true,
          "type": "string",
          "description": "Details of this task",
          "canBeNull": true,
          "fullType": "string"
        },
        "taskId": {
          "readOnly": true,
          "type": "long",
          "description": "the id of the task",
          "fullType": "long",
          "canBeNull": false
        },
        "doneDate": {
          "description": "Completion date",
          "type": "datetime",
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true
        },
        "lastUpdate": {
          "description": "last update",
          "type": "datetime",
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true
        }
      }
    }
  }
}