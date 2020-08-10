import {Schema} from '../../src/schema';

export const schema: Schema = {
  "basePath": "https://ca.api.soyoustart.com/1.0",
  "apis": [
    {
      "description": "Get price of anti-DDos Pro option",
      "path": "/price/dedicated/server/antiDDoSPro/{commercialRange}",
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "order.Price",
          "description": "Get price of anti-DDos Pro option",
          "resellerOnly": false,
          "httpMethod": "GET",
          "noAuthentication": false,
          "responseFullType": "order.Price",
          "parameters": [
            {
              "fullType": "price.Dedicated.Server.AntiDDoSProEnum",
              "paramType": "path",
              "dataType": "price.Dedicated.Server.AntiDDoSProEnum",
              "name": "commercialRange",
              "required": true,
              "description": "commercial range of your dedicated server"
            }
          ]
        }
      ]
    },
    {
      "description": "Get price of IPs",
      "path": "/price/dedicated/server/ip/{routedTo}",
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "order.Price",
          "resellerOnly": false,
          "description": "Get price of IPs",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "description": "Ip",
              "fullType": "price.Dedicated.Server.IpEnum",
              "paramType": "path",
              "dataType": "price.Dedicated.Server.IpEnum",
              "name": "routedTo"
            }
          ],
          "responseFullType": "order.Price"
        }
      ]
    },
    {
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "order.Price",
          "httpMethod": "GET",
          "resellerOnly": false,
          "description": "Get price of available firewall models",
          "parameters": [
            {
              "required": true,
              "description": "Model of firewall",
              "fullType": "price.Dedicated.Server.FirewallEnum",
              "paramType": "path",
              "name": "firewallModel",
              "dataType": "price.Dedicated.Server.FirewallEnum"
            }
          ],
          "responseFullType": "order.Price",
          "noAuthentication": false
        }
      ],
      "path": "/price/dedicated/server/firewall/{firewallModel}",
      "description": "Get price of available firewall models"
    },
    {
      "description": "Get price of backup storage offer",
      "path": "/price/dedicated/server/backupStorage/{capacity}",
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "order.Price",
          "description": "Get price of backup storage offer",
          "resellerOnly": false,
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Dedicated.Server.BackupStorageEnum",
              "name": "capacity",
              "paramType": "path",
              "fullType": "price.Dedicated.Server.BackupStorageEnum",
              "description": "Capacity in gigabytes of backup storage offer",
              "required": true
            }
          ],
          "responseFullType": "order.Price"
        }
      ]
    }
  ],
  "models": {
    "order.CurrencyCodeEnum": {
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
      "enumType": "string",
      "description": "",
      "id": "CurrencyCodeEnum"
    },
    "order.Price": {
      "id": "Price",
      "namespace": "order",
      "description": "Price with it's currency and textual representation",
      "properties": {
        "currencyCode": {
          "canBeNull": false,
          "description": null,
          "type": "order.CurrencyCodeEnum"
        },
        "text": {
          "description": null,
          "type": "string",
          "canBeNull": false
        },
        "value": {
          "type": "double",
          "description": null,
          "canBeNull": false
        }
      }
    },
    "price.Dedicated.Server.FirewallEnum": {
      "id": "FirewallEnum",
      "enumType": "string",
      "description": "Enum of Firewalls",
      "namespace": "price.Dedicated.Server",
      "enum": [
        "asa5505",
        "asa5510",
        "asa5520"
      ]
    },
    "price.Dedicated.Server.AntiDDoSProEnum": {
      "enum": [
        "sk"
      ],
      "namespace": "price.Dedicated.Server",
      "enumType": "string",
      "description": "Enum of AntiDDoSPros",
      "id": "AntiDDoSProEnum"
    },
    "price.Dedicated.Server.IpEnum": {
      "id": "IpEnum",
      "enum": [
        "kimsufi",
        "parking"
      ],
      "namespace": "price.Dedicated.Server",
      "enumType": "string",
      "description": "Enum of Ips"
    },
    "price.Dedicated.Server.BackupStorageEnum": {
      "id": "BackupStorageEnum",
      "description": "Enum of BackupStorages",
      "enumType": "string",
      "enum": [
        "1000",
        "10000",
        "500",
        "5000"
      ],
      "namespace": "price.Dedicated.Server"
    }
  },
  "resourcePath": "/price",
  "apiVersion": "1.0"
}