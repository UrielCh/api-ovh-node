import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/dbaas/timeseries",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the PAAS_TIMESERIES service"
    },
    {
      "path": "/dbaas/timeseries/region",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "paas.timeseries.Region[]",
          "noAuthentication": false,
          "description": "Get available regions"
        }
      ],
      "description": "Regions"
    },
    {
      "path": "/dbaas/timeseries/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "timeseries.Project",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "timeseries.Project",
              "paramType": "body",
              "fullType": "timeseries.Project",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Timeseries project"
    },
    {
      "path": "/dbaas/timeseries/{serviceName}/changeContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "contactBilling",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as billing contact"
            },
            {
              "name": "contactAdmin",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as admin contact"
            },
            {
              "name": "contactTech",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as tech contact"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Launch a contact change procedure"
        }
      ],
      "description": "Change the contacts of this service"
    },
    {
      "path": "/dbaas/timeseries/{serviceName}/consumption",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "paas.timeseries.Consumption[]",
          "noAuthentication": false,
          "description": "Get consumption"
        }
      ],
      "description": "Consumption"
    },
    {
      "path": "/dbaas/timeseries/{serviceName}/key",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "paas.timeseries.Key[]",
          "noAuthentication": false,
          "description": "Get keys for a project"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Description"
            },
            {
              "name": "permissions",
              "dataType": "string[]",
              "paramType": "body",
              "fullType": "string[]",
              "required": true,
              "description": "Permissions for this token"
            },
            {
              "name": "tags",
              "dataType": "paas.timeseries.Tag[]",
              "paramType": "body",
              "fullType": "paas.timeseries.Tag[]",
              "required": true,
              "description": "Descriptive tags"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "paas.timeseries.Key",
          "noAuthentication": false,
          "description": "Create a key for a project"
        }
      ],
      "description": "Keys"
    },
    {
      "path": "/dbaas/timeseries/{serviceName}/key/{keyId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "keyId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Key ID"
            }
          ],
          "responseType": "boolean",
          "noAuthentication": false,
          "description": "Delete a OpenTSDB token"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "keyId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Key ID"
            }
          ],
          "responseType": "paas.timeseries.Key",
          "noAuthentication": false,
          "description": "Get a key"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "tags",
              "dataType": "paas.timeseries.Tag[]",
              "paramType": "body",
              "fullType": "paas.timeseries.Tag[]",
              "required": true,
              "description": "Descriptive tags"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Description"
            },
            {
              "name": "permissions",
              "dataType": "tsaas.PermissionEnum[]",
              "paramType": "body",
              "fullType": "tsaas.PermissionEnum[]",
              "required": true,
              "description": "Permissions associated to this key"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "keyId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Key ID"
            }
          ],
          "responseType": "paas.timeseries.Key",
          "noAuthentication": false,
          "description": "Create a key"
        }
      ],
      "description": "Key"
    },
    {
      "path": "/dbaas/timeseries/{serviceName}/quota",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "paas.timeseries.Quota[]",
          "noAuthentication": false,
          "description": "Get quotas"
        }
      ],
      "description": "Quotas"
    },
    {
      "path": "/dbaas/timeseries/{serviceName}/serviceInfos",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "services.Service",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "services.Service",
              "paramType": "body",
              "fullType": "services.Service",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Details about a Service"
    },
    {
      "path": "/dbaas/timeseries/{serviceName}/setup",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Project name"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Project description"
            },
            {
              "name": "regionId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Region to use"
            },
            {
              "name": "raTokenId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Your runabove app token id"
            },
            {
              "name": "raTokenKey",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Your runabove app token key"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "paas.timeseries.Project",
          "noAuthentication": false,
          "description": "Setup a project"
        }
      ],
      "description": "Setup your project on our platform"
    },
    {
      "path": "/dbaas/timeseries/{serviceName}/token/opentsdb",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "tsaas.OpenTSDBToken[]",
          "noAuthentication": false,
          "description": "Get OpenTSDB tokens"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Token description"
            },
            {
              "name": "permission",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Permission"
            },
            {
              "name": "tags",
              "dataType": "paas.timeseries.Tag[]",
              "paramType": "body",
              "fullType": "paas.timeseries.Tag[]",
              "required": true,
              "description": "Tags to apply"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "tsaas.OpenTSDBToken",
          "noAuthentication": false,
          "description": "Create a OpenTSDB token"
        }
      ],
      "description": "OpenTSDBTokens"
    },
    {
      "path": "/dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "tokenId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Token ID"
            }
          ],
          "responseType": "boolean",
          "noAuthentication": false,
          "description": "Delete an OpenTSDB token"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "tokenId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Token ID"
            }
          ],
          "responseType": "tsaas.OpenTSDBToken",
          "noAuthentication": false,
          "description": "Get a OpenTSDB token"
        }
      ],
      "description": "Key"
    }
  ],
  "resourcePath": "/dbaas/timeseries",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "complexType.UnitAndValue<T>": {
      "id": "UnitAndValue",
      "namespace": "complexType",
      "description": "A numeric value tagged with its unit",
      "generics": [
        "T"
      ],
      "properties": {
        "unit": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "T",
          "fullType": "T",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
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
    },
    "paas.timeseries.Consumption": {
      "id": "Consumption",
      "namespace": "paas.timeseries",
      "description": "Consumption",
      "properties": {
        "from": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Consumption start date",
          "required": true
        },
        "generated": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Timestamp of consumption generation",
          "required": true
        },
        "items": {
          "type": "paas.timeseries.ConsumptionItem[]",
          "fullType": "paas.timeseries.ConsumptionItem[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of consumption items",
          "required": true
        },
        "to": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Consumption end date",
          "required": true
        },
        "total": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total",
          "required": true
        }
      }
    },
    "paas.timeseries.ConsumptionItem": {
      "id": "ConsumptionItem",
      "namespace": "paas.timeseries",
      "description": "ConsumptionItem",
      "properties": {
        "metricName": {
          "type": "tsaas.MetricNameEnum",
          "fullType": "tsaas.MetricNameEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Metric name",
          "required": true
        },
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Price",
          "required": true
        },
        "quantity": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": false,
          "readOnly": true,
          "description": "Quantity consumed in unit",
          "required": true
        },
        "unitPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Unit price",
          "required": true
        }
      }
    },
    "paas.timeseries.Key": {
      "id": "Key",
      "namespace": "paas.timeseries",
      "description": "Key",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Description",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id",
          "required": true
        },
        "permissions": {
          "type": "tsaas.PermissionEnum[]",
          "fullType": "tsaas.PermissionEnum[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of permissions",
          "required": true
        },
        "secret": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Secret part",
          "required": true
        },
        "tags": {
          "type": "paas.timeseries.Tag[]",
          "fullType": "paas.timeseries.Tag[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of tags",
          "required": true
        }
      }
    },
    "paas.timeseries.Project": {
      "id": "Project",
      "namespace": "paas.timeseries",
      "description": "Project",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Description",
          "required": false
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name",
          "required": true
        },
        "region": {
          "type": "paas.timeseries.Region",
          "fullType": "paas.timeseries.Region",
          "canBeNull": false,
          "readOnly": true,
          "description": "Region",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id",
          "required": true
        }
      }
    },
    "paas.timeseries.Quota": {
      "id": "Quota",
      "namespace": "paas.timeseries",
      "description": "Quota",
      "properties": {
        "current": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current value",
          "required": true
        },
        "max": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Max allowed",
          "required": true
        },
        "type": {
          "type": "tsaas.QuotaTypeEnum",
          "fullType": "tsaas.QuotaTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type (ie: mads, ddp, ...)",
          "required": true
        }
      }
    },
    "paas.timeseries.Region": {
      "id": "Region",
      "namespace": "paas.timeseries",
      "description": "Region",
      "properties": {
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "URL",
          "required": true
        }
      }
    },
    "paas.timeseries.Tag": {
      "id": "Tag",
      "namespace": "paas.timeseries",
      "description": "Tag",
      "properties": {
        "key": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Key",
          "required": true
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Value",
          "required": true
        }
      }
    },
    "service.RenewType": {
      "id": "RenewType",
      "namespace": "service",
      "description": "Map a possible renew for a specific service",
      "properties": {
        "automatic": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "The service is automatically renewed",
          "required": true
        },
        "deleteAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "The service will be deleted at expiration",
          "required": true
        },
        "forced": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "The service forced to be renewed",
          "required": true
        },
        "manualPayment": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "The service needs to be manually renewed and paid",
          "required": false
        },
        "period": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "period of renew in month",
          "required": false
        }
      }
    },
    "service.RenewalTypeEnum": {
      "id": "RenewalTypeEnum",
      "namespace": "service",
      "description": "Detailed renewal type of a service",
      "enum": [
        "automaticForcedProduct",
        "automaticV2012",
        "automaticV2014",
        "automaticV2016",
        "manual",
        "oneShot",
        "option"
      ],
      "enumType": "string"
    },
    "service.StateEnum": {
      "id": "StateEnum",
      "namespace": "service",
      "enum": [
        "expired",
        "inCreation",
        "ok",
        "pendingDebt",
        "unPaid"
      ],
      "enumType": "string"
    },
    "services.Service": {
      "id": "Service",
      "namespace": "services",
      "description": "Details about a Service",
      "properties": {
        "canDeleteAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates that the service can be set up to be deleted at expiration",
          "required": true
        },
        "contactAdmin": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "contactBilling": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "contactTech": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "creation": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "engagedUpTo": {
          "type": "date",
          "fullType": "date",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "expiration": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "possibleRenewPeriod": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "All the possible renew period of your service in month",
          "required": false
        },
        "renew": {
          "type": "service.RenewType",
          "fullType": "service.RenewType",
          "canBeNull": true,
          "readOnly": false,
          "description": "Way of handling the renew",
          "required": false
        },
        "renewalType": {
          "type": "service.RenewalTypeEnum",
          "fullType": "service.RenewalTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "serviceId": {
          "type": "coreTypes.ServiceId:long",
          "fullType": "coreTypes.ServiceId:long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "service.StateEnum",
          "fullType": "service.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "timeseries.Project": {
      "id": "Project",
      "namespace": "timeseries",
      "description": "Timeseries project",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "description of your project",
          "required": false
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "name of your project",
          "required": false
        },
        "offerId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "subscribed offer",
          "required": false
        },
        "regionId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "region where your data are located",
          "required": false
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "timeseries Project id",
          "required": true
        },
        "status": {
          "type": "timeseries.StatusTypeEnum",
          "fullType": "timeseries.StatusTypeEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "project status",
          "required": false
        }
      }
    },
    "timeseries.StatusTypeEnum": {
      "id": "StatusTypeEnum",
      "namespace": "timeseries",
      "description": "The current status for the project",
      "enum": [
        "ACTIVE",
        "CREATION",
        "DELETED",
        "UNCONFIGURED"
      ],
      "enumType": "string"
    },
    "tsaas.MetricNameEnum": {
      "id": "MetricNameEnum",
      "namespace": "tsaas",
      "description": "Metric name",
      "enum": [
        "storage",
        "input",
        "output"
      ],
      "enumType": "string"
    },
    "tsaas.OpenTSDBToken": {
      "id": "OpenTSDBToken",
      "namespace": "tsaas",
      "description": "Description not available",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Description",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id",
          "required": true
        },
        "permission": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "protocol": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "protocol",
          "required": true
        },
        "secret": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": true,
          "description": "Secret part",
          "required": true
        },
        "tags": {
          "type": "paas.timeseries.Tag[]",
          "fullType": "paas.timeseries.Tag[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of tags",
          "required": true
        }
      }
    },
    "tsaas.PermissionEnum": {
      "id": "PermissionEnum",
      "namespace": "tsaas",
      "description": "Tokens permissions",
      "enum": [
        "READ",
        "WRITE"
      ],
      "enumType": "string"
    },
    "tsaas.QuotaTypeEnum": {
      "id": "QuotaTypeEnum",
      "namespace": "tsaas",
      "description": "Project quotas",
      "enum": [
        "ddp",
        "mads"
      ],
      "enumType": "string"
    }
  }
}