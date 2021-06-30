import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/ssl.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the SSL service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/ssl/all"
          ]
        }
      ],
      "path": "/ssl"
    },
    {
      "description": "Certificate of an SSL customer",
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
              "dataType": "string",
              "description": "The internal name of your SSL service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ssl.Certificate",
          "scopes": [
            "all",
            "product/ssl/all"
          ]
        }
      ],
      "path": "/ssl/{serviceName}"
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
              "dataType": "string",
              "description": "The internal name of your SSL service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service",
          "scopes": [
            "all",
            "product/ssl/all"
          ]
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
              "dataType": "services.Service",
              "description": "New object properties",
              "fullType": "services.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SSL service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/ssl/all"
          ]
        }
      ],
      "path": "/ssl/{serviceName}/serviceInfos"
    },
    {
      "description": "List the ssl.Operation objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Tasks associated to this ssl",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your SSL service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/ssl/all"
          ]
        }
      ],
      "path": "/ssl/{serviceName}/tasks"
    },
    {
      "description": "Task on a SSL",
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
              "dataType": "string",
              "description": "The internal name of your SSL service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ssl.Operation",
          "scopes": [
            "all",
            "product/ssl/all"
          ]
        }
      ],
      "path": "/ssl/{serviceName}/tasks/{taskId}"
    }
  ],
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
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
    "ssl.Certificate": {
      "description": "Certificate of an SSL customer",
      "id": "Certificate",
      "namespace": "ssl",
      "properties": {
        "authority": {
          "canBeNull": false,
          "description": "The authority your certificate is issued from",
          "fullType": "ssl.CertificateAuthorityEnum",
          "readOnly": true,
          "required": false,
          "type": "ssl.CertificateAuthorityEnum"
        },
        "certificate": {
          "canBeNull": true,
          "description": "Your certificate",
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        },
        "chain": {
          "canBeNull": true,
          "description": "The issuer chain of your certificate",
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        },
        "commonName": {
          "canBeNull": false,
          "description": "The CN field in your certificate",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "csr": {
          "canBeNull": false,
          "description": "The CSR used to create your certificate",
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "The internal name of your certificate offer",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Current status of your certificate",
          "fullType": "ssl.CertificateStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "ssl.CertificateStatusEnum"
        },
        "subjectAltName": {
          "canBeNull": false,
          "description": "The SAN field for multidomain certificate",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of your certificate",
          "fullType": "ssl.CertificateTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "ssl.CertificateTypeEnum"
        },
        "validityEnd": {
          "canBeNull": true,
          "description": "Your certificate is invalid from this date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "validityStart": {
          "canBeNull": true,
          "description": "Your certificate is valid from this date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "ssl.CertificateAuthorityEnum": {
      "description": "All authority a SSL certificate can be issued from",
      "enum": [
        "comodo",
        "sectigo"
      ],
      "enumType": "string",
      "id": "CertificateAuthorityEnum",
      "namespace": "ssl"
    },
    "ssl.CertificateStatusEnum": {
      "description": "All status a SSL certificate can be in",
      "enum": [
        "creating",
        "error",
        "ok",
        "validating"
      ],
      "enumType": "string",
      "id": "CertificateStatusEnum",
      "namespace": "ssl"
    },
    "ssl.CertificateTypeEnum": {
      "description": "All type a SSL certificate can be",
      "enum": [
        "DV",
        "EV",
        "OV"
      ],
      "enumType": "string",
      "id": "CertificateTypeEnum",
      "namespace": "ssl"
    },
    "ssl.Operation": {
      "description": "Task on a SSL",
      "id": "Operation",
      "namespace": "ssl",
      "properties": {
        "doneDate": {
          "canBeNull": true,
          "description": "Completion date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Task function name",
          "fullType": "ssl.OperationFunctionEnum",
          "readOnly": true,
          "required": false,
          "type": "ssl.OperationFunctionEnum"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Task last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Task Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "ssl.OperationStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "ssl.OperationStatusEnum"
        },
        "taskId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "ssl.OperationFunctionEnum": {
      "description": "All functions a SSL operation can handle",
      "enum": [
        "createCertificate"
      ],
      "enumType": "string",
      "id": "OperationFunctionEnum",
      "namespace": "ssl"
    },
    "ssl.OperationStatusEnum": {
      "description": "All status a SSL operation can be in",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "OperationStatusEnum",
      "namespace": "ssl"
    }
  },
  "resourcePath": "/ssl"
}