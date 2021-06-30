import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/me.json

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
          "responseType": "nichandle.Nichandle",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "me.abuse.Abuse",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.accessRestriction.SOTPAccount",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.accessRestriction.SOTPSecret",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.accessRestriction.SOTPValidate",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.DeveloperModeRestriction",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.IpRestriction",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.IpRestrictionDefaultRule",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.accessRestriction.SmsSecret",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.accessRestriction.SmsAccount",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.accessRestriction.SmsCode",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.accessRestriction.TOTPSecret",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.accessRestriction.TOTPAccount",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.accessRestriction.U2FRegisterChallenge",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.accessRestriction.U2FAccount",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.accessRestriction.U2FSignChallenge",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "agreements.ContractAgreement",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "agreements.Contract",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "api.Application",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "api.Credential",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "api.Application",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/api/credential/{credentialId}/application"
    },
    {
      "description": "List the api.Log objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of Api calls done with your account",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/api/logs/self"
    },
    {
      "description": "API Log",
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
              "name": "logId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "api.Log",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/api/logs/self/{logId}"
    },
    {
      "description": "List the api.Log objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of Api calls done on services you have access to",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/api/logs/services"
    },
    {
      "description": "API Log",
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
              "name": "logId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "api.Log",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/api/logs/services/{logId}"
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
          "responseType": "nichandle.NicAutorenewInfos",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "noAuthentication": false,
          "parameters": [],
          "responseType": "billing.AutomaticPaymentMean",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Bill",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "debt.Debt",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "debt.Operation",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "debt.entry.AssociatedObject",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Order",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.BillDetail",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Payment",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/bill/export"
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
          "responseType": "long[]",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "me.billing.group.BillingGroup",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "void",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "me.billing.group.BillingGroup",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "void",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "me.billing.group.Service",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "void",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "me.billing.group.Service",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/billing/group/{groupId}/service/{serviceId}"
    },
    {
      "description": "invoicesByPostalMail operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Send invoices through postal mail",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "boolean",
          "scopes": [
            "all",
            "account/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Enable or disable invoices by postal mail",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Send invoices through postal mail",
              "fullType": "boolean",
              "name": "enable",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/billing/invoicesByPostalMail"
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.emailChange.Task",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "me.consent.Campaign[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "me.consent.Campaign",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "me.consent.Consent",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "me.consumption.Transaction[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "me.consumption.Transaction[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "me.consumption.Transaction[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "contact.Contact",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "contact.Contact",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "contact.Contact",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "contact.FieldInformation[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "me.credit.Balance",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "me.credit.balance.Movement",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "me.credit.balance.Movement",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "noAuthentication": false,
          "parameters": [],
          "responseType": "debt.Balance",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
              "description": "",
              "fullType": "long",
              "name": "debtId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "debt.Debt",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "debt.Operation",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "debt.entry.AssociatedObject",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Order",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "noAuthentication": false,
          "parameters": [],
          "responseType": "billing.Order",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Deposit",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.DepositDetail",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Bill",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "debt.Debt",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "debt.Operation",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "debt.entry.AssociatedObject",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Order",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.BillDetail",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Payment",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Payment",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.document.Document",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
              "description": "Document id",
              "fullType": "string",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "nichandle.document.Document",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/document/cors"
    },
    {
      "description": "List the telephony.MailDomain2Service objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the fax custom domains linked to the customer account",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a custom domain for your fax services",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The custom domain of your fax services",
              "fullType": "string",
              "name": "domain",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "telephony.MailDomain2Service",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/fax/customDomains"
    },
    {
      "description": "Custom domains of your fax services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a custom domain of your fax services",
          "httpMethod": "DELETE",
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "telephony.MailDomain2Service",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/fax/customDomains/{id}"
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
          "responseType": "billing.FidelityAccount",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Order",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.FidelityMovement",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.Authentication.Group",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.Authentication.Group",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.User",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "noAuthentication": false,
          "parameters": [],
          "responseType": "me.incident.ServiceMigration[]",
          "scopes": [
            "account/all",
            "all"
          ]
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Ask for impacted services migration",
          "httpMethod": "POST",
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
          "responseType": "me.incident.Order",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/incident/sbg/migrateServices"
    },
    {
      "description": "Retrieve your insight access token. This token give you access to all your products metrics (cloud instances, dedicated servers, load balancers, ...)",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get your insight access token",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "insight.Access",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/insight"
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "dedicated.installationTemplate.Templates",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "dedicated.installationTemplate.templatePartitioningSchemes",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "dedicated.installationTemplate.hardwareRaid",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "dedicated.installationTemplate.templatePartitions",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.Ipv4Org",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.ipxe",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.ipxe",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/mailingList/subscribe"
    },
    {
      "description": "Manage country migration",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve all country migrations",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/migration"
    },
    {
      "description": "Manage country migration",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve information about a country migration",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Migration ID",
              "fullType": "long",
              "name": "migrationId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.Migration",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/migration/{migrationId}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve all contracts for a billing country migration",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Migration ID",
              "fullType": "long",
              "name": "migrationId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/migration/{migrationId}/contract"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve detail about a contract for a billing country migration",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Contract ID",
              "fullType": "long",
              "name": "contractId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Migration ID",
              "fullType": "long",
              "name": "migrationId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.migration.Contract",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/migration/{migrationId}/contract/{contractId}"
    },
    {
      "description": "Accept contract",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Accept contract",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Contract ID",
              "fullType": "long",
              "name": "contractId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Migration ID",
              "fullType": "long",
              "name": "migrationId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.agreements.ContractAgreement",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/migration/{migrationId}/contract/{contractId}/accept"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve agreement for this contract",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Contract ID",
              "fullType": "long",
              "name": "contractId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Migration ID",
              "fullType": "long",
              "name": "migrationId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "me.agreements.ContractAgreement",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/migration/{migrationId}/contract/{contractId}/agreement"
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/notification/email/history"
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
          "responseType": "nichandle.emailNotification",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Order",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.order.AssociatedObject",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.order.RegisteredPaymentMean[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.CreditBalance",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
        },
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
          "responseType": "billing.CreditBalance",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/order/{orderId}/balance/{balanceName}"
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
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Bill",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/order/{orderId}/bill"
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
          "responseType": "billing.order.ConsumptionDetails",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "debt.Debt",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "debt.Operation",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "debt.entry.AssociatedObject",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Order",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.OrderDetail",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.ItemDetail",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.order.FollowUp[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Payment",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.order.PaymentMeans",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.order.PaymentMethods",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/order/{orderId}/payWithRegisteredPaymentMean"
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
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.Refund",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/order/{orderId}/refund"
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
              "description": "",
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.order.OrderStatusEnum",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/order/{orderId}/status"
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "ovhAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "billing.OvhAccount",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Order",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Movement",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Order",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/ovhAccount/{ovhAccountId}/retrieveMoney"
    },
    {
      "description": "Fetch the partner level of the account",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Fetch the partner level of the account",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "me.partnerLevel.Level",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/partnerLevel"
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
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Retrieve available payment method",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "me.payment.AvailablePaymentMethod[]",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/payment/availableMethods"
    },
    {
      "description": "Manage payment method",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Retrieve payment method list",
          "httpMethod": "GET",
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
          "responseType": "long[]",
          "scopes": [
            "account/all",
            "all"
          ]
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Register a new payment method",
          "httpMethod": "POST",
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
          "responseType": "me.payment.method.Validation",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/payment/method"
    },
    {
      "description": "Manage payment method",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Delete a payment method",
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
          "responseType": "me.payment.PaymentMethod",
          "scopes": [
            "account/all",
            "all"
          ]
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Retrieve a payment method",
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
          "responseType": "me.payment.PaymentMethod",
          "scopes": [
            "account/all",
            "all"
          ]
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Edit payment method",
          "httpMethod": "PUT",
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
          "responseType": "me.payment.PaymentMethod",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/payment/method/{paymentMethodId}"
    },
    {
      "description": "Challenge operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Challenge your payment method",
          "httpMethod": "POST",
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
          "responseType": "void",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/payment/method/{paymentMethodId}/challenge"
    },
    {
      "description": "Add details to your payment method challenge",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Add details to your payment method challenge",
          "httpMethod": "POST",
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
          "responseType": "me.payment.method.Validation",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/payment/method/{paymentMethodId}/details"
    },
    {
      "description": "Finalize operation",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Finalize a payment method registration",
          "httpMethod": "POST",
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
          "responseType": "me.payment.PaymentMethod",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/payment/method/{paymentMethodId}/finalize"
    },
    {
      "description": "Manage payment transaction",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Retrieve payment transaction list",
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
              "dataType": "me.payment.transaction.StatusEnum",
              "description": "Status",
              "fullType": "me.payment.transaction.StatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/payment/transaction"
    },
    {
      "description": "Manage payment transaction",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Retrieve a transaction",
          "httpMethod": "GET",
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
          "responseType": "me.payment.Transaction",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/payment/transaction/{transactionId}"
    },
    {
      "description": "List the payment mean credit cards",
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
              "dataType": "me.paymentMean.BankAccountStateEnum",
              "description": "Filter on 'status' property",
              "fullType": "me.paymentMean.BankAccountStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "account/all",
            "all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new payment mean bank account",
          "httpMethod": "POST",
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
          "responseType": "me.paymentMean.BankAccountValidation",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/paymentMean/bankAccount"
    },
    {
      "description": "List the payment mean credit cards",
      "operations": [
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
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "account/all",
            "all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get bank account properties",
          "httpMethod": "GET",
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
          "responseType": "me.paymentMean.BankAccount",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "void",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/paymentMean/bankAccount/{id}"
    },
    {
      "description": "Challenge your bank account",
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
          "responseType": "void",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/paymentMean/bankAccount/{id}/challenge"
    },
    {
      "description": "Choose this bank account as your default payment mean. Will cancel the previous choice.",
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
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/paymentMean/bankAccount/{id}/chooseAsDefaultPaymentMean"
    },
    {
      "description": "List the payment mean credit cards",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of payment mean credit cards",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]",
          "scopes": [
            "account/all",
            "all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new payment mean credit card",
          "httpMethod": "POST",
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
          "responseType": "me.paymentMean.CreditCardValidation",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/paymentMean/creditCard"
    },
    {
      "description": "List the payment mean credit cards",
      "operations": [
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
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "account/all",
            "all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get credit card properties",
          "httpMethod": "GET",
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
          "responseType": "me.paymentMean.CreditCard",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "void",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/paymentMean/creditCard/{id}"
    },
    {
      "description": "Challenge operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Challenge your credit card",
          "httpMethod": "POST",
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
          "responseType": "void",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/paymentMean/creditCard/{id}/challenge"
    },
    {
      "description": "Choose this credit card as default",
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
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "me.paymentMean.Deferred",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "void",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "void",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/paymentMean/deferredPaymentAccount/{id}/chooseAsDefaultPaymentMean"
    },
    {
      "description": "List the payment mean paypals",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of payment mean paypals",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]",
          "scopes": [
            "account/all",
            "all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new payment mean paypal",
          "httpMethod": "POST",
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
          "responseType": "me.paymentMean.PaypalValidation",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/paymentMean/paypal"
    },
    {
      "description": "List the payment mean paypals",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable payment through this paypal",
          "httpMethod": "DELETE",
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
          "responseType": "void",
          "scopes": [
            "account/all",
            "all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get paypal properties",
          "httpMethod": "GET",
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
          "responseType": "me.paymentMean.Paypal",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "void",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/paymentMean/paypal/{id}"
    },
    {
      "description": "Challenge operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Challenge your paypal",
          "httpMethod": "POST",
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
          "responseType": "void",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/paymentMean/paypal/{id}/challenge"
    },
    {
      "description": "Choose this paypal as default",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Choose this paypal as your default payment mean. Will cancel the previous choice.",
          "httpMethod": "POST",
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
          "responseType": "void",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Refund",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.RefundDetail",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Payment",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/refund/export"
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.SlaOperation",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "boolean",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.SlaOperationService[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.sshKey",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "long",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.SubAccount",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.SubAccountConsumerKey",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.Subscription",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/subscription/{subscriptionType}"
    },
    {
      "description": "Fetch the support level of the account",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Fetch the support level of the account",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "me.SupportLevel.Level",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/supportLevel"
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
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]",
          "scopes": [
            "account/all",
            "all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Activate customer tag",
          "httpMethod": "POST",
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
          "responseType": "me.tag.Tag",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "responseType": "me.tag.Tag",
          "scopes": [
            "account/all",
            "all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve a customer tag",
          "httpMethod": "GET",
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
          "responseType": "me.tag.Tag",
          "scopes": [
            "account/all",
            "all"
          ]
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
          "noAuthentication": false,
          "parameters": [],
          "responseType": "me.tag.AvailableTag[]",
          "scopes": [
            "account/all",
            "all"
          ]
        }
      ],
      "path": "/me/tag/available"
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.contactChange.Task",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/task/contactChange/{id}/resendEmail"
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/task/domain"
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
          "responseType": "nichandle.DomainTask",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/task/domain/{id}"
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/task/domain/{id}/accelerate"
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.DomainTaskArgument",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/task/domain/{id}/cancel"
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
          "responseType": "nichandle.DomainTaskProgressBar",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/task/domain/{id}/progressbar"
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/task/domain/{id}/relaunch"
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.emailChange.Task",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/task/emailChange/{id}/refuse"
    },
    {
      "description": "List the telephony.DefaultIpRestriction objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "The default SIP IP restictions for your future VoIP lines",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]",
          "scopes": [
            "all",
            "account/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a default IP restriction for your future VoIP lines",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4Block",
              "description": "The IPv4 subnet you want to allow",
              "fullType": "ipv4Block",
              "name": "subnet",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "telephony.ProtocolEnum",
              "description": "The protocol you want to restrict (sip/mgcp)",
              "fullType": "telephony.ProtocolEnum",
              "name": "type",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "telephony.DefaultIpRestriction",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/telephony/defaultIpRestriction"
    },
    {
      "description": "Default IP restriction of a VoIP line",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a default IP restriction for your future VoIP lines",
          "httpMethod": "DELETE",
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
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
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
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "telephony.DefaultIpRestriction",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/telephony/defaultIpRestriction/{id}"
    },
    {
      "description": "settings operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the telephony settings linked to the customer account",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "telephony.Settings",
          "scopes": [
            "all",
            "account/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the telephony settings linked to the customer account",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "telephony.Settings",
              "description": "Settings to be changed",
              "fullType": "telephony.Settings",
              "name": "settings",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/telephony/settings"
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
          "responseType": "nichandle.VipStatus",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "nichandle.VoucherStatus",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Withdrawal",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.WithdrawalDetail",
          "scopes": [
            "all",
            "account/all"
          ]
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
          "responseType": "billing.Payment",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/withdrawal/{withdrawalId}/payment"
    },
    {
      "description": "setting operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get xdsl settings linked to the nichandle",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "xdsl.Setting",
          "scopes": [
            "all",
            "account/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change xdsl settings linked to the nichandle",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Send the modem as soon as possible, do not wait the xdsl line to be active",
              "fullType": "boolean",
              "name": "resellerFastModemShipping",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Let the modem with vendor configuration. It prevent to apply the config managed by ovh manager",
              "fullType": "boolean",
              "name": "resellerModemBasicConfig",
              "paramType": "body",
              "required": false
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "account/all"
          ]
        }
      ],
      "path": "/me/xdsl/setting"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
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
    "api.Log": {
      "description": "API Log",
      "id": "Log",
      "namespace": "api",
      "properties": {
        "account": {
          "canBeNull": false,
          "description": "Account which did the Request",
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "date": {
          "canBeNull": false,
          "description": "Date of the request",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "ip": {
          "canBeNull": true,
          "description": "Source IP of the request",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "logId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "method": {
          "canBeNull": false,
          "description": "HTTP Method of the request",
          "fullType": "http.MethodEnum",
          "readOnly": true,
          "required": false,
          "type": "http.MethodEnum"
        },
        "path": {
          "canBeNull": false,
          "description": "HTTP URI of the request",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "route": {
          "canBeNull": false,
          "description": "API Route called",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
    "billing.BankAccount": {
      "description": "SEPA bank account info",
      "id": "BankAccount",
      "namespace": "billing",
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
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "icon": {
          "canBeNull": true,
          "description": "Payment method type icon",
          "fullType": "billing.paymentMethod.IconData",
          "readOnly": true,
          "required": false,
          "type": "billing.paymentMethod.IconData"
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ownerName": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "fullType": "billing.BankAccountStateEnum",
          "readOnly": true,
          "required": false,
          "type": "billing.BankAccountStateEnum"
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
    "billing.BillingTaskStatusEnum": {
      "description": "billing task status",
      "enum": [
        "cancelled",
        "customerError",
        "doing",
        "done",
        "init",
        "ovhError",
        "todo"
      ],
      "enumType": "string",
      "id": "BillingTaskStatusEnum",
      "namespace": "billing"
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
    "billing.CreditCard": {
      "description": "Credit card informations",
      "id": "CreditCard",
      "namespace": "billing",
      "properties": {
        "defaultPaymentMean": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": true,
          "description": "Custom description of this account",
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
          "fullType": "billing.paymentMethod.IconData",
          "readOnly": true,
          "required": false,
          "type": "billing.paymentMethod.IconData"
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "fullType": "billing.CreditCardStateEnum",
          "readOnly": true,
          "required": false,
          "type": "billing.CreditCardStateEnum"
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "defaultPaymentMean": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": true,
          "description": "Custom description of this account",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "icon": {
          "canBeNull": true,
          "description": "Payment method type icon",
          "fullType": "billing.paymentMethod.IconData",
          "readOnly": true,
          "required": false,
          "type": "billing.paymentMethod.IconData"
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
          "fullType": "billing.DeferredPaymentAccountStatusEnum",
          "readOnly": true,
          "required": false,
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
    "billing.ManualDomainPaymentStatus": {
      "description": "Status of your manual domain payment migration",
      "id": "ManualDomainPaymentStatus",
      "namespace": "billing",
      "properties": {
        "domainsToMigrate": {
          "canBeNull": true,
          "description": "Total number of domains that needs to be migrated to manual renew mode",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "migratedDomains": {
          "canBeNull": true,
          "description": "Total number of domains successfully migrated to manual renew mode",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "billing.BillingTaskStatusEnum"
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
    "billing.Paypal": {
      "description": "Paypal account info",
      "id": "Paypal",
      "namespace": "billing",
      "properties": {
        "agreementId": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "creationDate": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "defaultPaymentMean": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": true,
          "description": "Custom description of this account",
          "fullType": "string",
          "readOnly": false,
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
        "icon": {
          "canBeNull": true,
          "description": "Payment method type icon",
          "fullType": "billing.paymentMethod.IconData",
          "readOnly": true,
          "required": false,
          "type": "billing.paymentMethod.IconData"
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
          "fullType": "billing.PaypalStateEnum",
          "readOnly": true,
          "required": false,
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
        "ENTERPRISE",
        "INTERNAL_TRUSTED_ACCOUNT",
        "PAYPAL",
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
    "billing.paymentMethod.IconData": {
      "description": "Payment method type icon",
      "id": "IconData",
      "namespace": "billing.paymentMethod",
      "properties": {
        "data": {
          "canBeNull": true,
          "description": "Icon in base64",
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
        "CURRENT_ACCOUNT",
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
        "CANCEL",
        "CASH_MANUAL",
        "CHECK_MANUAL",
        "CREDITCARD",
        "CREDITCARD_AUTOMATIC",
        "CREDITCARD_MANUAL",
        "CREDIT_ACCOUNT_AUTOMATIC",
        "EDINAR_MANUAL",
        "IDEAL_AUTOMATIC",
        "IDEAL_MANUAL",
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
        "REFUND_IDEAL",
        "REFUND_LOSS",
        "REFUND_MULTIBANCO",
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
        "UNPAID_IDEAL",
        "UNPAID_MULTIBANCO",
        "UNPAID_PAYPAL",
        "UNPAID_PAYU",
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
        }
      }
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
        "aos",
        "arch",
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
        "slackware",
        "smartos",
        "solusvm",
        "suse",
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
        "DomainAfterMarket",
        "DomainContactControl",
        "DomainContactUpdate",
        "DomainControl",
        "DomainCreate",
        "DomainDelete",
        "DomainDnsUpdate",
        "DomainDsUpdate",
        "DomainEmailRedirectionsCreate",
        "DomainEmailRedirectionsDelete",
        "DomainHold",
        "DomainHostCreate",
        "DomainHostDelete",
        "DomainHostUpdate",
        "DomainIncomingTransfer",
        "DomainLock",
        "DomainOutgoingTransfer",
        "DomainRegistryDelete",
        "DomainRenew",
        "DomainResourceDelete",
        "DomainRestore",
        "DomainTrade",
        "DomainUnhold",
        "DomainUnlock",
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "executionDuration": {
          "canBeNull": false,
          "description": "Execution time of the step",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "step": {
          "canBeNull": false,
          "description": "Name of the step",
          "readOnly": false,
          "required": false,
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
    "insight.Access": {
      "description": "Insight access token",
      "id": "Access",
      "namespace": "insight",
      "properties": {
        "access": {
          "canBeNull": false,
          "description": "Access token",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Token creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "expireAt": {
          "canBeNull": false,
          "description": "Token expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
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
    "me.SupportLevel.Level": {
      "description": "Support level of an account",
      "id": "Level",
      "namespace": "me.SupportLevel",
      "properties": {
        "level": {
          "canBeNull": false,
          "description": "Level of support",
          "fullType": "me.SupportLevel.LevelTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "me.SupportLevel.LevelTypeEnum"
        }
      }
    },
    "me.SupportLevel.LevelTypeEnum": {
      "description": "Type of level",
      "enum": [
        "standard",
        "premium",
        "premium-accredited",
        "business",
        "enterprise"
      ],
      "enumType": "string",
      "id": "LevelTypeEnum",
      "namespace": "me.SupportLevel"
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
    "me.billing.purchaseOrder.Creation": {
      "description": "Purchase order creation payload",
      "id": "Creation",
      "namespace": "me.billing.purchaseOrder",
      "properties": {
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
        }
      }
    },
    "me.billing.purchaseOrder.PurchaseOrder": {
      "description": "Purchase Order",
      "id": "PurchaseOrder",
      "namespace": "me.billing.purchaseOrder",
      "properties": {
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
        }
      }
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
        }
      }
    },
    "me.billing.tasks.Task": {
      "description": "Asynchronous task related to Billing",
      "id": "Task",
      "namespace": "me.billing.tasks",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Unique identifier of the Task",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "metadata": {
          "canBeNull": false,
          "description": "Metadata linked to the Task. Will help you determine which object it relates to",
          "fullType": "me.billing.tasks.TaskMetadatum[]",
          "readOnly": true,
          "required": false,
          "type": "me.billing.tasks.TaskMetadatum[]"
        },
        "name": {
          "canBeNull": false,
          "description": "Describes which Task is being performed",
          "fullType": "me.billing.tasks.TaskNameEnum",
          "readOnly": true,
          "required": false,
          "type": "me.billing.tasks.TaskNameEnum"
        },
        "status": {
          "canBeNull": false,
          "description": "Current status of the Task",
          "fullType": "me.billing.tasks.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "me.billing.tasks.TaskStatusEnum"
        },
        "step": {
          "canBeNull": false,
          "description": "Current step of the Task. The step depends on the Task name.",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "me.billing.tasks.TaskMetadatum": {
      "description": "Metadatum linked to a Task",
      "id": "TaskMetadatum",
      "namespace": "me.billing.tasks",
      "properties": {
        "key": {
          "canBeNull": false,
          "description": "Metadatum key",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Metadatum value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "me.billing.tasks.TaskNameEnum": {
      "description": "Billing tasks names",
      "enum": [
        "contact/change"
      ],
      "enumType": "string",
      "id": "TaskNameEnum",
      "namespace": "me.billing.tasks"
    },
    "me.billing.tasks.TaskStatusEnum": {
      "description": "Billing tasks statuses",
      "enum": [
        "TODO",
        "CANCELLED",
        "DOING",
        "DONE",
        "INIT",
        "PROBLEM",
        "ERROR"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "me.billing.tasks"
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
    "me.partnerLevel.Level": {
      "description": "Partner level of an account",
      "id": "Level",
      "namespace": "me.partnerLevel",
      "properties": {
        "level": {
          "canBeNull": false,
          "description": "Level of partner",
          "fullType": "me.partnerLevel.LevelTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "me.partnerLevel.LevelTypeEnum"
        },
        "requirement": {
          "canBeNull": false,
          "description": "Level of Support required",
          "fullType": "me.partnerLevel.RequirementLoSEnum",
          "readOnly": true,
          "required": false,
          "type": "me.partnerLevel.RequirementLoSEnum"
        }
      }
    },
    "me.partnerLevel.LevelTypeEnum": {
      "description": "Type of level",
      "enum": [
        "none",
        "standard",
        "advanced"
      ],
      "enumType": "string",
      "id": "LevelTypeEnum",
      "namespace": "me.partnerLevel"
    },
    "me.partnerLevel.RequirementLoSEnum": {
      "description": "Level of Support required",
      "enum": [
        "none",
        "premium",
        "premium-accredited"
      ],
      "enumType": "string",
      "id": "RequirementLoSEnum",
      "namespace": "me.partnerLevel"
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
        "NONE",
        "CHORUS"
      ],
      "enumType": "string",
      "id": "AvailableSubTypeEnum",
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
        "NONE",
        "COMPONENT",
        "IFRAME_VANTIV",
        "IN_CONTEXT",
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
        "icon": {
          "canBeNull": false,
          "description": "Payment method type icon",
          "fullType": "me.payment.Icon",
          "readOnly": true,
          "required": false,
          "type": "me.payment.Icon"
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
        "merchantId": {
          "canBeNull": true,
          "description": "Payment method merchant ID",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "oneshot": {
          "canBeNull": false,
          "description": "Payment method type is possible to pay in oneshot mode ?",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
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
          "fullType": "me.payment.AvailableSubTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "me.payment.AvailableSubTypeEnum"
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
        "transactionId": {
          "canBeNull": false,
          "description": "Linked transaction ID",
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
    "me.payment.method.StatusEnum": {
      "description": "Payment method status",
      "enum": [
        "CANCELED",
        "CANCELING",
        "CREATED",
        "ERROR",
        "EXPIRED",
        "FAILED",
        "CREATING",
        "MAINTENANCE",
        "PAUSED",
        "VALID"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "me.payment.method"
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
        "merchandId": {
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
          "required": false,
          "type": "boolean"
        },
        "canCancel": {
          "canBeNull": false,
          "description": "Can cancel the task",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canRelaunch": {
          "canBeNull": false,
          "description": "Can relaunch the task",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "comment": {
          "canBeNull": true,
          "description": "Comment about the task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "domain": {
          "canBeNull": false,
          "description": "Domain of the task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "doneDate": {
          "canBeNull": true,
          "description": "Done date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Function of the task",
          "fullType": "domain.NicOperationFunctionEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.NicOperationFunctionEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the task",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the task",
          "fullType": "domain.OperationStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.OperationStatusEnum"
        },
        "todoDate": {
          "canBeNull": false,
          "description": "Todo date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "domain.DocumentFormatsEnum[]"
        },
        "acceptedValues": {
          "canBeNull": true,
          "description": "List of accepted values",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "description": {
          "canBeNull": true,
          "description": "Description of the argument",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "fields": {
          "canBeNull": true,
          "description": "List of impacted field names",
          "fullType": "xander.ContactFieldEnum[]",
          "readOnly": true,
          "required": false,
          "type": "xander.ContactFieldEnum[]"
        },
        "key": {
          "canBeNull": false,
          "description": "Key of the argument",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "maximumSize": {
          "canBeNull": true,
          "description": "Maximum of the content length that you can send",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minimumSize": {
          "canBeNull": true,
          "description": "Minimum of the content length that you can send",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "readOnly": {
          "canBeNull": false,
          "description": "True if the argument is in read only",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "template": {
          "canBeNull": true,
          "description": "Template of the content",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the argument",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": true,
          "description": "Value of the argument",
          "fullType": "string",
          "readOnly": false,
          "required": false,
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
          "required": false,
          "type": "domain.OperationStep"
        },
        "expectedDoneDate": {
          "canBeNull": true,
          "description": "The estimated end date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "followUpSteps": {
          "canBeNull": true,
          "description": "all the steps of operation",
          "fullType": "domain.OperationStep[]",
          "readOnly": true,
          "required": false,
          "type": "domain.OperationStep[]"
        },
        "lastUpdateDate": {
          "canBeNull": true,
          "description": "The last update date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "progress": {
          "canBeNull": false,
          "description": "Progress percentage of the task",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "taskActions": {
          "canBeNull": false,
          "description": "Action possible on task",
          "fullType": "domain.OperationActionEnum[]",
          "readOnly": true,
          "required": false,
          "type": "domain.OperationActionEnum[]"
        },
        "taskStatus": {
          "canBeNull": false,
          "description": "The status of the task",
          "fullType": "domain.OperationStatusEnum",
          "readOnly": true,
          "required": false,
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
        "de_DE",
        "en_AU",
        "en_CA",
        "en_GB",
        "en_IE",
        "en_US",
        "es_ES",
        "fr_CA",
        "fr_FR",
        "fr_MA",
        "fr_SN",
        "fr_TN",
        "it_IT",
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
          "description": "OVH subsidiary",
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
        "TN"
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
        "price": {
          "canBeNull": false,
          "description": "Reduction price applied with this promotion",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
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
        "percentage",
        "forced_amount",
        "fixed_amount"
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
        "installation",
        "renew",
        "upgrade",
        "downgrade",
        "detach",
        "dynamic"
      ],
      "enumType": "string",
      "id": "GenericProductPricingCapacitiesEnum",
      "namespace": "order.cart"
    },
    "order.cart.GenericProductPricingTypeEnum": {
      "description": "Type of a pricing",
      "enum": [
        "rental",
        "consumption",
        "purchase"
      ],
      "enumType": "string",
      "id": "GenericProductPricingTypeEnum",
      "namespace": "order.cart"
    },
    "order.cart.GenericProductTypeEnum": {
      "description": "Type of a product",
      "enum": [
        "delivery",
        "deposit",
        "shipping",
        "cloud_service",
        "saas_license",
        "storage",
        "domain"
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
        "COMPONENT",
        "DONE",
        "IFRAME_VANTIV",
        "IN_CONTEXT",
        "POST_FORM",
        "REDIRECT"
      ],
      "enumType": "string",
      "id": "IntegrationType",
      "namespace": "payment.method"
    },
    "telephony.BillingSettings": {
      "description": "Billing policies settings",
      "id": "BillingSettings",
      "namespace": "telephony",
      "properties": {
        "renewByBillingContact": {
          "canBeNull": false,
          "description": "Renew is done by billing contact instead of billing account",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "telephony.DefaultIpRestriction": {
      "description": "Default IP restriction of a VoIP line",
      "id": "DefaultIpRestriction",
      "namespace": "telephony",
      "properties": {
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "subnet": {
          "canBeNull": false,
          "description": "The IPv4 subnet you want to allow",
          "fullType": "ipv4Block",
          "readOnly": true,
          "required": false,
          "type": "ipv4Block"
        },
        "type": {
          "canBeNull": false,
          "description": "The protocol you want to restrict (sip/mgcp)",
          "fullType": "telephony.ProtocolEnum",
          "readOnly": true,
          "required": false,
          "type": "telephony.ProtocolEnum"
        }
      }
    },
    "telephony.LineDescriptionSettings": {
      "description": "Line description policies settings",
      "id": "LineDescriptionSettings",
      "namespace": "telephony",
      "properties": {
        "displayOnBill": {
          "canBeNull": false,
          "description": "Line's description is displayed on bills",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "displayOnIncomingCall": {
          "canBeNull": false,
          "description": "Line's description is displayed on incoming calls",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "telephony.MailDomain2Service": {
      "description": "Custom domains of your fax services",
      "id": "MailDomain2Service",
      "namespace": "telephony",
      "properties": {
        "domain": {
          "canBeNull": false,
          "description": "The custom domain of your fax services",
          "fullType": "string",
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
        }
      }
    },
    "telephony.ProtocolEnum": {
      "description": "Phone protocol",
      "enum": [
        "mgcp",
        "sip"
      ],
      "enumType": "string",
      "id": "ProtocolEnum",
      "namespace": "telephony"
    },
    "telephony.Settings": {
      "description": "Telephony settings linked to the customer account",
      "id": "Settings",
      "namespace": "telephony",
      "properties": {
        "billingPolicies": {
          "canBeNull": false,
          "description": "Billing policies settings",
          "readOnly": false,
          "required": false,
          "type": "telephony.BillingSettings"
        },
        "lineDescriptionPolicies": {
          "canBeNull": false,
          "description": "Line description policies settings",
          "readOnly": false,
          "required": false,
          "type": "telephony.LineDescriptionSettings"
        }
      }
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
    },
    "xdsl.Setting": {
      "description": "Xdsl Settings",
      "id": "Setting",
      "namespace": "xdsl",
      "properties": {
        "resellerFastModemShipping": {
          "canBeNull": false,
          "description": "Send the modem as soon as possible, do not wait the xdsl line to be active",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "resellerModemBasicConfig": {
          "canBeNull": false,
          "description": "Let the modem with vendor configuration. It prevent to apply the config managed by ovh manager",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    }
  },
  "resourcePath": "/me"
}