import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/dbaas/timeseries.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the PAAS_TIMESERIES service",
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
            "product/dbaas-timeseries/all"
          ]
        }
      ],
      "path": "/dbaas/timeseries"
    },
    {
      "description": "Timeseries project",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your timeseries project",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "timeseries.Project",
          "scopes": [
            "all",
            "product/dbaas-timeseries/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "timeseries.Project",
              "description": "New object properties",
              "fullType": "timeseries.Project",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your timeseries project",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/dbaas-timeseries/all"
          ]
        }
      ],
      "path": "/dbaas/timeseries/{serviceName}"
    },
    {
      "description": "Change the contacts of this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Launch a contact change procedure",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The contact to set as admin contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactAdmin",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The contact to set as billing contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactBilling",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The contact to set as tech contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactTech",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your timeseries project",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/dbaas-timeseries/all"
          ]
        }
      ],
      "path": "/dbaas/timeseries/{serviceName}/changeContact"
    },
    {
      "description": "Consumption",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get consumption",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service Name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "paas.timeseries.Consumption[]",
          "scopes": [
            "all",
            "product/dbaas-timeseries/all"
          ]
        }
      ],
      "path": "/dbaas/timeseries/{serviceName}/consumption"
    },
    {
      "description": "Keys",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get keys for a project",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service Name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "paas.timeseries.Key[]",
          "scopes": [
            "all",
            "product/dbaas-timeseries/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Create a key for a project",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string[]",
              "description": "Permissions for this token",
              "fullType": "string[]",
              "name": "permissions",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "paas.timeseries.Tag[]",
              "description": "Descriptive tags",
              "fullType": "paas.timeseries.Tag[]",
              "name": "tags",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service Name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "paas.timeseries.Key",
          "scopes": [
            "all",
            "product/dbaas-timeseries/all"
          ]
        }
      ],
      "path": "/dbaas/timeseries/{serviceName}/key"
    },
    {
      "description": "Key",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Delete a OpenTSDB token",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Key id",
              "fullType": "string",
              "name": "keyId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service Name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "boolean",
          "scopes": [
            "all",
            "product/dbaas-timeseries/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get a key",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Key id",
              "fullType": "string",
              "name": "keyId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service Name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "paas.timeseries.Key",
          "scopes": [
            "all",
            "product/dbaas-timeseries/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Create a key",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "paas.timeseries.PermissionEnum[]",
              "description": "Permissions associated to this key",
              "fullType": "paas.timeseries.PermissionEnum[]",
              "name": "permissions",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "paas.timeseries.Tag[]",
              "description": "Descriptive tags",
              "fullType": "paas.timeseries.Tag[]",
              "name": "tags",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Key id",
              "fullType": "string",
              "name": "keyId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service Name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "paas.timeseries.Key",
          "scopes": [
            "all",
            "product/dbaas-timeseries/all"
          ]
        }
      ],
      "path": "/dbaas/timeseries/{serviceName}/key/{keyId}"
    },
    {
      "description": "Quotas",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get quotas",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service Name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "paas.timeseries.Quota[]",
          "scopes": [
            "all",
            "product/dbaas-timeseries/all"
          ]
        }
      ],
      "path": "/dbaas/timeseries/{serviceName}/quota"
    },
    {
      "description": "Details about a Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your timeseries project",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service",
          "scopes": [
            "all",
            "product/dbaas-timeseries/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "services.Service",
              "description": "New object properties",
              "fullType": "services.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your timeseries project",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/dbaas-timeseries/all"
          ]
        }
      ],
      "path": "/dbaas/timeseries/{serviceName}/serviceInfos"
    },
    {
      "description": "Setup your project on our platform",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Setup a project",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Project description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Project name",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Your runabove app token id",
              "fullType": "string",
              "name": "raTokenId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Your runabove app token key",
              "fullType": "string",
              "name": "raTokenKey",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Region to use",
              "fullType": "string",
              "name": "regionId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Service Name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "paas.timeseries.Project",
          "scopes": [
            "all",
            "product/dbaas-timeseries/all"
          ]
        }
      ],
      "path": "/dbaas/timeseries/{serviceName}/setup"
    },
    {
      "description": "OpenTSDBTokens",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get OpenTSDB tokens",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service Name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "paas.timeseries.OpenTSDBToken[]",
          "scopes": [
            "all",
            "product/dbaas-timeseries/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create a OpenTSDB token",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Token description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Permission",
              "fullType": "string",
              "name": "permission",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "paas.timeseries.Tag[]",
              "description": "Tags to apply",
              "fullType": "paas.timeseries.Tag[]",
              "name": "tags",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service Name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "paas.timeseries.OpenTSDBToken",
          "scopes": [
            "all",
            "product/dbaas-timeseries/all"
          ]
        }
      ],
      "path": "/dbaas/timeseries/{serviceName}/token/opentsdb"
    },
    {
      "description": "Key",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete an OpenTSDB token",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service Name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "token id",
              "fullType": "string",
              "name": "tokenId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "boolean",
          "scopes": [
            "all",
            "product/dbaas-timeseries/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get a OpenTSDB token",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service Name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "token id",
              "fullType": "string",
              "name": "tokenId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "paas.timeseries.OpenTSDBToken",
          "scopes": [
            "all",
            "product/dbaas-timeseries/all"
          ]
        }
      ],
      "path": "/dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}"
    },
    {
      "description": "Regions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get available regions",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "paas.timeseries.Region[]",
          "scopes": [
            "all",
            "product/dbaas-timeseries/all"
          ]
        }
      ],
      "path": "/dbaas/timeseries/region"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "complexType.UnitAndValue<T>": {
      "description": "A numeric value tagged with its unit",
      "generics": [
        "T"
      ],
      "id": "UnitAndValue",
      "namespace": "complexType",
      "properties": {
        "unit": {
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
    "paas.timeseries.Consumption": {
      "description": "Consumption",
      "id": "Consumption",
      "namespace": "paas.timeseries",
      "properties": {
        "from": {
          "canBeNull": false,
          "description": "Consumption start date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "generated": {
          "canBeNull": false,
          "description": "Timestamp of consumption generation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "items": {
          "canBeNull": false,
          "description": "List of consumption items",
          "fullType": "paas.timeseries.ConsumptionItem[]",
          "readOnly": true,
          "required": false,
          "type": "paas.timeseries.ConsumptionItem[]"
        },
        "to": {
          "canBeNull": false,
          "description": "Consumption end date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "total": {
          "canBeNull": false,
          "description": "Total",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "paas.timeseries.ConsumptionItem": {
      "description": "ConsumptionItem",
      "id": "ConsumptionItem",
      "namespace": "paas.timeseries",
      "properties": {
        "metricName": {
          "canBeNull": false,
          "description": "Metric name",
          "fullType": "paas.timeseries.consumption.item.MetricNameEnum",
          "readOnly": true,
          "required": false,
          "type": "paas.timeseries.consumption.item.MetricNameEnum"
        },
        "price": {
          "canBeNull": false,
          "description": "Price",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Quantity consumed in unit",
          "fullType": "complexType.UnitAndValue<double>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<double>"
        },
        "unitPrice": {
          "canBeNull": false,
          "description": "Unit price",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "paas.timeseries.Key": {
      "description": "Key",
      "id": "Key",
      "namespace": "paas.timeseries",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "permissions": {
          "canBeNull": false,
          "description": "List of permissions",
          "fullType": "paas.timeseries.PermissionEnum[]",
          "readOnly": true,
          "required": false,
          "type": "paas.timeseries.PermissionEnum[]"
        },
        "secret": {
          "canBeNull": false,
          "description": "Secret part",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "tags": {
          "canBeNull": false,
          "description": "List of tags",
          "fullType": "paas.timeseries.Tag[]",
          "readOnly": true,
          "required": false,
          "type": "paas.timeseries.Tag[]"
        }
      }
    },
    "paas.timeseries.OpenTSDBToken": {
      "description": "Description not available",
      "id": "OpenTSDBToken",
      "namespace": "tsaas",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "permission": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "protocol": {
          "canBeNull": false,
          "description": "protocol",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "secret": {
          "canBeNull": false,
          "description": "Secret part",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        },
        "tags": {
          "canBeNull": false,
          "description": "List of tags",
          "fullType": "paas.timeseries.Tag[]",
          "readOnly": true,
          "required": false,
          "type": "paas.timeseries.Tag[]"
        }
      }
    },
    "paas.timeseries.PermissionEnum": {
      "description": "Tokens permissions",
      "enum": [
        "READ",
        "WRITE"
      ],
      "enumType": "string",
      "id": "PermissionEnum",
      "namespace": "tsaas"
    },
    "paas.timeseries.Project": {
      "description": "Project",
      "id": "Project",
      "namespace": "paas.timeseries",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "displayName": {
          "canBeNull": false,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Region",
          "fullType": "paas.timeseries.Region",
          "readOnly": true,
          "required": false,
          "type": "paas.timeseries.Region"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "paas.timeseries.Quota": {
      "description": "Quota",
      "id": "Quota",
      "namespace": "paas.timeseries",
      "properties": {
        "current": {
          "canBeNull": false,
          "description": "Current value",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "max": {
          "canBeNull": false,
          "description": "Max allowed",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "Type (ie: mads, ddp, ...)",
          "fullType": "paas.timeseries.QuotaTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "paas.timeseries.QuotaTypeEnum"
        }
      }
    },
    "paas.timeseries.QuotaTypeEnum": {
      "description": "Project quotas",
      "enum": [
        "ddp",
        "mads"
      ],
      "enumType": "string",
      "id": "QuotaTypeEnum",
      "namespace": "tsaas"
    },
    "paas.timeseries.Region": {
      "description": "Region",
      "id": "Region",
      "namespace": "paas.timeseries",
      "properties": {
        "displayName": {
          "canBeNull": false,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": "URL",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "paas.timeseries.Tag": {
      "description": "Tag",
      "id": "Tag",
      "namespace": "paas.timeseries",
      "properties": {
        "key": {
          "canBeNull": false,
          "description": "Key",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Value",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "paas.timeseries.Warp10Token": {
      "description": "Token to use Warp10 functions",
      "id": "Warp10Token",
      "namespace": "tsaas",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "expiryTimestamp": {
          "canBeNull": false,
          "description": "Timestamp of expiration of the token",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "maxFetch": {
          "canBeNull": false,
          "description": "Maximum depth of the stack allowed",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maxGts": {
          "canBeNull": false,
          "description": "Maximum number of GTS retrieved allowed",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maxOps": {
          "canBeNull": false,
          "description": "maximum number of operations allowed",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "permissions": {
          "canBeNull": false,
          "description": "permission",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "protocol": {
          "canBeNull": false,
          "description": "protocol",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "queryToken": {
          "canBeNull": false,
          "description": "Query token used to authentificate queries",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        },
        "secret": {
          "canBeNull": false,
          "description": "Secret part",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        }
      }
    },
    "paas.timeseries.consumption.item.MetricNameEnum": {
      "description": "Metric name",
      "enum": [
        "storage",
        "input",
        "output"
      ],
      "enumType": "string",
      "id": "MetricNameEnum",
      "namespace": "tsaas"
    },
    "service.RenewType": {
      "description": "Map a possible renew for a specific service",
      "id": "RenewType",
      "namespace": "service",
      "properties": {
        "automatic": {
          "canBeNull": false,
          "description": "The service is automatically renewed",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "The service will be deleted at expiration",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "forced": {
          "canBeNull": false,
          "description": "The service forced to be renewed",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "manualPayment": {
          "canBeNull": true,
          "description": "The service needs to be manually renewed and paid",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "period": {
          "canBeNull": true,
          "description": "period of renew in month",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "service.RenewalTypeEnum": {
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
      "enumType": "string",
      "id": "RenewalTypeEnum",
      "namespace": "service"
    },
    "service.StateEnum": {
      "enum": [
        "expired",
        "inCreation",
        "ok",
        "pendingDebt",
        "unPaid"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "service"
    },
    "services.Service": {
      "description": "Details about a Service",
      "id": "Service",
      "namespace": "services",
      "properties": {
        "canDeleteAtExpiration": {
          "canBeNull": false,
          "description": "Indicates that the service can be set up to be deleted at expiration",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "contactAdmin": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "contactBilling": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "contactTech": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "creation": {
          "canBeNull": false,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "engagedUpTo": {
          "canBeNull": true,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "expiration": {
          "canBeNull": false,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "possibleRenewPeriod": {
          "canBeNull": true,
          "description": "All the possible renew period of your service in month",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        },
        "renew": {
          "canBeNull": true,
          "description": "Way of handling the renew",
          "fullType": "service.RenewType",
          "readOnly": false,
          "required": false,
          "type": "service.RenewType"
        },
        "renewalType": {
          "canBeNull": false,
          "fullType": "service.RenewalTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "service.RenewalTypeEnum"
        },
        "serviceId": {
          "canBeNull": false,
          "fullType": "coreTypes.ServiceId:long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "fullType": "service.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "service.StateEnum"
        }
      }
    },
    "timeseries.Project": {
      "description": "Timeseries project",
      "id": "Project",
      "namespace": "timeseries",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "description of your project",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "displayName": {
          "canBeNull": true,
          "description": "name of your project",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "offerId": {
          "canBeNull": true,
          "description": "subscribed offer",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "regionId": {
          "canBeNull": true,
          "description": "region where your data are located",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "timeseries Project id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": true,
          "description": "project status",
          "fullType": "timeseries.StatusTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "timeseries.StatusTypeEnum"
        }
      }
    },
    "timeseries.StatusTypeEnum": {
      "description": "The current status for the project",
      "enum": [
        "ACTIVE",
        "CREATION",
        "DELETED",
        "UNCONFIGURED"
      ],
      "enumType": "string",
      "id": "StatusTypeEnum",
      "namespace": "timeseries"
    }
  },
  "resourcePath": "/dbaas/timeseries"
}