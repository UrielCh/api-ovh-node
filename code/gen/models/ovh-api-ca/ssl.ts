import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/ssl",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the SSL service"
    },
    {
      "path": "/ssl/{serviceName}",
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
          "responseType": "ssl.Certificate",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Certificate of an SSL customer"
    },
    {
      "path": "/ssl/{serviceName}/serviceInfos",
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
          "responseType": "services.Service",
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
      "path": "/ssl/{serviceName}/tasks",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Tasks associated to this ssl"
        }
      ],
      "description": "List the ssl.Operation objects"
    },
    {
      "path": "/ssl/{serviceName}/tasks/{taskId}",
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
            },
            {
              "name": "taskId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Task ID"
            }
          ],
          "responseType": "ssl.Operation",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Task on a SSL"
    }
  ],
  "resourcePath": "/ssl",
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
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
    "ssl.Certificate": {
      "id": "Certificate",
      "namespace": "ssl",
      "description": "Certificate of an SSL customer",
      "properties": {
        "authority": {
          "type": "ssl.CertificateAuthorityEnum",
          "fullType": "ssl.CertificateAuthorityEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The authority your certificate is issued from",
          "required": true
        },
        "certificate": {
          "type": "text",
          "fullType": "text",
          "canBeNull": true,
          "readOnly": true,
          "description": "Your certificate",
          "required": false
        },
        "chain": {
          "type": "text",
          "fullType": "text",
          "canBeNull": true,
          "readOnly": true,
          "description": "The issuer chain of your certificate",
          "required": false
        },
        "commonName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The CN field in your certificate",
          "required": true
        },
        "csr": {
          "type": "text",
          "fullType": "text",
          "canBeNull": false,
          "readOnly": true,
          "description": "The CSR used to create your certificate",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The internal name of your certificate offer",
          "required": true
        },
        "status": {
          "type": "ssl.CertificateStatusEnum",
          "fullType": "ssl.CertificateStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current status of your certificate",
          "required": true
        },
        "subjectAltName": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "The SAN field for multidomain certificate",
          "required": true
        },
        "type": {
          "type": "ssl.CertificateTypeEnum",
          "fullType": "ssl.CertificateTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type of your certificate",
          "required": true
        },
        "validityEnd": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Your certificate is invalid from this date",
          "required": false
        },
        "validityStart": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Your certificate is valid from this date",
          "required": false
        }
      }
    },
    "ssl.CertificateAuthorityEnum": {
      "id": "CertificateAuthorityEnum",
      "namespace": "ssl",
      "description": "All authority a SSL certificate can be issued from",
      "enum": [
        "comodo",
        "sectigo"
      ],
      "enumType": "string"
    },
    "ssl.CertificateStatusEnum": {
      "id": "CertificateStatusEnum",
      "namespace": "ssl",
      "description": "All status a SSL certificate can be in",
      "enum": [
        "creating",
        "error",
        "ok",
        "validating"
      ],
      "enumType": "string"
    },
    "ssl.CertificateTypeEnum": {
      "id": "CertificateTypeEnum",
      "namespace": "ssl",
      "description": "All type a SSL certificate can be",
      "enum": [
        "DV",
        "EV",
        "OV"
      ],
      "enumType": "string"
    },
    "ssl.Operation": {
      "id": "Operation",
      "namespace": "ssl",
      "description": "Task on a SSL",
      "properties": {
        "doneDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Completion date",
          "required": false
        },
        "function": {
          "type": "ssl.OperationFunctionEnum",
          "fullType": "ssl.OperationFunctionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task function name",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task last update",
          "required": true
        },
        "startDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task Creation date",
          "required": true
        },
        "status": {
          "type": "ssl.OperationStatusEnum",
          "fullType": "ssl.OperationStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task status",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "ssl.OperationFunctionEnum": {
      "id": "OperationFunctionEnum",
      "namespace": "ssl",
      "description": "All functions a SSL operation can handle",
      "enum": [
        "createCertificate"
      ],
      "enumType": "string"
    },
    "ssl.OperationStatusEnum": {
      "id": "OperationStatusEnum",
      "namespace": "ssl",
      "description": "All status a SSL operation can be in",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string"
    }
  }
}