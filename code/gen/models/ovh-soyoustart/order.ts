import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/order/cluster/hadoop/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "nodeProfile",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Node profile you want to order"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Quantity of node you want to order (minimum 3)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order a new Hadoop cluster"
    },
    {
      "path": "/order/cluster/hadoop/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "nodeProfile",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Node profile you want to order"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Quantity of node you want to order (minimum 3)"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "nodeProfile",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Node profile you want to order"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of node you want to order (minimum 3)"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new Hadoop cluster"
    },
    {
      "path": "/order/dedicated/server",
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
      "description": "Operations about the DEDICATED service"
    },
    {
      "path": "/order/dedicated/server/{serviceName}",
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
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/backupStorage",
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
              "name": "capacity",
              "dataType": "dedicated.server.BackupStorageCapacityEnum",
              "paramType": "query",
              "fullType": "dedicated.server.BackupStorageCapacityEnum",
              "required": true,
              "description": "The capacity in gigabytes of your backup storage"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'backupStorage' option"
        }
      ],
      "description": "Order a backup storage for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/backupStorage/{duration}",
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "capacity",
              "dataType": "dedicated.server.BackupStorageCapacityEnum",
              "paramType": "query",
              "fullType": "dedicated.server.BackupStorageCapacityEnum",
              "required": true,
              "description": "The capacity in gigabytes of your backup storage"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "capacity",
              "dataType": "dedicated.server.BackupStorageCapacityEnum",
              "paramType": "body",
              "fullType": "dedicated.server.BackupStorageCapacityEnum",
              "required": true,
              "description": "The capacity in gigabytes of your backup storage"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a backup storage for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/failoverIP",
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
              "name": "country",
              "dataType": "dedicated.server.IpCountryEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpCountryEnum",
              "required": true,
              "description": "Ip localization"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'failoverIP' option"
        }
      ],
      "description": "Order a failover IP for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/failoverIP/{duration}",
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "country",
              "dataType": "dedicated.server.IpCountryEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpCountryEnum",
              "required": true,
              "description": "Ip localization"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "country",
              "dataType": "dedicated.server.IpCountryEnum",
              "paramType": "body",
              "fullType": "dedicated.server.IpCountryEnum",
              "required": true,
              "description": "Ip localization"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a failover IP for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/feature",
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
              "name": "feature",
              "dataType": "dedicated.server.OrderableSysFeatureEnum",
              "paramType": "query",
              "fullType": "dedicated.server.OrderableSysFeatureEnum",
              "required": true,
              "description": "the feature"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'feature' option"
        }
      ],
      "description": "Order a feature for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/feature/{duration}",
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "feature",
              "dataType": "dedicated.server.OrderableSysFeatureEnum",
              "paramType": "query",
              "fullType": "dedicated.server.OrderableSysFeatureEnum",
              "required": true,
              "description": "the feature"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "feature",
              "dataType": "dedicated.server.OrderableSysFeatureEnum",
              "paramType": "body",
              "fullType": "dedicated.server.OrderableSysFeatureEnum",
              "required": true,
              "description": "the feature"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a feature for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/firewall",
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
              "name": "firewallModel",
              "dataType": "dedicated.server.FirewallModelEnum",
              "paramType": "query",
              "fullType": "dedicated.server.FirewallModelEnum",
              "required": true,
              "description": "Firewall type"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'firewall' option"
        }
      ],
      "description": "order a Firewall for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/firewall/{duration}",
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "firewallModel",
              "dataType": "dedicated.server.FirewallModelEnum",
              "paramType": "query",
              "fullType": "dedicated.server.FirewallModelEnum",
              "required": true,
              "description": "Firewall type"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "firewallModel",
              "dataType": "dedicated.server.FirewallModelEnum",
              "paramType": "body",
              "fullType": "dedicated.server.FirewallModelEnum",
              "required": true,
              "description": "Firewall type"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "order a Firewall for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/ip",
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
              "name": "country",
              "dataType": "dedicated.server.IpCountryEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpCountryEnum",
              "required": false,
              "description": "IP localization"
            },
            {
              "name": "organisationId",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Your organisation id to add on block informations"
            },
            {
              "name": "type",
              "dataType": "dedicated.server.IpTypeOrderableEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpTypeOrderableEnum",
              "required": true,
              "description": "The type of IP"
            },
            {
              "name": "blockSize",
              "dataType": "dedicated.server.IpBlockSizeEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpBlockSizeEnum",
              "required": true,
              "description": "IP block size"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'ip' option"
        }
      ],
      "description": "Order IP for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/ip/{duration}",
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "country",
              "dataType": "dedicated.server.IpCountryEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpCountryEnum",
              "required": false,
              "description": "IP localization"
            },
            {
              "name": "organisationId",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Your organisation id to add on block informations"
            },
            {
              "name": "type",
              "dataType": "dedicated.server.IpTypeOrderableEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpTypeOrderableEnum",
              "required": true,
              "description": "The type of IP"
            },
            {
              "name": "blockSize",
              "dataType": "dedicated.server.IpBlockSizeEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpBlockSizeEnum",
              "required": true,
              "description": "IP block size"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "country",
              "dataType": "dedicated.server.IpCountryEnum",
              "paramType": "body",
              "fullType": "dedicated.server.IpCountryEnum",
              "required": false,
              "description": "IP localization"
            },
            {
              "name": "organisationId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Your organisation id to add on block informations"
            },
            {
              "name": "type",
              "dataType": "dedicated.server.IpTypeOrderableEnum",
              "paramType": "body",
              "fullType": "dedicated.server.IpTypeOrderableEnum",
              "required": true,
              "description": "The type of IP"
            },
            {
              "name": "blockSize",
              "dataType": "dedicated.server.IpBlockSizeEnum",
              "paramType": "body",
              "fullType": "dedicated.server.IpBlockSizeEnum",
              "required": true,
              "description": "IP block size"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order IP for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/ipMigration",
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
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "query",
              "fullType": "ipBlock",
              "required": true,
              "description": "The IP to move to this server"
            },
            {
              "name": "token",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "IP migration token"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'ipMigration' option"
        }
      ],
      "description": "Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/ipMigration/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "query",
              "fullType": "ipBlock",
              "required": true,
              "description": "The IP to move to this server"
            },
            {
              "name": "token",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "IP migration token"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
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
              "paramType": "body",
              "fullType": "ipBlock",
              "required": true,
              "description": "The IP to move to this server"
            },
            {
              "name": "token",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "IP migration token"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/kvmExpress",
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
          "description": "Get allowed durations for 'kvmExpress' option"
        }
      ],
      "description": "Order a kvmip express for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/kvmExpress/{duration}",
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a kvmip express for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/staticIP",
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
              "name": "country",
              "dataType": "dedicated.server.IpStaticCountryEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpStaticCountryEnum",
              "required": true,
              "description": "Ip localization"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'staticIP' option"
        }
      ],
      "description": "Order a static IP for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/staticIP/{duration}",
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "country",
              "dataType": "dedicated.server.IpStaticCountryEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpStaticCountryEnum",
              "required": true,
              "description": "Ip localization"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "country",
              "dataType": "dedicated.server.IpStaticCountryEnum",
              "paramType": "body",
              "fullType": "dedicated.server.IpStaticCountryEnum",
              "required": true,
              "description": "Ip localization"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a static IP for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/usbKey",
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
              "name": "capacity",
              "dataType": "dedicated.server.UsbKeyCapacityEnum",
              "paramType": "query",
              "fullType": "dedicated.server.UsbKeyCapacityEnum",
              "required": true,
              "description": "Capacity in gigabytes"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'usbKey' option"
        }
      ],
      "description": "Order an USB key for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/usbKey/{duration}",
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "capacity",
              "dataType": "dedicated.server.UsbKeyCapacityEnum",
              "paramType": "query",
              "fullType": "dedicated.server.UsbKeyCapacityEnum",
              "required": true,
              "description": "Capacity in gigabytes"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "capacity",
              "dataType": "dedicated.server.UsbKeyCapacityEnum",
              "paramType": "body",
              "fullType": "dedicated.server.UsbKeyCapacityEnum",
              "required": true,
              "description": "Capacity in gigabytes"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order an USB key for this server"
    },
    {
      "path": "/order/dedicatedCloud",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the PCC service"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/additionalBandwidth",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
              "name": "bandwidth",
              "dataType": "dedicatedCloud.AdditionalBandwidthEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.AdditionalBandwidthEnum",
              "required": true,
              "description": "How much additional bandwidth do you want ?"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'additionalBandwidth' option"
        }
      ],
      "description": "Order additional bandwidth in your Private Cloud"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "bandwidth",
              "dataType": "dedicatedCloud.AdditionalBandwidthEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.AdditionalBandwidthEnum",
              "required": true,
              "description": "How much additional bandwidth do you want ?"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "bandwidth",
              "dataType": "dedicatedCloud.AdditionalBandwidthEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.AdditionalBandwidthEnum",
              "required": true,
              "description": "How much additional bandwidth do you want ?"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order additional bandwidth in your Private Cloud"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/filer",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
              "name": "quantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Quantity of filer you want to order (default 1)"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Filer profile you want to order (\"name\" field in a profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)"
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Datacenter where the filer will be mounted (if not precised, will be mounted in each Datacenter of this Private Cloud)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'filer' option"
        }
      ],
      "description": "Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/filer/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Quantity of filer you want to order (default 1)"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Filer profile you want to order (\"name\" field in a profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)"
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Datacenter where the filer will be mounted (if not precised, will be mounted in each Datacenter of this Private Cloud)"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Quantity of filer you want to order (default 1)"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Filer profile you want to order (\"name\" field in a profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)"
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Datacenter where the filer will be mounted (if not precised, will be mounted in each Datacenter of this Private Cloud)"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/host",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Datacenter where the Host will be added"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Host profile you want to order (\"name\" field of a Profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Quantity of hosts you want to order (default 1)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'host' option"
        }
      ],
      "description": "Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/host/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Datacenter where the Host will be added"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Host profile you want to order (\"name\" field of a Profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Quantity of hosts you want to order (default 1)"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Host profile you want to order (\"name\" field of a Profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Quantity of hosts you want to order (default 1)"
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Datacenter where the Host will be added"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/ip",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
              "name": "description",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Information visible on whois (minimum 3 and maximum 250 alphanumeric characters)"
            },
            {
              "name": "usage",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Basic information of how will this bloc be used (as \"web\",\"ssl\",\"cloud\" or other things)"
            },
            {
              "name": "size",
              "dataType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "required": true,
              "description": "The network ranges orderable"
            },
            {
              "name": "country",
              "dataType": "dedicatedCloud.IpCountriesEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.IpCountriesEnum",
              "required": true,
              "description": "This Ip block country"
            },
            {
              "name": "estimatedClientsNumber",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "How much clients would be hosted on those ips ?"
            },
            {
              "name": "networkName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Information visible on whois (between 2 and maximum 20 alphanumeric characters)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'ip' option"
        }
      ],
      "description": "Order an IP block for your Private Cloud"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/ip/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Information visible on whois (minimum 3 and maximum 250 alphanumeric characters)"
            },
            {
              "name": "usage",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Basic information of how will this bloc be used (as \"web\",\"ssl\",\"cloud\" or other things)"
            },
            {
              "name": "size",
              "dataType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "required": true,
              "description": "The network ranges orderable"
            },
            {
              "name": "country",
              "dataType": "dedicatedCloud.IpCountriesEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.IpCountriesEnum",
              "required": true,
              "description": "This Ip block country"
            },
            {
              "name": "estimatedClientsNumber",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "How much clients would be hosted on those ips ?"
            },
            {
              "name": "networkName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Information visible on whois (between 2 and maximum 20 alphanumeric characters)"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Information visible on whois (minimum 3 and maximum 250 alphanumeric characters)"
            },
            {
              "name": "usage",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Basic information of how will this bloc be used (as \"web\",\"ssl\",\"cloud\" or other things)"
            },
            {
              "name": "size",
              "dataType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "required": true,
              "description": "The network ranges orderable"
            },
            {
              "name": "country",
              "dataType": "dedicatedCloud.IpCountriesEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.IpCountriesEnum",
              "required": true,
              "description": "This Ip block country"
            },
            {
              "name": "estimatedClientsNumber",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "How much clients would be hosted on those ips ?"
            },
            {
              "name": "networkName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Information visible on whois (between 2 and maximum 20 alphanumeric characters)"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order an IP block for your Private Cloud"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/spla",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Enable windows templates (SPLA) in your Private Cloud"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/upgradeRessource",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
              "name": "upgradedRessourceId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "The id of a particular ressource you want to upgrade in your Private Cloud (useless for \"all\" UpgradeRessourceTypeEnum)"
            },
            {
              "name": "upgradeType",
              "dataType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "required": true,
              "description": "The type of upgrade you want to process on the ressource(s)"
            },
            {
              "name": "upgradedRessourceType",
              "dataType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "required": true,
              "description": "The type of ressource you want to upgrade."
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgradeRessource' option"
        }
      ],
      "description": "Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
              "name": "upgradedRessourceId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "The id of a particular ressource you want to upgrade in your Private Cloud (useless for \"all\" UpgradeRessourceTypeEnum)"
            },
            {
              "name": "upgradeType",
              "dataType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "required": true,
              "description": "The type of upgrade you want to process on the ressource(s)"
            },
            {
              "name": "upgradedRessourceType",
              "dataType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "required": true,
              "description": "The type of ressource you want to upgrade."
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "upgradeType",
              "dataType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "required": true,
              "description": "The type of upgrade you want to process on the ressource(s)"
            },
            {
              "name": "upgradedRessourceType",
              "dataType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "required": true,
              "description": "The type of ressource you want to upgrade."
            },
            {
              "name": "upgradedRessourceId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "The id of a particular ressource you want to upgrade in your Private Cloud (useless for \"all\" UpgradeRessourceTypeEnum)"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/vdi",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
              "name": "secondPublicIpAddress",
              "dataType": "ip",
              "paramType": "query",
              "fullType": "ip",
              "required": true,
              "description": "Another avaiable ip from one of your Private Cloud public IP blocks"
            },
            {
              "name": "firstPublicIpAddress",
              "dataType": "ip",
              "paramType": "query",
              "fullType": "ip",
              "required": true,
              "description": "An avaiable ip from one of your Private Cloud public IP blocks"
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Datacenter where the VDI option will be enabled"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "secondPublicIpAddress",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": true,
              "description": "Another avaiable ip from one of your Private Cloud public IP blocks"
            },
            {
              "name": "firstPublicIpAddress",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": true,
              "description": "An avaiable ip from one of your Private Cloud public IP blocks"
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Datacenter where the VDI option will be enabled"
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order VDI option in a given Datacenter"
    },
    {
      "path": "/order/license/cloudLinux/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "version",
              "dataType": "license.CloudLinuxVersionEnum",
              "paramType": "query",
              "fullType": "license.CloudLinuxVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/cloudLinux/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "version",
              "dataType": "license.CloudLinuxVersionEnum",
              "paramType": "query",
              "fullType": "license.CloudLinuxVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "version",
              "dataType": "license.CloudLinuxVersionEnum",
              "paramType": "body",
              "fullType": "license.CloudLinuxVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/cpanel",
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
      "description": "Operations about the LICENSE service"
    },
    {
      "path": "/order/license/cpanel/new",
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
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "version",
              "dataType": "license.OrderableCpanelVersionEnum",
              "paramType": "query",
              "fullType": "license.OrderableCpanelVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/cpanel/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "version",
              "dataType": "license.OrderableCpanelVersionEnum",
              "paramType": "query",
              "fullType": "license.OrderableCpanelVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "version",
              "dataType": "license.OrderableCpanelVersionEnum",
              "paramType": "body",
              "fullType": "license.OrderableCpanelVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "body",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/cpanel/{serviceName}",
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
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/license/cpanel/{serviceName}/upgrade",
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
              "name": "version",
              "dataType": "license.OrderableCpanelVersionEnum",
              "paramType": "query",
              "fullType": "license.OrderableCpanelVersionEnum",
              "required": true,
              "description": "Wanted new version"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option"
        }
      ],
      "description": "Upgrade this license version"
    },
    {
      "path": "/order/license/cpanel/{serviceName}/upgrade/{duration}",
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "version",
              "dataType": "license.OrderableCpanelVersionEnum",
              "paramType": "query",
              "fullType": "license.OrderableCpanelVersionEnum",
              "required": true,
              "description": "Wanted new version"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "version",
              "dataType": "license.OrderableCpanelVersionEnum",
              "paramType": "body",
              "fullType": "license.OrderableCpanelVersionEnum",
              "required": true,
              "description": "Wanted new version"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Upgrade this license version"
    },
    {
      "path": "/order/license/directadmin/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "version",
              "dataType": "license.OrderableDirectAdminVersionEnum",
              "paramType": "query",
              "fullType": "license.OrderableDirectAdminVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/directadmin/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "version",
              "dataType": "license.OrderableDirectAdminVersionEnum",
              "paramType": "query",
              "fullType": "license.OrderableDirectAdminVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "version",
              "dataType": "license.OrderableDirectAdminVersionEnum",
              "paramType": "body",
              "fullType": "license.OrderableDirectAdminVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "body",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/plesk",
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
      "description": "Operations about the LICENSE service"
    },
    {
      "path": "/order/license/plesk/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "antivirus",
              "dataType": "license.OrderableAntivirusEnum",
              "paramType": "query",
              "fullType": "license.OrderableAntivirusEnum",
              "required": false,
              "description": "The antivirus to enable on this Plesk license"
            },
            {
              "name": "languagePackNumber",
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "paramType": "query",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "required": false,
              "description": "The amount of language pack numbers to include in this licences"
            },
            {
              "name": "domainNumber",
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "paramType": "query",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "required": false,
              "description": "This license domain number"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "resellerManagement",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Reseller management option activation"
            },
            {
              "name": "applicationSet",
              "dataType": "license.PleskApplicationSetEnum",
              "paramType": "query",
              "fullType": "license.PleskApplicationSetEnum",
              "required": false,
              "description": "Wanted application set"
            },
            {
              "name": "wordpressToolkit",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "WordpressToolkit option activation"
            },
            {
              "name": "powerpack",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "powerpack current activation state on your license"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "version",
              "dataType": "license.PleskVersionEnum",
              "paramType": "query",
              "fullType": "license.PleskVersionEnum",
              "required": true,
              "description": "This license version"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/plesk/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "antivirus",
              "dataType": "license.OrderableAntivirusEnum",
              "paramType": "query",
              "fullType": "license.OrderableAntivirusEnum",
              "required": false,
              "description": "The antivirus to enable on this Plesk license"
            },
            {
              "name": "languagePackNumber",
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "paramType": "query",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "required": false,
              "description": "The amount of language pack numbers to include in this licences"
            },
            {
              "name": "domainNumber",
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "paramType": "query",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "required": false,
              "description": "This license domain number"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "resellerManagement",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Reseller management option activation"
            },
            {
              "name": "applicationSet",
              "dataType": "license.PleskApplicationSetEnum",
              "paramType": "query",
              "fullType": "license.PleskApplicationSetEnum",
              "required": false,
              "description": "Wanted application set"
            },
            {
              "name": "wordpressToolkit",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "WordpressToolkit option activation"
            },
            {
              "name": "powerpack",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "powerpack current activation state on your license"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "version",
              "dataType": "license.PleskVersionEnum",
              "paramType": "query",
              "fullType": "license.PleskVersionEnum",
              "required": true,
              "description": "This license version"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "resellerManagement",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Reseller management option activation"
            },
            {
              "name": "applicationSet",
              "dataType": "license.PleskApplicationSetEnum",
              "paramType": "body",
              "fullType": "license.PleskApplicationSetEnum",
              "required": false,
              "description": "Wanted application set"
            },
            {
              "name": "powerpack",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "powerpack current activation state on your license"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "version",
              "dataType": "license.PleskVersionEnum",
              "paramType": "body",
              "fullType": "license.PleskVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "antivirus",
              "dataType": "license.OrderableAntivirusEnum",
              "paramType": "body",
              "fullType": "license.OrderableAntivirusEnum",
              "required": false,
              "description": "The antivirus to enable on this Plesk license"
            },
            {
              "name": "languagePackNumber",
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "paramType": "body",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "required": false,
              "description": "The amount of language pack numbers to include in this licences"
            },
            {
              "name": "domainNumber",
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "paramType": "body",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "required": false,
              "description": "This license domain number"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "body",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "wordpressToolkit",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "WordpressToolkit option activation"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/plesk/{serviceName}",
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
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/license/plesk/{serviceName}/upgrade",
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
              "name": "languagePackNumber",
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "paramType": "query",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "required": false,
              "description": "The amount (between 0 and 5) of language pack numbers to include in this licences"
            },
            {
              "name": "antivirus",
              "dataType": "license.OrderableAntivirusEnum",
              "paramType": "query",
              "fullType": "license.OrderableAntivirusEnum",
              "required": false,
              "description": "The antivirus to enable on this Plesk license"
            },
            {
              "name": "applicationSet",
              "dataType": "license.PleskApplicationSetEnum",
              "paramType": "query",
              "fullType": "license.PleskApplicationSetEnum",
              "required": false,
              "description": "Wanted application set"
            },
            {
              "name": "resellerManagement",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Reseller management option activation"
            },
            {
              "name": "antispam",
              "dataType": "license.OrderableAntispamEnum",
              "paramType": "query",
              "fullType": "license.OrderableAntispamEnum",
              "required": false,
              "description": "The antispam currently enabled on this Plesk License"
            },
            {
              "name": "domainNumber",
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "paramType": "query",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "required": false,
              "description": "This license domain number"
            },
            {
              "name": "powerpack",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "powerpack current activation state on your license"
            },
            {
              "name": "wordpressToolkit",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "WordpressToolkit option activation"
            },
            {
              "name": "version",
              "dataType": "license.PleskVersionEnum",
              "paramType": "query",
              "fullType": "license.PleskVersionEnum",
              "required": false,
              "description": "This license version"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option"
        }
      ],
      "description": "Upgrade this license with some given options"
    },
    {
      "path": "/order/license/plesk/{serviceName}/upgrade/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
              "name": "languagePackNumber",
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "paramType": "query",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "required": false,
              "description": "The amount (between 0 and 5) of language pack numbers to include in this licences"
            },
            {
              "name": "antivirus",
              "dataType": "license.OrderableAntivirusEnum",
              "paramType": "query",
              "fullType": "license.OrderableAntivirusEnum",
              "required": false,
              "description": "The antivirus to enable on this Plesk license"
            },
            {
              "name": "applicationSet",
              "dataType": "license.PleskApplicationSetEnum",
              "paramType": "query",
              "fullType": "license.PleskApplicationSetEnum",
              "required": false,
              "description": "Wanted application set"
            },
            {
              "name": "resellerManagement",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Reseller management option activation"
            },
            {
              "name": "antispam",
              "dataType": "license.OrderableAntispamEnum",
              "paramType": "query",
              "fullType": "license.OrderableAntispamEnum",
              "required": false,
              "description": "The antispam currently enabled on this Plesk License"
            },
            {
              "name": "domainNumber",
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "paramType": "query",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "required": false,
              "description": "This license domain number"
            },
            {
              "name": "powerpack",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "powerpack current activation state on your license"
            },
            {
              "name": "wordpressToolkit",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "WordpressToolkit option activation"
            },
            {
              "name": "version",
              "dataType": "license.PleskVersionEnum",
              "paramType": "query",
              "fullType": "license.PleskVersionEnum",
              "required": false,
              "description": "This license version"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "antivirus",
              "dataType": "license.OrderableAntivirusEnum",
              "paramType": "body",
              "fullType": "license.OrderableAntivirusEnum",
              "required": false,
              "description": "The antivirus to enable on this Plesk license"
            },
            {
              "name": "applicationSet",
              "dataType": "license.PleskApplicationSetEnum",
              "paramType": "body",
              "fullType": "license.PleskApplicationSetEnum",
              "required": false,
              "description": "Wanted application set"
            },
            {
              "name": "resellerManagement",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Reseller management option activation"
            },
            {
              "name": "version",
              "dataType": "license.PleskVersionEnum",
              "paramType": "body",
              "fullType": "license.PleskVersionEnum",
              "required": false,
              "description": "This license version"
            },
            {
              "name": "languagePackNumber",
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "paramType": "body",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "required": false,
              "description": "The amount (between 0 and 5) of language pack numbers to include in this licences"
            },
            {
              "name": "domainNumber",
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "paramType": "body",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "required": false,
              "description": "This license domain number"
            },
            {
              "name": "powerpack",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "powerpack current activation state on your license"
            },
            {
              "name": "wordpressToolkit",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "WordpressToolkit option activation"
            },
            {
              "name": "antispam",
              "dataType": "license.OrderableAntispamEnum",
              "paramType": "body",
              "fullType": "license.OrderableAntispamEnum",
              "required": false,
              "description": "The antispam currently enabled on this Plesk License"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Upgrade this license with some given options"
    },
    {
      "path": "/order/license/sqlserver",
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
      "description": "Operations about the LICENSE service"
    },
    {
      "path": "/order/license/sqlserver/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "version",
              "dataType": "license.SqlServerVersionEnum",
              "paramType": "query",
              "fullType": "license.SqlServerVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/sqlserver/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "version",
              "dataType": "license.SqlServerVersionEnum",
              "paramType": "query",
              "fullType": "license.SqlServerVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "version",
              "dataType": "license.SqlServerVersionEnum",
              "paramType": "body",
              "fullType": "license.SqlServerVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/sqlserver/{serviceName}",
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
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/license/sqlserver/{serviceName}/upgrade",
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
              "name": "version",
              "dataType": "license.SqlServerVersionEnum",
              "paramType": "query",
              "fullType": "license.SqlServerVersionEnum",
              "required": true,
              "description": "This license version"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option"
        }
      ],
      "description": "Upgrade this license with some given options"
    },
    {
      "path": "/order/license/sqlserver/{serviceName}/upgrade/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
              "name": "version",
              "dataType": "license.SqlServerVersionEnum",
              "paramType": "query",
              "fullType": "license.SqlServerVersionEnum",
              "required": true,
              "description": "This license version"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "version",
              "dataType": "license.SqlServerVersionEnum",
              "paramType": "body",
              "fullType": "license.SqlServerVersionEnum",
              "required": true,
              "description": "This license version"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Upgrade this license with some given options"
    },
    {
      "path": "/order/license/virtuozzo",
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
      "description": "Operations about the LICENSE service"
    },
    {
      "path": "/order/license/virtuozzo/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "version",
              "dataType": "license.OrderableVirtuozzoVersionEnum",
              "paramType": "query",
              "fullType": "license.OrderableVirtuozzoVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "containerNumber",
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "paramType": "query",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "required": true,
              "description": "How much container is this license able to manage ..."
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/virtuozzo/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "version",
              "dataType": "license.OrderableVirtuozzoVersionEnum",
              "paramType": "query",
              "fullType": "license.OrderableVirtuozzoVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "containerNumber",
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "paramType": "query",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "required": true,
              "description": "How much container is this license able to manage ..."
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "version",
              "dataType": "license.OrderableVirtuozzoVersionEnum",
              "paramType": "body",
              "fullType": "license.OrderableVirtuozzoVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "body",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "containerNumber",
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "paramType": "body",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "required": true,
              "description": "How much container is this license able to manage ..."
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/virtuozzo/{serviceName}",
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
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/license/virtuozzo/{serviceName}/upgrade",
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
              "name": "containerNumber",
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "paramType": "query",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "required": true,
              "description": "How much container is this license able to manage ..."
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option"
        }
      ],
      "description": "Upgrade this license with some given options"
    },
    {
      "path": "/order/license/virtuozzo/{serviceName}/upgrade/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
              "name": "containerNumber",
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "paramType": "query",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "required": true,
              "description": "How much container is this license able to manage ..."
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "containerNumber",
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "paramType": "body",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "required": true,
              "description": "How much container is this license able to manage ..."
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Upgrade this license with some given options"
    },
    {
      "path": "/order/license/windows",
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
      "description": "Operations about the LICENSE service"
    },
    {
      "path": "/order/license/windows/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "version",
              "dataType": "license.WindowsOsVersionEnum",
              "paramType": "query",
              "fullType": "license.WindowsOsVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "sqlVersion",
              "dataType": "license.WindowsSqlVersionEnum",
              "paramType": "query",
              "fullType": "license.WindowsSqlVersionEnum",
              "required": false,
              "description": "The SQL Server version to enable on this license Windows license"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/windows/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "version",
              "dataType": "license.WindowsOsVersionEnum",
              "paramType": "query",
              "fullType": "license.WindowsOsVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "sqlVersion",
              "dataType": "license.WindowsSqlVersionEnum",
              "paramType": "query",
              "fullType": "license.WindowsSqlVersionEnum",
              "required": false,
              "description": "The SQL Server version to enable on this license Windows license"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "sqlVersion",
              "dataType": "license.WindowsSqlVersionEnum",
              "paramType": "body",
              "fullType": "license.WindowsSqlVersionEnum",
              "required": false,
              "description": "The SQL Server version to enable on this license Windows license"
            },
            {
              "name": "version",
              "dataType": "license.WindowsOsVersionEnum",
              "paramType": "body",
              "fullType": "license.WindowsOsVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "body",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/windows/{serviceName}",
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
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/license/windows/{serviceName}/upgrade",
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
              "name": "sqlVersion",
              "dataType": "license.WindowsSqlVersionEnum",
              "paramType": "query",
              "fullType": "license.WindowsSqlVersionEnum",
              "required": false,
              "description": "The SQL Server version to enable on this license Windows license"
            },
            {
              "name": "version",
              "dataType": "license.WindowsOsVersionEnum",
              "paramType": "query",
              "fullType": "license.WindowsOsVersionEnum",
              "required": false,
              "description": "The windows version you want to enable on your windows license"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option"
        }
      ],
      "description": "Upgrade this license with some given options"
    },
    {
      "path": "/order/license/windows/{serviceName}/upgrade/{duration}",
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "sqlVersion",
              "dataType": "license.WindowsSqlVersionEnum",
              "paramType": "query",
              "fullType": "license.WindowsSqlVersionEnum",
              "required": false,
              "description": "The SQL Server version to enable on this license Windows license"
            },
            {
              "name": "version",
              "dataType": "license.WindowsOsVersionEnum",
              "paramType": "query",
              "fullType": "license.WindowsOsVersionEnum",
              "required": false,
              "description": "The windows version you want to enable on your windows license"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "sqlVersion",
              "dataType": "license.WindowsSqlVersionEnum",
              "paramType": "body",
              "fullType": "license.WindowsSqlVersionEnum",
              "required": false,
              "description": "The SQL Server version to enable on this license Windows license"
            },
            {
              "name": "version",
              "dataType": "license.WindowsOsVersionEnum",
              "paramType": "body",
              "fullType": "license.WindowsOsVersionEnum",
              "required": false,
              "description": "The windows version you want to enable on your windows license"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Upgrade this license with some given options"
    },
    {
      "path": "/order/veeamCloudConnect",
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
      "description": "Operations about the VEEAMCC service"
    },
    {
      "path": "/order/veeamCloudConnect/{serviceName}",
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
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/veeamCloudConnect/{serviceName}/upgrade",
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
              "name": "offer",
              "dataType": "veeamCloudConnect.Offer",
              "paramType": "query",
              "fullType": "veeamCloudConnect.Offer",
              "required": true,
              "description": "The offer on which you want to be upgraded"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option"
        }
      ],
      "description": "Order an upgrade upon your Veeam Cloud Connect account"
    },
    {
      "path": "/order/veeamCloudConnect/{serviceName}/upgrade/{duration}",
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "offer",
              "dataType": "veeamCloudConnect.Offer",
              "paramType": "query",
              "fullType": "veeamCloudConnect.Offer",
              "required": true,
              "description": "The offer on which you want to be upgraded"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "offer",
              "dataType": "veeamCloudConnect.Offer",
              "paramType": "body",
              "fullType": "veeamCloudConnect.Offer",
              "required": true,
              "description": "The offer on which you want to be upgraded"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order an upgrade upon your Veeam Cloud Connect account"
    }
  ],
  "resourcePath": "/order",
  "basePath": "https://eu.api.soyoustart.com/1.0",
  "models": {
    "dedicated.server.BackupStorageCapacityEnum": {
      "id": "BackupStorageCapacityEnum",
      "namespace": "dedicated.server",
      "description": "Different backup storage capacity in gigabytes",
      "enum": [
        "1000",
        "10000",
        "500",
        "5000"
      ],
      "enumType": "long"
    },
    "dedicated.server.FirewallModelEnum": {
      "id": "FirewallModelEnum",
      "namespace": "dedicated.server",
      "description": "Firewall model name",
      "enum": [
        "asa5505",
        "asa5510",
        "asa5520"
      ],
      "enumType": "string"
    },
    "dedicated.server.IpBlockSizeEnum": {
      "id": "IpBlockSizeEnum",
      "namespace": "dedicated.server",
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
      "enumType": "long"
    },
    "dedicated.server.IpCountryEnum": {
      "id": "IpCountryEnum",
      "namespace": "dedicated.server",
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
      "enumType": "coreTypes.CountryEnum"
    },
    "dedicated.server.IpStaticCountryEnum": {
      "id": "IpStaticCountryEnum",
      "namespace": "dedicated.server",
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
      "enumType": "string"
    },
    "dedicated.server.IpTypeOrderableEnum": {
      "id": "IpTypeOrderableEnum",
      "namespace": "dedicated.server",
      "description": "Orderable IP type",
      "enum": [
        "failover",
        "static",
        "unshielded"
      ],
      "enumType": "string"
    },
    "dedicated.server.OrderableSysFeatureEnum": {
      "id": "OrderableSysFeatureEnum",
      "namespace": "dedicated.server",
      "description": "Dedicated server orderable features",
      "enum": [
        "backupProtocol",
        "monitoring"
      ],
      "enumType": "string"
    },
    "dedicated.server.UsbKeyCapacityEnum": {
      "id": "UsbKeyCapacityEnum",
      "namespace": "dedicated.server",
      "description": " Different USB key capacity in gigabytes",
      "enum": [
        "128",
        "16",
        "256",
        "32",
        "64"
      ],
      "enumType": "long"
    },
    "dedicatedCloud.AdditionalBandwidthEnum": {
      "id": "AdditionalBandwidthEnum",
      "namespace": "dedicatedCloud",
      "description": "All available additional bandwidth amounts in Mbps",
      "enum": [
        "1500"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.IpCountriesEnum": {
      "id": "IpCountriesEnum",
      "namespace": "dedicatedCloud",
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
      "enumType": "coreTypes.CountryEnum"
    },
    "dedicatedCloud.OrderableIpBlockRangeEnum": {
      "id": "OrderableIpBlockRangeEnum",
      "namespace": "dedicatedCloud",
      "description": "All orderable IP Block ranges in your Dedicated Cloud",
      "enum": [
        "24",
        "25",
        "26",
        "27",
        "28"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.ressources.UpgradeRessourceTypeEnum": {
      "id": "UpgradeRessourceTypeEnum",
      "namespace": "dedicatedCloud.ressources",
      "description": "The Dedicated Cloud ressource types that can be upgraded",
      "enum": [
        "account",
        "all",
        "filer",
        "host"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.ressources.UpgradeTypeEnum": {
      "id": "UpgradeTypeEnum",
      "namespace": "dedicatedCloud.ressources",
      "description": "The available billing type upgrade for Dedicated Cloud ressource",
      "enum": [
        "demoToMonthly",
        "freeSpareToHourly",
        "hourlyToMonthly"
      ],
      "enumType": "string"
    },
    "license.CloudLinuxVersionEnum": {
      "id": "CloudLinuxVersionEnum",
      "namespace": "license",
      "description": "All versions for CloudLinux product",
      "enum": [
        "SINGLE",
        "WITH_CPANEL",
        "WITH_PLESK12",
        "cloudlinux-license"
      ],
      "enumType": "string"
    },
    "license.LicenseTypeEnum": {
      "id": "LicenseTypeEnum",
      "namespace": "license",
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
      "enumType": "string"
    },
    "license.OrderableAntispamEnum": {
      "id": "OrderableAntispamEnum",
      "namespace": "license",
      "description": "All antispam available for Plesk products",
      "enum": [
        "SPAM_ASSASSIN"
      ],
      "enumType": "string"
    },
    "license.OrderableAntivirusEnum": {
      "id": "OrderableAntivirusEnum",
      "namespace": "license",
      "description": "All antivirus available for Plesk products",
      "enum": [
        "DR_WEB",
        "KASPERSKY_UNLIMITED_MAILBOXES",
        "kaspersky"
      ],
      "enumType": "string"
    },
    "license.OrderableCpanelVersionEnum": {
      "id": "OrderableCpanelVersionEnum",
      "namespace": "license",
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
      "enumType": "string"
    },
    "license.OrderableDirectAdminVersionEnum": {
      "id": "OrderableDirectAdminVersionEnum",
      "namespace": "license",
      "description": "All versions available for DirectAdmin products",
      "enum": [
        "DIRECTADMIN_1",
        "directadmin-license"
      ],
      "enumType": "string"
    },
    "license.OrderablePleskDomainNumberEnum": {
      "id": "OrderablePleskDomainNumberEnum",
      "namespace": "license",
      "description": "All domain available for Plesk products",
      "enum": [
        "10",
        "100",
        "30",
        "300",
        "hostingsuite",
        "unlimited"
      ],
      "enumType": "string"
    },
    "license.OrderablePleskLanguagePackEnum": {
      "id": "OrderablePleskLanguagePackEnum",
      "namespace": "license",
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
      "enumType": "string"
    },
    "license.OrderableVirtuozzoContainerNumberEnum": {
      "id": "OrderableVirtuozzoContainerNumberEnum",
      "namespace": "license",
      "description": "All quantities of container available for a Virtuozzo license",
      "enum": [
        "2_CPU_001_CONTAINER",
        "2_CPU_003_CONTAINER",
        "2_CPU_010_CONTAINER",
        "2_CPU_030_CONTAINER",
        "2_CPU_060_CONTAINER",
        "2_CPU_100_CONTAINER"
      ],
      "enumType": "string"
    },
    "license.OrderableVirtuozzoVersionEnum": {
      "id": "OrderableVirtuozzoVersionEnum",
      "namespace": "license",
      "description": "All versions available for Virtuozzo products",
      "enum": [
        "VIRTUOZZO_CONTAINERS_4_FOR_LINUX",
        "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS",
        "virtuozzo-4",
        "virtuozzo-4-for-windows"
      ],
      "enumType": "string"
    },
    "license.PleskApplicationSetEnum": {
      "id": "PleskApplicationSetEnum",
      "namespace": "license",
      "description": "Application set available for Plesk products",
      "enum": [
        "applicationpack",
        "developerpack",
        "power-pack-for-plesk12",
        "powerpack"
      ],
      "enumType": "string"
    },
    "license.PleskVersionEnum": {
      "id": "PleskVersionEnum",
      "namespace": "license",
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
      "enumType": "string"
    },
    "license.SqlServerVersionEnum": {
      "id": "SqlServerVersionEnum",
      "namespace": "license",
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
      "enumType": "string"
    },
    "license.WindowsOsVersionEnum": {
      "id": "WindowsOsVersionEnum",
      "namespace": "license",
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
      "enumType": "string"
    },
    "license.WindowsSqlVersionEnum": {
      "id": "WindowsSqlVersionEnum",
      "namespace": "license",
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
      "enumType": "string"
    },
    "order.Contract": {
      "id": "Contract",
      "namespace": "order",
      "description": "A contract",
      "properties": {
        "content": {
          "type": "text",
          "fullType": "text",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "order.CurrencyCodeEnum": {
      "id": "CurrencyCodeEnum",
      "namespace": "order",
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
      "enumType": "string"
    },
    "order.Order": {
      "id": "Order",
      "namespace": "order",
      "description": "An order",
      "properties": {
        "contracts": {
          "type": "order.Contract[]",
          "fullType": "order.Contract[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "details": {
          "type": "order.OrderDetail[]",
          "fullType": "order.OrderDetail[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "orderId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "prices": {
          "type": "order.OrderPrices",
          "fullType": "order.OrderPrices",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "order.OrderDetail": {
      "id": "OrderDetail",
      "namespace": "order",
      "description": "Detail of an order",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "detailType": {
          "type": "order.OrderDetailTypeEnum",
          "fullType": "order.OrderDetailTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "quantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "totalPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "unitPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "order.OrderDetailTypeEnum": {
      "id": "OrderDetailTypeEnum",
      "namespace": "order",
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
      "enumType": "string"
    },
    "order.OrderPrices": {
      "id": "OrderPrices",
      "namespace": "order",
      "description": "Prices of an order",
      "properties": {
        "tax": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "withTax": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "withoutTax": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "order.Price": {
      "id": "Price",
      "namespace": "order",
      "description": "Price with it's currency and textual representation",
      "properties": {
        "currencyCode": {
          "type": "order.CurrencyCodeEnum",
          "fullType": "order.CurrencyCodeEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "text": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "veeamCloudConnect.Offer": {
      "id": "Offer",
      "namespace": "veeamCloudConnect",
      "description": "All orderable Veeam Cloud Connect offers",
      "enum": [
        "advanced",
        "demo",
        "starter"
      ],
      "enumType": "string"
    }
  }
}