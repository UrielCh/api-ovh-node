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
    }
  ],
  "basePath": "https://eu.api.kimsufi.com/1.0",
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
        "fixed_amount",
        "forced_amount",
        "percentage"
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
        "consumption",
        "detach",
        "downgrade",
        "dynamic",
        "installation",
        "renew",
        "upgrade"
      ],
      "enumType": "string",
      "id": "GenericProductPricingCapacitiesEnum",
      "namespace": "order.cart"
    },
    "order.cart.GenericProductPricingTypeEnum": {
      "description": "Type of a pricing",
      "enum": [
        "consumption",
        "purchase",
        "rental"
      ],
      "enumType": "string",
      "id": "GenericProductPricingTypeEnum",
      "namespace": "order.cart"
    },
    "order.cart.GenericProductTypeEnum": {
      "description": "Type of a product",
      "enum": [
        "cloud_service",
        "delivery",
        "deposit",
        "domain",
        "saas_license",
        "shipping",
        "storage"
      ],
      "enumType": "string",
      "id": "GenericProductTypeEnum",
      "namespace": "order.cart"
    },
    "order.catalog.AddonItem": {
      "description": "Describes an Addon",
      "id": "AddonItem",
      "namespace": "order.catalog",
      "properties": {
        "addons": {
          "canBeNull": false,
          "description": "List of the addons of this family",
          "fullType": "order.catalog.AddonOffer[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.AddonOffer[]"
        },
        "exclusive": {
          "canBeNull": false,
          "description": "Whether you can only have one instance of this addon family (xor)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "family": {
          "canBeNull": false,
          "description": "Addon family name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "mandatory": {
          "canBeNull": false,
          "description": "Indicated if addon family must be contracted",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "order.catalog.AddonOffer": {
      "description": "Describes of Addon offer",
      "id": "AddonOffer",
      "namespace": "order.catalog",
      "properties": {
        "default": {
          "canBeNull": true,
          "description": "Default",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "invoiceName": {
          "canBeNull": false,
          "description": "Name that appears on invoice",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "maximumQuantity": {
          "canBeNull": true,
          "description": "Maximum quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minimumQuantity": {
          "canBeNull": true,
          "description": "Minimum quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "plan": {
          "canBeNull": false,
          "description": "Describes of commercial offer of a product",
          "fullType": "order.catalog.ProductPlan",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.ProductPlan"
        }
      }
    },
    "order.catalog.ConfigurationItem": {
      "description": "Composition of a configuration",
      "id": "ConfigurationItem",
      "namespace": "order.catalog",
      "properties": {
        "defaultValue": {
          "canBeNull": true,
          "description": "Default value of the configuration if not provided",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isCustom": {
          "canBeNull": false,
          "description": "Indicates if the configuration is free for writing (true) or have to follow an enum (false - have to follow values field)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isMandatory": {
          "canBeNull": false,
          "description": "Indicates if configuration is required",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Label of the configuration",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "values": {
          "canBeNull": false,
          "description": "Values allowed if configuration isn't custom",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "order.catalog.Pricing": {
      "description": "Describes a pricing",
      "id": "Pricing",
      "namespace": "order.catalog",
      "properties": {
        "capacities": {
          "canBeNull": false,
          "description": "Install, renew ... What the pricing can be used for",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "commitment": {
          "canBeNull": false,
          "description": "Engagement period",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "interval": {
          "canBeNull": false,
          "description": "Number length of the interval",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "intervalUnit": {
          "canBeNull": false,
          "description": "Unit interval for duration",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "maximumQuantity": {
          "canBeNull": true,
          "description": "Maximum quantity buyable",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maximumRepeat": {
          "canBeNull": true,
          "description": "Maximum repeat duration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minimumQuantity": {
          "canBeNull": false,
          "description": "Minimum quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minimumRepeat": {
          "canBeNull": false,
          "description": "Minimum repeat duration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "mustBeCompleted": {
          "canBeNull": false,
          "description": "Whether the catalog must reach max repeat before subscription can use another one",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "price": {
          "canBeNull": false,
          "description": "Price of the product",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "priceCapInUcents": {
          "canBeNull": true,
          "description": "Max price customer will pay at the end of the period (cap)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "priceInUcents": {
          "canBeNull": false,
          "description": "Price in microcents",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "pricingStrategy": {
          "canBeNull": false,
          "description": "Strategy on which the pricing can change",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.PricingDefault": {
      "description": "Describe default pricings",
      "id": "PricingDefault",
      "namespace": "order.catalog",
      "properties": {
        "default": {
          "canBeNull": false,
          "description": "Information about default pricing",
          "fullType": "order.catalog.Pricing[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.Pricing[]"
        }
      }
    },
    "order.catalog.Product": {
      "description": "Describe a Product in the Catalog",
      "id": "Product",
      "namespace": "order.catalog",
      "properties": {
        "configurations": {
          "canBeNull": false,
          "description": "List of the configurations available for the product",
          "fullType": "order.catalog.ConfigurationItem[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.ConfigurationItem[]"
        },
        "description": {
          "canBeNull": false,
          "description": "Designation of the product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "internalType": {
          "canBeNull": false,
          "description": "Type of product (deposit, etc...)",
          "fullType": "order.cart.GenericProductTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductTypeEnum"
        },
        "metadatas": {
          "canBeNull": true,
          "description": "List of the metadatas attached",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "readOnly": true,
          "required": false,
          "type": "complexType.SafeKeyValue<string>[]"
        },
        "name": {
          "canBeNull": false,
          "description": "Plan code identifier of the product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "subType": {
          "canBeNull": true,
          "description": "Sub type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "technicalDetails": {
          "canBeNull": true,
          "description": "Technicals details about product",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "readOnly": true,
          "required": false,
          "type": "complexType.SafeKeyValue<string>[]"
        },
        "type": {
          "canBeNull": true,
          "description": "Type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.ProductOfferDetails": {
      "description": "Describe the details of a commercial offer",
      "id": "ProductOfferDetails",
      "namespace": "order.catalog",
      "properties": {
        "blobs": {
          "canBeNull": true,
          "description": "Extra informations of product offer",
          "fullType": "order.catalog.cloud.Blob",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.cloud.Blob"
        },
        "metadatas": {
          "canBeNull": true,
          "description": "List of the metadatas attached",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "readOnly": true,
          "required": false,
          "type": "complexType.SafeKeyValue<string>[]"
        },
        "pricings": {
          "canBeNull": false,
          "description": "Describe default pricings",
          "fullType": "order.catalog.PricingDefault",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.PricingDefault"
        },
        "product": {
          "canBeNull": false,
          "description": "Information about the product",
          "fullType": "order.catalog.Product",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.Product"
        }
      }
    },
    "order.catalog.ProductPlan": {
      "description": "Describes of commercial offer of a product",
      "id": "ProductPlan",
      "namespace": "order.catalog",
      "properties": {
        "addonsFamily": {
          "canBeNull": false,
          "description": "List of addons",
          "fullType": "order.catalog.AddonItem[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.AddonItem[]"
        },
        "consumptionBillingStrategy": {
          "canBeNull": true,
          "description": "Strategy that follow the pricing when product is in consumption mode",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "details": {
          "canBeNull": false,
          "description": "Describe the details of a commercial offer",
          "fullType": "order.catalog.ProductOfferDetails",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.ProductOfferDetails"
        },
        "familyName": {
          "canBeNull": true,
          "description": "Family name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "invoiceName": {
          "canBeNull": false,
          "description": "Name that appears on invoice",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Plan code identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "prices": {
          "canBeNull": true,
          "description": "List of region prices",
          "fullType": "order.catalog.cloud.RegionPrice[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.cloud.RegionPrice[]"
        },
        "pricingType": {
          "canBeNull": false,
          "description": "Main mode: rental, consumption",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.cloud.Blob": {
      "description": "Describe extra informations of product offer",
      "id": "Blob",
      "namespace": "order.catalog.cloud",
      "properties": {
        "unit": {
          "canBeNull": true,
          "description": "Unit of billed quantity",
          "fullType": "order.catalog.cloud.Blob.Unit",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.cloud.Blob.Unit"
        }
      }
    },
    "order.catalog.cloud.Blob.Unit": {
      "description": "Label of the unit",
      "id": "Unit",
      "namespace": "order.catalog.cloud.Blob",
      "properties": {
        "unit": {
          "canBeNull": false,
          "description": "Unit of billed quantity",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.cloud.RegionPrice": {
      "description": "Describes a region price",
      "id": "RegionPrice",
      "namespace": "order.catalog.cloud",
      "properties": {
        "price": {
          "canBeNull": false,
          "description": "Strategy that follow the pricing when product is in consumption mode",
          "fullType": "order.catalog.cloud.RegionPrice.Price",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.cloud.RegionPrice.Price"
        },
        "region": {
          "canBeNull": false,
          "description": "Region",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.cloud.RegionPrice.Price": {
      "description": "Describes a price",
      "id": "Price",
      "namespace": "order.catalog.cloud.RegionPrice",
      "properties": {
        "currencyCode": {
          "canBeNull": false,
          "description": "Currency code",
          "fullType": "order.CurrencyCodeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.CurrencyCodeEnum"
        },
        "priceInUcents": {
          "canBeNull": false,
          "description": "Price in microcents",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "text": {
          "canBeNull": false,
          "description": "Price text with currency symbol",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Price in currency",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    }
  },
  "resourcePath": "/order"
}