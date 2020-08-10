import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/email/domain",
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
          "description": "List available services"
        }
      ],
      "description": "Operations about the MX service"
    },
    {
      "path": "/email/domain/delegatedAccount",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Domain of email address"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Name of email address"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Delegated emails"
        }
      ],
      "description": "List the email.domain.AccountDelegated objects"
    },
    {
      "path": "/email/domain/delegatedAccount/{email}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.domain.AccountDelegated",
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
              "dataType": "email.domain.AccountDelegated",
              "paramType": "body",
              "fullType": "email.domain.AccountDelegated",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Account List"
    },
    {
      "path": "/email/domain/delegatedAccount/{email}/changePassword",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "New password"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.domain.TaskPop",
          "noAuthentication": false,
          "description": "Change mailbox password (length : [9;30], no space at begin and end, no accent)"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/email/domain/delegatedAccount/{email}/filter",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get filters"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "operand",
              "dataType": "domain.DomainFilterOperandEnum",
              "paramType": "body",
              "fullType": "domain.DomainFilterOperandEnum",
              "required": true,
              "description": "Rule of filter"
            },
            {
              "name": "action",
              "dataType": "domain.DomainFilterActionEnum",
              "paramType": "body",
              "fullType": "domain.DomainFilterActionEnum",
              "required": true,
              "description": "Action of filter"
            },
            {
              "name": "priority",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Priority of filter"
            },
            {
              "name": "header",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Header to be filtered"
            },
            {
              "name": "value",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Rule parameter of filter"
            },
            {
              "name": "active",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "If true filter is active"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Filter name"
            },
            {
              "name": "actionParam",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Action parameter of filter"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.domain.TaskFilter",
          "noAuthentication": false,
          "description": "Create new filter for account"
        }
      ],
      "description": "List the email.domain.Filter objects"
    },
    {
      "path": "/email/domain/delegatedAccount/{email}/filter/{name}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
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
          "responseType": "email.domain.TaskFilter[]",
          "noAuthentication": false,
          "description": "Delete an existing filter"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
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
          "responseType": "email.domain.Filter",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Filter List"
    },
    {
      "path": "/email/domain/delegatedAccount/{email}/filter/{name}/changeActivity",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "activity",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "New activity"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
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
          "responseType": "email.domain.TaskFilter",
          "noAuthentication": false,
          "description": "Change filter activity"
        }
      ],
      "description": "changeActivity operations"
    },
    {
      "path": "/email/domain/delegatedAccount/{email}/filter/{name}/changePriority",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "priority",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "New priority"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
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
          "responseType": "email.domain.TaskFilter",
          "noAuthentication": false,
          "description": "Change filter priority"
        }
      ],
      "description": "changePriority operations"
    },
    {
      "path": "/email/domain/delegatedAccount/{email}/filter/{name}/rule",
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
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Get rules"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "value",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Rule parameter of filter"
            },
            {
              "name": "operand",
              "dataType": "domain.DomainFilterOperandEnum",
              "paramType": "body",
              "fullType": "domain.DomainFilterOperandEnum",
              "required": true,
              "description": "Rule of filter"
            },
            {
              "name": "header",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Header to be filtered"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
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
          "responseType": "email.domain.TaskFilter",
          "noAuthentication": false,
          "description": "Create new rule for filter"
        }
      ],
      "description": "List the email.domain.Rule objects"
    },
    {
      "path": "/email/domain/delegatedAccount/{email}/filter/{name}/rule/{id}",
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
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.domain.TaskFilter[]",
          "noAuthentication": false,
          "description": "Delete an existing filter"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
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
          "responseType": "email.domain.Rule",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Rule List"
    },
    {
      "path": "/email/domain/delegatedAccount/{email}/responder",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.domain.TaskSpecialAccount",
          "noAuthentication": false,
          "description": "Delete an existing responder in server"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.domain.ResponderAccount",
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
              "name": "from",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "Date of start responder"
            },
            {
              "name": "copy",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "If true, emails will be copy to emailToCopy address"
            },
            {
              "name": "to",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "Date of end responder"
            },
            {
              "name": "content",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Content of responder"
            },
            {
              "name": "copyTo",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Account where copy emails"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.domain.TaskSpecialAccount",
          "noAuthentication": false,
          "description": "Create new responder in server"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "email.domain.ResponderAccount",
              "paramType": "body",
              "fullType": "email.domain.ResponderAccount",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Responder of account"
    },
    {
      "path": "/email/domain/delegatedAccount/{email}/updateUsage",
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
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Update usage of account"
        }
      ],
      "description": "updateUsage operations"
    },
    {
      "path": "/email/domain/delegatedAccount/{email}/usage",
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
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "domain.DomainUsageAccountStruct",
          "noAuthentication": false,
          "description": "usage of account"
        }
      ],
      "description": "usage operations"
    },
    {
      "path": "/email/domain/mailingListLimits",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "moderatorMessage",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": true,
              "description": "If true, messages are moderate"
            }
          ],
          "responseType": "domain.DomainMlLimits",
          "noAuthentication": true,
          "description": "Get limits of mailing list"
        }
      ],
      "description": "Get limits of mailing list"
    },
    {
      "path": "/email/domain/{domain}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "email.domain.DomainService",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Domain service"
    },
    {
      "path": "/email/domain/{domain}/account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Account name"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Account description"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get accounts"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            },
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Account password"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Description Account"
            },
            {
              "name": "size",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Account size in bytes (default : 5000000000) (possible values : /email/domain/{domain}/allowedAccountSize )"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "email.domain.TaskPop",
          "noAuthentication": false,
          "description": "Create new mailbox in server"
        }
      ],
      "description": "List the email.domain.Account objects"
    },
    {
      "path": "/email/domain/{domain}/account/{accountName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "email.domain.TaskPop",
          "noAuthentication": false,
          "description": "Delete an existing mailbox in server"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            }
          ],
          "responseType": "email.domain.Account",
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
              "dataType": "email.domain.Account",
              "paramType": "body",
              "fullType": "email.domain.Account",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Account List"
    },
    {
      "path": "/email/domain/{domain}/account/{accountName}/changePassword",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "New password"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "email.domain.TaskPop",
          "noAuthentication": false,
          "description": "Change mailbox password (length : [9;30], no space at begin and end, no accent)"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/email/domain/{domain}/account/{accountName}/delegation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get delegations"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "accountId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "OVH customer unique identifier"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Create delegation for this account"
        }
      ],
      "description": "List the email.domain.Delegation objects"
    },
    {
      "path": "/email/domain/{domain}/account/{accountName}/delegation/{accountId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            },
            {
              "name": "accountId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account ID"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Delete an existing delegation"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            },
            {
              "name": "accountId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account ID"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "email.domain.Delegation",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Delegation List"
    },
    {
      "path": "/email/domain/{domain}/account/{accountName}/filter",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get filters"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "active",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "If true filter is active"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Filter name"
            },
            {
              "name": "actionParam",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Action parameter of filter"
            },
            {
              "name": "operand",
              "dataType": "domain.DomainFilterOperandEnum",
              "paramType": "body",
              "fullType": "domain.DomainFilterOperandEnum",
              "required": true,
              "description": "Rule of filter"
            },
            {
              "name": "action",
              "dataType": "domain.DomainFilterActionEnum",
              "paramType": "body",
              "fullType": "domain.DomainFilterActionEnum",
              "required": true,
              "description": "Action of filter"
            },
            {
              "name": "priority",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Priority of filter"
            },
            {
              "name": "header",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Header to be filtered"
            },
            {
              "name": "value",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Rule parameter of filter"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            }
          ],
          "responseType": "email.domain.TaskFilter",
          "noAuthentication": false,
          "description": "Create new filter for account"
        }
      ],
      "description": "List the email.domain.Filter objects"
    },
    {
      "path": "/email/domain/{domain}/account/{accountName}/filter/{name}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "email.domain.TaskFilter[]",
          "noAuthentication": false,
          "description": "Delete an existing filter"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
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
          "responseType": "email.domain.Filter",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Filter List"
    },
    {
      "path": "/email/domain/{domain}/account/{accountName}/filter/{name}/changeActivity",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "activity",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "New activity"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
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
          "responseType": "email.domain.TaskFilter",
          "noAuthentication": false,
          "description": "Change filter activity"
        }
      ],
      "description": "changeActivity operations"
    },
    {
      "path": "/email/domain/{domain}/account/{accountName}/filter/{name}/changePriority",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "priority",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "New priority"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
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
          "responseType": "email.domain.TaskFilter",
          "noAuthentication": false,
          "description": "Change filter priority"
        }
      ],
      "description": "changePriority operations"
    },
    {
      "path": "/email/domain/{domain}/account/{accountName}/filter/{name}/rule",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Get rules"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "header",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Header to be filtered"
            },
            {
              "name": "value",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Rule parameter of filter"
            },
            {
              "name": "operand",
              "dataType": "domain.DomainFilterOperandEnum",
              "paramType": "body",
              "fullType": "domain.DomainFilterOperandEnum",
              "required": true,
              "description": "Rule of filter"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
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
          "responseType": "email.domain.TaskFilter",
          "noAuthentication": false,
          "description": "Create new rule for filter"
        }
      ],
      "description": "List the email.domain.Rule objects"
    },
    {
      "path": "/email/domain/{domain}/account/{accountName}/filter/{name}/rule/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
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
          "responseType": "email.domain.TaskFilter[]",
          "noAuthentication": false,
          "description": "Delete an existing filter"
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
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
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
          "responseType": "email.domain.Rule",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Rule List"
    },
    {
      "path": "/email/domain/{domain}/account/{accountName}/migrate",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            },
            {
              "name": "type",
              "dataType": "email.domain.MigrationServiceType",
              "paramType": "query",
              "fullType": "email.domain.MigrationServiceType",
              "required": false,
              "description": "Type of migration service"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get migration service"
        }
      ],
      "description": "List the email.domain.MigrationService objects"
    },
    {
      "path": "/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            },
            {
              "name": "destinationServiceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Destination service name"
            }
          ],
          "responseType": "email.domain.MigrationService",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Migration service"
    },
    {
      "path": "/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            },
            {
              "name": "destinationServiceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Destination service name"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "quota",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Account maximum size"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of email address available for migration"
        }
      ],
      "description": "List the email.domain.MigrationAccount objects"
    },
    {
      "path": "/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            },
            {
              "name": "destinationServiceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Destination service name"
            },
            {
              "name": "destinationEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Destination email address"
            }
          ],
          "responseType": "email.domain.MigrationAccount",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Migration account"
    },
    {
      "path": "/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/checkMigrate",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            },
            {
              "name": "destinationServiceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Destination service name"
            },
            {
              "name": "destinationEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Destination email address"
            }
          ],
          "responseType": "email.domain.MigrationCheckStruct",
          "noAuthentication": false,
          "description": "Check if it's possible to migrate"
        }
      ],
      "description": "checkMigrate operations"
    },
    {
      "path": "/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/migrate",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "New password used for migration"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            },
            {
              "name": "destinationServiceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Destination service name"
            },
            {
              "name": "destinationEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Destination email address"
            }
          ],
          "responseType": "email.domain.TaskPop",
          "noAuthentication": false,
          "description": "Migrate account to destination account"
        }
      ],
      "description": "migrate operations"
    },
    {
      "path": "/email/domain/{domain}/account/{accountName}/updateUsage",
      "operations": [
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
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Update usage of account"
        }
      ],
      "description": "updateUsage operations"
    },
    {
      "path": "/email/domain/{domain}/account/{accountName}/usage",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account name"
            }
          ],
          "responseType": "domain.DomainUsageAccountStruct",
          "noAuthentication": false,
          "description": "usage of account"
        }
      ],
      "description": "usage operations"
    },
    {
      "path": "/email/domain/{domain}/acl",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get ACL on your domain"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "accountId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Deleguates rights to"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "email.domain.Acl",
          "noAuthentication": false,
          "description": "Create new ACL"
        }
      ],
      "description": "List the email.domain.Acl objects"
    },
    {
      "path": "/email/domain/{domain}/acl/{accountId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "accountId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account ID"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete ACL"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "accountId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account ID"
            }
          ],
          "responseType": "email.domain.Acl",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Email ACL"
    },
    {
      "path": "/email/domain/{domain}/changeContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "contactAdmin",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as admin contact"
            },
            {
              "name": "contactTech",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as tech contact"
            },
            {
              "name": "contactBilling",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as billing contact"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Launch a contact change procedure"
        }
      ],
      "description": "Change the contacts of this service"
    },
    {
      "path": "/email/domain/{domain}/changeDnsMXFilter",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "mxFilter",
              "dataType": "domain.DomainMXFilterEnum",
              "paramType": "body",
              "fullType": "domain.DomainMXFilterEnum",
              "required": true,
              "description": "New MX filter"
            },
            {
              "name": "subDomain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Sub domain"
            },
            {
              "name": "customTarget",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Target server for custom MX"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Change MX filter, so change MX DNS records"
        }
      ],
      "description": "changeDnsMXFilter operations"
    },
    {
      "path": "/email/domain/{domain}/confirmTermination",
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
              "dataType": "service.TerminationReasonEnum",
              "paramType": "body",
              "fullType": "service.TerminationReasonEnum",
              "required": false,
              "description": "Reason of your termination request"
            },
            {
              "name": "token",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The termination token sent by mail to the admin contact"
            },
            {
              "name": "commentary",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Commentary about your termination request"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Confirm termination of your email service"
        }
      ],
      "description": "confirmTermination operations"
    },
    {
      "path": "/email/domain/{domain}/dnsMXFilter",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "subDomain",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Sub domain"
            }
          ],
          "responseType": "domain.DomainMXFilterEnum",
          "noAuthentication": false,
          "description": "Domain MX filter"
        }
      ],
      "description": "dnsMXFilter operations"
    },
    {
      "path": "/email/domain/{domain}/dnsMXRecords",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "subDomain",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Sub domain"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Domain MX records"
        }
      ],
      "description": "dnsMXRecords operations"
    },
    {
      "path": "/email/domain/{domain}/mailingList",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Mailing list name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get mailing lists"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "options",
              "dataType": "domain.DomainMlOptionsStruct",
              "paramType": "body",
              "fullType": "domain.DomainMlOptionsStruct",
              "required": true,
              "description": "Options of mailing list"
            },
            {
              "name": "language",
              "dataType": "domain.DomainMlLanguageEnum",
              "paramType": "body",
              "fullType": "domain.DomainMlLanguageEnum",
              "required": true,
              "description": "Language of mailing list"
            },
            {
              "name": "replyTo",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Email to reply of mailing list"
            },
            {
              "name": "ownerEmail",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Owner Email"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Mailing list name"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "email.domain.TaskMl",
          "noAuthentication": false,
          "description": "Create new mailingList"
        }
      ],
      "description": "List the email.domain.MailingList objects"
    },
    {
      "path": "/email/domain/{domain}/mailingList/{name}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
          "responseType": "email.domain.TaskMl",
          "noAuthentication": false,
          "description": "Delete existing Mailing list"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
          "responseType": "email.domain.MailingList",
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
              "dataType": "email.domain.MailingList",
              "paramType": "body",
              "fullType": "email.domain.MailingList",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
      "description": "Mailing List"
    },
    {
      "path": "/email/domain/{domain}/mailingList/{name}/changeOptions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "options",
              "dataType": "domain.DomainMlOptionsStruct",
              "paramType": "body",
              "fullType": "domain.DomainMlOptionsStruct",
              "required": true,
              "description": "Options of mailing list"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
          "responseType": "email.domain.TaskMl",
          "noAuthentication": false,
          "description": "Change mailing list options"
        }
      ],
      "description": "changeOptions operations"
    },
    {
      "path": "/email/domain/{domain}/mailingList/{name}/moderator",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Moderator email"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of moderators"
        },
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
              "description": "Email of moderator"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
          "responseType": "email.domain.TaskMl",
          "noAuthentication": false,
          "description": "Add moderator to mailing list"
        }
      ],
      "description": "List the email.domain.Moderator objects"
    },
    {
      "path": "/email/domain/{domain}/mailingList/{name}/moderator/{email}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.domain.TaskMl",
          "noAuthentication": false,
          "description": "Delete existing moderator"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.domain.Moderator",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Moderators List"
    },
    {
      "path": "/email/domain/{domain}/mailingList/{name}/sendListByEmail",
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
              "description": "Email destination"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
          "responseType": "email.domain.TaskMl",
          "noAuthentication": false,
          "description": "Send moderators list and subscribers list of this mailing list by email"
        }
      ],
      "description": "sendListByEmail operations"
    },
    {
      "path": "/email/domain/{domain}/mailingList/{name}/subscriber",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Subscriber email"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of subscribers"
        },
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
              "description": "Email of subscriber"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
          "responseType": "email.domain.TaskMl",
          "noAuthentication": false,
          "description": "Add subscriber to mailing list"
        }
      ],
      "description": "List the email.domain.Subscriber objects"
    },
    {
      "path": "/email/domain/{domain}/mailingList/{name}/subscriber/{email}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.domain.TaskMl",
          "noAuthentication": false,
          "description": "Delete existing subscriber"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.domain.Subscriber",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Subscribers List"
    },
    {
      "path": "/email/domain/{domain}/migrateDelegationV3toV6",
      "operations": [
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
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Create delegation of domain with same nic than V3"
        }
      ],
      "description": "migrateDelegationV3toV6 operations"
    },
    {
      "path": "/email/domain/{domain}/quota",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "domain.DomainQuota",
          "noAuthentication": false,
          "description": "List all quotas for this domain"
        }
      ],
      "description": "quota operations"
    },
    {
      "path": "/email/domain/{domain}/recommendedDNSRecords",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "domain.zone.Record[]",
          "noAuthentication": false,
          "description": "Recommended domain DNS records"
        }
      ],
      "description": "recommendedDNSRecords operations"
    },
    {
      "path": "/email/domain/{domain}/redirection",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "to",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Email of redirection target"
            },
            {
              "name": "from",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Name of redirection"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get redirections"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "localCopy",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "If true keep a local copy"
            },
            {
              "name": "from",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of redirection"
            },
            {
              "name": "to",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Target of account"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "email.domain.TaskSpecialAccount",
          "noAuthentication": false,
          "description": "Create new redirection in server"
        }
      ],
      "description": "List the email.domain.RedirectionGlobal objects"
    },
    {
      "path": "/email/domain/{domain}/redirection/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
          "responseType": "email.domain.TaskSpecialAccount",
          "noAuthentication": false,
          "description": "Delete an existing redirection in server"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
          "responseType": "email.domain.RedirectionGlobal",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Global Redirection"
    },
    {
      "path": "/email/domain/{domain}/redirection/{id}/changeRedirection",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "to",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Target of account"
            },
            {
              "name": "id",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Id"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "email.domain.TaskSpecialAccount",
          "noAuthentication": false,
          "description": "Change redirection"
        }
      ],
      "description": "changeRedirection operations"
    },
    {
      "path": "/email/domain/{domain}/responder",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "account",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Responder name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get responders"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "copyTo",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Account where copy emails"
            },
            {
              "name": "account",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Account of domain"
            },
            {
              "name": "from",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "Date of start responder"
            },
            {
              "name": "copy",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "If false, emails will be dropped. If true and copyTo field is empty, emails will be delivered to your mailbox. If true and copyTo is set with an address, emails will be delivered to this address"
            },
            {
              "name": "content",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Content of responder"
            },
            {
              "name": "to",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "Date of end responder"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "email.domain.TaskSpecialAccount",
          "noAuthentication": false,
          "description": "Create new responder in server"
        }
      ],
      "description": "List the email.domain.Responder objects"
    },
    {
      "path": "/email/domain/{domain}/responder/{account}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "account",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "email.domain.TaskSpecialAccount",
          "noAuthentication": false,
          "description": "Delete an existing responder in server"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "account",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account"
            }
          ],
          "responseType": "email.domain.Responder",
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
              "dataType": "email.domain.Responder",
              "paramType": "body",
              "fullType": "email.domain.Responder",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "account",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Responder"
    },
    {
      "path": "/email/domain/{domain}/serviceInfos",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "services.Service",
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
              "dataType": "services.Service",
              "paramType": "body",
              "fullType": "services.Service",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Details about a Service"
    },
    {
      "path": "/email/domain/{domain}/summary",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "domain.DomainSummary",
          "noAuthentication": false,
          "description": "Summary for this domain"
        }
      ],
      "description": "summary operations"
    },
    {
      "path": "/email/domain/{domain}/task/account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Account name"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Get account tasks"
        }
      ],
      "description": "List the email.domain.TaskPop objects"
    },
    {
      "path": "/email/domain/{domain}/task/account/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
          "responseType": "email.domain.TaskPop",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Task Pop List"
    },
    {
      "path": "/email/domain/{domain}/task/filter",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "account",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Account name"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Get filter tasks"
        }
      ],
      "description": "List the email.domain.TaskFilter objects"
    },
    {
      "path": "/email/domain/{domain}/task/filter/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
          "responseType": "email.domain.TaskFilter",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Task filter List"
    },
    {
      "path": "/email/domain/{domain}/task/mailinglist",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "account",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Account name"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Get Mailing List tasks"
        }
      ],
      "description": "List the email.domain.TaskMl objects"
    },
    {
      "path": "/email/domain/{domain}/task/mailinglist/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
          "responseType": "email.domain.TaskMl",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Task Mailing List"
    },
    {
      "path": "/email/domain/{domain}/task/redirection",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "account",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Account name"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Get redirection tasks"
        }
      ],
      "description": "List the email.domain.TaskSpecialAccount objects"
    },
    {
      "path": "/email/domain/{domain}/task/redirection/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
          "responseType": "email.domain.TaskSpecialAccount",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Task special account List"
    },
    {
      "path": "/email/domain/{domain}/task/responder",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "account",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Name of responder"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Get responder tasks"
        }
      ],
      "description": "List the email.domain.TaskSpecialAccount objects"
    },
    {
      "path": "/email/domain/{domain}/task/responder/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
          "responseType": "email.domain.TaskSpecialAccount",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Task special account List"
    },
    {
      "path": "/email/domain/{domain}/terminate",
      "operations": [
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
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Terminate your email service"
        }
      ],
      "description": "terminate operations"
    }
  ],
  "resourcePath": "/email/domain",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "domain.DomainFilterActionEnum": {
      "id": "DomainFilterActionEnum",
      "namespace": "domain",
      "description": "Possible values for filter action",
      "enum": [
        "accept",
        "account",
        "delete",
        "redirect"
      ],
      "enumType": "string"
    },
    "domain.DomainFilterOperandEnum": {
      "id": "DomainFilterOperandEnum",
      "namespace": "domain",
      "description": "Possible values for filter operation",
      "enum": [
        "checkspf",
        "contains",
        "noContains"
      ],
      "enumType": "string"
    },
    "domain.DomainMXFilterEnum": {
      "id": "DomainMXFilterEnum",
      "namespace": "domain",
      "description": "Possible values for MX filter",
      "enum": [
        "CUSTOM",
        "FULL_FILTERING",
        "NO_FILTERING",
        "REDIRECT",
        "SIMPLE_FILTERING"
      ],
      "enumType": "string"
    },
    "domain.DomainMlLanguageEnum": {
      "id": "DomainMlLanguageEnum",
      "namespace": "domain",
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
      "enumType": "string"
    },
    "domain.DomainMlLimits": {
      "id": "DomainMlLimits",
      "namespace": "domain",
      "description": "Structure of mailinglist limits",
      "properties": {
        "subscribers": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum number of subscribers",
          "required": true
        }
      }
    },
    "domain.DomainMlOptionsStruct": {
      "id": "DomainMlOptionsStruct",
      "namespace": "domain",
      "description": "Structure of imapCopy",
      "properties": {
        "moderatorMessage": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If true, messages are moderate",
          "required": true
        },
        "subscribeByModerator": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If true, enabled moderation for subscribe",
          "required": true
        },
        "usersPostOnly": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If true, just user can post",
          "required": true
        }
      }
    },
    "domain.DomainPopActionEnum": {
      "id": "DomainPopActionEnum",
      "namespace": "domain",
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
      "enumType": "string"
    },
    "domain.DomainQuota": {
      "id": "DomainQuota",
      "namespace": "domain",
      "description": "Values of quota account (pop, mailing list, redirection, responder and big pop)",
      "properties": {
        "account": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum number of mailboxes",
          "required": true
        },
        "alias": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum number of aliases",
          "required": true
        },
        "mailingList": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum number of mailing lists",
          "required": true
        },
        "redirection": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum number of redirections",
          "required": true
        },
        "responder": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum number of responders",
          "required": true
        }
      }
    },
    "domain.DomainSpecialAccountActionEnum": {
      "id": "DomainSpecialAccountActionEnum",
      "namespace": "domain",
      "description": "Possible values for pop action task",
      "enum": [
        "add",
        "change",
        "delete"
      ],
      "enumType": "string"
    },
    "domain.DomainSpecialAccountTypeEnum": {
      "id": "DomainSpecialAccountTypeEnum",
      "namespace": "domain",
      "description": "Possible type task",
      "enum": [
        "25g",
        "alias",
        "delete",
        "filter",
        "forward",
        "responder"
      ],
      "enumType": "string"
    },
    "domain.DomainStatusEnum": {
      "id": "DomainStatusEnum",
      "namespace": "domain",
      "description": "Possible values for status domain",
      "enum": [
        "close",
        "ok",
        "readOnly",
        "unknown"
      ],
      "enumType": "string"
    },
    "domain.DomainSummary": {
      "id": "DomainSummary",
      "namespace": "domain",
      "description": "Values of number account (account, mailing list, redirection and responder)",
      "properties": {
        "account": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of mailboxes",
          "required": true
        },
        "mailingList": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of mailing lists",
          "required": true
        },
        "redirection": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of redirections",
          "required": true
        },
        "responder": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of responders",
          "required": true
        }
      }
    },
    "domain.DomainUsageAccountStruct": {
      "id": "DomainUsageAccountStruct",
      "namespace": "domain",
      "description": "Structure of usage account",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Timestamp",
          "required": false
        },
        "emailCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number of message in mailbox",
          "required": false
        },
        "quota": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Size of mailbox (bytes)",
          "required": false
        }
      }
    },
    "domain.zone.Record": {
      "id": "Record",
      "namespace": "domain.zone",
      "description": "Zone resource records",
      "properties": {
        "fieldType": {
          "type": "zone.NamedResolutionFieldTypeEnum",
          "fullType": "zone.NamedResolutionFieldTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Resource record Name",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the zone resource record",
          "required": true
        },
        "subDomain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Resource record subdomain",
          "required": false
        },
        "target": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Resource record target",
          "required": true
        },
        "ttl": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Resource record ttl",
          "required": false
        },
        "zone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Resource record zone",
          "required": true
        }
      }
    },
    "email.domain.Account": {
      "id": "Account",
      "namespace": "email.domain",
      "description": "Account List",
      "properties": {
        "accountName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of account",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Account description",
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of domain",
          "required": true
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Email",
          "required": true
        },
        "isBlocked": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If true your account is blocked",
          "required": true
        },
        "size": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Size of your account in bytes",
          "required": true
        }
      }
    },
    "email.domain.AccountDelegated": {
      "id": "AccountDelegated",
      "namespace": "email.domain",
      "description": "Account List",
      "properties": {
        "accountName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of account",
          "required": true
        },
        "allowedAccountSize": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "List of allowed sizes for this account in bytes",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Account description",
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of domain",
          "required": true
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Email",
          "required": true
        },
        "isBlocked": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If true your account is blocked",
          "required": true
        },
        "size": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Size of your account in bytes",
          "required": true
        }
      }
    },
    "email.domain.Acl": {
      "id": "Acl",
      "namespace": "email.domain",
      "description": "Email ACL",
      "properties": {
        "accountId": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "description": "OVH customer unique identifier",
          "required": true
        }
      }
    },
    "email.domain.Delegation": {
      "id": "Delegation",
      "namespace": "email.domain",
      "description": "Delegation List",
      "properties": {
        "accountId": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "description": "OVH customer unique identifier",
          "required": true
        }
      }
    },
    "email.domain.DomainService": {
      "id": "DomainService",
      "namespace": "email.domain",
      "description": "Domain service",
      "properties": {
        "allowedAccountSize": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "List of allowed sizes for this domain in bytes",
          "required": false
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Creation date of domain",
          "required": false
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of domain",
          "required": true
        },
        "filerz": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Filerz of domain",
          "required": false
        },
        "linkTo": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Name of servicelinked with this domain",
          "required": false
        },
        "migratedMXPlanServiceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Name of new MXPlan service",
          "required": false
        },
        "offer": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Offer of email service",
          "required": false
        },
        "status": {
          "type": "domain.DomainStatusEnum",
          "fullType": "domain.DomainStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain Status",
          "required": true
        }
      }
    },
    "email.domain.Filter": {
      "id": "Filter",
      "namespace": "email.domain",
      "description": "Filter List",
      "properties": {
        "action": {
          "type": "domain.DomainFilterActionEnum",
          "fullType": "domain.DomainFilterActionEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Action of filter",
          "required": false
        },
        "actionParam": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Action parameter of filter",
          "required": false
        },
        "active": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If true filter is active",
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain name of filter",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Filter name",
          "required": true
        },
        "pop": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account name of filter",
          "required": true
        },
        "priority": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Priority of filter",
          "required": true
        }
      }
    },
    "email.domain.MailingList": {
      "id": "MailingList",
      "namespace": "email.domain",
      "description": "Mailing List",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of mailing list",
          "required": true
        },
        "language": {
          "type": "domain.DomainMlLanguageEnum",
          "fullType": "domain.DomainMlLanguageEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Language of mailing list",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of mailing list",
          "required": true
        },
        "nbSubscribers": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Subscribers number of mailing list",
          "required": false
        },
        "nbSubscribersUpdateDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last update subscribers",
          "required": false
        },
        "options": {
          "type": "domain.DomainMlOptionsStruct",
          "fullType": "domain.DomainMlOptionsStruct",
          "canBeNull": false,
          "readOnly": true,
          "description": "Options of mailing list",
          "required": true
        },
        "ownerEmail": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Owner email of mailing list",
          "required": true
        },
        "replyTo": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Email to reply of mailing list",
          "required": true
        }
      }
    },
    "email.domain.MigrationAccount": {
      "id": "MigrationAccount",
      "namespace": "email.domain",
      "description": "Migration account",
      "properties": {
        "destinationEmailAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Destination account name",
          "required": true
        },
        "quota": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account maximum size",
          "required": true
        }
      }
    },
    "email.domain.MigrationCheckCodeEnum": {
      "id": "MigrationCheckCodeEnum",
      "namespace": "email.domain",
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
      "enumType": "string"
    },
    "email.domain.MigrationCheckResultStruct": {
      "id": "MigrationCheckResultStruct",
      "namespace": "email.domain",
      "description": "Check Migration result",
      "properties": {
        "code": {
          "type": "email.domain.MigrationCheckCodeEnum",
          "fullType": "email.domain.MigrationCheckCodeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Result code of check migration",
          "required": true
        },
        "details": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Details of result code",
          "required": false
        }
      }
    },
    "email.domain.MigrationCheckStruct": {
      "id": "MigrationCheckStruct",
      "namespace": "email.domain",
      "description": "Check Migration result",
      "properties": {
        "alias": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "List of aliases",
          "required": false
        },
        "error": {
          "type": "email.domain.MigrationCheckResultStruct[]",
          "fullType": "email.domain.MigrationCheckResultStruct[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "List of errors",
          "required": false
        },
        "filter": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "List of filters",
          "required": false
        },
        "forward": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "List of forwards",
          "required": false
        },
        "warning": {
          "type": "email.domain.MigrationCheckResultStruct[]",
          "fullType": "email.domain.MigrationCheckResultStruct[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "List of warnings",
          "required": false
        }
      }
    },
    "email.domain.MigrationService": {
      "id": "MigrationService",
      "namespace": "email.domain",
      "description": "Migration service",
      "properties": {
        "contactAdmin": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Admin contact of service",
          "required": true
        },
        "contactBilling": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Billing contact of service",
          "required": true
        },
        "contactTech": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Tech contact of service",
          "required": true
        },
        "creation": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of service",
          "required": true
        },
        "destinationServiceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service name allowed as migration destination",
          "required": true
        },
        "expiration": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": true,
          "description": "Expiration date of service",
          "required": true
        },
        "type": {
          "type": "email.domain.MigrationServiceType",
          "fullType": "email.domain.MigrationServiceType",
          "canBeNull": false,
          "readOnly": true,
          "description": "Offer type of service",
          "required": true
        }
      }
    },
    "email.domain.MigrationServiceType": {
      "id": "MigrationServiceType",
      "namespace": "email.domain",
      "description": "Types of migration service",
      "enum": [
        "EMAIL PRO",
        "HOSTED EXCHANGE",
        "PRIVATE EXCHANGE",
        "PROVIDER EXCHANGE"
      ],
      "enumType": "string"
    },
    "email.domain.Moderator": {
      "id": "Moderator",
      "namespace": "email.domain",
      "description": "Moderators List",
      "properties": {
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "mailinglist": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "email.domain.RedirectionGlobal": {
      "id": "RedirectionGlobal",
      "namespace": "email.domain",
      "description": "Global Redirection",
      "properties": {
        "from": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "to": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "email.domain.Responder": {
      "id": "Responder",
      "namespace": "email.domain",
      "description": "Responder",
      "properties": {
        "account": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of account",
          "required": true
        },
        "content": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Content of responder",
          "required": true
        },
        "copy": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If false, emails will be dropped. If true and copyTo field is empty, emails will be delivered to your mailbox. If true and copyTo is set with an address, emails will be delivered to this address",
          "required": true
        },
        "copyTo": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Account where copy emails",
          "required": false
        },
        "from": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Date of start responder",
          "required": false
        },
        "to": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Date of end responder",
          "required": false
        }
      }
    },
    "email.domain.ResponderAccount": {
      "id": "ResponderAccount",
      "namespace": "email.domain",
      "description": "Responder of account",
      "properties": {
        "account": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of account",
          "required": true
        },
        "content": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Content of responder",
          "required": true
        },
        "copy": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If true, emails will be copy to emailToCopy address",
          "required": true
        },
        "copyTo": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Account where copy emails",
          "required": false
        },
        "from": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Date of start responder",
          "required": false
        },
        "to": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Date of end responder",
          "required": false
        }
      }
    },
    "email.domain.Rule": {
      "id": "Rule",
      "namespace": "email.domain",
      "description": "Rule List",
      "properties": {
        "header": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Header to be filtered",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "operand": {
          "type": "domain.DomainFilterOperandEnum",
          "fullType": "domain.DomainFilterOperandEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Rule of filter",
          "required": true
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Rule parameter of filter",
          "required": true
        }
      }
    },
    "email.domain.Subscriber": {
      "id": "Subscriber",
      "namespace": "email.domain",
      "description": "Subscribers List",
      "properties": {
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "mailinglist": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "email.domain.TaskFilter": {
      "id": "TaskFilter",
      "namespace": "email.domain",
      "description": "Task filter List",
      "properties": {
        "account": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account name of task",
          "required": true
        },
        "action": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Action of task",
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain name of task",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of task",
          "required": true
        },
        "timestamp": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of task",
          "required": true
        }
      }
    },
    "email.domain.TaskMl": {
      "id": "TaskMl",
      "namespace": "email.domain",
      "description": "Task Mailing List",
      "properties": {
        "account": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "action": {
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
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "language": {
          "type": "domain.DomainMlLanguageEnum",
          "fullType": "domain.DomainMlLanguageEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "email.domain.TaskPop": {
      "id": "TaskPop",
      "namespace": "email.domain",
      "description": "Task Pop List",
      "properties": {
        "action": {
          "type": "domain.DomainPopActionEnum",
          "fullType": "domain.DomainPopActionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Action of task",
          "required": true
        },
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of task",
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain name of task",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of task",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account name of task",
          "required": true
        }
      }
    },
    "email.domain.TaskSpecialAccount": {
      "id": "TaskSpecialAccount",
      "namespace": "email.domain",
      "description": "Task special account List",
      "properties": {
        "account": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account name of task",
          "required": true
        },
        "action": {
          "type": "domain.DomainSpecialAccountActionEnum",
          "fullType": "domain.DomainSpecialAccountActionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Action of task",
          "required": true
        },
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of task",
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain name of task",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of task",
          "required": true
        },
        "type": {
          "type": "domain.DomainSpecialAccountTypeEnum",
          "fullType": "domain.DomainSpecialAccountTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type of action filter",
          "required": true
        }
      }
    },
    "service.RenewType": {
      "id": "RenewType",
      "namespace": "service",
      "description": "Map a possible renew for a specific service",
      "properties": {
        "automatic": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "The service is automatically renewed",
          "required": true
        },
        "deleteAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "The service will be deleted at expiration",
          "required": true
        },
        "forced": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "The service forced to be renewed",
          "required": true
        },
        "manualPayment": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "The service needs to be manually renewed and paid",
          "required": false
        },
        "period": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "period of renew in month",
          "required": false
        }
      }
    },
    "service.RenewalTypeEnum": {
      "id": "RenewalTypeEnum",
      "namespace": "service",
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
      "enumType": "string"
    },
    "service.StateEnum": {
      "id": "StateEnum",
      "namespace": "service",
      "enum": [
        "expired",
        "inCreation",
        "ok",
        "pendingDebt",
        "unPaid"
      ],
      "enumType": "string"
    },
    "service.TerminationReasonEnum": {
      "id": "TerminationReasonEnum",
      "namespace": "service",
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
      "enumType": "string"
    },
    "services.Service": {
      "id": "Service",
      "namespace": "services",
      "description": "Details about a Service",
      "properties": {
        "canDeleteAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates that the service can be set up to be deleted at expiration",
          "required": true
        },
        "contactAdmin": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "contactBilling": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "contactTech": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "creation": {
          "type": "date",
          "fullType": "date",
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
        "engagedUpTo": {
          "type": "date",
          "fullType": "date",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "expiration": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "possibleRenewPeriod": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "All the possible renew period of your service in month",
          "required": false
        },
        "renew": {
          "type": "service.RenewType",
          "fullType": "service.RenewType",
          "canBeNull": true,
          "readOnly": false,
          "description": "Way of handling the renew",
          "required": false
        },
        "renewalType": {
          "type": "service.RenewalTypeEnum",
          "fullType": "service.RenewalTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "serviceId": {
          "type": "coreTypes.ServiceId:long",
          "fullType": "coreTypes.ServiceId:long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "service.StateEnum",
          "fullType": "service.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "zone.NamedResolutionFieldTypeEnum": {
      "id": "NamedResolutionFieldTypeEnum",
      "namespace": "zone",
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
      "enumType": "string"
    }
  }
}