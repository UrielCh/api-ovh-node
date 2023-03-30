import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/email/mxplan.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the MXPLAN service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/email/mxplan"
    },
    {
      "description": "MXPlan service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.mxplan.Service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "emailMxplan:apiovh:put"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.mxplan.Service",
              "description": "New object properties",
              "fullType": "email.mxplan.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/mxplan/{service}"
    },
    {
      "description": "List the email.mxplan.Account objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Accounts associated to this mxplan service",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:account/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your mxplan organization",
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
          "responseType": "string[]"
        }
      ],
      "path": "/email/mxplan/{service}/account"
    },
    {
      "description": "Mailbox",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete existing mailbox in mxplan server",
          "httpMethod": "DELETE",
          "iamActions": [
            "emailMxplan:apiovh:account/delete"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:account/get"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.mxplan.Account"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "emailMxplan:apiovh:account/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.mxplan.Account",
              "description": "New object properties",
              "fullType": "email.mxplan.Account",
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/mxplan/{service}/account/{email}"
    },
    {
      "description": "List the email.mxplan.AccountAlias objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Aliases associated to this mailbox",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:account/alias/get"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
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
          "description": "Create new alias",
          "httpMethod": "POST",
          "iamActions": [
            "emailMxplan:apiovh:account/alias/create"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task"
        }
      ],
      "path": "/email/mxplan/{service}/account/{email}/alias"
    },
    {
      "description": "Aliases on this mailbox",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete existing alias",
          "httpMethod": "DELETE",
          "iamActions": [
            "emailMxplan:apiovh:account/alias/delete"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:account/alias/get"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.mxplan.AccountAlias"
        }
      ],
      "path": "/email/mxplan/{service}/account/{email}/alias/{alias}"
    },
    {
      "description": "capabilities operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get available capabilities for this account",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:account/capabilities/get"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.mxplan.accountCapabilities"
        }
      ],
      "path": "/email/mxplan/{service}/account/{email}/capabilities"
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
          "iamActions": [
            "emailMxplan:apiovh:account/changePassword"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task"
        }
      ],
      "path": "/email/mxplan/{service}/account/{email}/changePassword"
    },
    {
      "description": "Account Diagnosis",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:account/diagnostic/get"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.mxplan.AccountDiagnosis"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create new diagnosis request",
          "httpMethod": "POST",
          "iamActions": [
            "emailMxplan:apiovh:account/diagnostic/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "Account password",
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task"
        }
      ],
      "path": "/email/mxplan/{service}/account/{email}/diagnostic"
    },
    {
      "description": "List the email.mxplan.AccountFullAccess objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Full access granted users for this mailbox",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:account/fullAccess/get"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
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
          "description": "Allow full access to a user",
          "httpMethod": "POST",
          "iamActions": [
            "emailMxplan:apiovh:account/fullAccess/grant"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task"
        }
      ],
      "path": "/email/mxplan/{service}/account/{email}/fullAccess"
    },
    {
      "description": "Users having full access on this mailbox",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Revoke full access",
          "httpMethod": "DELETE",
          "iamActions": [
            "emailMxplan:apiovh:account/fullAccess/revoke"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:account/fullAccess/get"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.mxplan.AccountFullAccess"
        }
      ],
      "path": "/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}"
    },
    {
      "description": "List the email.mxplan.AccountSendAs objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Send as granted users for this mailbox",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:account/sendAs/get"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
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
          "description": "Allow another user to send mails from this mailbox",
          "httpMethod": "POST",
          "iamActions": [
            "emailMxplan:apiovh:account/sendAs/grant"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task"
        }
      ],
      "path": "/email/mxplan/{service}/account/{email}/sendAs"
    },
    {
      "description": "Users authorized to send mails from this mailbox",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete allowed user for sendAs",
          "httpMethod": "DELETE",
          "iamActions": [
            "emailMxplan:apiovh:account/sendAs/revoke"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:account/sendAs/get"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.mxplan.AccountSendAs"
        }
      ],
      "path": "/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}"
    },
    {
      "description": "List the email.mxplan.AccountSendOnBehalfTo objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "SendOnBehalfTo granted users for this mailbox",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:account/sendOnBehalfTo/get"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
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
          "description": "Allow another user to Send On Behalf To mails from this mailbox",
          "httpMethod": "POST",
          "iamActions": [
            "emailMxplan:apiovh:account/sendOnBehalfTo/grant"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task"
        }
      ],
      "path": "/email/mxplan/{service}/account/{email}/sendOnBehalfTo"
    },
    {
      "description": "Get users authorized to Send On Behalf To mails from this mailbox",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete allowed user for SendOnBehalfTo",
          "httpMethod": "DELETE",
          "iamActions": [
            "emailMxplan:apiovh:account/sendOnBehalfTo/revoke"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:account/sendOnBehalfTo/get"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.mxplan.AccountSendOnBehalfTo"
        }
      ],
      "path": "/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}"
    },
    {
      "description": "List the email.pro.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Pending task for this mailbox",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:account/task/get"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/email/mxplan/{service}/account/{email}/task"
    },
    {
      "description": "Organization task details",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:account/task/get"
          ],
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
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task"
        }
      ],
      "path": "/email/mxplan/{service}/account/{email}/task/{id}"
    },
    {
      "description": "List the email.mxplan.Domain objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Domains associated to this service",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:domain/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your mxplan organization",
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
          "responseType": "string[]"
        }
      ],
      "path": "/email/mxplan/{service}/domain"
    },
    {
      "description": "Domain",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:domain/get"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.mxplan.Domain"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "emailMxplan:apiovh:domain/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.mxplan.Domain",
              "description": "New object properties",
              "fullType": "email.mxplan.Domain",
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/mxplan/{service}/domain/{domainName}"
    },
    {
      "description": "disclaimer",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete existing organization disclaimer",
          "httpMethod": "DELETE",
          "iamActions": [
            "emailMxplan:apiovh:domain/disclaimer/delete"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:domain/disclaimer/get"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.disclaimer"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create organization disclaimer of each email",
          "httpMethod": "POST",
          "iamActions": [
            "emailMxplan:apiovh:domain/disclaimer/create"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "emailMxplan:apiovh:domain/disclaimer/edit"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/mxplan/{service}/domain/{domainName}/disclaimer"
    },
    {
      "description": "disclaimerAttribute operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get diclaimer attributes to substitute with Active Directory properties",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:domain/disclaimerAttribute/get"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.DisclaimerAttributeEnum[]"
        }
      ],
      "path": "/email/mxplan/{service}/domain/{domainName}/disclaimerAttribute"
    },
    {
      "description": "List the email.mxplan.ExternalContact objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "External contacts for this service",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:externalContact/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your mxplan organization",
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "create new external contact",
          "httpMethod": "POST",
          "iamActions": [
            "emailMxplan:apiovh:externalContact/create"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task"
        }
      ],
      "path": "/email/mxplan/{service}/externalContact"
    },
    {
      "description": "External contact for this mxplan service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "delete external contact",
          "httpMethod": "DELETE",
          "iamActions": [
            "emailMxplan:apiovh:externalContact/delete"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:externalContact/get"
          ],
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.mxplan.ExternalContact"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "emailMxplan:apiovh:externalContact/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.mxplan.ExternalContact",
              "description": "New object properties",
              "fullType": "email.mxplan.ExternalContact",
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
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/mxplan/{service}/externalContact/{externalEmailAddress}"
    },
    {
      "description": "Server",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:server/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.mxplan.Server"
        }
      ],
      "path": "/email/mxplan/{service}/server"
    },
    {
      "description": "List the email.pro.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Pending actions",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:task/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/email/mxplan/{service}/task"
    },
    {
      "description": "Organization task details",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "emailMxplan:apiovh:task/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.pro.Task"
        }
      ],
      "path": "/email/mxplan/{service}/task/{id}"
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
          "iamActions": [
            "emailMxplan:apiovh:updateFlagsOnAllAccounts"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your mxplan organization",
              "fullType": "string",
              "name": "service",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/mxplan/{service}/updateFlagsOnAllAccounts"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "email.mxplan.Account": {
      "description": "Mailbox",
      "id": "Account",
      "namespace": "email.mxplan",
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
          "fullType": "double",
          "readOnly": false,
          "required": false,
          "type": "double"
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
    "email.mxplan.AccountAlias": {
      "description": "Aliases on this mailbox",
      "id": "AccountAlias",
      "namespace": "email.mxplan",
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
    "email.mxplan.AccountDiagnosis": {
      "description": "Account Diagnosis",
      "id": "AccountDiagnosis",
      "namespace": "email.mxplan",
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
    "email.mxplan.AccountFullAccess": {
      "description": "Users having full access on this mailbox",
      "id": "AccountFullAccess",
      "namespace": "email.mxplan",
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
    "email.mxplan.AccountSendAs": {
      "description": "Users authorized to send mails from this mailbox",
      "id": "AccountSendAs",
      "namespace": "email.mxplan",
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
    "email.mxplan.AccountSendOnBehalfTo": {
      "description": "Get users authorized to Send On Behalf To mails from this mailbox",
      "id": "AccountSendOnBehalfTo",
      "namespace": "email.mxplan",
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
    "email.mxplan.Domain": {
      "description": "Domain",
      "id": "Domain",
      "namespace": "email.mxplan",
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
          "canBeNull": false,
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
          "canBeNull": false,
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
    "email.mxplan.ExternalContact": {
      "description": "External contact for this mxplan service",
      "id": "ExternalContact",
      "namespace": "email.mxplan",
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
    "email.mxplan.Server": {
      "description": "Server",
      "id": "Server",
      "namespace": "email.mxplan",
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
    "email.mxplan.Service": {
      "description": "MXPlan service",
      "id": "Service",
      "namespace": "email.mxplan",
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
          "fullType": "email.mxplan.ServiceOfferEnum",
          "readOnly": true,
          "required": false,
          "type": "email.mxplan.ServiceOfferEnum"
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
    "email.mxplan.ServiceOfferEnum": {
      "description": "Service Offer name",
      "enum": [
        "MXPLAN"
      ],
      "enumType": "string",
      "id": "ServiceOfferEnum",
      "namespace": "email.mxplan"
    },
    "email.mxplan.accountCapabilities": {
      "description": "Account capabilities",
      "id": "accountCapabilities",
      "namespace": "email.mxplan",
      "properties": {
        "quotas": {
          "canBeNull": true,
          "description": "List of allowed quotas (no constraint if null)",
          "readOnly": false,
          "required": false,
          "type": "double[]"
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
        "addDomainDKIM",
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
        "deleteDomainDKIM",
        "deleteDomainDisclaimer",
        "deleteExternalContact",
        "deleteFullAccess",
        "deleteSendAs",
        "deleteSendOnBehalfTo",
        "deleteService",
        "deleteServiceAuthorizedIp",
        "diagnoseAccount",
        "disableDKIM",
        "enableDKIM",
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
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "checkSPF": {
          "canBeNull": false,
          "description": "Check SPF of message",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "deleteSpam": {
          "canBeNull": false,
          "description": "If message is a spam delete it",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "deleteVirus": {
          "canBeNull": false,
          "description": "If message is a virus delete it",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "putInJunk": {
          "canBeNull": false,
          "description": "If message is a spam or virus put in junk. Overridden by deleteSpam or deleteVirus",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "tagSpam": {
          "canBeNull": false,
          "description": "If message is a spam change its subject",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "tagVirus": {
          "canBeNull": false,
          "description": "If message is a virus change its subject",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    }
  },
  "resourcePath": "/email/mxplan"
}