import {Schema} from '../../src/schema';

export const schema: Schema = {
  "basePath": "https://ca.api.soyoustart.com/1.0",
  "resourcePath": "/order",
  "apis": [
    {
      "operations": [
        {
          "description": "List available services",
          "parameters": [],
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "httpMethod": "GET",
          "responseFullType": "string[]",
          "resellerOnly": false
        }
      ],
      "path": "/order/dedicated/server",
      "description": "Operations about the DEDICATED service"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/ipMigration/{duration}",
      "description": "Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted",
      "operations": [
        {
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order",
          "description": "Get prices and contracts information",
          "noAuthentication": false,
          "parameters": [
            {
              "paramType": "query",
              "required": true,
              "dataType": "ipBlock",
              "fullType": "ipBlock",
              "name": "ip",
              "description": "The IP to move to this server"
            },
            {
              "dataType": "string",
              "paramType": "query",
              "required": true,
              "name": "token",
              "fullType": "string",
              "description": "IP migration token"
            },
            {
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            },
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "duration",
              "description": "Duration"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "order.Order"
        },
        {
          "resellerOnly": false,
          "responseFullType": "order.Order",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The IP to move to this server",
              "dataType": "ipBlock",
              "paramType": "body",
              "required": true,
              "name": "ip",
              "fullType": "ipBlock"
            },
            {
              "name": "token",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "body",
              "description": "IP migration token"
            },
            {
              "fullType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "Duration",
              "name": "duration",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            }
          ],
          "description": "Create order",
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST"
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "string[]",
          "resellerOnly": false,
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "description": "Get allowed durations for 'ipMigration' option",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The IP to move to this server",
              "name": "ip",
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "required": true,
              "paramType": "query"
            },
            {
              "description": "IP migration token",
              "dataType": "string",
              "paramType": "query",
              "required": true,
              "name": "token",
              "fullType": "string"
            },
            {
              "fullType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            }
          ]
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/ipMigration",
      "description": "Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted"
    },
    {
      "operations": [
        {
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The type of IP",
              "paramType": "query",
              "required": true,
              "dataType": "dedicated.server.IpTypeOrderableEnum",
              "fullType": "dedicated.server.IpTypeOrderableEnum",
              "name": "type"
            },
            {
              "description": "IP block size",
              "paramType": "query",
              "required": true,
              "dataType": "dedicated.server.IpBlockSizeEnum",
              "fullType": "dedicated.server.IpBlockSizeEnum",
              "name": "blockSize"
            },
            {
              "paramType": "query",
              "required": false,
              "dataType": "dedicated.server.IpCountryEnum",
              "fullType": "dedicated.server.IpCountryEnum",
              "name": "country",
              "description": "IP localization"
            },
            {
              "description": "Your organisation id to add on block informations",
              "name": "organisationId",
              "fullType": "string",
              "dataType": "string",
              "required": false,
              "paramType": "query"
            },
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server"
            },
            {
              "name": "duration",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "description": "Duration"
            }
          ],
          "description": "Get prices and contracts information",
          "resellerOnly": false,
          "responseFullType": "order.Order"
        },
        {
          "responseFullType": "order.Order",
          "resellerOnly": false,
          "description": "Create order",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.IpTypeOrderableEnum",
              "paramType": "body",
              "required": true,
              "name": "type",
              "fullType": "dedicated.server.IpTypeOrderableEnum",
              "description": "The type of IP"
            },
            {
              "fullType": "dedicated.server.IpBlockSizeEnum",
              "name": "blockSize",
              "required": true,
              "paramType": "body",
              "dataType": "dedicated.server.IpBlockSizeEnum",
              "description": "IP block size"
            },
            {
              "description": "IP localization",
              "fullType": "dedicated.server.IpCountryEnum",
              "name": "country",
              "required": false,
              "paramType": "body",
              "dataType": "dedicated.server.IpCountryEnum"
            },
            {
              "description": "Your organisation id to add on block informations",
              "fullType": "string",
              "name": "organisationId",
              "required": false,
              "paramType": "body",
              "dataType": "string"
            },
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            },
            {
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order",
          "httpMethod": "POST"
        }
      ],
      "description": "Order IP for this server",
      "path": "/order/dedicated/server/{serviceName}/ip/{duration}"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "description": "Get allowed durations for 'ip' option",
          "parameters": [
            {
              "description": "The type of IP",
              "fullType": "dedicated.server.IpTypeOrderableEnum",
              "name": "type",
              "required": true,
              "paramType": "query",
              "dataType": "dedicated.server.IpTypeOrderableEnum"
            },
            {
              "description": "IP block size",
              "name": "blockSize",
              "fullType": "dedicated.server.IpBlockSizeEnum",
              "dataType": "dedicated.server.IpBlockSizeEnum",
              "required": true,
              "paramType": "query"
            },
            {
              "description": "IP localization",
              "paramType": "query",
              "required": false,
              "dataType": "dedicated.server.IpCountryEnum",
              "fullType": "dedicated.server.IpCountryEnum",
              "name": "country"
            },
            {
              "paramType": "query",
              "required": false,
              "dataType": "string",
              "fullType": "string",
              "name": "organisationId",
              "description": "Your organisation id to add on block informations"
            },
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false
        }
      ],
      "description": "Order IP for this server",
      "path": "/order/dedicated/server/{serviceName}/ip"
    },
    {
      "description": "Order a feature for this server",
      "path": "/order/dedicated/server/{serviceName}/feature",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "httpMethod": "GET",
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "dedicated.server.OrderableSysFeatureEnum",
              "name": "feature",
              "required": true,
              "paramType": "query",
              "dataType": "dedicated.server.OrderableSysFeatureEnum",
              "description": "the feature"
            },
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "Get allowed durations for 'feature' option"
        }
      ]
    },
    {
      "description": "Order a feature for this server",
      "path": "/order/dedicated/server/{serviceName}/feature/{duration}",
      "operations": [
        {
          "responseFullType": "order.Order",
          "resellerOnly": false,
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.OrderableSysFeatureEnum",
              "paramType": "query",
              "required": true,
              "name": "feature",
              "fullType": "dedicated.server.OrderableSysFeatureEnum",
              "description": "the feature"
            },
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            },
            {
              "description": "Duration",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "duration",
              "fullType": "string"
            }
          ],
          "description": "Get prices and contracts information"
        },
        {
          "parameters": [
            {
              "dataType": "dedicated.server.OrderableSysFeatureEnum",
              "paramType": "body",
              "required": true,
              "name": "feature",
              "fullType": "dedicated.server.OrderableSysFeatureEnum",
              "description": "the feature"
            },
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            },
            {
              "name": "duration",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "description": "Duration"
            }
          ],
          "noAuthentication": false,
          "description": "Create order",
          "httpMethod": "POST",
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseFullType": "order.Order"
        }
      ]
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order",
          "description": "Get prices and contracts information",
          "parameters": [
            {
              "fullType": "dedicated.server.BackupStorageCapacityEnum",
              "name": "capacity",
              "required": true,
              "paramType": "query",
              "dataType": "dedicated.server.BackupStorageCapacityEnum",
              "description": "The capacity in gigabytes of your backup storage"
            },
            {
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            },
            {
              "description": "Duration",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "duration",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "order.Order"
        },
        {
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "paramType": "body",
              "required": true,
              "dataType": "dedicated.server.BackupStorageCapacityEnum",
              "fullType": "dedicated.server.BackupStorageCapacityEnum",
              "name": "capacity",
              "description": "The capacity in gigabytes of your backup storage"
            },
            {
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            },
            {
              "name": "duration",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "description": "Duration"
            }
          ],
          "noAuthentication": false,
          "description": "Create order",
          "resellerOnly": false,
          "responseFullType": "order.Order"
        }
      ],
      "description": "Order a backup storage for this server",
      "path": "/order/dedicated/server/{serviceName}/backupStorage/{duration}"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "httpMethod": "GET",
          "description": "Get allowed durations for 'backupStorage' option",
          "parameters": [
            {
              "fullType": "dedicated.server.BackupStorageCapacityEnum",
              "name": "capacity",
              "required": true,
              "paramType": "query",
              "dataType": "dedicated.server.BackupStorageCapacityEnum",
              "description": "The capacity in gigabytes of your backup storage"
            },
            {
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            }
          ],
          "noAuthentication": false
        }
      ],
      "description": "Order a backup storage for this server",
      "path": "/order/dedicated/server/{serviceName}/backupStorage"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/firewall/{duration}",
      "description": "order a Firewall for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order",
          "httpMethod": "GET",
          "description": "Get prices and contracts information",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Firewall type",
              "paramType": "query",
              "required": true,
              "dataType": "dedicated.server.FirewallModelEnum",
              "fullType": "dedicated.server.FirewallModelEnum",
              "name": "firewallModel"
            },
            {
              "description": "The internal name of your dedicated server",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            },
            {
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "duration",
              "fullType": "string",
              "description": "Duration"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "order.Order"
        },
        {
          "description": "Create order",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Firewall type",
              "paramType": "body",
              "required": true,
              "dataType": "dedicated.server.FirewallModelEnum",
              "fullType": "dedicated.server.FirewallModelEnum",
              "name": "firewallModel"
            },
            {
              "fullType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "fullType": "string",
              "name": "duration",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "description": "Duration"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order",
          "httpMethod": "POST",
          "resellerOnly": false,
          "responseFullType": "order.Order"
        }
      ]
    },
    {
      "operations": [
        {
          "description": "Get allowed durations for 'firewall' option",
          "parameters": [
            {
              "fullType": "dedicated.server.FirewallModelEnum",
              "name": "firewallModel",
              "required": true,
              "paramType": "query",
              "dataType": "dedicated.server.FirewallModelEnum",
              "description": "Firewall type"
            },
            {
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "httpMethod": "GET",
          "responseFullType": "string[]",
          "resellerOnly": false
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/firewall",
      "description": "order a Firewall for this server"
    },
    {
      "description": "List available options for this service",
      "path": "/order/dedicated/server/{serviceName}",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "description": "Get allowed options",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "fullType": "string"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "httpMethod": "GET"
        }
      ]
    },
    {
      "path": "/order/dedicated/server/{serviceName}/staticIP",
      "description": "Order a static IP for this server",
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "description": "Ip localization",
              "fullType": "dedicated.server.IpStaticCountryEnum",
              "name": "country",
              "required": true,
              "paramType": "query",
              "dataType": "dedicated.server.IpStaticCountryEnum"
            },
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "description": "Get allowed durations for 'staticIP' option",
          "resellerOnly": false,
          "responseFullType": "string[]"
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "order.Order",
          "resellerOnly": false,
          "description": "Get prices and contracts information",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "country",
              "fullType": "dedicated.server.IpStaticCountryEnum",
              "dataType": "dedicated.server.IpStaticCountryEnum",
              "required": true,
              "paramType": "query",
              "description": "Ip localization"
            },
            {
              "description": "The internal name of your dedicated server",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            },
            {
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "duration",
              "fullType": "string",
              "description": "Duration"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order",
          "httpMethod": "GET"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order",
          "httpMethod": "POST",
          "description": "Create order",
          "parameters": [
            {
              "name": "country",
              "fullType": "dedicated.server.IpStaticCountryEnum",
              "dataType": "dedicated.server.IpStaticCountryEnum",
              "required": true,
              "paramType": "body",
              "description": "Ip localization"
            },
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            },
            {
              "fullType": "string",
              "name": "duration",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "description": "Duration"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "order.Order"
        }
      ],
      "description": "Order a static IP for this server",
      "path": "/order/dedicated/server/{serviceName}/staticIP/{duration}"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "description": "Get allowed durations for 'kvmExpress' option",
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false
        }
      ],
      "description": "Order a kvmip express for this server",
      "path": "/order/dedicated/server/{serviceName}/kvmExpress"
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "description": "Get prices and contracts information",
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "responseFullType": "order.Order",
          "resellerOnly": false
        },
        {
          "resellerOnly": false,
          "responseFullType": "order.Order",
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order",
          "description": "Create order",
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "Duration",
              "name": "duration",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            }
          ],
          "noAuthentication": false
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/kvmExpress/{duration}",
      "description": "Order a kvmip express for this server"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "order.Order",
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Capacity in gigabytes",
              "fullType": "dedicated.server.UsbKeyCapacityEnum",
              "name": "capacity",
              "required": true,
              "paramType": "query",
              "dataType": "dedicated.server.UsbKeyCapacityEnum"
            },
            {
              "fullType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "Duration",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "duration",
              "fullType": "string"
            }
          ],
          "description": "Get prices and contracts information"
        },
        {
          "parameters": [
            {
              "description": "Capacity in gigabytes",
              "name": "capacity",
              "fullType": "dedicated.server.UsbKeyCapacityEnum",
              "dataType": "dedicated.server.UsbKeyCapacityEnum",
              "required": true,
              "paramType": "body"
            },
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            },
            {
              "fullType": "string",
              "name": "duration",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "description": "Duration"
            }
          ],
          "noAuthentication": false,
          "description": "Create order",
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "responseFullType": "order.Order",
          "resellerOnly": false
        }
      ],
      "description": "Order an USB key for this server",
      "path": "/order/dedicated/server/{serviceName}/usbKey/{duration}"
    },
    {
      "operations": [
        {
          "description": "Get allowed durations for 'usbKey' option",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "dedicated.server.UsbKeyCapacityEnum",
              "name": "capacity",
              "required": true,
              "paramType": "query",
              "dataType": "dedicated.server.UsbKeyCapacityEnum",
              "description": "Capacity in gigabytes"
            },
            {
              "fullType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "httpMethod": "GET",
          "responseFullType": "string[]",
          "resellerOnly": false
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/usbKey",
      "description": "Order an USB key for this server"
    },
    {
      "operations": [
        {
          "description": "Get allowed durations for 'failoverIP' option",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "dedicated.server.IpCountryEnum",
              "name": "country",
              "required": true,
              "paramType": "query",
              "dataType": "dedicated.server.IpCountryEnum",
              "description": "Ip localization"
            },
            {
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "fullType": "string"
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "resellerOnly": false,
          "responseFullType": "string[]"
        }
      ],
      "description": "Order a failover IP for this server",
      "path": "/order/dedicated/server/{serviceName}/failoverIP"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/failoverIP/{duration}",
      "description": "Order a failover IP for this server",
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "dataType": "dedicated.server.IpCountryEnum",
              "paramType": "query",
              "required": true,
              "name": "country",
              "fullType": "dedicated.server.IpCountryEnum",
              "description": "Ip localization"
            },
            {
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "duration",
              "description": "Duration"
            }
          ],
          "noAuthentication": false,
          "description": "Get prices and contracts information",
          "resellerOnly": false,
          "responseFullType": "order.Order"
        },
        {
          "responseFullType": "order.Order",
          "resellerOnly": false,
          "description": "Create order",
          "parameters": [
            {
              "description": "Ip localization",
              "dataType": "dedicated.server.IpCountryEnum",
              "paramType": "body",
              "required": true,
              "name": "country",
              "fullType": "dedicated.server.IpCountryEnum"
            },
            {
              "description": "The internal name of your dedicated server",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            },
            {
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "duration",
              "fullType": "string",
              "description": "Duration"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order",
          "httpMethod": "POST"
        }
      ]
    },
    {
      "path": "/order/license/directadmin/new/{duration}",
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "order.Order",
          "description": "Get prices and contracts information",
          "parameters": [
            {
              "name": "serviceType",
              "fullType": "license.LicenseTypeEnum",
              "dataType": "license.LicenseTypeEnum",
              "required": false,
              "paramType": "query",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "fullType": "ipv4",
              "name": "ip",
              "required": true,
              "paramType": "query",
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed"
            },
            {
              "description": "This license version",
              "name": "version",
              "fullType": "license.OrderableDirectAdminVersionEnum",
              "dataType": "license.OrderableDirectAdminVersionEnum",
              "required": true,
              "paramType": "query"
            },
            {
              "name": "duration",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "description": "Duration"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order",
          "httpMethod": "GET"
        },
        {
          "resellerOnly": false,
          "responseFullType": "order.Order",
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "paramType": "body",
              "required": false,
              "dataType": "license.LicenseTypeEnum",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "description": "Ip on which this license would be installed",
              "dataType": "ipv4",
              "paramType": "body",
              "required": true,
              "name": "ip",
              "fullType": "ipv4"
            },
            {
              "dataType": "license.OrderableDirectAdminVersionEnum",
              "paramType": "body",
              "required": true,
              "name": "version",
              "fullType": "license.OrderableDirectAdminVersionEnum",
              "description": "This license version"
            },
            {
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "description": "Create order"
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "string[]",
          "resellerOnly": false,
          "description": "Get allowed durations for 'new' option",
          "parameters": [
            {
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "paramType": "query",
              "required": false,
              "dataType": "license.LicenseTypeEnum",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType"
            },
            {
              "fullType": "ipv4",
              "name": "ip",
              "required": true,
              "paramType": "query",
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed"
            },
            {
              "description": "This license version",
              "dataType": "license.OrderableDirectAdminVersionEnum",
              "paramType": "query",
              "required": true,
              "name": "version",
              "fullType": "license.OrderableDirectAdminVersionEnum"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]"
        }
      ],
      "description": "Order a new license on a given Ip with some given options",
      "path": "/order/license/directadmin/new"
    },
    {
      "description": "Upgrade this license with some given options",
      "path": "/order/license/sqlserver/{serviceName}/upgrade/{duration}",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "order.Order",
          "description": "Get prices and contracts information",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "This license version",
              "dataType": "license.SqlServerVersionEnum",
              "paramType": "query",
              "required": true,
              "name": "version",
              "fullType": "license.SqlServerVersionEnum"
            },
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The name of your SQL Server license"
            },
            {
              "name": "duration",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "description": "Duration"
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order"
        },
        {
          "resellerOnly": false,
          "responseFullType": "order.Order",
          "description": "Create order",
          "parameters": [
            {
              "description": "This license version",
              "dataType": "license.SqlServerVersionEnum",
              "paramType": "body",
              "required": true,
              "name": "version",
              "fullType": "license.SqlServerVersionEnum"
            },
            {
              "description": "The name of your SQL Server license",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            },
            {
              "description": "Duration",
              "name": "duration",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "httpMethod": "GET",
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "description": "This license version",
              "fullType": "license.SqlServerVersionEnum",
              "name": "version",
              "required": true,
              "paramType": "query",
              "dataType": "license.SqlServerVersionEnum"
            },
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "description": "The name of your SQL Server license"
            }
          ],
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option"
        }
      ],
      "description": "Upgrade this license with some given options",
      "path": "/order/license/sqlserver/{serviceName}/upgrade"
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The name of your SQL Server license"
            }
          ],
          "noAuthentication": false,
          "description": "Get allowed options",
          "resellerOnly": false,
          "responseFullType": "string[]"
        }
      ],
      "description": "List available options for this service",
      "path": "/order/license/sqlserver/{serviceName}"
    },
    {
      "path": "/order/license/sqlserver",
      "description": "Operations about the LICENSE service",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "description": "List available services",
          "parameters": [],
          "noAuthentication": false
        }
      ]
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order",
          "description": "Get prices and contracts information",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "version",
              "fullType": "license.SqlServerVersionEnum",
              "dataType": "license.SqlServerVersionEnum",
              "required": true,
              "paramType": "query",
              "description": "This license version"
            },
            {
              "dataType": "ipv4",
              "paramType": "query",
              "required": true,
              "name": "ip",
              "fullType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "duration",
              "fullType": "string",
              "description": "Duration"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "order.Order"
        },
        {
          "description": "Create order",
          "parameters": [
            {
              "name": "version",
              "fullType": "license.SqlServerVersionEnum",
              "dataType": "license.SqlServerVersionEnum",
              "required": true,
              "paramType": "body",
              "description": "This license version"
            },
            {
              "dataType": "ipv4",
              "paramType": "body",
              "required": true,
              "name": "ip",
              "fullType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "duration",
              "fullType": "string",
              "description": "Duration"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order",
          "resellerOnly": false,
          "responseFullType": "order.Order"
        }
      ],
      "description": "Order a new license on a given Ip with some given options",
      "path": "/order/license/sqlserver/new/{duration}"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "path": "/order/license/sqlserver/new",
      "operations": [
        {
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "description": "This license version",
              "name": "version",
              "fullType": "license.SqlServerVersionEnum",
              "dataType": "license.SqlServerVersionEnum",
              "required": true,
              "paramType": "query"
            },
            {
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "required": true,
              "paramType": "query",
              "dataType": "ipv4"
            }
          ],
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option",
          "responseFullType": "string[]",
          "resellerOnly": false
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "description": "Get allowed durations for 'new' option",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "dataType": "license.OrderableCpanelVersionEnum",
              "required": true,
              "paramType": "query",
              "description": "This license version"
            },
            {
              "name": "serviceType",
              "fullType": "license.LicenseTypeEnum",
              "dataType": "license.LicenseTypeEnum",
              "required": false,
              "paramType": "query",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "paramType": "query",
              "required": true,
              "dataType": "ipv4",
              "fullType": "ipv4",
              "name": "ip",
              "description": "Ip on which this license would be installed"
            }
          ]
        }
      ],
      "description": "Order a new license on a given Ip with some given options",
      "path": "/order/license/cpanel/new"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "path": "/order/license/cpanel/new/{duration}",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "order.Order",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "This license version",
              "name": "version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "dataType": "license.OrderableCpanelVersionEnum",
              "required": true,
              "paramType": "query"
            },
            {
              "paramType": "query",
              "required": false,
              "dataType": "license.LicenseTypeEnum",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "ip",
              "fullType": "ipv4",
              "dataType": "ipv4",
              "required": true,
              "paramType": "query",
              "description": "Ip on which this license would be installed"
            },
            {
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            }
          ],
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "noAuthentication": false,
          "parameters": [
            {
              "description": "This license version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "name": "version",
              "required": true,
              "paramType": "body",
              "dataType": "license.OrderableCpanelVersionEnum"
            },
            {
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "required": false,
              "paramType": "body",
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "fullType": "ipv4",
              "name": "ip",
              "required": true,
              "paramType": "body",
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "duration",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "description": "Duration"
            }
          ],
          "description": "Create order",
          "httpMethod": "POST",
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseFullType": "order.Order"
        }
      ]
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [],
          "noAuthentication": false,
          "description": "List available services",
          "resellerOnly": false,
          "responseFullType": "string[]"
        }
      ],
      "path": "/order/license/cpanel",
      "description": "Operations about the LICENSE service"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "order.Order",
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableCpanelVersionEnum",
              "paramType": "query",
              "required": true,
              "name": "version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "description": "Wanted new version"
            },
            {
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "fullType": "string",
              "description": "The name of your Cpanel license"
            },
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "duration",
              "description": "Duration"
            }
          ],
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order",
          "httpMethod": "POST",
          "description": "Create order",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "license.OrderableCpanelVersionEnum",
              "name": "version",
              "required": true,
              "paramType": "body",
              "dataType": "license.OrderableCpanelVersionEnum",
              "description": "Wanted new version"
            },
            {
              "description": "The name of your Cpanel license",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "fullType": "string"
            },
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "duration",
              "description": "Duration"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "order.Order"
        }
      ],
      "path": "/order/license/cpanel/{serviceName}/upgrade/{duration}",
      "description": "Upgrade this license version"
    },
    {
      "description": "Upgrade this license version",
      "path": "/order/license/cpanel/{serviceName}/upgrade",
      "operations": [
        {
          "parameters": [
            {
              "description": "Wanted new version",
              "name": "version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "dataType": "license.OrderableCpanelVersionEnum",
              "required": true,
              "paramType": "query"
            },
            {
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "fullType": "string",
              "description": "The name of your Cpanel license"
            }
          ],
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option",
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseFullType": "string[]"
        }
      ]
    },
    {
      "description": "List available options for this service",
      "path": "/order/license/cpanel/{serviceName}",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "parameters": [
            {
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "description": "Get allowed options",
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET"
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "order.Order",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order",
          "httpMethod": "GET",
          "description": "Get prices and contracts information",
          "parameters": [
            {
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
              "required": true,
              "paramType": "query",
              "dataType": "license.WindowsOsVersionEnum",
              "description": "This license version"
            },
            {
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "required": false,
              "paramType": "query",
              "dataType": "license.LicenseTypeEnum"
            },
            {
              "description": "The SQL Server version to enable on this license Windows license",
              "paramType": "query",
              "required": false,
              "dataType": "license.WindowsSqlVersionEnum",
              "fullType": "license.WindowsSqlVersionEnum",
              "name": "sqlVersion"
            },
            {
              "fullType": "ipv4",
              "name": "ip",
              "required": true,
              "paramType": "query",
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "description": "Duration",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "duration"
            }
          ],
          "noAuthentication": false
        },
        {
          "resellerOnly": false,
          "responseFullType": "order.Order",
          "noAuthentication": false,
          "parameters": [
            {
              "paramType": "body",
              "required": true,
              "dataType": "license.WindowsOsVersionEnum",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
              "description": "This license version"
            },
            {
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "paramType": "body",
              "required": false,
              "dataType": "license.LicenseTypeEnum",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType"
            },
            {
              "fullType": "license.WindowsSqlVersionEnum",
              "name": "sqlVersion",
              "required": false,
              "paramType": "body",
              "dataType": "license.WindowsSqlVersionEnum",
              "description": "The SQL Server version to enable on this license Windows license"
            },
            {
              "name": "ip",
              "fullType": "ipv4",
              "dataType": "ipv4",
              "required": true,
              "paramType": "body",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            }
          ],
          "description": "Create order",
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST"
        }
      ],
      "description": "Order a new license on a given Ip with some given options",
      "path": "/order/license/windows/new/{duration}"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "description": "Get allowed durations for 'new' option",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "This license version",
              "paramType": "query",
              "required": true,
              "dataType": "license.WindowsOsVersionEnum",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version"
            },
            {
              "name": "serviceType",
              "fullType": "license.LicenseTypeEnum",
              "dataType": "license.LicenseTypeEnum",
              "required": false,
              "paramType": "query",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "description": "The SQL Server version to enable on this license Windows license",
              "name": "sqlVersion",
              "fullType": "license.WindowsSqlVersionEnum",
              "dataType": "license.WindowsSqlVersionEnum",
              "required": false,
              "paramType": "query"
            },
            {
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "required": true,
              "paramType": "query",
              "dataType": "ipv4"
            }
          ]
        }
      ],
      "path": "/order/license/windows/new",
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "description": "List available services",
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "string[]"
        }
      ],
      "description": "Operations about the LICENSE service",
      "path": "/order/license/windows"
    },
    {
      "operations": [
        {
          "responseFullType": "string[]",
          "resellerOnly": false,
          "description": "Get allowed options",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The name of your Windows license",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "httpMethod": "GET"
        }
      ],
      "path": "/order/license/windows/{serviceName}",
      "description": "List available options for this service"
    },
    {
      "description": "Upgrade this license with some given options",
      "path": "/order/license/windows/{serviceName}/upgrade/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order",
          "httpMethod": "GET",
          "description": "Get prices and contracts information",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The windows version you want to enable on your windows license",
              "dataType": "license.WindowsOsVersionEnum",
              "paramType": "query",
              "required": false,
              "name": "version",
              "fullType": "license.WindowsOsVersionEnum"
            },
            {
              "dataType": "license.WindowsSqlVersionEnum",
              "paramType": "query",
              "required": false,
              "name": "sqlVersion",
              "fullType": "license.WindowsSqlVersionEnum",
              "description": "The SQL Server version to enable on this license Windows license"
            },
            {
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "fullType": "string",
              "description": "The name of your Windows license"
            },
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "duration",
              "description": "Duration"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "order.Order"
        },
        {
          "description": "Create order",
          "parameters": [
            {
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
              "required": false,
              "paramType": "body",
              "dataType": "license.WindowsOsVersionEnum",
              "description": "The windows version you want to enable on your windows license"
            },
            {
              "description": "The SQL Server version to enable on this license Windows license",
              "dataType": "license.WindowsSqlVersionEnum",
              "paramType": "body",
              "required": false,
              "name": "sqlVersion",
              "fullType": "license.WindowsSqlVersionEnum"
            },
            {
              "description": "The name of your Windows license",
              "fullType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            },
            {
              "description": "Duration",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "duration"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order",
          "httpMethod": "POST",
          "responseFullType": "order.Order",
          "resellerOnly": false
        }
      ]
    },
    {
      "description": "Upgrade this license with some given options",
      "path": "/order/license/windows/{serviceName}/upgrade",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "description": "The windows version you want to enable on your windows license",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
              "required": false,
              "paramType": "query",
              "dataType": "license.WindowsOsVersionEnum"
            },
            {
              "description": "The SQL Server version to enable on this license Windows license",
              "paramType": "query",
              "required": false,
              "dataType": "license.WindowsSqlVersionEnum",
              "fullType": "license.WindowsSqlVersionEnum",
              "name": "sqlVersion"
            },
            {
              "fullType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "description": "The name of your Windows license"
            }
          ],
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option"
        }
      ]
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "paramType": "query",
              "required": true,
              "dataType": "ipv4",
              "fullType": "ipv4",
              "name": "ip",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "description": "This license version",
              "paramType": "query",
              "required": true,
              "dataType": "license.CloudLinuxVersionEnum",
              "fullType": "license.CloudLinuxVersionEnum",
              "name": "version"
            },
            {
              "name": "duration",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "description": "Duration"
            }
          ],
          "description": "Get prices and contracts information",
          "responseFullType": "order.Order",
          "resellerOnly": false
        },
        {
          "description": "Create order",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "ipv4",
              "name": "ip",
              "required": true,
              "paramType": "body",
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "description": "This license version",
              "paramType": "body",
              "required": true,
              "dataType": "license.CloudLinuxVersionEnum",
              "fullType": "license.CloudLinuxVersionEnum",
              "name": "version"
            },
            {
              "name": "duration",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "description": "Duration"
            }
          ],
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order",
          "resellerOnly": false,
          "responseFullType": "order.Order"
        }
      ],
      "description": "Order a new license on a given Ip with some given options",
      "path": "/order/license/cloudLinux/new/{duration}"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "httpMethod": "GET",
          "description": "Get allowed durations for 'new' option",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "dataType": "ipv4",
              "paramType": "query",
              "required": true,
              "name": "ip",
              "fullType": "ipv4"
            },
            {
              "dataType": "license.CloudLinuxVersionEnum",
              "paramType": "query",
              "required": true,
              "name": "version",
              "fullType": "license.CloudLinuxVersionEnum",
              "description": "This license version"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string[]"
        }
      ],
      "path": "/order/license/cloudLinux/new",
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/plesk",
      "description": "Operations about the LICENSE service",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "parameters": [],
          "noAuthentication": false,
          "description": "List available services",
          "httpMethod": "GET",
          "responseType": "string[]",
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
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "description": "The antispam currently enabled on this Plesk License",
              "name": "antispam",
              "fullType": "license.OrderableAntispamEnum",
              "dataType": "license.OrderableAntispamEnum",
              "required": false,
              "paramType": "query"
            },
            {
              "fullType": "boolean",
              "name": "wordpressToolkit",
              "required": false,
              "paramType": "query",
              "dataType": "boolean",
              "description": "WordpressToolkit option activation"
            },
            {
              "description": "Wanted application set",
              "paramType": "query",
              "required": false,
              "dataType": "license.PleskApplicationSetEnum",
              "fullType": "license.PleskApplicationSetEnum",
              "name": "applicationSet"
            },
            {
              "paramType": "query",
              "required": false,
              "dataType": "boolean",
              "fullType": "boolean",
              "name": "resellerManagement",
              "description": "Reseller management option activation"
            },
            {
              "fullType": "boolean",
              "name": "powerpack",
              "required": false,
              "paramType": "query",
              "dataType": "boolean",
              "description": "powerpack current activation state on your license"
            },
            {
              "name": "domainNumber",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "required": false,
              "paramType": "query",
              "description": "This license domain number"
            },
            {
              "fullType": "license.OrderableAntivirusEnum",
              "name": "antivirus",
              "required": false,
              "paramType": "query",
              "dataType": "license.OrderableAntivirusEnum",
              "description": "The antivirus to enable on this Plesk license"
            },
            {
              "description": "The amount (between 0 and 5) of language pack numbers to include in this licences",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "name": "languagePackNumber",
              "required": false,
              "paramType": "query",
              "dataType": "license.OrderablePleskLanguagePackEnum"
            },
            {
              "fullType": "license.PleskVersionEnum",
              "name": "version",
              "required": false,
              "paramType": "query",
              "dataType": "license.PleskVersionEnum",
              "description": "This license version"
            },
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "description": "The name of your Plesk license"
            },
            {
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "description": "Get prices and contracts information",
          "resellerOnly": false,
          "responseFullType": "order.Order"
        },
        {
          "resellerOnly": false,
          "responseFullType": "order.Order",
          "httpMethod": "POST",
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "description": "The antispam currently enabled on this Plesk License",
              "fullType": "license.OrderableAntispamEnum",
              "name": "antispam",
              "required": false,
              "paramType": "body",
              "dataType": "license.OrderableAntispamEnum"
            },
            {
              "fullType": "boolean",
              "name": "wordpressToolkit",
              "required": false,
              "paramType": "body",
              "dataType": "boolean",
              "description": "WordpressToolkit option activation"
            },
            {
              "name": "applicationSet",
              "fullType": "license.PleskApplicationSetEnum",
              "dataType": "license.PleskApplicationSetEnum",
              "required": false,
              "paramType": "body",
              "description": "Wanted application set"
            },
            {
              "description": "Reseller management option activation",
              "name": "resellerManagement",
              "fullType": "boolean",
              "dataType": "boolean",
              "required": false,
              "paramType": "body"
            },
            {
              "paramType": "body",
              "required": false,
              "dataType": "boolean",
              "fullType": "boolean",
              "name": "powerpack",
              "description": "powerpack current activation state on your license"
            },
            {
              "description": "This license domain number",
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "paramType": "body",
              "required": false,
              "name": "domainNumber",
              "fullType": "license.OrderablePleskDomainNumberEnum"
            },
            {
              "description": "The antivirus to enable on this Plesk license",
              "name": "antivirus",
              "fullType": "license.OrderableAntivirusEnum",
              "dataType": "license.OrderableAntivirusEnum",
              "required": false,
              "paramType": "body"
            },
            {
              "description": "The amount (between 0 and 5) of language pack numbers to include in this licences",
              "name": "languagePackNumber",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "required": false,
              "paramType": "body"
            },
            {
              "dataType": "license.PleskVersionEnum",
              "paramType": "body",
              "required": false,
              "name": "version",
              "fullType": "license.PleskVersionEnum",
              "description": "This license version"
            },
            {
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "fullType": "string",
              "description": "The name of your Plesk license"
            },
            {
              "description": "Duration",
              "name": "duration",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            }
          ],
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "path": "/order/license/plesk/{serviceName}/upgrade/{duration}",
      "description": "Upgrade this license with some given options"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "parameters": [
            {
              "dataType": "license.OrderableAntispamEnum",
              "paramType": "query",
              "required": false,
              "name": "antispam",
              "fullType": "license.OrderableAntispamEnum",
              "description": "The antispam currently enabled on this Plesk License"
            },
            {
              "description": "WordpressToolkit option activation",
              "name": "wordpressToolkit",
              "fullType": "boolean",
              "dataType": "boolean",
              "required": false,
              "paramType": "query"
            },
            {
              "dataType": "license.PleskApplicationSetEnum",
              "paramType": "query",
              "required": false,
              "name": "applicationSet",
              "fullType": "license.PleskApplicationSetEnum",
              "description": "Wanted application set"
            },
            {
              "dataType": "boolean",
              "paramType": "query",
              "required": false,
              "name": "resellerManagement",
              "fullType": "boolean",
              "description": "Reseller management option activation"
            },
            {
              "description": "powerpack current activation state on your license",
              "fullType": "boolean",
              "name": "powerpack",
              "required": false,
              "paramType": "query",
              "dataType": "boolean"
            },
            {
              "description": "This license domain number",
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "paramType": "query",
              "required": false,
              "name": "domainNumber",
              "fullType": "license.OrderablePleskDomainNumberEnum"
            },
            {
              "paramType": "query",
              "required": false,
              "dataType": "license.OrderableAntivirusEnum",
              "fullType": "license.OrderableAntivirusEnum",
              "name": "antivirus",
              "description": "The antivirus to enable on this Plesk license"
            },
            {
              "description": "The amount (between 0 and 5) of language pack numbers to include in this licences",
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "paramType": "query",
              "required": false,
              "name": "languagePackNumber",
              "fullType": "license.OrderablePleskLanguagePackEnum"
            },
            {
              "description": "This license version",
              "name": "version",
              "fullType": "license.PleskVersionEnum",
              "dataType": "license.PleskVersionEnum",
              "required": false,
              "paramType": "query"
            },
            {
              "description": "The name of your Plesk license",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            }
          ],
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option",
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET"
        }
      ],
      "description": "Upgrade this license with some given options",
      "path": "/order/license/plesk/{serviceName}/upgrade"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "description": "Get allowed options",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The name of your Plesk license",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "fullType": "string"
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]"
        }
      ],
      "description": "List available options for this service",
      "path": "/order/license/plesk/{serviceName}"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "path": "/order/license/plesk/new",
      "operations": [
        {
          "parameters": [
            {
              "paramType": "query",
              "required": false,
              "dataType": "boolean",
              "fullType": "boolean",
              "name": "powerpack",
              "description": "powerpack current activation state on your license"
            },
            {
              "name": "serviceType",
              "fullType": "license.LicenseTypeEnum",
              "dataType": "license.LicenseTypeEnum",
              "required": false,
              "paramType": "query",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "description": "Reseller management option activation",
              "name": "resellerManagement",
              "fullType": "boolean",
              "dataType": "boolean",
              "required": false,
              "paramType": "query"
            },
            {
              "paramType": "query",
              "required": false,
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "name": "domainNumber",
              "description": "This license domain number"
            },
            {
              "fullType": "license.OrderableAntivirusEnum",
              "name": "antivirus",
              "required": false,
              "paramType": "query",
              "dataType": "license.OrderableAntivirusEnum",
              "description": "The antivirus to enable on this Plesk license"
            },
            {
              "fullType": "license.PleskVersionEnum",
              "name": "version",
              "required": true,
              "paramType": "query",
              "dataType": "license.PleskVersionEnum",
              "description": "This license version"
            },
            {
              "description": "The amount of language pack numbers to include in this licences",
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "paramType": "query",
              "required": false,
              "name": "languagePackNumber",
              "fullType": "license.OrderablePleskLanguagePackEnum"
            },
            {
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "required": true,
              "paramType": "query",
              "dataType": "ipv4"
            },
            {
              "name": "wordpressToolkit",
              "fullType": "boolean",
              "dataType": "boolean",
              "required": false,
              "paramType": "query",
              "description": "WordpressToolkit option activation"
            },
            {
              "paramType": "query",
              "required": false,
              "dataType": "license.PleskApplicationSetEnum",
              "fullType": "license.PleskApplicationSetEnum",
              "name": "applicationSet",
              "description": "Wanted application set"
            }
          ],
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseFullType": "string[]"
        }
      ]
    },
    {
      "path": "/order/license/plesk/new/{duration}",
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "order.Order",
          "noAuthentication": false,
          "parameters": [
            {
              "paramType": "query",
              "required": false,
              "dataType": "boolean",
              "fullType": "boolean",
              "name": "powerpack",
              "description": "powerpack current activation state on your license"
            },
            {
              "name": "serviceType",
              "fullType": "license.LicenseTypeEnum",
              "dataType": "license.LicenseTypeEnum",
              "required": false,
              "paramType": "query",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "description": "Reseller management option activation",
              "fullType": "boolean",
              "name": "resellerManagement",
              "required": false,
              "paramType": "query",
              "dataType": "boolean"
            },
            {
              "name": "domainNumber",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "required": false,
              "paramType": "query",
              "description": "This license domain number"
            },
            {
              "dataType": "license.OrderableAntivirusEnum",
              "paramType": "query",
              "required": false,
              "name": "antivirus",
              "fullType": "license.OrderableAntivirusEnum",
              "description": "The antivirus to enable on this Plesk license"
            },
            {
              "description": "This license version",
              "fullType": "license.PleskVersionEnum",
              "name": "version",
              "required": true,
              "paramType": "query",
              "dataType": "license.PleskVersionEnum"
            },
            {
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "name": "languagePackNumber",
              "required": false,
              "paramType": "query",
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "description": "The amount of language pack numbers to include in this licences"
            },
            {
              "name": "ip",
              "fullType": "ipv4",
              "dataType": "ipv4",
              "required": true,
              "paramType": "query",
              "description": "Ip on which this license would be installed"
            },
            {
              "dataType": "boolean",
              "paramType": "query",
              "required": false,
              "name": "wordpressToolkit",
              "fullType": "boolean",
              "description": "WordpressToolkit option activation"
            },
            {
              "dataType": "license.PleskApplicationSetEnum",
              "paramType": "query",
              "required": false,
              "name": "applicationSet",
              "fullType": "license.PleskApplicationSetEnum",
              "description": "Wanted application set"
            },
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "duration",
              "description": "Duration"
            }
          ],
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "responseType": "order.Order",
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
          "responseType": "order.Order",
          "httpMethod": "POST",
          "description": "Create order",
          "parameters": [
            {
              "fullType": "boolean",
              "name": "powerpack",
              "required": false,
              "paramType": "body",
              "dataType": "boolean",
              "description": "powerpack current activation state on your license"
            },
            {
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "body",
              "required": false,
              "name": "serviceType",
              "fullType": "license.LicenseTypeEnum"
            },
            {
              "description": "Reseller management option activation",
              "fullType": "boolean",
              "name": "resellerManagement",
              "required": false,
              "paramType": "body",
              "dataType": "boolean"
            },
            {
              "name": "domainNumber",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "required": false,
              "paramType": "body",
              "description": "This license domain number"
            },
            {
              "dataType": "license.OrderableAntivirusEnum",
              "paramType": "body",
              "required": false,
              "name": "antivirus",
              "fullType": "license.OrderableAntivirusEnum",
              "description": "The antivirus to enable on this Plesk license"
            },
            {
              "dataType": "license.PleskVersionEnum",
              "paramType": "body",
              "required": true,
              "name": "version",
              "fullType": "license.PleskVersionEnum",
              "description": "This license version"
            },
            {
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "paramType": "body",
              "required": false,
              "name": "languagePackNumber",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "description": "The amount of language pack numbers to include in this licences"
            },
            {
              "dataType": "ipv4",
              "paramType": "body",
              "required": true,
              "name": "ip",
              "fullType": "ipv4",
              "description": "Ip on which this license would be installed"
            },
            {
              "paramType": "body",
              "required": false,
              "dataType": "boolean",
              "fullType": "boolean",
              "name": "wordpressToolkit",
              "description": "WordpressToolkit option activation"
            },
            {
              "fullType": "license.PleskApplicationSetEnum",
              "name": "applicationSet",
              "required": false,
              "paramType": "body",
              "dataType": "license.PleskApplicationSetEnum",
              "description": "Wanted application set"
            },
            {
              "description": "Duration",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "duration",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "order.Order"
        }
      ]
    },
    {
      "description": "Upgrade this license with some given options",
      "path": "/order/license/virtuozzo/{serviceName}/upgrade/{duration}",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "order.Order",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "paramType": "query",
              "required": true,
              "name": "containerNumber",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "description": "How much container is this license able to manage ..."
            },
            {
              "description": "The name of your Virtuozzo license",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            },
            {
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            }
          ],
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "resellerOnly": false,
          "responseFullType": "order.Order",
          "parameters": [
            {
              "description": "How much container is this license able to manage ...",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "name": "containerNumber",
              "required": true,
              "paramType": "body",
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum"
            },
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "description": "The name of your Virtuozzo license"
            },
            {
              "description": "Duration",
              "name": "duration",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            }
          ],
          "noAuthentication": false,
          "description": "Create order",
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST"
        }
      ]
    },
    {
      "operations": [
        {
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "How much container is this license able to manage ...",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "name": "containerNumber",
              "required": true,
              "paramType": "query",
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum"
            },
            {
              "description": "The name of your Virtuozzo license",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "fullType": "string"
            }
          ],
          "description": "Get allowed durations for 'upgrade' option",
          "responseFullType": "string[]",
          "resellerOnly": false
        }
      ],
      "description": "Upgrade this license with some given options",
      "path": "/order/license/virtuozzo/{serviceName}/upgrade"
    },
    {
      "path": "/order/license/virtuozzo/{serviceName}",
      "description": "List available options for this service",
      "operations": [
        {
          "description": "Get allowed options",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The name of your Virtuozzo license",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "fullType": "string"
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "responseFullType": "string[]",
          "resellerOnly": false
        }
      ]
    },
    {
      "description": "Operations about the LICENSE service",
      "path": "/order/license/virtuozzo",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "noAuthentication": false,
          "parameters": [],
          "description": "List available services",
          "httpMethod": "GET",
          "responseType": "string[]",
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
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "description": "Get allowed durations for 'new' option",
          "parameters": [
            {
              "name": "version",
              "fullType": "license.OrderableVirtuozzoVersionEnum",
              "dataType": "license.OrderableVirtuozzoVersionEnum",
              "required": true,
              "paramType": "query",
              "description": "This license version"
            },
            {
              "description": "How much container is this license able to manage ...",
              "name": "containerNumber",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "required": true,
              "paramType": "query"
            },
            {
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "required": false,
              "paramType": "query",
              "dataType": "license.LicenseTypeEnum"
            },
            {
              "description": "Ip on which this license would be installed",
              "paramType": "query",
              "required": true,
              "dataType": "ipv4",
              "fullType": "ipv4",
              "name": "ip"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "string[]"
        }
      ],
      "description": "Order a new license on a given Ip with some given options",
      "path": "/order/license/virtuozzo/new"
    },
    {
      "path": "/order/license/virtuozzo/new/{duration}",
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "dataType": "license.OrderableVirtuozzoVersionEnum",
              "paramType": "query",
              "required": true,
              "name": "version",
              "fullType": "license.OrderableVirtuozzoVersionEnum",
              "description": "This license version"
            },
            {
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "paramType": "query",
              "required": true,
              "name": "containerNumber",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "description": "How much container is this license able to manage ..."
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "required": false,
              "name": "serviceType",
              "fullType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "dataType": "ipv4",
              "paramType": "query",
              "required": true,
              "name": "ip",
              "fullType": "ipv4",
              "description": "Ip on which this license would be installed"
            },
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "duration",
              "description": "Duration"
            }
          ],
          "noAuthentication": false,
          "description": "Get prices and contracts information",
          "resellerOnly": false,
          "responseFullType": "order.Order"
        },
        {
          "resellerOnly": false,
          "responseFullType": "order.Order",
          "description": "Create order",
          "parameters": [
            {
              "description": "This license version",
              "dataType": "license.OrderableVirtuozzoVersionEnum",
              "paramType": "body",
              "required": true,
              "name": "version",
              "fullType": "license.OrderableVirtuozzoVersionEnum"
            },
            {
              "description": "How much container is this license able to manage ...",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "name": "containerNumber",
              "required": true,
              "paramType": "body",
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum"
            },
            {
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "paramType": "body",
              "required": false,
              "dataType": "license.LicenseTypeEnum",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType"
            },
            {
              "name": "ip",
              "fullType": "ipv4",
              "dataType": "ipv4",
              "required": true,
              "paramType": "body",
              "description": "Ip on which this license would be installed"
            },
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "duration",
              "description": "Duration"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order",
          "httpMethod": "POST"
        }
      ]
    },
    {
      "description": "Operations about the VEEAMCC service",
      "path": "/order/veeamCloudConnect",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "noAuthentication": false,
          "description": "List available services"
        }
      ]
    },
    {
      "description": "Order an upgrade upon your Veeam Cloud Connect account",
      "path": "/order/veeamCloudConnect/{serviceName}/upgrade/{duration}",
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "order.Order",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "paramType": "query",
              "required": true,
              "dataType": "veeamCloudConnect.Offer",
              "fullType": "veeamCloudConnect.Offer",
              "name": "offer",
              "description": "The offer on which you want to be upgraded"
            },
            {
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "fullType": "string",
              "description": null
            },
            {
              "description": "Duration",
              "name": "duration",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            }
          ],
          "noAuthentication": false,
          "description": "Get prices and contracts information",
          "resellerOnly": false,
          "responseFullType": "order.Order"
        },
        {
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "order.Order",
          "description": "Create order",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "offer",
              "fullType": "veeamCloudConnect.Offer",
              "dataType": "veeamCloudConnect.Offer",
              "required": true,
              "paramType": "body",
              "description": "The offer on which you want to be upgraded"
            },
            {
              "description": null,
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            },
            {
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "duration",
              "fullType": "string",
              "description": "Duration"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "order.Order"
        }
      ]
    },
    {
      "description": "Order an upgrade upon your Veeam Cloud Connect account",
      "path": "/order/veeamCloudConnect/{serviceName}/upgrade",
      "operations": [
        {
          "responseFullType": "string[]",
          "resellerOnly": false,
          "parameters": [
            {
              "description": "The offer on which you want to be upgraded",
              "name": "offer",
              "fullType": "veeamCloudConnect.Offer",
              "dataType": "veeamCloudConnect.Offer",
              "required": true,
              "paramType": "query"
            },
            {
              "description": null,
              "fullType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option",
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "parameters": [
            {
              "description": null,
              "fullType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "description": "Get allowed options",
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET"
        }
      ],
      "description": "List available options for this service",
      "path": "/order/veeamCloudConnect/{serviceName}"
    }
  ],
  "models": {
    "order.CurrencyCodeEnum": {
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
      "description": "",
      "id": "CurrencyCodeEnum",
      "namespace": "order"
    },
    "license.OrderableCpanelVersionEnum": {
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
      "description": "All versions available for Cpanel products",
      "namespace": "license"
    },
    "license.OrderableAntispamEnum": {
      "enumType": "string",
      "description": "All antispam available for Plesk products",
      "id": "OrderableAntispamEnum",
      "enum": [
        "SPAM_ASSASSIN"
      ],
      "namespace": "license"
    },
    "dedicated.server.IpStaticCountryEnum": {
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
      "description": "Available localization for this static IP",
      "namespace": "dedicated.server"
    },
    "order.Price": {
      "properties": {
        "currencyCode": {
          "canBeNull": false,
          "type": "order.CurrencyCodeEnum",
          "description": null
        },
        "value": {
          "canBeNull": false,
          "type": "double",
          "description": null
        },
        "text": {
          "description": null,
          "type": "string",
          "canBeNull": false
        }
      },
      "description": "Price with it's currency and textual representation",
      "id": "Price",
      "namespace": "order"
    },
    "dedicated.server.SupportLevelOrderableEnum": {
      "enum": [
        "critical",
        "fastpath",
        "gs"
      ],
      "enumType": "string",
      "description": "distincts support level",
      "id": "SupportLevelOrderableEnum",
      "namespace": "dedicated.server"
    },
    "license.OrderableAntivirusEnum": {
      "namespace": "license",
      "enum": [
        "DR_WEB",
        "KASPERSKY_UNLIMITED_MAILBOXES",
        "kaspersky"
      ],
      "description": "All antivirus available for Plesk products",
      "id": "OrderableAntivirusEnum",
      "enumType": "string"
    },
    "dedicated.server.BackupStorageCapacityEnum": {
      "namespace": "dedicated.server",
      "id": "BackupStorageCapacityEnum",
      "description": "Different backup storage capacity in gigabytes",
      "enumType": "long",
      "enum": [
        "1000",
        "10000",
        "500",
        "5000"
      ]
    },
    "coreTypes.CountryEnum": {
      "enumType": "string",
      "id": "CountryEnum",
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
      "namespace": "coreTypes"
    },
    "order.OrderDetailTypeEnum": {
      "namespace": "order",
      "id": "OrderDetailTypeEnum",
      "description": "Product type of item in order",
      "enumType": "string",
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
      ]
    },
    "dedicated.server.IpBlockSizeEnum": {
      "namespace": "dedicated.server",
      "enumType": "long",
      "id": "IpBlockSizeEnum",
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
      ]
    },
    "license.OrderableDirectAdminVersionEnum": {
      "enum": [
        "DIRECTADMIN_1",
        "directadmin-license"
      ],
      "enumType": "string",
      "description": "All versions available for DirectAdmin products",
      "id": "OrderableDirectAdminVersionEnum",
      "namespace": "license"
    },
    "dedicated.server.FirewallModelEnum": {
      "enumType": "string",
      "description": "Firewall model name",
      "id": "FirewallModelEnum",
      "enum": [
        "asa5505",
        "asa5510",
        "asa5520"
      ],
      "namespace": "dedicated.server"
    },
    "license.CloudLinuxVersionEnum": {
      "id": "CloudLinuxVersionEnum",
      "description": "All versions for CloudLinux product",
      "enumType": "string",
      "enum": [
        "SINGLE",
        "WITH_CPANEL",
        "WITH_PLESK12",
        "cloudlinux-license"
      ],
      "namespace": "license"
    },
    "license.PleskVersionEnum": {
      "namespace": "license",
      "enumType": "string",
      "description": "All versions available for Plesk products",
      "id": "PleskVersionEnum",
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
      ]
    },
    "license.OrderablePleskDomainNumberEnum": {
      "namespace": "license",
      "id": "OrderablePleskDomainNumberEnum",
      "description": "All domain available for Plesk products",
      "enumType": "string",
      "enum": [
        "10",
        "100",
        "30",
        "300",
        "hostingsuite",
        "unlimited"
      ]
    },
    "license.OrderableVirtuozzoVersionEnum": {
      "enumType": "string",
      "description": "All versions available for Virtuozzo products",
      "id": "OrderableVirtuozzoVersionEnum",
      "enum": [
        "VIRTUOZZO_CONTAINERS_4_FOR_LINUX",
        "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS",
        "virtuozzo-4",
        "virtuozzo-4-for-windows"
      ],
      "namespace": "license"
    },
    "order.OrderDetail": {
      "namespace": "order",
      "properties": {
        "quantity": {
          "canBeNull": false,
          "type": "long",
          "description": null
        },
        "unitPrice": {
          "canBeNull": false,
          "type": "order.Price",
          "description": null
        },
        "detailType": {
          "description": null,
          "type": "order.OrderDetailTypeEnum",
          "canBeNull": true
        },
        "totalPrice": {
          "type": "order.Price",
          "canBeNull": false,
          "description": null
        },
        "description": {
          "description": null,
          "canBeNull": false,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "type": "string",
          "description": null
        }
      },
      "id": "OrderDetail",
      "description": "Detail of an order"
    },
    "license.OrderablePleskLanguagePackEnum": {
      "namespace": "license",
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
      "description": "All language pack numbers available for Plesk products"
    },
    "license.SqlServerVersionEnum": {
      "namespace": "license",
      "description": "All versions for SQL Server product",
      "id": "SqlServerVersionEnum",
      "enumType": "string",
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
      ]
    },
    "dedicated.server.OrderableSysFeatureEnum": {
      "namespace": "dedicated.server",
      "enum": [
        "backupProtocol",
        "monitoring"
      ],
      "description": "Dedicated server orderable features",
      "id": "OrderableSysFeatureEnum",
      "enumType": "string"
    },
    "license.OrderableVirtuozzoContainerNumberEnum": {
      "enum": [
        "2_CPU_001_CONTAINER",
        "2_CPU_003_CONTAINER",
        "2_CPU_010_CONTAINER",
        "2_CPU_030_CONTAINER",
        "2_CPU_060_CONTAINER",
        "2_CPU_100_CONTAINER"
      ],
      "id": "OrderableVirtuozzoContainerNumberEnum",
      "description": "All quantities of container available for a Virtuozzo license",
      "enumType": "string",
      "namespace": "license"
    },
    "dedicated.server.IpTypeOrderableEnum": {
      "namespace": "dedicated.server",
      "id": "IpTypeOrderableEnum",
      "description": "Orderable IP type",
      "enumType": "string",
      "enum": [
        "failover",
        "static",
        "unshielded"
      ]
    },
    "dedicated.server.IpCountryEnum": {
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
      "description": "Available localization for this static IP",
      "namespace": "dedicated.server"
    },
    "license.LicenseTypeEnum": {
      "namespace": "license",
      "id": "LicenseTypeEnum",
      "description": "Possible values for license type",
      "enumType": "string",
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
      ]
    },
    "license.WindowsSqlVersionEnum": {
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
      "description": "All SQL Server versions for Windows products",
      "id": "WindowsSqlVersionEnum",
      "namespace": "license"
    },
    "license.WindowsOsVersionEnum": {
      "namespace": "license",
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
      "id": "WindowsOsVersionEnum",
      "description": "All versions for Windows products",
      "enumType": "string"
    },
    "order.Order": {
      "description": "An order",
      "id": "Order",
      "properties": {
        "prices": {
          "canBeNull": false,
          "type": "order.OrderPrices",
          "description": null
        },
        "contracts": {
          "description": null,
          "type": "order.Contract[]",
          "canBeNull": false
        },
        "url": {
          "type": "string",
          "canBeNull": true,
          "description": null
        },
        "details": {
          "canBeNull": false,
          "type": "order.OrderDetail[]",
          "description": null
        },
        "orderId": {
          "description": null,
          "type": "long",
          "canBeNull": true
        }
      },
      "namespace": "order"
    },
    "license.PleskApplicationSetEnum": {
      "namespace": "license",
      "id": "PleskApplicationSetEnum",
      "description": "Application set available for Plesk products",
      "enumType": "string",
      "enum": [
        "applicationpack",
        "developerpack",
        "power-pack-for-plesk12",
        "powerpack"
      ]
    },
    "order.OrderPrices": {
      "description": "Prices of an order",
      "id": "OrderPrices",
      "properties": {
        "withTax": {
          "description": null,
          "type": "order.Price",
          "canBeNull": false
        },
        "tax": {
          "description": null,
          "type": "order.Price",
          "canBeNull": false
        },
        "withoutTax": {
          "description": null,
          "canBeNull": false,
          "type": "order.Price"
        }
      },
      "namespace": "order"
    },
    "dedicated.server.UsbKeyCapacityEnum": {
      "namespace": "dedicated.server",
      "enum": [
        "128",
        "16",
        "256",
        "32",
        "64"
      ],
      "description": " Different USB key capacity in gigabytes",
      "id": "UsbKeyCapacityEnum",
      "enumType": "long"
    },
    "order.Contract": {
      "namespace": "order",
      "id": "Contract",
      "description": "A contract",
      "properties": {
        "url": {
          "description": null,
          "canBeNull": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "type": "string",
          "description": null
        },
        "content": {
          "description": null,
          "type": "text",
          "canBeNull": false
        }
      }
    },
    "veeamCloudConnect.Offer": {
      "namespace": "veeamCloudConnect",
      "enumType": "string",
      "id": "Offer",
      "description": "All orderable Veeam Cloud Connect offers",
      "enum": [
        "advanced",
        "demo",
        "starter"
      ]
    }
  },
  "apiVersion": "1.0"
}