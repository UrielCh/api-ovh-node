import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/domain.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the DOMAIN service",
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
              "description": "Filter the value of whoisOwner property (=)",
              "fullType": "string",
              "name": "whoisOwner",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain"
    },
    {
      "description": "Domain name administration",
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Domain",
          "scopes": [
            "all",
            "product/domain/all"
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
              "dataType": "domain.Domain",
              "description": "New object properties",
              "fullType": "domain.Domain",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "responseType": "password",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "responseType": "domain.configurations.ObfuscatedEmail[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Save a new obfuscated emails configuration",
          "httpMethod": "PUT",
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.configurations.ObfuscatedEmail[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "description": "Refresh an obfuscated emails configuration",
          "httpMethod": "POST",
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "responseType": "domain.configurations.Optin[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Save a new optin configuration",
          "httpMethod": "PUT",
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.configurations.Optin[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/{serviceName}/configurations/optin"
    },
    {
      "description": "List the domain.DnssecKey objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of domain's DS Records",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update DS records",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dnssec.Key[]",
              "description": "New Keys",
              "fullType": "dnssec.Key[]",
              "name": "keys",
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
          "responseType": "domain.Task",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/{serviceName}/dsRecord"
    },
    {
      "description": "Domain's DNSSEC Key",
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
          "responseType": "domain.DnssecKey",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a glue record",
          "httpMethod": "POST",
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this glue record",
          "httpMethod": "GET",
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.glueRecord.GlueRecord",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add new name server",
          "httpMethod": "POST",
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this name server configuration",
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.nameServer.FullNameServer",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.nameServer.NameServerStatus",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        },
        {
          "apiStatus": {
            "deletionDate": "2022-03-31T00:00:00+01:00",
            "deprecatedDate": "2022-01-26T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "GET /domain/{serviceName}/nameServer/{id}/status",
            "value": "DEPRECATED"
          },
          "description": "Get name server status",
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
          "responseType": "domain.nameServer.NameServerStatus",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "responseType": "domain.DomainOptionEnum[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get details on this domain option",
          "httpMethod": "GET",
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Option",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "responseType": "domain.ServiceOptions",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/{serviceName}/outgoingTransfer/approve"
    },
    {
      "description": "List the domain.Owo objects",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-03-31T00:00:00+01:00",
            "deprecatedDate": "2022-01-24T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/domain/{serviceName}/configurations/optin",
            "value": "DEPRECATED"
          },
          "description": "List of whois obfuscators",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "domain.WhoisObfuscatorFieldsEnum",
              "description": "Filter the value of field property (=)",
              "fullType": "domain.WhoisObfuscatorFieldsEnum",
              "name": "field",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "domain.WhoisObfuscatorFieldsEnum[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        },
        {
          "apiStatus": {
            "deletionDate": "2022-03-31T00:00:00+01:00",
            "deprecatedDate": "2022-01-24T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Add whois obfuscators",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.WhoisObfuscatorFieldsEnum[]",
              "description": "Fields to obfuscate",
              "fullType": "domain.WhoisObfuscatorFieldsEnum[]",
              "name": "fields",
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
          "responseType": "domain.WhoisObfuscatorFieldsEnum[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/{serviceName}/owo"
    },
    {
      "description": "Obfuscate whois",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-03-31T00:00:00+01:00",
            "deprecatedDate": "2022-01-24T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Delete a whois obfuscator",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.WhoisObfuscatorFieldsEnum",
              "description": "Obfuscated field",
              "fullType": "domain.WhoisObfuscatorFieldsEnum",
              "name": "field",
              "paramType": "path",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        },
        {
          "apiStatus": {
            "deletionDate": "2022-03-31T00:00:00+01:00",
            "deprecatedDate": "2022-01-24T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.WhoisObfuscatorFieldsEnum",
              "description": "Obfuscated field",
              "fullType": "domain.WhoisObfuscatorFieldsEnum",
              "name": "field",
              "paramType": "path",
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
          "responseType": "domain.Owo",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/{serviceName}/owo/{field}"
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
          "responseType": "domain.configurations.ContactTypeEnum[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "responseType": "domain.rules.Optin[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "description": "Get this object properties",
          "httpMethod": "GET",
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
          "responseType": "services.Service",
          "scopes": [
            "all",
            "product/domain/all"
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "responseType": "domain.UkRegistrar[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "noAuthentication": false,
          "parameters": [],
          "responseType": "domain.Contact[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a contact",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.Contact",
              "description": "Request Body",
              "fullType": "domain.Contact",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "domain.Contact",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "noAuthentication": false,
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
          "responseType": "domain.Contact",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update a contact",
          "httpMethod": "PUT",
          "noAuthentication": false,
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
          "responseType": "domain.Contact",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
            "deletionDate": "2021-08-31T00:00:00+00:00",
            "deprecatedDate": "2021-02-01T00:00:00+00:00",
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
      "description": "Operations on domain name extensions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all extensions",
          "httpMethod": "GET",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "responseType": "domain.extensions.Extension",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "description": "Retrieve registry configurations for an extension",
          "httpMethod": "GET",
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
          "responseType": "domain.extensions.registryConfigurations.RegistryConfigurations",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "responseType": "domain.extensions.ExtensionsByCategory",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "description": "Lists highlighted extensions, ordered by decreased importance",
          "httpMethod": "GET",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "description": "List extensions with their pricing attributes. It especially documents whether an extension has been implemented recently or whether the price has dropped",
          "httpMethod": "GET",
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
          "responseType": "domain.extensions.ExtensionsPricingAttributes[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/extensions/pricingAttributes"
    },
    {
      "description": "Operations about the DNS service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone"
    },
    {
      "description": "Zone dns Management",
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
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Zone",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}"
    },
    {
      "description": "capabilities operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Zone capabilities",
          "httpMethod": "GET",
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
          "responseType": "zone.Capabilities",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/changeContact"
    },
    {
      "description": "Confirm termination of your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Confirm termination of your service",
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
              "description": "The termination token sent by mail to the admin contact",
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
          "responseType": "string",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/confirmTermination"
    },
    {
      "description": "Manage Dnssec for this zone",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable Dnssec",
          "httpMethod": "DELETE",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
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
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Dnssec",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Enable Dnssec",
          "httpMethod": "POST",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/dnssec"
    },
    {
      "description": "export operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Export zone",
          "httpMethod": "GET",
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
          "responseType": "text",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/export"
    },
    {
      "description": "List the domain.zone.ZoneRestorePoint objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Zone restore points",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            },
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
          "responseType": "datetime[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/history"
    },
    {
      "description": "Zone restore point",
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
              "dataType": "datetime",
              "description": "Date of backup creation",
              "fullType": "datetime",
              "name": "creationDate",
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
          "responseType": "domain.zone.ZoneRestorePoint",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/history/{creationDate}"
    },
    {
      "description": "restore operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Restore the DNS zone",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Date of backup creation",
              "fullType": "datetime",
              "name": "creationDate",
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
          "responseType": "domain.zone.Task",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/history/{creationDate}/restore"
    },
    {
      "description": "import operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Import zone",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "text",
              "description": "Zone file that will be imported",
              "fullType": "text",
              "name": "zoneFile",
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
          "responseType": "domain.zone.Task",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/import"
    },
    {
      "description": "List the domain.zone.Option objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List zone options",
          "httpMethod": "GET",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/option"
    },
    {
      "description": "Information about the options of a zone",
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
          "responseType": "domain.zone.Option",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "responseType": "services.Service",
          "scopes": [
            "all",
            "product/domain/all"
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/option/{name}/serviceInfos"
    },
    {
      "description": "List the domain.zone.Record objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Records of the zone",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "zone.NamedResolutionFieldTypeEnum",
              "description": "Filter the value of fieldType property (like)",
              "fullType": "zone.NamedResolutionFieldTypeEnum",
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new DNS record (Don't forget to refresh the zone)",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "zone.NamedResolutionFieldTypeEnum",
              "description": "Resource record Name",
              "fullType": "zone.NamedResolutionFieldTypeEnum",
              "name": "fieldType",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Resource record subdomain",
              "fullType": "string",
              "name": "subDomain",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Resource record target",
              "fullType": "string",
              "name": "target",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Resource record ttl",
              "fullType": "long",
              "name": "ttl",
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
          "responseType": "domain.zone.Record",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/record"
    },
    {
      "description": "Zone resource records",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a DNS record (Don't forget to refresh the zone)",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
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
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
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
          "responseType": "domain.zone.Record",
          "scopes": [
            "all",
            "product/domain/all"
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
              "dataType": "domain.zone.Record",
              "description": "New object properties",
              "fullType": "domain.zone.Record",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/record/{id}"
    },
    {
      "description": "List the domain.zone.Redirection objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Redirections",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of subDomain property (like)",
              "fullType": "string",
              "name": "subDomain",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new redirection (Don't forget to refresh the zone)",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Desciption for invisible redirection",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Keywords for invisible redirection",
              "fullType": "string",
              "name": "keywords",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "subdomain to redirect",
              "fullType": "string",
              "name": "subDomain",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Target of the redirection",
              "fullType": "string",
              "name": "target",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Title for invisible redirection",
              "fullType": "string",
              "name": "title",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "zone.RedirectionTypeEnum",
              "description": "Redirection type",
              "fullType": "zone.RedirectionTypeEnum",
              "name": "type",
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
          "responseType": "domain.zone.Redirection",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/redirection"
    },
    {
      "description": "Redirection",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a redirection (Don't forget to refresh the zone)",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
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
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
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
          "responseType": "domain.zone.Redirection",
          "scopes": [
            "all",
            "product/domain/all"
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
              "dataType": "domain.zone.Redirection",
              "description": "New object properties",
              "fullType": "domain.zone.Redirection",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/redirection/{id}"
    },
    {
      "description": "refresh operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Apply zone modification on DNS servers",
          "httpMethod": "POST",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/refresh"
    },
    {
      "description": "reset operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reset the DNS zone",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "zone.ResetRecord[]",
              "description": "Records that will be set after reset",
              "fullType": "zone.ResetRecord[]",
              "name": "DnsRecords",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Create only mandatory records",
              "fullType": "boolean",
              "name": "minimized",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
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
          "description": "Get this object properties",
          "httpMethod": "GET",
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
          "responseType": "services.Service",
          "scopes": [
            "all",
            "product/domain/all"
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/serviceInfos"
    },
    {
      "description": "Zone Start Of Authority",
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
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Soa",
          "scopes": [
            "all",
            "product/domain/all"
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
              "dataType": "domain.zone.Soa",
              "description": "New object properties",
              "fullType": "domain.zone.Soa",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/soa"
    },
    {
      "description": "status operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Zone status",
          "httpMethod": "GET",
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
          "responseType": "zone.Status",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/status"
    },
    {
      "description": "List the domain.zone.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Domain pending tasks",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/task"
    },
    {
      "description": "Tasks associated to a zone",
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
          "responseType": "domain.zone.Task",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/task/{id}"
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
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/task/{id}/accelerate"
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
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/task/{id}/cancel"
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
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/task/{id}/relaunch"
    },
    {
      "description": "Terminate your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Terminate your service",
          "httpMethod": "POST",
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
          "responseType": "string",
          "scopes": [
            "all",
            "product/domain/all"
          ]
        }
      ],
      "path": "/domain/zone/{zoneName}/terminate"
    }
  ],
  "basePath": "https://ca.api.ovh.com/1.0",
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
      "description": "Key type",
      "id": "Key",
      "namespace": "dnssec",
      "properties": {
        "algorithm": {
          "canBeNull": false,
          "description": "Algorithm",
          "readOnly": false,
          "required": false,
          "type": "dnssec.KeyAlgorithmEnum"
        },
        "flags": {
          "canBeNull": false,
          "description": "Flag of the dnssec key",
          "readOnly": false,
          "required": false,
          "type": "dnssec.KeyFlagEnum"
        },
        "publicKey": {
          "canBeNull": false,
          "description": "Public key",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "tag": {
          "canBeNull": false,
          "description": "Key tag",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "dnssec.KeyAlgorithmEnum": {
      "description": "Dnssec Algorithm\n                        ###\n                        5  : RSASHA1\n                        7  : RSASHA1-NSEC3-SHA1\n                        8  : RSASHA256\n                        10 : RSASHA512\n                        13 : ECDSAP256SHA256\n                        14 : ECDSAP384SHA384\n                        15 : ED25519",
      "enum": [
        "10",
        "13",
        "14",
        "15",
        "5",
        "7",
        "8"
      ],
      "enumType": "long",
      "id": "KeyAlgorithmEnum",
      "namespace": "dnssec"
    },
    "dnssec.KeyFlagEnum": {
      "description": "Dnssec Key Flag Type\n                        ###\n                        256 : Zone Signing Key (ZSK)\n                        257 : Key  Signing Key (KSK)",
      "enum": [
        "256",
        "257"
      ],
      "enumType": "long",
      "id": "KeyFlagEnum",
      "namespace": "dnssec"
    },
    "dnssec.KeyStatusEnum": {
      "description": "\n                Generated : The key has been created, but has not yet been used for anything.\n                ###\n                Published : The DNSKEY record is published in the zone, but predecessors of the key may be held in caches.\n                ###\n                Ready     : The new key data has been published for long enough to guarantee that any previous versions of the DNSKEY RRset have expired from caches.\n                ###\n                Active    : The key has started to be used to sign RRsets.\n                ###\n                Retired   : A successor key has become active and this key is no longer being used to generate RRSIGs.\n                ###\n                Removed   : The key has been removed from the zone.\n                ###\n                Revoked   : The key is published for a period with the \"revoke\" bit set as a way of notifying validating resolvers that have configured it as an trust anchor that it is about to be removed from the zone.",
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
    "domain.DnssecKey": {
      "description": "Domain's DNSSEC Key",
      "id": "DnssecKey",
      "namespace": "domain",
      "properties": {
        "algorithm": {
          "canBeNull": false,
          "description": "Algorithm number of the DNSSEC key",
          "fullType": "dnssec.KeyAlgorithmEnum",
          "readOnly": true,
          "required": false,
          "type": "dnssec.KeyAlgorithmEnum"
        },
        "flags": {
          "canBeNull": false,
          "description": "Flag of the DNSSEC key",
          "fullType": "dnssec.KeyFlagEnum",
          "readOnly": true,
          "required": false,
          "type": "dnssec.KeyFlagEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the DNSSEC key",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "publicKey": {
          "canBeNull": false,
          "description": "Public key",
          "fullType": "string",
          "readOnly": true,
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
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
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
    "domain.DomainStateEnum": {
      "description": "Domain name current state",
      "enum": [
        "deleted",
        "dispute",
        "expired",
        "ok",
        "outgoing_transfer",
        "pending_delete",
        "pending_installation",
        "restorable"
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
    "domain.Owo": {
      "description": "Obfuscate whois",
      "id": "Owo",
      "namespace": "domain",
      "properties": {
        "field": {
          "canBeNull": false,
          "description": "Obfuscated field",
          "fullType": "domain.WhoisObfuscatorFieldsEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.WhoisObfuscatorFieldsEnum"
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the parent service",
          "readOnly": false,
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
    "domain.WhoisObfuscatorFieldsEnum": {
      "description": "Whois obfuscable fields",
      "enum": [
        "address",
        "email",
        "phone"
      ],
      "enumType": "string",
      "id": "WhoisObfuscatorFieldsEnum",
      "namespace": "domain"
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
          "description": "Trademark UDRP informations",
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
          "fullType": "domain.nameServer.NameServer[]",
          "readOnly": false,
          "required": true,
          "type": "domain.nameServer.NameServer[]"
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
      "description": "Name server",
      "id": "NameServer",
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
        "external",
        "hosted"
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
          "fullType": "domain.nameServer.NameServer[]",
          "readOnly": false,
          "required": true,
          "type": "domain.nameServer.NameServer[]"
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
    "domain.zone.Dnssec": {
      "description": "Manage Dnssec for this zone",
      "id": "Dnssec",
      "namespace": "domain.zone",
      "properties": {
        "status": {
          "canBeNull": false,
          "fullType": "dnssec.DnssecStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dnssec.DnssecStatusEnum"
        }
      }
    },
    "domain.zone.Option": {
      "description": "Information about the options of a zone",
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
    "domain.zone.Redirection": {
      "description": "Redirection",
      "id": "Redirection",
      "namespace": "domain.zone",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Desciption for invisible redirection",
          "fullType": "string",
          "readOnly": false,
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
          "description": "Keywords for invisible redirection",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "subDomain": {
          "canBeNull": true,
          "description": "subdomain to redirect",
          "fullType": "string",
          "readOnly": true,
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
          "description": "Title for invisible redirection",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Redirection type",
          "fullType": "zone.RedirectionTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "zone.RedirectionTypeEnum"
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
    "domain.zone.Soa": {
      "description": "Zone Start Of Authority",
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
    "domain.zone.Task": {
      "description": "Tasks associated to a zone",
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
      "description": "Zone restore point",
      "id": "ZoneRestorePoint",
      "namespace": "domain.zone",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Date of backup creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "zoneFileUrl": {
          "canBeNull": false,
          "description": "URL to get backup content",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
        "IN",
        "QC",
        "SG",
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