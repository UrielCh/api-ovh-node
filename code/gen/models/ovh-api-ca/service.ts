import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the services"
    },
    {
      "path": "/service/{serviceId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Service ID"
            }
          ],
          "responseType": "serviceList.Service",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "serviceList.Service",
              "paramType": "body",
              "fullType": "serviceList.Service",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "serviceId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Service ID"
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
      "path": "/service/{serviceId}/reopen",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Service ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Reopen a suspended service"
        }
      ],
      "description": "reopen operations"
    },
    {
      "path": "/service/{serviceId}/suspend",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Service ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Suspend the service. The service won't be accessible, but you will still be charged for it"
        }
      ],
      "description": "suspend operations"
    },
    {
      "path": "/service/{serviceId}/terminate",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Service ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Terminates a suspended service"
        }
      ],
      "description": "terminate operations"
    }
  ],
  "resourcePath": "/service",
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "complexType.SafeKeyValue<T>": {
      "id": "SafeKeyValue",
      "namespace": "complexType",
      "description": "Key and value, with proper key strings",
      "generics": [
        "T"
      ],
      "properties": {
        "key": {
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
    "service.BillingStateEnum": {
      "id": "BillingStateEnum",
      "namespace": "service",
      "description": "Possible billing states",
      "enum": [
        "expired",
        "ok",
        "pending",
        "unpaid"
      ],
      "enumType": "string"
    },
    "service.Plan": {
      "id": "Plan",
      "namespace": "service",
      "description": "Plan information",
      "properties": {
        "code": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Product code",
          "required": false
        },
        "product": {
          "type": "service.plan.Product",
          "fullType": "service.plan.Product",
          "canBeNull": false,
          "readOnly": false,
          "description": "Product plan information",
          "required": true
        }
      }
    },
    "service.Renew": {
      "id": "Renew",
      "namespace": "service",
      "description": "Renew information",
      "properties": {
        "dayOfMonth": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Renew day number",
          "required": false
        },
        "interval": {
          "type": "service.renew.Interval",
          "fullType": "service.renew.Interval",
          "canBeNull": true,
          "readOnly": false,
          "description": "Interval between each renewal",
          "required": false
        },
        "mode": {
          "type": "service.renew.Mode",
          "fullType": "service.renew.Mode",
          "canBeNull": false,
          "readOnly": false,
          "description": "Renewal mode",
          "required": true
        },
        "possibleIntervals": {
          "type": "service.renew.Interval[]",
          "fullType": "service.renew.Interval[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Possible interval between each renewal",
          "required": false
        },
        "possibleModes": {
          "type": "service.renew.Mode[]",
          "fullType": "service.renew.Mode[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Possible renewal mode",
          "required": true
        }
      }
    },
    "service.Resource": {
      "id": "Resource",
      "namespace": "service",
      "description": "Resource service informations",
      "properties": {
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Custom display name of the service",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of the service",
          "required": false
        },
        "state": {
          "type": "service.ResourceStateEnum",
          "fullType": "service.ResourceStateEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Resource state",
          "required": false
        }
      }
    },
    "service.ResourceStateEnum": {
      "id": "ResourceStateEnum",
      "namespace": "service",
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
      "enumType": "string"
    },
    "service.Route": {
      "id": "Route",
      "namespace": "service",
      "description": "route of this service",
      "properties": {
        "path": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Path to use in API",
          "required": false
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Path with variables applyed",
          "required": false
        },
        "vars": {
          "type": "complexType.SafeKeyValue<string>[]",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Variables to use in the path",
          "required": true
        }
      }
    },
    "service.plan.Product": {
      "id": "Product",
      "namespace": "service.plan",
      "description": "Product plan information",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Product name",
          "required": false
        }
      }
    },
    "service.renew.Interval": {
      "id": "Interval",
      "namespace": "service.renew",
      "description": "Interval enum information",
      "enum": [
        "P1M",
        "P1Y",
        "P2Y",
        "P3M",
        "P3Y",
        "P6M"
      ],
      "enumType": "string"
    },
    "service.renew.Mode": {
      "id": "Mode",
      "namespace": "service.renew",
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
      "enumType": "string"
    },
    "serviceList.Service": {
      "id": "Service",
      "namespace": "serviceList",
      "description": "Details about a Service",
      "properties": {
        "creationDate": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "details": {
          "type": "complexType.SafeKeyValue<string>[]",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Resource details",
          "required": true
        },
        "engagementDate": {
          "type": "date",
          "fullType": "date",
          "canBeNull": true,
          "readOnly": true,
          "description": "Engagement date",
          "required": false
        },
        "expirationDate": {
          "type": "date",
          "fullType": "date",
          "canBeNull": true,
          "readOnly": true,
          "description": "Expiration date",
          "required": false
        },
        "nextBillingDate": {
          "type": "date",
          "fullType": "date",
          "canBeNull": true,
          "readOnly": true,
          "description": "The next billing date",
          "required": false
        },
        "plan": {
          "type": "service.Plan",
          "fullType": "service.Plan",
          "canBeNull": false,
          "readOnly": true,
          "description": "Plan service description",
          "required": true
        },
        "quantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Quantity",
          "required": true
        },
        "renew": {
          "type": "service.Renew",
          "fullType": "service.Renew",
          "canBeNull": true,
          "readOnly": true,
          "description": "Renew service description",
          "required": false
        },
        "resource": {
          "type": "service.Resource",
          "fullType": "service.Resource",
          "canBeNull": false,
          "readOnly": false,
          "description": "Resource service description",
          "required": true
        },
        "route": {
          "type": "service.Route",
          "fullType": "service.Route",
          "canBeNull": false,
          "readOnly": true,
          "description": "Route to use in API",
          "required": true
        },
        "state": {
          "type": "service.BillingStateEnum",
          "fullType": "service.BillingStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Billing state of your service",
          "required": true
        }
      }
    }
  }
}