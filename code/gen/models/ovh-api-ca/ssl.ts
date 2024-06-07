import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/ssl.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List SSL",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "ssl:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "map[string][]iam.resource.TagFilter",
              "description": "Filter resources on IAM tags",
              "name": "iamTags",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/ssl"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get SSL details",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "ssl:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ssl.CertificateWithIAM"
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
          "description": "Get service information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "ssl:apiovh:serviceInfos/get",
              "required": true
            }
          ],
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
          "responseType": "services.Service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Update service information",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "ssl:apiovh:serviceInfos/edit",
              "required": true
            }
          ],
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
          "responseType": "void"
        }
      ],
      "path": "/ssl/{serviceName}/serviceInfos"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List tasks of an SSL",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "ssl:apiovh:tasks/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/ssl/{serviceName}/tasks"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get a task of an SSL",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "ssl:apiovh:tasks/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task ID",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ssl.Operation"
        }
      ],
      "path": "/ssl/{serviceName}/tasks/{taskId}"
    }
  ],
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "iam.ResourceMetadata": {
      "description": "IAM resource metadata embedded in services models",
      "id": "ResourceMetadata",
      "namespace": "iam",
      "properties": {
        "displayName": {
          "canBeNull": true,
          "description": "Resource display name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Unique identifier of the resource",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "tags": {
          "canBeNull": true,
          "description": "Resource tags. Tags that were internally computed are prefixed with ovh:",
          "fullType": "map[string]string",
          "readOnly": true,
          "required": false,
          "type": "map[string]string"
        },
        "urn": {
          "canBeNull": false,
          "description": "Unique resource name used in policies",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "iam.resource.TagFilter": {
      "description": "Resource tag filter",
      "id": "TagFilter",
      "namespace": "iam.resource",
      "properties": {
        "operator": {
          "canBeNull": true,
          "description": "Operator to use in order to filter on the value (defaults to 'EQ')",
          "fullType": "iam.resource.TagFilter.OperatorEnum",
          "readOnly": true,
          "required": false,
          "type": "iam.resource.TagFilter.OperatorEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "Value to use in order to filter tags",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "iam.resource.TagFilter.OperatorEnum": {
      "description": "Operator that can be used in order to filter resources tags",
      "enum": [
        "EQ"
      ],
      "enumType": "string",
      "id": "OperatorEnum",
      "namespace": "iam.resource.TagFilter"
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
      "description": "All authorities from which an SSL certificate can be issued",
      "enum": [
        "comodo",
        "sectigo"
      ],
      "enumType": "string",
      "id": "CertificateAuthorityEnum",
      "namespace": "ssl"
    },
    "ssl.CertificateStatusEnum": {
      "description": "All statuses an SSL certificate can be in",
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
      "description": "All types an SSL certificate can be",
      "enum": [
        "DV",
        "EV",
        "OV"
      ],
      "enumType": "string",
      "id": "CertificateTypeEnum",
      "namespace": "ssl"
    },
    "ssl.CertificateWithIAM": {
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
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
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
          "description": "Task Id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "ssl.OperationFunctionEnum": {
      "description": "All functions an SSL operation can handle",
      "enum": [
        "acme_order_certificate",
        "sectigo_deliver_certificate",
        "sectigo_deliver_certificate_from_api",
        "sectigo_order_certificate"
      ],
      "enumType": "string",
      "id": "OperationFunctionEnum",
      "namespace": "ssl"
    },
    "ssl.OperationStatusEnum": {
      "description": "All statuses an SSL operation can be in",
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