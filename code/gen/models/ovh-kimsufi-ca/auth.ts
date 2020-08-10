import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1.0",
  "resourcePath": "/auth",
  "models": {
    "auth.AccessRule": {
      "id": "AccessRule",
      "namespace": "auth",
      "properties": {
        "path": {
          "type": "string",
          "canBeNull": false,
          "description": null
        },
        "method": {
          "description": null,
          "canBeNull": false,
          "type": "http.MethodEnum"
        }
      },
      "description": "Access rule required for the application"
    },
    "auth.Details": {
      "properties": {
        "user": {
          "description": "Username",
          "canBeNull": true,
          "type": "string"
        },
        "method": {
          "canBeNull": false,
          "description": "Authentication method",
          "type": "auth.MethodEnum"
        },
        "roles": {
          "type": "string[]",
          "canBeNull": true,
          "description": "Roles"
        },
        "description": {
          "description": "Description",
          "canBeNull": true,
          "type": "string"
        }
      },
      "description": "Details about the authentication used",
      "id": "Details",
      "namespace": "auth"
    },
    "auth.MethodEnum": {
      "description": "All Authentication methods available",
      "enum": [
        "account",
        "provider",
        "user"
      ],
      "namespace": "auth",
      "enumType": "string",
      "id": "MethodEnum"
    },
    "api.Credential": {
      "description": "API Credential",
      "properties": {
        "status": {
          "type": "auth.CredentialStateEnum",
          "description": null,
          "fullType": "auth.CredentialStateEnum",
          "readOnly": true,
          "canBeNull": false
        },
        "ovhSupport": {
          "readOnly": true,
          "fullType": "boolean",
          "canBeNull": false,
          "description": "States whether this credential has been created by yourself or by the OVH support team",
          "type": "boolean"
        },
        "lastUse": {
          "type": "datetime",
          "description": null,
          "readOnly": true,
          "canBeNull": true,
          "fullType": "datetime"
        },
        "rules": {
          "description": null,
          "readOnly": true,
          "fullType": "auth.AccessRule[]",
          "canBeNull": false,
          "type": "auth.AccessRule[]"
        },
        "credentialId": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "long",
          "description": null,
          "type": "long"
        },
        "creation": {
          "type": "datetime",
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": false
        },
        "applicationId": {
          "type": "long",
          "fullType": "long",
          "readOnly": true,
          "canBeNull": false,
          "description": null
        },
        "allowedIPs": {
          "readOnly": false,
          "fullType": "ipBlock[]",
          "canBeNull": true,
          "description": "If defined, list of ip blocks which are allowed to call API with this credential",
          "type": "ipBlock[]"
        },
        "expiration": {
          "type": "datetime",
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": true,
          "description": null
        }
      },
      "id": "Credential",
      "namespace": "api"
    },
    "auth.Credential": {
      "namespace": "auth",
      "id": "Credential",
      "properties": {
        "consumerKey": {
          "description": null,
          "canBeNull": false,
          "type": "string"
        },
        "validationUrl": {
          "canBeNull": true,
          "description": null,
          "type": "string"
        },
        "state": {
          "description": null,
          "canBeNull": false,
          "type": "auth.CredentialStateEnum"
        }
      },
      "description": "Credential request to get access to the API"
    },
    "http.MethodEnum": {
      "description": "All HTTP methods available",
      "enum": [
        "DELETE",
        "GET",
        "POST",
        "PUT"
      ],
      "id": "MethodEnum",
      "enumType": "string",
      "namespace": "http"
    },
    "auth.CredentialStateEnum": {
      "enum": [
        "expired",
        "pendingValidation",
        "refused",
        "validated"
      ],
      "description": "All states a Credential can be in",
      "enumType": "string",
      "id": "CredentialStateEnum",
      "namespace": "auth"
    }
  },
  "apis": [
    {
      "description": "Operations with credentials",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "fullType": "auth.AccessRule[]",
              "description": "Access required for your application",
              "paramType": "body",
              "required": true,
              "name": "accessRules",
              "dataType": "auth.AccessRule[]"
            },
            {
              "required": false,
              "paramType": "body",
              "description": "Where you want to redirect the user after sucessfull authentication",
              "fullType": "string",
              "dataType": "string",
              "name": "redirection"
            }
          ],
          "resellerOnly": false,
          "description": "Request a new credential for your application",
          "httpMethod": "POST",
          "responseFullType": "auth.Credential",
          "responseType": "auth.Credential",
          "noAuthentication": true
        }
      ],
      "path": "/auth/credential"
    },
    {
      "description": "Expire current credential",
      "operations": [
        {
          "parameters": [],
          "resellerOnly": false,
          "description": "Expire current credential",
          "httpMethod": "POST",
          "responseFullType": "void",
          "responseType": "void",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/auth/logout"
    },
    {
      "description": "Get the current credential details",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "api.Credential",
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseFullType": "api.Credential",
          "description": "Get the current credential details",
          "parameters": []
        }
      ],
      "path": "/auth/currentCredential"
    },
    {
      "path": "/auth/time",
      "description": "Get the time of OVH servers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [],
          "httpMethod": "GET",
          "responseFullType": "long",
          "description": "Get the current time of the OVH servers, since UNIX epoch",
          "resellerOnly": false,
          "responseType": "long",
          "noAuthentication": true
        }
      ]
    },
    {
      "description": "Details about the current authentication",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "auth.Details",
          "resellerOnly": false,
          "responseFullType": "auth.Details",
          "httpMethod": "GET",
          "description": "Details about the current authentication",
          "parameters": [],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/auth/details"
    }
  ],
  "basePath": "https://ca.api.kimsufi.com/1.0"
}