import {Schema} from '../../src/schema';

// imported from https://eu.api.soyoustart.com:443/1.0/price.json

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "description": "Get the price of a Hadoop cluster consumptions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the price of a Hadoop cluster consumptions",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Cluster.Hadoop.ClusterEnum",
              "description": "Duration",
              "fullType": "price.Cluster.Hadoop.ClusterEnum",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/cluster/hadoop/cluster/{duration}"
    },
    {
      "description": "Get the hourly price of the available node profiles",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the hourly price of the available node profiles",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Cluster.Hadoop.Node.HourlyEnum",
              "description": "Node profile",
              "fullType": "price.Cluster.Hadoop.Node.HourlyEnum",
              "name": "nodeProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/cluster/hadoop/node/hourly/{nodeProfile}"
    },
    {
      "description": "Get the monthly price of the available node profiles",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the monthly price of the available node profiles",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Cluster.Hadoop.Node.MonthlyEnum",
              "description": "Node profile",
              "fullType": "price.Cluster.Hadoop.Node.MonthlyEnum",
              "name": "nodeProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/cluster/hadoop/node/monthly/{nodeProfile}"
    },
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
              "description": "Commercial range",
              "fullType": "price.Dedicated.Server.AntiDDoSProEnum",
              "name": "commercialRange",
              "paramType": "path",
              "required": true
            }
          ],
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
              "description": "Capacity",
              "fullType": "price.Dedicated.Server.BackupStorageEnum",
              "name": "capacity",
              "paramType": "path",
              "required": true
            }
          ],
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
              "description": "Firewall model",
              "fullType": "price.Dedicated.Server.FirewallEnum",
              "name": "firewallModel",
              "paramType": "path",
              "required": true
            }
          ],
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
              "description": "Routed to",
              "fullType": "price.Dedicated.Server.IpEnum",
              "name": "routedTo",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicated/server/ip/{routedTo}"
    }
  ],
  "basePath": "https://eu.api.soyoustart.com/1.0",
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
          "fullType": "order.CurrencyCodeEnum",
          "readOnly": false,
          "required": true,
          "type": "order.CurrencyCodeEnum"
        },
        "text": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": false,
          "required": true,
          "type": "double"
        }
      }
    }
  },
  "resourcePath": "/price"
}