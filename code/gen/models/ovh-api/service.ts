import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/service.json

export const schema: Schema = {
  "apiVersion": "1.0",
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
          "iamActions": [
            "account:apiovh:service/get"
          ],
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
          "iamActions": [
            "account:apiovh:service/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The internal ID of your service",
              "fullType": "coreTypes.ServiceId:long",
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
          "iamActions": [
            "account:apiovh:service/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "serviceList.Service",
              "description": "New object properties",
              "fullType": "serviceList.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The internal ID of your service",
              "fullType": "coreTypes.ServiceId:long",
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
          "iamActions": [
            "account:apiovh:service/renew/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service Id",
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
          "iamActions": [
            "account:apiovh:service/renew/create"
          ],
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
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long[]",
              "description": "List of services to renew",
              "fullType": "coreTypes.ServiceId[]:long[]",
              "name": "services",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service Id",
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
          "iamActions": [
            "account:apiovh:service/reopen"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The internal ID of your service",
              "fullType": "coreTypes.ServiceId:long",
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
          "iamActions": [
            "account:apiovh:service/suspend"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The internal ID of your service",
              "fullType": "coreTypes.ServiceId:long",
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
          "iamActions": [
            "account:apiovh:service/terminate"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The internal ID of your service",
              "fullType": "coreTypes.ServiceId:long",
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
        " INR",
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "product": {
          "canBeNull": false,
          "description": "Product plan information",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "interval": {
          "canBeNull": true,
          "description": "Interval between each renewal",
          "readOnly": false,
          "required": false,
          "type": "service.renew.Interval"
        },
        "mode": {
          "canBeNull": false,
          "description": "Renewal mode",
          "readOnly": false,
          "required": false,
          "type": "service.renew.Mode"
        },
        "possibleIntervals": {
          "canBeNull": true,
          "description": "Possible interval between each renewal",
          "readOnly": false,
          "required": false,
          "type": "service.renew.Interval[]"
        },
        "possibleModes": {
          "canBeNull": false,
          "description": "Possible renewal mode",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Name of the service",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": true,
          "description": "Resource state",
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": true,
          "description": "Path with variables applyed",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "vars": {
          "canBeNull": false,
          "description": "Variables to use in the path",
          "readOnly": false,
          "required": false,
          "type": "complexType.SafeKeyValue<string>[]"
        }
      }
    },
    "service.consumption.Transaction": {
      "description": "List of consumptions recorded in a range",
      "id": "Transaction",
      "namespace": "service.consumption",
      "properties": {
        "beginDate": {
          "canBeNull": false,
          "description": "Begin date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "creationDate": {
          "canBeNull": true,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "elements": {
          "canBeNull": false,
          "description": "List of product plan code consumption",
          "fullType": "service.consumption.transaction.Element[]",
          "readOnly": true,
          "required": false,
          "type": "service.consumption.transaction.Element[]"
        },
        "endDate": {
          "canBeNull": true,
          "description": "End date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": true,
          "description": "Transaction ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastUpdate": {
          "canBeNull": true,
          "description": "Last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "price": {
          "canBeNull": false,
          "description": "Consumption amount price",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
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
    "service.consumption.transaction.Element": {
      "description": "Element of consumption for resource",
      "id": "Element",
      "namespace": "service.consumption.transaction",
      "properties": {
        "details": {
          "canBeNull": false,
          "description": "List of consumption details for this planCode",
          "fullType": "service.consumption.transaction.element.Detail[]",
          "readOnly": true,
          "required": false,
          "type": "service.consumption.transaction.element.Detail[]"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Identifier of the offer",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "price": {
          "canBeNull": false,
          "description": "Consumption amount price",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Consumption quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "service.consumption.transaction.element.Detail": {
      "description": "Element of consumption for resource",
      "id": "Detail",
      "namespace": "service.consumption.transaction.Element",
      "properties": {
        "quantity": {
          "canBeNull": false,
          "description": "Consumption quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "unique_id": {
          "canBeNull": true,
          "description": "Unique ID associated to one service element",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
          "fullType": "duration:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "strategies": {
          "canBeNull": false,
          "description": "List possible strategies",
          "fullType": "service.renew.RenewStrategy[]",
          "readOnly": true,
          "required": false,
          "type": "service.renew.RenewStrategy[]"
        }
      }
    },
    "service.renew.RenewForecast": {
      "description": "Representation of service's renew forecasting",
      "id": "RenewForecast",
      "namespace": "service.renew",
      "properties": {
        "details": {
          "canBeNull": false,
          "description": "Forecast details",
          "fullType": "service.renew.RenewForecastDetail[]",
          "readOnly": true,
          "required": false,
          "type": "service.renew.RenewForecastDetail[]"
        },
        "prices": {
          "canBeNull": false,
          "description": "Prices for renew forecasting",
          "fullType": "service.renew.RenewForecastPrices",
          "readOnly": true,
          "required": false,
          "type": "service.renew.RenewForecastPrices"
        }
      }
    },
    "service.renew.RenewForecastDetail": {
      "description": "Representation of a product renew pricing",
      "id": "RenewForecastDetail",
      "namespace": "service.renew",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Detail description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Quantity",
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
          "description": "Total price",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "unitPrice": {
          "canBeNull": false,
          "description": "Price for one unit",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "service.renew.RenewForecastPrices": {
      "description": "Prices for renew forecasting",
      "id": "RenewForecastDetailPrices",
      "namespace": "service.renew",
      "properties": {
        "tax": {
          "canBeNull": false,
          "description": "Tax",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "withTax": {
          "canBeNull": false,
          "description": "Total price with tax",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "withoutTax": {
          "canBeNull": false,
          "description": "Total price without tax",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
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
          "required": false,
          "type": "long"
        },
        "password": {
          "canBeNull": false,
          "description": "Password",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "pdfUrl": {
          "canBeNull": false,
          "description": "Public pdf URL of the generated renew Order",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "priceWithTax": {
          "canBeNull": false,
          "description": "Price of the product with tax",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "priceWithoutTax": {
          "canBeNull": false,
          "description": "Price of the product without tax",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "order.Price"
        },
        "url": {
          "canBeNull": false,
          "description": "Public URL to display generated renew Order",
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
        "services": {
          "canBeNull": false,
          "description": "Services renewed by strategy",
          "fullType": "coreTypes.ServiceId[]:long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        },
        "servicesDetails": {
          "canBeNull": false,
          "description": "Details of services renewed by strategy",
          "fullType": "service.renew.Service[]",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "long"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Name of the service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serviceType": {
          "canBeNull": false,
          "description": "Type of the service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "date"
        },
        "details": {
          "canBeNull": false,
          "description": "Resource details",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "service.Plan"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "service.Resource"
        },
        "route": {
          "canBeNull": false,
          "description": "Route to use in API",
          "fullType": "service.Route",
          "readOnly": true,
          "required": false,
          "type": "service.Route"
        },
        "state": {
          "canBeNull": false,
          "description": "Billing state of your service",
          "fullType": "service.BillingStateEnum",
          "readOnly": true,
          "required": false,
          "type": "service.BillingStateEnum"
        }
      }
    }
  },
  "resourcePath": "/service"
}