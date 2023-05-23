import {Schema} from '../../src/schema';

// imported from https://ca.api.kimsufi.com:443/1.0/me.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Details about your OVH identifier",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "nichandle.Nichandle"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.Nichandle",
              "description": "New object properties",
              "fullType": "nichandle.Nichandle",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me"
    },
    {
      "description": "SOTP Two-Factor Authentication",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this Two-Factor",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/accessRestriction/backupCode/delete"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/accessRestriction/backupCode/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "nichandle.accessRestriction.SOTPAccount"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a SOTP access restriction",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/accessRestriction/backupCode/create"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "nichandle.accessRestriction.SOTPSecret"
        }
      ],
      "path": "/me/accessRestriction/backupCode"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable this SOTP account",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/accessRestriction/backupCode/disable"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "OTP code given by the application",
              "fullType": "password",
              "name": "code",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/backupCode/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Enable this SOTP account",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/accessRestriction/backupCode/enable"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "OTP code given by the application",
              "fullType": "password",
              "name": "code",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/backupCode/enable"
    },
    {
      "description": "validate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Validate your SOTP account",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/accessRestriction/backupCode/validate"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "OTP code given by the application",
              "fullType": "password",
              "name": "code",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "nichandle.accessRestriction.SOTPValidate"
        }
      ],
      "path": "/me/accessRestriction/backupCode/validate"
    },
    {
      "description": "Login restrictions on a development version of the Manager",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/accessRestriction/developerMode/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "nichandle.DeveloperModeRestriction"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/accessRestriction/developerMode/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.DeveloperModeRestriction",
              "description": "New object properties",
              "fullType": "nichandle.DeveloperModeRestriction",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/developerMode"
    },
    {
      "description": "List the nichandle.IpRestriction objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of IP restrictions",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/accessRestriction/ip/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add an IP access restriction",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/accessRestriction/ip/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "An IP range where we will apply the rule",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "nichandle.accessRestriction.IpRestrictionRuleEnum",
              "description": "Accept or deny IP access",
              "fullType": "nichandle.accessRestriction.IpRestrictionRuleEnum",
              "name": "rule",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Send an email if someone try to access with this IP address",
              "fullType": "boolean",
              "name": "warning",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/ip"
    },
    {
      "description": "List of all IP Restrictions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this restriction rule",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/accessRestriction/ip/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/accessRestriction/ip/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "nichandle.IpRestriction"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/accessRestriction/ip/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.IpRestriction",
              "description": "New object properties",
              "fullType": "nichandle.IpRestriction",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/ip/{id}"
    },
    {
      "description": "IP Restriction default rule",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/accessRestriction/ipDefaultRule/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "nichandle.IpRestrictionDefaultRule"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/accessRestriction/ipDefaultRule/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.IpRestrictionDefaultRule",
              "description": "New object properties",
              "fullType": "nichandle.IpRestrictionDefaultRule",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/ipDefaultRule"
    },
    {
      "description": "List the nichandle.accessRestriction.SmsAccount objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of Sms accounts",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/accessRestriction/sms/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a SMS access restriction",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/accessRestriction/sms/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cell phone number to register",
              "fullType": "string",
              "name": "phone",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "nichandle.accessRestriction.SmsSecret"
        }
      ],
      "path": "/me/accessRestriction/sms"
    },
    {
      "description": "Sms Two-Factor Authentication",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this Two-Factor",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/accessRestriction/sms/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/accessRestriction/sms/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "nichandle.accessRestriction.SmsAccount"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/accessRestriction/sms/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.accessRestriction.SmsAccount",
              "description": "New object properties",
              "fullType": "nichandle.accessRestriction.SmsAccount",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/sms/{id}"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable this SMS account",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/accessRestriction/sms/disable"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "SMS code send by a cellphone",
              "fullType": "password",
              "name": "code",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/sms/{id}/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Enable this SMS account",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/accessRestriction/sms/enable"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "SMS code send by a cellphone",
              "fullType": "password",
              "name": "code",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/sms/{id}/enable"
    },
    {
      "description": "sendCode operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Send a SMS to this account",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/accessRestriction/sms/sendCode"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "nichandle.accessRestriction.SmsCode"
        }
      ],
      "path": "/me/accessRestriction/sms/{id}/sendCode"
    },
    {
      "description": "validate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Validate your SMS account",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/accessRestriction/sms/validate"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "SMS code send to a cellphone",
              "fullType": "password",
              "name": "code",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/sms/{id}/validate"
    },
    {
      "description": "List the nichandle.accessRestriction.TOTPAccount objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of TOTP accounts",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/accessRestriction/totp/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a TOTP access restriction",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/accessRestriction/totp/create"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "nichandle.accessRestriction.TOTPSecret"
        }
      ],
      "path": "/me/accessRestriction/totp"
    },
    {
      "description": "TOTP Two-Factor Authentication",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this Two-Factor",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/accessRestriction/totp/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/accessRestriction/totp/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "nichandle.accessRestriction.TOTPAccount"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/accessRestriction/totp/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.accessRestriction.TOTPAccount",
              "description": "New object properties",
              "fullType": "nichandle.accessRestriction.TOTPAccount",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/totp/{id}"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable this TOTP account",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/accessRestriction/totp/disable"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "OTP code given by the application",
              "fullType": "password",
              "name": "code",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/totp/{id}/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Enable this TOTP account",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/accessRestriction/totp/enable"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "OTP code given by the application",
              "fullType": "password",
              "name": "code",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/totp/{id}/enable"
    },
    {
      "description": "validate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Validate your TOTP account",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/accessRestriction/totp/validate"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "OTP code given by the application",
              "fullType": "password",
              "name": "code",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/totp/{id}/validate"
    },
    {
      "description": "List the nichandle.accessRestriction.U2FAccount objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of U2F accounts",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/accessRestriction/u2f/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a U2F access restriction",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/accessRestriction/u2f/create"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "nichandle.accessRestriction.U2FRegisterChallenge"
        }
      ],
      "path": "/me/accessRestriction/u2f"
    },
    {
      "description": "U2F Two-Factor Authentication",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this Two-Factor",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/accessRestriction/u2f/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/accessRestriction/u2f/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "nichandle.accessRestriction.U2FAccount"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/accessRestriction/u2f/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.accessRestriction.U2FAccount",
              "description": "New object properties",
              "fullType": "nichandle.accessRestriction.U2FAccount",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/u2f/{id}"
    },
    {
      "description": "challenge operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get an U2F Challenge",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/accessRestriction/u2f/challenge/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "nichandle.accessRestriction.U2FSignChallenge"
        }
      ],
      "path": "/me/accessRestriction/u2f/{id}/challenge"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable this U2F account",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/accessRestriction/u2f/disable"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "clientData",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "password",
              "description": "",
              "fullType": "password",
              "name": "signatureData",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/u2f/{id}/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Enable this U2F account",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/accessRestriction/u2f/enable"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "clientData",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "password",
              "description": "",
              "fullType": "password",
              "name": "signatureData",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/u2f/{id}/enable"
    },
    {
      "description": "validate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Validate your U2F account",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/accessRestriction/u2f/validate"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "clientData",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "password",
              "description": "",
              "fullType": "password",
              "name": "registrationData",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/u2f/{id}/validate"
    },
    {
      "description": "List the agreements.ContractAgreement objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of contracts signed between you and OVH",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/agreements/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "agreements.AgreementStateEnum",
              "description": "Filter the value of agreed property (like)",
              "fullType": "agreements.AgreementStateEnum",
              "name": "agreed",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of contractId property (like)",
              "fullType": "long",
              "name": "contractId",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/me/agreements"
    },
    {
      "description": "Contract agreement",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/agreements/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the contract",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "agreements.ContractAgreement"
        }
      ],
      "path": "/me/agreements/{id}"
    },
    {
      "description": "accept operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Accept this contract",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/agreements/accept"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the contract",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/me/agreements/{id}/accept"
    },
    {
      "description": "Contract of service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/agreements/contract/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the contract",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "agreements.Contract"
        }
      ],
      "path": "/me/agreements/{id}/contract"
    },
    {
      "description": "Manage your API Applications",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Retrieve all applications",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/api/application/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        }
      ],
      "path": "/me/api/application"
    },
    {
      "description": "Manage your API Applications",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Delete an application. It will revoke all credential belonging to this application",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/api/application/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Application ID",
              "fullType": "long",
              "name": "applicationId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Retrieve information about an application",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/api/application/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Application ID",
              "fullType": "long",
              "name": "applicationId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "auth.ApiApplication"
        }
      ],
      "path": "/me/api/application/{applicationId}"
    },
    {
      "description": "Manage your API Credentials",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Retrieve all credentials",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/api/credential/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Filter by applicationId",
              "fullType": "long",
              "name": "applicationId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "auth.CredentialStateEnum",
              "description": "Filter by status",
              "fullType": "auth.CredentialStateEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/me/api/credential"
    },
    {
      "description": "Manage your API Credentials",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Delete a credential",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/api/credential/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Credential ID",
              "fullType": "long",
              "name": "credentialId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Retrieve information about a credential",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/api/credential/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Credential ID",
              "fullType": "long",
              "name": "credentialId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "auth.ApiCredential"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Edit a credential",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/api/credential/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "auth.ApiCredential",
              "description": "Request Body",
              "fullType": "auth.ApiCredential",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Credential ID",
              "fullType": "long",
              "name": "credentialId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/api/credential/{credentialId}"
    },
    {
      "description": "Get associated application",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get associated application",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/api/credential/application/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Credential ID",
              "fullType": "long",
              "name": "credentialId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "auth.ApiApplication"
        }
      ],
      "path": "/me/api/credential/{credentialId}/application"
    },
    {
      "description": "Auto renewal information",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/autorenew/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "nichandle.NicAutorenewInfos"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Activate auto renew for this nic",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/autorenew/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Day of autorenew",
              "fullType": "long",
              "name": "renewDay",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/autorenew/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.NicAutorenewInfos",
              "description": "New object properties",
              "fullType": "nichandle.NicAutorenewInfos",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/autorenew"
    },
    {
      "description": "availableAutomaticPaymentMeans operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available payment methods in this Nic's country",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/availableAutomaticPaymentMeans/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "billing.AutomaticPaymentMean"
        }
      ],
      "path": "/me/availableAutomaticPaymentMeans"
    },
    {
      "description": "List the billing.Bill objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of all the bills the logged account has",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/bill/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.CategoryEnum",
              "description": "Filter the value of category property (=)",
              "fullType": "billing.CategoryEnum",
              "name": "category",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of date property (>=)",
              "fullType": "datetime",
              "name": "date.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of date property (<=)",
              "fullType": "datetime",
              "name": "date.to",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of orderId property (=)",
              "fullType": "long",
              "name": "orderId",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/me/bill"
    },
    {
      "description": "Details about a Bill",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/bill/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Bill"
        }
      ],
      "path": "/me/bill/{billId}"
    },
    {
      "description": "State of a debt",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/bill/debt/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "debt.Debt"
        }
      ],
      "path": "/me/bill/{billId}/debt"
    },
    {
      "description": "List the debt.Operation objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "All operations related to these debts",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/bill/debt/operation/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filter the value of depositOrderId property (=)",
              "fullType": "long",
              "name": "depositOrderId",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/me/bill/{billId}/debt/operation"
    },
    {
      "description": "Operation that happend on a debt",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/bill/debt/operation/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "debt.Operation"
        }
      ],
      "path": "/me/bill/{billId}/debt/operation/{operationId}"
    },
    {
      "description": "associatedObject operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return main data about the object related to this debt operation",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/bill/debt/operation/associatedObject/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "debt.entry.AssociatedObject"
        }
      ],
      "path": "/me/bill/{billId}/debt/operation/{operationId}/associatedObject"
    },
    {
      "description": "pay operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create an order in order to pay this order's debt",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/bill/debt/pay"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Order"
        }
      ],
      "path": "/me/bill/{billId}/debt/pay"
    },
    {
      "description": "List the billing.BillDetail objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Give access to all entries of the bill",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/bill/details/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/me/bill/{billId}/details"
    },
    {
      "description": "Information about a Bill entry",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/bill/details/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billDetailId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.BillDetail"
        }
      ],
      "path": "/me/bill/{billId}/details/{billDetailId}"
    },
    {
      "description": "Details about a payment",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/bill/payment/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Payment"
        }
      ],
      "path": "/me/bill/{billId}/payment"
    },
    {
      "description": "Exports a bundle of invoices",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Exports a bundle of invoices",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/bill/export"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.ArchiveTypeEnum",
              "description": "The file type of the archive",
              "fullType": "billing.ArchiveTypeEnum",
              "name": "archiveType",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "datetime",
              "description": "End interval of the export",
              "fullType": "datetime",
              "name": "endDate",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string[]",
              "description": "A list of ids to export",
              "fullType": "string[]",
              "name": "ids",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Start interval of the export",
              "fullType": "datetime",
              "name": "startDate",
              "paramType": "body",
              "required": false
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/bill/export"
    },
    {
      "description": "Get all certificates of the account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all certificates of the account",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/certificates/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Certificate definition name",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/me/certificates"
    },
    {
      "description": "changeEmail operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Initiate an email change procedure",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/changeEmail"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "New email to associate to your account",
              "fullType": "string",
              "name": "newEmail",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "nichandle.emailChange.Task"
        }
      ],
      "path": "/me/changeEmail"
    },
    {
      "description": "changePassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Initiate a password change procedure",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/changePassword"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "void"
        }
      ],
      "path": "/me/changePassword"
    },
    {
      "description": "List all consent campaign available",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all consent campaign available",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/consent/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "me.consent.Campaign[]"
        }
      ],
      "path": "/me/consent"
    },
    {
      "description": "Retrieve information about a consent campaign",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve information about a consent campaign",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/consent/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Consent campaign name",
              "fullType": "string",
              "name": "campaignName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.consent.Campaign"
        }
      ],
      "path": "/me/consent/{campaignName}"
    },
    {
      "description": "Get decision value for a consent campaign",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get decision value for a consent campaign",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/consent/decision/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Consent campaign name",
              "fullType": "string",
              "name": "campaignName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.consent.Consent"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update decision of a consent campaign",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/consent/decision/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Decision value",
              "fullType": "boolean",
              "name": "value",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Consent campaign name",
              "fullType": "string",
              "name": "campaignName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/consent/{campaignName}/decision"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve all contact that you created",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/contact/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new contact",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/contact/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "contact.Address",
              "description": "Address of the contact",
              "fullType": "contact.Address",
              "name": "address",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "City of birth",
              "fullType": "string",
              "name": "birthCity",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.CountryEnum",
              "description": "Birth Country",
              "fullType": "nichandle.CountryEnum",
              "name": "birthCountry",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "date",
              "description": "Birthday date",
              "fullType": "date",
              "name": "birthDay",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Birth Zipcode",
              "fullType": "string",
              "name": "birthZip",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "phoneNumber",
              "description": "Cellphone number",
              "fullType": "phoneNumber",
              "name": "cellPhone",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company national identification number",
              "fullType": "string",
              "name": "companyNationalIdentificationNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Email address",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "phoneNumber",
              "description": "Fax phone number",
              "fullType": "phoneNumber",
              "name": "fax",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "First name",
              "fullType": "string",
              "name": "firstName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "nichandle.GenderEnum",
              "description": "Gender",
              "fullType": "nichandle.GenderEnum",
              "name": "gender",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.LanguageEnum",
              "description": "Language",
              "fullType": "nichandle.LanguageEnum",
              "name": "language",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Last name",
              "fullType": "string",
              "name": "lastName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "nichandle.LegalFormEnum",
              "description": "Legal form of the contact",
              "fullType": "nichandle.LegalFormEnum",
              "name": "legalForm",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "National identification number",
              "fullType": "string",
              "name": "nationalIdentificationNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.CountryEnum",
              "description": "Nationality",
              "fullType": "nichandle.CountryEnum",
              "name": "nationality",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Name of your organisation",
              "fullType": "string",
              "name": "organisationName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Type of your organisation",
              "fullType": "string",
              "name": "organisationType",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "phoneNumber",
              "description": "Landline phone number",
              "fullType": "phoneNumber",
              "name": "phone",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "VAT number",
              "fullType": "string",
              "name": "vat",
              "paramType": "body",
              "required": false
            }
          ],
          "responseType": "contact.Contact"
        }
      ],
      "path": "/me/contact"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve information about a contact",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/contact/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Contact Identifier",
              "fullType": "long",
              "name": "contactId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "contact.Contact"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update an existing contact",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/contact/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "contact.Address",
              "description": "Address of the contact",
              "fullType": "contact.Address",
              "name": "address",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "City of birth",
              "fullType": "string",
              "name": "birthCity",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.CountryEnum",
              "description": "Birth Country",
              "fullType": "nichandle.CountryEnum",
              "name": "birthCountry",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "date",
              "description": "Birthday date",
              "fullType": "date",
              "name": "birthDay",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Birth Zipcode",
              "fullType": "string",
              "name": "birthZip",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "phoneNumber",
              "description": "Cellphone number",
              "fullType": "phoneNumber",
              "name": "cellPhone",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company national identification number",
              "fullType": "string",
              "name": "companyNationalIdentificationNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Email address",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "phoneNumber",
              "description": "Fax phone number",
              "fullType": "phoneNumber",
              "name": "fax",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "First name",
              "fullType": "string",
              "name": "firstName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.GenderEnum",
              "description": "Gender",
              "fullType": "nichandle.GenderEnum",
              "name": "gender",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.LanguageEnum",
              "description": "Language",
              "fullType": "nichandle.LanguageEnum",
              "name": "language",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Last name",
              "fullType": "string",
              "name": "lastName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.LegalFormEnum",
              "description": "Legal form of the contact",
              "fullType": "nichandle.LegalFormEnum",
              "name": "legalForm",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "National identification number",
              "fullType": "string",
              "name": "nationalIdentificationNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.CountryEnum",
              "description": "Nationality",
              "fullType": "nichandle.CountryEnum",
              "name": "nationality",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Name of your organisation",
              "fullType": "string",
              "name": "organisationName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Type of your organisation",
              "fullType": "string",
              "name": "organisationType",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "phoneNumber",
              "description": "Landline phone number",
              "fullType": "phoneNumber",
              "name": "phone",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "VAT number",
              "fullType": "string",
              "name": "vat",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Contact Identifier",
              "fullType": "long",
              "name": "contactId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "contact.Contact"
        }
      ],
      "path": "/me/contact/{contactId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Display mandatory/read-only informations of a contact",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/contact/fields/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Contact Identifier",
              "fullType": "long",
              "name": "contactId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "contact.FieldInformation[]"
        }
      ],
      "path": "/me/contact/{contactId}/fields"
    },
    {
      "description": "Manage credit balances",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve all credit balances",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/credit/balance/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.credit.balance.TypeEnum",
              "description": "Filter by balance type",
              "fullType": "me.credit.balance.TypeEnum",
              "name": "type",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/me/credit/balance"
    },
    {
      "description": "Manage credit balances",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve a credit balance",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/credit/balance/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Balance name",
              "fullType": "string",
              "name": "balanceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.credit.Balance"
        }
      ],
      "path": "/me/credit/balance/{balanceName}"
    },
    {
      "description": "Manage credit balance movements",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve movements for a specific balance",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/credit/balance/movement/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Balance name",
              "fullType": "string",
              "name": "balanceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/me/credit/balance/{balanceName}/movement"
    },
    {
      "description": "Manage credit balance movements",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve a specific movement for a credit balance",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/credit/balance/movement/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Balance name",
              "fullType": "string",
              "name": "balanceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Movement ID",
              "fullType": "long",
              "name": "movementId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.credit.balance.Movement"
        }
      ],
      "path": "/me/credit/balance/{balanceName}/movement/{movementId}"
    },
    {
      "description": "Validate a code to generate associated credit movement",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Validate a code to generate associated credit movement",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/credit/code/validate"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.credit.code.Redeem",
              "description": "Request Body",
              "fullType": "me.credit.code.Redeem",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "me.credit.balance.Movement"
        }
      ],
      "path": "/me/credit/code"
    },
    {
      "description": "Debt balance of the account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/debtAccount/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "debt.Balance"
        }
      ],
      "path": "/me/debtAccount"
    },
    {
      "description": "List the debt.Debt objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "All debts related to your account",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/debtAccount/debt/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        }
      ],
      "path": "/me/debtAccount/debt"
    },
    {
      "description": "State of a debt",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/debtAccount/debt/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "debtId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "debt.Debt"
        }
      ],
      "path": "/me/debtAccount/debt/{debtId}"
    },
    {
      "description": "List the debt.Operation objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "All operations related to these debts",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/debtAccount/debt/operation/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "debtId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filter the value of depositOrderId property (=)",
              "fullType": "long",
              "name": "depositOrderId",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/me/debtAccount/debt/{debtId}/operation"
    },
    {
      "description": "Operation that happend on a debt",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/debtAccount/debt/operation/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "debtId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "debt.Operation"
        }
      ],
      "path": "/me/debtAccount/debt/{debtId}/operation/{operationId}"
    },
    {
      "description": "associatedObject operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return main data about the object related to this debt operation",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/debtAccount/debt/operation/associatedObject/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "debtId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "debt.entry.AssociatedObject"
        }
      ],
      "path": "/me/debtAccount/debt/{debtId}/operation/{operationId}/associatedObject"
    },
    {
      "description": "pay operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create an order in order to pay this order's debt",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/debtAccount/debt/pay"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "debtId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Order"
        }
      ],
      "path": "/me/debtAccount/debt/{debtId}/pay"
    },
    {
      "description": "pay operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create an order in order to pay all your due debts",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/debtAccount/pay"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "billing.Order"
        }
      ],
      "path": "/me/debtAccount/pay"
    },
    {
      "description": "List the billing.Deposit objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of all the deposits made to your prepaid account or debt account",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/deposit/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Filter the value of date property (>=)",
              "fullType": "datetime",
              "name": "date.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of date property (<=)",
              "fullType": "datetime",
              "name": "date.to",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of orderId property (=)",
              "fullType": "long",
              "name": "orderId",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/me/deposit"
    },
    {
      "description": "Details about a deposit",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/deposit/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Deposit"
        }
      ],
      "path": "/me/deposit/{depositId}"
    },
    {
      "description": "List the billing.DepositDetail objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Give access to all entries of this deposit",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/deposit/details/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/me/deposit/{depositId}/details"
    },
    {
      "description": "Information about a Deposit entry",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/deposit/details/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "depositDetailId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.DepositDetail"
        }
      ],
      "path": "/me/deposit/{depositId}/details/{depositDetailId}"
    },
    {
      "description": "List the billing.Bill objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get invoices paid by this deposit",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/deposit/paidBills/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills"
    },
    {
      "description": "Details about a Bill",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/deposit/paidBills/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Bill"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}"
    },
    {
      "description": "State of a debt",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/deposit/paidBills/debt/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "debt.Debt"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt"
    },
    {
      "description": "List the debt.Operation objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "All operations related to these debts",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/deposit/paidBills/debt/operation/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filter the value of depositOrderId property (=)",
              "fullType": "long",
              "name": "depositOrderId",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt/operation"
    },
    {
      "description": "Operation that happend on a debt",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/deposit/paidBills/debt/operation/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "debt.Operation"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}"
    },
    {
      "description": "associatedObject operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return main data about the object related to this debt operation",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/deposit/paidBills/debt/operation/associatedObject/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "debt.entry.AssociatedObject"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}/associatedObject"
    },
    {
      "description": "pay operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create an order in order to pay this order's debt",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/deposit/paidBills/debt/pay"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Order"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt/pay"
    },
    {
      "description": "List the billing.BillDetail objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Give access to all entries of the bill",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/deposit/paidBills/details/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/details"
    },
    {
      "description": "Information about a Bill entry",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/deposit/paidBills/details/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billDetailId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.BillDetail"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}"
    },
    {
      "description": "Details about a payment",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/deposit/paidBills/payment/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Payment"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/payment"
    },
    {
      "description": "Details about a payment",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/deposit/payment/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Payment"
        }
      ],
      "path": "/me/deposit/{depositId}/payment"
    },
    {
      "description": "List the nichandle.document.Document objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of documents added in your account",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/document/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create new document",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/document/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "File name",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "complexType.SafeKeyValue<string>[]",
              "description": "File tags",
              "fullType": "complexType.SafeKeyValue<string>[]",
              "name": "tags",
              "paramType": "body",
              "required": false
            }
          ],
          "responseType": "nichandle.document.Document"
        }
      ],
      "path": "/me/document"
    },
    {
      "description": "List of documents added on your account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a document",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/document/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Document id",
              "fullType": "string",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/document/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Document id",
              "fullType": "string",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "nichandle.document.Document"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/document/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.document.Document",
              "description": "New object properties",
              "fullType": "nichandle.document.Document",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Document id",
              "fullType": "string",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/document/{id}"
    },
    {
      "description": "Add CORS support on your container",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add CORS support on your container",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/document/cors/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Allow this origin",
              "fullType": "string",
              "name": "origin",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/document/cors"
    },
    {
      "description": "Balance of the fidelity account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/fidelityAccount/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "billing.FidelityAccount"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/fidelityAccount/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.FidelityAccount",
              "description": "New object properties",
              "fullType": "billing.FidelityAccount",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/fidelityAccount"
    },
    {
      "description": "creditOrder operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate an order that can be paid in order to credit the fidelity account",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/fidelityAccount/creditOrder"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The amount of points you want to credit your fidelity account of",
              "fullType": "long",
              "name": "amount",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "billing.Order"
        }
      ],
      "path": "/me/fidelityAccount/creditOrder"
    },
    {
      "description": "List the billing.FidelityMovement objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of entries of the fidelity account",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/fidelityAccount/movements/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Filter the value of date property (>=)",
              "fullType": "datetime",
              "name": "date.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of date property (<=)",
              "fullType": "datetime",
              "name": "date.to",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/me/fidelityAccount/movements"
    },
    {
      "description": "Details about a fidelity account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/fidelityAccount/movements/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "movementId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.FidelityMovement"
        }
      ],
      "path": "/me/fidelityAccount/movements/{movementId}"
    },
    {
      "description": "Fetch visitor country & region",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Fetch visitor country & region",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [],
          "responseType": "me.geolocation.ContinentCountryLocation"
        }
      ],
      "path": "/me/geolocation"
    },
    {
      "description": "Groups linked to this account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve all groups of this account",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/identity/group/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new group",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/identity/group/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Group's description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Group's name",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "nichandle.Authentication.RoleEnum",
              "description": "Group's Role",
              "fullType": "nichandle.Authentication.RoleEnum",
              "name": "role",
              "paramType": "body",
              "required": false
            }
          ],
          "responseType": "nichandle.Authentication.Group"
        }
      ],
      "path": "/me/identity/group"
    },
    {
      "description": "A group linked to this account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this object",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/identity/group/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Group's name",
              "fullType": "string",
              "name": "group",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/identity/group/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Group's name",
              "fullType": "string",
              "name": "group",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "nichandle.Authentication.Group"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter a group",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/identity/group/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Group's description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.Authentication.RoleEnum",
              "description": "Group's role",
              "fullType": "nichandle.Authentication.RoleEnum",
              "name": "role",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Group's name",
              "fullType": "string",
              "name": "group",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/identity/group/{group}"
    },
    {
      "description": "Identity provider linked to this account",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Remove the identity provider",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/identity/provider/delete"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Identity provider linked to this account",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/identity/provider/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "nichandle.Authentication.Provider"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Define an identity provider (SAML 2.0)",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/identity/provider/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.Authentication.ProviderExtensions",
              "description": "A list of SAML 2.0 requested attribute that should be added to SAML requests",
              "fullType": "nichandle.Authentication.ProviderExtensions",
              "name": "extensions",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "SAML Group attribute name",
              "fullType": "string",
              "name": "groupAttributeName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "text",
              "description": "IDP's metadata in XML",
              "fullType": "text",
              "name": "metadata",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "nichandle.Authentication.Provider"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter the provider",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/identity/provider/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.Authentication.ProviderExtensions",
              "description": "A list of SAML 2.0 requested attribute that should be added to SAML requests",
              "fullType": "nichandle.Authentication.ProviderExtensions",
              "name": "extensions",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "SAML Group attribute name",
              "fullType": "string",
              "name": "groupAttributeName",
              "paramType": "body",
              "required": false
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/identity/provider"
    },
    {
      "description": "Users linked to this account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve all users of this account",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/identity/user/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new user",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/identity/user/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "User's description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "User's email",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User's group",
              "fullType": "string",
              "name": "group",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "User's login",
              "fullType": "string",
              "name": "login",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "password",
              "description": "User's password",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/identity/user"
    },
    {
      "description": "A user linked to this account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this object",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/identity/user/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "User's login",
              "fullType": "string",
              "name": "user",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/identity/user/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "User's login",
              "fullType": "string",
              "name": "user",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "nichandle.User"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter a user",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/identity/user/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "User's description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "User's email",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "User's group",
              "fullType": "string",
              "name": "group",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "User's login",
              "fullType": "string",
              "name": "user",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/identity/user/{user}"
    },
    {
      "description": "A user linked to this account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable this user",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/identity/user/disable"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "User's login",
              "fullType": "string",
              "name": "user",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/identity/user/{user}/disable"
    },
    {
      "description": "A user linked to this account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Enable this user",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/identity/user/enable"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "User's login",
              "fullType": "string",
              "name": "user",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/identity/user/{user}/enable"
    },
    {
      "description": "Migrate your impacted services",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get all services you can migrate",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/incident/sbg/migrateServices/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "me.incident.ServiceMigration[]"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Ask for impacted services migration",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/incident/sbg/migrateServices/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.incident.MigrateServices",
              "description": "Request Body",
              "fullType": "me.incident.MigrateServices",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "me.incident.Order"
        }
      ],
      "path": "/me/incident/sbg/migrateServices"
    },
    {
      "description": "List the dedicated.installationTemplate.Templates objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Your customized operating system installation templates",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/installationTemplate/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a template",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/installationTemplate/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "OVH template name yours will be based on, choose one among the list given by compatibleTemplates function",
              "fullType": "string",
              "name": "baseTemplateName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.TemplateOsLanguageEnum",
              "description": "",
              "fullType": "dedicated.TemplateOsLanguageEnum",
              "name": "defaultLanguage",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Your template name",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/installationTemplate"
    },
    {
      "description": "Available installation templates",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove this template",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/installationTemplate/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/installationTemplate/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.installationTemplate.Templates"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/installationTemplate/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.installationTemplate.Templates",
              "description": "New object properties",
              "fullType": "dedicated.installationTemplate.Templates",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/installationTemplate/{templateName}"
    },
    {
      "description": "checkIntegrity operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Check the integrity of this template",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/installationTemplate/checkIntegrity"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/installationTemplate/{templateName}/checkIntegrity"
    },
    {
      "description": "List the dedicated.installationTemplate.templatePartitioningSchemes objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Partitioning schemes available on this template",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/installationTemplate/partitionScheme/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a scheme of partition",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/installationTemplate/partitionScheme/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "This partitioning scheme name",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications)",
              "fullType": "long",
              "name": "priority",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/installationTemplate/{templateName}/partitionScheme"
    },
    {
      "description": "Partitioning schemes available on this template",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove this scheme of partition",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/installationTemplate/partitionScheme/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "This partitioning scheme name",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/installationTemplate/partitionScheme/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "This partitioning scheme name",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.installationTemplate.templatePartitioningSchemes"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/installationTemplate/partitionScheme/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.installationTemplate.templatePartitioningSchemes",
              "description": "New object properties",
              "fullType": "dedicated.installationTemplate.templatePartitioningSchemes",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This partitioning scheme name",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}"
    },
    {
      "description": "List the dedicated.installationTemplate.hardwareRaid objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Hardware RAIDs defined in this partitioning scheme",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/installationTemplate/partitionScheme/hardwareRaid/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "This partitioning scheme name",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add an hardware RAID in this partitioning scheme",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/installationTemplate/partitionScheme/hardwareRaid/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string[]",
              "description": "Disk list. Syntax is cX:dY for disks and [cX:dY, cX:dY] for groups. With X and Y resp. the controler id and the disk id.",
              "fullType": "string[]",
              "name": "disks",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.TemplateOsHardwareRaidEnum",
              "description": "RAID mode",
              "fullType": "dedicated.TemplateOsHardwareRaidEnum",
              "name": "mode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Hardware RAID name",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Specifies the creation order of the hardware RAID",
              "fullType": "long",
              "name": "step",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This partitioning scheme name",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid"
    },
    {
      "description": "Hardware RAID defined in this partitioning scheme",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove this RAID",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/installationTemplate/partitionScheme/hardwareRaid/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Hardware RAID name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This partitioning scheme name",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/installationTemplate/partitionScheme/hardwareRaid/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Hardware RAID name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This partitioning scheme name",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.installationTemplate.hardwareRaid"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/installationTemplate/partitionScheme/hardwareRaid/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.installationTemplate.hardwareRaid",
              "description": "New object properties",
              "fullType": "dedicated.installationTemplate.hardwareRaid",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Hardware RAID name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This partitioning scheme name",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}"
    },
    {
      "description": "List the dedicated.installationTemplate.templatePartitions objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Partitions defined in this partitioning scheme",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/installationTemplate/partitionScheme/partition/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "This partitioning scheme name",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a partition in this partitioning scheme",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/installationTemplate/partitionScheme/partition/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.FileSystemEnum",
              "description": "Partition filesytem",
              "fullType": "dedicated.server.FileSystemEnum",
              "name": "filesystem",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Partition mount point",
              "fullType": "string",
              "name": "mountpoint",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.server.PartitionRaidEnum",
              "description": "Partition raid",
              "fullType": "dedicated.server.PartitionRaidEnum",
              "name": "raid",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Partition size in MB, 0 => rest of the space",
              "fullType": "long",
              "name": "size",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Partition step",
              "fullType": "long",
              "name": "step",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.TemplatePartitionTypeEnum",
              "description": "Partition type",
              "fullType": "dedicated.TemplatePartitionTypeEnum",
              "name": "type",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Logical volume name (required if type is lv) or optional zpool name if filesystem is ZFS",
              "fullType": "string",
              "name": "volumeName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "This partitioning scheme name",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition"
    },
    {
      "description": " Partitions defined in this partitioning scheme",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove this partition",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/installationTemplate/partitionScheme/partition/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Partition mount point",
              "fullType": "string",
              "name": "mountpoint",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This partitioning scheme name",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/installationTemplate/partitionScheme/partition/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Partition mount point",
              "fullType": "string",
              "name": "mountpoint",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This partitioning scheme name",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.installationTemplate.templatePartitions"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/installationTemplate/partitionScheme/partition/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.installationTemplate.templatePartitions",
              "description": "New object properties",
              "fullType": "dedicated.installationTemplate.templatePartitions",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Partition mount point",
              "fullType": "string",
              "name": "mountpoint",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This partitioning scheme name",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}"
    },
    {
      "description": "List the nichandle.Ipv4Org objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of organisations",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/ipOrganisation/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add an organisation",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/ipOrganisation/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "abuse_mailbox",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "address",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "city",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "nichandle.CountryEnum",
              "description": "",
              "fullType": "nichandle.CountryEnum",
              "name": "country",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "firstname",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "lastname",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "phoneNumber",
              "description": "",
              "fullType": "phoneNumber",
              "name": "phone",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "nichandle.IpRegistryEnum",
              "description": "",
              "fullType": "nichandle.IpRegistryEnum",
              "name": "registry",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "state",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "zip",
              "paramType": "body",
              "required": false
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/ipOrganisation"
    },
    {
      "description": "Details about an IP block organisation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this organisation",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/ipOrganisation/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "organisationId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/ipOrganisation/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "organisationId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "nichandle.Ipv4Org"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/ipOrganisation/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.Ipv4Org",
              "description": "New object properties",
              "fullType": "nichandle.Ipv4Org",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "organisationId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/ipOrganisation/{organisationId}"
    },
    {
      "description": "List the nichandle.ipxe objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of all your IPXE scripts",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/ipxeScript/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add an IPXE script",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/ipxeScript/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "A personnal description of this script",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "name of your script",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "text",
              "description": "Content of your IPXE script",
              "fullType": "text",
              "name": "script",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "nichandle.ipxe"
        }
      ],
      "path": "/me/ipxeScript"
    },
    {
      "description": "Customer IPXE scripts",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove this IPXE Script",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/ipxeScript/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of this script",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/ipxeScript/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of this script",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "nichandle.ipxe"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/ipxeScript/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.ipxe",
              "description": "New object properties",
              "fullType": "nichandle.ipxe",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of this script",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/ipxeScript/{name}"
    },
    {
      "description": "availableLists operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of mailing list you can subscribe",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/mailingList/availableLists/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/me/mailingList/availableLists"
    },
    {
      "description": "subscribe operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Subscribe an email to a restricted mailing list",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/mailingList/subscribe"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email you want to subscribe to",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Mailing list",
              "fullType": "string",
              "name": "mailingList",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/mailingList/subscribe"
    },
    {
      "description": "Email history",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve every email sent to you",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/notification/email/history/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        }
      ],
      "path": "/me/notification/email/history"
    },
    {
      "description": "Email history",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve information about an email",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/notification/email/history/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "nichandle.EmailNotification"
        }
      ],
      "path": "/me/notification/email/history/{id}"
    },
    {
      "description": "List the billing.Order objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of all the orders the logged account has",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/order/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Filter the value of date property (>=)",
              "fullType": "datetime",
              "name": "date.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of date property (<=)",
              "fullType": "datetime",
              "name": "date.to",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/me/order"
    },
    {
      "description": "Details about an Order",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/order/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Order"
        }
      ],
      "path": "/me/order/{orderId}"
    },
    {
      "description": "associatedObject operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return main data about the object the processing of the order generated",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/order/associatedObject/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.order.AssociatedObject"
        }
      ],
      "path": "/me/order/{orderId}/associatedObject"
    },
    {
      "description": "availableRegisteredPaymentMean operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of registered payment mean you can use to pay this order",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/order/availableRegisteredPaymentMean/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.order.RegisteredPaymentMean[]"
        }
      ],
      "path": "/me/order/{orderId}/availableRegisteredPaymentMean"
    },
    {
      "description": "List the billing.CreditBalance objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List credit balances applied on this Order",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/order/balance/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Use a credit balance on this Order",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/order/balance/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Balance name to use on this Order",
              "fullType": "string",
              "name": "balanceName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.CreditBalance"
        }
      ],
      "path": "/me/order/{orderId}/balance"
    },
    {
      "description": "Credit balance applied on an Order",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Remove a credit balance from this Order",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/order/balance/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Credit balance name",
              "fullType": "string",
              "name": "balanceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/order/balance/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Credit balance name",
              "fullType": "string",
              "name": "balanceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.CreditBalance"
        }
      ],
      "path": "/me/order/{orderId}/balance/{balanceName}"
    },
    {
      "description": "details operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve order's detailed consumption information as a file",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/order/consumption/details/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "consumption.ConsumptionExportFormatsEnum",
              "description": "Format of the file",
              "fullType": "consumption.ConsumptionExportFormatsEnum",
              "name": "fileFormat",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "billing.order.ConsumptionDetails"
        }
      ],
      "path": "/me/order/{orderId}/consumption/details"
    },
    {
      "description": "State of a debt",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/order/debt/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "debt.Debt"
        }
      ],
      "path": "/me/order/{orderId}/debt"
    },
    {
      "description": "List the debt.Operation objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "All operations related to these debts",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/order/debt/operation/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filter the value of depositOrderId property (=)",
              "fullType": "long",
              "name": "depositOrderId",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/me/order/{orderId}/debt/operation"
    },
    {
      "description": "Operation that happend on a debt",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/order/debt/operation/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "debt.Operation"
        }
      ],
      "path": "/me/order/{orderId}/debt/operation/{operationId}"
    },
    {
      "description": "associatedObject operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return main data about the object related to this debt operation",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/order/debt/operation/associatedObject/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "debt.entry.AssociatedObject"
        }
      ],
      "path": "/me/order/{orderId}/debt/operation/{operationId}/associatedObject"
    },
    {
      "description": "pay operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create an order in order to pay this order's debt",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/order/debt/pay"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Order"
        }
      ],
      "path": "/me/order/{orderId}/debt/pay"
    },
    {
      "description": "List the billing.OrderDetail objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Give access to all entries of the order",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/order/details/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/me/order/{orderId}/details"
    },
    {
      "description": "Information about a Bill entry",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/order/details/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderDetailId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.OrderDetail"
        }
      ],
      "path": "/me/order/{orderId}/details/{orderDetailId}"
    },
    {
      "description": "Extensions of a detail",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/order/details/extension/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderDetailId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.ItemDetail"
        }
      ],
      "path": "/me/order/{orderId}/details/{orderDetailId}/extension"
    },
    {
      "description": "followUp operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Return tracking of the order",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/order/followUp/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.order.FollowUp[]"
        }
      ],
      "path": "/me/order/{orderId}/followUp"
    },
    {
      "description": "pay operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Pay with a payment method reference",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/order/pay"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.order.PayWithPaymentMethod",
              "description": "Payment method informations for pay",
              "fullType": "billing.order.PayWithPaymentMethod",
              "name": "paymentMethod",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/order/{orderId}/pay"
    },
    {
      "description": "Details about a payment",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/order/payment/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Payment"
        }
      ],
      "path": "/me/order/{orderId}/payment"
    },
    {
      "description": "paymentMeans operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return main data about the object the processing of the order generated",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/order/paymentMeans/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.order.PaymentMeans"
        }
      ],
      "path": "/me/order/{orderId}/paymentMeans"
    },
    {
      "description": "paymentMethods operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List of registered payment method you can use to pay this order",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/order/paymentMethods/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.order.PaymentMethods"
        }
      ],
      "path": "/me/order/{orderId}/paymentMethods"
    },
    {
      "description": "payWithRegisteredPaymentMean operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Pay with an already registered payment mean",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/order/payWithRegisteredPaymentMean"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.ReusablePaymentMeanEnum",
              "description": "The registered payment mean you want to use",
              "fullType": "billing.ReusablePaymentMeanEnum",
              "name": "paymentMean",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of registered payment mean, mandatory for bankAccount, creditCard and paypal",
              "fullType": "long",
              "name": "paymentMeanId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/order/{orderId}/payWithRegisteredPaymentMean"
    },
    {
      "description": "retraction operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request retraction of order",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/order/retraction/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "text",
              "description": "An optional comment of why you want to retract",
              "fullType": "text",
              "name": "comment",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "billing.order.RetractionReasonEnum",
              "description": "The reason why you want to retract",
              "fullType": "billing.order.RetractionReasonEnum",
              "name": "reason",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/order/{orderId}/retraction"
    },
    {
      "description": "status operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return status of order",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/order/status/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.order.OrderStatusEnum"
        }
      ],
      "path": "/me/order/{orderId}/status"
    },
    {
      "description": "waiveRetraction operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Waive retraction period of order",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/order/waiveRetraction"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/order/{orderId}/waiveRetraction"
    },
    {
      "description": "List the billing.OvhAccount objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of OVH accounts the logged account has",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/ovhAccount/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/me/ovhAccount"
    },
    {
      "description": "Details about an OVH account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/ovhAccount/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "ovhAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.OvhAccount"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/ovhAccount/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.OvhAccount",
              "description": "New object properties",
              "fullType": "billing.OvhAccount",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "ovhAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/ovhAccount/{ovhAccountId}"
    },
    {
      "description": "creditOrder operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate an order that can be paid in order to credit the OVH account",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/ovhAccount/creditOrder/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The amount in cents you want to credit your account of",
              "fullType": "long",
              "name": "amount",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "ovhAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Order"
        }
      ],
      "path": "/me/ovhAccount/{ovhAccountId}/creditOrder"
    },
    {
      "description": "List the billing.Movement objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Details about an entry of the OVH account",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/ovhAccount/movements/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "ovhAccountId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of date property (>=)",
              "fullType": "datetime",
              "name": "date.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of date property (<=)",
              "fullType": "datetime",
              "name": "date.to",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/me/ovhAccount/{ovhAccountId}/movements"
    },
    {
      "description": "Details about an OVH account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/ovhAccount/movements/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "movementId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "ovhAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Movement"
        }
      ],
      "path": "/me/ovhAccount/{ovhAccountId}/movements/{movementId}"
    },
    {
      "description": "requestRefund operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "request a refund of this credit note to your original payment method",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/ovhAccount/movements/requestRefund"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The amount in cents you want to retrieve",
              "fullType": "long",
              "name": "amount",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "movementId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "ovhAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/ovhAccount/{ovhAccountId}/movements/{movementId}/requestRefund"
    },
    {
      "description": "retrieveMoney operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Transfer money from ovhAccount to your bank account",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/ovhAccount/retrieveMoney"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The amount in cents you want to transfer",
              "fullType": "long",
              "name": "amount",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "A valid bank account",
              "fullType": "long",
              "name": "bankAccountId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "ovhAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Order"
        }
      ],
      "path": "/me/ovhAccount/{ovhAccountId}/retrieveMoney"
    },
    {
      "description": "Request a password recover",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request a password recover",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhCompanyEnum",
              "description": "Company of your OVH Account Id",
              "fullType": "nichandle.OvhCompanyEnum",
              "name": "ovhCompany",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Your OVH Account Id",
              "fullType": "string",
              "name": "ovhId",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/passwordRecover"
    },
    {
      "description": "Available payment methods",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve available payment method",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/payment/availableMethods/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "me.payment.AvailablePaymentMethod[]"
        }
      ],
      "path": "/me/payment/availableMethods"
    },
    {
      "description": "Manage payment method",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve payment method list",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/payment/method/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Filter on 'default' property",
              "fullType": "boolean",
              "name": "default",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter on 'paymentType' property",
              "fullType": "string",
              "name": "paymentType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "me.payment.method.StatusEnum",
              "description": "Filter on 'status' property",
              "fullType": "me.payment.method.StatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Register a new payment method",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/payment/method/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.payment.method.Creation",
              "description": "Request Body",
              "fullType": "me.payment.method.Creation",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "me.payment.method.Validation"
        }
      ],
      "path": "/me/payment/method"
    },
    {
      "description": "Manage payment method",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a payment method",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/payment/method/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Payment method ID",
              "fullType": "long",
              "name": "paymentMethodId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.payment.PaymentMethod"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve a payment method",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/payment/method/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Payment method ID",
              "fullType": "long",
              "name": "paymentMethodId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.payment.PaymentMethod"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Edit payment method",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/payment/method/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.payment.PaymentMethod",
              "description": "Request Body",
              "fullType": "me.payment.PaymentMethod",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Payment method ID",
              "fullType": "long",
              "name": "paymentMethodId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.payment.PaymentMethod"
        }
      ],
      "path": "/me/payment/method/{paymentMethodId}"
    },
    {
      "description": "Challenge operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Challenge your payment method",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/payment/method/challenge"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.payment.method.Challenge",
              "description": "Request Body",
              "fullType": "me.payment.method.Challenge",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Payment method ID",
              "fullType": "long",
              "name": "paymentMethodId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/payment/method/{paymentMethodId}/challenge"
    },
    {
      "description": "Add details to your payment method challenge",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add details to your payment method challenge",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/payment/method/details/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.payment.method.Details",
              "description": "Request Body",
              "fullType": "me.payment.method.Details",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Payment method ID",
              "fullType": "long",
              "name": "paymentMethodId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.payment.method.Validation"
        }
      ],
      "path": "/me/payment/method/{paymentMethodId}/details"
    },
    {
      "description": "Finalize operation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Finalize a payment method registration",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/payment/method/finalize"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.payment.method.Finalize",
              "description": "Request Body",
              "fullType": "me.payment.method.Finalize",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Payment method ID",
              "fullType": "long",
              "name": "paymentMethodId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.payment.PaymentMethod"
        }
      ],
      "path": "/me/payment/method/{paymentMethodId}/finalize"
    },
    {
      "description": "Manage payment transaction",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve payment transaction list",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/payment/transaction/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Payment method ID",
              "fullType": "long",
              "name": "paymentMethodId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "me.payment.transaction.StatusEnum",
              "description": "Status",
              "fullType": "me.payment.transaction.StatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/me/payment/transaction"
    },
    {
      "description": "Manage payment transaction",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve a transaction",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/payment/transaction/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Transaction ID",
              "fullType": "long",
              "name": "transactionId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.payment.Transaction"
        }
      ],
      "path": "/me/payment/transaction/{transactionId}"
    },
    {
      "description": "Manage bank accounts",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "List of bank accounts",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/paymentMean/bankAccount/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.paymentMean.BankAccountStateEnum",
              "description": "Filter on 'status' property",
              "fullType": "me.paymentMean.BankAccountStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Add a new payment mean bank account",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/paymentMean/bankAccount/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.paymentMean.BankAccountCreation",
              "description": "Request Body",
              "fullType": "me.paymentMean.BankAccountCreation",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "me.paymentMean.BankAccountValidation"
        }
      ],
      "path": "/me/paymentMean/bankAccount"
    },
    {
      "description": "Manage bank accounts",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Disable payment through this account",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/paymentMean/bankAccount/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Get bank account properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/paymentMean/bankAccount/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.paymentMean.BankAccount"
        },
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/paymentMean/bankAccount/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.paymentMean.BankAccount",
              "description": "Request Body",
              "fullType": "me.paymentMean.BankAccount",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/bankAccount/{id}"
    },
    {
      "description": "Challenge your bank account",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Challenge your bank account",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/paymentMean/bankAccount/challenge"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.paymentMean.BankAccountChallengeCreation",
              "description": "Request Body",
              "fullType": "me.paymentMean.BankAccountChallengeCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/bankAccount/{id}/challenge"
    },
    {
      "description": "Choose this bank account as your default payment mean. Will cancel the previous choice.",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Choose this bank account as your default payment mean. Will cancel the previous choice.",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/paymentMean/bankAccount/chooseAsDefaultPaymentMean"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/bankAccount/{id}/chooseAsDefaultPaymentMean"
    },
    {
      "description": "List the payment mean credit cards",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "List of payment mean credit cards",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/paymentMean/creditCard/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Add a new payment mean credit card",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/paymentMean/creditCard/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.paymentMean.CreditCardCreation",
              "description": "Request Body",
              "fullType": "me.paymentMean.CreditCardCreation",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "me.paymentMean.CreditCardValidation"
        }
      ],
      "path": "/me/paymentMean/creditCard"
    },
    {
      "description": "List the payment mean credit cards",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Disable payment through this credit card",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/paymentMean/creditCard/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Get credit card properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/paymentMean/creditCard/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.paymentMean.CreditCard"
        },
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/paymentMean/creditCard/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.paymentMean.CreditCard",
              "description": "Request Body",
              "fullType": "me.paymentMean.CreditCard",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/creditCard/{id}"
    },
    {
      "description": "Challenge operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Challenge your credit card",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/paymentMean/creditCard/challenge"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.paymentMean.CreditCardChallengeCreation",
              "description": "Request Body",
              "fullType": "me.paymentMean.CreditCardChallengeCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/creditCard/{id}/challenge"
    },
    {
      "description": "Choose this credit card as default",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Choose this credit card as your default payment mean. Will cancel the previous choice.",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/paymentMean/creditCard/chooseAsDefaultPaymentMean"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/creditCard/{id}/chooseAsDefaultPaymentMean"
    },
    {
      "description": "List of authorized deferred payment account for this customer",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of payment mean deferred accounts",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/paymentMean/deferredPaymentAccount/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        }
      ],
      "path": "/me/paymentMean/deferredPaymentAccount"
    },
    {
      "description": "List of authorized deferred payment account for this customer",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/paymentMean/deferredPaymentAccount/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.paymentMean.Deferred"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/paymentMean/deferredPaymentAccount/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.paymentMean.Deferred",
              "description": "Request Body",
              "fullType": "me.paymentMean.Deferred",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/deferredPaymentAccount/{id}"
    },
    {
      "description": "Choose this deferred account as default",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Choose this deferred account as your default payment mean. Will cancel the previous choice.",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/paymentMean/deferredPaymentAccount/chooseAsDefaultPaymentMean"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/deferredPaymentAccount/{id}/chooseAsDefaultPaymentMean"
    },
    {
      "description": "List the payment mean paypals",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "List of payment mean paypals",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/paymentMean/paypal/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Add a new payment mean paypal",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/paymentMean/paypal/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.paymentMean.PaypalCreation",
              "description": "Request Body",
              "fullType": "me.paymentMean.PaypalCreation",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "me.paymentMean.PaypalValidation"
        }
      ],
      "path": "/me/paymentMean/paypal"
    },
    {
      "description": "List the payment mean paypals",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Disable payment through this paypal",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/paymentMean/paypal/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Get paypal properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/paymentMean/paypal/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.paymentMean.Paypal"
        },
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/paymentMean/paypal/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.paymentMean.Paypal",
              "description": "Request Body",
              "fullType": "me.paymentMean.Paypal",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/paypal/{id}"
    },
    {
      "description": "Challenge operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Challenge your paypal",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/paymentMean/paypal/challenge"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.paymentMean.PaypalChallengeCreation",
              "description": "Request Body",
              "fullType": "me.paymentMean.PaypalChallengeCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/paypal/{id}/challenge"
    },
    {
      "description": "Choose this paypal as default",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-09-07 00:00:00 +0000 UTC",
            "deprecatedDate": "2023-03-07 00:00:00 +0000 UTC",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Choose this paypal as your default payment mean. Will cancel the previous choice.",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/paymentMean/paypal/chooseAsDefaultPaymentMean"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/paypal/{id}/chooseAsDefaultPaymentMean"
    },
    {
      "description": "List the billing.Refund objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of all the refunds the logged account has",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/refund/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Filter the value of date property (>=)",
              "fullType": "datetime",
              "name": "date.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of date property (<=)",
              "fullType": "datetime",
              "name": "date.to",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of orderId property (=)",
              "fullType": "long",
              "name": "orderId",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/me/refund"
    },
    {
      "description": "Details about a Refund",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/refund/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "refundId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Refund"
        }
      ],
      "path": "/me/refund/{refundId}"
    },
    {
      "description": "List the billing.RefundDetail objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Give access to all entries of the refund",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/refund/details/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "refundId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/me/refund/{refundId}/details"
    },
    {
      "description": "Information about a Bill entry",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/refund/details/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "refundDetailId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "refundId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.RefundDetail"
        }
      ],
      "path": "/me/refund/{refundId}/details/{refundDetailId}"
    },
    {
      "description": "Details about a payment",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/refund/payment/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "refundId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Payment"
        }
      ],
      "path": "/me/refund/{refundId}/payment"
    },
    {
      "description": "Exports a bundle of refunds",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Exports a bundle of refunds",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/refund/export"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.ArchiveTypeEnum",
              "description": "The file type of the archive",
              "fullType": "billing.ArchiveTypeEnum",
              "name": "archiveType",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "datetime",
              "description": "End interval of the export",
              "fullType": "datetime",
              "name": "endDate",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string[]",
              "description": "A list of ids to export",
              "fullType": "string[]",
              "name": "ids",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Start interval of the export",
              "fullType": "datetime",
              "name": "startDate",
              "paramType": "body",
              "required": false
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/refund/export"
    },
    {
      "description": "List the billing.ReverseBill objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all the bills sent by the current account",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/reverseBill/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Filter the value of date property (>=)",
              "fullType": "datetime",
              "name": "date.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of date property (<=)",
              "fullType": "datetime",
              "name": "date.to",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of orderId property (=)",
              "fullType": "long",
              "name": "orderId",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/me/reverseBill"
    },
    {
      "description": "Details about a bill from customer",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/reverseBill/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "reverseBillId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.ReverseBill"
        }
      ],
      "path": "/me/reverseBill/{reverseBillId}"
    },
    {
      "description": "List the billing.ReversableBillDetail objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Give access to all entries of this withdrawal",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/reverseBill/details/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "reverseBillId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/me/reverseBill/{reverseBillId}/details"
    },
    {
      "description": "Information about withdrawal entry",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/reverseBill/details/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "reverseBillDetailId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "reverseBillId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.ReversableBillDetail"
        }
      ],
      "path": "/me/reverseBill/{reverseBillId}/details/{reverseBillDetailId}"
    },
    {
      "description": "Details about a payment",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/reverseBill/payment/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "reverseBillId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Payment"
        }
      ],
      "path": "/me/reverseBill/{reverseBillId}/payment"
    },
    {
      "description": "List the billing.SlaOperation objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List active SLA",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/sla/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        }
      ],
      "path": "/me/sla"
    },
    {
      "description": "SLA properties",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/sla/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.SlaOperation"
        }
      ],
      "path": "/me/sla/{id}"
    },
    {
      "description": "apply operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Ask for SLA application",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/sla/apply"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/sla/{id}/apply"
    },
    {
      "description": "canBeApplied operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Check whether this SLA can be applied on your services",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/sla/canBeApplied/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "boolean"
        }
      ],
      "path": "/me/sla/{id}/canBeApplied"
    },
    {
      "description": "services operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get services impacted by this SLA",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/sla/services/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.SlaOperationService[]"
        }
      ],
      "path": "/me/sla/{id}/services"
    },
    {
      "description": "status operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status request of this SLA",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/sla/status/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/me/sla/{id}/status"
    },
    {
      "description": "List the nichandle.sshKey objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of your public SSH keys",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/sshKey/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new public SSH key",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/sshKey/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "ASCII encoded public SSH key to add",
              "fullType": "string",
              "name": "key",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "name of the new public SSH key",
              "fullType": "string",
              "name": "keyName",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/sshKey"
    },
    {
      "description": "Customer public SSH key, can be used for rescue netboot or server access after reinstallation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove this public SSH key",
          "httpMethod": "DELETE",
          "iamActions": [
            "account:apiovh:me/sshKey/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of this public SSH key",
              "fullType": "string",
              "name": "keyName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/sshKey/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of this public SSH key",
              "fullType": "string",
              "name": "keyName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "nichandle.sshKey"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/sshKey/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.sshKey",
              "description": "New object properties",
              "fullType": "nichandle.sshKey",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of this public SSH key",
              "fullType": "string",
              "name": "keyName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/sshKey/{keyName}"
    },
    {
      "description": "List the nichandle.SubAccount objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of sub-accounts",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/subAccount/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new sub-account",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/subAccount/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Description of the new sub-account",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            }
          ],
          "responseType": "long"
        }
      ],
      "path": "/me/subAccount"
    },
    {
      "description": "Sub Account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/subAccount/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "nichandle.SubAccount"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/subAccount/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.SubAccount",
              "description": "New object properties",
              "fullType": "nichandle.SubAccount",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/subAccount/{id}"
    },
    {
      "description": "createConsumerKey operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a consumer key for the current application",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/subAccount/createConsumerKey"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "nichandle.SubAccountConsumerKey"
        }
      ],
      "path": "/me/subAccount/{id}/createConsumerKey"
    },
    {
      "description": "List the nichandle.Subscription objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of all OVH things you can subscribe to",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/subscription/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/me/subscription"
    },
    {
      "description": "List of all OVH things you can subscribe to",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/subscription/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The type of subscription",
              "fullType": "string",
              "name": "subscriptionType",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "nichandle.Subscription"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "account:apiovh:me/subscription/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.Subscription",
              "description": "New object properties",
              "fullType": "nichandle.Subscription",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The type of subscription",
              "fullType": "string",
              "name": "subscriptionType",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/subscription/{subscriptionType}"
    },
    {
      "description": "List the nichandle.contactChange.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of service contact change tasks you are involved in",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/task/contactChange/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter the value of askingAccount property (like)",
              "fullType": "coreTypes.AccountId:string",
              "name": "askingAccount",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "nichandle.changeContact.TaskStateEnum",
              "description": "Filter the value of state property (like)",
              "fullType": "nichandle.changeContact.TaskStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of toAccount property (like)",
              "fullType": "coreTypes.AccountId:string",
              "name": "toAccount",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/me/task/contactChange"
    },
    {
      "description": "Task running a contact change on a service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/task/contactChange/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "nichandle.contactChange.Task"
        }
      ],
      "path": "/me/task/contactChange/{id}"
    },
    {
      "description": "accept operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Accept this change request",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/task/contactChange/accept"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The token you received by email for this request",
              "fullType": "string",
              "name": "token",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/task/contactChange/{id}/accept"
    },
    {
      "description": "refuse operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Refuse this change request",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/task/contactChange/refuse"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The token you received by email for this request",
              "fullType": "string",
              "name": "token",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/task/contactChange/{id}/refuse"
    },
    {
      "description": "resendEmail operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "This call will send you a new email, containing a new token",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/task/contactChange/resendEmail"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/task/contactChange/{id}/resendEmail"
    },
    {
      "description": "List the nichandle.emailChange.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of email change tasks you are involved in",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/task/emailChange/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.changeEmail.TaskStateEnum",
              "description": "Filter the value of state property (like)",
              "fullType": "nichandle.changeEmail.TaskStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/me/task/emailChange"
    },
    {
      "description": "Task running an email change on an account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/task/emailChange/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "nichandle.emailChange.Task"
        }
      ],
      "path": "/me/task/emailChange/{id}"
    },
    {
      "description": "accept operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Accept this change request",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/task/emailChange/accept"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The token you received by email for this request",
              "fullType": "string",
              "name": "token",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/task/emailChange/{id}/accept"
    },
    {
      "description": "refuse operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Refuse this change request",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/task/emailChange/refuse"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The token you received by email for this request",
              "fullType": "string",
              "name": "token",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/task/emailChange/{id}/refuse"
    },
    {
      "description": "checkValidity operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Verify existing voucher",
          "httpMethod": "POST",
          "iamActions": [
            "account:apiovh:me/voucher/checkValidity"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Voucher value",
              "fullType": "string",
              "name": "voucher",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "nichandle.VoucherStatus"
        }
      ],
      "path": "/me/voucher/checkValidity"
    },
    {
      "description": "List the billing.Withdrawal objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of all the withdrawals made from your prepaid account",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/withdrawal/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Filter the value of date property (>=)",
              "fullType": "datetime",
              "name": "date.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of date property (<=)",
              "fullType": "datetime",
              "name": "date.to",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of orderId property (=)",
              "fullType": "long",
              "name": "orderId",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/me/withdrawal"
    },
    {
      "description": "Details about a withdrawal",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/withdrawal/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "withdrawalId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Withdrawal"
        }
      ],
      "path": "/me/withdrawal/{withdrawalId}"
    },
    {
      "description": "List the billing.WithdrawalDetail objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Give access to all entries of this withdrawal",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/withdrawal/details/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "withdrawalId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/me/withdrawal/{withdrawalId}/details"
    },
    {
      "description": "Information about a Withdrawal entry",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/withdrawal/details/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "withdrawalDetailId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "withdrawalId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.WithdrawalDetail"
        }
      ],
      "path": "/me/withdrawal/{withdrawalId}/details/{withdrawalDetailId}"
    },
    {
      "description": "Details about a payment",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:me/withdrawal/payment/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "withdrawalId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Payment"
        }
      ],
      "path": "/me/withdrawal/{withdrawalId}/payment"
    }
  ],
  "basePath": "https://ca.api.kimsufi.com/1.0",
  "models": {
    "agreements.AgreementStateEnum": {
      "description": "The current state of a contract agreement",
      "enum": [
        "ko",
        "obsolete",
        "ok",
        "todo"
      ],
      "enumType": "string",
      "id": "AgreementStateEnum",
      "namespace": "agreements"
    },
    "agreements.Contract": {
      "description": "Contract of service",
      "id": "Contract",
      "namespace": "agreements",
      "properties": {
        "active": {
          "canBeNull": false,
          "description": "Is this contract currently active or not ?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "date": {
          "canBeNull": false,
          "description": "Date the contract was created on",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of of the contract",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "pdf": {
          "canBeNull": false,
          "description": "URL you can download the contract at",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "text": {
          "canBeNull": false,
          "description": "Full text of the contract",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "agreements.ContractAgreement": {
      "description": "Contract agreement",
      "id": "ContractAgreement",
      "namespace": "agreements",
      "properties": {
        "agreed": {
          "canBeNull": false,
          "description": "State of the agreement",
          "fullType": "agreements.AgreementStateEnum",
          "readOnly": true,
          "required": false,
          "type": "agreements.AgreementStateEnum"
        },
        "contractId": {
          "canBeNull": false,
          "description": "Id of the agreed contract",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "date": {
          "canBeNull": false,
          "description": "Date the agreed contract was effective",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the contract",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "api.Application": {
      "description": "API Application",
      "id": "Application",
      "namespace": "api",
      "properties": {
        "applicationId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "applicationKey": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "fullType": "api.ApplicationStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "api.ApplicationStatusEnum"
        }
      }
    },
    "api.ApplicationStatusEnum": {
      "description": "List of state of an Api Application",
      "enum": [
        "active",
        "blocked",
        "inactive",
        "trusted"
      ],
      "enumType": "string",
      "id": "ApplicationStatusEnum",
      "namespace": "api"
    },
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
    "billing.ArchiveTypeEnum": {
      "description": "List of available archive types",
      "enum": [
        "csv",
        "zip"
      ],
      "enumType": "string",
      "id": "ArchiveTypeEnum",
      "namespace": "billing"
    },
    "billing.AutomaticPaymentMean": {
      "description": "Available automatic payment means",
      "id": "AutomaticPaymentMean",
      "namespace": "billing",
      "properties": {
        "bankAccount": {
          "canBeNull": false,
          "description": "Bank Account",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "creditCard": {
          "canBeNull": false,
          "description": "Credit Card",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "deferredPaymentAccount": {
          "canBeNull": false,
          "description": "Deferred invoice payment account for authorized customers",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "paypal": {
          "canBeNull": false,
          "description": "Paypal account",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "billing.Bill": {
      "description": "Details about a Bill",
      "id": "Bill",
      "namespace": "billing",
      "properties": {
        "billId": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "category": {
          "canBeNull": false,
          "fullType": "billing.CategoryEnum",
          "readOnly": true,
          "required": false,
          "type": "billing.CategoryEnum"
        },
        "date": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "orderId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "password": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "pdfUrl": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "priceWithTax": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "priceWithoutTax": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "tax": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "url": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.BillDetail": {
      "description": "Information about a Bill entry",
      "id": "BillDetail",
      "namespace": "billing",
      "properties": {
        "billDetailId": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "periodEnd": {
          "canBeNull": true,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "periodStart": {
          "canBeNull": true,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "quantity": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "totalPrice": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "unitPrice": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "billing.CategoryEnum": {
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
      "enumType": "string",
      "id": "CategoryEnum",
      "namespace": "billing"
    },
    "billing.CreditBalance": {
      "description": "Credit balance applied on an Order",
      "id": "CreditBalance",
      "namespace": "billing",
      "properties": {
        "amount": {
          "canBeNull": false,
          "description": "Amount applied from the balance",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "balanceName": {
          "canBeNull": false,
          "description": "Credit balance name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.Deposit": {
      "description": "Details about a deposit",
      "id": "Deposit",
      "namespace": "billing",
      "properties": {
        "amount": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "date": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "depositId": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "orderId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "password": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "paymentInfo": {
          "canBeNull": true,
          "fullType": "debt.associatedObject.PaymentInfo",
          "readOnly": true,
          "required": false,
          "type": "debt.associatedObject.PaymentInfo"
        },
        "pdfUrl": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.DepositDetail": {
      "description": "Information about a Deposit entry",
      "id": "DepositDetail",
      "namespace": "billing",
      "properties": {
        "depositDetailId": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quantity": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "totalPrice": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "unitPrice": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "billing.FidelityAccount": {
      "description": "Balance of the fidelity account",
      "id": "FidelityAccount",
      "namespace": "billing",
      "properties": {
        "alertThreshold": {
          "canBeNull": true,
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "balance": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "canBeCredited": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "lastUpdate": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "openDate": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "billing.FidelityMovement": {
      "description": "Details about a fidelity account",
      "id": "FidelityMovement",
      "namespace": "billing",
      "properties": {
        "amount": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "balance": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "date": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "movementId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "operation": {
          "canBeNull": false,
          "fullType": "billing.fidelityAccount.OperationEnum",
          "readOnly": true,
          "required": false,
          "type": "billing.fidelityAccount.OperationEnum"
        },
        "order": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "previousBalance": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "billing.ItemDetail": {
      "description": "Extensions of a detail",
      "id": "ItemDetail",
      "namespace": "billing",
      "properties": {
        "order": {
          "canBeNull": false,
          "fullType": "billing.ItemDetail.Order",
          "readOnly": true,
          "required": false,
          "type": "billing.ItemDetail.Order"
        }
      }
    },
    "billing.ItemDetail.Order": {
      "description": "Order data for this Detail",
      "id": "Order",
      "namespace": "billing.ItemDetail",
      "properties": {
        "action": {
          "canBeNull": true,
          "description": "The meaning of this order detail",
          "readOnly": false,
          "required": false,
          "type": "billing.ItemDetail.OrderActionEnum"
        },
        "configurations": {
          "canBeNull": false,
          "description": "Configurations chosen during the order",
          "readOnly": false,
          "required": false,
          "type": "billing.ItemDetail.OrderConfiguration[]"
        },
        "plan": {
          "canBeNull": false,
          "description": "Plan from /order/cart",
          "readOnly": false,
          "required": false,
          "type": "billing.ItemDetail.OrderPlan"
        },
        "type": {
          "canBeNull": true,
          "description": "Type of the detail to match with values inside the catalog",
          "readOnly": false,
          "required": false,
          "type": "billing.ItemDetail.OrderDetailTypeEnum"
        }
      }
    },
    "billing.ItemDetail.OrderActionEnum": {
      "description": "List of order actions",
      "enum": [
        "consumption",
        "detach",
        "installation",
        "renew",
        "revert",
        "upgrade"
      ],
      "enumType": "string",
      "id": "OrderActionEnum",
      "namespace": "billing.ItemDetail"
    },
    "billing.ItemDetail.OrderConfiguration": {
      "description": "Configuration of order",
      "id": "OrderConfiguration",
      "namespace": "billing.ItemDetail",
      "properties": {
        "label": {
          "canBeNull": false,
          "description": "Label of the configuration",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Value of the configuration",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.ItemDetail.OrderDetailTypeEnum": {
      "description": "List of order detail types",
      "enum": [
        "plan",
        "product"
      ],
      "enumType": "string",
      "id": "OrderDetailTypeEnum",
      "namespace": "billing.ItemDetail"
    },
    "billing.ItemDetail.OrderPlan": {
      "description": "Plan data from order",
      "id": "OrderPlan",
      "namespace": "billing.ItemDetail",
      "properties": {
        "code": {
          "canBeNull": true,
          "description": "Plan code used when ordering through /order/cart",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "duration": {
          "canBeNull": true,
          "description": "Duration chosen when ordering through /order/cart (ISO 8601)",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "pricingMode": {
          "canBeNull": true,
          "description": "Pricing mode used when ordering through /order/cart",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "product": {
          "canBeNull": false,
          "description": "Product from /order/cart",
          "readOnly": false,
          "required": false,
          "type": "billing.ItemDetail.OrderPlanProduct"
        },
        "quantity": {
          "canBeNull": true,
          "description": "Quantity ordered",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "billing.ItemDetail.OrderPlanProduct": {
      "description": "Product data from order",
      "id": "OrderPlanProduct",
      "namespace": "billing.ItemDetail",
      "properties": {
        "name": {
          "canBeNull": true,
          "description": "Name of the product used when ordering through /order/cart",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.Movement": {
      "description": "Details about an OVH account",
      "id": "Movement",
      "namespace": "billing",
      "properties": {
        "amount": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "balance": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "date": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "movementId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "operation": {
          "canBeNull": false,
          "fullType": "billing.ovhAccount.OperationEnum",
          "readOnly": true,
          "required": false,
          "type": "billing.ovhAccount.OperationEnum"
        },
        "order": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "previousBalance": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "retrievableAmount": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "billing.Order": {
      "description": "Details about an Order",
      "id": "Order",
      "namespace": "billing",
      "properties": {
        "date": {
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "expirationDate": {
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "orderId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "password": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "pdfUrl": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "priceWithTax": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "priceWithoutTax": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "retractionDate": {
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "tax": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "url": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.OrderDetail": {
      "description": "Information about a Bill entry",
      "id": "OrderDetail",
      "namespace": "billing",
      "properties": {
        "cancelled": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "detailType": {
          "canBeNull": true,
          "fullType": "order.OrderDetailTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.OrderDetailTypeEnum"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "orderDetailId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "quantity": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "totalPrice": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "unitPrice": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "billing.OvhAccount": {
      "description": "Details about an OVH account",
      "id": "OvhAccount",
      "namespace": "billing",
      "properties": {
        "alertThreshold": {
          "canBeNull": true,
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "balance": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "canBeCredited": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isActive": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "lastUpdate": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "openDate": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "ovhAccountId": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.Payment": {
      "description": "Details about a payment",
      "id": "Payment",
      "namespace": "billing",
      "properties": {
        "paymentDate": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "paymentIdentifier": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "paymentType": {
          "canBeNull": false,
          "fullType": "billing.PaymentMeanEnum",
          "readOnly": true,
          "required": false,
          "type": "billing.PaymentMeanEnum"
        }
      }
    },
    "billing.PaymentMeanEnum": {
      "description": "All payment means you might have use on an OVH order",
      "enum": [
        "cash",
        "chargeback",
        "check",
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
        "rupay",
        "transfer",
        "withdrawal"
      ],
      "enumType": "string",
      "id": "PaymentMeanEnum",
      "namespace": "billing"
    },
    "billing.Refund": {
      "description": "Details about a Refund",
      "id": "Refund",
      "namespace": "billing",
      "properties": {
        "date": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "orderId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "originalBillId": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "password": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "pdfUrl": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "priceWithTax": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "priceWithoutTax": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "refundId": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "tax": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "url": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.RefundDetail": {
      "description": "Information about a Bill entry",
      "id": "RefundDetail",
      "namespace": "billing",
      "properties": {
        "description": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quantity": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "reference": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "refundDetailId": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "refundId": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "totalPrice": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "unitPrice": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "billing.ReusablePaymentMeanEnum": {
      "description": "Reusable payment mean type",
      "enum": [
        "CREDIT_CARD",
        "CURRENT_ACCOUNT",
        "DEFERRED_PAYMENT_ACCOUNT",
        "DOMESTIC_CARD",
        "ENTERPRISE",
        "INTERNAL_TRUSTED_ACCOUNT",
        "PAYPAL",
        "RUPAY",
        "SEPA_DIRECT_DEBIT",
        "bankAccount",
        "creditCard",
        "deferredPaymentAccount",
        "fidelityAccount",
        "ovhAccount",
        "paypal"
      ],
      "enumType": "string",
      "id": "ReusablePaymentMeanEnum",
      "namespace": "billing"
    },
    "billing.ReversableBillDetail": {
      "description": "Information about withdrawal entry",
      "id": "ReversableBillDetail",
      "namespace": "billing",
      "properties": {
        "description": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quantity": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "reference": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "reverseBillDetailId": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "reverseBillId": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "totalPrice": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "unitPrice": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "billing.ReverseBill": {
      "description": "Details about a bill from customer",
      "id": "ReverseBill",
      "namespace": "billing",
      "properties": {
        "date": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "orderId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "password": {
          "canBeNull": false,
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        },
        "pdfUrl": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "priceWithTax": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "priceWithoutTax": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "reverseBillId": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "tax": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "url": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.SlaOperation": {
      "description": "SLA properties",
      "id": "SlaOperation",
      "namespace": "billing",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": "Date of the event that led to SLA",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the SLA operation for this incident",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "endDate": {
          "canBeNull": true,
          "description": "Date of the end of the SLA",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "SLA identifier",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Sla operation name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Date of the start of the SLA",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "billing.SlaOperationService": {
      "description": "Describe all services impacted by SLA",
      "id": "SlaOperationService",
      "namespace": "billing",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Service description",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Impacted service name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "slaApplication": {
          "canBeNull": false,
          "description": "SLA plan application",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "slaPlan": {
          "canBeNull": false,
          "description": "SLA plan description",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.VoucherAccount": {
      "description": "Details about a Voucher account",
      "id": "VoucherAccount",
      "namespace": "billing",
      "properties": {
        "balance": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "lastUpdate": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "openDate": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "voucherAccountId": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.VoucherMovement": {
      "description": "Details about a voucher account",
      "id": "VoucherMovement",
      "namespace": "billing",
      "properties": {
        "amount": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "balance": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "date": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "movementId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "operation": {
          "canBeNull": false,
          "fullType": "billing.voucherAccount.OperationEnum",
          "readOnly": true,
          "required": false,
          "type": "billing.voucherAccount.OperationEnum"
        },
        "order": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "previousBalance": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "billing.Withdrawal": {
      "description": "Details about a withdrawal",
      "id": "Withdrawal",
      "namespace": "billing",
      "properties": {
        "amount": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "country": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "date": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "orderId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "password": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "pdfUrl": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "withdrawalId": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.WithdrawalDetail": {
      "description": "Information about a Withdrawal entry",
      "id": "WithdrawalDetail",
      "namespace": "billing",
      "properties": {
        "description": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quantity": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "totalPrice": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "unitPrice": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "withdrawalDetailId": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.credit.Balance": {
      "description": "Credit balance",
      "id": "Balance",
      "namespace": "billing.credit",
      "properties": {
        "amount": {
          "canBeNull": false,
          "description": "Balance amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "balanceDetails": {
          "canBeNull": false,
          "description": "Balance details, amounts by serviceID",
          "fullType": "billing.credit.balance.BalanceDetail[]",
          "readOnly": true,
          "required": false,
          "type": "billing.credit.balance.BalanceDetail[]"
        },
        "balanceName": {
          "canBeNull": false,
          "description": "Balance name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "booked": {
          "canBeNull": false,
          "description": "Movement already booked on orders",
          "fullType": "billing.credit.balance.BookedMovement[]",
          "readOnly": true,
          "required": false,
          "type": "billing.credit.balance.BookedMovement[]"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Balance creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "expiring": {
          "canBeNull": false,
          "description": "Movement expiring soon",
          "fullType": "billing.credit.balance.ExpiringMovement[]",
          "readOnly": true,
          "required": false,
          "type": "billing.credit.balance.ExpiringMovement[]"
        },
        "expiringSummary": {
          "canBeNull": false,
          "description": "Movement expiring soon",
          "fullType": "billing.credit.balance.ExpiringMovement[]",
          "readOnly": true,
          "required": false,
          "type": "billing.credit.balance.ExpiringMovement[]"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Balance last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "type": {
          "canBeNull": false,
          "description": "Balance type",
          "fullType": "billing.credit.balance.Type",
          "readOnly": true,
          "required": false,
          "type": "billing.credit.balance.Type"
        }
      }
    },
    "billing.credit.balance.BalanceDetail": {
      "description": "Part of a balance",
      "id": "BalanceDetail",
      "namespace": "billing.credit.balance",
      "properties": {
        "amount": {
          "canBeNull": false,
          "description": "Balance part amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "serviceId": {
          "canBeNull": true,
          "description": "Service ID of this balance part",
          "fullType": "coreTypes.ServiceId:long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "billing.credit.balance.BookedMovement": {
      "description": "Movement already booked on orders",
      "id": "BookedMovement",
      "namespace": "billing.credit.balance",
      "properties": {
        "amount": {
          "canBeNull": false,
          "description": "Movement amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "orderId": {
          "canBeNull": false,
          "description": "Order ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "billing.credit.balance.ExpiringMovement": {
      "description": "Movement expiring soon",
      "id": "ExpiringMovement",
      "namespace": "billing.credit.balance",
      "properties": {
        "amount": {
          "canBeNull": false,
          "description": "Movement amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Movement creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "expirationDate": {
          "canBeNull": false,
          "description": "Movement expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Movement last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "sourceObject": {
          "canBeNull": false,
          "description": "Object source of this credit movement",
          "fullType": "billing.credit.balance.movement.SubObject",
          "readOnly": true,
          "required": false,
          "type": "billing.credit.balance.movement.SubObject"
        }
      }
    },
    "billing.credit.balance.Movement": {
      "description": "Credit balance",
      "id": "Movement",
      "namespace": "billing.credit.balance",
      "properties": {
        "amount": {
          "canBeNull": false,
          "description": "Movement amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "balanceName": {
          "canBeNull": false,
          "description": "Balance name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Movement creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "destinationObject": {
          "canBeNull": true,
          "description": "Object destination of this credit movement",
          "fullType": "billing.credit.balance.movement.SubObject",
          "readOnly": true,
          "required": false,
          "type": "billing.credit.balance.movement.SubObject"
        },
        "expirationDate": {
          "canBeNull": true,
          "description": "Movement expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Movement last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "movementId": {
          "canBeNull": false,
          "description": "Movement ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "orderId": {
          "canBeNull": true,
          "description": "Order ID associated to this credit movement",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "sourceObject": {
          "canBeNull": false,
          "description": "Object source of this credit movement",
          "fullType": "billing.credit.balance.movement.SubObject",
          "readOnly": true,
          "required": false,
          "type": "billing.credit.balance.movement.SubObject"
        },
        "type": {
          "canBeNull": false,
          "description": "Movement type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.credit.balance.Type": {
      "description": "Balance type",
      "enum": [
        "PREPAID_ACCOUNT",
        "VOUCHER",
        "DEPOSIT",
        "BONUS"
      ],
      "enumType": "string",
      "id": "Type",
      "namespace": "billing.credit.balance"
    },
    "billing.credit.balance.movement.SubObject": {
      "description": "Movement sub object",
      "id": "SubObject",
      "namespace": "billing.credit.balance.movement",
      "properties": {
        "id": {
          "canBeNull": true,
          "description": "Sub object ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Sub object name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.fidelityAccount.OperationEnum": {
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
      "enumType": "string",
      "id": "OperationEnum",
      "namespace": "billing.fidelityAccount"
    },
    "billing.order.AssociatedObject": {
      "description": "The object the processing of the order leaded to",
      "id": "AssociatedObject",
      "namespace": "billing.order",
      "properties": {
        "id": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "billing.order.associatedObject.TypeEnum"
        }
      }
    },
    "billing.order.AvailablePaymentMean": {
      "description": "All data needed to use a payment mean",
      "id": "AvailablePaymentMean",
      "namespace": "billing.order",
      "properties": {
        "fields": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "billing.order.AvailablePaymentMeanField[]"
        },
        "integration": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "billing.order.PaymentMeanIntegrationEnum"
        },
        "name": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.order.AvailablePaymentMeanField": {
      "description": "All fields needed for a payment mean integration",
      "id": "AvailablePaymentMeanField",
      "namespace": "billing.order",
      "properties": {
        "key": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "options": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "type": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "billing.order.PaymentMeanFieldTypeEnum"
        },
        "value": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.order.ConsumptionDetails": {
      "description": "Detailed consumption's retrieval information",
      "id": "ConsumptionDetails",
      "namespace": "billing.order",
      "properties": {
        "fileFormat": {
          "canBeNull": true,
          "description": "Format of the file",
          "readOnly": false,
          "required": false,
          "type": "consumption.ConsumptionExportFormatsEnum"
        },
        "fileURL": {
          "canBeNull": true,
          "description": "Temporary URL to download detailed consumption",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "message": {
          "canBeNull": true,
          "description": "Request's state description",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "taskId": {
          "canBeNull": false,
          "description": "Consumption details export task's identifier",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "taskStatus": {
          "canBeNull": false,
          "description": "Consumption details export task's status",
          "readOnly": false,
          "required": false,
          "type": "consumption.ConsumptionExportTaskStatusEnum"
        }
      }
    },
    "billing.order.FollowUp": {
      "description": "Follow up history of an order",
      "id": "FollowUp",
      "namespace": "billing.order",
      "properties": {
        "history": {
          "canBeNull": false,
          "description": "Step history of order follow-up",
          "readOnly": false,
          "required": false,
          "type": "billing.order.followUp.History[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Step status of order follow-up",
          "readOnly": false,
          "required": false,
          "type": "billing.order.followUp.StatusEnum"
        },
        "step": {
          "canBeNull": false,
          "description": "Step of order follow-up",
          "readOnly": false,
          "required": false,
          "type": "billing.order.followUp.StepEnum"
        }
      }
    },
    "billing.order.OrderStatusEnum": {
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
      "enumType": "string",
      "id": "OrderStatusEnum",
      "namespace": "billing.order"
    },
    "billing.order.PayWithPaymentMethod": {
      "description": "Pay with payment method parameter",
      "id": "PayWithPaymentMethod",
      "namespace": "billing.order",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "ID of payment method for pay this order",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "billing.order.PaymentMean": {
      "description": "All data needed to use a payment mean",
      "id": "PaymentMean",
      "namespace": "billing.order",
      "properties": {
        "fee": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "htmlForm": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "text"
        },
        "httpMethod": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "logo": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "parameters": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "billing.order.paymentMean.HttpParameter[]"
        },
        "subType": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.order.PaymentMeanFieldTypeEnum": {
      "description": "Field type of a payment mean",
      "enum": [
        "hidden",
        "select",
        "text"
      ],
      "enumType": "string",
      "id": "PaymentMeanFieldTypeEnum",
      "namespace": "billing.order"
    },
    "billing.order.PaymentMeanIntegrationEnum": {
      "description": "Integration payment mean type",
      "enum": [
        "GET_FORM",
        "POST_FORM",
        "REDIRECT"
      ],
      "enumType": "string",
      "id": "PaymentMeanIntegrationEnum",
      "namespace": "billing.order"
    },
    "billing.order.PaymentMeans": {
      "description": "TODO",
      "id": "PaymentMeans",
      "namespace": "billing.order",
      "properties": {
        "creditCard": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "billing.order.PaymentMean[]"
        },
        "edinar": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "billing.order.PaymentMean[]"
        },
        "fidelityPoints": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "billing.order.PaymentMean[]"
        },
        "ideal": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "billing.order.PaymentMean[]"
        },
        "multibanco": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "billing.order.PaymentMean[]"
        },
        "ovhAccount": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "billing.order.PaymentMean[]"
        },
        "paypal": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "billing.order.PaymentMean[]"
        },
        "promotion": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "billing.order.PaymentMean[]"
        }
      }
    },
    "billing.order.PaymentMethods": {
      "description": "Payment methods",
      "id": "PaymentMethods",
      "namespace": "billing.order",
      "properties": {
        "available": {
          "canBeNull": false,
          "description": "Payment method available on this order",
          "readOnly": false,
          "required": false,
          "type": "payment.method.AvailablePaymentMethod[]"
        },
        "paymentMethods": {
          "canBeNull": false,
          "description": "List of registered Payment methods usable on this order",
          "readOnly": false,
          "required": false,
          "type": "payment.method.PaymentMethod[]"
        },
        "registered": {
          "canBeNull": false,
          "description": "IDs of registered payment method usable on this order",
          "readOnly": false,
          "required": false,
          "type": "long[]"
        }
      }
    },
    "billing.order.RegisteredPaymentMean": {
      "description": "A registered payment mean",
      "id": "RegisteredPaymentMean",
      "namespace": "billing.order",
      "properties": {
        "paymentMean": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "billing.ReusablePaymentMeanEnum"
        }
      }
    },
    "billing.order.RetractionReasonEnum": {
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
      "enumType": "string",
      "id": "RetractionReasonEnum",
      "namespace": "billing.order"
    },
    "billing.order.associatedObject.TypeEnum": {
      "description": "Type of objects an order can be linked to",
      "enum": [
        "Bill",
        "Deposit",
        "Refund",
        "ReverseBill",
        "Withdrawal"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "billing.order.associatedObject"
    },
    "billing.order.followUp.History": {
      "description": "Step history of order follow-up",
      "id": "History",
      "namespace": "billing.order.followUp",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": "History date of order follow-up",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "History description of order follow-up",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "label": {
          "canBeNull": false,
          "description": "History label of order follow-up",
          "readOnly": false,
          "required": false,
          "type": "billing.order.followUp.HistoryStatusEnum"
        }
      }
    },
    "billing.order.followUp.HistoryStatusEnum": {
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
      "enumType": "string",
      "id": "HistoryStatusEnum",
      "namespace": "billing.order.followUp"
    },
    "billing.order.followUp.StatusEnum": {
      "description": "Step status of order follow-up",
      "enum": [
        "DOING",
        "DONE",
        "ERROR",
        "TODO"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "billing.order.followUp"
    },
    "billing.order.followUp.StepEnum": {
      "description": "Status of order follow-up",
      "enum": [
        "AVAILABLE",
        "DELIVERING",
        "VALIDATED",
        "VALIDATING"
      ],
      "enumType": "string",
      "id": "StepEnum",
      "namespace": "billing.order.followUp"
    },
    "billing.order.paymentMean.HttpParameter": {
      "description": "Parameter to give to a payment page",
      "id": "HttpParameter",
      "namespace": "billing.order.paymentMean",
      "properties": {
        "choice": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "billing.order.paymentMean.HttpParameterChoice[]"
        },
        "name": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.order.paymentMean.HttpParameterChoice": {
      "description": "Choice for an HTTP multi value parameter",
      "id": "HttpParameterChoice",
      "namespace": "billing.order.paymentMean",
      "properties": {
        "name": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.ovhAccount.OperationEnum": {
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
      "enumType": "string",
      "id": "OperationEnum",
      "namespace": "billing.ovhAccount"
    },
    "billing.voucherAccount.OperationEnum": {
      "description": "Operations a voucher account movement can represent",
      "enum": [
        "cancel-credit",
        "cancel-debit",
        "cancel-pre-debit",
        "credit",
        "debit",
        "pre-credit",
        "pre-debit"
      ],
      "enumType": "string",
      "id": "OperationEnum",
      "namespace": "billing.voucherAccount"
    },
    "complexType.SafeKeyValue<T>": {
      "description": "Key and value, with proper key strings",
      "generics": [
        "T"
      ],
      "id": "SafeKeyValue",
      "namespace": "complexType",
      "properties": {
        "key": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "fullType": "T",
          "readOnly": true,
          "required": false,
          "type": "T"
        }
      }
    },
    "complexType.UnitAndValue<T>": {
      "description": "A numeric value tagged with its unit",
      "generics": [
        "T"
      ],
      "id": "UnitAndValue",
      "namespace": "complexType",
      "properties": {
        "unit": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "T"
        }
      }
    },
    "consumption.ConsumptionExportFormatsEnum": {
      "description": "Export file format",
      "enum": [
        "csv"
      ],
      "enumType": "string",
      "id": "ConsumptionExportFormatsEnum",
      "namespace": "consumption"
    },
    "consumption.ConsumptionExportTaskStatusEnum": {
      "description": "Export task status",
      "enum": [
        "DOING",
        "DONE",
        "ERROR",
        "TODO"
      ],
      "enumType": "string",
      "id": "ConsumptionExportTaskStatusEnum",
      "namespace": "consumption"
    },
    "contact.Address": {
      "description": "Representation of an Address",
      "id": "Address",
      "namespace": "contact",
      "properties": {
        "city": {
          "canBeNull": false,
          "description": "City",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "country": {
          "canBeNull": false,
          "description": "Country",
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "line1": {
          "canBeNull": false,
          "description": "First line of the address",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "line2": {
          "canBeNull": true,
          "description": "Second line of the address",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "line3": {
          "canBeNull": true,
          "description": "Third line of the address",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "otherDetails": {
          "canBeNull": true,
          "description": "Others details",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "province": {
          "canBeNull": true,
          "description": "Province name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zip": {
          "canBeNull": false,
          "description": "Zipcode",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "contact.Contact": {
      "description": "Representation of a Contact",
      "id": "Contact",
      "namespace": "contact",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "Address for this contact",
          "fullType": "contact.Address",
          "readOnly": false,
          "required": false,
          "type": "contact.Address"
        },
        "birthCity": {
          "canBeNull": true,
          "description": "Birth city",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "birthCountry": {
          "canBeNull": true,
          "description": "Birth Country",
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "birthDay": {
          "canBeNull": true,
          "description": "Birth date",
          "fullType": "date",
          "readOnly": false,
          "required": false,
          "type": "date"
        },
        "birthZip": {
          "canBeNull": true,
          "description": "Birth Zipcode",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "cellPhone": {
          "canBeNull": true,
          "description": "Cellphone number",
          "fullType": "phoneNumber",
          "readOnly": false,
          "required": false,
          "type": "phoneNumber"
        },
        "companyNationalIdentificationNumber": {
          "canBeNull": true,
          "description": "National identification number of your company",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "email": {
          "canBeNull": false,
          "description": "Email address",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "fax": {
          "canBeNull": true,
          "description": "Fax number",
          "fullType": "phoneNumber",
          "readOnly": false,
          "required": false,
          "type": "phoneNumber"
        },
        "firstName": {
          "canBeNull": false,
          "description": "First name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "gender": {
          "canBeNull": true,
          "description": "Gender",
          "fullType": "nichandle.GenderEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.GenderEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "Contact Identifier",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "language": {
          "canBeNull": false,
          "description": "Language",
          "fullType": "nichandle.LanguageEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.LanguageEnum"
        },
        "lastName": {
          "canBeNull": false,
          "description": "Last name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "legalForm": {
          "canBeNull": false,
          "description": "Legal form of the contact",
          "fullType": "nichandle.LegalFormEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.LegalFormEnum"
        },
        "nationalIdentificationNumber": {
          "canBeNull": true,
          "description": "National identification number of the contact",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "nationality": {
          "canBeNull": true,
          "description": "Nationality",
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "organisationName": {
          "canBeNull": true,
          "description": "Organisation name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationType": {
          "canBeNull": true,
          "description": "Organisation type",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "phone": {
          "canBeNull": true,
          "description": "Telephone number",
          "fullType": "phoneNumber",
          "readOnly": false,
          "required": false,
          "type": "phoneNumber"
        },
        "spareEmail": {
          "canBeNull": true,
          "description": "Spare email address",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "vat": {
          "canBeNull": true,
          "description": "VAT number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "contact.FieldInformation": {
      "description": "Extras informations about a field",
      "id": "FieldInformation",
      "namespace": "contact",
      "properties": {
        "fieldName": {
          "canBeNull": false,
          "description": "Name of the field concerned by restrictions",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "mandatory": {
          "canBeNull": false,
          "description": "Indicates if the field is mandatory when editing",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "readOnly": {
          "canBeNull": false,
          "description": "Indicates if the field can't be edited",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "debt.Balance": {
      "description": "Debt balance of the account",
      "id": "Balance",
      "namespace": "debt",
      "properties": {
        "active": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "dueAmount": {
          "canBeNull": false,
          "description": "Amount of debts the account has",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "pendingAmount": {
          "canBeNull": false,
          "description": "Amount currently being processed",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "todoAmount": {
          "canBeNull": false,
          "description": "Reserved amount awaiting payment",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "unmaturedAmount": {
          "canBeNull": false,
          "description": "Unmatured amount for deferred payment term",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "debt.Debt": {
      "description": "State of a debt",
      "id": "Debt",
      "namespace": "debt",
      "properties": {
        "amount": {
          "canBeNull": false,
          "description": "Original amount of the debt",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "date": {
          "canBeNull": false,
          "description": "Date the debt was created on",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "debtId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "dueAmount": {
          "canBeNull": false,
          "description": "Amount you still owe for that debt",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "dueDate": {
          "canBeNull": true,
          "description": "If specified, the debt will not be recovered before that date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "orderId": {
          "canBeNull": false,
          "description": "The order the debt relates to",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "pendingAmount": {
          "canBeNull": false,
          "description": "Amount currently being processed",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of a debt",
          "fullType": "debt.entry.StatusDebtOrderEnum",
          "readOnly": true,
          "required": false,
          "type": "debt.entry.StatusDebtOrderEnum"
        },
        "todoAmount": {
          "canBeNull": false,
          "description": "Reserved amount awaiting payment",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "unmaturedAmount": {
          "canBeNull": false,
          "description": "Unmatured amount for deferred payment term",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "debt.Operation": {
      "description": "Operation that happend on a debt",
      "id": "Operation",
      "namespace": "debt",
      "properties": {
        "amount": {
          "canBeNull": false,
          "description": "Amount of the operation",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "date": {
          "canBeNull": false,
          "description": "Date the operation took place on",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "depositOrderId": {
          "canBeNull": false,
          "description": "Order id associated to the deposit",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "operationId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the operation",
          "fullType": "debt.entry.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "debt.entry.StatusEnum"
        },
        "type": {
          "canBeNull": true,
          "description": "Type of movement this operation represents",
          "fullType": "debt.entry.OperationEnum",
          "readOnly": true,
          "required": false,
          "type": "debt.entry.OperationEnum"
        }
      }
    },
    "debt.associatedObject.PaymentInfo": {
      "description": "The payment infos linked to this debt entry",
      "id": "PaymentInfo",
      "namespace": "debt.associatedObject",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Optional customer description",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "paymentType": {
          "canBeNull": false,
          "description": "Payment mean used for this debt operation",
          "readOnly": false,
          "required": false,
          "type": "billing.PaymentMeanEnum"
        },
        "publicLabel": {
          "canBeNull": true,
          "description": "Public payment mean label",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "debt.associatedObject.TypeEnum": {
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
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "debt.associatedObject"
    },
    "debt.entry.AssociatedObject": {
      "description": "The object linked to this debt entry",
      "id": "AssociatedObject",
      "namespace": "debt.entry",
      "properties": {
        "id": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "paymentInfo": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "debt.associatedObject.PaymentInfo"
        },
        "subId": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "debt.associatedObject.TypeEnum"
        }
      }
    },
    "debt.entry.OperationEnum": {
      "description": "All operations a debt entry can represent",
      "enum": [
        "BANK_TRANSFER_MANUAL",
        "CANCEL",
        "CASH_MANUAL",
        "CHECK_MANUAL",
        "CREDITCARD",
        "CREDITCARD_AUTOMATIC",
        "CREDITCARD_MANUAL",
        "CREDIT_ACCOUNT_AUTOMATIC",
        "CREDIT_CARD_AUTOMATIC",
        "CREDIT_CARD_MANUAL",
        "CURRENT_ACCOUNT_AUTOMATIC",
        "CURRENT_ACCOUNT_MANUAL",
        "DOMESTIC_CARD_AUTOMATIC",
        "DOMESTIC_CARD_MANUAL",
        "EDINAR_MANUAL",
        "ENTERPRISE_AUTOMATIC",
        "ENTERPRISE_MANUAL",
        "IDEAL_AUTOMATIC",
        "IDEAL_MANUAL",
        "INTERNAL_TRUSTED_ACCOUNT_AUTOMATIC",
        "INTERNAL_TRUSTED_ACCOUNT_MANUAL",
        "MULTIBANCO_AUTOMATIC",
        "MULTIBANCO_MANUAL",
        "ORDER",
        "PAYPAL_AUTOMATIC",
        "PAYPAL_MANUAL",
        "PAYU_AUTOMATIC",
        "PAYU_MANUAL",
        "RECOVERY_TRANSFER_AUTOMATIC",
        "REFUND",
        "REFUND_CHECK",
        "REFUND_CREDITCARD",
        "REFUND_CREDIT_ACCOUNT",
        "REFUND_CREDIT_CARD",
        "REFUND_CURRENT_ACCOUNT",
        "REFUND_DOMESTIC_CARD",
        "REFUND_ENTERPRISE",
        "REFUND_IDEAL",
        "REFUND_INTERNAL_TRUSTED_ACCOUNT",
        "REFUND_LOSS",
        "REFUND_MULTIBANCO",
        "REFUND_PAYPAL",
        "REFUND_PAYU",
        "REFUND_RUPAY",
        "REFUND_SEPA",
        "REFUND_SEPA_DIRECT_DEBIT",
        "REFUND_TRANSFER",
        "REFUND_UNKNOWN",
        "RUPAY_AUTOMATIC",
        "RUPAY_MANUAL",
        "SEPA_AUTOMATIC",
        "SEPA_DIRECT_DEBIT_AUTOMATIC",
        "SEPA_DIRECT_DEBIT_MANUAL",
        "TRANSFER_MANUAL",
        "UNPAID_CHECK",
        "UNPAID_CREDITCARD",
        "UNPAID_CREDIT_ACCOUNT",
        "UNPAID_CREDIT_CARD",
        "UNPAID_CURRENT_ACCOUNT",
        "UNPAID_DOMESTIC_CARD",
        "UNPAID_ENTERPRISE",
        "UNPAID_IDEAL",
        "UNPAID_INTERNAL_TRUSTED_ACCOUNT",
        "UNPAID_MULTIBANCO",
        "UNPAID_PAYPAL",
        "UNPAID_PAYU",
        "UNPAID_RUPAY",
        "UNPAID_SEPA",
        "UNPAID_SEPA_DIRECT_DEBIT",
        "UNPAID_WITHDRAW",
        "WARRANT_MANUAL",
        "WITHDRAW_AUTOMATIC"
      ],
      "enumType": "string",
      "id": "OperationEnum",
      "namespace": "debt.entry"
    },
    "debt.entry.StatusDebtOrderEnum": {
      "description": "All status a debt HistoryOrder entry can be in",
      "enum": [
        "PAID",
        "REFUNDED",
        "TO_BE_PAID",
        "UNMATURED",
        "UNPAID"
      ],
      "enumType": "string",
      "id": "StatusDebtOrderEnum",
      "namespace": "debt.entry"
    },
    "debt.entry.StatusEnum": {
      "description": "All status a debt entry can be in",
      "enum": [
        "CANCELLED",
        "DONE",
        "FAILED",
        "PAID",
        "PENDING",
        "TODO"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "debt.entry"
    },
    "dedicated.TemplateOsHardwareRaidEnum": {
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
      "enumType": "string",
      "id": "TemplateOsHardwareRaidEnum",
      "namespace": "dedicated"
    },
    "dedicated.TemplateOsInfoLicense": {
      "description": "A structure describing some interesting facts about an OS template licensing",
      "id": "TemplateOsInfoLicense",
      "namespace": "dedicated",
      "properties": {
        "os": {
          "canBeNull": true,
          "description": "OS template license OS details",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsInfoLicenseItem"
        },
        "usage": {
          "canBeNull": true,
          "description": "OS template license usage details",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsInfoLicenseItem"
        }
      }
    },
    "dedicated.TemplateOsInfoLicenseItem": {
      "description": "A structure describing some interesting facts about an OS template license item",
      "id": "TemplateOsInfoLicenseItem",
      "namespace": "dedicated",
      "properties": {
        "name": {
          "canBeNull": true,
          "description": "OS template license item names",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsInfoLicenseItemEnum[]"
        },
        "url": {
          "canBeNull": true,
          "description": "OS template license item url",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.TemplateOsInfoLicenseItemEnum": {
      "description": "Standard license name according to SPDX",
      "enum": [
        "0BSD",
        "AAL",
        "ADSL",
        "AFL-1.1",
        "AFL-1.2",
        "AFL-2.0",
        "AFL-2.1",
        "AFL-3.0",
        "AGPL-1.0-only",
        "AGPL-1.0-or-later",
        "AGPL-3.0-only",
        "AGPL-3.0-or-later",
        "AMDPLPA",
        "AML",
        "AMPAS",
        "ANTLR-PD",
        "ANTLR-PD-fallback",
        "APAFML",
        "APL-1.0",
        "APSL-1.0",
        "APSL-1.1",
        "APSL-1.2",
        "APSL-2.0",
        "Abstyles",
        "Adobe-2006",
        "Adobe-Glyph",
        "Afmparse",
        "Aladdin",
        "Apache-1.0",
        "Apache-1.1",
        "Apache-2.0",
        "Artistic-1.0",
        "Artistic-1.0-Perl",
        "Artistic-1.0-cl8",
        "Artistic-2.0",
        "BSD-1-Clause",
        "BSD-2-Clause",
        "BSD-2-Clause-Patent",
        "BSD-2-Clause-Views",
        "BSD-3-Clause",
        "BSD-3-Clause-Attribution",
        "BSD-3-Clause-Clear",
        "BSD-3-Clause-LBNL",
        "BSD-3-Clause-Modification",
        "BSD-3-Clause-No-Nuclear-License",
        "BSD-3-Clause-No-Nuclear-License-2014",
        "BSD-3-Clause-No-Nuclear-Warranty",
        "BSD-3-Clause-Open-MPI",
        "BSD-4-Clause",
        "BSD-4-Clause-Shortened",
        "BSD-4-Clause-UC",
        "BSD-Protection",
        "BSD-Source-Code",
        "BSL-1.0",
        "BUSL-1.1",
        "Bahyph",
        "Barr",
        "Beerware",
        "BitTorrent-1.0",
        "BitTorrent-1.1",
        "BlueOak-1.0.0",
        "Borceux",
        "C-UDA-1.0",
        "CAL-1.0",
        "CAL-1.0-Combined-Work-Exception",
        "CATOSL-1.1",
        "CC-BY-1.0",
        "CC-BY-2.0",
        "CC-BY-2.5",
        "CC-BY-3.0",
        "CC-BY-4.0",
        "CC-BY-NC-1.0",
        "CC-BY-NC-2.0",
        "CC-BY-NC-2.5",
        "CC-BY-NC-3.0",
        "CC-BY-NC-4.0",
        "CC-BY-NC-ND-1.0",
        "CC-BY-NC-ND-2.0",
        "CC-BY-NC-ND-2.5",
        "CC-BY-NC-ND-3.0",
        "CC-BY-NC-ND-4.0",
        "CC-BY-NC-SA-1.0",
        "CC-BY-NC-SA-2.0",
        "CC-BY-NC-SA-2.5",
        "CC-BY-NC-SA-3.0",
        "CC-BY-NC-SA-4.0",
        "CC-BY-ND-1.0",
        "CC-BY-ND-2.0",
        "CC-BY-ND-2.5",
        "CC-BY-ND-3.0",
        "CC-BY-ND-4.0",
        "CC-BY-SA-1.0",
        "CC-BY-SA-2.0",
        "CC-BY-SA-2.5",
        "CC-BY-SA-3.0",
        "CC-BY-SA-4.0",
        "CC-PDDC",
        "CC0-1.0",
        "CDDL-1.0",
        "CDDL-1.1",
        "CDLA-Permissive-1.0",
        "CDLA-Sharing-1.0",
        "CECILL-1.0",
        "CECILL-1.1",
        "CECILL-2.0",
        "CECILL-2.1",
        "CECILL-B",
        "CECILL-C",
        "CERN-OHL-1.1",
        "CERN-OHL-1.2",
        "CERN-OHL-P-2.0",
        "CERN-OHL-S-2.0",
        "CERN-OHL-W-2.0",
        "CNRI-Jython",
        "CNRI-Python",
        "CNRI-Python-GPL-Compatible",
        "CPAL-1.0",
        "CPL-1.0",
        "CPOL-1.02",
        "CUA-OPL-1.0",
        "Caldera",
        "ClArtistic",
        "Condor-1.1",
        "Crossword",
        "CrystalStacker",
        "Cube",
        "D-FSL-1.0",
        "DFSG",
        "DOC",
        "DRL-1.0",
        "DSDP",
        "Dotseqn",
        "ECL-1.0",
        "ECL-2.0",
        "EFL-1.0",
        "EFL-2.0",
        "EPICS",
        "EPL-1.0",
        "EPL-2.0",
        "EUDatagrid",
        "EUPL-1.0",
        "EUPL-1.1",
        "EUPL-1.2",
        "Entessa",
        "ErlPL-1.1",
        "Eurosym",
        "FSFAP",
        "FSFUL",
        "FSFULLR",
        "FTL",
        "Fair",
        "Frameworx-1.0",
        "FreeBSD-DOC",
        "FreeImage",
        "GD",
        "GFDL-1.1-invariants-only",
        "GFDL-1.1-invariants-or-later",
        "GFDL-1.1-no-invariants-only",
        "GFDL-1.1-no-invariants-or-later",
        "GFDL-1.1-only",
        "GFDL-1.1-or-later",
        "GFDL-1.2-invariants-only",
        "GFDL-1.2-invariants-or-later",
        "GFDL-1.2-no-invariants-only",
        "GFDL-1.2-no-invariants-or-later",
        "GFDL-1.2-only",
        "GFDL-1.2-or-later",
        "GFDL-1.3-invariants-only",
        "GFDL-1.3-invariants-or-later",
        "GFDL-1.3-no-invariants-only",
        "GFDL-1.3-no-invariants-or-later",
        "GFDL-1.3-only",
        "GFDL-1.3-or-later",
        "GL2PS",
        "GLWTPL",
        "GPL-1.0-only",
        "GPL-1.0-or-later",
        "GPL-2.0-only",
        "GPL-2.0-or-later",
        "GPL-3.0-only",
        "GPL-3.0-or-later",
        "Giftware",
        "Glide",
        "Glulxe",
        "HPND",
        "HPND-sell-variant",
        "HTMLTIDY",
        "HaskellReport",
        "Hippocratic-2.1",
        "IBM-pibs",
        "ICU",
        "IJG",
        "IPA",
        "IPL-1.0",
        "ISC",
        "ImageMagick",
        "Imlib2",
        "Info-ZIP",
        "Intel",
        "Intel-ACPI",
        "Interbase-1.0",
        "JPNIC",
        "JSON",
        "JasPer-2.0",
        "LAL-1.2",
        "LAL-1.3",
        "LGPL-2.0-only",
        "LGPL-2.0-or-later",
        "LGPL-2.1-only",
        "LGPL-2.1-or-later",
        "LGPL-3.0-only",
        "LGPL-3.0-or-later",
        "LGPLLR",
        "LPL-1.0",
        "LPL-1.02",
        "LPPL-1.0",
        "LPPL-1.1",
        "LPPL-1.2",
        "LPPL-1.3a",
        "LPPL-1.3c",
        "Latex2e",
        "Leptonica",
        "LiLiQ-P-1.1",
        "LiLiQ-R-1.1",
        "LiLiQ-Rplus-1.1",
        "Libpng",
        "Linux-OpenIB",
        "MIT",
        "MIT-0",
        "MIT-CMU",
        "MIT-Modern-Variant",
        "MIT-advertising",
        "MIT-enna",
        "MIT-feh",
        "MIT-open-group",
        "MITNFA",
        "MPL-1.0",
        "MPL-1.1",
        "MPL-2.0",
        "MPL-2.0-no-copyleft-exception",
        "MS-PL",
        "MS-RL",
        "MTLL",
        "MakeIndex",
        "MirOS",
        "Motosoto",
        "MulanPSL-1.0",
        "MulanPSL-2.0",
        "Multics",
        "Mup",
        "NAIST-2003",
        "NASA-1.3",
        "NBPL-1.0",
        "NCGL-UK-2.0",
        "NCSA",
        "NGPL",
        "NIST-PD",
        "NIST-PD-fallback",
        "NLOD-1.0",
        "NLPL",
        "NOSL",
        "NPL-1.0",
        "NPL-1.1",
        "NPOSL-3.0",
        "NRL",
        "NTP",
        "NTP-0",
        "Naumen",
        "Net-SNMP",
        "NetCDF",
        "Newsletr",
        "Nokia",
        "Noweb",
        "O-UDA-1.0",
        "OCCT-PL",
        "OCLC-2.0",
        "ODC-By-1.0",
        "ODbL-1.0",
        "OFL-1.0",
        "OFL-1.0-RFN",
        "OFL-1.0-no-RFN",
        "OFL-1.1",
        "OFL-1.1-RFN",
        "OFL-1.1-no-RFN",
        "OGC-1.0",
        "OGDL-Taiwan-1.0",
        "OGL-Canada-2.0",
        "OGL-UK-1.0",
        "OGL-UK-2.0",
        "OGL-UK-3.0",
        "OGTSL",
        "OLDAP-1.1",
        "OLDAP-1.2",
        "OLDAP-1.3",
        "OLDAP-1.4",
        "OLDAP-2.0",
        "OLDAP-2.0.1",
        "OLDAP-2.1",
        "OLDAP-2.2",
        "OLDAP-2.2.1",
        "OLDAP-2.2.2",
        "OLDAP-2.3",
        "OLDAP-2.4",
        "OLDAP-2.5",
        "OLDAP-2.6",
        "OLDAP-2.7",
        "OLDAP-2.8",
        "OML",
        "OPL-1.0",
        "OSET-PL-2.1",
        "OSL-1.0",
        "OSL-1.1",
        "OSL-2.0",
        "OSL-2.1",
        "OSL-3.0",
        "OpenSSL",
        "PDDL-1.0",
        "PHP-3.0",
        "PHP-3.01",
        "PSF-2.0",
        "Parity-6.0.0",
        "Parity-7.0.0",
        "Plexus",
        "PolyForm-Noncommercial-1.0.0",
        "PolyForm-Small-Business-1.0.0",
        "PostgreSQL",
        "Python-2.0",
        "QPL-1.0",
        "Qhull",
        "RHeCos-1.1",
        "RPL-1.1",
        "RPL-1.5",
        "RPSL-1.0",
        "RSA-MD",
        "RSCPL",
        "Rdisc",
        "Ruby",
        "SAX-PD",
        "SCEA",
        "SGI-B-1.0",
        "SGI-B-1.1",
        "SGI-B-2.0",
        "SHL-0.5",
        "SHL-0.51",
        "SISSL",
        "SISSL-1.2",
        "SMLNJ",
        "SMPPL",
        "SNIA",
        "SPL-1.0",
        "SSH-OpenSSH",
        "SSH-short",
        "SSPL-1.0",
        "SWL",
        "Saxpath",
        "Sendmail",
        "Sendmail-8.23",
        "SimPL-2.0",
        "Sleepycat",
        "Spencer-86",
        "Spencer-94",
        "Spencer-99",
        "SugarCRM-1.1.3",
        "TAPR-OHL-1.0",
        "TCL",
        "TCP-wrappers",
        "TMate",
        "TORQUE-1.1",
        "TOSL",
        "TU-Berlin-1.0",
        "TU-Berlin-2.0",
        "UCL-1.0",
        "UPL-1.0",
        "Unicode-DFS-2015",
        "Unicode-DFS-2016",
        "Unicode-TOU",
        "Unlicense",
        "VOSTROM",
        "VSL-1.0",
        "Vim",
        "W3C",
        "W3C-19980720",
        "W3C-20150513",
        "WTFPL",
        "Watcom-1.0",
        "Wsuipa",
        "X11",
        "XFree86-1.1",
        "XSkat",
        "Xerox",
        "Xnet",
        "ZPL-1.1",
        "ZPL-2.0",
        "ZPL-2.1",
        "Zed",
        "Zend-2.0",
        "Zimbra-1.3",
        "Zimbra-1.4",
        "Zlib",
        "blessing",
        "bzip2-1.0.5",
        "bzip2-1.0.6",
        "copyleft-next-0.3.0",
        "copyleft-next-0.3.1",
        "curl",
        "diffmark",
        "dvipdfm",
        "eGenix",
        "etalab-2.0",
        "freeware",
        "gSOAP-1.3b",
        "gnuplot",
        "iMatix",
        "libpng-2.0",
        "libselinux-1.0",
        "libtiff",
        "mpich2",
        "proprietary",
        "psfrag",
        "psutils",
        "unknown",
        "xinetd",
        "xpp",
        "zlib-acknowledgement"
      ],
      "enumType": "string",
      "id": "TemplateOsInfoLicenseItemEnum",
      "namespace": "dedicated"
    },
    "dedicated.TemplateOsInfoProject": {
      "description": "A structure describing some interesting facts about an OS template project",
      "id": "TemplateOsInfoProject",
      "namespace": "dedicated",
      "properties": {
        "os": {
          "canBeNull": true,
          "description": "OS template project OS details",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsInfoProjectItem"
        },
        "usage": {
          "canBeNull": true,
          "description": "OS template project usage details",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsInfoProjectItem"
        }
      }
    },
    "dedicated.TemplateOsInfoProjectItem": {
      "description": "A structure describing some interesting facts about an OS template project item",
      "id": "TemplateOsInfoProjectItem",
      "namespace": "dedicated",
      "properties": {
        "governance": {
          "canBeNull": true,
          "description": "OS template project item governance",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "releaseNotes": {
          "canBeNull": true,
          "description": "OS template project item release notes",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": true,
          "description": "OS template project item url",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "version": {
          "canBeNull": true,
          "description": "OS template project item version",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.TemplateOsInput": {
      "description": "A structure describing input questions for the specific OS template",
      "id": "TemplateOsInput",
      "namespace": "dedicated",
      "properties": {
        "default": {
          "canBeNull": true,
          "description": "Default value",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": true,
          "description": "Input question description",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "enum": {
          "canBeNull": false,
          "description": "When type is enum: name of the possible enum values",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "mandatory": {
          "canBeNull": false,
          "description": "Whether answering to that question is mandatory in order to trigger an install with that specific OS or not",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Input question name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Input type",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsInputTypeEnum"
        }
      }
    },
    "dedicated.TemplateOsInputTypeEnum": {
      "description": "Template OS Input type enum",
      "enum": [
        "boolean",
        "date",
        "email",
        "enum",
        "hexstring",
        "ip",
        "keyValue",
        "number",
        "string",
        "text",
        "time",
        "url",
        "uuid"
      ],
      "enumType": "string",
      "id": "TemplateOsInputTypeEnum",
      "namespace": "dedicated"
    },
    "dedicated.TemplateOsLanguageEnum": {
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
      "enumType": "string",
      "id": "TemplateOsLanguageEnum",
      "namespace": "dedicated"
    },
    "dedicated.TemplateOsProperties": {
      "description": "A structure describing properties customizables about this dedicated installation template",
      "id": "TemplateOsProperties",
      "namespace": "dedicated",
      "properties": {
        "customHostname": {
          "canBeNull": true,
          "description": "Set up the server using the provided hostname instead of the default hostname",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "postInstallationScriptLink": {
          "canBeNull": true,
          "description": "Indicate the URL where your postinstall customisation script is located",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "postInstallationScriptReturn": {
          "canBeNull": true,
          "description": "indicate the string returned by your postinstall customisation script on successful execution. Advice: your script should return a unique validation string in case of succes. A good example is \"loh1Xee7eo OK OK OK UGh8Ang1Gu",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "sshKeyName": {
          "canBeNull": true,
          "description": "Name of the ssh key that should be installed. Password login will be disabled",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "useDistributionKernel": {
          "canBeNull": true,
          "description": "Use the distribution's native kernel instead of the recommended OVH Kernel",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "dedicated.TemplateOsSubfamilyEnum": {
      "description": "Os subfamily definition",
      "enum": [
        "alma",
        "aos",
        "arch",
        "byoi",
        "centos",
        "cloudlinux",
        "coreos",
        "debian",
        "dgx",
        "esxi",
        "fedora",
        "freebsd",
        "gentoo",
        "hyperv",
        "omnios",
        "openio",
        "openmediavault",
        "opensuse",
        "ovh",
        "pcs",
        "power",
        "proxmox",
        "rhel",
        "rocky",
        "slackware",
        "sles-sap",
        "smartos",
        "solusvm",
        "ubuntu",
        "windows-server-core",
        "windows-server-desktop-exp",
        "xcp",
        "xen"
      ],
      "enumType": "string",
      "id": "TemplateOsSubfamilyEnum",
      "namespace": "dedicated"
    },
    "dedicated.TemplateOsTypeEnum": {
      "description": "Os type",
      "enum": [
        "bsd",
        "custom",
        "ibm",
        "linux",
        "solaris",
        "unix",
        "windows"
      ],
      "enumType": "string",
      "id": "TemplateOsTypeEnum",
      "namespace": "dedicated"
    },
    "dedicated.TemplateOsUsageEnum": {
      "description": "Os usage definition",
      "enum": [
        "basic",
        "customer",
        "database",
        "erp",
        "hosting",
        "management",
        "other",
        "readyToUse",
        "virtualisation",
        "virtualization"
      ],
      "enumType": "string",
      "id": "TemplateOsUsageEnum",
      "namespace": "dedicated"
    },
    "dedicated.TemplatePartitionTypeEnum": {
      "description": "partition type",
      "enum": [
        "logical",
        "lv",
        "primary"
      ],
      "enumType": "string",
      "id": "TemplatePartitionTypeEnum",
      "namespace": "dedicated"
    },
    "dedicated.installationTemplate.Templates": {
      "description": "Available installation templates",
      "id": "Templates",
      "namespace": "dedicated.installationTemplate",
      "properties": {
        "availableLanguages": {
          "canBeNull": false,
          "description": "list of all language available for this template",
          "fullType": "dedicated.TemplateOsLanguageEnum[]",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TemplateOsLanguageEnum[]"
        },
        "bitFormat": {
          "canBeNull": false,
          "description": "this template bit format",
          "fullType": "dedicated.server.BitFormatEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.BitFormatEnum"
        },
        "category": {
          "canBeNull": false,
          "description": "category of this template (informative only)",
          "fullType": "dedicated.TemplateOsUsageEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TemplateOsUsageEnum"
        },
        "customization": {
          "canBeNull": true,
          "description": "Customizable template properties ",
          "fullType": "dedicated.TemplateOsProperties",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsProperties"
        },
        "defaultLanguage": {
          "canBeNull": false,
          "description": "the default language of this template",
          "fullType": "dedicated.TemplateOsLanguageEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsLanguageEnum"
        },
        "description": {
          "canBeNull": false,
          "description": "information about this template",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "distribution": {
          "canBeNull": false,
          "description": "the distribution this template is based on",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "endOfInstall": {
          "canBeNull": false,
          "description": "after this date, install of this template will not be possible at OVH",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "family": {
          "canBeNull": false,
          "description": "this template family type",
          "fullType": "dedicated.TemplateOsTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TemplateOsTypeEnum"
        },
        "filesystems": {
          "canBeNull": false,
          "description": "list of all filesystems available for this template",
          "fullType": "dedicated.server.FileSystemEnum[]",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.FileSystemEnum[]"
        },
        "hardRaidConfiguration": {
          "canBeNull": true,
          "description": "This distribution supports hardware raid configuration through the OVH API",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "inputs": {
          "canBeNull": true,
          "description": "Inputs",
          "fullType": "dedicated.TemplateOsInput[]",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TemplateOsInput[]"
        },
        "license": {
          "canBeNull": true,
          "description": "This distribution licensing details",
          "fullType": "dedicated.TemplateOsInfoLicense",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TemplateOsInfoLicense"
        },
        "lvmReady": {
          "canBeNull": true,
          "description": "This distribution supports Logical Volumes (Linux LVM)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "noPartitioning": {
          "canBeNull": false,
          "description": "Partitioning customization is not available for this OS template",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "project": {
          "canBeNull": true,
          "description": "This distribution project details",
          "fullType": "dedicated.TemplateOsInfoProject",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TemplateOsInfoProject"
        },
        "softRaidOnlyMirroring": {
          "canBeNull": false,
          "description": "Partitioning customization is available but limited to mirroring for this OS template",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "subfamily": {
          "canBeNull": false,
          "description": "this template subfamily type",
          "fullType": "dedicated.TemplateOsSubfamilyEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TemplateOsSubfamilyEnum"
        },
        "supportsDistributionKernel": {
          "canBeNull": true,
          "description": "This distribution supports installation using the distribution's native kernel instead of the recommended OVH kernel",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "supportsGptLabel": {
          "canBeNull": true,
          "description": "This distribution supports the GUID Partition Table (GPT), providing up to 128 partitions that can have more than 2 TB",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "supportsRTM": {
          "canBeNull": false,
          "description": "This distribution supports RTM software",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "supportsSqlServer": {
          "canBeNull": true,
          "description": "This distribution supports the microsoft SQL server",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "templateName": {
          "canBeNull": false,
          "description": "This template name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.installationTemplate.hardwareRaid": {
      "description": "Hardware RAID defined in this partitioning scheme",
      "id": "hardwareRaid",
      "namespace": "dedicated.installationTemplate",
      "properties": {
        "disks": {
          "canBeNull": false,
          "description": "Disk list",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "mode": {
          "canBeNull": false,
          "description": "RAID mode",
          "fullType": "dedicated.TemplateOsHardwareRaidEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsHardwareRaidEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "Hardware RAID name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "step": {
          "canBeNull": false,
          "description": "Specifies the creation order of the hardware RAID",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicated.installationTemplate.templatePartitioningSchemes": {
      "description": "Partitioning schemes available on this template",
      "id": "templatePartitioningSchemes",
      "namespace": "dedicated.installationTemplate",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "This partitioning scheme name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "priority": {
          "canBeNull": false,
          "description": "on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications)",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicated.installationTemplate.templatePartitions": {
      "description": " Partitions defined in this partitioning scheme",
      "id": "templatePartitions",
      "namespace": "dedicated.installationTemplate",
      "properties": {
        "filesystem": {
          "canBeNull": false,
          "description": "Partition filesytem",
          "fullType": "dedicated.server.FileSystemEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.FileSystemEnum"
        },
        "mountpoint": {
          "canBeNull": false,
          "description": "Partition mount point",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "order": {
          "canBeNull": false,
          "description": "specifies the creation order of the partition on the disk",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "raid": {
          "canBeNull": true,
          "description": "Partition raid",
          "fullType": "dedicated.server.PartitionRaidEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.PartitionRaidEnum"
        },
        "size": {
          "canBeNull": false,
          "description": "Partition size (unit: MB GB TB, MB by default), 0 => rest of the space",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "type": {
          "canBeNull": false,
          "description": "Partition type",
          "fullType": "dedicated.TemplatePartitionTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplatePartitionTypeEnum"
        },
        "volumeName": {
          "canBeNull": true,
          "description": "Logical volume name (required if type is lv) or optional zpool name if filesystem is ZFS",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.server.BitFormatEnum": {
      "description": "Available os bit format",
      "enum": [
        "32",
        "64"
      ],
      "enumType": "long",
      "id": "BitFormatEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.FileSystemEnum": {
      "description": "FileSystems",
      "enum": [
        "btrfs",
        "ext3",
        "ext4",
        "fat16",
        "none",
        "ntfs",
        "reiserfs",
        "swap",
        "ufs",
        "vmfs5",
        "vmfs6",
        "vmfsl",
        "xfs",
        "zfs"
      ],
      "enumType": "string",
      "id": "FileSystemEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.PartitionRaidEnum": {
      "description": "partition raid type",
      "enum": [
        "0",
        "1",
        "10",
        "5",
        "6",
        "7"
      ],
      "enumType": "string",
      "id": "PartitionRaidEnum",
      "namespace": "dedicated.server"
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
    },
    "me.consent.Campaign": {
      "description": "Consent campaign",
      "id": "Campaign",
      "namespace": "me.consent",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Campaign description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Campaign name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Campaign type",
          "fullType": "me.consent.CampaignTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "me.consent.CampaignTypeEnum"
        }
      }
    },
    "me.consent.CampaignTypeEnum": {
      "description": "Campaign type",
      "enum": [
        "OPTIN",
        "OPTOUT"
      ],
      "enumType": "string",
      "id": "CampaignTypeEnum",
      "namespace": "me.consent"
    },
    "me.consent.Consent": {
      "description": "Customer consent information for a campaign",
      "id": "Consent",
      "namespace": "me.consent",
      "properties": {
        "campaign": {
          "canBeNull": false,
          "description": "Campaign name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "history": {
          "canBeNull": false,
          "description": "Consent decisions history for this campaign",
          "fullType": "me.consent.Decision[]",
          "readOnly": true,
          "required": false,
          "type": "me.consent.Decision[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Campaign type",
          "fullType": "me.consent.CampaignTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "me.consent.CampaignTypeEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "Current consent value",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "me.consent.Decision": {
      "description": "Customer consent decision",
      "id": "Decision",
      "namespace": "me.consent",
      "properties": {
        "timestamp": {
          "canBeNull": false,
          "description": "Consent decision datetime",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "value": {
          "canBeNull": false,
          "description": "Consent decision value",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "me.credit.Balance": {
      "description": "Missing description",
      "id": "Balance",
      "namespace": "me.credit",
      "properties": {
        "amount": {
          "canBeNull": false,
          "description": "Balance amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "balanceDetails": {
          "canBeNull": false,
          "description": "Balance details, amounts by serviceID",
          "fullType": "me.credit.balance.BalanceDetails[]",
          "readOnly": true,
          "required": false,
          "type": "me.credit.balance.BalanceDetails[]"
        },
        "balanceName": {
          "canBeNull": false,
          "description": "Balance name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "booked": {
          "canBeNull": false,
          "description": "Movement already booked on orders",
          "fullType": "me.credit.balance.BookedMovement[]",
          "readOnly": true,
          "required": false,
          "type": "me.credit.balance.BookedMovement[]"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Balance creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "expiring": {
          "canBeNull": false,
          "description": "Movement expiring soon",
          "fullType": "me.credit.balance.ExpiringMovement[]",
          "readOnly": true,
          "required": false,
          "type": "me.credit.balance.ExpiringMovement[]"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Balance last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "type": {
          "canBeNull": false,
          "description": "Balance type",
          "fullType": "me.credit.balance.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "me.credit.balance.TypeEnum"
        }
      }
    },
    "me.credit.balance.BalanceDetails": {
      "description": "Missing description",
      "id": "BalanceDetails",
      "namespace": "me.credit.balance",
      "properties": {
        "amount": {
          "canBeNull": false,
          "description": "Balance part amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "balanceSubName": {
          "canBeNull": true,
          "description": "Balance sub name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "expiring": {
          "canBeNull": false,
          "description": "Expiring parts of this balance",
          "fullType": "me.credit.balance.ExpiringMovement[]",
          "readOnly": true,
          "required": false,
          "type": "me.credit.balance.ExpiringMovement[]"
        },
        "serviceId": {
          "canBeNull": true,
          "description": "Service ID of this balance part",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "me.credit.balance.BookedMovement": {
      "description": "Missing description",
      "id": "BookedMovement",
      "namespace": "me.credit.balance",
      "properties": {
        "amount": {
          "canBeNull": false,
          "description": "Movement amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "balanceSubName": {
          "canBeNull": true,
          "description": "Balance sub name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "orderId": {
          "canBeNull": false,
          "description": "Order ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "me.credit.balance.ExpiringMovement": {
      "description": "Missing description",
      "id": "ExpiringMovement",
      "namespace": "me.credit.balance",
      "properties": {
        "amount": {
          "canBeNull": false,
          "description": "Movement amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Movement creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "expirationDate": {
          "canBeNull": false,
          "description": "Movement expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Movement last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "sourceObject": {
          "canBeNull": false,
          "description": "Object source of this credit movement",
          "fullType": "me.credit.balance.movement.SubObject",
          "readOnly": true,
          "required": false,
          "type": "me.credit.balance.movement.SubObject"
        }
      }
    },
    "me.credit.balance.Movement": {
      "description": "Missing description",
      "id": "Movement",
      "namespace": "me.credit.balance",
      "properties": {
        "amount": {
          "canBeNull": false,
          "description": "Movement amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "balanceName": {
          "canBeNull": false,
          "description": "Balance name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Movement creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "destinationObject": {
          "canBeNull": true,
          "description": "Object destination of this credit movement",
          "fullType": "me.credit.balance.movement.SubObject",
          "readOnly": true,
          "required": false,
          "type": "me.credit.balance.movement.SubObject"
        },
        "expirationDate": {
          "canBeNull": true,
          "description": "Movement expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Movement last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "movementId": {
          "canBeNull": false,
          "description": "Movement ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "orderId": {
          "canBeNull": true,
          "description": "Order ID associated to this credit movement",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "sourceObject": {
          "canBeNull": false,
          "description": "Object source of this credit movement",
          "fullType": "me.credit.balance.movement.SubObject",
          "readOnly": true,
          "required": false,
          "type": "me.credit.balance.movement.SubObject"
        },
        "type": {
          "canBeNull": false,
          "description": "Movement type",
          "fullType": "me.credit.balance.movement.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "me.credit.balance.movement.TypeEnum"
        }
      }
    },
    "me.credit.balance.TypeEnum": {
      "description": "Balance type",
      "enum": [
        "BONUS",
        "DEPOSIT",
        "PREPAID_ACCOUNT",
        "VOUCHER"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "me.credit.balance"
    },
    "me.credit.balance.movement.SubObject": {
      "description": "Missing description",
      "id": "SubObject",
      "namespace": "me.credit.balance.movement",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Sub object ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Sub object name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "me.credit.balance.movement.TypeEnum": {
      "description": "Balance movement type",
      "enum": [
        "BONUS",
        "CANCEL",
        "CREDIT_NOTE",
        "EXPIRE",
        "GIFT",
        "MANUAL",
        "ORDER",
        "REFUND",
        "UNPAID",
        "USE",
        "VOUCHER"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "me.credit.balance.movement"
    },
    "me.credit.code.Redeem": {
      "description": "Missing description",
      "id": "Redeem",
      "namespace": "me.credit.code",
      "properties": {
        "inputCode": {
          "canBeNull": false,
          "description": "Code to validate",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "serviceId": {
          "canBeNull": false,
          "description": "Restrict credit to a specific service",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "me.geolocation.ContinentCountryLocation": {
      "description": "Representation of country and continent from visitor IP",
      "id": "ContinentCountryLocation",
      "namespace": "me.geolocation",
      "properties": {
        "continent": {
          "canBeNull": true,
          "description": "Continent",
          "fullType": "me.geolocation.ContinentEnum",
          "readOnly": true,
          "required": false,
          "type": "me.geolocation.ContinentEnum"
        },
        "countryCode": {
          "canBeNull": true,
          "description": "Country iso code",
          "fullType": "me.geolocation.CountryEnum",
          "readOnly": true,
          "required": false,
          "type": "me.geolocation.CountryEnum"
        },
        "ip": {
          "canBeNull": false,
          "description": "The IP address processed, the user's origin one",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        }
      }
    },
    "me.geolocation.ContinentEnum": {
      "description": "Continent",
      "enum": [
        "africa",
        "antartica",
        "asia",
        "europe",
        "north-america",
        "oceania",
        "south-america"
      ],
      "enumType": "string",
      "id": "ContinentEnum",
      "namespace": "me.geolocation"
    },
    "me.geolocation.CountryEnum": {
      "description": "Country iso code",
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
      "enumType": "string",
      "id": "CountryEnum",
      "namespace": "me.geolocation"
    },
    "me.incident.MigrateServices": {
      "description": "Original service that can be migrated",
      "id": "MigrateServices",
      "namespace": "me.incident",
      "properties": {
        "dryRun": {
          "canBeNull": false,
          "description": "If false, the order will be registered; if true, the order will be returned but not registered. Useful to compute prices",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "serviceIds": {
          "canBeNull": false,
          "description": "IDs of the services to migrate",
          "fullType": "long[]",
          "readOnly": false,
          "required": false,
          "type": "long[]"
        }
      }
    },
    "me.incident.Order": {
      "description": "Order created in order to migrate a service",
      "id": "Order",
      "namespace": "me.incident",
      "properties": {
        "order": {
          "canBeNull": false,
          "description": "Order created in order to migrate a service",
          "fullType": "order.Order",
          "readOnly": true,
          "required": false,
          "type": "order.Order"
        }
      }
    },
    "me.incident.PercentagePromotion": {
      "description": "Commercial gesture applied for the service migration",
      "id": "PercentagePromotion",
      "namespace": "me.incident",
      "properties": {
        "duration": {
          "canBeNull": false,
          "description": "Duration applied for the commercial gesture",
          "fullType": "duration",
          "readOnly": true,
          "required": false,
          "type": "duration"
        },
        "value": {
          "canBeNull": false,
          "description": "Percentage of the discount",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "me.incident.ProposedOffer": {
      "description": "Commercial offer a customer can migrate his service to",
      "id": "ProposedOffer",
      "namespace": "me.incident",
      "properties": {
        "configurations": {
          "canBeNull": false,
          "description": "List of configurations used for the migration",
          "fullType": "me.incident.ProposedOfferConfiguration[]",
          "readOnly": true,
          "required": false,
          "type": "me.incident.ProposedOfferConfiguration[]"
        },
        "plan": {
          "canBeNull": false,
          "description": "Proposed commercial offer",
          "fullType": "order.cart.GenericProductDefinition",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductDefinition"
        },
        "pricingMode": {
          "canBeNull": false,
          "description": "Pricing mode used to bill the offer",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "promotion": {
          "canBeNull": false,
          "description": "Promotion applied to the commercial offer",
          "fullType": "me.incident.PercentagePromotion",
          "readOnly": true,
          "required": false,
          "type": "me.incident.PercentagePromotion"
        }
      }
    },
    "me.incident.ProposedOfferConfiguration": {
      "description": "Config",
      "id": "ProposedOfferConfiguration",
      "namespace": "me.incident",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "me.incident.ServiceMigration": {
      "description": "Service you may migrate to a given offer",
      "id": "ServiceMigration",
      "namespace": "me.incident",
      "properties": {
        "addons": {
          "canBeNull": false,
          "description": "Options to migrate linked to the original service",
          "fullType": "me.incident.ServiceMigration[]",
          "readOnly": true,
          "required": false,
          "type": "me.incident.ServiceMigration[]"
        },
        "orderId": {
          "canBeNull": true,
          "description": "ID of an ongoing migration order",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "proposedOffer": {
          "canBeNull": false,
          "description": "Proposed commercial offer to replace the service",
          "fullType": "me.incident.ProposedOffer",
          "readOnly": true,
          "required": false,
          "type": "me.incident.ProposedOffer"
        },
        "serviceToMigrate": {
          "canBeNull": true,
          "description": "Description of the service to migrate",
          "fullType": "me.incident.ServiceToMigrate",
          "readOnly": true,
          "required": false,
          "type": "me.incident.ServiceToMigrate"
        }
      }
    },
    "me.incident.ServiceToMigrate": {
      "description": "Original service that can be migrated",
      "id": "ServiceToMigrate",
      "namespace": "me.incident",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description of the offer of the service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "metadata": {
          "canBeNull": false,
          "description": "Additional information on the service",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "readOnly": true,
          "required": false,
          "type": "complexType.SafeKeyValue<string>[]"
        },
        "route": {
          "canBeNull": true,
          "description": "Route",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serviceId": {
          "canBeNull": false,
          "description": "ID of the migratable service",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Name of the migratable service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "me.payment.AvailablePaymentMethod": {
      "description": "Available payment method object",
      "id": "AvailablePaymentMethod",
      "namespace": "me.payment",
      "properties": {
        "formSessionId": {
          "canBeNull": true,
          "description": "Form session ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "icon": {
          "canBeNull": false,
          "description": "Payment method type icon",
          "fullType": "me.payment.Icon",
          "readOnly": true,
          "required": false,
          "type": "me.payment.Icon"
        },
        "integration": {
          "canBeNull": false,
          "description": "Payment method integration type",
          "fullType": "me.payment.IntegrationEnum",
          "readOnly": true,
          "required": false,
          "type": "me.payment.IntegrationEnum"
        },
        "merchantId": {
          "canBeNull": true,
          "description": "Merchant ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "oneshot": {
          "canBeNull": false,
          "description": "Indicates if payment method type allows to process oneshot payment",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "organizationId": {
          "canBeNull": true,
          "description": "Organization ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "paymentSubType": {
          "canBeNull": true,
          "description": "Payment method sub-type",
          "fullType": "me.payment.AvailableSubTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "me.payment.AvailableSubTypeEnum"
        },
        "paymentType": {
          "canBeNull": false,
          "description": "Payment method type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "registerable": {
          "canBeNull": false,
          "description": "Indicates if payment method type is registerable ?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "registerableWithTransaction": {
          "canBeNull": false,
          "description": "Indicates if payment method type allows payment and registration at the same time",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "me.payment.AvailableSubTypeEnum": {
      "description": "Payment method available sub-type enum",
      "enum": [
        "30_DAYS",
        "45_DAYS",
        "60_DAYS",
        "AMERICAN_EXPRESS",
        "AURA",
        "CARTE_BANCAIRE",
        "CARTE_BLEUE",
        "CHORUS",
        "DINERS_CLUB",
        "DISCOVER",
        "JCB",
        "MAESTRO",
        "MASTERCARD",
        "NONE",
        "VISA"
      ],
      "enumType": "string",
      "id": "AvailableSubTypeEnum",
      "namespace": "me.payment"
    },
    "me.payment.CreationSubTypeEnum": {
      "description": "Payment method creation sub-type enum",
      "enum": [
        "CHORUS",
        "NONE"
      ],
      "enumType": "string",
      "id": "CreationSubTypeEnum",
      "namespace": "me.payment"
    },
    "me.payment.Icon": {
      "description": "Icon",
      "id": "Icon",
      "namespace": "me.payment",
      "properties": {
        "data": {
          "canBeNull": true,
          "description": "Icon in base64",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Icon name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": true,
          "description": "Icon URL",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "me.payment.IntegrationEnum": {
      "description": "Register integration type enum",
      "enum": [
        "COMPONENT",
        "IFRAME_VANTIV",
        "IN_CONTEXT",
        "NONE",
        "POST_FORM",
        "REDIRECT"
      ],
      "enumType": "string",
      "id": "IntegrationEnum",
      "namespace": "me.payment"
    },
    "me.payment.PaymentMethod": {
      "description": "Payment method object",
      "id": "PaymentMethod",
      "namespace": "me.payment",
      "properties": {
        "billingContactId": {
          "canBeNull": true,
          "description": "Associated billing contact ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "default": {
          "canBeNull": false,
          "description": "Indicates if payment method is the default one for this account",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": true,
          "description": "Custom customer description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "expirationDate": {
          "canBeNull": true,
          "description": "Expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "formSessionId": {
          "canBeNull": true,
          "description": "Form session ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "icon": {
          "canBeNull": false,
          "description": "Payment method type icon",
          "fullType": "me.payment.Icon",
          "readOnly": true,
          "required": false,
          "type": "me.payment.Icon"
        },
        "integration": {
          "canBeNull": true,
          "description": "Payment method integration type",
          "fullType": "me.payment.IntegrationEnum",
          "readOnly": true,
          "required": false,
          "type": "me.payment.IntegrationEnum"
        },
        "label": {
          "canBeNull": true,
          "description": "Payment method public label",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "merchantId": {
          "canBeNull": true,
          "description": "Merchant ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "oneclick": {
          "canBeNull": true,
          "description": "Indicates if payment method support the oneclick functionality",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "paymentMeanId": {
          "canBeNull": true,
          "description": "Payment mean ID associated to this payment method",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "paymentMethodId": {
          "canBeNull": false,
          "description": "Payment method ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "paymentSubType": {
          "canBeNull": true,
          "description": "Payment method sub-type",
          "fullType": "me.payment.AvailableSubTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "me.payment.AvailableSubTypeEnum"
        },
        "paymentType": {
          "canBeNull": false,
          "description": "Payment method type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Payment method status",
          "fullType": "me.payment.method.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "me.payment.method.StatusEnum"
        }
      }
    },
    "me.payment.Transaction": {
      "description": "Transaction object",
      "id": "Transaction",
      "namespace": "me.payment",
      "properties": {
        "amount": {
          "canBeNull": false,
          "description": "Transaction amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "paymentMethodId": {
          "canBeNull": false,
          "description": "Associated payment method ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Transaction status",
          "fullType": "me.payment.transaction.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "me.payment.transaction.StatusEnum"
        },
        "transactionId": {
          "canBeNull": false,
          "description": "Transaction ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "Transaction type",
          "fullType": "me.payment.transaction.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "me.payment.transaction.TypeEnum"
        }
      }
    },
    "me.payment.method.CallbackUrl": {
      "description": "Callback URL's to register a new payment method",
      "id": "CallbackUrl",
      "namespace": "me.payment.method",
      "properties": {
        "cancel": {
          "canBeNull": false,
          "description": "URL when customer cancels the action",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "error": {
          "canBeNull": false,
          "description": "URL when registration encounters an error",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "failure": {
          "canBeNull": false,
          "description": "URL when registration failed",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "pending": {
          "canBeNull": false,
          "description": "URL when payment method is in validation",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "success": {
          "canBeNull": false,
          "description": "URL when payment method registration success",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "me.payment.method.Challenge": {
      "description": "Payment method Challenge",
      "id": "Challenge",
      "namespace": "me.payment.method",
      "properties": {
        "challenge": {
          "canBeNull": false,
          "description": "Challenge",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "me.payment.method.Creation": {
      "description": "Payment method creation payload",
      "id": "Creation",
      "namespace": "me.payment.method",
      "properties": {
        "billingContactId": {
          "canBeNull": true,
          "description": "Associated billing contact ID",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "callbackUrl": {
          "canBeNull": false,
          "description": "Callback URL's necessary to register",
          "fullType": "me.payment.method.CallbackUrl",
          "readOnly": false,
          "required": true,
          "type": "me.payment.method.CallbackUrl"
        },
        "default": {
          "canBeNull": false,
          "description": "Indicates if this payment method will be set as the default one",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": true,
          "description": "Personalized description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "formData": {
          "canBeNull": true,
          "description": "Additional payment information",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "orderId": {
          "canBeNull": true,
          "description": "Order ID to pay it if it's possible (in oneshot transaction or while registration)",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "paymentSubType": {
          "canBeNull": true,
          "description": "Payment sub-type",
          "fullType": "me.payment.CreationSubTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "me.payment.CreationSubTypeEnum"
        },
        "paymentType": {
          "canBeNull": false,
          "description": "Payment type",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "register": {
          "canBeNull": false,
          "description": "Register this payment method if it's possible (default value is false and will proceed a oneshot transaction)",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "me.payment.method.Details": {
      "description": "Add details to one payment method challenge",
      "id": "Details",
      "namespace": "me.payment.method",
      "properties": {
        "details": {
          "canBeNull": false,
          "description": "Details data",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "transactionId": {
          "canBeNull": false,
          "description": "Transaction ID",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "me.payment.method.Finalize": {
      "description": "Payload to finalize payment method registration",
      "id": "Finalize",
      "namespace": "me.payment.method",
      "properties": {
        "expirationMonth": {
          "canBeNull": true,
          "description": "Expiration month",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "expirationYear": {
          "canBeNull": true,
          "description": "Expiration year",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "formSessionId": {
          "canBeNull": true,
          "description": "Form session ID",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "registrationId": {
          "canBeNull": true,
          "description": "Registration ID",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "me.payment.method.StatusEnum": {
      "description": "Payment method status",
      "enum": [
        "CANCELED",
        "CANCELING",
        "CREATED",
        "CREATING",
        "ERROR",
        "EXPIRED",
        "FAILED",
        "MAINTENANCE",
        "PAUSED",
        "REJECTED",
        "REPLACED",
        "VALID",
        "VALIDATING"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "me.payment.method"
    },
    "me.payment.method.Validation": {
      "description": "Registration response to validate",
      "id": "Validation",
      "namespace": "me.payment.method",
      "properties": {
        "formSessionId": {
          "canBeNull": true,
          "description": "Form session ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "merchantId": {
          "canBeNull": true,
          "description": "Merchant ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "organizationId": {
          "canBeNull": true,
          "description": "Organization ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "paymentMethodId": {
          "canBeNull": false,
          "description": "Registered new payment method ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "transactionId": {
          "canBeNull": true,
          "description": "Registered new transaction ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "url": {
          "canBeNull": true,
          "description": "Registration validation URL to redirect",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "validationType": {
          "canBeNull": false,
          "description": "Registration validation type",
          "fullType": "me.payment.IntegrationEnum",
          "readOnly": true,
          "required": false,
          "type": "me.payment.IntegrationEnum"
        }
      }
    },
    "me.payment.transaction.StatusEnum": {
      "description": "Transaction status",
      "enum": [
        "CANCELED",
        "CANCELING",
        "CONFIRMING",
        "ERROR",
        "EXPIRED",
        "FAILED",
        "READY",
        "SUCCESS"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "me.payment.transaction"
    },
    "me.payment.transaction.TypeEnum": {
      "description": "Transaction type",
      "enum": [
        "CREDIT",
        "DEBIT"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "me.payment.transaction"
    },
    "me.paymentMean.BankAccount": {
      "description": "Credit card informations",
      "id": "BankAccount",
      "namespace": "me.paymentMean",
      "properties": {
        "bic": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "creationDate": {
          "canBeNull": false,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "defaultPaymentMean": {
          "canBeNull": false,
          "description": "This credit card is the default payment mean?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": true,
          "description": "Custom description of this bank account",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "iban": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "icon": {
          "canBeNull": true,
          "description": "Payment method type icon",
          "fullType": "me.paymentMean.IconData",
          "readOnly": true,
          "required": false,
          "type": "me.paymentMean.IconData"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "mandateSignatureDate": {
          "canBeNull": true,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "ownerAddress": {
          "canBeNull": false,
          "description": "Bank account owner's address",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ownerName": {
          "canBeNull": false,
          "description": "Bank account owner's name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Bank account state",
          "fullType": "me.paymentMean.BankAccountStateEnum",
          "readOnly": true,
          "required": false,
          "type": "me.paymentMean.BankAccountStateEnum"
        },
        "uniqueReference": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "validationDocumentLink": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "me.paymentMean.BankAccountChallengeCreation": {
      "description": "Missing description",
      "id": "BankAccountChallengeCreation",
      "namespace": "me.paymentMean",
      "properties": {
        "challenge": {
          "canBeNull": false,
          "description": "Payload to answer the challenge",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "me.paymentMean.BankAccountCreation": {
      "description": "Missing description",
      "id": "BankAccountCreation",
      "namespace": "me.paymentMean",
      "properties": {
        "bic": {
          "canBeNull": false,
          "description": "Bank account BIC",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "description": {
          "canBeNull": true,
          "description": "Custom description of this account",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "iban": {
          "canBeNull": false,
          "description": "Bank account IBAN",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "ownerAddress": {
          "canBeNull": false,
          "description": "Bank account owner's address",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "ownerName": {
          "canBeNull": false,
          "description": "Bank account owner's name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "setDefault": {
          "canBeNull": true,
          "description": "Set as default payment mean once validated",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "me.paymentMean.BankAccountStateEnum": {
      "description": "State of your bank account",
      "enum": [
        "blockedForIncidents",
        "pendingValidation",
        "replaced",
        "valid"
      ],
      "enumType": "string",
      "id": "BankAccountStateEnum",
      "namespace": "me.paymentMean"
    },
    "me.paymentMean.BankAccountValidation": {
      "description": "A validation required to add a payment mean bank account",
      "id": "BankAccountValidation",
      "namespace": "me.paymentMean",
      "properties": {
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "submitUrl": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": "URL where redirect for registration process",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "validationType": {
          "canBeNull": false,
          "description": "Kind of registration validation",
          "fullType": "me.paymentMean.ValidationTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "me.paymentMean.ValidationTypeEnum"
        }
      }
    },
    "me.paymentMean.CreditCard": {
      "description": "Credit card informations",
      "id": "CreditCard",
      "namespace": "me.paymentMean",
      "properties": {
        "defaultPaymentMean": {
          "canBeNull": false,
          "description": "This credit card is the default payment mean?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": true,
          "description": "Custom description of this credit card",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "expirationDate": {
          "canBeNull": false,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "icon": {
          "canBeNull": true,
          "description": "Payment method type icon",
          "fullType": "me.paymentMean.IconData",
          "readOnly": true,
          "required": false,
          "type": "me.paymentMean.IconData"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "number": {
          "canBeNull": false,
          "description": "Credit card BIN",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Credit card state",
          "fullType": "me.paymentMean.CreditCardStateEnum",
          "readOnly": true,
          "required": false,
          "type": "me.paymentMean.CreditCardStateEnum"
        },
        "threeDsValidated": {
          "canBeNull": false,
          "description": "True if this credit card has been registered with a successful 3DSecure challenge",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "type": {
          "canBeNull": false,
          "description": "Kind of credit card",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "me.paymentMean.CreditCardChallengeCreation": {
      "description": "Missing description",
      "id": "CreditCardChallengeCreation",
      "namespace": "me.paymentMean",
      "properties": {
        "challenge": {
          "canBeNull": false,
          "description": "Payload to answer the challenge",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "me.paymentMean.CreditCardCreation": {
      "description": "Missing description",
      "id": "CreditCardCreation",
      "namespace": "me.paymentMean",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Custom description of this account",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "returnUrl": {
          "canBeNull": true,
          "description": "Callback URL where the customer will be redirected to after validation",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "setDefault": {
          "canBeNull": true,
          "description": "Set as default payment mean once validated",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "me.paymentMean.CreditCardStateEnum": {
      "description": "State of your credit card",
      "enum": [
        "expired",
        "tooManyFailures",
        "valid"
      ],
      "enumType": "string",
      "id": "CreditCardStateEnum",
      "namespace": "me.paymentMean"
    },
    "me.paymentMean.CreditCardValidation": {
      "description": "A validation required to add a payment mean credit card",
      "id": "CreditCardValidation",
      "namespace": "me.paymentMean",
      "properties": {
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "submitUrl": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": "URL where redirect for registration process",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "validationType": {
          "canBeNull": false,
          "description": "Kind of registration validation",
          "fullType": "me.paymentMean.ValidationTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "me.paymentMean.ValidationTypeEnum"
        }
      }
    },
    "me.paymentMean.Deferred": {
      "description": "Deferred account informations",
      "id": "Deferred",
      "namespace": "me.paymentMean",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of this deferred account",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "defaultPaymentMean": {
          "canBeNull": false,
          "description": "This deferred account is the default payment mean?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": true,
          "description": "Custom description of this deferred account",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "icon": {
          "canBeNull": true,
          "description": "Payment method type icon",
          "fullType": "me.paymentMean.IconData",
          "readOnly": true,
          "required": false,
          "type": "me.paymentMean.IconData"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "label": {
          "canBeNull": true,
          "description": "Deferred account type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Deferred account state",
          "fullType": "me.paymentMean.DeferredStateEnum",
          "readOnly": true,
          "required": false,
          "type": "me.paymentMean.DeferredStateEnum"
        }
      }
    },
    "me.paymentMean.DeferredStateEnum": {
      "description": "State of you deferred account",
      "enum": [
        "failed",
        "valid"
      ],
      "enumType": "string",
      "id": "DeferredStateEnum",
      "namespace": "me.paymentMean"
    },
    "me.paymentMean.IconData": {
      "description": "Payment mean type icon",
      "id": "IconData",
      "namespace": "me.paymentMean",
      "properties": {
        "data": {
          "canBeNull": true,
          "description": "Icon in base64",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Icon name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": true,
          "description": "Icon URL",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "me.paymentMean.Paypal": {
      "description": "Paypal informations",
      "id": "Paypal",
      "namespace": "me.paymentMean",
      "properties": {
        "agreementId": {
          "canBeNull": false,
          "description": "Paypal agreement",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Paypal creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "defaultPaymentMean": {
          "canBeNull": false,
          "description": "This paypal is the default payment mean?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": true,
          "description": "Custom description of this paypal",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "email": {
          "canBeNull": false,
          "description": "Paypal associated email",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "icon": {
          "canBeNull": true,
          "description": "Payment method type icon",
          "fullType": "me.paymentMean.IconData",
          "readOnly": true,
          "required": false,
          "type": "me.paymentMean.IconData"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "Paypal state",
          "fullType": "me.paymentMean.PaypalStateEnum",
          "readOnly": true,
          "required": false,
          "type": "me.paymentMean.PaypalStateEnum"
        }
      }
    },
    "me.paymentMean.PaypalChallengeCreation": {
      "description": "Missing description",
      "id": "PaypalChallengeCreation",
      "namespace": "me.paymentMean",
      "properties": {
        "challenge": {
          "canBeNull": false,
          "description": "Payload to answer the challenge",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "me.paymentMean.PaypalCreation": {
      "description": "Missing description",
      "id": "PaypalCreation",
      "namespace": "me.paymentMean",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Custom description of this account",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "returnUrl": {
          "canBeNull": true,
          "description": "Callback URL where the customer will be redirected to after validation",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "setDefault": {
          "canBeNull": true,
          "description": "Set as default payment mean once validated",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "me.paymentMean.PaypalStateEnum": {
      "description": "State of you paypal",
      "enum": [
        "failing",
        "tooManyFailures",
        "valid"
      ],
      "enumType": "string",
      "id": "PaypalStateEnum",
      "namespace": "me.paymentMean"
    },
    "me.paymentMean.PaypalValidation": {
      "description": "A validation required to add a payment mean paypal",
      "id": "PaypalValidation",
      "namespace": "me.paymentMean",
      "properties": {
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "submitUrl": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": "URL where redirect for registration process",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "validationType": {
          "canBeNull": false,
          "description": "Kind of registration validation",
          "fullType": "me.paymentMean.ValidationTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "me.paymentMean.ValidationTypeEnum"
        }
      }
    },
    "me.paymentMean.ValidationTypeEnum": {
      "description": "All the validation you may have to do",
      "enum": [
        "creditAccount",
        "documentToSend",
        "simpleValidation"
      ],
      "enumType": "string",
      "id": "ValidationTypeEnum",
      "namespace": "me.paymentMean"
    },
    "nichandle.Authentication.Certificate": {
      "description": "X509 Certificate",
      "id": "Certificate",
      "namespace": "nichandle.Authentication",
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
    "nichandle.Authentication.Group": {
      "description": "A group",
      "id": "Group",
      "namespace": "nichandle.Authentication",
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
          "description": "True if it is an default group. This kind of group can't be edited or deleted",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": false,
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "role": {
          "canBeNull": false,
          "description": "Group's role",
          "fullType": "nichandle.Authentication.RoleEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.Authentication.RoleEnum"
        }
      }
    },
    "nichandle.Authentication.Provider": {
      "description": "A SAML 2.0 provider",
      "id": "Provider",
      "namespace": "nichandle.Authentication",
      "properties": {
        "creation": {
          "canBeNull": false,
          "description": "Creation date of the identity provider",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "extensions": {
          "canBeNull": true,
          "description": "SAML Extensions to embed inside the SAML requests",
          "fullType": "nichandle.Authentication.ProviderExtensions",
          "readOnly": false,
          "required": false,
          "type": "nichandle.Authentication.ProviderExtensions"
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
          "fullType": "nichandle.Authentication.Certificate[]",
          "readOnly": true,
          "required": false,
          "type": "nichandle.Authentication.Certificate[]"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update of the identity provider",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "ssoServiceUrl": {
          "canBeNull": false,
          "description": "IdP's Single Sign On Service Url",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "nichandle.Authentication.ProviderExtensions": {
      "description": "A SAML 2.0 Extension that should be added to SAML requests when using this provider",
      "id": "ProviderExtensions",
      "namespace": "nichandle.Authentication",
      "properties": {
        "requestedAttributes": {
          "canBeNull": true,
          "description": "List of SAML RequestedAttribute to add to SAML requestes",
          "fullType": "nichandle.Authentication.RequestedAttribute[]",
          "readOnly": false,
          "required": false,
          "type": "nichandle.Authentication.RequestedAttribute[]"
        }
      }
    },
    "nichandle.Authentication.RequestedAttribute": {
      "description": "A SAML 2.0 requested attribute that should be added to SAML requests when using this provider",
      "id": "RequestedAttribute",
      "namespace": "nichandle.Authentication",
      "properties": {
        "isRequired": {
          "canBeNull": false,
          "description": "Expresses that this RequestedAttribute is mandatory (remains advisory)",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the SAML RequestedAttribute",
          "fullType": "string",
          "readOnly": false,
          "required": false,
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
    "nichandle.Authentication.RoleEnum": {
      "description": "Permission given on the account",
      "enum": [
        "REGULAR",
        "ADMIN",
        "UNPRIVILEGED",
        "NONE"
      ],
      "enumType": "string",
      "id": "RoleEnum",
      "namespace": "nichandle"
    },
    "nichandle.CountryEnum": {
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
      "enumType": "string",
      "id": "CountryEnum",
      "namespace": "nichandle"
    },
    "nichandle.Currency": {
      "description": "Customer currency",
      "id": "Currency",
      "namespace": "nichandle",
      "properties": {
        "code": {
          "canBeNull": false,
          "description": "Currency code",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "symbol": {
          "canBeNull": false,
          "description": "Currency symbol",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "nichandle.DeveloperModeRestriction": {
      "description": "Login restrictions on a development version of the Manager",
      "id": "DeveloperModeRestriction",
      "namespace": "nichandle",
      "properties": {
        "enabled": {
          "canBeNull": false,
          "description": "Allow login on your account on a development version of the Manager",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "nichandle.EmailNotification": {
      "description": "Email notification received",
      "id": "EmailNotification",
      "namespace": "nichandle",
      "properties": {
        "body": {
          "canBeNull": false,
          "description": "Content of the email",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "date": {
          "canBeNull": false,
          "description": "Date at which the email was sent",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "ID of the email notification",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "subject": {
          "canBeNull": false,
          "description": "Subject of the email",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "nichandle.GenderEnum": {
      "description": "All genders a person can choose",
      "enum": [
        "female",
        "male"
      ],
      "enumType": "string",
      "id": "GenderEnum",
      "namespace": "nichandle"
    },
    "nichandle.IpRegistryEnum": {
      "description": "Ip registries",
      "enum": [
        "ARIN",
        "RIPE"
      ],
      "enumType": "string",
      "id": "IpRegistryEnum",
      "namespace": "nichandle"
    },
    "nichandle.IpRestriction": {
      "description": "List of all IP Restrictions",
      "id": "IpRestriction",
      "namespace": "nichandle",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "The Id of the restriction",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ip": {
          "canBeNull": false,
          "description": "An IP range where we will apply the rule",
          "fullType": "ipBlock",
          "readOnly": true,
          "required": false,
          "type": "ipBlock"
        },
        "rule": {
          "canBeNull": false,
          "description": "Accept or deny IP access",
          "fullType": "nichandle.accessRestriction.IpRestrictionRuleEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.accessRestriction.IpRestrictionRuleEnum"
        },
        "warning": {
          "canBeNull": false,
          "description": "Send an email if someone try to access with this IP address",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "nichandle.IpRestrictionDefaultRule": {
      "description": "IP Restriction default rule",
      "id": "IpRestrictionDefaultRule",
      "namespace": "nichandle",
      "properties": {
        "rule": {
          "canBeNull": false,
          "description": "Accept or deny access",
          "fullType": "nichandle.accessRestriction.IpRestrictionRuleEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.accessRestriction.IpRestrictionRuleEnum"
        },
        "warning": {
          "canBeNull": false,
          "description": "Send an email if someone try to access",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "nichandle.Ipv4Org": {
      "description": "Details about an IP block organisation",
      "id": "Ipv4Org",
      "namespace": "nichandle",
      "properties": {
        "abuse_mailbox": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "address": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "city": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "country": {
          "canBeNull": false,
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "firstname": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lastname": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationId": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "phone": {
          "canBeNull": false,
          "fullType": "phoneNumber",
          "readOnly": false,
          "required": false,
          "type": "phoneNumber"
        },
        "registry": {
          "canBeNull": false,
          "fullType": "nichandle.IpRegistryEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.IpRegistryEnum"
        },
        "state": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zip": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "nichandle.LanguageEnum": {
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
      "enumType": "string",
      "id": "LanguageEnum",
      "namespace": "nichandle"
    },
    "nichandle.LegalFormEnum": {
      "description": "Legal forms a nichandle can be registered as",
      "enum": [
        "administration",
        "association",
        "corporation",
        "individual",
        "other",
        "personalcorporation"
      ],
      "enumType": "string",
      "id": "LegalFormEnum",
      "namespace": "nichandle"
    },
    "nichandle.ManagerPreference": {
      "description": "Manager preference",
      "id": "ManagerPreference",
      "namespace": "nichandle",
      "properties": {
        "key": {
          "canBeNull": false,
          "description": "This preference key",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "This preference value",
          "fullType": "text",
          "readOnly": false,
          "required": false,
          "type": "text"
        }
      }
    },
    "nichandle.NicAutorenewInfos": {
      "description": "Auto renewal information",
      "id": "NicAutorenewInfos",
      "namespace": "nichandle",
      "properties": {
        "active": {
          "canBeNull": false,
          "description": "Renewal active or not",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "lastRenew": {
          "canBeNull": true,
          "description": "give the last renew",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "renewDay": {
          "canBeNull": false,
          "description": "give the renewal day",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "nichandle.Nichandle": {
      "description": "Details about your OVH identifier",
      "id": "Nichandle",
      "namespace": "nichandle",
      "properties": {
        "address": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "area": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "birthCity": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "birthDay": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "city": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "companyNationalIdentificationNumber": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "corporationType": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "country": {
          "canBeNull": false,
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "currency": {
          "canBeNull": false,
          "description": "Customer currency",
          "fullType": "nichandle.Currency",
          "readOnly": true,
          "required": false,
          "type": "nichandle.Currency"
        },
        "customerCode": {
          "canBeNull": true,
          "description": "Your customer code (a numerical value used for identification when contacting support via phone call)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "email": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "fax": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "firstname": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "italianSDI": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "language": {
          "canBeNull": true,
          "fullType": "nichandle.LanguageEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.LanguageEnum"
        },
        "legalform": {
          "canBeNull": false,
          "fullType": "nichandle.LegalFormEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.LegalFormEnum"
        },
        "name": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "nationalIdentificationNumber": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "nichandle": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "organisation": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ovhCompany": {
          "canBeNull": false,
          "fullType": "nichandle.OvhCompanyEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.OvhCompanyEnum"
        },
        "ovhSubsidiary": {
          "canBeNull": false,
          "fullType": "nichandle.OvhSubsidiaryEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.OvhSubsidiaryEnum"
        },
        "phone": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "phoneCountry": {
          "canBeNull": true,
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "sex": {
          "canBeNull": true,
          "fullType": "nichandle.GenderEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.GenderEnum"
        },
        "spareEmail": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "fullType": "nichandle.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.StateEnum"
        },
        "vat": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zip": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "nichandle.NichandleSmsNotification": {
      "description": "SMS notifications",
      "id": "NichandleSmsNotification",
      "namespace": "nichandle",
      "properties": {
        "abuse": {
          "canBeNull": false,
          "description": "Receive notification for abuse reports",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "phoneNumber": {
          "canBeNull": false,
          "description": "The phone number you want to receive notification on",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of your notification",
          "fullType": "nichandle.NotificationStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.NotificationStatusEnum"
        },
        "updateDate": {
          "canBeNull": true,
          "description": "Last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "nichandle.NotificationStatusEnum": {
      "description": "Status of your notification",
      "enum": [
        "ok",
        "waitingForValidation"
      ],
      "enumType": "string",
      "id": "NotificationStatusEnum",
      "namespace": "nichandle"
    },
    "nichandle.OvhCompanyEnum": {
      "description": "OVH companies",
      "enum": [
        "kimsufi",
        "ovh",
        "soyoustart"
      ],
      "enumType": "string",
      "id": "OvhCompanyEnum",
      "namespace": "nichandle"
    },
    "nichandle.OvhSubsidiaryEnum": {
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
        "IN",
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
      "enumType": "string",
      "id": "OvhSubsidiaryEnum",
      "namespace": "nichandle"
    },
    "nichandle.StateEnum": {
      "description": "States a nichandle can be in",
      "enum": [
        "complete",
        "incomplete"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "nichandle"
    },
    "nichandle.SubAccount": {
      "description": "Sub Account",
      "id": "SubAccount",
      "namespace": "nichandle",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": true,
          "description": "This sub-account description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "This sub-account id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "nichandle.SubAccountConsumerKey": {
      "description": "Credentials to interact with the api on behalf of the sub-account",
      "id": "SubAccountConsumerKey",
      "namespace": "nichandle",
      "properties": {
        "consumerKey": {
          "canBeNull": false,
          "description": "The consumer key",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "nichandle.Subscription": {
      "description": "List of all OVH things you can subscribe to",
      "id": "Subscription",
      "namespace": "nichandle",
      "properties": {
        "registered": {
          "canBeNull": true,
          "description": "Determine whether you are registered or not",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "type": {
          "canBeNull": false,
          "description": "The type of subscription",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "nichandle.User": {
      "description": "A user",
      "id": "User",
      "namespace": "nichandle",
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
          "description": "Last update of this user",
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
          "description": "When the user changed his password for the last time",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Current user's status",
          "fullType": "nichandle.UserStatus",
          "readOnly": true,
          "required": false,
          "type": "nichandle.UserStatus"
        }
      }
    },
    "nichandle.UserStatus": {
      "description": "Status of a User",
      "enum": [
        "OK",
        "DISABLED",
        "PASSWORD_CHANGE_REQUIRED"
      ],
      "enumType": "string",
      "id": "UserStatus",
      "namespace": "nichandle"
    },
    "nichandle.VoucherStatus": {
      "description": "Voucher Status and Information",
      "id": "VoucherStatus",
      "namespace": "nichandle",
      "properties": {
        "validity": {
          "canBeNull": false,
          "description": "Is voucher valid",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "nichandle.accessRestriction.IpRestrictionRuleEnum": {
      "description": "Accept or deny IP access",
      "enum": [
        "accept",
        "deny"
      ],
      "enumType": "string",
      "id": "IpRestrictionRuleEnum",
      "namespace": "nichandle.accessRestriction"
    },
    "nichandle.accessRestriction.SOTPAccount": {
      "description": "SOTP Two-Factor Authentication",
      "id": "SOTPAccount",
      "namespace": "nichandle.accessRestriction",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastUsedDate": {
          "canBeNull": true,
          "description": "Last used date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "remaining": {
          "canBeNull": false,
          "description": "Number of remaining codes",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of this account",
          "fullType": "nichandle.accessRestriction.SOTPStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.accessRestriction.SOTPStatusEnum"
        }
      }
    },
    "nichandle.accessRestriction.SOTPSecret": {
      "description": "Describe SOTP secret keys",
      "id": "SOTPSecret",
      "namespace": "nichandle.accessRestriction",
      "properties": {
        "codes": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "nichandle.accessRestriction.SOTPStatusEnum": {
      "description": "Status of SOTP account",
      "enum": [
        "disabled",
        "enabled",
        "needCodeValidation",
        "needEmailValidation"
      ],
      "enumType": "string",
      "id": "SOTPStatusEnum",
      "namespace": "nichandle.accessRestriction"
    },
    "nichandle.accessRestriction.SOTPValidate": {
      "description": "Describe SOTP validation status",
      "id": "SOTPValidate",
      "namespace": "nichandle.accessRestriction",
      "properties": {
        "remainingCodes": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "nichandle.accessRestriction.SmsAccount": {
      "description": "Sms Two-Factor Authentication",
      "id": "SmsAccount",
      "namespace": "nichandle.accessRestriction",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of this phone",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "The Id of the restriction",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastUsedDate": {
          "canBeNull": true,
          "description": "Last used date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "phoneNumber": {
          "canBeNull": false,
          "description": "Associated phone number",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of this account",
          "fullType": "nichandle.accessRestriction.SmsStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.accessRestriction.SmsStatusEnum"
        }
      }
    },
    "nichandle.accessRestriction.SmsCode": {
      "description": "Send secret code",
      "id": "SmsCode",
      "namespace": "nichandle.accessRestriction",
      "properties": {
        "challenge": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "nichandle.accessRestriction.SmsSecret": {
      "description": "Describe secret key",
      "id": "SmsSecret",
      "namespace": "nichandle.accessRestriction",
      "properties": {
        "id": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "remainingTry": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "nichandle.accessRestriction.SmsStatusEnum": {
      "description": "Status of the Sms account",
      "enum": [
        "disabled",
        "enabled",
        "needCodeValidation",
        "needEmailValidation"
      ],
      "enumType": "string",
      "id": "SmsStatusEnum",
      "namespace": "nichandle.accessRestriction"
    },
    "nichandle.accessRestriction.TOTPAccount": {
      "description": "TOTP Two-Factor Authentication",
      "id": "TOTPAccount",
      "namespace": "nichandle.accessRestriction",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of this TOTP",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "The Id of the restriction",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastUsedDate": {
          "canBeNull": true,
          "description": "Last used date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of this account",
          "fullType": "nichandle.accessRestriction.TOTPStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.accessRestriction.TOTPStatusEnum"
        }
      }
    },
    "nichandle.accessRestriction.TOTPSecret": {
      "description": "Describe TOTP secret keys",
      "id": "TOTPSecret",
      "namespace": "nichandle.accessRestriction",
      "properties": {
        "id": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "qrcodeHelper": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "password"
        },
        "secret": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "password"
        }
      }
    },
    "nichandle.accessRestriction.TOTPStatusEnum": {
      "description": "Status of TOTP account",
      "enum": [
        "disabled",
        "enabled",
        "needCodeValidation",
        "needEmailValidation"
      ],
      "enumType": "string",
      "id": "TOTPStatusEnum",
      "namespace": "nichandle.accessRestriction"
    },
    "nichandle.accessRestriction.U2FAccount": {
      "description": "U2F Two-Factor Authentication",
      "id": "U2FAccount",
      "namespace": "nichandle.accessRestriction",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of this U2F key",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "The Id of the restriction",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastUsedDate": {
          "canBeNull": true,
          "description": "Last used date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of this account",
          "fullType": "nichandle.accessRestriction.U2FStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.accessRestriction.U2FStatusEnum"
        }
      }
    },
    "nichandle.accessRestriction.U2FRegisterChallenge": {
      "description": "U2F Register Request",
      "id": "U2FRegisterChallenge",
      "namespace": "nichandle.accessRestriction",
      "properties": {
        "applicationId": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "request": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "nichandle.accessRestriction.U2FRegistrationRequest"
        }
      }
    },
    "nichandle.accessRestriction.U2FRegistrationRequest": {
      "description": "Describe U2F RegistrationRequest",
      "id": "U2FRegistrationRequest",
      "namespace": "nichandle.accessRestriction",
      "properties": {
        "challenge": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "version": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "nichandle.accessRestriction.U2FSignChallenge": {
      "description": "U2F Register Request",
      "id": "U2FSignChallenge",
      "namespace": "nichandle.accessRestriction",
      "properties": {
        "applicationId": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "request": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "nichandle.accessRestriction.U2FSignRequest"
        }
      }
    },
    "nichandle.accessRestriction.U2FSignRequest": {
      "description": "Describe U2F SignRequest",
      "id": "U2FSignRequest",
      "namespace": "nichandle.accessRestriction",
      "properties": {
        "challenge": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "keyHandle": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "version": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "nichandle.accessRestriction.U2FStatusEnum": {
      "description": "Status of U2F account",
      "enum": [
        "disabled",
        "enabled",
        "needCodeValidation"
      ],
      "enumType": "string",
      "id": "U2FStatusEnum",
      "namespace": "nichandle.accessRestriction"
    },
    "nichandle.changeContact.ContactTypeEnum": {
      "description": "Allowed types of contact who can be changed by change contact task",
      "enum": [
        "contactAdmin",
        "contactBilling",
        "contactTech"
      ],
      "enumType": "string",
      "id": "ContactTypeEnum",
      "namespace": "nichandle.changeContact"
    },
    "nichandle.changeContact.TaskStateEnum": {
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
      "enumType": "string",
      "id": "TaskStateEnum",
      "namespace": "nichandle.changeContact"
    },
    "nichandle.changeEmail.TaskStateEnum": {
      "description": "State of email change task",
      "enum": [
        "aborted",
        "done",
        "refused",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStateEnum",
      "namespace": "nichandle.changeEmail"
    },
    "nichandle.contactChange.Task": {
      "description": "Task running a contact change on a service",
      "id": "Task",
      "namespace": "nichandle.contactChange",
      "properties": {
        "askingAccount": {
          "canBeNull": true,
          "description": "Account who asked the contact change",
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "contactTypes": {
          "canBeNull": false,
          "description": "Contacts to be changed",
          "fullType": "nichandle.changeContact.ContactTypeEnum[]",
          "readOnly": true,
          "required": false,
          "type": "nichandle.changeContact.ContactTypeEnum[]"
        },
        "dateDone": {
          "canBeNull": true,
          "description": "Date at which the contact change has been finished",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "dateRequest": {
          "canBeNull": false,
          "description": "Date at which the request has been made",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "fromAccount": {
          "canBeNull": false,
          "description": "Account to change contact from",
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "serviceDomain": {
          "canBeNull": true,
          "description": "The service on which the task runs",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of the request",
          "fullType": "nichandle.changeContact.TaskStateEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.changeContact.TaskStateEnum"
        },
        "toAccount": {
          "canBeNull": false,
          "description": "Account to change contact to",
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "nichandle.document.Document": {
      "description": "List of documents added on your account",
      "id": "Document",
      "namespace": "nichandle.document",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Document creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "expirationDate": {
          "canBeNull": true,
          "description": "Document expiration",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "getUrl": {
          "canBeNull": false,
          "description": "URL used to get document",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Document id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Document name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "putUrl": {
          "canBeNull": false,
          "description": "URL used to put document",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Document size (in bytes)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "tags": {
          "canBeNull": false,
          "description": "Document tags",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "readOnly": true,
          "required": false,
          "type": "complexType.SafeKeyValue<string>[]"
        },
        "validationDate": {
          "canBeNull": true,
          "description": "Document validation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "nichandle.emailChange.Task": {
      "description": "Task running an email change on an account",
      "id": "Task",
      "namespace": "nichandle.emailChange",
      "properties": {
        "dateDone": {
          "canBeNull": true,
          "description": "End date of that request",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "dateRequest": {
          "canBeNull": false,
          "description": "Creation date of that request",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "newEmail": {
          "canBeNull": false,
          "description": "The email address to change for",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of the request",
          "fullType": "nichandle.changeEmail.TaskStateEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.changeEmail.TaskStateEnum"
        }
      }
    },
    "nichandle.emailNotification": {
      "description": "Email notification",
      "id": "emailNotification",
      "namespace": "nichandle",
      "properties": {
        "body": {
          "canBeNull": false,
          "description": "This email body",
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        },
        "date": {
          "canBeNull": false,
          "description": "This email date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "This email Id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "subject": {
          "canBeNull": false,
          "description": "This email subject",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "nichandle.ipxe": {
      "description": "Customer IPXE scripts",
      "id": "ipxe",
      "namespace": "nichandle",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of this script",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "script": {
          "canBeNull": false,
          "description": "Content of your IPXE script",
          "fullType": "text",
          "readOnly": false,
          "required": false,
          "type": "text"
        }
      }
    },
    "nichandle.sshKey": {
      "description": "Customer public SSH key, can be used for rescue netboot or server access after reinstallation",
      "id": "sshKey",
      "namespace": "nichandle",
      "properties": {
        "default": {
          "canBeNull": false,
          "description": "True when this public SSH key is used for rescue mode and reinstallations",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "key": {
          "canBeNull": false,
          "description": "ASCII encoded public SSH key",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "keyName": {
          "canBeNull": false,
          "description": "Name of this public SSH key",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.Contract": {
      "description": "A contract",
      "id": "Contract",
      "namespace": "order",
      "properties": {
        "content": {
          "canBeNull": false,
          "description": "Terms of the contract",
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the contract",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": "URL to download the contract",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.CurrencyCodeEnum": {
      "description": "Currency code",
      "enum": [
        "AUD",
        "CAD",
        "CZK",
        "EUR",
        "GBP",
        "INR",
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
      "enumType": "string",
      "id": "CurrencyCodeEnum",
      "namespace": "order"
    },
    "order.Order": {
      "description": "An order",
      "id": "Order",
      "namespace": "order",
      "properties": {
        "contracts": {
          "canBeNull": false,
          "description": "List of contracts related to the order",
          "fullType": "order.Contract[]",
          "readOnly": true,
          "required": false,
          "type": "order.Contract[]"
        },
        "details": {
          "canBeNull": false,
          "description": "Details of the order",
          "fullType": "order.OrderDetail[]",
          "readOnly": true,
          "required": false,
          "type": "order.OrderDetail[]"
        },
        "orderId": {
          "canBeNull": true,
          "description": "Identifier of the order",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "prices": {
          "canBeNull": false,
          "description": "Prices of the order including with and without taxes",
          "fullType": "order.OrderPrices",
          "readOnly": true,
          "required": false,
          "type": "order.OrderPrices"
        },
        "url": {
          "canBeNull": true,
          "description": "URL to download the order",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.OrderDetail": {
      "description": "Detail of an order",
      "id": "OrderDetail",
      "namespace": "order",
      "properties": {
        "cartItemID": {
          "canBeNull": true,
          "description": "Cart Item ID the details is related to",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the detail",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "detailType": {
          "canBeNull": true,
          "description": "Type of detail",
          "fullType": "order.OrderDetailTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.OrderDetailTypeEnum"
        },
        "domain": {
          "canBeNull": false,
          "description": "Service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "originalTotalPrice": {
          "canBeNull": false,
          "description": "Original price of the detail before reduction application",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Quantity of the service",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "reductionTotalPrice": {
          "canBeNull": false,
          "description": "Total price of the reduction",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "reductions": {
          "canBeNull": false,
          "description": "List of reductions applied to the detail",
          "fullType": "order.Reduction[]",
          "readOnly": true,
          "required": false,
          "type": "order.Reduction[]"
        },
        "totalPrice": {
          "canBeNull": false,
          "description": "Price total of the services",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "unitPrice": {
          "canBeNull": false,
          "description": "Unitary price of the service",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "order.OrderDetailTypeEnum": {
      "description": "Product type of item in order",
      "enum": [
        "ACCESSORY",
        "CAUTION",
        "CHOOSED",
        "CONSUMPTION",
        "CREATION",
        "DELIVERY",
        "DURATION",
        "GIFT",
        "INSTALLATION",
        "LICENSE",
        "MUTE",
        "OTHER",
        "OUTPLAN",
        "QUANTITY",
        "REFUND",
        "RENEW",
        "SPECIAL",
        "SWITCH",
        "TRANSFER",
        "VOUCHER"
      ],
      "enumType": "string",
      "id": "OrderDetailTypeEnum",
      "namespace": "order"
    },
    "order.OrderPrices": {
      "description": "Prices of an order",
      "id": "OrderPrices",
      "namespace": "order",
      "properties": {
        "originalWithoutTax": {
          "canBeNull": true,
          "description": "Price before reduction application",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "reduction": {
          "canBeNull": true,
          "description": "Price concerning the reduced amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "tax": {
          "canBeNull": false,
          "description": "Tax amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "withTax": {
          "canBeNull": false,
          "description": "Price with tax",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "withoutTax": {
          "canBeNull": false,
          "description": "Price without tax",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "order.Price": {
      "description": "Price with its currency and textual representation",
      "id": "Price",
      "namespace": "order",
      "properties": {
        "currencyCode": {
          "canBeNull": false,
          "description": "Currency code",
          "fullType": "order.CurrencyCodeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.CurrencyCodeEnum"
        },
        "text": {
          "canBeNull": false,
          "description": "Textual representation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "The effective price",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "order.Reduction": {
      "description": "Order detail reduction",
      "id": "Reduction",
      "namespace": "order",
      "properties": {
        "context": {
          "canBeNull": false,
          "description": "In which context the reduction is applied",
          "fullType": "order.ReductionContextEnum",
          "readOnly": true,
          "required": false,
          "type": "order.ReductionContextEnum"
        },
        "description": {
          "canBeNull": false,
          "description": "Promotion description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "price": {
          "canBeNull": false,
          "description": "Reduction price applied with this promotion",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "reductionDescription": {
          "canBeNull": false,
          "description": "Reduction description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Reduction effect, price modification",
          "fullType": "order.ReductionTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.ReductionTypeEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "The reduction value",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "order.ReductionContextEnum": {
      "description": "Context of the reduction",
      "enum": [
        "promotion",
        "voucher"
      ],
      "enumType": "string",
      "id": "ReductionContextEnum",
      "namespace": "order"
    },
    "order.ReductionTypeEnum": {
      "description": "Type of reduction",
      "enum": [
        "fixed_amount",
        "forced_amount",
        "percentage"
      ],
      "enumType": "string",
      "id": "ReductionTypeEnum",
      "namespace": "order"
    },
    "order.cart.GenericProductDefinition": {
      "description": "Representation of a generic product",
      "id": "GenericProductDefinition",
      "namespace": "order.cart",
      "properties": {
        "planCode": {
          "canBeNull": false,
          "description": "Product offer identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "prices": {
          "canBeNull": false,
          "description": "Prices of the product offer",
          "fullType": "order.cart.GenericProductPricing[]",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductPricing[]"
        },
        "productName": {
          "canBeNull": false,
          "description": "Name of the product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "productType": {
          "canBeNull": false,
          "description": "Product type",
          "fullType": "order.cart.GenericProductTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductTypeEnum"
        }
      }
    },
    "order.cart.GenericProductPricing": {
      "description": "Representation of a product pricing",
      "id": "GenericProductPricing",
      "namespace": "order.cart",
      "properties": {
        "capacities": {
          "canBeNull": false,
          "description": "Capacities of the pricing (type of pricing)",
          "fullType": "order.cart.GenericProductPricingCapacitiesEnum[]",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductPricingCapacitiesEnum[]"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the pricing",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "duration": {
          "canBeNull": false,
          "description": "Duration for ordering the product",
          "fullType": "duration",
          "readOnly": true,
          "required": false,
          "type": "duration"
        },
        "interval": {
          "canBeNull": false,
          "description": "Interval of renewal",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maximumQuantity": {
          "canBeNull": true,
          "description": "Maximum quantity that can be ordered",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maximumRepeat": {
          "canBeNull": true,
          "description": "Maximum repeat for renewal",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minimumQuantity": {
          "canBeNull": false,
          "description": "Minimum quantity that can be ordered",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minimumRepeat": {
          "canBeNull": false,
          "description": "Minimum repeat for renewal",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "price": {
          "canBeNull": false,
          "description": "Price of the product",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "priceInUcents": {
          "canBeNull": false,
          "description": "Price of the product in micro-centims",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "pricingMode": {
          "canBeNull": false,
          "description": "Pricing model identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "pricingType": {
          "canBeNull": false,
          "description": "Pricing type",
          "fullType": "order.cart.GenericProductPricingTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductPricingTypeEnum"
        }
      }
    },
    "order.cart.GenericProductPricingCapacitiesEnum": {
      "description": "Capacity of a pricing (type)",
      "enum": [
        "consumption",
        "detach",
        "downgrade",
        "dynamic",
        "installation",
        "renew",
        "upgrade"
      ],
      "enumType": "string",
      "id": "GenericProductPricingCapacitiesEnum",
      "namespace": "order.cart"
    },
    "order.cart.GenericProductPricingTypeEnum": {
      "description": "Type of a pricing",
      "enum": [
        "consumption",
        "purchase",
        "rental"
      ],
      "enumType": "string",
      "id": "GenericProductPricingTypeEnum",
      "namespace": "order.cart"
    },
    "order.cart.GenericProductTypeEnum": {
      "description": "Type of a product",
      "enum": [
        "cloud_service",
        "delivery",
        "deposit",
        "domain",
        "implementation_services",
        "saas_license",
        "shipping",
        "storage"
      ],
      "enumType": "string",
      "id": "GenericProductTypeEnum",
      "namespace": "order.cart"
    },
    "payment.method.AvailablePaymentMethod": {
      "description": "Available payment methods",
      "id": "AvailablePaymentMethod",
      "namespace": "payment.method",
      "properties": {
        "formSessionId": {
          "canBeNull": true,
          "description": "Payment method session identifier",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "icon": {
          "canBeNull": false,
          "description": "Payment method type icon",
          "readOnly": false,
          "required": false,
          "type": "payment.method.Icon"
        },
        "integration": {
          "canBeNull": false,
          "description": "Graphical payment integration to use",
          "readOnly": false,
          "required": false,
          "type": "payment.method.IntegrationType"
        },
        "merchantId": {
          "canBeNull": true,
          "description": "Payment method merchant identifier",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "oneshot": {
          "canBeNull": false,
          "description": "Payment method type is possible to pay in oneshot mode ?",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "organizationId": {
          "canBeNull": true,
          "description": "Payment method organization identifier",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "paymentSubType": {
          "canBeNull": true,
          "description": "Payment method subtype",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "paymentType": {
          "canBeNull": false,
          "description": "Payment method type",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "registerable": {
          "canBeNull": false,
          "description": "Payment method type is registerable ?",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "registerableWithTransaction": {
          "canBeNull": false,
          "description": "Payment method type is registerable with the possibility to pay in same time an order ?",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "payment.method.Icon": {
      "description": "Payment icon",
      "id": "Icon",
      "namespace": "payment.method",
      "properties": {
        "data": {
          "canBeNull": true,
          "description": "Icon data in base64",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Icon name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": true,
          "description": "Icon URL",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "payment.method.IntegrationType": {
      "description": "Payment method integration type",
      "enum": [
        "COMPONENT",
        "DONE",
        "IFRAME_VANTIV",
        "IN_CONTEXT",
        "NONE",
        "POST_FORM",
        "REDIRECT"
      ],
      "enumType": "string",
      "id": "IntegrationType",
      "namespace": "payment.method"
    },
    "payment.method.PaymentMethod": {
      "description": "payment method",
      "id": "PaymentMethod",
      "namespace": "payment.method",
      "properties": {
        "billingContactId": {
          "canBeNull": true,
          "description": "Associated billing contact ID",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "default": {
          "canBeNull": false,
          "description": "Indicates if payment method is the default one for this account",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": true,
          "description": "Custom customer description",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "expirationDate": {
          "canBeNull": true,
          "description": "Expiration date",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "formSessionId": {
          "canBeNull": true,
          "description": "Form session ID",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "icon": {
          "canBeNull": false,
          "description": "Payment method type icon",
          "readOnly": false,
          "required": false,
          "type": "payment.method.Icon"
        },
        "integration": {
          "canBeNull": true,
          "description": "Payment method integration type",
          "readOnly": false,
          "required": false,
          "type": "payment.method.IntegrationType"
        },
        "label": {
          "canBeNull": true,
          "description": "Payment method public label",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lastUpdate": {
          "canBeNull": true,
          "description": "Last update date",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "merchantId": {
          "canBeNull": true,
          "description": "Merchant ID",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "oneclick": {
          "canBeNull": true,
          "description": "Indicates if payment method support the oneclick functionality",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "paymentMeanId": {
          "canBeNull": true,
          "description": "Payment mean ID associated to this payment method",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "paymentMethodId": {
          "canBeNull": false,
          "description": "Payment method ID",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "paymentSubType": {
          "canBeNull": true,
          "description": "Payment method sub type",
          "readOnly": false,
          "required": false,
          "type": "payment.method.SubTypeEnum"
        },
        "paymentType": {
          "canBeNull": false,
          "description": "Payment method type",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Payment method status",
          "readOnly": false,
          "required": false,
          "type": "payment.method.StatusEnum"
        }
      }
    },
    "payment.method.StatusEnum": {
      "description": "Payment method status",
      "enum": [
        "CANCELED",
        "CANCELING",
        "CREATED",
        "CREATING",
        "ERROR",
        "EXPIRED",
        "FAILED",
        "MAINTENANCE",
        "PAUSED",
        "REJECTED",
        "REPLACED",
        "VALID",
        "VALIDATING"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "payment.method"
    },
    "payment.method.SubTypeEnum": {
      "description": "Payment method sub-type",
      "enum": [
        "30_DAYS",
        "45_DAYS",
        "60_DAYS",
        "AMERICAN_EXPRESS",
        "AURA",
        "CARTE_BANCAIRE",
        "CARTE_BLEUE",
        "CHORUS",
        "DINERS_CLUB",
        "DISCOVER",
        "JCB",
        "MAESTRO",
        "MASTERCARD",
        "NONE",
        "VISA"
      ],
      "enumType": "string",
      "id": "SubTypeEnum",
      "namespace": "payment.method"
    }
  },
  "resourcePath": "/me"
}