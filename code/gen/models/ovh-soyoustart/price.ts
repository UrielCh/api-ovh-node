import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/price/cluster/hadoop/cluster/{duration}",
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
              "dataType": "price.Cluster.Hadoop.ClusterEnum",
              "paramType": "path",
              "fullType": "price.Cluster.Hadoop.ClusterEnum",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get the price of a Hadoop cluster consumptions"
        }
      ],
      "description": "Get the price of a Hadoop cluster consumptions"
    },
    {
      "path": "/price/cluster/hadoop/node/hourly/{nodeProfile}",
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
              "dataType": "price.Cluster.Hadoop.Node.HourlyEnum",
              "paramType": "path",
              "fullType": "price.Cluster.Hadoop.Node.HourlyEnum",
              "required": true,
              "description": "Node profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get the hourly price of the available node profiles"
        }
      ],
      "description": "Get the hourly price of the available node profiles"
    },
    {
      "path": "/price/cluster/hadoop/node/monthly/{nodeProfile}",
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
              "dataType": "price.Cluster.Hadoop.Node.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.Cluster.Hadoop.Node.MonthlyEnum",
              "required": true,
              "description": "Node profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get the monthly price of the available node profiles"
        }
      ],
      "description": "Get the monthly price of the available node profiles"
    },
    {
      "path": "/price/dedicated/server/antiDDoSPro/{commercialRange}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "commercialRange",
              "dataType": "price.Dedicated.Server.AntiDDoSProEnum",
              "paramType": "path",
              "fullType": "price.Dedicated.Server.AntiDDoSProEnum",
              "required": true,
              "description": "Commercial range"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of anti-DDos Pro option"
        }
      ],
      "description": "Get price of anti-DDos Pro option"
    },
    {
      "path": "/price/dedicated/server/backupStorage/{capacity}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "capacity",
              "dataType": "price.Dedicated.Server.BackupStorageEnum",
              "paramType": "path",
              "fullType": "price.Dedicated.Server.BackupStorageEnum",
              "required": true,
              "description": "Capacity"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of backup storage offer"
        }
      ],
      "description": "Get price of backup storage offer"
    },
    {
      "path": "/price/dedicated/server/firewall/{firewallModel}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "firewallModel",
              "dataType": "price.Dedicated.Server.FirewallEnum",
              "paramType": "path",
              "fullType": "price.Dedicated.Server.FirewallEnum",
              "required": true,
              "description": "Firewall model"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of available firewall models"
        }
      ],
      "description": "Get price of available firewall models"
    },
    {
      "path": "/price/dedicated/server/ip/{routedTo}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "routedTo",
              "dataType": "price.Dedicated.Server.IpEnum",
              "paramType": "path",
              "fullType": "price.Dedicated.Server.IpEnum",
              "required": true,
              "description": "Routed to"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of IPs"
        }
      ],
      "description": "Get price of IPs"
    }
  ],
  "resourcePath": "/price",
  "basePath": "https://eu.api.soyoustart.com/1.0",
  "models": {
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
    }
  }
}