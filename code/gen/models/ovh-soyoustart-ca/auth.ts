import {Schema} from '../../src/schema';

export const schema: Schema = {
  "basePath": "https://ca.api.soyoustart.com/1.0",
  "resourcePath": "/auth",
  "apis": [
    {
      "description": "Details about the current authentication",
      "path": "/auth/details",
      "operations": [
        {
          "description": "Details about the current authentication",
          "parameters": [],
          "noAuthentication": false,
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "auth.Details",
          "resellerOnly": false,
          "responseFullType": "auth.Details"
        }
      ]
    },
    {
      "path": "/auth/logout",
      "description": "Expire current credential",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "httpMethod": "POST",
          "description": "Expire current credential",
          "noAuthentication": false,
          "parameters": []
        }
      ]
    },
    {
      "operations": [
        {
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "auth.Credential",
          "description": "Request a new credential for your application",
          "noAuthentication": true,
          "parameters": [
            {
              "description": "Access required for your application",
              "paramType": "body",
              "required": true,
              "dataType": "auth.AccessRule[]",
              "fullType": "auth.AccessRule[]",
              "name": "accessRules"
            },
            {
              "fullType": "string",
              "name": "redirection",
              "required": false,
              "paramType": "body",
              "dataType": "string",
              "description": "Where you want to redirect the user after sucessfull authentication"
            }
          ],
          "responseFullType": "auth.Credential",
          "resellerOnly": false
        }
      ],
      "description": "Operations with credentials",
      "path": "/auth/credential"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "api.Credential",
          "httpMethod": "GET",
          "description": "Get the current credential details",
          "parameters": [],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "api.Credential"
        }
      ],
      "path": "/auth/currentCredential",
      "description": "Get the current credential details"
    },
    {
      "operations": [
        {
          "responseFullType": "long",
          "resellerOnly": false,
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "long",
          "description": "Get the current time of the OVH servers, since UNIX epoch",
          "parameters": [],
          "noAuthentication": true
        }
      ],
      "description": "Get the time of OVH servers",
      "path": "/auth/time"
    }
  ],
  "models": {
    "auth.AccessRule": {
      "namespace": "auth",
      "id": "AccessRule",
      "description": "Access rule required for the application",
      "properties": {
        "path": {
          "description": null,
          "canBeNull": false,
          "type": "string"
        },
        "method": {
          "description": null,
          "canBeNull": false,
          "type": "http.MethodEnum"
        }
      }
    },
    "auth.Credential": {
      "id": "Credential",
      "description": "Credential request to get access to the API",
      "properties": {
        "state": {
          "type": "auth.CredentialStateEnum",
          "canBeNull": false,
          "description": null
        },
        "validationUrl": {
          "type": "string",
          "canBeNull": true,
          "description": null
        },
        "consumerKey": {
          "type": "string",
          "canBeNull": false,
          "description": null
        }
      },
      "namespace": "auth"
    },
    "http.MethodEnum": {
      "enum": [
        "DELETE",
        "GET",
        "POST",
        "PUT"
      ],
      "enumType": "string",
      "id": "MethodEnum",
      "description": "All HTTP methods available",
      "namespace": "http"
    },
    "auth.CredentialStateEnum": {
      "enum": [
        "expired",
        "pendingValidation",
        "refused",
        "validated"
      ],
      "enumType": "string",
      "id": "CredentialStateEnum",
      "description": "All states a Credential can be in",
      "namespace": "auth"
    },
    "api.Credential": {
      "properties": {
        "creation": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "datetime",
          "type": "datetime"
        },
        "ovhSupport": {
          "readOnly": true,
          "description": "States whether this credential has been created by yourself or by the OVH support team",
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false
        },
        "credentialId": {
          "canBeNull": false,
          "fullType": "long",
          "type": "long",
          "description": null,
          "readOnly": true
        },
        "allowedIPs": {
          "description": "If defined, list of ip blocks which are allowed to call API with this credential",
          "readOnly": false,
          "canBeNull": true,
          "fullType": "ipBlock[]",
          "type": "ipBlock[]"
        },
        "applicationId": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "type": "long"
        },
        "rules": {
          "readOnly": true,
          "description": null,
          "canBeNull": false,
          "fullType": "auth.AccessRule[]",
          "type": "auth.AccessRule[]"
        },
        "lastUse": {
          "canBeNull": true,
          "fullType": "datetime",
          "type": "datetime",
          "description": null,
          "readOnly": true
        },
        "status": {
          "readOnly": true,
          "description": null,
          "type": "auth.CredentialStateEnum",
          "fullType": "auth.CredentialStateEnum",
          "canBeNull": false
        },
        "expiration": {
          "canBeNull": true,
          "fullType": "datetime",
          "type": "datetime",
          "description": null,
          "readOnly": true
        }
      },
      "description": "API Credential",
      "id": "Credential",
      "namespace": "api"
    },
    "auth.Details": {
      "namespace": "auth",
      "properties": {
        "user": {
          "canBeNull": true,
          "type": "string",
          "description": "Username"
        },
        "description": {
          "type": "string",
          "canBeNull": true,
          "description": "Description"
        },
        "roles": {
          "canBeNull": true,
          "type": "string[]",
          "description": "Roles"
        },
        "method": {
          "description": "Authentication method",
          "canBeNull": false,
          "type": "auth.MethodEnum"
        }
      },
      "id": "Details",
      "description": "Details about the authentication used"
    },
    "auth.MethodEnum": {
      "namespace": "auth",
      "enumType": "string",
      "description": "All Authentication methods available",
      "id": "MethodEnum",
      "enum": [
        "account",
        "provider",
        "user"
      ]
    }
  },
  "apiVersion": "1.0"
}