import {Schema} from '../../src/schema';

// imported from https://eu.api.soyoustart.com:443/1.0/email/exchange.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the MSSERVICES service",
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
      "path": "/email/exchange"
    },
    {
      "description": "Operations about the EXCHANGE service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/email/exchange/{organizationName}/service"
    },
    {
      "description": "Exchange service",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.ExchangeService"
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
              "dataType": "email.exchange.ExchangeService",
              "description": "New object properties",
              "fullType": "email.exchange.ExchangeService",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}"
    },
    {
      "description": "List the email.exchange.Account objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Accounts associated to this exchange service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
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
            },
            {
              "dataType": "email.exchange.OvhLicenceEnum",
              "description": "Filter the value of accountLicense property (=)",
              "fullType": "email.exchange.OvhLicenceEnum",
              "name": "accountLicense",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
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
          "description": "Create new mailbox in exchange server",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Buy outlook license",
              "fullType": "boolean",
              "name": "outlookLicense",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Hide the account in Global Address List",
              "fullType": "boolean",
              "name": "hiddenFromGAL",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Account last name",
              "fullType": "string",
              "name": "lastName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "SAM account name (exchange 2010 login)",
              "fullType": "string",
              "name": "SAMAccountName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company name",
              "fullType": "string",
              "name": "company",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "email.exchange.spamAndVirusConfiguration",
              "description": "Antispam and Antivirus configuration",
              "fullType": "email.exchange.spamAndVirusConfiguration",
              "name": "spamAndVirusConfiguration",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "email.exchange.MailingFilterEnum[]",
              "description": "Enable mailing filtrering",
              "fullType": "email.exchange.MailingFilterEnum[]",
              "name": "mailingFilter",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Litigation status",
              "fullType": "boolean",
              "name": "litigation",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Account display name",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Account first name",
              "fullType": "string",
              "name": "firstName",
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
              "description": "Litigation length in days, 0 means unlimited",
              "fullType": "long",
              "name": "litigationPeriod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "email.exchange.OvhLicenceEnum",
              "description": "Exchange license",
              "fullType": "email.exchange.OvhLicenceEnum",
              "name": "license",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Account initials",
              "fullType": "string",
              "name": "initials",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Email domain",
              "fullType": "string",
              "name": "domain",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Account login",
              "fullType": "string",
              "name": "login",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account"
    },
    {
      "description": "Exchange mailbox",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete existing mailbox in exchange server",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Account"
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
              "dataType": "email.exchange.Account",
              "description": "New object properties",
              "fullType": "email.exchange.Account",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}"
    },
    {
      "description": "List the email.exchange.exchangeAccountAlias objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Aliases associated to this mailbox",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias"
    },
    {
      "description": "Aliases on this mailbox",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete existing alias",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Alias",
              "fullType": "string",
              "name": "alias",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Alias",
              "fullType": "string",
              "name": "alias",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeAccountAlias"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/alias/{alias}"
    },
    {
      "description": "Exchange Account Archive",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete existing archive mailbox",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeAccountArchive"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create new archive mailbox",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Archive mailbox quota (if not provided mailbox quota will be taken)",
              "fullType": "long",
              "name": "quota",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "dataType": "email.exchange.exchangeAccountArchive",
              "description": "New object properties",
              "fullType": "email.exchange.exchangeAccountArchive",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive"
    },
    {
      "description": "changePassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/changePassword"
    },
    {
      "description": "Exchange Account Diagnosis",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeAccountDiagnosis"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/diagnostics"
    },
    {
      "description": "Export PST file request",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove request of PST file",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Export"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request PST file for the account",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export"
    },
    {
      "description": "Export PST file url",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.ExportUrl"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate temporary url to PST file",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/exportURL"
    },
    {
      "description": "List the email.exchange.exchangeAccountFullAccess objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Full access granted users for this mailbox",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess"
    },
    {
      "description": "Users having full access on this mailbox",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Revoke full access",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id to give full access",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id to give full access",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeAccountFullAccess"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/fullAccess/{allowedAccountId}"
    },
    {
      "description": "Outlook url",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.OutlookUrl"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate outlook url",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.exchange.OutlookVersionEnum",
              "description": "Version of outlook",
              "fullType": "email.exchange.OutlookVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "email.exchange.LanguageEnum",
              "description": "Language of outlook",
              "fullType": "email.exchange.LanguageEnum",
              "name": "language",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/outlookURL"
    },
    {
      "description": "Get protocol status on that mailbox",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeAccountProtocol"
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
              "dataType": "email.exchange.exchangeAccountProtocol",
              "description": "New object properties",
              "fullType": "email.exchange.exchangeAccountProtocol",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/protocol"
    },
    {
      "description": "List the email.exchange.exchangeAccountSendAs objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Send as granted users for this mailbox",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs"
    },
    {
      "description": "Users authorized to send mails from this mailbox",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete allowed user for sendAs",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id to give send as",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id to give send as",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeAccountSendAs"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendAs/{allowedAccountId}"
    },
    {
      "description": "List the email.exchange.exchangeAccountSendOnBehalfTo objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "SendOnBehalfTo granted users for this mailbox",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo"
    },
    {
      "description": "Get users authorized to Send On Behalf To mails from this mailbox",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete allowed user for SendOnBehalfTo",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id to give send on behalf to",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id to give send on behalf to",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeAccountSendOnBehalfTo"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}"
    },
    {
      "description": "List the email.exchange.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Pending task for this mailbox",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks"
    },
    {
      "description": "Exchange task details",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
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
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/tasks/{id}"
    },
    {
      "description": "terminate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Terminate account at expiration date",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this mailbox",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/terminate"
    },
    {
      "description": "activateSharepoint operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Activate Sharepoint infra connected to this exchange service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "primary email address of a user that will be admin of sharepoint (You will not be able to change it!)",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "sub domain that will be used for Your sharepoint infra (You will not be able to change it!)",
              "fullType": "string",
              "name": "subDomain",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/activateSharepoint"
    },
    {
      "description": "changeHostname operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Setting SSL hostname for Exchange private offer",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Set required Exchange DNS fields automatically if the hostname domain is managed by OVH",
              "fullType": "boolean",
              "name": "useDnsAssist",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "FQDN of SSL hostname",
              "fullType": "string",
              "name": "hostname",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Email address used for Domain Control Validation, needed for ownership validation",
              "fullType": "string",
              "name": "dcvEmail",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/changeHostname"
    },
    {
      "description": "dcvEmails operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get DCV emails if your ssl will expire in next 30 days",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/dcvEmails"
    },
    {
      "description": "List the email.exchange.exchangeServiceDevice objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of your ActiveSync devices registered on this Exchange service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter the value of identity property (like)",
              "fullType": "string",
              "name": "identity",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "email.exchange.DeviceActiveSyncStateEnum",
              "description": "Filter the value of deviceState property (=)",
              "fullType": "email.exchange.DeviceActiveSyncStateEnum",
              "name": "deviceState",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of IMEI property (like)",
              "fullType": "string",
              "name": "IMEI",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/device"
    },
    {
      "description": "Get the list of your ActiveSync devices registered on this Exchange service",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Exchange identity",
              "fullType": "string",
              "name": "identity",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeServiceDevice"
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
              "dataType": "email.exchange.exchangeServiceDevice",
              "description": "New object properties",
              "fullType": "email.exchange.exchangeServiceDevice",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Exchange identity",
              "fullType": "string",
              "name": "identity",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}"
    },
    {
      "description": "clearDevice operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Executes a factory reset on the device. THIS OPERATION CANNOT BE REVERSED, ALL DATA ON THE DEVICE WILL BE LOST.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Exchange identity",
              "fullType": "string",
              "name": "identity",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/device/{identity}/clearDevice"
    },
    {
      "description": "List the email.exchange.Domain objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Domains associated to this service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.exchange.ObjectStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "email.exchange.ObjectStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Filter the value of main property (like)",
              "fullType": "boolean",
              "name": "main",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
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
          "description": "Create new domain in exchange services",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.exchange.DomainTypeEnum",
              "description": "Type of domain that You want to install",
              "fullType": "email.exchange.DomainTypeEnum",
              "name": "type",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "If specified, indicates which organization this newly created domain will be part of (Exchange 2010 only)",
              "fullType": "string",
              "name": "organization2010",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "This newly created domain will be an organization (Exchange 2010 only)",
              "fullType": "boolean",
              "name": "main",
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
              "dataType": "boolean",
              "description": "If you host domain in OVH we can configure autodiscover record automatically",
              "fullType": "boolean",
              "name": "configureAutodiscover",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/domain"
    },
    {
      "description": "Exchange domain",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete existing domain in exchange services",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain name",
              "fullType": "string",
              "name": "domainName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain name",
              "fullType": "string",
              "name": "domainName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Domain"
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
              "dataType": "email.exchange.Domain",
              "description": "New object properties",
              "fullType": "email.exchange.Domain",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain name",
              "fullType": "string",
              "name": "domainName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}"
    },
    {
      "description": "Exchange organization disclaimer",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete existing organization disclaimer",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain name",
              "fullType": "string",
              "name": "domainName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain name",
              "fullType": "string",
              "name": "domainName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.disclaimer"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create organization disclaimer of each email",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Activate the disclaimer only for external emails",
              "fullType": "boolean",
              "name": "outsideOnly",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "text",
              "description": "Signature, added at the bottom of your organization emails",
              "fullType": "text",
              "name": "content",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain name",
              "fullType": "string",
              "name": "domainName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "dataType": "email.exchange.disclaimer",
              "description": "New object properties",
              "fullType": "email.exchange.disclaimer",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain name",
              "fullType": "string",
              "name": "domainName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer"
    },
    {
      "description": "disclaimerAttribute operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get diclaimer attributes to substitute with Active Directory properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain name",
              "fullType": "string",
              "name": "domainName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.DisclaimerAttributeEnum[]"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimerAttribute"
    },
    {
      "description": "List the email.exchange.exchangeExternalContact objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "External contacts for this service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter the value of externalEmailAddress property (like)",
              "fullType": "string",
              "name": "externalEmailAddress",
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
              "dataType": "string",
              "description": "Filter the value of displayName property (like)",
              "fullType": "string",
              "name": "displayName",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
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
          "description": "create new external contact",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Indicates to which organization this newly created external contact will belongs (Exchange 2010 only)",
              "fullType": "string",
              "name": "organization2010",
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
              "dataType": "boolean",
              "description": "Hide the contact in Global Address List",
              "fullType": "boolean",
              "name": "hiddenFromGAL",
              "paramType": "body",
              "required": false
            },
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
              "description": "Contact first name",
              "fullType": "string",
              "name": "firstName",
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
              "description": "Contact initials",
              "fullType": "string",
              "name": "initials",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/externalContact"
    },
    {
      "description": "External contact for this exchange service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "delete external contact",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Contact email",
              "fullType": "string",
              "name": "externalEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Contact email",
              "fullType": "string",
              "name": "externalEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeExternalContact"
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
              "dataType": "email.exchange.exchangeExternalContact",
              "description": "New object properties",
              "fullType": "email.exchange.exchangeExternalContact",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Contact email",
              "fullType": "string",
              "name": "externalEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/externalContact/{externalEmailAddress}"
    },
    {
      "description": "license operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get active licenses for specific period of time",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "date",
              "description": "Get active licenses until date",
              "fullType": "date",
              "name": "toDate",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "date",
              "description": "Get active licenses since date ",
              "fullType": "date",
              "name": "fromDate",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "email.exchange.OvhLicenceEnum",
              "description": "License type",
              "fullType": "email.exchange.OvhLicenceEnum",
              "name": "license",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.DailyLicense[]"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/license"
    },
    {
      "description": "List the email.exchange.mailingList objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Mailing list for this service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter the value of mailingListAddress property (like)",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
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
          "description": "Add mailing list",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Maximum send email size in MB",
              "fullType": "long",
              "name": "maxSendSize",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Maximum receive email size in MB",
              "fullType": "long",
              "name": "maxReceiveSize",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Name displayed in Global Access List",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "If true mailing list is hiddend in Global Address List",
              "fullType": "boolean",
              "name": "hiddenFromGAL",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "email.exchange.MailingListDepartRestrictionEnum",
              "description": "Depart restriction policy",
              "fullType": "email.exchange.MailingListDepartRestrictionEnum",
              "name": "departRestriction",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "email.exchange.MailingListJoinRestrictionEnum",
              "description": "Join restriction policy",
              "fullType": "email.exchange.MailingListJoinRestrictionEnum",
              "name": "joinRestriction",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "If true sender has to authenticate",
              "fullType": "boolean",
              "name": "senderAuthentification",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList"
    },
    {
      "description": "Mailing list",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete mailing list",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.mailingList"
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
              "dataType": "email.exchange.mailingList",
              "description": "New object properties",
              "fullType": "email.exchange.mailingList",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}"
    },
    {
      "description": "List the email.exchange.exchangeMailingListAlias objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Aliases associated to this mailingList",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias"
    },
    {
      "description": "Get aliases on this mailingList",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete existing alias",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Alias",
              "fullType": "string",
              "name": "alias",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Alias",
              "fullType": "string",
              "name": "alias",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeMailingListAlias"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/alias/{alias}"
    },
    {
      "description": "List the email.exchange.exchangeDistributionGroupManager objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Mailing list account manager",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
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
          "description": "Add new mailing list manager",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Manager account id",
              "fullType": "long",
              "name": "managerAccountId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account"
    },
    {
      "description": "Mailing list managers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete mailing list manager",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Manager account id",
              "fullType": "long",
              "name": "managerAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Manager account id",
              "fullType": "long",
              "name": "managerAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeDistributionGroupManager"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}"
    },
    {
      "description": "List the email.exchange.exchangeDistributionGroupMember objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Mailing list account member",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
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
          "description": "Add new mailing list member",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Member account id",
              "fullType": "long",
              "name": "memberAccountId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Member contact id",
              "fullType": "long",
              "name": "memberContactId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account"
    },
    {
      "description": "Mailing list members",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete mailing list member",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Member account id",
              "fullType": "long",
              "name": "memberAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Member account id",
              "fullType": "long",
              "name": "memberAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeDistributionGroupMember"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account/{memberAccountId}"
    },
    {
      "description": "List the email.exchange.exchangeDistributionGroupMember objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Mailing list contact member",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
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
          "description": "Add new mailing list member",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Member account id",
              "fullType": "long",
              "name": "memberAccountId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Member contact id",
              "fullType": "long",
              "name": "memberContactId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact"
    },
    {
      "description": "Mailing list members",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete mailing list member",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Member account id",
              "fullType": "long",
              "name": "memberContactId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Member account id",
              "fullType": "long",
              "name": "memberContactId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeDistributionGroupMember"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{memberContactId}"
    },
    {
      "description": "List the email.exchange.exchangeDistributionGroupSendAs objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "sendAs",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
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
          "description": "Allow another user to Send aso mails from this mailing list",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Account id to allow to send as mails from this mailing list",
              "fullType": "long",
              "name": "allowAccountId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs"
    },
    {
      "description": "Get users authorized to Send On Behalf To mails from this mailbox",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete allowed user for SendAs",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id to give send on behalf to",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id to give send on behalf to",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeDistributionGroupSendAs"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}"
    },
    {
      "description": "List the email.exchange.exchangeDistributionGroupSendOnBehalfTo objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "sendOnBehalfTo",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
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
          "description": "Allow another user to Send aso mails from this mailing list",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Account id to allow to send as mails from this mailing list",
              "fullType": "long",
              "name": "allowAccountId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo"
    },
    {
      "description": "Get users authorized to Send On Behalf To mails from this mailing list",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete allowed user for SendOnBehalfTo",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id to give send on behalf to",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The mailing list address",
              "fullType": "string",
              "name": "mailingListAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id to give send on behalf to",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeDistributionGroupSendOnBehalfTo"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo/{allowedAccountId}"
    },
    {
      "description": "outlookAvailability operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Show available outlooks",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.exchange.LanguageEnum",
              "description": "Language version of outlook",
              "fullType": "email.exchange.LanguageEnum",
              "name": "outlookLanguage",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "email.exchange.OutlookVersionEnum",
              "description": "OS version of outlook",
              "fullType": "email.exchange.OutlookVersionEnum",
              "name": "outlookVersion",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.OutlookVersions[]"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/outlookAvailability"
    },
    {
      "description": "Protocol access policy for this Exchange service",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeServiceProtocol"
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
              "dataType": "email.exchange.exchangeServiceProtocol",
              "description": "New object properties",
              "fullType": "email.exchange.exchangeServiceProtocol",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/protocol"
    },
    {
      "description": "List the email.exchange.exchangeServiceActiveSyncNotification objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Exchange account id subscribed to ActiveSync quarantine notifications",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
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
          "description": "Subscribe new address to ActiveSync quarantine notifications",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Exchange Account Id",
              "fullType": "long",
              "name": "notifiedAccountId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification"
    },
    {
      "description": "Get email addresses subscribed to ActiveSync quarantine notifications",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Unubscribe address from ActiveSync quarantine notifications",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Notified Account Id",
              "fullType": "long",
              "name": "notifiedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Notified Account Id",
              "fullType": "long",
              "name": "notifiedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeServiceActiveSyncNotification"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}"
    },
    {
      "description": "List the email.exchange.publicFolder objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Public folders associated to this service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter the value of path property (like)",
              "fullType": "string",
              "name": "path",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
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
          "description": "Create organization public folder",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.exchange.PublicFolderRightTypeEnum",
              "description": "Access right for the guest users",
              "fullType": "email.exchange.PublicFolderRightTypeEnum",
              "name": "anonymousPermission",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "email.exchange.PublicFolderRightTypeEnum",
              "description": "Default access right",
              "fullType": "email.exchange.PublicFolderRightTypeEnum",
              "name": "defaultPermission",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Path for public folder",
              "fullType": "string",
              "name": "path",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "email.exchange.PublicFolderTypeEnum",
              "description": "Type for public folder",
              "fullType": "email.exchange.PublicFolderTypeEnum",
              "name": "type",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quota for public folder in MB",
              "fullType": "long",
              "name": "quota",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/publicFolder"
    },
    {
      "description": "Exchange organization public folder",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete existing organization public folder",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Path for public folder",
              "fullType": "string",
              "name": "path",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Path for public folder",
              "fullType": "string",
              "name": "path",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.publicFolder"
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
              "dataType": "email.exchange.publicFolder",
              "description": "New object properties",
              "fullType": "email.exchange.publicFolder",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Path for public folder",
              "fullType": "string",
              "name": "path",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}"
    },
    {
      "description": "List the email.exchange.exchangePublicFolderPermission objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Public folder permission",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Path for public folder",
              "fullType": "string",
              "name": "path",
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
          "description": "Create public folder permission",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.exchange.PublicFolderRightTypeEnum",
              "description": "Access rights to be set for the account",
              "fullType": "email.exchange.PublicFolderRightTypeEnum",
              "name": "accessRights",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id to have access to public folder",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Path for public folder",
              "fullType": "string",
              "name": "path",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission"
    },
    {
      "description": "Exchange organization public folder permission",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete existing permission from public folder",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Path for public folder",
              "fullType": "string",
              "name": "path",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Path for public folder",
              "fullType": "string",
              "name": "path",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangePublicFolderPermission"
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
              "dataType": "email.exchange.exchangePublicFolderPermission",
              "description": "New object properties",
              "fullType": "email.exchange.exchangePublicFolderPermission",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Path for public folder",
              "fullType": "string",
              "name": "path",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}"
    },
    {
      "description": "publicFolderQuota operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get public folder quota usage in total available space",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.PublicFolderQuota"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/publicFolderQuota"
    },
    {
      "description": "renewSSL operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Renew SSL if it will expire in next 30 days",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "DCV email require for order ssl varification process",
              "fullType": "string",
              "name": "dcv",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/renewSSL"
    },
    {
      "description": "List the email.exchange.resourceAccount objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Resource account associated to this service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter the value of resourceEmailAddress property (like)",
              "fullType": "string",
              "name": "resourceEmailAddress",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
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
          "description": "create new resource account in exchange server",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "number of the same equipment or capacity of a room",
              "fullType": "long",
              "name": "capacity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "email.exchange.ShowMeetingDetailsEnum",
              "description": "granted right on a calendar of that resourceAccount",
              "fullType": "email.exchange.ShowMeetingDetailsEnum",
              "name": "showMeetingDetails",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "remove email subject of incoming meeting requests on resourceAccount",
              "fullType": "boolean",
              "name": "deleteSubject",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "maximum duration in minutes for meeting requests",
              "fullType": "long",
              "name": "maximumDuration",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "email.exchange.ResourceTypeEnum",
              "description": "type of your reservation",
              "fullType": "email.exchange.ResourceTypeEnum",
              "name": "type",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "meeting organizer's name is used as the subject of the meeting request",
              "fullType": "boolean",
              "name": "addOrganizerToSubject",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "resource can be scheduled by more than one person during the same time period",
              "fullType": "boolean",
              "name": "allowConflict",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "resource location",
              "fullType": "string",
              "name": "location",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "resource address",
              "fullType": "string",
              "name": "resourceEmailAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "resource account display name",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "maximum number of days in advance that the resource can be reserved",
              "fullType": "long",
              "name": "bookingWindow",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "remove any text in the message body of incoming meeting requests on resourceAccount",
              "fullType": "boolean",
              "name": "deleteComments",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount"
    },
    {
      "description": "Exchange resource account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "delete existing resource account in exchange server",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "resource as email",
              "fullType": "string",
              "name": "resourceEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "resource as email",
              "fullType": "string",
              "name": "resourceEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.resourceAccount"
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
              "dataType": "email.exchange.resourceAccount",
              "description": "New object properties",
              "fullType": "email.exchange.resourceAccount",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "resource as email",
              "fullType": "string",
              "name": "resourceEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}"
    },
    {
      "description": "List the email.exchange.exchangeResourceAccountDelegate objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Resource account manager",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "resource as email",
              "fullType": "string",
              "name": "resourceEmailAddress",
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
          "description": "add new resource account delegate in exchange server",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "delegate's account id",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "resource as email",
              "fullType": "string",
              "name": "resourceEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate"
    },
    {
      "description": "Resource accounts delegates",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "delete existing resource account delegate in exchange server",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "resource as email",
              "fullType": "string",
              "name": "resourceEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "delegate's account id",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "resource as email",
              "fullType": "string",
              "name": "resourceEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "delegate's account id",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeResourceAccountDelegate"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate/{allowedAccountId}"
    },
    {
      "description": "Exchange server",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Server"
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
              "dataType": "email.exchange.Server",
              "description": "New object properties",
              "fullType": "email.exchange.Server",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/server"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/serviceInfos"
    },
    {
      "description": "List the email.exchange.sharedAccount objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Shared accounts associated to this exchange service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter the value of sharedEmailAddress property (like)",
              "fullType": "string",
              "name": "sharedEmailAddress",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
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
          "description": "Create new shared mailbox in exchange server",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Shared account initials",
              "fullType": "string",
              "name": "initials",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Hide the shared account in Global Address List",
              "fullType": "boolean",
              "name": "hiddenFromGAL",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Shared account last name",
              "fullType": "string",
              "name": "lastName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Shared account display name",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Shared account maximum size",
              "fullType": "long",
              "name": "quota",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Shared account first name",
              "fullType": "string",
              "name": "firstName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Shared account email address",
              "fullType": "string",
              "name": "sharedEmailAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "email.exchange.MailingFilterEnum[]",
              "description": "Enable mailing filtrering",
              "fullType": "email.exchange.MailingFilterEnum[]",
              "name": "mailingFilter",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount"
    },
    {
      "description": "Exchange shared mailbox",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete existing shared mailbox in exchange server",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this shared mailbox",
              "fullType": "string",
              "name": "sharedEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this shared mailbox",
              "fullType": "string",
              "name": "sharedEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.sharedAccount"
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
              "dataType": "email.exchange.sharedAccount",
              "description": "New object properties",
              "fullType": "email.exchange.sharedAccount",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this shared mailbox",
              "fullType": "string",
              "name": "sharedEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}"
    },
    {
      "description": "List the email.exchange.exchangeSharedAccountFullAccess objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Full access granted users for this shared mailbox",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this shared mailbox",
              "fullType": "string",
              "name": "sharedEmailAddress",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this shared mailbox",
              "fullType": "string",
              "name": "sharedEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess"
    },
    {
      "description": "Users having full access on this shared mailbox",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Revoke full access",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this shared mailbox",
              "fullType": "string",
              "name": "sharedEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id to give full access",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this shared mailbox",
              "fullType": "string",
              "name": "sharedEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id to give full access",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeSharedAccountFullAccess"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/fullAccess/{allowedAccountId}"
    },
    {
      "description": "List the email.exchange.exchangeSharedAccountSendAs objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Send as granted users for this shared mailbox",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this shared mailbox",
              "fullType": "string",
              "name": "sharedEmailAddress",
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
          "description": "Allow another user to send mails from this shared mailbox",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Account id to allow to send mails from this shared mailbox",
              "fullType": "long",
              "name": "allowAccountId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this shared mailbox",
              "fullType": "string",
              "name": "sharedEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs"
    },
    {
      "description": "Users authorized to send mails from this shared mailbox",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete allowed user for sendAs",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this shared mailbox",
              "fullType": "string",
              "name": "sharedEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id to give send as",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this shared mailbox",
              "fullType": "string",
              "name": "sharedEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id to give send as",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeSharedAccountSendAs"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs/{allowedAccountId}"
    },
    {
      "description": "List the email.exchange.exchangeSharedAccountSendOnBehalfTo objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "SendOnBehalfTo granted users for this shared mailbox",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this shared mailbox",
              "fullType": "string",
              "name": "sharedEmailAddress",
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
          "description": "Allow another user to Send On Behalf To mails from this shared mailbox",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Account id to allow to send On Behalf To mails from this shared mailbox",
              "fullType": "long",
              "name": "allowAccountId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this shared mailbox",
              "fullType": "string",
              "name": "sharedEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo"
    },
    {
      "description": "Get users authorized to Send On Behalf To mails from this shared mailbox",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete allowed user for SendOnBehalfTo",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this shared mailbox",
              "fullType": "string",
              "name": "sharedEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id to give send on behalf to",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this shared mailbox",
              "fullType": "string",
              "name": "sharedEmailAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Account id to give send on behalf to",
              "fullType": "long",
              "name": "allowedAccountId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.exchangeSharedAccountSendOnBehalfTo"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}"
    },
    {
      "description": "List the email.exchange.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Pending task for this mailbox",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this shared mailbox",
              "fullType": "string",
              "name": "sharedEmailAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks"
    },
    {
      "description": "Exchange task details",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Default email for this shared mailbox",
              "fullType": "string",
              "name": "sharedEmailAddress",
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
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/tasks/{id}"
    },
    {
      "description": "sharedAccountQuota operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get shared account quota usage in total available space",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.SharedAccountQuota"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/sharedAccountQuota"
    },
    {
      "description": "List the email.exchange.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Pending actions",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/task"
    },
    {
      "description": "Exchange task details",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
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
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/task/{id}"
    },
    {
      "description": "updateDeviceList operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update device list",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "email.exchange.Task"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/updateDeviceList"
    },
    {
      "description": "updateFlagsOnAllAccounts operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update spam and virus flags on all active accounts",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/email/exchange/{organizationName}/service/{exchangeService}/updateFlagsOnAllAccounts"
    }
  ],
  "basePath": "https://eu.api.soyoustart.com/1.0",
  "models": {
    "email.exchange.Account": {
      "description": "Exchange mailbox",
      "id": "Account",
      "namespace": "email.exchange",
      "properties": {
        "SAMAccountName": {
          "canBeNull": true,
          "description": "SAM account name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "accountLicense": {
          "canBeNull": false,
          "description": "Exchange account type",
          "fullType": "email.exchange.OvhLicenceEnum",
          "readOnly": false,
          "required": false,
          "type": "email.exchange.OvhLicenceEnum"
        },
        "company": {
          "canBeNull": true,
          "description": "Company name",
          "fullType": "string",
          "readOnly": false,
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
        "deleteOutlookAtExpiration": {
          "canBeNull": true,
          "description": "delete outlook at expiration",
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
        "exchangeGuid": {
          "canBeNull": true,
          "description": "exchangeGuid for manual configuration",
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "guid": {
          "canBeNull": true,
          "description": "GUID for user in active directory",
          "fullType": "string",
          "readOnly": true,
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
        "litigation": {
          "canBeNull": false,
          "description": "Litigation hold feature enabled on this mailbox",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "litigationPeriod": {
          "canBeNull": true,
          "description": "Litigation hold period in days (0 means unlimited). This setting covers all items in the mailbox.",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
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
          "fullType": "email.exchange.MailingFilterEnum[]",
          "readOnly": false,
          "required": false,
          "type": "email.exchange.MailingFilterEnum[]"
        },
        "numberOfAliases": {
          "canBeNull": false,
          "description": "Count the number of related aliases attached to this account",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "outlookLicense": {
          "canBeNull": false,
          "description": "Outlook licence",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "owaLimited": {
          "canBeNull": false,
          "description": "OWA policy restriction is applied",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
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
        "renewOutlookPeriod": {
          "canBeNull": true,
          "description": "change the renew period for outlook",
          "fullType": "email.exchange.renewPeriodEnum",
          "readOnly": false,
          "required": false,
          "type": "email.exchange.renewPeriodEnum"
        },
        "renewPeriod": {
          "canBeNull": true,
          "description": "change the renew period",
          "fullType": "email.exchange.renewPeriodEnum",
          "readOnly": false,
          "required": false,
          "type": "email.exchange.renewPeriodEnum"
        },
        "spamAndVirusConfiguration": {
          "canBeNull": false,
          "description": "Spam and Antivirus configuration",
          "fullType": "email.exchange.spamAndVirusConfiguration",
          "readOnly": false,
          "required": false,
          "type": "email.exchange.spamAndVirusConfiguration"
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
          "fullType": "email.exchange.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.exchange.ObjectStateEnum"
        },
        "taskPendingId": {
          "canBeNull": true,
          "description": "Pending task for this account",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.exchange.AccountLicense": {
      "description": "Exchange account license",
      "id": "AccountLicense",
      "namespace": "email.exchange",
      "properties": {
        "license": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "email.exchange.OvhLicenceEnum"
        },
        "licenseQuantity": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.exchange.ActiveSyncPolicyEnum": {
      "description": "Activesync action",
      "enum": [
        "allow",
        "block",
        "quarantine"
      ],
      "enumType": "string",
      "id": "ActiveSyncPolicyEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.DailyLicense": {
      "description": "Exchange account license per day",
      "id": "DailyLicense",
      "namespace": "email.exchange",
      "properties": {
        "accountLicense": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "email.exchange.AccountLicense[]"
        },
        "date": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "date"
        },
        "outlookQuantity": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.exchange.DeviceActiveSyncStateEnum": {
      "description": "Device ActiveSync state",
      "enum": [
        "allowed",
        "blocked",
        "deviceDiscovery",
        "quarantined"
      ],
      "enumType": "string",
      "id": "DeviceActiveSyncStateEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.DisclaimerAttributeEnum": {
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
      "namespace": "email.exchange"
    },
    "email.exchange.Domain": {
      "description": "Exchange domain",
      "id": "Domain",
      "namespace": "email.exchange",
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
        "main": {
          "canBeNull": true,
          "description": "If true this is an organization (Exchange 2010 only)",
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
        "organization2010": {
          "canBeNull": true,
          "description": "If specified, indicates to which organization this domain belongs (Exchange 2010 only)",
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
          "fullType": "email.exchange.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.exchange.ObjectStateEnum"
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
          "fullType": "email.exchange.DomainTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "email.exchange.DomainTypeEnum"
        }
      }
    },
    "email.exchange.DomainTypeEnum": {
      "description": "Domain type",
      "enum": [
        "authoritative",
        "nonAuthoritative"
      ],
      "enumType": "string",
      "id": "DomainTypeEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.ExchangeService": {
      "description": "Exchange service",
      "id": "ExchangeService",
      "namespace": "email.exchange",
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "hostname": {
          "canBeNull": true,
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
          "fullType": "email.exchange.ServiceOfferEnum",
          "readOnly": true,
          "required": false,
          "type": "email.exchange.ServiceOfferEnum"
        },
        "passwordHistoryCount": {
          "canBeNull": true,
          "description": "number of historical password that cannot be reused",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "spamAndVirusConfiguration": {
          "canBeNull": false,
          "description": "Spam and Antivirus configuration",
          "fullType": "email.exchange.spamAndVirusConfiguration",
          "readOnly": false,
          "required": false,
          "type": "email.exchange.spamAndVirusConfiguration"
        },
        "sslExpirationDate": {
          "canBeNull": true,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "state": {
          "canBeNull": false,
          "fullType": "email.exchange.ServiceStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.exchange.ServiceStateEnum"
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
    "email.exchange.Export": {
      "description": "Export PST file request",
      "id": "Export",
      "namespace": "email.exchange",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "percentComplete": {
          "canBeNull": false,
          "description": "Percentage of export PST request completion",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
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
    "email.exchange.ExportUrl": {
      "description": "Export PST file url",
      "id": "ExportUrl",
      "namespace": "email.exchange",
      "properties": {
        "expiration": {
          "canBeNull": false,
          "description": "Url expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "url": {
          "canBeNull": false,
          "description": "Export url",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "email.exchange.LanguageEnum": {
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
      "enumType": "string",
      "id": "LanguageEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.MailingFilterEnum": {
      "description": "Mailing filter options availlable",
      "enum": [
        "vaderetro"
      ],
      "enumType": "string",
      "id": "MailingFilterEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.MailingListDepartRestrictionEnum": {
      "description": "Depart distribution group restriction status",
      "enum": [
        "closed",
        "open"
      ],
      "enumType": "string",
      "id": "MailingListDepartRestrictionEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.MailingListJoinRestrictionEnum": {
      "description": "Join distribution group restriction status",
      "enum": [
        "approvalRequired",
        "closed",
        "open"
      ],
      "enumType": "string",
      "id": "MailingListJoinRestrictionEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.ObjectStateEnum": {
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
      "enumType": "string",
      "id": "ObjectStateEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.OutlookUrl": {
      "description": "Outlook url",
      "id": "OutlookUrl",
      "namespace": "email.exchange",
      "properties": {
        "expiration": {
          "canBeNull": false,
          "description": "Url expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "serial": {
          "canBeNull": false,
          "description": "Serial number",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": "Outlook url",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "email.exchange.OutlookVersionEnum": {
      "description": "Outlook version",
      "enum": [
        "mac_x86_2011",
        "mac_x86_2016",
        "windows_x64_2013",
        "windows_x64_2016",
        "windows_x86_2013",
        "windows_x86_2016"
      ],
      "enumType": "string",
      "id": "OutlookVersionEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.OutlookVersions": {
      "description": "Availability of outlook version",
      "id": "OutlookVersions",
      "namespace": "email.exchange",
      "properties": {
        "outlookLanguage": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "email.exchange.LanguageEnum"
        },
        "outlookVersion": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "email.exchange.OutlookVersionEnum"
        },
        "status": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "email.exchange.OvhLicenceEnum": {
      "description": "OVH licence account",
      "enum": [
        "basic",
        "enterprise",
        "standard"
      ],
      "enumType": "string",
      "id": "OvhLicenceEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.PublicFolderQuota": {
      "description": "Get public folder quota usage in total available space",
      "id": "PublicFolderQuota",
      "namespace": "email.exchange",
      "properties": {
        "quotaLimit": {
          "canBeNull": false,
          "description": "total amount of space in MB for public folders within organization",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "quotaReserved": {
          "canBeNull": false,
          "description": "space in MB already reserved from the quota limit",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "quotaUsed": {
          "canBeNull": false,
          "description": "currently used space in MB within all public folders",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.exchange.PublicFolderRightTypeEnum": {
      "description": "Public folder right type",
      "enum": [
        "editor",
        "none",
        "reviewer"
      ],
      "enumType": "string",
      "id": "PublicFolderRightTypeEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.PublicFolderTypeEnum": {
      "description": "Public folder type",
      "enum": [
        "calendar",
        "contacts",
        "plain",
        "tasks"
      ],
      "enumType": "string",
      "id": "PublicFolderTypeEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.ResourceTypeEnum": {
      "description": "Resource Type",
      "enum": [
        "equipment",
        "room"
      ],
      "enumType": "string",
      "id": "ResourceTypeEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.Server": {
      "description": "Exchange server",
      "id": "Server",
      "namespace": "email.exchange",
      "properties": {
        "commercialVersion": {
          "canBeNull": false,
          "description": "Exchange commercial version",
          "fullType": "email.exchange.exchangeCommercialVersionEnum",
          "readOnly": true,
          "required": false,
          "type": "email.exchange.exchangeCommercialVersionEnum"
        },
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
        "individual2010": {
          "canBeNull": false,
          "description": "If true server is 2010 individual offer",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "ip": {
          "canBeNull": false,
          "description": "ipV4",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ipV6": {
          "canBeNull": true,
          "description": "ipV6",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
        "owaMfa": {
          "canBeNull": false,
          "description": "Indicates if Multi Factor Authentication is activated on Outlook Web Access interface",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "state": {
          "canBeNull": false,
          "description": "Server state",
          "fullType": "email.exchange.ServerStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.exchange.ServerStateEnum"
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
          "description": "ExchangeServer version",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.exchange.ServerStateEnum": {
      "description": "Server State",
      "enum": [
        "configurationError",
        "configurationPending",
        "notConfigured",
        "ok"
      ],
      "enumType": "string",
      "id": "ServerStateEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.ServiceOfferEnum": {
      "description": "Service Offer name",
      "enum": [
        "dedicated",
        "dedicatedCluster",
        "hosted",
        "provider"
      ],
      "enumType": "string",
      "id": "ServiceOfferEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.ServiceStateEnum": {
      "description": "Exchange Service State",
      "enum": [
        "inMaintenance",
        "ok",
        "suspended"
      ],
      "enumType": "string",
      "id": "ServiceStateEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.SharedAccountQuota": {
      "description": "Get shared account quota usage in total available space",
      "id": "SharedAccountQuota",
      "namespace": "email.exchange",
      "properties": {
        "quotaLimit": {
          "canBeNull": false,
          "description": "total amount of space in MB for shared accounts within organization",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "quotaReserved": {
          "canBeNull": false,
          "description": "space in MB already reserved from the quota limit",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "quotaUsed": {
          "canBeNull": false,
          "description": "currently used space in KB within all shared accounts",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.exchange.ShowMeetingDetailsEnum": {
      "description": "Level of access to calendar of Resource Mailbox",
      "enum": [
        "availabilityOnly",
        "limitedDetails",
        "reviewer"
      ],
      "enumType": "string",
      "id": "ShowMeetingDetailsEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.Task": {
      "description": "Exchange task details",
      "id": "Task",
      "namespace": "email.exchange",
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
          "fullType": "email.exchange.TaskFunctionEnum",
          "readOnly": true,
          "required": false,
          "type": "email.exchange.TaskFunctionEnum"
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
          "fullType": "email.exchange.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "email.exchange.TaskStatusEnum"
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
    "email.exchange.TaskFunctionEnum": {
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
      "enumType": "string",
      "id": "TaskFunctionEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.TaskStatusEnum": {
      "description": "Exchange task status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.activeSyncNotificationStateEnum": {
      "description": "Subscription state",
      "enum": [
        "creating",
        "deleting",
        "ok"
      ],
      "enumType": "string",
      "id": "activeSyncNotificationStateEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.authorizedIpStatusEnum": {
      "description": "Authorized IP State",
      "enum": [
        "creating",
        "deleting",
        "ok"
      ],
      "enumType": "string",
      "id": "authorizedIpStatusEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.disclaimer": {
      "description": "Exchange organization disclaimer",
      "id": "disclaimer",
      "namespace": "email.exchange",
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
    "email.exchange.exchangeAccountAlias": {
      "description": "Aliases on this mailbox",
      "id": "exchangeAccountAlias",
      "namespace": "email.exchange",
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
    "email.exchange.exchangeAccountArchive": {
      "description": "Exchange Account Archive",
      "id": "exchangeAccountArchive",
      "namespace": "email.exchange",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "currentUsage": {
          "canBeNull": true,
          "description": "Archive mailbox usage",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "guid": {
          "canBeNull": true,
          "description": "GUID of archive mailbox",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quota": {
          "canBeNull": false,
          "description": "Archive mailbox maximum size in GB",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "Archive mailbox state",
          "fullType": "email.exchange.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.exchange.ObjectStateEnum"
        },
        "taskPendingId": {
          "canBeNull": true,
          "description": "Pending task for this archive mailbox",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.exchange.exchangeAccountDiagnosis": {
      "description": "Exchange Account Diagnosis",
      "id": "exchangeAccountDiagnosis",
      "namespace": "email.exchange",
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
        "connectiveOWA": {
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
    "email.exchange.exchangeAccountFullAccess": {
      "description": "Users having full access on this mailbox",
      "id": "exchangeAccountFullAccess",
      "namespace": "email.exchange",
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
    "email.exchange.exchangeAccountProtocol": {
      "description": "Get protocol status on that mailbox",
      "id": "exchangeAccountProtocol",
      "namespace": "email.exchange",
      "properties": {
        "IMAP": {
          "canBeNull": false,
          "description": "IMAP protocol enabled on that mailbox",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "POP": {
          "canBeNull": false,
          "description": "POP protocol enabled on that mailbox",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "activeSync": {
          "canBeNull": false,
          "description": "Mobile access enabled on that mailbox",
          "fullType": "boolean",
          "readOnly": false,
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
        "lastUpdate": {
          "canBeNull": true,
          "description": "Last update date",
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
        },
        "webMail": {
          "canBeNull": false,
          "description": "Web mail enabled on that mailbox",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "email.exchange.exchangeAccountSendAs": {
      "description": "Users authorized to send mails from this mailbox",
      "id": "exchangeAccountSendAs",
      "namespace": "email.exchange",
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
    "email.exchange.exchangeAccountSendOnBehalfTo": {
      "description": "Get users authorized to Send On Behalf To mails from this mailbox",
      "id": "exchangeAccountSendOnBehalfTo",
      "namespace": "email.exchange",
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
    "email.exchange.exchangeCommercialVersionEnum": {
      "description": "Exchange commercial version",
      "enum": [
        "2010",
        "2013",
        "2016",
        "2019"
      ],
      "enumType": "string",
      "id": "exchangeCommercialVersionEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.exchangeDistributionGroupManager": {
      "description": "Mailing list managers",
      "id": "exchangeDistributionGroupManager",
      "namespace": "email.exchange",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "managerAccountId": {
          "canBeNull": false,
          "description": "Manager account id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "managerEmailAddress": {
          "canBeNull": false,
          "description": "Member account primaryEmailAddress",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
    "email.exchange.exchangeDistributionGroupMember": {
      "description": "Mailing list members",
      "id": "exchangeDistributionGroupMember",
      "namespace": "email.exchange",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "memberAccountId": {
          "canBeNull": true,
          "description": "Member account id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "memberContactId": {
          "canBeNull": true,
          "description": "Member account id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "memberEmailAddress": {
          "canBeNull": false,
          "description": "Member account primaryEmailAddress",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
    "email.exchange.exchangeDistributionGroupSendAs": {
      "description": "Get users authorized to Send On Behalf To mails from this mailbox",
      "id": "exchangeDistributionGroupSendAs",
      "namespace": "email.exchange",
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
    "email.exchange.exchangeDistributionGroupSendOnBehalfTo": {
      "description": "Get users authorized to Send On Behalf To mails from this mailing list",
      "id": "exchangeDistributionGroupSendOnBehalfTo",
      "namespace": "email.exchange",
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
    "email.exchange.exchangeExternalContact": {
      "description": "External contact for this exchange service",
      "id": "exchangeExternalContact",
      "namespace": "email.exchange",
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
        "organization2010": {
          "canBeNull": true,
          "description": "If specified, indicates to which organization this external contact belongs (Exchange 2010 only)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Contact state",
          "fullType": "email.exchange.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.exchange.ObjectStateEnum"
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
    "email.exchange.exchangeMailingListAlias": {
      "description": "Get aliases on this mailingList",
      "id": "exchangeMailingListAlias",
      "namespace": "email.exchange",
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
    "email.exchange.exchangePublicFolderPermission": {
      "description": "Exchange organization public folder permission",
      "id": "exchangePublicFolderPermission",
      "namespace": "email.exchange",
      "properties": {
        "accessRights": {
          "canBeNull": false,
          "description": "Access right set for the account",
          "fullType": "email.exchange.PublicFolderRightTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "email.exchange.PublicFolderRightTypeEnum"
        },
        "allowedAccountId": {
          "canBeNull": false,
          "description": "Account id",
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
        "state": {
          "canBeNull": false,
          "fullType": "email.exchange.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.exchange.ObjectStateEnum"
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
    "email.exchange.exchangeResourceAccountDelegate": {
      "description": "Resource accounts delegates",
      "id": "exchangeResourceAccountDelegate",
      "namespace": "email.exchange",
      "properties": {
        "allowedAccountId": {
          "canBeNull": false,
          "description": "delegate's account id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "creationDate": {
          "canBeNull": true,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "delegateEmailAddress": {
          "canBeNull": false,
          "description": "Delegate account primaryEmailAddress",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
    "email.exchange.exchangeServiceActiveSyncNotification": {
      "description": "Get email addresses subscribed to ActiveSync quarantine notifications",
      "id": "exchangeServiceActiveSyncNotification",
      "namespace": "email.exchange",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "notifiedAccountId": {
          "canBeNull": false,
          "description": "Notified Account Id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "primaryEmailAddress": {
          "canBeNull": false,
          "description": "Primary email address for notified account",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Email state",
          "fullType": "email.exchange.activeSyncNotificationStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.exchange.activeSyncNotificationStateEnum"
        }
      }
    },
    "email.exchange.exchangeServiceAuthorizedIp": {
      "description": "Get authorized IPs for POP, IMAP and webmail",
      "id": "exchangeServiceAuthorizedIp",
      "namespace": "email.exchange",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "ip": {
          "canBeNull": false,
          "description": "Authorized IP",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "status": {
          "canBeNull": false,
          "description": "Authorized IP status",
          "fullType": "email.exchange.authorizedIpStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "email.exchange.authorizedIpStatusEnum"
        }
      }
    },
    "email.exchange.exchangeServiceDevice": {
      "description": "Get the list of your ActiveSync devices registered on this Exchange service",
      "id": "exchangeServiceDevice",
      "namespace": "email.exchange",
      "properties": {
        "IMEI": {
          "canBeNull": false,
          "description": "International Mobile Equipment Identity",
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
        "deviceId": {
          "canBeNull": false,
          "description": "Device Id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "deviceModel": {
          "canBeNull": false,
          "description": "Model device",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "deviceState": {
          "canBeNull": false,
          "description": "Device State",
          "fullType": "email.exchange.DeviceActiveSyncStateEnum",
          "readOnly": false,
          "required": false,
          "type": "email.exchange.DeviceActiveSyncStateEnum"
        },
        "guid": {
          "canBeNull": false,
          "description": "user guid",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "identity": {
          "canBeNull": false,
          "description": "Exchange identity",
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
    "email.exchange.exchangeServiceProtocol": {
      "description": "Protocol access policy for this Exchange service",
      "id": "exchangeServiceProtocol",
      "namespace": "email.exchange",
      "properties": {
        "IMAP": {
          "canBeNull": false,
          "description": "IMAP protocol enabled on this Exchange service",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "POP": {
          "canBeNull": false,
          "description": "POP protocol enabled on this Exchange service",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "activeSync": {
          "canBeNull": false,
          "description": "ActiveSync protocol enabled on this Exchange service",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "activeSyncPolicy": {
          "canBeNull": false,
          "description": "ActiveSync policy to apply at device's first connection",
          "fullType": "email.exchange.ActiveSyncPolicyEnum",
          "readOnly": false,
          "required": false,
          "type": "email.exchange.ActiveSyncPolicyEnum"
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
          "canBeNull": true,
          "description": "Last update date",
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
        },
        "webMail": {
          "canBeNull": false,
          "description": "Web mail protocol enabled on this Exchange service",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "email.exchange.exchangeSharedAccountFullAccess": {
      "description": "Users having full access on this shared mailbox",
      "id": "exchangeSharedAccountFullAccess",
      "namespace": "email.exchange",
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
    "email.exchange.exchangeSharedAccountSendAs": {
      "description": "Users authorized to send mails from this shared mailbox",
      "id": "exchangeSharedAccountSendAs",
      "namespace": "email.exchange",
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
    "email.exchange.exchangeSharedAccountSendOnBehalfTo": {
      "description": "Get users authorized to Send On Behalf To mails from this shared mailbox",
      "id": "exchangeSharedAccountSendOnBehalfTo",
      "namespace": "email.exchange",
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
    "email.exchange.mailingList": {
      "description": "Mailing list",
      "id": "mailingList",
      "namespace": "email.exchange",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "departRestriction": {
          "canBeNull": false,
          "description": "Depart restriction policy",
          "fullType": "email.exchange.MailingListDepartRestrictionEnum",
          "readOnly": false,
          "required": false,
          "type": "email.exchange.MailingListDepartRestrictionEnum"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Name displayed in Global Access List",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "hiddenFromGAL": {
          "canBeNull": false,
          "description": "If true mailing list is hiddend in Global Address List",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "joinRestriction": {
          "canBeNull": false,
          "description": "Join restriction policy",
          "fullType": "email.exchange.MailingListJoinRestrictionEnum",
          "readOnly": false,
          "required": false,
          "type": "email.exchange.MailingListJoinRestrictionEnum"
        },
        "lastUpdateDate": {
          "canBeNull": true,
          "description": "Update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "mailingListAddress": {
          "canBeNull": false,
          "description": "The mailing list address",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "maxReceiveSize": {
          "canBeNull": true,
          "description": "Maximum receive email size in MB",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "maxSendSize": {
          "canBeNull": true,
          "description": "Maximum send email size in MB",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "senderAuthentification": {
          "canBeNull": false,
          "description": "If true sender has to authenticate",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
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
          "description": "Mailing list state",
          "fullType": "email.exchange.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.exchange.ObjectStateEnum"
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
    "email.exchange.publicFolder": {
      "description": "Exchange organization public folder",
      "id": "publicFolder",
      "namespace": "email.exchange",
      "properties": {
        "anonymousPermission": {
          "canBeNull": false,
          "description": "Access right for the guest users",
          "fullType": "email.exchange.PublicFolderRightTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "email.exchange.PublicFolderRightTypeEnum"
        },
        "creationDate": {
          "canBeNull": true,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "defaultPermission": {
          "canBeNull": false,
          "description": "Default access right",
          "fullType": "email.exchange.PublicFolderRightTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "email.exchange.PublicFolderRightTypeEnum"
        },
        "hasSubFolders": {
          "canBeNull": true,
          "description": "If true, this public folder has subfolders",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "itemCount": {
          "canBeNull": true,
          "description": "Number of items in public folder",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastAccessTime": {
          "canBeNull": true,
          "description": "Time for which public folder was accessed for the last time",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastModificationTime": {
          "canBeNull": true,
          "description": "Time for which public folder was modified for the last time ",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastUserAccessTime": {
          "canBeNull": true,
          "description": "Time for which public folder was accessed for the last time by the user",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastUserModificationTime": {
          "canBeNull": true,
          "description": "Time for which public folder was modified for the last time by the user",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "path": {
          "canBeNull": false,
          "description": "Path for public folder",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quota": {
          "canBeNull": false,
          "description": "Quota for public folder in MB",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "fullType": "email.exchange.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.exchange.ObjectStateEnum"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "task pending id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "totalItemSize": {
          "canBeNull": true,
          "description": "Sum of all items in public folder in MB",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "Type for public folder",
          "fullType": "email.exchange.PublicFolderTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "email.exchange.PublicFolderTypeEnum"
        }
      }
    },
    "email.exchange.renewPeriodEnum": {
      "description": "Renew period",
      "enum": [
        "monthly",
        "yearly"
      ],
      "enumType": "string",
      "id": "renewPeriodEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.resourceAccount": {
      "description": "Exchange resource account",
      "id": "resourceAccount",
      "namespace": "email.exchange",
      "properties": {
        "addOrganizerToSubject": {
          "canBeNull": false,
          "description": "meeting organizer's name is used as the subject of the meeting request",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "allowConflict": {
          "canBeNull": false,
          "description": "resource can be scheduled by more than one person during the same time period",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "bookingWindow": {
          "canBeNull": false,
          "description": "maximum number of days in advance that the resource can be reserved",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "capacity": {
          "canBeNull": false,
          "description": "number of the same equipment or capacity of a room",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "creationDate": {
          "canBeNull": true,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "deleteComments": {
          "canBeNull": false,
          "description": "remove any text in the message body of incoming meeting requests on resourceAccount",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "deleteSubject": {
          "canBeNull": false,
          "description": "remove email subject of incoming meeting requests on resourceAccount",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "displayName": {
          "canBeNull": false,
          "description": "name of resource",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "location": {
          "canBeNull": false,
          "description": "resource location name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "maximumDuration": {
          "canBeNull": false,
          "description": "maximum duration in minutes for meeting requests",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "resourceEmailAddress": {
          "canBeNull": false,
          "description": "resource as email",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "showMeetingDetails": {
          "canBeNull": false,
          "description": "granted right on a calendar of that resourceAccount",
          "fullType": "email.exchange.ShowMeetingDetailsEnum",
          "readOnly": false,
          "required": false,
          "type": "email.exchange.ShowMeetingDetailsEnum"
        },
        "state": {
          "canBeNull": false,
          "description": "account state",
          "fullType": "email.exchange.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.exchange.ObjectStateEnum"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "task pending id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "resource type",
          "fullType": "email.exchange.ResourceTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "email.exchange.ResourceTypeEnum"
        }
      }
    },
    "email.exchange.sharedAccount": {
      "description": "Exchange shared mailbox",
      "id": "sharedAccount",
      "namespace": "email.exchange",
      "properties": {
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
          "description": "Shared mailbox usage",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Shared account display name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "firstName": {
          "canBeNull": true,
          "description": "Shared account first name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "hiddenFromGAL": {
          "canBeNull": false,
          "description": "Hide shared account in Global Address List",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "id": {
          "canBeNull": false,
          "description": "Shared account id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "initials": {
          "canBeNull": true,
          "description": "Shared account initials",
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
          "description": "Shared account last name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "mailingFilter": {
          "canBeNull": true,
          "description": "Enable or disable anti-virus and anti-spam",
          "fullType": "email.exchange.MailingFilterEnum[]",
          "readOnly": false,
          "required": false,
          "type": "email.exchange.MailingFilterEnum[]"
        },
        "quota": {
          "canBeNull": false,
          "description": "Shared account maximum size",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "sharedEmailAddress": {
          "canBeNull": false,
          "description": "Default email for this shared mailbox",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
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
          "description": "Shared account state",
          "fullType": "email.exchange.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.exchange.ObjectStateEnum"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Pending task for this shared account",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "email.exchange.spamAndVirusConfiguration": {
      "description": "Spam and Antyvirus configuration",
      "id": "spamAndVirusConfiguration",
      "namespace": "email.exchange",
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
  "resourcePath": "/email/exchange"
}