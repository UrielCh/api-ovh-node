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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "T"
        }
      }
    },
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
          "readOnly": false,
          "required": false,
          "type": "order.CurrencyCodeEnum"
        },
        "text": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "double"
        }
      }
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
    }
  },
  "resourcePath": "/services"
}