import {Schema} from '../../src/schema';

// imported from https://eu.api.soyoustart.com:443/1.0/hpcspot.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the HPCSPOT service",
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
      "path": "/hpcspot"
    },
    {
      "description": "Account HPC Spot",
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
              "description": "The internal name of your HPC Spot account",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hpcspot.Account"
        }
      ],
      "path": "/hpcspot/{serviceName}"
    },
    {
      "description": "List the hpcspot.Consumption objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Details of the consumption of your account",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your HPC Spot account",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of hpcspotItemEndDate property (>=)",
              "fullType": "datetime",
              "name": "hpcspotItemEndDate.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of hpcspotItemEndDate property (<=)",
              "fullType": "datetime",
              "name": "hpcspotItemEndDate.to",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of hpcspotItemId property (=)",
              "fullType": "long",
              "name": "hpcspotItemId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of orderId property (=)",
              "fullType": "long",
              "name": "orderId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "hpcspot.ConsumptionTypeEnum",
              "description": "Filter the value of type property (=)",
              "fullType": "hpcspot.ConsumptionTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/hpcspot/{serviceName}/consumption"
    },
    {
      "description": "Detail of a HPC Spot consumtion",
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
              "dataType": "long",
              "description": "ID of the detail",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your HPC Spot account",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hpcspot.Consumption"
        }
      ],
      "path": "/hpcspot/{serviceName}/consumption/{id}"
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
              "description": "The internal name of your HPC Spot account",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service"
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
              "description": "The internal name of your HPC Spot account",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/hpcspot/{serviceName}/serviceInfos"
    }
  ],
  "basePath": "https://eu.api.soyoustart.com/1.0",
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
    "hpcspot.Account": {
      "description": "Account HPC Spot",
      "id": "Account",
      "namespace": "hpcspot",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of the HPC Spot Account",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "hpcspot.Consumption": {
      "description": "Detail of a HPC Spot consumtion",
      "id": "Consumption",
      "namespace": "hpcspot",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Description of the ressource",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "hpcspotItemEndDate": {
          "canBeNull": false,
          "description": "Date of the completion of the item consumption",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "hpcspotItemId": {
          "canBeNull": false,
          "description": "ID of the linked job on HPC Spot interface",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "hpcspotUrl": {
          "canBeNull": true,
          "description": "URL for the description of the consumption on the HPC Spot interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "ID of the detail",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "orderId": {
          "canBeNull": true,
          "description": "ID of the Order that billed this item. If null, this item has not been billed",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Quantity consumed (minutes, core minutes, licences, token)",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "reference": {
          "canBeNull": false,
          "description": "Reference of the item. This reference is linked with the type of the item",
          "fullType": "hpcspot.ConsumptionReferenceEnum",
          "readOnly": true,
          "required": false,
          "type": "hpcspot.ConsumptionReferenceEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of consumption",
          "fullType": "hpcspot.ConsumptionTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "hpcspot.ConsumptionTypeEnum"
        }
      }
    },
    "hpcspot.ConsumptionReferenceEnum": {
      "description": "All references a HPC Spot consumption can be in",
      "enum": [
        "12core.60gb.quadrok4000",
        "16core.64gb",
        "1core.4gb",
        "1core.4gb.quadrok4000",
        "2core.8gb",
        "2core.8gb.quadrok4000",
        "4core.15gb",
        "4core.15gb.quadrok4000",
        "4core.32gb",
        "8core.30gb",
        "8core.30gb.quadrok4000",
        "8core.32gb.1teslak20"
      ],
      "enumType": "string",
      "id": "ConsumptionReferenceEnum",
      "namespace": "hpcspot"
    },
    "hpcspot.ConsumptionTypeEnum": {
      "description": "All types a HPC Spot consumption can be in",
      "enum": [
        "job",
        "reservation",
        "session"
      ],
      "enumType": "string",
      "id": "ConsumptionTypeEnum",
      "namespace": "hpcspot"
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
    }
  },
  "resourcePath": "/hpcspot"
}