import {Schema} from '../../src/schema';

// imported from https://ca.api.soyoustart.com:443/1.0/order.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the DEDICATED service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicated/server"
    },
    {
      "description": "List available options for this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed options",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}"
    },
    {
      "description": "Order a backup storage for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'backupStorage' option",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/backupStorage/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.BackupStorageCapacityEnum",
              "description": "The capacity in gigabytes of your backup storage",
              "fullType": "dedicated.server.BackupStorageCapacityEnum",
              "name": "capacity",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/backupStorage"
    },
    {
      "description": "Order a backup storage for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/backupStorage/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.BackupStorageCapacityEnum",
              "description": "The capacity in gigabytes of your backup storage",
              "fullType": "dedicated.server.BackupStorageCapacityEnum",
              "name": "capacity",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "order:apiovh:dedicated/server/backupStorage/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.BackupStorageCapacityEnum",
              "description": "The capacity in gigabytes of your backup storage",
              "fullType": "dedicated.server.BackupStorageCapacityEnum",
              "name": "capacity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/backupStorage/{duration}"
    },
    {
      "description": "Order a failover IP for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'failoverIP' option",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/failoverIP/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.IpCountryEnum",
              "description": "Ip localization",
              "fullType": "dedicated.server.IpCountryEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/failoverIP"
    },
    {
      "description": "Order a failover IP for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/failoverIP/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.IpCountryEnum",
              "description": "Ip localization",
              "fullType": "dedicated.server.IpCountryEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "order:apiovh:dedicated/server/failoverIP/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.IpCountryEnum",
              "description": "Ip localization",
              "fullType": "dedicated.server.IpCountryEnum",
              "name": "country",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/failoverIP/{duration}"
    },
    {
      "description": "Order a feature for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'feature' option",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/feature/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.OrderableSysFeatureEnum",
              "description": "the feature",
              "fullType": "dedicated.server.OrderableSysFeatureEnum",
              "name": "feature",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/feature"
    },
    {
      "description": "Order a feature for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/feature/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.OrderableSysFeatureEnum",
              "description": "the feature",
              "fullType": "dedicated.server.OrderableSysFeatureEnum",
              "name": "feature",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "order:apiovh:dedicated/server/feature/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.OrderableSysFeatureEnum",
              "description": "the feature",
              "fullType": "dedicated.server.OrderableSysFeatureEnum",
              "name": "feature",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/feature/{duration}"
    },
    {
      "description": "order a Firewall for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'firewall' option",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/firewall/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.FirewallModelEnum",
              "description": "Firewall type",
              "fullType": "dedicated.server.FirewallModelEnum",
              "name": "firewallModel",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/firewall"
    },
    {
      "description": "order a Firewall for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/firewall/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.FirewallModelEnum",
              "description": "Firewall type",
              "fullType": "dedicated.server.FirewallModelEnum",
              "name": "firewallModel",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "order:apiovh:dedicated/server/firewall/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.FirewallModelEnum",
              "description": "Firewall type",
              "fullType": "dedicated.server.FirewallModelEnum",
              "name": "firewallModel",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/firewall/{duration}"
    },
    {
      "description": "Order IP for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'ip' option",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/ip/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.IpBlockSizeEnum",
              "description": "IP block size",
              "fullType": "dedicated.server.IpBlockSizeEnum",
              "name": "blockSize",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicated.server.IpCountryEnum",
              "description": "IP localization",
              "fullType": "dedicated.server.IpCountryEnum",
              "name": "country",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Your organisation id to add on block informations",
              "fullType": "string",
              "name": "organisationId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicated.server.IpTypeOrderableEnum",
              "description": "The type of IP",
              "fullType": "dedicated.server.IpTypeOrderableEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/ip"
    },
    {
      "description": "Order IP for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/ip/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.IpBlockSizeEnum",
              "description": "IP block size",
              "fullType": "dedicated.server.IpBlockSizeEnum",
              "name": "blockSize",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicated.server.IpCountryEnum",
              "description": "IP localization",
              "fullType": "dedicated.server.IpCountryEnum",
              "name": "country",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Your organisation id to add on block informations",
              "fullType": "string",
              "name": "organisationId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicated.server.IpTypeOrderableEnum",
              "description": "The type of IP",
              "fullType": "dedicated.server.IpTypeOrderableEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "order:apiovh:dedicated/server/ip/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.IpBlockSizeEnum",
              "description": "IP block size",
              "fullType": "dedicated.server.IpBlockSizeEnum",
              "name": "blockSize",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.server.IpCountryEnum",
              "description": "IP localization",
              "fullType": "dedicated.server.IpCountryEnum",
              "name": "country",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Your organisation id to add on block informations",
              "fullType": "string",
              "name": "organisationId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "dedicated.server.IpTypeOrderableEnum",
              "description": "The type of IP",
              "fullType": "dedicated.server.IpTypeOrderableEnum",
              "name": "type",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/ip/{duration}"
    },
    {
      "description": "Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'ipMigration' option",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/ipMigration/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "The IP to move to this server",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "IP migration token",
              "fullType": "string",
              "name": "token",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/ipMigration"
    },
    {
      "description": "Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/ipMigration/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "The IP to move to this server",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "IP migration token",
              "fullType": "string",
              "name": "token",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "order:apiovh:dedicated/server/ipMigration/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "The IP to move to this server",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "IP migration token",
              "fullType": "string",
              "name": "token",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/ipMigration/{duration}"
    },
    {
      "description": "Order a kvmip express for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'kvmExpress' option",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/kvmExpress/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/kvmExpress"
    },
    {
      "description": "Order a kvmip express for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/kvmExpress/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "order:apiovh:dedicated/server/kvmExpress/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/kvmExpress/{duration}"
    },
    {
      "description": "Order a static IP for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'staticIP' option",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/staticIP/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.IpStaticCountryEnum",
              "description": "Ip localization",
              "fullType": "dedicated.server.IpStaticCountryEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/staticIP"
    },
    {
      "description": "Order a static IP for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/staticIP/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.IpStaticCountryEnum",
              "description": "Ip localization",
              "fullType": "dedicated.server.IpStaticCountryEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "order:apiovh:dedicated/server/staticIP/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.IpStaticCountryEnum",
              "description": "Ip localization",
              "fullType": "dedicated.server.IpStaticCountryEnum",
              "name": "country",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/staticIP/{duration}"
    },
    {
      "description": "Order an USB key for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'usbKey' option",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/usbKey/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.UsbKeyCapacityEnum",
              "description": "Capacity in gigabytes",
              "fullType": "dedicated.server.UsbKeyCapacityEnum",
              "name": "capacity",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/usbKey"
    },
    {
      "description": "Order an USB key for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:dedicated/server/usbKey/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.UsbKeyCapacityEnum",
              "description": "Capacity in gigabytes",
              "fullType": "dedicated.server.UsbKeyCapacityEnum",
              "name": "capacity",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "order:apiovh:dedicated/server/usbKey/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.UsbKeyCapacityEnum",
              "description": "Capacity in gigabytes",
              "fullType": "dedicated.server.UsbKeyCapacityEnum",
              "name": "capacity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/usbKey/{duration}"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-02-16 00:00:00 +0100 +0100",
            "deprecatedDate": "2023-01-16 00:00:00 +0100 +0100",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:order/license/cloudLinux/new/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.CloudLinuxVersionEnum",
              "description": "This license version",
              "fullType": "license.CloudLinuxVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/cloudLinux/new"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-02-16 00:00:00 +0100 +0100",
            "deprecatedDate": "2023-01-16 00:00:00 +0100 +0100",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:order/license/cloudLinux/new/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.CloudLinuxVersionEnum",
              "description": "This license version",
              "fullType": "license.CloudLinuxVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2023-02-16 00:00:00 +0100 +0100",
            "deprecatedDate": "2023-01-16 00:00:00 +0100 +0100",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:order/license/cloudLinux/new/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "license.CloudLinuxVersionEnum",
              "description": "This license version",
              "fullType": "license.CloudLinuxVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/cloudLinux/new/{duration}"
    },
    {
      "description": "Operations about the LICENSE service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/cpanel/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/cpanel"
    },
    {
      "description": "List available options for this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed options",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/cpanel/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/cpanel/{serviceName}"
    },
    {
      "description": "Upgrade this license version",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'upgrade' option",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/cpanel/upgrade/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "license.OrderableCpanelVersionEnum",
              "description": "Wanted new version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/cpanel/{serviceName}/upgrade"
    },
    {
      "description": "Upgrade this license version",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/cpanel/upgrade/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "license.OrderableCpanelVersionEnum",
              "description": "Wanted new version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "order:apiovh:license/cpanel/upgrade/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableCpanelVersionEnum",
              "description": "Wanted new version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/cpanel/{serviceName}/upgrade/{duration}"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:order/license/cpanel/new/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderableCpanelVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/cpanel/new"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:order/license/cpanel/new/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderableCpanelVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:order/license/cpanel/new/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.OrderableCpanelVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/cpanel/new/{duration}"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-02-16 00:00:00 +0100 +0100",
            "deprecatedDate": "2023-01-16 00:00:00 +0100 +0100",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:order/license/directadmin/new/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderableDirectAdminVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableDirectAdminVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/directadmin/new"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-02-16 00:00:00 +0100 +0100",
            "deprecatedDate": "2023-01-16 00:00:00 +0100 +0100",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:order/license/directadmin/new/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderableDirectAdminVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableDirectAdminVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2023-02-16 00:00:00 +0100 +0100",
            "deprecatedDate": "2023-01-16 00:00:00 +0100 +0100",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:order/license/directadmin/new/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.OrderableDirectAdminVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableDirectAdminVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/directadmin/new/{duration}"
    },
    {
      "description": "Operations about the LICENSE service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/plesk/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/plesk"
    },
    {
      "description": "List available options for this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed options",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/plesk/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Plesk license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/plesk/{serviceName}"
    },
    {
      "description": "Upgrade this license with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'upgrade' option",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/plesk/upgrade/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Plesk license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "license.OrderableAntispamEnum",
              "description": "The antispam currently enabled on this Plesk License",
              "fullType": "license.OrderableAntispamEnum",
              "name": "antispam",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderableAntivirusEnum",
              "description": "The antivirus to enable on this Plesk license",
              "fullType": "license.OrderableAntivirusEnum",
              "name": "antivirus",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.PleskApplicationSetEnum",
              "description": "Wanted application set",
              "fullType": "license.PleskApplicationSetEnum",
              "name": "applicationSet",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "description": "This license domain number",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "name": "domainNumber",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "description": "The amount (between 0 and 5) of language pack numbers to include in this licences",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "name": "languagePackNumber",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "powerpack current activation state on your license",
              "fullType": "boolean",
              "name": "powerpack",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Reseller management option activation",
              "fullType": "boolean",
              "name": "resellerManagement",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.PleskVersionEnum",
              "description": "This license version",
              "fullType": "license.PleskVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "WordpressToolkit option activation",
              "fullType": "boolean",
              "name": "wordpressToolkit",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/plesk/{serviceName}/upgrade"
    },
    {
      "description": "Upgrade this license with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/plesk/upgrade/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Plesk license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "license.OrderableAntispamEnum",
              "description": "The antispam currently enabled on this Plesk License",
              "fullType": "license.OrderableAntispamEnum",
              "name": "antispam",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderableAntivirusEnum",
              "description": "The antivirus to enable on this Plesk license",
              "fullType": "license.OrderableAntivirusEnum",
              "name": "antivirus",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.PleskApplicationSetEnum",
              "description": "Wanted application set",
              "fullType": "license.PleskApplicationSetEnum",
              "name": "applicationSet",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "description": "This license domain number",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "name": "domainNumber",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "description": "The amount (between 0 and 5) of language pack numbers to include in this licences",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "name": "languagePackNumber",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "powerpack current activation state on your license",
              "fullType": "boolean",
              "name": "powerpack",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Reseller management option activation",
              "fullType": "boolean",
              "name": "resellerManagement",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.PleskVersionEnum",
              "description": "This license version",
              "fullType": "license.PleskVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "WordpressToolkit option activation",
              "fullType": "boolean",
              "name": "wordpressToolkit",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "order:apiovh:license/plesk/upgrade/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableAntispamEnum",
              "description": "The antispam currently enabled on this Plesk License",
              "fullType": "license.OrderableAntispamEnum",
              "name": "antispam",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.OrderableAntivirusEnum",
              "description": "The antivirus to enable on this Plesk license",
              "fullType": "license.OrderableAntivirusEnum",
              "name": "antivirus",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.PleskApplicationSetEnum",
              "description": "Wanted application set",
              "fullType": "license.PleskApplicationSetEnum",
              "name": "applicationSet",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "description": "This license domain number",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "name": "domainNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "description": "The amount (between 0 and 5) of language pack numbers to include in this licences",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "name": "languagePackNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "powerpack current activation state on your license",
              "fullType": "boolean",
              "name": "powerpack",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Reseller management option activation",
              "fullType": "boolean",
              "name": "resellerManagement",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.PleskVersionEnum",
              "description": "This license version",
              "fullType": "license.PleskVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "WordpressToolkit option activation",
              "fullType": "boolean",
              "name": "wordpressToolkit",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Plesk license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/plesk/{serviceName}/upgrade/{duration}"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:order/license/plesk/new/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableAntivirusEnum",
              "description": "The antivirus to enable on this Plesk license",
              "fullType": "license.OrderableAntivirusEnum",
              "name": "antivirus",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.PleskApplicationSetEnum",
              "description": "Wanted application set",
              "fullType": "license.PleskApplicationSetEnum",
              "name": "applicationSet",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "description": "This license domain number",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "name": "domainNumber",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "description": "The amount of language pack numbers to include in this licences",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "name": "languagePackNumber",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "powerpack current activation state on your license",
              "fullType": "boolean",
              "name": "powerpack",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Reseller management option activation",
              "fullType": "boolean",
              "name": "resellerManagement",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.PleskVersionEnum",
              "description": "This license version",
              "fullType": "license.PleskVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "WordpressToolkit option activation",
              "fullType": "boolean",
              "name": "wordpressToolkit",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/plesk/new"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:order/license/plesk/new/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "license.OrderableAntivirusEnum",
              "description": "The antivirus to enable on this Plesk license",
              "fullType": "license.OrderableAntivirusEnum",
              "name": "antivirus",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.PleskApplicationSetEnum",
              "description": "Wanted application set",
              "fullType": "license.PleskApplicationSetEnum",
              "name": "applicationSet",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "description": "This license domain number",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "name": "domainNumber",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "description": "The amount of language pack numbers to include in this licences",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "name": "languagePackNumber",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "powerpack current activation state on your license",
              "fullType": "boolean",
              "name": "powerpack",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Reseller management option activation",
              "fullType": "boolean",
              "name": "resellerManagement",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.PleskVersionEnum",
              "description": "This license version",
              "fullType": "license.PleskVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "WordpressToolkit option activation",
              "fullType": "boolean",
              "name": "wordpressToolkit",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:order/license/plesk/new/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableAntivirusEnum",
              "description": "The antivirus to enable on this Plesk license",
              "fullType": "license.OrderableAntivirusEnum",
              "name": "antivirus",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.PleskApplicationSetEnum",
              "description": "Wanted application set",
              "fullType": "license.PleskApplicationSetEnum",
              "name": "applicationSet",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "description": "This license domain number",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "name": "domainNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "description": "The amount of language pack numbers to include in this licences",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "name": "languagePackNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "powerpack current activation state on your license",
              "fullType": "boolean",
              "name": "powerpack",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Reseller management option activation",
              "fullType": "boolean",
              "name": "resellerManagement",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.PleskVersionEnum",
              "description": "This license version",
              "fullType": "license.PleskVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "WordpressToolkit option activation",
              "fullType": "boolean",
              "name": "wordpressToolkit",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/plesk/new/{duration}"
    },
    {
      "description": "Operations about the LICENSE service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/sqlserver/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/sqlserver"
    },
    {
      "description": "List available options for this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed options",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/sqlserver/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your SQL Server license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/sqlserver/{serviceName}"
    },
    {
      "description": "Upgrade this license with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'upgrade' option",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/sqlserver/upgrade/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your SQL Server license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "license.SqlServerVersionEnum",
              "description": "This license version",
              "fullType": "license.SqlServerVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/sqlserver/{serviceName}/upgrade"
    },
    {
      "description": "Upgrade this license with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/sqlserver/upgrade/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your SQL Server license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "license.SqlServerVersionEnum",
              "description": "This license version",
              "fullType": "license.SqlServerVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "order:apiovh:license/sqlserver/upgrade/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.SqlServerVersionEnum",
              "description": "This license version",
              "fullType": "license.SqlServerVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your SQL Server license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/sqlserver/{serviceName}/upgrade/{duration}"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:order/license/sqlserver/new/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.SqlServerVersionEnum",
              "description": "This license version",
              "fullType": "license.SqlServerVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/sqlserver/new"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:order/license/sqlserver/new/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.SqlServerVersionEnum",
              "description": "This license version",
              "fullType": "license.SqlServerVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:order/license/sqlserver/new/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "license.SqlServerVersionEnum",
              "description": "This license version",
              "fullType": "license.SqlServerVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/sqlserver/new/{duration}"
    },
    {
      "description": "Operations about the LICENSE service",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-02-16 00:00:00 +0100 +0100",
            "deprecatedDate": "2023-01-16 00:00:00 +0100 +0100",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/virtuozzo/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/virtuozzo"
    },
    {
      "description": "List available options for this service",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-02-16 00:00:00 +0100 +0100",
            "deprecatedDate": "2023-01-16 00:00:00 +0100 +0100",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get allowed options",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/virtuozzo/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/virtuozzo/{serviceName}"
    },
    {
      "description": "Upgrade this license with some given options",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-02-16 00:00:00 +0100 +0100",
            "deprecatedDate": "2023-01-16 00:00:00 +0100 +0100",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'upgrade' option",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/virtuozzo/upgrade/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "description": "How much container is this license able to manage ...",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "name": "containerNumber",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/virtuozzo/{serviceName}/upgrade"
    },
    {
      "description": "Upgrade this license with some given options",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-02-16 00:00:00 +0100 +0100",
            "deprecatedDate": "2023-01-16 00:00:00 +0100 +0100",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/virtuozzo/upgrade/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "description": "How much container is this license able to manage ...",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "name": "containerNumber",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2023-02-16 00:00:00 +0100 +0100",
            "deprecatedDate": "2023-01-16 00:00:00 +0100 +0100",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "order:apiovh:license/virtuozzo/upgrade/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "description": "How much container is this license able to manage ...",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "name": "containerNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/virtuozzo/{serviceName}/upgrade/{duration}"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-02-16 00:00:00 +0100 +0100",
            "deprecatedDate": "2023-01-16 00:00:00 +0100 +0100",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:order/license/virtuozzo/new/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "description": "How much container is this license able to manage ...",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "name": "containerNumber",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderableVirtuozzoVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableVirtuozzoVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/virtuozzo/new"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-02-16 00:00:00 +0100 +0100",
            "deprecatedDate": "2023-01-16 00:00:00 +0100 +0100",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:order/license/virtuozzo/new/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "description": "How much container is this license able to manage ...",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "name": "containerNumber",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderableVirtuozzoVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableVirtuozzoVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2023-02-16 00:00:00 +0100 +0100",
            "deprecatedDate": "2023-01-16 00:00:00 +0100 +0100",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:order/license/virtuozzo/new/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "description": "How much container is this license able to manage ...",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "name": "containerNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.OrderableVirtuozzoVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableVirtuozzoVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/virtuozzo/new/{duration}"
    },
    {
      "description": "Operations about the LICENSE service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/windows/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/windows"
    },
    {
      "description": "List available options for this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed options",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/windows/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Windows license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/windows/{serviceName}"
    },
    {
      "description": "Upgrade this license with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'upgrade' option",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/windows/upgrade/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Windows license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "license.WindowsSqlVersionEnum",
              "description": "The SQL Server version to enable on this license Windows license",
              "fullType": "license.WindowsSqlVersionEnum",
              "name": "sqlVersion",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.WindowsOsVersionEnum",
              "description": "The windows version you want to enable on your windows license",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/windows/{serviceName}/upgrade"
    },
    {
      "description": "Upgrade this license with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:license/windows/upgrade/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Windows license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "license.WindowsSqlVersionEnum",
              "description": "The SQL Server version to enable on this license Windows license",
              "fullType": "license.WindowsSqlVersionEnum",
              "name": "sqlVersion",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.WindowsOsVersionEnum",
              "description": "The windows version you want to enable on your windows license",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "order:apiovh:license/windows/upgrade/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.WindowsSqlVersionEnum",
              "description": "The SQL Server version to enable on this license Windows license",
              "fullType": "license.WindowsSqlVersionEnum",
              "name": "sqlVersion",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.WindowsOsVersionEnum",
              "description": "The windows version you want to enable on your windows license",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Windows license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/windows/{serviceName}/upgrade/{duration}"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:order/license/windows/new/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.WindowsSqlVersionEnum",
              "description": "The SQL Server version to enable on this license Windows license",
              "fullType": "license.WindowsSqlVersionEnum",
              "name": "sqlVersion",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.WindowsOsVersionEnum",
              "description": "This license version",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/windows/new"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:order/license/windows/new/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.WindowsSqlVersionEnum",
              "description": "The SQL Server version to enable on this license Windows license",
              "fullType": "license.WindowsSqlVersionEnum",
              "name": "sqlVersion",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.WindowsOsVersionEnum",
              "description": "This license version",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:order/license/windows/new/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.WindowsSqlVersionEnum",
              "description": "The SQL Server version to enable on this license Windows license",
              "fullType": "license.WindowsSqlVersionEnum",
              "name": "sqlVersion",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.WindowsOsVersionEnum",
              "description": "This license version",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/windows/new/{duration}"
    },
    {
      "description": "Operations about the VEEAMCC service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:veeamCloudConnect/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/veeamCloudConnect"
    },
    {
      "description": "List available options for this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed options",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:veeamCloudConnect/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/veeamCloudConnect/{serviceName}"
    },
    {
      "description": "Order an upgrade upon your Veeam Cloud Connect account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'upgrade' option",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:veeamCloudConnect/upgrade/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "veeamCloudConnect.Offer",
              "description": "The offer on which you want to be upgraded",
              "fullType": "veeamCloudConnect.Offer",
              "name": "offer",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/veeamCloudConnect/{serviceName}/upgrade"
    },
    {
      "description": "Order an upgrade upon your Veeam Cloud Connect account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            "order:apiovh:veeamCloudConnect/upgrade/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "veeamCloudConnect.Offer",
              "description": "The offer on which you want to be upgraded",
              "fullType": "veeamCloudConnect.Offer",
              "name": "offer",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            "order:apiovh:veeamCloudConnect/upgrade/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "veeamCloudConnect.Offer",
              "description": "The offer on which you want to be upgraded",
              "fullType": "veeamCloudConnect.Offer",
              "name": "offer",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/veeamCloudConnect/{serviceName}/upgrade/{duration}"
    }
  ],
  "basePath": "https://ca.api.soyoustart.com/1.0",
  "models": {
    "complexType.SafeKeyValue<T>": {
      "description": "Key and value, with proper key strings",
      "generics": [
        "T"
      ],
      "id": "SafeKeyValue",
      "namespace": "complexType",
      "properties": {
        "key": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "fullType": "T",
          "readOnly": true,
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
    "dedicated.server.BackupStorageCapacityEnum": {
      "description": "Different backup storage capacity in gigabytes",
      "enum": [
        "1000",
        "10000",
        "500",
        "5000"
      ],
      "enumType": "long",
      "id": "BackupStorageCapacityEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.FirewallModelEnum": {
      "description": "Firewall model name",
      "enum": [
        "asa5505",
        "asa5510",
        "asa5520"
      ],
      "enumType": "string",
      "id": "FirewallModelEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.IpBlockSizeEnum": {
      "description": "IP block size",
      "enum": [
        "1",
        "128",
        "16",
        "256",
        "32",
        "4",
        "64",
        "8"
      ],
      "enumType": "long",
      "id": "IpBlockSizeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.IpCountryEnum": {
      "description": "Available localization for this static IP",
      "enum": [
        "au",
        "be",
        "ca",
        "cz",
        "de",
        "es",
        "fi",
        "fr",
        "ie",
        "in",
        "it",
        "lt",
        "nl",
        "pl",
        "pt",
        "sg",
        "uk",
        "us"
      ],
      "enumType": "coreTypes.CountryEnum",
      "id": "IpCountryEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.IpStaticCountryEnum": {
      "description": "Available localization for this static IP",
      "enum": [
        "be",
        "cz",
        "de",
        "es",
        "fi",
        "fr",
        "ie",
        "it",
        "lt",
        "nl",
        "pl",
        "pt",
        "uk"
      ],
      "enumType": "string",
      "id": "IpStaticCountryEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.IpTypeOrderableEnum": {
      "description": "Orderable IP type",
      "enum": [
        "failover",
        "static",
        "unshielded"
      ],
      "enumType": "string",
      "id": "IpTypeOrderableEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.OrderableSysFeatureEnum": {
      "description": "Dedicated server orderable features",
      "enum": [
        "backupProtocol",
        "monitoring"
      ],
      "enumType": "string",
      "id": "OrderableSysFeatureEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.SupportLevelOrderableEnum": {
      "description": "distincts support level",
      "enum": [
        "critical",
        "fastpath",
        "gs"
      ],
      "enumType": "string",
      "id": "SupportLevelOrderableEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.UsbKeyCapacityEnum": {
      "description": " Different USB key capacity in gigabytes",
      "enum": [
        "128",
        "16",
        "256",
        "32",
        "64"
      ],
      "enumType": "long",
      "id": "UsbKeyCapacityEnum",
      "namespace": "dedicated.server"
    },
    "license.CloudLinuxVersionEnum": {
      "description": "All versions for CloudLinux product",
      "enum": [
        "SINGLE",
        "WITH_CPANEL",
        "WITH_PLESK12",
        "cloudlinux-license"
      ],
      "enumType": "string",
      "id": "CloudLinuxVersionEnum",
      "namespace": "license"
    },
    "license.LicenseTypeEnum": {
      "description": "Possible values for license type",
      "enum": [
        "dedicated",
        "dedicatedCloud",
        "dedicatedFailover",
        "failover",
        "vm",
        "vps",
        "vps_ceph",
        "vps_classic",
        "vps_cloud",
        "vps_cloud_2016",
        "vps_ssd"
      ],
      "enumType": "string",
      "id": "LicenseTypeEnum",
      "namespace": "license"
    },
    "license.OrderableAntispamEnum": {
      "description": "All antispam available for Plesk products",
      "enum": [
        "SPAM_ASSASSIN"
      ],
      "enumType": "string",
      "id": "OrderableAntispamEnum",
      "namespace": "license"
    },
    "license.OrderableAntivirusEnum": {
      "description": "All antivirus available for Plesk products",
      "enum": [
        "DR_WEB",
        "KASPERSKY_UNLIMITED_MAILBOXES",
        "kaspersky"
      ],
      "enumType": "string",
      "id": "OrderableAntivirusEnum",
      "namespace": "license"
    },
    "license.OrderableCpanelVersionEnum": {
      "description": "All versions available for Cpanel products",
      "enum": [
        "VERSION_11_FOR_LINUX",
        "VERSION_11_FOR_VIRTUOZZO",
        "VERSION_11_FOR_VPS",
        "cpanel-license-admin-cloud-accounts",
        "cpanel-license-plus-cloud-accounts",
        "cpanel-license-premier-cloud-100-accounts",
        "cpanel-license-premier-cloud-1000-accounts",
        "cpanel-license-premier-cloud-10000-accounts",
        "cpanel-license-premier-cloud-1100-accounts",
        "cpanel-license-premier-cloud-1200-accounts",
        "cpanel-license-premier-cloud-1300-accounts",
        "cpanel-license-premier-cloud-1400-accounts",
        "cpanel-license-premier-cloud-150-accounts",
        "cpanel-license-premier-cloud-1500-accounts",
        "cpanel-license-premier-cloud-1600-accounts",
        "cpanel-license-premier-cloud-1700-accounts",
        "cpanel-license-premier-cloud-1800-accounts",
        "cpanel-license-premier-cloud-1900-accounts",
        "cpanel-license-premier-cloud-200-accounts",
        "cpanel-license-premier-cloud-2000-accounts",
        "cpanel-license-premier-cloud-2100-accounts",
        "cpanel-license-premier-cloud-2200-accounts",
        "cpanel-license-premier-cloud-2300-accounts",
        "cpanel-license-premier-cloud-2400-accounts",
        "cpanel-license-premier-cloud-250-accounts",
        "cpanel-license-premier-cloud-2500-accounts",
        "cpanel-license-premier-cloud-2600-accounts",
        "cpanel-license-premier-cloud-2700-accounts",
        "cpanel-license-premier-cloud-2800-accounts",
        "cpanel-license-premier-cloud-2900-accounts",
        "cpanel-license-premier-cloud-300-accounts",
        "cpanel-license-premier-cloud-3000-accounts",
        "cpanel-license-premier-cloud-3100-accounts",
        "cpanel-license-premier-cloud-3200-accounts",
        "cpanel-license-premier-cloud-3300-accounts",
        "cpanel-license-premier-cloud-3400-accounts",
        "cpanel-license-premier-cloud-3500-accounts",
        "cpanel-license-premier-cloud-3600-accounts",
        "cpanel-license-premier-cloud-3700-accounts",
        "cpanel-license-premier-cloud-3800-accounts",
        "cpanel-license-premier-cloud-3900-accounts",
        "cpanel-license-premier-cloud-400-accounts",
        "cpanel-license-premier-cloud-4000-accounts",
        "cpanel-license-premier-cloud-4100-accounts",
        "cpanel-license-premier-cloud-4200-accounts",
        "cpanel-license-premier-cloud-4300-accounts",
        "cpanel-license-premier-cloud-4400-accounts",
        "cpanel-license-premier-cloud-4500-accounts",
        "cpanel-license-premier-cloud-4600-accounts",
        "cpanel-license-premier-cloud-4700-accounts",
        "cpanel-license-premier-cloud-4800-accounts",
        "cpanel-license-premier-cloud-4900-accounts",
        "cpanel-license-premier-cloud-500-accounts",
        "cpanel-license-premier-cloud-5000-accounts",
        "cpanel-license-premier-cloud-5100-accounts",
        "cpanel-license-premier-cloud-5200-accounts",
        "cpanel-license-premier-cloud-5300-accounts",
        "cpanel-license-premier-cloud-5400-accounts",
        "cpanel-license-premier-cloud-5500-accounts",
        "cpanel-license-premier-cloud-5600-accounts",
        "cpanel-license-premier-cloud-5700-accounts",
        "cpanel-license-premier-cloud-5800-accounts",
        "cpanel-license-premier-cloud-5900-accounts",
        "cpanel-license-premier-cloud-600-accounts",
        "cpanel-license-premier-cloud-6000-accounts",
        "cpanel-license-premier-cloud-6100-accounts",
        "cpanel-license-premier-cloud-6200-accounts",
        "cpanel-license-premier-cloud-6300-accounts",
        "cpanel-license-premier-cloud-6400-accounts",
        "cpanel-license-premier-cloud-6500-accounts",
        "cpanel-license-premier-cloud-6600-accounts",
        "cpanel-license-premier-cloud-6700-accounts",
        "cpanel-license-premier-cloud-6800-accounts",
        "cpanel-license-premier-cloud-6900-accounts",
        "cpanel-license-premier-cloud-700-accounts",
        "cpanel-license-premier-cloud-7000-accounts",
        "cpanel-license-premier-cloud-7100-accounts",
        "cpanel-license-premier-cloud-7200-accounts",
        "cpanel-license-premier-cloud-7300-accounts",
        "cpanel-license-premier-cloud-7400-accounts",
        "cpanel-license-premier-cloud-7500-accounts",
        "cpanel-license-premier-cloud-7600-accounts",
        "cpanel-license-premier-cloud-7700-accounts",
        "cpanel-license-premier-cloud-7800-accounts",
        "cpanel-license-premier-cloud-7900-accounts",
        "cpanel-license-premier-cloud-800-accounts",
        "cpanel-license-premier-cloud-8000-accounts",
        "cpanel-license-premier-cloud-8100-accounts",
        "cpanel-license-premier-cloud-8200-accounts",
        "cpanel-license-premier-cloud-8300-accounts",
        "cpanel-license-premier-cloud-8400-accounts",
        "cpanel-license-premier-cloud-8500-accounts",
        "cpanel-license-premier-cloud-8600-accounts",
        "cpanel-license-premier-cloud-8700-accounts",
        "cpanel-license-premier-cloud-8800-accounts",
        "cpanel-license-premier-cloud-8900-accounts",
        "cpanel-license-premier-cloud-900-accounts",
        "cpanel-license-premier-cloud-9000-accounts",
        "cpanel-license-premier-cloud-9100-accounts",
        "cpanel-license-premier-cloud-9200-accounts",
        "cpanel-license-premier-cloud-9300-accounts",
        "cpanel-license-premier-cloud-9400-accounts",
        "cpanel-license-premier-cloud-9500-accounts",
        "cpanel-license-premier-cloud-9600-accounts",
        "cpanel-license-premier-cloud-9700-accounts",
        "cpanel-license-premier-cloud-9800-accounts",
        "cpanel-license-premier-cloud-9900-accounts",
        "cpanel-license-premier-metal-100-accounts",
        "cpanel-license-premier-metal-1000-accounts",
        "cpanel-license-premier-metal-10000-accounts",
        "cpanel-license-premier-metal-1100-accounts",
        "cpanel-license-premier-metal-1200-accounts",
        "cpanel-license-premier-metal-1300-accounts",
        "cpanel-license-premier-metal-1400-accounts",
        "cpanel-license-premier-metal-150-accounts",
        "cpanel-license-premier-metal-1500-accounts",
        "cpanel-license-premier-metal-1600-accounts",
        "cpanel-license-premier-metal-1700-accounts",
        "cpanel-license-premier-metal-1800-accounts",
        "cpanel-license-premier-metal-1900-accounts",
        "cpanel-license-premier-metal-200-accounts",
        "cpanel-license-premier-metal-2000-accounts",
        "cpanel-license-premier-metal-2100-accounts",
        "cpanel-license-premier-metal-2200-accounts",
        "cpanel-license-premier-metal-2300-accounts",
        "cpanel-license-premier-metal-2400-accounts",
        "cpanel-license-premier-metal-250-accounts",
        "cpanel-license-premier-metal-2500-accounts",
        "cpanel-license-premier-metal-2600-accounts",
        "cpanel-license-premier-metal-2700-accounts",
        "cpanel-license-premier-metal-2800-accounts",
        "cpanel-license-premier-metal-2900-accounts",
        "cpanel-license-premier-metal-300-accounts",
        "cpanel-license-premier-metal-3000-accounts",
        "cpanel-license-premier-metal-3100-accounts",
        "cpanel-license-premier-metal-3200-accounts",
        "cpanel-license-premier-metal-3300-accounts",
        "cpanel-license-premier-metal-3400-accounts",
        "cpanel-license-premier-metal-3500-accounts",
        "cpanel-license-premier-metal-3600-accounts",
        "cpanel-license-premier-metal-3700-accounts",
        "cpanel-license-premier-metal-3800-accounts",
        "cpanel-license-premier-metal-3900-accounts",
        "cpanel-license-premier-metal-400-accounts",
        "cpanel-license-premier-metal-4000-accounts",
        "cpanel-license-premier-metal-4100-accounts",
        "cpanel-license-premier-metal-4200-accounts",
        "cpanel-license-premier-metal-4300-accounts",
        "cpanel-license-premier-metal-4400-accounts",
        "cpanel-license-premier-metal-4500-accounts",
        "cpanel-license-premier-metal-4600-accounts",
        "cpanel-license-premier-metal-4700-accounts",
        "cpanel-license-premier-metal-4800-accounts",
        "cpanel-license-premier-metal-4900-accounts",
        "cpanel-license-premier-metal-500-accounts",
        "cpanel-license-premier-metal-5000-accounts",
        "cpanel-license-premier-metal-5100-accounts",
        "cpanel-license-premier-metal-5200-accounts",
        "cpanel-license-premier-metal-5300-accounts",
        "cpanel-license-premier-metal-5400-accounts",
        "cpanel-license-premier-metal-5500-accounts",
        "cpanel-license-premier-metal-5600-accounts",
        "cpanel-license-premier-metal-5700-accounts",
        "cpanel-license-premier-metal-5800-accounts",
        "cpanel-license-premier-metal-5900-accounts",
        "cpanel-license-premier-metal-600-accounts",
        "cpanel-license-premier-metal-6000-accounts",
        "cpanel-license-premier-metal-6100-accounts",
        "cpanel-license-premier-metal-6200-accounts",
        "cpanel-license-premier-metal-6300-accounts",
        "cpanel-license-premier-metal-6400-accounts",
        "cpanel-license-premier-metal-6500-accounts",
        "cpanel-license-premier-metal-6600-accounts",
        "cpanel-license-premier-metal-6700-accounts",
        "cpanel-license-premier-metal-6800-accounts",
        "cpanel-license-premier-metal-6900-accounts",
        "cpanel-license-premier-metal-700-accounts",
        "cpanel-license-premier-metal-7000-accounts",
        "cpanel-license-premier-metal-7100-accounts",
        "cpanel-license-premier-metal-7200-accounts",
        "cpanel-license-premier-metal-7300-accounts",
        "cpanel-license-premier-metal-7400-accounts",
        "cpanel-license-premier-metal-7500-accounts",
        "cpanel-license-premier-metal-7600-accounts",
        "cpanel-license-premier-metal-7700-accounts",
        "cpanel-license-premier-metal-7800-accounts",
        "cpanel-license-premier-metal-7900-accounts",
        "cpanel-license-premier-metal-800-accounts",
        "cpanel-license-premier-metal-8000-accounts",
        "cpanel-license-premier-metal-8100-accounts",
        "cpanel-license-premier-metal-8200-accounts",
        "cpanel-license-premier-metal-8300-accounts",
        "cpanel-license-premier-metal-8400-accounts",
        "cpanel-license-premier-metal-8500-accounts",
        "cpanel-license-premier-metal-8600-accounts",
        "cpanel-license-premier-metal-8700-accounts",
        "cpanel-license-premier-metal-8800-accounts",
        "cpanel-license-premier-metal-8900-accounts",
        "cpanel-license-premier-metal-900-accounts",
        "cpanel-license-premier-metal-9000-accounts",
        "cpanel-license-premier-metal-9100-accounts",
        "cpanel-license-premier-metal-9200-accounts",
        "cpanel-license-premier-metal-9300-accounts",
        "cpanel-license-premier-metal-9400-accounts",
        "cpanel-license-premier-metal-9500-accounts",
        "cpanel-license-premier-metal-9600-accounts",
        "cpanel-license-premier-metal-9700-accounts",
        "cpanel-license-premier-metal-9800-accounts",
        "cpanel-license-premier-metal-9900-accounts",
        "cpanel-license-pro-cloud-accounts",
        "cpanel-license-solo-cloud-accounts",
        "cpanel-license-solo-metal-accounts",
        "cpanel-license-version-11",
        "cpanel-license-version-11-for-virtuozzo",
        "cpanel-license-version-11-for-vps",
        "version-admin-cloud",
        "version-plus-cloud",
        "version-premier-cloud-100",
        "version-premier-cloud-1000",
        "version-premier-cloud-10000",
        "version-premier-cloud-1100",
        "version-premier-cloud-1200",
        "version-premier-cloud-1300",
        "version-premier-cloud-1400",
        "version-premier-cloud-150",
        "version-premier-cloud-1500",
        "version-premier-cloud-1600",
        "version-premier-cloud-1700",
        "version-premier-cloud-1800",
        "version-premier-cloud-1900",
        "version-premier-cloud-200",
        "version-premier-cloud-2000",
        "version-premier-cloud-2100",
        "version-premier-cloud-2200",
        "version-premier-cloud-2300",
        "version-premier-cloud-2400",
        "version-premier-cloud-250",
        "version-premier-cloud-2500",
        "version-premier-cloud-2600",
        "version-premier-cloud-2700",
        "version-premier-cloud-2800",
        "version-premier-cloud-2900",
        "version-premier-cloud-300",
        "version-premier-cloud-3000",
        "version-premier-cloud-3100",
        "version-premier-cloud-3200",
        "version-premier-cloud-3300",
        "version-premier-cloud-3400",
        "version-premier-cloud-3500",
        "version-premier-cloud-3600",
        "version-premier-cloud-3700",
        "version-premier-cloud-3800",
        "version-premier-cloud-3900",
        "version-premier-cloud-400",
        "version-premier-cloud-4000",
        "version-premier-cloud-4100",
        "version-premier-cloud-4200",
        "version-premier-cloud-4300",
        "version-premier-cloud-4400",
        "version-premier-cloud-4500",
        "version-premier-cloud-4600",
        "version-premier-cloud-4700",
        "version-premier-cloud-4800",
        "version-premier-cloud-4900",
        "version-premier-cloud-500",
        "version-premier-cloud-5000",
        "version-premier-cloud-5100",
        "version-premier-cloud-5200",
        "version-premier-cloud-5300",
        "version-premier-cloud-5400",
        "version-premier-cloud-5500",
        "version-premier-cloud-5600",
        "version-premier-cloud-5700",
        "version-premier-cloud-5800",
        "version-premier-cloud-5900",
        "version-premier-cloud-600",
        "version-premier-cloud-6000",
        "version-premier-cloud-6100",
        "version-premier-cloud-6200",
        "version-premier-cloud-6300",
        "version-premier-cloud-6400",
        "version-premier-cloud-6500",
        "version-premier-cloud-6600",
        "version-premier-cloud-6700",
        "version-premier-cloud-6800",
        "version-premier-cloud-6900",
        "version-premier-cloud-700",
        "version-premier-cloud-7000",
        "version-premier-cloud-7100",
        "version-premier-cloud-7200",
        "version-premier-cloud-7300",
        "version-premier-cloud-7400",
        "version-premier-cloud-7500",
        "version-premier-cloud-7600",
        "version-premier-cloud-7700",
        "version-premier-cloud-7800",
        "version-premier-cloud-7900",
        "version-premier-cloud-800",
        "version-premier-cloud-8000",
        "version-premier-cloud-8100",
        "version-premier-cloud-8200",
        "version-premier-cloud-8300",
        "version-premier-cloud-8400",
        "version-premier-cloud-8500",
        "version-premier-cloud-8600",
        "version-premier-cloud-8700",
        "version-premier-cloud-8800",
        "version-premier-cloud-8900",
        "version-premier-cloud-900",
        "version-premier-cloud-9000",
        "version-premier-cloud-9100",
        "version-premier-cloud-9200",
        "version-premier-cloud-9300",
        "version-premier-cloud-9400",
        "version-premier-cloud-9500",
        "version-premier-cloud-9600",
        "version-premier-cloud-9700",
        "version-premier-cloud-9800",
        "version-premier-cloud-9900",
        "version-premier-metal-100",
        "version-premier-metal-1000",
        "version-premier-metal-10000",
        "version-premier-metal-1100",
        "version-premier-metal-1200",
        "version-premier-metal-1300",
        "version-premier-metal-1400",
        "version-premier-metal-150",
        "version-premier-metal-1500",
        "version-premier-metal-1600",
        "version-premier-metal-1700",
        "version-premier-metal-1800",
        "version-premier-metal-1900",
        "version-premier-metal-200",
        "version-premier-metal-2000",
        "version-premier-metal-2100",
        "version-premier-metal-2200",
        "version-premier-metal-2300",
        "version-premier-metal-2400",
        "version-premier-metal-250",
        "version-premier-metal-2500",
        "version-premier-metal-2600",
        "version-premier-metal-2700",
        "version-premier-metal-2800",
        "version-premier-metal-2900",
        "version-premier-metal-300",
        "version-premier-metal-3000",
        "version-premier-metal-3100",
        "version-premier-metal-3200",
        "version-premier-metal-3300",
        "version-premier-metal-3400",
        "version-premier-metal-3500",
        "version-premier-metal-3600",
        "version-premier-metal-3700",
        "version-premier-metal-3800",
        "version-premier-metal-3900",
        "version-premier-metal-400",
        "version-premier-metal-4000",
        "version-premier-metal-4100",
        "version-premier-metal-4200",
        "version-premier-metal-4300",
        "version-premier-metal-4400",
        "version-premier-metal-4500",
        "version-premier-metal-4600",
        "version-premier-metal-4700",
        "version-premier-metal-4800",
        "version-premier-metal-4900",
        "version-premier-metal-500",
        "version-premier-metal-5000",
        "version-premier-metal-5100",
        "version-premier-metal-5200",
        "version-premier-metal-5300",
        "version-premier-metal-5400",
        "version-premier-metal-5500",
        "version-premier-metal-5600",
        "version-premier-metal-5700",
        "version-premier-metal-5800",
        "version-premier-metal-5900",
        "version-premier-metal-600",
        "version-premier-metal-6000",
        "version-premier-metal-6100",
        "version-premier-metal-6200",
        "version-premier-metal-6300",
        "version-premier-metal-6400",
        "version-premier-metal-6500",
        "version-premier-metal-6600",
        "version-premier-metal-6700",
        "version-premier-metal-6800",
        "version-premier-metal-6900",
        "version-premier-metal-700",
        "version-premier-metal-7000",
        "version-premier-metal-7100",
        "version-premier-metal-7200",
        "version-premier-metal-7300",
        "version-premier-metal-7400",
        "version-premier-metal-7500",
        "version-premier-metal-7600",
        "version-premier-metal-7700",
        "version-premier-metal-7800",
        "version-premier-metal-7900",
        "version-premier-metal-800",
        "version-premier-metal-8000",
        "version-premier-metal-8100",
        "version-premier-metal-8200",
        "version-premier-metal-8300",
        "version-premier-metal-8400",
        "version-premier-metal-8500",
        "version-premier-metal-8600",
        "version-premier-metal-8700",
        "version-premier-metal-8800",
        "version-premier-metal-8900",
        "version-premier-metal-900",
        "version-premier-metal-9000",
        "version-premier-metal-9100",
        "version-premier-metal-9200",
        "version-premier-metal-9300",
        "version-premier-metal-9400",
        "version-premier-metal-9500",
        "version-premier-metal-9600",
        "version-premier-metal-9700",
        "version-premier-metal-9800",
        "version-premier-metal-9900",
        "version-pro-cloud",
        "version-solo-cloud",
        "version-solo-metal"
      ],
      "enumType": "string",
      "id": "OrderableCpanelVersionEnum",
      "namespace": "license"
    },
    "license.OrderableDirectAdminVersionEnum": {
      "description": "All versions available for DirectAdmin products",
      "enum": [
        "DIRECTADMIN_1",
        "directadmin-license"
      ],
      "enumType": "string",
      "id": "OrderableDirectAdminVersionEnum",
      "namespace": "license"
    },
    "license.OrderablePleskDomainNumberEnum": {
      "description": "All domain available for Plesk products",
      "enum": [
        "10",
        "100",
        "30",
        "300",
        "hostingsuite",
        "unlimited"
      ],
      "enumType": "string",
      "id": "OrderablePleskDomainNumberEnum",
      "namespace": "license"
    },
    "license.OrderablePleskLanguagePackEnum": {
      "description": "All language pack numbers available for Plesk products",
      "enum": [
        "1",
        "1-extra-language-for-plesk12",
        "2",
        "2-extra-languages-for-plesk12",
        "3",
        "3-extra-languages-for-plesk12",
        "4",
        "4-extra-languages-for-plesk12",
        "5",
        "5-extra-languages-for-plesk12",
        "unlimited",
        "unlimited-extra-languages-for-plesk12"
      ],
      "enumType": "string",
      "id": "OrderablePleskLanguagePackEnum",
      "namespace": "license"
    },
    "license.OrderableVirtuozzoContainerNumberEnum": {
      "description": "All quantities of container available for a Virtuozzo license",
      "enum": [
        "2_CPU_001_CONTAINER",
        "2_CPU_003_CONTAINER",
        "2_CPU_010_CONTAINER",
        "2_CPU_030_CONTAINER",
        "2_CPU_060_CONTAINER",
        "2_CPU_100_CONTAINER"
      ],
      "enumType": "string",
      "id": "OrderableVirtuozzoContainerNumberEnum",
      "namespace": "license"
    },
    "license.OrderableVirtuozzoVersionEnum": {
      "description": "All versions available for Virtuozzo products",
      "enum": [
        "VIRTUOZZO_CONTAINERS_4_FOR_LINUX",
        "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS",
        "virtuozzo-4",
        "virtuozzo-4-for-windows"
      ],
      "enumType": "string",
      "id": "OrderableVirtuozzoVersionEnum",
      "namespace": "license"
    },
    "license.PleskApplicationSetEnum": {
      "description": "Application set available for Plesk products",
      "enum": [
        "applicationpack",
        "developerpack",
        "power-pack-for-plesk12",
        "powerpack"
      ],
      "enumType": "string",
      "id": "PleskApplicationSetEnum",
      "namespace": "license"
    },
    "license.PleskVersionEnum": {
      "description": "All versions available for Plesk products",
      "enum": [
        "PLESK_10_AND_LATER",
        "PLESK_10_AND_LATER_FOR_KVM",
        "PLESK_10_AND_LATER_FOR_VMWARE",
        "PLESK_10_AND_LATER_FOR_VZ",
        "PLESK_10_AND_LATER_FOR_WIN",
        "PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE",
        "PLESK_10_AND_LATER_FOR_WIN_FOR_VZ",
        "PLESK_10_AND_LATER_FOR_WIN_FOR_XEN",
        "PLESK_10_AND_LATER_FOR_XEN",
        "PLESK_12_VPS_WEB_ADMIN",
        "PLESK_12_VPS_WEB_APP",
        "PLESK_12_VPS_WEB_HOST",
        "PLESK_12_VPS_WEB_HOST_CLNX",
        "PLESK_12_VPS_WEB_PRO",
        "PLESK_12_VPS_WEB_PRO_CLNX",
        "PLESK_12_WEB_ADMIN",
        "PLESK_12_WEB_APP",
        "PLESK_12_WEB_HOST",
        "PLESK_12_WEB_HOST_CLNX",
        "PLESK_12_WEB_PRO",
        "PLESK_12_WEB_PRO_CLNX",
        "PLESK_75_RELOADED",
        "PLESK_80",
        "PLESK_80_FOR_VZ",
        "PLESK_81_FOR_WIN",
        "PLESK_9",
        "PLESK_95",
        "PLESK_95_FOR_VZ",
        "PLESK_95_FOR_WIN",
        "PLESK_9_FOR_VZ",
        "PLESK_9_FOR_WIN",
        "PLESK_ONYX_VPS_WEB_ADMIN",
        "PLESK_ONYX_VPS_WEB_APP",
        "PLESK_ONYX_VPS_WEB_HOST",
        "PLESK_ONYX_VPS_WEB_HOST_CLNX",
        "PLESK_ONYX_VPS_WEB_PRO",
        "PLESK_ONYX_VPS_WEB_PRO_CLNX",
        "PLESK_ONYX_WEB_ADMIN",
        "PLESK_ONYX_WEB_APP",
        "PLESK_ONYX_WEB_HOST",
        "PLESK_ONYX_WEB_HOST_CLNX",
        "PLESK_ONYX_WEB_PRO",
        "PLESK_ONYX_WEB_PRO_CLNX",
        "plesk-12-webadmin",
        "plesk-12-webadmin-for-vps",
        "plesk-12-webhost",
        "plesk-12-webhost-for-vps",
        "plesk-12-webpro",
        "plesk-12-webpro-for-vps"
      ],
      "enumType": "string",
      "id": "PleskVersionEnum",
      "namespace": "license"
    },
    "license.SqlServerVersionEnum": {
      "description": "All versions for SQL Server product",
      "enum": [
        "SQL_SERVER_2008_STANDARD_EDITION_2_CPU",
        "SQL_SERVER_2008_STANDARD_EDITION_4_CPU",
        "SQL_SERVER_2008_WEB_EDITION_2_CPU",
        "SQL_SERVER_2008_WEB_EDITION_4_CPU",
        "SQL_SERVER_2012_STANDARD_EDITION_10_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_12_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_16_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_18_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_20_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_24_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_2_CPU",
        "SQL_SERVER_2012_STANDARD_EDITION_32_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_6_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_8_CORES",
        "SQL_SERVER_2012_WEB_EDITION_10_CORES",
        "SQL_SERVER_2012_WEB_EDITION_12_CORES",
        "SQL_SERVER_2012_WEB_EDITION_16_CORES",
        "SQL_SERVER_2012_WEB_EDITION_18_CORES",
        "SQL_SERVER_2012_WEB_EDITION_20_CORES",
        "SQL_SERVER_2012_WEB_EDITION_24_CORES",
        "SQL_SERVER_2012_WEB_EDITION_32_CORES",
        "SQL_SERVER_2012_WEB_EDITION_4_CORES",
        "SQL_SERVER_2012_WEB_EDITION_6_CORES",
        "SQL_SERVER_2012_WEB_EDITION_8_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_10_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_12_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_16_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_18_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_20_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_24_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_6_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_8_CORES",
        "SQL_SERVER_2014_WEB_EDITION_10_CORES",
        "SQL_SERVER_2014_WEB_EDITION_12_CORES",
        "SQL_SERVER_2014_WEB_EDITION_16_CORES",
        "SQL_SERVER_2014_WEB_EDITION_18_CORES",
        "SQL_SERVER_2014_WEB_EDITION_20_CORES",
        "SQL_SERVER_2014_WEB_EDITION_24_CORES",
        "SQL_SERVER_2014_WEB_EDITION_4_CORES",
        "SQL_SERVER_2014_WEB_EDITION_6_CORES",
        "SQL_SERVER_2014_WEB_EDITION_8_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_10_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_12_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_14_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_16_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_6_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_8_CORES",
        "SQL_SERVER_2016_WEB_EDITION_10_CORES",
        "SQL_SERVER_2016_WEB_EDITION_12_CORES",
        "SQL_SERVER_2016_WEB_EDITION_14_CORES",
        "SQL_SERVER_2016_WEB_EDITION_16_CORES",
        "SQL_SERVER_2016_WEB_EDITION_4_CORES",
        "SQL_SERVER_2016_WEB_EDITION_6_CORES",
        "SQL_SERVER_2016_WEB_EDITION_8_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_10_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_12_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_14_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_16_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_18_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_20_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_22_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_24_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_26_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_28_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_30_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_32_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_6_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_8_CORES",
        "SQL_SERVER_2017_WEB_EDITION_10_CORES",
        "SQL_SERVER_2017_WEB_EDITION_12_CORES",
        "SQL_SERVER_2017_WEB_EDITION_14_CORES",
        "SQL_SERVER_2017_WEB_EDITION_16_CORES",
        "SQL_SERVER_2017_WEB_EDITION_18_CORES",
        "SQL_SERVER_2017_WEB_EDITION_20_CORES",
        "SQL_SERVER_2017_WEB_EDITION_22_CORES",
        "SQL_SERVER_2017_WEB_EDITION_24_CORES",
        "SQL_SERVER_2017_WEB_EDITION_26_CORES",
        "SQL_SERVER_2017_WEB_EDITION_28_CORES",
        "SQL_SERVER_2017_WEB_EDITION_30_CORES",
        "SQL_SERVER_2017_WEB_EDITION_32_CORES",
        "SQL_SERVER_2017_WEB_EDITION_4_CORES",
        "SQL_SERVER_2017_WEB_EDITION_6_CORES",
        "SQL_SERVER_2017_WEB_EDITION_8_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_10_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_12_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_14_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_16_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_18_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_20_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_22_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_24_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_26_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_28_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_30_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_32_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_34_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_36_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_38_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_40_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_42_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_44_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_46_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_48_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_4_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_50_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_52_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_54_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_56_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_58_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_60_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_62_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_64_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_6_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_8_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_10_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_12_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_14_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_16_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_18_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_20_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_22_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_24_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_26_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_28_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_30_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_32_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_34_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_36_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_38_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_40_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_42_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_44_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_46_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_48_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_50_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_52_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_54_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_56_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_58_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_60_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_62_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_64_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_6_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_8_CORES",
        "SQL_SERVER_2019_WEB_EDITION_10_CORES",
        "SQL_SERVER_2019_WEB_EDITION_12_CORES",
        "SQL_SERVER_2019_WEB_EDITION_14_CORES",
        "SQL_SERVER_2019_WEB_EDITION_16_CORES",
        "SQL_SERVER_2019_WEB_EDITION_18_CORES",
        "SQL_SERVER_2019_WEB_EDITION_20_CORES",
        "SQL_SERVER_2019_WEB_EDITION_22_CORES",
        "SQL_SERVER_2019_WEB_EDITION_24_CORES",
        "SQL_SERVER_2019_WEB_EDITION_26_CORES",
        "SQL_SERVER_2019_WEB_EDITION_28_CORES",
        "SQL_SERVER_2019_WEB_EDITION_30_CORES",
        "SQL_SERVER_2019_WEB_EDITION_32_CORES",
        "SQL_SERVER_2019_WEB_EDITION_34_CORES",
        "SQL_SERVER_2019_WEB_EDITION_36_CORES",
        "SQL_SERVER_2019_WEB_EDITION_38_CORES",
        "SQL_SERVER_2019_WEB_EDITION_40_CORES",
        "SQL_SERVER_2019_WEB_EDITION_42_CORES",
        "SQL_SERVER_2019_WEB_EDITION_44_CORES",
        "SQL_SERVER_2019_WEB_EDITION_46_CORES",
        "SQL_SERVER_2019_WEB_EDITION_48_CORES",
        "SQL_SERVER_2019_WEB_EDITION_4_CORES",
        "SQL_SERVER_2019_WEB_EDITION_50_CORES",
        "SQL_SERVER_2019_WEB_EDITION_52_CORES",
        "SQL_SERVER_2019_WEB_EDITION_54_CORES",
        "SQL_SERVER_2019_WEB_EDITION_56_CORES",
        "SQL_SERVER_2019_WEB_EDITION_58_CORES",
        "SQL_SERVER_2019_WEB_EDITION_60_CORES",
        "SQL_SERVER_2019_WEB_EDITION_62_CORES",
        "SQL_SERVER_2019_WEB_EDITION_64_CORES",
        "SQL_SERVER_2019_WEB_EDITION_6_CORES",
        "SQL_SERVER_2019_WEB_EDITION_8_CORES",
        "sql-server-2008-license-standard-edition-2-cpu",
        "sql-server-2008-license-standard-edition-4-cpu",
        "sql-server-2008-license-web-edition-2-cpu",
        "sql-server-2008-license-web-edition-4-cpu",
        "sql-server-2012-license-standard-edition-10-cores",
        "sql-server-2012-license-standard-edition-12-cores",
        "sql-server-2012-license-standard-edition-16-cores",
        "sql-server-2012-license-standard-edition-18-cores",
        "sql-server-2012-license-standard-edition-2-cpu",
        "sql-server-2012-license-standard-edition-20-cores",
        "sql-server-2012-license-standard-edition-24-cores",
        "sql-server-2012-license-standard-edition-32-cores",
        "sql-server-2012-license-standard-edition-4-cores",
        "sql-server-2012-license-standard-edition-6-cores",
        "sql-server-2012-license-standard-edition-8-cores",
        "sql-server-2012-license-web-edition-10-cores",
        "sql-server-2012-license-web-edition-12-cores",
        "sql-server-2012-license-web-edition-16-cores",
        "sql-server-2012-license-web-edition-18-cores",
        "sql-server-2012-license-web-edition-20-cores",
        "sql-server-2012-license-web-edition-24-cores",
        "sql-server-2012-license-web-edition-32-cores",
        "sql-server-2012-license-web-edition-4-cores",
        "sql-server-2012-license-web-edition-6-cores",
        "sql-server-2012-license-web-edition-8-cores",
        "sql-server-2014-license-standard-edition-10-cores",
        "sql-server-2014-license-standard-edition-12-cores",
        "sql-server-2014-license-standard-edition-16-cores",
        "sql-server-2014-license-standard-edition-18-cores",
        "sql-server-2014-license-standard-edition-20-cores",
        "sql-server-2014-license-standard-edition-24-cores",
        "sql-server-2014-license-standard-edition-4-cores",
        "sql-server-2014-license-standard-edition-6-cores",
        "sql-server-2014-license-standard-edition-8-cores",
        "sql-server-2014-license-web-edition-10-cores",
        "sql-server-2014-license-web-edition-12-cores",
        "sql-server-2014-license-web-edition-16-cores",
        "sql-server-2014-license-web-edition-18-cores",
        "sql-server-2014-license-web-edition-20-cores",
        "sql-server-2014-license-web-edition-24-cores",
        "sql-server-2014-license-web-edition-4-cores",
        "sql-server-2014-license-web-edition-6-cores",
        "sql-server-2014-license-web-edition-8-cores",
        "sql-server-2016-license-standard-edition-10-cores",
        "sql-server-2016-license-standard-edition-12-cores",
        "sql-server-2016-license-standard-edition-14-cores",
        "sql-server-2016-license-standard-edition-16-cores",
        "sql-server-2016-license-standard-edition-4-cores",
        "sql-server-2016-license-standard-edition-6-cores",
        "sql-server-2016-license-standard-edition-8-cores",
        "sql-server-2016-license-web-edition-10-cores",
        "sql-server-2016-license-web-edition-12-cores",
        "sql-server-2016-license-web-edition-14-cores",
        "sql-server-2016-license-web-edition-16-cores",
        "sql-server-2016-license-web-edition-4-cores",
        "sql-server-2016-license-web-edition-6-cores",
        "sql-server-2016-license-web-edition-8-cores",
        "sql-server-2017-license-standard-edition-10-cores",
        "sql-server-2017-license-standard-edition-12-cores",
        "sql-server-2017-license-standard-edition-14-cores",
        "sql-server-2017-license-standard-edition-16-cores",
        "sql-server-2017-license-standard-edition-18-cores",
        "sql-server-2017-license-standard-edition-20-cores",
        "sql-server-2017-license-standard-edition-22-cores",
        "sql-server-2017-license-standard-edition-24-cores",
        "sql-server-2017-license-standard-edition-26-cores",
        "sql-server-2017-license-standard-edition-28-cores",
        "sql-server-2017-license-standard-edition-30-cores",
        "sql-server-2017-license-standard-edition-32-cores",
        "sql-server-2017-license-standard-edition-4-cores",
        "sql-server-2017-license-standard-edition-6-cores",
        "sql-server-2017-license-standard-edition-8-cores",
        "sql-server-2017-license-web-edition-10-cores",
        "sql-server-2017-license-web-edition-12-cores",
        "sql-server-2017-license-web-edition-14-cores",
        "sql-server-2017-license-web-edition-16-cores",
        "sql-server-2017-license-web-edition-18-cores",
        "sql-server-2017-license-web-edition-20-cores",
        "sql-server-2017-license-web-edition-22-cores",
        "sql-server-2017-license-web-edition-24-cores",
        "sql-server-2017-license-web-edition-26-cores",
        "sql-server-2017-license-web-edition-28-cores",
        "sql-server-2017-license-web-edition-30-cores",
        "sql-server-2017-license-web-edition-32-cores",
        "sql-server-2017-license-web-edition-4-cores",
        "sql-server-2017-license-web-edition-6-cores",
        "sql-server-2017-license-web-edition-8-cores",
        "sql-server-2019-license-enterprise-edition-10-cores",
        "sql-server-2019-license-enterprise-edition-12-cores",
        "sql-server-2019-license-enterprise-edition-14-cores",
        "sql-server-2019-license-enterprise-edition-16-cores",
        "sql-server-2019-license-enterprise-edition-18-cores",
        "sql-server-2019-license-enterprise-edition-20-cores",
        "sql-server-2019-license-enterprise-edition-22-cores",
        "sql-server-2019-license-enterprise-edition-24-cores",
        "sql-server-2019-license-enterprise-edition-26-cores",
        "sql-server-2019-license-enterprise-edition-28-cores",
        "sql-server-2019-license-enterprise-edition-30-cores",
        "sql-server-2019-license-enterprise-edition-32-cores",
        "sql-server-2019-license-enterprise-edition-34-cores",
        "sql-server-2019-license-enterprise-edition-36-cores",
        "sql-server-2019-license-enterprise-edition-38-cores",
        "sql-server-2019-license-enterprise-edition-4-cores",
        "sql-server-2019-license-enterprise-edition-40-cores",
        "sql-server-2019-license-enterprise-edition-42-cores",
        "sql-server-2019-license-enterprise-edition-44-cores",
        "sql-server-2019-license-enterprise-edition-46-cores",
        "sql-server-2019-license-enterprise-edition-48-cores",
        "sql-server-2019-license-enterprise-edition-50-cores",
        "sql-server-2019-license-enterprise-edition-52-cores",
        "sql-server-2019-license-enterprise-edition-54-cores",
        "sql-server-2019-license-enterprise-edition-56-cores",
        "sql-server-2019-license-enterprise-edition-58-cores",
        "sql-server-2019-license-enterprise-edition-6-cores",
        "sql-server-2019-license-enterprise-edition-60-cores",
        "sql-server-2019-license-enterprise-edition-62-cores",
        "sql-server-2019-license-enterprise-edition-64-cores",
        "sql-server-2019-license-enterprise-edition-8-cores",
        "sql-server-2019-license-standard-edition-10-cores",
        "sql-server-2019-license-standard-edition-12-cores",
        "sql-server-2019-license-standard-edition-14-cores",
        "sql-server-2019-license-standard-edition-16-cores",
        "sql-server-2019-license-standard-edition-18-cores",
        "sql-server-2019-license-standard-edition-20-cores",
        "sql-server-2019-license-standard-edition-22-cores",
        "sql-server-2019-license-standard-edition-24-cores",
        "sql-server-2019-license-standard-edition-26-cores",
        "sql-server-2019-license-standard-edition-28-cores",
        "sql-server-2019-license-standard-edition-30-cores",
        "sql-server-2019-license-standard-edition-32-cores",
        "sql-server-2019-license-standard-edition-34-cores",
        "sql-server-2019-license-standard-edition-36-cores",
        "sql-server-2019-license-standard-edition-38-cores",
        "sql-server-2019-license-standard-edition-4-cores",
        "sql-server-2019-license-standard-edition-40-cores",
        "sql-server-2019-license-standard-edition-42-cores",
        "sql-server-2019-license-standard-edition-44-cores",
        "sql-server-2019-license-standard-edition-46-cores",
        "sql-server-2019-license-standard-edition-48-cores",
        "sql-server-2019-license-standard-edition-50-cores",
        "sql-server-2019-license-standard-edition-52-cores",
        "sql-server-2019-license-standard-edition-54-cores",
        "sql-server-2019-license-standard-edition-56-cores",
        "sql-server-2019-license-standard-edition-58-cores",
        "sql-server-2019-license-standard-edition-6-cores",
        "sql-server-2019-license-standard-edition-60-cores",
        "sql-server-2019-license-standard-edition-62-cores",
        "sql-server-2019-license-standard-edition-64-cores",
        "sql-server-2019-license-standard-edition-8-cores",
        "sql-server-2019-license-web-edition-10-cores",
        "sql-server-2019-license-web-edition-12-cores",
        "sql-server-2019-license-web-edition-14-cores",
        "sql-server-2019-license-web-edition-16-cores",
        "sql-server-2019-license-web-edition-18-cores",
        "sql-server-2019-license-web-edition-20-cores",
        "sql-server-2019-license-web-edition-22-cores",
        "sql-server-2019-license-web-edition-24-cores",
        "sql-server-2019-license-web-edition-26-cores",
        "sql-server-2019-license-web-edition-28-cores",
        "sql-server-2019-license-web-edition-30-cores",
        "sql-server-2019-license-web-edition-32-cores",
        "sql-server-2019-license-web-edition-34-cores",
        "sql-server-2019-license-web-edition-36-cores",
        "sql-server-2019-license-web-edition-38-cores",
        "sql-server-2019-license-web-edition-4-cores",
        "sql-server-2019-license-web-edition-40-cores",
        "sql-server-2019-license-web-edition-42-cores",
        "sql-server-2019-license-web-edition-44-cores",
        "sql-server-2019-license-web-edition-46-cores",
        "sql-server-2019-license-web-edition-48-cores",
        "sql-server-2019-license-web-edition-50-cores",
        "sql-server-2019-license-web-edition-52-cores",
        "sql-server-2019-license-web-edition-54-cores",
        "sql-server-2019-license-web-edition-56-cores",
        "sql-server-2019-license-web-edition-58-cores",
        "sql-server-2019-license-web-edition-6-cores",
        "sql-server-2019-license-web-edition-60-cores",
        "sql-server-2019-license-web-edition-62-cores",
        "sql-server-2019-license-web-edition-64-cores",
        "sql-server-2019-license-web-edition-8-cores"
      ],
      "enumType": "string",
      "id": "SqlServerVersionEnum",
      "namespace": "license"
    },
    "license.WindowsOsVersionEnum": {
      "description": "All versions for Windows products",
      "enum": [
        "WINDOWS_SERVER_2003_ENTERPRISE_EDITION",
        "WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU",
        "WINDOWS_SERVER_2003_STANDARD_EDITION",
        "WINDOWS_SERVER_2003_WEB_EDITION",
        "WINDOWS_SERVER_2003_WEB_EDITION_2_CPU",
        "WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION",
        "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION",
        "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU",
        "WINDOWS_SERVER_2008_DATACENTER_EDITION",
        "WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU",
        "WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU",
        "WINDOWS_SERVER_2008_ENTERPRISE_EDITION",
        "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU",
        "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU",
        "WINDOWS_SERVER_2008_STANDARD_EDITION",
        "WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU",
        "WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU",
        "WINDOWS_SERVER_2008_WEB_EDITION",
        "WINDOWS_SERVER_2008_WEB_EDITION_2_CPU",
        "WINDOWS_SERVER_2008_WEB_EDITION_4_CPU",
        "WINDOWS_SERVER_2008_WEB_STANDARD_EDITION",
        "WINDOWS_SERVER_2012_DATACENTER_EDITION",
        "WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU",
        "WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU",
        "WINDOWS_SERVER_2012_ENTERPRISE_EDITION",
        "WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU",
        "WINDOWS_SERVER_2012_STANDARD_EDITION",
        "WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU",
        "WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU",
        "WINDOWS_SERVER_2012_WEB_EDITION",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_10_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_12_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_14_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_16_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_18_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_20_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_22_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_24_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_26_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_28_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_30_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_32_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_34_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_36_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_38_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_40_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_42_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_44_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_46_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_48_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_50_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_52_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_54_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_56_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_58_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_60_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_62_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_64_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_8_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_10_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_12_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_14_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_16_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_18_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_20_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_22_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_24_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_26_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_28_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_30_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_32_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_34_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_36_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_38_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_40_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_42_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_44_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_46_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_48_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_50_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_52_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_54_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_56_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_58_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_60_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_62_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_64_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_8_CORES",
        "windows-server-2008-license-datacenter-edition-1-cpu",
        "windows-server-2008-license-datacenter-edition-2-cpu",
        "windows-server-2008-license-datacenter-edition-4-cpu",
        "windows-server-2008-license-enterprise-edition-1-cpu",
        "windows-server-2008-license-enterprise-edition-2-cpu",
        "windows-server-2008-license-enterprise-edition-4-cpu",
        "windows-server-2008-license-standard-edition-1-cpu",
        "windows-server-2008-license-standard-edition-2-cpu",
        "windows-server-2008-license-standard-edition-4-cpu",
        "windows-server-2008-license-web-edition-1-cpu",
        "windows-server-2008-license-web-edition-2-cpu",
        "windows-server-2008-license-web-edition-4-cpu",
        "windows-server-2012-license-datacenter-edition-1-cpu",
        "windows-server-2012-license-datacenter-edition-2-cpu",
        "windows-server-2012-license-datacenter-edition-4-cpu",
        "windows-server-2012-license-standard-edition-1-cpu",
        "windows-server-2012-license-standard-edition-2-cpu",
        "windows-server-2012-license-standard-edition-4-cpu",
        "windows-server-2016-license-datacenter-edition-1-cpu-10-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-12-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-14-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-16-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-18-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-20-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-22-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-24-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-8-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-10-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-12-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-14-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-16-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-18-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-20-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-22-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-24-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-8-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-10-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-12-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-14-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-16-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-18-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-20-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-22-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-24-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-8-cores",
        "windows-server-2016-license-standard-edition-1-cpu-10-cores",
        "windows-server-2016-license-standard-edition-1-cpu-12-cores",
        "windows-server-2016-license-standard-edition-1-cpu-14-cores",
        "windows-server-2016-license-standard-edition-1-cpu-16-cores",
        "windows-server-2016-license-standard-edition-1-cpu-18-cores",
        "windows-server-2016-license-standard-edition-1-cpu-20-cores",
        "windows-server-2016-license-standard-edition-1-cpu-22-cores",
        "windows-server-2016-license-standard-edition-1-cpu-24-cores",
        "windows-server-2016-license-standard-edition-1-cpu-8-cores",
        "windows-server-2016-license-standard-edition-2-cpu-10-cores",
        "windows-server-2016-license-standard-edition-2-cpu-12-cores",
        "windows-server-2016-license-standard-edition-2-cpu-14-cores",
        "windows-server-2016-license-standard-edition-2-cpu-16-cores",
        "windows-server-2016-license-standard-edition-2-cpu-18-cores",
        "windows-server-2016-license-standard-edition-2-cpu-20-cores",
        "windows-server-2016-license-standard-edition-2-cpu-22-cores",
        "windows-server-2016-license-standard-edition-2-cpu-24-cores",
        "windows-server-2016-license-standard-edition-2-cpu-8-cores",
        "windows-server-2016-license-standard-edition-4-cpu-10-cores",
        "windows-server-2016-license-standard-edition-4-cpu-12-cores",
        "windows-server-2016-license-standard-edition-4-cpu-14-cores",
        "windows-server-2016-license-standard-edition-4-cpu-16-cores",
        "windows-server-2016-license-standard-edition-4-cpu-18-cores",
        "windows-server-2016-license-standard-edition-4-cpu-20-cores",
        "windows-server-2016-license-standard-edition-4-cpu-22-cores",
        "windows-server-2016-license-standard-edition-4-cpu-24-cores",
        "windows-server-2016-license-standard-edition-4-cpu-8-cores",
        "windows-server-2019-license-datacenter-edition-10-cores",
        "windows-server-2019-license-datacenter-edition-12-cores",
        "windows-server-2019-license-datacenter-edition-14-cores",
        "windows-server-2019-license-datacenter-edition-16-cores",
        "windows-server-2019-license-datacenter-edition-18-cores",
        "windows-server-2019-license-datacenter-edition-20-cores",
        "windows-server-2019-license-datacenter-edition-22-cores",
        "windows-server-2019-license-datacenter-edition-24-cores",
        "windows-server-2019-license-datacenter-edition-26-cores",
        "windows-server-2019-license-datacenter-edition-28-cores",
        "windows-server-2019-license-datacenter-edition-30-cores",
        "windows-server-2019-license-datacenter-edition-32-cores",
        "windows-server-2019-license-datacenter-edition-34-cores",
        "windows-server-2019-license-datacenter-edition-36-cores",
        "windows-server-2019-license-datacenter-edition-38-cores",
        "windows-server-2019-license-datacenter-edition-40-cores",
        "windows-server-2019-license-datacenter-edition-42-cores",
        "windows-server-2019-license-datacenter-edition-44-cores",
        "windows-server-2019-license-datacenter-edition-46-cores",
        "windows-server-2019-license-datacenter-edition-48-cores",
        "windows-server-2019-license-datacenter-edition-50-cores",
        "windows-server-2019-license-datacenter-edition-52-cores",
        "windows-server-2019-license-datacenter-edition-54-cores",
        "windows-server-2019-license-datacenter-edition-56-cores",
        "windows-server-2019-license-datacenter-edition-58-cores",
        "windows-server-2019-license-datacenter-edition-60-cores",
        "windows-server-2019-license-datacenter-edition-62-cores",
        "windows-server-2019-license-datacenter-edition-64-cores",
        "windows-server-2019-license-datacenter-edition-8-cores",
        "windows-server-2019-license-standard-edition-10-cores",
        "windows-server-2019-license-standard-edition-12-cores",
        "windows-server-2019-license-standard-edition-14-cores",
        "windows-server-2019-license-standard-edition-16-cores",
        "windows-server-2019-license-standard-edition-18-cores",
        "windows-server-2019-license-standard-edition-20-cores",
        "windows-server-2019-license-standard-edition-22-cores",
        "windows-server-2019-license-standard-edition-24-cores",
        "windows-server-2019-license-standard-edition-26-cores",
        "windows-server-2019-license-standard-edition-28-cores",
        "windows-server-2019-license-standard-edition-30-cores",
        "windows-server-2019-license-standard-edition-32-cores",
        "windows-server-2019-license-standard-edition-34-cores",
        "windows-server-2019-license-standard-edition-36-cores",
        "windows-server-2019-license-standard-edition-38-cores",
        "windows-server-2019-license-standard-edition-40-cores",
        "windows-server-2019-license-standard-edition-42-cores",
        "windows-server-2019-license-standard-edition-44-cores",
        "windows-server-2019-license-standard-edition-46-cores",
        "windows-server-2019-license-standard-edition-48-cores",
        "windows-server-2019-license-standard-edition-50-cores",
        "windows-server-2019-license-standard-edition-52-cores",
        "windows-server-2019-license-standard-edition-54-cores",
        "windows-server-2019-license-standard-edition-56-cores",
        "windows-server-2019-license-standard-edition-58-cores",
        "windows-server-2019-license-standard-edition-60-cores",
        "windows-server-2019-license-standard-edition-62-cores",
        "windows-server-2019-license-standard-edition-64-cores",
        "windows-server-2019-license-standard-edition-8-cores",
        "windows-server-2022-license-datacenter-edition-10-cores",
        "windows-server-2022-license-datacenter-edition-12-cores",
        "windows-server-2022-license-datacenter-edition-14-cores",
        "windows-server-2022-license-datacenter-edition-16-cores",
        "windows-server-2022-license-datacenter-edition-18-cores",
        "windows-server-2022-license-datacenter-edition-20-cores",
        "windows-server-2022-license-datacenter-edition-22-cores",
        "windows-server-2022-license-datacenter-edition-24-cores",
        "windows-server-2022-license-datacenter-edition-26-cores",
        "windows-server-2022-license-datacenter-edition-28-cores",
        "windows-server-2022-license-datacenter-edition-30-cores",
        "windows-server-2022-license-datacenter-edition-32-cores",
        "windows-server-2022-license-datacenter-edition-34-cores",
        "windows-server-2022-license-datacenter-edition-36-cores",
        "windows-server-2022-license-datacenter-edition-38-cores",
        "windows-server-2022-license-datacenter-edition-40-cores",
        "windows-server-2022-license-datacenter-edition-42-cores",
        "windows-server-2022-license-datacenter-edition-44-cores",
        "windows-server-2022-license-datacenter-edition-46-cores",
        "windows-server-2022-license-datacenter-edition-48-cores",
        "windows-server-2022-license-datacenter-edition-50-cores",
        "windows-server-2022-license-datacenter-edition-52-cores",
        "windows-server-2022-license-datacenter-edition-54-cores",
        "windows-server-2022-license-datacenter-edition-56-cores",
        "windows-server-2022-license-datacenter-edition-58-cores",
        "windows-server-2022-license-datacenter-edition-60-cores",
        "windows-server-2022-license-datacenter-edition-62-cores",
        "windows-server-2022-license-datacenter-edition-64-cores",
        "windows-server-2022-license-datacenter-edition-8-cores",
        "windows-server-2022-license-standard-edition-10-cores",
        "windows-server-2022-license-standard-edition-12-cores",
        "windows-server-2022-license-standard-edition-14-cores",
        "windows-server-2022-license-standard-edition-16-cores",
        "windows-server-2022-license-standard-edition-18-cores",
        "windows-server-2022-license-standard-edition-20-cores",
        "windows-server-2022-license-standard-edition-22-cores",
        "windows-server-2022-license-standard-edition-24-cores",
        "windows-server-2022-license-standard-edition-26-cores",
        "windows-server-2022-license-standard-edition-28-cores",
        "windows-server-2022-license-standard-edition-30-cores",
        "windows-server-2022-license-standard-edition-32-cores",
        "windows-server-2022-license-standard-edition-34-cores",
        "windows-server-2022-license-standard-edition-36-cores",
        "windows-server-2022-license-standard-edition-38-cores",
        "windows-server-2022-license-standard-edition-40-cores",
        "windows-server-2022-license-standard-edition-42-cores",
        "windows-server-2022-license-standard-edition-44-cores",
        "windows-server-2022-license-standard-edition-46-cores",
        "windows-server-2022-license-standard-edition-48-cores",
        "windows-server-2022-license-standard-edition-50-cores",
        "windows-server-2022-license-standard-edition-52-cores",
        "windows-server-2022-license-standard-edition-54-cores",
        "windows-server-2022-license-standard-edition-56-cores",
        "windows-server-2022-license-standard-edition-58-cores",
        "windows-server-2022-license-standard-edition-60-cores",
        "windows-server-2022-license-standard-edition-62-cores",
        "windows-server-2022-license-standard-edition-64-cores",
        "windows-server-2022-license-standard-edition-8-cores"
      ],
      "enumType": "string",
      "id": "WindowsOsVersionEnum",
      "namespace": "license"
    },
    "license.WindowsSqlVersionEnum": {
      "description": "All SQL Server versions for Windows products",
      "enum": [
        "SQL_SERVER_2008_STANDARD_EDITION",
        "SQL_SERVER_2008_STANDARD_EDITION_2_CPU",
        "SQL_SERVER_2008_WEB_EDITION",
        "SQL_SERVER_2008_WEB_EDITION_2_CPU",
        "SQL_SERVER_2012_STANDARD_EDITION",
        "SQL_SERVER_2012_STANDARD_EDITION_12_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_16_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_18_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_20_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_24_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_2_CPU",
        "SQL_SERVER_2012_STANDARD_EDITION_32_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_6_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_8_CORES",
        "SQL_SERVER_2012_WEB_EDITION_12_CORES",
        "SQL_SERVER_2012_WEB_EDITION_16_CORES",
        "SQL_SERVER_2012_WEB_EDITION_18_CORES",
        "SQL_SERVER_2012_WEB_EDITION_20_CORES",
        "SQL_SERVER_2012_WEB_EDITION_24_CORES",
        "SQL_SERVER_2012_WEB_EDITION_32_CORES",
        "SQL_SERVER_2012_WEB_EDITION_4_CORES",
        "SQL_SERVER_2012_WEB_EDITION_6_CORES",
        "SQL_SERVER_2012_WEB_EDITION_8_CORES"
      ],
      "enumType": "string",
      "id": "WindowsSqlVersionEnum",
      "namespace": "license"
    },
    "order.Contract": {
      "description": "A contract",
      "id": "Contract",
      "namespace": "order",
      "properties": {
        "content": {
          "canBeNull": false,
          "description": "Terms of the contract",
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the contract",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": "URL to download the contract",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.CurrencyCodeEnum": {
      "description": "Currency code",
      "enum": [
        "AUD",
        "CAD",
        "CZK",
        "EUR",
        "GBP",
        "INR",
        "LTL",
        "MAD",
        "N/A",
        "PLN",
        "SGD",
        "TND",
        "USD",
        "XOF",
        "points"
      ],
      "enumType": "string",
      "id": "CurrencyCodeEnum",
      "namespace": "order"
    },
    "order.Order": {
      "description": "An order",
      "id": "Order",
      "namespace": "order",
      "properties": {
        "contracts": {
          "canBeNull": false,
          "description": "List of contracts related to the order",
          "fullType": "order.Contract[]",
          "readOnly": true,
          "required": false,
          "type": "order.Contract[]"
        },
        "details": {
          "canBeNull": false,
          "description": "Details of the order",
          "fullType": "order.OrderDetail[]",
          "readOnly": true,
          "required": false,
          "type": "order.OrderDetail[]"
        },
        "orderId": {
          "canBeNull": true,
          "description": "Identifier of the order",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "prices": {
          "canBeNull": false,
          "description": "Prices of the order including with and without taxes",
          "fullType": "order.OrderPrices",
          "readOnly": true,
          "required": false,
          "type": "order.OrderPrices"
        },
        "url": {
          "canBeNull": true,
          "description": "URL to download the order",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.OrderDetail": {
      "description": "Detail of an order",
      "id": "OrderDetail",
      "namespace": "order",
      "properties": {
        "cartItemID": {
          "canBeNull": true,
          "description": "Cart Item ID the details is related to",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the detail",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "detailType": {
          "canBeNull": true,
          "description": "Type of detail",
          "fullType": "order.OrderDetailTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.OrderDetailTypeEnum"
        },
        "domain": {
          "canBeNull": false,
          "description": "Service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "originalTotalPrice": {
          "canBeNull": false,
          "description": "Original price of the detail before reduction application",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Quantity of the service",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "reductionTotalPrice": {
          "canBeNull": false,
          "description": "Total price of the reduction",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "reductions": {
          "canBeNull": false,
          "description": "List of reductions applied to the detail",
          "fullType": "order.Reduction[]",
          "readOnly": true,
          "required": false,
          "type": "order.Reduction[]"
        },
        "totalPrice": {
          "canBeNull": false,
          "description": "Price total of the services",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "unitPrice": {
          "canBeNull": false,
          "description": "Unitary price of the service",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "order.OrderDetailTypeEnum": {
      "description": "Product type of item in order",
      "enum": [
        "ACCESSORY",
        "CAUTION",
        "CHOOSED",
        "CONSUMPTION",
        "CREATION",
        "DELIVERY",
        "DURATION",
        "GIFT",
        "INSTALLATION",
        "LICENSE",
        "MUTE",
        "OTHER",
        "OUTPLAN",
        "QUANTITY",
        "REFUND",
        "RENEW",
        "SPECIAL",
        "SWITCH",
        "TRANSFER",
        "VOUCHER"
      ],
      "enumType": "string",
      "id": "OrderDetailTypeEnum",
      "namespace": "order"
    },
    "order.OrderPrices": {
      "description": "Prices of an order",
      "id": "OrderPrices",
      "namespace": "order",
      "properties": {
        "originalWithoutTax": {
          "canBeNull": true,
          "description": "Price before reduction application",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "reduction": {
          "canBeNull": true,
          "description": "Price concerning the reduced amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "tax": {
          "canBeNull": false,
          "description": "Tax amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "withTax": {
          "canBeNull": false,
          "description": "Price with tax",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "withoutTax": {
          "canBeNull": false,
          "description": "Price without tax",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "order.Price": {
      "description": "Price with its currency and textual representation",
      "id": "Price",
      "namespace": "order",
      "properties": {
        "currencyCode": {
          "canBeNull": false,
          "description": "Currency code",
          "fullType": "order.CurrencyCodeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.CurrencyCodeEnum"
        },
        "text": {
          "canBeNull": false,
          "description": "Textual representation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "The effective price",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "order.Reduction": {
      "description": "Order detail reduction",
      "id": "Reduction",
      "namespace": "order",
      "properties": {
        "context": {
          "canBeNull": false,
          "description": "In which context the reduction is applied",
          "fullType": "order.ReductionContextEnum",
          "readOnly": true,
          "required": false,
          "type": "order.ReductionContextEnum"
        },
        "description": {
          "canBeNull": false,
          "description": "Promotion description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "price": {
          "canBeNull": false,
          "description": "Reduction price applied with this promotion",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "reductionDescription": {
          "canBeNull": false,
          "description": "Reduction description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Reduction effect, price modification",
          "fullType": "order.ReductionTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.ReductionTypeEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "The reduction value",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "order.ReductionContextEnum": {
      "description": "Context of the reduction",
      "enum": [
        "promotion",
        "voucher"
      ],
      "enumType": "string",
      "id": "ReductionContextEnum",
      "namespace": "order"
    },
    "order.ReductionTypeEnum": {
      "description": "Type of reduction",
      "enum": [
        "fixed_amount",
        "forced_amount",
        "percentage"
      ],
      "enumType": "string",
      "id": "ReductionTypeEnum",
      "namespace": "order"
    },
    "order.cart.GenericProductDefinition": {
      "description": "Representation of a generic product",
      "id": "GenericProductDefinition",
      "namespace": "order.cart",
      "properties": {
        "planCode": {
          "canBeNull": false,
          "description": "Product offer identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "prices": {
          "canBeNull": false,
          "description": "Prices of the product offer",
          "fullType": "order.cart.GenericProductPricing[]",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductPricing[]"
        },
        "productName": {
          "canBeNull": false,
          "description": "Name of the product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "productType": {
          "canBeNull": false,
          "description": "Product type",
          "fullType": "order.cart.GenericProductTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductTypeEnum"
        }
      }
    },
    "order.cart.GenericProductPricing": {
      "description": "Representation of a product pricing",
      "id": "GenericProductPricing",
      "namespace": "order.cart",
      "properties": {
        "capacities": {
          "canBeNull": false,
          "description": "Capacities of the pricing (type of pricing)",
          "fullType": "order.cart.GenericProductPricingCapacitiesEnum[]",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductPricingCapacitiesEnum[]"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the pricing",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "duration": {
          "canBeNull": false,
          "description": "Duration for ordering the product",
          "fullType": "duration",
          "readOnly": true,
          "required": false,
          "type": "duration"
        },
        "interval": {
          "canBeNull": false,
          "description": "Interval of renewal",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maximumQuantity": {
          "canBeNull": true,
          "description": "Maximum quantity that can be ordered",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maximumRepeat": {
          "canBeNull": true,
          "description": "Maximum repeat for renewal",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minimumQuantity": {
          "canBeNull": false,
          "description": "Minimum quantity that can be ordered",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minimumRepeat": {
          "canBeNull": false,
          "description": "Minimum repeat for renewal",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "price": {
          "canBeNull": false,
          "description": "Price of the product",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "priceInUcents": {
          "canBeNull": false,
          "description": "Price of the product in micro-centims",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "pricingMode": {
          "canBeNull": false,
          "description": "Pricing model identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "pricingType": {
          "canBeNull": false,
          "description": "Pricing type",
          "fullType": "order.cart.GenericProductPricingTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductPricingTypeEnum"
        }
      }
    },
    "order.cart.GenericProductPricingCapacitiesEnum": {
      "description": "Capacity of a pricing (type)",
      "enum": [
        "consumption",
        "detach",
        "downgrade",
        "dynamic",
        "installation",
        "renew",
        "upgrade"
      ],
      "enumType": "string",
      "id": "GenericProductPricingCapacitiesEnum",
      "namespace": "order.cart"
    },
    "order.cart.GenericProductPricingTypeEnum": {
      "description": "Type of a pricing",
      "enum": [
        "consumption",
        "purchase",
        "rental"
      ],
      "enumType": "string",
      "id": "GenericProductPricingTypeEnum",
      "namespace": "order.cart"
    },
    "order.cart.GenericProductTypeEnum": {
      "description": "Type of a product",
      "enum": [
        "cloud_service",
        "delivery",
        "deposit",
        "domain",
        "implementation_services",
        "saas_license",
        "shipping",
        "storage"
      ],
      "enumType": "string",
      "id": "GenericProductTypeEnum",
      "namespace": "order.cart"
    },
    "order.catalog.AddonItem": {
      "description": "Describes an Addon",
      "id": "AddonItem",
      "namespace": "order.catalog",
      "properties": {
        "addons": {
          "canBeNull": false,
          "description": "List of the addons of this family",
          "fullType": "order.catalog.AddonOffer[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.AddonOffer[]"
        },
        "exclusive": {
          "canBeNull": false,
          "description": "Whether you can only have one instance of this addon family (xor)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "family": {
          "canBeNull": false,
          "description": "Addon family name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "mandatory": {
          "canBeNull": false,
          "description": "Indicated if addon family must be contracted",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "order.catalog.AddonOffer": {
      "description": "Describes of Addon offer",
      "id": "AddonOffer",
      "namespace": "order.catalog",
      "properties": {
        "default": {
          "canBeNull": true,
          "description": "Default",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "invoiceName": {
          "canBeNull": false,
          "description": "Name that appears on invoice",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "maximumQuantity": {
          "canBeNull": true,
          "description": "Maximum quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minimumQuantity": {
          "canBeNull": true,
          "description": "Minimum quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "plan": {
          "canBeNull": false,
          "description": "Describes of commercial offer of a product",
          "fullType": "order.catalog.ProductPlan",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.ProductPlan"
        }
      }
    },
    "order.catalog.ConfigurationItem": {
      "description": "Composition of a configuration",
      "id": "ConfigurationItem",
      "namespace": "order.catalog",
      "properties": {
        "defaultValue": {
          "canBeNull": true,
          "description": "Default value of the configuration if not provided",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isCustom": {
          "canBeNull": false,
          "description": "Indicates if the configuration is free for writing (true) or have to follow an enum (false - have to follow values field)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isMandatory": {
          "canBeNull": false,
          "description": "Indicates if configuration is required",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Label of the configuration",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "values": {
          "canBeNull": false,
          "description": "Values allowed if configuration isn't custom",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "order.catalog.Pricing": {
      "description": "Describes a pricing",
      "id": "Pricing",
      "namespace": "order.catalog",
      "properties": {
        "capacities": {
          "canBeNull": false,
          "description": "Install, renew ... What the pricing can be used for",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "commitment": {
          "canBeNull": false,
          "description": "Engagement period",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "interval": {
          "canBeNull": false,
          "description": "Number length of the interval",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "intervalUnit": {
          "canBeNull": false,
          "description": "Unit interval for duration",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "maximumQuantity": {
          "canBeNull": true,
          "description": "Maximum quantity buyable",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maximumRepeat": {
          "canBeNull": true,
          "description": "Maximum repeat duration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minimumQuantity": {
          "canBeNull": false,
          "description": "Minimum quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minimumRepeat": {
          "canBeNull": false,
          "description": "Minimum repeat duration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "mustBeCompleted": {
          "canBeNull": false,
          "description": "Whether the catalog must reach max repeat before subscription can use another one",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "price": {
          "canBeNull": false,
          "description": "Price of the product",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "priceCapInUcents": {
          "canBeNull": true,
          "description": "Max price customer will pay at the end of the period (cap)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "priceInUcents": {
          "canBeNull": false,
          "description": "Price in microcents",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "pricingStrategy": {
          "canBeNull": false,
          "description": "Strategy on which the pricing can change",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.PricingDefault": {
      "description": "Describe default pricings",
      "id": "PricingDefault",
      "namespace": "order.catalog",
      "properties": {
        "default": {
          "canBeNull": false,
          "description": "Information about default pricing",
          "fullType": "order.catalog.Pricing[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.Pricing[]"
        }
      }
    },
    "order.catalog.Product": {
      "description": "Describe a Product in the Catalog",
      "id": "Product",
      "namespace": "order.catalog",
      "properties": {
        "configurations": {
          "canBeNull": false,
          "description": "List of the configurations available for the product",
          "fullType": "order.catalog.ConfigurationItem[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.ConfigurationItem[]"
        },
        "description": {
          "canBeNull": false,
          "description": "Designation of the product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "internalType": {
          "canBeNull": false,
          "description": "Type of product (deposit, etc...)",
          "fullType": "order.cart.GenericProductTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductTypeEnum"
        },
        "metadatas": {
          "canBeNull": true,
          "description": "List of the metadatas attached",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "readOnly": true,
          "required": false,
          "type": "complexType.SafeKeyValue<string>[]"
        },
        "name": {
          "canBeNull": false,
          "description": "Plan code identifier of the product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "subType": {
          "canBeNull": true,
          "description": "Sub type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "technicalDetails": {
          "canBeNull": true,
          "description": "Technicals details about product",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "readOnly": true,
          "required": false,
          "type": "complexType.SafeKeyValue<string>[]"
        },
        "type": {
          "canBeNull": true,
          "description": "Type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.ProductOfferDetails": {
      "description": "Describe the details of a commercial offer",
      "id": "ProductOfferDetails",
      "namespace": "order.catalog",
      "properties": {
        "blobs": {
          "canBeNull": true,
          "description": "Extra informations of product offer",
          "fullType": "order.catalog.cloud.Blob",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.cloud.Blob"
        },
        "metadatas": {
          "canBeNull": true,
          "description": "List of the metadatas attached",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "readOnly": true,
          "required": false,
          "type": "complexType.SafeKeyValue<string>[]"
        },
        "pricings": {
          "canBeNull": false,
          "description": "Describe default pricings",
          "fullType": "order.catalog.PricingDefault",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.PricingDefault"
        },
        "product": {
          "canBeNull": false,
          "description": "Information about the product",
          "fullType": "order.catalog.Product",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.Product"
        }
      }
    },
    "order.catalog.ProductPlan": {
      "description": "Describes of commercial offer of a product",
      "id": "ProductPlan",
      "namespace": "order.catalog",
      "properties": {
        "addonsFamily": {
          "canBeNull": false,
          "description": "List of addons",
          "fullType": "order.catalog.AddonItem[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.AddonItem[]"
        },
        "consumptionBillingStrategy": {
          "canBeNull": true,
          "description": "Strategy that follow the pricing when product is in consumption mode",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "details": {
          "canBeNull": false,
          "description": "Describe the details of a commercial offer",
          "fullType": "order.catalog.ProductOfferDetails",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.ProductOfferDetails"
        },
        "familyName": {
          "canBeNull": true,
          "description": "Family name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "invoiceName": {
          "canBeNull": false,
          "description": "Name that appears on invoice",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Plan code identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "prices": {
          "canBeNull": true,
          "description": "List of region prices",
          "fullType": "order.catalog.cloud.RegionPrice[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.cloud.RegionPrice[]"
        },
        "pricingType": {
          "canBeNull": false,
          "description": "Main mode: rental, consumption",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.cloud.Blob": {
      "description": "Describe extra informations of product offer",
      "id": "Blob",
      "namespace": "order.catalog.cloud",
      "properties": {
        "unit": {
          "canBeNull": true,
          "description": "Unit of billed quantity",
          "fullType": "order.catalog.cloud.Blob.Unit",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.cloud.Blob.Unit"
        }
      }
    },
    "order.catalog.cloud.Blob.Unit": {
      "description": "Label of the unit",
      "id": "Unit",
      "namespace": "order.catalog.cloud.Blob",
      "properties": {
        "unit": {
          "canBeNull": false,
          "description": "Unit of billed quantity",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.cloud.RegionPrice": {
      "description": "Describes a region price",
      "id": "RegionPrice",
      "namespace": "order.catalog.cloud",
      "properties": {
        "price": {
          "canBeNull": false,
          "description": "Strategy that follow the pricing when product is in consumption mode",
          "fullType": "order.catalog.cloud.RegionPrice.Price",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.cloud.RegionPrice.Price"
        },
        "region": {
          "canBeNull": false,
          "description": "Region",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.cloud.RegionPrice.Price": {
      "description": "Describes a price",
      "id": "Price",
      "namespace": "order.catalog.cloud.RegionPrice",
      "properties": {
        "currencyCode": {
          "canBeNull": false,
          "description": "Currency code",
          "fullType": "order.CurrencyCodeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.CurrencyCodeEnum"
        },
        "priceInUcents": {
          "canBeNull": false,
          "description": "Price in microcents",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "text": {
          "canBeNull": false,
          "description": "Price text with currency symbol",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Price in currency",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "veeamCloudConnect.Offer": {
      "description": "All orderable Veeam Cloud Connect offers",
      "enum": [
        "advanced",
        "demo",
        "starter"
      ],
      "enumType": "string",
      "id": "Offer",
      "namespace": "veeamCloudConnect"
    }
  },
  "resourcePath": "/order"
}