import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/me",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "nichandle.Nichandle",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "nichandle.Nichandle",
              "paramType": "body",
              "fullType": "nichandle.Nichandle",
              "required": true,
              "description": "Request Body"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Details about your OVH identifier"
    },
    {
      "path": "/me/accessRestriction/backupCode",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete this Two-Factor"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "nichandle.accessRestriction.SOTPAccount",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [],
          "responseType": "nichandle.accessRestriction.SOTPSecret",
          "noAuthentication": false,
          "description": "Add a SOTP access restriction"
        }
      ],
      "description": "SOTP Two-Factor Authentication"
    },
    {
      "path": "/me/accessRestriction/backupCode/disable",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "code",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "OTP code given by the application"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Disable this SOTP account"
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/me/accessRestriction/backupCode/enable",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "code",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "OTP code given by the application"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Enable this SOTP account"
        }
      ],
      "description": "enable operations"
    },
    {
      "path": "/me/accessRestriction/backupCode/validate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "code",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "OTP code given by the application"
            }
          ],
          "responseType": "nichandle.accessRestriction.SOTPValidate",
          "noAuthentication": false,
          "description": "Validate your SOTP account"
        }
      ],
      "description": "validate operations"
    },
    {
      "path": "/me/accessRestriction/developerMode",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "nichandle.DeveloperModeRestriction",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "nichandle.DeveloperModeRestriction",
              "paramType": "body",
              "fullType": "nichandle.DeveloperModeRestriction",
              "required": true,
              "description": "Request Body"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Login restrictions on a development version of the Manager"
    },
    {
      "path": "/me/accessRestriction/ip",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of IP restrictions"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "body",
              "fullType": "ipBlock",
              "required": true,
              "description": "An IP range where we will apply the rule"
            },
            {
              "name": "rule",
              "dataType": "nichandle.accessRestriction.IpRestrictionRuleEnum",
              "paramType": "body",
              "fullType": "nichandle.accessRestriction.IpRestrictionRuleEnum",
              "required": true,
              "description": "Accept or deny IP access"
            },
            {
              "name": "warning",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Send an email if someone try to access with this IP address"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Add an IP access restriction"
        }
      ],
      "description": "List the nichandle.IpRestriction objects"
    },
    {
      "path": "/me/accessRestriction/ip/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete this restriction rule"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "nichandle.IpRestriction",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "nichandle.IpRestriction",
              "paramType": "body",
              "fullType": "nichandle.IpRestriction",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "List of all IP Restrictions"
    },
    {
      "path": "/me/accessRestriction/ipDefaultRule",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "nichandle.IpRestrictionDefaultRule",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "nichandle.IpRestrictionDefaultRule",
              "paramType": "body",
              "fullType": "nichandle.IpRestrictionDefaultRule",
              "required": true,
              "description": "Request Body"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "IP Restriction default rule"
    },
    {
      "path": "/me/accessRestriction/sms",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of Sms accounts"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "phone",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Cell phone number to register"
            }
          ],
          "responseType": "nichandle.accessRestriction.SmsSecret",
          "noAuthentication": false,
          "description": "Add a SMS access restriction"
        }
      ],
      "description": "List the nichandle.accessRestriction.SmsAccount objects"
    },
    {
      "path": "/me/accessRestriction/sms/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete this Two-Factor"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "nichandle.accessRestriction.SmsAccount",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "nichandle.accessRestriction.SmsAccount",
              "paramType": "body",
              "fullType": "nichandle.accessRestriction.SmsAccount",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Sms Two-Factor Authentication"
    },
    {
      "path": "/me/accessRestriction/sms/{id}/disable",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "code",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "SMS code send by a cellphone"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Disable this SMS account"
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/me/accessRestriction/sms/{id}/enable",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "code",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "SMS code send by a cellphone"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Enable this SMS account"
        }
      ],
      "description": "enable operations"
    },
    {
      "path": "/me/accessRestriction/sms/{id}/sendCode",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "nichandle.accessRestriction.SmsCode",
          "noAuthentication": false,
          "description": "Send a SMS to this account"
        }
      ],
      "description": "sendCode operations"
    },
    {
      "path": "/me/accessRestriction/sms/{id}/validate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "code",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "SMS code send to a cellphone"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Validate your SMS account"
        }
      ],
      "description": "validate operations"
    },
    {
      "path": "/me/accessRestriction/totp",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of TOTP accounts"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [],
          "responseType": "nichandle.accessRestriction.TOTPSecret",
          "noAuthentication": false,
          "description": "Add a TOTP access restriction"
        }
      ],
      "description": "List the nichandle.accessRestriction.TOTPAccount objects"
    },
    {
      "path": "/me/accessRestriction/totp/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete this Two-Factor"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "nichandle.accessRestriction.TOTPAccount",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "nichandle.accessRestriction.TOTPAccount",
              "paramType": "body",
              "fullType": "nichandle.accessRestriction.TOTPAccount",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "TOTP Two-Factor Authentication"
    },
    {
      "path": "/me/accessRestriction/totp/{id}/disable",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "code",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "OTP code given by the application"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Disable this TOTP account"
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/me/accessRestriction/totp/{id}/enable",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "code",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "OTP code given by the application"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Enable this TOTP account"
        }
      ],
      "description": "enable operations"
    },
    {
      "path": "/me/accessRestriction/totp/{id}/validate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "code",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "OTP code given by the application"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Validate your TOTP account"
        }
      ],
      "description": "validate operations"
    },
    {
      "path": "/me/accessRestriction/u2f",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of U2F accounts"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [],
          "responseType": "nichandle.accessRestriction.U2FRegisterChallenge",
          "noAuthentication": false,
          "description": "Add a U2F access restriction"
        }
      ],
      "description": "List the nichandle.accessRestriction.U2FAccount objects"
    },
    {
      "path": "/me/accessRestriction/u2f/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete this Two-Factor"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "nichandle.accessRestriction.U2FAccount",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "nichandle.accessRestriction.U2FAccount",
              "paramType": "body",
              "fullType": "nichandle.accessRestriction.U2FAccount",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "U2F Two-Factor Authentication"
    },
    {
      "path": "/me/accessRestriction/u2f/{id}/challenge",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "nichandle.accessRestriction.U2FSignChallenge",
          "noAuthentication": false,
          "description": "Get an U2F Challenge"
        }
      ],
      "description": "challenge operations"
    },
    {
      "path": "/me/accessRestriction/u2f/{id}/disable",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "clientData",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": ""
            },
            {
              "name": "signatureData",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": ""
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Disable this U2F account"
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/me/accessRestriction/u2f/{id}/enable",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "clientData",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": ""
            },
            {
              "name": "signatureData",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": ""
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Enable this U2F account"
        }
      ],
      "description": "enable operations"
    },
    {
      "path": "/me/accessRestriction/u2f/{id}/validate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "clientData",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": ""
            },
            {
              "name": "registrationData",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": ""
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Validate your U2F account"
        }
      ],
      "description": "validate operations"
    },
    {
      "path": "/me/agreements",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "contractId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of contractId property (like)"
            },
            {
              "name": "agreed",
              "dataType": "agreements.AgreementStateEnum",
              "paramType": "query",
              "fullType": "agreements.AgreementStateEnum",
              "required": false,
              "description": "Filter the value of agreed property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of contracts signed between you and OVH"
        }
      ],
      "description": "List the agreements.ContractAgreement objects"
    },
    {
      "path": "/me/agreements/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "agreements.ContractAgreement",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Contract agreement"
    },
    {
      "path": "/me/agreements/{id}/accept",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Accept this contract"
        }
      ],
      "description": "accept operations"
    },
    {
      "path": "/me/agreements/{id}/contract",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "agreements.Contract",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Contract of service"
    },
    {
      "path": "/me/api/application",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of your Api Application"
        }
      ],
      "description": "List the api.Application objects"
    },
    {
      "path": "/me/api/application/{applicationId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "applicationId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Application ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Remove this application. It will revoke all credential belonging to this application."
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "applicationId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Application ID"
            }
          ],
          "responseType": "api.Application",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "API Application"
    },
    {
      "path": "/me/api/credential",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "applicationId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of applicationId property (like)"
            },
            {
              "name": "status",
              "dataType": "auth.CredentialStateEnum",
              "paramType": "query",
              "fullType": "auth.CredentialStateEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of your Api Credentials"
        }
      ],
      "description": "List the api.Credential objects"
    },
    {
      "path": "/me/api/credential/{credentialId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "credentialId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Credential ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Remove this credential"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "credentialId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Credential ID"
            }
          ],
          "responseType": "api.Credential",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "api.Credential",
              "paramType": "body",
              "fullType": "api.Credential",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "credentialId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Credential ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "API Credential"
    },
    {
      "path": "/me/api/credential/{credentialId}/application",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "credentialId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Credential ID"
            }
          ],
          "responseType": "api.Application",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "API Application"
    },
    {
      "path": "/me/api/logs/self",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of Api calls done with your account"
        }
      ],
      "description": "List the api.Log objects"
    },
    {
      "path": "/me/api/logs/self/{logId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "logId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Log ID"
            }
          ],
          "responseType": "api.Log",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "API Log"
    },
    {
      "path": "/me/api/logs/services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of Api calls done on services you have access to"
        }
      ],
      "description": "List the api.Log objects"
    },
    {
      "path": "/me/api/logs/services/{logId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "logId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Log ID"
            }
          ],
          "responseType": "api.Log",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "API Log"
    },
    {
      "path": "/me/autorenew",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "nichandle.NicAutorenewInfos",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "renewDay",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Day of autorenew"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Activate auto renew for this nic"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "nichandle.NicAutorenewInfos",
              "paramType": "body",
              "fullType": "nichandle.NicAutorenewInfos",
              "required": true,
              "description": "Request Body"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Auto renewal information"
    },
    {
      "path": "/me/availableAutomaticPaymentMeans",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "billing.AutomaticPaymentMean",
          "noAuthentication": false,
          "description": "List available payment methods in this Nic's country"
        }
      ],
      "description": "availableAutomaticPaymentMeans operations"
    },
    {
      "path": "/me/bill",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of orderId property (=)"
            },
            {
              "name": "category",
              "dataType": "billing.CategoryEnum",
              "paramType": "query",
              "fullType": "billing.CategoryEnum",
              "required": false,
              "description": "Filter the value of category property (=)"
            },
            {
              "name": "date.from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of date property (>=)"
            },
            {
              "name": "date.to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of date property (<=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of all the bills the logged account has"
        }
      ],
      "description": "List the billing.Bill objects"
    },
    {
      "path": "/me/bill/export",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "startDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "Start interval of the export"
            },
            {
              "name": "ids",
              "dataType": "string[]",
              "paramType": "body",
              "fullType": "string[]",
              "required": false,
              "description": "A list of ids to export"
            },
            {
              "name": "endDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "End interval of the export"
            },
            {
              "name": "archiveType",
              "dataType": "billing.ArchiveTypeEnum",
              "paramType": "body",
              "fullType": "billing.ArchiveTypeEnum",
              "required": true,
              "description": "The file type of the archive"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Exports a bundle of invoices"
        }
      ],
      "description": "Exports a bundle of invoices"
    },
    {
      "path": "/me/bill/{billId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "billId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill ID"
            }
          ],
          "responseType": "billing.Bill",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Details about a Bill"
    },
    {
      "path": "/me/bill/{billId}/debt",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "billId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill ID"
            }
          ],
          "responseType": "debt.Debt",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "State of a debt"
    },
    {
      "path": "/me/bill/{billId}/debt/operation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "billId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill ID"
            },
            {
              "name": "depositOrderId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of depositOrderId property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "All operations related to these debts"
        }
      ],
      "description": "List the debt.Operation objects"
    },
    {
      "path": "/me/bill/{billId}/debt/operation/{operationId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "billId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill ID"
            },
            {
              "name": "operationId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Operation ID"
            }
          ],
          "responseType": "debt.Operation",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Operation that happend on a debt"
    },
    {
      "path": "/me/bill/{billId}/debt/operation/{operationId}/associatedObject",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "billId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill ID"
            },
            {
              "name": "operationId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Operation ID"
            }
          ],
          "responseType": "debt.entry.AssociatedObject",
          "noAuthentication": false,
          "description": "Return main data about the object related to this debt operation"
        }
      ],
      "description": "associatedObject operations"
    },
    {
      "path": "/me/bill/{billId}/debt/pay",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "billId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill ID"
            }
          ],
          "responseType": "billing.Order",
          "noAuthentication": false,
          "description": "Create an order in order to pay this order's debt"
        }
      ],
      "description": "pay operations"
    },
    {
      "path": "/me/bill/{billId}/details",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "billId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill ID"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Give access to all entries of the bill"
        }
      ],
      "description": "List the billing.BillDetail objects"
    },
    {
      "path": "/me/bill/{billId}/details/{billDetailId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "billId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill ID"
            },
            {
              "name": "billDetailId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill detail ID"
            }
          ],
          "responseType": "billing.BillDetail",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Information about a Bill entry"
    },
    {
      "path": "/me/bill/{billId}/payment",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "billId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill ID"
            }
          ],
          "responseType": "billing.Payment",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Details about a payment"
    },
    {
      "path": "/me/billing/invoicesByPostalMail",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "boolean",
          "noAuthentication": false,
          "description": "Send invoices through postal mail"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "enable",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Send invoices through postal mail"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Enable or disable invoices by postal mail"
        }
      ],
      "description": "invoicesByPostalMail operations"
    },
    {
      "path": "/me/certificates",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Certificate definition name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get all certificates of the account"
        }
      ],
      "description": "Get all certificates of the account"
    },
    {
      "path": "/me/changeEmail",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "newEmail",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "New email to associate to your account"
            }
          ],
          "responseType": "nichandle.emailChange.Task",
          "noAuthentication": false,
          "description": "Initiate an email change procedure"
        }
      ],
      "description": "changeEmail operations"
    },
    {
      "path": "/me/changePassword",
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
          "description": "Initiate a password change procedure"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/me/consent",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "me.consent.Campaign[]",
          "noAuthentication": false,
          "description": "List all consent campaign available"
        }
      ],
      "description": "List all consent campaign available"
    },
    {
      "path": "/me/consent/{campaignName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "campaignName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Campaign name"
            }
          ],
          "responseType": "me.consent.Campaign",
          "noAuthentication": false,
          "description": "Retrieve information about a consent campaign"
        }
      ],
      "description": "Retrieve information about a consent campaign"
    },
    {
      "path": "/me/consent/{campaignName}/decision",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "campaignName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Campaign name"
            }
          ],
          "responseType": "me.consent.Consent",
          "noAuthentication": false,
          "description": "Get decision value for a consent campaign"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "value",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Decision value"
            },
            {
              "name": "campaignName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Campaign name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Update decision of a consent campaign"
        }
      ],
      "description": "Get decision value for a consent campaign"
    },
    {
      "path": "/me/contact",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Retrieve all contact that you created"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "address",
              "dataType": "contact.Address",
              "paramType": "body",
              "fullType": "contact.Address",
              "required": true,
              "description": "Address of the contact"
            },
            {
              "name": "birthCity",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "City of birth"
            },
            {
              "name": "birthZip",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Birth Zipcode"
            },
            {
              "name": "birthCountry",
              "dataType": "nichandle.CountryEnum",
              "paramType": "body",
              "fullType": "nichandle.CountryEnum",
              "required": false,
              "description": "Birth Country"
            },
            {
              "name": "organisationName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Name of your organisation"
            },
            {
              "name": "gender",
              "dataType": "nichandle.GenderEnum",
              "paramType": "body",
              "fullType": "nichandle.GenderEnum",
              "required": false,
              "description": "Gender"
            },
            {
              "name": "lastName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Last name"
            },
            {
              "name": "cellPhone",
              "dataType": "phoneNumber",
              "paramType": "body",
              "fullType": "phoneNumber",
              "required": false,
              "description": "Cellphone number"
            },
            {
              "name": "fax",
              "dataType": "phoneNumber",
              "paramType": "body",
              "fullType": "phoneNumber",
              "required": false,
              "description": "Fax phone number"
            },
            {
              "name": "birthDay",
              "dataType": "date",
              "paramType": "body",
              "fullType": "date",
              "required": false,
              "description": "Birthday date"
            },
            {
              "name": "nationality",
              "dataType": "nichandle.CountryEnum",
              "paramType": "body",
              "fullType": "nichandle.CountryEnum",
              "required": false,
              "description": "Nationality"
            },
            {
              "name": "nationalIdentificationNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "National identification number"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Email address"
            },
            {
              "name": "language",
              "dataType": "nichandle.LanguageEnum",
              "paramType": "body",
              "fullType": "nichandle.LanguageEnum",
              "required": true,
              "description": "Language"
            },
            {
              "name": "organisationType",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Type of your organisation"
            },
            {
              "name": "firstName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "First name"
            },
            {
              "name": "legalForm",
              "dataType": "nichandle.LegalFormEnum",
              "paramType": "body",
              "fullType": "nichandle.LegalFormEnum",
              "required": true,
              "description": "Legal form of the contact"
            },
            {
              "name": "phone",
              "dataType": "phoneNumber",
              "paramType": "body",
              "fullType": "phoneNumber",
              "required": true,
              "description": "Landline phone number"
            },
            {
              "name": "vat",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "VAT number"
            },
            {
              "name": "companyNationalIdentificationNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company national identification number"
            }
          ],
          "responseType": "contact.Contact",
          "noAuthentication": false,
          "description": "Create a new contact"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/me/contact/{contactId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "contactId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Contact ID"
            }
          ],
          "responseType": "contact.Contact",
          "noAuthentication": false,
          "description": "Retrieve information about a contact"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "birthCity",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "City of birth"
            },
            {
              "name": "vat",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "VAT number"
            },
            {
              "name": "legalForm",
              "dataType": "nichandle.LegalFormEnum",
              "paramType": "body",
              "fullType": "nichandle.LegalFormEnum",
              "required": false,
              "description": "Legal form of the contact"
            },
            {
              "name": "cellPhone",
              "dataType": "phoneNumber",
              "paramType": "body",
              "fullType": "phoneNumber",
              "required": false,
              "description": "Cellphone number"
            },
            {
              "name": "fax",
              "dataType": "phoneNumber",
              "paramType": "body",
              "fullType": "phoneNumber",
              "required": false,
              "description": "Fax phone number"
            },
            {
              "name": "birthDay",
              "dataType": "date",
              "paramType": "body",
              "fullType": "date",
              "required": false,
              "description": "Birthday date"
            },
            {
              "name": "gender",
              "dataType": "nichandle.GenderEnum",
              "paramType": "body",
              "fullType": "nichandle.GenderEnum",
              "required": false,
              "description": "Gender"
            },
            {
              "name": "nationality",
              "dataType": "nichandle.CountryEnum",
              "paramType": "body",
              "fullType": "nichandle.CountryEnum",
              "required": false,
              "description": "Nationality"
            },
            {
              "name": "address",
              "dataType": "contact.Address",
              "paramType": "body",
              "fullType": "contact.Address",
              "required": false,
              "description": "Address of the contact"
            },
            {
              "name": "birthZip",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Birth Zipcode"
            },
            {
              "name": "organisationType",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Type of your organisation"
            },
            {
              "name": "organisationName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Name of your organisation"
            },
            {
              "name": "firstName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "First name"
            },
            {
              "name": "lastName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Last name"
            },
            {
              "name": "phone",
              "dataType": "phoneNumber",
              "paramType": "body",
              "fullType": "phoneNumber",
              "required": false,
              "description": "Landline phone number"
            },
            {
              "name": "birthCountry",
              "dataType": "nichandle.CountryEnum",
              "paramType": "body",
              "fullType": "nichandle.CountryEnum",
              "required": false,
              "description": "Birth Country"
            },
            {
              "name": "companyNationalIdentificationNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company national identification number"
            },
            {
              "name": "nationalIdentificationNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "National identification number"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Email address"
            },
            {
              "name": "language",
              "dataType": "nichandle.LanguageEnum",
              "paramType": "body",
              "fullType": "nichandle.LanguageEnum",
              "required": false,
              "description": "Language"
            },
            {
              "name": "contactId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Contact ID"
            }
          ],
          "responseType": "contact.Contact",
          "noAuthentication": false,
          "description": "Update an existing contact"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/me/contact/{contactId}/fields",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "contactId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Contact ID"
            }
          ],
          "responseType": "contact.FieldInformation[]",
          "noAuthentication": false,
          "description": "Display mandatory/read-only informations of a contact"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/me/debtAccount",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "debt.Balance",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Debt balance of the account"
    },
    {
      "path": "/me/debtAccount/debt",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "All debts related to your account"
        }
      ],
      "description": "List the debt.Debt objects"
    },
    {
      "path": "/me/debtAccount/debt/{debtId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "debtId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Debt ID"
            }
          ],
          "responseType": "debt.Debt",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "State of a debt"
    },
    {
      "path": "/me/debtAccount/debt/{debtId}/operation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "debtId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Debt ID"
            },
            {
              "name": "depositOrderId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of depositOrderId property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "All operations related to these debts"
        }
      ],
      "description": "List the debt.Operation objects"
    },
    {
      "path": "/me/debtAccount/debt/{debtId}/operation/{operationId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "debtId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Debt ID"
            },
            {
              "name": "operationId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Operation ID"
            }
          ],
          "responseType": "debt.Operation",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Operation that happend on a debt"
    },
    {
      "path": "/me/debtAccount/debt/{debtId}/operation/{operationId}/associatedObject",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "debtId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Debt ID"
            },
            {
              "name": "operationId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Operation ID"
            }
          ],
          "responseType": "debt.entry.AssociatedObject",
          "noAuthentication": false,
          "description": "Return main data about the object related to this debt operation"
        }
      ],
      "description": "associatedObject operations"
    },
    {
      "path": "/me/debtAccount/debt/{debtId}/pay",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "debtId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Debt ID"
            }
          ],
          "responseType": "billing.Order",
          "noAuthentication": false,
          "description": "Create an order in order to pay this order's debt"
        }
      ],
      "description": "pay operations"
    },
    {
      "path": "/me/debtAccount/pay",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [],
          "responseType": "billing.Order",
          "noAuthentication": false,
          "description": "Create an order in order to pay all your due debts"
        }
      ],
      "description": "pay operations"
    },
    {
      "path": "/me/deposit",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of orderId property (=)"
            },
            {
              "name": "date.from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of date property (>=)"
            },
            {
              "name": "date.to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of date property (<=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of all the deposits made to your prepaid account or debt account"
        }
      ],
      "description": "List the billing.Deposit objects"
    },
    {
      "path": "/me/deposit/{depositId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "depositId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Deposit ID"
            }
          ],
          "responseType": "billing.Deposit",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Details about a deposit"
    },
    {
      "path": "/me/deposit/{depositId}/details",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "depositId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Deposit ID"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Give access to all entries of this deposit"
        }
      ],
      "description": "List the billing.DepositDetail objects"
    },
    {
      "path": "/me/deposit/{depositId}/details/{depositDetailId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "depositDetailId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Deposit detail ID"
            },
            {
              "name": "depositId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Deposit ID"
            }
          ],
          "responseType": "billing.DepositDetail",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Information about a Deposit entry"
    },
    {
      "path": "/me/deposit/{depositId}/paidBills",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "depositId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Deposit ID"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get invoices paid by this deposit"
        }
      ],
      "description": "List the billing.Bill objects"
    },
    {
      "path": "/me/deposit/{depositId}/paidBills/{billId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "depositId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Deposit ID"
            },
            {
              "name": "billId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill ID"
            }
          ],
          "responseType": "billing.Bill",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Details about a Bill"
    },
    {
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "depositId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Deposit ID"
            },
            {
              "name": "billId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill ID"
            }
          ],
          "responseType": "debt.Debt",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "State of a debt"
    },
    {
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt/operation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "billId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill ID"
            },
            {
              "name": "depositId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Deposit ID"
            },
            {
              "name": "depositOrderId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of depositOrderId property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "All operations related to these debts"
        }
      ],
      "description": "List the debt.Operation objects"
    },
    {
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "depositId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Deposit ID"
            },
            {
              "name": "billId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill ID"
            },
            {
              "name": "operationId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Operation ID"
            }
          ],
          "responseType": "debt.Operation",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Operation that happend on a debt"
    },
    {
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}/associatedObject",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "billId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill ID"
            },
            {
              "name": "operationId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Operation ID"
            },
            {
              "name": "depositId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Deposit ID"
            }
          ],
          "responseType": "debt.entry.AssociatedObject",
          "noAuthentication": false,
          "description": "Return main data about the object related to this debt operation"
        }
      ],
      "description": "associatedObject operations"
    },
    {
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt/pay",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "depositId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Deposit ID"
            },
            {
              "name": "billId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill ID"
            }
          ],
          "responseType": "billing.Order",
          "noAuthentication": false,
          "description": "Create an order in order to pay this order's debt"
        }
      ],
      "description": "pay operations"
    },
    {
      "path": "/me/deposit/{depositId}/paidBills/{billId}/details",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "billId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill ID"
            },
            {
              "name": "depositId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Deposit ID"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Give access to all entries of the bill"
        }
      ],
      "description": "List the billing.BillDetail objects"
    },
    {
      "path": "/me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "depositId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Deposit ID"
            },
            {
              "name": "billId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill ID"
            },
            {
              "name": "billDetailId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill detail ID"
            }
          ],
          "responseType": "billing.BillDetail",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Information about a Bill entry"
    },
    {
      "path": "/me/deposit/{depositId}/paidBills/{billId}/payment",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "depositId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Deposit ID"
            },
            {
              "name": "billId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Bill ID"
            }
          ],
          "responseType": "billing.Payment",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Details about a payment"
    },
    {
      "path": "/me/deposit/{depositId}/payment",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "depositId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Deposit ID"
            }
          ],
          "responseType": "billing.Payment",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Details about a payment"
    },
    {
      "path": "/me/document",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of documents added in your account"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "File name"
            },
            {
              "name": "tags",
              "dataType": "complexType.SafeKeyValue<string>[]",
              "paramType": "body",
              "fullType": "complexType.SafeKeyValue<string>[]",
              "required": false,
              "description": "File tags"
            }
          ],
          "responseType": "nichandle.document.Document",
          "noAuthentication": false,
          "description": "Create new document"
        }
      ],
      "description": "List the nichandle.document.Document objects"
    },
    {
      "path": "/me/document/cors",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "origin",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Allow this origin"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Add CORS support on your container"
        }
      ],
      "description": "Add CORS support on your container"
    },
    {
      "path": "/me/document/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "id",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a document"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "nichandle.document.Document",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "nichandle.document.Document",
              "paramType": "body",
              "fullType": "nichandle.document.Document",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "id",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "List of documents added on your account"
    },
    {
      "path": "/me/fax/customDomains",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Get the fax custom domains linked to the customer account"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The custom domain of your fax services"
            }
          ],
          "responseType": "telephony.MailDomain2Service",
          "noAuthentication": false,
          "description": "Create a custom domain for your fax services"
        }
      ],
      "description": "List the telephony.MailDomain2Service objects"
    },
    {
      "path": "/me/fax/customDomains/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a custom domain of your fax services"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "telephony.MailDomain2Service",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Custom domains of your fax services"
    },
    {
      "path": "/me/fidelityAccount",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "billing.FidelityAccount",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "billing.FidelityAccount",
              "paramType": "body",
              "fullType": "billing.FidelityAccount",
              "required": true,
              "description": "Request Body"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Balance of the fidelity account"
    },
    {
      "path": "/me/fidelityAccount/creditOrder",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "amount",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "The amount of points you want to credit your fidelity account of"
            }
          ],
          "responseType": "billing.Order",
          "noAuthentication": false,
          "description": "Generate an order that can be paid in order to credit the fidelity account"
        }
      ],
      "description": "creditOrder operations"
    },
    {
      "path": "/me/fidelityAccount/movements",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "date.to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of date property (<=)"
            },
            {
              "name": "date.from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of date property (>=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of entries of the fidelity account"
        }
      ],
      "description": "List the billing.FidelityMovement objects"
    },
    {
      "path": "/me/fidelityAccount/movements/{movementId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "movementId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Movement ID"
            }
          ],
          "responseType": "billing.FidelityMovement",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Details about a fidelity account"
    },
    {
      "path": "/me/geolocation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [],
          "responseType": "geolocation.ContinentCountryLocation",
          "noAuthentication": true,
          "description": "Fetch visitor country & region"
        }
      ],
      "description": "Route for getting visitor's country and continent"
    },
    {
      "path": "/me/identity/group",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Retrieve all groups of this account"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Group's name"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Group's description"
            },
            {
              "name": "role",
              "dataType": "nichandle.RoleEnum",
              "paramType": "body",
              "fullType": "nichandle.RoleEnum",
              "required": false,
              "description": "Group's Role"
            }
          ],
          "responseType": "nichandle.Authentication.Group",
          "noAuthentication": false,
          "description": "Create a new group"
        }
      ],
      "description": "Groups linked to this account"
    },
    {
      "path": "/me/identity/group/{group}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "group",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Group"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete this object"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "group",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Group"
            }
          ],
          "responseType": "nichandle.Authentication.Group",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "role",
              "dataType": "nichandle.RoleEnum",
              "paramType": "body",
              "fullType": "nichandle.RoleEnum",
              "required": false,
              "description": "Group's role"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Group's description"
            },
            {
              "name": "group",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Group"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter a group"
        }
      ],
      "description": "A group linked to this account"
    },
    {
      "path": "/me/identity/user",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Retrieve all users of this account"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "group",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "User's group"
            },
            {
              "name": "login",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "User's login"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "User's description"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "User's email"
            },
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "User's password"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Create a new user"
        }
      ],
      "description": "Users linked to this account"
    },
    {
      "path": "/me/identity/user/{user}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "user",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete this object"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "user",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User"
            }
          ],
          "responseType": "nichandle.User",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "User's email"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "User's description"
            },
            {
              "name": "group",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "User's group"
            },
            {
              "name": "user",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter a user"
        }
      ],
      "description": "A user linked to this account"
    },
    {
      "path": "/me/identity/user/{user}/disable",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "user",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Disable this user"
        }
      ],
      "description": "A user linked to this account"
    },
    {
      "path": "/me/identity/user/{user}/enable",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "user",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Enable this user"
        }
      ],
      "description": "A user linked to this account"
    },
    {
      "path": "/me/installationTemplate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Your customized operating system installation templates"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Your template name"
            },
            {
              "name": "baseTemplateName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "OVH template name yours will be based on, choose one among the list given by compatibleTemplates function"
            },
            {
              "name": "defaultLanguage",
              "dataType": "dedicated.TemplateOsLanguageEnum",
              "paramType": "body",
              "fullType": "dedicated.TemplateOsLanguageEnum",
              "required": true,
              "description": ""
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Create a template"
        }
      ],
      "description": "List the dedicated.installationTemplate.Templates objects"
    },
    {
      "path": "/me/installationTemplate/{templateName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "remove this template"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            }
          ],
          "responseType": "dedicated.installationTemplate.Templates",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dedicated.installationTemplate.Templates",
              "paramType": "body",
              "fullType": "dedicated.installationTemplate.Templates",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Available installation templates"
    },
    {
      "path": "/me/installationTemplate/{templateName}/checkIntegrity",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Check the integrity of this template"
        }
      ],
      "description": "checkIntegrity operations"
    },
    {
      "path": "/me/installationTemplate/{templateName}/partitionScheme",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Partitioning schemes available on this template"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "name of this partitioning scheme"
            },
            {
              "name": "priority",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications)"
            },
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Add a scheme of partition"
        }
      ],
      "description": "List the dedicated.installationTemplate.templatePartitioningSchemes objects"
    },
    {
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Scheme name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "remove this scheme of partition"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Scheme name"
            }
          ],
          "responseType": "dedicated.installationTemplate.templatePartitioningSchemes",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dedicated.installationTemplate.templatePartitioningSchemes",
              "paramType": "body",
              "fullType": "dedicated.installationTemplate.templatePartitioningSchemes",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Scheme name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Partitioning schemes available on this template"
    },
    {
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Scheme name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Hardware RAIDs defined in this partitioning scheme"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "step",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Specifies the creation order of the hardware RAID"
            },
            {
              "name": "mode",
              "dataType": "dedicated.TemplateOsHardwareRaidEnum",
              "paramType": "body",
              "fullType": "dedicated.TemplateOsHardwareRaidEnum",
              "required": true,
              "description": "RAID mode"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Hardware RAID name"
            },
            {
              "name": "disks",
              "dataType": "string[]",
              "paramType": "body",
              "fullType": "string[]",
              "required": true,
              "description": "Disk list. Syntax is cX:dY for disks and [cX:dY, cX:dY] for groups. With X and Y resp. the controler id and the disk id."
            },
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Scheme name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Add an hardware RAID in this partitioning scheme"
        }
      ],
      "description": "List the dedicated.installationTemplate.hardwareRaid objects"
    },
    {
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Scheme name"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Remove this RAID"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Scheme name"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "dedicated.installationTemplate.hardwareRaid",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dedicated.installationTemplate.hardwareRaid",
              "paramType": "body",
              "fullType": "dedicated.installationTemplate.hardwareRaid",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Scheme name"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Hardware RAID defined in this partitioning scheme"
    },
    {
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Scheme name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Partitions defined in this partitioning scheme"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "volumeName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The volume name needed for proxmox distribution"
            },
            {
              "name": "raid",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": ""
            },
            {
              "name": "size",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "size of partition in Mb, 0 => rest of the space"
            },
            {
              "name": "type",
              "dataType": "dedicated.TemplatePartitionTypeEnum",
              "paramType": "body",
              "fullType": "dedicated.TemplatePartitionTypeEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "step",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": ""
            },
            {
              "name": "filesystem",
              "dataType": "dedicated.TemplateOsFileSystemEnum",
              "paramType": "body",
              "fullType": "dedicated.TemplateOsFileSystemEnum",
              "required": true,
              "description": "Partition filesytem"
            },
            {
              "name": "mountpoint",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "partition mount point"
            },
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Scheme name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Add a partition in this partitioning scheme"
        }
      ],
      "description": "List the dedicated.installationTemplate.templatePartitions objects"
    },
    {
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "mountpoint",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mountpoint"
            },
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Scheme name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "remove this partition"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Scheme name"
            },
            {
              "name": "mountpoint",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mountpoint"
            }
          ],
          "responseType": "dedicated.installationTemplate.templatePartitions",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dedicated.installationTemplate.templatePartitions",
              "paramType": "body",
              "fullType": "dedicated.installationTemplate.templatePartitions",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Scheme name"
            },
            {
              "name": "mountpoint",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mountpoint"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": " Partitions defined in this partitioning scheme"
    },
    {
      "path": "/me/ipOrganisation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of organisations"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "state",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "zip",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": ""
            },
            {
              "name": "city",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": ""
            },
            {
              "name": "firstname",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": ""
            },
            {
              "name": "address",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": ""
            },
            {
              "name": "registry",
              "dataType": "nichandle.IpRegistryEnum",
              "paramType": "body",
              "fullType": "nichandle.IpRegistryEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "lastname",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": ""
            },
            {
              "name": "country",
              "dataType": "nichandle.CountryEnum",
              "paramType": "body",
              "fullType": "nichandle.CountryEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "abuse_mailbox",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": ""
            },
            {
              "name": "phone",
              "dataType": "phoneNumber",
              "paramType": "body",
              "fullType": "phoneNumber",
              "required": true,
              "description": ""
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Add an organisation"
        }
      ],
      "description": "List the nichandle.Ipv4Org objects"
    },
    {
      "path": "/me/ipOrganisation/{organisationId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "organisationId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organisation ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete this organisation"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organisationId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organisation ID"
            }
          ],
          "responseType": "nichandle.Ipv4Org",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "nichandle.Ipv4Org",
              "paramType": "body",
              "fullType": "nichandle.Ipv4Org",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "organisationId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organisation ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Details about an IP block organisation"
    },
    {
      "path": "/me/ipxeScript",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of all your IPXE scripts"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "script",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "Content of your IPXE script"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "A personnal description of this script"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "name of your script"
            }
          ],
          "responseType": "nichandle.ipxe",
          "noAuthentication": false,
          "description": "Add an IPXE script"
        }
      ],
      "description": "List the nichandle.ipxe objects"
    },
    {
      "path": "/me/ipxeScript/{name}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Remove this IPXE Script"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "nichandle.ipxe",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Customer IPXE scripts"
    },
    {
      "path": "/me/mailingList/availableLists",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of mailing list you can subscribe"
        }
      ],
      "description": "availableLists operations"
    },
    {
      "path": "/me/mailingList/subscribe",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Email you want to subscribe to"
            },
            {
              "name": "mailingList",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Mailing list"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Subscribe an email to a restricted mailing list"
        }
      ],
      "description": "subscribe operations"
    },
    {
      "path": "/me/notification/email/history",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of all your email notifications"
        }
      ],
      "description": "List the nichandle.emailNotification objects"
    },
    {
      "path": "/me/notification/email/history/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "nichandle.emailNotification",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Email notification"
    },
    {
      "path": "/me/order",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "date.from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of date property (>=)"
            },
            {
              "name": "date.to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of date property (<=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of all the orders the logged account has"
        }
      ],
      "description": "List the billing.Order objects"
    },
    {
      "path": "/me/order/{orderId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            }
          ],
          "responseType": "billing.Order",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Details about an Order"
    },
    {
      "path": "/me/order/{orderId}/associatedObject",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            }
          ],
          "responseType": "billing.order.AssociatedObject",
          "noAuthentication": false,
          "description": "Return main data about the object the processing of the order generated"
        }
      ],
      "description": "associatedObject operations"
    },
    {
      "path": "/me/order/{orderId}/availableRegisteredPaymentMean",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            }
          ],
          "responseType": "billing.order.RegisteredPaymentMean[]",
          "noAuthentication": false,
          "description": "List of registered payment mean you can use to pay this order"
        }
      ],
      "description": "availableRegisteredPaymentMean operations"
    },
    {
      "path": "/me/order/{orderId}/bill",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            }
          ],
          "responseType": "billing.Bill",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Details about a Bill"
    },
    {
      "path": "/me/order/{orderId}/consumption/details",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            },
            {
              "name": "fileFormat",
              "dataType": "consumption.ConsumptionExportFormatsEnum",
              "paramType": "query",
              "fullType": "consumption.ConsumptionExportFormatsEnum",
              "required": true,
              "description": "Format of the file"
            }
          ],
          "responseType": "billing.order.ConsumptionDetails",
          "noAuthentication": false,
          "description": "Retrieve order's detailed consumption information as a file"
        }
      ],
      "description": "details operations"
    },
    {
      "path": "/me/order/{orderId}/debt",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            }
          ],
          "responseType": "debt.Debt",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "State of a debt"
    },
    {
      "path": "/me/order/{orderId}/debt/operation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            },
            {
              "name": "depositOrderId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of depositOrderId property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "All operations related to these debts"
        }
      ],
      "description": "List the debt.Operation objects"
    },
    {
      "path": "/me/order/{orderId}/debt/operation/{operationId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            },
            {
              "name": "operationId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Operation ID"
            }
          ],
          "responseType": "debt.Operation",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Operation that happend on a debt"
    },
    {
      "path": "/me/order/{orderId}/debt/operation/{operationId}/associatedObject",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            },
            {
              "name": "operationId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Operation ID"
            }
          ],
          "responseType": "debt.entry.AssociatedObject",
          "noAuthentication": false,
          "description": "Return main data about the object related to this debt operation"
        }
      ],
      "description": "associatedObject operations"
    },
    {
      "path": "/me/order/{orderId}/debt/pay",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            }
          ],
          "responseType": "billing.Order",
          "noAuthentication": false,
          "description": "Create an order in order to pay this order's debt"
        }
      ],
      "description": "pay operations"
    },
    {
      "path": "/me/order/{orderId}/details",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Give access to all entries of the order"
        }
      ],
      "description": "List the billing.OrderDetail objects"
    },
    {
      "path": "/me/order/{orderId}/details/{orderDetailId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            },
            {
              "name": "orderDetailId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order detail ID"
            }
          ],
          "responseType": "billing.OrderDetail",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Information about a Bill entry"
    },
    {
      "path": "/me/order/{orderId}/details/{orderDetailId}/extension",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            },
            {
              "name": "orderDetailId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order detail ID"
            }
          ],
          "responseType": "billing.ItemDetail",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Extensions of a detail"
    },
    {
      "path": "/me/order/{orderId}/followUp",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            }
          ],
          "responseType": "billing.order.FollowUp[]",
          "noAuthentication": false,
          "description": "Return tracking of the order"
        }
      ],
      "description": "followUp operations"
    },
    {
      "path": "/me/order/{orderId}/pay",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "paymentMethod",
              "dataType": "billing.order.PayWithPaymentMethod",
              "paramType": "body",
              "fullType": "billing.order.PayWithPaymentMethod",
              "required": true,
              "description": "Payment method informations for pay"
            },
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Pay with a payment method reference"
        }
      ],
      "description": "pay operations"
    },
    {
      "path": "/me/order/{orderId}/payWithRegisteredPaymentMean",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "paymentMean",
              "dataType": "billing.ReusablePaymentMeanEnum",
              "paramType": "body",
              "fullType": "billing.ReusablePaymentMeanEnum",
              "required": true,
              "description": "The registered payment mean you want to use"
            },
            {
              "name": "paymentMeanId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Id of registered payment mean, mandatory for bankAccount, creditCard and paypal"
            },
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Pay with an already registered payment mean"
        }
      ],
      "description": "payWithRegisteredPaymentMean operations"
    },
    {
      "path": "/me/order/{orderId}/payment",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            }
          ],
          "responseType": "billing.Payment",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Details about a payment"
    },
    {
      "path": "/me/order/{orderId}/paymentMeans",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            }
          ],
          "responseType": "billing.order.PaymentMeans",
          "noAuthentication": false,
          "description": "Return main data about the object the processing of the order generated"
        }
      ],
      "description": "paymentMeans operations"
    },
    {
      "path": "/me/order/{orderId}/paymentMethods",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            }
          ],
          "responseType": "billing.order.PaymentMethods",
          "noAuthentication": false,
          "description": "List of registered payment method you can use to pay this order"
        }
      ],
      "description": "paymentMethods operations"
    },
    {
      "path": "/me/order/{orderId}/refund",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            }
          ],
          "responseType": "billing.Refund",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Details about a Refund"
    },
    {
      "path": "/me/order/{orderId}/retraction",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "reason",
              "dataType": "billing.order.RetractionReasonEnum",
              "paramType": "body",
              "fullType": "billing.order.RetractionReasonEnum",
              "required": true,
              "description": "The reason why you want to retract"
            },
            {
              "name": "comment",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": false,
              "description": "An optional comment of why you want to retract"
            },
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Request retraction of order"
        }
      ],
      "description": "retraction operations"
    },
    {
      "path": "/me/order/{orderId}/status",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Order ID"
            }
          ],
          "responseType": "billing.order.OrderStatusEnum",
          "noAuthentication": false,
          "description": "Return status of order"
        }
      ],
      "description": "status operations"
    },
    {
      "path": "/me/ovhAccount",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of OVH accounts the logged account has"
        }
      ],
      "description": "List the billing.OvhAccount objects"
    },
    {
      "path": "/me/ovhAccount/{ovhAccountId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhAccountId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Ovh account ID"
            }
          ],
          "responseType": "billing.OvhAccount",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "billing.OvhAccount",
              "paramType": "body",
              "fullType": "billing.OvhAccount",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "ovhAccountId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Ovh account ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Details about an OVH account"
    },
    {
      "path": "/me/ovhAccount/{ovhAccountId}/creditOrder",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "amount",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "The amount in cents you want to credit your account of"
            },
            {
              "name": "ovhAccountId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Ovh account ID"
            }
          ],
          "responseType": "billing.Order",
          "noAuthentication": false,
          "description": "Generate an order that can be paid in order to credit the OVH account"
        }
      ],
      "description": "creditOrder operations"
    },
    {
      "path": "/me/ovhAccount/{ovhAccountId}/movements",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhAccountId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Ovh account ID"
            },
            {
              "name": "date.from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of date property (>=)"
            },
            {
              "name": "date.to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of date property (<=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Details about an entry of the OVH account"
        }
      ],
      "description": "List the billing.Movement objects"
    },
    {
      "path": "/me/ovhAccount/{ovhAccountId}/movements/{movementId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhAccountId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Ovh account ID"
            },
            {
              "name": "movementId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Movement ID"
            }
          ],
          "responseType": "billing.Movement",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Details about an OVH account"
    },
    {
      "path": "/me/ovhAccount/{ovhAccountId}/retrieveMoney",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "amount",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "The amount in cents you want to transfer"
            },
            {
              "name": "bankAccountId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "A valid bank account"
            },
            {
              "name": "ovhAccountId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Ovh account ID"
            }
          ],
          "responseType": "billing.Order",
          "noAuthentication": false,
          "description": "Transfer money from ovhAccount to your bank account"
        }
      ],
      "description": "retrieveMoney operations"
    },
    {
      "path": "/me/passwordRecover",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ovhId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Your OVH Account Id"
            },
            {
              "name": "ovhCompany",
              "dataType": "nichandle.OvhCompanyEnum",
              "paramType": "body",
              "fullType": "nichandle.OvhCompanyEnum",
              "required": true,
              "description": "Company of your OVH Account Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": true,
          "description": "Request a password recover"
        }
      ],
      "description": "Request a password recover"
    },
    {
      "path": "/me/payment/availableMethods",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "me.payment.method.AvailablePaymentMethod[]",
          "noAuthentication": false,
          "description": "Retrieve available payment method"
        }
      ],
      "description": "Available payment methods"
    },
    {
      "path": "/me/payment/method",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "status",
              "dataType": "me.payment.method.PaymentMethod.Status",
              "paramType": "query",
              "fullType": "me.payment.method.PaymentMethod.Status",
              "required": false,
              "description": "Status"
            },
            {
              "name": "paymentType",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Payment method type"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Retrieve payment method ID list"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "paymentType",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Payment type"
            },
            {
              "name": "register",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Register this payment method if it's possible (by default it's false and do a oneshot transaction)"
            },
            {
              "name": "callbackUrl",
              "dataType": "me.payment.method.CallbackUrl",
              "paramType": "body",
              "fullType": "me.payment.method.CallbackUrl",
              "required": true,
              "description": "URL's necessary to register"
            },
            {
              "name": "default",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Is this payment method set as the default one"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Customer personalized description"
            },
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "The ID of one order to pay it"
            }
          ],
          "responseType": "me.payment.method.Register.ValidationResult",
          "noAuthentication": false,
          "description": "Pay an order and register a new payment method if necessary"
        }
      ],
      "description": "Manage payment method"
    },
    {
      "path": "/me/payment/method/{paymentMethodId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "paymentMethodId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Payment method ID"
            }
          ],
          "responseType": "me.payment.method.PaymentMethod",
          "noAuthentication": false,
          "description": "Cancel one payment method"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "paymentMethodId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Payment method ID"
            }
          ],
          "responseType": "me.payment.method.PaymentMethod",
          "noAuthentication": false,
          "description": "Get one payment method"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "default",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Set this method like default"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Customer personalized description"
            },
            {
              "name": "paymentMethodId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Payment method ID"
            }
          ],
          "responseType": "billing.PaymentMethod",
          "noAuthentication": false,
          "description": "Edit payment method"
        }
      ],
      "description": "Manage payment method"
    },
    {
      "path": "/me/payment/method/{paymentMethodId}/challenge",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "challenge",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Challenge"
            },
            {
              "name": "paymentMethodId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Payment method ID"
            }
          ],
          "responseType": "me.payment.method.PaymentMethod",
          "noAuthentication": false,
          "description": "Challenge one payment method"
        }
      ],
      "description": "Challenge your payment method"
    },
    {
      "path": "/me/payment/method/{paymentMethodId}/finalize",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "expirationMonth",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Expiration month"
            },
            {
              "name": "expirationYear",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Expiration year"
            },
            {
              "name": "registrationId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Registration ID"
            },
            {
              "name": "formSessionId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Form Session ID"
            },
            {
              "name": "paymentMethodId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Payment method ID"
            }
          ],
          "responseType": "me.payment.method.PaymentMethod",
          "noAuthentication": false,
          "description": "Finalize one payment method registration"
        }
      ],
      "description": "Finalize one payment method registration"
    },
    {
      "path": "/me/payment/transaction",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "paymentMethodId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Payment method ID"
            },
            {
              "name": "status",
              "dataType": "me.payment.method.Transaction.Status",
              "paramType": "query",
              "fullType": "me.payment.method.Transaction.Status",
              "required": false,
              "description": "Transaction status"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Retrieve associated payment method transaction ID list"
        }
      ],
      "description": "Retrieve payment method transaction ID list"
    },
    {
      "path": "/me/payment/transaction/{transactionId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "transactionId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Transaction ID"
            }
          ],
          "responseType": "me.payment.method.Transaction",
          "noAuthentication": false,
          "description": "Get associated payment method transaction"
        }
      ],
      "description": "Manage payment method transaction"
    },
    {
      "path": "/me/paymentMean/bankAccount",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "state",
              "dataType": "billing.BankAccountStateEnum",
              "paramType": "query",
              "fullType": "billing.BankAccountStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of bank accounts"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "setDefault",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Set as default payment mean once validated"
            },
            {
              "name": "bic",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Account's BIC"
            },
            {
              "name": "ownerName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Account owner's name"
            },
            {
              "name": "iban",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Account's IBAN"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Custom description of this account"
            },
            {
              "name": "ownerAddress",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Account owner's address"
            }
          ],
          "responseType": "billing.PaymentMeanValidation",
          "noAuthentication": false,
          "description": "Enable payment through a new account"
        }
      ],
      "description": "List the billing.BankAccount objects"
    },
    {
      "path": "/me/paymentMean/bankAccount/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Disable payment through this account"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "billing.BankAccount",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "billing.BankAccount",
              "paramType": "body",
              "fullType": "billing.BankAccount",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "SEPA bank account info"
    },
    {
      "path": "/me/paymentMean/bankAccount/{id}/challenge",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "challenge",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Payload to answer the challenge"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Challenge your bank account"
        }
      ],
      "description": "challenge operations"
    },
    {
      "path": "/me/paymentMean/bankAccount/{id}/chooseAsDefaultPaymentMean",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Choose this bank account as your default payment mean. Will cancel the previous choice."
        }
      ],
      "description": "chooseAsDefaultPaymentMean operations"
    },
    {
      "path": "/me/paymentMean/creditCard",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of credit cards"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Custom description of this account"
            },
            {
              "name": "setDefault",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Set as default payment mean once validated"
            },
            {
              "name": "returnUrl",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Callback URL where the customer will be redirected to after validation"
            }
          ],
          "responseType": "billing.PaymentMeanValidation",
          "noAuthentication": false,
          "description": "Add a new credit card"
        }
      ],
      "description": "List the billing.CreditCard objects"
    },
    {
      "path": "/me/paymentMean/creditCard/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Disable payment through this credit card"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "billing.CreditCard",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "billing.CreditCard",
              "paramType": "body",
              "fullType": "billing.CreditCard",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Credit card informations"
    },
    {
      "path": "/me/paymentMean/creditCard/{id}/challenge",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "challenge",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Payload to answer the challenge"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Challenge your bank account"
        }
      ],
      "description": "challenge operations"
    },
    {
      "path": "/me/paymentMean/creditCard/{id}/chooseAsDefaultPaymentMean",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Choose this credit card as your default payment mean. Will cancel the previous choice."
        }
      ],
      "description": "chooseAsDefaultPaymentMean operations"
    },
    {
      "path": "/me/paymentMean/deferredPaymentAccount",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of authorized deferred payment account for this customer"
        }
      ],
      "description": "List the billing.DeferredPaymentAccount objects"
    },
    {
      "path": "/me/paymentMean/deferredPaymentAccount/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "billing.DeferredPaymentAccount",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "billing.DeferredPaymentAccount",
              "paramType": "body",
              "fullType": "billing.DeferredPaymentAccount",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Deferred payment account info"
    },
    {
      "path": "/me/paymentMean/deferredPaymentAccount/{id}/chooseAsDefaultPaymentMean",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Allow you to use deferred payment. Will cancel the previous choice."
        }
      ],
      "description": "chooseAsDefaultPaymentMean operations"
    },
    {
      "path": "/me/paymentMean/paypal",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of Paypal accounts usable for payments on this account"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "returnUrl",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Callback URL where the customer will be redirected to after validation"
            },
            {
              "name": "setDefault",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Set as default payment mean once validated"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Custom description of this account"
            }
          ],
          "responseType": "billing.PaymentMeanValidation",
          "noAuthentication": false,
          "description": "Enable payment through a new PayPal account"
        }
      ],
      "description": "List the billing.Paypal objects"
    },
    {
      "path": "/me/paymentMean/paypal/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Disable payment through this PayPal account"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "billing.Paypal",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "billing.Paypal",
              "paramType": "body",
              "fullType": "billing.Paypal",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Paypal account info"
    },
    {
      "path": "/me/paymentMean/paypal/{id}/challenge",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "challenge",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Payload to answer the challenge"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Challenge your bank account"
        }
      ],
      "description": "challenge operations"
    },
    {
      "path": "/me/paymentMean/paypal/{id}/chooseAsDefaultPaymentMean",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Choose this Paypal agreement as your default payment mean. Will cancel the previous choice."
        }
      ],
      "description": "chooseAsDefaultPaymentMean operations"
    },
    {
      "path": "/me/refund/export",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "archiveType",
              "dataType": "billing.ArchiveTypeEnum",
              "paramType": "body",
              "fullType": "billing.ArchiveTypeEnum",
              "required": true,
              "description": "The file type of the archive"
            },
            {
              "name": "startDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "Start interval of the export"
            },
            {
              "name": "endDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "End interval of the export"
            },
            {
              "name": "ids",
              "dataType": "string[]",
              "paramType": "body",
              "fullType": "string[]",
              "required": false,
              "description": "A list of ids to export"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Exports a bundle of refunds"
        }
      ],
      "description": "Exports a bundle of refunds"
    },
    {
      "path": "/me/sla",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List active SLA"
        }
      ],
      "description": "List the billing.SlaOperation objects"
    },
    {
      "path": "/me/sla/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "billing.SlaOperation",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "SLA properties"
    },
    {
      "path": "/me/sla/{id}/apply",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Ask for SLA application"
        }
      ],
      "description": "apply operations"
    },
    {
      "path": "/me/sla/{id}/canBeApplied",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "boolean",
          "noAuthentication": false,
          "description": "Check whether this SLA can be applied on your services"
        }
      ],
      "description": "canBeApplied operations"
    },
    {
      "path": "/me/sla/{id}/services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "billing.SlaOperationService[]",
          "noAuthentication": false,
          "description": "Get services impacted by this SLA"
        }
      ],
      "description": "services operations"
    },
    {
      "path": "/me/sla/{id}/status",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Get the status request of this SLA"
        }
      ],
      "description": "status operations"
    },
    {
      "path": "/me/sshKey",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of your public SSH keys"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "key",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "ASCII encoded public SSH key to add"
            },
            {
              "name": "keyName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "name of the new public SSH key"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Add a new public SSH key"
        }
      ],
      "description": "List the nichandle.sshKey objects"
    },
    {
      "path": "/me/sshKey/{keyName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "keyName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Key name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Remove this public SSH key"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "keyName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Key name"
            }
          ],
          "responseType": "nichandle.sshKey",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "nichandle.sshKey",
              "paramType": "body",
              "fullType": "nichandle.sshKey",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "keyName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Key name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Customer public SSH key, can be used for rescue netboot or server access after reinstallation"
    },
    {
      "path": "/me/subAccount",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of sub-accounts"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Description of the new sub-account"
            }
          ],
          "responseType": "long",
          "noAuthentication": false,
          "description": "Create a new sub-account"
        }
      ],
      "description": "List the nichandle.SubAccount objects"
    },
    {
      "path": "/me/subAccount/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "nichandle.SubAccount",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "nichandle.SubAccount",
              "paramType": "body",
              "fullType": "nichandle.SubAccount",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Sub Account"
    },
    {
      "path": "/me/subAccount/{id}/createConsumerKey",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "nichandle.SubAccountConsumerKey",
          "noAuthentication": false,
          "description": "Create a consumer key for the current application"
        }
      ],
      "description": "createConsumerKey operations"
    },
    {
      "path": "/me/subscription",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of all OVH things you can subscribe to"
        }
      ],
      "description": "List the nichandle.Subscription objects"
    },
    {
      "path": "/me/subscription/{subscriptionType}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "subscriptionType",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Subscription type"
            }
          ],
          "responseType": "nichandle.Subscription",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "nichandle.Subscription",
              "paramType": "body",
              "fullType": "nichandle.Subscription",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "subscriptionType",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Subscription type"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "List of all OVH things you can subscribe to"
    },
    {
      "path": "/me/task/contactChange",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "askingAccount",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of askingAccount property (like)"
            },
            {
              "name": "state",
              "dataType": "nichandle.changeContact.TaskStateEnum",
              "paramType": "query",
              "fullType": "nichandle.changeContact.TaskStateEnum",
              "required": false,
              "description": "Filter the value of state property (like)"
            },
            {
              "name": "toAccount",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of toAccount property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of service contact change tasks you are involved in"
        }
      ],
      "description": "List the nichandle.contactChange.Task objects"
    },
    {
      "path": "/me/task/contactChange/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "nichandle.contactChange.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Task running a contact change on a service"
    },
    {
      "path": "/me/task/contactChange/{id}/accept",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "token",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The token you received by email for this request"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Accept this change request"
        }
      ],
      "description": "accept operations"
    },
    {
      "path": "/me/task/contactChange/{id}/refuse",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "token",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The token you received by email for this request"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Refuse this change request"
        }
      ],
      "description": "refuse operations"
    },
    {
      "path": "/me/task/contactChange/{id}/resendEmail",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "This call will send you a new email, containing a new token"
        }
      ],
      "description": "resendEmail operations"
    },
    {
      "path": "/me/task/domain",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "function",
              "dataType": "domain.NicOperationFunctionEnum",
              "paramType": "query",
              "fullType": "domain.NicOperationFunctionEnum",
              "required": false,
              "description": "Filter the value of function property (like)"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of domain property (like)"
            },
            {
              "name": "status",
              "dataType": "domain.OperationStatusEnum",
              "paramType": "query",
              "fullType": "domain.OperationStatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of domain task"
        }
      ],
      "description": "List the nichandle.DomainTask objects"
    },
    {
      "path": "/me/task/domain/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "nichandle.DomainTask",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Domain tasks"
    },
    {
      "path": "/me/task/domain/{id}/accelerate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Accelerate the task"
        }
      ],
      "description": "accelerate operations"
    },
    {
      "path": "/me/task/domain/{id}/argument",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of arguments"
        }
      ],
      "description": "List the nichandle.DomainTaskArgument objects"
    },
    {
      "path": "/me/task/domain/{id}/argument/{key}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            },
            {
              "name": "key",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Key"
            }
          ],
          "responseType": "nichandle.DomainTaskArgument",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "nichandle.DomainTaskArgument",
              "paramType": "body",
              "fullType": "nichandle.DomainTaskArgument",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            },
            {
              "name": "key",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Key"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Domain operation argument"
    },
    {
      "path": "/me/task/domain/{id}/cancel",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Cancel the task"
        }
      ],
      "description": "cancel operations"
    },
    {
      "path": "/me/task/domain/{id}/progressbar",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "nichandle.DomainTaskProgressBar",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Domain operation progress"
    },
    {
      "path": "/me/task/domain/{id}/relaunch",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Relaunch the task"
        }
      ],
      "description": "relaunch operations"
    },
    {
      "path": "/me/task/emailChange",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "state",
              "dataType": "nichandle.changeEmail.TaskStateEnum",
              "paramType": "query",
              "fullType": "nichandle.changeEmail.TaskStateEnum",
              "required": false,
              "description": "Filter the value of state property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of email change tasks you are involved in"
        }
      ],
      "description": "List the nichandle.emailChange.Task objects"
    },
    {
      "path": "/me/task/emailChange/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "nichandle.emailChange.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Task running an email change on an account"
    },
    {
      "path": "/me/task/emailChange/{id}/accept",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "token",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The token you received by email for this request"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Accept this change request"
        }
      ],
      "description": "accept operations"
    },
    {
      "path": "/me/task/emailChange/{id}/refuse",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "token",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The token you received by email for this request"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Refuse this change request"
        }
      ],
      "description": "refuse operations"
    },
    {
      "path": "/me/telephony/defaultIpRestriction",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "The default SIP IP restictions for your future VoIP lines"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "subnet",
              "dataType": "ipv4Block",
              "paramType": "body",
              "fullType": "ipv4Block",
              "required": true,
              "description": "The IPv4 subnet you want to allow"
            },
            {
              "name": "type",
              "dataType": "telephony.ProtocolEnum",
              "paramType": "body",
              "fullType": "telephony.ProtocolEnum",
              "required": true,
              "description": "The protocol you want to restrict (sip/mgcp)"
            }
          ],
          "responseType": "telephony.DefaultIpRestriction",
          "noAuthentication": false,
          "description": "Create a default IP restriction for your future VoIP lines"
        }
      ],
      "description": "List the telephony.DefaultIpRestriction objects"
    },
    {
      "path": "/me/telephony/defaultIpRestriction/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a default IP restriction for your future VoIP lines"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "telephony.DefaultIpRestriction",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Default IP restriction of a VoIP line"
    },
    {
      "path": "/me/telephony/settings",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "telephony.Settings",
          "noAuthentication": false,
          "description": "Get the telephony settings linked to the customer account"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "settings",
              "dataType": "telephony.Settings",
              "paramType": "body",
              "fullType": "telephony.Settings",
              "required": true,
              "description": "Settings to be changed"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Change the telephony settings linked to the customer account"
        }
      ],
      "description": "settings operations"
    },
    {
      "path": "/me/voucher/checkValidity",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "voucher",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Voucher value"
            }
          ],
          "responseType": "nichandle.VoucherStatus",
          "noAuthentication": false,
          "description": "Verify existing voucher"
        }
      ],
      "description": "checkValidity operations"
    },
    {
      "path": "/me/withdrawal",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of orderId property (=)"
            },
            {
              "name": "date.to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of date property (<=)"
            },
            {
              "name": "date.from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of date property (>=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of all the withdrawals made from your prepaid account"
        }
      ],
      "description": "List the billing.Withdrawal objects"
    },
    {
      "path": "/me/withdrawal/{withdrawalId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "withdrawalId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Withdrawal ID"
            }
          ],
          "responseType": "billing.Withdrawal",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Details about a withdrawal"
    },
    {
      "path": "/me/withdrawal/{withdrawalId}/details",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "withdrawalId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Withdrawal ID"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Give access to all entries of this withdrawal"
        }
      ],
      "description": "List the billing.WithdrawalDetail objects"
    },
    {
      "path": "/me/withdrawal/{withdrawalId}/details/{withdrawalDetailId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "withdrawalId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Withdrawal ID"
            },
            {
              "name": "withdrawalDetailId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Withdrawal detail ID"
            }
          ],
          "responseType": "billing.WithdrawalDetail",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Information about a Withdrawal entry"
    },
    {
      "path": "/me/withdrawal/{withdrawalId}/payment",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "withdrawalId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Withdrawal ID"
            }
          ],
          "responseType": "billing.Payment",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Details about a payment"
    },
    {
      "path": "/me/xdsl/setting",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "xdsl.Setting",
          "noAuthentication": false,
          "description": "Get xdsl settings linked to the nichandle"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "resellerFastModemShipping",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Send the modem as soon as possible, do not wait the xdsl line to be active"
            },
            {
              "name": "resellerModemBasicConfig",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Let the modem with vendor configuration. It prevent to apply the config managed by ovh manager"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Change xdsl settings linked to the nichandle"
        }
      ],
      "description": "setting operations"
    }
  ],
  "resourcePath": "/me",
  "basePath": "https://eu.api.soyoustart.com/1.0",
  "models": {
    "agreements.AgreementStateEnum": {
      "id": "AgreementStateEnum",
      "namespace": "agreements",
      "description": "The current state of a contract agreement",
      "enum": [
        "ko",
        "obsolete",
        "ok",
        "todo"
      ],
      "enumType": "string"
    },
    "agreements.Contract": {
      "id": "Contract",
      "namespace": "agreements",
      "description": "Contract of service",
      "properties": {
        "active": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Is this contract currently active or not ?",
          "required": true
        },
        "date": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date the contract was created on",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of of the contract",
          "required": true
        },
        "pdf": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "URL you can download the contract at",
          "required": true
        },
        "text": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Full text of the contract",
          "required": true
        }
      }
    },
    "agreements.ContractAgreement": {
      "id": "ContractAgreement",
      "namespace": "agreements",
      "description": "Contract agreement",
      "properties": {
        "agreed": {
          "type": "agreements.AgreementStateEnum",
          "fullType": "agreements.AgreementStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the agreement",
          "required": true
        },
        "contractId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the agreed contract",
          "required": true
        },
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date the agreed contract was effective",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the contract",
          "required": true
        }
      }
    },
    "api.Application": {
      "id": "Application",
      "namespace": "api",
      "description": "API Application",
      "properties": {
        "applicationId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "applicationKey": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "api.ApplicationStatusEnum",
          "fullType": "api.ApplicationStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "api.ApplicationStatusEnum": {
      "id": "ApplicationStatusEnum",
      "namespace": "api",
      "description": "List of state of an Api Application",
      "enum": [
        "active",
        "blocked",
        "inactive",
        "trusted"
      ],
      "enumType": "string"
    },
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
    "api.Log": {
      "id": "Log",
      "namespace": "api",
      "description": "API Log",
      "properties": {
        "account": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account which did the Request",
          "required": true
        },
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the request",
          "required": true
        },
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "Source IP of the request",
          "required": false
        },
        "logId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "method": {
          "type": "http.MethodEnum",
          "fullType": "http.MethodEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "HTTP Method of the request",
          "required": true
        },
        "path": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "HTTP URI of the request",
          "required": true
        },
        "route": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "API Route called",
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
    "billing.ArchiveTypeEnum": {
      "id": "ArchiveTypeEnum",
      "namespace": "billing",
      "description": "List of available archive types",
      "enum": [
        "csv",
        "zip"
      ],
      "enumType": "string"
    },
    "billing.AutomaticPaymentMean": {
      "id": "AutomaticPaymentMean",
      "namespace": "billing",
      "description": "Available automatic payment means",
      "properties": {
        "bankAccount": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Bank Account",
          "required": true
        },
        "creditCard": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Credit Card",
          "required": true
        },
        "deferredPaymentAccount": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Deferred invoice payment account for authorized customers",
          "required": true
        },
        "paypal": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Paypal account",
          "required": true
        }
      }
    },
    "billing.BankAccount": {
      "id": "BankAccount",
      "namespace": "billing",
      "description": "SEPA bank account info",
      "properties": {
        "bic": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "creationDate": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "defaultPaymentMean": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Custom description of this account",
          "required": false
        },
        "iban": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "icon": {
          "type": "billing.paymentMethod.IconData",
          "fullType": "billing.paymentMethod.IconData",
          "canBeNull": true,
          "readOnly": true,
          "description": "Payment method type icon",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "mandateSignatureDate": {
          "type": "date",
          "fullType": "date",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "ownerAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "ownerName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "state": {
          "type": "billing.BankAccountStateEnum",
          "fullType": "billing.BankAccountStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "uniqueReference": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "validationDocumentLink": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        }
      }
    },
    "billing.BankAccountStateEnum": {
      "id": "BankAccountStateEnum",
      "namespace": "billing",
      "description": "List of bank account states",
      "enum": [
        "blockedForIncidents",
        "pendingValidation",
        "valid"
      ],
      "enumType": "string"
    },
    "billing.Bill": {
      "id": "Bill",
      "namespace": "billing",
      "description": "Details about a Bill",
      "properties": {
        "billId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "category": {
          "type": "billing.CategoryEnum",
          "fullType": "billing.CategoryEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "orderId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "password": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "pdfUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "priceWithTax": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "priceWithoutTax": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "tax": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "billing.BillDetail": {
      "id": "BillDetail",
      "namespace": "billing",
      "description": "Information about a Bill entry",
      "properties": {
        "billDetailId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
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
        "periodEnd": {
          "type": "date",
          "fullType": "date",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "periodStart": {
          "type": "date",
          "fullType": "date",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "quantity": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "totalPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "unitPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "billing.CategoryEnum": {
      "id": "CategoryEnum",
      "namespace": "billing",
      "description": "Types of plans",
      "enum": [
        "autorenew",
        "earlyrenewal",
        "purchase",
        "purchase-cloud",
        "purchase-servers",
        "purchase-telecom",
        "purchase-web"
      ],
      "enumType": "string"
    },
    "billing.CreditCard": {
      "id": "CreditCard",
      "namespace": "billing",
      "description": "Credit card informations",
      "properties": {
        "defaultPaymentMean": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Custom description of this account",
          "required": false
        },
        "expirationDate": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "icon": {
          "type": "billing.paymentMethod.IconData",
          "fullType": "billing.paymentMethod.IconData",
          "canBeNull": true,
          "readOnly": true,
          "description": "Payment method type icon",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "number": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "state": {
          "type": "billing.CreditCardStateEnum",
          "fullType": "billing.CreditCardStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "threeDsValidated": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "True if this credit card has been registered with a successful 3DSecure challenge",
          "required": true
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "billing.CreditCardStateEnum": {
      "id": "CreditCardStateEnum",
      "namespace": "billing",
      "description": "State of you credit card",
      "enum": [
        "expired",
        "tooManyFailures",
        "valid"
      ],
      "enumType": "string"
    },
    "billing.DeferredPaymentAccount": {
      "id": "DeferredPaymentAccount",
      "namespace": "billing",
      "description": "Deferred payment account info",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "defaultPaymentMean": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Custom description of this account",
          "required": false
        },
        "icon": {
          "type": "billing.paymentMethod.IconData",
          "fullType": "billing.paymentMethod.IconData",
          "canBeNull": true,
          "readOnly": true,
          "description": "Payment method type icon",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Deferred account type",
          "required": false
        },
        "state": {
          "type": "billing.DeferredPaymentAccountStatusEnum",
          "fullType": "billing.DeferredPaymentAccountStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "billing.DeferredPaymentAccountStatusEnum": {
      "id": "DeferredPaymentAccountStatusEnum",
      "namespace": "billing",
      "description": "Status of your deferred invoice payment account",
      "enum": [
        "valid"
      ],
      "enumType": "string"
    },
    "billing.Deposit": {
      "id": "Deposit",
      "namespace": "billing",
      "description": "Details about a deposit",
      "properties": {
        "amount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "depositId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "orderId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "password": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "paymentInfo": {
          "type": "debt.associatedObject.PaymentInfo",
          "fullType": "debt.associatedObject.PaymentInfo",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "pdfUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "billing.DepositDetail": {
      "id": "DepositDetail",
      "namespace": "billing",
      "description": "Information about a Deposit entry",
      "properties": {
        "depositDetailId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
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
        "quantity": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "totalPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "unitPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "billing.FidelityAccount": {
      "id": "FidelityAccount",
      "namespace": "billing",
      "description": "Balance of the fidelity account",
      "properties": {
        "alertThreshold": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "balance": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "canBeCredited": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "openDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "billing.FidelityMovement": {
      "id": "FidelityMovement",
      "namespace": "billing",
      "description": "Details about a fidelity account",
      "properties": {
        "amount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "balance": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "movementId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "operation": {
          "type": "billing.fidelityAccount.OperationEnum",
          "fullType": "billing.fidelityAccount.OperationEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "order": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "previousBalance": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "billing.ItemDetail": {
      "id": "ItemDetail",
      "namespace": "billing",
      "description": "Extensions of a detail",
      "properties": {
        "order": {
          "type": "billing.ItemDetail.Order",
          "fullType": "billing.ItemDetail.Order",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "billing.ItemDetail.Order": {
      "id": "Order",
      "namespace": "billing.ItemDetail",
      "description": "Order data for this Detail",
      "properties": {
        "action": {
          "type": "billing.ItemDetail.OrderActionEnum",
          "fullType": "billing.ItemDetail.OrderActionEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "The meaning of this order detail",
          "required": false
        },
        "configurations": {
          "type": "billing.ItemDetail.OrderConfiguration[]",
          "fullType": "billing.ItemDetail.OrderConfiguration[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Configurations chosen during the order",
          "required": true
        },
        "plan": {
          "type": "billing.ItemDetail.OrderPlan",
          "fullType": "billing.ItemDetail.OrderPlan",
          "canBeNull": false,
          "readOnly": false,
          "description": "Plan from /order/cart",
          "required": true
        }
      }
    },
    "billing.ItemDetail.OrderActionEnum": {
      "id": "OrderActionEnum",
      "namespace": "billing.ItemDetail",
      "description": "List of order actions",
      "enum": [
        "consumption",
        "installation",
        "renew",
        "upgrade"
      ],
      "enumType": "string"
    },
    "billing.ItemDetail.OrderConfiguration": {
      "id": "OrderConfiguration",
      "namespace": "billing.ItemDetail",
      "description": "Configuration of order",
      "properties": {
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Label of the configuration",
          "required": true
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Value of the configuration",
          "required": true
        }
      }
    },
    "billing.ItemDetail.OrderPlan": {
      "id": "OrderPlan",
      "namespace": "billing.ItemDetail",
      "description": "Plan data from order",
      "properties": {
        "code": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Plan code used when ordering through /order/cart",
          "required": false
        },
        "duration": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Duration chosen when ordering through /order/cart (ISO 8601)",
          "required": false
        },
        "pricingMode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Pricing mode used when ordering through /order/cart",
          "required": false
        },
        "product": {
          "type": "billing.ItemDetail.OrderPlanProduct",
          "fullType": "billing.ItemDetail.OrderPlanProduct",
          "canBeNull": false,
          "readOnly": false,
          "description": "Product from /order/cart",
          "required": true
        },
        "quantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Quantity ordered",
          "required": false
        }
      }
    },
    "billing.ItemDetail.OrderPlanProduct": {
      "id": "OrderPlanProduct",
      "namespace": "billing.ItemDetail",
      "description": "Product data from order",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of the product used when ordering through /order/cart",
          "required": false
        }
      }
    },
    "billing.Movement": {
      "id": "Movement",
      "namespace": "billing",
      "description": "Details about an OVH account",
      "properties": {
        "amount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "balance": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "movementId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "operation": {
          "type": "billing.ovhAccount.OperationEnum",
          "fullType": "billing.ovhAccount.OperationEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "order": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "previousBalance": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "billing.Order": {
      "id": "Order",
      "namespace": "billing",
      "description": "Details about an Order",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "expirationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "orderId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "password": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "pdfUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "priceWithTax": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "priceWithoutTax": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "retractionDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "tax": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "billing.OrderDetail": {
      "id": "OrderDetail",
      "namespace": "billing",
      "description": "Information about a Bill entry",
      "properties": {
        "cancelled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
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
        "orderDetailId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "quantity": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "totalPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "unitPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "billing.OvhAccount": {
      "id": "OvhAccount",
      "namespace": "billing",
      "description": "Details about an OVH account",
      "properties": {
        "alertThreshold": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "balance": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "canBeCredited": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "isActive": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "openDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "ovhAccountId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "billing.Payment": {
      "id": "Payment",
      "namespace": "billing",
      "description": "Details about a payment",
      "properties": {
        "paymentDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "paymentIdentifier": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "paymentType": {
          "type": "billing.PaymentMeanEnum",
          "fullType": "billing.PaymentMeanEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "billing.PaymentMeanEnum": {
      "id": "PaymentMeanEnum",
      "namespace": "billing",
      "description": "All payment means you might have use on an OVH order",
      "enum": [
        "cash",
        "chargeback",
        "cheque",
        "creditAccount",
        "creditCard",
        "debtAccount",
        "deposit",
        "digitalLaunchPad",
        "edinar",
        "fidelityPoints",
        "free",
        "ideal",
        "incubatorAccount",
        "mandat",
        "multibanco",
        "none",
        "ovhAccount",
        "paymentMandate",
        "paypal",
        "payu",
        "platnosci",
        "refund",
        "transfer",
        "withdrawal"
      ],
      "enumType": "string"
    },
    "billing.PaymentMeanValidation": {
      "id": "PaymentMeanValidation",
      "namespace": "billing",
      "description": "A validation required to add a payment mean",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "submitUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "validationType": {
          "type": "billing.PaymentMeanValidationType",
          "fullType": "billing.PaymentMeanValidationType",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "billing.PaymentMeanValidationType": {
      "id": "PaymentMeanValidationType",
      "namespace": "billing",
      "description": "All the validation you may have to do",
      "enum": [
        "creditAccount",
        "documentToSend",
        "simpleValidation"
      ],
      "enumType": "string"
    },
    "billing.PaymentMethod": {
      "id": "PaymentMethod",
      "namespace": "billing",
      "description": "Available payment methods",
      "properties": {
        "billingContactId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Billing contact ID",
          "required": true
        },
        "creationDate": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": false,
          "description": "Creation date of the payment method",
          "required": true
        },
        "default": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Is this payment method set as the default one",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Customer personalized description",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment method id",
          "required": true
        },
        "paymentSubType": {
          "type": "billing.paymentMethod.PaymentSubTypeEnum",
          "fullType": "billing.paymentMethod.PaymentSubTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Payment sub type",
          "required": false
        },
        "paymentType": {
          "type": "billing.paymentMethod.PaymentTypeEnum",
          "fullType": "billing.paymentMethod.PaymentTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment type",
          "required": true
        },
        "publicLabel": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Public payment method label",
          "required": true
        },
        "status": {
          "type": "billing.paymentMethod.StatusEnum",
          "fullType": "billing.paymentMethod.StatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment method status enum",
          "required": true
        }
      }
    },
    "billing.Paypal": {
      "id": "Paypal",
      "namespace": "billing",
      "description": "Paypal account info",
      "properties": {
        "agreementId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "defaultPaymentMean": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Custom description of this account",
          "required": false
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "icon": {
          "type": "billing.paymentMethod.IconData",
          "fullType": "billing.paymentMethod.IconData",
          "canBeNull": true,
          "readOnly": true,
          "description": "Payment method type icon",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "state": {
          "type": "billing.PaypalStateEnum",
          "fullType": "billing.PaypalStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "billing.PaypalStateEnum": {
      "id": "PaypalStateEnum",
      "namespace": "billing",
      "description": "State of you paypal account",
      "enum": [
        "tooManyFailures",
        "valid"
      ],
      "enumType": "string"
    },
    "billing.Refund": {
      "id": "Refund",
      "namespace": "billing",
      "description": "Details about a Refund",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "orderId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "originalBillId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "password": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "pdfUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "priceWithTax": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "priceWithoutTax": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "refundId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "tax": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "billing.ReusablePaymentMeanEnum": {
      "id": "ReusablePaymentMeanEnum",
      "namespace": "billing",
      "description": "Reusable payment mean type",
      "enum": [
        "CREDIT_CARD",
        "ENTERPRISE",
        "INTERNAL_TRUSTED_ACCOUNT",
        "PAYPAL",
        "bankAccount",
        "creditCard",
        "fidelityAccount",
        "ovhAccount",
        "paypal"
      ],
      "enumType": "string"
    },
    "billing.SlaOperation": {
      "id": "SlaOperation",
      "namespace": "billing",
      "description": "SLA properties",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the event that led to SLA",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Description of the SLA operation for this incident",
          "required": true
        },
        "endDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Date of the end of the SLA",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "SLA identifier",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Sla operation name",
          "required": true
        },
        "startDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the start of the SLA",
          "required": true
        }
      }
    },
    "billing.SlaOperationService": {
      "id": "SlaOperationService",
      "namespace": "billing",
      "description": "Describe all services impacted by SLA",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Service description",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Impacted service name",
          "required": true
        },
        "slaApplication": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "SLA plan application",
          "required": true
        },
        "slaPlan": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "SLA plan description",
          "required": true
        }
      }
    },
    "billing.Withdrawal": {
      "id": "Withdrawal",
      "namespace": "billing",
      "description": "Details about a withdrawal",
      "properties": {
        "amount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "country": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "orderId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "password": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "pdfUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "withdrawalId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "billing.WithdrawalDetail": {
      "id": "WithdrawalDetail",
      "namespace": "billing",
      "description": "Information about a Withdrawal entry",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
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
        "quantity": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "totalPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "unitPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "withdrawalDetailId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "billing.fidelityAccount.OperationEnum": {
      "id": "OperationEnum",
      "namespace": "billing.fidelityAccount",
      "description": "Operations a fidelity account movement can represent",
      "enum": [
        "bonus",
        "cancel-bonus",
        "cancel-credit",
        "cancel-debit",
        "cancel-pre-debit",
        "credit",
        "debit",
        "pre-credit",
        "pre-debit"
      ],
      "enumType": "string"
    },
    "billing.order.AssociatedObject": {
      "id": "AssociatedObject",
      "namespace": "billing.order",
      "description": "The object the processing of the order leaded to",
      "properties": {
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "type": {
          "type": "billing.order.associatedObject.TypeEnum",
          "fullType": "billing.order.associatedObject.TypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "billing.order.ConsumptionDetails": {
      "id": "ConsumptionDetails",
      "namespace": "billing.order",
      "description": "Detailed consumption's retrieval information",
      "properties": {
        "fileFormat": {
          "type": "consumption.ConsumptionExportFormatsEnum",
          "fullType": "consumption.ConsumptionExportFormatsEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Format of the file",
          "required": false
        },
        "fileURL": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Temporary URL to download detailed consumption",
          "required": false
        },
        "message": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Request's state description",
          "required": false
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Consumption details export task's identifier",
          "required": true
        },
        "taskStatus": {
          "type": "consumption.ConsumptionExportTaskStatusEnum",
          "fullType": "consumption.ConsumptionExportTaskStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Consumption details export task's status",
          "required": true
        }
      }
    },
    "billing.order.FollowUp": {
      "id": "FollowUp",
      "namespace": "billing.order",
      "description": "Follow up history of an order",
      "properties": {
        "history": {
          "type": "billing.order.followUp.History[]",
          "fullType": "billing.order.followUp.History[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Step history of order follow-up",
          "required": true
        },
        "status": {
          "type": "billing.order.followUp.StatusEnum",
          "fullType": "billing.order.followUp.StatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Step status of order follow-up",
          "required": true
        },
        "step": {
          "type": "billing.order.followUp.StepEnum",
          "fullType": "billing.order.followUp.StepEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Step of order follow-up",
          "required": true
        }
      }
    },
    "billing.order.OrderStatusEnum": {
      "id": "OrderStatusEnum",
      "namespace": "billing.order",
      "description": "All possible order status",
      "enum": [
        "cancelled",
        "cancelling",
        "checking",
        "delivered",
        "delivering",
        "documentsRequested",
        "notPaid",
        "unknown"
      ],
      "enumType": "string"
    },
    "billing.order.PayWithPaymentMethod": {
      "id": "PayWithPaymentMethod",
      "namespace": "billing.order",
      "description": "Pay with payment method parameter",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "ID of payment method for pay this order",
          "required": true
        }
      }
    },
    "billing.order.PaymentMean": {
      "id": "PaymentMean",
      "namespace": "billing.order",
      "description": "All data needed to use a payment mean",
      "properties": {
        "fee": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "htmlForm": {
          "type": "text",
          "fullType": "text",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "httpMethod": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "logo": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "parameters": {
          "type": "billing.order.paymentMean.HttpParameter[]",
          "fullType": "billing.order.paymentMean.HttpParameter[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "subType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "billing.order.PaymentMeans": {
      "id": "PaymentMeans",
      "namespace": "billing.order",
      "description": "TODO",
      "properties": {
        "creditCard": {
          "type": "billing.order.PaymentMean[]",
          "fullType": "billing.order.PaymentMean[]",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "edinar": {
          "type": "billing.order.PaymentMean[]",
          "fullType": "billing.order.PaymentMean[]",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "fidelityPoints": {
          "type": "billing.order.PaymentMean[]",
          "fullType": "billing.order.PaymentMean[]",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "ideal": {
          "type": "billing.order.PaymentMean[]",
          "fullType": "billing.order.PaymentMean[]",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "multibanco": {
          "type": "billing.order.PaymentMean[]",
          "fullType": "billing.order.PaymentMean[]",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "ovhAccount": {
          "type": "billing.order.PaymentMean[]",
          "fullType": "billing.order.PaymentMean[]",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "paypal": {
          "type": "billing.order.PaymentMean[]",
          "fullType": "billing.order.PaymentMean[]",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "promotion": {
          "type": "billing.order.PaymentMean[]",
          "fullType": "billing.order.PaymentMean[]",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "billing.order.PaymentMethods": {
      "id": "PaymentMethods",
      "namespace": "billing.order",
      "description": "Payment methods",
      "properties": {
        "available": {
          "type": "payment.method.AvailablePaymentMethod[]",
          "fullType": "payment.method.AvailablePaymentMethod[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment method available on this order",
          "required": true
        },
        "registered": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "IDs of registered payment method usable on this order",
          "required": true
        }
      }
    },
    "billing.order.RegisteredPaymentMean": {
      "id": "RegisteredPaymentMean",
      "namespace": "billing.order",
      "description": "A registered payment mean",
      "properties": {
        "paymentMean": {
          "type": "billing.ReusablePaymentMeanEnum",
          "fullType": "billing.ReusablePaymentMeanEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "billing.order.RetractionReasonEnum": {
      "id": "RetractionReasonEnum",
      "namespace": "billing.order",
      "description": "Retraction reason type",
      "enum": [
        "competitor",
        "difficulty",
        "expensive",
        "other",
        "performance",
        "reliability",
        "unused"
      ],
      "enumType": "string"
    },
    "billing.order.associatedObject.TypeEnum": {
      "id": "TypeEnum",
      "namespace": "billing.order.associatedObject",
      "description": "Type of objects an order can be linked to",
      "enum": [
        "Bill",
        "Deposit",
        "Refund",
        "Withdrawal"
      ],
      "enumType": "string"
    },
    "billing.order.followUp.History": {
      "id": "History",
      "namespace": "billing.order.followUp",
      "description": "Step history of order follow-up",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "History date of order follow-up",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "History description of order follow-up",
          "required": true
        },
        "label": {
          "type": "billing.order.followUp.HistoryStatusEnum",
          "fullType": "billing.order.followUp.HistoryStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "History label of order follow-up",
          "required": true
        }
      }
    },
    "billing.order.followUp.HistoryStatusEnum": {
      "id": "HistoryStatusEnum",
      "namespace": "billing.order.followUp",
      "description": "History label of order follow-up",
      "enum": [
        "DELIVERY",
        "FRAUD_CHECK",
        "FRAUD_DOCS_REQUESTED",
        "FRAUD_MANUAL_REVIEW",
        "FRAUD_REFUSED",
        "INVOICE_IN_PROGRESS",
        "INVOICE_SENT",
        "ORDER_ACCEPTED",
        "ORDER_STARTED",
        "PAYMENT_CONFIRMED",
        "PAYMENT_INITIATED",
        "PAYMENT_RECEIVED",
        "REGISTERED_PAYMENT_INITIATED"
      ],
      "enumType": "string"
    },
    "billing.order.followUp.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "billing.order.followUp",
      "description": "Step status of order follow-up",
      "enum": [
        "DOING",
        "DONE",
        "ERROR",
        "TODO"
      ],
      "enumType": "string"
    },
    "billing.order.followUp.StepEnum": {
      "id": "StepEnum",
      "namespace": "billing.order.followUp",
      "description": "Status of order follow-up",
      "enum": [
        "AVAILABLE",
        "DELIVERING",
        "VALIDATED",
        "VALIDATING"
      ],
      "enumType": "string"
    },
    "billing.order.paymentMean.HttpParameter": {
      "id": "HttpParameter",
      "namespace": "billing.order.paymentMean",
      "description": "Parameter to give to a payment page",
      "properties": {
        "choice": {
          "type": "billing.order.paymentMean.HttpParameterChoice[]",
          "fullType": "billing.order.paymentMean.HttpParameterChoice[]",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "billing.order.paymentMean.HttpParameterChoice": {
      "id": "HttpParameterChoice",
      "namespace": "billing.order.paymentMean",
      "description": "Choice for an HTTP multi value parameter",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "billing.ovhAccount.OperationEnum": {
      "id": "OperationEnum",
      "namespace": "billing.ovhAccount",
      "description": "Operations an OVH account movement can represent",
      "enum": [
        "cancel-credit",
        "cancel-debit",
        "cancel-pre-debit",
        "credit",
        "debit",
        "pre-credit",
        "pre-debit"
      ],
      "enumType": "string"
    },
    "billing.paymentMethod.IconData": {
      "id": "IconData",
      "namespace": "billing.paymentMethod",
      "description": "Payment method type icon",
      "properties": {
        "data": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Icon in base64",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Icon name",
          "required": false
        }
      }
    },
    "billing.paymentMethod.PaymentSubTypeEnum": {
      "id": "PaymentSubTypeEnum",
      "namespace": "billing.paymentMethod",
      "description": "List of payment sub type enum",
      "enum": [
        "AMERICAN_EXPRESS",
        "MASTERCARD",
        "VISA"
      ],
      "enumType": "string"
    },
    "billing.paymentMethod.PaymentTypeEnum": {
      "id": "PaymentTypeEnum",
      "namespace": "billing.paymentMethod",
      "description": "List of payment type enum",
      "enum": [
        "BANK_ACCOUNT",
        "CREDIT_CARD",
        "DEFERRED_PAYMENT_ACCOUNT",
        "ENTERPRISE",
        "INTERNAL_TRUSTED_ACCOUNT",
        "PAYPAL"
      ],
      "enumType": "string"
    },
    "billing.paymentMethod.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "billing.paymentMethod",
      "description": "List of payment method status enum",
      "enum": [
        "BLOCKED",
        "BLOCKED_BY_CUSTOMER",
        "BROKEN",
        "CANCELED",
        "CANCELED_BY_CUSTOMER",
        "CREATED",
        "ERROR",
        "EXPIRED",
        "PAUSED",
        "VALID",
        "VALID_FOR_CREDIT"
      ],
      "enumType": "string"
    },
    "complexType.SafeKeyValue<T>": {
      "id": "SafeKeyValue",
      "namespace": "complexType",
      "description": "Key and value, with proper key strings",
      "generics": [
        "T"
      ],
      "properties": {
        "key": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "T",
          "fullType": "T",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "complexType.UnitAndValue<T>": {
      "id": "UnitAndValue",
      "namespace": "complexType",
      "description": "A numeric value tagged with its unit",
      "generics": [
        "T"
      ],
      "properties": {
        "unit": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "T",
          "fullType": "T",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "consumption.ConsumptionExportFormatsEnum": {
      "id": "ConsumptionExportFormatsEnum",
      "namespace": "consumption",
      "description": "Export file format",
      "enum": [
        "csv"
      ],
      "enumType": "string"
    },
    "consumption.ConsumptionExportTaskStatusEnum": {
      "id": "ConsumptionExportTaskStatusEnum",
      "namespace": "consumption",
      "description": "Export task status",
      "enum": [
        "DOING",
        "DONE",
        "ERROR",
        "TODO"
      ],
      "enumType": "string"
    },
    "contact.Address": {
      "id": "Address",
      "namespace": "contact",
      "description": "Representation of an Address",
      "properties": {
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "City",
          "required": true
        },
        "country": {
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Country",
          "required": true
        },
        "line1": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "First line of the address",
          "required": true
        },
        "line2": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Second line of the address",
          "required": false
        },
        "line3": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Third line of the address",
          "required": false
        },
        "otherDetails": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Others details",
          "required": false
        },
        "province": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Province name",
          "required": false
        },
        "zip": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Zipcode",
          "required": true
        }
      }
    },
    "contact.Contact": {
      "id": "Contact",
      "namespace": "contact",
      "description": "Representation of a Contact",
      "properties": {
        "address": {
          "type": "contact.Address",
          "fullType": "contact.Address",
          "canBeNull": false,
          "readOnly": false,
          "description": "Address for this contact",
          "required": true
        },
        "birthCity": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Birth city",
          "required": false
        },
        "birthCountry": {
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Birth Country",
          "required": false
        },
        "birthDay": {
          "type": "date",
          "fullType": "date",
          "canBeNull": true,
          "readOnly": false,
          "description": "Birth date",
          "required": false
        },
        "birthZip": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Birth Zipcode",
          "required": false
        },
        "cellPhone": {
          "type": "phoneNumber",
          "fullType": "phoneNumber",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cellphone number",
          "required": false
        },
        "companyNationalIdentificationNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "National identification number of your company",
          "required": false
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Email address",
          "required": true
        },
        "fax": {
          "type": "phoneNumber",
          "fullType": "phoneNumber",
          "canBeNull": true,
          "readOnly": false,
          "description": "Fax number",
          "required": false
        },
        "firstName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "First name",
          "required": true
        },
        "gender": {
          "type": "nichandle.GenderEnum",
          "fullType": "nichandle.GenderEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Gender",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Contact Identifier",
          "required": true
        },
        "language": {
          "type": "nichandle.LanguageEnum",
          "fullType": "nichandle.LanguageEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Language",
          "required": true
        },
        "lastName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Last name",
          "required": true
        },
        "legalForm": {
          "type": "nichandle.LegalFormEnum",
          "fullType": "nichandle.LegalFormEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Legal form of the contact",
          "required": true
        },
        "nationalIdentificationNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "National identification number of the contact",
          "required": false
        },
        "nationality": {
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Nationality",
          "required": false
        },
        "organisationName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Organisation name",
          "required": false
        },
        "organisationType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Organisation type",
          "required": false
        },
        "phone": {
          "type": "phoneNumber",
          "fullType": "phoneNumber",
          "canBeNull": true,
          "readOnly": false,
          "description": "Telephone number",
          "required": false
        },
        "spareEmail": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Spare email address",
          "required": false
        },
        "vat": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "VAT number",
          "required": false
        }
      }
    },
    "contact.FieldInformation": {
      "id": "FieldInformation",
      "namespace": "contact",
      "description": "Extras informations about a field",
      "properties": {
        "fieldName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the field concerned by restrictions",
          "required": true
        },
        "mandatory": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Indicates if the field is mandatory when editing",
          "required": true
        },
        "readOnly": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Indicates if the field can't be edited",
          "required": true
        }
      }
    },
    "coreTypes.ContinentEnum": {
      "id": "ContinentEnum",
      "namespace": "coreTypes",
      "description": "Continents",
      "enum": [
        "africa",
        "antartica",
        "asia",
        "europe",
        "north-america",
        "oceania",
        "south-america"
      ],
      "enumType": "string"
    },
    "coreTypes.CountryEnum": {
      "id": "CountryEnum",
      "namespace": "coreTypes",
      "description": "ISO country codes",
      "enum": [
        "ac",
        "ad",
        "ae",
        "af",
        "ag",
        "ai",
        "al",
        "am",
        "an",
        "ao",
        "aq",
        "ar",
        "as",
        "at",
        "au",
        "aw",
        "ax",
        "az",
        "ba",
        "bb",
        "bd",
        "be",
        "bf",
        "bg",
        "bh",
        "bi",
        "bj",
        "bl",
        "bm",
        "bn",
        "bo",
        "bq",
        "br",
        "bs",
        "bt",
        "bv",
        "bw",
        "by",
        "bz",
        "ca",
        "cc",
        "cd",
        "cf",
        "cg",
        "ch",
        "ci",
        "ck",
        "cl",
        "cm",
        "cn",
        "co",
        "cr",
        "cs",
        "cu",
        "cv",
        "cw",
        "cx",
        "cy",
        "cz",
        "de",
        "dj",
        "dk",
        "dm",
        "do",
        "dz",
        "ec",
        "ee",
        "eg",
        "eh",
        "er",
        "es",
        "et",
        "fc",
        "fd",
        "fi",
        "fj",
        "fk",
        "fm",
        "fo",
        "fr",
        "fx",
        "ga",
        "gb",
        "gd",
        "ge",
        "gf",
        "gg",
        "gh",
        "gi",
        "gl",
        "gm",
        "gn",
        "gp",
        "gq",
        "gr",
        "gs",
        "gt",
        "gu",
        "gw",
        "gy",
        "hk",
        "hm",
        "hn",
        "hr",
        "ht",
        "hu",
        "id",
        "ie",
        "il",
        "im",
        "in",
        "io",
        "iq",
        "ir",
        "is",
        "it",
        "je",
        "jm",
        "jo",
        "jp",
        "ke",
        "kg",
        "kh",
        "ki",
        "km",
        "kn",
        "kp",
        "kr",
        "kw",
        "ky",
        "kz",
        "la",
        "lb",
        "lc",
        "li",
        "lk",
        "lr",
        "ls",
        "lt",
        "lu",
        "lv",
        "ly",
        "ma",
        "mc",
        "md",
        "me",
        "mf",
        "mg",
        "mh",
        "mk",
        "ml",
        "mm",
        "mn",
        "mo",
        "mp",
        "mq",
        "mr",
        "ms",
        "mt",
        "mu",
        "mv",
        "mw",
        "mx",
        "my",
        "mz",
        "na",
        "nc",
        "ne",
        "nf",
        "ng",
        "ni",
        "nl",
        "no",
        "np",
        "nr",
        "nu",
        "nz",
        "om",
        "pa",
        "pe",
        "pf",
        "pg",
        "ph",
        "pk",
        "pl",
        "pm",
        "pn",
        "pr",
        "ps",
        "pt",
        "pw",
        "py",
        "qa",
        "qc",
        "re",
        "ro",
        "rs",
        "ru",
        "rw",
        "sa",
        "sb",
        "sc",
        "sd",
        "se",
        "sg",
        "sh",
        "si",
        "sj",
        "sk",
        "sl",
        "sm",
        "sn",
        "so",
        "sr",
        "ss",
        "st",
        "sv",
        "sx",
        "sy",
        "sz",
        "tc",
        "td",
        "tf",
        "tg",
        "th",
        "tj",
        "tk",
        "tl",
        "tm",
        "tn",
        "to",
        "tp",
        "tr",
        "tt",
        "tv",
        "tw",
        "tz",
        "ua",
        "ug",
        "uk",
        "um",
        "us",
        "uy",
        "uz",
        "va",
        "vc",
        "ve",
        "vg",
        "vi",
        "vn",
        "vu",
        "we",
        "wf",
        "ws",
        "ye",
        "yt",
        "yu",
        "za",
        "zm",
        "zw"
      ],
      "enumType": "string"
    },
    "debt.Balance": {
      "id": "Balance",
      "namespace": "debt",
      "description": "Debt balance of the account",
      "properties": {
        "active": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "dueAmount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Amount of debts the account has",
          "required": true
        },
        "pendingAmount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Amount currently being processed",
          "required": true
        },
        "todoAmount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Reserved amount awaiting payment",
          "required": true
        },
        "unmaturedAmount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Unmatured amount for deferred payment term",
          "required": true
        }
      }
    },
    "debt.Debt": {
      "id": "Debt",
      "namespace": "debt",
      "description": "State of a debt",
      "properties": {
        "amount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Original amount of the debt",
          "required": true
        },
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date the debt was created on",
          "required": true
        },
        "debtId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "dueAmount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Amount you still owe for that debt",
          "required": true
        },
        "dueDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "If specified, the debt will not be recovered before that date",
          "required": false
        },
        "orderId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "The order the debt relates to",
          "required": true
        },
        "pendingAmount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Amount currently being processed",
          "required": true
        },
        "status": {
          "type": "debt.entry.StatusDebtOrderEnum",
          "fullType": "debt.entry.StatusDebtOrderEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of a debt",
          "required": true
        },
        "todoAmount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Reserved amount awaiting payment",
          "required": true
        },
        "unmaturedAmount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Unmatured amount for deferred payment term",
          "required": true
        }
      }
    },
    "debt.Operation": {
      "id": "Operation",
      "namespace": "debt",
      "description": "Operation that happend on a debt",
      "properties": {
        "amount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Amount of the operation",
          "required": true
        },
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date the operation took place on",
          "required": true
        },
        "depositOrderId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Order id associated to the deposit",
          "required": true
        },
        "operationId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "debt.entry.StatusEnum",
          "fullType": "debt.entry.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of the operation",
          "required": true
        },
        "type": {
          "type": "debt.entry.OperationEnum",
          "fullType": "debt.entry.OperationEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Type of movement this operation represents",
          "required": false
        }
      }
    },
    "debt.associatedObject.PaymentInfo": {
      "id": "PaymentInfo",
      "namespace": "debt.associatedObject",
      "description": "The payment infos linked to this debt entry",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Optional customer description",
          "required": false
        },
        "paymentType": {
          "type": "billing.PaymentMeanEnum",
          "fullType": "billing.PaymentMeanEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment mean used for this debt operation",
          "required": true
        },
        "publicLabel": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Public payment mean label",
          "required": false
        }
      }
    },
    "debt.associatedObject.TypeEnum": {
      "id": "TypeEnum",
      "namespace": "debt.associatedObject",
      "description": "Type of objects an order can be linked to",
      "enum": [
        "Bill",
        "DebtOperation",
        "Deposit",
        "Order",
        "OvhAccountMovement",
        "Refund",
        "Withdrawal"
      ],
      "enumType": "string"
    },
    "debt.entry.AssociatedObject": {
      "id": "AssociatedObject",
      "namespace": "debt.entry",
      "description": "The object linked to this debt entry",
      "properties": {
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "paymentInfo": {
          "type": "debt.associatedObject.PaymentInfo",
          "fullType": "debt.associatedObject.PaymentInfo",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "subId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "type": {
          "type": "debt.associatedObject.TypeEnum",
          "fullType": "debt.associatedObject.TypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "debt.entry.OperationEnum": {
      "id": "OperationEnum",
      "namespace": "debt.entry",
      "description": "All operations a debt entry can represent",
      "enum": [
        "CANCEL",
        "CASH_MANUAL",
        "CHECK_MANUAL",
        "CREDITCARD",
        "CREDITCARD_AUTOMATIC",
        "CREDITCARD_MANUAL",
        "CREDIT_ACCOUNT_AUTOMATIC",
        "EDINAR_MANUAL",
        "IDEAL_MANUAL",
        "MULTIBANCO_MANUAL",
        "ORDER",
        "PAYPAL_AUTOMATIC",
        "PAYPAL_MANUAL",
        "PAYU_MANUAL",
        "RECOVERY_TRANSFER_AUTOMATIC",
        "REFUND",
        "REFUND_CHECK",
        "REFUND_CREDITCARD",
        "REFUND_CREDIT_ACCOUNT",
        "REFUND_LOSS",
        "REFUND_PAYPAL",
        "REFUND_PAYU",
        "REFUND_SEPA",
        "REFUND_TRANSFER",
        "REFUND_UNKNOWN",
        "SEPA_AUTOMATIC",
        "TRANSFER_MANUAL",
        "UNPAID_CHECK",
        "UNPAID_CREDITCARD",
        "UNPAID_CREDIT_ACCOUNT",
        "UNPAID_PAYPAL",
        "UNPAID_SEPA",
        "UNPAID_WITHDRAW",
        "WARRANT_MANUAL",
        "WITHDRAW_AUTOMATIC"
      ],
      "enumType": "string"
    },
    "debt.entry.StatusDebtOrderEnum": {
      "id": "StatusDebtOrderEnum",
      "namespace": "debt.entry",
      "description": "All status a debt HistoryOrder entry can be in",
      "enum": [
        "PAID",
        "REFUNDED",
        "TO_BE_PAID",
        "UNMATURED",
        "UNPAID"
      ],
      "enumType": "string"
    },
    "debt.entry.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "debt.entry",
      "description": "All status a debt entry can be in",
      "enum": [
        "CANCELLED",
        "DONE",
        "FAILED",
        "PAID",
        "PENDING",
        "TODO"
      ],
      "enumType": "string"
    },
    "dedicated.TemplateOsFileSystemEnum": {
      "id": "TemplateOsFileSystemEnum",
      "namespace": "dedicated",
      "description": "Filesystems available",
      "enum": [
        "btrfs",
        "ext3",
        "ext4",
        "ntfs",
        "reiserfs",
        "swap",
        "ufs",
        "xfs",
        "zfs"
      ],
      "enumType": "string"
    },
    "dedicated.TemplateOsHardwareRaidEnum": {
      "id": "TemplateOsHardwareRaidEnum",
      "namespace": "dedicated",
      "description": "Hardware RAID enum",
      "enum": [
        "raid0",
        "raid1",
        "raid10",
        "raid5",
        "raid50",
        "raid6",
        "raid60"
      ],
      "enumType": "string"
    },
    "dedicated.TemplateOsLanguageEnum": {
      "id": "TemplateOsLanguageEnum",
      "namespace": "dedicated",
      "description": "all language available",
      "enum": [
        "ar",
        "bg",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "es",
        "et",
        "fi",
        "fr",
        "he",
        "hr",
        "hu",
        "it",
        "ja",
        "ko",
        "lt",
        "lv",
        "nb",
        "nl",
        "no",
        "pl",
        "pt",
        "ro",
        "ru",
        "sk",
        "sl",
        "sr",
        "sv",
        "th",
        "tr",
        "tu",
        "uk",
        "zh-Hans-CN",
        "zh-Hans-HK"
      ],
      "enumType": "string"
    },
    "dedicated.TemplateOsProperties": {
      "id": "TemplateOsProperties",
      "namespace": "dedicated",
      "description": "A structure describing properties customizables about this dedicated installation template",
      "properties": {
        "changeLog": {
          "type": "text",
          "fullType": "text",
          "canBeNull": true,
          "readOnly": false,
          "description": "Template change log details",
          "required": false
        },
        "customHostname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Set up the server using the provided hostname instead of the default hostname",
          "required": false
        },
        "postInstallationScriptLink": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Indicate the URL where your postinstall customisation script is located",
          "required": false
        },
        "postInstallationScriptReturn": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "indicate the string returned by your postinstall customisation script on successful execution. Advice: your script should return a unique validation string in case of succes. A good example is \"loh1Xee7eo OK OK OK UGh8Ang1Gu",
          "required": false
        },
        "rating": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "sshKeyName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of the ssh key that should be installed. Password login will be disabled",
          "required": false
        },
        "useDistributionKernel": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Use the distribution's native kernel instead of the recommended OVH Kernel",
          "required": false
        }
      }
    },
    "dedicated.TemplateOsTypeEnum": {
      "id": "TemplateOsTypeEnum",
      "namespace": "dedicated",
      "description": "Os type",
      "enum": [
        "bsd",
        "linux",
        "solaris",
        "windows"
      ],
      "enumType": "string"
    },
    "dedicated.TemplateOsUsageEnum": {
      "id": "TemplateOsUsageEnum",
      "namespace": "dedicated",
      "description": "Os usage definition",
      "enum": [
        "basic",
        "customer",
        "hosting",
        "other",
        "readyToUse",
        "virtualisation"
      ],
      "enumType": "string"
    },
    "dedicated.TemplatePartitionTypeEnum": {
      "id": "TemplatePartitionTypeEnum",
      "namespace": "dedicated",
      "description": "partition type",
      "enum": [
        "logical",
        "lv",
        "primary"
      ],
      "enumType": "string"
    },
    "dedicated.installationTemplate.Templates": {
      "id": "Templates",
      "namespace": "dedicated.installationTemplate",
      "description": "Available installation templates",
      "properties": {
        "availableLanguages": {
          "type": "dedicated.TemplateOsLanguageEnum[]",
          "fullType": "dedicated.TemplateOsLanguageEnum[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "list of all language available for this template",
          "required": true
        },
        "beta": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "This distribution is new, and although tested and functional, may still display odd behaviour",
          "required": false
        },
        "bitFormat": {
          "type": "dedicated.server.BitFormatEnum",
          "fullType": "dedicated.server.BitFormatEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "this template  bit format",
          "required": true
        },
        "category": {
          "type": "dedicated.TemplateOsUsageEnum",
          "fullType": "dedicated.TemplateOsUsageEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "category of this template (informative only)",
          "required": true
        },
        "customization": {
          "type": "dedicated.TemplateOsProperties",
          "fullType": "dedicated.TemplateOsProperties",
          "canBeNull": true,
          "readOnly": false,
          "description": "Customizable template properties ",
          "required": false
        },
        "defaultLanguage": {
          "type": "dedicated.TemplateOsLanguageEnum",
          "fullType": "dedicated.TemplateOsLanguageEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "the default language of this template",
          "required": true
        },
        "deprecated": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "is this distribution deprecated",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "information about this template",
          "required": true
        },
        "distribution": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "the distribution this template is based on",
          "required": true
        },
        "family": {
          "type": "dedicated.TemplateOsTypeEnum",
          "fullType": "dedicated.TemplateOsTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "this template family type",
          "required": true
        },
        "filesystems": {
          "type": "dedicated.TemplateOsFileSystemEnum[]",
          "fullType": "dedicated.TemplateOsFileSystemEnum[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "list of all filesystems  available for this template",
          "required": true
        },
        "hardRaidConfiguration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "This distribution supports hardware raid configuration through the OVH API",
          "required": false
        },
        "lastModification": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Date of last modification of the base image",
          "required": false
        },
        "lvmReady": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "This distribution supports Logical Volumes (Linux LVM)",
          "required": false
        },
        "supportsDistributionKernel": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "This distribution supports installation using the distribution's native kernel instead of the recommended OVH kernel",
          "required": false
        },
        "supportsGptLabel": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "This distribution supports the GUID Partition Table (GPT), providing up to 128 partitions that can have more than 2 TB",
          "required": false
        },
        "supportsRTM": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "This distribution supports RTM software",
          "required": true
        },
        "supportsSqlServer": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "This distribution supports the microsoft SQL server",
          "required": false
        },
        "supportsUEFI": {
          "type": "dedicated.server.SupportsUEFIEnum",
          "fullType": "dedicated.server.SupportsUEFIEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "This distribution supports UEFI setup",
          "required": false
        },
        "templateName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "This template name",
          "required": true
        }
      }
    },
    "dedicated.installationTemplate.hardwareRaid": {
      "id": "hardwareRaid",
      "namespace": "dedicated.installationTemplate",
      "description": "Hardware RAID defined in this partitioning scheme",
      "properties": {
        "disks": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Disk list",
          "required": true
        },
        "mode": {
          "type": "dedicated.TemplateOsHardwareRaidEnum",
          "fullType": "dedicated.TemplateOsHardwareRaidEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "RAID mode",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Hardware RAID name",
          "required": true
        },
        "step": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Specifies the creation order of the hardware RAID",
          "required": true
        }
      }
    },
    "dedicated.installationTemplate.templatePartitioningSchemes": {
      "id": "templatePartitioningSchemes",
      "namespace": "dedicated.installationTemplate",
      "description": "Partitioning schemes available on this template",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "name of this partitioning scheme",
          "required": true
        },
        "priority": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications)",
          "required": true
        }
      }
    },
    "dedicated.installationTemplate.templatePartitions": {
      "id": "templatePartitions",
      "namespace": "dedicated.installationTemplate",
      "description": " Partitions defined in this partitioning scheme",
      "properties": {
        "filesystem": {
          "type": "dedicated.TemplateOsFileSystemEnum",
          "fullType": "dedicated.TemplateOsFileSystemEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Partition filesytem",
          "required": true
        },
        "mountpoint": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "partition mount point",
          "required": true
        },
        "order": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "specifies the creation order of the partition on the disk",
          "required": true
        },
        "raid": {
          "type": "dedicated.server.PartitionRaidEnum",
          "fullType": "dedicated.server.PartitionRaidEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "raid partition type",
          "required": false
        },
        "size": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "description": "size of partition in Mb, 0 => rest of the space",
          "required": true
        },
        "type": {
          "type": "dedicated.TemplatePartitionTypeEnum",
          "fullType": "dedicated.TemplatePartitionTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "volumeName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The volume name needed for proxmox distribution",
          "required": false
        }
      }
    },
    "dedicated.server.BitFormatEnum": {
      "id": "BitFormatEnum",
      "namespace": "dedicated.server",
      "description": "Available os bit format",
      "enum": [
        "32",
        "64"
      ],
      "enumType": "long"
    },
    "dedicated.server.PartitionRaidEnum": {
      "id": "PartitionRaidEnum",
      "namespace": "dedicated.server",
      "description": "partition raid type",
      "enum": [
        "0",
        "1",
        "10",
        "5",
        "6"
      ],
      "enumType": "string"
    },
    "dedicated.server.SupportsUEFIEnum": {
      "id": "SupportsUEFIEnum",
      "namespace": "dedicated.server",
      "description": "supports UEFI setup",
      "enum": [
        "no",
        "only",
        "yes"
      ],
      "enumType": "string"
    },
    "domain.DocumentFormatsEnum": {
      "id": "DocumentFormatsEnum",
      "namespace": "domain",
      "description": "Document file format",
      "enum": [
        "gif",
        "jpeg",
        "jpg",
        "pdf",
        "png"
      ],
      "enumType": "string"
    },
    "domain.NicOperationFunctionEnum": {
      "id": "NicOperationFunctionEnum",
      "namespace": "domain",
      "description": "Operation functions",
      "enum": [
        "ContactControl",
        "DnsAnycastActivate",
        "DnsAnycastDeactivate",
        "DnssecDisable",
        "DnssecEnable",
        "DnssecResigning",
        "DnssecRollKsk",
        "DnssecRollZsk",
        "DomainContactControl",
        "DomainContactUpdate",
        "DomainControl",
        "DomainCreate",
        "DomainDelete",
        "DomainDnsUpdate",
        "DomainDsUpdate",
        "DomainHold",
        "DomainHostCreate",
        "DomainHostDelete",
        "DomainHostUpdate",
        "DomainIncomingTransfer",
        "DomainLock",
        "DomainOutgoingTransfer",
        "DomainRenew",
        "DomainRestore",
        "DomainTrade",
        "ZoneImport"
      ],
      "enumType": "string"
    },
    "domain.OperationActionEnum": {
      "id": "OperationActionEnum",
      "namespace": "domain",
      "description": "operation Action",
      "enum": [
        "canCancel",
        "canCorrect",
        "canRelaunch",
        "canReset"
      ],
      "enumType": "string"
    },
    "domain.OperationStatusEnum": {
      "id": "OperationStatusEnum",
      "namespace": "domain",
      "description": "Operation status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string"
    },
    "domain.OperationStep": {
      "id": "OperationStep",
      "namespace": "domain",
      "description": "One step from an operation",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description of the step",
          "required": true
        },
        "executionDuration": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Execution time of the step",
          "required": true
        },
        "step": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the step",
          "required": true
        }
      }
    },
    "geolocation.ContinentCountryLocation": {
      "id": "ContinentCountryLocation",
      "namespace": "geolocation",
      "description": "Representation of country and continent from visitor IP",
      "properties": {
        "continent": {
          "type": "coreTypes.ContinentEnum",
          "fullType": "coreTypes.ContinentEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Continent",
          "required": true
        },
        "countryCode": {
          "type": "coreTypes.CountryEnum",
          "fullType": "coreTypes.CountryEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Country iso code",
          "required": true
        },
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": true,
          "description": "The IP address processed, the user's origin one",
          "required": true
        }
      }
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
    },
    "me.consent.Campaign": {
      "id": "Campaign",
      "namespace": "me.consent",
      "description": "Consent campaign",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Campaign description",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Campaign name",
          "required": true
        },
        "type": {
          "type": "me.consent.CampaignTypeEnum",
          "fullType": "me.consent.CampaignTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Campaign type",
          "required": true
        }
      }
    },
    "me.consent.CampaignTypeEnum": {
      "id": "CampaignTypeEnum",
      "namespace": "me.consent",
      "description": "Campaign type",
      "enum": [
        "OPTIN",
        "OPTOUT"
      ],
      "enumType": "string"
    },
    "me.consent.Consent": {
      "id": "Consent",
      "namespace": "me.consent",
      "description": "Customer consent information for a campaign",
      "properties": {
        "campaign": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Campaign name",
          "required": true
        },
        "history": {
          "type": "me.consent.Decision[]",
          "fullType": "me.consent.Decision[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Consent decisions history for this campaign",
          "required": true
        },
        "type": {
          "type": "me.consent.CampaignTypeEnum",
          "fullType": "me.consent.CampaignTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Campaign type",
          "required": true
        },
        "value": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current consent value",
          "required": true
        }
      }
    },
    "me.consent.Decision": {
      "id": "Decision",
      "namespace": "me.consent",
      "description": "Customer consent decision",
      "properties": {
        "timestamp": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Consent decision datetime",
          "required": true
        },
        "value": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Consent decision value",
          "required": true
        }
      }
    },
    "me.payment.method.AvailablePaymentMethod": {
      "id": "AvailablePaymentMethod",
      "namespace": "me.payment.method",
      "description": "Available payment method object",
      "properties": {
        "icon": {
          "type": "me.payment.method.Icon",
          "fullType": "me.payment.method.Icon",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment method type icon",
          "required": true
        },
        "integration": {
          "type": "payment.method.IntegrationType",
          "fullType": "payment.method.IntegrationType",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment method integration type",
          "required": true
        },
        "oneshot": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment method type is possible to pay in oneshot mode ?",
          "required": true
        },
        "paymentType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment method type",
          "required": true
        },
        "registerable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment method type is registerable ?",
          "required": true
        },
        "registerableWithTransaction": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment method type is registerable with the possibility to pay in same time an order ?",
          "required": true
        }
      }
    },
    "me.payment.method.CallbackUrl": {
      "id": "CallbackUrl",
      "namespace": "me.payment.method",
      "description": "Callback URL's to register a new payment method",
      "properties": {
        "cancel": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "URL when customer cancels the action",
          "required": true
        },
        "error": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "URL when registration encounters an error",
          "required": true
        },
        "failure": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "URL when registration failed",
          "required": true
        },
        "pending": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "URL when payment method is in validation",
          "required": true
        },
        "success": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "URL when payment method registration success",
          "required": true
        }
      }
    },
    "me.payment.method.Icon": {
      "id": "Icon",
      "namespace": "me.payment.method",
      "description": "Icon",
      "properties": {
        "data": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Icon in base64",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Icon name",
          "required": false
        }
      }
    },
    "me.payment.method.PaymentMethod": {
      "id": "PaymentMethod",
      "namespace": "me.payment.method",
      "description": "Payment method object",
      "properties": {
        "billingContactId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Associated billing contact ID",
          "required": false
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Creation date",
          "required": true
        },
        "default": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Creation date",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Custom customer description",
          "required": false
        },
        "expirationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Expiration date",
          "required": false
        },
        "icon": {
          "type": "me.payment.method.Icon",
          "fullType": "me.payment.method.Icon",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment method type icon",
          "required": true
        },
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Payment method public label",
          "required": false
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Last update date",
          "required": true
        },
        "paymentMeanId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Payment mean ID associated to this payment method",
          "required": false
        },
        "paymentMethodId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment method ID",
          "required": true
        },
        "paymentSubType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Payment method sub-type",
          "required": false
        },
        "paymentType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment method type",
          "required": true
        },
        "status": {
          "type": "me.payment.method.PaymentMethod.Status",
          "fullType": "me.payment.method.PaymentMethod.Status",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment method status",
          "required": true
        }
      }
    },
    "me.payment.method.PaymentMethod.Status": {
      "id": "Status",
      "namespace": "me.payment.method.PaymentMethod",
      "description": "Payment method status enum",
      "enum": [
        "CANCELED",
        "CANCELING",
        "CREATED",
        "ERROR",
        "EXPIRED",
        "CREATING",
        "MAINTENANCE",
        "PAUSED",
        "VALID"
      ],
      "enumType": "string"
    },
    "me.payment.method.Register.ValidationResult": {
      "id": "ValidationResult",
      "namespace": "me.payment.method.Register",
      "description": "Register validation payload result",
      "properties": {
        "formSessionId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Form session ID",
          "required": false
        },
        "merchantId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Merchant ID",
          "required": false
        },
        "organizationId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Organization ID",
          "required": false
        },
        "paymentMethodId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Register new payment method ID",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Register validation URL",
          "required": false
        },
        "validationType": {
          "type": "payment.method.IntegrationType",
          "fullType": "payment.method.IntegrationType",
          "canBeNull": false,
          "readOnly": false,
          "description": "Register validation type",
          "required": true
        }
      }
    },
    "me.payment.method.Transaction": {
      "id": "Transaction",
      "namespace": "me.payment.method",
      "description": "Payment method transaction object",
      "properties": {
        "amount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Transaction amount",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Creation date",
          "required": true
        },
        "status": {
          "type": "me.payment.method.Transaction.Status",
          "fullType": "me.payment.method.Transaction.Status",
          "canBeNull": false,
          "readOnly": false,
          "description": "Transaction status",
          "required": true
        },
        "transactionId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Transaction ID",
          "required": true
        },
        "type": {
          "type": "me.payment.method.Transaction.Type",
          "fullType": "me.payment.method.Transaction.Type",
          "canBeNull": false,
          "readOnly": false,
          "description": "Transaction type",
          "required": true
        }
      }
    },
    "me.payment.method.Transaction.Status": {
      "id": "Status",
      "namespace": "me.payment.method.Transaction",
      "description": "Payment transaction status enum",
      "enum": [
        "CANCELED",
        "CANCELING",
        "CONFIRMING",
        "CREATED",
        "ERROR",
        "FAILED",
        "READY",
        "SUCCESS"
      ],
      "enumType": "string"
    },
    "me.payment.method.Transaction.Type": {
      "id": "Type",
      "namespace": "me.payment.method.Transaction",
      "description": "Payment transaction type enum",
      "enum": [
        "CREDIT",
        "DEBIT"
      ],
      "enumType": "string"
    },
    "nichandle.Authentication.Group": {
      "id": "Group",
      "namespace": "nichandle.Authentication",
      "description": "A group",
      "properties": {
        "creation": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of this group",
          "required": true
        },
        "defaultGroup": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "True if it is an default group. This kind of group can't be edited or deleted",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Group's description",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last update of this group",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Group's name",
          "required": true
        },
        "role": {
          "type": "nichandle.RoleEnum",
          "fullType": "nichandle.RoleEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Group's role",
          "required": true
        }
      }
    },
    "nichandle.CountryEnum": {
      "id": "CountryEnum",
      "namespace": "nichandle",
      "description": "Countries a nichandle can choose",
      "enum": [
        "AC",
        "AD",
        "AE",
        "AF",
        "AG",
        "AI",
        "AL",
        "AM",
        "AO",
        "AQ",
        "AR",
        "AS",
        "AT",
        "AU",
        "AW",
        "AX",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BL",
        "BM",
        "BN",
        "BO",
        "BQ",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CC",
        "CD",
        "CF",
        "CG",
        "CH",
        "CI",
        "CK",
        "CL",
        "CM",
        "CN",
        "CO",
        "CR",
        "CU",
        "CV",
        "CW",
        "CX",
        "CY",
        "CZ",
        "DE",
        "DG",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EA",
        "EC",
        "EE",
        "EG",
        "EH",
        "ER",
        "ES",
        "ET",
        "FI",
        "FJ",
        "FK",
        "FM",
        "FO",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GF",
        "GG",
        "GH",
        "GI",
        "GL",
        "GM",
        "GN",
        "GP",
        "GQ",
        "GR",
        "GS",
        "GT",
        "GU",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "IC",
        "ID",
        "IE",
        "IL",
        "IM",
        "IN",
        "IO",
        "IQ",
        "IR",
        "IS",
        "IT",
        "JE",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KP",
        "KR",
        "KW",
        "KY",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MF",
        "MG",
        "MH",
        "MK",
        "ML",
        "MM",
        "MN",
        "MO",
        "MP",
        "MQ",
        "MR",
        "MS",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NC",
        "NE",
        "NF",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NU",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PF",
        "PG",
        "PH",
        "PK",
        "PL",
        "PM",
        "PN",
        "PR",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RE",
        "RO",
        "RS",
        "RU",
        "RW",
        "SA",
        "SB",
        "SC",
        "SD",
        "SE",
        "SG",
        "SH",
        "SI",
        "SJ",
        "SK",
        "SL",
        "SM",
        "SN",
        "SO",
        "SR",
        "SS",
        "ST",
        "SV",
        "SX",
        "SY",
        "SZ",
        "TA",
        "TC",
        "TD",
        "TF",
        "TG",
        "TH",
        "TJ",
        "TK",
        "TL",
        "TM",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "UM",
        "UNKNOWN",
        "US",
        "UY",
        "UZ",
        "VA",
        "VC",
        "VE",
        "VG",
        "VI",
        "VN",
        "VU",
        "WF",
        "WS",
        "XK",
        "YE",
        "YT",
        "ZA",
        "ZM",
        "ZW"
      ],
      "enumType": "string"
    },
    "nichandle.Currency": {
      "id": "Currency",
      "namespace": "nichandle",
      "description": "Customer currency",
      "properties": {
        "code": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Currency code",
          "required": true
        },
        "symbol": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Currency symbol",
          "required": true
        }
      }
    },
    "nichandle.DeveloperModeRestriction": {
      "id": "DeveloperModeRestriction",
      "namespace": "nichandle",
      "description": "Login restrictions on a development version of the Manager",
      "properties": {
        "enabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Allow login on your account on a development version of the Manager",
          "required": true
        }
      }
    },
    "nichandle.DomainTask": {
      "id": "DomainTask",
      "namespace": "nichandle",
      "description": "Domain tasks",
      "properties": {
        "canAccelerate": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Can accelerate the task",
          "required": true
        },
        "canCancel": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Can cancel the task",
          "required": true
        },
        "canRelaunch": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Can relaunch the task",
          "required": true
        },
        "comment": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Comment about the task",
          "required": false
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of the task",
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain of the task",
          "required": true
        },
        "doneDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Done date of the task",
          "required": false
        },
        "function": {
          "type": "domain.NicOperationFunctionEnum",
          "fullType": "domain.NicOperationFunctionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Function of the task",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the task",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last update date of the task",
          "required": true
        },
        "status": {
          "type": "domain.OperationStatusEnum",
          "fullType": "domain.OperationStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of the task",
          "required": true
        },
        "todoDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Todo date of the task",
          "required": true
        }
      }
    },
    "nichandle.DomainTaskArgument": {
      "id": "DomainTaskArgument",
      "namespace": "nichandle",
      "description": "Domain operation argument",
      "properties": {
        "acceptedFormats": {
          "type": "domain.DocumentFormatsEnum[]",
          "fullType": "domain.DocumentFormatsEnum[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "List of accepted formats",
          "required": false
        },
        "acceptedValues": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "List of accepted values",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Description of the argument",
          "required": false
        },
        "fields": {
          "type": "xander.ContactFieldEnum[]",
          "fullType": "xander.ContactFieldEnum[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "List of impacted field names",
          "required": false
        },
        "key": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Key of the argument",
          "required": true
        },
        "maximumSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Maximum of the content length that you can send",
          "required": false
        },
        "minimumSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Minimum of the content length that you can send",
          "required": false
        },
        "readOnly": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "True if the argument is in read only",
          "required": true
        },
        "template": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Template of the content",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type of the argument",
          "required": true
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Value of the argument",
          "required": false
        }
      }
    },
    "nichandle.DomainTaskProgressBar": {
      "id": "DomainTaskProgressBar",
      "namespace": "nichandle",
      "description": "Domain operation progress",
      "properties": {
        "currentStep": {
          "type": "domain.OperationStep",
          "fullType": "domain.OperationStep",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current step of the operation",
          "required": true
        },
        "expectedDoneDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "The estimated end date of the task",
          "required": false
        },
        "followUpSteps": {
          "type": "domain.OperationStep[]",
          "fullType": "domain.OperationStep[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "all the steps of operation",
          "required": false
        },
        "lastUpdateDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "The last update date of the task",
          "required": false
        },
        "progress": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Progress percentage of the task",
          "required": true
        },
        "taskActions": {
          "type": "domain.OperationActionEnum[]",
          "fullType": "domain.OperationActionEnum[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Action possible on task",
          "required": true
        },
        "taskStatus": {
          "type": "domain.OperationStatusEnum",
          "fullType": "domain.OperationStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The status of the task",
          "required": true
        }
      }
    },
    "nichandle.GenderEnum": {
      "id": "GenderEnum",
      "namespace": "nichandle",
      "description": "All genders a person can choose",
      "enum": [
        "female",
        "male"
      ],
      "enumType": "string"
    },
    "nichandle.IpRegistryEnum": {
      "id": "IpRegistryEnum",
      "namespace": "nichandle",
      "description": "Ip registries",
      "enum": [
        "ARIN",
        "RIPE"
      ],
      "enumType": "string"
    },
    "nichandle.IpRestriction": {
      "id": "IpRestriction",
      "namespace": "nichandle",
      "description": "List of all IP Restrictions",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "The Id of the restriction",
          "required": true
        },
        "ip": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": true,
          "description": "An IP range where we will apply the rule",
          "required": true
        },
        "rule": {
          "type": "nichandle.accessRestriction.IpRestrictionRuleEnum",
          "fullType": "nichandle.accessRestriction.IpRestrictionRuleEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Accept or deny IP access",
          "required": true
        },
        "warning": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Send an email if someone try to access with this IP address",
          "required": true
        }
      }
    },
    "nichandle.IpRestrictionDefaultRule": {
      "id": "IpRestrictionDefaultRule",
      "namespace": "nichandle",
      "description": "IP Restriction default rule",
      "properties": {
        "rule": {
          "type": "nichandle.accessRestriction.IpRestrictionRuleEnum",
          "fullType": "nichandle.accessRestriction.IpRestrictionRuleEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Accept or deny access",
          "required": true
        },
        "warning": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Send an email if someone try to access",
          "required": true
        }
      }
    },
    "nichandle.Ipv4Org": {
      "id": "Ipv4Org",
      "namespace": "nichandle",
      "description": "Details about an IP block organisation",
      "properties": {
        "abuse_mailbox": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "address": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "country": {
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "firstname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "lastname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "organisationId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "phone": {
          "type": "phoneNumber",
          "fullType": "phoneNumber",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "registry": {
          "type": "nichandle.IpRegistryEnum",
          "fullType": "nichandle.IpRegistryEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "state": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "zip": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "nichandle.LanguageEnum": {
      "id": "LanguageEnum",
      "namespace": "nichandle",
      "description": "Languages a nichandle can choose",
      "enum": [
        "cs_CZ",
        "de_DE",
        "en_AU",
        "en_CA",
        "en_GB",
        "en_IE",
        "en_US",
        "es_ES",
        "fi_FI",
        "fr_CA",
        "fr_FR",
        "fr_MA",
        "fr_SN",
        "fr_TN",
        "it_IT",
        "lt_LT",
        "nl_NL",
        "pl_PL",
        "pt_PT"
      ],
      "enumType": "string"
    },
    "nichandle.LegalFormEnum": {
      "id": "LegalFormEnum",
      "namespace": "nichandle",
      "description": "Legal forms a nichandle can be registered as",
      "enum": [
        "administration",
        "association",
        "corporation",
        "individual",
        "other",
        "personalcorporation"
      ],
      "enumType": "string"
    },
    "nichandle.NicAutorenewInfos": {
      "id": "NicAutorenewInfos",
      "namespace": "nichandle",
      "description": "Auto renewal information",
      "properties": {
        "active": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Renewal active or not",
          "required": true
        },
        "lastRenew": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "give the last renew",
          "required": false
        },
        "renewDay": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "give the renewal day",
          "required": true
        }
      }
    },
    "nichandle.Nichandle": {
      "id": "Nichandle",
      "namespace": "nichandle",
      "description": "Details about your OVH identifier",
      "properties": {
        "address": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "area": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "birthCity": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "birthDay": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "companyNationalIdentificationNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "corporationType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "country": {
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "currency": {
          "type": "nichandle.Currency",
          "fullType": "nichandle.Currency",
          "canBeNull": false,
          "readOnly": true,
          "description": "Customer currency",
          "required": true
        },
        "customerCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Your customer code (a numerical value used for identification when contacting support via phone call)",
          "required": false
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "fax": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "firstname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "italianSDI": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "language": {
          "type": "nichandle.LanguageEnum",
          "fullType": "nichandle.LanguageEnum",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "legalform": {
          "type": "nichandle.LegalFormEnum",
          "fullType": "nichandle.LegalFormEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "nationalIdentificationNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "nichandle": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "organisation": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "ovhCompany": {
          "type": "nichandle.OvhCompanyEnum",
          "fullType": "nichandle.OvhCompanyEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "ovhSubsidiary": {
          "type": "nichandle.OvhSubsidiaryEnum",
          "fullType": "nichandle.OvhSubsidiaryEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "phone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "phoneCountry": {
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "sex": {
          "type": "nichandle.GenderEnum",
          "fullType": "nichandle.GenderEnum",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "spareEmail": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "state": {
          "type": "nichandle.StateEnum",
          "fullType": "nichandle.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "vat": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "zip": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "nichandle.OvhCompanyEnum": {
      "id": "OvhCompanyEnum",
      "namespace": "nichandle",
      "description": "OVH subsidiaries",
      "enum": [
        "kimsufi",
        "ovh",
        "soyoustart"
      ],
      "enumType": "string"
    },
    "nichandle.OvhSubsidiaryEnum": {
      "id": "OvhSubsidiaryEnum",
      "namespace": "nichandle",
      "description": "OVH subsidiaries",
      "enum": [
        "ASIA",
        "AU",
        "CA",
        "CZ",
        "DE",
        "ES",
        "EU",
        "FI",
        "FR",
        "GB",
        "IE",
        "IT",
        "LT",
        "MA",
        "NL",
        "PL",
        "PT",
        "QC",
        "SG",
        "SN",
        "TN",
        "US",
        "WE",
        "WS"
      ],
      "enumType": "string"
    },
    "nichandle.RoleEnum": {
      "id": "RoleEnum",
      "namespace": "nichandle",
      "description": "Permission given on the account",
      "enum": [
        "REGULAR",
        "ADMIN",
        "UNPRIVILEGED"
      ],
      "enumType": "string"
    },
    "nichandle.StateEnum": {
      "id": "StateEnum",
      "namespace": "nichandle",
      "description": "States a nichandle can be in",
      "enum": [
        "complete",
        "incomplete"
      ],
      "enumType": "string"
    },
    "nichandle.SubAccount": {
      "id": "SubAccount",
      "namespace": "nichandle",
      "description": "Sub Account",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "This sub-account description",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "This sub-account id",
          "required": true
        }
      }
    },
    "nichandle.SubAccountConsumerKey": {
      "id": "SubAccountConsumerKey",
      "namespace": "nichandle",
      "description": "Credentials to interact with the api on behalf of the sub-account",
      "properties": {
        "consumerKey": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The consumer key",
          "required": true
        }
      }
    },
    "nichandle.Subscription": {
      "id": "Subscription",
      "namespace": "nichandle",
      "description": "List of all OVH things you can subscribe to",
      "properties": {
        "registered": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Determine whether you are registered or not",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The type of subscription",
          "required": true
        }
      }
    },
    "nichandle.User": {
      "id": "User",
      "namespace": "nichandle",
      "description": "A user",
      "properties": {
        "creation": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of this user",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "User's description",
          "required": true
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "User's email",
          "required": true
        },
        "group": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "User's group",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last update of this user",
          "required": true
        },
        "login": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "User's login suffix",
          "required": true
        },
        "passwordLastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "When the user changed his password for the last time",
          "required": true
        },
        "status": {
          "type": "nichandle.UserStatus",
          "fullType": "nichandle.UserStatus",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current user's status",
          "required": true
        }
      }
    },
    "nichandle.UserStatus": {
      "id": "UserStatus",
      "namespace": "nichandle",
      "description": "Status of a User",
      "enum": [
        "OK",
        "DISABLED",
        "PASSWORD_CHANGE_REQUIRED"
      ],
      "enumType": "string"
    },
    "nichandle.VoucherStatus": {
      "id": "VoucherStatus",
      "namespace": "nichandle",
      "description": "Voucher Status and Information",
      "properties": {
        "validity": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Is voucher valid",
          "required": true
        }
      }
    },
    "nichandle.accessRestriction.IpRestrictionRuleEnum": {
      "id": "IpRestrictionRuleEnum",
      "namespace": "nichandle.accessRestriction",
      "description": "Accept or deny IP access",
      "enum": [
        "accept",
        "deny"
      ],
      "enumType": "string"
    },
    "nichandle.accessRestriction.SOTPAccount": {
      "id": "SOTPAccount",
      "namespace": "nichandle.accessRestriction",
      "description": "SOTP Two-Factor Authentication",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "lastUsedDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last used date",
          "required": false
        },
        "remaining": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number of remaining codes",
          "required": true
        },
        "status": {
          "type": "nichandle.accessRestriction.SOTPStatusEnum",
          "fullType": "nichandle.accessRestriction.SOTPStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of this account",
          "required": true
        }
      }
    },
    "nichandle.accessRestriction.SOTPSecret": {
      "id": "SOTPSecret",
      "namespace": "nichandle.accessRestriction",
      "description": "Describe SOTP secret keys",
      "properties": {
        "codes": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "nichandle.accessRestriction.SOTPStatusEnum": {
      "id": "SOTPStatusEnum",
      "namespace": "nichandle.accessRestriction",
      "description": "Status of SOTP account",
      "enum": [
        "disabled",
        "enabled",
        "needCodeValidation",
        "needEmailValidation"
      ],
      "enumType": "string"
    },
    "nichandle.accessRestriction.SOTPValidate": {
      "id": "SOTPValidate",
      "namespace": "nichandle.accessRestriction",
      "description": "Describe SOTP validation status",
      "properties": {
        "remainingCodes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "nichandle.accessRestriction.SmsAccount": {
      "id": "SmsAccount",
      "namespace": "nichandle.accessRestriction",
      "description": "Sms Two-Factor Authentication",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description of this phone",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "The Id of the restriction",
          "required": true
        },
        "lastUsedDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last used date",
          "required": false
        },
        "phoneNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Associated phone number",
          "required": true
        },
        "status": {
          "type": "nichandle.accessRestriction.SmsStatusEnum",
          "fullType": "nichandle.accessRestriction.SmsStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of this account",
          "required": true
        }
      }
    },
    "nichandle.accessRestriction.SmsCode": {
      "id": "SmsCode",
      "namespace": "nichandle.accessRestriction",
      "description": "Send secret code",
      "properties": {
        "challenge": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "nichandle.accessRestriction.SmsSecret": {
      "id": "SmsSecret",
      "namespace": "nichandle.accessRestriction",
      "description": "Describe secret key",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "remainingTry": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "nichandle.accessRestriction.SmsStatusEnum": {
      "id": "SmsStatusEnum",
      "namespace": "nichandle.accessRestriction",
      "description": "Status of the Sms account",
      "enum": [
        "disabled",
        "enabled",
        "needCodeValidation",
        "needEmailValidation"
      ],
      "enumType": "string"
    },
    "nichandle.accessRestriction.TOTPAccount": {
      "id": "TOTPAccount",
      "namespace": "nichandle.accessRestriction",
      "description": "TOTP Two-Factor Authentication",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description of this TOTP",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "The Id of the restriction",
          "required": true
        },
        "lastUsedDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last used date",
          "required": false
        },
        "status": {
          "type": "nichandle.accessRestriction.TOTPStatusEnum",
          "fullType": "nichandle.accessRestriction.TOTPStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of this account",
          "required": true
        }
      }
    },
    "nichandle.accessRestriction.TOTPSecret": {
      "id": "TOTPSecret",
      "namespace": "nichandle.accessRestriction",
      "description": "Describe TOTP secret keys",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "qrcodeHelper": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "secret": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "nichandle.accessRestriction.TOTPStatusEnum": {
      "id": "TOTPStatusEnum",
      "namespace": "nichandle.accessRestriction",
      "description": "Status of TOTP account",
      "enum": [
        "disabled",
        "enabled",
        "needCodeValidation",
        "needEmailValidation"
      ],
      "enumType": "string"
    },
    "nichandle.accessRestriction.U2FAccount": {
      "id": "U2FAccount",
      "namespace": "nichandle.accessRestriction",
      "description": "U2F Two-Factor Authentication",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description of this U2F key",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "The Id of the restriction",
          "required": true
        },
        "lastUsedDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last used date",
          "required": false
        },
        "status": {
          "type": "nichandle.accessRestriction.U2FStatusEnum",
          "fullType": "nichandle.accessRestriction.U2FStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of this account",
          "required": true
        }
      }
    },
    "nichandle.accessRestriction.U2FRegisterChallenge": {
      "id": "U2FRegisterChallenge",
      "namespace": "nichandle.accessRestriction",
      "description": "U2F Register Request",
      "properties": {
        "applicationId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "request": {
          "type": "nichandle.accessRestriction.U2FRegistrationRequest",
          "fullType": "nichandle.accessRestriction.U2FRegistrationRequest",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "nichandle.accessRestriction.U2FRegistrationRequest": {
      "id": "U2FRegistrationRequest",
      "namespace": "nichandle.accessRestriction",
      "description": "Describe U2F RegistrationRequest",
      "properties": {
        "challenge": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "nichandle.accessRestriction.U2FSignChallenge": {
      "id": "U2FSignChallenge",
      "namespace": "nichandle.accessRestriction",
      "description": "U2F Register Request",
      "properties": {
        "applicationId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "request": {
          "type": "nichandle.accessRestriction.U2FSignRequest",
          "fullType": "nichandle.accessRestriction.U2FSignRequest",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "nichandle.accessRestriction.U2FSignRequest": {
      "id": "U2FSignRequest",
      "namespace": "nichandle.accessRestriction",
      "description": "Describe U2F SignRequest",
      "properties": {
        "challenge": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "keyHandle": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "nichandle.accessRestriction.U2FStatusEnum": {
      "id": "U2FStatusEnum",
      "namespace": "nichandle.accessRestriction",
      "description": "Status of U2F account",
      "enum": [
        "disabled",
        "enabled",
        "needCodeValidation"
      ],
      "enumType": "string"
    },
    "nichandle.changeContact.ContactTypeEnum": {
      "id": "ContactTypeEnum",
      "namespace": "nichandle.changeContact",
      "description": "Allowed types of contact who can be changed by change contact task",
      "enum": [
        "contactAdmin",
        "contactBilling",
        "contactTech"
      ],
      "enumType": "string"
    },
    "nichandle.changeContact.TaskStateEnum": {
      "id": "TaskStateEnum",
      "namespace": "nichandle.changeContact",
      "description": "State of contact change task",
      "enum": [
        "aborted",
        "checkValidity",
        "doing",
        "done",
        "error",
        "expired",
        "refused",
        "todo",
        "validatingByCustomers"
      ],
      "enumType": "string"
    },
    "nichandle.changeEmail.TaskStateEnum": {
      "id": "TaskStateEnum",
      "namespace": "nichandle.changeEmail",
      "description": "State of email change task",
      "enum": [
        "aborted",
        "done",
        "refused",
        "todo"
      ],
      "enumType": "string"
    },
    "nichandle.contactChange.Task": {
      "id": "Task",
      "namespace": "nichandle.contactChange",
      "description": "Task running a contact change on a service",
      "properties": {
        "askingAccount": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Account who asked the contact change",
          "required": false
        },
        "contactTypes": {
          "type": "nichandle.changeContact.ContactTypeEnum[]",
          "fullType": "nichandle.changeContact.ContactTypeEnum[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Contacts to be changed",
          "required": true
        },
        "dateDone": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Date at which the contact change has been finished",
          "required": false
        },
        "dateRequest": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date at which the request has been made",
          "required": true
        },
        "fromAccount": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account to change contact from",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "serviceDomain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "The service on which the task runs",
          "required": false
        },
        "state": {
          "type": "nichandle.changeContact.TaskStateEnum",
          "fullType": "nichandle.changeContact.TaskStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current state of the request",
          "required": true
        },
        "toAccount": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account to change contact to",
          "required": true
        }
      }
    },
    "nichandle.document.Document": {
      "id": "Document",
      "namespace": "nichandle.document",
      "description": "List of documents added on your account",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Document creation",
          "required": true
        },
        "expirationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Document expiration",
          "required": false
        },
        "getUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "URL used to get document",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Document id",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Document name",
          "required": true
        },
        "putUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "URL used to put document",
          "required": true
        },
        "size": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Document size (in bytes)",
          "required": true
        },
        "tags": {
          "type": "complexType.SafeKeyValue<string>[]",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Document tags",
          "required": true
        },
        "validationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Document validation",
          "required": false
        }
      }
    },
    "nichandle.emailChange.Task": {
      "id": "Task",
      "namespace": "nichandle.emailChange",
      "description": "Task running an email change on an account",
      "properties": {
        "dateDone": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "End date of that request",
          "required": false
        },
        "dateRequest": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of that request",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "newEmail": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The email address to change for",
          "required": true
        },
        "state": {
          "type": "nichandle.changeEmail.TaskStateEnum",
          "fullType": "nichandle.changeEmail.TaskStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current state of the request",
          "required": true
        }
      }
    },
    "nichandle.emailNotification": {
      "id": "emailNotification",
      "namespace": "nichandle",
      "description": "Email notification",
      "properties": {
        "body": {
          "type": "text",
          "fullType": "text",
          "canBeNull": false,
          "readOnly": true,
          "description": "This email body",
          "required": true
        },
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "This email date",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "This email Id",
          "required": true
        },
        "subject": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "This email subject",
          "required": true
        }
      }
    },
    "nichandle.ipxe": {
      "id": "ipxe",
      "namespace": "nichandle",
      "description": "Customer IPXE scripts",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of this script",
          "required": true
        },
        "script": {
          "type": "text",
          "fullType": "text",
          "canBeNull": false,
          "readOnly": true,
          "description": "Content of your IPXE script",
          "required": true
        }
      }
    },
    "nichandle.sshKey": {
      "id": "sshKey",
      "namespace": "nichandle",
      "description": "Customer public SSH key, can be used for rescue netboot or server access after reinstallation",
      "properties": {
        "default": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "True when this public SSH key is used for rescue mode and reinstallations",
          "required": true
        },
        "key": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "ASCII encoded public SSH key",
          "required": true
        },
        "keyName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of this public SSH key",
          "required": true
        }
      }
    },
    "order.CurrencyCodeEnum": {
      "id": "CurrencyCodeEnum",
      "namespace": "order",
      "enum": [
        "AUD",
        "CAD",
        "CZK",
        "EUR",
        "GBP",
        "LTL",
        "MAD",
        "N/A",
        "PLN",
        "SGD",
        "TND",
        "USD",
        "XOF",
        "points"
      ],
      "enumType": "string"
    },
    "order.Price": {
      "id": "Price",
      "namespace": "order",
      "description": "Price with it's currency and textual representation",
      "properties": {
        "currencyCode": {
          "type": "order.CurrencyCodeEnum",
          "fullType": "order.CurrencyCodeEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "text": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "payment.method.AvailablePaymentMethod": {
      "id": "AvailablePaymentMethod",
      "namespace": "payment.method",
      "description": "Available payment methods",
      "properties": {
        "icon": {
          "type": "payment.method.Icon",
          "fullType": "payment.method.Icon",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment method type icon",
          "required": true
        },
        "integration": {
          "type": "payment.method.IntegrationType",
          "fullType": "payment.method.IntegrationType",
          "canBeNull": false,
          "readOnly": false,
          "description": "Graphical payment integration to use",
          "required": true
        },
        "oneshot": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment method type is possible to pay in oneshot mode ?",
          "required": true
        },
        "paymentType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment method type",
          "required": true
        },
        "registerable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment method type is registerable ?",
          "required": true
        },
        "registerableWithTransaction": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Payment method type is registerable with the possibility to pay in same time an order ?",
          "required": true
        }
      }
    },
    "payment.method.Icon": {
      "id": "Icon",
      "namespace": "payment.method",
      "description": "Payment icon",
      "properties": {
        "data": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Icon data in base64",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Icon name",
          "required": false
        }
      }
    },
    "payment.method.IntegrationType": {
      "id": "IntegrationType",
      "namespace": "payment.method",
      "description": "Payment method integration type",
      "enum": [
        "DONE",
        "IFRAME_VANTIV",
        "IN_CONTEXT",
        "REDIRECT"
      ],
      "enumType": "string"
    },
    "telephony.BillingSettings": {
      "id": "BillingSettings",
      "namespace": "telephony",
      "description": "Billing policies settings",
      "properties": {
        "renewByBillingContact": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Renew is done by billing contact instead of billing account",
          "required": true
        }
      }
    },
    "telephony.DefaultIpRestriction": {
      "id": "DefaultIpRestriction",
      "namespace": "telephony",
      "description": "Default IP restriction of a VoIP line",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "subnet": {
          "type": "ipv4Block",
          "fullType": "ipv4Block",
          "canBeNull": false,
          "readOnly": true,
          "description": "The IPv4 subnet you want to allow",
          "required": true
        },
        "type": {
          "type": "telephony.ProtocolEnum",
          "fullType": "telephony.ProtocolEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The protocol you want to restrict (sip/mgcp)",
          "required": true
        }
      }
    },
    "telephony.LineDescriptionSettings": {
      "id": "LineDescriptionSettings",
      "namespace": "telephony",
      "description": "Line description policies settings",
      "properties": {
        "displayOnBill": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Line's description is displayed on bills",
          "required": true
        },
        "displayOnIncomingCall": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Line's description is displayed on incoming calls",
          "required": true
        }
      }
    },
    "telephony.MailDomain2Service": {
      "id": "MailDomain2Service",
      "namespace": "telephony",
      "description": "Custom domains of your fax services",
      "properties": {
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The custom domain of your fax services",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "telephony.ProtocolEnum": {
      "id": "ProtocolEnum",
      "namespace": "telephony",
      "description": "Phone protocol",
      "enum": [
        "mgcp",
        "sip"
      ],
      "enumType": "string"
    },
    "telephony.Settings": {
      "id": "Settings",
      "namespace": "telephony",
      "description": "Telephony settings linked to the customer account",
      "properties": {
        "billingPolicies": {
          "type": "telephony.BillingSettings",
          "fullType": "telephony.BillingSettings",
          "canBeNull": false,
          "readOnly": false,
          "description": "Billing policies settings",
          "required": true
        },
        "lineDescriptionPolicies": {
          "type": "telephony.LineDescriptionSettings",
          "fullType": "telephony.LineDescriptionSettings",
          "canBeNull": false,
          "readOnly": false,
          "description": "Line description policies settings",
          "required": true
        }
      }
    },
    "xander.ContactFieldEnum": {
      "id": "ContactFieldEnum",
      "namespace": "xander",
      "description": "Available contact fields",
      "enum": [
        "address.city",
        "address.country",
        "address.line1",
        "address.line2",
        "address.line3",
        "address.otherDetails",
        "address.province",
        "address.zip",
        "birthCity",
        "birthCountry",
        "birthDay",
        "birthZip",
        "cellPhone",
        "companyNationalIdentificationNumber",
        "email",
        "fax",
        "firstName",
        "gender",
        "language",
        "lastName",
        "legalForm",
        "nationalIdentificationNumber",
        "nationality",
        "organisationName",
        "organisationType",
        "phone",
        "spareEmail",
        "vat"
      ],
      "enumType": "string"
    },
    "xdsl.Setting": {
      "id": "Setting",
      "namespace": "xdsl",
      "description": "Xdsl Settings",
      "properties": {
        "resellerFastModemShipping": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Send the modem as soon as possible, do not wait the xdsl line to be active",
          "required": true
        },
        "resellerModemBasicConfig": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Let the modem with vendor configuration. It prevent to apply the config managed by ovh manager",
          "required": true
        }
      }
    }
  }
}