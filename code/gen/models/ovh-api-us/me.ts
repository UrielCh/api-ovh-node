import {Schema} from '../../src/schema';

// imported from https://api.us.ovhcloud.com:443/1.0/me.json

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
          "responseType": "nichandle.IpRestriction"
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
      "description": "challenge operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get an U2F Challenge",
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
      "description": "List of contracts signed between you and OVH",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of contracts signed between you and OVH",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "agreements.AgreementStateEnum",
              "description": "Filter the value of agreed property",
              "fullType": "agreements.AgreementStateEnum",
              "name": "agreed",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of contractId property",
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
      "description": "Get this object properties",
      "operations": [
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
              "description": "Id of the contract agreement",
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
      "description": "Accept this contract",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Accept this contract",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the contract agreement",
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
      "description": "Get this object properties",
      "operations": [
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
              "description": "Id of the contract agreement",
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
      "description": "List the api.Application objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of your Api Application",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        }
      ],
      "path": "/me/api/application"
    },
    {
      "description": "API Application",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove this application. It will revoke all credential belonging to this application.",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
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
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "applicationId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "api.Application"
        }
      ],
      "path": "/me/api/application/{applicationId}"
    },
    {
      "description": "List the api.Credential objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of your Api Credentials",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Filter the value of applicationId property (like)",
              "fullType": "long",
              "name": "applicationId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "auth.CredentialStateEnum",
              "description": "Filter the value of status property (=)",
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
      "description": "API Credential",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove this credential",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
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
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "credentialId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "api.Credential"
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
              "dataType": "api.Credential",
              "description": "New object properties",
              "fullType": "api.Credential",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
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
      "description": "API Application",
      "operations": [
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
              "description": "",
              "fullType": "long",
              "name": "credentialId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "api.Application"
        }
      ],
      "path": "/me/api/credential/{credentialId}/application"
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
      "description": "Get all certificates of the account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all certificates of the account",
          "httpMethod": "GET",
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
      "description": "List all consent campaign available",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all consent campaign available",
          "httpMethod": "GET",
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
          "description": "Get on-going consumptions for all services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "me.consumption.Transaction[]"
        }
      ],
      "path": "/me/consumption/usage/current"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get forecasted consumptions for all services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "me.consumption.Transaction[]"
        }
      ],
      "path": "/me/consumption/usage/forecast"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get list of transactions between two dates",
          "httpMethod": "GET",
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
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve all contact that you created",
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
          "description": "Create a new contact",
          "httpMethod": "POST",
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
      "description": "Route for getting visitor's country and continent",
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
          "responseType": "geolocation.ContinentCountryLocation"
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
      "description": "Users linked to this account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve all users of this account",
          "httpMethod": "GET",
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
      "description": "List the dedicated.installationTemplate.Templates objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Your customized operating system installation templates",
          "httpMethod": "GET",
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
          "description": "remove this template",
          "httpMethod": "DELETE",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "name of this partitioning scheme",
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
          "description": "remove this scheme of partition",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "name of this partitioning scheme",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "name of this partitioning scheme",
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
              "description": "name of this partitioning scheme",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "name of this partitioning scheme",
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
              "description": "name of this partitioning scheme",
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
              "description": "name of this partitioning scheme",
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
              "description": "name of this partitioning scheme",
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
              "description": "name of this partitioning scheme",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "name of this partitioning scheme",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.TemplateOsFileSystemEnum",
              "description": "Partition filesytem",
              "fullType": "dedicated.TemplateOsFileSystemEnum",
              "name": "filesystem",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "partition mount point",
              "fullType": "string",
              "name": "mountpoint",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "raid",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "size of partition in Mb, 0 => rest of the space",
              "fullType": "long",
              "name": "size",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "step",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.TemplatePartitionTypeEnum",
              "description": "",
              "fullType": "dedicated.TemplatePartitionTypeEnum",
              "name": "type",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The volume name needed for proxmox distribution",
              "fullType": "string",
              "name": "volumeName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "name of this partitioning scheme",
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
          "description": "remove this partition",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "partition mount point",
              "fullType": "string",
              "name": "mountpoint",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "name of this partitioning scheme",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "partition mount point",
              "fullType": "string",
              "name": "mountpoint",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "name of this partitioning scheme",
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
              "description": "partition mount point",
              "fullType": "string",
              "name": "mountpoint",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "name of this partitioning scheme",
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
      "description": "Retrieve order list",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve order list",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        }
      ],
      "path": "/me/order"
    },
    {
      "description": "Retrieve an order",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve an order",
          "httpMethod": "GET",
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
      "description": "Return data about the object associated to the order",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return data about the object associated to the order",
          "httpMethod": "GET",
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
      "description": "List of payment methods you can use to pay this order",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of payment methods you can use to pay this order",
          "httpMethod": "GET",
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
      "description": "List of registered payment mean you can use to pay this order",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-02-01T00:00:00+00:00",
            "deprecatedDate": "2017-12-28T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/me/order/{orderId}/availablePaymentMethod",
            "value": "DEPRECATED"
          },
          "description": "List of registered payment mean you can use to pay this order",
          "httpMethod": "GET",
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
      "description": "Interact with credit balances linked to this Order",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List credit balances applied on this Order",
          "httpMethod": "GET",
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
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Use a credit balance on this Order",
          "httpMethod": "POST",
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
      "description": "Interact with a credit balance linked to this Order",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Remove a credit balance from this Order",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Balance name used",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Balance name used",
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
      "description": "Retrieve details of an order",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve details of an order",
          "httpMethod": "GET",
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
      "description": "Retrieve an order detail",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve an order detail",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Order Detail ID",
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
      "description": "Retrieve an order detail extensions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve an order detail extensions",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Order Detail ID",
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
      "description": "Retrieve a list of operations linked to this order detail",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve a list of operations linked to this order detail",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Order Detail ID",
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
      "description": "Retrieve informations about an Operation linked to the order detail",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve a list of operations linked to this order detail",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Order Detail ID",
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
      "description": "Return tracking of the order",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Return tracking of the order",
          "httpMethod": "GET",
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
      "description": "Pay this Order",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Pay this Order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.order.AvailablePaymentMethod",
              "description": "The payment method to use",
              "fullType": "billing.order.AvailablePaymentMethod",
              "name": "paymentMethod",
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
      "description": "List of registered payment method you can use to pay this order",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List of registered payment method you can use to pay this order",
          "httpMethod": "GET",
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
      "description": "Pay with an already registered payment mean",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-02-01T00:00:00+00:00",
            "deprecatedDate": "2017-12-28T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/me/order/{orderId}/pay",
            "value": "DEPRECATED"
          },
          "description": "Pay with an already registered payment mean",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.paymentMethod.PaymentTypeEnum",
              "description": "The registered payment mean you want to use",
              "fullType": "billing.paymentMethod.PaymentTypeEnum",
              "name": "paymentMean",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "ID of registered payment mean, mandatory for bankAccount, creditCard and paypal",
              "fullType": "long",
              "name": "paymentMeanId",
              "paramType": "body",
              "required": false
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
      "description": "Request retraction of order",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request retraction of order",
          "httpMethod": "POST",
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
      "description": "Return status of order",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return status of order",
          "httpMethod": "GET",
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
      "description": "Interact with Vouchers linked to this Order",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List vouchers applied on this Order",
          "httpMethod": "GET",
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
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Use a Voucher on this Order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Balance name to use as Voucher",
              "fullType": "string",
              "name": "balanceName",
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
      "description": "Interact with a specific Voucher linked to this Order",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove Voucher from this Order",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Balance name used as Voucher",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Balance name used as Voucher",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve available payment method",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "me.payment.method.AvailablePaymentMethod[]"
        }
      ],
      "path": "/me/payment/availableMethods"
    },
    {
      "description": "Manage payment method",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve payment method ID list",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Payment method type",
              "fullType": "string",
              "name": "paymentType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "me.payment.method.PaymentMethod.Status",
              "description": "Status",
              "fullType": "me.payment.method.PaymentMethod.Status",
              "name": "status",
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
          "description": "Pay an order and register a new payment method if necessary",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "me.payment.method.CallbackUrl",
              "description": "URL's necessary to register",
              "fullType": "me.payment.method.CallbackUrl",
              "name": "callbackUrl",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Is this payment method set as the default one",
              "fullType": "boolean",
              "name": "default",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Customer personalized description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "The ID of one order to pay it",
              "fullType": "long",
              "name": "orderId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Payment type",
              "fullType": "string",
              "name": "paymentType",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Register this payment method if it's possible (by default it's false and do a oneshot transaction)",
              "fullType": "boolean",
              "name": "register",
              "paramType": "body",
              "required": false
            }
          ],
          "responseType": "me.payment.method.Register.ValidationResult"
        }
      ],
      "path": "/me/payment/method"
    },
    {
      "description": "Manage payment method",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Cancel one payment method",
          "httpMethod": "DELETE",
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
          "responseType": "me.payment.method.PaymentMethod"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get one payment method",
          "httpMethod": "GET",
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
          "responseType": "me.payment.method.PaymentMethod"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Edit payment method",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Set this method like default",
              "fullType": "boolean",
              "name": "default",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Customer personalized description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
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
          "responseType": "billing.PaymentMethod"
        }
      ],
      "path": "/me/payment/method/{paymentMethodId}"
    },
    {
      "description": "Challenge your payment method",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Challenge one payment method",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Challenge",
              "fullType": "string",
              "name": "challenge",
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
          "responseType": "me.payment.method.PaymentMethod"
        }
      ],
      "path": "/me/payment/method/{paymentMethodId}/challenge"
    },
    {
      "description": "Finalize one payment method registration",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Finalize one payment method registration",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Expiration month",
              "fullType": "long",
              "name": "expirationMonth",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Expiration year",
              "fullType": "long",
              "name": "expirationYear",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Form Session ID",
              "fullType": "string",
              "name": "formSessionId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Registration ID",
              "fullType": "string",
              "name": "registrationId",
              "paramType": "body",
              "required": false
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
          "responseType": "me.payment.method.PaymentMethod"
        }
      ],
      "path": "/me/payment/method/{paymentMethodId}/finalize"
    },
    {
      "description": "Retrieve payment method transaction ID list",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve associated payment method transaction ID list",
          "httpMethod": "GET",
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
              "dataType": "me.payment.method.Transaction.Status",
              "description": "Transaction status",
              "fullType": "me.payment.method.Transaction.Status",
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
      "description": "Manage payment method transaction",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get associated payment method transaction",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Payment method transaction ID",
              "fullType": "long",
              "name": "transactionId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.payment.method.Transaction"
        }
      ],
      "path": "/me/payment/transaction/{transactionId}"
    },
    {
      "description": "Retrieve payment method list",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve payment method id list",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.paymentMethod.PaymentTypeEnum",
              "description": "Payment type",
              "fullType": "billing.paymentMethod.PaymentTypeEnum",
              "name": "paymentType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "billing.paymentMethod.StatusEnum",
              "description": "Status",
              "fullType": "billing.paymentMethod.StatusEnum",
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
          "description": "Create payment method",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Billing contact id",
              "fullType": "long",
              "name": "billingContactId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Is this payment method set as the default one",
              "fullType": "boolean",
              "name": "default",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Customer personalized description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "billing.paymentMethod.CreatePaymentTypeEnum",
              "description": "Payment type",
              "fullType": "billing.paymentMethod.CreatePaymentTypeEnum",
              "name": "paymentType",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Payment url callback",
              "fullType": "string",
              "name": "urlCallback",
              "paramType": "body",
              "required": false
            }
          ],
          "responseType": "billing.PaymentMeanValidation"
        }
      ],
      "path": "/me/paymentMethod"
    },
    {
      "description": "Manage the payment mean.",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the selected payment mean",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Payment mean id",
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
          "description": "Get one payment method",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Payment mean id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.PaymentMethod"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Edit payment method",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Is this payment method set as the default one",
              "fullType": "boolean",
              "name": "default",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Customer personalized description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Payment mean id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.PaymentMethod"
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
      "description": "List the nichandle.emailChange.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of email change tasks you are involved in",
          "httpMethod": "GET",
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
      "description": "Access rule required for the application",
      "id": "AccessRule",
      "namespace": "auth",
      "properties": {
        "method": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "http.MethodEnum"
        },
        "path": {
          "canBeNull": false,
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
        }
      }
    },
    "billing.ItemDetail.OrderActionEnum": {
      "description": "List of order actions",
      "enum": [
        "consumption",
        "installation",
        "renew",
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
    "billing.PaymentMeanEnum": {
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
      "enumType": "string",
      "id": "PaymentMeanEnum",
      "namespace": "billing"
    },
    "billing.PaymentMeanValidation": {
      "description": "A validation required to add a payment mean",
      "id": "PaymentMeanValidation",
      "namespace": "billing",
      "properties": {
        "id": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "submitUrl": {
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
        },
        "validationType": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "billing.PaymentMeanValidationType"
        }
      }
    },
    "billing.PaymentMeanValidationType": {
      "description": "All the validation you may have to do",
      "enum": [
        "creditAccount",
        "documentToSend",
        "simpleValidation"
      ],
      "enumType": "string",
      "id": "PaymentMeanValidationType",
      "namespace": "billing"
    },
    "billing.PaymentMethod": {
      "description": "Available payment methods",
      "id": "PaymentMethod",
      "namespace": "billing",
      "properties": {
        "billingContactId": {
          "canBeNull": false,
          "description": "Billing contact ID",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of the payment method",
          "readOnly": false,
          "required": false,
          "type": "date"
        },
        "default": {
          "canBeNull": true,
          "description": "Is this payment method set as the default one",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": false,
          "description": "Customer personalized description",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Payment method id",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "paymentSubType": {
          "canBeNull": true,
          "description": "Payment sub type",
          "readOnly": false,
          "required": false,
          "type": "billing.paymentMethod.PaymentSubTypeEnum"
        },
        "paymentType": {
          "canBeNull": false,
          "description": "Payment type",
          "readOnly": false,
          "required": false,
          "type": "billing.paymentMethod.PaymentTypeEnum"
        },
        "publicLabel": {
          "canBeNull": false,
          "description": "Public payment method label",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Payment method status enum",
          "readOnly": false,
          "required": false,
          "type": "billing.paymentMethod.StatusEnum"
        }
      }
    },
    "billing.ReusablePaymentMeanEnum": {
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
    "billing.order.AutomaticPaymentCapacities": {
      "description": "The object containing all capacities about automatic payment methods",
      "id": "AutomaticPaymentCapacities",
      "namespace": "billing.order",
      "properties": {
        "canBePaidAutomatically": {
          "canBeNull": false,
          "description": "Set if the Order can be automatically paid",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "paymentMethodId": {
          "canBeNull": true,
          "description": "Payment method ID to use in order to automatically pay this Order",
          "readOnly": false,
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
          "description": "Payment method type",
          "fullType": "billing.paymentMethod.PaymentTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "billing.paymentMethod.PaymentTypeEnum"
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
    "billing.order.OrderCapacities": {
      "description": "The object containing all capacities about a given order",
      "id": "OrderCapacities",
      "namespace": "billing.order",
      "properties": {
        "payment": {
          "canBeNull": true,
          "description": "Informations about automatic payment capacities",
          "readOnly": false,
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
    "billing.paymentMethod.CreatePaymentTypeEnum": {
      "description": "List of payment type enum possible to create",
      "enum": [
        "BANK_ACCOUNT",
        "CREDIT_CARD",
        "PAYPAL"
      ],
      "enumType": "string",
      "id": "CreatePaymentTypeEnum",
      "namespace": "billing.paymentMethod"
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
    "billing.paymentMethod.PaymentSubTypeEnum": {
      "description": "List of payment sub type enum",
      "enum": [
        "AMERICAN_EXPRESS",
        "MASTERCARD",
        "VISA"
      ],
      "enumType": "string",
      "id": "PaymentSubTypeEnum",
      "namespace": "billing.paymentMethod"
    },
    "billing.paymentMethod.PaymentTypeEnum": {
      "description": "List of payment type enum",
      "enum": [
        "BANK_ACCOUNT",
        "CREDIT_CARD",
        "DEFERRED_PAYMENT_ACCOUNT",
        "ENTERPRISE",
        "INTERNAL_TRUSTED_ACCOUNT",
        "PAYPAL"
      ],
      "enumType": "string",
      "id": "PaymentTypeEnum",
      "namespace": "billing.paymentMethod"
    },
    "billing.paymentMethod.StatusEnum": {
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
      "enumType": "string",
      "id": "StatusEnum",
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
    "coreTypes.ContinentEnum": {
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
      "enumType": "string",
      "id": "ContinentEnum",
      "namespace": "coreTypes"
    },
    "coreTypes.CountryEnum": {
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
      "enumType": "string",
      "id": "CountryEnum",
      "namespace": "coreTypes"
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
    "dedicated.TemplateOsFileSystemEnum": {
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
      "enumType": "string",
      "id": "TemplateOsFileSystemEnum",
      "namespace": "dedicated"
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
        "changeLog": {
          "canBeNull": true,
          "description": "Template change log details",
          "readOnly": false,
          "required": false,
          "type": "text"
        },
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
        "rating": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "long"
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
    "dedicated.TemplateOsTypeEnum": {
      "description": "Os type",
      "enum": [
        "bsd",
        "linux",
        "solaris",
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
        "hosting",
        "other",
        "readyToUse",
        "virtualisation"
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
        "beta": {
          "canBeNull": true,
          "description": "This distribution is new, and although tested and functional, may still display odd behaviour",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "bitFormat": {
          "canBeNull": false,
          "description": "this template  bit format",
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
        "deprecated": {
          "canBeNull": true,
          "description": "is this distribution deprecated",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
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
          "description": "list of all filesystems  available for this template",
          "fullType": "dedicated.TemplateOsFileSystemEnum[]",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TemplateOsFileSystemEnum[]"
        },
        "hardRaidConfiguration": {
          "canBeNull": true,
          "description": "This distribution supports hardware raid configuration through the OVH API",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "lastModification": {
          "canBeNull": true,
          "description": "Date of last modification of the base image",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lvmReady": {
          "canBeNull": true,
          "description": "This distribution supports Logical Volumes (Linux LVM)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
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
        "supportsUEFI": {
          "canBeNull": true,
          "description": "This distribution supports UEFI setup",
          "fullType": "dedicated.server.SupportsUEFIEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.SupportsUEFIEnum"
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
          "description": "name of this partitioning scheme",
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
          "fullType": "dedicated.TemplateOsFileSystemEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsFileSystemEnum"
        },
        "mountpoint": {
          "canBeNull": false,
          "description": "partition mount point",
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
          "description": "raid partition type",
          "fullType": "dedicated.server.PartitionRaidEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.PartitionRaidEnum"
        },
        "size": {
          "canBeNull": false,
          "description": "size of partition in Mb, 0 => rest of the space",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "type": {
          "canBeNull": false,
          "fullType": "dedicated.TemplatePartitionTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplatePartitionTypeEnum"
        },
        "volumeName": {
          "canBeNull": true,
          "description": "The volume name needed for proxmox distribution",
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
    "dedicated.server.PartitionRaidEnum": {
      "description": "partition raid type",
      "enum": [
        "0",
        "1",
        "10",
        "5",
        "6"
      ],
      "enumType": "string",
      "id": "PartitionRaidEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.SupportsUEFIEnum": {
      "description": "supports UEFI setup",
      "enum": [
        "no",
        "only",
        "yes"
      ],
      "enumType": "string",
      "id": "SupportsUEFIEnum",
      "namespace": "dedicated.server"
    },
    "geolocation.ContinentCountryLocation": {
      "description": "Representation of country and continent from visitor IP",
      "id": "ContinentCountryLocation",
      "namespace": "geolocation",
      "properties": {
        "continent": {
          "canBeNull": false,
          "description": "Continent",
          "fullType": "coreTypes.ContinentEnum",
          "readOnly": true,
          "required": false,
          "type": "coreTypes.ContinentEnum"
        },
        "countryCode": {
          "canBeNull": false,
          "description": "Country iso code",
          "fullType": "coreTypes.CountryEnum",
          "readOnly": true,
          "required": false,
          "type": "coreTypes.CountryEnum"
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
    "me.Migration": {
      "description": "Country Migration",
      "id": "Migration",
      "namespace": "me",
      "properties": {
        "from": {
          "canBeNull": false,
          "description": "Billing country to migrate from",
          "fullType": "nichandle.OvhSubsidiaryEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.OvhSubsidiaryEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "Migration Id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Migration status",
          "fullType": "me.migration.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "me.migration.StatusEnum"
        },
        "steps": {
          "canBeNull": true,
          "description": "Migration steps",
          "fullType": "me.migration.Step[]",
          "readOnly": true,
          "required": false,
          "type": "me.migration.Step[]"
        },
        "to": {
          "canBeNull": false,
          "description": "Billing country to migrate to",
          "fullType": "nichandle.OvhSubsidiaryEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.OvhSubsidiaryEnum"
        }
      }
    },
    "me.agreements.AgreementStatusEnum": {
      "description": "State of the agreement",
      "enum": [
        "obsolete",
        "todo",
        "ko",
        "ok"
      ],
      "enumType": "string",
      "id": "AgreementStatusEnum",
      "namespace": "me.agreements"
    },
    "me.agreements.ContractAgreement": {
      "description": "Contract Agreement",
      "id": "ContractAgreement",
      "namespace": "me.agreements",
      "properties": {
        "agreed": {
          "canBeNull": false,
          "description": "State of the agreement",
          "fullType": "me.agreements.AgreementStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "me.agreements.AgreementStatusEnum"
        },
        "contractId": {
          "canBeNull": false,
          "description": "Contract ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "date": {
          "canBeNull": false,
          "description": "Date of creation if the agreement is not signed. Date of signature if the agreement is signed",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Contract Agreement ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
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
      "namespace": "me.consumption.transaction.Element",
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
        "PREPAID_ACCOUNT",
        "VOUCHER",
        "DEPOSIT",
        "BONUS"
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
    "me.migration.Contract": {
      "description": "contract",
      "id": "Contract",
      "namespace": "me.migration",
      "properties": {
        "active": {
          "canBeNull": false,
          "description": "Status",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "date": {
          "canBeNull": false,
          "description": "Date",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "id": {
          "canBeNull": false,
          "description": "ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "pdf": {
          "canBeNull": false,
          "description": "PDF URL",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "text": {
          "canBeNull": false,
          "description": "Text of the contract",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "me.migration.StatusEnum": {
      "description": "Status of the migration",
      "enum": [
        "CANCELED",
        "CHECKED",
        "DOING",
        "MIGRATED",
        "TO_CHECK",
        "TODO"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "me.migration"
    },
    "me.migration.Step": {
      "description": "Country Migration Step",
      "id": "Step",
      "namespace": "me.migration",
      "properties": {
        "contracts": {
          "canBeNull": true,
          "description": "Contracts data",
          "fullType": "me.migration.step.Contracts",
          "readOnly": true,
          "required": false,
          "type": "me.migration.step.Contracts"
        },
        "debt": {
          "canBeNull": true,
          "description": "Debt data",
          "fullType": "me.migration.step.Debt",
          "readOnly": true,
          "required": false,
          "type": "me.migration.step.Debt"
        },
        "name": {
          "canBeNull": false,
          "description": "Migration step name",
          "fullType": "me.migration.step.NameEnum",
          "readOnly": true,
          "required": false,
          "type": "me.migration.step.NameEnum"
        },
        "orders": {
          "canBeNull": true,
          "description": "Orders data",
          "fullType": "me.migration.step.Orders",
          "readOnly": true,
          "required": false,
          "type": "me.migration.step.Orders"
        },
        "status": {
          "canBeNull": false,
          "description": "Billing step status",
          "fullType": "me.migration.step.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "me.migration.step.StatusEnum"
        }
      }
    },
    "me.migration.step.Contracts": {
      "description": "Country Migration step contracts data",
      "id": "Contracts",
      "namespace": "me.migration.step",
      "properties": {
        "agreements": {
          "canBeNull": false,
          "description": "Array of contract agreements to accept",
          "fullType": "me.agreements.ContractAgreement[]",
          "readOnly": true,
          "required": false,
          "type": "me.agreements.ContractAgreement[]"
        }
      }
    },
    "me.migration.step.Debt": {
      "description": "Country Migration step debt data",
      "id": "Debt",
      "namespace": "me.migration.step",
      "properties": {
        "balanceAmount": {
          "canBeNull": true,
          "description": "Balance amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "ovhAccountAmount": {
          "canBeNull": true,
          "description": "OVH Account amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "me.migration.step.NameEnum": {
      "description": "Name of the migration step",
      "enum": [
        "ORDERS",
        "DEBT",
        "NIC",
        "CONTRACTS"
      ],
      "enumType": "string",
      "id": "NameEnum",
      "namespace": "me.migration.step"
    },
    "me.migration.step.Orders": {
      "description": "Country Migration step orders data",
      "id": "Orders",
      "namespace": "me.migration.step",
      "properties": {
        "pendingOperations": {
          "canBeNull": false,
          "description": "Whether there is pending operations",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "pendingPromotions": {
          "canBeNull": false,
          "description": "Whether there is pending promotions",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "pendingSubscriptions": {
          "canBeNull": false,
          "description": "Whether there is pending subscriptions",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "me.migration.step.StatusEnum": {
      "description": "Status of the migration step",
      "enum": [
        "OK",
        "PENDING"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "me.migration.step"
    },
    "me.payment.method.AvailablePaymentMethod": {
      "description": "Available payment method object",
      "id": "AvailablePaymentMethod",
      "namespace": "me.payment.method",
      "properties": {
        "icon": {
          "canBeNull": false,
          "description": "Payment method type icon",
          "fullType": "me.payment.method.Icon",
          "readOnly": false,
          "required": false,
          "type": "me.payment.method.Icon"
        },
        "integration": {
          "canBeNull": false,
          "description": "Payment method integration type",
          "fullType": "payment.method.IntegrationType",
          "readOnly": false,
          "required": false,
          "type": "payment.method.IntegrationType"
        },
        "oneshot": {
          "canBeNull": false,
          "description": "Payment method type is possible to pay in oneshot mode ?",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "paymentType": {
          "canBeNull": false,
          "description": "Payment method type",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "registerable": {
          "canBeNull": false,
          "description": "Payment method type is registerable ?",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "registerableWithTransaction": {
          "canBeNull": false,
          "description": "Payment method type is registerable with the possibility to pay in same time an order ?",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
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
          "required": false,
          "type": "string"
        },
        "error": {
          "canBeNull": false,
          "description": "URL when registration encounters an error",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "failure": {
          "canBeNull": false,
          "description": "URL when registration failed",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "pending": {
          "canBeNull": false,
          "description": "URL when payment method is in validation",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "success": {
          "canBeNull": false,
          "description": "URL when payment method registration success",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "me.payment.method.Icon": {
      "description": "Icon",
      "id": "Icon",
      "namespace": "me.payment.method",
      "properties": {
        "data": {
          "canBeNull": true,
          "description": "Icon in base64",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Icon name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "me.payment.method.PaymentMethod": {
      "description": "Payment method object",
      "id": "PaymentMethod",
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
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "default": {
          "canBeNull": false,
          "description": "Creation date",
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
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "icon": {
          "canBeNull": false,
          "description": "Payment method type icon",
          "fullType": "me.payment.method.Icon",
          "readOnly": false,
          "required": false,
          "type": "me.payment.method.Icon"
        },
        "label": {
          "canBeNull": true,
          "description": "Payment method public label",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "paymentMeanId": {
          "canBeNull": true,
          "description": "Payment mean ID associated to this payment method",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "paymentMethodId": {
          "canBeNull": false,
          "description": "Payment method ID",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "paymentSubType": {
          "canBeNull": true,
          "description": "Payment method sub-type",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "paymentType": {
          "canBeNull": false,
          "description": "Payment method type",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Payment method status",
          "fullType": "me.payment.method.PaymentMethod.Status",
          "readOnly": false,
          "required": false,
          "type": "me.payment.method.PaymentMethod.Status"
        }
      }
    },
    "me.payment.method.PaymentMethod.Status": {
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
      "enumType": "string",
      "id": "Status",
      "namespace": "me.payment.method.PaymentMethod"
    },
    "me.payment.method.Register.ValidationResult": {
      "description": "Register validation payload result",
      "id": "ValidationResult",
      "namespace": "me.payment.method.Register",
      "properties": {
        "formSessionId": {
          "canBeNull": true,
          "description": "Form session ID",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "merchantId": {
          "canBeNull": true,
          "description": "Merchant ID",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organizationId": {
          "canBeNull": true,
          "description": "Organization ID",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "paymentMethodId": {
          "canBeNull": false,
          "description": "Register new payment method ID",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "url": {
          "canBeNull": true,
          "description": "Register validation URL",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "validationType": {
          "canBeNull": false,
          "description": "Register validation type",
          "fullType": "payment.method.IntegrationType",
          "readOnly": false,
          "required": false,
          "type": "payment.method.IntegrationType"
        }
      }
    },
    "me.payment.method.Transaction": {
      "description": "Payment method transaction object",
      "id": "Transaction",
      "namespace": "me.payment.method",
      "properties": {
        "amount": {
          "canBeNull": false,
          "description": "Transaction amount",
          "fullType": "order.Price",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Transaction status",
          "fullType": "me.payment.method.Transaction.Status",
          "readOnly": false,
          "required": false,
          "type": "me.payment.method.Transaction.Status"
        },
        "transactionId": {
          "canBeNull": false,
          "description": "Transaction ID",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "Transaction type",
          "fullType": "me.payment.method.Transaction.Type",
          "readOnly": false,
          "required": false,
          "type": "me.payment.method.Transaction.Type"
        }
      }
    },
    "me.payment.method.Transaction.Status": {
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
      "enumType": "string",
      "id": "Status",
      "namespace": "me.payment.method.Transaction"
    },
    "me.payment.method.Transaction.Type": {
      "description": "Payment transaction type enum",
      "enum": [
        "CREDIT",
        "DEBIT"
      ],
      "enumType": "string",
      "id": "Type",
      "namespace": "me.payment.method.Transaction"
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
        "groupAttributeName": {
          "canBeNull": false,
          "description": "SAML Group attribute name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "idpSigningCertificate": {
          "canBeNull": false,
          "description": "IdP's signing certificate",
          "fullType": "nichandle.Authentication.Certificate",
          "readOnly": true,
          "required": false,
          "type": "nichandle.Authentication.Certificate"
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
    "nichandle.Authentication.RoleEnum": {
      "description": "Permission given on the account",
      "enum": [
        "REGULAR",
        "ADMIN",
        "UNPRIVILEGED"
      ],
      "enumType": "string",
      "id": "RoleEnum",
      "namespace": "nichandle"
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
      "description": "OVH subsidiaries",
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
        "SN",
        "TN",
        "ASIA",
        "AU",
        "CA",
        "QC",
        "SG",
        "WE",
        "WS",
        "US"
      ],
      "enumType": "string",
      "id": "OvhSubsidiaryEnum",
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
    "order.CurrencyCodeEnum": {
      "description": "Currency code",
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
      "enumType": "string",
      "id": "CurrencyCodeEnum",
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
        "oneshot": {
          "canBeNull": false,
          "description": "Payment method type is possible to pay in oneshot mode ?",
          "readOnly": false,
          "required": false,
          "type": "boolean"
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
        }
      }
    },
    "payment.method.IntegrationType": {
      "description": "Payment method integration type",
      "enum": [
        "DONE",
        "IFRAME_VANTIV",
        "IN_CONTEXT",
        "REDIRECT"
      ],
      "enumType": "string",
      "id": "IntegrationType",
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
          "canBeNull": true,
          "description": "Resource delivered",
          "fullType": "service.Resource",
          "readOnly": true,
          "required": false,
          "type": "service.Resource"
        },
        "status": {
          "canBeNull": false,
          "description": "Operation status",
          "fullType": "service.OperationStatus",
          "readOnly": true,
          "required": false,
          "type": "service.OperationStatus"
        },
        "type": {
          "canBeNull": false,
          "description": "Operation type",
          "fullType": "service.OperationType",
          "readOnly": true,
          "required": false,
          "type": "service.OperationType"
        }
      }
    },
    "service.OperationStatus": {
      "description": "Operation type",
      "enum": [
        "todo",
        "doing",
        "done",
        "error",
        "cancelled",
        "waiting",
        "scheduled",
        "delayed"
      ],
      "enumType": "string",
      "id": "OperationStatus",
      "namespace": "service"
    },
    "service.OperationType": {
      "description": "Operation type",
      "enum": [
        "installation",
        "upgrade"
      ],
      "enumType": "string",
      "id": "OperationType",
      "namespace": "service"
    },
    "service.Resource": {
      "description": "Resource service informations",
      "id": "Resource",
      "namespace": "service",
      "properties": {
        "displayName": {
          "canBeNull": false,
          "description": "Custom display name of the service",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Name of the service",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": true,
          "description": "Resource state",
          "readOnly": false,
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
    }
  },
  "resourcePath": "/me"
}