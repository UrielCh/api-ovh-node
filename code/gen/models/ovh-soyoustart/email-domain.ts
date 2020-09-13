import {Schema} from '../../src/schema';

// imported from https://eu.api.soyoustart.com:443/1.0/email/domain.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the MX service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/email/domain"
    },
    {
      "description": "List the email.domain.AccountDelegated objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delegated emails",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of email address",
              "fullType": "string",
              "name": "accountName",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain of email address",
              "fullType": "string",
              "name": "domain",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/email/domain/delegatedAccount"
    },
    {
      "description": "Account List",
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
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.AccountDelegated"
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
              "dataType": "email.domain.AccountDelegated",
              "description": "New object properties",
              "fullType": "email.domain.AccountDelegated",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/domain/delegatedAccount/{email}"
    },
    {
      "description": "changePassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change mailbox password (length : [9;30], no space at begin and end, no accent)",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "New password",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskPop"
        }
      ],
      "path": "/email/domain/delegatedAccount/{email}/changePassword"
    },
    {
      "description": "List the email.domain.Filter objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get filters",
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
            }
          ],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create new filter for account",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.DomainFilterActionEnum",
              "description": "Action of filter",
              "fullType": "domain.DomainFilterActionEnum",
              "name": "action",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Action parameter of filter",
              "fullType": "string",
              "name": "actionParam",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "If true filter is active",
              "fullType": "boolean",
              "name": "active",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Header to be filtered",
              "fullType": "string",
              "name": "header",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter name",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "domain.DomainFilterOperandEnum",
              "description": "Rule of filter",
              "fullType": "domain.DomainFilterOperandEnum",
              "name": "operand",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Priority of filter",
              "fullType": "long",
              "name": "priority",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Rule parameter of filter",
              "fullType": "string",
              "name": "value",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskFilter"
        }
      ],
      "path": "/email/domain/delegatedAccount/{email}/filter"
    },
    {
      "description": "Filter List",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an existing filter",
          "httpMethod": "DELETE",
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
              "description": "Filter name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskFilter[]"
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
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.Filter"
        }
      ],
      "path": "/email/domain/delegatedAccount/{email}/filter/{name}"
    },
    {
      "description": "changeActivity operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change filter activity",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "New activity",
              "fullType": "boolean",
              "name": "activity",
              "paramType": "body",
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
              "description": "Filter name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskFilter"
        }
      ],
      "path": "/email/domain/delegatedAccount/{email}/filter/{name}/changeActivity"
    },
    {
      "description": "changePriority operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change filter priority",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "New priority",
              "fullType": "long",
              "name": "priority",
              "paramType": "body",
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
              "description": "Filter name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskFilter"
        }
      ],
      "path": "/email/domain/delegatedAccount/{email}/filter/{name}/changePriority"
    },
    {
      "description": "List the email.domain.Rule objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get rules",
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
              "description": "Filter name",
              "fullType": "string",
              "name": "name",
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
          "description": "Create new rule for filter",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Header to be filtered",
              "fullType": "string",
              "name": "header",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "domain.DomainFilterOperandEnum",
              "description": "Rule of filter",
              "fullType": "domain.DomainFilterOperandEnum",
              "name": "operand",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Rule parameter of filter",
              "fullType": "string",
              "name": "value",
              "paramType": "body",
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
              "description": "Filter name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskFilter"
        }
      ],
      "path": "/email/domain/delegatedAccount/{email}/filter/{name}/rule"
    },
    {
      "description": "Rule List",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an existing filter",
          "httpMethod": "DELETE",
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
              "description": "",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskFilter[]"
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
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.Rule"
        }
      ],
      "path": "/email/domain/delegatedAccount/{email}/filter/{name}/rule/{id}"
    },
    {
      "description": "Responder of account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an existing responder in server",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskSpecialAccount"
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
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.ResponderAccount"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create new responder in server",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Content of responder",
              "fullType": "string",
              "name": "content",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "If true, emails will be copy to emailToCopy address",
              "fullType": "boolean",
              "name": "copy",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Account where copy emails",
              "fullType": "string",
              "name": "copyTo",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Date of start responder",
              "fullType": "datetime",
              "name": "from",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Date of end responder",
              "fullType": "datetime",
              "name": "to",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskSpecialAccount"
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
              "dataType": "email.domain.ResponderAccount",
              "description": "New object properties",
              "fullType": "email.domain.ResponderAccount",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/domain/delegatedAccount/{email}/responder"
    },
    {
      "description": "updateUsage operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update usage of account",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/domain/delegatedAccount/{email}/updateUsage"
    },
    {
      "description": "usage operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "usage of account",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.DomainUsageAccountStruct"
        }
      ],
      "path": "/email/domain/delegatedAccount/{email}/usage"
    },
    {
      "description": "Get limits of mailing list",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get limits of mailing list",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "If true, messages are moderate",
              "fullType": "boolean",
              "name": "moderatorMessage",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "domain.DomainMlLimits"
        }
      ],
      "path": "/email/domain/mailingListLimits"
    },
    {
      "description": "Domain service",
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
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.DomainService"
        }
      ],
      "path": "/email/domain/{domain}"
    },
    {
      "description": "List the email.domain.Account objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get accounts",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Account name",
              "fullType": "string",
              "name": "accountName",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Account description",
              "fullType": "string",
              "name": "description",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create new mailbox in server",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Account name",
              "fullType": "string",
              "name": "accountName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Description Account",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "password",
              "description": "Account password",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account size in bytes (default : 5000000000) (possible values : /email/domain/{domain}/allowedAccountSize )",
              "fullType": "long",
              "name": "size",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskPop"
        }
      ],
      "path": "/email/domain/{domain}/account"
    },
    {
      "description": "Account List",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an existing mailbox in server",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskPop"
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
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.Account"
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
              "dataType": "email.domain.Account",
              "description": "New object properties",
              "fullType": "email.domain.Account",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/domain/{domain}/account/{accountName}"
    },
    {
      "description": "changePassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change mailbox password (length : [9;30], no space at begin and end, no accent)",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "New password",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskPop"
        }
      ],
      "path": "/email/domain/{domain}/account/{accountName}/changePassword"
    },
    {
      "description": "List the email.domain.Delegation objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get delegations",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
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
          "description": "Create delegation for this account",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "OVH customer unique identifier",
              "fullType": "coreTypes.AccountId:string",
              "name": "accountId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/email/domain/{domain}/account/{accountName}/delegation"
    },
    {
      "description": "Delegation List",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an existing delegation",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "OVH customer unique identifier",
              "fullType": "coreTypes.AccountId:string",
              "name": "accountId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
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
              "description": "OVH customer unique identifier",
              "fullType": "coreTypes.AccountId:string",
              "name": "accountId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.Delegation"
        }
      ],
      "path": "/email/domain/{domain}/account/{accountName}/delegation/{accountId}"
    },
    {
      "description": "List the email.domain.Filter objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get filters",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
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
          "description": "Create new filter for account",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.DomainFilterActionEnum",
              "description": "Action of filter",
              "fullType": "domain.DomainFilterActionEnum",
              "name": "action",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Action parameter of filter",
              "fullType": "string",
              "name": "actionParam",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "If true filter is active",
              "fullType": "boolean",
              "name": "active",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Header to be filtered",
              "fullType": "string",
              "name": "header",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter name",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "domain.DomainFilterOperandEnum",
              "description": "Rule of filter",
              "fullType": "domain.DomainFilterOperandEnum",
              "name": "operand",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Priority of filter",
              "fullType": "long",
              "name": "priority",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Rule parameter of filter",
              "fullType": "string",
              "name": "value",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskFilter"
        }
      ],
      "path": "/email/domain/{domain}/account/{accountName}/filter"
    },
    {
      "description": "Filter List",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an existing filter",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskFilter[]"
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
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.Filter"
        }
      ],
      "path": "/email/domain/{domain}/account/{accountName}/filter/{name}"
    },
    {
      "description": "changeActivity operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change filter activity",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "New activity",
              "fullType": "boolean",
              "name": "activity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskFilter"
        }
      ],
      "path": "/email/domain/{domain}/account/{accountName}/filter/{name}/changeActivity"
    },
    {
      "description": "changePriority operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change filter priority",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "New priority",
              "fullType": "long",
              "name": "priority",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskFilter"
        }
      ],
      "path": "/email/domain/{domain}/account/{accountName}/filter/{name}/changePriority"
    },
    {
      "description": "List the email.domain.Rule objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get rules",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter name",
              "fullType": "string",
              "name": "name",
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
          "description": "Create new rule for filter",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Header to be filtered",
              "fullType": "string",
              "name": "header",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "domain.DomainFilterOperandEnum",
              "description": "Rule of filter",
              "fullType": "domain.DomainFilterOperandEnum",
              "name": "operand",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Rule parameter of filter",
              "fullType": "string",
              "name": "value",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskFilter"
        }
      ],
      "path": "/email/domain/{domain}/account/{accountName}/filter/{name}/rule"
    },
    {
      "description": "Rule List",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an existing filter",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskFilter[]"
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
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.Rule"
        }
      ],
      "path": "/email/domain/{domain}/account/{accountName}/filter/{name}/rule/{id}"
    },
    {
      "description": "List the email.domain.MigrationService objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get migration service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "email.domain.MigrationServiceType",
              "description": "Type of migration service",
              "fullType": "email.domain.MigrationServiceType",
              "name": "type",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/email/domain/{domain}/account/{accountName}/migrate"
    },
    {
      "description": "Migration service",
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
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name allowed as migration destination",
              "fullType": "string",
              "name": "destinationServiceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.MigrationService"
        }
      ],
      "path": "/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}"
    },
    {
      "description": "List the email.domain.MigrationAccount objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List of email address available for migration",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name allowed as migration destination",
              "fullType": "string",
              "name": "destinationServiceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account maximum size",
              "fullType": "long",
              "name": "quota",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress"
    },
    {
      "description": "Migration account",
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
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Destination account name",
              "fullType": "string",
              "name": "destinationEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name allowed as migration destination",
              "fullType": "string",
              "name": "destinationServiceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.MigrationAccount"
        }
      ],
      "path": "/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}"
    },
    {
      "description": "checkMigrate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Check if it's possible to migrate",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Destination account name",
              "fullType": "string",
              "name": "destinationEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name allowed as migration destination",
              "fullType": "string",
              "name": "destinationServiceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.MigrationCheckStruct"
        }
      ],
      "path": "/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/checkMigrate"
    },
    {
      "description": "migrate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Migrate account to destination account",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "New password used for migration",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Destination account name",
              "fullType": "string",
              "name": "destinationEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name allowed as migration destination",
              "fullType": "string",
              "name": "destinationServiceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskPop"
        }
      ],
      "path": "/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/migrate"
    },
    {
      "description": "updateUsage operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update usage of account",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/domain/{domain}/account/{accountName}/updateUsage"
    },
    {
      "description": "usage operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "usage of account",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "accountName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.DomainUsageAccountStruct"
        }
      ],
      "path": "/email/domain/{domain}/account/{accountName}/usage"
    },
    {
      "description": "List the email.domain.Acl objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get ACL on your domain",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
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
          "description": "Create new ACL",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Deleguates rights to",
              "fullType": "coreTypes.AccountId:string",
              "name": "accountId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.Acl"
        }
      ],
      "path": "/email/domain/{domain}/acl"
    },
    {
      "description": "Email ACL",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete ACL",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "OVH customer unique identifier",
              "fullType": "coreTypes.AccountId:string",
              "name": "accountId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
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
              "description": "OVH customer unique identifier",
              "fullType": "coreTypes.AccountId:string",
              "name": "accountId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.Acl"
        }
      ],
      "path": "/email/domain/{domain}/acl/{accountId}"
    },
    {
      "description": "Change the contacts of this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/email/domain/{domain}/changeContact"
    },
    {
      "description": "changeDnsMXFilter operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change MX filter, so change MX DNS records",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Target server for custom MX",
              "fullType": "string",
              "name": "customTarget",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "domain.DomainMXFilterEnum",
              "description": "New MX filter",
              "fullType": "domain.DomainMXFilterEnum",
              "name": "mxFilter",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Sub domain",
              "fullType": "string",
              "name": "subDomain",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/domain/{domain}/changeDnsMXFilter"
    },
    {
      "description": "confirmTermination operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Confirm termination of your email service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Commentary about your termination request",
              "fullType": "string",
              "name": "commentary",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "service.TerminationReasonEnum",
              "description": "Reason of your termination request",
              "fullType": "service.TerminationReasonEnum",
              "name": "reason",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The termination token sent by mail to the admin contact",
              "fullType": "string",
              "name": "token",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/email/domain/{domain}/confirmTermination"
    },
    {
      "description": "dnsMXFilter operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Domain MX filter",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Sub domain",
              "fullType": "string",
              "name": "subDomain",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "domain.DomainMXFilterEnum"
        }
      ],
      "path": "/email/domain/{domain}/dnsMXFilter"
    },
    {
      "description": "dnsMXRecords operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Domain MX records",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Sub domain",
              "fullType": "string",
              "name": "subDomain",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/email/domain/{domain}/dnsMXRecords"
    },
    {
      "description": "List the email.domain.MailingList objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get mailing lists",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Mailing list name",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create new mailingList",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.DomainMlLanguageEnum",
              "description": "Language of mailing list",
              "fullType": "domain.DomainMlLanguageEnum",
              "name": "language",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Mailing list name",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "domain.DomainMlOptionsStruct",
              "description": "Options of mailing list",
              "fullType": "domain.DomainMlOptionsStruct",
              "name": "options",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Owner Email",
              "fullType": "string",
              "name": "ownerEmail",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Email to reply of mailing list",
              "fullType": "string",
              "name": "replyTo",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskMl"
        }
      ],
      "path": "/email/domain/{domain}/mailingList"
    },
    {
      "description": "Mailing List",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete existing Mailing list",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of mailing list",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskMl"
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
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of mailing list",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.MailingList"
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
              "dataType": "email.domain.MailingList",
              "description": "New object properties",
              "fullType": "email.domain.MailingList",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of mailing list",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/domain/{domain}/mailingList/{name}"
    },
    {
      "description": "changeOptions operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change mailing list options",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.DomainMlOptionsStruct",
              "description": "Options of mailing list",
              "fullType": "domain.DomainMlOptionsStruct",
              "name": "options",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of mailing list",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskMl"
        }
      ],
      "path": "/email/domain/{domain}/mailingList/{name}/changeOptions"
    },
    {
      "description": "List the email.domain.Moderator objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of moderators",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of mailing list",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Moderator email",
              "fullType": "string",
              "name": "email",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add moderator to mailing list",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email of moderator",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of mailing list",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskMl"
        }
      ],
      "path": "/email/domain/{domain}/mailingList/{name}/moderator"
    },
    {
      "description": "Moderators List",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete existing moderator",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of mailing list",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskMl"
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
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of mailing list",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.Moderator"
        }
      ],
      "path": "/email/domain/{domain}/mailingList/{name}/moderator/{email}"
    },
    {
      "description": "sendListByEmail operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Send moderators list and subscribers list of this mailing list by email",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email destination",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of mailing list",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskMl"
        }
      ],
      "path": "/email/domain/{domain}/mailingList/{name}/sendListByEmail"
    },
    {
      "description": "List the email.domain.Subscriber objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of subscribers",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of mailing list",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Subscriber email",
              "fullType": "string",
              "name": "email",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add subscriber to mailing list",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email of subscriber",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of mailing list",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskMl"
        }
      ],
      "path": "/email/domain/{domain}/mailingList/{name}/subscriber"
    },
    {
      "description": "Subscribers List",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete existing subscriber",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of mailing list",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskMl"
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
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of mailing list",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.Subscriber"
        }
      ],
      "path": "/email/domain/{domain}/mailingList/{name}/subscriber/{email}"
    },
    {
      "description": "migrateDelegationV3toV6 operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create delegation of domain with same nic than V3",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/domain/{domain}/migrateDelegationV3toV6"
    },
    {
      "description": "quota operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all quotas for this domain",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.DomainQuota"
        }
      ],
      "path": "/email/domain/{domain}/quota"
    },
    {
      "description": "recommendedDNSRecords operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Recommended domain DNS records",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Record[]"
        }
      ],
      "path": "/email/domain/{domain}/recommendedDNSRecords"
    },
    {
      "description": "List the email.domain.RedirectionGlobal objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get redirections",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of redirection",
              "fullType": "string",
              "name": "from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Email of redirection target",
              "fullType": "string",
              "name": "to",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create new redirection in server",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of redirection",
              "fullType": "string",
              "name": "from",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "If true keep a local copy",
              "fullType": "boolean",
              "name": "localCopy",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Target of account",
              "fullType": "string",
              "name": "to",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskSpecialAccount"
        }
      ],
      "path": "/email/domain/{domain}/redirection"
    },
    {
      "description": "Global Redirection",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an existing redirection in server",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskSpecialAccount"
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
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.RedirectionGlobal"
        }
      ],
      "path": "/email/domain/{domain}/redirection/{id}"
    },
    {
      "description": "changeRedirection operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change redirection",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Target of account",
              "fullType": "string",
              "name": "to",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskSpecialAccount"
        }
      ],
      "path": "/email/domain/{domain}/redirection/{id}/changeRedirection"
    },
    {
      "description": "List the email.domain.Responder objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get responders",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Responder name",
              "fullType": "string",
              "name": "account",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create new responder in server",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Account of domain",
              "fullType": "string",
              "name": "account",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Content of responder",
              "fullType": "string",
              "name": "content",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "If false, emails will be dropped. If true and copyTo field is empty, emails will be delivered to your mailbox. If true and copyTo is set with an address, emails will be delivered to this address",
              "fullType": "boolean",
              "name": "copy",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Account where copy emails",
              "fullType": "string",
              "name": "copyTo",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Date of start responder",
              "fullType": "datetime",
              "name": "from",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Date of end responder",
              "fullType": "datetime",
              "name": "to",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskSpecialAccount"
        }
      ],
      "path": "/email/domain/{domain}/responder"
    },
    {
      "description": "Responder",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an existing responder in server",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "account",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskSpecialAccount"
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
              "description": "Name of account",
              "fullType": "string",
              "name": "account",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.Responder"
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
              "dataType": "email.domain.Responder",
              "description": "New object properties",
              "fullType": "email.domain.Responder",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of account",
              "fullType": "string",
              "name": "account",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/domain/{domain}/responder/{account}"
    },
    {
      "description": "Details about a Service",
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
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service"
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
              "dataType": "services.Service",
              "description": "New object properties",
              "fullType": "services.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/domain/{domain}/serviceInfos"
    },
    {
      "description": "summary operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Summary for this domain",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.DomainSummary"
        }
      ],
      "path": "/email/domain/{domain}/summary"
    },
    {
      "description": "List the email.domain.TaskPop objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get account tasks",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Account name",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/email/domain/{domain}/task/account"
    },
    {
      "description": "Task Pop List",
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
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of task",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskPop"
        }
      ],
      "path": "/email/domain/{domain}/task/account/{id}"
    },
    {
      "description": "List the email.domain.TaskFilter objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get filter tasks",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Account name",
              "fullType": "string",
              "name": "account",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/email/domain/{domain}/task/filter"
    },
    {
      "description": "Task filter List",
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
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of task",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskFilter"
        }
      ],
      "path": "/email/domain/{domain}/task/filter/{id}"
    },
    {
      "description": "List the email.domain.TaskMl objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get Mailing List tasks",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Account name",
              "fullType": "string",
              "name": "account",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/email/domain/{domain}/task/mailinglist"
    },
    {
      "description": "Task Mailing List",
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
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
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
          "responseType": "email.domain.TaskMl"
        }
      ],
      "path": "/email/domain/{domain}/task/mailinglist/{id}"
    },
    {
      "description": "List the email.domain.TaskSpecialAccount objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get redirection tasks",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Account name",
              "fullType": "string",
              "name": "account",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/email/domain/{domain}/task/redirection"
    },
    {
      "description": "Task special account List",
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
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of task",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskSpecialAccount"
        }
      ],
      "path": "/email/domain/{domain}/task/redirection/{id}"
    },
    {
      "description": "List the email.domain.TaskSpecialAccount objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get responder tasks",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of responder",
              "fullType": "string",
              "name": "account",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/email/domain/{domain}/task/responder"
    },
    {
      "description": "Task special account List",
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
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of task",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.domain.TaskSpecialAccount"
        }
      ],
      "path": "/email/domain/{domain}/task/responder/{id}"
    },
    {
      "description": "terminate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Terminate your email service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of your domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/email/domain/{domain}/terminate"
    }
  ],
  "basePath": "https://eu.api.soyoustart.com/1.0",
  "models": {
    "domain.DomainFilterActionEnum": {
      "description": "Possible values for filter action",
      "enum": [
        "accept",
        "account",
        "delete",
        "redirect"
      ],
      "enumType": "string",
      "id": "DomainFilterActionEnum",
      "namespace": "domain"
    },
    "domain.DomainFilterOperandEnum": {
      "description": "Possible values for filter operation",
      "enum": [
        "checkspf",
        "contains",
        "noContains"
      ],
      "enumType": "string",
      "id": "DomainFilterOperandEnum",
      "namespace": "domain"
    },
    "domain.DomainMXFilterEnum": {
      "description": "Possible values for MX filter",
      "enum": [
        "CUSTOM",
        "FULL_FILTERING",
        "NO_FILTERING",
        "REDIRECT",
        "SIMPLE_FILTERING"
      ],
      "enumType": "string",
      "id": "DomainMXFilterEnum",
      "namespace": "domain"
    },
    "domain.DomainMlLanguageEnum": {
      "description": "Possible values for mailing list language",
      "enum": [
        "de",
        "en",
        "es",
        "fr",
        "it",
        "nl",
        "pl",
        "pt"
      ],
      "enumType": "string",
      "id": "DomainMlLanguageEnum",
      "namespace": "domain"
    },
    "domain.DomainMlLimits": {
      "description": "Structure of mailinglist limits",
      "id": "DomainMlLimits",
      "namespace": "domain",
      "properties": {
        "subscribers": {
          "canBeNull": false,
          "description": "Maximum number of subscribers",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "domain.DomainMlOptionsStruct": {
      "description": "Structure of imapCopy",
      "id": "DomainMlOptionsStruct",
      "namespace": "domain",
      "properties": {
        "moderatorMessage": {
          "canBeNull": false,
          "description": "If true, messages are moderate",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "subscribeByModerator": {
          "canBeNull": false,
          "description": "If true, enabled moderation for subscribe",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "usersPostOnly": {
          "canBeNull": false,
          "description": "If true, just user can post",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "domain.DomainPopActionEnum": {
      "description": "Possible values for pop action task",
      "enum": [
        "addAccount",
        "changeAccount",
        "changePassword",
        "deleteAccount",
        "internalMigration",
        "migration",
        "temporaryTask",
        "unknown"
      ],
      "enumType": "string",
      "id": "DomainPopActionEnum",
      "namespace": "domain"
    },
    "domain.DomainQuota": {
      "description": "Values of quota account (pop, mailing list, redirection, responder and big pop)",
      "id": "DomainQuota",
      "namespace": "domain",
      "properties": {
        "account": {
          "canBeNull": false,
          "description": "Maximum number of mailboxes",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "alias": {
          "canBeNull": false,
          "description": "Maximum number of aliases",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "mailingList": {
          "canBeNull": false,
          "description": "Maximum number of mailing lists",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "redirection": {
          "canBeNull": false,
          "description": "Maximum number of redirections",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "responder": {
          "canBeNull": false,
          "description": "Maximum number of responders",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "domain.DomainSpecialAccountActionEnum": {
      "description": "Possible values for pop action task",
      "enum": [
        "add",
        "change",
        "delete"
      ],
      "enumType": "string",
      "id": "DomainSpecialAccountActionEnum",
      "namespace": "domain"
    },
    "domain.DomainSpecialAccountTypeEnum": {
      "description": "Possible type task",
      "enum": [
        "25g",
        "alias",
        "delete",
        "filter",
        "forward",
        "responder"
      ],
      "enumType": "string",
      "id": "DomainSpecialAccountTypeEnum",
      "namespace": "domain"
    },
    "domain.DomainStatusEnum": {
      "description": "Possible values for status domain",
      "enum": [
        "close",
        "ok",
        "readOnly",
        "unknown"
      ],
      "enumType": "string",
      "id": "DomainStatusEnum",
      "namespace": "domain"
    },
    "domain.DomainSummary": {
      "description": "Values of number account (account, mailing list, redirection and responder)",
      "id": "DomainSummary",
      "namespace": "domain",
      "properties": {
        "account": {
          "canBeNull": false,
          "description": "Number of mailboxes",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "mailingList": {
          "canBeNull": false,
          "description": "Number of mailing lists",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "redirection": {
          "canBeNull": false,
          "description": "Number of redirections",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "responder": {
          "canBeNull": false,
          "description": "Number of responders",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "domain.DomainUsageAccountStruct": {
      "description": "Structure of usage account",
      "id": "DomainUsageAccountStruct",
      "namespace": "domain",
      "properties": {
        "date": {
          "canBeNull": true,
          "description": "Timestamp",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "emailCount": {
          "canBeNull": true,
          "description": "Number of message in mailbox",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "quota": {
          "canBeNull": true,
          "description": "Size of mailbox (bytes)",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "domain.zone.Record": {
      "description": "Zone resource records",
      "id": "Record",
      "namespace": "domain.zone",
      "properties": {
        "fieldType": {
          "canBeNull": false,
          "description": "Resource record Name",
          "fullType": "zone.NamedResolutionFieldTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "zone.NamedResolutionFieldTypeEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the zone resource record",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "subDomain": {
          "canBeNull": true,
          "description": "Resource record subdomain",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "target": {
          "canBeNull": false,
          "description": "Resource record target",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ttl": {
          "canBeNull": true,
          "description": "Resource record ttl",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "zone": {
          "canBeNull": false,
          "description": "Resource record zone",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "email.domain.Account": {
      "description": "Account List",
      "id": "Account",
      "namespace": "email.domain",
      "properties": {
        "accountName": {
          "canBeNull": false,
          "description": "Name of account",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": "Account description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "description": "Name of domain",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "email": {
          "canBeNull": false,
          "description": "Email",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isBlocked": {
          "canBeNull": false,
          "description": "If true your account is blocked",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "size": {
          "canBeNull": false,
          "description": "Size of your account in bytes",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.domain.AccountDelegated": {
      "description": "Account List",
      "id": "AccountDelegated",
      "namespace": "email.domain",
      "properties": {
        "accountName": {
          "canBeNull": false,
          "description": "Name of account",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "allowedAccountSize": {
          "canBeNull": true,
          "description": "List of allowed sizes for this account in bytes",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        },
        "description": {
          "canBeNull": false,
          "description": "Account description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "description": "Name of domain",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "email": {
          "canBeNull": false,
          "description": "Email",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isBlocked": {
          "canBeNull": false,
          "description": "If true your account is blocked",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "size": {
          "canBeNull": false,
          "description": "Size of your account in bytes",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.domain.Acl": {
      "description": "Email ACL",
      "id": "Acl",
      "namespace": "email.domain",
      "properties": {
        "accountId": {
          "canBeNull": false,
          "description": "OVH customer unique identifier",
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "email.domain.Delegation": {
      "description": "Delegation List",
      "id": "Delegation",
      "namespace": "email.domain",
      "properties": {
        "accountId": {
          "canBeNull": false,
          "description": "OVH customer unique identifier",
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "email.domain.Diagnose": {
      "description": "Email diagnoses",
      "id": "Diagnose",
      "namespace": "email.domain",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": "Creation date of diagnose",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Function of diagnose",
          "fullType": "email.domain.DomainDiagnoseFunctionEnum",
          "readOnly": true,
          "required": false,
          "type": "email.domain.DomainDiagnoseFunctionEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of diagnose",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": true,
          "description": "Name of account",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": true,
          "description": "Result of diagnose",
          "fullType": "email.domain.DomainDiagnoseResultEnum",
          "readOnly": true,
          "required": false,
          "type": "email.domain.DomainDiagnoseResultEnum"
        },
        "trace": {
          "canBeNull": true,
          "description": "Trace of diagnose",
          "fullType": "email.domain.DomainDiagnoseTraceStruct<email.domain.DomainDiagnoseResultEnum>[]",
          "readOnly": true,
          "required": false,
          "type": "email.domain.DomainDiagnoseTraceStruct<email.domain.DomainDiagnoseResultEnum>[]"
        }
      }
    },
    "email.domain.DomainDiagnoseFunctionEnum": {
      "description": "Function of diagnose",
      "enum": [
        "MX"
      ],
      "enumType": "string",
      "id": "DomainDiagnoseFunctionEnum",
      "namespace": "email.domain"
    },
    "email.domain.DomainDiagnoseResultEnum": {
      "description": "Result of diagnose",
      "enum": [
        "CUSTOM",
        "DEPRECATED",
        "KO",
        "OK"
      ],
      "enumType": "string",
      "id": "DomainDiagnoseResultEnum",
      "namespace": "email.domain"
    },
    "email.domain.DomainDiagnoseTraceStruct<T>": {
      "description": "Test and result, with proper test strings",
      "generics": [
        "T"
      ],
      "id": "DomainDiagnoseTraceStruct",
      "namespace": "email.domain",
      "properties": {
        "result": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "T"
        },
        "test": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "email.domain.DomainService": {
      "description": "Domain service",
      "id": "DomainService",
      "namespace": "email.domain",
      "properties": {
        "allowedAccountSize": {
          "canBeNull": true,
          "description": "List of allowed sizes for this domain in bytes",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        },
        "creationDate": {
          "canBeNull": true,
          "description": "Creation date of domain",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "domain": {
          "canBeNull": false,
          "description": "Name of domain",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "filerz": {
          "canBeNull": true,
          "description": "Filerz of domain",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "linkTo": {
          "canBeNull": true,
          "description": "Name of servicelinked with this domain",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "migratedMXPlanServiceName": {
          "canBeNull": true,
          "description": "Name of new MXPlan service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "offer": {
          "canBeNull": true,
          "description": "Offer of email service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Domain Status",
          "fullType": "domain.DomainStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DomainStatusEnum"
        }
      }
    },
    "email.domain.Filter": {
      "description": "Filter List",
      "id": "Filter",
      "namespace": "email.domain",
      "properties": {
        "action": {
          "canBeNull": true,
          "description": "Action of filter",
          "fullType": "domain.DomainFilterActionEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DomainFilterActionEnum"
        },
        "actionParam": {
          "canBeNull": true,
          "description": "Action parameter of filter",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "active": {
          "canBeNull": false,
          "description": "If true filter is active",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "domain": {
          "canBeNull": false,
          "description": "Domain name of filter",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Filter name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "pop": {
          "canBeNull": false,
          "description": "Account name of filter",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "priority": {
          "canBeNull": false,
          "description": "Priority of filter",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.domain.MailingList": {
      "description": "Mailing List",
      "id": "MailingList",
      "namespace": "email.domain",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Id of mailing list",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "language": {
          "canBeNull": true,
          "description": "Language of mailing list",
          "fullType": "domain.DomainMlLanguageEnum",
          "readOnly": false,
          "required": false,
          "type": "domain.DomainMlLanguageEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of mailing list",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nbSubscribers": {
          "canBeNull": true,
          "description": "Subscribers number of mailing list",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "nbSubscribersUpdateDate": {
          "canBeNull": true,
          "description": "Last update subscribers",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "options": {
          "canBeNull": false,
          "description": "Options of mailing list",
          "fullType": "domain.DomainMlOptionsStruct",
          "readOnly": true,
          "required": false,
          "type": "domain.DomainMlOptionsStruct"
        },
        "ownerEmail": {
          "canBeNull": false,
          "description": "Owner email of mailing list",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "replyTo": {
          "canBeNull": false,
          "description": "Email to reply of mailing list",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "email.domain.MigrationAccount": {
      "description": "Migration account",
      "id": "MigrationAccount",
      "namespace": "email.domain",
      "properties": {
        "destinationEmailAddress": {
          "canBeNull": false,
          "description": "Destination account name",
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
        }
      }
    },
    "email.domain.MigrationCheckCodeEnum": {
      "description": "Result code of check migration",
      "enum": [
        "ACCOUNT_EMPTY",
        "ACCOUNT_INPROGRESS",
        "DELEGATION_EXIST",
        "DOMAIN_EMPTY",
        "FILTER_EXIST",
        "FORWARD_EXIST",
        "FORWARD_LOCAL",
        "MAILINGLIST_EXIST",
        "MAILINGLIST_INPROGRESS",
        "MAILPROXY_BAD_INFRA",
        "MAILPROXY_EMPTY",
        "MAILPROXY_INPROGRESS",
        "MAILPROXY_RESERVATION",
        "REDIRECTION_INPROGRESS",
        "RESPONDER_EXIST",
        "RESPONDER_INPROGRESS",
        "UNKNOW"
      ],
      "enumType": "string",
      "id": "MigrationCheckCodeEnum",
      "namespace": "email.domain"
    },
    "email.domain.MigrationCheckResultStruct": {
      "description": "Check Migration result",
      "id": "MigrationCheckResultStruct",
      "namespace": "email.domain",
      "properties": {
        "code": {
          "canBeNull": false,
          "description": "Result code of check migration",
          "readOnly": false,
          "required": false,
          "type": "email.domain.MigrationCheckCodeEnum"
        },
        "details": {
          "canBeNull": true,
          "description": "Details of result code",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "email.domain.MigrationCheckStruct": {
      "description": "Check Migration result",
      "id": "MigrationCheckStruct",
      "namespace": "email.domain",
      "properties": {
        "alias": {
          "canBeNull": true,
          "description": "List of aliases",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "error": {
          "canBeNull": true,
          "description": "List of errors",
          "readOnly": false,
          "required": false,
          "type": "email.domain.MigrationCheckResultStruct[]"
        },
        "filter": {
          "canBeNull": true,
          "description": "List of filters",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "forward": {
          "canBeNull": true,
          "description": "List of forwards",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "warning": {
          "canBeNull": true,
          "description": "List of warnings",
          "readOnly": false,
          "required": false,
          "type": "email.domain.MigrationCheckResultStruct[]"
        }
      }
    },
    "email.domain.MigrationService": {
      "description": "Migration service",
      "id": "MigrationService",
      "namespace": "email.domain",
      "properties": {
        "contactAdmin": {
          "canBeNull": false,
          "description": "Admin contact of service",
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "contactBilling": {
          "canBeNull": false,
          "description": "Billing contact of service",
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "contactTech": {
          "canBeNull": false,
          "description": "Tech contact of service",
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "creation": {
          "canBeNull": false,
          "description": "Creation date of service",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "destinationServiceName": {
          "canBeNull": false,
          "description": "Service name allowed as migration destination",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "expiration": {
          "canBeNull": false,
          "description": "Expiration date of service",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "type": {
          "canBeNull": false,
          "description": "Offer type of service",
          "fullType": "email.domain.MigrationServiceType",
          "readOnly": true,
          "required": false,
          "type": "email.domain.MigrationServiceType"
        }
      }
    },
    "email.domain.MigrationServiceType": {
      "description": "Types of migration service",
      "enum": [
        "EMAIL PRO",
        "HOSTED EXCHANGE",
        "PRIVATE EXCHANGE",
        "PROVIDER EXCHANGE"
      ],
      "enumType": "string",
      "id": "MigrationServiceType",
      "namespace": "email.domain"
    },
    "email.domain.Moderator": {
      "description": "Moderators List",
      "id": "Moderator",
      "namespace": "email.domain",
      "properties": {
        "domain": {
          "canBeNull": false,
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
        "mailinglist": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "email.domain.RedirectionGlobal": {
      "description": "Global Redirection",
      "id": "RedirectionGlobal",
      "namespace": "email.domain",
      "properties": {
        "from": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "to": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "email.domain.Responder": {
      "description": "Responder",
      "id": "Responder",
      "namespace": "email.domain",
      "properties": {
        "account": {
          "canBeNull": false,
          "description": "Name of account",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "content": {
          "canBeNull": false,
          "description": "Content of responder",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "copy": {
          "canBeNull": false,
          "description": "If false, emails will be dropped. If true and copyTo field is empty, emails will be delivered to your mailbox. If true and copyTo is set with an address, emails will be delivered to this address",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "copyTo": {
          "canBeNull": true,
          "description": "Account where copy emails",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "from": {
          "canBeNull": true,
          "description": "Date of start responder",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "to": {
          "canBeNull": true,
          "description": "Date of end responder",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "email.domain.ResponderAccount": {
      "description": "Responder of account",
      "id": "ResponderAccount",
      "namespace": "email.domain",
      "properties": {
        "account": {
          "canBeNull": false,
          "description": "Name of account",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "content": {
          "canBeNull": false,
          "description": "Content of responder",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "copy": {
          "canBeNull": false,
          "description": "If true, emails will be copy to emailToCopy address",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "copyTo": {
          "canBeNull": true,
          "description": "Account where copy emails",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "from": {
          "canBeNull": true,
          "description": "Date of start responder",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "to": {
          "canBeNull": true,
          "description": "Date of end responder",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "email.domain.Rule": {
      "description": "Rule List",
      "id": "Rule",
      "namespace": "email.domain",
      "properties": {
        "header": {
          "canBeNull": false,
          "description": "Header to be filtered",
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
        },
        "operand": {
          "canBeNull": false,
          "description": "Rule of filter",
          "fullType": "domain.DomainFilterOperandEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DomainFilterOperandEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "Rule parameter of filter",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "email.domain.Subscriber": {
      "description": "Subscribers List",
      "id": "Subscriber",
      "namespace": "email.domain",
      "properties": {
        "domain": {
          "canBeNull": false,
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
        "mailinglist": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "email.domain.TaskFilter": {
      "description": "Task filter List",
      "id": "TaskFilter",
      "namespace": "email.domain",
      "properties": {
        "account": {
          "canBeNull": false,
          "description": "Account name of task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "action": {
          "canBeNull": false,
          "description": "Action of task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "description": "Domain name of task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of task",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "timestamp": {
          "canBeNull": false,
          "description": "Creation date of task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "email.domain.TaskMl": {
      "description": "Task Mailing List",
      "id": "TaskMl",
      "namespace": "email.domain",
      "properties": {
        "account": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "action": {
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
        "domain": {
          "canBeNull": false,
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
        },
        "language": {
          "canBeNull": false,
          "fullType": "domain.DomainMlLanguageEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DomainMlLanguageEnum"
        }
      }
    },
    "email.domain.TaskPop": {
      "description": "Task Pop List",
      "id": "TaskPop",
      "namespace": "email.domain",
      "properties": {
        "action": {
          "canBeNull": false,
          "description": "Action of task",
          "fullType": "domain.DomainPopActionEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DomainPopActionEnum"
        },
        "date": {
          "canBeNull": false,
          "description": "Creation date of task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "domain": {
          "canBeNull": false,
          "description": "Domain name of task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of task",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Account name of task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "email.domain.TaskSpecialAccount": {
      "description": "Task special account List",
      "id": "TaskSpecialAccount",
      "namespace": "email.domain",
      "properties": {
        "account": {
          "canBeNull": false,
          "description": "Account name of task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "action": {
          "canBeNull": false,
          "description": "Action of task",
          "fullType": "domain.DomainSpecialAccountActionEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DomainSpecialAccountActionEnum"
        },
        "date": {
          "canBeNull": false,
          "description": "Creation date of task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "domain": {
          "canBeNull": false,
          "description": "Domain name of task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of task",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of action filter",
          "fullType": "domain.DomainSpecialAccountTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DomainSpecialAccountTypeEnum"
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
    "service.TerminationReasonEnum": {
      "description": "All reasons you can provide for a service termination",
      "enum": [
        "FEATURES_DONT_SUIT_ME",
        "LACK_OF_PERFORMANCES",
        "MIGRATED_TO_ANOTHER_OVH_PRODUCT",
        "MIGRATED_TO_COMPETITOR",
        "NOT_ENOUGH_RECOGNITION",
        "NOT_NEEDED_ANYMORE",
        "NOT_RELIABLE",
        "NO_ANSWER",
        "OTHER",
        "PRODUCT_DIMENSION_DONT_SUIT_ME",
        "PRODUCT_TOOLS_DONT_SUIT_ME",
        "TOO_EXPENSIVE",
        "TOO_HARD_TO_USE",
        "UNSATIFIED_BY_CUSTOMER_SUPPORT"
      ],
      "enumType": "string",
      "id": "TerminationReasonEnum",
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
    },
    "zone.NamedResolutionFieldTypeEnum": {
      "description": "Resource record fieldType",
      "enum": [
        "A",
        "AAAA",
        "CAA",
        "CNAME",
        "DKIM",
        "DMARC",
        "LOC",
        "MX",
        "NAPTR",
        "NS",
        "PTR",
        "SPF",
        "SRV",
        "SSHFP",
        "TLSA",
        "TXT"
      ],
      "enumType": "string",
      "id": "NamedResolutionFieldTypeEnum",
      "namespace": "zone"
    }
  },
  "resourcePath": "/email/domain"
}