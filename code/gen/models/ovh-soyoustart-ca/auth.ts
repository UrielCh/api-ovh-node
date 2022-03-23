import {Schema} from '../../src/schema';

// imported from https://ca.api.soyoustart.com:443/1.0/auth.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Request a new credential for your application",
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
              "dataType": "auth.ApiCredentialRequestParams",
              "description": "Request Body",
              "fullType": "auth.ApiCredentialRequestParams",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "auth.ApiCredentialRequest"
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
          "responseType": "auth.ApiCredential"
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
          "responseType": "long"
        }
      ],
      "path": "/auth/time"
    }
  ],
  "basePath": "https://ca.api.soyoustart.com/1.0",
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
          "required": false,
          "type": "ipBlock[]"
        },
        "applicationId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "creation": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "credentialId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "expiration": {
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastUse": {
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "ovhSupport": {
          "canBeNull": false,
          "description": "States whether this credential has been created by yourself or by the OVH support team",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "rules": {
          "canBeNull": false,
          "fullType": "auth.AccessRule[]",
          "readOnly": true,
          "required": false,
          "type": "auth.AccessRule[]"
        },
        "status": {
          "canBeNull": false,
          "fullType": "auth.CredentialStateEnum",
          "readOnly": true,
          "required": false,
          "type": "auth.CredentialStateEnum"
        }
      }
    },
    "auth.AccessRule": {
      "description": "Access rule allowed to an application",
      "id": "AccessRule",
      "namespace": "auth",
      "properties": {
        "method": {
          "canBeNull": false,
          "description": "Allowed Method",
          "fullType": "auth.HTTPMethodEnum",
          "readOnly": true,
          "required": false,
          "type": "auth.HTTPMethodEnum"
        },
        "path": {
          "canBeNull": false,
          "description": "Allowed path",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "auth.AccessRuleRequest": {
      "description": "Access rule requested for the application",
      "id": "AccessRuleRequest",
      "namespace": "auth",
      "properties": {
        "method": {
          "canBeNull": false,
          "description": "Allowed Method",
          "fullType": "auth.HTTPMethodEnum",
          "readOnly": false,
          "required": false,
          "type": "auth.HTTPMethodEnum"
        },
        "path": {
          "canBeNull": false,
          "description": "Allowed path",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "auth.ApiCredential": {
      "description": "API Credential",
      "id": "ApiCredential",
      "namespace": "auth",
      "properties": {
        "allowedIPs": {
          "canBeNull": true,
          "description": "If defined, list of ip blocks which are allowed to call API with this credential",
          "fullType": "ipBlock[]",
          "readOnly": true,
          "required": false,
          "type": "ipBlock[]"
        },
        "applicationId": {
          "canBeNull": false,
          "description": "ID of associated API Application",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "creation": {
          "canBeNull": false,
          "description": "Creation date of this credential",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "credentialId": {
          "canBeNull": false,
          "description": "ID of this credential",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "expiration": {
          "canBeNull": true,
          "description": "Expiration date of this credential",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastUse": {
          "canBeNull": true,
          "description": "Last use date of this credential",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "ovhSupport": {
          "canBeNull": false,
          "description": "States whether this credential has been created by yourself or by the OVH support team",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "rules": {
          "canBeNull": false,
          "description": "API routes allowed to this credential",
          "fullType": "auth.AccessRule[]",
          "readOnly": true,
          "required": false,
          "type": "auth.AccessRule[]"
        },
        "status": {
          "canBeNull": false,
          "description": "State of to this credential",
          "fullType": "auth.CredentialStateEnum",
          "readOnly": true,
          "required": false,
          "type": "auth.CredentialStateEnum"
        }
      }
    },
    "auth.ApiCredentialRequest": {
      "description": "Credential request to get access to the API",
      "id": "ApiCredentialRequest",
      "namespace": "auth",
      "properties": {
        "consumerKey": {
          "canBeNull": false,
          "description": "Consumer Key to use for further authenticated calls",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the credential",
          "fullType": "auth.CredentialStateEnum",
          "readOnly": true,
          "required": false,
          "type": "auth.CredentialStateEnum"
        },
        "validationUrl": {
          "canBeNull": false,
          "description": "Address where to redirect the client to validate the access",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "auth.ApiCredentialRequestParams": {
      "description": "Credential request to get access to the API",
      "id": "ApiCredentialRequestParams",
      "namespace": "auth",
      "properties": {
        "accessRules": {
          "canBeNull": false,
          "description": "Wanted API routes",
          "fullType": "auth.AccessRuleRequest[]",
          "readOnly": false,
          "required": true,
          "type": "auth.AccessRuleRequest[]"
        },
        "redirection": {
          "canBeNull": true,
          "description": "Address where the customer will be redirected after authentication",
          "fullType": "string",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "auth.CredentialStateEnum"
        },
        "validationUrl": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
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
        "allowedRoutes": {
          "canBeNull": true,
          "description": "Allowed API routes, null means everything",
          "fullType": "auth.AccessRule[]",
          "readOnly": true,
          "required": false,
          "type": "auth.AccessRule[]"
        },
        "description": {
          "canBeNull": true,
          "description": "Description of the connected user",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "method": {
          "canBeNull": false,
          "description": "Authentication method",
          "fullType": "auth.MethodEnum",
          "readOnly": true,
          "required": false,
          "type": "auth.MethodEnum"
        },
        "roles": {
          "canBeNull": true,
          "description": "Roles of the authenticated user",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "user": {
          "canBeNull": true,
          "description": "Connected username",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "auth.HTTPMethodEnum": {
      "description": "All HTTP methods available",
      "enum": [
        "DELETE",
        "GET",
        "POST",
        "PUT"
      ],
      "enumType": "string",
      "id": "HTTPMethodEnum",
      "namespace": "auth"
    },
    "auth.MethodEnum": {
      "description": "All authentication methods available",
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