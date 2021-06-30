import {Schema} from '../../src/schema';

// imported from https://eu.api.kimsufi.com:443/1.0/order.json

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
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/dedicated-server/all",
            "order/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "order/all",
            "all"
          ]
        }
      ],
      "path": "/order/dedicated/server/{serviceName}"
    }
  ],
  "basePath": "https://eu.api.kimsufi.com/1.0",
  "models": {
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
        "price": {
          "canBeNull": false,
          "description": "Reduction price applied with this promotion",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
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
        "percentage",
        "forced_amount",
        "fixed_amount"
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
        "installation",
        "renew",
        "upgrade",
        "downgrade",
        "detach",
        "dynamic"
      ],
      "enumType": "string",
      "id": "GenericProductPricingCapacitiesEnum",
      "namespace": "order.cart"
    },
    "order.cart.GenericProductPricingTypeEnum": {
      "description": "Type of a pricing",
      "enum": [
        "rental",
        "consumption",
        "purchase"
      ],
      "enumType": "string",
      "id": "GenericProductPricingTypeEnum",
      "namespace": "order.cart"
    },
    "order.cart.GenericProductTypeEnum": {
      "description": "Type of a product",
      "enum": [
        "delivery",
        "deposit",
        "shipping",
        "cloud_service",
        "saas_license",
        "storage",
        "domain"
      ],
      "enumType": "string",
      "id": "GenericProductTypeEnum",
      "namespace": "order.cart"
    }
  },
  "resourcePath": "/order"
}