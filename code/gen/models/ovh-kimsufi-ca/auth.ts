import {Schema} from '../../src/schema';

// imported from https://ca.api.kimsufi.com:443/1.0/auth.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations with credentials",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request a new credential for your application",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "auth.AccessRule[]",
              "description": "Access required for your application",
              "fullType": "auth.AccessRule[]",
              "name": "accessRules",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Where you want to redirect the user after sucessfull authentication",
              "fullType": "string",
              "name": "redirection",
              "paramType": "body",
              "required": false
            }
          ],
          "resellerOnly": false,
          "responseFullType": "auth.Credential",
          "responseType": "auth.Credential"
        }
      ],
      "path": "/auth/credential"
    },
    {
      "description": "Get the current credential details",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the current credential details",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "api.Credential",
          "responseType": "api.Credential"
        }
      ],
      "path": "/auth/currentCredential"
    },
    {
      "description": "Details about the current authentication",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Details about the current authentication",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "auth.Details",
          "responseType": "auth.Details"
        }
      ],
      "path": "/auth/details"
    },
    {
      "description": "Expire current credential",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Expire current credential",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/auth/logout"
    },
    {
      "description": "Get the time of OVH servers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the current time of the OVH servers, since UNIX epoch",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "long",
          "responseType": "long"
        }
      ],
      "path": "/auth/time"
    }
  ],
  "basePath": "https://ca.api.kimsufi.com/1.0",
  "models": {
    "api.Credential": {
      "description": "API Credential",
      "id": "Credential",
      "namespace": "api",
      "properties": {
        "allowedIPs": {
          "canBeNull": true,
          "description": "If defined, list of ip blocks which are allowed to call API with this credential",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "type": "ipBlock[]"
        },
        "applicationId": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "creation": {
          "canBeNull": false,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "credentialId": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "expiration": {
          "canBeNull": true,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "lastUse": {
          "canBeNull": true,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "ovhSupport": {
          "canBeNull": false,
          "description": "States whether this credential has been created by yourself or by the OVH support team",
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "rules": {
          "canBeNull": false,
          "description": null,
          "fullType": "auth.AccessRule[]",
          "readOnly": true,
          "type": "auth.AccessRule[]"
        },
        "status": {
          "canBeNull": false,
          "description": null,
          "fullType": "auth.CredentialStateEnum",
          "readOnly": true,
          "type": "auth.CredentialStateEnum"
        }
      }
    },
    "auth.AccessRule": {
      "description": "Access rule required for the application",
      "id": "AccessRule",
      "namespace": "auth",
      "properties": {
        "method": {
          "canBeNull": false,
          "description": null,
          "type": "http.MethodEnum"
        },
        "path": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        }
      }
    },
    "auth.Credential": {
      "description": "Credential request to get access to the API",
      "id": "Credential",
      "namespace": "auth",
      "properties": {
        "consumerKey": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": null,
          "type": "auth.CredentialStateEnum"
        },
        "validationUrl": {
          "canBeNull": true,
          "description": null,
          "type": "string"
        }
      }
    },
    "auth.CredentialStateEnum": {
      "description": "All states a Credential can be in",
      "enum": [
        "expired",
        "pendingValidation",
        "refused",
        "validated"
      ],
      "enumType": "string",
      "id": "CredentialStateEnum",
      "namespace": "auth"
    },
    "auth.Details": {
      "description": "Details about the authentication used",
      "id": "Details",
      "namespace": "auth",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Description",
          "type": "string"
        },
        "method": {
          "canBeNull": false,
          "description": "Authentication method",
          "type": "auth.MethodEnum"
        },
        "roles": {
          "canBeNull": true,
          "description": "Roles",
          "type": "string[]"
        },
        "user": {
          "canBeNull": true,
          "description": "Username",
          "type": "string"
        }
      }
    },
    "auth.MethodEnum": {
      "description": "All Authentication methods available",
      "enum": [
        "account",
        "provider",
        "user"
      ],
      "enumType": "string",
      "id": "MethodEnum",
      "namespace": "auth"
    },
    "http.MethodEnum": {
      "description": "All HTTP methods available",
      "enum": [
        "DELETE",
        "GET",
        "POST",
        "PUT"
      ],
      "enumType": "string",
      "id": "MethodEnum",
      "namespace": "http"
    }
  },
  "resourcePath": "/auth"
}