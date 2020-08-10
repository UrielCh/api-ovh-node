import {Schema} from '../../src/schema';

export const schema: Schema = {
  "resourcePath": "/order",
  "apiVersion": "1.0",
  "basePath": "https://ca.api.kimsufi.com/1.0",
  "apis": [
    {
      "operations": [
        {
          "responseType": "string[]",
          "httpMethod": "GET",
          "resellerOnly": false,
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Get allowed options",
          "parameters": [
            {
              "name": "serviceName",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "The internal name of your dedicated server",
              "dataType": "string"
            }
          ],
          "responseFullType": "string[]"
        }
      ],
      "description": "List available options for this service",
      "path": "/order/dedicated/server/{serviceName}"
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "string[]",
          "resellerOnly": false,
          "noAuthentication": false,
          "parameters": [],
          "description": "List available services",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseFullType": "string[]"
        }
      ],
      "description": "Operations about the DEDICATED service",
      "path": "/order/dedicated/server"
    }
  ],
  "models": {
    "order.Contract": {
      "properties": {
        "name": {
          "canBeNull": false,
          "type": "string",
          "description": null
        },
        "content": {
          "canBeNull": false,
          "description": null,
          "type": "text"
        },
        "url": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        }
      },
      "description": "A contract",
      "namespace": "order",
      "id": "Contract"
    },
    "order.Price": {
      "id": "Price",
      "namespace": "order",
      "properties": {
        "currencyCode": {
          "description": null,
          "type": "order.CurrencyCodeEnum",
          "canBeNull": false
        },
        "value": {
          "canBeNull": false,
          "description": null,
          "type": "double"
        },
        "text": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        }
      },
      "description": "Price with it's currency and textual representation"
    },
    "order.OrderPrices": {
      "id": "OrderPrices",
      "namespace": "order",
      "description": "Prices of an order",
      "properties": {
        "withoutTax": {
          "type": "order.Price",
          "description": null,
          "canBeNull": false
        },
        "tax": {
          "description": null,
          "type": "order.Price",
          "canBeNull": false
        },
        "withTax": {
          "canBeNull": false,
          "type": "order.Price",
          "description": null
        }
      }
    },
    "dedicated.server.SupportLevelOrderableEnum": {
      "enum": [
        "critical",
        "fastpath",
        "gs"
      ],
      "namespace": "dedicated.server",
      "id": "SupportLevelOrderableEnum",
      "description": "distincts support level",
      "enumType": "string"
    },
    "order.OrderDetail": {
      "properties": {
        "domain": {
          "type": "string",
          "description": null,
          "canBeNull": false
        },
        "quantity": {
          "description": null,
          "type": "long",
          "canBeNull": false
        },
        "unitPrice": {
          "type": "order.Price",
          "description": null,
          "canBeNull": false
        },
        "detailType": {
          "canBeNull": true,
          "type": "order.OrderDetailTypeEnum",
          "description": null
        },
        "description": {
          "description": null,
          "type": "string",
          "canBeNull": false
        },
        "totalPrice": {
          "type": "order.Price",
          "description": null,
          "canBeNull": false
        }
      },
      "description": "Detail of an order",
      "namespace": "order",
      "id": "OrderDetail"
    },
    "order.Order": {
      "description": "An order",
      "properties": {
        "url": {
          "canBeNull": true,
          "description": null,
          "type": "string"
        },
        "details": {
          "description": null,
          "type": "order.OrderDetail[]",
          "canBeNull": false
        },
        "prices": {
          "type": "order.OrderPrices",
          "description": null,
          "canBeNull": false
        },
        "contracts": {
          "description": null,
          "type": "order.Contract[]",
          "canBeNull": false
        },
        "orderId": {
          "canBeNull": true,
          "type": "long",
          "description": null
        }
      },
      "namespace": "order",
      "id": "Order"
    },
    "order.OrderDetailTypeEnum": {
      "enumType": "string",
      "description": "Product type of item in order",
      "namespace": "order",
      "id": "OrderDetailTypeEnum",
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
    "order.CurrencyCodeEnum": {
      "namespace": "order",
      "id": "CurrencyCodeEnum",
      "description": "",
      "enumType": "string",
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
      ]
    }
  }
}