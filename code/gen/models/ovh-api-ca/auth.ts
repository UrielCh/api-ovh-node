import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/auth.json

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
  "basePath": "https://ca.api.ovh.com/1.0",
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
    "auth.ApiApplication": {
      "description": "API Application",
      "id": "ApiApplication",
      "namespace": "auth",
      "properties": {
        "applicationId": {
          "canBeNull": false,
          "description": "ID of this Application",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "applicationKey": {
          "canBeNull": false,
          "description": "Key of this application",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of this application",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of this application",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of this application",
          "fullType": "auth.ApplicationStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "auth.ApplicationStatusEnum"
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
          "readOnly": false,
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
        "allowedIPs": {
          "canBeNull": false,
          "description": "If defined, list of IP blocks that can use the credential",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
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
    "auth.ApplicationStatusEnum": {
      "description": "All states an API Application can be in",
      "enum": [
        "active",
        "blocked",
        "inactive",
        "trusted"
      ],
      "enumType": "string",
      "id": "ApplicationStatusEnum",
      "namespace": "auth"
    },
    "auth.Certificate": {
      "description": "X509 Certificate",
      "id": "Certificate",
      "namespace": "auth",
      "properties": {
        "expiration": {
          "canBeNull": false,
          "description": "Certificate's expiration",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "subject": {
          "canBeNull": false,
          "description": "Certificate's subject",
          "fullType": "string",
          "readOnly": true,
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
        "account": {
          "canBeNull": false,
          "description": "Customer identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
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
          "description": "Description of the authenticated identity",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "identities": {
          "canBeNull": false,
          "description": "Identities of the current session: corresponds to all the authentication provider identities that could be used to match IAM policies",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
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
          "description": "Roles of the authenticated identity",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "user": {
          "canBeNull": true,
          "description": "Username of the authenticated identity",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "auth.Group": {
      "description": "An IAM Group",
      "id": "Group",
      "namespace": "auth",
      "properties": {
        "creation": {
          "canBeNull": false,
          "description": "Creation date of this group",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "defaultGroup": {
          "canBeNull": false,
          "description": "Whether it is a default group. This kind of group can't be edited or deleted",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": true,
          "description": "Group's description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update of this group",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Group's name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "role": {
          "canBeNull": false,
          "description": "Group's role",
          "fullType": "auth.RoleEnum",
          "readOnly": false,
          "required": false,
          "type": "auth.RoleEnum"
        },
        "urn": {
          "canBeNull": false,
          "description": "IAM identity URN of the group",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "auth.GroupRequest": {
      "description": "A new IAM group",
      "id": "GroupRequest",
      "namespace": "auth",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Group's description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Group's name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "role": {
          "canBeNull": false,
          "description": "Group's role",
          "fullType": "auth.RoleEnum",
          "readOnly": false,
          "required": false,
          "type": "auth.RoleEnum"
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
        "oauth2_client_credentials",
        "provider",
        "user"
      ],
      "enumType": "string",
      "id": "MethodEnum",
      "namespace": "auth"
    },
    "auth.Provider": {
      "description": "An IAM Federation Provider",
      "id": "Provider",
      "namespace": "auth",
      "properties": {
        "creation": {
          "canBeNull": false,
          "description": "Creation date of the identity provider",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "disableUsers": {
          "canBeNull": true,
          "description": "Whether account users should still be usable as a login method or not",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "extensions": {
          "canBeNull": false,
          "description": "SAML Extensions to embed inside the SAML requests",
          "fullType": "auth.ProviderExtensions",
          "readOnly": false,
          "required": false,
          "type": "auth.ProviderExtensions"
        },
        "groupAttributeName": {
          "canBeNull": false,
          "description": "SAML Group attribute name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "idpSigningCertificates": {
          "canBeNull": false,
          "description": "IdP's signing certificate",
          "fullType": "auth.Certificate[]",
          "readOnly": true,
          "required": false,
          "type": "auth.Certificate[]"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update of the identity provider",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "signRequests": {
          "canBeNull": true,
          "description": "Whether SAML Authn Requests should be signed",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "ssoServiceUrl": {
          "canBeNull": false,
          "description": "IdP's Single Sign On Service Url",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "userAttributeName": {
          "canBeNull": false,
          "description": "SAML User attribute name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "auth.ProviderExtensions": {
      "description": "A SAML 2.0 Extension that should be added to SAML requests when using this provider",
      "id": "ProviderExtensions",
      "namespace": "auth",
      "properties": {
        "requestedAttributes": {
          "canBeNull": true,
          "description": "List of SAML RequestedAttribute to add to SAML requests",
          "fullType": "auth.ProviderRequestedAttributes[]",
          "readOnly": false,
          "required": false,
          "type": "auth.ProviderRequestedAttributes[]"
        }
      }
    },
    "auth.ProviderRequest": {
      "description": "An IAM Federation Provider creation request",
      "id": "ProviderRequest",
      "namespace": "auth",
      "properties": {
        "disableUsers": {
          "canBeNull": true,
          "description": "Whether account users should still be usable as a login method or not",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "extensions": {
          "canBeNull": false,
          "description": "SAML Extensions to embed inside the SAML requests",
          "fullType": "auth.ProviderExtensions",
          "readOnly": false,
          "required": false,
          "type": "auth.ProviderExtensions"
        },
        "groupAttributeName": {
          "canBeNull": true,
          "description": "SAML Group attribute name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "metadata": {
          "canBeNull": false,
          "description": "IdP's signing certificate",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "signRequests": {
          "canBeNull": true,
          "description": "Whether SAML Authn Requests should be signed",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "userAttributeName": {
          "canBeNull": true,
          "description": "SAML User attribute name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "auth.ProviderRequestedAttributes": {
      "description": "A SAML 2.0 requested attribute that should be added to SAML requests when using this provider",
      "id": "ProviderRequestedAttributes",
      "namespace": "auth",
      "properties": {
        "isRequired": {
          "canBeNull": false,
          "description": "Expresses that this RequestedAttribute is mandatory (remains advisory)",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the SAML RequestedAttribute",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "nameFormat": {
          "canBeNull": true,
          "description": "NameFormat of the SAML RequestedAttribute",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "values": {
          "canBeNull": true,
          "description": "List of AttributeValues allowed for this RequestedAttribute",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "auth.RoleEnum": {
      "description": "Permission given on the account",
      "enum": [
        "ADMIN",
        "NONE",
        "REGULAR",
        "UNPRIVILEGED"
      ],
      "enumType": "string",
      "id": "RoleEnum",
      "namespace": "auth"
    },
    "auth.User": {
      "description": "An IAM User",
      "id": "User",
      "namespace": "auth",
      "properties": {
        "creation": {
          "canBeNull": false,
          "description": "Creation date of this user",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "User's description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "email": {
          "canBeNull": false,
          "description": "User's email",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "group": {
          "canBeNull": false,
          "description": "User's group",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "User's last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "login": {
          "canBeNull": false,
          "description": "User's login suffix",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "passwordLastUpdate": {
          "canBeNull": false,
          "description": "User's password last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Current user's status",
          "fullType": "auth.UserStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "auth.UserStatusEnum"
        },
        "urn": {
          "canBeNull": false,
          "description": "IAM identity URN of the user",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "auth.UserRequest": {
      "description": "An IAM user creation request",
      "id": "UserRequest",
      "namespace": "auth",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "User's description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "email": {
          "canBeNull": false,
          "description": "User's email",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "group": {
          "canBeNull": false,
          "description": "User's group",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "login": {
          "canBeNull": false,
          "description": "User's login",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "password": {
          "canBeNull": false,
          "description": "User's password",
          "fullType": "password",
          "readOnly": false,
          "required": true,
          "type": "password"
        }
      }
    },
    "auth.UserStatusEnum": {
      "description": "Status of a User",
      "enum": [
        "DISABLED",
        "OK",
        "PASSWORD_CHANGE_REQUIRED"
      ],
      "enumType": "string",
      "id": "UserStatusEnum",
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