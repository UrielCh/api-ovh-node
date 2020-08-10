import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/service.json

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "description": "Operations about the services",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        }
      ],
      "path": "/service"
    },
    {
      "description": "Details about a Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Service ID",
              "fullType": "long",
              "name": "serviceId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "serviceList.Service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "serviceList.Service",
              "description": "Request Body",
              "fullType": "serviceList.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Service ID",
              "fullType": "long",
              "name": "serviceId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/service/{serviceId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List possible renews for this service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service ID",
              "fullType": "string",
              "name": "serviceId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Include service's option(s)",
              "fullType": "boolean",
              "name": "includeOptions",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "service.renew.RenewDescription[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create a renew order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Indicates if renew order is generated",
              "fullType": "boolean",
              "name": "dryRun",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Renew duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long[]",
              "description": "List of services to renew",
              "fullType": "long[]",
              "name": "services",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service ID",
              "fullType": "string",
              "name": "serviceId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "service.renew.RenewOrder"
        }
      ],
      "path": "/service/{serviceId}/renew"
    },
    {
      "description": "reopen operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Reopen a suspended service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Service ID",
              "fullType": "long",
              "name": "serviceId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/service/{serviceId}/reopen"
    },
    {
      "description": "suspend operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Suspend the service. The service won't be accessible, but you will still be charged for it",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Service ID",
              "fullType": "long",
              "name": "serviceId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/service/{serviceId}/suspend"
    },
    {
      "description": "terminate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Terminates a suspended service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Service ID",
              "fullType": "long",
              "name": "serviceId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/service/{serviceId}/terminate"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
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
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "fullType": "T",
          "readOnly": false,
          "required": true,
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
    },
    "service.BillingStateEnum": {
      "description": "Possible billing states",
      "enum": [
        "expired",
        "ok",
        "pending",
        "unpaid"
      ],
      "enumType": "string",
      "id": "BillingStateEnum",
      "namespace": "service"
    },
    "service.Plan": {
      "description": "Plan information",
      "id": "Plan",
      "namespace": "service",
      "properties": {
        "code": {
          "canBeNull": true,
          "description": "Product code",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "product": {
          "canBeNull": false,
          "description": "Product plan information",
          "fullType": "service.plan.Product",
          "readOnly": false,
          "required": true,
          "type": "service.plan.Product"
        }
      }
    },
    "service.Renew": {
      "description": "Renew information",
      "id": "Renew",
      "namespace": "service",
      "properties": {
        "dayOfMonth": {
          "canBeNull": true,
          "description": "Renew day number",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "interval": {
          "canBeNull": true,
          "description": "Interval between each renewal",
          "fullType": "service.renew.Interval",
          "readOnly": false,
          "required": false,
          "type": "service.renew.Interval"
        },
        "mode": {
          "canBeNull": false,
          "description": "Renewal mode",
          "fullType": "service.renew.Mode",
          "readOnly": false,
          "required": true,
          "type": "service.renew.Mode"
        },
        "possibleIntervals": {
          "canBeNull": true,
          "description": "Possible interval between each renewal",
          "fullType": "service.renew.Interval[]",
          "readOnly": false,
          "required": false,
          "type": "service.renew.Interval[]"
        },
        "possibleModes": {
          "canBeNull": false,
          "description": "Possible renewal mode",
          "fullType": "service.renew.Mode[]",
          "readOnly": false,
          "required": true,
          "type": "service.renew.Mode[]"
        }
      }
    },
    "service.Resource": {
      "description": "Resource service informations",
      "id": "Resource",
      "namespace": "service",
      "properties": {
        "displayName": {
          "canBeNull": false,
          "description": "Custom display name of the service",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Name of the service",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": true,
          "description": "Resource state",
          "fullType": "service.ResourceStateEnum",
          "readOnly": false,
          "required": false,
          "type": "service.ResourceStateEnum"
        }
      }
    },
    "service.ResourceStateEnum": {
      "description": "Possible resource states",
      "enum": [
        "deleted",
        "deleting",
        "ok",
        "opening",
        "suspended",
        "suspending",
        "toDelete",
        "toOpen",
        "toSuspend"
      ],
      "enumType": "string",
      "id": "ResourceStateEnum",
      "namespace": "service"
    },
    "service.Route": {
      "description": "route of this service",
      "id": "Route",
      "namespace": "service",
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
          "description": "Path with variables applyed",
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
          "required": true,
          "type": "complexType.SafeKeyValue<string>[]"
        }
      }
    },
    "service.plan.Product": {
      "description": "Product plan information",
      "id": "Product",
      "namespace": "service.plan",
      "properties": {
        "name": {
          "canBeNull": true,
          "description": "Product name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "service.renew.Interval": {
      "description": "Interval enum information",
      "enum": [
        "P1M",
        "P1Y",
        "P2Y",
        "P3M",
        "P3Y",
        "P6M"
      ],
      "enumType": "string",
      "id": "Interval",
      "namespace": "service.renew"
    },
    "service.renew.Mode": {
      "description": "Mode enum informations",
      "enum": [
        "automaticForcedProduct",
        "automaticV2012",
        "automaticV2014",
        "automaticV2016",
        "deleteAtEndEngagement",
        "deleteAtExpiration",
        "manual",
        "oneShot",
        "option"
      ],
      "enumType": "string",
      "id": "Mode",
      "namespace": "service.renew"
    },
    "service.renew.RenewDescription": {
      "description": "List possible renews for service",
      "id": "RenewDescription",
      "namespace": "service.renew",
      "properties": {
        "renewPeriod": {
          "canBeNull": false,
          "description": "ISO8601 formatted renewal duration",
          "fullType": "duration",
          "readOnly": true,
          "required": true,
          "type": "duration"
        },
        "strategies": {
          "canBeNull": false,
          "description": "List possible strategies",
          "fullType": "service.renew.RenewStrategy[]",
          "readOnly": true,
          "required": true,
          "type": "service.renew.RenewStrategy[]"
        }
      }
    },
    "service.renew.RenewOrder": {
      "description": "Details about a renew Order",
      "id": "RenewOrder",
      "namespace": "service.renew",
      "properties": {
        "date": {
          "canBeNull": true,
          "description": "Creation date of the renew Order",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "expirationDate": {
          "canBeNull": true,
          "description": "Expiration date of the renew Order",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "orderId": {
          "canBeNull": false,
          "description": "ID of the renew Order",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "password": {
          "canBeNull": false,
          "description": "Password",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "pdfUrl": {
          "canBeNull": false,
          "description": "Public pdf URL of the generated renew Order",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "priceWithTax": {
          "canBeNull": false,
          "description": "Price of the product with tax",
          "fullType": "order.Price",
          "readOnly": true,
          "required": true,
          "type": "order.Price"
        },
        "priceWithoutTax": {
          "canBeNull": false,
          "description": "Price of the product without tax",
          "fullType": "order.Price",
          "readOnly": true,
          "required": true,
          "type": "order.Price"
        },
        "retractionDate": {
          "canBeNull": true,
          "description": "Retraction date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "tax": {
          "canBeNull": false,
          "description": "Value of the tax",
          "fullType": "order.Price",
          "readOnly": true,
          "required": true,
          "type": "order.Price"
        },
        "url": {
          "canBeNull": false,
          "description": "Public URL to display generated renew Order",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        }
      }
    },
    "service.renew.RenewStrategy": {
      "description": "Representation of a product renew pricing",
      "id": "RenewStrategy",
      "namespace": "service.renew",
      "properties": {
        "price": {
          "canBeNull": false,
          "description": "Price of the product",
          "fullType": "order.Price",
          "readOnly": true,
          "required": true,
          "type": "order.Price"
        },
        "priceInUcents": {
          "canBeNull": false,
          "description": "Price of the product in micro-centims",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "services": {
          "canBeNull": false,
          "description": "Services renewed by strategy",
          "fullType": "coreTypes.ServiceId:long[]",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.ServiceId:long[]"
        },
        "servicesDetails": {
          "canBeNull": false,
          "description": "Details of services renewed by strategy",
          "fullType": "service.renew.Service[]",
          "readOnly": true,
          "required": true,
          "type": "service.renew.Service[]"
        }
      }
    },
    "service.renew.Service": {
      "description": "Description of a service",
      "id": "Service",
      "namespace": "service.renew",
      "properties": {
        "serviceId": {
          "canBeNull": false,
          "description": "ID of the service",
          "fullType": "coreTypes.ServiceId:long",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.ServiceId:long"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Name of the service",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "serviceType": {
          "canBeNull": false,
          "description": "Type of the service",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        }
      }
    },
    "serviceList.Service": {
      "description": "Details about a Service",
      "id": "Service",
      "namespace": "serviceList",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "date",
          "readOnly": true,
          "required": true,
          "type": "date"
        },
        "details": {
          "canBeNull": false,
          "description": "Resource details",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "readOnly": true,
          "required": true,
          "type": "complexType.SafeKeyValue<string>[]"
        },
        "engagementDate": {
          "canBeNull": true,
          "description": "Engagement date",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "expirationDate": {
          "canBeNull": true,
          "description": "Expiration date",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "nextBillingDate": {
          "canBeNull": true,
          "description": "The next billing date",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "plan": {
          "canBeNull": false,
          "description": "Plan service description",
          "fullType": "service.Plan",
          "readOnly": true,
          "required": true,
          "type": "service.Plan"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Quantity",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "renew": {
          "canBeNull": true,
          "description": "Renew service description",
          "fullType": "service.Renew",
          "readOnly": true,
          "required": false,
          "type": "service.Renew"
        },
        "resource": {
          "canBeNull": false,
          "description": "Resource service description",
          "fullType": "service.Resource",
          "readOnly": false,
          "required": true,
          "type": "service.Resource"
        },
        "route": {
          "canBeNull": false,
          "description": "Route to use in API",
          "fullType": "service.Route",
          "readOnly": true,
          "required": true,
          "type": "service.Route"
        },
        "state": {
          "canBeNull": false,
          "description": "Billing state of your service",
          "fullType": "service.BillingStateEnum",
          "readOnly": true,
          "required": true,
          "type": "service.BillingStateEnum"
        }
      }
    }
  },
  "resourcePath": "/service"
}