import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/auth/credential",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "accessRules",
              "dataType": "auth.AccessRule[]",
              "paramType": "body",
              "fullType": "auth.AccessRule[]",
              "required": true,
              "description": "Access required for your application"
            },
            {
              "name": "redirection",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Where you want to redirect the user after sucessfull authentication"
            }
          ],
          "responseType": "auth.Credential",
          "noAuthentication": true,
          "description": "Request a new credential for your application"
        }
      ],
      "description": "Operations with credentials"
    },
    {
      "path": "/auth/currentCredential",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "api.Credential",
          "noAuthentication": false,
          "description": "Get the current credential details"
        }
      ],
      "description": "Get the current credential details"
    },
    {
      "path": "/auth/details",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "auth.Details",
          "noAuthentication": false,
          "description": "Details about the current authentication"
        }
      ],
      "description": "Details about the current authentication"
    },
    {
      "path": "/auth/logout",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Expire current credential"
        }
      ],
      "description": "Expire current credential"
    },
    {
      "path": "/auth/time",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long",
          "noAuthentication": true,
          "description": "Get the current time of the OVH servers, since UNIX epoch"
        }
      ],
      "description": "Get the time of OVH servers"
    }
  ],
  "resourcePath": "/auth",
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "api.Credential": {
      "id": "Credential",
      "namespace": "api",
      "description": "API Credential",
      "properties": {
        "allowedIPs": {
          "type": "ipBlock[]",
          "fullType": "ipBlock[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "If defined, list of ip blocks which are allowed to call API with this credential",
          "required": false
        },
        "applicationId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "creation": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "credentialId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "expiration": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "lastUse": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "ovhSupport": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "States whether this credential has been created by yourself or by the OVH support team",
          "required": true
        },
        "rules": {
          "type": "auth.AccessRule[]",
          "fullType": "auth.AccessRule[]",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "auth.CredentialStateEnum",
          "fullType": "auth.CredentialStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "auth.AccessRule": {
      "id": "AccessRule",
      "namespace": "auth",
      "description": "Access rule required for the application",
      "properties": {
        "method": {
          "type": "http.MethodEnum",
          "fullType": "http.MethodEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "path": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "auth.Credential": {
      "id": "Credential",
      "namespace": "auth",
      "description": "Credential request to get access to the API",
      "properties": {
        "consumerKey": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "state": {
          "type": "auth.CredentialStateEnum",
          "fullType": "auth.CredentialStateEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "validationUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "auth.CredentialStateEnum": {
      "id": "CredentialStateEnum",
      "namespace": "auth",
      "description": "All states a Credential can be in",
      "enum": [
        "expired",
        "pendingValidation",
        "refused",
        "validated"
      ],
      "enumType": "string"
    },
    "auth.Details": {
      "id": "Details",
      "namespace": "auth",
      "description": "Details about the authentication used",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Description",
          "required": false
        },
        "method": {
          "type": "auth.MethodEnum",
          "fullType": "auth.MethodEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Authentication method",
          "required": true
        },
        "roles": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Roles",
          "required": false
        },
        "user": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Username",
          "required": false
        }
      }
    },
    "auth.MethodEnum": {
      "id": "MethodEnum",
      "namespace": "auth",
      "description": "All Authentication methods available",
      "enum": [
        "account",
        "provider",
        "user"
      ],
      "enumType": "string"
    },
    "http.MethodEnum": {
      "id": "MethodEnum",
      "namespace": "http",
      "description": "All HTTP methods available",
      "enum": [
        "DELETE",
        "GET",
        "POST",
        "PUT"
      ],
      "enumType": "string"
    }
  }
}