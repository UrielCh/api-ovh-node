import {Schema} from '../../src/schema';

// imported from https://api.us.ovhcloud.com:443/1.0/ip.json

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
          "iamActions": [
            "ip:apiovh:get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter the value of campus property (ilike) (alpha)",
              "fullType": "string",
              "name": "campus",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of description property (like)",
              "fullType": "string",
              "name": "description",
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
              "dataType": "boolean",
              "description": "Filter the value of isAdditionalIp property (=) (alpha)",
              "fullType": "boolean",
              "name": "isAdditionalIp",
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
              "dataType": "ip.IpTypeEnum",
              "description": "Filter the value of type property (=)",
              "fullType": "ip.IpTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ip.IpVersionEnum",
              "description": "Filter the value of version property (=) (alpha)",
              "fullType": "ip.IpVersionEnum",
              "name": "version",
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
      "description": "Your IP",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "ip:apiovh:get"
          ],
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
          "iamActions": [
            "ip:apiovh:edit"
          ],
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
          "iamActions": [
            "ip:apiovh:antihack/get"
          ],
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
              "dataType": "ip.BlockedIpStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "ip.BlockedIpStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
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
          "iamActions": [
            "ip:apiovh:antihack/get"
          ],
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
          "iamActions": [
            "ip:apiovh:antihack/unblock"
          ],
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
          "iamActions": [
            "ip:apiovh:arp/get"
          ],
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
              "dataType": "ip.ArpStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "ip.ArpStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
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
          "iamActions": [
            "ip:apiovh:arp/get"
          ],
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
          "iamActions": [
            "ip:apiovh:arp/unblock"
          ],
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
          "iamActions": [
            "ip:apiovh:changeOrg/create"
          ],
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
          "iamActions": [
            "ip:apiovh:delegation/get"
          ],
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
          "iamActions": [
            "ip:apiovh:delegation/create"
          ],
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
          "iamActions": [
            "ip:apiovh:delegation/delete"
          ],
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
          "iamActions": [
            "ip:apiovh:delegation/get"
          ],
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
          "iamActions": [
            "ip:apiovh:firewall/get"
          ],
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
              "dataType": "boolean",
              "description": "Filter the value of enabled property (=)",
              "fullType": "boolean",
              "name": "enabled",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ip.FirewallStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "ip.FirewallStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
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
          "iamActions": [
            "ip:apiovh:firewall/create"
          ],
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
          "iamActions": [
            "ip:apiovh:firewall/delete"
          ],
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
          "iamActions": [
            "ip:apiovh:firewall/get"
          ],
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
          "iamActions": [
            "ip:apiovh:firewall/edit"
          ],
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
          "iamActions": [
            "ip:apiovh:firewall/rule/get"
          ],
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
              "dataType": "ip.FirewallRuleStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "ip.FirewallRuleStateEnum",
              "name": "state",
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
          "description": "AntiDDOS option. Add new rule on your IP",
          "httpMethod": "POST",
          "iamActions": [
            "ip:apiovh:firewall/rule/create"
          ],
          "noAuthentication": false,
          "parameters": [
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
              "description": "Destination port for your rule. Only with TCP/UDP protocol",
              "fullType": "long",
              "name": "destinationPort",
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
              "dataType": "ip.FirewallSequenceRangeEnum",
              "description": "Sequence number of your rule",
              "fullType": "ip.FirewallSequenceRangeEnum",
              "name": "sequence",
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
              "dataType": "long",
              "description": "Source port for your rule. Only with TCP/UDP protocol",
              "fullType": "long",
              "name": "sourcePort",
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
          "iamActions": [
            "ip:apiovh:firewall/rule/delete"
          ],
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
          "iamActions": [
            "ip:apiovh:firewall/rule/get"
          ],
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
          "iamActions": [
            "ip:apiovh:game/get"
          ],
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
          "iamActions": [
            "ip:apiovh:game/get"
          ],
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
          "iamActions": [
            "ip:apiovh:game/edit"
          ],
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
          "iamActions": [
            "ip:apiovh:game/rule/get"
          ],
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
          "iamActions": [
            "ip:apiovh:game/rule/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "complexType.Range<long>",
              "description": "The UDP port range to apply the rule on",
              "fullType": "complexType.Range<long>",
              "name": "ports",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip.GameMitigationRuleProtocolEnum",
              "description": "The protocol running behind the given port",
              "fullType": "ip.GameMitigationRuleProtocolEnum",
              "name": "protocol",
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
          "iamActions": [
            "ip:apiovh:game/rule/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "ID of the rule",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
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
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "ip:apiovh:game/rule/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "ID of the rule",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
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
          "iamActions": [
            "ip:apiovh:license/cloudLinux/get"
          ],
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
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "query",
              "required": false
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
          "iamActions": [
            "ip:apiovh:license/cpanel/get"
          ],
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
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "query",
              "required": false
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
          "iamActions": [
            "ip:apiovh:license/directadmin/get"
          ],
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
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "query",
              "required": false
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
          "iamActions": [
            "ip:apiovh:license/plesk/get"
          ],
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
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "query",
              "required": false
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
          "iamActions": [
            "ip:apiovh:license/sqlserver/get"
          ],
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
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "query",
              "required": false
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
          "iamActions": [
            "ip:apiovh:license/virtuozzo/get"
          ],
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
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "query",
              "required": false
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
          "iamActions": [
            "ip:apiovh:license/windows/get"
          ],
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
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "query",
              "required": false
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
          "iamActions": [
            "ip:apiovh:license/worklight/get"
          ],
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
              "description": "Filter the value of ipAddress property (=)",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "query",
              "required": false
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
          "iamActions": [
            "ip:apiovh:migrationToken/get"
          ],
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
          "iamActions": [
            "ip:apiovh:migrationToken/create"
          ],
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
          "iamActions": [
            "ip:apiovh:mitigation/get"
          ],
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
          "iamActions": [
            "ip:apiovh:mitigation/create"
          ],
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
          "iamActions": [
            "ip:apiovh:mitigation/delete"
          ],
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
          "iamActions": [
            "ip:apiovh:mitigation/get"
          ],
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
          "iamActions": [
            "ip:apiovh:mitigation/edit"
          ],
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
          "iamActions": [
            "ip:apiovh:mitigation/stats/get"
          ],
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
            },
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
          "iamActions": [
            "ip:apiovh:mitigation/topStream/get"
          ],
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
            },
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
          "iamActions": [
            "ip:apiovh:mitigationProfiles/get"
          ],
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
          "iamActions": [
            "ip:apiovh:mitigationProfiles/create"
          ],
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
          "iamActions": [
            "ip:apiovh:mitigationProfiles/delete"
          ],
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
          "iamActions": [
            "ip:apiovh:mitigationProfiles/get"
          ],
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
          "iamActions": [
            "ip:apiovh:mitigationProfiles/edit"
          ],
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
          "iamActions": [
            "ip:apiovh:move/get"
          ],
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
          "iamActions": [
            "ip:apiovh:move/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Nexthop of destination service",
              "fullType": "string",
              "name": "nexthop",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Service destination",
              "fullType": "string",
              "name": "to",
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
          "iamActions": [
            "ip:apiovh:park/create"
          ],
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
          "iamActions": [
            "ip:apiovh:phishing/get"
          ],
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
          "iamActions": [
            "ip:apiovh:phishing/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Internal ID of the phishing entry",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
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
          "iamActions": [
            "ip:apiovh:reverse/get"
          ],
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
          "iamActions": [
            "ip:apiovh:reverse/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "",
              "fullType": "ip",
              "name": "ipReverse",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "reverse",
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
          "iamActions": [
            "ip:apiovh:reverse/delete"
          ],
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
          "iamActions": [
            "ip:apiovh:reverse/get"
          ],
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
          "iamActions": [
            "ip:apiovh:ripe/get"
          ],
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
          "iamActions": [
            "ip:apiovh:ripe/edit"
          ],
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
          "iamActions": [
            "ip:apiovh:spam/get"
          ],
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
              "dataType": "ip.SpamStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "ip.SpamStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
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
          "iamActions": [
            "ip:apiovh:spam/get"
          ],
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
          "iamActions": [
            "ip:apiovh:spam/stats/get"
          ],
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
            },
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
          "iamActions": [
            "ip:apiovh:spam/unblock"
          ],
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
          "iamActions": [
            "ip:apiovh:task/get"
          ],
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
          "iamActions": [
            "ip:apiovh:task/get"
          ],
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
            "deletionDate": "2017-01-21 00:00:00 +0100 +0100",
            "deprecatedDate": "2016-07-21 00:00:00 +0100 +0100",
            "description": "Deprecated, will be removed",
            "replacement": "/ip/service/{serviceName}/terminate",
            "value": "DEPRECATED"
          },
          "description": "Delete a failover IP",
          "httpMethod": "POST",
          "iamActions": [
            "ip:apiovh:terminate"
          ],
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
    },
    {
      "description": "Get IP campuses",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get IP campuses",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [],
          "responseType": "ip.Campus[]"
        }
      ],
      "path": "/ip/campus"
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
          "iamActions": [
            "ip:apiovh:service/get"
          ],
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
          "iamActions": [
            "ip:apiovh:service/get"
          ],
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
          "iamActions": [
            "ip:apiovh:service/edit"
          ],
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
      "description": "Confirm termination of your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Confirm termination of your service",
          "httpMethod": "POST",
          "iamActions": [
            "ip:apiovh:service/confirmTermination"
          ],
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
      "description": "Details about a Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "ip:apiovh:service/serviceInfos/get"
          ],
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
          "responseType": "services.Service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "ip:apiovh:service/serviceInfos/edit"
          ],
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
          "iamActions": [
            "ip:apiovh:service/terminate"
          ],
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
    }
  ],
  "basePath": "https://api.us.ovhcloud.com/1.0",
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
    "dedicated.DatacenterEnum": {
      "description": "ovh datacenter",
      "enum": [
        "bhs1",
        "bhs2",
        "bhs3",
        "bhs4",
        "bhs5",
        "bhs6",
        "bhs7",
        "bhs8",
        "dc1",
        "eri1",
        "gra1",
        "gra2",
        "gra3",
        "gsw",
        "hil1",
        "lil1-int1",
        "lim1",
        "lim3",
        "p19",
        "rbx-hz",
        "rbx1",
        "rbx2",
        "rbx3",
        "rbx4",
        "rbx5",
        "rbx6",
        "rbx7",
        "rbx8",
        "sbg1",
        "sbg2",
        "sbg3",
        "sbg4",
        "sbg5",
        "sgp1",
        "syd1",
        "syd2",
        "vin1",
        "waw1",
        "ynm1"
      ],
      "enumType": "string",
      "id": "DatacenterEnum",
      "namespace": "dedicated"
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
    "ip.Campus": {
      "description": "Campus of an IP address",
      "id": "Campus",
      "namespace": "ip",
      "properties": {
        "bringYourOwnIpSupportedRirForIp": {
          "canBeNull": false,
          "description": "List of RIRs whose IPs can be imported in the campus",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "datacenters": {
          "canBeNull": false,
          "description": "List of datacenters in the campus",
          "readOnly": false,
          "required": false,
          "type": "dedicated.DatacenterEnum[]"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the campus",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Campus name",
          "readOnly": false,
          "required": false,
          "type": "ip.CampusEnum"
        }
      }
    },
    "ip.CampusEnum": {
      "description": "Possible values for IP campuses' names",
      "enum": [
        "BHS",
        "ERI",
        "GRA",
        "HIL",
        "LIM",
        "RBX",
        "SBG",
        "SGP",
        "SY2",
        "SYD",
        "VIN",
        "WAW",
        "YNM"
      ],
      "enumType": "string",
      "id": "CampusEnum",
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
        "bringYourOwnIp": {
          "canBeNull": false,
          "description": "Is this IP part of the Bring your own IP program (alpha)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "campus": {
          "canBeNull": true,
          "description": "Where is the IP used/usable (alpha)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
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
        "isAdditionalIp": {
          "canBeNull": false,
          "description": "Is this IP an Additional IP (alpha)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "organisationId": {
          "canBeNull": true,
          "description": "IP block organisation Id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "rir": {
          "canBeNull": true,
          "description": "Regional Internet Registry of the IP (alpha)",
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
        },
        "version": {
          "canBeNull": false,
          "description": "Version of the IP (alpha)",
          "fullType": "ip.IpVersionEnum",
          "readOnly": true,
          "required": false,
          "type": "ip.IpVersionEnum"
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
    "ip.IpVersionEnum": {
      "description": "Possible values for IP version",
      "enum": [
        "4",
        "6"
      ],
      "enumType": "long",
      "id": "IpVersionEnum",
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
  "resourcePath": "/ip"
}