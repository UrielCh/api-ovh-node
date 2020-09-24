import {Schema} from '../../src/schema';

// imported from https://ca.api.soyoustart.com:443/1.0/price.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Get price of anti-DDos Pro option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of anti-DDos Pro option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Dedicated.Server.AntiDDoSProEnum",
              "description": "commercial range of your dedicated server",
              "fullType": "price.Dedicated.Server.AntiDDoSProEnum",
              "name": "commercialRange",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "order.Price",
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicated/server/antiDDoSPro/{commercialRange}"
    },
    {
      "description": "Get price of backup storage offer",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of backup storage offer",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Dedicated.Server.BackupStorageEnum",
              "description": "Capacity in gigabytes of backup storage offer",
              "fullType": "price.Dedicated.Server.BackupStorageEnum",
              "name": "capacity",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "order.Price",
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicated/server/backupStorage/{capacity}"
    },
    {
      "description": "Get price of available firewall models",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of available firewall models",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Dedicated.Server.FirewallEnum",
              "description": "Model of firewall",
              "fullType": "price.Dedicated.Server.FirewallEnum",
              "name": "firewallModel",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "order.Price",
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicated/server/firewall/{firewallModel}"
    },
    {
      "description": "Get price of IPs",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of IPs",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Dedicated.Server.IpEnum",
              "description": "Ip",
              "fullType": "price.Dedicated.Server.IpEnum",
              "name": "routedTo",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "order.Price",
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicated/server/ip/{routedTo}"
    }
  ],
  "basePath": "https://ca.api.soyoustart.com/1.0",
  "models": {
    "order.CurrencyCodeEnum": {
      "description": "",
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
    "order.Price": {
      "description": "Price with it's currency and textual representation",
      "id": "Price",
      "namespace": "order",
      "properties": {
        "currencyCode": {
          "canBeNull": false,
          "description": null,
          "type": "order.CurrencyCodeEnum"
        },
        "text": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": null,
          "type": "double"
        }
      }
    },
    "price.Dedicated.Server.AntiDDoSProEnum": {
      "description": "Enum of AntiDDoSPros",
      "enum": [
        "sk"
      ],
      "enumType": "string",
      "id": "AntiDDoSProEnum",
      "namespace": "price.Dedicated.Server"
    },
    "price.Dedicated.Server.BackupStorageEnum": {
      "description": "Enum of BackupStorages",
      "enum": [
        "1000",
        "10000",
        "500",
        "5000"
      ],
      "enumType": "string",
      "id": "BackupStorageEnum",
      "namespace": "price.Dedicated.Server"
    },
    "price.Dedicated.Server.FirewallEnum": {
      "description": "Enum of Firewalls",
      "enum": [
        "asa5505",
        "asa5510",
        "asa5520"
      ],
      "enumType": "string",
      "id": "FirewallEnum",
      "namespace": "price.Dedicated.Server"
    },
    "price.Dedicated.Server.IpEnum": {
      "description": "Enum of Ips",
      "enum": [
        "kimsufi",
        "parking"
      ],
      "enumType": "string",
      "id": "IpEnum",
      "namespace": "price.Dedicated.Server"
    }
  },
  "resourcePath": "/price"
}