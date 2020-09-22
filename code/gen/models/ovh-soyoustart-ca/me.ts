import {Schema} from '../../src/schema';

// imported from https://ca.api.soyoustart.com:443/1.0/me.json

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
          "resellerOnly": false,
          "responseFullType": "nichandle.Nichandle",
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
              "name": null,
              "paramType": "body",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me"
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
              "description": null,
              "fullType": "string",
              "name": "clientData",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "password",
              "description": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/u2f/{id}/enable"
    },
    {
      "description": "U2F Two-Factor Authentication",
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
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.U2FAccount",
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
              "name": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        },
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/u2f/{id}"
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
              "description": null,
              "fullType": "string",
              "name": "clientData",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "password",
              "description": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/u2f/{id}/validate"
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
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.U2FSignChallenge",
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
              "description": null,
              "fullType": "string",
              "name": "clientData",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "password",
              "description": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/u2f/{id}/disable"
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
          "resellerOnly": false,
          "responseFullType": "long[]",
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
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.U2FRegisterChallenge",
          "responseType": "nichandle.accessRestriction.U2FRegisterChallenge"
        }
      ],
      "path": "/me/accessRestriction/u2f"
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
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.SOTPValidate",
          "responseType": "nichandle.accessRestriction.SOTPValidate"
        }
      ],
      "path": "/me/accessRestriction/backupCode/validate"
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
          "resellerOnly": false,
          "responseFullType": "void",
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/backupCode/enable"
    },
    {
      "description": "SOTP Two-Factor Authentication",
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
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.SOTPAccount",
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
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.SOTPSecret",
          "responseType": "nichandle.accessRestriction.SOTPSecret"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this Two-Factor",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/backupCode"
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
          "resellerOnly": false,
          "responseFullType": "nichandle.IpRestrictionDefaultRule",
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
              "name": null,
              "paramType": "body",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
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
          "resellerOnly": false,
          "responseFullType": "long[]",
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
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.SmsSecret",
          "responseType": "nichandle.accessRestriction.SmsSecret"
        }
      ],
      "path": "/me/accessRestriction/sms"
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/sms/{id}/enable"
    },
    {
      "description": "Sms Two-Factor Authentication",
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
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.SmsAccount",
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
              "name": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        },
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/sms/{id}"
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/sms/{id}/validate"
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
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.SmsCode",
          "responseType": "nichandle.accessRestriction.SmsCode"
        }
      ],
      "path": "/me/accessRestriction/sms/{id}/sendCode"
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/sms/{id}/disable"
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
          "resellerOnly": false,
          "responseFullType": "nichandle.DeveloperModeRestriction",
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
              "name": null,
              "paramType": "body",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/developerMode"
    },
    {
      "description": "List of all IP Restrictions",
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
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.IpRestriction",
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
              "name": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        },
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/ip/{id}"
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
          "resellerOnly": false,
          "responseFullType": "long[]",
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/ip"
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
          "resellerOnly": false,
          "responseFullType": "long[]",
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
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.TOTPSecret",
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
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.TOTPAccount",
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
              "name": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        },
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/totp/{id}"
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/totp/{id}/enable"
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/totp/{id}/disable"
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/totp/{id}/validate"
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
          "resellerOnly": false,
          "responseFullType": "string[]",
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
              "description": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/installationTemplate"
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/installationTemplate/{templateName}/checkIntegrity"
    },
    {
      "description": "Available installation templates",
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
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.installationTemplate.Templates",
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
              "name": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        },
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/installationTemplate/{templateName}"
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
          "resellerOnly": false,
          "responseFullType": "string[]",
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/installationTemplate/{templateName}/partitionScheme"
    },
    {
      "description": " Partitions defined in this partitioning scheme",
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
          "resellerOnly": false,
          "responseFullType": "dedicated.installationTemplate.templatePartitions",
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
              "name": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        },
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}"
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
          "resellerOnly": false,
          "responseFullType": "string[]",
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
              "description": null,
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
              "description": null,
              "fullType": "long",
              "name": "step",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.TemplatePartitionTypeEnum",
              "description": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition"
    },
    {
      "description": "Partitioning schemes available on this template",
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
          "resellerOnly": false,
          "responseFullType": "dedicated.installationTemplate.templatePartitioningSchemes",
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
              "name": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        },
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
          "resellerOnly": false,
          "responseFullType": "void",
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
          "resellerOnly": false,
          "responseFullType": "string[]",
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
          "resellerOnly": false,
          "responseFullType": "void",
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
          "resellerOnly": false,
          "responseFullType": "dedicated.installationTemplate.hardwareRaid",
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
              "name": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        },
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}"
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
          "resellerOnly": false,
          "responseFullType": "geolocation.ContinentCountryLocation",
          "responseType": "geolocation.ContinentCountryLocation"
        }
      ],
      "path": "/me/geolocation"
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
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create new document",
          "httpMethod": "POST",
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
          "resellerOnly": false,
          "responseFullType": "nichandle.document.Document",
          "responseType": "nichandle.document.Document"
        }
      ],
      "path": "/me/document"
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/document/cors"
    },
    {
      "description": "List of documents added on your account",
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
              "description": "Document id",
              "fullType": "string",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.document.Document",
          "responseType": "nichandle.document.Document"
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
              "dataType": "nichandle.document.Document",
              "description": "New object properties",
              "fullType": "nichandle.document.Document",
              "name": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a document",
          "httpMethod": "DELETE",
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/document/{id}"
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
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        }
      ],
      "path": "/me/certificates"
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
          "resellerOnly": false,
          "responseFullType": "me.payment.method.Transaction",
          "responseType": "me.payment.method.Transaction"
        }
      ],
      "path": "/me/payment/transaction/{transactionId}"
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
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        }
      ],
      "path": "/me/payment/transaction"
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
          "resellerOnly": false,
          "responseFullType": "long[]",
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
          "resellerOnly": false,
          "responseFullType": "me.payment.method.Register.ValidationResult",
          "responseType": "me.payment.method.Register.ValidationResult"
        }
      ],
      "path": "/me/payment/method"
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
          "resellerOnly": false,
          "responseFullType": "me.payment.method.PaymentMethod",
          "responseType": "me.payment.method.PaymentMethod"
        }
      ],
      "path": "/me/payment/method/{paymentMethodId}/challenge"
    },
    {
      "description": "Manage payment method",
      "operations": [
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
          "resellerOnly": false,
          "responseFullType": "me.payment.method.PaymentMethod",
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
          "resellerOnly": false,
          "responseFullType": "billing.PaymentMethod",
          "responseType": "billing.PaymentMethod"
        },
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
          "resellerOnly": false,
          "responseFullType": "me.payment.method.PaymentMethod",
          "responseType": "me.payment.method.PaymentMethod"
        }
      ],
      "path": "/me/payment/method/{paymentMethodId}"
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
          "resellerOnly": false,
          "responseFullType": "me.payment.method.PaymentMethod",
          "responseType": "me.payment.method.PaymentMethod"
        }
      ],
      "path": "/me/payment/method/{paymentMethodId}/finalize"
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
          "resellerOnly": false,
          "responseFullType": "me.payment.method.AvailablePaymentMethod[]",
          "responseType": "me.payment.method.AvailablePaymentMethod[]"
        }
      ],
      "path": "/me/payment/availableMethods"
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
          "resellerOnly": false,
          "responseFullType": "nichandle.emailChange.Task",
          "responseType": "nichandle.emailChange.Task"
        }
      ],
      "path": "/me/changeEmail"
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
          "resellerOnly": false,
          "responseFullType": "nichandle.Subscription",
          "responseType": "nichandle.Subscription"
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
              "dataType": "nichandle.Subscription",
              "description": "New object properties",
              "fullType": "nichandle.Subscription",
              "name": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/subscription/{subscriptionType}"
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
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        }
      ],
      "path": "/me/subscription"
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
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "nichandle.NicAutorenewInfos",
          "responseType": "nichandle.NicAutorenewInfos"
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
              "dataType": "nichandle.NicAutorenewInfos",
              "description": "New object properties",
              "fullType": "nichandle.NicAutorenewInfos",
              "name": null,
              "paramType": "body",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Activate auto renew for this nic",
          "httpMethod": "POST",
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/autorenew"
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
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        }
      ],
      "path": "/me/task/contactChange"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/task/contactChange/{id}/resendEmail"
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
              "description": null,
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/task/contactChange/{id}/refuse"
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
              "description": null,
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/task/contactChange/{id}/accept"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.contactChange.Task",
          "responseType": "nichandle.contactChange.Task"
        }
      ],
      "path": "/me/task/contactChange/{id}"
    },
    {
      "description": "List the nichandle.DomainTask objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of domain task",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter the value of domain property (like)",
              "fullType": "string",
              "name": "domain",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "domain.NicOperationFunctionEnum",
              "description": "Filter the value of function property (like)",
              "fullType": "domain.NicOperationFunctionEnum",
              "name": "function",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "domain.OperationStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "domain.OperationStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        }
      ],
      "path": "/me/task/domain"
    },
    {
      "description": "relaunch operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Relaunch the task",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the task",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/task/domain/{id}/relaunch"
    },
    {
      "description": "accelerate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Accelerate the task",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the task",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/task/domain/{id}/accelerate"
    },
    {
      "description": "Domain operation progress",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the task",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.DomainTaskProgressBar",
          "responseType": "nichandle.DomainTaskProgressBar"
        }
      ],
      "path": "/me/task/domain/{id}/progressbar"
    },
    {
      "description": "List the nichandle.DomainTaskArgument objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of arguments",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the task",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        }
      ],
      "path": "/me/task/domain/{id}/argument"
    },
    {
      "description": "Domain operation argument",
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
              "description": "Id of the task",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Key of the argument",
              "fullType": "string",
              "name": "key",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.DomainTaskArgument",
          "responseType": "nichandle.DomainTaskArgument"
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
              "dataType": "nichandle.DomainTaskArgument",
              "description": "New object properties",
              "fullType": "nichandle.DomainTaskArgument",
              "name": null,
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the task",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Key of the argument",
              "fullType": "string",
              "name": "key",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/task/domain/{id}/argument/{key}"
    },
    {
      "description": "cancel operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cancel the task",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the task",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/task/domain/{id}/cancel"
    },
    {
      "description": "Domain tasks",
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
              "description": "Id of the task",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.DomainTask",
          "responseType": "nichandle.DomainTask"
        }
      ],
      "path": "/me/task/domain/{id}"
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
          "resellerOnly": false,
          "responseFullType": "long[]",
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
              "description": null,
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.emailChange.Task",
          "responseType": "nichandle.emailChange.Task"
        }
      ],
      "path": "/me/task/emailChange/{id}"
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
              "description": null,
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/task/emailChange/{id}/refuse"
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
              "description": null,
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/task/emailChange/{id}/accept"
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
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "string[]",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "movementId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "ovhAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Movement",
          "responseType": "billing.Movement"
        }
      ],
      "path": "/me/ovhAccount/{ovhAccountId}/movements/{movementId}"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
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
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        }
      ],
      "path": "/me/ovhAccount/{ovhAccountId}/movements"
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
              "description": null,
              "fullType": "string",
              "name": "ovhAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Order",
          "responseType": "billing.Order"
        }
      ],
      "path": "/me/ovhAccount/{ovhAccountId}/retrieveMoney"
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
              "description": null,
              "fullType": "string",
              "name": "ovhAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Order",
          "responseType": "billing.Order"
        }
      ],
      "path": "/me/ovhAccount/{ovhAccountId}/creditOrder"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "ovhAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.OvhAccount",
          "responseType": "billing.OvhAccount"
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
              "dataType": "billing.OvhAccount",
              "description": "New object properties",
              "fullType": "billing.OvhAccount",
              "name": null,
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "ovhAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/ovhAccount/{ovhAccountId}"
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
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "string[]",
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/mailingList/subscribe"
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
          "resellerOnly": false,
          "responseFullType": "string[]",
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
              "description": null,
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Deposit",
          "responseType": "billing.Deposit"
        }
      ],
      "path": "/me/deposit/{depositId}"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "debt.Debt",
          "responseType": "debt.Debt"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Order",
          "responseType": "billing.Order"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt/pay"
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
              "description": null,
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "debt.Operation",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "debt.entry.AssociatedObject",
          "responseType": "debt.entry.AssociatedObject"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}/associatedObject"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
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
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt/operation"
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
              "description": null,
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Bill",
          "responseType": "billing.Bill"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Payment",
          "responseType": "billing.Payment"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/payment"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "billDetailId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.BillDetail",
          "responseType": "billing.BillDetail"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/details"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Payment",
          "responseType": "billing.Payment"
        }
      ],
      "path": "/me/deposit/{depositId}/payment"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "depositDetailId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.DepositDetail",
          "responseType": "billing.DepositDetail"
        }
      ],
      "path": "/me/deposit/{depositId}/details/{depositDetailId}"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        }
      ],
      "path": "/me/deposit/{depositId}/details"
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
          "resellerOnly": false,
          "responseFullType": "long[]",
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
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "applicationId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "api.Application",
          "responseType": "api.Application"
        },
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
              "description": null,
              "fullType": "long",
              "name": "applicationId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/api/application/{applicationId}"
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
              "description": null,
              "fullType": "long",
              "name": "credentialId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "api.Application",
          "responseType": "api.Application"
        }
      ],
      "path": "/me/api/credential/{credentialId}/application"
    },
    {
      "description": "API Credential",
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
              "description": null,
              "fullType": "long",
              "name": "credentialId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "api.Credential",
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
              "name": null,
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "credentialId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        },
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
              "description": null,
              "fullType": "long",
              "name": "credentialId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/api/credential/{credentialId}"
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
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        }
      ],
      "path": "/me/api/credential"
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
          "resellerOnly": false,
          "responseFullType": "nichandle.VoucherStatus",
          "responseType": "nichandle.VoucherStatus"
        }
      ],
      "path": "/me/voucher/checkValidity"
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
          "resellerOnly": false,
          "responseFullType": "long[]",
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
              "description": null,
              "fullType": "long",
              "name": "movementId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.FidelityMovement",
          "responseType": "billing.FidelityMovement"
        }
      ],
      "path": "/me/fidelityAccount/movements/{movementId}"
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
          "resellerOnly": false,
          "responseFullType": "billing.Order",
          "responseType": "billing.Order"
        }
      ],
      "path": "/me/fidelityAccount/creditOrder"
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
          "resellerOnly": false,
          "responseFullType": "billing.FidelityAccount",
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
              "name": null,
              "paramType": "body",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/fidelityAccount"
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/passwordRecover"
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
              "description": null,
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Bill",
          "responseType": "billing.Bill"
        }
      ],
      "path": "/me/bill/{billId}"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Payment",
          "responseType": "billing.Payment"
        }
      ],
      "path": "/me/bill/{billId}/payment"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string[]",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "billDetailId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.BillDetail",
          "responseType": "billing.BillDetail"
        }
      ],
      "path": "/me/bill/{billId}/details/{billDetailId}"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "debt.Debt",
          "responseType": "debt.Debt"
        }
      ],
      "path": "/me/bill/{billId}/debt"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Order",
          "responseType": "billing.Order"
        }
      ],
      "path": "/me/bill/{billId}/debt/pay"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "debt.entry.AssociatedObject",
          "responseType": "debt.entry.AssociatedObject"
        }
      ],
      "path": "/me/bill/{billId}/debt/operation/{operationId}/associatedObject"
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
              "description": null,
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "debt.Operation",
          "responseType": "debt.Operation"
        }
      ],
      "path": "/me/bill/{billId}/debt/operation/{operationId}"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
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
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        }
      ],
      "path": "/me/bill/{billId}/debt/operation"
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/bill/export"
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
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        }
      ],
      "path": "/me/bill"
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
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        }
      ],
      "path": "/me/agreements"
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
          "resellerOnly": false,
          "responseFullType": "agreements.Contract",
          "responseType": "agreements.Contract"
        }
      ],
      "path": "/me/agreements/{id}/contract"
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
          "resellerOnly": false,
          "responseFullType": "agreements.ContractAgreement",
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
          "resellerOnly": false,
          "responseFullType": "string",
          "responseType": "string"
        }
      ],
      "path": "/me/agreements/{id}/accept"
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/changePassword"
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
          "resellerOnly": false,
          "responseFullType": "long[]",
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
          "resellerOnly": false,
          "responseFullType": "contact.Contact",
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
          "resellerOnly": false,
          "responseFullType": "contact.FieldInformation[]",
          "responseType": "contact.FieldInformation[]"
        }
      ],
      "path": "/me/contact/{contactId}/fields"
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
          "resellerOnly": false,
          "responseFullType": "contact.Contact",
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
          "resellerOnly": false,
          "responseFullType": "contact.Contact",
          "responseType": "contact.Contact"
        }
      ],
      "path": "/me/contact/{contactId}"
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
          "resellerOnly": false,
          "responseFullType": "billing.AutomaticPaymentMean",
          "responseType": "billing.AutomaticPaymentMean"
        }
      ],
      "path": "/me/availableAutomaticPaymentMeans"
    },
    {
      "description": "Email notification",
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
          "resellerOnly": false,
          "responseFullType": "nichandle.emailNotification",
          "responseType": "nichandle.emailNotification"
        }
      ],
      "path": "/me/notification/email/history/{id}"
    },
    {
      "description": "List the nichandle.emailNotification objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of all your email notifications",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        }
      ],
      "path": "/me/notification/email/history"
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
          "resellerOnly": false,
          "responseFullType": "string",
          "responseType": "string"
        }
      ],
      "path": "/me/sla/{id}/status"
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
          "resellerOnly": false,
          "responseFullType": "billing.SlaOperation",
          "responseType": "billing.SlaOperation"
        }
      ],
      "path": "/me/sla/{id}"
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
          "resellerOnly": false,
          "responseFullType": "billing.SlaOperationService[]",
          "responseType": "billing.SlaOperationService[]"
        }
      ],
      "path": "/me/sla/{id}/services"
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
          "resellerOnly": false,
          "responseFullType": "void",
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
          "resellerOnly": false,
          "responseFullType": "boolean",
          "responseType": "boolean"
        }
      ],
      "path": "/me/sla/{id}/canBeApplied"
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
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        }
      ],
      "path": "/me/sla"
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
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/order/{orderId}/payWithRegisteredPaymentMean"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.order.RegisteredPaymentMean[]",
          "responseType": "billing.order.RegisteredPaymentMean[]"
        }
      ],
      "path": "/me/order/{orderId}/availableRegisteredPaymentMean"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Payment",
          "responseType": "billing.Payment"
        }
      ],
      "path": "/me/order/{orderId}/payment"
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
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/order/{orderId}/retraction"
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
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Bill",
          "responseType": "billing.Bill"
        }
      ],
      "path": "/me/order/{orderId}/bill"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.order.OrderStatusEnum",
          "responseType": "billing.order.OrderStatusEnum"
        }
      ],
      "path": "/me/order/{orderId}/status"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.order.FollowUp[]",
          "responseType": "billing.order.FollowUp[]"
        }
      ],
      "path": "/me/order/{orderId}/followUp"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.order.PaymentMeans",
          "responseType": "billing.order.PaymentMeans"
        }
      ],
      "path": "/me/order/{orderId}/paymentMeans"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Order",
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
          "description": "Return main data about the object related to this debt operation",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "debt.entry.AssociatedObject",
          "responseType": "debt.entry.AssociatedObject"
        }
      ],
      "path": "/me/order/{orderId}/debt/operation/{operationId}/associatedObject"
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
              "description": null,
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "debt.Operation",
          "responseType": "debt.Operation"
        }
      ],
      "path": "/me/order/{orderId}/debt/operation/{operationId}"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
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
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        }
      ],
      "path": "/me/order/{orderId}/debt/operation"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Order",
          "responseType": "billing.Order"
        }
      ],
      "path": "/me/order/{orderId}/debt/pay"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "debt.Debt",
          "responseType": "debt.Debt"
        }
      ],
      "path": "/me/order/{orderId}/debt"
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
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/order/{orderId}/pay"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
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
          "resellerOnly": false,
          "responseFullType": "billing.order.ConsumptionDetails",
          "responseType": "billing.order.ConsumptionDetails"
        }
      ],
      "path": "/me/order/{orderId}/consumption/details"
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
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Refund",
          "responseType": "billing.Refund"
        }
      ],
      "path": "/me/order/{orderId}/refund"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.order.PaymentMethods",
          "responseType": "billing.order.PaymentMethods"
        }
      ],
      "path": "/me/order/{orderId}/paymentMethods"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.order.AssociatedObject",
          "responseType": "billing.order.AssociatedObject"
        }
      ],
      "path": "/me/order/{orderId}/associatedObject"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "long[]",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "orderDetailId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.OrderDetail",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "orderDetailId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.ItemDetail",
          "responseType": "billing.ItemDetail"
        }
      ],
      "path": "/me/order/{orderId}/details/{orderDetailId}/extension"
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
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        }
      ],
      "path": "/me/order"
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
          "resellerOnly": false,
          "responseFullType": "string[]",
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
          "resellerOnly": false,
          "responseFullType": "nichandle.ipxe",
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
          "resellerOnly": false,
          "responseFullType": "nichandle.ipxe",
          "responseType": "nichandle.ipxe"
        },
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/ipxeScript/{name}"
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
          "resellerOnly": false,
          "responseFullType": "me.consent.Campaign[]",
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
          "resellerOnly": false,
          "responseFullType": "me.consent.Campaign",
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
          "resellerOnly": false,
          "responseFullType": "me.consent.Consent",
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/consent/{campaignName}/decision"
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
          "resellerOnly": false,
          "responseFullType": "string[]",
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
          "resellerOnly": false,
          "responseFullType": "void",
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/identity/user/{user}/enable"
    },
    {
      "description": "A user linked to this account",
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
              "description": "User's login",
              "fullType": "string",
              "name": "user",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.User",
          "responseType": "nichandle.User"
        },
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
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
          "resellerOnly": false,
          "responseFullType": "void",
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/identity/user/{user}/disable"
    },
    {
      "description": "A group linked to this account",
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
              "description": "Group's name",
              "fullType": "string",
              "name": "group",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.Authentication.Group",
          "responseType": "nichandle.Authentication.Group"
        },
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/identity/group/{group}"
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
          "resellerOnly": false,
          "responseFullType": "string[]",
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
          "resellerOnly": false,
          "responseFullType": "nichandle.Authentication.Group",
          "responseType": "nichandle.Authentication.Group"
        }
      ],
      "path": "/me/identity/group"
    },
    {
      "description": "Customer public SSH key, can be used for rescue netboot or server access after reinstallation",
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
              "description": "Name of this public SSH key",
              "fullType": "string",
              "name": "keyName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.sshKey",
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
              "name": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        },
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/sshKey/{keyName}"
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
          "resellerOnly": false,
          "responseFullType": "string[]",
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/sshKey"
    },
    {
      "description": "List the billing.Paypal objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of Paypal accounts usable for payments on this account",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Enable payment through a new PayPal account",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Custom description of this account",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Callback URL where the customer will be redirected to after validation",
              "fullType": "string",
              "name": "returnUrl",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Set as default payment mean once validated",
              "fullType": "boolean",
              "name": "setDefault",
              "paramType": "body",
              "required": false
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.PaymentMeanValidation",
          "responseType": "billing.PaymentMeanValidation"
        }
      ],
      "path": "/me/paymentMean/paypal"
    },
    {
      "description": "challenge operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Challenge your bank account",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Payload to answer the challenge",
              "fullType": "string",
              "name": "challenge",
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/paypal/{id}/challenge"
    },
    {
      "description": "Paypal account info",
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
          "resellerOnly": false,
          "responseFullType": "billing.Paypal",
          "responseType": "billing.Paypal"
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
              "dataType": "billing.Paypal",
              "description": "New object properties",
              "fullType": "billing.Paypal",
              "name": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable payment through this PayPal account",
          "httpMethod": "DELETE",
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/paypal/{id}"
    },
    {
      "description": "chooseAsDefaultPaymentMean operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Choose this Paypal agreement as your default payment mean. Will cancel the previous choice.",
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/paypal/{id}/chooseAsDefaultPaymentMean"
    },
    {
      "description": "List the billing.DeferredPaymentAccount objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of authorized deferred payment account for this customer",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        }
      ],
      "path": "/me/paymentMean/deferredPaymentAccount"
    },
    {
      "description": "Deferred payment account info",
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
              "description": null,
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.DeferredPaymentAccount",
          "responseType": "billing.DeferredPaymentAccount"
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
              "dataType": "billing.DeferredPaymentAccount",
              "description": "New object properties",
              "fullType": "billing.DeferredPaymentAccount",
              "name": null,
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/deferredPaymentAccount/{id}"
    },
    {
      "description": "chooseAsDefaultPaymentMean operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Allow you to use deferred payment. Will cancel the previous choice.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/deferredPaymentAccount/{id}/chooseAsDefaultPaymentMean"
    },
    {
      "description": "challenge operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Challenge your bank account",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Payload to answer the challenge",
              "fullType": "string",
              "name": "challenge",
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/creditCard/{id}/challenge"
    },
    {
      "description": "chooseAsDefaultPaymentMean operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Choose this credit card as your default payment mean. Will cancel the previous choice.",
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/creditCard/{id}/chooseAsDefaultPaymentMean"
    },
    {
      "description": "Credit card informations",
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
          "resellerOnly": false,
          "responseFullType": "billing.CreditCard",
          "responseType": "billing.CreditCard"
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
              "dataType": "billing.CreditCard",
              "description": "New object properties",
              "fullType": "billing.CreditCard",
              "name": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable payment through this credit card",
          "httpMethod": "DELETE",
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/creditCard/{id}"
    },
    {
      "description": "List the billing.CreditCard objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of credit cards",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new credit card",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Custom description of this account",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Callback URL where the customer will be redirected to after validation",
              "fullType": "string",
              "name": "returnUrl",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Set as default payment mean once validated",
              "fullType": "boolean",
              "name": "setDefault",
              "paramType": "body",
              "required": false
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.PaymentMeanValidation",
          "responseType": "billing.PaymentMeanValidation"
        }
      ],
      "path": "/me/paymentMean/creditCard"
    },
    {
      "description": "List the billing.BankAccount objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of bank accounts",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.BankAccountStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "billing.BankAccountStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            }
          ],
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Enable payment through a new account",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Account's BIC",
              "fullType": "string",
              "name": "bic",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Custom description of this account",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Account's IBAN",
              "fullType": "string",
              "name": "iban",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Account owner's address",
              "fullType": "string",
              "name": "ownerAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Account owner's name",
              "fullType": "string",
              "name": "ownerName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Set as default payment mean once validated",
              "fullType": "boolean",
              "name": "setDefault",
              "paramType": "body",
              "required": false
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.PaymentMeanValidation",
          "responseType": "billing.PaymentMeanValidation"
        }
      ],
      "path": "/me/paymentMean/bankAccount"
    },
    {
      "description": "chooseAsDefaultPaymentMean operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Choose this bank account as your default payment mean. Will cancel the previous choice.",
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/bankAccount/{id}/chooseAsDefaultPaymentMean"
    },
    {
      "description": "SEPA bank account info",
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
          "resellerOnly": false,
          "responseFullType": "billing.BankAccount",
          "responseType": "billing.BankAccount"
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
              "dataType": "billing.BankAccount",
              "description": "New object properties",
              "fullType": "billing.BankAccount",
              "name": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable payment through this account",
          "httpMethod": "DELETE",
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/bankAccount/{id}"
    },
    {
      "description": "challenge operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Challenge your bank account",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Payload to answer the challenge",
              "fullType": "string",
              "name": "challenge",
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/paymentMean/bankAccount/{id}/challenge"
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
          "resellerOnly": false,
          "responseFullType": "long[]",
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
          "resellerOnly": false,
          "responseFullType": "long",
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
          "resellerOnly": false,
          "responseFullType": "nichandle.SubAccount",
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
              "name": null,
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
          "resellerOnly": false,
          "responseFullType": "void",
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
          "resellerOnly": false,
          "responseFullType": "nichandle.SubAccountConsumerKey",
          "responseType": "nichandle.SubAccountConsumerKey"
        }
      ],
      "path": "/me/subAccount/{id}/createConsumerKey"
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
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/refund/export"
    },
    {
      "description": "Details about an IP block organisation",
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
              "description": null,
              "fullType": "string",
              "name": "organisationId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.Ipv4Org",
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
              "name": null,
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "organisationId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        },
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
              "description": null,
              "fullType": "string",
              "name": "organisationId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/ipOrganisation/{organisationId}"
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
          "resellerOnly": false,
          "responseFullType": "string[]",
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
              "description": null,
              "fullType": "string",
              "name": "abuse_mailbox",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "address",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "city",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "nichandle.CountryEnum",
              "description": null,
              "fullType": "nichandle.CountryEnum",
              "name": "country",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "firstname",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "lastname",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "phoneNumber",
              "description": null,
              "fullType": "phoneNumber",
              "name": "phone",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "nichandle.IpRegistryEnum",
              "description": null,
              "fullType": "nichandle.IpRegistryEnum",
              "name": "registry",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "state",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "zip",
              "paramType": "body",
              "required": false
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/me/ipOrganisation"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "withdrawalDetailId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "withdrawalId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.WithdrawalDetail",
          "responseType": "billing.WithdrawalDetail"
        }
      ],
      "path": "/me/withdrawal/{withdrawalId}/details/{withdrawalDetailId}"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "withdrawalId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        }
      ],
      "path": "/me/withdrawal/{withdrawalId}/details"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "withdrawalId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Payment",
          "responseType": "billing.Payment"
        }
      ],
      "path": "/me/withdrawal/{withdrawalId}/payment"
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
              "description": null,
              "fullType": "string",
              "name": "withdrawalId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Withdrawal",
          "responseType": "billing.Withdrawal"
        }
      ],
      "path": "/me/withdrawal/{withdrawalId}"
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
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        }
      ],
      "path": "/me/withdrawal"
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
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "long[]",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "debtId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "debt.Debt",
          "responseType": "debt.Debt"
        }
      ],
      "path": "/me/debtAccount/debt/{debtId}"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "debtId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Order",
          "responseType": "billing.Order"
        }
      ],
      "path": "/me/debtAccount/debt/{debtId}/pay"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "debtId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "debt.entry.AssociatedObject",
          "responseType": "debt.entry.AssociatedObject"
        }
      ],
      "path": "/me/debtAccount/debt/{debtId}/operation/{operationId}/associatedObject"
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
              "description": null,
              "fullType": "long",
              "name": "debtId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "debt.Operation",
          "responseType": "debt.Operation"
        }
      ],
      "path": "/me/debtAccount/debt/{debtId}/operation/{operationId}"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": null,
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
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        }
      ],
      "path": "/me/debtAccount/debt/{debtId}/operation"
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
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "billing.Order",
          "responseType": "billing.Order"
        }
      ],
      "path": "/me/debtAccount/pay"
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
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "debt.Balance",
          "responseType": "debt.Balance"
        }
      ],
      "path": "/me/debtAccount"
    }
  ],
  "basePath": "https://ca.api.soyoustart.com/1.0",
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
          "type": "boolean"
        },
        "date": {
          "canBeNull": false,
          "description": "Date the contract was created on",
          "fullType": "date",
          "readOnly": true,
          "type": "date"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of of the contract",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "pdf": {
          "canBeNull": false,
          "description": "URL you can download the contract at",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "text": {
          "canBeNull": false,
          "description": "Full text of the contract",
          "fullType": "string",
          "readOnly": true,
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
          "type": "agreements.AgreementStateEnum"
        },
        "contractId": {
          "canBeNull": false,
          "description": "Id of the agreed contract",
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "date": {
          "canBeNull": false,
          "description": "Date the agreed contract was effective",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the contract",
          "fullType": "long",
          "readOnly": true,
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
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "applicationKey": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": null,
          "fullType": "api.ApplicationStatusEnum",
          "readOnly": true,
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
          "type": "boolean"
        },
        "creditCard": {
          "canBeNull": false,
          "description": "Credit Card",
          "type": "boolean"
        },
        "deferredPaymentAccount": {
          "canBeNull": false,
          "description": "Deferred invoice payment account for authorized customers",
          "type": "boolean"
        },
        "paypal": {
          "canBeNull": false,
          "description": "Paypal account",
          "type": "boolean"
        }
      }
    },
    "billing.BankAccount": {
      "description": "SEPA bank account info",
      "id": "BankAccount",
      "namespace": "billing",
      "properties": {
        "bic": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "creationDate": {
          "canBeNull": false,
          "description": null,
          "fullType": "date",
          "readOnly": true,
          "type": "date"
        },
        "defaultPaymentMean": {
          "canBeNull": false,
          "description": null,
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "description": {
          "canBeNull": true,
          "description": "Custom description of this account",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "iban": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "icon": {
          "canBeNull": true,
          "description": "Payment method type icon",
          "fullType": "billing.paymentMethod.IconData",
          "readOnly": true,
          "type": "billing.paymentMethod.IconData"
        },
        "id": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "mandateSignatureDate": {
          "canBeNull": true,
          "description": null,
          "fullType": "date",
          "readOnly": true,
          "type": "date"
        },
        "ownerAddress": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "ownerName": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": null,
          "fullType": "billing.BankAccountStateEnum",
          "readOnly": true,
          "type": "billing.BankAccountStateEnum"
        },
        "uniqueReference": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "validationDocumentLink": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        }
      }
    },
    "billing.BankAccountStateEnum": {
      "description": "List of bank account states",
      "enum": [
        "blockedForIncidents",
        "pendingValidation",
        "valid"
      ],
      "enumType": "string",
      "id": "BankAccountStateEnum",
      "namespace": "billing"
    },
    "billing.Bill": {
      "description": "Details about a Bill",
      "id": "Bill",
      "namespace": "billing",
      "properties": {
        "billId": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "category": {
          "canBeNull": false,
          "description": null,
          "fullType": "billing.CategoryEnum",
          "readOnly": true,
          "type": "billing.CategoryEnum"
        },
        "date": {
          "canBeNull": false,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "orderId": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "password": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "pdfUrl": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "priceWithTax": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "priceWithoutTax": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "tax": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "url": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
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
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "periodEnd": {
          "canBeNull": true,
          "description": null,
          "fullType": "date",
          "readOnly": true,
          "type": "date"
        },
        "periodStart": {
          "canBeNull": true,
          "description": null,
          "fullType": "date",
          "readOnly": true,
          "type": "date"
        },
        "quantity": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "totalPrice": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "unitPrice": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
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
          "type": "order.Price"
        },
        "balanceName": {
          "canBeNull": false,
          "description": "Credit balance name",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        }
      }
    },
    "billing.CreditCard": {
      "description": "Credit card informations",
      "id": "CreditCard",
      "namespace": "billing",
      "properties": {
        "defaultPaymentMean": {
          "canBeNull": false,
          "description": null,
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "description": {
          "canBeNull": true,
          "description": "Custom description of this account",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "expirationDate": {
          "canBeNull": false,
          "description": null,
          "fullType": "date",
          "readOnly": true,
          "type": "date"
        },
        "icon": {
          "canBeNull": true,
          "description": "Payment method type icon",
          "fullType": "billing.paymentMethod.IconData",
          "readOnly": true,
          "type": "billing.paymentMethod.IconData"
        },
        "id": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "number": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": null,
          "fullType": "billing.CreditCardStateEnum",
          "readOnly": true,
          "type": "billing.CreditCardStateEnum"
        },
        "threeDsValidated": {
          "canBeNull": false,
          "description": "True if this credit card has been registered with a successful 3DSecure challenge",
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "type": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        }
      }
    },
    "billing.CreditCardStateEnum": {
      "description": "State of you credit card",
      "enum": [
        "expired",
        "tooManyFailures",
        "valid"
      ],
      "enumType": "string",
      "id": "CreditCardStateEnum",
      "namespace": "billing"
    },
    "billing.DeferredPaymentAccount": {
      "description": "Deferred payment account info",
      "id": "DeferredPaymentAccount",
      "namespace": "billing",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "defaultPaymentMean": {
          "canBeNull": false,
          "description": null,
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "description": {
          "canBeNull": true,
          "description": "Custom description of this account",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "icon": {
          "canBeNull": true,
          "description": "Payment method type icon",
          "fullType": "billing.paymentMethod.IconData",
          "readOnly": true,
          "type": "billing.paymentMethod.IconData"
        },
        "id": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "label": {
          "canBeNull": true,
          "description": "Deferred account type",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": null,
          "fullType": "billing.DeferredPaymentAccountStatusEnum",
          "readOnly": true,
          "type": "billing.DeferredPaymentAccountStatusEnum"
        }
      }
    },
    "billing.DeferredPaymentAccountStatusEnum": {
      "description": "Status of your deferred invoice payment account",
      "enum": [
        "valid"
      ],
      "enumType": "string",
      "id": "DeferredPaymentAccountStatusEnum",
      "namespace": "billing"
    },
    "billing.Deposit": {
      "description": "Details about a deposit",
      "id": "Deposit",
      "namespace": "billing",
      "properties": {
        "amount": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "date": {
          "canBeNull": false,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "depositId": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "orderId": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "password": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "paymentInfo": {
          "canBeNull": true,
          "description": null,
          "fullType": "debt.associatedObject.PaymentInfo",
          "readOnly": true,
          "type": "debt.associatedObject.PaymentInfo"
        },
        "pdfUrl": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
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
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "quantity": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "totalPrice": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "unitPrice": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
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
          "description": null,
          "fullType": "long",
          "readOnly": false,
          "type": "long"
        },
        "balance": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "canBeCredited": {
          "canBeNull": false,
          "description": null,
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "openDate": {
          "canBeNull": false,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
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
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "balance": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "date": {
          "canBeNull": false,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "movementId": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "operation": {
          "canBeNull": false,
          "description": null,
          "fullType": "billing.fidelityAccount.OperationEnum",
          "readOnly": true,
          "type": "billing.fidelityAccount.OperationEnum"
        },
        "order": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "previousBalance": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
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
          "description": null,
          "fullType": "billing.ItemDetail.Order",
          "readOnly": true,
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
          "type": "billing.ItemDetail.OrderActionEnum"
        },
        "configurations": {
          "canBeNull": false,
          "description": "Configurations chosen during the order",
          "type": "billing.ItemDetail.OrderConfiguration[]"
        },
        "plan": {
          "canBeNull": false,
          "description": "Plan from /order/cart",
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
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Value of the configuration",
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
          "type": "string"
        },
        "duration": {
          "canBeNull": true,
          "description": "Duration chosen when ordering through /order/cart (ISO 8601)",
          "type": "string"
        },
        "pricingMode": {
          "canBeNull": true,
          "description": "Pricing mode used when ordering through /order/cart",
          "type": "string"
        },
        "product": {
          "canBeNull": false,
          "description": "Product from /order/cart",
          "type": "billing.ItemDetail.OrderPlanProduct"
        },
        "quantity": {
          "canBeNull": true,
          "description": "Quantity ordered",
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
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "balance": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "date": {
          "canBeNull": false,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "movementId": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "operation": {
          "canBeNull": false,
          "description": null,
          "fullType": "billing.ovhAccount.OperationEnum",
          "readOnly": true,
          "type": "billing.ovhAccount.OperationEnum"
        },
        "order": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "previousBalance": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
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
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "expirationDate": {
          "canBeNull": true,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "orderId": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "password": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "pdfUrl": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "priceWithTax": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "priceWithoutTax": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "retractionDate": {
          "canBeNull": true,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "tax": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "url": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
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
          "description": null,
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "description": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "orderDetailId": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "quantity": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "totalPrice": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "unitPrice": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
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
          "description": null,
          "fullType": "long",
          "readOnly": false,
          "type": "long"
        },
        "balance": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "canBeCredited": {
          "canBeNull": false,
          "description": null,
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "isActive": {
          "canBeNull": false,
          "description": null,
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "openDate": {
          "canBeNull": false,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "ovhAccountId": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
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
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "paymentIdentifier": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "paymentType": {
          "canBeNull": false,
          "description": null,
          "fullType": "billing.PaymentMeanEnum",
          "readOnly": true,
          "type": "billing.PaymentMeanEnum"
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
          "description": null,
          "type": "long"
        },
        "submitUrl": {
          "canBeNull": true,
          "description": null,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "validationType": {
          "canBeNull": false,
          "description": null,
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
          "type": "long"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of the payment method",
          "type": "date"
        },
        "default": {
          "canBeNull": true,
          "description": "Is this payment method set as the default one",
          "type": "boolean"
        },
        "description": {
          "canBeNull": false,
          "description": "Customer personalized description",
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Payment method id",
          "type": "long"
        },
        "paymentSubType": {
          "canBeNull": true,
          "description": "Payment sub type",
          "type": "billing.paymentMethod.PaymentSubTypeEnum"
        },
        "paymentType": {
          "canBeNull": false,
          "description": "Payment type",
          "type": "billing.paymentMethod.PaymentTypeEnum"
        },
        "publicLabel": {
          "canBeNull": false,
          "description": "Public payment method label",
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Payment method status enum",
          "type": "billing.paymentMethod.StatusEnum"
        }
      }
    },
    "billing.Paypal": {
      "description": "Paypal account info",
      "id": "Paypal",
      "namespace": "billing",
      "properties": {
        "agreementId": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "creationDate": {
          "canBeNull": false,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "defaultPaymentMean": {
          "canBeNull": false,
          "description": null,
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "description": {
          "canBeNull": true,
          "description": "Custom description of this account",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "email": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "icon": {
          "canBeNull": true,
          "description": "Payment method type icon",
          "fullType": "billing.paymentMethod.IconData",
          "readOnly": true,
          "type": "billing.paymentMethod.IconData"
        },
        "id": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": null,
          "fullType": "billing.PaypalStateEnum",
          "readOnly": true,
          "type": "billing.PaypalStateEnum"
        }
      }
    },
    "billing.PaypalStateEnum": {
      "description": "State of you paypal account",
      "enum": [
        "tooManyFailures",
        "valid"
      ],
      "enumType": "string",
      "id": "PaypalStateEnum",
      "namespace": "billing"
    },
    "billing.Refund": {
      "description": "Details about a Refund",
      "id": "Refund",
      "namespace": "billing",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "orderId": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "originalBillId": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "password": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "pdfUrl": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "priceWithTax": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "priceWithoutTax": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "refundId": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "tax": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "url": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
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
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the SLA operation for this incident",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "endDate": {
          "canBeNull": true,
          "description": "Date of the end of the SLA",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "SLA identifier",
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Sla operation name",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Date of the start of the SLA",
          "fullType": "datetime",
          "readOnly": true,
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
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Impacted service name",
          "type": "string"
        },
        "slaApplication": {
          "canBeNull": false,
          "description": "SLA plan application",
          "type": "string"
        },
        "slaPlan": {
          "canBeNull": false,
          "description": "SLA plan description",
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
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "openDate": {
          "canBeNull": false,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "voucherAccountId": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
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
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "balance": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "date": {
          "canBeNull": false,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "movementId": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "operation": {
          "canBeNull": false,
          "description": null,
          "fullType": "billing.voucherAccount.OperationEnum",
          "readOnly": true,
          "type": "billing.voucherAccount.OperationEnum"
        },
        "order": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "previousBalance": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
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
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "country": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "date": {
          "canBeNull": false,
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "orderId": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "password": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "pdfUrl": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "withdrawalId": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
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
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "quantity": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "totalPrice": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "unitPrice": {
          "canBeNull": false,
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "withdrawalDetailId": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
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
          "description": null,
          "type": "string"
        },
        "type": {
          "canBeNull": true,
          "description": null,
          "type": "billing.order.associatedObject.TypeEnum"
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
          "type": "consumption.ConsumptionExportFormatsEnum"
        },
        "fileURL": {
          "canBeNull": true,
          "description": "Temporary URL to download detailed consumption",
          "type": "string"
        },
        "message": {
          "canBeNull": true,
          "description": "Request's state description",
          "type": "string"
        },
        "taskId": {
          "canBeNull": false,
          "description": "Consumption details export task's identifier",
          "type": "long"
        },
        "taskStatus": {
          "canBeNull": false,
          "description": "Consumption details export task's status",
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
          "type": "billing.order.followUp.History[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Step status of order follow-up",
          "type": "billing.order.followUp.StatusEnum"
        },
        "step": {
          "canBeNull": false,
          "description": "Step of order follow-up",
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
          "description": null,
          "type": "double"
        },
        "htmlForm": {
          "canBeNull": true,
          "description": null,
          "type": "text"
        },
        "httpMethod": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "logo": {
          "canBeNull": true,
          "description": null,
          "type": "string"
        },
        "parameters": {
          "canBeNull": false,
          "description": null,
          "type": "billing.order.paymentMean.HttpParameter[]"
        },
        "subType": {
          "canBeNull": true,
          "description": null,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        }
      }
    },
    "billing.order.PaymentMeans": {
      "description": "TODO",
      "id": "PaymentMeans",
      "namespace": "billing.order",
      "properties": {
        "creditCard": {
          "canBeNull": true,
          "description": null,
          "type": "billing.order.PaymentMean[]"
        },
        "edinar": {
          "canBeNull": true,
          "description": null,
          "type": "billing.order.PaymentMean[]"
        },
        "fidelityPoints": {
          "canBeNull": true,
          "description": null,
          "type": "billing.order.PaymentMean[]"
        },
        "ideal": {
          "canBeNull": true,
          "description": null,
          "type": "billing.order.PaymentMean[]"
        },
        "multibanco": {
          "canBeNull": true,
          "description": null,
          "type": "billing.order.PaymentMean[]"
        },
        "ovhAccount": {
          "canBeNull": true,
          "description": null,
          "type": "billing.order.PaymentMean[]"
        },
        "paypal": {
          "canBeNull": true,
          "description": null,
          "type": "billing.order.PaymentMean[]"
        },
        "promotion": {
          "canBeNull": true,
          "description": null,
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
          "type": "payment.method.AvailablePaymentMethod[]"
        },
        "registered": {
          "canBeNull": false,
          "description": "IDs of registered payment method usable on this order",
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
          "description": null,
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
    "billing.order.followUp.History": {
      "description": "Step history of order follow-up",
      "id": "History",
      "namespace": "billing.order.followUp",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": "History date of order follow-up",
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "History description of order follow-up",
          "type": "string"
        },
        "label": {
          "canBeNull": false,
          "description": "History label of order follow-up",
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
          "description": null,
          "type": "billing.order.paymentMean.HttpParameterChoice[]"
        },
        "name": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "value": {
          "canBeNull": true,
          "description": null,
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
          "description": null,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": null,
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
    "billing.paymentMethod.IconData": {
      "description": "Payment method type icon",
      "id": "IconData",
      "namespace": "billing.paymentMethod",
      "properties": {
        "data": {
          "canBeNull": true,
          "description": "Icon in base64",
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Icon name",
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
          "description": null,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": null,
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
          "description": null,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": null,
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
          "type": "string"
        },
        "country": {
          "canBeNull": false,
          "description": "Country",
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "type": "nichandle.CountryEnum"
        },
        "line1": {
          "canBeNull": false,
          "description": "First line of the address",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "line2": {
          "canBeNull": true,
          "description": "Second line of the address",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "line3": {
          "canBeNull": true,
          "description": "Third line of the address",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "otherDetails": {
          "canBeNull": true,
          "description": "Others details",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "province": {
          "canBeNull": true,
          "description": "Province name",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "zip": {
          "canBeNull": false,
          "description": "Zipcode",
          "fullType": "string",
          "readOnly": false,
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
          "type": "contact.Address"
        },
        "birthCity": {
          "canBeNull": true,
          "description": "Birth city",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "birthCountry": {
          "canBeNull": true,
          "description": "Birth Country",
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "type": "nichandle.CountryEnum"
        },
        "birthDay": {
          "canBeNull": true,
          "description": "Birth date",
          "fullType": "date",
          "readOnly": false,
          "type": "date"
        },
        "birthZip": {
          "canBeNull": true,
          "description": "Birth Zipcode",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "cellPhone": {
          "canBeNull": true,
          "description": "Cellphone number",
          "fullType": "phoneNumber",
          "readOnly": false,
          "type": "phoneNumber"
        },
        "companyNationalIdentificationNumber": {
          "canBeNull": true,
          "description": "National identification number of your company",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "email": {
          "canBeNull": false,
          "description": "Email address",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "fax": {
          "canBeNull": true,
          "description": "Fax number",
          "fullType": "phoneNumber",
          "readOnly": false,
          "type": "phoneNumber"
        },
        "firstName": {
          "canBeNull": false,
          "description": "First name",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "gender": {
          "canBeNull": true,
          "description": "Gender",
          "fullType": "nichandle.GenderEnum",
          "readOnly": false,
          "type": "nichandle.GenderEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "Contact Identifier",
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "language": {
          "canBeNull": false,
          "description": "Language",
          "fullType": "nichandle.LanguageEnum",
          "readOnly": false,
          "type": "nichandle.LanguageEnum"
        },
        "lastName": {
          "canBeNull": false,
          "description": "Last name",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "legalForm": {
          "canBeNull": false,
          "description": "Legal form of the contact",
          "fullType": "nichandle.LegalFormEnum",
          "readOnly": false,
          "type": "nichandle.LegalFormEnum"
        },
        "nationalIdentificationNumber": {
          "canBeNull": true,
          "description": "National identification number of the contact",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "nationality": {
          "canBeNull": true,
          "description": "Nationality",
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "type": "nichandle.CountryEnum"
        },
        "organisationName": {
          "canBeNull": true,
          "description": "Organisation name",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "organisationType": {
          "canBeNull": true,
          "description": "Organisation type",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "phone": {
          "canBeNull": true,
          "description": "Telephone number",
          "fullType": "phoneNumber",
          "readOnly": false,
          "type": "phoneNumber"
        },
        "spareEmail": {
          "canBeNull": true,
          "description": "Spare email address",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "vat": {
          "canBeNull": true,
          "description": "VAT number",
          "fullType": "string",
          "readOnly": false,
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
          "type": "string"
        },
        "mandatory": {
          "canBeNull": false,
          "description": "Indicates if the field is mandatory when editing",
          "fullType": "boolean",
          "readOnly": false,
          "type": "boolean"
        },
        "readOnly": {
          "canBeNull": false,
          "description": "Indicates if the field can't be edited",
          "fullType": "boolean",
          "readOnly": false,
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
    "debt.Balance": {
      "description": "Debt balance of the account",
      "id": "Balance",
      "namespace": "debt",
      "properties": {
        "active": {
          "canBeNull": false,
          "description": null,
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "dueAmount": {
          "canBeNull": false,
          "description": "Amount of debts the account has",
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "pendingAmount": {
          "canBeNull": false,
          "description": "Amount currently being processed",
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "todoAmount": {
          "canBeNull": false,
          "description": "Reserved amount awaiting payment",
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "unmaturedAmount": {
          "canBeNull": false,
          "description": "Unmatured amount for deferred payment term",
          "fullType": "order.Price",
          "readOnly": true,
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
          "type": "order.Price"
        },
        "date": {
          "canBeNull": false,
          "description": "Date the debt was created on",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "debtId": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "dueAmount": {
          "canBeNull": false,
          "description": "Amount you still owe for that debt",
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "dueDate": {
          "canBeNull": true,
          "description": "If specified, the debt will not be recovered before that date",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "orderId": {
          "canBeNull": false,
          "description": "The order the debt relates to",
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "pendingAmount": {
          "canBeNull": false,
          "description": "Amount currently being processed",
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of a debt",
          "fullType": "debt.entry.StatusDebtOrderEnum",
          "readOnly": true,
          "type": "debt.entry.StatusDebtOrderEnum"
        },
        "todoAmount": {
          "canBeNull": false,
          "description": "Reserved amount awaiting payment",
          "fullType": "order.Price",
          "readOnly": true,
          "type": "order.Price"
        },
        "unmaturedAmount": {
          "canBeNull": false,
          "description": "Unmatured amount for deferred payment term",
          "fullType": "order.Price",
          "readOnly": true,
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
          "type": "order.Price"
        },
        "date": {
          "canBeNull": false,
          "description": "Date the operation took place on",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "depositOrderId": {
          "canBeNull": false,
          "description": "Order id associated to the deposit",
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "operationId": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the operation",
          "fullType": "debt.entry.StatusEnum",
          "readOnly": true,
          "type": "debt.entry.StatusEnum"
        },
        "type": {
          "canBeNull": true,
          "description": "Type of movement this operation represents",
          "fullType": "debt.entry.OperationEnum",
          "readOnly": true,
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
          "type": "string"
        },
        "paymentType": {
          "canBeNull": false,
          "description": "Payment mean used for this debt operation",
          "type": "billing.PaymentMeanEnum"
        },
        "publicLabel": {
          "canBeNull": true,
          "description": "Public payment mean label",
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
          "description": null,
          "type": "string"
        },
        "paymentInfo": {
          "canBeNull": true,
          "description": null,
          "type": "debt.associatedObject.PaymentInfo"
        },
        "subId": {
          "canBeNull": true,
          "description": null,
          "type": "string"
        },
        "type": {
          "canBeNull": true,
          "description": null,
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
          "type": "text"
        },
        "customHostname": {
          "canBeNull": true,
          "description": "Set up the server using the provided hostname instead of the default hostname",
          "type": "string"
        },
        "postInstallationScriptLink": {
          "canBeNull": true,
          "description": "Indicate the URL where your postinstall customisation script is located",
          "type": "string"
        },
        "postInstallationScriptReturn": {
          "canBeNull": true,
          "description": "indicate the string returned by your postinstall customisation script on successful execution. Advice: your script should return a unique validation string in case of succes. A good example is \"loh1Xee7eo OK OK OK UGh8Ang1Gu",
          "type": "string"
        },
        "rating": {
          "canBeNull": true,
          "description": "",
          "type": "long"
        },
        "sshKeyName": {
          "canBeNull": true,
          "description": "Name of the ssh key that should be installed. Password login will be disabled",
          "type": "string"
        },
        "useDistributionKernel": {
          "canBeNull": true,
          "description": "Use the distribution's native kernel instead of the recommended OVH Kernel",
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
          "type": "dedicated.TemplateOsLanguageEnum[]"
        },
        "beta": {
          "canBeNull": true,
          "description": "This distribution is new, and although tested and functional, may still display odd behaviour",
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "bitFormat": {
          "canBeNull": false,
          "description": "this template  bit format",
          "fullType": "dedicated.server.BitFormatEnum",
          "readOnly": true,
          "type": "dedicated.server.BitFormatEnum"
        },
        "category": {
          "canBeNull": false,
          "description": "category of this template (informative only)",
          "fullType": "dedicated.TemplateOsUsageEnum",
          "readOnly": true,
          "type": "dedicated.TemplateOsUsageEnum"
        },
        "customization": {
          "canBeNull": true,
          "description": "Customizable template properties ",
          "fullType": "dedicated.TemplateOsProperties",
          "readOnly": false,
          "type": "dedicated.TemplateOsProperties"
        },
        "defaultLanguage": {
          "canBeNull": false,
          "description": "the default language of this template",
          "fullType": "dedicated.TemplateOsLanguageEnum",
          "readOnly": false,
          "type": "dedicated.TemplateOsLanguageEnum"
        },
        "deprecated": {
          "canBeNull": true,
          "description": "is this distribution deprecated",
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "description": {
          "canBeNull": false,
          "description": "information about this template",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "distribution": {
          "canBeNull": false,
          "description": "the distribution this template is based on",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "family": {
          "canBeNull": false,
          "description": "this template family type",
          "fullType": "dedicated.TemplateOsTypeEnum",
          "readOnly": true,
          "type": "dedicated.TemplateOsTypeEnum"
        },
        "filesystems": {
          "canBeNull": false,
          "description": "list of all filesystems  available for this template",
          "fullType": "dedicated.TemplateOsFileSystemEnum[]",
          "readOnly": true,
          "type": "dedicated.TemplateOsFileSystemEnum[]"
        },
        "hardRaidConfiguration": {
          "canBeNull": true,
          "description": "This distribution supports hardware raid configuration through the OVH API",
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "lastModification": {
          "canBeNull": true,
          "description": "Date of last modification of the base image",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "lvmReady": {
          "canBeNull": true,
          "description": "This distribution supports Logical Volumes (Linux LVM)",
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "supportsDistributionKernel": {
          "canBeNull": true,
          "description": "This distribution supports installation using the distribution's native kernel instead of the recommended OVH kernel",
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "supportsGptLabel": {
          "canBeNull": true,
          "description": "This distribution supports the GUID Partition Table (GPT), providing up to 128 partitions that can have more than 2 TB",
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "supportsRTM": {
          "canBeNull": false,
          "description": "This distribution supports RTM software",
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "supportsSqlServer": {
          "canBeNull": true,
          "description": "This distribution supports the microsoft SQL server",
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "supportsUEFI": {
          "canBeNull": true,
          "description": "This distribution supports UEFI setup",
          "fullType": "dedicated.server.SupportsUEFIEnum",
          "readOnly": true,
          "type": "dedicated.server.SupportsUEFIEnum"
        },
        "templateName": {
          "canBeNull": false,
          "description": "This template name",
          "fullType": "string",
          "readOnly": false,
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
          "type": "string[]"
        },
        "mode": {
          "canBeNull": false,
          "description": "RAID mode",
          "fullType": "dedicated.TemplateOsHardwareRaidEnum",
          "readOnly": false,
          "type": "dedicated.TemplateOsHardwareRaidEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "Hardware RAID name",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "step": {
          "canBeNull": false,
          "description": "Specifies the creation order of the hardware RAID",
          "fullType": "long",
          "readOnly": false,
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
          "type": "string"
        },
        "priority": {
          "canBeNull": false,
          "description": "on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications)",
          "fullType": "long",
          "readOnly": false,
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
          "type": "dedicated.TemplateOsFileSystemEnum"
        },
        "mountpoint": {
          "canBeNull": false,
          "description": "partition mount point",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "order": {
          "canBeNull": false,
          "description": "specifies the creation order of the partition on the disk",
          "fullType": "long",
          "readOnly": false,
          "type": "long"
        },
        "raid": {
          "canBeNull": true,
          "description": "raid partition type",
          "fullType": "dedicated.server.PartitionRaidEnum",
          "readOnly": false,
          "type": "dedicated.server.PartitionRaidEnum"
        },
        "size": {
          "canBeNull": false,
          "description": "size of partition in Mb, 0 => rest of the space",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "type": {
          "canBeNull": false,
          "description": null,
          "fullType": "dedicated.TemplatePartitionTypeEnum",
          "readOnly": false,
          "type": "dedicated.TemplatePartitionTypeEnum"
        },
        "volumeName": {
          "canBeNull": true,
          "description": "The volume name needed for proxmox distribution",
          "fullType": "string",
          "readOnly": false,
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
    "domain.DocumentFormatsEnum": {
      "description": "Document file format",
      "enum": [
        "gif",
        "jpeg",
        "jpg",
        "pdf",
        "png"
      ],
      "enumType": "string",
      "id": "DocumentFormatsEnum",
      "namespace": "domain"
    },
    "domain.NicOperationFunctionEnum": {
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
      "enumType": "string",
      "id": "NicOperationFunctionEnum",
      "namespace": "domain"
    },
    "domain.OperationActionEnum": {
      "description": "operation Action",
      "enum": [
        "canCancel",
        "canCorrect",
        "canRelaunch",
        "canReset"
      ],
      "enumType": "string",
      "id": "OperationActionEnum",
      "namespace": "domain"
    },
    "domain.OperationStatusEnum": {
      "description": "Operation status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "OperationStatusEnum",
      "namespace": "domain"
    },
    "domain.OperationStep": {
      "description": "One step from an operation",
      "id": "OperationStep",
      "namespace": "domain",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description of the step",
          "type": "string"
        },
        "executionDuration": {
          "canBeNull": false,
          "description": "Execution time of the step",
          "type": "long"
        },
        "step": {
          "canBeNull": false,
          "description": "Name of the step",
          "type": "string"
        }
      }
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
          "type": "coreTypes.ContinentEnum"
        },
        "countryCode": {
          "canBeNull": false,
          "description": "Country iso code",
          "fullType": "coreTypes.CountryEnum",
          "readOnly": true,
          "type": "coreTypes.CountryEnum"
        },
        "ip": {
          "canBeNull": false,
          "description": "The IP address processed, the user's origin one",
          "fullType": "ip",
          "readOnly": true,
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
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Campaign name",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Campaign type",
          "fullType": "me.consent.CampaignTypeEnum",
          "readOnly": true,
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
          "type": "string"
        },
        "history": {
          "canBeNull": false,
          "description": "Consent decisions history for this campaign",
          "fullType": "me.consent.Decision[]",
          "readOnly": true,
          "type": "me.consent.Decision[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Campaign type",
          "fullType": "me.consent.CampaignTypeEnum",
          "readOnly": true,
          "type": "me.consent.CampaignTypeEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "Current consent value",
          "fullType": "boolean",
          "readOnly": true,
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
          "type": "datetime"
        },
        "value": {
          "canBeNull": false,
          "description": "Consent decision value",
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        }
      }
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
          "type": "me.payment.method.Icon"
        },
        "integration": {
          "canBeNull": false,
          "description": "Payment method integration type",
          "fullType": "payment.method.IntegrationType",
          "readOnly": false,
          "type": "payment.method.IntegrationType"
        },
        "oneshot": {
          "canBeNull": false,
          "description": "Payment method type is possible to pay in oneshot mode ?",
          "fullType": "boolean",
          "readOnly": false,
          "type": "boolean"
        },
        "paymentType": {
          "canBeNull": false,
          "description": "Payment method type",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "registerable": {
          "canBeNull": false,
          "description": "Payment method type is registerable ?",
          "fullType": "boolean",
          "readOnly": false,
          "type": "boolean"
        },
        "registerableWithTransaction": {
          "canBeNull": false,
          "description": "Payment method type is registerable with the possibility to pay in same time an order ?",
          "fullType": "boolean",
          "readOnly": false,
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
          "type": "string"
        },
        "error": {
          "canBeNull": false,
          "description": "URL when registration encounters an error",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "failure": {
          "canBeNull": false,
          "description": "URL when registration failed",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "pending": {
          "canBeNull": false,
          "description": "URL when payment method is in validation",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "success": {
          "canBeNull": false,
          "description": "URL when payment method registration success",
          "fullType": "string",
          "readOnly": false,
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
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Icon name",
          "fullType": "string",
          "readOnly": false,
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
          "type": "long"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": false,
          "type": "datetime"
        },
        "default": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "boolean",
          "readOnly": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": true,
          "description": "Custom customer description",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "expirationDate": {
          "canBeNull": true,
          "description": "Expiration date",
          "fullType": "datetime",
          "readOnly": false,
          "type": "datetime"
        },
        "icon": {
          "canBeNull": false,
          "description": "Payment method type icon",
          "fullType": "me.payment.method.Icon",
          "readOnly": false,
          "type": "me.payment.method.Icon"
        },
        "label": {
          "canBeNull": true,
          "description": "Payment method public label",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date",
          "fullType": "datetime",
          "readOnly": false,
          "type": "datetime"
        },
        "paymentMeanId": {
          "canBeNull": true,
          "description": "Payment mean ID associated to this payment method",
          "fullType": "long",
          "readOnly": false,
          "type": "long"
        },
        "paymentMethodId": {
          "canBeNull": false,
          "description": "Payment method ID",
          "fullType": "long",
          "readOnly": false,
          "type": "long"
        },
        "paymentSubType": {
          "canBeNull": true,
          "description": "Payment method sub-type",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "paymentType": {
          "canBeNull": false,
          "description": "Payment method type",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Payment method status",
          "fullType": "me.payment.method.PaymentMethod.Status",
          "readOnly": false,
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
          "type": "string"
        },
        "merchantId": {
          "canBeNull": true,
          "description": "Merchant ID",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "organizationId": {
          "canBeNull": true,
          "description": "Organization ID",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "paymentMethodId": {
          "canBeNull": false,
          "description": "Register new payment method ID",
          "fullType": "long",
          "readOnly": false,
          "type": "long"
        },
        "url": {
          "canBeNull": true,
          "description": "Register validation URL",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "validationType": {
          "canBeNull": false,
          "description": "Register validation type",
          "fullType": "payment.method.IntegrationType",
          "readOnly": false,
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
          "type": "order.Price"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Transaction status",
          "fullType": "me.payment.method.Transaction.Status",
          "readOnly": false,
          "type": "me.payment.method.Transaction.Status"
        },
        "transactionId": {
          "canBeNull": false,
          "description": "Transaction ID",
          "fullType": "long",
          "readOnly": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "Transaction type",
          "fullType": "me.payment.method.Transaction.Type",
          "readOnly": false,
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
          "type": "datetime"
        },
        "subject": {
          "canBeNull": false,
          "description": "Certificate's subject",
          "fullType": "string",
          "readOnly": true,
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
          "type": "datetime"
        },
        "defaultGroup": {
          "canBeNull": false,
          "description": "True if it is an default group. This kind of group can't be edited or deleted",
          "fullType": "boolean",
          "readOnly": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": false,
          "description": "Group's description",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update of this group",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Group's name",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "role": {
          "canBeNull": false,
          "description": "Group's role",
          "fullType": "nichandle.Authentication.RoleEnum",
          "readOnly": false,
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
          "type": "datetime"
        },
        "groupAttributeName": {
          "canBeNull": false,
          "description": "SAML Group attribute name",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "idpSigningCertificate": {
          "canBeNull": false,
          "description": "IdP's signing certificate",
          "fullType": "nichandle.Authentication.Certificate",
          "readOnly": true,
          "type": "nichandle.Authentication.Certificate"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update of the identity provider",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "ssoServiceUrl": {
          "canBeNull": false,
          "description": "IdP's Single Sign On Service Url",
          "fullType": "string",
          "readOnly": true,
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
          "type": "string"
        },
        "symbol": {
          "canBeNull": false,
          "description": "Currency symbol",
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
          "type": "boolean"
        }
      }
    },
    "nichandle.DomainTask": {
      "description": "Domain tasks",
      "id": "DomainTask",
      "namespace": "nichandle",
      "properties": {
        "canAccelerate": {
          "canBeNull": false,
          "description": "Can accelerate the task",
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "canCancel": {
          "canBeNull": false,
          "description": "Can cancel the task",
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "canRelaunch": {
          "canBeNull": false,
          "description": "Can relaunch the task",
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "comment": {
          "canBeNull": true,
          "description": "Comment about the task",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "domain": {
          "canBeNull": false,
          "description": "Domain of the task",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "doneDate": {
          "canBeNull": true,
          "description": "Done date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Function of the task",
          "fullType": "domain.NicOperationFunctionEnum",
          "readOnly": true,
          "type": "domain.NicOperationFunctionEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the task",
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the task",
          "fullType": "domain.OperationStatusEnum",
          "readOnly": true,
          "type": "domain.OperationStatusEnum"
        },
        "todoDate": {
          "canBeNull": false,
          "description": "Todo date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        }
      }
    },
    "nichandle.DomainTaskArgument": {
      "description": "Domain operation argument",
      "id": "DomainTaskArgument",
      "namespace": "nichandle",
      "properties": {
        "acceptedFormats": {
          "canBeNull": true,
          "description": "List of accepted formats",
          "fullType": "domain.DocumentFormatsEnum[]",
          "readOnly": true,
          "type": "domain.DocumentFormatsEnum[]"
        },
        "acceptedValues": {
          "canBeNull": true,
          "description": "List of accepted values",
          "fullType": "string[]",
          "readOnly": true,
          "type": "string[]"
        },
        "description": {
          "canBeNull": true,
          "description": "Description of the argument",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "fields": {
          "canBeNull": true,
          "description": "List of impacted field names",
          "fullType": "xander.ContactFieldEnum[]",
          "readOnly": true,
          "type": "xander.ContactFieldEnum[]"
        },
        "key": {
          "canBeNull": false,
          "description": "Key of the argument",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "maximumSize": {
          "canBeNull": true,
          "description": "Maximum of the content length that you can send",
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "minimumSize": {
          "canBeNull": true,
          "description": "Minimum of the content length that you can send",
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "readOnly": {
          "canBeNull": false,
          "description": "True if the argument is in read only",
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "template": {
          "canBeNull": true,
          "description": "Template of the content",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the argument",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "value": {
          "canBeNull": true,
          "description": "Value of the argument",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        }
      }
    },
    "nichandle.DomainTaskProgressBar": {
      "description": "Domain operation progress",
      "id": "DomainTaskProgressBar",
      "namespace": "nichandle",
      "properties": {
        "currentStep": {
          "canBeNull": false,
          "description": "Current step of the operation",
          "fullType": "domain.OperationStep",
          "readOnly": true,
          "type": "domain.OperationStep"
        },
        "expectedDoneDate": {
          "canBeNull": true,
          "description": "The estimated end date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "followUpSteps": {
          "canBeNull": true,
          "description": "all the steps of operation",
          "fullType": "domain.OperationStep[]",
          "readOnly": true,
          "type": "domain.OperationStep[]"
        },
        "lastUpdateDate": {
          "canBeNull": true,
          "description": "The last update date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "progress": {
          "canBeNull": false,
          "description": "Progress percentage of the task",
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "taskActions": {
          "canBeNull": false,
          "description": "Action possible on task",
          "fullType": "domain.OperationActionEnum[]",
          "readOnly": true,
          "type": "domain.OperationActionEnum[]"
        },
        "taskStatus": {
          "canBeNull": false,
          "description": "The status of the task",
          "fullType": "domain.OperationStatusEnum",
          "readOnly": true,
          "type": "domain.OperationStatusEnum"
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
          "type": "long"
        },
        "ip": {
          "canBeNull": false,
          "description": "An IP range where we will apply the rule",
          "fullType": "ipBlock",
          "readOnly": true,
          "type": "ipBlock"
        },
        "rule": {
          "canBeNull": false,
          "description": "Accept or deny IP access",
          "fullType": "nichandle.accessRestriction.IpRestrictionRuleEnum",
          "readOnly": false,
          "type": "nichandle.accessRestriction.IpRestrictionRuleEnum"
        },
        "warning": {
          "canBeNull": false,
          "description": "Send an email if someone try to access with this IP address",
          "fullType": "boolean",
          "readOnly": false,
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
          "type": "nichandle.accessRestriction.IpRestrictionRuleEnum"
        },
        "warning": {
          "canBeNull": false,
          "description": "Send an email if someone try to access",
          "fullType": "boolean",
          "readOnly": false,
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
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "address": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "city": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "country": {
          "canBeNull": false,
          "description": null,
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "type": "nichandle.CountryEnum"
        },
        "firstname": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "lastname": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "organisationId": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "phone": {
          "canBeNull": false,
          "description": null,
          "fullType": "phoneNumber",
          "readOnly": false,
          "type": "phoneNumber"
        },
        "registry": {
          "canBeNull": false,
          "description": null,
          "fullType": "nichandle.IpRegistryEnum",
          "readOnly": true,
          "type": "nichandle.IpRegistryEnum"
        },
        "state": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "zip": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
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
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "This preference value",
          "fullType": "text",
          "readOnly": false,
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
          "type": "boolean"
        },
        "lastRenew": {
          "canBeNull": true,
          "description": "give the last renew",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "renewDay": {
          "canBeNull": false,
          "description": "give the renewal day",
          "fullType": "long",
          "readOnly": false,
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
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "area": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "birthCity": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "birthDay": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "city": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "companyNationalIdentificationNumber": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "corporationType": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "country": {
          "canBeNull": false,
          "description": null,
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "type": "nichandle.CountryEnum"
        },
        "currency": {
          "canBeNull": false,
          "description": "Customer currency",
          "fullType": "nichandle.Currency",
          "readOnly": true,
          "type": "nichandle.Currency"
        },
        "customerCode": {
          "canBeNull": true,
          "description": "Your customer code (a numerical value used for identification when contacting support via phone call)",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "email": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "fax": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "firstname": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "italianSDI": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "language": {
          "canBeNull": true,
          "description": null,
          "fullType": "nichandle.LanguageEnum",
          "readOnly": false,
          "type": "nichandle.LanguageEnum"
        },
        "legalform": {
          "canBeNull": false,
          "description": null,
          "fullType": "nichandle.LegalFormEnum",
          "readOnly": false,
          "type": "nichandle.LegalFormEnum"
        },
        "name": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "nationalIdentificationNumber": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "nichandle": {
          "canBeNull": false,
          "description": null,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "type": "string"
        },
        "organisation": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "ovhCompany": {
          "canBeNull": false,
          "description": null,
          "fullType": "nichandle.OvhCompanyEnum",
          "readOnly": true,
          "type": "nichandle.OvhCompanyEnum"
        },
        "ovhSubsidiary": {
          "canBeNull": false,
          "description": null,
          "fullType": "nichandle.OvhSubsidiaryEnum",
          "readOnly": true,
          "type": "nichandle.OvhSubsidiaryEnum"
        },
        "phone": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "phoneCountry": {
          "canBeNull": true,
          "description": null,
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "type": "nichandle.CountryEnum"
        },
        "sex": {
          "canBeNull": true,
          "description": null,
          "fullType": "nichandle.GenderEnum",
          "readOnly": false,
          "type": "nichandle.GenderEnum"
        },
        "spareEmail": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": null,
          "fullType": "nichandle.StateEnum",
          "readOnly": true,
          "type": "nichandle.StateEnum"
        },
        "vat": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "zip": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
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
          "type": "boolean"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "phoneNumber": {
          "canBeNull": false,
          "description": "The phone number you want to receive notification on",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of your notification",
          "fullType": "nichandle.NotificationStatusEnum",
          "readOnly": true,
          "type": "nichandle.NotificationStatusEnum"
        },
        "updateDate": {
          "canBeNull": true,
          "description": "Last update date",
          "fullType": "datetime",
          "readOnly": true,
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
          "type": "datetime"
        },
        "description": {
          "canBeNull": true,
          "description": "This sub-account description",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "This sub-account id",
          "fullType": "long",
          "readOnly": true,
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
          "type": "boolean"
        },
        "type": {
          "canBeNull": false,
          "description": "The type of subscription",
          "fullType": "string",
          "readOnly": true,
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
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "User's description",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "email": {
          "canBeNull": false,
          "description": "User's email",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "group": {
          "canBeNull": false,
          "description": "User's group",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update of this user",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "login": {
          "canBeNull": false,
          "description": "User's login suffix",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "passwordLastUpdate": {
          "canBeNull": false,
          "description": "When the user changed his password for the last time",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Current user's status",
          "fullType": "nichandle.UserStatus",
          "readOnly": true,
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
          "type": "datetime"
        },
        "lastUsedDate": {
          "canBeNull": true,
          "description": "Last used date",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "remaining": {
          "canBeNull": false,
          "description": "Number of remaining codes",
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of this account",
          "fullType": "nichandle.accessRestriction.SOTPStatusEnum",
          "readOnly": true,
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
          "description": null,
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
          "description": null,
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
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of this phone",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "The Id of the restriction",
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "lastUsedDate": {
          "canBeNull": true,
          "description": "Last used date",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "phoneNumber": {
          "canBeNull": false,
          "description": "Associated phone number",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of this account",
          "fullType": "nichandle.accessRestriction.SmsStatusEnum",
          "readOnly": true,
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
          "description": null,
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
          "description": null,
          "type": "long"
        },
        "remainingTry": {
          "canBeNull": false,
          "description": null,
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
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of this TOTP",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "The Id of the restriction",
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "lastUsedDate": {
          "canBeNull": true,
          "description": "Last used date",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of this account",
          "fullType": "nichandle.accessRestriction.TOTPStatusEnum",
          "readOnly": true,
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
          "description": null,
          "type": "long"
        },
        "qrcodeHelper": {
          "canBeNull": false,
          "description": null,
          "type": "password"
        },
        "secret": {
          "canBeNull": false,
          "description": null,
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
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of this U2F key",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "The Id of the restriction",
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "lastUsedDate": {
          "canBeNull": true,
          "description": "Last used date",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of this account",
          "fullType": "nichandle.accessRestriction.U2FStatusEnum",
          "readOnly": true,
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
          "description": null,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": null,
          "type": "long"
        },
        "request": {
          "canBeNull": false,
          "description": null,
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
          "description": null,
          "type": "string"
        },
        "version": {
          "canBeNull": false,
          "description": null,
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
          "description": null,
          "type": "string"
        },
        "request": {
          "canBeNull": false,
          "description": null,
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
          "description": null,
          "type": "string"
        },
        "keyHandle": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "version": {
          "canBeNull": false,
          "description": null,
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
          "type": "string"
        },
        "contactTypes": {
          "canBeNull": false,
          "description": "Contacts to be changed",
          "fullType": "nichandle.changeContact.ContactTypeEnum[]",
          "readOnly": true,
          "type": "nichandle.changeContact.ContactTypeEnum[]"
        },
        "dateDone": {
          "canBeNull": true,
          "description": "Date at which the contact change has been finished",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "dateRequest": {
          "canBeNull": false,
          "description": "Date at which the request has been made",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "fromAccount": {
          "canBeNull": false,
          "description": "Account to change contact from",
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "serviceDomain": {
          "canBeNull": true,
          "description": "The service on which the task runs",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of the request",
          "fullType": "nichandle.changeContact.TaskStateEnum",
          "readOnly": true,
          "type": "nichandle.changeContact.TaskStateEnum"
        },
        "toAccount": {
          "canBeNull": false,
          "description": "Account to change contact to",
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
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
          "type": "datetime"
        },
        "expirationDate": {
          "canBeNull": true,
          "description": "Document expiration",
          "fullType": "datetime",
          "readOnly": false,
          "type": "datetime"
        },
        "getUrl": {
          "canBeNull": false,
          "description": "URL used to get document",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Document id",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Document name",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "putUrl": {
          "canBeNull": false,
          "description": "URL used to put document",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Document size (in bytes)",
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "tags": {
          "canBeNull": false,
          "description": "Document tags",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "readOnly": true,
          "type": "complexType.SafeKeyValue<string>[]"
        },
        "validationDate": {
          "canBeNull": true,
          "description": "Document validation",
          "fullType": "datetime",
          "readOnly": true,
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
          "type": "datetime"
        },
        "dateRequest": {
          "canBeNull": false,
          "description": "Creation date of that request",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "newEmail": {
          "canBeNull": false,
          "description": "The email address to change for",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of the request",
          "fullType": "nichandle.changeEmail.TaskStateEnum",
          "readOnly": true,
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
          "type": "text"
        },
        "date": {
          "canBeNull": false,
          "description": "This email date",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "This email Id",
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "subject": {
          "canBeNull": false,
          "description": "This email subject",
          "fullType": "string",
          "readOnly": true,
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
          "type": "string"
        },
        "script": {
          "canBeNull": false,
          "description": "Content of your IPXE script",
          "fullType": "text",
          "readOnly": true,
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
          "type": "boolean"
        },
        "key": {
          "canBeNull": false,
          "description": "ASCII encoded public SSH key",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "keyName": {
          "canBeNull": false,
          "description": "Name of this public SSH key",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        }
      }
    },
    "order.CurrencyCodeEnum": {
      "description": "",
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
      "description": "Price with it's currency and textual representation",
      "id": "Price",
      "namespace": "order",
      "properties": {
        "currencyCode": {
          "canBeNull": false,
          "description": null,
          "type": "order.CurrencyCodeEnum"
        },
        "text": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": null,
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
          "type": "payment.method.Icon"
        },
        "integration": {
          "canBeNull": false,
          "description": "Graphical payment integration to use",
          "type": "payment.method.IntegrationType"
        },
        "oneshot": {
          "canBeNull": false,
          "description": "Payment method type is possible to pay in oneshot mode ?",
          "type": "boolean"
        },
        "paymentType": {
          "canBeNull": false,
          "description": "Payment method type",
          "type": "string"
        },
        "registerable": {
          "canBeNull": false,
          "description": "Payment method type is registerable ?",
          "type": "boolean"
        },
        "registerableWithTransaction": {
          "canBeNull": false,
          "description": "Payment method type is registerable with the possibility to pay in same time an order ?",
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
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Icon name",
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
    "xander.ContactFieldEnum": {
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
      "enumType": "string",
      "id": "ContactFieldEnum",
      "namespace": "xander"
    }
  },
  "resourcePath": "/me"
}