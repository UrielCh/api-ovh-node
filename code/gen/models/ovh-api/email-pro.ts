import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/email/pro.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the PROEMAIL service",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro"
    },
    {
      "description": "Operations about the PROEMAIL service",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.ServiceNative",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.pro.Service",
              "description": "New object properties",
              "fullType": "email.pro.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}"
    },
    {
      "description": "List the email.pro.Account objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Accounts associated to this pro service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filter the value of id property (like)",
              "fullType": "long",
              "name": "id",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of primaryEmailAddress property (like)",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/account"
    },
    {
      "description": "List the email.pro.Account objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.AccountNative",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete existing mailbox in pro server",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.pro.Account",
              "description": "New object properties",
              "fullType": "email.pro.Account",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/account/{email}"
    },
    {
      "description": "List the email.pro.AccountAlias objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Aliases associated to this mailbox",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create new alias",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Alias",
              "fullType": "string",
              "name": "alias",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/account/{email}/alias"
    },
    {
      "description": "List the email.pro.AccountAlias objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Alias",
              "fullType": "string",
              "name": "alias",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.AccountAlias",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete existing alias",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Alias",
              "fullType": "string",
              "name": "alias",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/account/{email}/alias/{alias}"
    },
    {
      "description": "changePassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Change mailbox password",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "new password",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/account/{email}/changePassword"
    },
    {
      "description": "Account Diagnosis",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.AccountDiagnosis",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create new diagnosis request",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Account password",
              "fullType": "string",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/account/{email}/diagnostics"
    },
    {
      "description": "List the email.pro.AccountFullAccess objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Full access granted users for this mailbox",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Allow full access to a user",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "User to give full access",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/account/{email}/fullAccess"
    },
    {
      "description": "List the email.pro.AccountFullAccess objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Allowed account ID",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.AccountFullAccess",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Revoke full access",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Account id to give full access",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}"
    },
    {
      "description": "List the email.pro.AccountSendAs objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Send as granted users for this mailbox",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Allow another user to send mails from this mailbox",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Account id to allow to send mails from this mailbox",
              "fullType": "long",
              "name": "allowAccountId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/account/{email}/sendAs"
    },
    {
      "description": "List the email.pro.AccountSendAs objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Allowed account ID",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.AccountSendAs",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete allowed user for sendAs",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Account id to give send as",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/account/{email}/sendAs/{allowedAccountId}"
    },
    {
      "description": "List the email.pro.AccountSendOnBehalfTo objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "SendOnBehalfTo granted users for this mailbox",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Allow another user to Send On Behalf To mails from this mailbox",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Account id to allow to send On Behalf To mails from this mailbox",
              "fullType": "long",
              "name": "allowAccountId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/account/{email}/sendOnBehalfTo"
    },
    {
      "description": "List the email.pro.AccountSendOnBehalfTo objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Allowed account ID",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.AccountSendOnBehalfTo",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete allowed user for SendOnBehalfTo",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Account id to give send on behalf to",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}"
    },
    {
      "description": "List the email.pro.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Pending task for this mailbox",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/account/{email}/tasks"
    },
    {
      "description": "List the email.pro.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/account/{email}/tasks/{id}"
    },
    {
      "description": "terminate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Terminate account at expiration date",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/account/{email}/terminate"
    },
    {
      "description": "billingMigrated operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Detects billing transition status for the service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "boolean",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/billingMigrated"
    },
    {
      "description": "billingPlan operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Emailpro billing plan",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/billingPlan"
    },
    {
      "description": "Change the contacts of this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Launch a contact change procedure",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The contact to set as admin contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactAdmin",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The contact to set as billing contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactBilling",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The contact to set as tech contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactTech",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/changeContact"
    },
    {
      "description": "List the email.pro.Domain objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Domains associated to this service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "email.pro.ObjectStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "email.pro.ObjectStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create new domain in pro services",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "If you host domain in OVH we can configure autodiscover record automatically",
              "fullType": "boolean",
              "name": "configureAutodiscover",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "If you host domain in OVH we can configure mx record automatically",
              "fullType": "boolean",
              "name": "configureMx",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "If specified, emails to not existing address will be redirected to that domain",
              "fullType": "string",
              "name": "mxRelay",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain to install on server",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "email.pro.DomainTypeEnum",
              "description": "Type of domain that You want to install",
              "fullType": "email.pro.DomainTypeEnum",
              "name": "type",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/domain"
    },
    {
      "description": "List the email.pro.Domain objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain name",
              "fullType": "string",
              "name": "domainName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.DomainNative",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete existing domain in pro services",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain name",
              "fullType": "string",
              "name": "domainName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.pro.Domain",
              "description": "New object properties",
              "fullType": "email.pro.Domain",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain name",
              "fullType": "string",
              "name": "domainName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/domain/{domainName}"
    },
    {
      "description": "disclaimer",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain name",
              "fullType": "string",
              "name": "domainName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.disclaimerNative",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete existing organization disclaimer",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain name",
              "fullType": "string",
              "name": "domainName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create organization disclaimer of each email",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "text",
              "description": "Signature, added at the bottom of your organization emails",
              "fullType": "text",
              "name": "content",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Activate the disclaimer only for external emails",
              "fullType": "boolean",
              "name": "outsideOnly",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain name",
              "fullType": "string",
              "name": "domainName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.pro.disclaimer",
              "description": "New object properties",
              "fullType": "email.pro.disclaimer",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain name",
              "fullType": "string",
              "name": "domainName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/domain/{domainName}/disclaimer"
    },
    {
      "description": "disclaimerAttribute operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get diclaimer attributes to substitute with Active Directory properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain name",
              "fullType": "string",
              "name": "domainName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.DisclaimerAttributeEnum[]",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/domain/{domainName}/disclaimerAttribute"
    },
    {
      "description": "List the email.pro.ExternalContact objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "External contacts for this service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of displayName property (like)",
              "fullType": "string",
              "name": "displayName",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of externalEmailAddress property (like)",
              "fullType": "string",
              "name": "externalEmailAddress",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of firstName property (like)",
              "fullType": "string",
              "name": "firstName",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of id property (like)",
              "fullType": "long",
              "name": "id",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of lastName property (like)",
              "fullType": "string",
              "name": "lastName",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "create new external contact",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Contact display name",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Contact email address",
              "fullType": "string",
              "name": "externalEmailAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Contact first name",
              "fullType": "string",
              "name": "firstName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Hide the contact in Global Address List",
              "fullType": "boolean",
              "name": "hiddenFromGAL",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Contact initials",
              "fullType": "string",
              "name": "initials",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Contact last name",
              "fullType": "string",
              "name": "lastName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/externalContact"
    },
    {
      "description": "List the email.pro.ExternalContact objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "External email address",
              "fullType": "string",
              "name": "externalEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.ExternalContactNative",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "delete external contact",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Contact email",
              "fullType": "string",
              "name": "externalEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.pro.ExternalContact",
              "description": "New object properties",
              "fullType": "email.pro.ExternalContact",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Contact email",
              "fullType": "string",
              "name": "externalEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/externalContact/{externalEmailAddress}"
    },
    {
      "description": "Server",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Server",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/server"
    },
    {
      "description": "Details about a Service",
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
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "services.Service",
              "description": "New object properties",
              "fullType": "services.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/serviceInfos"
    },
    {
      "description": "List the email.pro.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Pending actions",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/task"
    },
    {
      "description": "List the email.pro.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
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
            },
            {
              "dataType": "string",
              "description": "Service",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/task/{id}"
    },
    {
      "description": "updateFlagsOnAllAccounts operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Update spam and virus flags on all active accounts",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pro organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/email-pro/all"
          ]
        }
      ],
      "path": "/email/pro/{service}/updateFlagsOnAllAccounts"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "email.pro.Account": {
      "description": "Mailbox",
      "id": "Account",
      "namespace": "email.pro",
      "properties": {
        "SAMAccountName": {
          "canBeNull": true,
          "description": "SAM account name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "configured": {
          "canBeNull": false,
          "description": "Indicates if the account is configured",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "creationDate": {
          "canBeNull": true,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "currentUsage": {
          "canBeNull": true,
          "description": "Mailbox usage",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "deleteAtExpiration": {
          "canBeNull": true,
          "description": "delete at expiration",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Account display name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "description": "Email domain",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "expirationDate": {
          "canBeNull": true,
          "description": "expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "expirationOutlookDate": {
          "canBeNull": true,
          "description": "expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "firstName": {
          "canBeNull": true,
          "description": "Account first name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "hiddenFromGAL": {
          "canBeNull": false,
          "description": "Hide account in Global Address List",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "id": {
          "canBeNull": false,
          "description": "Account id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "initial": {
          "canBeNull": true,
          "description": "Account initials",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lastLogoffDate": {
          "canBeNull": true,
          "description": "Last logoff",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastLogonDate": {
          "canBeNull": true,
          "description": "Last logon",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastName": {
          "canBeNull": true,
          "description": "Account last name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lastUpdateDate": {
          "canBeNull": true,
          "description": "Last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "login": {
          "canBeNull": false,
          "description": "Account login",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "mailingFilter": {
          "canBeNull": true,
          "description": "Enable or disable anti-virus and anti-spam",
          "fullType": "email.pro.MailingFilterEnum[]",
          "readOnly": false,
          "required": false,
          "type": "email.pro.MailingFilterEnum[]"
        },
        "passwordLastUpdate": {
          "canBeNull": true,
          "description": "Time of account's password last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "primaryEmailAddress": {
          "canBeNull": false,
          "description": "Default email for this mailbox",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quota": {
          "canBeNull": false,
          "description": "Account maximum size",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "renewPeriod": {
          "canBeNull": true,
          "description": "change the renew period",
          "fullType": "email.pro.renewPeriodEnum",
          "readOnly": false,
          "required": false,
          "type": "email.pro.renewPeriodEnum"
        },
        "spamAndVirusConfiguration": {
          "canBeNull": false,
          "description": "Spam and Antivirus configuration",
          "fullType": "email.pro.spamAndVirusConfiguration",
          "readOnly": false,
          "required": false,
          "type": "email.pro.spamAndVirusConfiguration"
        },
        "spamDetected": {
          "canBeNull": false,
          "description": "Account was sending spam",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "spamTicketNumber": {
          "canBeNull": true,
          "description": "Ticket number of spam detection",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "Account state",
          "fullType": "email.pro.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.pro.ObjectStateEnum"
        },
        "taskPendingId": {
          "canBeNull": true,
          "description": "Pending tasks for this account",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.pro.AccountAlias": {
      "description": "Aliases on this mailbox",
      "id": "AccountAlias",
      "namespace": "email.pro",
      "properties": {
        "alias": {
          "canBeNull": false,
          "description": "Alias",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Pending task id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.pro.AccountDiagnosis": {
      "description": "Account Diagnosis",
      "id": "AccountDiagnosis",
      "namespace": "email.pro",
      "properties": {
        "canReceiveEmail": {
          "canBeNull": false,
          "description": "Determines if ingoing message has been received",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canSendEmail": {
          "canBeNull": false,
          "description": "Determines if outgoing message has been delivered",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "connectiveWebmail": {
          "canBeNull": false,
          "description": "Determines if possible to authenticate with credentials",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isLocked": {
          "canBeNull": false,
          "description": "Determines if account is locked",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isMxValid": {
          "canBeNull": false,
          "description": "Determines if MX record for account's domain is properly set",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isSpammer": {
          "canBeNull": false,
          "description": "Determines if account is flagged as spammer",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isSrvValid": {
          "canBeNull": false,
          "description": "Determines if SRV (autodiscovery) record for account's domain is properly set",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isSuspended": {
          "canBeNull": false,
          "description": "Determines if account is suspended",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "lastCheck": {
          "canBeNull": false,
          "description": "Last performed diagnostics date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "email.pro.AccountFullAccess": {
      "description": "Users having full access on this mailbox",
      "id": "AccountFullAccess",
      "namespace": "email.pro",
      "properties": {
        "allowedAccountId": {
          "canBeNull": false,
          "description": "Account id to give full access",
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
        "taskPendingId": {
          "canBeNull": false,
          "description": "Pending task id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.pro.AccountNative": {
      "description": "Mailbox",
      "id": "AccountNative",
      "namespace": "email.pro",
      "properties": {
        "SAMAccountName": {
          "canBeNull": true,
          "description": "SAM account name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "configured": {
          "canBeNull": false,
          "description": "Indicates if the account is configured",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "creationDate": {
          "canBeNull": true,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "currentUsage": {
          "canBeNull": true,
          "description": "Mailbox usage",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "deleteAtExpiration": {
          "canBeNull": true,
          "description": "delete at expiration",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Account display name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "description": "Email domain",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "expirationDate": {
          "canBeNull": true,
          "description": "expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "expirationOutlookDate": {
          "canBeNull": true,
          "description": "expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "firstName": {
          "canBeNull": true,
          "description": "Account first name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "hiddenFromGAL": {
          "canBeNull": false,
          "description": "Hide account in Global Address List",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "id": {
          "canBeNull": false,
          "description": "Account id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "initial": {
          "canBeNull": true,
          "description": "Account initials",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lastLogoffDate": {
          "canBeNull": true,
          "description": "Last logoff",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastLogonDate": {
          "canBeNull": true,
          "description": "Last logon",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastName": {
          "canBeNull": true,
          "description": "Account last name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lastUpdateDate": {
          "canBeNull": true,
          "description": "Last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "login": {
          "canBeNull": false,
          "description": "Account login",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "mailingFilter": {
          "canBeNull": true,
          "description": "Enable or disable anti-virus and anti-spam",
          "fullType": "email.pro.MailingFilterEnum[]",
          "readOnly": true,
          "required": false,
          "type": "email.pro.MailingFilterEnum[]"
        },
        "passwordLastUpdate": {
          "canBeNull": true,
          "description": "Time of account's password last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "primaryEmailAddress": {
          "canBeNull": false,
          "description": "Default email for this mailbox",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quota": {
          "canBeNull": false,
          "description": "Account maximum size",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "renewPeriod": {
          "canBeNull": true,
          "description": "change the renew period",
          "fullType": "email.pro.renewPeriodEnum",
          "readOnly": true,
          "required": false,
          "type": "email.pro.renewPeriodEnum"
        },
        "spamAndVirusConfiguration": {
          "canBeNull": false,
          "description": "Spam and Antivirus configuration",
          "fullType": "email.pro.spamAndVirusConfiguration",
          "readOnly": true,
          "required": false,
          "type": "email.pro.spamAndVirusConfiguration"
        },
        "spamDetected": {
          "canBeNull": false,
          "description": "Account was sending spam",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "spamTicketNumber": {
          "canBeNull": true,
          "description": "Ticket number of spam detection",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "Account state",
          "fullType": "email.pro.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.pro.ObjectStateEnum"
        },
        "taskPendingId": {
          "canBeNull": true,
          "description": "Pending tasks for this account",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.pro.AccountSendAs": {
      "description": "Users authorized to send mails from this mailbox",
      "id": "AccountSendAs",
      "namespace": "email.pro",
      "properties": {
        "allowedAccountId": {
          "canBeNull": false,
          "description": "Account id to give send as",
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
        "taskPendingId": {
          "canBeNull": false,
          "description": "Pending task id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.pro.AccountSendOnBehalfTo": {
      "description": "Get users authorized to Send On Behalf To mails from this mailbox",
      "id": "AccountSendOnBehalfTo",
      "namespace": "email.pro",
      "properties": {
        "allowedAccountId": {
          "canBeNull": false,
          "description": "Account id to give send on behalf to",
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
        "taskPendingId": {
          "canBeNull": false,
          "description": "Pending task id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.pro.DisclaimerAttributeEnum": {
      "description": "Disclaimer attributes list",
      "enum": [
        "City",
        "Company",
        "Country",
        "Department",
        "DisplayName",
        "Email",
        "FaxNumber",
        "FirstName",
        "HomePhoneNumber",
        "Initials",
        "LastName",
        "Manager",
        "MobileNumber",
        "Notes",
        "Office",
        "OtherFaxNumber",
        "OtherHomePhoneNumber",
        "OtherPhoneNumber",
        "PagerNumber",
        "PhoneNumber",
        "State",
        "Street",
        "Title",
        "UserLogonName",
        "ZipCode"
      ],
      "enumType": "string",
      "id": "DisclaimerAttributeEnum",
      "namespace": "email.pro"
    },
    "email.pro.Domain": {
      "description": "Domain",
      "id": "Domain",
      "namespace": "email.pro",
      "properties": {
        "cnameToCheck": {
          "canBeNull": true,
          "description": "Cname that will be checked to prove the domain ownership",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "domainAliases": {
          "canBeNull": false,
          "description": "List of aliases for this domain",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "domainValidated": {
          "canBeNull": false,
          "description": "Domain validation status",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isAliasDomain": {
          "canBeNull": false,
          "description": "Indicate if this domain is an alias for another domain",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "mxIsValid": {
          "canBeNull": false,
          "description": "If true your dns mx configuration is valid",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "mxRecord": {
          "canBeNull": true,
          "description": "Domain MX record configured in DNS",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "mxRelay": {
          "canBeNull": true,
          "description": "If specified, emails to not existing address will be redirected to that domain",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Domain name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "srvIsValid": {
          "canBeNull": false,
          "description": "If true your dns srv record is valid",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "srvRecord": {
          "canBeNull": true,
          "description": "Domain SRV record configured in DNS",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "state": {
          "canBeNull": false,
          "description": "Domain state",
          "fullType": "email.pro.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.pro.ObjectStateEnum"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Pending taks id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "Domain type",
          "fullType": "email.pro.DomainTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "email.pro.DomainTypeEnum"
        }
      }
    },
    "email.pro.DomainNative": {
      "description": "Domain",
      "id": "DomainNative",
      "namespace": "email.pro",
      "properties": {
        "cnameToCheck": {
          "canBeNull": true,
          "description": "Cname that will be checked to prove the domain ownership",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "domainAliases": {
          "canBeNull": false,
          "description": "List of aliases for this domain",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "domainValidated": {
          "canBeNull": false,
          "description": "Domain validation status",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isAliasDomain": {
          "canBeNull": false,
          "description": "Indicate if this domain is an alias for another domain",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "mxIsValid": {
          "canBeNull": false,
          "description": "If true your dns mx configuration is valid",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "mxRecord": {
          "canBeNull": true,
          "description": "Domain MX record configured in DNS",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "mxRelay": {
          "canBeNull": true,
          "description": "If specified, emails to not existing address will be redirected to that domain",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Domain name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "srvIsValid": {
          "canBeNull": false,
          "description": "If true your dns srv record is valid",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "srvRecord": {
          "canBeNull": true,
          "description": "Domain SRV record configured in DNS",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "state": {
          "canBeNull": false,
          "description": "Domain state",
          "fullType": "email.pro.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.pro.ObjectStateEnum"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Pending taks id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "Domain type",
          "fullType": "email.pro.DomainTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "email.pro.DomainTypeEnum"
        }
      }
    },
    "email.pro.DomainTypeEnum": {
      "description": "Domain type",
      "enum": [
        "authoritative",
        "nonAuthoritative"
      ],
      "enumType": "string",
      "id": "DomainTypeEnum",
      "namespace": "email.pro"
    },
    "email.pro.ExternalContact": {
      "description": "External contact for this pro service",
      "id": "ExternalContact",
      "namespace": "email.pro",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "displayName": {
          "canBeNull": false,
          "description": "Contact display name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "externalEmailAddress": {
          "canBeNull": false,
          "description": "Contact email",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "firstName": {
          "canBeNull": true,
          "description": "Contact first name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "hiddenFromGAL": {
          "canBeNull": false,
          "description": "Hide the contact in Global Address List",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "id": {
          "canBeNull": false,
          "description": "Contact id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "initials": {
          "canBeNull": true,
          "description": "Contact initals",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lastName": {
          "canBeNull": true,
          "description": "Contact last name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Contact state",
          "fullType": "email.pro.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.pro.ObjectStateEnum"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Task pending id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.pro.ExternalContactNative": {
      "description": "External contact for this pro service",
      "id": "ExternalContactNative",
      "namespace": "email.pro",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "displayName": {
          "canBeNull": false,
          "description": "Contact display name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "externalEmailAddress": {
          "canBeNull": false,
          "description": "Contact email",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "firstName": {
          "canBeNull": true,
          "description": "Contact first name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "hiddenFromGAL": {
          "canBeNull": false,
          "description": "Hide the contact in Global Address List",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "id": {
          "canBeNull": false,
          "description": "Contact id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "initials": {
          "canBeNull": true,
          "description": "Contact initals",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lastName": {
          "canBeNull": true,
          "description": "Contact last name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Contact state",
          "fullType": "email.pro.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.pro.ObjectStateEnum"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Task pending id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.pro.MailingFilterEnum": {
      "description": "Mailing filter options availlable",
      "enum": [
        "vaderetro"
      ],
      "enumType": "string",
      "id": "MailingFilterEnum",
      "namespace": "email.pro"
    },
    "email.pro.ObjectStateEnum": {
      "description": "Current object state",
      "enum": [
        "creating",
        "deleting",
        "ok",
        "reopening",
        "suspended",
        "suspending",
        "unknown"
      ],
      "enumType": "string",
      "id": "ObjectStateEnum",
      "namespace": "email.pro"
    },
    "email.pro.Server": {
      "description": "Server",
      "id": "Server",
      "namespace": "email.pro",
      "properties": {
        "currentDiskUsage": {
          "canBeNull": true,
          "description": "Current disk usage in MB",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "diskSize": {
          "canBeNull": true,
          "description": "Total disk size in MB",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ip": {
          "canBeNull": false,
          "description": "ipV4",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "ipV6": {
          "canBeNull": true,
          "description": "ipV6",
          "fullType": "ipv6",
          "readOnly": true,
          "required": false,
          "type": "ipv6"
        },
        "isAValid": {
          "canBeNull": false,
          "description": "If true your dns A record is valid",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isAaaaValid": {
          "canBeNull": false,
          "description": "If true your dns AAAA record is valid",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isPtrV6Valid": {
          "canBeNull": false,
          "description": "If true your dns ptrV6 record is valid",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isPtrValid": {
          "canBeNull": false,
          "description": "If true your dns ptr record is valid",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "state": {
          "canBeNull": false,
          "description": "Server state",
          "fullType": "email.pro.ServerStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.pro.ServerStateEnum"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Task pending id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "version": {
          "canBeNull": true,
          "description": "Server version",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.pro.ServerStateEnum": {
      "description": "Server State",
      "enum": [
        "configurationPending",
        "notConfigured",
        "ok"
      ],
      "enumType": "string",
      "id": "ServerStateEnum",
      "namespace": "email.pro"
    },
    "email.pro.Service": {
      "description": "Email pro service",
      "id": "Service",
      "namespace": "email.pro",
      "properties": {
        "complexityEnabled": {
          "canBeNull": false,
          "description": "enable policy for strong and secure passwords",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "displayName": {
          "canBeNull": true,
          "description": "service displayName",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "description": "Domain name of your service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "hostname": {
          "canBeNull": true,
          "description": "Hostname of your service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lastUpdateDate": {
          "canBeNull": true,
          "description": "Update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lockoutDuration": {
          "canBeNull": false,
          "description": "number of minutes account will remain locked if it occurs",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "lockoutObservationWindow": {
          "canBeNull": false,
          "description": "number of minutes that must elapse after a failed logon to reset lockout trigger",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "lockoutThreshold": {
          "canBeNull": true,
          "description": "number of attempts before account to be locked",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "maxPasswordAge": {
          "canBeNull": true,
          "description": "maximum number of days that account's password is valid before expiration",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "maxReceiveSize": {
          "canBeNull": false,
          "description": "Maximum message size that You can receive in MB",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "maxSendSize": {
          "canBeNull": false,
          "description": "Maximum message size that You can send in MB",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "minPasswordAge": {
          "canBeNull": true,
          "description": "minimum number of days before able to change account's password",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "minPasswordLength": {
          "canBeNull": true,
          "description": "minimum number of characters password must contain",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "offer": {
          "canBeNull": false,
          "description": "Type of your offer",
          "fullType": "email.pro.ServiceOfferEnum",
          "readOnly": true,
          "required": false,
          "type": "email.pro.ServiceOfferEnum"
        },
        "spamAndVirusConfiguration": {
          "canBeNull": false,
          "description": "Spam and Antivirus configuration",
          "fullType": "email.pro.spamAndVirusConfiguration",
          "readOnly": false,
          "required": false,
          "type": "email.pro.spamAndVirusConfiguration"
        },
        "state": {
          "canBeNull": false,
          "description": "State of your service",
          "fullType": "email.pro.ServiceStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.pro.ServiceStateEnum"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Task pending id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "webUrl": {
          "canBeNull": true,
          "description": "URL for web interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "email.pro.ServiceNative": {
      "description": "Email pro service",
      "id": "ServiceNative",
      "namespace": "email.pro",
      "properties": {
        "complexityEnabled": {
          "canBeNull": false,
          "description": "enable policy for strong and secure passwords",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "displayName": {
          "canBeNull": true,
          "description": "service displayName",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "description": "Domain name of your service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "hostname": {
          "canBeNull": true,
          "description": "Hostname of your service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lastUpdateDate": {
          "canBeNull": true,
          "description": "Update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lockoutDuration": {
          "canBeNull": false,
          "description": "number of minutes account will remain locked if it occurs",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lockoutObservationWindow": {
          "canBeNull": false,
          "description": "number of minutes that must elapse after a failed logon to reset lockout trigger",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lockoutThreshold": {
          "canBeNull": true,
          "description": "number of attempts before account to be locked",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maxPasswordAge": {
          "canBeNull": true,
          "description": "maximum number of days that account's password is valid before expiration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maxReceiveSize": {
          "canBeNull": false,
          "description": "Maximum message size that You can receive in MB",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maxSendSize": {
          "canBeNull": false,
          "description": "Maximum message size that You can send in MB",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minPasswordAge": {
          "canBeNull": true,
          "description": "minimum number of days before able to change account's password",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minPasswordLength": {
          "canBeNull": true,
          "description": "minimum number of characters password must contain",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "offer": {
          "canBeNull": false,
          "description": "Type of your offer",
          "fullType": "email.pro.ServiceOfferEnum",
          "readOnly": true,
          "required": false,
          "type": "email.pro.ServiceOfferEnum"
        },
        "spamAndVirusConfiguration": {
          "canBeNull": false,
          "description": "Spam and Antivirus configuration",
          "fullType": "email.pro.spamAndVirusConfiguration",
          "readOnly": true,
          "required": false,
          "type": "email.pro.spamAndVirusConfiguration"
        },
        "state": {
          "canBeNull": false,
          "description": "State of your service",
          "fullType": "email.pro.ServiceStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.pro.ServiceStateEnum"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Task pending id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "webUrl": {
          "canBeNull": true,
          "description": "URL for web interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "email.pro.ServiceOfferEnum": {
      "description": "Service Offer name",
      "enum": [
        "emailpro"
      ],
      "enumType": "string",
      "id": "ServiceOfferEnum",
      "namespace": "email.pro"
    },
    "email.pro.ServiceStateEnum": {
      "description": "Service State",
      "enum": [
        "creating",
        "deleting",
        "inMaintenance",
        "ok",
        "reopening",
        "suspended",
        "suspending"
      ],
      "enumType": "string",
      "id": "ServiceStateEnum",
      "namespace": "email.pro"
    },
    "email.pro.Task": {
      "description": "Organization task details",
      "id": "Task",
      "namespace": "email.pro",
      "properties": {
        "finishDate": {
          "canBeNull": true,
          "description": "Completion date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Function name",
          "fullType": "email.pro.TaskFunctionEnum",
          "readOnly": true,
          "required": false,
          "type": "email.pro.TaskFunctionEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "Task id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "email.pro.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "email.pro.TaskStatusEnum"
        },
        "todoDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "email.pro.TaskFunctionEnum": {
      "description": "function enumeration for task",
      "enum": [
        "addAccount",
        "addAlias",
        "addDomain",
        "addDomainDisclaimer",
        "addExternalContact",
        "addFullAccess",
        "addSendAs",
        "addSendOnBehalfTo",
        "addServiceAuthorizedIp",
        "changeHostname",
        "changePassword",
        "configureCustomer",
        "deleteAccount",
        "deleteAlias",
        "deleteDomain",
        "deleteDomainDisclaimer",
        "deleteExternalContact",
        "deleteFullAccess",
        "deleteSendAs",
        "deleteSendOnBehalfTo",
        "deleteService",
        "deleteServiceAuthorizedIp",
        "diagnoseAccount",
        "expandDrive",
        "installServer",
        "maintenance",
        "migrateAccountViaOMM",
        "migrationAccount",
        "migrationDisclaimer",
        "migrationExternalContact",
        "migrationHistory",
        "migrationService",
        "reOpenAccount",
        "setAccount",
        "setAlias",
        "setDns",
        "setDomain",
        "setDomainDisclaimer",
        "setExternalContact",
        "setService",
        "suspendAccount",
        "suspendService",
        "unknown",
        "unsuspendAccount",
        "unsuspendService"
      ],
      "enumType": "string",
      "id": "TaskFunctionEnum",
      "namespace": "email.pro"
    },
    "email.pro.TaskStatusEnum": {
      "description": "Task status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "email.pro"
    },
    "email.pro.disclaimer": {
      "description": "disclaimer",
      "id": "disclaimer",
      "namespace": "email.pro",
      "properties": {
        "content": {
          "canBeNull": false,
          "description": "Signature, added at the bottom of your organization emails",
          "fullType": "text",
          "readOnly": false,
          "required": false,
          "type": "text"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Disclaimer name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "outsideOnly": {
          "canBeNull": false,
          "description": "Activate the disclaimer only for external emails",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "task pending id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.pro.disclaimerNative": {
      "description": "disclaimer",
      "id": "disclaimerNative",
      "namespace": "email.pro",
      "properties": {
        "content": {
          "canBeNull": false,
          "description": "Signature, added at the bottom of your organization emails",
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Disclaimer name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "outsideOnly": {
          "canBeNull": false,
          "description": "Activate the disclaimer only for external emails",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "task pending id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.pro.renewPeriodEnum": {
      "description": "Renew period",
      "enum": [
        "monthly",
        "yearly"
      ],
      "enumType": "string",
      "id": "renewPeriodEnum",
      "namespace": "email.pro"
    },
    "email.pro.spamAndVirusConfiguration": {
      "description": "Spam and Antyvirus configuration",
      "id": "spamAndVirusConfiguration",
      "namespace": "email.pro",
      "properties": {
        "checkDKIM": {
          "canBeNull": false,
          "description": "Check DKIM of message",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "checkSPF": {
          "canBeNull": false,
          "description": "Check SPF of message",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "deleteSpam": {
          "canBeNull": false,
          "description": "If message is a spam delete it",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "deleteVirus": {
          "canBeNull": false,
          "description": "If message is a virus delete it",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "putInJunk": {
          "canBeNull": false,
          "description": "If message is a spam or virus put in junk. Overridden by deleteSpam or deleteVirus",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "tagSpam": {
          "canBeNull": false,
          "description": "If message is a spam change its subject",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "tagVirus": {
          "canBeNull": false,
          "description": "If message is a virus change its subject",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "service.RenewType": {
      "description": "Map a possible renew for a specific service",
      "id": "RenewType",
      "namespace": "service",
      "properties": {
        "automatic": {
          "canBeNull": false,
          "description": "The service is automatically renewed",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "The service will be deleted at expiration",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "forced": {
          "canBeNull": false,
          "description": "The service forced to be renewed",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "manualPayment": {
          "canBeNull": true,
          "description": "The service needs to be manually renewed and paid",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "period": {
          "canBeNull": true,
          "description": "period of renew in month",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "service.RenewalTypeEnum": {
      "description": "Detailed renewal type of a service",
      "enum": [
        "automaticForcedProduct",
        "automaticV2012",
        "automaticV2014",
        "automaticV2016",
        "manual",
        "oneShot",
        "option"
      ],
      "enumType": "string",
      "id": "RenewalTypeEnum",
      "namespace": "service"
    },
    "service.StateEnum": {
      "enum": [
        "expired",
        "inCreation",
        "ok",
        "pendingDebt",
        "unPaid"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "service"
    },
    "services.Service": {
      "description": "Details about a Service",
      "id": "Service",
      "namespace": "services",
      "properties": {
        "canDeleteAtExpiration": {
          "canBeNull": false,
          "description": "Indicates that the service can be set up to be deleted at expiration",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "contactAdmin": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "contactBilling": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "contactTech": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "creation": {
          "canBeNull": false,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "engagedUpTo": {
          "canBeNull": true,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "expiration": {
          "canBeNull": false,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "possibleRenewPeriod": {
          "canBeNull": true,
          "description": "All the possible renew period of your service in month",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        },
        "renew": {
          "canBeNull": true,
          "description": "Way of handling the renew",
          "fullType": "service.RenewType",
          "readOnly": false,
          "required": false,
          "type": "service.RenewType"
        },
        "renewalType": {
          "canBeNull": false,
          "fullType": "service.RenewalTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "service.RenewalTypeEnum"
        },
        "serviceId": {
          "canBeNull": false,
          "fullType": "coreTypes.ServiceId:long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "fullType": "service.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "service.StateEnum"
        }
      }
    }
  },
  "resourcePath": "/email/pro"
}