import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/services",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "services.expanded.Service[]",
          "noAuthentication": false,
          "description": "Get list of your service details"
        }
      ],
      "description": "Get list of your service details"
    },
    {
      "path": "/services/{serviceId}",
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
          "responseType": "services.expanded.Service",
          "noAuthentication": false,
          "description": "Get details about a service"
        }
      ],
      "description": "Get details about a service"
    },
    {
      "path": "/services/{serviceId}/billing/engagement",
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
          "responseType": "services.billing.engagement.Engagement",
          "noAuthentication": false,
          "description": "Get engagement details"
        }
      ],
      "description": "Engagement for a given service"
    },
    {
      "path": "/services/{serviceId}/options",
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
          "responseType": "services.expanded.Service[]",
          "noAuthentication": false,
          "description": "Get options of a service"
        }
      ],
      "description": "Get details about a service"
    }
  ],
  "resourcePath": "/services",
  "basePath": "https://api.us.ovhcloud.com/1.0",
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
    "services.billing.engagement.Engagement": {
      "id": "Engagement",
      "namespace": "services.billing.engagement",
      "description": "Description of an Engagement",
      "properties": {
        "currentPeriod": {
          "type": "services.billing.engagement.EngagementPeriod",
          "fullType": "services.billing.engagement.EngagementPeriod",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current engagement period",
          "required": true
        }
      }
    },
    "services.billing.engagement.EngagementPeriod": {
      "id": "EngagementPeriod",
      "namespace": "services.billing.engagement",
      "description": "Period of Engagement",
      "properties": {
        "endDate": {
          "type": "date",
          "fullType": "date",
          "canBeNull": true,
          "readOnly": true,
          "description": "End of the period",
          "required": false
        },
        "startDate": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": true,
          "description": "Beginning of the period",
          "required": true
        }
      }
    },
    "services.expanded.Billing": {
      "id": "Billing",
      "namespace": "services.expanded",
      "description": "Billing informations of the service",
      "properties": {
        "expirationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Expiration date",
          "required": false
        },
        "nextBillingDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Next billing date",
          "required": false
        },
        "plan": {
          "type": "services.expanded.Plan",
          "fullType": "services.expanded.Plan",
          "canBeNull": true,
          "readOnly": true,
          "description": "Service Plan",
          "required": false
        }
      }
    },
    "services.expanded.Plan": {
      "id": "Plan",
      "namespace": "services.expanded",
      "description": "Plan of the service",
      "properties": {
        "code": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Plan code",
          "required": true
        },
        "invoiceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Invoice Name",
          "required": true
        }
      }
    },
    "services.expanded.Product": {
      "id": "Product",
      "namespace": "services.expanded",
      "description": "Product of the service",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Product description",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Product name",
          "required": true
        }
      }
    },
    "services.expanded.Resource": {
      "id": "Resource",
      "namespace": "services.expanded",
      "description": "Resource of the service",
      "properties": {
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Display name of the resource",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the resource",
          "required": true
        },
        "product": {
          "type": "services.expanded.Product",
          "fullType": "services.expanded.Product",
          "canBeNull": true,
          "readOnly": true,
          "description": "Product",
          "required": false
        }
      }
    },
    "services.expanded.Route": {
      "id": "Route",
      "namespace": "services.expanded",
      "description": "Route of the service",
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
          "description": "Path with variables applied",
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
    "services.expanded.Service": {
      "id": "Service",
      "namespace": "services.expanded",
      "description": "Description of a service",
      "properties": {
        "billing": {
          "type": "services.expanded.Billing",
          "fullType": "services.expanded.Billing",
          "canBeNull": false,
          "readOnly": true,
          "description": "Billing information",
          "required": true
        },
        "parentServiceId": {
          "type": "coreTypes.ServiceId:long",
          "fullType": "coreTypes.ServiceId:long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Parent service ID",
          "required": false
        },
        "resource": {
          "type": "services.expanded.Resource",
          "fullType": "services.expanded.Resource",
          "canBeNull": false,
          "readOnly": true,
          "description": "Resource",
          "required": true
        },
        "route": {
          "type": "services.expanded.Route",
          "fullType": "services.expanded.Route",
          "canBeNull": true,
          "readOnly": true,
          "description": "Route",
          "required": false
        },
        "serviceId": {
          "type": "coreTypes.ServiceId:long",
          "fullType": "coreTypes.ServiceId:long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service ID",
          "required": true
        }
      }
    }
  }
}