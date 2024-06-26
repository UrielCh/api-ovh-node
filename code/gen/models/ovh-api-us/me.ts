import {Schema} from '../../src/schema';

// imported from https://api.us.ovhcloud.com:443/1.0/me.json

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
          "description": "Get details about your nichandle",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/get",
              "required": true
            }
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
          "description": "Update details of your nichandle",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "account:apiovh:me/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.Nichandle",
              "description": "Request Body",
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
      "description": "Get abuse related to your account",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve abuse cases list",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/abuse/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/me/abuse"
    },
    {
      "description": "Get abuse related to your account",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Check specific abuse case",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/abuse/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Id",
              "fullType": "string",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.abuse.Abuse"
        }
      ],
      "path": "/me/abuse/{id}"
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
            {
              "name": "account:apiovh:me/accessRestriction/developerMode/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/accessRestriction/developerMode/edit",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/accessRestriction/ip/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/accessRestriction/ip/create",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/accessRestriction/ip/delete",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/accessRestriction/ip/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/accessRestriction/ip/edit",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/accessRestriction/ipDefaultRule/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/accessRestriction/ipDefaultRule/edit",
              "required": true
            }
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
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable this U2F account",
          "httpMethod": "POST",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "attestationObject",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "clientDataJSON",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "rawId",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of contracts signed between you and OVH",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/agreements/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "agreements.AgreementStateEnum",
              "description": "Filter on contract agreement state (like)",
              "fullType": "agreements.AgreementStateEnum",
              "name": "agreed",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter on contract ID (like)",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get a contract agreement",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/agreements/get",
              "required": true
            }
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
          "responseType": "agreements.ContractAgreement"
        }
      ],
      "path": "/me/agreements/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Accept this contract",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:me/agreements/accept",
              "required": true
            }
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
          "responseType": "string"
        }
      ],
      "path": "/me/agreements/{id}/accept"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Read the contract information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/agreements/contract/get",
              "required": true
            }
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve all applications",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/api/application/get",
              "required": true
            }
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an application. It will revoke all credential belonging to this application",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "account:apiovh:me/api/application/delete",
              "required": true
            }
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve information about an application",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/api/application/get",
              "required": true
            }
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve all credentials",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/api/credential/get",
              "required": true
            }
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a credential",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "account:apiovh:me/api/credential/delete",
              "required": true
            }
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve information about a credential",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/api/credential/get",
              "required": true
            }
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Edit a credential",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "account:apiovh:me/api/credential/edit",
              "required": true
            }
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get associated application",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/api/credential/application/get",
              "required": true
            }
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List oAuth2 clients",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/api/oauth2/client/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create a new oauth2 client",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:me/api/oauth2/client/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "oauth2.clientRequest",
              "description": "Request Body",
              "fullType": "oauth2.clientRequest",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "oauth2.clientSecret"
        }
      ],
      "path": "/me/api/oauth2/client"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete an oAuth2 client",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "account:apiovh:me/api/oauth2/client/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Client ID",
              "fullType": "string",
              "name": "clientId",
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
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/api/oauth2/client/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Client ID",
              "fullType": "string",
              "name": "clientId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "oauth2.client"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "account:apiovh:me/api/oauth2/client/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "oauth2.client",
              "description": "Request Body",
              "fullType": "oauth2.client",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Client ID",
              "fullType": "string",
              "name": "clientId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/api/oauth2/client/{clientId}"
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
            {
              "name": "account:apiovh:me/availableAutomaticPaymentMeans/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "billing.AutomaticPaymentMean"
        }
      ],
      "path": "/me/availableAutomaticPaymentMeans"
    },
    {
      "description": "List the billing.Invoice objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of all the bills the logged account has",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/bill/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/bill/get",
              "required": true
            }
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
          "responseType": "billing.Invoice"
        }
      ],
      "path": "/me/bill/{billId}"
    },
    {
      "description": "State of a balance",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/bill/debt/get",
              "required": true
            }
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
          "responseType": "balance.InvoicingBalance"
        }
      ],
      "path": "/me/bill/{billId}/debt"
    },
    {
      "description": "List the balance.OperationBalance objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "All operations related to these debts",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/bill/debt/operation/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/bill/debt/operation/get",
              "required": true
            }
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
          "responseType": "balance.OperationBalance"
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
          "description": "Return main data about the object related to this operation",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/bill/debt/operation/associatedObject/get",
              "required": true
            }
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
      "description": "List the billing.InvoiceDetail objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Give access to all entries of the bill",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/bill/details/get",
              "required": true
            }
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
      "description": "Information about an invoice entry",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/bill/details/get",
              "required": true
            }
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
          "responseType": "billing.InvoiceDetail"
        }
      ],
      "path": "/me/bill/{billId}/details/{billDetailId}"
    },
    {
      "description": "download operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate download link for the document",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/download/get",
              "required": true
            }
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
              "dataType": "billing.DocumentExtensionEnum",
              "description": "Document suffix",
              "fullType": "billing.DocumentExtensionEnum",
              "name": "extension",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/me/bill/{billId}/download"
    },
    {
      "description": "Manage billing groups",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve all billing groups",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/billing/group/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter by name",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter by Service ID",
              "fullType": "long",
              "name": "serviceId",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create a new billing group",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:me/billing/group/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.billing.group.BillingGroup",
              "description": "Request Body",
              "fullType": "me.billing.group.BillingGroup",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "me.billing.group.BillingGroup"
        }
      ],
      "path": "/me/billing/group"
    },
    {
      "description": "Manage billing groups",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete a billing group",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "account:apiovh:me/billing/group/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Group ID",
              "fullType": "long",
              "name": "groupId",
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
          "description": "Retrieve information about a billing group",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/billing/group/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Group ID",
              "fullType": "long",
              "name": "groupId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.billing.group.BillingGroup"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Edit billing group",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "account:apiovh:me/billing/group/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.billing.group.BillingGroup",
              "description": "Request Body",
              "fullType": "me.billing.group.BillingGroup",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Group ID",
              "fullType": "long",
              "name": "groupId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/billing/group/{groupId}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve billing group service ID list",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/billing/group/service/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Group ID",
              "fullType": "long",
              "name": "groupId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Associate a service to a billing group",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:me/billing/group/service/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.billing.group.service.Create",
              "description": "Request Body",
              "fullType": "me.billing.group.service.Create",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Group ID",
              "fullType": "long",
              "name": "groupId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.billing.group.Service"
        }
      ],
      "path": "/me/billing/group/{groupId}/service"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Unlink a service from a billing group",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "account:apiovh:me/billing/group/service/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Group ID",
              "fullType": "long",
              "name": "groupId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Service ID",
              "fullType": "long",
              "name": "serviceId",
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
          "description": "Retrieve information about a billing group service",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/billing/group/service/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Group ID",
              "fullType": "long",
              "name": "groupId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Service ID",
              "fullType": "long",
              "name": "serviceId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.billing.group.Service"
        }
      ],
      "path": "/me/billing/group/{groupId}/service/{serviceId}"
    },
    {
      "description": "Manage purchase orders",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve all purchase orders",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/billing/purchaseOrder/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Billing Group Identifier",
              "fullType": "long",
              "name": "billingGroupId",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create a purchase order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:me/billing/purchaseOrder/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.billing.purchaseOrder.Creation",
              "description": "Request Body",
              "fullType": "me.billing.purchaseOrder.Creation",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "me.billing.purchaseOrder.PurchaseOrder"
        }
      ],
      "path": "/me/billing/purchaseOrder"
    },
    {
      "description": "Manage purchase orders",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete a purchase order",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "account:apiovh:me/billing/purchaseOrder/delete",
              "required": true
            }
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve information about a purchase order",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/billing/purchaseOrder/get",
              "required": true
            }
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
          "responseType": "me.billing.purchaseOrder.PurchaseOrder"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Update a purchase order",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "account:apiovh:me/billing/purchaseOrder/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.billing.purchaseOrder.Update",
              "description": "Request Body",
              "fullType": "me.billing.purchaseOrder.Update",
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
      "path": "/me/billing/purchaseOrder/{id}"
    },
    {
      "description": "Get your Bring your own IP token",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get your Bring your own IP token",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/bringYourOwnIp/token/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip.CampusEnum",
              "description": "Campus where you plan to bring your own IP range in. See /ip/campus to get more details.",
              "fullType": "ip.CampusEnum",
              "name": "campus",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/me/bringYourOwnIp/token"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get all certificates of the account",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/certificates/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getCertificates",
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
            {
              "name": "account:apiovh:me/changeEmail",
              "required": true
            }
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
          "noAuthentication": false,
          "parameters": [],
          "responseType": "void"
        }
      ],
      "path": "/me/changePassword"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all consent campaign available",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/consent/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "me.consent.Campaign[]"
        }
      ],
      "path": "/me/consent"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve information about a consent campaign",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/consent/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Campaign name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get decision value for a consent campaign",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/consent/decision/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Campaign name",
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
            {
              "name": "account:apiovh:me/consent/decision/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.consent.Decision",
              "description": "Request Body",
              "fullType": "me.consent.Decision",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Campaign name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get on-going consumptions for all services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/consumption/usage/current/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "me.consumption.Transaction[]"
        }
      ],
      "path": "/me/consumption/usage/current"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get forecasted consumptions for all services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/consumption/usage/forecast/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "me.consumption.Transaction[]"
        }
      ],
      "path": "/me/consumption/usage/forecast"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get list of transactions between two dates",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/consumption/usage/history/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Begin date",
              "fullType": "datetime",
              "name": "beginDate",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "datetime",
              "description": "End date",
              "fullType": "datetime",
              "name": "endDate",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "me.consumption.Transaction[]"
        }
      ],
      "path": "/me/consumption/usage/history"
    },
    {
      "description": "Contact management",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve every contact your created",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/contact/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/contact/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.contact.Contact",
              "description": "Request Body",
              "fullType": "me.contact.Contact",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "me.contact.Contact"
        }
      ],
      "path": "/me/contact"
    },
    {
      "description": "Contact management",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve information about a contact",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/contact/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Contact ID",
              "fullType": "long",
              "name": "contactId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.contact.Contact"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update an existing contact",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "account:apiovh:me/contact/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.contact.Contact",
              "description": "Request Body",
              "fullType": "me.contact.Contact",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Contact ID",
              "fullType": "long",
              "name": "contactId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.contact.Contact"
        }
      ],
      "path": "/me/contact/{contactId}"
    },
    {
      "description": "Contact fields information",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get mandatory/read-only information about the fields of a contact",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/contact/fields/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Contact ID",
              "fullType": "long",
              "name": "contactId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.contact.FieldInformation[]"
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
            {
              "name": "account:apiovh:me/credit/balance/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/credit/balance/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/credit/balance/movement/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/credit/balance/movement/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/credit/code/validate",
              "required": true
            }
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
      "description": "Balance of the account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/debtAccount/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "balance.CustomerBalance"
        }
      ],
      "path": "/me/debtAccount"
    },
    {
      "description": "List the balance.InvoicingBalance objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "All debts related to your account",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/debtAccount/debt/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        }
      ],
      "path": "/me/debtAccount/debt"
    },
    {
      "description": "State of a balance",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/debtAccount/debt/get",
              "required": true
            }
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
          "responseType": "balance.InvoicingBalance"
        }
      ],
      "path": "/me/debtAccount/debt/{debtId}"
    },
    {
      "description": "List the balance.OperationBalance objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "All operations related to these debts",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/debtAccount/debt/operation/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/debtAccount/debt/operation/get",
              "required": true
            }
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
          "responseType": "balance.OperationBalance"
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
          "description": "Return main data about the object related to this operation",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/debtAccount/debt/operation/associatedObject/get",
              "required": true
            }
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
          "description": "Create an order in order to pay selected invoices",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:me/debtAccount/pay",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long[]",
              "description": "If set, specify order ids to regulate",
              "fullType": "long[]",
              "name": "orderIds",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Force the use of the payment method id",
              "fullType": "long",
              "name": "paymentMethodId",
              "paramType": "body",
              "required": false
            }
          ],
          "responseType": "billing.InvoiceDepositRequest"
        }
      ],
      "path": "/me/debtAccount/pay"
    },
    {
      "description": "List the billing.InvoiceDeposit objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of all the deposits made to your prepaid account or debt account",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/deposit/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter the value of date property (>=)",
              "fullType": "string",
              "name": "date.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of date property (<=)",
              "fullType": "string",
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
            {
              "name": "account:apiovh:me/deposit/get",
              "required": true
            }
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
          "responseType": "billing.InvoiceDeposit"
        }
      ],
      "path": "/me/deposit/{depositId}"
    },
    {
      "description": "download operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate download link for the pdf document",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/deposit/download/get",
              "required": true
            }
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
          "responseType": "string"
        }
      ],
      "path": "/me/deposit/{depositId}/download"
    },
    {
      "description": "List the billing.Invoice objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get invoices paid by this deposit",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/deposit/paidBills/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/deposit/paidBills/get",
              "required": true
            }
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
          "responseType": "billing.Invoice"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}"
    },
    {
      "description": "State of a balance",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/deposit/paidBills/debt/get",
              "required": true
            }
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
          "responseType": "balance.InvoicingBalance"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt"
    },
    {
      "description": "List the balance.OperationBalance objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "All operations related to these debts",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/deposit/paidBills/debt/operation/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/deposit/paidBills/debt/operation/get",
              "required": true
            }
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
          "responseType": "balance.OperationBalance"
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
          "description": "Return main data about the object related to this operation",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/deposit/paidBills/debt/operation/associatedObject/get",
              "required": true
            }
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
      "description": "List the billing.InvoiceDetail objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Give access to all entries of the bill",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/deposit/paidBills/details/get",
              "required": true
            }
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
      "description": "Information about an invoice entry",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/deposit/paidBills/details/get",
              "required": true
            }
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
          "responseType": "billing.InvoiceDetail"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}"
    },
    {
      "description": "download operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate download link for the document",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/deposit/paidBills/download/get",
              "required": true
            }
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
              "dataType": "billing.DocumentExtensionEnum",
              "description": "Document suffix",
              "fullType": "billing.DocumentExtensionEnum",
              "name": "extension",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/download"
    },
    {
      "description": "List the billing.InvoiceDepositRequest objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of all the deposit requests made",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/depositRequest/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Filter the value of creationDate property (>=)",
              "fullType": "datetime",
              "name": "creationDate.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of creationDate property (<=)",
              "fullType": "datetime",
              "name": "creationDate.to",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/me/depositRequest"
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
            {
              "name": "account:apiovh:me/depositRequest/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "deposit request id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.InvoiceDepositRequest"
        }
      ],
      "path": "/me/depositRequest/{id}"
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
            {
              "name": "account:apiovh:me/fidelityAccount/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/fidelityAccount/edit",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/fidelityAccount/creditOrder",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/fidelityAccount/movements/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/fidelityAccount/movements/get",
              "required": true
            }
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve all IAM groups of this account",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/identity/group/get",
              "required": true
            }
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
          "description": "Create a new IAM group",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:me/identity/group/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "auth.GroupRequest",
              "description": "Request Body",
              "fullType": "auth.GroupRequest",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "auth.Group"
        }
      ],
      "path": "/me/identity/group"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an IAM group",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "account:apiovh:me/identity/group/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Group",
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
          "description": "Get an IAM group",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/identity/group/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Group",
              "fullType": "string",
              "name": "group",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "auth.Group"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter an IAM group",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "account:apiovh:me/identity/group/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "auth.Group",
              "description": "Request Body",
              "fullType": "auth.Group",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Group",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove the identity provider",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "account:apiovh:me/identity/provider/delete",
              "required": true
            }
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
          "description": "Get the identity provider linked to this account",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/identity/provider/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "auth.Provider"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Define an identity provider (SAML 2.0)",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:me/identity/provider/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "auth.ProviderRequest",
              "description": "Request Body",
              "fullType": "auth.ProviderRequest",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "auth.Provider"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter the provider",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "account:apiovh:me/identity/provider/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "auth.Provider",
              "description": "Request Body",
              "fullType": "auth.Provider",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/me/identity/provider"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve all IAM users of this account",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/identity/user/get",
              "required": true
            }
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
          "description": "Create a new IAM user",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:me/identity/user/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "auth.UserRequest",
              "description": "Request Body",
              "fullType": "auth.UserRequest",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an IAM user",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "account:apiovh:me/identity/user/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "User",
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
          "description": "Get an IAM user",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/identity/user/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "User",
              "fullType": "string",
              "name": "user",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "auth.User"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter an IAM user",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "account:apiovh:me/identity/user/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "auth.User",
              "description": "Request Body",
              "fullType": "auth.User",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable this user",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:me/identity/user/disable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "User",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Enable this user",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:me/identity/user/enable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "User",
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
            {
              "name": "account:apiovh:me/installationTemplate/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/installationTemplate/create",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/installationTemplate/delete",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/installationTemplate/get",
              "required": true
            }
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
          "description": "Alter this template",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "account:apiovh:me/installationTemplate/edit",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/installationTemplate/checkIntegrity",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/installationTemplate/partitionScheme/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/installationTemplate/partitionScheme/create",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/installationTemplate/partitionScheme/delete",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/installationTemplate/partitionScheme/get",
              "required": true
            }
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
          "description": "Alter this scheme of partition",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "account:apiovh:me/installationTemplate/partitionScheme/edit",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/installationTemplate/partitionScheme/hardwareRaid/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/installationTemplate/partitionScheme/hardwareRaid/create",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/installationTemplate/partitionScheme/hardwareRaid/delete",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/installationTemplate/partitionScheme/hardwareRaid/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/installationTemplate/partitionScheme/hardwareRaid/edit",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/installationTemplate/partitionScheme/partition/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/installationTemplate/partitionScheme/partition/create",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/installationTemplate/partitionScheme/partition/delete",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/installationTemplate/partitionScheme/partition/get",
              "required": true
            }
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
          "description": "Alter this partition",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "account:apiovh:me/installationTemplate/partitionScheme/partition/edit",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/ipOrganisation/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/ipOrganisation/create",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/ipOrganisation/delete",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/ipOrganisation/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/ipOrganisation/edit",
              "required": true
            }
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
            "deletionDate": "2024-07-09T08:30:00Z",
            "deprecatedDate": "2024-04-24T08:30:00Z",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "List of all your IPXE scripts - Use /dedicated/server/{serviceName} instead: see https://help.ovhcloud.com/csm/en-dedicated-servers-ipxe-scripts",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/ipxeScript/get",
              "required": true
            }
          ],
          "longDescription": "List of all your IPXE scripts - Use /dedicated/server/{serviceName} instead: see https://help.ovhcloud.com/csm/en-dedicated-servers-ipxe-scripts?id=kb_article_view&sysparm_article=KB0058505 for more details",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/me/ipxeScript"
    },
    {
      "description": "Customer IPXE scripts",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2024-07-09T08:30:00Z",
            "deprecatedDate": "2024-04-24T08:30:00Z",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Remove this IPXE Script",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "account:apiovh:me/ipxeScript/delete",
              "required": true
            }
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
            "deletionDate": "2024-07-09T08:30:00Z",
            "deprecatedDate": "2024-04-24T08:30:00Z",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/ipxeScript/get",
              "required": true
            }
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
        }
      ],
      "path": "/me/ipxeScript/{name}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get your audit logs",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/logs/audit/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "audit.Log[]"
        }
      ],
      "path": "/me/logs/audit"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve order list",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        }
      ],
      "path": "/me/order"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve an order",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Order ID",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return data about the object associated to the order",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/associatedObject/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Order ID",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of payment methods you can use to pay this order",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/availablePaymentMethod/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Order ID",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.order.AvailablePaymentMethod[]"
        }
      ],
      "path": "/me/order/{orderId}/availablePaymentMethod"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-02-01T00:00:00Z",
            "deprecatedDate": "2017-12-28T00:00:00Z",
            "description": "Deprecated, will be removed",
            "replacement": "/me/order/{orderId}/availablePaymentMethod",
            "value": "DEPRECATED"
          },
          "description": "List of registered payment mean you can use to pay this order",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/availableRegisteredPaymentMean/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Order ID",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List credit balances applied on this Order",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/balance/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Order ID",
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
            {
              "name": "account:apiovh:me/order/balance/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.order.BalanceCreate",
              "description": "Request Body",
              "fullType": "billing.order.BalanceCreate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Order ID",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.order.credit.Balance"
        }
      ],
      "path": "/me/order/{orderId}/balance"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Remove a credit balance from this Order",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/balance/delete",
              "required": true
            }
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
              "description": "Order ID",
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
          "description": "Retrieve Credit applied on this Order",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/balance/get",
              "required": true
            }
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
              "description": "Order ID",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.order.credit.Balance"
        }
      ],
      "path": "/me/order/{orderId}/balance/{balanceName}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve details of an order",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/details/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Order ID",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve an order detail",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/details/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Detail ID",
              "fullType": "long",
              "name": "detailId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Order ID",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.OrderDetail"
        }
      ],
      "path": "/me/order/{orderId}/details/{detailId}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve an order detail extensions",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/details/extension/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Detail ID",
              "fullType": "long",
              "name": "detailId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Order ID",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.ItemDetail"
        }
      ],
      "path": "/me/order/{orderId}/details/{detailId}/extension"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve a list of operations linked to this order detail",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/details/operations/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Detail ID",
              "fullType": "long",
              "name": "detailId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Order ID",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/me/order/{orderId}/details/{detailId}/operations"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve a list of operations linked to this order detail",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/details/operations/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Detail ID",
              "fullType": "long",
              "name": "detailId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Operation ID",
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Order ID",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "service.Operation"
        }
      ],
      "path": "/me/order/{orderId}/details/{detailId}/operations/{operationId}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Return tracking of the order",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/followUp/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Order ID",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Pay this Order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/pay",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.order.PayWithPaymentMethod",
              "description": "Request Body",
              "fullType": "billing.order.PayWithPaymentMethod",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Order ID",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List of registered payment method you can use to pay this order",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/paymentMethods/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Order ID",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-02-01T00:00:00Z",
            "deprecatedDate": "2017-12-28T00:00:00Z",
            "description": "Deprecated, will be removed",
            "replacement": "/me/order/{orderId}/pay",
            "value": "DEPRECATED"
          },
          "description": "Pay with an already registered payment mean",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/payWithRegisteredPaymentMean",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.order.PayWithRegisteredPaymentMean",
              "description": "Request Body",
              "fullType": "billing.order.PayWithRegisteredPaymentMean",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Order ID",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request retraction of order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/retraction/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.order.RequestRetraction",
              "description": "Request Body",
              "fullType": "billing.order.RequestRetraction",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Order ID",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return status of order",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/status/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Order ID",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List vouchers applied on this Order",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/voucher/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Order ID",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Use a Voucher on this Order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/voucher/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.order.UseVoucher",
              "description": "Request Body",
              "fullType": "billing.order.UseVoucher",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Order ID",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.order.OrderVoucher"
        }
      ],
      "path": "/me/order/{orderId}/voucher"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove Voucher from this Order",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/voucher/delete",
              "required": true
            }
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
              "description": "Order ID",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve Voucher applied on this Order",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/order/voucher/get",
              "required": true
            }
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
              "description": "Order ID",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.order.OrderVoucher"
        }
      ],
      "path": "/me/order/{orderId}/voucher/{balanceName}"
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
            {
              "name": "account:apiovh:me/payment/availableMethods/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/payment/method/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/payment/method/create",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/payment/method/delete",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/payment/method/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/payment/method/edit",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/payment/method/challenge",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/payment/method/details/create",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/payment/method/finalize",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/payment/transaction/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/payment/transaction/get",
              "required": true
            }
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
      "description": "Manage legacy payment method in US",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-03-01T00:00:00Z",
            "deprecatedDate": "2020-09-01T00:00:00Z",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Retrieve payment method id list",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/paymentMethod/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.paymentMethod.PaymentTypeEnum",
              "description": "Filter on 'paymentType' property",
              "fullType": "me.paymentMethod.PaymentTypeEnum",
              "name": "paymentType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "me.paymentMethod.PaymentMethodStatusEnum",
              "description": "Filter on 'status' property",
              "fullType": "me.paymentMethod.PaymentMethodStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "deletionDate": "2022-03-01T00:00:00Z",
            "deprecatedDate": "2020-09-01T00:00:00Z",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Register a new payment method",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:me/paymentMethod/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.paymentMethod.Creation",
              "description": "Request Body",
              "fullType": "me.paymentMethod.Creation",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "me.paymentMethod.Validation"
        }
      ],
      "path": "/me/paymentMethod"
    },
    {
      "description": "Manage legacy payment method in US",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-03-01T00:00:00Z",
            "deprecatedDate": "2020-09-01T00:00:00Z",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Delete the selected payment mean",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "account:apiovh:me/paymentMethod/delete",
              "required": true
            }
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
            "deletionDate": "2022-03-01T00:00:00Z",
            "deprecatedDate": "2020-09-01T00:00:00Z",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Get one payment method",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/paymentMethod/get",
              "required": true
            }
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
          "responseType": "me.paymentMethod.PaymentMethod"
        },
        {
          "apiStatus": {
            "deletionDate": "2022-03-01T00:00:00Z",
            "deprecatedDate": "2020-09-01T00:00:00Z",
            "description": "Deprecated, will be removed",
            "replacement": "/me/payment/method",
            "value": "DEPRECATED"
          },
          "description": "Edit payment method",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "account:apiovh:me/paymentMethod/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.paymentMethod.PaymentMethod",
              "description": "Request Body",
              "fullType": "me.paymentMethod.PaymentMethod",
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
          "responseType": "me.paymentMethod.PaymentMethod"
        }
      ],
      "path": "/me/paymentMethod/{id}"
    },
    {
      "description": "List the billing.InvoiceRefund objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of all the refunds the logged account has",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/refund/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter the value of date property (>=)",
              "fullType": "string",
              "name": "date.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of date property (<=)",
              "fullType": "string",
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
            {
              "name": "account:apiovh:me/refund/get",
              "required": true
            }
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
          "responseType": "billing.InvoiceRefund"
        }
      ],
      "path": "/me/refund/{refundId}"
    },
    {
      "description": "List the billing.InvoiceRefundDetail objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Give access to all entries of the refund",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/refund/details/get",
              "required": true
            }
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
      "description": "Information about refund entry",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/refund/details/get",
              "required": true
            }
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
          "responseType": "billing.InvoiceRefundDetail"
        }
      ],
      "path": "/me/refund/{refundId}/details/{refundDetailId}"
    },
    {
      "description": "download operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate download link for the document",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/refund/download/get",
              "required": true
            }
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
            },
            {
              "dataType": "billing.DocumentExtensionEnum",
              "description": "Document suffix",
              "fullType": "billing.DocumentExtensionEnum",
              "name": "extension",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/me/refund/{refundId}/download"
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
            {
              "name": "account:apiovh:me/sla/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/sla/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/sla/apply",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/sla/canBeApplied/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/sla/services/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/sla/status/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/sshKey/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/sshKey/create",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/sshKey/delete",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/sshKey/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/subAccount/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/subAccount/create",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/subAccount/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/subAccount/edit",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/subAccount/createConsumerKey",
              "required": true
            }
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
      "description": "Manage customer tags",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve customer tags list",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/tag/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Activate customer tag",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:me/tag/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.tag.Creation",
              "description": "Request Body",
              "fullType": "me.tag.Creation",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "me.tag.Tag"
        }
      ],
      "path": "/me/tag"
    },
    {
      "description": "Manage customer tags",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete a customer tag",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "account:apiovh:me/tag/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Tag",
              "fullType": "string",
              "name": "tag",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.tag.Tag"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve a customer tag",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/tag/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Tag",
              "fullType": "string",
              "name": "tag",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.tag.Tag"
        }
      ],
      "path": "/me/tag/{tag}"
    },
    {
      "description": "Available tags",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve all available tags",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/tag/available/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "me.tag.AvailableTag[]"
        }
      ],
      "path": "/me/tag/available"
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
            {
              "name": "account:apiovh:me/task/emailChange/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/task/emailChange/get",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/task/emailChange/accept",
              "required": true
            }
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
            {
              "name": "account:apiovh:me/task/emailChange/refuse",
              "required": true
            }
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
      "description": "vipStatus operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "VIP Status of this account",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/vipStatus/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "nichandle.VipStatus"
        }
      ],
      "path": "/me/vipStatus"
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
            {
              "name": "account:apiovh:me/voucher/checkValidity",
              "required": true
            }
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
      "description": "List the billing.InvoiceWithdrawal objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of all the withdrawals made from your prepaid account",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/withdrawal/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter the value of date property (>=)",
              "fullType": "string",
              "name": "date.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of date property (<=)",
              "fullType": "string",
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
            {
              "name": "account:apiovh:me/withdrawal/get",
              "required": true
            }
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
          "responseType": "billing.InvoiceWithdrawal"
        }
      ],
      "path": "/me/withdrawal/{withdrawalId}"
    },
    {
      "description": "download operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate download link for the pdf document",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:me/withdrawal/download/get",
              "required": true
            }
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
          "responseType": "string"
        }
      ],
      "path": "/me/withdrawal/{withdrawalId}/download"
    }
  ],
  "basePath": "https://api.us.ovhcloud.com/1.0",
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
          "description": "Whether this contract is currently active",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "date": {
          "canBeNull": false,
          "description": "Creation date of the contract",
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
          "description": "The current state of the contract agreement",
          "fullType": "agreements.AgreementStateEnum",
          "readOnly": true,
          "required": false,
          "type": "agreements.AgreementStateEnum"
        },
        "contractId": {
          "canBeNull": false,
          "description": "ID of the agreed contract",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "date": {
          "canBeNull": true,
          "description": "Date on which the agreed contract came into force",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "ID of the contract",
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
    "audit.Log": {
      "description": "An audit Log",
      "id": "Log",
      "namespace": "audit",
      "properties": {
        "authDetails": {
          "canBeNull": true,
          "description": "authentication details",
          "fullType": "audit.LogAuthDetails",
          "readOnly": true,
          "required": false,
          "type": "audit.LogAuthDetails"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "event's date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "ip": {
          "canBeNull": true,
          "description": "IP associated to this event",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "loginSuccessDetails": {
          "canBeNull": true,
          "description": "specific fields for LOGIN_SUCCESS events",
          "fullType": "audit.LogLoginSuccessDetails",
          "readOnly": true,
          "required": false,
          "type": "audit.LogLoginSuccessDetails"
        },
        "type": {
          "canBeNull": false,
          "description": "type of event",
          "fullType": "audit.LogTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "audit.LogTypeEnum"
        },
        "userPasswordChangedDetails": {
          "canBeNull": true,
          "description": "specific fields for USER_PASSWORD_CHANGED events",
          "fullType": "audit.LogUserPasswordChangedDetails",
          "readOnly": true,
          "required": false,
          "type": "audit.LogUserPasswordChangedDetails"
        }
      }
    },
    "audit.LogAuthDetails": {
      "description": "Authentication details",
      "id": "LogAuthDetails",
      "namespace": "audit",
      "properties": {
        "userDetails": {
          "canBeNull": false,
          "description": "authenticated user details",
          "fullType": "audit.LogAuthUserDetails",
          "readOnly": true,
          "required": false,
          "type": "audit.LogAuthUserDetails"
        }
      }
    },
    "audit.LogAuthMFATypeEnum": {
      "description": "Authentication MFA type",
      "enum": [
        "BACKUP_CODE",
        "MAIL",
        "NONE",
        "SMS",
        "TOTP",
        "U2F",
        "UNKNOWN"
      ],
      "enumType": "string",
      "id": "LogAuthMFATypeEnum",
      "namespace": "audit"
    },
    "audit.LogAuthUserDetails": {
      "description": "Authenticated user details",
      "id": "LogAuthUserDetails",
      "namespace": "audit",
      "properties": {
        "type": {
          "canBeNull": false,
          "description": "authentication type",
          "fullType": "audit.LogAuthUserTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "audit.LogAuthUserTypeEnum"
        },
        "user": {
          "canBeNull": true,
          "description": "authenticated user name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "audit.LogAuthUserTypeEnum": {
      "description": "Authentication type",
      "enum": [
        "ACCOUNT",
        "PROVIDER",
        "USER"
      ],
      "enumType": "string",
      "id": "LogAuthUserTypeEnum",
      "namespace": "audit"
    },
    "audit.LogLoginSuccessDetails": {
      "description": "specific fields for LOGIN_SUCCESS events",
      "id": "LogLoginSuccessDetails",
      "namespace": "audit",
      "properties": {
        "mfaType": {
          "canBeNull": true,
          "description": "Used MFA while login",
          "fullType": "audit.LogAuthMFATypeEnum",
          "readOnly": true,
          "required": false,
          "type": "audit.LogAuthMFATypeEnum"
        },
        "userAgent": {
          "canBeNull": false,
          "description": "Browser's user agent",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "audit.LogTypeEnum": {
      "description": "Audit event type",
      "enum": [
        "ACCOUNT_PASSWORD_CHANGED",
        "LOGIN_SUCCESS",
        "USER_PASSWORD_CHANGED"
      ],
      "enumType": "string",
      "id": "LogTypeEnum",
      "namespace": "audit"
    },
    "audit.LogUserPasswordChangedDetails": {
      "description": "specific fields for USER_PASSWORD_CHANGED events",
      "id": "LogUserPasswordChangedDetails",
      "namespace": "audit",
      "properties": {
        "user": {
          "canBeNull": false,
          "description": "User name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
    "balance.CustomerBalance": {
      "description": "Balance of the account",
      "id": "CustomerBalance",
      "namespace": "balance",
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
          "description": "Amount of balance the account has",
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
    "balance.InvoicingBalance": {
      "description": "State of a balance",
      "id": "InvoicingBalance",
      "namespace": "balance",
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
          "description": "Date the balance was created on",
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
          "description": "If specified, the balance will not be recovered before that date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "orderId": {
          "canBeNull": false,
          "description": "The estimate id the invoicing balance relates to",
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
    "balance.OperationBalance": {
      "description": "Operation that happend on a debt",
      "id": "OperationBalance",
      "namespace": "balance",
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
    "billing.DocumentExtensionEnum": {
      "description": "List of available extension",
      "enum": [
        "html",
        "pdf"
      ],
      "enumType": "string",
      "id": "DocumentExtensionEnum",
      "namespace": "billing"
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
    "billing.Invoice": {
      "description": "Details about a Bill",
      "id": "Invoice",
      "namespace": "billing",
      "properties": {
        "billId": {
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
        "htmlUrl": {
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
    "billing.InvoiceDeposit": {
      "description": "Details about a deposit",
      "id": "InvoiceDeposit",
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
          "fullType": "billing.paymentMethod.PaymentInfo",
          "readOnly": true,
          "required": false,
          "type": "billing.paymentMethod.PaymentInfo"
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
    "billing.InvoiceDepositRequest": {
      "description": "Details about a deposit",
      "id": "InvoiceDepositRequest",
      "namespace": "billing",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "creation date of the deposit request",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "deposit request id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "orderIds": {
          "canBeNull": true,
          "description": "order ids relative to this deposit request",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        }
      }
    },
    "billing.InvoiceDetail": {
      "description": "Information about an invoice entry",
      "id": "InvoiceDetail",
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
    "billing.InvoiceRefund": {
      "description": "Details about a Refund",
      "id": "InvoiceRefund",
      "namespace": "billing",
      "properties": {
        "date": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "htmlUrl": {
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
    "billing.InvoiceRefundDetail": {
      "description": "Information about refund entry",
      "id": "InvoiceRefundDetail",
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
    "billing.InvoiceWithdrawal": {
      "description": "Details about a withdrawal",
      "id": "InvoiceWithdrawal",
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
    "billing.ItemDetail": {
      "description": "Extensions of a detail",
      "id": "ItemDetail",
      "namespace": "billing",
      "properties": {
        "order": {
          "canBeNull": false,
          "description": "Order data for this Detail",
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
          "canBeNull": false,
          "description": "List of order actions",
          "fullType": "billing.ItemDetail.OrderActionEnum",
          "readOnly": true,
          "required": false,
          "type": "billing.ItemDetail.OrderActionEnum"
        },
        "configurations": {
          "canBeNull": false,
          "description": "Configurations chosen during the order",
          "fullType": "billing.ItemDetail.OrderConfiguration[]",
          "readOnly": true,
          "required": false,
          "type": "billing.ItemDetail.OrderConfiguration[]"
        },
        "plan": {
          "canBeNull": false,
          "description": "Plan data from order",
          "fullType": "billing.ItemDetail.OrderPlan",
          "readOnly": true,
          "required": false,
          "type": "billing.ItemDetail.OrderPlan"
        },
        "type": {
          "canBeNull": false,
          "description": "List of order detail types",
          "fullType": "billing.ItemDetail.OrderDetailTypeEnum",
          "readOnly": true,
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Value of the configuration",
          "fullType": "string",
          "readOnly": true,
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "duration": {
          "canBeNull": true,
          "description": "Duration chosen when ordering through /order/cart (ISO 8601)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "pricingMode": {
          "canBeNull": true,
          "description": "Pricing mode used when ordering through /order/cart",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "product": {
          "canBeNull": false,
          "description": "Product data from order",
          "fullType": "billing.ItemDetail.OrderPlanProduct",
          "readOnly": true,
          "required": false,
          "type": "billing.ItemDetail.OrderPlanProduct"
        },
        "quantity": {
          "canBeNull": true,
          "description": "Quantity ordered",
          "fullType": "long",
          "readOnly": true,
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
          "description": "Price with its currency and textual representation",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "priceWithoutTax": {
          "canBeNull": false,
          "description": "Price with its currency and textual representation",
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
          "description": "Price with its currency and textual representation",
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
          "description": "Product type of item in order",
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
          "description": "Price with its currency and textual representation",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "unitPrice": {
          "canBeNull": false,
          "description": "Price with its currency and textual representation",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of objects an order can be linked to",
          "fullType": "billing.order.associatedObject.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "billing.order.associatedObject.TypeEnum"
        }
      }
    },
    "billing.order.AutomaticPaymentCapacities": {
      "description": "The object containing all capacities about automatic payment methods",
      "id": "AutomaticPaymentCapacities",
      "namespace": "billing.order",
      "properties": {
        "canBePaidAutomatically": {
          "canBeNull": false,
          "description": "Set if the Order can be automatically paid",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "paymentMethodId": {
          "canBeNull": true,
          "description": "Payment method ID to use in order to automatically pay this Order",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "billing.order.AvailablePaymentMethod": {
      "description": "Payment method that can be used on an Order",
      "id": "AvailablePaymentMethod",
      "namespace": "billing.order",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Payment method ID",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "List of payment type enum",
          "fullType": "billing.paymentMethod.PaymentTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "billing.paymentMethod.PaymentTypeEnum"
        }
      }
    },
    "billing.order.BalanceCreate": {
      "description": "Credit balance",
      "id": "BalanceCreate",
      "namespace": "billing.order",
      "properties": {
        "balanceName": {
          "canBeNull": false,
          "description": "Balance name to use on this Order",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
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
          "fullType": "billing.order.followUp.History[]",
          "readOnly": true,
          "required": false,
          "type": "billing.order.followUp.History[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Step status of order follow-up",
          "fullType": "billing.order.followUp.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "billing.order.followUp.StatusEnum"
        },
        "step": {
          "canBeNull": false,
          "description": "Status of order follow-up",
          "fullType": "billing.order.followUp.StepEnum",
          "readOnly": true,
          "required": false,
          "type": "billing.order.followUp.StepEnum"
        }
      }
    },
    "billing.order.OrderCapacities": {
      "description": "The object containing all capacities about a given order",
      "id": "OrderCapacities",
      "namespace": "billing.order",
      "properties": {
        "payment": {
          "canBeNull": false,
          "description": "The object containing all capacities about automatic payment methods",
          "fullType": "billing.order.AutomaticPaymentCapacities",
          "readOnly": true,
          "required": false,
          "type": "billing.order.AutomaticPaymentCapacities"
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
    "billing.order.OrderVoucher": {
      "description": "Voucher applied on an Order",
      "id": "OrderVoucher",
      "namespace": "billing.order",
      "properties": {
        "amount": {
          "canBeNull": false,
          "description": "Price with its currency and textual representation",
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
    "billing.order.PayWithPaymentMethod": {
      "description": "Pay with payment method",
      "id": "PayWithPaymentMethod",
      "namespace": "billing.order",
      "properties": {
        "paymentMethod": {
          "canBeNull": false,
          "description": "Payment method that can be used on an Order",
          "fullType": "billing.order.AvailablePaymentMethod",
          "readOnly": false,
          "required": true,
          "type": "billing.order.AvailablePaymentMethod"
        }
      }
    },
    "billing.order.PayWithRegisteredPaymentMean": {
      "description": "Pay with already registered payment mean",
      "id": "PayWithRegisteredPaymentMean",
      "namespace": "billing.order",
      "properties": {
        "paymentMean": {
          "canBeNull": false,
          "description": "List of payment type enum",
          "fullType": "billing.paymentMethod.PaymentTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "billing.paymentMethod.PaymentTypeEnum"
        },
        "paymentMeanId": {
          "canBeNull": false,
          "description": "ID of registered payment mean, mandatory for bankAccount, creditCard and paypal",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
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
          "fullType": "payment.method.AvailablePaymentMethod[]",
          "readOnly": true,
          "required": false,
          "type": "payment.method.AvailablePaymentMethod[]"
        },
        "paymentMethods": {
          "canBeNull": true,
          "description": "List of registered Payment methods usable on this order",
          "fullType": "payment.method.PaymentMethod[]",
          "readOnly": true,
          "required": false,
          "type": "payment.method.PaymentMethod[]"
        },
        "registered": {
          "canBeNull": false,
          "description": "IDs of registered payment method usable on this order",
          "fullType": "long[]",
          "readOnly": true,
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
          "description": "Reusable payment mean type",
          "fullType": "billing.ReusablePaymentMeanEnum",
          "readOnly": true,
          "required": false,
          "type": "billing.ReusablePaymentMeanEnum"
        }
      }
    },
    "billing.order.RequestRetraction": {
      "description": "Retractation request",
      "id": "RequestRetraction",
      "namespace": "billing.order",
      "properties": {
        "comment": {
          "canBeNull": false,
          "description": "An optional comment of why you want to retract",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "reason": {
          "canBeNull": false,
          "description": "Retraction reason type",
          "fullType": "billing.order.RetractionReasonEnum",
          "readOnly": false,
          "required": true,
          "type": "billing.order.RetractionReasonEnum"
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
    "billing.order.UseVoucher": {
      "description": "Use a voucher on an order",
      "id": "UseVoucher",
      "namespace": "billing.order",
      "properties": {
        "balanceName": {
          "canBeNull": false,
          "description": "Balance name to use as Voucher",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
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
    "billing.order.credit.Balance": {
      "description": "Credit balance applied on an Order",
      "id": "Balance",
      "namespace": "billing.order.credit",
      "properties": {
        "amount": {
          "canBeNull": false,
          "description": "Price with its currency and textual representation",
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
    "billing.order.followUp.History": {
      "description": "Step history of order follow-up",
      "id": "History",
      "namespace": "billing.order.followUp",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": "History date of order follow-up",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": "History description of order follow-up",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "label": {
          "canBeNull": false,
          "description": "History label of order follow-up",
          "fullType": "billing.order.followUp.HistoryStatusEnum",
          "readOnly": true,
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
    "billing.paymentMethod.PaymentInfo": {
      "description": "The payment infos linked to this debt entry",
      "id": "PaymentInfo",
      "namespace": "billing.paymentMethod",
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
          "description": "Payment method used for this debt operation",
          "readOnly": false,
          "required": false,
          "type": "billing.paymentMethod.PaymentTypeEnum"
        },
        "publicLabel": {
          "canBeNull": true,
          "description": "Public payment method label",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "billing.paymentMethod.PaymentTypeEnum": {
      "description": "List of payment type enum",
      "enum": [
        "BANK_ACCOUNT",
        "CREDIT_CARD",
        "CURRENT_ACCOUNT",
        "DEFERRED_PAYMENT_ACCOUNT",
        "DOMESTIC_CARD",
        "ENTERPRISE",
        "INTERNAL_TRUSTED_ACCOUNT",
        "PAYPAL",
        "RUPAY",
        "SEPA_DIRECT_DEBIT"
      ],
      "enumType": "string",
      "id": "PaymentTypeEnum",
      "namespace": "billing.paymentMethod"
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
    "complexType.SafeKeyValue<string>": {
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
    "complexType.UnitAndValue<long>": {
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
        "name": {
          "canBeNull": true,
          "description": "OS template project item name",
          "readOnly": false,
          "required": false,
          "type": "string"
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
        "sshPubKey",
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
        "byolinux",
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
        "backup",
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
    "ip.CampusEnum": {
      "description": "Possible values for IP campuses' names",
      "enum": [
        "BHS",
        "ERI",
        "GRA",
        "HIL",
        "LIM",
        "RBX",
        "SBG",
        "SGP",
        "SYD",
        "VIN",
        "WAW",
        "YNM",
        "YYZ"
      ],
      "enumType": "string",
      "id": "CampusEnum",
      "namespace": "ip"
    },
    "me.abuse.Abuse": {
      "description": "Get report API response",
      "id": "Abuse",
      "namespace": "me.abuse",
      "properties": {
        "category": {
          "canBeNull": false,
          "description": "Abuse category",
          "fullType": "me.abuse.AbuseCategoryEnum",
          "readOnly": true,
          "required": false,
          "type": "me.abuse.AbuseCategoryEnum"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of the abuse",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "publicId": {
          "canBeNull": false,
          "description": "Public ID of the abuse case",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "service": {
          "canBeNull": false,
          "description": "Service where is hosted the abuse",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Abuse case status",
          "fullType": "me.abuse.AbuseStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "me.abuse.AbuseStatusEnum"
        }
      }
    },
    "me.abuse.AbuseCategoryEnum": {
      "description": "The abuse categories",
      "enum": [
        "Compromised",
        "Copyright",
        "Illegal",
        "Intrusion",
        "Malware",
        "Network Attack",
        "Other",
        "Phishing",
        "Spam"
      ],
      "enumType": "string",
      "id": "AbuseCategoryEnum",
      "namespace": "me.abuse"
    },
    "me.abuse.AbuseStatusEnum": {
      "description": "The abuse status",
      "enum": [
        "Answered",
        "Claimed",
        "Closed",
        "Escalated",
        "Open",
        "Paused",
        "Reopened",
        "Updated",
        "WaitingAnswer"
      ],
      "enumType": "string",
      "id": "AbuseStatusEnum",
      "namespace": "me.abuse"
    },
    "me.billing.group.BillingGroup": {
      "description": "Missing description",
      "id": "BillingGroup",
      "namespace": "me.billing.group",
      "properties": {
        "contactId": {
          "canBeNull": true,
          "description": "Contact ID from /me/contact",
          "fullType": "long",
          "readOnly": false,
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
        "groupId": {
          "canBeNull": false,
          "description": "Billing group ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Billing group unique name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "paymentMethodId": {
          "canBeNull": true,
          "description": "Payment method ID associated to the billing group",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "me.billing.group.Service": {
      "description": "Missing description",
      "id": "Service",
      "namespace": "me.billing.group",
      "properties": {
        "groupId": {
          "canBeNull": false,
          "description": "Billing group ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "serviceId": {
          "canBeNull": false,
          "description": "Service ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "me.billing.group.service.Create": {
      "description": "Missing description",
      "id": "Create",
      "namespace": "me.billing.group.service",
      "properties": {
        "serviceId": {
          "canBeNull": false,
          "description": "A service ID to associate",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "me.billing.purchaseOrder.Creation": {
      "description": "Purchase order creation payload",
      "id": "Creation",
      "namespace": "me.billing.purchaseOrder",
      "properties": {
        "active": {
          "canBeNull": true,
          "description": "Active",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "billingGroupId": {
          "canBeNull": true,
          "description": "Billing Group identifier",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "description": {
          "canBeNull": true,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "endDate": {
          "canBeNull": true,
          "description": "End date",
          "fullType": "date",
          "readOnly": false,
          "required": false,
          "type": "date"
        },
        "reference": {
          "canBeNull": false,
          "description": "Reference",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Start date",
          "fullType": "date",
          "readOnly": false,
          "required": true,
          "type": "date"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of a purchase order",
          "fullType": "me.billing.purchaseOrder.PurchaseOrderTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "me.billing.purchaseOrder.PurchaseOrderTypeEnum"
        }
      }
    },
    "me.billing.purchaseOrder.PurchaseOrder": {
      "description": "Purchase Order",
      "id": "PurchaseOrder",
      "namespace": "me.billing.purchaseOrder",
      "properties": {
        "active": {
          "canBeNull": true,
          "description": "Active",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "billingGroupId": {
          "canBeNull": true,
          "description": "Billing Group identifier",
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
        "description": {
          "canBeNull": true,
          "description": "Description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "endDate": {
          "canBeNull": true,
          "description": "End date",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "id": {
          "canBeNull": false,
          "description": "Purchase Order identifier",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "reference": {
          "canBeNull": false,
          "description": "Reference",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Start date",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "status": {
          "canBeNull": false,
          "description": "Status",
          "fullType": "me.billing.purchaseOrder.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "me.billing.purchaseOrder.StatusEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of a purchase order",
          "fullType": "me.billing.purchaseOrder.PurchaseOrderTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "me.billing.purchaseOrder.PurchaseOrderTypeEnum"
        }
      }
    },
    "me.billing.purchaseOrder.PurchaseOrderTypeEnum": {
      "description": "Type of a purchase order",
      "enum": [
        "PURCHASE_ORDER",
        "REFERENCE_ORDER"
      ],
      "enumType": "string",
      "id": "PurchaseOrderTypeEnum",
      "namespace": "me.billing.purchaseOrder"
    },
    "me.billing.purchaseOrder.StatusEnum": {
      "description": "Status of the Purchase Order",
      "enum": [
        "CREATED",
        "DELETED"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "me.billing.purchaseOrder"
    },
    "me.billing.purchaseOrder.Update": {
      "description": "Purchase order update payload",
      "id": "Update",
      "namespace": "me.billing.purchaseOrder",
      "properties": {
        "active": {
          "canBeNull": true,
          "description": "Active",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "billingGroupId": {
          "canBeNull": true,
          "description": "Billing group identifier",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "description": {
          "canBeNull": true,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "endDate": {
          "canBeNull": true,
          "description": "End date",
          "fullType": "date",
          "readOnly": false,
          "required": false,
          "type": "date"
        },
        "reference": {
          "canBeNull": true,
          "description": "Reference",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "startDate": {
          "canBeNull": true,
          "description": "Start date",
          "fullType": "date",
          "readOnly": false,
          "required": false,
          "type": "date"
        },
        "type": {
          "canBeNull": true,
          "description": "Type of a purchase order",
          "fullType": "me.billing.purchaseOrder.PurchaseOrderTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "me.billing.purchaseOrder.PurchaseOrderTypeEnum"
        }
      }
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
          "readOnly": false,
          "required": true,
          "type": "boolean"
        }
      }
    },
    "me.consumption.Price": {
      "description": "Price with currency and amount in micro-cents",
      "id": "Price",
      "namespace": "me.consumption",
      "properties": {
        "currencyCode": {
          "canBeNull": false,
          "fullType": "order.CurrencyCodeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.CurrencyCodeEnum"
        },
        "text": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "valueInUcents": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "me.consumption.Transaction": {
      "description": "List of consumptions recorded in a range",
      "id": "Transaction",
      "namespace": "me.consumption",
      "properties": {
        "beginDate": {
          "canBeNull": false,
          "description": "Begin date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "creationDate": {
          "canBeNull": true,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "elements": {
          "canBeNull": false,
          "description": "List of product plan code consumption",
          "fullType": "me.consumption.transaction.Element[]",
          "readOnly": true,
          "required": false,
          "type": "me.consumption.transaction.Element[]"
        },
        "endDate": {
          "canBeNull": true,
          "description": "End date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": true,
          "description": "Transaction ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastUpdate": {
          "canBeNull": true,
          "description": "Last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "price": {
          "canBeNull": false,
          "description": "Consumption amount price",
          "fullType": "me.consumption.Price",
          "readOnly": true,
          "required": false,
          "type": "me.consumption.Price"
        },
        "serviceId": {
          "canBeNull": false,
          "description": "Service ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "me.consumption.transaction.Element": {
      "description": "Element of consumption for resource",
      "id": "Element",
      "namespace": "me.consumption.transaction",
      "properties": {
        "details": {
          "canBeNull": false,
          "description": "List of consumption details for this planCode",
          "fullType": "me.consumption.transaction.element.Detail[]",
          "readOnly": true,
          "required": false,
          "type": "me.consumption.transaction.element.Detail[]"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Identifier of the offer",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "planFamily": {
          "canBeNull": false,
          "description": "Family of the offer",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "price": {
          "canBeNull": false,
          "description": "Consumption amount price",
          "fullType": "me.consumption.Price",
          "readOnly": true,
          "required": false,
          "type": "me.consumption.Price"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Consumption quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "me.consumption.transaction.element.Detail": {
      "description": "Element of consumption for resource",
      "id": "Detail",
      "namespace": "me.consumption.transaction.element",
      "properties": {
        "price": {
          "canBeNull": false,
          "description": "Consumption amount price",
          "fullType": "me.consumption.Price",
          "readOnly": true,
          "required": false,
          "type": "me.consumption.Price"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Consumption quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "unique_id": {
          "canBeNull": true,
          "description": "Unique ID associated to one service element",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "me.contact.Address": {
      "description": "Representation of a Contact",
      "id": "Address",
      "namespace": "me.contact",
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
          "description": "Other details",
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
          "canBeNull": true,
          "description": "Zipcode",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "me.contact.Contact": {
      "description": "Contact definition",
      "id": "Contact",
      "namespace": "me.contact",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "Address for this contact",
          "fullType": "me.contact.Address",
          "readOnly": false,
          "required": false,
          "type": "me.contact.Address"
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
    "me.contact.FieldInformation": {
      "description": "Extras information about a field",
      "id": "FieldInformation",
      "namespace": "me.contact",
      "properties": {
        "fieldName": {
          "canBeNull": false,
          "description": "Name of the field concerned by restrictions",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "mandatory": {
          "canBeNull": false,
          "description": "Indicates if the field is mandatory when editing",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "readOnly": {
          "canBeNull": false,
          "description": "Indicates if the field can't be edited",
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
        "RUPAY",
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
        "BANK_TRANSFER",
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
    "me.paymentMethod.Creation": {
      "description": "Create payment method",
      "id": "Creation",
      "namespace": "me.paymentMethod",
      "properties": {
        "billingContactId": {
          "canBeNull": true,
          "description": "Billing contact ID",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "default": {
          "canBeNull": true,
          "description": "Is this payment method set as the default one",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": true,
          "description": "Customer personalized description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "paymentType": {
          "canBeNull": false,
          "description": "Payment type",
          "fullType": "me.paymentMethod.PaymentTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "me.paymentMethod.PaymentTypeEnum"
        },
        "urlCallback": {
          "canBeNull": true,
          "description": "Payment url callback",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "me.paymentMethod.PaymentMethod": {
      "description": "Available payment methods",
      "id": "PaymentMethod",
      "namespace": "me.paymentMethod",
      "properties": {
        "billingContactId": {
          "canBeNull": false,
          "description": "Billing contact ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of the payment method",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "default": {
          "canBeNull": true,
          "description": "Is this payment method set as the default one",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": true,
          "description": "Customer personalized description",
          "fullType": "string",
          "readOnly": false,
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
        "paymentSubType": {
          "canBeNull": true,
          "description": "Payment sub type",
          "fullType": "me.paymentMethod.PaymentSubTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "me.paymentMethod.PaymentSubTypeEnum"
        },
        "paymentType": {
          "canBeNull": false,
          "description": "Payment type",
          "fullType": "me.paymentMethod.PaymentTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "me.paymentMethod.PaymentTypeEnum"
        },
        "publicLabel": {
          "canBeNull": false,
          "description": "Public payment method label",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Payment method status",
          "fullType": "me.paymentMethod.PaymentMethodStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "me.paymentMethod.PaymentMethodStatusEnum"
        }
      }
    },
    "me.paymentMethod.PaymentMethodStatusEnum": {
      "description": "Payment method status enum",
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
        "REPLACED",
        "VALID",
        "VALID_FOR_CREDIT"
      ],
      "enumType": "string",
      "id": "PaymentMethodStatusEnum",
      "namespace": "me.paymentMethod"
    },
    "me.paymentMethod.PaymentSubTypeEnum": {
      "description": "List of payment sub type enum",
      "enum": [
        "AMERICAN_EXPRESS",
        "CARTE_BANCAIRE",
        "MASTERCARD",
        "VISA"
      ],
      "enumType": "string",
      "id": "PaymentSubTypeEnum",
      "namespace": "me.paymentMethod"
    },
    "me.paymentMethod.PaymentTypeEnum": {
      "description": "List of payment type enum",
      "enum": [
        "BANK_ACCOUNT",
        "CREDIT_CARD",
        "CURRENT_ACCOUNT",
        "DEFERRED_PAYMENT_ACCOUNT",
        "ENTERPRISE",
        "INTERNAL_TRUSTED_ACCOUNT",
        "PAYPAL"
      ],
      "enumType": "string",
      "id": "PaymentTypeEnum",
      "namespace": "me.paymentMethod"
    },
    "me.paymentMethod.Validation": {
      "description": "A validation required to add a payment mean",
      "id": "Validation",
      "namespace": "me.paymentMethod",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Payment Method ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "submitUrl": {
          "canBeNull": true,
          "description": "Submit URL",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": "Return URL",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "validationType": {
          "canBeNull": false,
          "description": "Validation type",
          "fullType": "me.paymentMethod.ValidationTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "me.paymentMethod.ValidationTypeEnum"
        }
      }
    },
    "me.paymentMethod.ValidationTypeEnum": {
      "description": "All the validation you may have to do",
      "enum": [
        "creditAccount",
        "documentToSend",
        "simpleValidation"
      ],
      "enumType": "string",
      "id": "ValidationTypeEnum",
      "namespace": "me.paymentMethod"
    },
    "me.repricing.Service": {
      "description": "Description of a service being repricing",
      "id": "Service",
      "namespace": "me.repricing",
      "properties": {
        "addons": {
          "canBeNull": false,
          "description": "Addons of the Service",
          "fullType": "me.repricing.Service[]",
          "readOnly": true,
          "required": false,
          "type": "me.repricing.Service[]"
        },
        "applicationDate": {
          "canBeNull": false,
          "description": "Date of application of the repricing",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the Service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "displayName": {
          "canBeNull": false,
          "description": "Custom name for the Service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "duration": {
          "canBeNull": false,
          "description": "Duration for the price described in the payload (ISO8601)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "priceAfterWithTax": {
          "canBeNull": false,
          "description": "Price after repricing, tax included",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "priceAfterWithoutTax": {
          "canBeNull": false,
          "description": "Price after repricing, tax excluded",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "priceBeforeWithTax": {
          "canBeNull": false,
          "description": "Price before repricing, tax included",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "priceBeforeWithoutTax": {
          "canBeNull": false,
          "description": "Price before repricing, tax excluded",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "route": {
          "canBeNull": true,
          "description": "Route",
          "fullType": "services.expanded.Route",
          "readOnly": true,
          "required": false,
          "type": "services.expanded.Route"
        },
        "serviceId": {
          "canBeNull": false,
          "description": "Service ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Identifier of the service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "totalPriceAfterWithTax": {
          "canBeNull": false,
          "description": "Total price (addons included) after repricing, tax included",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "totalPriceAfterWithoutTax": {
          "canBeNull": false,
          "description": "Total price (addons included) after repricing, tax excluded",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "totalPriceBeforeWithTax": {
          "canBeNull": false,
          "description": "Total price (addons included) before repricing, tax included",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "totalPriceBeforeWithoutTax": {
          "canBeNull": false,
          "description": "Total price (addons included) before repricing, tax excluded",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "me.tag.AvailableTag": {
      "description": "Available tag configuration object for creation",
      "id": "AvailableTag",
      "namespace": "me.tag",
      "properties": {
        "keys": {
          "canBeNull": false,
          "description": "Tag configuration keys",
          "fullType": "me.tag.TagKey[]",
          "readOnly": true,
          "required": false,
          "type": "me.tag.TagKey[]"
        },
        "name": {
          "canBeNull": false,
          "description": "Tag name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "me.tag.Creation": {
      "description": "Tag creation payload",
      "id": "Creation",
      "namespace": "me.tag",
      "properties": {
        "reason": {
          "canBeNull": true,
          "description": "Reason",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "tagName": {
          "canBeNull": false,
          "description": "Tag name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "me.tag.StatusEnum": {
      "description": "Tag status",
      "enum": [
        "CREATED",
        "CREATING",
        "DELETED",
        "DELETING",
        "ERROR",
        "MODERATING",
        "REFUSED",
        "REFUSING",
        "REVOCATING",
        "WAIT_MODERATION",
        "WAIT_REVOCATION"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "me.tag"
    },
    "me.tag.Tag": {
      "description": "Tag",
      "id": "Tag",
      "namespace": "me.tag",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "customerCode": {
          "canBeNull": false,
          "description": "Customer code",
          "fullType": "string",
          "readOnly": true,
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
        "extra": {
          "canBeNull": true,
          "description": "Extra data",
          "fullType": "me.tag.TagExtra",
          "readOnly": true,
          "required": false,
          "type": "me.tag.TagExtra"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Tag Status",
          "fullType": "me.tag.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "me.tag.StatusEnum"
        },
        "tag": {
          "canBeNull": false,
          "description": "Tag name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "me.tag.TagExtra": {
      "description": "Tag Extra",
      "id": "TagExtra",
      "namespace": "me.tag",
      "properties": {
        "exemption": {
          "canBeNull": true,
          "description": "Tax exemption",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "me.tag.TagKey": {
      "description": "Tag configuration key",
      "id": "TagKey",
      "namespace": "me.tag",
      "properties": {
        "enum": {
          "canBeNull": true,
          "description": "Enum values",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "key": {
          "canBeNull": false,
          "description": "Tag key name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "maxLength": {
          "canBeNull": true,
          "description": "Maximum length for a text",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minValue": {
          "canBeNull": true,
          "description": "Minimum value for a number",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "optional": {
          "canBeNull": false,
          "description": "Tag key optional",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "pattern": {
          "canBeNull": true,
          "description": "Tag value regex pattern",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Tag key type",
          "fullType": "me.tag.tagKey.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "me.tag.tagKey.TypeEnum"
        }
      }
    },
    "me.tag.tagKey.TypeEnum": {
      "description": "Tag key type",
      "enum": [
        "ARRAY",
        "DATE",
        "ENUM",
        "INTEGER",
        "TEXT",
        "VARCHAR"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "me.tag.tagKey"
    },
    "nichandle.BillingCapacities": {
      "description": "Internal customer billing capacities for customer control panel",
      "id": "BillingCapacities",
      "namespace": "nichandle",
      "properties": {
        "canUseDebtSystem": {
          "canBeNull": false,
          "description": "Indicates if the debt system has been enabled on the customer account",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canUsePostalMailForInvoices": {
          "canBeNull": false,
          "description": "Indicates customer's ability to use postal mailing for invoices",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "requiredPaymentMethod": {
          "canBeNull": false,
          "description": "Indicates the mandatory nature of having a valid payment method",
          "readOnly": false,
          "required": false,
          "type": "nichandle.RequiredPaymentMethodEnum"
        }
      }
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
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "symbol": {
          "canBeNull": false,
          "description": "Currency symbol",
          "fullType": "string",
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
    "nichandle.Nichandle": {
      "description": "Details about your OVH identifier",
      "id": "Nichandle",
      "namespace": "nichandle",
      "properties": {
        "address": {
          "canBeNull": true,
          "description": "Address of nichandle",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "area": {
          "canBeNull": true,
          "description": "Area of nichandle",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "birthCity": {
          "canBeNull": true,
          "description": "City of birth",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "birthDay": {
          "canBeNull": true,
          "description": "Birth date",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "city": {
          "canBeNull": true,
          "description": "City of nichandle",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "companyNationalIdentificationNumber": {
          "canBeNull": true,
          "description": "Company National Identification Number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "complementaryAddress": {
          "canBeNull": true,
          "description": "Complementary Address",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "corporationType": {
          "canBeNull": true,
          "description": "Corporation type",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "country": {
          "canBeNull": false,
          "description": "Customer country",
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
          "description": "Email address",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "fax": {
          "canBeNull": true,
          "description": "Fax number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "firstname": {
          "canBeNull": true,
          "description": "First name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "italianSDI": {
          "canBeNull": true,
          "description": "Italian SDI",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "kycValidated": {
          "canBeNull": true,
          "description": "KYC validation state",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "language": {
          "canBeNull": true,
          "description": "Language",
          "fullType": "nichandle.LanguageEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.LanguageEnum"
        },
        "legalform": {
          "canBeNull": false,
          "description": "Customer legal form",
          "fullType": "nichandle.LegalFormEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.LegalFormEnum"
        },
        "name": {
          "canBeNull": true,
          "description": "Customer name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "nationalIdentificationNumber": {
          "canBeNull": true,
          "description": "National Identification Number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "nichandle": {
          "canBeNull": false,
          "description": "Customer identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "organisation": {
          "canBeNull": true,
          "description": "Name of organisation",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ovhCompany": {
          "canBeNull": false,
          "description": "OVH company",
          "fullType": "nichandle.OvhCompanyEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.OvhCompanyEnum"
        },
        "ovhSubsidiary": {
          "canBeNull": false,
          "description": "OVH subsidiary",
          "fullType": "nichandle.OvhSubsidiaryEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.OvhSubsidiaryEnum"
        },
        "phone": {
          "canBeNull": true,
          "description": "Phone number",
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
        "phoneType": {
          "canBeNull": true,
          "description": "Type of phone(mobile, landline)",
          "fullType": "nichandle.PhoneTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.PhoneTypeEnum"
        },
        "purposeOfPurchase": {
          "canBeNull": true,
          "description": "Customer purpose of purchase",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "sex": {
          "canBeNull": true,
          "description": "Gender",
          "fullType": "nichandle.GenderEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.GenderEnum"
        },
        "spareEmail": {
          "canBeNull": true,
          "description": "Spare email",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Nichandle state",
          "fullType": "nichandle.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.StateEnum"
        },
        "vat": {
          "canBeNull": true,
          "description": "VAT number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zip": {
          "canBeNull": true,
          "description": "Zipcode",
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
    "nichandle.PhoneTypeEnum": {
      "description": "All phone type a person can choose",
      "enum": [
        "landline",
        "mobile"
      ],
      "enumType": "string",
      "id": "PhoneTypeEnum",
      "namespace": "nichandle"
    },
    "nichandle.RequiredPaymentMethodEnum": {
      "description": "Indicates the mandatory nature of having a valid payment method",
      "enum": [
        "mandatoryForAutorenew",
        "mandatoryForPostpaid",
        "notMandatory"
      ],
      "enumType": "string",
      "id": "RequiredPaymentMethodEnum",
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
    "nichandle.VipStatus": {
      "description": "VIP Status by Universe",
      "id": "VipStatus",
      "namespace": "nichandle",
      "properties": {
        "cloud": {
          "canBeNull": false,
          "description": "Is account VIP for Cloud Universe",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "dedicated": {
          "canBeNull": false,
          "description": "Is account VIP for Dedicated Universe",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "telecom": {
          "canBeNull": false,
          "description": "Is account VIP for Telecom Universe",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "web": {
          "canBeNull": false,
          "description": "Is account VIP for Web Universe",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
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
        "challenge": {
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
        "rpId": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "rpName": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "userDisplayName": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "userId": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "userName": {
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
          "readOnly": true,
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
    "oauth2.ClientFlowEnum": {
      "description": "oAuth2 Flow",
      "enum": [
        "AUTHORIZATION_CODE",
        "CLIENT_CREDENTIALS"
      ],
      "enumType": "string",
      "id": "ClientFlowEnum",
      "namespace": "oauth2"
    },
    "oauth2.client": {
      "description": "An oAuth2 Client",
      "id": "client",
      "namespace": "oauth2",
      "properties": {
        "callbackUrls": {
          "canBeNull": true,
          "description": "allowed callback urls",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "clientId": {
          "canBeNull": false,
          "description": "client's client_id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "client's creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "client's description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "flow": {
          "canBeNull": false,
          "description": "oAuth2's flow",
          "fullType": "oauth2.ClientFlowEnum",
          "readOnly": true,
          "required": false,
          "type": "oauth2.ClientFlowEnum"
        },
        "identity": {
          "canBeNull": true,
          "description": "associated IAM identity",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "client's name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "oauth2.clientRequest": {
      "description": "An oAuth2 Client Request",
      "id": "clientRequest",
      "namespace": "oauth2",
      "properties": {
        "callbackUrls": {
          "canBeNull": false,
          "description": "allowed callback urls",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "description": {
          "canBeNull": false,
          "description": "client's description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "flow": {
          "canBeNull": false,
          "description": "oAuth2's flow",
          "fullType": "oauth2.ClientFlowEnum",
          "readOnly": false,
          "required": true,
          "type": "oauth2.ClientFlowEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "client's name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "oauth2.clientSecret": {
      "description": "An oAuth2 Client Secret",
      "id": "clientSecret",
      "namespace": "oauth2",
      "properties": {
        "clientId": {
          "canBeNull": false,
          "description": "client's client_id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "clientSecret": {
          "canBeNull": false,
          "description": "client's client_secret",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
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
        "priceInUcents": {
          "canBeNull": true,
          "description": "Price in microcents",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
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
    "payment.method.AvailablePaymentMethod": {
      "description": "Available payment methods",
      "id": "AvailablePaymentMethod",
      "namespace": "payment.method",
      "properties": {
        "formSessionId": {
          "canBeNull": true,
          "description": "Payment method session identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "icon": {
          "canBeNull": false,
          "description": "Payment icon",
          "fullType": "payment.method.Icon",
          "readOnly": true,
          "required": false,
          "type": "payment.method.Icon"
        },
        "integration": {
          "canBeNull": false,
          "description": "Payment method integration type",
          "fullType": "payment.method.IntegrationTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "payment.method.IntegrationTypeEnum"
        },
        "merchantId": {
          "canBeNull": true,
          "description": "Payment method merchant identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "oneshot": {
          "canBeNull": false,
          "description": "Payment method type is possible to pay in oneshot mode ?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "organizationId": {
          "canBeNull": true,
          "description": "Payment method organization identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "paymentSubType": {
          "canBeNull": true,
          "description": "Payment method subtype",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
          "description": "Payment method type is registerable ?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "registerableWithTransaction": {
          "canBeNull": false,
          "description": "Payment method type is registerable with the possibility to pay in same time an order ?",
          "fullType": "boolean",
          "readOnly": true,
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
    "payment.method.IntegrationTypeEnum": {
      "description": "Payment method integration type",
      "enum": [
        "BANK_TRANSFER",
        "COMPONENT",
        "DONE",
        "IFRAME_VANTIV",
        "IN_CONTEXT",
        "NONE",
        "POST_FORM",
        "REDIRECT"
      ],
      "enumType": "string",
      "id": "IntegrationTypeEnum",
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
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": true,
          "description": "Custom customer description",
          "fullType": "string",
          "readOnly": true,
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
          "description": "Payment icon",
          "fullType": "payment.method.Icon",
          "readOnly": true,
          "required": false,
          "type": "payment.method.Icon"
        },
        "integration": {
          "canBeNull": false,
          "description": "Payment method integration type",
          "fullType": "payment.method.IntegrationTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "payment.method.IntegrationTypeEnum"
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
          "canBeNull": true,
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
          "canBeNull": false,
          "description": "Payment method sub-type",
          "fullType": "payment.method.SubTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "payment.method.SubTypeEnum"
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
          "fullType": "payment.method.StatusEnum",
          "readOnly": true,
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
        "RUPAY",
        "VISA"
      ],
      "enumType": "string",
      "id": "SubTypeEnum",
      "namespace": "payment.method"
    },
    "service.Operation": {
      "description": "Service operation",
      "id": "Operation",
      "namespace": "service",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Operation ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "resource": {
          "canBeNull": false,
          "description": "Resource service information",
          "fullType": "service.Resource",
          "readOnly": true,
          "required": false,
          "type": "service.Resource"
        },
        "status": {
          "canBeNull": false,
          "description": "Operation type",
          "fullType": "service.OperationStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "service.OperationStatusEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "Operation type",
          "fullType": "service.OperationTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "service.OperationTypeEnum"
        }
      }
    },
    "service.OperationStatusEnum": {
      "description": "Operation type",
      "enum": [
        "cancelled",
        "delayed",
        "doing",
        "done",
        "error",
        "scheduled",
        "todo",
        "waiting"
      ],
      "enumType": "string",
      "id": "OperationStatusEnum",
      "namespace": "service"
    },
    "service.OperationTypeEnum": {
      "description": "Operation type",
      "enum": [
        "installation",
        "upgrade"
      ],
      "enumType": "string",
      "id": "OperationTypeEnum",
      "namespace": "service"
    },
    "service.Resource": {
      "description": "Resource service information",
      "id": "Resource",
      "namespace": "service",
      "properties": {
        "displayName": {
          "canBeNull": false,
          "description": "Custom display name of the service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Name of the service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Possible resource states",
          "fullType": "service.ResourceStateEnum",
          "readOnly": true,
          "required": false,
          "type": "service.ResourceStateEnum"
        }
      }
    },
    "service.ResourceStateEnum": {
      "description": "Possible resource states",
      "enum": [
        "deleted",
        "deleting",
        "ok",
        "opening",
        "suspended",
        "suspending",
        "toDelete",
        "toOpen",
        "toSuspend"
      ],
      "enumType": "string",
      "id": "ResourceStateEnum",
      "namespace": "service"
    },
    "services.expanded.Route": {
      "description": "Route of the service",
      "id": "Route",
      "namespace": "services.expanded",
      "properties": {
        "path": {
          "canBeNull": true,
          "description": "Path to use in API",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": true,
          "description": "Path with variables applied",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "vars": {
          "canBeNull": false,
          "description": "Variables to use in the path",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "readOnly": true,
          "required": false,
          "type": "complexType.SafeKeyValue<string>[]"
        }
      }
    }
  },
  "resourcePath": "/me"
}