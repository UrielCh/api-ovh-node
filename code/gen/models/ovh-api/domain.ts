import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/domain.json

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
          "description": "Get the list of managed domain names",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getDomains",
          "parameters": [
            {
              "dataType": "map[string][]iam.resource.TagFilter",
              "description": "Filter resources on IAM tags",
              "name": "iamTags",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter domain names by owner ID",
              "fullType": "string",
              "name": "whoisOwner",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/domain"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get domain name information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getDomain",
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.DomainServiceWithIAM"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Edit domain name properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "domain:apiovh:edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "editDomain",
          "parameters": [
            {
              "dataType": "domain.DomainService",
              "description": "Request Body",
              "fullType": "domain.DomainService",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.DomainService"
        }
      ],
      "path": "/domain/{serviceName}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return authInfo code if the domain is unlocked",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:authInfo/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "password"
        }
      ],
      "path": "/domain/{serviceName}/authInfo"
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
          "iamActions": [
            {
              "name": "domain:apiovh:changeContact",
              "required": true
            }
          ],
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/domain/{serviceName}/changeContact"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve obfuscated emails configuration",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:configuration/obfuscatedEmail/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.configurations.ObfuscatedEmail[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Save a new obfuscated emails configuration",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "domain:apiovh:configuration/obfuscatedEmail/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.configurations.ObfuscatedEmailUpdatePayload",
              "description": "Request Body",
              "fullType": "domain.configurations.ObfuscatedEmailUpdatePayload",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.configurations.ObfuscatedEmail[]"
        }
      ],
      "path": "/domain/{serviceName}/configurations/obfuscatedEmails"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Refresh an obfuscated emails configuration with new values",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "domain:apiovh:configuration/obfuscatedEmail/refresh",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.configurations.ObfuscatedEmailRefreshPayload",
              "description": "Request Body",
              "fullType": "domain.configurations.ObfuscatedEmailRefreshPayload",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/{serviceName}/configurations/obfuscatedEmails/refresh"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve optin configuration",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:configuration/optin/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.configurations.Optin[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Save a new optin configuration",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "domain:apiovh:configuration/optin/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.configurations.OptinUpdatePayload",
              "description": "Request Body",
              "fullType": "domain.configurations.OptinUpdatePayload",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.configurations.Optin[]"
        }
      ],
      "path": "/domain/{serviceName}/configurations/optin"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of domain's DS Records",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:dsRecord/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dnssec.KeyFlagEnum",
              "description": "Filter the value of flags property (=)",
              "fullType": "dnssec.KeyFlagEnum",
              "name": "flags",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dnssec.KeyStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "dnssec.KeyStatusEnum",
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
          "description": "Update DS records",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "domain:apiovh:dsRecord/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dnssec.UpdatePayload",
              "description": "Request Body",
              "fullType": "dnssec.UpdatePayload",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task"
        }
      ],
      "path": "/domain/{serviceName}/dsRecord"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get details on this DS Record",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:dsRecord/get",
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
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dnssec.Key"
        }
      ],
      "path": "/domain/{serviceName}/dsRecord/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of glue records",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:glueRecord/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of host property",
              "fullType": "string",
              "name": "host",
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
          "description": "Create a glue record",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "domain:apiovh:glueRecord/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.glueRecord.CreatePayload",
              "description": "Request Body",
              "fullType": "domain.glueRecord.CreatePayload",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task"
        }
      ],
      "path": "/domain/{serviceName}/glueRecord"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the glue record",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "domain:apiovh:glueRecord/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Host",
              "fullType": "string",
              "name": "host",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this glue record",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:glueRecord/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Host",
              "fullType": "string",
              "name": "host",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.glueRecord.GlueRecord"
        }
      ],
      "path": "/domain/{serviceName}/glueRecord/{host}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update the glue record",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "domain:apiovh:glueRecord/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.glueRecord.GlueRecord",
              "description": "Request Body",
              "fullType": "domain.glueRecord.GlueRecord",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Host",
              "fullType": "string",
              "name": "host",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task"
        }
      ],
      "path": "/domain/{serviceName}/glueRecord/{host}/update"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of current name servers",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:nameServer/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
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
          "description": "Add new name server",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "domain:apiovh:nameServer/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.nameServer.CreatePayload",
              "description": "Request Body",
              "fullType": "domain.nameServer.CreatePayload",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task"
        }
      ],
      "path": "/domain/{serviceName}/nameServer"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a name server",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "domain:apiovh:nameServer/delete",
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
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this name server configuration",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:nameServer/get",
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
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.nameServer.FullNameServer"
        }
      ],
      "path": "/domain/{serviceName}/nameServer/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get name server status",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:nameServer/status/get",
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
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.nameServer.NameServerStatus"
        }
      ],
      "path": "/domain/{serviceName}/nameServer/{id}/status"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update DNS servers",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "domain:apiovh:nameServer/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.nameServer.UpdatePayload",
              "description": "Request Body",
              "fullType": "domain.nameServer.UpdatePayload",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task"
        }
      ],
      "path": "/domain/{serviceName}/nameServers/update"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List domain options",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:option/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.DomainOptionEnum[]"
        }
      ],
      "path": "/domain/{serviceName}/option"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove a given option",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "domain:apiovh:option/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.DomainOptionEnum",
              "description": "Option",
              "fullType": "domain.DomainOptionEnum",
              "name": "option",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
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
          "description": "Get details on this domain option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:option/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.DomainOptionEnum",
              "description": "Option",
              "fullType": "domain.DomainOptionEnum",
              "name": "option",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Option"
        }
      ],
      "path": "/domain/{serviceName}/option/{option}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve data about the options associated to a domain",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:options/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.ServiceOptions"
        }
      ],
      "path": "/domain/{serviceName}/options"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Approve Outgoing Transfer for a domain",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "domain:apiovh:outgoingTransfer/approve",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.outgoingTransfer.Approve",
              "description": "Request Body",
              "fullType": "domain.outgoingTransfer.Approve",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/{serviceName}/outgoingTransfer/approve"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve emails obfuscation rule",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:rule/emailsObfuscation/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.configurations.ContactTypeEnum[]"
        }
      ],
      "path": "/domain/{serviceName}/rules/emailsObfuscation"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve optin rule",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:rule/optin/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.rules.Optin[]"
        }
      ],
      "path": "/domain/{serviceName}/rules/optin"
    },
    {
      "description": "Details about a Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get service information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:serviceInfos/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
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
          "description": "Update service information",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "domain:apiovh:serviceInfos/edit",
              "required": true
            }
          ],
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/{serviceName}/serviceInfos"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all domain tasks",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:task/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of function property (like)",
              "fullType": "string",
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
          "responseType": "long[]"
        }
      ],
      "path": "/domain/{serviceName}/task"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get details about a domain task",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:task/get",
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
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task"
        }
      ],
      "path": "/domain/{serviceName}/task/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Accelerate the task",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "domain:apiovh:task/accelerate",
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
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/{serviceName}/task/{id}/accelerate"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cancel the task",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "domain:apiovh:task/cancel",
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
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/{serviceName}/task/{id}/cancel"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Relaunch the task",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "domain:apiovh:task/relaunch",
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
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/{serviceName}/task/{id}/relaunch"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Schedule an outgoing transfer task for this domain (.uk only)",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "domain:apiovh:outgoingTransfer/uk/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.UkRegistrar",
              "description": "Request Body",
              "fullType": "domain.UkRegistrar",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task"
        }
      ],
      "path": "/domain/{serviceName}/ukOutgoingTransfer"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return the list of all .uk registrars",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "domain:apiovh:ukRegistrar/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.UkRegistrar[]"
        }
      ],
      "path": "/domain/{serviceName}/ukRegistrars"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get configuration rule applied for a domain in a given action",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "domain.ActionEnum",
              "description": "Depending on the action, the applied rule will change (transfer vs create)",
              "fullType": "domain.ActionEnum",
              "name": "action",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The domain to get the configuration rule for",
              "fullType": "string",
              "name": "domain",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "domain.configuration.rules.Rule"
        }
      ],
      "path": "/domain/configurationRule"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Validate a rule data for a specified domain",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:domain/configurationRule/check",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.configuration.rules.RuleData",
              "description": "Request Body",
              "fullType": "domain.configuration.rules.RuleData",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "domain.ActionEnum",
              "description": "Depending on the action, the applied rule will change (transfer vs create)",
              "fullType": "domain.ActionEnum",
              "name": "action",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The domain to check the rule data for",
              "fullType": "string",
              "name": "domain",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/configurationRule/check"
    },
    {
      "description": "Operations on contacts",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all contacts",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:domain/contact/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getContacts",
          "parameters": [],
          "responseType": "domain.Contact[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a contact",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:domain/contact/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "createContact",
          "parameters": [
            {
              "dataType": "domain.Contact",
              "description": "Request Body",
              "fullType": "domain.Contact",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "domain.Contact"
        }
      ],
      "path": "/domain/contact"
    },
    {
      "description": "Operations on contacts",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get details about a contact",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:domain/contact/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getContact",
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
          "responseType": "domain.Contact"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update a contact",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "account:apiovh:domain/contact/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "updateContact",
          "parameters": [
            {
              "dataType": "domain.Contact",
              "description": "Request Body",
              "fullType": "domain.Contact",
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
          "responseType": "domain.Contact"
        }
      ],
      "path": "/domain/contact/{contactId}"
    },
    {
      "description": "Retrieve claim notices",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve claim notices associated to a domain",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "domain.data.claimNotice.ClaimNotice"
        }
      ],
      "path": "/domain/data/claimNotice"
    },
    {
      "description": "List all the extensions for a specific country",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2021-08-31T00:00:00Z",
            "deprecatedDate": "2021-02-01T00:00:00Z",
            "description": "Deprecated, will be removed",
            "replacement": "/domain/extensions",
            "value": "DEPRECATED"
          },
          "description": "List all the extensions for a specific country",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Ovh subsidiary targeted",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "country",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/domain/data/extension"
    },
    {
      "description": "Operations on Signed Marked Definition (SMD) files",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all SMD files",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:domain/data/smd/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "domain.data.smd.Smd[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a SMD file",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:domain/data/smd/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.data.smd.SmdBody",
              "description": "Request Body",
              "fullType": "domain.data.smd.SmdBody",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "domain.data.smd.Smd"
        }
      ],
      "path": "/domain/data/smd"
    },
    {
      "description": "Operations on Signed Marked Definition (SMD) files",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a SMD file",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "account:apiovh:domain/data/smd/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Smd ID",
              "fullType": "uuid",
              "name": "smdId",
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
          "description": "Get details about a SMD file",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:domain/data/smd/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Smd ID",
              "fullType": "uuid",
              "name": "smdId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.data.smd.Smd"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update a SMD file",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "account:apiovh:domain/data/smd/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.data.smd.SmdBody",
              "description": "Request Body",
              "fullType": "domain.data.smd.SmdBody",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Smd ID",
              "fullType": "uuid",
              "name": "smdId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.data.smd.Smd"
        }
      ],
      "path": "/domain/data/smd/{smdId}"
    },
    {
      "description": "Operations on domain name extensions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all extensions",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:domain/extension/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter only extensions related to this list of geolocalization places (comma separated). Default to empty.",
              "fullType": "string",
              "name": "geolocalizations",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "domain.extensions.OrderByTypeEnum",
              "description": "Order results by name (alphabetical) or trending importance (trending). Default to alphabetical.",
              "fullType": "domain.extensions.OrderByTypeEnum",
              "name": "orderBy",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "OVHcloud subsidiary targeted. Useful only when orderBy is equal to trending. Default to FR.",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter only extensions related to this list of thematics (comma separated). Default to empty.",
              "fullType": "string",
              "name": "thematics",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/domain/extensions"
    },
    {
      "description": "Operations on domain name extensions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get an extension",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:domain/extension/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.extensions.Extension"
        }
      ],
      "path": "/domain/extensions/{name}"
    },
    {
      "description": "Retrieve registry configurations for an extension",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve registry configuration for an extension",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:domain/extension/registryConfiguration/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.extensions.registryConfigurations.RegistryConfigurations"
        }
      ],
      "path": "/domain/extensions/{name}/registryConfigurations"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List extensions, grouped by category types (like 'thematic', 'geolocalization') and category names (like 'europe')",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:domain/extension/byCategory/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.extensions.CategoryTypeEnum[]",
              "description": "Filter by category types",
              "fullType": "domain.extensions.CategoryTypeEnum[]",
              "name": "categoryType",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "domain.extensions.ExtensionsByCategory"
        }
      ],
      "path": "/domain/extensions/byCategory"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List highlighted extensions, ordered by decreased importance",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:domain/extension/highlighted/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "OVHcloud subsidiary targeted. Highlighted extensions are different from one subsidiary to another. Default to FR.",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/domain/extensions/highlighted"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List extensions with their pricing attributes",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:domain/extension/get",
              "required": true
            }
          ],
          "longDescription": "List extensions with their pricing attributes. It especially documents whether an extension has been implemented recently or whether the price has dropped.",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "OVHcloud subsidiary targeted. Attributes may be different from one subsidiary to another. Default to FR.",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "domain.extensions.ExtensionsPricingAttributes[]"
        }
      ],
      "path": "/domain/extensions/pricingAttributes"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List dnsZone services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getZones",
          "parameters": [
            {
              "dataType": "map[string][]iam.resource.TagFilter",
              "description": "Filter resources on IAM tags",
              "name": "iamTags",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/domain/zone"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get a dnsZone service",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getZone",
          "parameters": [
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.ZoneWithIAM"
        }
      ],
      "path": "/domain/zone/{zoneName}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get zone capabilities",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:capabilities/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Capabilities"
        }
      ],
      "path": "/domain/zone/{zoneName}/capabilities"
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
          "iamActions": [
            {
              "name": "dnsZone:apiovh:changeContact",
              "required": true
            }
          ],
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
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/domain/zone/{zoneName}/changeContact"
    },
    {
      "description": "Confirm service termination",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Confirm service termination",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:confirmTermination",
              "required": true
            }
          ],
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
              "dataType": "service.TerminationFutureUseEnum",
              "description": "What next after your termination request",
              "fullType": "service.TerminationFutureUseEnum",
              "name": "futureUse",
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
              "description": "The termination token sent by email to the admin contact",
              "fullType": "string",
              "name": "token",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/domain/zone/{zoneName}/confirmTermination"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable DNSSEC",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:dnssec/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "disableDNSSEC",
          "parameters": [
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
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
          "description": "Get a zone DNSSEC status",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:dnssec/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getDNSSECStatus",
          "parameters": [
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Dnssec"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Enable DNSSEC",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:dnssec/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "enableDNSSEC",
          "parameters": [
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/dnssec"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List login",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:dynHost/login/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getDynHostLogins",
          "parameters": [
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of login property (ilike)",
              "fullType": "string",
              "name": "login",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of subDomain property (ilike)",
              "fullType": "string",
              "name": "subDomain",
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
          "description": "Create a new login",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:dynHost/login/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "createDynDnsLogin",
          "parameters": [
            {
              "dataType": "domain.zone.dynHost.LoginCreate",
              "description": "Request Body",
              "fullType": "domain.zone.dynHost.LoginCreate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.dynHost.Login"
        }
      ],
      "path": "/domain/zone/{zoneName}/dynHost/login"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete login object",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:dynHost/login/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "deleteDynHostLogin",
          "parameters": [
            {
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
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
          "description": "Get login object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:dynHost/login/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getDynHostLogin",
          "parameters": [
            {
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.dynHost.Login"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter login object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:dynHost/login/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "editDynDnsLogin",
          "parameters": [
            {
              "dataType": "domain.zone.dynHost.Login",
              "description": "Request Body",
              "fullType": "domain.zone.dynHost.Login",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/dynHost/login/{login}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change password of the DynHost login",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:dynHost/login/changePassword",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "changePasswordDynDnsLogin",
          "parameters": [
            {
              "dataType": "domain.zone.dynHost.LoginChangePassword",
              "description": "Request Body",
              "fullType": "domain.zone.dynHost.LoginChangePassword",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/dynHost/login/{login}/changePassword"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List record",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:dynHost/record/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getDynHostRecords",
          "parameters": [
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of subDomain property (ilike)",
              "fullType": "string",
              "name": "subDomain",
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
          "description": "Create a new record",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:dynHost/record/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "createDynDnsRecord",
          "parameters": [
            {
              "dataType": "domain.zone.dynHost.Record",
              "description": "Request Body",
              "fullType": "domain.zone.dynHost.Record",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.dynHost.Record"
        }
      ],
      "path": "/domain/zone/{zoneName}/dynHost/record"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete record object",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:dynHost/record/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "deleteDynHostRecord",
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
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
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
          "description": "Get record object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:dynHost/record/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getDynHostRecord",
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
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.dynHost.Record"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter record object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:dynHost/record/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "editDynDnsRecord",
          "parameters": [
            {
              "dataType": "domain.zone.dynHost.Record",
              "description": "Request Body",
              "fullType": "domain.zone.dynHost.Record",
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
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/dynHost/record/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Export DNS zone",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:export/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/domain/zone/{zoneName}/export"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List zone histories",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:history/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "datetime",
              "description": "Filter using the value of creationDate property (>=)",
              "fullType": "datetime",
              "name": "creationDate.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter using the value of creationDate property (<=)",
              "fullType": "datetime",
              "name": "creationDate.to",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "datetime[]"
        }
      ],
      "path": "/domain/zone/{zoneName}/history"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get a zone history",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:history/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Creation date",
              "fullType": "datetime",
              "name": "creationDate",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.ZoneRestorePoint"
        }
      ],
      "path": "/domain/zone/{zoneName}/history/{creationDate}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Restore a backup point",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:history/restore",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Creation date",
              "fullType": "datetime",
              "name": "creationDate",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Task"
        }
      ],
      "path": "/domain/zone/{zoneName}/history/{creationDate}/restore"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Import a DNS zone from a zone file",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:import",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.zone.Import",
              "description": "Request Body",
              "fullType": "domain.zone.Import",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Task"
        }
      ],
      "path": "/domain/zone/{zoneName}/import"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List zone options",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:option/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/domain/zone/{zoneName}/option"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get zone option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:option/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Option"
        }
      ],
      "path": "/domain/zone/{zoneName}/option/{name}"
    },
    {
      "description": "serviceInfos operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:option/serviceInfos/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The option name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:option/serviceInfos/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "service.RenewType",
              "description": "Renew type",
              "fullType": "service.RenewType",
              "name": "renew",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The option name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/option/{name}/serviceInfos"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List record",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:record/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getRecords",
          "parameters": [
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "domain.zone.RecordTypeEnum",
              "description": "Filter the value of fieldType property (like)",
              "fullType": "domain.zone.RecordTypeEnum",
              "name": "fieldType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of subDomain property (ilike)",
              "fullType": "string",
              "name": "subDomain",
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
          "description": "Create a new record (Don't forget to refresh the zone)",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:record/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "createRecord",
          "parameters": [
            {
              "dataType": "domain.zone.RecordCreate",
              "description": "Request Body",
              "fullType": "domain.zone.RecordCreate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Record"
        }
      ],
      "path": "/domain/zone/{zoneName}/record"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete record object (Don't forget to refresh the zone)",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:record/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "deleteRecord",
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
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
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
          "description": "Get record object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:record/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getRecord",
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
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Record"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter record object properties (Don't forget to refresh the zone)",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:record/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "editRecord",
          "parameters": [
            {
              "dataType": "domain.zone.RecordUpdate",
              "description": "Request Body",
              "fullType": "domain.zone.RecordUpdate",
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
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/record/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List redirections",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:redirection/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getRedirections",
          "parameters": [
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of subDomain property",
              "fullType": "string",
              "name": "subDomain",
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
          "description": "Create a new redirection (Don't forget to refresh the zone)",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:redirection/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "createRedirection",
          "parameters": [
            {
              "dataType": "domain.zone.RedirectionCreate",
              "description": "Request Body",
              "fullType": "domain.zone.RedirectionCreate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Redirection"
        }
      ],
      "path": "/domain/zone/{zoneName}/redirection"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete redirection object (Don't forget to refresh the zone)",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:redirection/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "deleteRedirection",
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
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
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
          "description": "Get redirection object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:redirection/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getRedirection",
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
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Redirection"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter redirection object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:redirection/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "editRedirection",
          "parameters": [
            {
              "dataType": "domain.zone.RedirectionUpdate",
              "description": "Request Body",
              "fullType": "domain.zone.RedirectionUpdate",
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
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/redirection/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Refresh a DNS zone",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:refresh",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "refreshZone",
          "parameters": [
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/refresh"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reset a DNS zone",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:reset",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.zone.Reset",
              "description": "Request Body",
              "fullType": "domain.zone.Reset",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/reset"
    },
    {
      "description": "Details about a Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get service information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:serviceInfos/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
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
          "description": "Update service information",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:serviceInfos/edit",
              "required": true
            }
          ],
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
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/serviceInfos"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get zone SOA",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:soa/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Soa"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update zone SOA",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:soa/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.zone.Soa",
              "description": "Request Body",
              "fullType": "domain.zone.Soa",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/soa"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get zone status",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:status/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Status"
        }
      ],
      "path": "/domain/zone/{zoneName}/status"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List zone tasks",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:task/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "domain.TaskFunctionEnum",
              "description": "",
              "fullType": "domain.TaskFunctionEnum",
              "name": "function",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "domain.TaskStatusEnum",
              "description": "",
              "fullType": "domain.TaskStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/domain/zone/{zoneName}/task"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get a zone task",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:task/get",
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
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Task"
        }
      ],
      "path": "/domain/zone/{zoneName}/task/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Accelerate a zone task",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:task/accelerate",
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
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/task/{id}/accelerate"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cancel a zone task",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:task/cancel",
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
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/task/{id}/cancel"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Restart a zone task",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:task/relaunch",
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
            },
            {
              "dataType": "string",
              "description": "Zone name",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/task/{id}/relaunch"
    },
    {
      "description": "Ask for the termination of your service. Admin contact of this service will receive a termination token in order to confirm its termination with /confirmTermination endpoint.",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Ask for the termination of your service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dnsZone:apiovh:terminate",
              "required": true
            }
          ],
          "longDescription": "Ask for the termination of your service. Admin contact of this service will receive a termination token by email in order to confirm its termination with /confirmTermination endpoint.",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/domain/zone/{zoneName}/terminate"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "dnssec.DnssecStatusEnum": {
      "description": "Dnssec Status",
      "enum": [
        "disableInProgress",
        "disabled",
        "enableInProgress",
        "enabled"
      ],
      "enumType": "string",
      "id": "DnssecStatusEnum",
      "namespace": "dnssec"
    },
    "dnssec.Key": {
      "description": "Domain's DNSSEC Key",
      "id": "Key",
      "namespace": "dnssec",
      "properties": {
        "algorithm": {
          "canBeNull": false,
          "description": "Algorithm number of the DNSSEC key",
          "fullType": "dnssec.KeyAlgorithmEnum",
          "readOnly": false,
          "required": false,
          "type": "dnssec.KeyAlgorithmEnum"
        },
        "flags": {
          "canBeNull": false,
          "description": "Flag of the DNSSEC key",
          "fullType": "dnssec.KeyFlagEnum",
          "readOnly": false,
          "required": false,
          "type": "dnssec.KeyFlagEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "ID of the DNSSEC key",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "publicKey": {
          "canBeNull": false,
          "description": "Public key",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Key status of the DNSSEC key",
          "fullType": "dnssec.KeyStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dnssec.KeyStatusEnum"
        },
        "tag": {
          "canBeNull": false,
          "description": "Tag of the DNSSEC key",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "dnssec.KeyAlgorithmEnum": {
      "description": "DNSSEC Algorithm\n5: RSASHA1\n7: RSASHA1-NSEC3-SHA1\n8: RSASHA256\n10: RSASHA512\n13: ECDSAP256SHA256\n14: ECDSAP384SHA384\n15: ED25519",
      "enum": [
        5,
        7,
        8,
        10,
        13,
        14,
        15
      ],
      "enumType": "long",
      "id": "KeyAlgorithmEnum",
      "namespace": "dnssec"
    },
    "dnssec.KeyFlagEnum": {
      "description": "DNSSEC Key Flag Type: 256=ZSK (Zone Signing Key), 257=KSK (Key Signing Key)",
      "enum": [
        256,
        257
      ],
      "enumType": "long",
      "id": "KeyFlagEnum",
      "namespace": "dnssec"
    },
    "dnssec.KeyStatusEnum": {
      "description": "Generated: The key has been created, but has not yet been used for anything.\nPublished: The DNSKEY record is published in the zone, but predecessors of the key may be held in caches.\nReady: The new key data has been published for long enough to guarantee that any previous versions of the DNSKEY RRset have expired from caches.\nActive: The key has started to be used to sign RRsets.\nRetired: A successor key has become active and this key is no longer being used to generate RRSIGs.\nRemoved: The key has been removed from the zone.\nRevoked: The key is published for a period with the \"revoke\" bit set as a way of notifying validating resolvers that have configured it as an trust anchor that it is about to be removed from the zone.",
      "enum": [
        "active",
        "generated",
        "published",
        "removed",
        "retired",
        "revoked"
      ],
      "enumType": "string",
      "id": "KeyStatusEnum",
      "namespace": "dnssec"
    },
    "dnssec.UpdatePayload": {
      "description": "Payload used to update the DNSSEC keys of a domain name",
      "id": "UpdatePayload",
      "namespace": "dnssec",
      "properties": {
        "keys": {
          "canBeNull": false,
          "description": "New Keys",
          "fullType": "dnssec.Key[]",
          "readOnly": false,
          "required": true,
          "type": "dnssec.Key[]"
        }
      }
    },
    "domain.ActionEnum": {
      "description": "An action to execute on a domain name",
      "enum": [
        "create",
        "trade",
        "transfer",
        "update"
      ],
      "enumType": "string",
      "id": "ActionEnum",
      "namespace": "domain"
    },
    "domain.ApproveTypeEnum": {
      "description": "Type of claim notice",
      "enum": [
        "accept",
        "reject"
      ],
      "enumType": "string",
      "id": "ApproveTypeEnum",
      "namespace": "domain"
    },
    "domain.Contact": {
      "description": "A contact contains the personal data of a user",
      "id": "Contact",
      "namespace": "domain",
      "properties": {
        "accreditationCountry": {
          "canBeNull": true,
          "description": "Country of lawyer accreditation",
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "accreditationId": {
          "canBeNull": true,
          "description": "Lawyer accreditation number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "accreditationOrganism": {
          "canBeNull": true,
          "description": "Organism of lawyer accreditation",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "accreditationYear": {
          "canBeNull": true,
          "description": "Year of lawyer accreditation",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "address": {
          "canBeNull": true,
          "description": "The address of the contact",
          "fullType": "domain.ContactAddress",
          "readOnly": false,
          "required": false,
          "type": "domain.ContactAddress"
        },
        "birthCity": {
          "canBeNull": true,
          "description": "City of birth",
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
          "description": "Company National Identification Number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "email": {
          "canBeNull": true,
          "description": "Email address",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "enterpriseId": {
          "canBeNull": true,
          "description": "Enterprise identifier",
          "fullType": "string",
          "readOnly": false,
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
        "firstName": {
          "canBeNull": true,
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
          "description": "Unique identifier",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "insee": {
          "canBeNull": true,
          "description": "INSEE identifier",
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
        "lastName": {
          "canBeNull": true,
          "description": "Last name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "legalForm": {
          "canBeNull": true,
          "fullType": "nichandle.LegalFormEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.LegalFormEnum"
        },
        "legalFormCategory": {
          "canBeNull": true,
          "description": "category of legalForm",
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
        "nationality": {
          "canBeNull": true,
          "description": "Nationality",
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "organisationAccountable": {
          "canBeNull": true,
          "description": "To whom is the organisation accountable",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationFunding": {
          "canBeNull": true,
          "description": "What is the source of funding",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationFundingOther": {
          "canBeNull": true,
          "description": "Explain the source of funding if organisationFunding is other",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationName": {
          "canBeNull": true,
          "description": "Name of organisation",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationRole": {
          "canBeNull": true,
          "description": "Role of your organisation",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationRoleOther": {
          "canBeNull": true,
          "description": "Explain the role of your organisation if organisationRole is other",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationStaffStatus": {
          "canBeNull": true,
          "description": "Status of the staff",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationStaffStatusOther": {
          "canBeNull": true,
          "description": "Explain the status of the staff if organisationStaffStatus is other",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationType": {
          "canBeNull": true,
          "description": "type of organisation",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationTypeOther": {
          "canBeNull": true,
          "description": "Explain the type of organisation if organisationType is other",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "phone": {
          "canBeNull": true,
          "description": "Phone number",
          "fullType": "phoneNumber",
          "readOnly": false,
          "required": false,
          "type": "phoneNumber"
        },
        "registrantDocumentType": {
          "canBeNull": true,
          "description": "Type of registrant document",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "registrantDocumentTypeOther": {
          "canBeNull": true,
          "description": "Explain the type of registrant document if registrantDocumentType is other",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "roleInOrganisation": {
          "canBeNull": true,
          "description": "The role in the organisation",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "trademarkId": {
          "canBeNull": true,
          "description": "Trademark related to the contact",
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
        },
        "website": {
          "canBeNull": true,
          "description": "Website",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.ContactAddress": {
      "description": "Missing description",
      "id": "ContactAddress",
      "namespace": "domain",
      "properties": {
        "city": {
          "canBeNull": true,
          "description": "City",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "country": {
          "canBeNull": true,
          "description": "Country",
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "line1": {
          "canBeNull": true,
          "description": "Address line 1",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "line2": {
          "canBeNull": true,
          "description": "Address line 2",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "line3": {
          "canBeNull": true,
          "description": "Address line 3",
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
          "description": "Province",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zip": {
          "canBeNull": true,
          "description": "Zip code",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.ContactSummary": {
      "description": "A contact summary contains the personal data of a user",
      "id": "ContactSummary",
      "namespace": "domain",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Unique contact identifier (contact data can be edited via /me/contact/<ID>)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.Data": {
      "description": "A domain data",
      "id": "Data",
      "namespace": "domain",
      "properties": {
        "audience": {
          "canBeNull": true,
          "description": "Domain name audience",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "authInfo": {
          "canBeNull": true,
          "description": "Auth Info",
          "fullType": "password",
          "readOnly": false,
          "required": false,
          "type": "password"
        },
        "isFor": {
          "canBeNull": true,
          "description": "Purposes of the domain",
          "fullType": "domain.IsForEnum[]",
          "readOnly": false,
          "required": false,
          "type": "domain.IsForEnum[]"
        },
        "otherPurpose": {
          "canBeNull": true,
          "description": "Domain name other purpose",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "reason": {
          "canBeNull": true,
          "description": "Reason of the purchase of this domain",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "represent": {
          "canBeNull": true,
          "description": "Represented company",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.DnssecStateEnum": {
      "description": "Domain dnssec state",
      "enum": [
        "disabled",
        "enabled",
        "not_supported"
      ],
      "enumType": "string",
      "id": "DnssecStateEnum",
      "namespace": "domain"
    },
    "domain.DnssecStatusEnum": {
      "description": "All DNSSEC statuses",
      "enum": [
        "disableInProgress",
        "disabled",
        "enableInProgress",
        "enabled"
      ],
      "enumType": "string",
      "id": "DnssecStatusEnum",
      "namespace": "domain"
    },
    "domain.Domain": {
      "description": "Domain name administration",
      "id": "Domain",
      "namespace": "domain",
      "properties": {
        "dnssecSupported": {
          "canBeNull": false,
          "description": "Is DNSSEC implemented for this domain name's tld",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "domain": {
          "canBeNull": false,
          "description": "Domain name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "glueRecordIpv6Supported": {
          "canBeNull": false,
          "description": "Does the registry support ipv6 glue record",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "glueRecordMultiIpSupported": {
          "canBeNull": false,
          "description": "Does the registry support multi ip glue record",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "hostSupported": {
          "canBeNull": false,
          "description": "Does the registry support hosts as independent entities",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "nameServerType": {
          "canBeNull": false,
          "description": "Name servers type",
          "fullType": "domain.DomainNsTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "domain.DomainNsTypeEnum"
        },
        "offer": {
          "canBeNull": false,
          "description": "Domain's offer",
          "fullType": "domain.OfferEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.OfferEnum"
        },
        "owoSupported": {
          "canBeNull": false,
          "description": "Is whois obfuscation supported by this domain name's registry",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "parentService": {
          "canBeNull": true,
          "description": "Parent service",
          "fullType": "domain.ParentService",
          "readOnly": true,
          "required": false,
          "type": "domain.ParentService"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of the domain",
          "fullType": "domain.DomainStateEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DomainStateEnum"
        },
        "suspensionState": {
          "canBeNull": false,
          "description": "Current suspension state of the domain",
          "fullType": "domain.DomainSuspensionStateEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DomainSuspensionStateEnum"
        },
        "transferLockStatus": {
          "canBeNull": false,
          "description": "Transfer lock status",
          "fullType": "domain.DomainLockStatusEnum",
          "readOnly": false,
          "required": false,
          "type": "domain.DomainLockStatusEnum"
        },
        "whoisOwner": {
          "canBeNull": false,
          "description": "Contact Owner (you can edit it via /me/contact/<ID>)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.DomainLockStatusEnum": {
      "description": "Domain lock status",
      "enum": [
        "locked",
        "locking",
        "unavailable",
        "unlocked",
        "unlocking"
      ],
      "enumType": "string",
      "id": "DomainLockStatusEnum",
      "namespace": "domain"
    },
    "domain.DomainNsTypeEnum": {
      "description": "DomainNS Type",
      "enum": [
        "external",
        "hosted"
      ],
      "enumType": "string",
      "id": "DomainNsTypeEnum",
      "namespace": "domain"
    },
    "domain.DomainOptionEnum": {
      "description": "All options a domain can have",
      "enum": [
        "dnsAnycast"
      ],
      "enumType": "string",
      "id": "DomainOptionEnum",
      "namespace": "domain"
    },
    "domain.DomainOptionStateEnum": {
      "description": "All states a domain Option can be in",
      "enum": [
        "released",
        "subscribed"
      ],
      "enumType": "string",
      "id": "DomainOptionStateEnum",
      "namespace": "domain"
    },
    "domain.DomainService": {
      "description": "General information about a domain name service",
      "id": "DomainService",
      "namespace": "domain",
      "properties": {
        "contactAdmin": {
          "canBeNull": false,
          "description": "Administrative contact data",
          "fullType": "domain.ContactSummary",
          "readOnly": true,
          "required": false,
          "type": "domain.ContactSummary"
        },
        "contactBilling": {
          "canBeNull": false,
          "description": "Billing contact data",
          "fullType": "domain.ContactSummary",
          "readOnly": true,
          "required": false,
          "type": "domain.ContactSummary"
        },
        "contactOwner": {
          "canBeNull": false,
          "description": "Owner (registrant) contact data",
          "fullType": "domain.ContactSummary",
          "readOnly": true,
          "required": false,
          "type": "domain.ContactSummary"
        },
        "contactTech": {
          "canBeNull": false,
          "description": "Technical contact data",
          "fullType": "domain.ContactSummary",
          "readOnly": true,
          "required": false,
          "type": "domain.ContactSummary"
        },
        "dnssecState": {
          "canBeNull": false,
          "description": "Current DNSSEC state of the domain name",
          "fullType": "domain.DnssecStateEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DnssecStateEnum"
        },
        "dnssecSupported": {
          "canBeNull": false,
          "description": "Whether DNSSEC is activated for this domain name",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "domain": {
          "canBeNull": false,
          "description": "Domain name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "expirationDate": {
          "canBeNull": false,
          "description": "Date when the domain name will expire, if not renewed",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "glueRecordIpv6Supported": {
          "canBeNull": false,
          "description": "Whether the registry supports IPv6 glue records",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "glueRecordMultiIpSupported": {
          "canBeNull": false,
          "description": "Whether the registry supports multi-ip glue records",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "hostSupported": {
          "canBeNull": false,
          "description": "Whether the registry supports hosts as independent entities",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "nameServerType": {
          "canBeNull": false,
          "description": "Name servers type",
          "fullType": "domain.nameServer.NameServerTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "domain.nameServer.NameServerTypeEnum"
        },
        "nameServers": {
          "canBeNull": false,
          "description": "Name servers list",
          "fullType": "domain.nameServer.NameServer[]",
          "readOnly": true,
          "required": false,
          "type": "domain.nameServer.NameServer[]"
        },
        "offer": {
          "canBeNull": false,
          "description": "Offer associated with the domain name",
          "fullType": "domain.OfferEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.OfferEnum"
        },
        "owoSupported": {
          "canBeNull": false,
          "description": "Whether Whois data obfuscation is supported for this domain name",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "parentService": {
          "canBeNull": true,
          "description": "Parent service",
          "fullType": "domain.ParentService",
          "readOnly": true,
          "required": false,
          "type": "domain.ParentService"
        },
        "renewalDate": {
          "canBeNull": false,
          "description": "Date when the domain name should be renewed (relevant if renewalState is automatic_renew)",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "renewalState": {
          "canBeNull": false,
          "description": "Current renewal state of the domain name",
          "fullType": "domain.RenewalStateEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.RenewalStateEnum"
        },
        "serviceId": {
          "canBeNull": false,
          "description": "Technical service identifier",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of the domain name",
          "fullType": "domain.DomainStateEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DomainStateEnum"
        },
        "suspensionState": {
          "canBeNull": false,
          "description": "Current suspension state of the domain name",
          "fullType": "domain.SuspensionStateEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.SuspensionStateEnum"
        },
        "transferLockStatus": {
          "canBeNull": false,
          "description": "Current transfer lock status of the domain name",
          "fullType": "domain.LockStatusEnum",
          "readOnly": false,
          "required": false,
          "type": "domain.LockStatusEnum"
        },
        "whoisOwner": {
          "canBeNull": false,
          "description": "Owner (registrant) contact ID (contact data can be edited via /me/contact/<ID>)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.DomainServiceWithIAM": {
      "description": "General information about a domain name service",
      "id": "DomainService",
      "namespace": "domain",
      "properties": {
        "contactAdmin": {
          "canBeNull": false,
          "description": "Administrative contact data",
          "fullType": "domain.ContactSummary",
          "readOnly": true,
          "required": false,
          "type": "domain.ContactSummary"
        },
        "contactBilling": {
          "canBeNull": false,
          "description": "Billing contact data",
          "fullType": "domain.ContactSummary",
          "readOnly": true,
          "required": false,
          "type": "domain.ContactSummary"
        },
        "contactOwner": {
          "canBeNull": false,
          "description": "Owner (registrant) contact data",
          "fullType": "domain.ContactSummary",
          "readOnly": true,
          "required": false,
          "type": "domain.ContactSummary"
        },
        "contactTech": {
          "canBeNull": false,
          "description": "Technical contact data",
          "fullType": "domain.ContactSummary",
          "readOnly": true,
          "required": false,
          "type": "domain.ContactSummary"
        },
        "dnssecState": {
          "canBeNull": false,
          "description": "Current DNSSEC state of the domain name",
          "fullType": "domain.DnssecStateEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DnssecStateEnum"
        },
        "dnssecSupported": {
          "canBeNull": false,
          "description": "Whether DNSSEC is activated for this domain name",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "domain": {
          "canBeNull": false,
          "description": "Domain name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "expirationDate": {
          "canBeNull": false,
          "description": "Date when the domain name will expire, if not renewed",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "glueRecordIpv6Supported": {
          "canBeNull": false,
          "description": "Whether the registry supports IPv6 glue records",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "glueRecordMultiIpSupported": {
          "canBeNull": false,
          "description": "Whether the registry supports multi-ip glue records",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "hostSupported": {
          "canBeNull": false,
          "description": "Whether the registry supports hosts as independent entities",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "nameServerType": {
          "canBeNull": false,
          "description": "Name servers type",
          "fullType": "domain.nameServer.NameServerTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "domain.nameServer.NameServerTypeEnum"
        },
        "nameServers": {
          "canBeNull": false,
          "description": "Name servers list",
          "fullType": "domain.nameServer.NameServer[]",
          "readOnly": true,
          "required": false,
          "type": "domain.nameServer.NameServer[]"
        },
        "offer": {
          "canBeNull": false,
          "description": "Offer associated with the domain name",
          "fullType": "domain.OfferEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.OfferEnum"
        },
        "owoSupported": {
          "canBeNull": false,
          "description": "Whether Whois data obfuscation is supported for this domain name",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "parentService": {
          "canBeNull": true,
          "description": "Parent service",
          "fullType": "domain.ParentService",
          "readOnly": true,
          "required": false,
          "type": "domain.ParentService"
        },
        "renewalDate": {
          "canBeNull": false,
          "description": "Date when the domain name should be renewed (relevant if renewalState is automatic_renew)",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "renewalState": {
          "canBeNull": false,
          "description": "Current renewal state of the domain name",
          "fullType": "domain.RenewalStateEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.RenewalStateEnum"
        },
        "serviceId": {
          "canBeNull": false,
          "description": "Technical service identifier",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of the domain name",
          "fullType": "domain.DomainStateEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DomainStateEnum"
        },
        "suspensionState": {
          "canBeNull": false,
          "description": "Current suspension state of the domain name",
          "fullType": "domain.SuspensionStateEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.SuspensionStateEnum"
        },
        "transferLockStatus": {
          "canBeNull": false,
          "description": "Current transfer lock status of the domain name",
          "fullType": "domain.LockStatusEnum",
          "readOnly": false,
          "required": false,
          "type": "domain.LockStatusEnum"
        },
        "whoisOwner": {
          "canBeNull": false,
          "description": "Owner (registrant) contact ID (contact data can be edited via /me/contact/<ID>)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.DomainStateEnum": {
      "description": "Domain name current state",
      "enum": [
        "deleted",
        "dispute",
        "expired",
        "ok",
        "outgoing_transfer",
        "pending_create",
        "pending_delete",
        "pending_incoming_transfer",
        "pending_installation",
        "registry_suspended",
        "restorable",
        "technical_suspended"
      ],
      "enumType": "string",
      "id": "DomainStateEnum",
      "namespace": "domain"
    },
    "domain.DomainSuspensionStateEnum": {
      "description": "Domain name current suspension state",
      "enum": [
        "not_suspended",
        "suspended"
      ],
      "enumType": "string",
      "id": "DomainSuspensionStateEnum",
      "namespace": "domain"
    },
    "domain.DomainWithIAM": {
      "description": "Domain name administration",
      "id": "Domain",
      "namespace": "domain",
      "properties": {
        "dnssecSupported": {
          "canBeNull": false,
          "description": "Is DNSSEC implemented for this domain name's tld",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "domain": {
          "canBeNull": false,
          "description": "Domain name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "glueRecordIpv6Supported": {
          "canBeNull": false,
          "description": "Does the registry support ipv6 glue record",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "glueRecordMultiIpSupported": {
          "canBeNull": false,
          "description": "Does the registry support multi ip glue record",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "hostSupported": {
          "canBeNull": false,
          "description": "Does the registry support hosts as independent entities",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "nameServerType": {
          "canBeNull": false,
          "description": "Name servers type",
          "fullType": "domain.DomainNsTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "domain.DomainNsTypeEnum"
        },
        "offer": {
          "canBeNull": false,
          "description": "Domain's offer",
          "fullType": "domain.OfferEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.OfferEnum"
        },
        "owoSupported": {
          "canBeNull": false,
          "description": "Is whois obfuscation supported by this domain name's registry",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "parentService": {
          "canBeNull": true,
          "description": "Parent service",
          "fullType": "domain.ParentService",
          "readOnly": true,
          "required": false,
          "type": "domain.ParentService"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of the domain",
          "fullType": "domain.DomainStateEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DomainStateEnum"
        },
        "suspensionState": {
          "canBeNull": false,
          "description": "Current suspension state of the domain",
          "fullType": "domain.DomainSuspensionStateEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DomainSuspensionStateEnum"
        },
        "transferLockStatus": {
          "canBeNull": false,
          "description": "Transfer lock status",
          "fullType": "domain.DomainLockStatusEnum",
          "readOnly": false,
          "required": false,
          "type": "domain.DomainLockStatusEnum"
        },
        "whoisOwner": {
          "canBeNull": false,
          "description": "Contact Owner (you can edit it via /me/contact/<ID>)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.IsForEnum": {
      "description": "Possible purposes of the domain",
      "enum": [
        "campaign_website",
        "educational_website",
        "emails",
        "information_website",
        "other_purpose",
        "redirect_page",
        "transactional_website"
      ],
      "enumType": "string",
      "id": "IsForEnum",
      "namespace": "domain"
    },
    "domain.LockStatusEnum": {
      "description": "Domain lock status",
      "enum": [
        "locked",
        "locking",
        "unavailable",
        "unlocked",
        "unlocking"
      ],
      "enumType": "string",
      "id": "LockStatusEnum",
      "namespace": "domain"
    },
    "domain.OfferEnum": {
      "description": "Offer",
      "enum": [
        "diamond",
        "gold",
        "platinum"
      ],
      "enumType": "string",
      "id": "OfferEnum",
      "namespace": "domain"
    },
    "domain.OperationStatusEnum": {
      "description": "Operation status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "problem",
        "todo"
      ],
      "enumType": "string",
      "id": "OperationStatusEnum",
      "namespace": "domain"
    },
    "domain.OptinFieldsEnum": {
      "description": "Whois optin fields",
      "enum": [
        "address",
        "city",
        "country",
        "email",
        "fax",
        "name",
        "organisation",
        "phone",
        "province",
        "zip"
      ],
      "enumType": "string",
      "id": "OptinFieldsEnum",
      "namespace": "domain"
    },
    "domain.Option": {
      "description": "Information about the options of a domain",
      "id": "Option",
      "namespace": "domain",
      "properties": {
        "expirationDate": {
          "canBeNull": false,
          "description": "Expiration date of the option",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "option": {
          "canBeNull": false,
          "description": "The option name",
          "fullType": "domain.DomainOptionEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DomainOptionEnum"
        },
        "state": {
          "canBeNull": false,
          "description": "The state of the option",
          "fullType": "domain.DomainOptionStateEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DomainOptionStateEnum"
        }
      }
    },
    "domain.ParentService": {
      "description": "Parent service",
      "id": "ParentService",
      "namespace": "domain",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of the parent service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the parent service",
          "fullType": "domain.ParentServiceTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.ParentServiceTypeEnum"
        }
      }
    },
    "domain.ParentServiceTypeEnum": {
      "description": "Parent service type enum",
      "enum": [
        "/allDom"
      ],
      "enumType": "string",
      "id": "ParentServiceTypeEnum",
      "namespace": "domain"
    },
    "domain.RenewalStateEnum": {
      "description": "Domain renewal state",
      "enum": [
        "automatic_renew",
        "cancellation_complete",
        "cancellation_requested",
        "manual_renew",
        "unpaid"
      ],
      "enumType": "string",
      "id": "RenewalStateEnum",
      "namespace": "domain"
    },
    "domain.ServiceOption": {
      "description": "Data of a domain option",
      "id": "ServiceOption",
      "namespace": "domain",
      "properties": {
        "serviceName": {
          "canBeNull": false,
          "description": "Service name of the option",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.ServiceOptions": {
      "description": "Representation of the domain options",
      "id": "ServiceOptions",
      "namespace": "domain",
      "properties": {
        "hosting": {
          "canBeNull": true,
          "description": "Hosting option",
          "fullType": "domain.ServiceOption",
          "readOnly": true,
          "required": false,
          "type": "domain.ServiceOption"
        },
        "offer": {
          "canBeNull": true,
          "description": "Offer option (Diamond, Platinum)",
          "fullType": "domain.ServiceOption",
          "readOnly": true,
          "required": false,
          "type": "domain.ServiceOption"
        },
        "zone": {
          "canBeNull": true,
          "description": "DNS zone option",
          "fullType": "domain.ServiceOption",
          "readOnly": true,
          "required": false,
          "type": "domain.ServiceOption"
        }
      }
    },
    "domain.SuspensionStateEnum": {
      "description": "Domain suspension state",
      "enum": [
        "not_suspended",
        "suspended"
      ],
      "enumType": "string",
      "id": "SuspensionStateEnum",
      "namespace": "domain"
    },
    "domain.Task": {
      "description": "Tasks associated to domain",
      "id": "Task",
      "namespace": "domain",
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
          "canBeNull": true,
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
    "domain.TaskFunctionEnum": {
      "description": "All functions from a dns task",
      "enum": [
        "DnsAnycastActivate",
        "DnsAnycastDeactivate",
        "DnssecDisable",
        "DnssecEnable",
        "DnssecResigning",
        "DnssecRollKsk",
        "DnssecRollZsk",
        "ZoneCreate",
        "ZoneCut",
        "ZoneDelete",
        "ZoneImport",
        "ZoneRestore"
      ],
      "enumType": "string",
      "id": "TaskFunctionEnum",
      "namespace": "domain"
    },
    "domain.TaskStatusEnum": {
      "description": "All statuses from a dns task",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "problem",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "domain"
    },
    "domain.UkRegistrar": {
      "description": "Representation of a UK Registrar (used for outgoing transfer)",
      "id": "UkRegistrar",
      "namespace": "domain",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Registrar name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "tag": {
          "canBeNull": false,
          "description": "Registrar tag",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "domain.Zone": {
      "description": "DNS zone",
      "id": "Zone",
      "namespace": "domain",
      "properties": {
        "dnssecSupported": {
          "canBeNull": false,
          "description": "Is DNSSEC supported by this zone",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "hasDnsAnycast": {
          "canBeNull": false,
          "description": "Whether the DNS zone has a DNS Anycast subscription",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "lastUpdate": {
          "canBeNull": true,
          "description": "Last update date of the DNS zone",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Zone name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nameServers": {
          "canBeNull": false,
          "description": "Name servers that host the DNS zone",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "domain.ZoneWithIAM": {
      "description": "DNS zone",
      "id": "Zone",
      "namespace": "domain",
      "properties": {
        "dnssecSupported": {
          "canBeNull": false,
          "description": "Is DNSSEC supported by this zone",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "hasDnsAnycast": {
          "canBeNull": false,
          "description": "Whether the DNS zone has a DNS Anycast subscription",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
        },
        "lastUpdate": {
          "canBeNull": true,
          "description": "Last update date of the DNS zone",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Zone name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nameServers": {
          "canBeNull": false,
          "description": "Name servers that host the DNS zone",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "domain.configuration.rules.Constraint": {
      "description": "A configuration rule defines validation to launch when executing an action on a domain (create, trade...). Depending on the extension, the rule may be different",
      "id": "Constraint",
      "namespace": "domain.configuration.rules",
      "properties": {
        "conditions": {
          "canBeNull": true,
          "description": "Whether this constraint is applied or not",
          "fullType": "domain.configuration.rules.Rule",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.Rule"
        },
        "contexts": {
          "canBeNull": true,
          "description": "The context on which the constraint applies",
          "fullType": "domain.configuration.rules.ContextEnum[]",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.ContextEnum[]"
        },
        "operator": {
          "canBeNull": true,
          "description": "The operator of the constraint",
          "fullType": "domain.configuration.rules.OperatorEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.OperatorEnum"
        },
        "value": {
          "canBeNull": true,
          "description": "The value to match against",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "values": {
          "canBeNull": true,
          "description": "The values to match against",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "domain.configuration.rules.ContextEnum": {
      "description": "Used in rule to tell if rule (or part of the rule) is applicable for a given context",
      "enum": [
        "accept_conditions",
        "claims",
        "create",
        "order",
        "premium",
        "protected_code",
        "reason",
        "trade",
        "transfer",
        "update"
      ],
      "enumType": "string",
      "id": "ContextEnum",
      "namespace": "domain.configuration.rules"
    },
    "domain.configuration.rules.OperatorEnum": {
      "description": "Operator use in configuration rule to check content of a field",
      "enum": [
        "between",
        "contains",
        "empty",
        "eq",
        "gt",
        "gte",
        "lt",
        "lte",
        "match",
        "maxlength",
        "minlength",
        "ne",
        "notcontains",
        "notempty",
        "readonly",
        "required",
        "shouldbetrue"
      ],
      "enumType": "string",
      "id": "OperatorEnum",
      "namespace": "domain.configuration.rules"
    },
    "domain.configuration.rules.Rule": {
      "description": "A configuration rule defines validation to launch when executing an action on a domain (create, trade...). Depending on the extension, the rule may be different",
      "id": "Rule",
      "namespace": "domain.configuration.rules",
      "properties": {
        "and": {
          "canBeNull": true,
          "description": "An \"and\" operator on multiple rules",
          "fullType": "domain.configuration.rules.Rule[]",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.Rule[]"
        },
        "conditions": {
          "canBeNull": true,
          "description": "Whether this rule is applied or not",
          "fullType": "domain.configuration.rules.Rule",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.Rule"
        },
        "constraints": {
          "canBeNull": true,
          "description": "The constraints of the rule",
          "fullType": "domain.configuration.rules.Constraint[]",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.Constraint[]"
        },
        "contexts": {
          "canBeNull": true,
          "description": "The context on which the rule applies",
          "fullType": "domain.configuration.rules.ContextEnum[]",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.ContextEnum[]"
        },
        "description": {
          "canBeNull": true,
          "description": "The description of the rule",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "fields": {
          "canBeNull": true,
          "description": "The fields with specific rules",
          "fullType": "domain.configuration.rules.Rule",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.Rule"
        },
        "label": {
          "canBeNull": true,
          "description": "The label of the rule",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "or": {
          "canBeNull": true,
          "description": "An \"or\" operator on multiple rules",
          "fullType": "domain.configuration.rules.Rule[]",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.Rule[]"
        },
        "placeholder": {
          "canBeNull": true,
          "description": "The default value used for the rule",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": true,
          "description": "The type of the object the rule applies on",
          "fullType": "domain.configuration.rules.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.TypeEnum"
        }
      }
    },
    "domain.configuration.rules.RuleData": {
      "description": "A rule data contains the fields that must be validated against a rule",
      "id": "RuleData",
      "namespace": "domain.configuration.rules",
      "properties": {
        "adminAccount": {
          "canBeNull": true,
          "description": "The admin contact data",
          "fullType": "nichandle.Nichandle",
          "readOnly": false,
          "required": false,
          "type": "nichandle.Nichandle"
        },
        "domain": {
          "canBeNull": true,
          "description": "The domain data",
          "fullType": "domain.Data",
          "readOnly": false,
          "required": false,
          "type": "domain.Data"
        },
        "extras": {
          "canBeNull": true,
          "description": "The extra data of the rule",
          "fullType": "domain.configuration.rules.RuleExtraData",
          "readOnly": false,
          "required": false,
          "type": "domain.configuration.rules.RuleExtraData"
        },
        "owner": {
          "canBeNull": true,
          "description": "The owner contact data",
          "fullType": "domain.Contact",
          "readOnly": false,
          "required": false,
          "type": "domain.Contact"
        },
        "techAccount": {
          "canBeNull": true,
          "description": "The tech contact data",
          "fullType": "nichandle.Nichandle",
          "readOnly": false,
          "required": false,
          "type": "nichandle.Nichandle"
        }
      }
    },
    "domain.configuration.rules.RuleExtraData": {
      "description": "The extra data contain additional rule data fields",
      "id": "RuleExtraData",
      "namespace": "domain.configuration.rules",
      "properties": {
        "acceptCondition": {
          "canBeNull": true,
          "description": "Whether you accept the domain specific conditions or not",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "authInfo": {
          "canBeNull": true,
          "description": "The auth info code for the domain",
          "fullType": "password",
          "readOnly": false,
          "required": false,
          "type": "password"
        }
      }
    },
    "domain.configuration.rules.TypeEnum": {
      "description": "Type of rule configuration",
      "enum": [
        "bool",
        "contact",
        "date_ISO8601",
        "domain",
        "json",
        "number",
        "string",
        "string[]",
        "text"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "domain.configuration.rules"
    },
    "domain.configurations.ContactTypeEnum": {
      "description": "The possible types of contacts associated to a domain name",
      "enum": [
        "admin",
        "all",
        "billing",
        "owner",
        "tech"
      ],
      "enumType": "string",
      "id": "ContactTypeEnum",
      "namespace": "domain.configurations"
    },
    "domain.configurations.CustomFields": {
      "description": "Representation of the domain custom fields",
      "id": "CustomFields",
      "namespace": "domain.configurations",
      "properties": {
        "audience": {
          "canBeNull": true,
          "description": "Domain name audience",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "authInfo": {
          "canBeNull": true,
          "description": "Auth Info",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        },
        "isFor": {
          "canBeNull": true,
          "description": "Purposes of the domain",
          "fullType": "domain.IsForEnum[]",
          "readOnly": false,
          "required": false,
          "type": "domain.IsForEnum[]"
        },
        "otherPurpose": {
          "canBeNull": true,
          "description": "Domain name other purpose",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "reason": {
          "canBeNull": true,
          "description": "Reason of the purchase of this domain",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "represent": {
          "canBeNull": true,
          "description": "Represented company",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.configurations.CustomFieldsUpdatePayload": {
      "description": "Payload used to update the custom fields of a domain name",
      "id": "CustomFieldsUpdatePayload",
      "namespace": "domain.configurations",
      "properties": {
        "customFields": {
          "canBeNull": false,
          "description": "New domain custom fields",
          "fullType": "domain.configurations.CustomFields",
          "readOnly": false,
          "required": false,
          "type": "domain.configurations.CustomFields"
        }
      }
    },
    "domain.configurations.ObfuscatedEmail": {
      "description": "Configuration of the email obfuscations for contacts related to a domain name",
      "id": "ObfuscatedEmail",
      "namespace": "domain.configurations",
      "properties": {
        "status": {
          "canBeNull": true,
          "description": "Status of the email obfuscation",
          "fullType": "domain.configurations.ObfuscationStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.configurations.ObfuscationStatusEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the contact whose email is obfuscated by this configuration",
          "fullType": "domain.configurations.ContactTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.configurations.ContactTypeEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "Obfuscated email address",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.configurations.ObfuscatedEmailRefreshPayload": {
      "description": "Payload used to request the regeneration of obfuscated email redirections for the provided contacts of a domain name",
      "id": "ObfuscatedEmailRefreshPayload",
      "namespace": "domain.configurations",
      "properties": {
        "contacts": {
          "canBeNull": false,
          "description": "Type of the contacts to refresh email obfuscation for",
          "fullType": "domain.configurations.ContactTypeEnum[]",
          "readOnly": false,
          "required": true,
          "type": "domain.configurations.ContactTypeEnum[]"
        }
      }
    },
    "domain.configurations.ObfuscatedEmailUpdatePayload": {
      "description": "Payload used to request the email obfuscation of contacts related to a domain name",
      "id": "ObfuscatedEmailUpdatePayload",
      "namespace": "domain.configurations",
      "properties": {
        "contacts": {
          "canBeNull": false,
          "description": "Type of the contacts to request email obfuscation for",
          "fullType": "domain.configurations.ContactTypeEnum[]",
          "readOnly": false,
          "required": true,
          "type": "domain.configurations.ContactTypeEnum[]"
        }
      }
    },
    "domain.configurations.ObfuscationStatusEnum": {
      "description": "The possible statuses of an email obfuscation",
      "enum": [
        "done",
        "todo"
      ],
      "enumType": "string",
      "id": "ObfuscationStatusEnum",
      "namespace": "domain.configurations"
    },
    "domain.configurations.Optin": {
      "description": "Configuration of the optin fields for contacts related to a domain name",
      "id": "Optin",
      "namespace": "domain.configurations",
      "properties": {
        "fields": {
          "canBeNull": false,
          "description": "Fields to display publicly on the Whois",
          "fullType": "domain.OptinFieldsEnum[]",
          "readOnly": false,
          "required": false,
          "type": "domain.OptinFieldsEnum[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the contact associated to the optin configuration",
          "fullType": "domain.configurations.ContactTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "domain.configurations.ContactTypeEnum"
        }
      }
    },
    "domain.configurations.OptinUpdatePayload": {
      "description": "Payload used to optin the fields of contacts related to a domain name",
      "id": "OptinUpdatePayload",
      "namespace": "domain.configurations",
      "properties": {
        "optin": {
          "canBeNull": false,
          "description": "New optin configuration",
          "fullType": "domain.configurations.Optin[]",
          "readOnly": false,
          "required": false,
          "type": "domain.configurations.Optin[]"
        }
      }
    },
    "domain.data.claimNotice.Address": {
      "description": "Address for a claim notice holder",
      "id": "Address",
      "namespace": "domain.data.claimNotice",
      "properties": {
        "city": {
          "canBeNull": true,
          "description": "City",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "countryCode": {
          "canBeNull": true,
          "description": "Country code",
          "fullType": "nichandle.CountryEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "fax": {
          "canBeNull": true,
          "description": "Fax number",
          "fullType": "phoneNumber",
          "readOnly": true,
          "required": false,
          "type": "phoneNumber"
        },
        "faxExtension": {
          "canBeNull": true,
          "description": "Fax number extension",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "postalCode": {
          "canBeNull": true,
          "description": "Postal zip code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "stateOrProvince": {
          "canBeNull": true,
          "description": "State of province",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "streets": {
          "canBeNull": false,
          "description": "Array of street name",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "voice": {
          "canBeNull": true,
          "description": "Phone number",
          "fullType": "phoneNumber",
          "readOnly": true,
          "required": false,
          "type": "phoneNumber"
        },
        "voiceExtension": {
          "canBeNull": true,
          "description": "Phone number extension",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.data.claimNotice.ClaimNotice": {
      "description": "Definition of claim notices applying to a domain name",
      "id": "ClaimNotice",
      "namespace": "domain.data.claimNotice",
      "properties": {
        "claims": {
          "canBeNull": true,
          "description": "Array of claim notice for the domain",
          "fullType": "domain.data.claimNotice.ClaimNoticeDecision[]",
          "readOnly": true,
          "required": false,
          "type": "domain.data.claimNotice.ClaimNoticeDecision[]"
        },
        "endingDate": {
          "canBeNull": false,
          "description": "Ending date of claim notice",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Claim notice ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "label": {
          "canBeNull": false,
          "description": "Label referring to claim notice",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "startingDate": {
          "canBeNull": true,
          "description": "Beginning date of claim notice",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": true,
          "description": "Type of claim notice",
          "fullType": "domain.data.claimNotice.ClaimNoticeTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.data.claimNotice.ClaimNoticeTypeEnum"
        }
      }
    },
    "domain.data.claimNotice.ClaimNoticeDecision": {
      "description": "Definition of a single claim notice",
      "id": "ClaimNoticeDecision",
      "namespace": "domain.data.claimNotice",
      "properties": {
        "classifications": {
          "canBeNull": false,
          "description": "Classifications where trademark claim notice apply",
          "fullType": "domain.data.claimNotice.Classification[]",
          "readOnly": true,
          "required": false,
          "type": "domain.data.claimNotice.Classification[]"
        },
        "courtDecisions": {
          "canBeNull": false,
          "description": "Array of court decisions related to claim notice",
          "fullType": "domain.data.claimNotice.CourtDecision[]",
          "readOnly": true,
          "required": false,
          "type": "domain.data.claimNotice.CourtDecision[]"
        },
        "goodsAndServices": {
          "canBeNull": false,
          "description": "Goods and services on which apply claim notice",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "jurisdiction": {
          "canBeNull": false,
          "description": "Name of jurisdiction",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "jurisdictionCountryCode": {
          "canBeNull": false,
          "description": "Jurisdiction country code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "markName": {
          "canBeNull": false,
          "description": "Mark name implicated in claim notice",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "trademarkContacts": {
          "canBeNull": false,
          "description": "Trademark contacts",
          "fullType": "domain.data.claimNotice.Contact[]",
          "readOnly": true,
          "required": false,
          "type": "domain.data.claimNotice.Contact[]"
        },
        "trademarkHolders": {
          "canBeNull": false,
          "description": "Trademark holders",
          "fullType": "domain.data.claimNotice.Contact[]",
          "readOnly": true,
          "required": false,
          "type": "domain.data.claimNotice.Contact[]"
        },
        "trademarkUDRP": {
          "canBeNull": false,
          "description": "Trademark UDRP information",
          "fullType": "domain.data.claimNotice.UDRP[]",
          "readOnly": true,
          "required": false,
          "type": "domain.data.claimNotice.UDRP[]"
        }
      }
    },
    "domain.data.claimNotice.ClaimNoticeTypeEnum": {
      "description": "Type of claim notice",
      "enum": [
        "TRADEMARK",
        "UK"
      ],
      "enumType": "string",
      "id": "ClaimNoticeTypeEnum",
      "namespace": "domain.data.claimNotice"
    },
    "domain.data.claimNotice.Classification": {
      "description": "Definition of a trademark claim notice classification",
      "id": "Classification",
      "namespace": "domain.data.claimNotice",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Summary of the classification",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "number": {
          "canBeNull": false,
          "description": "Code of the classification",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.data.claimNotice.Contact": {
      "description": "Contact definition of a claim notice holder",
      "id": "Contact",
      "namespace": "domain.data.claimNotice",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "Address of holder",
          "fullType": "domain.data.claimNotice.Address",
          "readOnly": true,
          "required": false,
          "type": "domain.data.claimNotice.Address"
        },
        "email": {
          "canBeNull": true,
          "description": "Email address",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "entitlement": {
          "canBeNull": true,
          "description": "Legitimacy of holder",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Name of claim notice holder",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "organisation": {
          "canBeNull": true,
          "description": "Organisation name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": true,
          "description": "Type of contact",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.data.claimNotice.CourtDecision": {
      "description": "Definition of a court decision",
      "id": "CourtDecision",
      "namespace": "domain.data.claimNotice",
      "properties": {
        "countryCode": {
          "canBeNull": false,
          "description": "Country code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "courtName": {
          "canBeNull": false,
          "description": "Court name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "referenceNumber": {
          "canBeNull": false,
          "description": "Reference number of court decision",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "regions": {
          "canBeNull": false,
          "description": "Regions where court decision apply",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "domain.data.claimNotice.UDRP": {
      "description": "Definition of a UDRP procedure",
      "id": "UDRP",
      "namespace": "domain.data.claimNotice",
      "properties": {
        "caseNumber": {
          "canBeNull": false,
          "description": "Case number",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "udrpProvider": {
          "canBeNull": false,
          "description": "UDRP Provider",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.data.smd.Smd": {
      "description": "Representation of a SMD file",
      "id": "Smd",
      "namespace": "domain.data.smd",
      "properties": {
        "data": {
          "canBeNull": false,
          "description": "SMD file content",
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        },
        "id": {
          "canBeNull": false,
          "description": "UUID of SMD file",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "notAfter": {
          "canBeNull": false,
          "description": "Date when information about SMD file aren't valid anymore",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "notBefore": {
          "canBeNull": false,
          "description": "Date before when information about SMD file aren't valid yet",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "protectedLabels": {
          "canBeNull": false,
          "description": "List of the labels that are protect with that SMD file",
          "fullType": "domain.data.smd.SmdLabel[]",
          "readOnly": true,
          "required": false,
          "type": "domain.data.smd.SmdLabel[]"
        },
        "smdId": {
          "canBeNull": false,
          "description": "TMCH Internal identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.data.smd.SmdBody": {
      "description": "Representation of a SMD file",
      "id": "SmdBody",
      "namespace": "domain.data.smd",
      "properties": {
        "data": {
          "canBeNull": false,
          "description": "SMD file content in base64",
          "fullType": "text",
          "readOnly": false,
          "required": true,
          "type": "text"
        }
      }
    },
    "domain.data.smd.SmdLabel": {
      "description": "Representation of a protected label",
      "id": "SmdLabel",
      "namespace": "domain.data.smd",
      "properties": {
        "label": {
          "canBeNull": false,
          "description": "Label that is protected",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "trademark": {
          "canBeNull": false,
          "description": "Trademark associated to the protected label",
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        }
      }
    },
    "domain.extensions.CategoryNameWithExtensions": {
      "description": "Result of extensions by category request",
      "id": "CategoryNameWithExtensions",
      "namespace": "domain.extensions",
      "properties": {
        "extensions": {
          "canBeNull": false,
          "description": "List of extensions",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the category",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.extensions.CategoryTypeEnum": {
      "description": "Type of extension category",
      "enum": [
        "geolocalization",
        "thematic"
      ],
      "enumType": "string",
      "id": "CategoryTypeEnum",
      "namespace": "domain.extensions"
    },
    "domain.extensions.Extension": {
      "description": "A domain name extension",
      "id": "Extension",
      "namespace": "domain.extensions",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "The extension name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.extensions.ExtensionsByCategory": {
      "description": "Result of extensions by category request",
      "id": "ExtensionsByCategory",
      "namespace": "domain.extensions",
      "properties": {
        "geolocalization": {
          "canBeNull": true,
          "description": "Geolocalizations groups extensions by geographical place, like 'europe'",
          "fullType": "domain.extensions.CategoryNameWithExtensions[]",
          "readOnly": true,
          "required": false,
          "type": "domain.extensions.CategoryNameWithExtensions[]"
        },
        "thematic": {
          "canBeNull": true,
          "description": "Thematics groups extensions by a thematic like 'gastronomy' for '.pizza'",
          "fullType": "domain.extensions.CategoryNameWithExtensions[]",
          "readOnly": true,
          "required": false,
          "type": "domain.extensions.CategoryNameWithExtensions[]"
        }
      }
    },
    "domain.extensions.ExtensionsPricingAttributes": {
      "description": "Result of getting pricing attributes of an extension",
      "id": "ExtensionsPricingAttributes",
      "namespace": "domain.extensions",
      "properties": {
        "brandNew": {
          "canBeNull": false,
          "description": "Parameter is true when the extension has been created recently and we want to highlight this fact",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Extension name, like 'com' or 'co.uk'",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "priceDrop": {
          "canBeNull": false,
          "description": "Parameter is true when the extension price has dropped recently and we want to highlight this fact",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "domain.extensions.OrderByTypeEnum": {
      "description": "Type used to change the order of extensions results",
      "enum": [
        "alphabetical",
        "trending"
      ],
      "enumType": "string",
      "id": "OrderByTypeEnum",
      "namespace": "domain.extensions"
    },
    "domain.extensions.registryConfigurations.CreateLifecycleRegistryConfiguration": {
      "description": "The registry configurations applied when creating a domain name",
      "id": "CreateLifecycleRegistryConfiguration",
      "namespace": "domain.extensions.registryConfigurations",
      "properties": {
        "allowedPeriodsInMonths": {
          "canBeNull": true,
          "description": "The number of months allowed for a domain creation",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        }
      }
    },
    "domain.extensions.registryConfigurations.DNSRegistryConfiguration": {
      "description": "The registry configurations applied to the DNS of a domain name",
      "id": "DNSRegistryConfiguration",
      "namespace": "domain.extensions.registryConfigurations",
      "properties": {
        "isDNSSECSupported": {
          "canBeNull": false,
          "description": "Whether DNSSEC is supported by the registry/backend and handled by OVHcloud",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "maxNumber": {
          "canBeNull": true,
          "description": "The maximum required number of DNS",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minNumber": {
          "canBeNull": true,
          "description": "The minimum required number of DNS",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "domain.extensions.registryConfigurations.DomainRegistryConfiguration": {
      "description": "The registry configurations applied to a domain name",
      "id": "DomainRegistryConfiguration",
      "namespace": "domain.extensions.registryConfigurations",
      "properties": {
        "isPremiumSupported": {
          "canBeNull": false,
          "description": "Whether premium domains are supported by the registry and handled by OVHcloud",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "label": {
          "canBeNull": false,
          "description": "The registry configurations applied to the domain name label",
          "fullType": "domain.extensions.registryConfigurations.LabelDomainRegistryConfiguration",
          "readOnly": true,
          "required": false,
          "type": "domain.extensions.registryConfigurations.LabelDomainRegistryConfiguration"
        }
      }
    },
    "domain.extensions.registryConfigurations.LabelDomainRegistryConfiguration": {
      "description": "The registry configurations applied to the domain name label",
      "id": "LabelDomainRegistryConfiguration",
      "namespace": "domain.extensions.registryConfigurations",
      "properties": {
        "isIDNSupported": {
          "canBeNull": false,
          "description": "Whether International Domain Names are supported by the registry and handled by OVHcloud",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "maxLength": {
          "canBeNull": true,
          "description": "The maximum length allowed for a domain name (without the extension)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minLength": {
          "canBeNull": true,
          "description": "The minimum length allowed for a domain name (without the extension)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "domain.extensions.registryConfigurations.LifecycleRegistryConfiguration": {
      "description": "The registry configurations of the lifecycle of a domain name",
      "id": "LifecycleRegistryConfiguration",
      "namespace": "domain.extensions.registryConfigurations",
      "properties": {
        "create": {
          "canBeNull": false,
          "description": "The registry configurations applied when creating a domain name",
          "fullType": "domain.extensions.registryConfigurations.CreateLifecycleRegistryConfiguration",
          "readOnly": true,
          "required": false,
          "type": "domain.extensions.registryConfigurations.CreateLifecycleRegistryConfiguration"
        },
        "order": {
          "canBeNull": false,
          "description": "The registry configurations applied when ordering a domain name",
          "fullType": "domain.extensions.registryConfigurations.OrderLifecycleRegistryConfiguration",
          "readOnly": true,
          "required": false,
          "type": "domain.extensions.registryConfigurations.OrderLifecycleRegistryConfiguration"
        },
        "renew": {
          "canBeNull": false,
          "description": "The registry configurations applied when renewing a domain name",
          "fullType": "domain.extensions.registryConfigurations.RenewLifecycleRegistryConfiguration",
          "readOnly": true,
          "required": false,
          "type": "domain.extensions.registryConfigurations.RenewLifecycleRegistryConfiguration"
        },
        "restore": {
          "canBeNull": false,
          "description": "The registry configurations applied when restoring a domain name",
          "fullType": "domain.extensions.registryConfigurations.RestoreLifecycleRegistryConfiguration",
          "readOnly": true,
          "required": false,
          "type": "domain.extensions.registryConfigurations.RestoreLifecycleRegistryConfiguration"
        },
        "transfer": {
          "canBeNull": false,
          "description": "The registry configurations applied when transfering a domain name",
          "fullType": "domain.extensions.registryConfigurations.TransferLifecycleRegistryConfiguration",
          "readOnly": true,
          "required": false,
          "type": "domain.extensions.registryConfigurations.TransferLifecycleRegistryConfiguration"
        }
      }
    },
    "domain.extensions.registryConfigurations.OrderLifecycleRegistryConfiguration": {
      "description": "The registry configurations applied when ordering a domain name",
      "id": "OrderLifecycleRegistryConfiguration",
      "namespace": "domain.extensions.registryConfigurations",
      "properties": {
        "active": {
          "canBeNull": false,
          "description": "True if the extension can be ordered from the website",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "maxMonths": {
          "canBeNull": true,
          "description": "The maximum number of months a domain can be ordered for",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minMonths": {
          "canBeNull": true,
          "description": "The minimum number of months a domain can be ordered for",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "domain.extensions.registryConfigurations.RegistryConfigurations": {
      "description": "The registry configurations applied to a domain extension (TLD, SLD)",
      "id": "RegistryConfigurations",
      "namespace": "domain.extensions.registryConfigurations",
      "properties": {
        "dns": {
          "canBeNull": false,
          "description": "Configurations on the DNS associated to the domain for the given extension",
          "fullType": "domain.extensions.registryConfigurations.DNSRegistryConfiguration",
          "readOnly": true,
          "required": false,
          "type": "domain.extensions.registryConfigurations.DNSRegistryConfiguration"
        },
        "domain": {
          "canBeNull": false,
          "description": "Configurations on the domain name itself for the given extension",
          "fullType": "domain.extensions.registryConfigurations.DomainRegistryConfiguration",
          "readOnly": true,
          "required": false,
          "type": "domain.extensions.registryConfigurations.DomainRegistryConfiguration"
        },
        "lifecycle": {
          "canBeNull": false,
          "description": "Configurations on the lifecycle of a domain for the given extension",
          "fullType": "domain.extensions.registryConfigurations.LifecycleRegistryConfiguration",
          "readOnly": true,
          "required": false,
          "type": "domain.extensions.registryConfigurations.LifecycleRegistryConfiguration"
        }
      }
    },
    "domain.extensions.registryConfigurations.RenewLifecycleRegistryConfiguration": {
      "description": "The registry configurations applied when renewing a domain name",
      "id": "RenewLifecycleRegistryConfiguration",
      "namespace": "domain.extensions.registryConfigurations",
      "properties": {
        "allowedPeriodsInMonths": {
          "canBeNull": true,
          "description": "The number of months allowed for a domain renewal",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        },
        "gracePeriodInDays": {
          "canBeNull": true,
          "description": "The number of calendar days between the expiration date and the redemption period when a renew can be executed. During this period, the domain has expired and is suspended. It's the number of days before real deletion. The customer can still renew.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "domain.extensions.registryConfigurations.RestoreLifecycleRegistryConfiguration": {
      "description": "The registry configurations applied when restoring a domain name",
      "id": "RestoreLifecycleRegistryConfiguration",
      "namespace": "domain.extensions.registryConfigurations",
      "properties": {
        "gracePeriodInDays": {
          "canBeNull": true,
          "description": "The number of calendar days in which the customer still can restore their domain after expiration. During this period, the domain has been deleted. The customer can still restore it until these days are over. Then the domain is returned to public, if not restored.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "domain.extensions.registryConfigurations.TransferLifecycleRegistryConfiguration": {
      "description": "The registry configurations applied when transfering a domain name",
      "id": "TransferLifecycleRegistryConfiguration",
      "namespace": "domain.extensions.registryConfigurations",
      "properties": {
        "allowedPeriodsInMonths": {
          "canBeNull": true,
          "description": "The number of months allowed for a domain transfer",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        }
      }
    },
    "domain.glueRecord.CreatePayload": {
      "description": "Payload used to create the glue records of a domain name",
      "id": "CreatePayload",
      "namespace": "domain.glueRecord",
      "properties": {
        "host": {
          "canBeNull": false,
          "description": "Host of the glue record",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "ips": {
          "canBeNull": false,
          "description": "IP addresses of the glue record",
          "fullType": "ip[]",
          "readOnly": false,
          "required": true,
          "type": "ip[]"
        }
      }
    },
    "domain.glueRecord.GlueRecord": {
      "description": "Glue record",
      "id": "GlueRecord",
      "namespace": "domain.glueRecord",
      "properties": {
        "host": {
          "canBeNull": false,
          "description": "Host of the glue record",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ips": {
          "canBeNull": false,
          "description": "IP address",
          "fullType": "ip[]",
          "readOnly": false,
          "required": true,
          "type": "ip[]"
        }
      }
    },
    "domain.nameServer.CreatePayload": {
      "description": "Payload used to update the DNS of a domain name",
      "id": "CreatePayload",
      "namespace": "domain.nameServer",
      "properties": {
        "nameServer": {
          "canBeNull": false,
          "description": "Name servers to create",
          "fullType": "domain.nameServer.NameServerInput[]",
          "readOnly": false,
          "required": true,
          "type": "domain.nameServer.NameServerInput[]"
        }
      }
    },
    "domain.nameServer.FullNameServer": {
      "description": "Full name server configuration",
      "id": "FullNameServer",
      "namespace": "domain.nameServer",
      "properties": {
        "host": {
          "canBeNull": false,
          "description": "Host of the name server",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "ID of the name server",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ip": {
          "canBeNull": true,
          "description": "IP address of the name server",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "isUsed": {
          "canBeNull": false,
          "description": "isUsed flag of the name server",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "toDelete": {
          "canBeNull": false,
          "description": "toDelete flag of the name server",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "domain.nameServer.NameServer": {
      "description": "Name server configuration",
      "id": "NameServer",
      "namespace": "domain.nameServer",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "ID of the name server",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ipv4": {
          "canBeNull": true,
          "description": "IPv4 adress of the name server",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "ipv6": {
          "canBeNull": true,
          "description": "IPv6 adress  of the name server",
          "fullType": "ipv6",
          "readOnly": true,
          "required": false,
          "type": "ipv6"
        },
        "nameServer": {
          "canBeNull": false,
          "description": "Name of the name server",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nameServerType": {
          "canBeNull": false,
          "description": "Type of the name server",
          "fullType": "domain.nameServer.NameServerTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.nameServer.NameServerTypeEnum"
        }
      }
    },
    "domain.nameServer.NameServerInput": {
      "description": "Name server input data",
      "id": "NameServerInput",
      "namespace": "domain.nameServer",
      "properties": {
        "host": {
          "canBeNull": false,
          "description": "Host",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": true,
          "description": "IP address",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        }
      }
    },
    "domain.nameServer.NameServerStateEnum": {
      "description": "DNS server state",
      "enum": [
        "ko",
        "ok"
      ],
      "enumType": "string",
      "id": "NameServerStateEnum",
      "namespace": "domain.nameServer"
    },
    "domain.nameServer.NameServerStatus": {
      "description": "DNS server status",
      "id": "NameServerStatus",
      "namespace": "domain.nameServer",
      "properties": {
        "state": {
          "canBeNull": false,
          "description": "Whether or not the DNS server is working",
          "fullType": "domain.nameServer.NameServerStateEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.nameServer.NameServerStateEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "Whether or not the DNS server is managed by OVHcloud",
          "fullType": "domain.nameServer.NameServerTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.nameServer.NameServerTypeEnum"
        },
        "usedSince": {
          "canBeNull": true,
          "description": "Date from which the DNS server is used by the domain",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "domain.nameServer.NameServerTypeEnum": {
      "description": "DNS server type",
      "enum": [
        "anycast",
        "dedicated",
        "empty",
        "external",
        "hold",
        "hosted",
        "hosting",
        "mixed",
        "parking"
      ],
      "enumType": "string",
      "id": "NameServerTypeEnum",
      "namespace": "domain.nameServer"
    },
    "domain.nameServer.UpdatePayload": {
      "description": "Payload used to update the DNS of a domain name",
      "id": "UpdatePayload",
      "namespace": "domain.nameServer",
      "properties": {
        "nameServers": {
          "canBeNull": false,
          "description": "Name servers to update",
          "fullType": "domain.nameServer.NameServerInput[]",
          "readOnly": false,
          "required": true,
          "type": "domain.nameServer.NameServerInput[]"
        }
      }
    },
    "domain.outgoingTransfer.Approve": {
      "description": "Definition of Outgoing Transfer applying to a domain name",
      "id": "Approve",
      "namespace": "domain.outgoingTransfer",
      "properties": {
        "approveType": {
          "canBeNull": false,
          "description": "Approve type for outgoing transfer",
          "fullType": "domain.ApproveTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "domain.ApproveTypeEnum"
        },
        "ident": {
          "canBeNull": false,
          "description": "Token given by email to validate identity",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.rules.Optin": {
      "description": "Representation of the optin rule",
      "id": "Optin",
      "namespace": "domain.rules",
      "properties": {
        "fields": {
          "canBeNull": false,
          "description": "Fields to display publicly on the Whois",
          "fullType": "domain.OptinFieldsEnum[]",
          "readOnly": true,
          "required": false,
          "type": "domain.OptinFieldsEnum[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the contact associated to the optin rule",
          "fullType": "domain.configurations.ContactTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.configurations.ContactTypeEnum"
        }
      }
    },
    "domain.zone.Capabilities": {
      "description": "DNS zone capabilities",
      "id": "Capabilities",
      "namespace": "domain.zone",
      "properties": {
        "dynHost": {
          "canBeNull": false,
          "description": "True if dynHost available for this zone",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "domain.zone.Dnssec": {
      "description": "DNS zone DNSSEC",
      "id": "Dnssec",
      "namespace": "domain.zone",
      "properties": {
        "status": {
          "canBeNull": false,
          "description": "DNSSEC Status",
          "fullType": "domain.DnssecStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DnssecStatusEnum"
        }
      }
    },
    "domain.zone.DynHostLogin": {
      "description": "Manage DynHost login",
      "id": "DynHostLogin",
      "namespace": "domain.zone",
      "properties": {
        "login": {
          "canBeNull": false,
          "description": "Login",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "subDomain": {
          "canBeNull": false,
          "description": "Subdomain that the login will be allowed to update (* to allow all)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zone": {
          "canBeNull": false,
          "description": "Zone",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.zone.DynHostRecord": {
      "description": "DynHost record",
      "id": "DynHostRecord",
      "namespace": "domain.zone",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Id of the DynHost record",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ip": {
          "canBeNull": false,
          "description": "Ip address of the DynHost record",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "subDomain": {
          "canBeNull": true,
          "description": "Subdomain of the DynHost record",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ttl": {
          "canBeNull": true,
          "description": "DynHost record ttl",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "zone": {
          "canBeNull": false,
          "description": "Zone of the DynHost record",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.zone.Import": {
      "description": "DNS zone import",
      "id": "Import",
      "namespace": "domain.zone",
      "properties": {
        "zoneFile": {
          "canBeNull": false,
          "description": "Zone file that will be imported",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "domain.zone.Option": {
      "description": "DNS zone option",
      "id": "Option",
      "namespace": "domain.zone",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "The option name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.zone.Record": {
      "description": "DNS zone history",
      "id": "Record",
      "namespace": "domain.zone",
      "properties": {
        "fieldType": {
          "canBeNull": false,
          "fullType": "domain.zone.RecordTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.zone.RecordTypeEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the record",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "subDomain": {
          "canBeNull": true,
          "description": "Record subDomain",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "target": {
          "canBeNull": false,
          "description": "Target of the record",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ttl": {
          "canBeNull": true,
          "description": "TTL of the record",
          "fullType": "long",
          "readOnly": true,
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
    "domain.zone.RecordCreate": {
      "description": "DNS zone history",
      "id": "RecordCreate",
      "namespace": "domain.zone",
      "properties": {
        "fieldType": {
          "canBeNull": false,
          "fullType": "domain.zone.RecordTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "domain.zone.RecordTypeEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the record",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "subDomain": {
          "canBeNull": true,
          "description": "Record subDomain",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "target": {
          "canBeNull": false,
          "description": "Target of the record",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "ttl": {
          "canBeNull": false,
          "description": "TTL of the record",
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
    "domain.zone.RecordTypeEnum": {
      "description": "Resource record name",
      "enum": [
        "A",
        "AAAA",
        "CAA",
        "CNAME",
        "DKIM",
        "DMARC",
        "DNAME",
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
      "id": "RecordTypeEnum",
      "namespace": "domain.zone"
    },
    "domain.zone.RecordUpdate": {
      "description": "DNS zone record",
      "id": "RecordUpdate",
      "namespace": "domain.zone",
      "properties": {
        "subDomain": {
          "canBeNull": true,
          "description": "Record subdomain",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "target": {
          "canBeNull": false,
          "description": "Target of the record",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ttl": {
          "canBeNull": true,
          "description": "TTL of the record",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "domain.zone.Redirection": {
      "description": "DNS zone redirections",
      "id": "Redirection",
      "namespace": "domain.zone",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Description for the invisible redirection",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the redirection",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "keywords": {
          "canBeNull": true,
          "description": "Keywords for the invisible redirection",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "subDomain": {
          "canBeNull": true,
          "description": "Subdomain to redirect",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "target": {
          "canBeNull": false,
          "description": "Target of the redirection",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "title": {
          "canBeNull": true,
          "description": "Title for the invisible redirection",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "fullType": "domain.zone.RedirectionTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.zone.RedirectionTypeEnum"
        },
        "zone": {
          "canBeNull": false,
          "description": "Redirection zone",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.zone.RedirectionCreate": {
      "description": "DNS zone redirection create",
      "id": "RedirectionCreate",
      "namespace": "domain.zone",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Description for the invisible redirection",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "keywords": {
          "canBeNull": true,
          "description": "Keywords for the invisible redirection",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "subDomain": {
          "canBeNull": false,
          "description": "Subdomain to redirect",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "target": {
          "canBeNull": false,
          "description": "Target of the redirection",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "title": {
          "canBeNull": true,
          "description": "Title for the invisible redirection",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "fullType": "domain.zone.RedirectionTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "domain.zone.RedirectionTypeEnum"
        }
      }
    },
    "domain.zone.RedirectionTypeEnum": {
      "description": "Redirection type:\n - visible -> Redirection by http code 302\n - visiblePermanent -> Redirection by http code 301\n - invisible -> Redirection by html frame",
      "enum": [
        "invisible",
        "visible",
        "visiblePermanent"
      ],
      "enumType": "string",
      "id": "RedirectionTypeEnum",
      "namespace": "domain.zone"
    },
    "domain.zone.RedirectionUpdate": {
      "description": "DNS zone redirection update",
      "id": "RedirectionUpdate",
      "namespace": "domain.zone",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Description for the invisible redirection",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "keywords": {
          "canBeNull": true,
          "description": "Keywords for the invisible redirection",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "target": {
          "canBeNull": false,
          "description": "Target of the redirection",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "title": {
          "canBeNull": true,
          "description": "Title for the invisible redirection",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "fullType": "domain.zone.RedirectionTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "domain.zone.RedirectionTypeEnum"
        }
      }
    },
    "domain.zone.Reset": {
      "description": "DNS zone reset",
      "id": "Reset",
      "namespace": "domain.zone",
      "properties": {
        "DnsRecords": {
          "canBeNull": false,
          "description": "Records that will be set after reset",
          "fullType": "domain.zone.ResetRecord[]",
          "readOnly": false,
          "required": false,
          "type": "domain.zone.ResetRecord[]"
        },
        "minimized": {
          "canBeNull": false,
          "description": "Create only mandatory records",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "domain.zone.ResetRecord": {
      "description": "Record associated to domain zone reset",
      "id": "ResetRecord",
      "namespace": "domain.zone",
      "properties": {
        "fieldType": {
          "canBeNull": false,
          "description": "Field type associated to domain zone reset",
          "fullType": "domain.zone.ResettableNamedResolutionFieldTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "domain.zone.ResettableNamedResolutionFieldTypeEnum"
        },
        "target": {
          "canBeNull": false,
          "description": "Target associated to domain zone reset",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.zone.ResettableNamedResolutionFieldTypeEnum": {
      "description": "Resource record name",
      "enum": [
        "A",
        "MX"
      ],
      "enumType": "string",
      "id": "ResettableNamedResolutionFieldTypeEnum",
      "namespace": "domain.zone"
    },
    "domain.zone.Soa": {
      "description": "DNS zone SOA",
      "id": "Soa",
      "namespace": "domain.zone",
      "properties": {
        "email": {
          "canBeNull": false,
          "description": "Email address of the DNS Administrator",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "expire": {
          "canBeNull": false,
          "description": "When a zone transfer fails, a countdown clock begins. When the number of seconds set in the expire field elapses, the nameserver stops answering for that zone file",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "nxDomainTtl": {
          "canBeNull": false,
          "description": "Non-Existent Domain TTL, if the name server returns a negative response, the remote server should wait the number of seconds set in the nxDomainTtl field before trying again",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "refresh": {
          "canBeNull": false,
          "description": "The refresh value determines the interval in seconds between successful zone transfers of the entire zone file from a nameserver to another.",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "serial": {
          "canBeNull": false,
          "description": "The serial number is used to indicate which copy of the zone file is the most current. When editing zone files, you must increment the serial number",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "server": {
          "canBeNull": false,
          "description": "Primary authoritative server",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ttl": {
          "canBeNull": false,
          "description": "Time To Live in seconds",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "domain.zone.Status": {
      "description": "DNS zone status",
      "id": "Status",
      "namespace": "domain.zone",
      "properties": {
        "errors": {
          "canBeNull": true,
          "description": "Error list if any",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "isDeployed": {
          "canBeNull": false,
          "description": "Whether the zone is deployed or not",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "warnings": {
          "canBeNull": true,
          "description": "Warning list if any",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "domain.zone.Task": {
      "description": "DNS zone task",
      "id": "Task",
      "namespace": "domain.zone",
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
          "fullType": "domain.TaskFunctionEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.TaskFunctionEnum"
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
          "canBeNull": true,
          "description": "Last update date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the task",
          "fullType": "domain.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.TaskStatusEnum"
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
    "domain.zone.Zone": {
      "description": "Zone dns Management",
      "id": "Zone",
      "namespace": "domain.zone",
      "properties": {
        "dnssecSupported": {
          "canBeNull": false,
          "description": "Is DNSSEC supported by this zone",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "hasDnsAnycast": {
          "canBeNull": false,
          "description": "hasDnsAnycast flag of the DNS zone",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date of the DNS zone",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Zone name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nameServers": {
          "canBeNull": false,
          "description": "Name servers that host the DNS zone",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "domain.zone.ZoneRestorePoint": {
      "description": "DNS zone history",
      "id": "ZoneRestorePoint",
      "namespace": "domain.zone",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "The date of backup creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "zoneFileUrl": {
          "canBeNull": false,
          "description": "The URL of the saved zone at this date",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.zone.ZoneWithIAM": {
      "description": "Zone dns Management",
      "id": "Zone",
      "namespace": "domain.zone",
      "properties": {
        "dnssecSupported": {
          "canBeNull": false,
          "description": "Is DNSSEC supported by this zone",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "hasDnsAnycast": {
          "canBeNull": false,
          "description": "hasDnsAnycast flag of the DNS zone",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date of the DNS zone",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Zone name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nameServers": {
          "canBeNull": false,
          "description": "Name servers that host the DNS zone",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "domain.zone.dynHost.Login": {
      "description": "DNS zone dynHost login",
      "id": "Login",
      "namespace": "domain.zone.dynHost",
      "properties": {
        "login": {
          "canBeNull": false,
          "description": "Login name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "subDomain": {
          "canBeNull": false,
          "description": "Login sub-domain",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zone": {
          "canBeNull": false,
          "description": "Login zone",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.zone.dynHost.LoginChangePassword": {
      "description": "DNS zone dynHost login password change",
      "id": "LoginChangePassword",
      "namespace": "domain.zone.dynHost",
      "properties": {
        "password": {
          "canBeNull": false,
          "description": "New password of the DynHost login",
          "fullType": "password",
          "readOnly": false,
          "required": true,
          "type": "password"
        }
      }
    },
    "domain.zone.dynHost.LoginCreate": {
      "description": "DNS zone dynHost login creation",
      "id": "LoginCreate",
      "namespace": "domain.zone.dynHost",
      "properties": {
        "loginSuffix": {
          "canBeNull": false,
          "description": "Suffix that will be concatenated to the zoneName to create the login",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "password": {
          "canBeNull": false,
          "description": "Password of the login",
          "fullType": "password",
          "readOnly": false,
          "required": true,
          "type": "password"
        },
        "subDomain": {
          "canBeNull": false,
          "description": "Subdomain that the login will be allowed to update (use * to allow all)",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "domain.zone.dynHost.Record": {
      "description": "DNS zone dynHost record",
      "id": "Record",
      "namespace": "domain.zone.dynHost",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Record ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ip": {
          "canBeNull": false,
          "description": "Record IP",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "subDomain": {
          "canBeNull": true,
          "description": "Record sub-domain",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ttl": {
          "canBeNull": true,
          "description": "Record TTL (Time to Live)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "zone": {
          "canBeNull": false,
          "description": "Record zone",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "iam.ResourceMetadata": {
      "description": "IAM resource metadata embedded in services models",
      "id": "ResourceMetadata",
      "namespace": "iam",
      "properties": {
        "displayName": {
          "canBeNull": true,
          "description": "Resource display name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Unique identifier of the resource",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "tags": {
          "canBeNull": true,
          "description": "Resource tags. Tags that were internally computed are prefixed with ovh:",
          "fullType": "map[string]string",
          "readOnly": true,
          "required": false,
          "type": "map[string]string"
        },
        "urn": {
          "canBeNull": false,
          "description": "Unique resource name used in policies",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "iam.resource.TagFilter": {
      "description": "Resource tag filter",
      "id": "TagFilter",
      "namespace": "iam.resource",
      "properties": {
        "operator": {
          "canBeNull": true,
          "description": "Operator to use in order to filter on the value (defaults to 'EQ')",
          "fullType": "iam.resource.TagFilter.OperatorEnum",
          "readOnly": true,
          "required": false,
          "type": "iam.resource.TagFilter.OperatorEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "Value to use in order to filter tags",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "iam.resource.TagFilter.OperatorEnum": {
      "description": "Operator that can be used in order to filter resources tags",
      "enum": [
        "EQ"
      ],
      "enumType": "string",
      "id": "OperatorEnum",
      "namespace": "iam.resource.TagFilter"
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
    "service.TerminationFutureUseEnum": {
      "description": "All future uses you can provide for a service termination",
      "enum": [
        "NOT_REPLACING_SERVICE",
        "OTHER",
        "SUBSCRIBE_AN_OTHER_SERVICE",
        "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
        "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
      ],
      "enumType": "string",
      "id": "TerminationFutureUseEnum",
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
    "zone.Capabilities": {
      "description": "Zone capabilities",
      "id": "Capabilities",
      "namespace": "zone",
      "properties": {
        "dynHost": {
          "canBeNull": false,
          "description": "True if dynHost available for this zone",
          "readOnly": false,
          "required": false,
          "type": "boolean"
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
        "DNAME",
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
    },
    "zone.RedirectionTypeEnum": {
      "description": "Redirection type enum : visible -> Redirection by http code 302, visiblePermanent -> Redirection by http code 301, invisible -> Redirection by html frame",
      "enum": [
        "invisible",
        "visible",
        "visiblePermanent"
      ],
      "enumType": "string",
      "id": "RedirectionTypeEnum",
      "namespace": "zone"
    },
    "zone.ResetRecord": {
      "description": "Resource record",
      "id": "ResetRecord",
      "namespace": "zone",
      "properties": {
        "fieldType": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "zone.ResettableNamedResolutionFieldTypeEnum"
        },
        "target": {
          "canBeNull": false,
          "description": "Resource record target",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "zone.ResettableNamedResolutionFieldTypeEnum": {
      "description": "Resource record type",
      "enum": [
        "A",
        "MX"
      ],
      "enumType": "string",
      "id": "ResettableNamedResolutionFieldTypeEnum",
      "namespace": "zone"
    },
    "zone.Status": {
      "description": "Zone status",
      "id": "Status",
      "namespace": "zone",
      "properties": {
        "errors": {
          "canBeNull": true,
          "description": "Error list",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "isDeployed": {
          "canBeNull": false,
          "description": "True if the zone has successfully been deployed",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "warnings": {
          "canBeNull": true,
          "description": "Warning list",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        }
      }
    }
  },
  "resourcePath": "/domain"
}