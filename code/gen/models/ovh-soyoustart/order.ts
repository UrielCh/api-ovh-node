import {Schema} from '../../src/schema';

// imported from https://eu.api.soyoustart.com:443/1.0/order.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Order a new Hadoop cluster",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Node profile you want to order",
              "fullType": "string",
              "name": "nodeProfile",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of node you want to order (minimum 3)",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/cluster/hadoop/new"
    },
    {
      "description": "Order a new Hadoop cluster",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
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
              "description": "Node profile you want to order",
              "fullType": "string",
              "name": "nodeProfile",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of node you want to order (minimum 3)",
              "fullType": "long",
              "name": "quantity",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Node profile you want to order",
              "fullType": "string",
              "name": "nodeProfile",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of node you want to order (minimum 3)",
              "fullType": "long",
              "name": "quantity",
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
      "path": "/order/cluster/hadoop/new/{duration}"
    },
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
      "description": "Operations about the PCC service",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicatedCloud"
    },
    {
      "description": "List available options for this service",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get allowed options",
          "httpMethod": "GET",
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
      "path": "/order/dedicatedCloud/{serviceName}"
    },
    {
      "description": "Order additional bandwidth in your Private Cloud",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'additionalBandwidth' option",
          "httpMethod": "GET",
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
              "dataType": "dedicatedCloud.AdditionalBandwidthEnum",
              "description": "How much additional bandwidth do you want ?",
              "fullType": "dedicatedCloud.AdditionalBandwidthEnum",
              "name": "bandwidth",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/additionalBandwidth"
    },
    {
      "description": "Order additional bandwidth in your Private Cloud",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
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
              "dataType": "dedicatedCloud.AdditionalBandwidthEnum",
              "description": "How much additional bandwidth do you want ?",
              "fullType": "dedicatedCloud.AdditionalBandwidthEnum",
              "name": "bandwidth",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.AdditionalBandwidthEnum",
              "description": "How much additional bandwidth do you want ?",
              "fullType": "dedicatedCloud.AdditionalBandwidthEnum",
              "name": "bandwidth",
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
      "path": "/order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}"
    },
    {
      "description": "Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'filer' option",
          "httpMethod": "GET",
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
              "dataType": "long",
              "description": "Datacenter where the filer will be mounted (if not precised, will be mounted in each Datacenter of this Private Cloud)",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filer profile you want to order (\"name\" field in a profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of filer you want to order (default 1)",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/filer"
    },
    {
      "description": "Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
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
              "dataType": "long",
              "description": "Datacenter where the filer will be mounted (if not precised, will be mounted in each Datacenter of this Private Cloud)",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filer profile you want to order (\"name\" field in a profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of filer you want to order (default 1)",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Datacenter where the filer will be mounted (if not precised, will be mounted in each Datacenter of this Private Cloud)",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filer profile you want to order (\"name\" field in a profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of filer you want to order (default 1)",
              "fullType": "long",
              "name": "quantity",
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
      "path": "/order/dedicatedCloud/{serviceName}/filer/{duration}"
    },
    {
      "description": "Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'host' option",
          "httpMethod": "GET",
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
              "dataType": "long",
              "description": "Datacenter where the Host will be added",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Host profile you want to order (\"name\" field of a Profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of hosts you want to order (default 1)",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/host"
    },
    {
      "description": "Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
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
              "dataType": "long",
              "description": "Datacenter where the Host will be added",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Host profile you want to order (\"name\" field of a Profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of hosts you want to order (default 1)",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Datacenter where the Host will be added",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Host profile you want to order (\"name\" field of a Profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of hosts you want to order (default 1)",
              "fullType": "long",
              "name": "quantity",
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
      "path": "/order/dedicatedCloud/{serviceName}/host/{duration}"
    },
    {
      "description": "Order an IP block for your Private Cloud",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'ip' option",
          "httpMethod": "GET",
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
              "dataType": "dedicatedCloud.IpCountriesEnum",
              "description": "This Ip block country",
              "fullType": "dedicatedCloud.IpCountriesEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Information visible on whois (minimum 3 and maximum 250 alphanumeric characters)",
              "fullType": "string",
              "name": "description",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "long",
              "description": "How much clients would be hosted on those ips ?",
              "fullType": "long",
              "name": "estimatedClientsNumber",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Information visible on whois (between 2 and maximum 20 alphanumeric characters)",
              "fullType": "string",
              "name": "networkName",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "description": "The network ranges orderable",
              "fullType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "name": "size",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Basic information of how will this bloc be used (as \"web\",\"ssl\",\"cloud\" or other things)",
              "fullType": "string",
              "name": "usage",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/ip"
    },
    {
      "description": "Order an IP block for your Private Cloud",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
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
              "dataType": "dedicatedCloud.IpCountriesEnum",
              "description": "This Ip block country",
              "fullType": "dedicatedCloud.IpCountriesEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Information visible on whois (minimum 3 and maximum 250 alphanumeric characters)",
              "fullType": "string",
              "name": "description",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "long",
              "description": "How much clients would be hosted on those ips ?",
              "fullType": "long",
              "name": "estimatedClientsNumber",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Information visible on whois (between 2 and maximum 20 alphanumeric characters)",
              "fullType": "string",
              "name": "networkName",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "description": "The network ranges orderable",
              "fullType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "name": "size",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Basic information of how will this bloc be used (as \"web\",\"ssl\",\"cloud\" or other things)",
              "fullType": "string",
              "name": "usage",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.IpCountriesEnum",
              "description": "This Ip block country",
              "fullType": "dedicatedCloud.IpCountriesEnum",
              "name": "country",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Information visible on whois (minimum 3 and maximum 250 alphanumeric characters)",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "How much clients would be hosted on those ips ?",
              "fullType": "long",
              "name": "estimatedClientsNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Information visible on whois (between 2 and maximum 20 alphanumeric characters)",
              "fullType": "string",
              "name": "networkName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "description": "The network ranges orderable",
              "fullType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "name": "size",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Basic information of how will this bloc be used (as \"web\",\"ssl\",\"cloud\" or other things)",
              "fullType": "string",
              "name": "usage",
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
      "path": "/order/dedicatedCloud/{serviceName}/ip/{duration}"
    },
    {
      "description": "Enable windows templates (SPLA) in your Private Cloud",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
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
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
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
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/spla"
    },
    {
      "description": "Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'upgradeRessource' option",
          "httpMethod": "GET",
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
              "dataType": "long",
              "description": "The id of a particular ressource you want to upgrade in your Private Cloud (useless for \"all\" UpgradeRessourceTypeEnum)",
              "fullType": "long",
              "name": "upgradedRessourceId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "description": "The type of ressource you want to upgrade.",
              "fullType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "name": "upgradedRessourceType",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "description": "The type of upgrade you want to process on the ressource(s)",
              "fullType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "name": "upgradeType",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/upgradeRessource"
    },
    {
      "description": "Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
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
              "dataType": "long",
              "description": "The id of a particular ressource you want to upgrade in your Private Cloud (useless for \"all\" UpgradeRessourceTypeEnum)",
              "fullType": "long",
              "name": "upgradedRessourceId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "description": "The type of ressource you want to upgrade.",
              "fullType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "name": "upgradedRessourceType",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "description": "The type of upgrade you want to process on the ressource(s)",
              "fullType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "name": "upgradeType",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The id of a particular ressource you want to upgrade in your Private Cloud (useless for \"all\" UpgradeRessourceTypeEnum)",
              "fullType": "long",
              "name": "upgradedRessourceId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "description": "The type of ressource you want to upgrade.",
              "fullType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "name": "upgradedRessourceType",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "description": "The type of upgrade you want to process on the ressource(s)",
              "fullType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "name": "upgradeType",
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
      "path": "/order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}"
    },
    {
      "description": "Order VDI option in a given Datacenter",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
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
              "dataType": "long",
              "description": "Datacenter where the VDI option will be enabled",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "An avaiable ip from one of your Private Cloud public IP blocks",
              "fullType": "ip",
              "name": "firstPublicIpAddress",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "Another avaiable ip from one of your Private Cloud public IP blocks",
              "fullType": "ip",
              "name": "secondPublicIpAddress",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Datacenter where the VDI option will be enabled",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "An avaiable ip from one of your Private Cloud public IP blocks",
              "fullType": "ip",
              "name": "firstPublicIpAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "Another avaiable ip from one of your Private Cloud public IP blocks",
              "fullType": "ip",
              "name": "secondPublicIpAddress",
              "paramType": "body",
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
      "path": "/order/dedicatedCloud/{serviceName}/vdi"
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
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
      "path": "/order/license/virtuozzo"
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'upgrade' option",
          "httpMethod": "GET",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
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
  "basePath": "https://eu.api.soyoustart.com/1.0",
  "models": {
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
    "dedicatedCloud.AdditionalBandwidthEnum": {
      "description": "All available additional bandwidth amounts in Mbps",
      "enum": [
        "1500"
      ],
      "enumType": "string",
      "id": "AdditionalBandwidthEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.IpCountriesEnum": {
      "description": "All countries in which an Ip Block may be ordered",
      "enum": [
        "be",
        "ca",
        "ch",
        "cz",
        "de",
        "es",
        "fi",
        "fr",
        "gb",
        "ie",
        "it",
        "lt",
        "nl",
        "pl",
        "pt",
        "us"
      ],
      "enumType": "coreTypes.CountryEnum",
      "id": "IpCountriesEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.OrderableIpBlockRangeEnum": {
      "description": "All orderable IP Block ranges in your Dedicated Cloud",
      "enum": [
        "24",
        "25",
        "26",
        "27",
        "28"
      ],
      "enumType": "string",
      "id": "OrderableIpBlockRangeEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.ressources.UpgradeRessourceTypeEnum": {
      "description": "The Dedicated Cloud ressource types that can be upgraded",
      "enum": [
        "account",
        "all",
        "filer",
        "host"
      ],
      "enumType": "string",
      "id": "UpgradeRessourceTypeEnum",
      "namespace": "dedicatedCloud.ressources"
    },
    "dedicatedCloud.ressources.UpgradeTypeEnum": {
      "description": "The available billing type upgrade for Dedicated Cloud ressource",
      "enum": [
        "demoToMonthly",
        "freeSpareToHourly",
        "hourlyToMonthly"
      ],
      "enumType": "string",
      "id": "UpgradeTypeEnum",
      "namespace": "dedicatedCloud.ressources"
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
        "cpanel-license-premier-cloud-1000-accounts",
        "cpanel-license-premier-cloud-10000-accounts",
        "cpanel-license-premier-cloud-1100-accounts",
        "cpanel-license-premier-cloud-1200-accounts",
        "cpanel-license-premier-cloud-1300-accounts",
        "cpanel-license-premier-cloud-1400-accounts",
        "cpanel-license-premier-cloud-1500-accounts",
        "cpanel-license-premier-cloud-1600-accounts",
        "cpanel-license-premier-cloud-1700-accounts",
        "cpanel-license-premier-cloud-1800-accounts",
        "cpanel-license-premier-cloud-1900-accounts",
        "cpanel-license-premier-cloud-2000-accounts",
        "cpanel-license-premier-cloud-2100-accounts",
        "cpanel-license-premier-cloud-2200-accounts",
        "cpanel-license-premier-cloud-2300-accounts",
        "cpanel-license-premier-cloud-2400-accounts",
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
        "cpanel-license-premier-metal-1000-accounts",
        "cpanel-license-premier-metal-10000-accounts",
        "cpanel-license-premier-metal-1100-accounts",
        "cpanel-license-premier-metal-1200-accounts",
        "cpanel-license-premier-metal-1300-accounts",
        "cpanel-license-premier-metal-1400-accounts",
        "cpanel-license-premier-metal-1500-accounts",
        "cpanel-license-premier-metal-1600-accounts",
        "cpanel-license-premier-metal-1700-accounts",
        "cpanel-license-premier-metal-1800-accounts",
        "cpanel-license-premier-metal-1900-accounts",
        "cpanel-license-premier-metal-2000-accounts",
        "cpanel-license-premier-metal-2100-accounts",
        "cpanel-license-premier-metal-2200-accounts",
        "cpanel-license-premier-metal-2300-accounts",
        "cpanel-license-premier-metal-2400-accounts",
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
        "cpanel-license-version-11",
        "cpanel-license-version-11-for-virtuozzo",
        "cpanel-license-version-11-for-vps",
        "version-admin-cloud",
        "version-premier-cloud-100",
        "version-premier-cloud-1000",
        "version-premier-cloud-10000",
        "version-premier-cloud-1100",
        "version-premier-cloud-1200",
        "version-premier-cloud-1300",
        "version-premier-cloud-1400",
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
        "version-premier-metal-1000",
        "version-premier-metal-10000",
        "version-premier-metal-1100",
        "version-premier-metal-1200",
        "version-premier-metal-1300",
        "version-premier-metal-1400",
        "version-premier-metal-1500",
        "version-premier-metal-1600",
        "version-premier-metal-1700",
        "version-premier-metal-1800",
        "version-premier-metal-1900",
        "version-premier-metal-2000",
        "version-premier-metal-2100",
        "version-premier-metal-2200",
        "version-premier-metal-2300",
        "version-premier-metal-2400",
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
        "SQL_SERVER_2019_STANDARD_EDITION_4_CORES",
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
        "SQL_SERVER_2019_WEB_EDITION_4_CORES",
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
        "sql-server-2019-license-standard-edition-4-cores",
        "sql-server-2019-license-standard-edition-6-cores",
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
        "sql-server-2019-license-web-edition-4-cores",
        "sql-server-2019-license-web-edition-6-cores",
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
        "windows-server-2019-license-standard-edition-8-cores"
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
    "nichandle.OvhSubsidiaryEnum": {
      "description": "OVH subsidiaries",
      "enum": [
        "CZ",
        "DE",
        "ES",
        "EU",
        "FI",
        "FR",
        "GB",
        "IE",
        "IT",
        "LT",
        "MA",
        "NL",
        "PL",
        "PT",
        "SN",
        "TN"
      ],
      "enumType": "string",
      "id": "OvhSubsidiaryEnum",
      "namespace": "nichandle"
    },
    "order.Contract": {
      "description": "A contract",
      "id": "Contract",
      "namespace": "order",
      "properties": {
        "content": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "text"
        },
        "name": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "readOnly": false,
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
          "readOnly": false,
          "required": false,
          "type": "order.Contract[]"
        },
        "details": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "order.OrderDetail[]"
        },
        "orderId": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "prices": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "order.OrderPrices"
        },
        "url": {
          "canBeNull": true,
          "readOnly": false,
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
        "description": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "detailType": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "order.OrderDetailTypeEnum"
        },
        "domain": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "quantity": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "totalPrice": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "unitPrice": {
          "canBeNull": false,
          "readOnly": false,
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
        "tax": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "withTax": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "withoutTax": {
          "canBeNull": false,
          "readOnly": false,
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