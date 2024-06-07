import {Schema} from '../../src/schema';

// imported from https://api.us.ovhcloud.com:443/1.0/service.json

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
          "description": "Services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:service/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:service/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:service/edit",
              "required": true
            }
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
            {
              "name": "account:apiovh:service/reopen",
              "required": true
            }
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
            {
              "name": "account:apiovh:service/suspend",
              "required": true
            }
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
            {
              "name": "account:apiovh:service/terminate",
              "required": true
            }
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
    "complexType.SafeKeyValue<string>": {
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