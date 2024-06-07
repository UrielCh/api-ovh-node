import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/products.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Unified catalog endpoints",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get unified catalog",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:products/catalog/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        }
      ],
      "path": "/products/catalog"
    },
    {
      "description": "Unified catalog endpoints",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get unified catalog",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:products/catalog/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Catalog ID",
              "fullType": "long",
              "name": "catalogId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "products.catalog.CatalogNameEnum",
              "description": "Name of the catalog",
              "fullType": "products.catalog.CatalogNameEnum",
              "name": "catalogName",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "products.partners.OvhSubsidiaryEnum",
              "description": "OVH subsidiary",
              "fullType": "products.partners.OvhSubsidiaryEnum",
              "name": "subsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "products.catalog.Catalog"
        }
      ],
      "path": "/products/catalog/{catalogId}"
    },
    {
      "description": "Unified catalog endpoints for formatted catalog addons",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get a list of addons from a specific unified catalog",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:products/catalog/addons/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Catalog ID",
              "fullType": "long",
              "name": "catalogId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "True if the response only shows addons with an active promotion",
              "fullType": "boolean",
              "name": "activePromotion",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Json string to filter through the blobs of the catalog addons you want to consult. Example: {\"blobs.commercial.brickSubtype\": \"Licenses\"}",
              "fullType": "string",
              "name": "blobs",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "products.catalog.CatalogNameEnum",
              "description": "Name of the catalog you want to consult the addons of",
              "fullType": "products.catalog.CatalogNameEnum",
              "name": "catalogName",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string[]",
              "description": "Codes of the catalog addons you want to consult",
              "fullType": "string[]",
              "name": "codePlan",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string[]",
              "description": "Family of the catalog addons you want to consult",
              "fullType": "string[]",
              "name": "family",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string[]",
              "description": "Invoice names of the catalog addons you want to consult",
              "fullType": "string[]",
              "name": "invoiceName",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "products.partners.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult the catalog of",
              "fullType": "products.partners.OvhSubsidiaryEnum",
              "name": "subsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "products.catalog.Plan[]"
        }
      ],
      "path": "/products/catalog/{catalogId}/addons"
    },
    {
      "description": "Unified catalog endpoints for formatted catalog full plans",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get a list of full plans from a specific unified catalog",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:products/catalog/fullPlans/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Catalog ID",
              "fullType": "long",
              "name": "catalogId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "True if the response only shows plans with an active promotion",
              "fullType": "boolean",
              "name": "activePromotion",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Json string to filter through the blobs of the catalog plans you want to consult. Example: {\"blobs.technical.cpu.cores\": 180}",
              "fullType": "string",
              "name": "blobs",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "products.catalog.CatalogNameEnum",
              "description": "Name of the catalog you want to consult the plans of",
              "fullType": "products.catalog.CatalogNameEnum",
              "name": "catalogName",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string[]",
              "description": "Codes of the catalog plans you want to consult",
              "fullType": "string[]",
              "name": "codePlan",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string[]",
              "description": "Family of the catalog plans you want to consult",
              "fullType": "string[]",
              "name": "family",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string[]",
              "description": "Invoice names of the catalog plans you want to consult",
              "fullType": "string[]",
              "name": "invoiceName",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "products.partners.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult the catalog of",
              "fullType": "products.partners.OvhSubsidiaryEnum",
              "name": "subsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "products.catalog.PlanFull[]"
        }
      ],
      "path": "/products/catalog/{catalogId}/fullPlans"
    },
    {
      "description": "Unified catalog endpoints for formatted catalog plans",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get a list of plans from a specific unified catalog",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:products/catalog/plans/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Catalog ID",
              "fullType": "long",
              "name": "catalogId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "True if the response only shows plans with an active promotion",
              "fullType": "boolean",
              "name": "activePromotion",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Json string to filter through the blobs of the catalog plans you want to consult. Example: {\"blobs.technical.cpu.cores\": 180}",
              "fullType": "string",
              "name": "blobs",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "products.catalog.CatalogNameEnum",
              "description": "Name of the catalog you want to consult the plans of",
              "fullType": "products.catalog.CatalogNameEnum",
              "name": "catalogName",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string[]",
              "description": "Family of the catalog plans you want to consult",
              "fullType": "string[]",
              "name": "family",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string[]",
              "description": "Invoice names of the catalog plans you want to consult",
              "fullType": "string[]",
              "name": "invoiceName",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string[]",
              "description": "Codes of the catalog plans you want to consult",
              "fullType": "string[]",
              "name": "planCode",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "products.partners.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult the catalog of",
              "fullType": "products.partners.OvhSubsidiaryEnum",
              "name": "subsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "products.catalog.Plan[]"
        }
      ],
      "path": "/products/catalog/{catalogId}/plans"
    },
    {
      "description": "Unified catalog endpoints for formatted catalog products",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get a list of products from a specific unified catalog",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:products/catalog/products/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Catalog ID",
              "fullType": "long",
              "name": "catalogId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Json string to filter through the blobs of the catalog products you want to consult. Example: {\"blobs.technical.storage.disks.capacity\": 100}",
              "fullType": "string",
              "name": "blobs",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "products.catalog.CatalogNameEnum",
              "description": "Name of the catalog you want to consult the products of",
              "fullType": "products.catalog.CatalogNameEnum",
              "name": "catalogName",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string[]",
              "description": "Codes of the catalog products you want to consult",
              "fullType": "string[]",
              "name": "codeProduct",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "products.partners.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult the catalog of",
              "fullType": "products.partners.OvhSubsidiaryEnum",
              "name": "subsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "products.catalog.Product[]"
        }
      ],
      "path": "/products/catalog/{catalogId}/products"
    }
  ],
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "nichandle.OvhSubsidiaryEnum": {
      "description": "OVH subsidiaries",
      "enum": [
        "ASIA",
        "AU",
        "CA",
        "IN",
        "QC",
        "SG",
        "WE",
        "WS"
      ],
      "enumType": "string",
      "id": "OvhSubsidiaryEnum",
      "namespace": "nichandle"
    },
    "order.ContextTypeEnum": {
      "description": "Application context of a promotion",
      "enum": [
        "discover",
        "standard",
        "welcome"
      ],
      "enumType": "string",
      "id": "ContextTypeEnum",
      "namespace": "order"
    },
    "order.CurrencyCodeEnum": {
      "description": "Currency code",
      "enum": [
        "AUD",
        "CAD",
        "CZK",
        "EUR",
        "GBP",
        "INR",
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
    "order.cart.DurationUnitEnum": {
      "description": "Unit corresponding to a duration range",
      "enum": [
        "day",
        "hour",
        "month",
        "none"
      ],
      "enumType": "string",
      "id": "DurationUnitEnum",
      "namespace": "order.cart"
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
    "order.cart.GenericProductPricingStrategyEnum": {
      "description": "Strategy of a Pricing",
      "enum": [
        "stairstep",
        "tiered",
        "volume"
      ],
      "enumType": "string",
      "id": "GenericProductPricingStrategyEnum",
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
    "order.catalog.public.BillingStrategyEnum": {
      "description": "Enum values for Billing Strategy",
      "enum": [
        "custom",
        "diff",
        "max",
        "max_retain",
        "ping",
        "sum"
      ],
      "enumType": "string",
      "id": "BillingStrategyEnum",
      "namespace": "order.catalog.public"
    },
    "order.catalog.public.Configuration": {
      "description": "Describes the Configuration for a Commercial offer",
      "id": "Configuration",
      "namespace": "order.catalog.public",
      "properties": {
        "isCustom": {
          "canBeNull": false,
          "description": "Whether the value of this Configuration is custom",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isMandatory": {
          "canBeNull": false,
          "description": "Whether this Configuration is mandatory",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Identifier of the Configuration",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "values": {
          "canBeNull": true,
          "description": "Possible values for this Configuration, if not custom",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "order.catalog.public.ConsumptionConfiguration": {
      "description": "Describes consumption configuration for a Plan",
      "id": "ConsumptionConfiguration",
      "namespace": "order.catalog.public",
      "properties": {
        "billingStrategy": {
          "canBeNull": false,
          "description": "Consumption billing strategy",
          "fullType": "order.catalog.public.BillingStrategyEnum",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.BillingStrategyEnum"
        },
        "pingEndPolicy": {
          "canBeNull": true,
          "description": "Consumption ping end policy used at end of usage",
          "fullType": "order.catalog.public.PingEndPolicyEnum",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.PingEndPolicyEnum"
        },
        "prorataUnit": {
          "canBeNull": false,
          "description": "Consumption prorata unit",
          "fullType": "order.catalog.public.ProrataUnitEnum",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProrataUnitEnum"
        }
      }
    },
    "order.catalog.public.EngagementConfiguration": {
      "description": "Configuration of an engagement triggered by a given pricing",
      "id": "EngagementConfiguration",
      "namespace": "order.catalog.public",
      "properties": {
        "defaultEndAction": {
          "canBeNull": false,
          "description": "Default action executed once the engagement is fully consumed",
          "fullType": "order.catalog.public.EngagementConfiguration.EndStrategyEnum",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.EngagementConfiguration.EndStrategyEnum"
        },
        "duration": {
          "canBeNull": false,
          "description": "Engagement's duration",
          "fullType": "duration",
          "readOnly": true,
          "required": false,
          "type": "duration"
        },
        "type": {
          "canBeNull": false,
          "description": "Engagement type, either fully pre-paid (upfront) or periodically paid up to engagement duration (periodic)",
          "fullType": "order.catalog.public.EngagementConfiguration.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.EngagementConfiguration.TypeEnum"
        }
      }
    },
    "order.catalog.public.EngagementConfiguration.EndStrategyEnum": {
      "description": "Strategy applicable at the end of the Engagement",
      "enum": [
        "CANCEL_SERVICE",
        "REACTIVATE_ENGAGEMENT",
        "STOP_ENGAGEMENT_FALLBACK_DEFAULT_PRICE",
        "STOP_ENGAGEMENT_KEEP_PRICE"
      ],
      "enumType": "string",
      "id": "EndStrategyEnum",
      "namespace": "order.catalog.public.EngagementConfiguration"
    },
    "order.catalog.public.EngagementConfiguration.TypeEnum": {
      "description": "Engagement's type, either fully pre-paid (upfront) or periodically paid up to engagement duration (periodic)",
      "enum": [
        "periodic",
        "upfront"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "order.catalog.public.EngagementConfiguration"
    },
    "order.catalog.public.PingEndPolicyEnum": {
      "description": "Enum values for Ping End Policy",
      "enum": [
        "full",
        "prorata"
      ],
      "enumType": "string",
      "id": "PingEndPolicyEnum",
      "namespace": "order.catalog.public"
    },
    "order.catalog.public.Pricing": {
      "description": "Describes a Pricing for a Commercial offer",
      "id": "Pricing",
      "namespace": "order.catalog.public",
      "properties": {
        "capacities": {
          "canBeNull": false,
          "description": "Capacities of the Pricing, describes what the Pricing can be used for",
          "fullType": "order.cart.GenericProductPricingCapacitiesEnum[]",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductPricingCapacitiesEnum[]"
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
          "description": "Pricing description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "engagementConfiguration": {
          "canBeNull": true,
          "description": "Engagement Configuration",
          "fullType": "order.catalog.public.EngagementConfiguration",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.EngagementConfiguration"
        },
        "interval": {
          "canBeNull": false,
          "description": "Length of the interval",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "intervalUnit": {
          "canBeNull": false,
          "description": "Unit of the interval",
          "fullType": "order.cart.DurationUnitEnum",
          "readOnly": true,
          "required": false,
          "type": "order.cart.DurationUnitEnum"
        },
        "mode": {
          "canBeNull": false,
          "description": "Pricing mode",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "mustBeCompleted": {
          "canBeNull": false,
          "description": "Pricing must be completed",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "phase": {
          "canBeNull": false,
          "description": "Phase for the Pricing",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "price": {
          "canBeNull": false,
          "description": "Price, in micro-cents",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "promotions": {
          "canBeNull": true,
          "description": "Promotions",
          "fullType": "order.catalog.public.Promotion[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.Promotion[]"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Describes how many times the Commercial offer can be added to the Cart",
          "fullType": "order.catalog.public.PricingMinMax",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.PricingMinMax"
        },
        "repeat": {
          "canBeNull": false,
          "description": "Describes how many times the interval can be repeated",
          "fullType": "order.catalog.public.PricingMinMax",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.PricingMinMax"
        },
        "strategy": {
          "canBeNull": false,
          "description": "Pricing strategy",
          "fullType": "order.cart.GenericProductPricingStrategyEnum",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductPricingStrategyEnum"
        },
        "tax": {
          "canBeNull": false,
          "description": "Tax that can be applied, in micro-cents",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "Pricing type",
          "fullType": "order.cart.GenericProductPricingTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductPricingTypeEnum"
        }
      }
    },
    "order.catalog.public.PricingMinMax": {
      "description": "Describes minimal and maximal values for a Pricing",
      "id": "PricingMinMax",
      "namespace": "order.catalog.public",
      "properties": {
        "max": {
          "canBeNull": true,
          "description": "Maximal value",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "min": {
          "canBeNull": false,
          "description": "Minimal value",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.Product": {
      "description": "Describes a Product attached to a Commercial offer",
      "id": "Product",
      "namespace": "order.catalog.public",
      "properties": {
        "blobs": {
          "canBeNull": true,
          "description": "Product blobs",
          "fullType": "order.catalog.public.ProductBlob",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlob"
        },
        "configurations": {
          "canBeNull": true,
          "description": "List of possible Configurations for this Commercial offer",
          "fullType": "order.catalog.public.Configuration[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.Configuration[]"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the Product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Identifier of the Product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlob": {
      "description": "Describes a Blob",
      "id": "ProductBlob",
      "namespace": "order.catalog.public",
      "properties": {
        "commercial": {
          "canBeNull": true,
          "description": "Commercial information for Dedicated Server Product",
          "fullType": "order.catalog.public.ProductBlobCommercial",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobCommercial"
        },
        "marketing": {
          "canBeNull": true,
          "description": "Marketing information for VPS Product",
          "fullType": "order.catalog.public.ProductBlobMarketing",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobMarketing"
        },
        "meta": {
          "canBeNull": true,
          "description": "Meta blobs for VPS Product",
          "fullType": "order.catalog.public.ProductBlobMeta",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobMeta"
        },
        "tags": {
          "canBeNull": true,
          "description": "Tags",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "technical": {
          "canBeNull": true,
          "description": "Technical information for Dedicated Server Product",
          "fullType": "order.catalog.public.ProductBlobTechnical",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnical"
        },
        "value": {
          "canBeNull": true,
          "description": "Value for meta blobs",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobCommercial": {
      "description": "Describes a Commercial blob",
      "id": "ProductBlobCommercial",
      "namespace": "order.catalog.public",
      "properties": {
        "brick": {
          "canBeNull": true,
          "description": "Brick",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "brickSubtype": {
          "canBeNull": true,
          "description": "Brick subtype",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "connection": {
          "canBeNull": true,
          "description": "Connection",
          "fullType": "order.catalog.public.ProductBlobConnection",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobConnection"
        },
        "features": {
          "canBeNull": true,
          "description": "Features",
          "fullType": "order.catalog.public.ProductBlobCommercialFeatures[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobCommercialFeatures[]"
        },
        "line": {
          "canBeNull": true,
          "description": "Line",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "price": {
          "canBeNull": true,
          "description": "Price",
          "fullType": "order.catalog.public.ProductBlobCommercialPrice",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobCommercialPrice"
        },
        "range": {
          "canBeNull": true,
          "description": "Range",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobCommercialFeatures": {
      "description": "Describes Features for a commercial blob",
      "id": "ProductBlobCommercialFeatures",
      "namespace": "order.catalog.public",
      "properties": {
        "name": {
          "canBeNull": true,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": true,
          "description": "Value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobCommercialPrice": {
      "description": "Describes a Price for a commercial blob",
      "id": "ProductBlobCommercialPrice",
      "namespace": "order.catalog.public",
      "properties": {
        "display": {
          "canBeNull": true,
          "description": "Display",
          "fullType": "order.catalog.public.ProductBlobCommercialPriceDisplay",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobCommercialPriceDisplay"
        },
        "interval": {
          "canBeNull": true,
          "description": "Interval",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "precision": {
          "canBeNull": true,
          "description": "Precision",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "unit": {
          "canBeNull": true,
          "description": "Unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobCommercialPriceDisplay": {
      "description": "Describes a Display a price",
      "id": "ProductBlobCommercialPriceDisplay",
      "namespace": "order.catalog.public",
      "properties": {
        "value": {
          "canBeNull": false,
          "description": "Value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobConnection": {
      "description": "Describes a Connection for a blob for a Dedicated Server",
      "id": "ProductBlobConnection",
      "namespace": "order.catalog.public",
      "properties": {
        "clients": {
          "canBeNull": false,
          "description": "Clients",
          "fullType": "order.catalog.public.ProductBlobConnectionClients",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobConnectionClients"
        },
        "total": {
          "canBeNull": false,
          "description": "Total",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.ProductBlobConnectionClients": {
      "description": "Describes Clients for a Connection for a blob for a Dedicated Server",
      "id": "ProductBlobConnectionClients",
      "namespace": "order.catalog.public",
      "properties": {
        "concurrency": {
          "canBeNull": false,
          "description": "Concurrency",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "number": {
          "canBeNull": false,
          "description": "Number",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.ProductBlobMarketing": {
      "description": "Describes a Marketing blob",
      "id": "ProductBlobMarketing",
      "namespace": "order.catalog.public",
      "properties": {
        "content": {
          "canBeNull": false,
          "description": "Marketing content information for VPS Product",
          "fullType": "order.catalog.public.ProductBlobMarketingContent[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobMarketingContent[]"
        }
      }
    },
    "order.catalog.public.ProductBlobMarketingContent": {
      "description": "Describes a Content for a Marketing blob",
      "id": "ProductBlobMarketingContent",
      "namespace": "order.catalog.public",
      "properties": {
        "key": {
          "canBeNull": false,
          "description": "Key",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobMeta": {
      "description": "Describes a Meta blob",
      "id": "ProductBlobMeta",
      "namespace": "order.catalog.public",
      "properties": {
        "configurations": {
          "canBeNull": false,
          "description": "Configurations",
          "fullType": "order.catalog.public.ProductBlobMetaConfigurations[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobMetaConfigurations[]"
        }
      }
    },
    "order.catalog.public.ProductBlobMetaConfigurations": {
      "description": "Describes a Configuration for a meta blob",
      "id": "ProductBlobMetaConfigurations",
      "namespace": "order.catalog.public",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "values": {
          "canBeNull": false,
          "description": "Values",
          "fullType": "order.catalog.public.ProductBlobMetaConfigurationsValues[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobMetaConfigurationsValues[]"
        }
      }
    },
    "order.catalog.public.ProductBlobMetaConfigurationsValues": {
      "description": "Describes a Values configuration for a meta blob",
      "id": "ProductBlobMetaConfigurationsValues",
      "namespace": "order.catalog.public",
      "properties": {
        "blobs": {
          "canBeNull": false,
          "description": "Blobs",
          "fullType": "order.catalog.public.ProductBlob",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlob"
        },
        "value": {
          "canBeNull": false,
          "description": "Value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnical": {
      "description": "Describes a Technical Blob",
      "id": "ProductBlobTechnical",
      "namespace": "order.catalog.public",
      "properties": {
        "bandwidth": {
          "canBeNull": true,
          "description": "Network information",
          "fullType": "order.catalog.public.ProductBlobTechnicalNetwork",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalNetwork"
        },
        "connection": {
          "canBeNull": true,
          "description": "Connection",
          "fullType": "order.catalog.public.ProductBlobConnection",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobConnection"
        },
        "connectionPerSeconds": {
          "canBeNull": true,
          "description": "Connection per seconds",
          "fullType": "order.catalog.public.ProductBlobTechnicalPerSeconds",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalPerSeconds"
        },
        "cpu": {
          "canBeNull": true,
          "description": "CPU information",
          "fullType": "order.catalog.public.ProductBlobTechnicalCPU",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalCPU"
        },
        "datacenter": {
          "canBeNull": true,
          "description": "Datacenter",
          "fullType": "order.catalog.public.ProductBlobTechnicalDatacenter",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalDatacenter"
        },
        "ephemeralLocalStorage": {
          "canBeNull": true,
          "description": "Ephemeral local storage",
          "fullType": "order.catalog.public.ProductBlobTechnicalEphemeralStorage",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalEphemeralStorage"
        },
        "gpu": {
          "canBeNull": true,
          "description": "GPU information",
          "fullType": "order.catalog.public.ProductBlobTechnicalGPU",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalGPU"
        },
        "license": {
          "canBeNull": true,
          "description": "License information",
          "fullType": "order.catalog.public.ProductBlobTechnicalLicense",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalLicense"
        },
        "memory": {
          "canBeNull": true,
          "description": "Memory information",
          "fullType": "order.catalog.public.ProductBlobTechnicalMemory",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalMemory"
        },
        "name": {
          "canBeNull": true,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nodes": {
          "canBeNull": true,
          "description": "Nodes",
          "fullType": "order.catalog.public.ProductBlobTechnicalNodes",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalNodes"
        },
        "nvme": {
          "canBeNull": true,
          "description": "NVME",
          "fullType": "order.catalog.public.ProductBlobTechnicalNvme",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalNvme"
        },
        "os": {
          "canBeNull": true,
          "description": "OS",
          "fullType": "order.catalog.public.ProductBlobTechnicalOS",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalOS"
        },
        "provider": {
          "canBeNull": true,
          "description": "Provider",
          "fullType": "order.catalog.public.ProductBlobTechnicalProvider",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalProvider"
        },
        "requestPerSeconds": {
          "canBeNull": true,
          "description": "Connection per seconds",
          "fullType": "order.catalog.public.ProductBlobTechnicalPerSeconds",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalPerSeconds"
        },
        "server": {
          "canBeNull": true,
          "description": "Hardware information",
          "fullType": "order.catalog.public.ProductBlobTechnicalServer",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalServer"
        },
        "storage": {
          "canBeNull": true,
          "description": "Disks information",
          "fullType": "order.catalog.public.ProductBlobTechnicalStorage",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalStorage"
        },
        "throughput": {
          "canBeNull": true,
          "description": "Throughput",
          "fullType": "order.catalog.public.ProductBlobTechnicalThroughput",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalThroughput"
        },
        "virtualization": {
          "canBeNull": true,
          "description": "Virtualization",
          "fullType": "order.catalog.public.ProductBlobTechnicalVirtualization",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalVirtualization"
        },
        "volume": {
          "canBeNull": true,
          "description": "Volume",
          "fullType": "order.catalog.public.ProductBlobTechnicalVolume",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalVolume"
        },
        "vrack": {
          "canBeNull": true,
          "description": "vRack information",
          "fullType": "order.catalog.public.ProductBlobTechnicalNetwork",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalNetwork"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalCPU": {
      "description": "Describes a CPU for a technical blob",
      "id": "ProductBlobTechnicalCPU",
      "namespace": "order.catalog.public",
      "properties": {
        "boost": {
          "canBeNull": true,
          "description": "CPU Boost",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "brand": {
          "canBeNull": true,
          "description": "CPU Brand",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "cores": {
          "canBeNull": true,
          "description": "Number of cores",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "customizable": {
          "canBeNull": true,
          "description": "Customizable",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "frequency": {
          "canBeNull": true,
          "description": "Frequency of CPU in GHz",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "maxFrequency": {
          "canBeNull": true,
          "description": "Maximum frequency of CPU in GHz",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "model": {
          "canBeNull": true,
          "description": "Displayable name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "number": {
          "canBeNull": true,
          "description": "Number of CPU",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "score": {
          "canBeNull": true,
          "description": "CPU score",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "threads": {
          "canBeNull": true,
          "description": "Number of threads",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": true,
          "description": "Type of CPU",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalDatacenter": {
      "description": "Describes a Datacenter for a technical Blob",
      "id": "ProductBlobTechnicalDatacenter",
      "namespace": "order.catalog.public",
      "properties": {
        "city": {
          "canBeNull": true,
          "description": "City",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "country": {
          "canBeNull": true,
          "description": "Country",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "countryCode": {
          "canBeNull": true,
          "description": "Country code",
          "fullType": "nichandle.OvhSubsidiaryEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.OvhSubsidiaryEnum"
        },
        "name": {
          "canBeNull": true,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": true,
          "description": "Region",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalDisk": {
      "description": "Describes a Disk for a technical blob",
      "id": "ProductBlobTechnicalDisk",
      "namespace": "order.catalog.public",
      "properties": {
        "capacity": {
          "canBeNull": false,
          "description": "Disk capacity in Gb",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "interface": {
          "canBeNull": true,
          "description": "Disk interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "iops": {
          "canBeNull": true,
          "description": "Iops",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maximumCapacity": {
          "canBeNull": false,
          "description": "Maximum disk capacity in Gb",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "number": {
          "canBeNull": true,
          "description": "Number of disks",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "sizeUnit": {
          "canBeNull": true,
          "description": "Size unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "specs": {
          "canBeNull": true,
          "description": "Disk specs",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "technology": {
          "canBeNull": true,
          "description": "Disk technology",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "usage": {
          "canBeNull": true,
          "description": "Usage information",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalEphemeralStorage": {
      "description": "Describes an Ephemeral Storage for technical blob",
      "id": "ProductBlobTechnicalEphemeralStorage",
      "namespace": "order.catalog.public",
      "properties": {
        "disks": {
          "canBeNull": true,
          "description": "Disk properties",
          "fullType": "order.catalog.public.ProductBlobTechnicalDisk[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalDisk[]"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalFrame": {
      "description": "Describes a Frame for a technical blob",
      "id": "ProductBlobTechnicalFrame",
      "namespace": "order.catalog.public",
      "properties": {
        "dualPowerSupply": {
          "canBeNull": false,
          "description": "Dual power supply",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "model": {
          "canBeNull": false,
          "description": "Frame model",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Frame size",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalGPU": {
      "description": "Describes a GPU for a technical blob",
      "id": "ProductBlobTechnicalGPU",
      "namespace": "order.catalog.public",
      "properties": {
        "brand": {
          "canBeNull": true,
          "description": "GPU brand",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "memory": {
          "canBeNull": false,
          "description": "GPU memory size",
          "fullType": "order.catalog.public.ProductBlobTechnicalMemory",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalMemory"
        },
        "model": {
          "canBeNull": true,
          "description": "GPU model",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "number": {
          "canBeNull": true,
          "description": "GPU number",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "performance": {
          "canBeNull": true,
          "description": "GPU performance",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalLicense": {
      "description": "Describes a License for a technical Blob",
      "id": "ProductBlobTechnicalLicense",
      "namespace": "order.catalog.public",
      "properties": {
        "application": {
          "canBeNull": true,
          "description": "Application",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "cores": {
          "canBeNull": true,
          "description": "Cores information",
          "fullType": "order.catalog.public.ProductBlobTechnicalLicenseCores",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalLicenseCores"
        },
        "cpu": {
          "canBeNull": true,
          "description": "CPU",
          "fullType": "order.catalog.public.ProductBlobTechnicalCPU",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalCPU"
        },
        "distribution": {
          "canBeNull": true,
          "description": "Network information",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "edition": {
          "canBeNull": true,
          "description": "Edition information",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "family": {
          "canBeNull": true,
          "description": "Family",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "feature": {
          "canBeNull": true,
          "description": "Feature",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "flavor": {
          "canBeNull": true,
          "description": "Flavor information",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "images": {
          "canBeNull": true,
          "description": "Images information",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "nbOfAccount": {
          "canBeNull": true,
          "description": "Number of accounts",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "package": {
          "canBeNull": true,
          "description": "Package",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "version": {
          "canBeNull": true,
          "description": "Version information",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalLicenseCores": {
      "description": "Describes license cores for a technical blob",
      "id": "ProductBlobTechnicalLicenseCores",
      "namespace": "order.catalog.public",
      "properties": {
        "number": {
          "canBeNull": false,
          "description": "Number of cores",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "total": {
          "canBeNull": true,
          "description": "Total of cores",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalMemory": {
      "description": "Describes a Memory technical Blob",
      "id": "ProductBlobTechnicalMemory",
      "namespace": "order.catalog.public",
      "properties": {
        "customizable": {
          "canBeNull": true,
          "description": "Customizable",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "ecc": {
          "canBeNull": true,
          "description": "ECC",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "frequency": {
          "canBeNull": true,
          "description": "RAM Frequency",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "interface": {
          "canBeNull": true,
          "description": "Interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ramType": {
          "canBeNull": true,
          "description": "RAM Type (DDRx...)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Size of the RAM in Gb",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "sizeUnit": {
          "canBeNull": true,
          "description": "Size unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalNetwork": {
      "description": "Describes a Network technical Blob",
      "id": "ProductBlobTechnicalNetwork",
      "namespace": "order.catalog.public",
      "properties": {
        "burst": {
          "canBeNull": true,
          "description": "Network burst",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "capacity": {
          "canBeNull": true,
          "description": "Network capacity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "guaranteed": {
          "canBeNull": true,
          "description": "Guaranteed Network",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "interfaces": {
          "canBeNull": true,
          "description": "Network interfaces",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "isMax": {
          "canBeNull": true,
          "description": "Is max?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "level": {
          "canBeNull": true,
          "description": "Network level",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "limit": {
          "canBeNull": true,
          "description": "Network limit",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "max": {
          "canBeNull": false,
          "description": "Maximum",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "maxUnit": {
          "canBeNull": false,
          "description": "Unit of maximum",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "shared": {
          "canBeNull": true,
          "description": "Shared",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "traffic": {
          "canBeNull": true,
          "description": "Traffic",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "unit": {
          "canBeNull": false,
          "description": "Unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "unlimited": {
          "canBeNull": true,
          "description": "Unlimited",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalNodes": {
      "description": "Describes a Node for technical blob",
      "id": "ProductBlobTechnicalNodes",
      "namespace": "order.catalog.public",
      "properties": {
        "number": {
          "canBeNull": false,
          "description": "Number of nodes",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalNvme": {
      "description": "Describes a NVME for technical blob",
      "id": "ProductBlobTechnicalNvme",
      "namespace": "order.catalog.public",
      "properties": {
        "disks": {
          "canBeNull": true,
          "description": "Disk properties",
          "fullType": "order.catalog.public.ProductBlobTechnicalDisk[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalDisk[]"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalOS": {
      "description": "Describes an OS for a technical blob",
      "id": "ProductBlobTechnicalOS",
      "namespace": "order.catalog.public",
      "properties": {
        "distribution": {
          "canBeNull": true,
          "description": "Distribution",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "edition": {
          "canBeNull": true,
          "description": "Edition",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "family": {
          "canBeNull": true,
          "description": "Family",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "version": {
          "canBeNull": true,
          "description": "Version",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalPerSeconds": {
      "description": "Describes a connection or request per seconds for a technical blob",
      "id": "ProductBlobTechnicalPerSeconds",
      "namespace": "order.catalog.public",
      "properties": {
        "total": {
          "canBeNull": false,
          "description": "Total",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "unit": {
          "canBeNull": true,
          "description": "Unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalProvider": {
      "description": "Describes a provider for a technical blob",
      "id": "ProductBlobTechnicalProvider",
      "namespace": "order.catalog.public",
      "properties": {
        "pointsOfPresence": {
          "canBeNull": false,
          "description": "Number of points of presence",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "reference": {
          "canBeNull": true,
          "description": "Reference",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalRaid": {
      "description": "Describes a Raid for a technical blob",
      "id": "ProductBlobTechnicalRaid",
      "namespace": "order.catalog.public",
      "properties": {
        "cardModel": {
          "canBeNull": true,
          "description": "Card size",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "cardSize": {
          "canBeNull": true,
          "description": "Card size",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalServer": {
      "description": "Describes some technicals information for a technical blob",
      "id": "ProductBlobTechnicalServer",
      "namespace": "order.catalog.public",
      "properties": {
        "cpu": {
          "canBeNull": false,
          "description": "CPU properties",
          "fullType": "order.catalog.public.ProductBlobTechnicalCPU",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalCPU"
        },
        "frame": {
          "canBeNull": false,
          "description": "Frame properties",
          "fullType": "order.catalog.public.ProductBlobTechnicalFrame",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalFrame"
        },
        "network": {
          "canBeNull": true,
          "description": "Network",
          "fullType": "order.catalog.public.ProductBlobTechnicalNetwork",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalNetwork"
        },
        "range": {
          "canBeNull": false,
          "description": "Dedicated server series",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "services": {
          "canBeNull": false,
          "description": "Services properties",
          "fullType": "order.catalog.public.ProductBlobTechnicalServices",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalServices"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalServices": {
      "description": "Describes some technicals information",
      "id": "ProductBlobTechnicalServices",
      "namespace": "order.catalog.public",
      "properties": {
        "antiddos": {
          "canBeNull": false,
          "description": "Anti DDOS",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "includedBackup": {
          "canBeNull": true,
          "description": "Included backup",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "sla": {
          "canBeNull": false,
          "description": "SLA",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalStorage": {
      "description": "Describes a Storage technical Blob",
      "id": "ProductBlobTechnicalStorage",
      "namespace": "order.catalog.public",
      "properties": {
        "disks": {
          "canBeNull": true,
          "description": "Disk properties",
          "fullType": "order.catalog.public.ProductBlobTechnicalDisk[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalDisk[]"
        },
        "hotSwap": {
          "canBeNull": true,
          "description": "Hot Swap",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "raid": {
          "canBeNull": true,
          "description": "Raid",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "raidDetails": {
          "canBeNull": true,
          "description": "Raid details",
          "fullType": "order.catalog.public.ProductBlobTechnicalRaid",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalRaid"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalThroughput": {
      "description": "Describes a Throughput for a technical blob",
      "id": "ProductBlobTechnicalThroughput",
      "namespace": "order.catalog.public",
      "properties": {
        "level": {
          "canBeNull": false,
          "description": "Level",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalVirtualization": {
      "description": "Describes a Virtualization for a Technical Blob",
      "id": "ProductBlobTechnicalVirtualization",
      "namespace": "order.catalog.public",
      "properties": {
        "hypervisor": {
          "canBeNull": true,
          "description": "Hypervisor",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalVolume": {
      "description": "Describes a Volume for a technichal blob",
      "id": "ProductBlobTechnicalVolume",
      "namespace": "order.catalog.public",
      "properties": {
        "capacity": {
          "canBeNull": false,
          "description": "Capacity",
          "fullType": "order.catalog.public.ProductBlobTechnicalVolumeCapacity",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalVolumeCapacity"
        },
        "iops": {
          "canBeNull": false,
          "description": "CPU information",
          "fullType": "order.catalog.public.ProductBlobTechnicalVolumeIops",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalVolumeIops"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalVolumeCapacity": {
      "description": "Describes a Capacity for a Volume for a technichal blob",
      "id": "ProductBlobTechnicalVolumeCapacity",
      "namespace": "order.catalog.public",
      "properties": {
        "max": {
          "canBeNull": false,
          "description": "Max",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalVolumeIops": {
      "description": "Describes a Iops for a Volume for a technichal blob",
      "id": "ProductBlobTechnicalVolumeIops",
      "namespace": "order.catalog.public",
      "properties": {
        "guaranteed": {
          "canBeNull": false,
          "description": "Guaranteed",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "level": {
          "canBeNull": false,
          "description": "Level",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "max": {
          "canBeNull": false,
          "description": "Maximum IOPS",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maxUnit": {
          "canBeNull": false,
          "description": "Unit of maximum IOPS",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "unit": {
          "canBeNull": false,
          "description": "Unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.Promotion": {
      "description": "Describes a Promotion inside a Catalog",
      "id": "Promotion",
      "namespace": "order.catalog.public",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Promotion description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "discount": {
          "canBeNull": false,
          "description": "Promotion discount",
          "fullType": "order.catalog.public.PromotionDiscountTotal",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.PromotionDiscountTotal"
        },
        "duration": {
          "canBeNull": true,
          "description": "Promotion duration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "endDate": {
          "canBeNull": true,
          "description": "Promotion end date using rfc3339",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "isGlobalQuantityLimited": {
          "canBeNull": false,
          "description": "Is the global quantity of the promotion limited?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Promotion name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quantity": {
          "canBeNull": true,
          "description": "Promotion quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Promotion start date using rfc3339",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "total": {
          "canBeNull": false,
          "description": "Promotion total",
          "fullType": "order.catalog.public.PromotionDiscountTotal",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.PromotionDiscountTotal"
        },
        "type": {
          "canBeNull": false,
          "description": "Promotion type",
          "fullType": "order.ReductionTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.ReductionTypeEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "Promotion value",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.PromotionDiscountTotal": {
      "description": "Describes a Promotion discount or total inside a Catalog",
      "id": "PromotionDiscountTotal",
      "namespace": "order.catalog.public",
      "properties": {
        "tax": {
          "canBeNull": false,
          "description": "Tax",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "value": {
          "canBeNull": false,
          "description": "Value",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.ProrataUnitEnum": {
      "description": "Enum values for Prorata Unit",
      "enum": [
        "day",
        "hour",
        "month"
      ],
      "enumType": "string",
      "id": "ProrataUnitEnum",
      "namespace": "order.catalog.public"
    },
    "products.catalog.AddonFamily": {
      "description": "Describes an Addon family for a Commercial offer",
      "id": "AddonFamily",
      "namespace": "products.catalog",
      "properties": {
        "addons": {
          "canBeNull": true,
          "description": "List of Commercial offers that can be ordered as an Addon of the current Commerical offer for the current Family",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "default": {
          "canBeNull": true,
          "description": "Default Commercial offer that can be ordered as an Addon of the current Commercial offer for the current Family",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "exclusive": {
          "canBeNull": true,
          "description": "Whether this Addon family is exclusive and can be ordered only once for the main Commercial offer",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "mandatory": {
          "canBeNull": true,
          "description": "Whether this Addon family is mandatory",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Family name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.AddonFamilyFull": {
      "description": "Describes an Addon family full for a Commercial offer",
      "id": "AddonFamilyFull",
      "namespace": "products.catalog",
      "properties": {
        "addons": {
          "canBeNull": true,
          "description": "List of Commercial offers that can be ordered as an Addon of the current Commerical offer for the current Family",
          "fullType": "products.catalog.PlanFull[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.PlanFull[]"
        },
        "default": {
          "canBeNull": true,
          "description": "Default Commercial offer that can be ordered as an Addon of the current Commercial offer for the current Family",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "exclusive": {
          "canBeNull": true,
          "description": "Whether this Addon family is exclusive and can be ordered only once for the main Commercial offer",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "mandatory": {
          "canBeNull": true,
          "description": "Whether this Addon family is mandatory",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Family name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.Catalog": {
      "description": "Describes a Catalog inside a Subsidiary",
      "id": "Catalog",
      "namespace": "products.catalog",
      "properties": {
        "addons": {
          "canBeNull": false,
          "description": "List of addons of the catalog",
          "fullType": "products.catalog.Plan[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.Plan[]"
        },
        "catalogId": {
          "canBeNull": false,
          "description": "Identifier of the catalog",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "locale": {
          "canBeNull": false,
          "description": "Subsidiary specific information",
          "fullType": "products.catalog.Locale",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.Locale"
        },
        "planFamilies": {
          "canBeNull": false,
          "description": "List of plan families of the catalog",
          "fullType": "products.catalog.PlanFamily[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.PlanFamily[]"
        },
        "plans": {
          "canBeNull": false,
          "description": "List of main plans of the catalog",
          "fullType": "products.catalog.Plan[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.Plan[]"
        },
        "products": {
          "canBeNull": false,
          "description": "List of products of the catalog",
          "fullType": "products.catalog.Product[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.Product[]"
        }
      }
    },
    "products.catalog.CatalogNameEnum": {
      "description": "Allowed catalog names",
      "enum": [
        "Anthos",
        "Baremetal",
        "BaremetalEco",
        "BaremetalEcoPreProd",
        "BaremetalPreProd",
        "BringYourOwnIP",
        "CDN",
        "CloudDB",
        "CloudDiskArray",
        "DNS",
        "DbaasLogs",
        "Dedicated",
        "Domain",
        "EmailPro",
        "ExchangeEnterprise",
        "ExchangePublic",
        "Guestbook",
        "IPFailover",
        "IPLoadBalancing",
        "ISPPublic",
        "ISPReseller",
        "LicenseCPanel",
        "LicenseCloudLinux",
        "LicenseDirectAdmin",
        "LicensePlesk",
        "LicenseSQLServer",
        "LicenseWindows",
        "NasHA",
        "NasHAInternal",
        "NasHAPreprod",
        "NetApp",
        "Nutanix",
        "NutanixPreProd",
        "NutanixStaging",
        "OVHCloudConnect",
        "OfficePrepaid",
        "PackProfessionalServices",
        "PrivateCloud",
        "PrivateCloudPreProd",
        "PrivateSQL",
        "PublicCloud",
        "PublicCloudTrustedEU",
        "SSLGateway",
        "Support",
        "Telephony",
        "VPS",
        "Veeam",
        "WebHosting",
        "WebPaas"
      ],
      "enumType": "string",
      "id": "CatalogNameEnum",
      "namespace": "products.catalog"
    },
    "products.catalog.Configuration": {
      "description": "Describes the Configuration for a Commercial offer",
      "id": "Configuration",
      "namespace": "products.catalog",
      "properties": {
        "defaultValue": {
          "canBeNull": true,
          "description": "Default value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isCustom": {
          "canBeNull": false,
          "description": "Whether the value of this Configuration is custom",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isMandatory": {
          "canBeNull": false,
          "description": "Whether this Configuration is mandatory",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Identifier of the Configuration",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "values": {
          "canBeNull": true,
          "description": "Possible values for this Configuration, if not custom",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "products.catalog.Locale": {
      "description": "Describes specifics for a given Subsidiary",
      "id": "Locale",
      "namespace": "products.catalog",
      "properties": {
        "currencyCode": {
          "canBeNull": false,
          "description": "Currency used by the Subsidiary",
          "fullType": "order.CurrencyCodeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.CurrencyCodeEnum"
        },
        "subsidiary": {
          "canBeNull": false,
          "description": "Current Subsidiary",
          "fullType": "nichandle.OvhSubsidiaryEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.OvhSubsidiaryEnum"
        },
        "taxRate": {
          "canBeNull": false,
          "description": "Default VAT rate used by the Subsidiary",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "products.catalog.Plan": {
      "description": "Describes a Commercial offer inside a Catalog",
      "id": "Plan",
      "namespace": "products.catalog",
      "properties": {
        "addonFamilies": {
          "canBeNull": true,
          "description": "Addon families for this offer",
          "fullType": "products.catalog.AddonFamily[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.AddonFamily[]"
        },
        "blobs": {
          "canBeNull": true,
          "description": "Blobs",
          "fullType": "products.catalog.ProductBlob",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlob"
        },
        "configurations": {
          "canBeNull": true,
          "description": "List of possible Configurations for this Commercial offer",
          "fullType": "products.catalog.Configuration[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.Configuration[]"
        },
        "consumptionConfiguration": {
          "canBeNull": true,
          "description": "Configuration when pricing type is consumption",
          "fullType": "order.catalog.public.ConsumptionConfiguration",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ConsumptionConfiguration"
        },
        "family": {
          "canBeNull": true,
          "description": "Name of the family this Commercial offer belongs to",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "invoiceName": {
          "canBeNull": true,
          "description": "Commercial offer description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Commercial offer identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "pricingType": {
          "canBeNull": true,
          "description": "Type of Pricing used by this Commercial offer",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "pricings": {
          "canBeNull": true,
          "description": "List of possible Pricings for this Commercial offer",
          "fullType": "products.catalog.Pricing[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.Pricing[]"
        },
        "product": {
          "canBeNull": true,
          "description": "Identifier of the Product linked to this Commercial offer",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.PlanFamily": {
      "description": "Describes a PlanFamily for a Catalog",
      "id": "PlanFamily",
      "namespace": "products.catalog",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Family name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.PlanFull": {
      "description": "Describes a Commercial offer full inside a Catalog",
      "id": "PlanFull",
      "namespace": "products.catalog",
      "properties": {
        "addonFamilies": {
          "canBeNull": false,
          "description": "Addon families for this offer",
          "fullType": "products.catalog.AddonFamilyFull[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.AddonFamilyFull[]"
        },
        "blobs": {
          "canBeNull": true,
          "description": "Blobs",
          "fullType": "order.catalog.public.ProductBlob",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlob"
        },
        "configurations": {
          "canBeNull": false,
          "description": "List of possible Configurations for this Commercial offer",
          "fullType": "order.catalog.public.Configuration[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.Configuration[]"
        },
        "consumptionConfiguration": {
          "canBeNull": true,
          "description": "Configuration when pricing type is consumption",
          "fullType": "order.catalog.public.ConsumptionConfiguration",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ConsumptionConfiguration"
        },
        "family": {
          "canBeNull": true,
          "description": "Name of the family this Commercial offer belongs to",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "invoiceName": {
          "canBeNull": false,
          "description": "Commercial offer description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Commercial offer identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "pricingType": {
          "canBeNull": false,
          "description": "Type of Pricing used by this Commercial offer",
          "fullType": "order.cart.GenericProductPricingTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductPricingTypeEnum"
        },
        "pricings": {
          "canBeNull": false,
          "description": "List of possible Pricings for this Commercial offer",
          "fullType": "order.catalog.public.Pricing[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.Pricing[]"
        },
        "product": {
          "canBeNull": false,
          "description": "Product linked to this Commercial offer",
          "fullType": "order.catalog.public.Product",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.Product"
        }
      }
    },
    "products.catalog.Pricing": {
      "description": "Describes a Pricing for a Commercial offer",
      "id": "Pricing",
      "namespace": "products.catalog",
      "properties": {
        "capacities": {
          "canBeNull": true,
          "description": "Capacities of the Pricing, describes what the Pricing can be used for",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "commitment": {
          "canBeNull": true,
          "description": "Engagement period",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "description": {
          "canBeNull": true,
          "description": "Pricing description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "engagementConfiguration": {
          "canBeNull": true,
          "description": "Engagement Configuration",
          "fullType": "order.catalog.public.EngagementConfiguration",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.EngagementConfiguration"
        },
        "formattedPrice": {
          "canBeNull": true,
          "description": "Pricing value as text with currency symbol",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "interval": {
          "canBeNull": true,
          "description": "Length of the interval",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "intervalUnit": {
          "canBeNull": true,
          "description": "Unit of the interval",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "mode": {
          "canBeNull": true,
          "description": "Pricing mode",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "mustBeCompleted": {
          "canBeNull": true,
          "description": "Pricing must be completed",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "phase": {
          "canBeNull": true,
          "description": "Phase for the Pricing",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "price": {
          "canBeNull": true,
          "description": "Price, in micro-cents",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "promotions": {
          "canBeNull": true,
          "description": "Promotions",
          "fullType": "products.catalog.Promotion[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.Promotion[]"
        },
        "quantity": {
          "canBeNull": true,
          "description": "Describes how many times the Commercial offer can be added to the Cart",
          "fullType": "products.catalog.PricingMinMax",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.PricingMinMax"
        },
        "repeat": {
          "canBeNull": true,
          "description": "Describes how many times the interval can be repeated",
          "fullType": "products.catalog.PricingMinMax",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.PricingMinMax"
        },
        "strategy": {
          "canBeNull": true,
          "description": "Pricing strategy",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "tax": {
          "canBeNull": true,
          "description": "Tax that can be applied, in micro-cents",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": true,
          "description": "Pricing type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.PricingMinMax": {
      "description": "Describes minimal and maximal values for a Pricing",
      "id": "PricingMinMax",
      "namespace": "products.catalog",
      "properties": {
        "max": {
          "canBeNull": true,
          "description": "Maximal value",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "min": {
          "canBeNull": true,
          "description": "Minimal value",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "products.catalog.Product": {
      "description": "Describes a Product attached to a Commercial offer",
      "id": "Product",
      "namespace": "products.catalog",
      "properties": {
        "blobs": {
          "canBeNull": true,
          "description": "Product blobs",
          "fullType": "products.catalog.ProductBlob",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlob"
        },
        "configurations": {
          "canBeNull": true,
          "description": "List of possible Configurations for this Commercial offer",
          "fullType": "products.catalog.Configuration[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.Configuration[]"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the Product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Identifier of the Product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.ProductBlob": {
      "description": "Describes a Blob",
      "id": "ProductBlob",
      "namespace": "products.catalog",
      "properties": {
        "commercial": {
          "canBeNull": true,
          "description": "Commercial information for Dedicated Server Product",
          "fullType": "products.catalog.ProductBlobCommercial",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobCommercial"
        },
        "marketing": {
          "canBeNull": true,
          "description": "Marketing information for VPS Product",
          "fullType": "products.catalog.ProductBlobMarketing",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobMarketing"
        },
        "meta": {
          "canBeNull": true,
          "description": "Meta blobs for VPS Product",
          "fullType": "products.catalog.ProductBlobMeta",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobMeta"
        },
        "tags": {
          "canBeNull": true,
          "description": "Tags",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "technical": {
          "canBeNull": true,
          "description": "Technical information for Dedicated Server Product",
          "fullType": "products.catalog.ProductBlobTechnical",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnical"
        },
        "value": {
          "canBeNull": true,
          "description": "Value for meta blobs",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.ProductBlobCommercial": {
      "description": "Describes a Commercial blob",
      "id": "ProductBlobCommercial",
      "namespace": "products.catalog",
      "properties": {
        "additionalDescription": {
          "canBeNull": true,
          "description": "Additional description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "brick": {
          "canBeNull": true,
          "description": "Brick",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "brickSubtype": {
          "canBeNull": true,
          "description": "Brick subtype",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "connection": {
          "canBeNull": true,
          "description": "Connection",
          "fullType": "products.catalog.ProductBlobConnection",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobConnection"
        },
        "displayedVcpu": {
          "canBeNull": true,
          "description": "List of numbers of vcpu to display",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        },
        "features": {
          "canBeNull": true,
          "description": "Commercial features to describe additional services of the commercial offer",
          "fullType": "products.catalog.ProductBlobCommercialFeatures[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobCommercialFeatures[]"
        },
        "line": {
          "canBeNull": true,
          "description": "Commercial Offer Line",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "packs": {
          "canBeNull": true,
          "description": "Commercial packs",
          "fullType": "products.catalog.ProductBlobCommercialPacks",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobCommercialPacks"
        },
        "price": {
          "canBeNull": true,
          "description": "Price",
          "fullType": "products.catalog.ProductBlobCommercialPrice",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobCommercialPrice"
        },
        "range": {
          "canBeNull": true,
          "description": "Commercial offer Range",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "references": {
          "canBeNull": true,
          "description": "Commercial references",
          "fullType": "products.catalog.ProductBlobCommercialReferences[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobCommercialReferences[]"
        },
        "sla": {
          "canBeNull": true,
          "description": "Service Level Agreement in percent",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "products.catalog.ProductBlobCommercialFeatures": {
      "description": "Describes Features for a commercial blob",
      "id": "ProductBlobCommercialFeatures",
      "namespace": "products.catalog",
      "properties": {
        "name": {
          "canBeNull": true,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": true,
          "description": "Value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.ProductBlobCommercialPacks": {
      "description": "Describes Packs for a commercial blob",
      "id": "ProductBlobCommercialPacks",
      "namespace": "products.catalog",
      "properties": {
        "brick": {
          "canBeNull": true,
          "description": "Brick. Category of the commercial pack",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "brickSubtype": {
          "canBeNull": true,
          "description": "Brick subtype. Sub category of the commercial pack",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "items": {
          "canBeNull": true,
          "description": "Items of the commercial pack",
          "fullType": "products.catalog.ProductBlobCommercialPacksItem[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobCommercialPacksItem[]"
        },
        "line": {
          "canBeNull": true,
          "description": "Line of the commercial pack",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "range": {
          "canBeNull": true,
          "description": "Range of the commercial pack",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.ProductBlobCommercialPacksItem": {
      "description": "Describes Item for a commercial blob pack",
      "id": "ProductBlobCommercialPacksItem",
      "namespace": "products.catalog",
      "properties": {
        "planCode": {
          "canBeNull": true,
          "description": "Plan code of the item in the pack",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quantity": {
          "canBeNull": true,
          "description": "Quantity of the item in the pack",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "products.catalog.ProductBlobCommercialPrice": {
      "description": "Describes a Price for a commercial blob",
      "id": "ProductBlobCommercialPrice",
      "namespace": "products.catalog",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Description of the Commercial price",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "display": {
          "canBeNull": true,
          "description": "Price display",
          "fullType": "products.catalog.ProductBlobCommercialPriceDisplay",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobCommercialPriceDisplay"
        },
        "interval": {
          "canBeNull": true,
          "description": "Time interval of price (PT1H, P1M, etc.)",
          "fullType": "duration",
          "readOnly": true,
          "required": false,
          "type": "duration"
        },
        "precision": {
          "canBeNull": true,
          "description": "Number of decimal digits of the price to display",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "unit": {
          "canBeNull": true,
          "description": "Price unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.ProductBlobCommercialPriceDisplay": {
      "description": "Describes a Display of a price",
      "id": "ProductBlobCommercialPriceDisplay",
      "namespace": "products.catalog",
      "properties": {
        "unit": {
          "canBeNull": true,
          "description": "unit of the diplayed price",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.ProductBlobCommercialReferences": {
      "description": "Describes References for a commercial blob",
      "id": "ProductBlobCommercialReferences",
      "namespace": "products.catalog",
      "properties": {
        "datacenter": {
          "canBeNull": true,
          "description": "Datacenter",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "planCode": {
          "canBeNull": true,
          "description": "Plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.ProductBlobConnection": {
      "description": "Describes a Connection for a blob for a Dedicated Server",
      "id": "ProductBlobConnection",
      "namespace": "products.catalog",
      "properties": {
        "clients": {
          "canBeNull": true,
          "description": "Concurrent clients connection details",
          "fullType": "order.catalog.public.ProductBlobConnectionClients",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobConnectionClients"
        },
        "total": {
          "canBeNull": true,
          "description": "Total of concurrent connections",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "unit": {
          "canBeNull": true,
          "description": "Connection type request",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.ProductBlobMarketing": {
      "description": "Describes a Marketing blob",
      "id": "ProductBlobMarketing",
      "namespace": "products.catalog",
      "properties": {
        "content": {
          "canBeNull": false,
          "description": "Marketing content information for VPS Product",
          "fullType": "products.catalog.ProductBlobMarketingContent[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobMarketingContent[]"
        }
      }
    },
    "products.catalog.ProductBlobMarketingContent": {
      "description": "Describes a Content for a Marketing blob",
      "id": "ProductBlobMarketingContent",
      "namespace": "products.catalog",
      "properties": {
        "key": {
          "canBeNull": false,
          "description": "Key",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.ProductBlobMeta": {
      "description": "Describes a Meta blob",
      "id": "ProductBlobMeta",
      "namespace": "products.catalog",
      "properties": {
        "configurations": {
          "canBeNull": false,
          "description": "Configurations",
          "fullType": "products.catalog.ProductBlobMetaConfigurations[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobMetaConfigurations[]"
        }
      }
    },
    "products.catalog.ProductBlobMetaConfigurations": {
      "description": "Describes a Configuration for a meta blob",
      "id": "ProductBlobMetaConfigurations",
      "namespace": "products.catalog",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "values": {
          "canBeNull": false,
          "description": "Values",
          "fullType": "products.catalog.ProductBlobMetaConfigurationsValues[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobMetaConfigurationsValues[]"
        }
      }
    },
    "products.catalog.ProductBlobMetaConfigurationsValues": {
      "description": "Describes a Values configuration for a meta blob",
      "id": "ProductBlobMetaConfigurationsValues",
      "namespace": "products.catalog",
      "properties": {
        "blobs": {
          "canBeNull": false,
          "description": "Blobs",
          "fullType": "products.catalog.ProductBlob",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlob"
        },
        "value": {
          "canBeNull": false,
          "description": "Value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.ProductBlobTechnical": {
      "description": "Describes a Technical Blob",
      "id": "ProductBlobTechnical",
      "namespace": "products.catalog",
      "properties": {
        "bandwidth": {
          "canBeNull": true,
          "description": "Network information",
          "fullType": "products.catalog.ProductBlobTechnicalNetwork",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalNetwork"
        },
        "cluster": {
          "canBeNull": true,
          "description": "Cluster",
          "fullType": "products.catalog.ProductBlobTechnicalCluster",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalCluster"
        },
        "connection": {
          "canBeNull": true,
          "description": "Connection",
          "fullType": "products.catalog.ProductBlobConnection",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobConnection"
        },
        "connectionPerSeconds": {
          "canBeNull": true,
          "description": "Connection per seconds",
          "fullType": "products.catalog.ProductBlobConnection",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobConnection"
        },
        "cpu": {
          "canBeNull": true,
          "description": "CPU information",
          "fullType": "products.catalog.ProductBlobTechnicalCPU",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalCPU"
        },
        "datacenter": {
          "canBeNull": true,
          "description": "Datacenter",
          "fullType": "products.catalog.ProductBlobTechnicalDatacenter",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalDatacenter"
        },
        "ephemeralLocalStorage": {
          "canBeNull": true,
          "description": "Ephemeral local storage",
          "fullType": "products.catalog.ProductBlobTechnicalStorage",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalStorage"
        },
        "extensionCard": {
          "canBeNull": true,
          "description": "Extension card",
          "fullType": "products.catalog.ProductBlobTechnicalExtensionCard",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalExtensionCard"
        },
        "farm": {
          "canBeNull": true,
          "description": "Farm's properties",
          "fullType": "products.catalog.ProductBlobTechnicalFarm",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalFarm"
        },
        "frame": {
          "canBeNull": true,
          "description": "Frame properties",
          "fullType": "products.catalog.ProductBlobTechnicalFrame",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalFrame"
        },
        "gpu": {
          "canBeNull": true,
          "description": "GPU information",
          "fullType": "products.catalog.ProductBlobTechnicalGPU",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalGPU"
        },
        "license": {
          "canBeNull": true,
          "description": "License information",
          "fullType": "products.catalog.ProductBlobTechnicalOS",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalOS"
        },
        "managedNetappCluster": {
          "canBeNull": true,
          "description": "Managed Netapp cluster information",
          "fullType": "products.catalog.ProductBlobTechnicalStorage",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalStorage"
        },
        "memory": {
          "canBeNull": true,
          "description": "Memory information",
          "fullType": "products.catalog.ProductBlobTechnicalMemory",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalMemory"
        },
        "metric": {
          "canBeNull": true,
          "description": "Metric information",
          "fullType": "products.catalog.ProductBlobTechnicalMetric",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalMetric"
        },
        "name": {
          "canBeNull": true,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "network": {
          "canBeNull": true,
          "description": "List of Networks",
          "fullType": "products.catalog.ProductBlobTechnicalNetwork[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalNetwork[]"
        },
        "nodes": {
          "canBeNull": true,
          "description": "Nodes",
          "fullType": "products.catalog.ProductBlobTechnicalVirtualization",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalVirtualization"
        },
        "nvme": {
          "canBeNull": true,
          "description": "NVME",
          "fullType": "products.catalog.ProductBlobTechnicalStorage",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalStorage"
        },
        "os": {
          "canBeNull": true,
          "description": "OS",
          "fullType": "products.catalog.ProductBlobTechnicalOS",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalOS"
        },
        "provider": {
          "canBeNull": true,
          "description": "Provider",
          "fullType": "products.catalog.ProductBlobTechnicalProvider",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalProvider"
        },
        "requestPerSeconds": {
          "canBeNull": true,
          "description": "Connection per seconds",
          "fullType": "products.catalog.ProductBlobConnection",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobConnection"
        },
        "server": {
          "canBeNull": true,
          "description": "Hardware information",
          "fullType": "products.catalog.ProductBlobTechnicalServer",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalServer"
        },
        "service": {
          "canBeNull": true,
          "description": "Hardware information",
          "fullType": "products.catalog.ProductBlobTechnicalServices",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalServices"
        },
        "storage": {
          "canBeNull": true,
          "description": "Disks information",
          "fullType": "products.catalog.ProductBlobTechnicalStorage",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalStorage"
        },
        "tags": {
          "canBeNull": true,
          "description": "Tags",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "throughput": {
          "canBeNull": true,
          "description": "Throughput",
          "fullType": "products.catalog.ProductBlobTechnicalNetwork",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalNetwork"
        },
        "virtualization": {
          "canBeNull": true,
          "description": "Virtualization",
          "fullType": "products.catalog.ProductBlobTechnicalVirtualization",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalVirtualization"
        },
        "volume": {
          "canBeNull": true,
          "description": "Volume",
          "fullType": "products.catalog.ProductBlobTechnicalVolume",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalVolume"
        },
        "vrack": {
          "canBeNull": true,
          "description": "vRack information",
          "fullType": "products.catalog.ProductBlobTechnicalNetwork",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalNetwork"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalAggregation": {
      "description": "Describes an aggregation for a technical blob",
      "id": "ProductBlobTechnicalAggregation",
      "namespace": "products.catalog",
      "properties": {
        "upTo": {
          "canBeNull": true,
          "description": "Maximum value",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalCPU": {
      "description": "Describes a CPU for a technical blob",
      "id": "ProductBlobTechnicalCPU",
      "namespace": "products.catalog",
      "properties": {
        "boost": {
          "canBeNull": true,
          "description": "CPU Boost",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "brand": {
          "canBeNull": true,
          "description": "CPU Brand",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "cache": {
          "canBeNull": true,
          "description": "Cache",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "cores": {
          "canBeNull": true,
          "description": "Number of cores",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "customizable": {
          "canBeNull": true,
          "description": "Customizable",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "frequency": {
          "canBeNull": true,
          "description": "Frequency of CPU in GHz",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "maxFrequency": {
          "canBeNull": true,
          "description": "Maximum frequency value",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "model": {
          "canBeNull": true,
          "description": "Displayable name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "number": {
          "canBeNull": true,
          "description": "Number of CPU",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "score": {
          "canBeNull": true,
          "description": "CPU score",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "threads": {
          "canBeNull": true,
          "description": "Number of threads",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
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
    "products.catalog.ProductBlobTechnicalCluster": {
      "description": "Describes a Cluster for a technical Blob",
      "id": "ProductBlobTechnicalCluster",
      "namespace": "products.catalog",
      "properties": {
        "range": {
          "canBeNull": true,
          "description": "Product offer range",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "server": {
          "canBeNull": true,
          "description": "Server composition details",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalDatacenter": {
      "description": "Describes a Datacenter for a technical Blob",
      "id": "ProductBlobTechnicalDatacenter",
      "namespace": "products.catalog",
      "properties": {
        "city": {
          "canBeNull": true,
          "description": "City",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "country": {
          "canBeNull": true,
          "description": "Country",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "countryCode": {
          "canBeNull": true,
          "description": "Country code",
          "fullType": "nichandle.OvhSubsidiaryEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.OvhSubsidiaryEnum"
        },
        "name": {
          "canBeNull": true,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": true,
          "description": "Region",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalDisk": {
      "description": "Describes a Disk for a technical blob",
      "id": "ProductBlobTechnicalDisk",
      "namespace": "products.catalog",
      "properties": {
        "capacity": {
          "canBeNull": true,
          "description": "Disk capacity in Gb",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "dwpd": {
          "canBeNull": true,
          "description": "Drive Writes Per Day",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "interface": {
          "canBeNull": true,
          "description": "Disk interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "iops": {
          "canBeNull": true,
          "description": "Iops",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maximumCapacity": {
          "canBeNull": true,
          "description": "Maximum disk capacity in Gb",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "number": {
          "canBeNull": true,
          "description": "Number of disks",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "sizeUnit": {
          "canBeNull": true,
          "description": "Size unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "specs": {
          "canBeNull": true,
          "description": "Disk specs",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "technology": {
          "canBeNull": true,
          "description": "Disk technology",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "usage": {
          "canBeNull": true,
          "description": "Usage information",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalExtensionCard": {
      "description": "Describes an extension card for a technical blob",
      "id": "ProductBlobTechnicalExtensionCard",
      "namespace": "products.catalog",
      "properties": {
        "model": {
          "canBeNull": true,
          "description": "model of the extension card",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": true,
          "description": "Size of the extension card in GB",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalFarm": {
      "description": "Describes a Farm for technical blob",
      "id": "ProductBlobTechnicalFarm",
      "namespace": "products.catalog",
      "properties": {
        "number": {
          "canBeNull": true,
          "description": "Number",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalFrame": {
      "description": "Describes a Frame for a technical blob",
      "id": "ProductBlobTechnicalFrame",
      "namespace": "products.catalog",
      "properties": {
        "customizable": {
          "canBeNull": true,
          "description": "Customizable",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "dualPowerSupply": {
          "canBeNull": false,
          "description": "Dual power supply",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "maxNbDisks": {
          "canBeNull": true,
          "description": "Maximum number of disks",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "model": {
          "canBeNull": true,
          "description": "Frame model",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": true,
          "description": "Frame size",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "slots": {
          "canBeNull": true,
          "description": "Number of slots",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalGPU": {
      "description": "Describes a GPU for a technical blob",
      "id": "ProductBlobTechnicalGPU",
      "namespace": "products.catalog",
      "properties": {
        "brand": {
          "canBeNull": true,
          "description": "GPU brand",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "memory": {
          "canBeNull": true,
          "description": "GPU memory details",
          "fullType": "products.catalog.ProductBlobTechnicalMemory",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalMemory"
        },
        "model": {
          "canBeNull": true,
          "description": "GPU model",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "number": {
          "canBeNull": true,
          "description": "GPU number",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "performance": {
          "canBeNull": true,
          "description": "GPU performance",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalInterfaces": {
      "description": "Describes an interface for a technical blob",
      "id": "ProductBlobTechnicalInterfaces",
      "namespace": "products.catalog",
      "properties": {
        "interfaces": {
          "canBeNull": true,
          "description": "Interfaces details",
          "fullType": "products.catalog.ProductBlobTechnicalItemMinMax",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalItemMinMax"
        },
        "level": {
          "canBeNull": true,
          "description": "Interface Level",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalItemMinMax": {
      "description": "Describes minimal and maximal values of an item",
      "id": "ProductBlobTechnicalItemMinMax",
      "namespace": "products.catalog",
      "properties": {
        "max": {
          "canBeNull": true,
          "description": "Maximal value",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "min": {
          "canBeNull": false,
          "description": "Minimal value",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalLicenseCores": {
      "description": "Describes license cores for a technical blob",
      "id": "ProductBlobTechnicalLicenseCores",
      "namespace": "products.catalog",
      "properties": {
        "min": {
          "canBeNull": true,
          "description": "Minimum number of cores",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "number": {
          "canBeNull": true,
          "description": "Number of cores",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "total": {
          "canBeNull": true,
          "description": "Total of cores",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalMemory": {
      "description": "Describes a Memory technical Blob",
      "id": "ProductBlobTechnicalMemory",
      "namespace": "products.catalog",
      "properties": {
        "customizable": {
          "canBeNull": true,
          "description": "Customizable",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "ecc": {
          "canBeNull": true,
          "description": "ECC",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "frequency": {
          "canBeNull": true,
          "description": "RAM frequency in MHz",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "interface": {
          "canBeNull": true,
          "description": "RAM interface details",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ramType": {
          "canBeNull": true,
          "description": "RAM Type (DDRx...)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Size of the RAM in GB",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "sizeUnit": {
          "canBeNull": true,
          "description": "Size unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalMetric": {
      "description": "Describes a Metric for a technical Blob",
      "id": "ProductBlobTechnicalMetric",
      "namespace": "products.catalog",
      "properties": {
        "retentionPeriod": {
          "canBeNull": true,
          "description": "Metric retention period in month",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalNetwork": {
      "description": "Describes a Network technical Blob",
      "id": "ProductBlobTechnicalNetwork",
      "namespace": "products.catalog",
      "properties": {
        "aggregation": {
          "canBeNull": true,
          "description": "Network aggregation information",
          "fullType": "products.catalog.ProductBlobTechnicalAggregation",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalAggregation"
        },
        "assured": {
          "canBeNull": true,
          "description": "Network assured information",
          "fullType": "products.catalog.ProductBlobTechnicalInterfaces",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalInterfaces"
        },
        "burst": {
          "canBeNull": true,
          "description": "Network burst",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "capacity": {
          "canBeNull": true,
          "description": "Network capacity. If capacity > 1000 then unit is Mbps, else Gbps",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "guaranteed": {
          "canBeNull": true,
          "description": "Guaranteed Network",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "interfaces": {
          "canBeNull": true,
          "description": "Network interfaces number",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "isMax": {
          "canBeNull": true,
          "description": "False if additional NETWORK capacity can be added when max is reached",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "level": {
          "canBeNull": true,
          "description": "Network level",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "limit": {
          "canBeNull": true,
          "description": "Network limit",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "max": {
          "canBeNull": true,
          "description": "Network max capacity. If capacity > 1000 then unit is Mbps, else Gbps",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maxUnit": {
          "canBeNull": true,
          "description": "Maximun network capacity unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "number": {
          "canBeNull": true,
          "description": "Network number",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "shared": {
          "canBeNull": true,
          "description": "True if the network is shared",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "traffic": {
          "canBeNull": true,
          "description": "Included traffic in GB",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "unit": {
          "canBeNull": true,
          "description": "Unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "unlimited": {
          "canBeNull": true,
          "description": "Unlimited",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalOS": {
      "description": "Describes an OS for a technical blob",
      "id": "ProductBlobTechnicalOS",
      "namespace": "products.catalog",
      "properties": {
        "application": {
          "canBeNull": true,
          "description": "Application",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "cores": {
          "canBeNull": true,
          "description": "Cores information",
          "fullType": "products.catalog.ProductBlobTechnicalLicenseCores",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalLicenseCores"
        },
        "cpu": {
          "canBeNull": true,
          "description": "CPU",
          "fullType": "products.catalog.ProductBlobTechnicalCPU",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalCPU"
        },
        "distribution": {
          "canBeNull": true,
          "description": "OS distribution",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "edition": {
          "canBeNull": true,
          "description": "Edition",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "family": {
          "canBeNull": true,
          "description": "Family",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "feature": {
          "canBeNull": true,
          "description": "Feature",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "features": {
          "canBeNull": true,
          "description": "Features",
          "fullType": "products.catalog.ProductBlobCommercialFeatures[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobCommercialFeatures[]"
        },
        "flavor": {
          "canBeNull": true,
          "description": "Os flavor",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "images": {
          "canBeNull": true,
          "description": "Multiple Images information",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "nbOfAccount": {
          "canBeNull": true,
          "description": "Number of account",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "package": {
          "canBeNull": true,
          "description": "Package",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "rack": {
          "canBeNull": true,
          "description": "Rack information",
          "fullType": "products.catalog.ProductBlobTechnicalRack",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalRack"
        },
        "version": {
          "canBeNull": true,
          "description": "Version",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalProvider": {
      "description": "Describes a provider for a technical blob",
      "id": "ProductBlobTechnicalProvider",
      "namespace": "products.catalog",
      "properties": {
        "pointsOfPresence": {
          "canBeNull": true,
          "description": "Points of presence of the provider",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "reference": {
          "canBeNull": true,
          "description": "Reference",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalRack": {
      "description": "Describes a Rack technical Blob",
      "id": "ProductBlobTechnicalRack",
      "namespace": "products.catalog",
      "properties": {
        "size": {
          "canBeNull": false,
          "description": "Size of the rack",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalRaid": {
      "description": "Describes a Raid for a technical blob",
      "id": "ProductBlobTechnicalRaid",
      "namespace": "products.catalog",
      "properties": {
        "cardModel": {
          "canBeNull": true,
          "description": "Card size",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "cardSize": {
          "canBeNull": true,
          "description": "Card size",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "level": {
          "canBeNull": true,
          "description": "Raid level",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
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
    "products.catalog.ProductBlobTechnicalServer": {
      "description": "Describes some technicals information for a technical blob",
      "id": "ProductBlobTechnicalServer",
      "namespace": "products.catalog",
      "properties": {
        "cpu": {
          "canBeNull": true,
          "description": "CPU properties",
          "fullType": "products.catalog.ProductBlobTechnicalCPU",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalCPU"
        },
        "extensionCard": {
          "canBeNull": true,
          "description": "Extension card",
          "fullType": "products.catalog.ProductBlobTechnicalExtensionCard",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalExtensionCard"
        },
        "frame": {
          "canBeNull": true,
          "description": "Frame properties",
          "fullType": "products.catalog.ProductBlobTechnicalFrame",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalFrame"
        },
        "range": {
          "canBeNull": true,
          "description": "Dedicated server series",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "services": {
          "canBeNull": true,
          "description": "Hardware information",
          "fullType": "products.catalog.ProductBlobTechnicalServices",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalServices"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalServices": {
      "description": "Describes some technicals information",
      "id": "ProductBlobTechnicalServices",
      "namespace": "products.catalog",
      "properties": {
        "antiddos": {
          "canBeNull": true,
          "description": "Anti DDOS formula",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "includedBackup": {
          "canBeNull": true,
          "description": "Included backup",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "sla": {
          "canBeNull": true,
          "description": "Service Level Agreement in percent",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalStorage": {
      "description": "Describes a Storage technical Blob",
      "id": "ProductBlobTechnicalStorage",
      "namespace": "products.catalog",
      "properties": {
        "disks": {
          "canBeNull": true,
          "description": "Disk properties",
          "fullType": "products.catalog.ProductBlobTechnicalDisk[]",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalDisk[]"
        },
        "hotSwap": {
          "canBeNull": true,
          "description": "Hot Swap. True if the feature exists",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "local": {
          "canBeNull": true,
          "description": "Local",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "raid": {
          "canBeNull": true,
          "description": "Raid",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "raidDetails": {
          "canBeNull": true,
          "description": "Raid details",
          "fullType": "products.catalog.ProductBlobTechnicalRaid",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalRaid"
        },
        "replication": {
          "canBeNull": true,
          "description": "Replication",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalVirtualization": {
      "description": "Describes a Virtualization for a Technical Blob",
      "id": "ProductBlobTechnicalVirtualization",
      "namespace": "products.catalog",
      "properties": {
        "hypervisor": {
          "canBeNull": true,
          "description": "Hypervisor",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "number": {
          "canBeNull": true,
          "description": "Number",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "replication": {
          "canBeNull": true,
          "description": "Number of virtual replication",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalVolume": {
      "description": "Describes a Volume for a technichal blob",
      "id": "ProductBlobTechnicalVolume",
      "namespace": "products.catalog",
      "properties": {
        "capacity": {
          "canBeNull": true,
          "description": "Capacity",
          "fullType": "products.catalog.ProductBlobTechnicalVolumeCapacity",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalVolumeCapacity"
        },
        "iops": {
          "canBeNull": true,
          "description": "Iops details",
          "fullType": "products.catalog.ProductBlobTechnicalVolumeIops",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.ProductBlobTechnicalVolumeIops"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalVolumeCapacity": {
      "description": "Describes a Capacity for a Volume for a technichal blob",
      "id": "ProductBlobTechnicalVolumeCapacity",
      "namespace": "products.catalog",
      "properties": {
        "max": {
          "canBeNull": true,
          "description": "Max",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "products.catalog.ProductBlobTechnicalVolumeIops": {
      "description": "Describes a Iops for a Volume for a technichal blob",
      "id": "ProductBlobTechnicalVolumeIops",
      "namespace": "products.catalog",
      "properties": {
        "guaranteed": {
          "canBeNull": true,
          "description": "Guaranteed",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "level": {
          "canBeNull": true,
          "description": "Number of IOPS",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "max": {
          "canBeNull": true,
          "description": "Maximum volume value",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maxUnit": {
          "canBeNull": true,
          "description": "Maximal unit value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "unit": {
          "canBeNull": true,
          "description": "IOPS unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "products.catalog.Promotion": {
      "description": "Describes a Promotion inside a Catalog",
      "id": "Promotion",
      "namespace": "products.catalog",
      "properties": {
        "context": {
          "canBeNull": true,
          "description": "Application context of the promotion",
          "fullType": "order.ContextTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.ContextTypeEnum"
        },
        "description": {
          "canBeNull": true,
          "description": "Promotion description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "discount": {
          "canBeNull": true,
          "description": "Promotion discount",
          "fullType": "products.catalog.PromotionDiscountTotal",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.PromotionDiscountTotal"
        },
        "duration": {
          "canBeNull": true,
          "description": "Promotion duration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "endDate": {
          "canBeNull": true,
          "description": "Promotion end date using rfc3339",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "formattedValue": {
          "canBeNull": true,
          "description": "Pricing value as text with currency symbol",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "globalQuantity": {
          "canBeNull": true,
          "description": "Global quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "isGlobalQuantityLimited": {
          "canBeNull": true,
          "description": "Is the global quantity of the promotion limited?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "minimumDuration": {
          "canBeNull": true,
          "description": "Minimum engagement duration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": true,
          "description": "Promotion name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quantity": {
          "canBeNull": true,
          "description": "Promotion quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "startDate": {
          "canBeNull": true,
          "description": "Promotion start date using rfc3339",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "total": {
          "canBeNull": true,
          "description": "Promotion total",
          "fullType": "products.catalog.PromotionDiscountTotal",
          "readOnly": true,
          "required": false,
          "type": "products.catalog.PromotionDiscountTotal"
        },
        "type": {
          "canBeNull": true,
          "description": "Promotion type",
          "fullType": "order.ReductionTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.ReductionTypeEnum"
        },
        "value": {
          "canBeNull": true,
          "description": "Promotion value",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "products.catalog.PromotionDiscountTotal": {
      "description": "Describes a Promotion discount or total inside a Catalog",
      "id": "PromotionDiscountTotal",
      "namespace": "products.catalog",
      "properties": {
        "formattedValue": {
          "canBeNull": true,
          "description": "Pricing value as text with currency symbol",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "tax": {
          "canBeNull": false,
          "description": "Tax",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "value": {
          "canBeNull": false,
          "description": "Value",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "products.partners.OvhSubsidiaryEnum": {
      "description": "Allowed ovh subsidiary for partners",
      "enum": [
        "ASIA",
        "AU",
        "CA",
        "CZ",
        "DE",
        "ES",
        "FI",
        "FR",
        "GB",
        "IE",
        "IN",
        "IT",
        "LT",
        "MA",
        "NL",
        "PL",
        "PT",
        "QC",
        "SG",
        "SN",
        "TN",
        "US",
        "WE",
        "WS"
      ],
      "enumType": "string",
      "id": "OvhSubsidiaryEnum",
      "namespace": "products.partners"
    }
  },
  "resourcePath": "/products"
}