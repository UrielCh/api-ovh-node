import {Schema} from '../../src/schema';

// imported from https://api.us.ovhcloud.com:443/1.0/services.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Get list of your service details",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get list of your service details",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "services.expanded.Service[]"
        }
      ],
      "path": "/services"
    },
    {
      "description": "Get details about a service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get details about a service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Service ID",
              "fullType": "coreTypes.ServiceId:long",
              "name": "serviceId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.expanded.Service"
        }
      ],
      "path": "/services/{serviceId}"
    },
    {
      "description": "Engagement for a given service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get engagement details",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Service ID",
              "fullType": "coreTypes.ServiceId:long",
              "name": "serviceId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.billing.engagement.Engagement"
        }
      ],
      "path": "/services/{serviceId}/billing/engagement"
    },
    {
      "description": "Get details about a service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get options of a service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Service ID",
              "fullType": "coreTypes.ServiceId:long",
              "name": "serviceId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.expanded.Service[]"
        }
      ],
      "path": "/services/{serviceId}/options"
    }
  ],
  "basePath": "https://api.us.ovhcloud.com/1.0",
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
    "services.billing.Invoice": {
      "description": "Invoice details",
      "id": "Invoice",
      "namespace": "services.billing",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": "Invoice date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Invoice reference",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lines": {
          "canBeNull": false,
          "description": "Invoice details",
          "fullType": "services.billing.InvoiceLine[]",
          "readOnly": true,
          "required": false,
          "type": "services.billing.InvoiceLine[]"
        }
      }
    },
    "services.billing.InvoiceLine": {
      "description": "Item details",
      "id": "InvoiceLine",
      "namespace": "services.billing",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description of item",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "periodEnd": {
          "canBeNull": true,
          "description": "End period",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "periodStart": {
          "canBeNull": true,
          "description": "Start period",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "price": {
          "canBeNull": false,
          "description": "Price without tax",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Quantity of item",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Associated service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "totalPrice": {
          "canBeNull": false,
          "description": "Price with tax",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of item",
          "fullType": "services.billing.InvoiceLineTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "services.billing.InvoiceLineTypeEnum"
        }
      }
    },
    "services.billing.InvoiceLineTypeEnum": {
      "description": "Type of line",
      "enum": [
        "accessory",
        "consumption",
        "creation",
        "deposit",
        "duration",
        "gift",
        "installation",
        "misc",
        "other",
        "outplan",
        "quantity",
        "special",
        "voucher"
      ],
      "enumType": "string",
      "id": "InvoiceLineTypeEnum",
      "namespace": "services.billing"
    },
    "services.billing.Pricing": {
      "description": "Representation of a service pricing",
      "id": "Pricing",
      "namespace": "services.billing",
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
          "description": "Default renew interval displayed using ISO8601",
          "fullType": "duration",
          "readOnly": true,
          "required": false,
          "type": "duration"
        },
        "engagementConfiguration": {
          "canBeNull": true,
          "description": "Pricing's engagement configuration",
          "fullType": "services.billing.Pricing.EngagementConfiguration",
          "readOnly": true,
          "required": false,
          "type": "services.billing.Pricing.EngagementConfiguration"
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
    "services.billing.Pricing.EngagementConfiguration": {
      "description": "Configuration of an engagement triggered by a given pricing",
      "id": "EngagementConfiguration",
      "namespace": "services.billing.Pricing",
      "properties": {
        "defaultEndAction": {
          "canBeNull": false,
          "description": "Default action executed once the engagement is fully consumed",
          "fullType": "services.billing.engagement.EndStrategyEnum",
          "readOnly": true,
          "required": false,
          "type": "services.billing.engagement.EndStrategyEnum"
        },
        "duration": {
          "canBeNull": false,
          "description": "Engagement's duration displayed using ISO8601",
          "fullType": "duration",
          "readOnly": true,
          "required": false,
          "type": "duration"
        },
        "type": {
          "canBeNull": false,
          "description": "Engagement type, either fully pre-paid (upfront) or periodically paid up to engagement duration (periodic)",
          "fullType": "services.billing.engagement.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "services.billing.engagement.TypeEnum"
        }
      }
    },
    "services.billing.engagement.EndRule": {
      "description": "Description of the rule applied at the end of the Engagement",
      "id": "EndRule",
      "namespace": "services.billing.engagement",
      "properties": {
        "possibleStrategies": {
          "canBeNull": false,
          "description": "Describes the possible strategies for this Engagement",
          "fullType": "services.billing.engagement.EndStrategyEnum[]",
          "readOnly": true,
          "required": false,
          "type": "services.billing.engagement.EndStrategyEnum[]"
        },
        "strategy": {
          "canBeNull": false,
          "description": "Strategy applied at the end",
          "fullType": "services.billing.engagement.EndStrategyEnum",
          "readOnly": true,
          "required": false,
          "type": "services.billing.engagement.EndStrategyEnum"
        }
      }
    },
    "services.billing.engagement.EndStrategyEnum": {
      "description": "Strategy applicable at the end of the Engagement",
      "enum": [
        "STOP_ENGAGEMENT_FALLBACK_DEFAULT_PRICE",
        "REACTIVATE_ENGAGEMENT",
        "CANCEL_SERVICE",
        "STOP_ENGAGEMENT_KEEP_PRICE"
      ],
      "enumType": "string",
      "id": "EndStrategyEnum",
      "namespace": "services.billing.engagement"
    },
    "services.billing.engagement.Engagement": {
      "description": "Description of an Engagement",
      "id": "Engagement",
      "namespace": "services.billing.engagement",
      "properties": {
        "currentPeriod": {
          "canBeNull": false,
          "description": "Current engagement period",
          "fullType": "services.billing.engagement.EngagementPeriod",
          "readOnly": true,
          "required": false,
          "type": "services.billing.engagement.EngagementPeriod"
        },
        "endRule": {
          "canBeNull": true,
          "description": "Describes the rule applied at the end of the Engagement",
          "fullType": "services.billing.engagement.EndRule",
          "readOnly": true,
          "required": false,
          "type": "services.billing.engagement.EndRule"
        }
      }
    },
    "services.billing.engagement.EngagementPeriod": {
      "description": "Period of Engagement",
      "id": "EngagementPeriod",
      "namespace": "services.billing.engagement",
      "properties": {
        "endDate": {
          "canBeNull": true,
          "description": "End of the period",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Beginning of the period",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        }
      }
    },
    "services.billing.engagement.EngagementRequest": {
      "description": "Ongoing Engagement request on a Service",
      "id": "EngagementRequest",
      "namespace": "services.billing.engagement",
      "properties": {
        "options": {
          "canBeNull": false,
          "description": "Option Pricings this request will migrate the Services to",
          "fullType": "services.billing.engagement.EngagementRequestOption[]",
          "readOnly": true,
          "required": false,
          "type": "services.billing.engagement.EngagementRequestOption[]"
        },
        "order": {
          "canBeNull": true,
          "description": "If not null, Order to pay in order to trigger the Engagement",
          "fullType": "services.operation.Order",
          "readOnly": true,
          "required": false,
          "type": "services.operation.Order"
        },
        "pricing": {
          "canBeNull": false,
          "description": "Pricing this request will migrate the Service to",
          "fullType": "services.billing.Pricing",
          "readOnly": true,
          "required": false,
          "type": "services.billing.Pricing"
        },
        "requestDate": {
          "canBeNull": false,
          "description": "Date the request was made on",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        }
      }
    },
    "services.billing.engagement.EngagementRequestCreation": {
      "description": "Parameters needed to create an Engagement",
      "id": "EngagementRequestCreation",
      "namespace": "services.billing.engagement",
      "properties": {
        "pricingMode": {
          "canBeNull": false,
          "description": "Pricing mode to use in order to engage the Service",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "services.billing.engagement.EngagementRequestOption": {
      "description": "Pricing detail for an Ongoing Engagement request on an option Service",
      "id": "EngagementRequestOption",
      "namespace": "services.billing.engagement",
      "properties": {
        "pricing": {
          "canBeNull": false,
          "description": "Pricing this request will migrate the option Service to",
          "fullType": "services.billing.Pricing",
          "readOnly": true,
          "required": false,
          "type": "services.billing.Pricing"
        },
        "serviceId": {
          "canBeNull": false,
          "description": "Service ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "services.billing.engagement.TypeEnum": {
      "description": "Engagement's type, either fully pre-paid (upfront) or periodically paid up to engagement duration (periodic)",
      "enum": [
        "periodic",
        "upfront"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "services.billing.engagement"
    },
    "services.consumption.Detail": {
      "description": "Element's quantity consumed for a given time range",
      "id": "Detail",
      "namespace": "services.consumption",
      "properties": {
        "beginDate": {
          "canBeNull": true,
          "description": "Begin date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "endDate": {
          "canBeNull": true,
          "description": "End date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "pricingMode": {
          "canBeNull": false,
          "description": "Pricing mode used during detail's time period",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Consumed quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "services.consumption.Element": {
      "description": "Consumption information for a specific offer",
      "id": "Element",
      "namespace": "services.consumption",
      "properties": {
        "details": {
          "canBeNull": false,
          "description": "List of consumption details for this element",
          "fullType": "services.consumption.Detail[]",
          "readOnly": true,
          "required": false,
          "type": "services.consumption.Detail[]"
        },
        "metadata": {
          "canBeNull": true,
          "description": "List of metadata related to this element",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "readOnly": true,
          "required": false,
          "type": "complexType.SafeKeyValue<string>[]"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Identifier of the offer",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "planFamily": {
          "canBeNull": false,
          "description": "Family of the offer",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "price": {
          "canBeNull": false,
          "description": "Total price of the element",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Consumed quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "uniqueId": {
          "canBeNull": true,
          "description": "Unique ID of the consumed resource",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "services.consumption.PricePlanFamily": {
      "description": "Consumed amount for a given commercial offer's family",
      "id": "PricePlanFamily",
      "namespace": "services.consumption",
      "properties": {
        "planFamily": {
          "canBeNull": false,
          "description": "Commercial offer's range",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "price": {
          "canBeNull": false,
          "description": "Consumed amount by resources related to the given family",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "services.consumption.Summary": {
      "description": "Summary of the consumption of a service",
      "id": "Summary",
      "namespace": "services.consumption",
      "properties": {
        "beginDate": {
          "canBeNull": false,
          "description": "Begin date of the returned consumption snapshot",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "endDate": {
          "canBeNull": false,
          "description": "End date of the returned consumption snapshot",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": true,
          "description": "Consumption transaction ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "orderId": {
          "canBeNull": true,
          "description": "Order ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "price": {
          "canBeNull": false,
          "description": "Total price of the service's consumption",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "priceByPlanFamily": {
          "canBeNull": false,
          "description": "All the categories of commercial offers involved in the consumption of the service and their price",
          "fullType": "services.consumption.PricePlanFamily[]",
          "readOnly": true,
          "required": false,
          "type": "services.consumption.PricePlanFamily[]"
        },
        "serviceId": {
          "canBeNull": false,
          "description": "Service ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "services.expanded.Billing": {
      "description": "Billing informations of the service",
      "id": "Billing",
      "namespace": "services.expanded",
      "properties": {
        "expirationDate": {
          "canBeNull": true,
          "description": "Expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "nextBillingDate": {
          "canBeNull": true,
          "description": "Next billing date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "plan": {
          "canBeNull": true,
          "description": "Service Plan",
          "fullType": "services.expanded.Plan",
          "readOnly": true,
          "required": false,
          "type": "services.expanded.Plan"
        },
        "pricing": {
          "canBeNull": true,
          "description": "Service current Pricing",
          "fullType": "services.billing.Pricing",
          "readOnly": true,
          "required": false,
          "type": "services.billing.Pricing"
        }
      }
    },
    "services.expanded.EngagementSummary": {
      "description": "Engagement summary for a Service",
      "id": "EngagementSummary",
      "namespace": "services.expanded",
      "properties": {
        "endDate": {
          "canBeNull": true,
          "description": "Engagement end date",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "endRule": {
          "canBeNull": true,
          "description": "Describes the rule applied at the end of the Engagement",
          "fullType": "services.billing.engagement.EndRule",
          "readOnly": true,
          "required": false,
          "type": "services.billing.engagement.EndRule"
        }
      }
    },
    "services.expanded.Plan": {
      "description": "Plan of the service",
      "id": "Plan",
      "namespace": "services.expanded",
      "properties": {
        "code": {
          "canBeNull": false,
          "description": "Plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "invoiceName": {
          "canBeNull": false,
          "description": "Invoice Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "services.expanded.Product": {
      "description": "Product of the service",
      "id": "Product",
      "namespace": "services.expanded",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Product description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Product name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "services.expanded.Resource": {
      "description": "Resource of the service",
      "id": "Resource",
      "namespace": "services.expanded",
      "properties": {
        "displayName": {
          "canBeNull": false,
          "description": "Display name of the resource",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the resource",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "product": {
          "canBeNull": true,
          "description": "Product",
          "fullType": "services.expanded.Product",
          "readOnly": true,
          "required": false,
          "type": "services.expanded.Product"
        }
      }
    },
    "services.expanded.Route": {
      "description": "Route of the service",
      "id": "Route",
      "namespace": "services.expanded",
      "properties": {
        "path": {
          "canBeNull": true,
          "description": "Path to use in API",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": true,
          "description": "Path with variables applied",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "vars": {
          "canBeNull": false,
          "description": "Variables to use in the path",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "readOnly": false,
          "required": false,
          "type": "complexType.SafeKeyValue<string>[]"
        }
      }
    },
    "services.expanded.Service": {
      "description": "Description of a service",
      "id": "Service",
      "namespace": "services.expanded",
      "properties": {
        "billing": {
          "canBeNull": false,
          "description": "Billing information",
          "fullType": "services.expanded.Billing",
          "readOnly": true,
          "required": false,
          "type": "services.expanded.Billing"
        },
        "parentServiceId": {
          "canBeNull": true,
          "description": "Parent service ID",
          "fullType": "coreTypes.ServiceId:long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "resource": {
          "canBeNull": false,
          "description": "Resource",
          "fullType": "services.expanded.Resource",
          "readOnly": true,
          "required": false,
          "type": "services.expanded.Resource"
        },
        "route": {
          "canBeNull": true,
          "description": "Route",
          "fullType": "services.expanded.Route",
          "readOnly": true,
          "required": false,
          "type": "services.expanded.Route"
        },
        "serviceId": {
          "canBeNull": false,
          "description": "Service ID",
          "fullType": "coreTypes.ServiceId:long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "services.expanded.TechnicalDetails": {
      "description": "Technical information of a baremetal service",
      "id": "TechnicalDetails",
      "namespace": "services.expanded",
      "properties": {
        "baremetalServers": {
          "canBeNull": true,
          "fullType": "services.expanded.technical.BaremetalServer",
          "readOnly": true,
          "required": false,
          "type": "services.expanded.technical.BaremetalServer"
        }
      }
    },
    "services.expanded.technical.BaremetalServer": {
      "description": "Technical information on baremetal service",
      "id": "BaremetalServer",
      "namespace": "services.expanded.technical",
      "properties": {
        "bandwidth": {
          "canBeNull": true,
          "description": "Technical information on server bandwidth",
          "fullType": "services.expanded.technical.baremetalServer.Bandwidth",
          "readOnly": true,
          "required": false,
          "type": "services.expanded.technical.baremetalServer.Bandwidth"
        },
        "memory": {
          "canBeNull": true,
          "description": "Technical information on server memory",
          "fullType": "services.expanded.technical.baremetalServer.Memory",
          "readOnly": true,
          "required": false,
          "type": "services.expanded.technical.baremetalServer.Memory"
        },
        "server": {
          "canBeNull": true,
          "description": "Technical information on server type",
          "fullType": "services.expanded.technical.baremetalServer.Server",
          "readOnly": true,
          "required": false,
          "type": "services.expanded.technical.baremetalServer.Server"
        },
        "storage": {
          "canBeNull": true,
          "description": "Technical information on server storage",
          "fullType": "services.expanded.technical.baremetalServer.Storage",
          "readOnly": true,
          "required": false,
          "type": "services.expanded.technical.baremetalServer.Storage"
        },
        "vrack": {
          "canBeNull": true,
          "description": "Technical information on server vrack",
          "fullType": "services.expanded.technical.baremetalServer.Vrack",
          "readOnly": true,
          "required": false,
          "type": "services.expanded.technical.baremetalServer.Vrack"
        }
      }
    },
    "services.expanded.technical.baremetalServer.Bandwidth": {
      "description": "Technical information on bandwidth of a baremetal service",
      "id": "Bandwidth",
      "namespace": "services.expanded.technical.baremetalServer",
      "properties": {
        "burst": {
          "canBeNull": false,
          "description": "Bandwidth burst",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "guaranteed": {
          "canBeNull": false,
          "description": "Guaranteed bandwith of the server",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "level": {
          "canBeNull": false,
          "description": "Level width of Band",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "limit": {
          "canBeNull": false,
          "description": "Bandwidth limit",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "services.expanded.technical.baremetalServer.Memory": {
      "description": "Technical information on memory of a baremetal service",
      "id": "Memory",
      "namespace": "services.expanded.technical.baremetalServer",
      "properties": {
        "ecc": {
          "canBeNull": false,
          "description": "Is ECC feature is enabled on memory",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "frequency": {
          "canBeNull": false,
          "description": "Memory frequency",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ramType": {
          "canBeNull": false,
          "description": "Type of memory",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Memory size",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "services.expanded.technical.baremetalServer.Server": {
      "description": "Technical information of a baremetal server service",
      "id": "Server",
      "namespace": "services.expanded.technical.baremetalServer",
      "properties": {
        "cpu": {
          "canBeNull": false,
          "description": "Server Cpu",
          "fullType": "services.expanded.technical.baremetalServer.server.Cpu",
          "readOnly": true,
          "required": false,
          "type": "services.expanded.technical.baremetalServer.server.Cpu"
        },
        "frame": {
          "canBeNull": false,
          "description": "Server frame",
          "fullType": "services.expanded.technical.baremetalServer.server.Frame",
          "readOnly": true,
          "required": false,
          "type": "services.expanded.technical.baremetalServer.server.Frame"
        },
        "range": {
          "canBeNull": false,
          "description": "Server's range",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "services.expanded.technical.baremetalServer.Storage": {
      "description": "Technical information of storage of a baremetal service",
      "id": "Storage",
      "namespace": "services.expanded.technical.baremetalServer",
      "properties": {
        "disks": {
          "canBeNull": false,
          "description": "List of storage disks",
          "fullType": "services.expanded.technical.baremetalServer.storage.Disk[]",
          "readOnly": true,
          "required": false,
          "type": "services.expanded.technical.baremetalServer.storage.Disk[]"
        },
        "raid": {
          "canBeNull": false,
          "description": "Storage raid type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "services.expanded.technical.baremetalServer.Vrack": {
      "description": "Technical information of vrack of a baremetal service",
      "id": "Vrack",
      "namespace": "services.expanded.technical.baremetalServer",
      "properties": {
        "burst": {
          "canBeNull": false,
          "description": "Bandwidth burst",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "guaranteed": {
          "canBeNull": false,
          "description": "Guaranteed bandwith on the Vrack",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "level": {
          "canBeNull": false,
          "description": "Level width of Band",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "limit": {
          "canBeNull": false,
          "description": "Bandwidth limit",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "services.expanded.technical.baremetalServer.server.Cpu": {
      "description": "Technical information on cpu of a baremetal server service",
      "id": "Cpu",
      "namespace": "services.expanded.technical.baremetalServer.server",
      "properties": {
        "boost": {
          "canBeNull": false,
          "description": "Server Cpu boost",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "brand": {
          "canBeNull": false,
          "description": "Server Cpu brand name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "cores": {
          "canBeNull": false,
          "description": "Cpu number of cores",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "frequency": {
          "canBeNull": false,
          "description": "Server",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "model": {
          "canBeNull": false,
          "description": "Server Cpu model name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "score": {
          "canBeNull": false,
          "description": "Score of cpu",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "threads": {
          "canBeNull": false,
          "description": "Server Cpu number of threads",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "services.expanded.technical.baremetalServer.server.Frame": {
      "description": "Technical information on frame of a baremetal server service",
      "id": "Frame",
      "namespace": "services.expanded.technical.baremetalServer.server",
      "properties": {
        "model": {
          "canBeNull": false,
          "description": "Server rack Model",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Server rack size",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "services.expanded.technical.baremetalServer.storage.Disk": {
      "description": "Technical information of storage disk of a baremetal service",
      "id": "Disk",
      "namespace": "services.expanded.technical.baremetalServer.storage",
      "properties": {
        "capacity": {
          "canBeNull": false,
          "description": "Maximum disk capacity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "interface": {
          "canBeNull": false,
          "description": "Interface identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "number": {
          "canBeNull": false,
          "description": "Number of interfaces",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "specs": {
          "canBeNull": false,
          "description": "Form factor of the hardware",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "technology": {
          "canBeNull": false,
          "description": "Type of disk",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "usage": {
          "canBeNull": true,
          "description": "Disk's usage",
          "fullType": "services.expanded.technical.baremetalServer.storage.Disk.UsageEnum",
          "readOnly": true,
          "required": false,
          "type": "services.expanded.technical.baremetalServer.storage.Disk.UsageEnum"
        }
      }
    },
    "services.expanded.technical.baremetalServer.storage.Disk.UsageEnum": {
      "description": "Type of disk's usage",
      "enum": [
        "cache",
        "data",
        "os"
      ],
      "enumType": "string",
      "id": "UsageEnum",
      "namespace": "services.expanded.technical.baremetalServer.storage.Disk"
    },
    "services.form.Answer": {
      "description": "Answer to a form",
      "id": "Answer",
      "namespace": "services.form",
      "properties": {
        "question": {
          "canBeNull": false,
          "description": "Question of the answer",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Answer value to the question",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "services.form.AnswerAllowedValue": {
      "description": "Possible value for an answer to the question",
      "id": "AnswerAllowedValue",
      "namespace": "services.form",
      "properties": {
        "key": {
          "canBeNull": false,
          "description": "Possible answer to the question",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "services.form.AnswerTypeEnum": {
      "description": "Type of the answer",
      "enum": [
        "boolean",
        "date",
        "datetime",
        "double",
        "enum",
        "long",
        "string",
        "text"
      ],
      "enumType": "string",
      "id": "AnswerTypeEnum",
      "namespace": "services.form"
    },
    "services.form.Description": {
      "description": "Description of a form",
      "id": "Description",
      "namespace": "services.form",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of the form",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "questions": {
          "canBeNull": false,
          "description": "List of available questions for the form",
          "fullType": "services.form.Question[]",
          "readOnly": true,
          "required": false,
          "type": "services.form.Question[]"
        }
      }
    },
    "services.form.Form": {
      "description": "Input body for posting a form",
      "id": "Form",
      "namespace": "services.form",
      "properties": {
        "answers": {
          "canBeNull": false,
          "description": "Answers to the form",
          "fullType": "services.form.Answer[]",
          "readOnly": false,
          "required": true,
          "type": "services.form.Answer[]"
        }
      }
    },
    "services.form.Question": {
      "description": "Question description for a churn form",
      "id": "Question",
      "namespace": "services.form",
      "properties": {
        "answers": {
          "canBeNull": true,
          "description": "List of available values for answer",
          "fullType": "services.form.AnswerAllowedValue[]",
          "readOnly": true,
          "required": false,
          "type": "services.form.AnswerAllowedValue[]"
        },
        "mandatory": {
          "canBeNull": false,
          "description": "Is the Question mandatory for the form ?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "question": {
          "canBeNull": false,
          "description": "Question name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the expected answer : text, enum, number...",
          "fullType": "services.form.AnswerTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "services.form.AnswerTypeEnum"
        }
      }
    },
    "services.form.Response": {
      "description": "Response ack for posting a form",
      "id": "Response",
      "namespace": "services.form",
      "properties": {
        "message": {
          "canBeNull": false,
          "description": "Message after posting a form",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "services.operation.ExecutionRequest": {
      "description": "Missing description",
      "id": "ExecutionRequest",
      "namespace": "services.operation",
      "properties": {
        "autoPayWithPreferredPaymentMethod": {
          "canBeNull": false,
          "description": "Indicates that order, if needed, will be automatically paid with preferred payment method",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "duration": {
          "canBeNull": false,
          "description": "Duration selected for the operation execution",
          "fullType": "duration",
          "readOnly": false,
          "required": true,
          "type": "duration"
        },
        "pricingMode": {
          "canBeNull": false,
          "description": "Pricing mode selected for the operation execution",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Quantity for the operation execution",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "services.operation.Order": {
      "description": "Order created by an Operation to modify a Service",
      "id": "Order",
      "namespace": "services.operation",
      "properties": {
        "order": {
          "canBeNull": true,
          "description": "Order created, if any",
          "fullType": "order.Order",
          "readOnly": true,
          "required": false,
          "type": "order.Order"
        }
      }
    }
  },
  "resourcePath": "/services"
}