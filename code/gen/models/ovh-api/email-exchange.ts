import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/email/exchange",
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
      "description": "Operations about the MSSERVICES service"
    },
    {
      "path": "/email/exchange/{organizationName}/service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the EXCHANGE service"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.ExchangeService",
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
              "dataType": "email.exchange.ExchangeService",
              "paramType": "body",
              "fullType": "email.exchange.ExchangeService",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Exchange service"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "accountLicense",
              "dataType": "email.exchange.OvhLicenceEnum",
              "paramType": "query",
              "fullType": "email.exchange.OvhLicenceEnum",
              "required": false,
              "description": "Filter the value of accountLicense property (=)"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of primaryEmailAddress property (like)"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of id property (like)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Accounts associated to this exchange service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "login",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Account login"
            },
            {
              "name": "litigation",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Litigation status"
            },
            {
              "name": "license",
              "dataType": "email.exchange.OvhLicenceEnum",
              "paramType": "body",
              "fullType": "email.exchange.OvhLicenceEnum",
              "required": true,
              "description": "Exchange license"
            },
            {
              "name": "initials",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Account initials"
            },
            {
              "name": "outlookLicense",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Buy outlook license"
            },
            {
              "name": "mailingFilter",
              "dataType": "email.exchange.MailingFilterEnum[]",
              "paramType": "body",
              "fullType": "email.exchange.MailingFilterEnum[]",
              "required": false,
              "description": "Enable mailing filtrering"
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
              "name": "company",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company name"
            },
            {
              "name": "lastName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Account last name"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Email domain"
            },
            {
              "name": "litigationPeriod",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Litigation length in days, 0 means unlimited"
            },
            {
              "name": "spamAndVirusConfiguration",
              "dataType": "email.exchange.spamAndVirusConfiguration",
              "paramType": "body",
              "fullType": "email.exchange.spamAndVirusConfiguration",
              "required": false,
              "description": "Antispam and Antivirus configuration"
            },
            {
              "name": "hiddenFromGAL",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Hide the account in Global Address List"
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Account display name"
            },
            {
              "name": "SAMAccountName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "SAM account name (exchange 2010 login)"
            },
            {
              "name": "firstName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Account first name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Create new mailbox in exchange server"
        }
      ],
      "description": "List the email.exchange.Account objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Delete existing mailbox in exchange server"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "email.exchange.Account",
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
              "dataType": "email.exchange.Account",
              "paramType": "body",
              "fullType": "email.exchange.Account",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Exchange mailbox"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Aliases associated to this mailbox"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "alias",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Alias"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Create new alias"
        }
      ],
      "description": "List the email.exchange.exchangeAccountAlias objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "alias",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Alias"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Delete existing alias"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            },
            {
              "name": "alias",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Alias"
            }
          ],
          "responseType": "email.exchange.exchangeAccountAlias",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Aliases on this mailbox"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Delete existing archive mailbox"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "email.exchange.exchangeAccountArchive",
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
              "name": "quota",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Archive mailbox quota (if not provided mailbox quota will be taken)"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Create new archive mailbox"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "email.exchange.exchangeAccountArchive",
              "paramType": "body",
              "fullType": "email.exchange.exchangeAccountArchive",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Exchange Account Archive"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/changePassword",
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
              "description": "new password"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Change mailbox password"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            }
          ],
          "responseType": "email.exchange.exchangeAccountDiagnosis",
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
              "name": "password",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Account password"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Create new diagnosis request"
        }
      ],
      "description": "Exchange Account Diagnosis"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Remove request of PST file"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "email.exchange.Export",
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
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Request PST file for the account"
        }
      ],
      "description": "Export PST file request"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "email.exchange.ExportUrl",
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
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Generate temporary url to PST file"
        }
      ],
      "description": "Export PST file url"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Full access granted users for this mailbox"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "User to give full access"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Allow full access to a user"
        }
      ],
      "description": "List the email.exchange.exchangeAccountFullAccess objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Revoke full access"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            }
          ],
          "responseType": "email.exchange.exchangeAccountFullAccess",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Users having full access on this mailbox"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.OutlookUrl",
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
              "name": "language",
              "dataType": "email.exchange.LanguageEnum",
              "paramType": "body",
              "fullType": "email.exchange.LanguageEnum",
              "required": true,
              "description": "Language of outlook"
            },
            {
              "name": "version",
              "dataType": "email.exchange.OutlookVersionEnum",
              "paramType": "body",
              "fullType": "email.exchange.OutlookVersionEnum",
              "required": true,
              "description": "Version of outlook"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Generate outlook url"
        }
      ],
      "description": "Outlook url"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "email.exchange.exchangeAccountProtocol",
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
              "dataType": "email.exchange.exchangeAccountProtocol",
              "paramType": "body",
              "fullType": "email.exchange.exchangeAccountProtocol",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Get protocol status on that mailbox"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Send as granted users for this mailbox"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "allowAccountId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Account id to allow to send mails from this mailbox"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Allow another user to send mails from this mailbox"
        }
      ],
      "description": "List the email.exchange.exchangeAccountSendAs objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Delete allowed user for sendAs"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            }
          ],
          "responseType": "email.exchange.exchangeAccountSendAs",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Users authorized to send mails from this mailbox"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "SendOnBehalfTo granted users for this mailbox"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "allowAccountId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Account id to allow to send On Behalf To mails from this mailbox"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Allow another user to Send On Behalf To mails from this mailbox"
        }
      ],
      "description": "List the email.exchange.exchangeAccountSendOnBehalfTo objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Delete allowed user for SendOnBehalfTo"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            }
          ],
          "responseType": "email.exchange.exchangeAccountSendOnBehalfTo",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Get users authorized to Send On Behalf To mails from this mailbox"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Pending task for this mailbox"
        }
      ],
      "description": "List the email.exchange.Task objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks/{id}",
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
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Exchange task details"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/terminate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Primary email address"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Terminate account at expiration date"
        }
      ],
      "description": "terminate operations"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/activateSharepoint",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "subDomain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "sub domain that will be used for Your sharepoint infra (You will not be able to change it!)"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "primary email address of a user that will be admin of sharepoint (You will not be able to change it!)"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Activate Sharepoint infra connected to this exchange service"
        }
      ],
      "description": "activateSharepoint operations"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/changeHostname",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "dcvEmail",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Email address used for Domain Control Validation, needed for ownership validation"
            },
            {
              "name": "hostname",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "FQDN of SSL hostname"
            },
            {
              "name": "useDnsAssist",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Set required Exchange DNS fields automatically if the hostname domain is managed by OVH"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Setting SSL hostname for Exchange private offer"
        }
      ],
      "description": "changeHostname operations"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/dcvEmails",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get DCV emails if your ssl will expire in next 30 days"
        }
      ],
      "description": "dcvEmails operations"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/device",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "IMEI",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of IMEI property (like)"
            },
            {
              "name": "deviceState",
              "dataType": "email.exchange.DeviceActiveSyncStateEnum",
              "paramType": "query",
              "fullType": "email.exchange.DeviceActiveSyncStateEnum",
              "required": false,
              "description": "Filter the value of deviceState property (=)"
            },
            {
              "name": "identity",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of identity property (like)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of your ActiveSync devices registered on this Exchange service"
        }
      ],
      "description": "List the email.exchange.exchangeServiceDevice objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "identity",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Identity"
            }
          ],
          "responseType": "email.exchange.exchangeServiceDevice",
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
              "dataType": "email.exchange.exchangeServiceDevice",
              "paramType": "body",
              "fullType": "email.exchange.exchangeServiceDevice",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "identity",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Identity"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Get the list of your ActiveSync devices registered on this Exchange service"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}/clearDevice",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "identity",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Identity"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Executes a factory reset on the device. THIS OPERATION CANNOT BE REVERSED, ALL DATA ON THE DEVICE WILL BE LOST."
        }
      ],
      "description": "clearDevice operations"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/domain",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "main",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Filter the value of main property (like)"
            },
            {
              "name": "state",
              "dataType": "email.exchange.ObjectStateEnum",
              "paramType": "query",
              "fullType": "email.exchange.ObjectStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Domains associated to this service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "organization2010",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "If specified, indicates which organization this newly created domain will be part of (Exchange 2010 only)"
            },
            {
              "name": "type",
              "dataType": "email.exchange.DomainTypeEnum",
              "paramType": "body",
              "fullType": "email.exchange.DomainTypeEnum",
              "required": true,
              "description": "Type of domain that You want to install"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Domain to install on server"
            },
            {
              "name": "configureMx",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "If you host domain in OVH we can configure mx record automatically"
            },
            {
              "name": "mxRelay",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "If specified, emails to not existing address will be redirected to that domain"
            },
            {
              "name": "configureAutodiscover",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "If you host domain in OVH we can configure autodiscover record automatically"
            },
            {
              "name": "main",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "This newly created domain will be an organization (Exchange 2010 only)"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Create new domain in exchange services"
        }
      ],
      "description": "List the email.exchange.Domain objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "domainName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Delete existing domain in exchange services"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domainName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Domain",
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
              "dataType": "email.exchange.Domain",
              "paramType": "body",
              "fullType": "email.exchange.Domain",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "domainName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Exchange domain"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "domainName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Delete existing organization disclaimer"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "domainName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            }
          ],
          "responseType": "email.exchange.disclaimer",
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
              "name": "content",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "Signature, added at the bottom of your organization emails"
            },
            {
              "name": "outsideOnly",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Activate the disclaimer only for external emails"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "domainName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Create organization disclaimer of each email"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "email.exchange.disclaimer",
              "paramType": "body",
              "fullType": "email.exchange.disclaimer",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "domainName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Exchange organization disclaimer"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimerAttribute",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "domainName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            }
          ],
          "responseType": "email.exchange.DisclaimerAttributeEnum[]",
          "noAuthentication": false,
          "description": "Get diclaimer attributes to substitute with Active Directory properties"
        }
      ],
      "description": "disclaimerAttribute operations"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/externalContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "lastName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of lastName property (like)"
            },
            {
              "name": "externalEmailAddress",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of externalEmailAddress property (like)"
            },
            {
              "name": "firstName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of firstName property (like)"
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of displayName property (like)"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of id property (like)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "External contacts for this service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "externalEmailAddress",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Contact email address"
            },
            {
              "name": "lastName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Contact last name"
            },
            {
              "name": "initials",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Contact initials"
            },
            {
              "name": "organization2010",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Indicates to which organization this newly created external contact will belongs (Exchange 2010 only)"
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Contact display name"
            },
            {
              "name": "firstName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Contact first name"
            },
            {
              "name": "hiddenFromGAL",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Hide the contact in Global Address List"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "create new external contact"
        }
      ],
      "description": "List the email.exchange.exchangeExternalContact objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "externalEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "External email address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "delete external contact"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "externalEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "External email address"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.exchangeExternalContact",
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
              "dataType": "email.exchange.exchangeExternalContact",
              "paramType": "body",
              "fullType": "email.exchange.exchangeExternalContact",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "externalEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "External email address"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "External contact for this exchange service"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/license",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "toDate",
              "dataType": "date",
              "paramType": "query",
              "fullType": "date",
              "required": false,
              "description": "Get active licenses until date"
            },
            {
              "name": "fromDate",
              "dataType": "date",
              "paramType": "query",
              "fullType": "date",
              "required": false,
              "description": "Get active licenses since date "
            },
            {
              "name": "license",
              "dataType": "email.exchange.OvhLicenceEnum",
              "paramType": "query",
              "fullType": "email.exchange.OvhLicenceEnum",
              "required": false,
              "description": "License type"
            }
          ],
          "responseType": "email.exchange.DailyLicense[]",
          "noAuthentication": false,
          "description": "Get active licenses for specific period of time"
        }
      ],
      "description": "license operations"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of mailingListAddress property (like)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Mailing list for this service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "maxReceiveSize",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Maximum receive email size in MB"
            },
            {
              "name": "joinRestriction",
              "dataType": "email.exchange.MailingListJoinRestrictionEnum",
              "paramType": "body",
              "fullType": "email.exchange.MailingListJoinRestrictionEnum",
              "required": true,
              "description": "Join restriction policy"
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Name displayed in Global Access List"
            },
            {
              "name": "departRestriction",
              "dataType": "email.exchange.MailingListDepartRestrictionEnum",
              "paramType": "body",
              "fullType": "email.exchange.MailingListDepartRestrictionEnum",
              "required": true,
              "description": "Depart restriction policy"
            },
            {
              "name": "maxSendSize",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Maximum send email size in MB"
            },
            {
              "name": "hiddenFromGAL",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "If true mailing list is hiddend in Global Address List"
            },
            {
              "name": "senderAuthentification",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "If true sender has to authenticate"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The mailing list address"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Add mailing list"
        }
      ],
      "description": "List the email.exchange.mailingList objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Delete mailing list"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            }
          ],
          "responseType": "email.exchange.mailingList",
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
              "dataType": "email.exchange.mailingList",
              "paramType": "body",
              "fullType": "email.exchange.mailingList",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Mailing list"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Aliases associated to this mailingList"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "alias",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Alias"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Create new alias"
        }
      ],
      "description": "List the email.exchange.exchangeMailingListAlias objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            },
            {
              "name": "alias",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Alias"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Delete existing alias"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            },
            {
              "name": "alias",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Alias"
            }
          ],
          "responseType": "email.exchange.exchangeMailingListAlias",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Get aliases on this mailingList"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Mailing list account manager"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "managerAccountId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Manager account id"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Add new mailing list manager"
        }
      ],
      "description": "List the email.exchange.exchangeDistributionGroupManager objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            },
            {
              "name": "managerAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Manager account ID"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Delete mailing list manager"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            },
            {
              "name": "managerAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Manager account ID"
            }
          ],
          "responseType": "email.exchange.exchangeDistributionGroupManager",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Mailing list managers"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Mailing list account member"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "memberAccountId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Member account id"
            },
            {
              "name": "memberContactId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Member contact id"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Add new mailing list member"
        }
      ],
      "description": "List the email.exchange.exchangeDistributionGroupMember objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            },
            {
              "name": "memberAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Member account ID"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Delete mailing list member"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            },
            {
              "name": "memberAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Member account ID"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            }
          ],
          "responseType": "email.exchange.exchangeDistributionGroupMember",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Mailing list members"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Mailing list contact member"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "memberAccountId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Member account id"
            },
            {
              "name": "memberContactId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Member contact id"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Add new mailing list member"
        }
      ],
      "description": "List the email.exchange.exchangeDistributionGroupMember objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            },
            {
              "name": "memberContactId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Member contact ID"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Delete mailing list member"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            },
            {
              "name": "memberContactId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Member contact ID"
            }
          ],
          "responseType": "email.exchange.exchangeDistributionGroupMember",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Mailing list members"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "sendAs"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "allowAccountId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Account id to allow to send as mails from this mailing list"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Allow another user to Send aso mails from this mailing list"
        }
      ],
      "description": "List the email.exchange.exchangeDistributionGroupSendAs objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Delete allowed user for SendAs"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            }
          ],
          "responseType": "email.exchange.exchangeDistributionGroupSendAs",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Get users authorized to Send On Behalf To mails from this mailbox"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "sendOnBehalfTo"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "allowAccountId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Account id to allow to send as mails from this mailing list"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Allow another user to Send aso mails from this mailing list"
        }
      ],
      "description": "List the email.exchange.exchangeDistributionGroupSendOnBehalfTo objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Delete allowed user for SendOnBehalfTo"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "mailingListAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mailing list address"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            }
          ],
          "responseType": "email.exchange.exchangeDistributionGroupSendOnBehalfTo",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Get users authorized to Send On Behalf To mails from this mailing list"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/outlookAvailability",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "outlookLanguage",
              "dataType": "email.exchange.LanguageEnum",
              "paramType": "query",
              "fullType": "email.exchange.LanguageEnum",
              "required": false,
              "description": "Language version of outlook"
            },
            {
              "name": "outlookVersion",
              "dataType": "email.exchange.OutlookVersionEnum",
              "paramType": "query",
              "fullType": "email.exchange.OutlookVersionEnum",
              "required": false,
              "description": "OS version of outlook"
            }
          ],
          "responseType": "email.exchange.OutlookVersions[]",
          "noAuthentication": false,
          "description": "Show available outlooks"
        }
      ],
      "description": "outlookAvailability operations"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/protocol",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.exchangeServiceProtocol",
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
              "dataType": "email.exchange.exchangeServiceProtocol",
              "paramType": "body",
              "fullType": "email.exchange.exchangeServiceProtocol",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Protocol access policy for this Exchange service"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Exchange account id subscribed to ActiveSync quarantine notifications"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "notifiedAccountId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Exchange Account Id"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Subscribe new address to ActiveSync quarantine notifications"
        }
      ],
      "description": "List the email.exchange.exchangeServiceActiveSyncNotification objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "notifiedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Notified account ID"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Unubscribe address from ActiveSync quarantine notifications"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "notifiedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Notified account ID"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            }
          ],
          "responseType": "email.exchange.exchangeServiceActiveSyncNotification",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Get email addresses subscribed to ActiveSync quarantine notifications"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/publicFolder",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "path",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of path property (like)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Public folders associated to this service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "type",
              "dataType": "email.exchange.PublicFolderTypeEnum",
              "paramType": "body",
              "fullType": "email.exchange.PublicFolderTypeEnum",
              "required": true,
              "description": "Type for public folder"
            },
            {
              "name": "path",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Path for public folder"
            },
            {
              "name": "anonymousPermission",
              "dataType": "email.exchange.PublicFolderRightTypeEnum",
              "paramType": "body",
              "fullType": "email.exchange.PublicFolderRightTypeEnum",
              "required": false,
              "description": "Access right for the guest users"
            },
            {
              "name": "defaultPermission",
              "dataType": "email.exchange.PublicFolderRightTypeEnum",
              "paramType": "body",
              "fullType": "email.exchange.PublicFolderRightTypeEnum",
              "required": false,
              "description": "Default access right"
            },
            {
              "name": "quota",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quota for public folder in MB"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Create organization public folder"
        }
      ],
      "description": "List the email.exchange.publicFolder objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "path",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Path"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Delete existing organization public folder"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "path",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Path"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            }
          ],
          "responseType": "email.exchange.publicFolder",
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
              "dataType": "email.exchange.publicFolder",
              "paramType": "body",
              "fullType": "email.exchange.publicFolder",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "path",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Path"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Exchange organization public folder"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "path",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Path"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Public folder permission"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Account id to have access to public folder"
            },
            {
              "name": "accessRights",
              "dataType": "email.exchange.PublicFolderRightTypeEnum",
              "paramType": "body",
              "fullType": "email.exchange.PublicFolderRightTypeEnum",
              "required": true,
              "description": "Access rights to be set for the account"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "path",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Path"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Create public folder permission"
        }
      ],
      "description": "List the email.exchange.exchangePublicFolderPermission objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "path",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Path"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Delete existing permission from public folder"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "path",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Path"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            }
          ],
          "responseType": "email.exchange.exchangePublicFolderPermission",
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
              "dataType": "email.exchange.exchangePublicFolderPermission",
              "paramType": "body",
              "fullType": "email.exchange.exchangePublicFolderPermission",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "path",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Path"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Exchange organization public folder permission"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/publicFolderQuota",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.PublicFolderQuota",
          "noAuthentication": false,
          "description": "Get public folder quota usage in total available space"
        }
      ],
      "description": "publicFolderQuota operations"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/renewSSL",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "dcv",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "DCV email require for order ssl varification process"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Renew SSL if it will expire in next 30 days"
        }
      ],
      "description": "renewSSL operations"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "resourceEmailAddress",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of resourceEmailAddress property (like)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Resource account associated to this service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "bookingWindow",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "maximum number of days in advance that the resource can be reserved"
            },
            {
              "name": "addOrganizerToSubject",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "meeting organizer's name is used as the subject of the meeting request"
            },
            {
              "name": "allowConflict",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "resource can be scheduled by more than one person during the same time period"
            },
            {
              "name": "deleteComments",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "remove any text in the message body of incoming meeting requests on resourceAccount"
            },
            {
              "name": "deleteSubject",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "remove email subject of incoming meeting requests on resourceAccount"
            },
            {
              "name": "showMeetingDetails",
              "dataType": "email.exchange.ShowMeetingDetailsEnum",
              "paramType": "body",
              "fullType": "email.exchange.ShowMeetingDetailsEnum",
              "required": false,
              "description": "granted right on a calendar of that resourceAccount"
            },
            {
              "name": "type",
              "dataType": "email.exchange.ResourceTypeEnum",
              "paramType": "body",
              "fullType": "email.exchange.ResourceTypeEnum",
              "required": true,
              "description": "type of your reservation"
            },
            {
              "name": "maximumDuration",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "maximum duration in minutes for meeting requests"
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "resource account display name"
            },
            {
              "name": "location",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "resource location"
            },
            {
              "name": "resourceEmailAddress",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "resource address"
            },
            {
              "name": "capacity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "number of the same equipment or capacity of a room"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "create new resource account in exchange server"
        }
      ],
      "description": "List the email.exchange.resourceAccount objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "resourceEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Resource email address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "delete existing resource account in exchange server"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "resourceEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Resource email address"
            }
          ],
          "responseType": "email.exchange.resourceAccount",
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
              "dataType": "email.exchange.resourceAccount",
              "paramType": "body",
              "fullType": "email.exchange.resourceAccount",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "resourceEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Resource email address"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Exchange resource account"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "resourceEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Resource email address"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Resource account manager"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "delegate's account id"
            },
            {
              "name": "resourceEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Resource email address"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "add new resource account delegate in exchange server"
        }
      ],
      "description": "List the email.exchange.exchangeResourceAccountDelegate objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "resourceEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Resource email address"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "delete existing resource account delegate in exchange server"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "resourceEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Resource email address"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            }
          ],
          "responseType": "email.exchange.exchangeResourceAccountDelegate",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Resource accounts delegates"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Server",
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
              "dataType": "email.exchange.Server",
              "paramType": "body",
              "fullType": "email.exchange.Server",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Exchange server"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/serviceInfos",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
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
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
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
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "sharedEmailAddress",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of sharedEmailAddress property (like)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Shared accounts associated to this exchange service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "hiddenFromGAL",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Hide the shared account in Global Address List"
            },
            {
              "name": "sharedEmailAddress",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Shared account email address"
            },
            {
              "name": "firstName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Shared account first name"
            },
            {
              "name": "initials",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Shared account initials"
            },
            {
              "name": "lastName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Shared account last name"
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Shared account display name"
            },
            {
              "name": "quota",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Shared account maximum size"
            },
            {
              "name": "mailingFilter",
              "dataType": "email.exchange.MailingFilterEnum[]",
              "paramType": "body",
              "fullType": "email.exchange.MailingFilterEnum[]",
              "required": false,
              "description": "Enable mailing filtrering"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Create new shared mailbox in exchange server"
        }
      ],
      "description": "List the email.exchange.sharedAccount objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "sharedEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Shared email address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Delete existing shared mailbox in exchange server"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "sharedEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Shared email address"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.sharedAccount",
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
              "dataType": "email.exchange.sharedAccount",
              "paramType": "body",
              "fullType": "email.exchange.sharedAccount",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "sharedEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Shared email address"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Exchange shared mailbox"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "sharedEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Shared email address"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Full access granted users for this shared mailbox"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "User to give full access"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "sharedEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Shared email address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Allow full access to a user"
        }
      ],
      "description": "List the email.exchange.exchangeSharedAccountFullAccess objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "sharedEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Shared email address"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Revoke full access"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "sharedEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Shared email address"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            }
          ],
          "responseType": "email.exchange.exchangeSharedAccountFullAccess",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Users having full access on this shared mailbox"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "sharedEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Shared email address"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Send as granted users for this shared mailbox"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "allowAccountId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Account id to allow to send mails from this shared mailbox"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "sharedEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Shared email address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Allow another user to send mails from this shared mailbox"
        }
      ],
      "description": "List the email.exchange.exchangeSharedAccountSendAs objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "sharedEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Shared email address"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Delete allowed user for sendAs"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "sharedEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Shared email address"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            }
          ],
          "responseType": "email.exchange.exchangeSharedAccountSendAs",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Users authorized to send mails from this shared mailbox"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "sharedEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Shared email address"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "SendOnBehalfTo granted users for this shared mailbox"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "allowAccountId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Account id to allow to send On Behalf To mails from this shared mailbox"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "sharedEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Shared email address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Allow another user to Send On Behalf To mails from this shared mailbox"
        }
      ],
      "description": "List the email.exchange.exchangeSharedAccountSendOnBehalfTo objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "sharedEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Shared email address"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Delete allowed user for SendOnBehalfTo"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "sharedEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Shared email address"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            }
          ],
          "responseType": "email.exchange.exchangeSharedAccountSendOnBehalfTo",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Get users authorized to Send On Behalf To mails from this shared mailbox"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "sharedEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Shared email address"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Pending task for this mailbox"
        }
      ],
      "description": "List the email.exchange.Task objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks/{id}",
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
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "sharedEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Shared email address"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Exchange task details"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccountQuota",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "email.exchange.SharedAccountQuota",
          "noAuthentication": false,
          "description": "Get shared account quota usage in total available space"
        }
      ],
      "description": "sharedAccountQuota operations"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/task",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Pending actions"
        }
      ],
      "description": "List the email.exchange.Task objects"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/task/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
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
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Exchange task details"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/updateDeviceList",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            }
          ],
          "responseType": "email.exchange.Task",
          "noAuthentication": false,
          "description": "Update device list"
        }
      ],
      "description": "updateDeviceList operations"
    },
    {
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/updateFlagsOnAllAccounts",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Update spam and virus flags on all active accounts"
        }
      ],
      "description": "updateFlagsOnAllAccounts operations"
    }
  ],
  "resourcePath": "/email/exchange",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "email.exchange.Account": {
      "id": "Account",
      "namespace": "email.exchange",
      "description": "Exchange mailbox",
      "properties": {
        "SAMAccountName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "SAM account name",
          "required": false
        },
        "accountLicense": {
          "type": "email.exchange.OvhLicenceEnum",
          "fullType": "email.exchange.OvhLicenceEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Exchange account type",
          "required": true
        },
        "company": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Company name",
          "required": false
        },
        "configured": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if the account is configured",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Creation date",
          "required": false
        },
        "currentUsage": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Mailbox usage",
          "required": false
        },
        "deleteAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "delete at expiration",
          "required": false
        },
        "deleteOutlookAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "delete outlook at expiration",
          "required": false
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Account display name",
          "required": false
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Email domain",
          "required": true
        },
        "exchangeGuid": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "exchangeGuid for manual configuration",
          "required": false
        },
        "expirationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "expiration date",
          "required": false
        },
        "expirationOutlookDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "expiration date",
          "required": false
        },
        "firstName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Account first name",
          "required": false
        },
        "guid": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "GUID for user in active directory",
          "required": false
        },
        "hiddenFromGAL": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Hide account in Global Address List",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account id",
          "required": true
        },
        "initial": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Account initials",
          "required": false
        },
        "lastLogoffDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last logoff",
          "required": false
        },
        "lastLogonDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last logon",
          "required": false
        },
        "lastName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Account last name",
          "required": false
        },
        "lastUpdateDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last update",
          "required": false
        },
        "litigation": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Litigation hold feature enabled on this mailbox",
          "required": true
        },
        "litigationPeriod": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Litigation hold period in days (0 means unlimited). This setting covers all items in the mailbox.",
          "required": false
        },
        "login": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Account login",
          "required": true
        },
        "mailingFilter": {
          "type": "email.exchange.MailingFilterEnum[]",
          "fullType": "email.exchange.MailingFilterEnum[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Enable or disable anti-virus and anti-spam",
          "required": false
        },
        "numberOfAliases": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Count the number of related aliases attached to this account",
          "required": true
        },
        "outlookLicense": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Outlook licence",
          "required": true
        },
        "owaLimited": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "OWA policy restriction is applied",
          "required": true
        },
        "passwordLastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Time of account's password last update",
          "required": false
        },
        "primaryEmailAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Default email for this mailbox",
          "required": true
        },
        "quota": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Account maximum size",
          "required": true
        },
        "renewOutlookPeriod": {
          "type": "email.exchange.renewPeriodEnum",
          "fullType": "email.exchange.renewPeriodEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "change the renew period for outlook",
          "required": false
        },
        "renewPeriod": {
          "type": "email.exchange.renewPeriodEnum",
          "fullType": "email.exchange.renewPeriodEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "change the renew period",
          "required": false
        },
        "spamAndVirusConfiguration": {
          "type": "email.exchange.spamAndVirusConfiguration",
          "fullType": "email.exchange.spamAndVirusConfiguration",
          "canBeNull": false,
          "readOnly": false,
          "description": "Spam and Antivirus configuration",
          "required": true
        },
        "spamDetected": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account was sending spam",
          "required": true
        },
        "spamTicketNumber": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Ticket number of spam detection",
          "required": false
        },
        "state": {
          "type": "email.exchange.ObjectStateEnum",
          "fullType": "email.exchange.ObjectStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Pending task for this account",
          "required": false
        }
      }
    },
    "email.exchange.AccountLicense": {
      "id": "AccountLicense",
      "namespace": "email.exchange",
      "description": "Exchange account license",
      "properties": {
        "license": {
          "type": "email.exchange.OvhLicenceEnum",
          "fullType": "email.exchange.OvhLicenceEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "licenseQuantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "email.exchange.ActiveSyncPolicyEnum": {
      "id": "ActiveSyncPolicyEnum",
      "namespace": "email.exchange",
      "description": "Activesync action",
      "enum": [
        "allow",
        "block",
        "quarantine"
      ],
      "enumType": "string"
    },
    "email.exchange.DailyLicense": {
      "id": "DailyLicense",
      "namespace": "email.exchange",
      "description": "Exchange account license per day",
      "properties": {
        "accountLicense": {
          "type": "email.exchange.AccountLicense[]",
          "fullType": "email.exchange.AccountLicense[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "date": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "outlookQuantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "email.exchange.DeviceActiveSyncStateEnum": {
      "id": "DeviceActiveSyncStateEnum",
      "namespace": "email.exchange",
      "description": "Device ActiveSync state",
      "enum": [
        "allowed",
        "blocked",
        "deviceDiscovery",
        "quarantined"
      ],
      "enumType": "string"
    },
    "email.exchange.DisclaimerAttributeEnum": {
      "id": "DisclaimerAttributeEnum",
      "namespace": "email.exchange",
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
      "enumType": "string"
    },
    "email.exchange.Domain": {
      "id": "Domain",
      "namespace": "email.exchange",
      "description": "Exchange domain",
      "properties": {
        "cnameToCheck": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Cname that will be checked to prove the domain ownership",
          "required": false
        },
        "domainAliases": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of aliases for this domain",
          "required": true
        },
        "domainValidated": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain validation status",
          "required": true
        },
        "isAliasDomain": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicate if this domain is an alias for another domain",
          "required": true
        },
        "main": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "If true this is an organization (Exchange 2010 only)",
          "required": false
        },
        "mxIsValid": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If true your dns mx configuration is valid",
          "required": true
        },
        "mxRecord": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "Domain MX record configured in DNS",
          "required": false
        },
        "mxRelay": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "If specified, emails to not existing address will be redirected to that domain",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain name",
          "required": true
        },
        "organization2010": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "If specified, indicates to which organization this domain belongs (Exchange 2010 only)",
          "required": false
        },
        "srvIsValid": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If true your dns srv record is valid",
          "required": true
        },
        "srvRecord": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "Domain SRV record configured in DNS",
          "required": false
        },
        "state": {
          "type": "email.exchange.ObjectStateEnum",
          "fullType": "email.exchange.ObjectStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending taks id",
          "required": true
        },
        "type": {
          "type": "email.exchange.DomainTypeEnum",
          "fullType": "email.exchange.DomainTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Domain type",
          "required": true
        }
      }
    },
    "email.exchange.DomainTypeEnum": {
      "id": "DomainTypeEnum",
      "namespace": "email.exchange",
      "description": "Domain type",
      "enum": [
        "authoritative",
        "nonAuthoritative"
      ],
      "enumType": "string"
    },
    "email.exchange.ExchangeService": {
      "id": "ExchangeService",
      "namespace": "email.exchange",
      "description": "Exchange service",
      "properties": {
        "complexityEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "enable policy for strong and secure passwords",
          "required": true
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "service displayName",
          "required": false
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "hostname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "lastUpdateDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Update date",
          "required": false
        },
        "lockoutDuration": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "number of minutes account will remain locked if it occurs",
          "required": true
        },
        "lockoutObservationWindow": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "number of minutes that must elapse after a failed logon to reset lockout trigger",
          "required": true
        },
        "lockoutThreshold": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "number of attempts before account to be locked",
          "required": false
        },
        "maxPasswordAge": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "maximum number of days that account's password is valid before expiration",
          "required": false
        },
        "maxReceiveSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum message size that You can receive in MB",
          "required": true
        },
        "maxSendSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum message size that You can send in MB",
          "required": true
        },
        "minPasswordAge": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "minimum number of days before able to change account's password",
          "required": false
        },
        "minPasswordLength": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "minimum number of characters password must contain",
          "required": false
        },
        "offer": {
          "type": "email.exchange.ServiceOfferEnum",
          "fullType": "email.exchange.ServiceOfferEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "passwordHistoryCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "number of historical password that cannot be reused",
          "required": false
        },
        "spamAndVirusConfiguration": {
          "type": "email.exchange.spamAndVirusConfiguration",
          "fullType": "email.exchange.spamAndVirusConfiguration",
          "canBeNull": false,
          "readOnly": false,
          "description": "Spam and Antivirus configuration",
          "required": true
        },
        "sslExpirationDate": {
          "type": "date",
          "fullType": "date",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "state": {
          "type": "email.exchange.ServiceStateEnum",
          "fullType": "email.exchange.ServiceStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task pending id",
          "required": true
        },
        "webUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "URL for web interface",
          "required": false
        }
      }
    },
    "email.exchange.Export": {
      "id": "Export",
      "namespace": "email.exchange",
      "description": "Export PST file request",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "percentComplete": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Percentage of export PST request completion",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task pending id",
          "required": true
        }
      }
    },
    "email.exchange.ExportUrl": {
      "id": "ExportUrl",
      "namespace": "email.exchange",
      "description": "Export PST file url",
      "properties": {
        "expiration": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Url expiration date",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Export url",
          "required": true
        }
      }
    },
    "email.exchange.LanguageEnum": {
      "id": "LanguageEnum",
      "namespace": "email.exchange",
      "description": "Outlook language",
      "enum": [
        "ar",
        "bg",
        "cz",
        "da",
        "de",
        "el",
        "en",
        "es",
        "et",
        "fi",
        "fr",
        "he",
        "hi",
        "hr",
        "hu",
        "id",
        "in",
        "it",
        "ja",
        "ko",
        "kz",
        "lt",
        "lv",
        "ms",
        "nb",
        "nl",
        "pl",
        "pt",
        "pt-BR",
        "ro",
        "rs",
        "ru",
        "sk",
        "sl",
        "sv",
        "th",
        "tr",
        "uk",
        "vi",
        "zh-CN"
      ],
      "enumType": "string"
    },
    "email.exchange.MailingFilterEnum": {
      "id": "MailingFilterEnum",
      "namespace": "email.exchange",
      "description": "Mailing filter options availlable",
      "enum": [
        "vaderetro"
      ],
      "enumType": "string"
    },
    "email.exchange.MailingListDepartRestrictionEnum": {
      "id": "MailingListDepartRestrictionEnum",
      "namespace": "email.exchange",
      "description": "Depart distribution group restriction status",
      "enum": [
        "closed",
        "open"
      ],
      "enumType": "string"
    },
    "email.exchange.MailingListJoinRestrictionEnum": {
      "id": "MailingListJoinRestrictionEnum",
      "namespace": "email.exchange",
      "description": "Join distribution group restriction status",
      "enum": [
        "approvalRequired",
        "closed",
        "open"
      ],
      "enumType": "string"
    },
    "email.exchange.ObjectStateEnum": {
      "id": "ObjectStateEnum",
      "namespace": "email.exchange",
      "description": "Current object state",
      "enum": [
        "creating",
        "deleting",
        "internalMigration",
        "ok",
        "reopening",
        "suspended",
        "suspending"
      ],
      "enumType": "string"
    },
    "email.exchange.OutlookUrl": {
      "id": "OutlookUrl",
      "namespace": "email.exchange",
      "description": "Outlook url",
      "properties": {
        "expiration": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Url expiration date",
          "required": true
        },
        "serial": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Serial number",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Outlook url",
          "required": true
        }
      }
    },
    "email.exchange.OutlookVersionEnum": {
      "id": "OutlookVersionEnum",
      "namespace": "email.exchange",
      "description": "Outlook version",
      "enum": [
        "mac_x86_2011",
        "mac_x86_2016",
        "windows_x64_2013",
        "windows_x64_2016",
        "windows_x86_2013",
        "windows_x86_2016"
      ],
      "enumType": "string"
    },
    "email.exchange.OutlookVersions": {
      "id": "OutlookVersions",
      "namespace": "email.exchange",
      "description": "Availability of outlook version",
      "properties": {
        "outlookLanguage": {
          "type": "email.exchange.LanguageEnum",
          "fullType": "email.exchange.LanguageEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "outlookVersion": {
          "type": "email.exchange.OutlookVersionEnum",
          "fullType": "email.exchange.OutlookVersionEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "status": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "email.exchange.OvhLicenceEnum": {
      "id": "OvhLicenceEnum",
      "namespace": "email.exchange",
      "description": "OVH licence account",
      "enum": [
        "basic",
        "enterprise",
        "standard"
      ],
      "enumType": "string"
    },
    "email.exchange.PublicFolderQuota": {
      "id": "PublicFolderQuota",
      "namespace": "email.exchange",
      "description": "Get public folder quota usage in total available space",
      "properties": {
        "quotaLimit": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "total amount of space in MB for public folders within organization",
          "required": true
        },
        "quotaReserved": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "space in MB already reserved from the quota limit",
          "required": true
        },
        "quotaUsed": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "currently used space in MB within all public folders",
          "required": true
        }
      }
    },
    "email.exchange.PublicFolderRightTypeEnum": {
      "id": "PublicFolderRightTypeEnum",
      "namespace": "email.exchange",
      "description": "Public folder right type",
      "enum": [
        "editor",
        "none",
        "reviewer"
      ],
      "enumType": "string"
    },
    "email.exchange.PublicFolderTypeEnum": {
      "id": "PublicFolderTypeEnum",
      "namespace": "email.exchange",
      "description": "Public folder type",
      "enum": [
        "calendar",
        "contacts",
        "plain",
        "tasks"
      ],
      "enumType": "string"
    },
    "email.exchange.ResourceTypeEnum": {
      "id": "ResourceTypeEnum",
      "namespace": "email.exchange",
      "description": "Resource Type",
      "enum": [
        "equipment",
        "room"
      ],
      "enumType": "string"
    },
    "email.exchange.Server": {
      "id": "Server",
      "namespace": "email.exchange",
      "description": "Exchange server",
      "properties": {
        "commercialVersion": {
          "type": "email.exchange.exchangeCommercialVersionEnum",
          "fullType": "email.exchange.exchangeCommercialVersionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Exchange commercial version",
          "required": true
        },
        "currentDiskUsage": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current disk usage in MB",
          "required": false
        },
        "diskSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Total disk size in MB",
          "required": false
        },
        "individual2010": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If true server is 2010 individual offer",
          "required": true
        },
        "ip": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "ipV4",
          "required": true
        },
        "ipV6": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "ipV6",
          "required": false
        },
        "isAValid": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If true your dns A record is valid",
          "required": true
        },
        "isAaaaValid": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If true your dns AAAA record is valid",
          "required": true
        },
        "isPtrV6Valid": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If true your dns ptrV6 record is valid",
          "required": true
        },
        "isPtrValid": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If true your dns ptr record is valid",
          "required": true
        },
        "owaMfa": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Indicates if Multi Factor Authentication is activated on Outlook Web Access interface",
          "required": true
        },
        "state": {
          "type": "email.exchange.ServerStateEnum",
          "fullType": "email.exchange.ServerStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Server state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task pending id",
          "required": true
        },
        "version": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "ExchangeServer version",
          "required": false
        }
      }
    },
    "email.exchange.ServerStateEnum": {
      "id": "ServerStateEnum",
      "namespace": "email.exchange",
      "description": "Server State",
      "enum": [
        "configurationError",
        "configurationPending",
        "notConfigured",
        "ok"
      ],
      "enumType": "string"
    },
    "email.exchange.ServiceOfferEnum": {
      "id": "ServiceOfferEnum",
      "namespace": "email.exchange",
      "description": "Service Offer name",
      "enum": [
        "dedicated",
        "dedicatedCluster",
        "hosted",
        "provider"
      ],
      "enumType": "string"
    },
    "email.exchange.ServiceStateEnum": {
      "id": "ServiceStateEnum",
      "namespace": "email.exchange",
      "description": "Exchange Service State",
      "enum": [
        "inMaintenance",
        "ok",
        "suspended"
      ],
      "enumType": "string"
    },
    "email.exchange.SharedAccountQuota": {
      "id": "SharedAccountQuota",
      "namespace": "email.exchange",
      "description": "Get shared account quota usage in total available space",
      "properties": {
        "quotaLimit": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "total amount of space in MB for shared accounts within organization",
          "required": true
        },
        "quotaReserved": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "space in MB already reserved from the quota limit",
          "required": true
        },
        "quotaUsed": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "currently used space in KB within all shared accounts",
          "required": true
        }
      }
    },
    "email.exchange.ShowMeetingDetailsEnum": {
      "id": "ShowMeetingDetailsEnum",
      "namespace": "email.exchange",
      "description": "Level of access to calendar of Resource Mailbox",
      "enum": [
        "availabilityOnly",
        "limitedDetails",
        "reviewer"
      ],
      "enumType": "string"
    },
    "email.exchange.Task": {
      "id": "Task",
      "namespace": "email.exchange",
      "description": "Exchange task details",
      "properties": {
        "finishDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Completion date",
          "required": false
        },
        "function": {
          "type": "email.exchange.TaskFunctionEnum",
          "fullType": "email.exchange.TaskFunctionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Function name",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task id",
          "required": true
        },
        "status": {
          "type": "email.exchange.TaskStatusEnum",
          "fullType": "email.exchange.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task status",
          "required": true
        },
        "todoDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        }
      }
    },
    "email.exchange.TaskFunctionEnum": {
      "id": "TaskFunctionEnum",
      "namespace": "email.exchange",
      "description": "function enumeration for exchange task",
      "enum": [
        "activateSharepoint",
        "addAccount",
        "addAccountArchive",
        "addActiveSyncMailNotification",
        "addAlias",
        "addDistributionGroup",
        "addDistributionGroupManager",
        "addDistributionGroupMember",
        "addDistributionGroupSendAs",
        "addDistributionGroupSendOnBehalfTo",
        "addDomain",
        "addDomainDisclaimer",
        "addExchangeServiceAuthorizedIp",
        "addExportPstRequest",
        "addExternalContact",
        "addFullAccess",
        "addOutlookLicense",
        "addPublicFolder",
        "addPublicFolderPermission",
        "addResourceAccount",
        "addResourceDelegate",
        "addSendAs",
        "addSendOnBehalfTo",
        "addSharedAccount",
        "addSharedAccountFullAccess",
        "addSharedAccountSendAs",
        "addSharedAccountSendOnBehalfTo",
        "changeHostname",
        "changePassword",
        "clearDataOnDevice",
        "cloneTemplateExchangePrivate",
        "configureExchangeCustomer",
        "configureExchangeOwaMfa",
        "deleteAccount",
        "deleteAccountArchive",
        "deleteActiveSyncMailNotification",
        "deleteAlias",
        "deleteDistributionGroup",
        "deleteDistributionGroupManager",
        "deleteDistributionGroupMember",
        "deleteDistributionGroupSendAs",
        "deleteDistributionGroupSendOnBehalfTo",
        "deleteDomain",
        "deleteDomainDisclaimer",
        "deleteExchangeService",
        "deleteExchangeServiceAuthorizedIp",
        "deleteExportPstRequest",
        "deleteExternalContact",
        "deleteFullAccess",
        "deleteOutlookLicense",
        "deletePublicFolder",
        "deletePublicFolderPermission",
        "deleteResourceAccount",
        "deleteResourceDelegate",
        "deleteSendAs",
        "deleteSendOnBehalfTo",
        "deleteSharedAccount",
        "deleteSharedAccountFullAccess",
        "deleteSharedAccountSendAs",
        "deleteSharedAccountSendOnBehalfTo",
        "destroyPrivateVm",
        "diagnoseAccount",
        "expandDrive",
        "generateOutlookUrl",
        "generatePstUrl",
        "installExchange",
        "installSSL",
        "maintenance",
        "migrationAccount",
        "migrationDisclaimer",
        "migrationExternalContact",
        "migrationHistory",
        "migrationMailingList",
        "migrationResourceAccount",
        "migrationService",
        "reOpenHostedAccount",
        "reOpenOutlookLicense",
        "reOpenPrivateAccount",
        "reOpenPrivateVm",
        "setAccount",
        "setAccountArchive",
        "setAlias",
        "setDistributionGroup",
        "setDns",
        "setDomain",
        "setDomainDisclaimer",
        "setExchangeAccountProtocol",
        "setExchangeServiceDevice",
        "setExternalContact",
        "setPublicFolder",
        "setPublicFolderPermission",
        "setResourceAccount",
        "setService",
        "setSharedAccount",
        "suspendAccount",
        "suspendExchangeService",
        "suspendHostedAccount",
        "suspendOutlookLicense",
        "suspendPrivateAccount",
        "suspendPrivateVm",
        "unsuspendAccount",
        "unsuspendExchangeService",
        "unsuspendHostedAccount",
        "updateExchangeServiceDevice",
        "upgrade2016"
      ],
      "enumType": "string"
    },
    "email.exchange.TaskStatusEnum": {
      "id": "TaskStatusEnum",
      "namespace": "email.exchange",
      "description": "Exchange task status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string"
    },
    "email.exchange.activeSyncNotificationStateEnum": {
      "id": "activeSyncNotificationStateEnum",
      "namespace": "email.exchange",
      "description": "Subscription state",
      "enum": [
        "creating",
        "deleting",
        "ok"
      ],
      "enumType": "string"
    },
    "email.exchange.disclaimer": {
      "id": "disclaimer",
      "namespace": "email.exchange",
      "description": "Exchange organization disclaimer",
      "properties": {
        "content": {
          "type": "text",
          "fullType": "text",
          "canBeNull": false,
          "readOnly": false,
          "description": "Signature, added at the bottom of your organization emails",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Disclaimer name",
          "required": true
        },
        "outsideOnly": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Activate the disclaimer only for external emails",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "task pending id",
          "required": true
        }
      }
    },
    "email.exchange.exchangeAccountAlias": {
      "id": "exchangeAccountAlias",
      "namespace": "email.exchange",
      "description": "Aliases on this mailbox",
      "properties": {
        "alias": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Alias",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        }
      }
    },
    "email.exchange.exchangeAccountArchive": {
      "id": "exchangeAccountArchive",
      "namespace": "email.exchange",
      "description": "Exchange Account Archive",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "currentUsage": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Archive mailbox usage",
          "required": false
        },
        "guid": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "GUID of archive mailbox",
          "required": false
        },
        "quota": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Archive mailbox maximum size in GB",
          "required": true
        },
        "state": {
          "type": "email.exchange.ObjectStateEnum",
          "fullType": "email.exchange.ObjectStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Archive mailbox state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Pending task for this archive mailbox",
          "required": false
        }
      }
    },
    "email.exchange.exchangeAccountDiagnosis": {
      "id": "exchangeAccountDiagnosis",
      "namespace": "email.exchange",
      "description": "Exchange Account Diagnosis",
      "properties": {
        "canReceiveEmail": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Determines if ingoing message has been received",
          "required": true
        },
        "canSendEmail": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Determines if outgoing message has been delivered",
          "required": true
        },
        "connectiveOWA": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Determines if possible to authenticate with credentials",
          "required": true
        },
        "isLocked": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Determines if account is locked",
          "required": true
        },
        "isMxValid": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Determines if MX record for account's domain is properly set",
          "required": true
        },
        "isSpammer": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Determines if account is flagged as spammer",
          "required": true
        },
        "isSrvValid": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Determines if SRV (autodiscovery) record for account's domain is properly set",
          "required": true
        },
        "isSuspended": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Determines if account is suspended",
          "required": true
        },
        "lastCheck": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last performed diagnostics date",
          "required": true
        }
      }
    },
    "email.exchange.exchangeAccountFullAccess": {
      "id": "exchangeAccountFullAccess",
      "namespace": "email.exchange",
      "description": "Users having full access on this mailbox",
      "properties": {
        "allowedAccountId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account id to give full access",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        }
      }
    },
    "email.exchange.exchangeAccountProtocol": {
      "id": "exchangeAccountProtocol",
      "namespace": "email.exchange",
      "description": "Get protocol status on that mailbox",
      "properties": {
        "IMAP": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "IMAP protocol enabled on that mailbox",
          "required": true
        },
        "POP": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "POP protocol enabled on that mailbox",
          "required": true
        },
        "activeSync": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Mobile access enabled on that mailbox",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last update date",
          "required": false
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        },
        "webMail": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Web mail enabled on that mailbox",
          "required": true
        }
      }
    },
    "email.exchange.exchangeAccountSendAs": {
      "id": "exchangeAccountSendAs",
      "namespace": "email.exchange",
      "description": "Users authorized to send mails from this mailbox",
      "properties": {
        "allowedAccountId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account id to give send as",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        }
      }
    },
    "email.exchange.exchangeAccountSendOnBehalfTo": {
      "id": "exchangeAccountSendOnBehalfTo",
      "namespace": "email.exchange",
      "description": "Get users authorized to Send On Behalf To mails from this mailbox",
      "properties": {
        "allowedAccountId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account id to give send on behalf to",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        }
      }
    },
    "email.exchange.exchangeCommercialVersionEnum": {
      "id": "exchangeCommercialVersionEnum",
      "namespace": "email.exchange",
      "description": "Exchange commercial version",
      "enum": [
        "2010",
        "2013",
        "2016",
        "2019"
      ],
      "enumType": "string"
    },
    "email.exchange.exchangeDistributionGroupManager": {
      "id": "exchangeDistributionGroupManager",
      "namespace": "email.exchange",
      "description": "Mailing list managers",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "managerAccountId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Manager account id",
          "required": true
        },
        "managerEmailAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Member account primaryEmailAddress",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        }
      }
    },
    "email.exchange.exchangeDistributionGroupMember": {
      "id": "exchangeDistributionGroupMember",
      "namespace": "email.exchange",
      "description": "Mailing list members",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "memberAccountId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Member account id",
          "required": false
        },
        "memberContactId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Member account id",
          "required": false
        },
        "memberEmailAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Member account primaryEmailAddress",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        }
      }
    },
    "email.exchange.exchangeDistributionGroupSendAs": {
      "id": "exchangeDistributionGroupSendAs",
      "namespace": "email.exchange",
      "description": "Get users authorized to Send On Behalf To mails from this mailbox",
      "properties": {
        "allowedAccountId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account id to give send on behalf to",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        }
      }
    },
    "email.exchange.exchangeDistributionGroupSendOnBehalfTo": {
      "id": "exchangeDistributionGroupSendOnBehalfTo",
      "namespace": "email.exchange",
      "description": "Get users authorized to Send On Behalf To mails from this mailing list",
      "properties": {
        "allowedAccountId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account id to give send on behalf to",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        }
      }
    },
    "email.exchange.exchangeExternalContact": {
      "id": "exchangeExternalContact",
      "namespace": "email.exchange",
      "description": "External contact for this exchange service",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact display name",
          "required": true
        },
        "externalEmailAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact email",
          "required": true
        },
        "firstName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Contact first name",
          "required": false
        },
        "hiddenFromGAL": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Hide the contact in Global Address List",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Contact id",
          "required": true
        },
        "initials": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Contact initals",
          "required": false
        },
        "lastName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Contact last name",
          "required": false
        },
        "organization2010": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "If specified, indicates to which organization this external contact belongs (Exchange 2010 only)",
          "required": false
        },
        "state": {
          "type": "email.exchange.ObjectStateEnum",
          "fullType": "email.exchange.ObjectStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Contact state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task pending id",
          "required": true
        }
      }
    },
    "email.exchange.exchangeMailingListAlias": {
      "id": "exchangeMailingListAlias",
      "namespace": "email.exchange",
      "description": "Get aliases on this mailingList",
      "properties": {
        "alias": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Alias",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        }
      }
    },
    "email.exchange.exchangePublicFolderPermission": {
      "id": "exchangePublicFolderPermission",
      "namespace": "email.exchange",
      "description": "Exchange organization public folder permission",
      "properties": {
        "accessRights": {
          "type": "email.exchange.PublicFolderRightTypeEnum",
          "fullType": "email.exchange.PublicFolderRightTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Access right set for the account",
          "required": true
        },
        "allowedAccountId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account id",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "state": {
          "type": "email.exchange.ObjectStateEnum",
          "fullType": "email.exchange.ObjectStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "task pending id",
          "required": true
        }
      }
    },
    "email.exchange.exchangeResourceAccountDelegate": {
      "id": "exchangeResourceAccountDelegate",
      "namespace": "email.exchange",
      "description": "Resource accounts delegates",
      "properties": {
        "allowedAccountId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "delegate's account id",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Creation date",
          "required": false
        },
        "delegateEmailAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Delegate account primaryEmailAddress",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "task pending id",
          "required": true
        }
      }
    },
    "email.exchange.exchangeServiceActiveSyncNotification": {
      "id": "exchangeServiceActiveSyncNotification",
      "namespace": "email.exchange",
      "description": "Get email addresses subscribed to ActiveSync quarantine notifications",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "notifiedAccountId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Notified Account Id",
          "required": true
        },
        "primaryEmailAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Primary email address for notified account",
          "required": true
        },
        "state": {
          "type": "email.exchange.activeSyncNotificationStateEnum",
          "fullType": "email.exchange.activeSyncNotificationStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Email state",
          "required": true
        }
      }
    },
    "email.exchange.exchangeServiceDevice": {
      "id": "exchangeServiceDevice",
      "namespace": "email.exchange",
      "description": "Get the list of your ActiveSync devices registered on this Exchange service",
      "properties": {
        "IMEI": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "International Mobile Equipment Identity",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "deviceId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Device Id",
          "required": true
        },
        "deviceModel": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Model device",
          "required": true
        },
        "deviceState": {
          "type": "email.exchange.DeviceActiveSyncStateEnum",
          "fullType": "email.exchange.DeviceActiveSyncStateEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Device State",
          "required": true
        },
        "guid": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "user guid",
          "required": true
        },
        "identity": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Exchange identity",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last update date",
          "required": false
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        }
      }
    },
    "email.exchange.exchangeServiceProtocol": {
      "id": "exchangeServiceProtocol",
      "namespace": "email.exchange",
      "description": "Protocol access policy for this Exchange service",
      "properties": {
        "IMAP": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "IMAP protocol enabled on this Exchange service",
          "required": true
        },
        "POP": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "POP protocol enabled on this Exchange service",
          "required": true
        },
        "activeSync": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "ActiveSync protocol enabled on this Exchange service",
          "required": true
        },
        "activeSyncPolicy": {
          "type": "email.exchange.ActiveSyncPolicyEnum",
          "fullType": "email.exchange.ActiveSyncPolicyEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "ActiveSync policy to apply at device's first connection",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last update date",
          "required": false
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        },
        "webMail": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Web mail protocol enabled on this Exchange service",
          "required": true
        }
      }
    },
    "email.exchange.exchangeSharedAccountFullAccess": {
      "id": "exchangeSharedAccountFullAccess",
      "namespace": "email.exchange",
      "description": "Users having full access on this shared mailbox",
      "properties": {
        "allowedAccountId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account id to give full access",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        }
      }
    },
    "email.exchange.exchangeSharedAccountSendAs": {
      "id": "exchangeSharedAccountSendAs",
      "namespace": "email.exchange",
      "description": "Users authorized to send mails from this shared mailbox",
      "properties": {
        "allowedAccountId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account id to give send as",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        }
      }
    },
    "email.exchange.exchangeSharedAccountSendOnBehalfTo": {
      "id": "exchangeSharedAccountSendOnBehalfTo",
      "namespace": "email.exchange",
      "description": "Get users authorized to Send On Behalf To mails from this shared mailbox",
      "properties": {
        "allowedAccountId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account id to give send on behalf to",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        }
      }
    },
    "email.exchange.mailingList": {
      "id": "mailingList",
      "namespace": "email.exchange",
      "description": "Mailing list",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "departRestriction": {
          "type": "email.exchange.MailingListDepartRestrictionEnum",
          "fullType": "email.exchange.MailingListDepartRestrictionEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Depart restriction policy",
          "required": true
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name displayed in Global Access List",
          "required": false
        },
        "hiddenFromGAL": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If true mailing list is hiddend in Global Address List",
          "required": true
        },
        "joinRestriction": {
          "type": "email.exchange.MailingListJoinRestrictionEnum",
          "fullType": "email.exchange.MailingListJoinRestrictionEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Join restriction policy",
          "required": true
        },
        "lastUpdateDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Update date",
          "required": false
        },
        "mailingListAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The mailing list address",
          "required": true
        },
        "maxReceiveSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Maximum receive email size in MB",
          "required": false
        },
        "maxSendSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Maximum send email size in MB",
          "required": false
        },
        "senderAuthentification": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If true sender has to authenticate",
          "required": true
        },
        "spamDetected": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account was sending spam",
          "required": true
        },
        "spamTicketNumber": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Ticket number of spam detection",
          "required": false
        },
        "state": {
          "type": "email.exchange.ObjectStateEnum",
          "fullType": "email.exchange.ObjectStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Mailing list state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task pending id",
          "required": true
        }
      }
    },
    "email.exchange.publicFolder": {
      "id": "publicFolder",
      "namespace": "email.exchange",
      "description": "Exchange organization public folder",
      "properties": {
        "anonymousPermission": {
          "type": "email.exchange.PublicFolderRightTypeEnum",
          "fullType": "email.exchange.PublicFolderRightTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Access right for the guest users",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Creation date",
          "required": false
        },
        "defaultPermission": {
          "type": "email.exchange.PublicFolderRightTypeEnum",
          "fullType": "email.exchange.PublicFolderRightTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Default access right",
          "required": true
        },
        "hasSubFolders": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "If true, this public folder has subfolders",
          "required": false
        },
        "itemCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Number of items in public folder",
          "required": false
        },
        "lastAccessTime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Time for which public folder was accessed for the last time",
          "required": false
        },
        "lastModificationTime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Time for which public folder was modified for the last time ",
          "required": false
        },
        "lastUserAccessTime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Time for which public folder was accessed for the last time by the user",
          "required": false
        },
        "lastUserModificationTime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Time for which public folder was modified for the last time by the user",
          "required": false
        },
        "path": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Path for public folder",
          "required": true
        },
        "quota": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Quota for public folder in MB",
          "required": true
        },
        "state": {
          "type": "email.exchange.ObjectStateEnum",
          "fullType": "email.exchange.ObjectStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "task pending id",
          "required": true
        },
        "totalItemSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Sum of all items in public folder in MB",
          "required": false
        },
        "type": {
          "type": "email.exchange.PublicFolderTypeEnum",
          "fullType": "email.exchange.PublicFolderTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type for public folder",
          "required": true
        }
      }
    },
    "email.exchange.renewPeriodEnum": {
      "id": "renewPeriodEnum",
      "namespace": "email.exchange",
      "description": "Renew period",
      "enum": [
        "monthly",
        "yearly"
      ],
      "enumType": "string"
    },
    "email.exchange.resourceAccount": {
      "id": "resourceAccount",
      "namespace": "email.exchange",
      "description": "Exchange resource account",
      "properties": {
        "addOrganizerToSubject": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "meeting organizer's name is used as the subject of the meeting request",
          "required": true
        },
        "allowConflict": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "resource can be scheduled by more than one person during the same time period",
          "required": true
        },
        "bookingWindow": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "maximum number of days in advance that the resource can be reserved",
          "required": true
        },
        "capacity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "number of the same equipment or capacity of a room",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Creation date",
          "required": false
        },
        "deleteComments": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "remove any text in the message body of incoming meeting requests on resourceAccount",
          "required": true
        },
        "deleteSubject": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "remove email subject of incoming meeting requests on resourceAccount",
          "required": true
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "name of resource",
          "required": true
        },
        "location": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "resource location name",
          "required": true
        },
        "maximumDuration": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "maximum duration in minutes for meeting requests",
          "required": true
        },
        "resourceEmailAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "resource as email",
          "required": true
        },
        "showMeetingDetails": {
          "type": "email.exchange.ShowMeetingDetailsEnum",
          "fullType": "email.exchange.ShowMeetingDetailsEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "granted right on a calendar of that resourceAccount",
          "required": true
        },
        "state": {
          "type": "email.exchange.ObjectStateEnum",
          "fullType": "email.exchange.ObjectStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "account state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "task pending id",
          "required": true
        },
        "type": {
          "type": "email.exchange.ResourceTypeEnum",
          "fullType": "email.exchange.ResourceTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "resource type",
          "required": true
        }
      }
    },
    "email.exchange.sharedAccount": {
      "id": "sharedAccount",
      "namespace": "email.exchange",
      "description": "Exchange shared mailbox",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Creation date",
          "required": false
        },
        "currentUsage": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Shared mailbox usage",
          "required": false
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Shared account display name",
          "required": false
        },
        "firstName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Shared account first name",
          "required": false
        },
        "hiddenFromGAL": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Hide shared account in Global Address List",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Shared account id",
          "required": true
        },
        "initials": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Shared account initials",
          "required": false
        },
        "lastLogoffDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last logoff",
          "required": false
        },
        "lastLogonDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last logon",
          "required": false
        },
        "lastName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Shared account last name",
          "required": false
        },
        "mailingFilter": {
          "type": "email.exchange.MailingFilterEnum[]",
          "fullType": "email.exchange.MailingFilterEnum[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Enable or disable anti-virus and anti-spam",
          "required": false
        },
        "quota": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Shared account maximum size",
          "required": true
        },
        "sharedEmailAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Default email for this shared mailbox",
          "required": true
        },
        "spamDetected": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account was sending spam",
          "required": true
        },
        "spamTicketNumber": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Ticket number of spam detection",
          "required": false
        },
        "state": {
          "type": "email.exchange.ObjectStateEnum",
          "fullType": "email.exchange.ObjectStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Shared account state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task for this shared account",
          "required": true
        }
      }
    },
    "email.exchange.spamAndVirusConfiguration": {
      "id": "spamAndVirusConfiguration",
      "namespace": "email.exchange",
      "description": "Spam and Antyvirus configuration",
      "properties": {
        "checkDKIM": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Check DKIM of message",
          "required": true
        },
        "checkSPF": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Check SPF of message",
          "required": true
        },
        "deleteSpam": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If message is a spam delete it",
          "required": true
        },
        "deleteVirus": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If message is a virus delete it",
          "required": true
        },
        "putInJunk": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If message is a spam or virus put in junk. Overridden by deleteSpam or deleteVirus",
          "required": true
        },
        "tagSpam": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If message is a spam change its subject",
          "required": true
        },
        "tagVirus": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If message is a virus change its subject",
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
    }
  }
}