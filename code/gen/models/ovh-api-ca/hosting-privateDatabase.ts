import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/hosting/privateDatabase.json

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
          "description": "List available Web Cloud Databases",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
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
      "path": "/hosting/privateDatabase"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get a Web Cloud Database properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:get",
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
          "responseType": "hosting.privateDatabase.ServiceWithIAM"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter a Web Cloud Database properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:put",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.privateDatabase.Service",
              "description": "Request Body",
              "fullType": "hosting.privateDatabase.Service",
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
      "path": "/hosting/privateDatabase/{serviceName}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the availables versions for this private database",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:availableVersions/get",
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
          "responseType": "hosting.privateDatabase.AvailableVersionEnum[]"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/availableVersions"
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
              "name": "webCloudDatabases:apiovh:changeContact",
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
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/changeContact"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change FTP password of your Web Cloud Database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:changeFtpPassword",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.privateDatabase.ChangeFtpPasswordPayload",
              "description": "Request Body",
              "fullType": "hosting.privateDatabase.ChangeFtpPasswordPayload",
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
          "responseType": "hosting.privateDatabase.Task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/changeFtpPassword"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change DBMS version of your Web Cloud Database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:changeVersion",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.privateDatabase.ChangeVersionPayload",
              "description": "Request Body",
              "fullType": "hosting.privateDatabase.ChangeVersionPayload",
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
          "responseType": "hosting.privateDatabase.Task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/changeVersion"
    },
    {
      "description": "Configuration",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:config/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.Configuration"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/config"
    },
    {
      "description": "update operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update the configuration",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:config/update",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "complexType.SafeKeyValue<string>[]",
              "description": "Array of instance configuration parameters",
              "fullType": "complexType.SafeKeyValue<string>[]",
              "name": "parameters",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.Configuration"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/config/update"
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
              "name": "webCloudDatabases:apiovh:confirmTermination",
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
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/confirmTermination"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of privatesql CPU throttle",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:cpuThrottle/get",
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
          "responseType": "hosting.privateDatabase.CpuThrottle[]"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/cpuThrottle"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List databases on a privateDatabase",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:database/get",
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new database in a Web Cloud Database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:database/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.privateDatabase.Database.CreatePayload",
              "description": "Request Body",
              "fullType": "hosting.privateDatabase.Database.CreatePayload",
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
          "responseType": "hosting.privateDatabase.Task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/database"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a database from a Web Cloud Database",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:database/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
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
          "responseType": "hosting.privateDatabase.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get database properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:database/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
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
          "responseType": "hosting.privateDatabase.Database"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}"
    },
    {
      "description": "List the hosting.privateDatabase.database.copy objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Copies available for your databases",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:database/copy/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new copy of your database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:database/copy/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.database.copy"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/copy"
    },
    {
      "description": "Copy",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the database copy",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:database/copy/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Copy id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your private database",
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
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:database/copy/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Copy id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.database.copy"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/copy/{id}"
    },
    {
      "description": "copyRestore operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request the copy restore in this database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:database/copyRestore",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "UUID of the copy to restore",
              "fullType": "uuid",
              "name": "copyId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "If database will be flushed before importing the dump. Default: false",
              "fullType": "boolean",
              "name": "flushDatabase",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/copyRestore"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all database dump from a Web Cloud Database",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:database/dump/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
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
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request the dump of this database (an email will be sent with a link available 30 days)",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:database/dump/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.privateDatabase.Database.CreateDump",
              "description": "Request Body",
              "fullType": "hosting.privateDatabase.Database.CreateDump",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
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
          "responseType": "hosting.privateDatabase.Task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete dump before expiration date",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:database/dump/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get a database dump from a Web Cloud Database",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:database/dump/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.Database.Dump"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request the restore from this dump",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:database/dump/restore",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.Task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}/restore"
    },
    {
      "description": "List the hosting.privateDatabase.database.extension objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Extensions linked to your database",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:database/extension/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of extensionName property (like)",
              "fullType": "string",
              "name": "extensionName",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "hosting.PrivateDatabase.Database.Extension.Status",
              "description": "Filter the value of status property (=)",
              "fullType": "hosting.PrivateDatabase.Database.Extension.Status",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension"
    },
    {
      "description": "Databases extension",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:database/extension/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Extension name",
              "fullType": "string",
              "name": "extensionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.database.extension"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable an extension from a database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:database/extension/disable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Extension name",
              "fullType": "string",
              "name": "extensionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Enable an extension on a database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:database/extension/enable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Extension name",
              "fullType": "string",
              "name": "extensionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}/enable"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Import a database into a Web Cloud Database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:database/import",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.privateDatabase.Database.ImportPayload",
              "description": "Request Body",
              "fullType": "hosting.privateDatabase.Database.ImportPayload",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
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
          "responseType": "hosting.privateDatabase.Task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/import"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new database/user and grant it",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:databaseWizard/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.privateDatabase.DatabaseWizardPayload",
              "description": "Request Body",
              "fullType": "hosting.privateDatabase.DatabaseWizardPayload",
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
          "responseType": "hosting.privateDatabase.Task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/databaseWizard"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all database dump from a Web Cloud Database",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:dump/get",
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
              "description": "Filter the value of databaseName property (like)",
              "fullType": "string",
              "name": "databaseName",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Filter the value of orphan property (=)",
              "fullType": "boolean",
              "name": "orphan",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/dump"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a database dump from a Web Cloud Database",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:dump/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Dump ID",
              "fullType": "long",
              "name": "dumpId",
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
          "responseType": "hosting.privateDatabase.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get a database dump from a Web Cloud Database",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:dump/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Dump ID",
              "fullType": "long",
              "name": "dumpId",
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
          "responseType": "hosting.privateDatabase.Dump"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/dump/{dumpId}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Restore a database dump into a Web Cloud Database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:dump/restore",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.privateDatabase.Dump.Restore",
              "description": "Request Body",
              "fullType": "hosting.privateDatabase.Dump.Restore",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Dump ID",
              "fullType": "long",
              "name": "dumpId",
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
          "responseType": "hosting.privateDatabase.Task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/dump/{dumpId}/restore"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate a temporary link to access logs for a Web Cloud Database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:generateTemporaryLogsLink",
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
          "responseType": "hosting.privateDatabase.TemporaryUrlInformations"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/generateTemporaryLogsLink"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of privatesql OOM kill",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:oom/get",
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
          "responseType": "hosting.privateDatabase.Oom[]"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/oom"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Refresh the quota of your Web Cloud Database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:quotaRefresh",
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
          "responseType": "hosting.privateDatabase.Task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/quotaRefresh"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Restart the Web Cloud Database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:restart",
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
          "responseType": "hosting.privateDatabase.Task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/restart"
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
              "name": "webCloudDatabases:apiovh:serviceInfos/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your private database",
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
              "name": "webCloudDatabases:apiovh:serviceInfos/edit",
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
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/serviceInfos"
    },
    {
      "description": "start operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Start the private database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:start",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/start"
    },
    {
      "description": "stop operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Stop the private database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:stop",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/stop"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List tasks for a Webcloud Database",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:tasks/get",
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
              "dataType": "hosting.privateDatabase.task.FunctionEnum",
              "description": "Filter the value of function property",
              "fullType": "hosting.privateDatabase.task.FunctionEnum",
              "name": "function",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "hosting.privateDatabase.task.StatusEnum",
              "description": "Filter the value of status property",
              "fullType": "hosting.privateDatabase.task.StatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/tasks"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get task details",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:tasks/get",
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
          "responseType": "hosting.privateDatabase.Task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/tasks/{id}"
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
              "name": "webCloudDatabases:apiovh:terminate",
              "required": true
            }
          ],
          "longDescription": "Ask for the termination of your service. Admin contact of this service will receive a termination token by email in order to confirm its termination with /confirmTermination endpoint.",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/terminate"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List users on a Web Cloud Database",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:user/get",
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a user on a Web Cloud Database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:user/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.privateDatabase.User.CreatePayload",
              "description": "Request Body",
              "fullType": "hosting.privateDatabase.User.CreatePayload",
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
          "responseType": "hosting.privateDatabase.Task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/user"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a user on a Web Cloud Database",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:user/delete",
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
              "description": "User name",
              "fullType": "string",
              "name": "userName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get user properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:user/get",
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
              "description": "User name",
              "fullType": "string",
              "name": "userName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.User"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/user/{userName}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the password of a user on a Web Cloud Database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:user/changePassword",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.privateDatabase.User.ChangePasswordPayload",
              "description": "Request Body",
              "fullType": "hosting.privateDatabase.User.ChangePasswordPayload",
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
            },
            {
              "dataType": "string",
              "description": "User name",
              "fullType": "string",
              "name": "userName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.Task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/user/{userName}/changePassword"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all information about the grants for a user in a Web Cloud Database",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:user/grant/get",
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
              "description": "User name",
              "fullType": "string",
              "name": "userName",
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
          "description": "Add grant on a Web Cloud Database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:user/grant/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.privateDatabase.User.Grant.Create",
              "description": "Request Body",
              "fullType": "hosting.privateDatabase.User.Grant.Create",
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
            },
            {
              "dataType": "string",
              "description": "User name",
              "fullType": "string",
              "name": "userName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.Task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/user/{userName}/grant"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a grant from a Web Cloud Database",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:user/grant/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
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
            },
            {
              "dataType": "string",
              "description": "User name",
              "fullType": "string",
              "name": "userName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about the grants for a user in a Web Cloud Database",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:user/grant/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
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
            },
            {
              "dataType": "string",
              "description": "User name",
              "fullType": "string",
              "name": "userName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.User.Grant"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update the permissions of a grant for a user on a Web Cloud Database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:user/grant/update",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.privateDatabase.User.Grant.Update",
              "description": "Request Body",
              "fullType": "hosting.privateDatabase.User.Grant.Update",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Database name",
              "fullType": "string",
              "name": "databaseName",
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
            },
            {
              "dataType": "string",
              "description": "User name",
              "fullType": "string",
              "name": "userName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.Task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}/update"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete access from the web hosting network on a Web Cloud Database",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:webhostingNetwork/delete",
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
          "responseType": "hosting.privateDatabase.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get Webhosting network status",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:webhostingNetwork/get",
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
          "responseType": "hosting.privateDatabase.webhostingNetwork"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Permit access from the web hosting network on a Web Cloud Database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:webhostingNetwork/create",
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
          "responseType": "hosting.privateDatabase.Task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/webhostingNetwork"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List linked webs",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:webs/get",
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
          "responseType": "string[]"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/webs"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List whitelists on a Web Cloud Database",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:whitelist/get",
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
              "description": "Filter the value of ip property (contains or equals)",
              "fullType": "string",
              "name": "ip",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Filter the value of service property",
              "fullType": "boolean",
              "name": "service",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Filter the value of sftp property",
              "fullType": "boolean",
              "name": "sftp",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "ipv4Block[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new IP whitelist in a Web Cloud Database",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:whitelist/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.privateDatabase.Whitelist.CreatePayload",
              "description": "Request Body",
              "fullType": "hosting.privateDatabase.Whitelist.CreatePayload",
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
          "responseType": "hosting.privateDatabase.Task"
        }
      ],
      "path": "/hosting/privateDatabase/{serviceName}/whitelist"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an IP whitelist from a Web Cloud Database",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:whitelist/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4Block",
              "description": "Ip",
              "fullType": "ipv4Block",
              "name": "ip",
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
          "responseType": "hosting.privateDatabase.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get whitelist properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:whitelist/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4Block",
              "description": "Ip",
              "fullType": "ipv4Block",
              "name": "ip",
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
          "responseType": "hosting.privateDatabase.Whitelist"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update an IP whitelist in a Web Cloud Database",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "webCloudDatabases:apiovh:whitelist/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.privateDatabase.Whitelist",
              "description": "Request Body",
              "fullType": "hosting.privateDatabase.Whitelist",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4Block",
              "description": "Ip",
              "fullType": "ipv4Block",
              "name": "ip",
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
      "path": "/hosting/privateDatabase/{serviceName}/whitelist/{ip}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get available order capacities",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:webCloudDatabases/availableOrderCapacities/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.privateDatabase.OfferEnum",
              "description": "",
              "fullType": "hosting.privateDatabase.OfferEnum",
              "name": "offer",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "hosting.privateDatabase.availableOrderCapacities"
        }
      ],
      "path": "/hosting/privateDatabase/availableOrderCapacities"
    }
  ],
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
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
          "description": "Unit of the value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Value",
          "fullType": "T",
          "readOnly": true,
          "required": false,
          "type": "T"
        }
      }
    },
    "complexType.UnitAndValue<long>": {
      "description": "A numeric value tagged with its unit",
      "generics": [
        "T"
      ],
      "id": "UnitAndValue",
      "namespace": "complexType",
      "properties": {
        "unit": {
          "canBeNull": false,
          "description": "Unit of the value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Value",
          "fullType": "T",
          "readOnly": true,
          "required": false,
          "type": "T"
        }
      }
    },
    "hosting.PrivateDatabase.AvailableOrderCapacities": {
      "description": "Description for available order capacities following an offer",
      "id": "AvailableOrderCapacities",
      "namespace": "hosting.PrivateDatabase",
      "properties": {
        "datacenter": {
          "canBeNull": false,
          "description": "A list of datacenter available for this offer",
          "readOnly": false,
          "required": false,
          "type": "hosting.PrivateDatabase.DatacenterEnum[]"
        },
        "offer": {
          "canBeNull": false,
          "description": "Offer",
          "readOnly": false,
          "required": false,
          "type": "hosting.PrivateDatabase.OfferEnum"
        },
        "ram": {
          "canBeNull": false,
          "description": "A list of ram size available for this offer",
          "readOnly": false,
          "required": false,
          "type": "hosting.PrivateDatabase.AvailableRamSizeEnum[]"
        },
        "version": {
          "canBeNull": false,
          "description": "A list of version available for this offer",
          "readOnly": false,
          "required": false,
          "type": "hosting.PrivateDatabase.AvailableVersionEnum[]"
        }
      }
    },
    "hosting.PrivateDatabase.AvailableRamSizeEnum": {
      "description": "Private database available ram sizes",
      "enum": [
        "1024",
        "2048",
        "4096",
        "512"
      ],
      "enumType": "string",
      "id": "AvailableRamSizeEnum",
      "namespace": "hosting.PrivateDatabase"
    },
    "hosting.PrivateDatabase.AvailableVersionEnum": {
      "description": "Private database available versions",
      "enum": [
        "mariadb_10.11",
        "mariadb_10.4",
        "mariadb_10.5",
        "mariadb_10.6",
        "mysql_5.7",
        "mysql_8.0",
        "postgresql_12",
        "postgresql_13",
        "postgresql_14",
        "postgresql_15",
        "redis_6.0",
        "redis_7.0"
      ],
      "enumType": "string",
      "id": "AvailableVersionEnum",
      "namespace": "hosting.PrivateDatabase"
    },
    "hosting.PrivateDatabase.Capability": {
      "description": "Private database capability",
      "id": "Capability",
      "namespace": "hosting.PrivateDatabase",
      "properties": {
        "create": {
          "canBeNull": false,
          "description": "Can the object be created",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "delete": {
          "canBeNull": false,
          "description": "Can the object be deleted",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "object": {
          "canBeNull": false,
          "description": "Object name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "update": {
          "canBeNull": false,
          "description": "Can the object be updated",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "hosting.PrivateDatabase.Configuration.Detail": {
      "description": "Configuration detail property",
      "id": "Detail",
      "namespace": "hosting.PrivateDatabase.Configuration",
      "properties": {
        "availableValues": {
          "canBeNull": false,
          "description": "Configuration available values",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "defaultValue": {
          "canBeNull": false,
          "description": "Configuration default value",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": "Configuration description",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "key": {
          "canBeNull": false,
          "description": "Configuration key name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Configuration last update date",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "type": {
          "canBeNull": false,
          "description": "Configuration value type",
          "readOnly": false,
          "required": false,
          "type": "hosting.PrivateDatabase.Configuration.DetailType"
        },
        "unit": {
          "canBeNull": true,
          "description": "Configuration unit type",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Configuration current value",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.PrivateDatabase.Configuration.DetailType": {
      "description": "Configuration detail type",
      "enum": [
        "boolean",
        "number",
        "string"
      ],
      "enumType": "string",
      "id": "DetailType",
      "namespace": "hosting.PrivateDatabase.Configuration"
    },
    "hosting.PrivateDatabase.Configuration.Status": {
      "description": "Configuration status",
      "enum": [
        "applied",
        "updating"
      ],
      "enumType": "string",
      "id": "Status",
      "namespace": "hosting.PrivateDatabase.Configuration"
    },
    "hosting.PrivateDatabase.CpuThrottle": {
      "description": "CPU throttle informations",
      "id": "CpuThrottle",
      "namespace": "hosting.PrivateDatabase",
      "properties": {
        "endDate": {
          "canBeNull": true,
          "description": "End date of the CPU throttle",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Start date of the CPU throttle",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "hosting.PrivateDatabase.Database.Copy.Status": {
      "description": "Copy status",
      "enum": [
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "Status",
      "namespace": "hosting.PrivateDatabase.Database.Copy"
    },
    "hosting.PrivateDatabase.Database.Extension.Status": {
      "description": "Extension status",
      "enum": [
        "disabled",
        "disabling",
        "enabled",
        "enabling"
      ],
      "enumType": "string",
      "id": "Status",
      "namespace": "hosting.PrivateDatabase.Database.Extension"
    },
    "hosting.PrivateDatabase.Database.User": {
      "description": "User granted to a database",
      "id": "User",
      "namespace": "hosting.PrivateDatabase.Database",
      "properties": {
        "grantId": {
          "canBeNull": false,
          "description": "The grantId associated for this databaseName and this userName",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "grantType": {
          "canBeNull": false,
          "description": "User's rights on this database",
          "readOnly": false,
          "required": false,
          "type": "hosting.PrivateDatabase.grant.GrantEnum"
        },
        "userName": {
          "canBeNull": false,
          "description": "User's name granted on this database",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.PrivateDatabase.DatacenterEnum": {
      "description": "Available datacenters",
      "enum": [
        "bhs1",
        "gra1",
        "gra2",
        "gra3",
        "p19"
      ],
      "enumType": "string",
      "id": "DatacenterEnum",
      "namespace": "hosting.PrivateDatabase"
    },
    "hosting.PrivateDatabase.GraphEndpoint": {
      "description": "Parameters required to query metrics from OpenTSDB",
      "id": "GraphEndpoint",
      "namespace": "hosting.PrivateDatabase",
      "properties": {
        "host": {
          "canBeNull": false,
          "description": "The OpenTSDB host",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "readToken": {
          "canBeNull": false,
          "description": "A read-only token",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "readTokenId": {
          "canBeNull": false,
          "description": "A read-only token ID",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.PrivateDatabase.LogSubscriptionResource": {
      "description": "Log subscription resource",
      "id": "LogSubscriptionResource",
      "namespace": "hosting.PrivateDatabase",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of subscribed resource",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of subscribed resource",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.PrivateDatabase.LogSubscriptionResponse": {
      "description": "synchronous operation after subscribing or unsubscribing to a resource logs",
      "id": "LogSubscriptionResponse",
      "namespace": "hosting.PrivateDatabase",
      "properties": {
        "operationId": {
          "canBeNull": false,
          "description": "Identifier of the operation",
          "readOnly": false,
          "required": false,
          "type": "uuid"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Operation owner's service name",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.PrivateDatabase.OfferEnum": {
      "description": "Available offers",
      "enum": [
        "classic",
        "public"
      ],
      "enumType": "string",
      "id": "OfferEnum",
      "namespace": "hosting.PrivateDatabase"
    },
    "hosting.PrivateDatabase.Oom": {
      "description": "OOM kill informations",
      "id": "Oom",
      "namespace": "hosting.PrivateDatabase",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": "Date of the OOM kill",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "sizeReached": {
          "canBeNull": false,
          "description": "Memory size reached",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "hosting.PrivateDatabase.StateEnum": {
      "description": "Private database state",
      "enum": [
        "detached",
        "restartPending",
        "startPending",
        "started",
        "stopPending",
        "stopped"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "hosting.PrivateDatabase"
    },
    "hosting.PrivateDatabase.TemporaryLogsLink": {
      "description": "Temporary url informations",
      "id": "TemporaryLogsLink",
      "namespace": "hosting.PrivateDatabase",
      "properties": {
        "expirationDate": {
          "canBeNull": false,
          "description": "Temporary url expiration date",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "url": {
          "canBeNull": false,
          "description": "Temporary url",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.PrivateDatabase.TypeEnum": {
      "description": "Private database type",
      "enum": [
        "mariadb",
        "mysql",
        "postgresql",
        "redis"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "hosting.PrivateDatabase"
    },
    "hosting.PrivateDatabase.User.Database": {
      "description": "Databases linked to an user",
      "id": "Database",
      "namespace": "hosting.PrivateDatabase.User",
      "properties": {
        "databaseName": {
          "canBeNull": false,
          "description": "Database's name linked to this user",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "grantId": {
          "canBeNull": false,
          "description": "The grantId associated to this userName for this databaseName",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "grantType": {
          "canBeNull": false,
          "description": "Grant of this user for this database",
          "readOnly": false,
          "required": false,
          "type": "hosting.PrivateDatabase.grant.GrantEnum"
        }
      }
    },
    "hosting.PrivateDatabase.WebhostingNetwork.Status": {
      "description": "Webhosting network status",
      "enum": [
        "disabled",
        "disabling",
        "enabled",
        "enabling"
      ],
      "enumType": "string",
      "id": "Status",
      "namespace": "hosting.PrivateDatabase.WebhostingNetwork"
    },
    "hosting.PrivateDatabase.Whitelist.Status": {
      "description": "Whitelist status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updating"
      ],
      "enumType": "string",
      "id": "Status",
      "namespace": "hosting.PrivateDatabase.Whitelist"
    },
    "hosting.PrivateDatabase.grant.GrantEnum": {
      "description": "Grant on a database for a specific user",
      "enum": [
        "admin",
        "none",
        "ro",
        "rw"
      ],
      "enumType": "string",
      "id": "GrantEnum",
      "namespace": "hosting.PrivateDatabase.grant"
    },
    "hosting.PrivateDatabase.task.FunctionEnum": {
      "description": "Task's function",
      "enum": [
        "abuse",
        "changeFtpPassword",
        "changeRam",
        "changeVersion",
        "configuration/update",
        "create",
        "database/copy",
        "database/copyRestore",
        "database/create",
        "database/delete",
        "database/dump",
        "database/dump/delete",
        "database/extension/create",
        "database/extension/delete",
        "database/import",
        "database/restore",
        "database/wizard",
        "delete",
        "grant/create",
        "grant/delete",
        "grant/update",
        "install",
        "overquota/in",
        "overquota/out",
        "quotaRefresh",
        "refresh",
        "reopen",
        "restart",
        "start",
        "stop",
        "suspend",
        "user/changePassword",
        "user/create",
        "user/delete",
        "webhostingNetwork/disable",
        "webhostingNetwork/enable",
        "whitelist/create",
        "whitelist/delete",
        "whitelist/update"
      ],
      "enumType": "string",
      "id": "FunctionEnum",
      "namespace": "hosting.PrivateDatabase.task"
    },
    "hosting.PrivateDatabase.task.StatusEnum": {
      "description": "Task's status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "hosting.PrivateDatabase.task"
    },
    "hosting.privateDatabase.AvailableRamSizeEnum": {
      "description": "Private database available ram sizes",
      "enum": [
        "1024",
        "2048",
        "4096",
        "512"
      ],
      "enumType": "string",
      "id": "AvailableRamSizeEnum",
      "namespace": "hosting.privateDatabase"
    },
    "hosting.privateDatabase.AvailableVersionEnum": {
      "description": "Private database available version",
      "enum": [
        "mariadb_10.11",
        "mariadb_10.4",
        "mariadb_10.5",
        "mariadb_10.6",
        "mysql_5.7",
        "mysql_8.0",
        "postgresql_12",
        "postgresql_13",
        "postgresql_14",
        "postgresql_15",
        "redis_6.0",
        "redis_7.0"
      ],
      "enumType": "string",
      "id": "AvailableVersionEnum",
      "namespace": "hosting.privateDatabase"
    },
    "hosting.privateDatabase.Capability": {
      "description": "Private database capability",
      "id": "Capability",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "create": {
          "canBeNull": false,
          "description": "Can the object be created",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "delete": {
          "canBeNull": false,
          "description": "Can the object be deleted",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "object": {
          "canBeNull": false,
          "description": "Object name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "update": {
          "canBeNull": false,
          "description": "Can the object be updated",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "hosting.privateDatabase.ChangeFtpPasswordPayload": {
      "description": "Payload used to change the FTP password of a Web Cloud Database",
      "id": "ChangeFtpPasswordPayload",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "password": {
          "canBeNull": false,
          "description": "New ftp admin password (alphanumeric and 8 characters minimum)",
          "fullType": "password",
          "readOnly": false,
          "required": true,
          "type": "password"
        }
      }
    },
    "hosting.privateDatabase.ChangeVersionPayload": {
      "description": "Payload used to change the DBMS version of a Web Cloud Database",
      "id": "ChangeVersionPayload",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "version": {
          "canBeNull": false,
          "description": "Change the private database engine version",
          "fullType": "hosting.privateDatabase.AvailableVersionEnum",
          "readOnly": false,
          "required": true,
          "type": "hosting.privateDatabase.AvailableVersionEnum"
        }
      }
    },
    "hosting.privateDatabase.Configuration": {
      "description": "Configuration",
      "id": "Configuration",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "details": {
          "canBeNull": false,
          "description": "Configuration full details",
          "fullType": "hosting.PrivateDatabase.Configuration.Detail[]",
          "readOnly": true,
          "required": false,
          "type": "hosting.PrivateDatabase.Configuration.Detail[]"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Configuration status",
          "fullType": "hosting.PrivateDatabase.Configuration.Status",
          "readOnly": true,
          "required": false,
          "type": "hosting.PrivateDatabase.Configuration.Status"
        },
        "taskId": {
          "canBeNull": true,
          "description": "Configuration linked task id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.privateDatabase.CpuThrottle": {
      "description": "CPU throttle informations",
      "id": "CpuThrottle",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "endDate": {
          "canBeNull": true,
          "description": "End date of the CPU throttle",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Start date of the CPU throttle",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "hosting.privateDatabase.Database": {
      "description": "Databases",
      "id": "Database",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "backupTime": {
          "canBeNull": true,
          "description": "Time of the next backup (every day)",
          "fullType": "time",
          "readOnly": true,
          "required": false,
          "type": "time"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of the database",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "databaseName": {
          "canBeNull": false,
          "description": "Database name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quotaUsed": {
          "canBeNull": false,
          "description": "Space used by the database",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "users": {
          "canBeNull": false,
          "description": "Users granted to this database",
          "fullType": "hosting.privateDatabase.Database.User[]",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.Database.User[]"
        }
      }
    },
    "hosting.privateDatabase.Database.CreateDump": {
      "description": "Dumps",
      "id": "CreateDump",
      "namespace": "hosting.privateDatabase.Database",
      "properties": {
        "sendEmail": {
          "canBeNull": false,
          "description": "Whether to receive an email when the import is complete (default to false)",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "hosting.privateDatabase.Database.CreatePayload": {
      "description": "Payload used to create a database on a Web Cloud Database",
      "id": "CreatePayload",
      "namespace": "hosting.privateDatabase.Database",
      "properties": {
        "databaseName": {
          "canBeNull": false,
          "description": "Name of your new database",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "hosting.privateDatabase.Database.Dump": {
      "description": "Dumps",
      "id": "Dump",
      "namespace": "hosting.privateDatabase.Database",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of the dump",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "databaseName": {
          "canBeNull": false,
          "description": "Dump of this database name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "deletionDate": {
          "canBeNull": false,
          "description": "Automatic deletion date of the dump",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Dump id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "url": {
          "canBeNull": false,
          "description": "Dump URL access",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.privateDatabase.Database.ImportPayload": {
      "description": "Payload used to import a dump in a database on a Web Cloud Database",
      "id": "ImportPayload",
      "namespace": "hosting.privateDatabase.Database",
      "properties": {
        "documentId": {
          "canBeNull": false,
          "description": "Documents ID of the dump from /me/documents",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "flushDatabase": {
          "canBeNull": false,
          "description": "Whether to flush the database before importing the dump (default to false)",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "sendEmail": {
          "canBeNull": false,
          "description": "Whether to receive an email when the import is complete (default to false)",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "hosting.privateDatabase.Database.User": {
      "description": "Users",
      "id": "User",
      "namespace": "hosting.privateDatabase.Database",
      "properties": {
        "grantId": {
          "canBeNull": false,
          "description": "The grantId associated for this databaseName and this userName",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "grantType": {
          "canBeNull": false,
          "description": "User's rights on this database",
          "fullType": "hosting.PrivateDatabase.grant.GrantEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.PrivateDatabase.grant.GrantEnum"
        },
        "userName": {
          "canBeNull": false,
          "description": "User's name granted on this database",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.privateDatabase.DatabaseWizardPayload": {
      "description": "Payload used to create user and grant and apply it on a new database on a Web Cloud Database",
      "id": "DatabaseWizardPayload",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "databaseName": {
          "canBeNull": false,
          "description": "Name of your new database",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "grant": {
          "canBeNull": false,
          "description": "Grant of the user on this database",
          "fullType": "hosting.PrivateDatabase.grant.GrantEnum",
          "readOnly": false,
          "required": true,
          "type": "hosting.PrivateDatabase.grant.GrantEnum"
        },
        "password": {
          "canBeNull": false,
          "description": "Password for the new user (alphanumeric and 8 characters minimum)",
          "fullType": "password",
          "readOnly": false,
          "required": true,
          "type": "password"
        },
        "userName": {
          "canBeNull": false,
          "description": "New user name used to connect on your database",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "hosting.privateDatabase.DatacenterEnum": {
      "description": "Private database datacenter",
      "enum": [
        "bhs1",
        "gra1",
        "gra2",
        "gra3"
      ],
      "enumType": "string",
      "id": "DatacenterEnum",
      "namespace": "hosting.privateDatabase"
    },
    "hosting.privateDatabase.Dump": {
      "description": "Dumps",
      "id": "Dump",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of the dump",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "databaseName": {
          "canBeNull": false,
          "description": "Dump of this database name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "deletionDate": {
          "canBeNull": false,
          "description": "Automatic deletion date of the dump",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "dumpId": {
          "canBeNull": false,
          "description": "Dump id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "orphan": {
          "canBeNull": false,
          "description": "Dump orphan flag (true if database does not exists)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "url": {
          "canBeNull": false,
          "description": "Dump URL access",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.privateDatabase.Dump.Restore": {
      "description": "Restore a database dump into a Web Cloud Database",
      "id": "Restore",
      "namespace": "hosting.privateDatabase.Dump",
      "properties": {
        "databaseName": {
          "canBeNull": false,
          "description": "Database name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.privateDatabase.GraphEndpoint": {
      "description": "Parameters required to query metrics from OpenTSDB",
      "id": "GraphEndpoint",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "host": {
          "canBeNull": false,
          "description": "The OpenTSDB host",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "readToken": {
          "canBeNull": false,
          "description": "A read-only token",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        },
        "readTokenId": {
          "canBeNull": false,
          "description": "A read-only token ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.privateDatabase.InfrastructureEnum": {
      "description": "Private database infrastructure",
      "enum": [
        "docker"
      ],
      "enumType": "string",
      "id": "InfrastructureEnum",
      "namespace": "hosting.privateDatabase"
    },
    "hosting.privateDatabase.OfferEnum": {
      "description": "Available offers",
      "enum": [
        "classic",
        "public"
      ],
      "enumType": "string",
      "id": "OfferEnum",
      "namespace": "hosting.privateDatabase"
    },
    "hosting.privateDatabase.Oom": {
      "description": "List of privatesql OOM kill",
      "id": "Oom",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": "Date of the OOM kill",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "sizeReached": {
          "canBeNull": false,
          "description": "Memory size reached",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "hosting.privateDatabase.Service": {
      "description": "Web Cloud Database",
      "id": "Service",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "capabilities": {
          "canBeNull": false,
          "description": "Private database capabilities",
          "fullType": "hosting.privateDatabase.Capability[]",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.Capability[]"
        },
        "cpu": {
          "canBeNull": false,
          "description": "Number of cpu on your private database",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "datacenter": {
          "canBeNull": false,
          "description": "Datacenter where this private database is located",
          "fullType": "hosting.privateDatabase.DatacenterEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.DatacenterEnum"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Set the name displayed in customer panel for your private database (max 50 chars)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "graphEndpoint": {
          "canBeNull": true,
          "description": "Parameters required to query metrics from OpenTSDB",
          "fullType": "hosting.privateDatabase.GraphEndpoint",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.GraphEndpoint"
        },
        "guiURL": {
          "canBeNull": true,
          "description": "URL for the graphical user interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "hostname": {
          "canBeNull": false,
          "description": "Private database hostname",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "hostnameFtp": {
          "canBeNull": true,
          "description": "Private database ftp hostname",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "infrastructure": {
          "canBeNull": false,
          "description": "Infrastructure where service was stored",
          "fullType": "hosting.privateDatabase.InfrastructureEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.InfrastructureEnum"
        },
        "ip": {
          "canBeNull": true,
          "description": "Private database ip",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "lastCheck": {
          "canBeNull": false,
          "description": "Date of the last data synchronization",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "offer": {
          "canBeNull": false,
          "description": "Type of the private database offer",
          "fullType": "hosting.privateDatabase.OfferEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.OfferEnum"
        },
        "port": {
          "canBeNull": false,
          "description": "Private database service port",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "portFtp": {
          "canBeNull": true,
          "description": "Private database ftp port",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "quotaSize": {
          "canBeNull": false,
          "description": "Space allowed on your private database",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "quotaUsed": {
          "canBeNull": false,
          "description": "Total space used on your private database",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "ram": {
          "canBeNull": false,
          "description": "Amount of ram on your private database",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "server": {
          "canBeNull": false,
          "description": "Private database server name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Private database state",
          "fullType": "hosting.privateDatabase.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.StateEnum"
        },
        "tlsCa": {
          "canBeNull": true,
          "description": "Return the TLS certificate authority used by the private database",
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        },
        "type": {
          "canBeNull": false,
          "description": "Private database type",
          "fullType": "hosting.privateDatabase.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.TypeEnum"
        },
        "version": {
          "canBeNull": false,
          "description": "Private database version",
          "fullType": "hosting.privateDatabase.VersionEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.VersionEnum"
        },
        "versionLabel": {
          "canBeNull": false,
          "description": "Private database version label",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "versionNumber": {
          "canBeNull": false,
          "description": "Private database version number",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "hosting.privateDatabase.ServiceWithIAM": {
      "description": "Web Cloud Database",
      "id": "Service",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "capabilities": {
          "canBeNull": false,
          "description": "Private database capabilities",
          "fullType": "hosting.privateDatabase.Capability[]",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.Capability[]"
        },
        "cpu": {
          "canBeNull": false,
          "description": "Number of cpu on your private database",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "datacenter": {
          "canBeNull": false,
          "description": "Datacenter where this private database is located",
          "fullType": "hosting.privateDatabase.DatacenterEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.DatacenterEnum"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Set the name displayed in customer panel for your private database (max 50 chars)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "graphEndpoint": {
          "canBeNull": true,
          "description": "Parameters required to query metrics from OpenTSDB",
          "fullType": "hosting.privateDatabase.GraphEndpoint",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.GraphEndpoint"
        },
        "guiURL": {
          "canBeNull": true,
          "description": "URL for the graphical user interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "hostname": {
          "canBeNull": false,
          "description": "Private database hostname",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "hostnameFtp": {
          "canBeNull": true,
          "description": "Private database ftp hostname",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
        },
        "infrastructure": {
          "canBeNull": false,
          "description": "Infrastructure where service was stored",
          "fullType": "hosting.privateDatabase.InfrastructureEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.InfrastructureEnum"
        },
        "ip": {
          "canBeNull": true,
          "description": "Private database ip",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "lastCheck": {
          "canBeNull": false,
          "description": "Date of the last data synchronization",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "offer": {
          "canBeNull": false,
          "description": "Type of the private database offer",
          "fullType": "hosting.privateDatabase.OfferEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.OfferEnum"
        },
        "port": {
          "canBeNull": false,
          "description": "Private database service port",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "portFtp": {
          "canBeNull": true,
          "description": "Private database ftp port",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "quotaSize": {
          "canBeNull": false,
          "description": "Space allowed on your private database",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "quotaUsed": {
          "canBeNull": false,
          "description": "Total space used on your private database",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "ram": {
          "canBeNull": false,
          "description": "Amount of ram on your private database",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "server": {
          "canBeNull": false,
          "description": "Private database server name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Private database state",
          "fullType": "hosting.privateDatabase.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.StateEnum"
        },
        "tlsCa": {
          "canBeNull": true,
          "description": "Return the TLS certificate authority used by the private database",
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        },
        "type": {
          "canBeNull": false,
          "description": "Private database type",
          "fullType": "hosting.privateDatabase.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.TypeEnum"
        },
        "version": {
          "canBeNull": false,
          "description": "Private database version",
          "fullType": "hosting.privateDatabase.VersionEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.VersionEnum"
        },
        "versionLabel": {
          "canBeNull": false,
          "description": "Private database version label",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "versionNumber": {
          "canBeNull": false,
          "description": "Private database version number",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "hosting.privateDatabase.StateEnum": {
      "description": "Private database state",
      "enum": [
        "detached",
        "restartPending",
        "startPending",
        "started",
        "stopPending",
        "stopped"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "hosting.privateDatabase"
    },
    "hosting.privateDatabase.Task": {
      "description": "Web Cloud Database task",
      "id": "Task",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "databaseName": {
          "canBeNull": true,
          "description": "Database name on which the task is working",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "doneDate": {
          "canBeNull": true,
          "description": "Completion date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "dumpId": {
          "canBeNull": true,
          "description": "DumpId on which the task is working",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "function": {
          "canBeNull": false,
          "description": "Function name",
          "fullType": "hosting.privateDatabase.task.FunctionEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.task.FunctionEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "The id of the task",
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
        "startDate": {
          "canBeNull": false,
          "description": "Task creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "hosting.privateDatabase.task.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.task.StatusEnum"
        },
        "userName": {
          "canBeNull": true,
          "description": "User name on which the task is working",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.privateDatabase.TemporaryUrlInformations": {
      "description": " Temporary url information",
      "id": "TemporaryUrlInformations",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "expirationDate": {
          "canBeNull": false,
          "description": "Temporary url expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "url": {
          "canBeNull": false,
          "description": "Temporary url",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.privateDatabase.TypeEnum": {
      "description": "Private database type",
      "enum": [
        "mariadb",
        "mysql",
        "postgresql",
        "redis"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "hosting.privateDatabase"
    },
    "hosting.privateDatabase.User": {
      "description": "Users",
      "id": "User",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of the user",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "databases": {
          "canBeNull": false,
          "description": "Databases granted for this user",
          "fullType": "hosting.privateDatabase.User.Database[]",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.User.Database[]"
        },
        "userName": {
          "canBeNull": false,
          "description": "User name used to connect to your databases",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.privateDatabase.User.ChangePasswordPayload": {
      "description": "Payload used to change the password of a user on a Web Cloud Database",
      "id": "ChangePasswordPayload",
      "namespace": "hosting.privateDatabase.User",
      "properties": {
        "password": {
          "canBeNull": false,
          "description": "Password for the new user ( alphanumeric and 8 characters minimum )",
          "fullType": "password",
          "readOnly": false,
          "required": true,
          "type": "password"
        }
      }
    },
    "hosting.privateDatabase.User.CreatePayload": {
      "description": "Payload used to create a user on a Web Cloud Database",
      "id": "CreatePayload",
      "namespace": "hosting.privateDatabase.User",
      "properties": {
        "password": {
          "canBeNull": false,
          "description": "Password for the new user ( alphanumeric and 8 characters minimum )",
          "fullType": "password",
          "readOnly": false,
          "required": true,
          "type": "password"
        },
        "userName": {
          "canBeNull": false,
          "description": "User name used to connect on your databases",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "hosting.privateDatabase.User.Database": {
      "description": "Users",
      "id": "Database",
      "namespace": "hosting.privateDatabase.User",
      "properties": {
        "databaseName": {
          "canBeNull": false,
          "description": "Database granted for this user",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "grantId": {
          "canBeNull": false,
          "description": "The grantId associated for this databaseName and this userName",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "grantType": {
          "canBeNull": false,
          "description": "User's rights on this database",
          "fullType": "hosting.PrivateDatabase.grant.GrantEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.PrivateDatabase.grant.GrantEnum"
        }
      }
    },
    "hosting.privateDatabase.User.Grant": {
      "description": "Grant",
      "id": "Grant",
      "namespace": "hosting.privateDatabase.User",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Automatic deletion date of the dump",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "databaseName": {
          "canBeNull": false,
          "description": "Dump of this database name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "grant": {
          "canBeNull": false,
          "description": "Grant set",
          "fullType": "hosting.PrivateDatabase.grant.GrantEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.PrivateDatabase.grant.GrantEnum"
        }
      }
    },
    "hosting.privateDatabase.User.Grant.Create": {
      "description": "Grant",
      "id": "Create",
      "namespace": "hosting.privateDatabase.User.Grant",
      "properties": {
        "databaseName": {
          "canBeNull": false,
          "description": "Database name where add grant",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "grant": {
          "canBeNull": false,
          "description": "Grant on a database for a specific user",
          "fullType": "hosting.PrivateDatabase.grant.GrantEnum",
          "readOnly": false,
          "required": true,
          "type": "hosting.PrivateDatabase.grant.GrantEnum"
        }
      }
    },
    "hosting.privateDatabase.User.Grant.Update": {
      "description": "Update user grant",
      "id": "Update",
      "namespace": "hosting.privateDatabase.User.Grant",
      "properties": {
        "grant": {
          "canBeNull": false,
          "description": "Grant on a database for a specific user",
          "fullType": "hosting.PrivateDatabase.grant.GrantEnum",
          "readOnly": false,
          "required": true,
          "type": "hosting.PrivateDatabase.grant.GrantEnum"
        }
      }
    },
    "hosting.privateDatabase.VersionEnum": {
      "description": "Private database version",
      "enum": [
        "mariadb_10.11",
        "mariadb_10.4",
        "mariadb_10.5",
        "mariadb_10.6",
        "mysql_5.7",
        "mysql_8.0",
        "postgresql_12",
        "postgresql_13",
        "postgresql_14",
        "postgresql_15",
        "redis_6.0",
        "redis_7.0"
      ],
      "enumType": "string",
      "id": "VersionEnum",
      "namespace": "hosting.privateDatabase"
    },
    "hosting.privateDatabase.Whitelist": {
      "description": "Whitelist",
      "id": "Whitelist",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of this whitelist",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "ip": {
          "canBeNull": false,
          "description": "The whitelisted IP in your Web Cloud Database",
          "fullType": "ipv4Block",
          "readOnly": true,
          "required": false,
          "type": "ipv4Block"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "The last update date of this whitelist",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "name": {
          "canBeNull": true,
          "description": "Custom name for your Whitelisted IP",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "service": {
          "canBeNull": false,
          "description": "Authorize this IP to access service port",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "sftp": {
          "canBeNull": false,
          "description": "Authorize this IP to access sftp port",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "status": {
          "canBeNull": false,
          "description": "Whitelist status",
          "fullType": "hosting.privateDatabase.whitelist.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.whitelist.StatusEnum"
        },
        "taskId": {
          "canBeNull": true,
          "description": "The id of the task working on this object",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "hosting.privateDatabase.Whitelist.CreatePayload": {
      "description": "Whitelist",
      "id": "CreatePayload",
      "namespace": "hosting.privateDatabase.Whitelist",
      "properties": {
        "ip": {
          "canBeNull": false,
          "description": "The whitelisted IP in your Web Cloud Database",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Custom name for your Whitelisted IP",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "service": {
          "canBeNull": false,
          "description": "Authorize this IP to access service port",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "sftp": {
          "canBeNull": false,
          "description": "Authorize this IP to access sftp port",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "hosting.privateDatabase.availableOrderCapacities": {
      "description": "Description for available order capacities following an offer",
      "id": "availableOrderCapacities",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "datacenter": {
          "canBeNull": false,
          "description": "A list of datacenter available for this offer",
          "fullType": "hosting.privateDatabase.DatacenterEnum[]",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.DatacenterEnum[]"
        },
        "offer": {
          "canBeNull": false,
          "description": "Offer",
          "fullType": "hosting.privateDatabase.OfferEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.OfferEnum"
        },
        "ram": {
          "canBeNull": false,
          "description": "A list of ram size available for this offer",
          "fullType": "hosting.privateDatabase.AvailableRamSizeEnum[]",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.AvailableRamSizeEnum[]"
        },
        "version": {
          "canBeNull": false,
          "description": "A list of version available for this offer",
          "fullType": "hosting.privateDatabase.AvailableVersionEnum[]",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.AvailableVersionEnum[]"
        }
      }
    },
    "hosting.privateDatabase.database": {
      "description": "Databases",
      "id": "database",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "backupTime": {
          "canBeNull": true,
          "description": "Time of the next backup ( every day )",
          "fullType": "time",
          "readOnly": true,
          "required": false,
          "type": "time"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of the database",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "databaseName": {
          "canBeNull": false,
          "description": "Database name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quotaUsed": {
          "canBeNull": false,
          "description": "Space used by the database",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "users": {
          "canBeNull": false,
          "description": "Users granted to this database",
          "fullType": "hosting.PrivateDatabase.Database.User[]",
          "readOnly": true,
          "required": false,
          "type": "hosting.PrivateDatabase.Database.User[]"
        }
      }
    },
    "hosting.privateDatabase.database.copy": {
      "description": "Copy",
      "id": "database.copy",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "expirationDate": {
          "canBeNull": true,
          "description": "Expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Copy id",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Copy status",
          "fullType": "hosting.PrivateDatabase.Database.Copy.Status",
          "readOnly": true,
          "required": false,
          "type": "hosting.PrivateDatabase.Database.Copy.Status"
        }
      }
    },
    "hosting.privateDatabase.database.dump": {
      "description": "Dump",
      "id": "database.dump",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of the dump",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "databaseName": {
          "canBeNull": false,
          "description": "Dump of this database name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "deletionDate": {
          "canBeNull": false,
          "description": "Automatic deletion date of the dump",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Dump id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "url": {
          "canBeNull": false,
          "description": "Dump url access",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.privateDatabase.database.extension": {
      "description": "Databases extension",
      "id": "database.extension",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Extension description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "extensionName": {
          "canBeNull": false,
          "description": "Extension name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "requiredExtensions": {
          "canBeNull": false,
          "description": "Name of required extensions to enable this one",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Extension status",
          "fullType": "hosting.PrivateDatabase.Database.Extension.Status",
          "readOnly": true,
          "required": false,
          "type": "hosting.PrivateDatabase.Database.Extension.Status"
        }
      }
    },
    "hosting.privateDatabase.dump": {
      "description": "Dump",
      "id": "dump",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of the dump",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "databaseName": {
          "canBeNull": false,
          "description": "Dump of this database name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "deletionDate": {
          "canBeNull": false,
          "description": "Automatic deletion date of the dump",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "dumpId": {
          "canBeNull": false,
          "description": "Dump id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "orphan": {
          "canBeNull": false,
          "description": "Dump orphan flag ( true if database does not exists )",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "url": {
          "canBeNull": false,
          "description": "Dump url access",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.privateDatabase.grant": {
      "description": "Grants",
      "id": "grant",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of the grant",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "databaseName": {
          "canBeNull": false,
          "description": "Database name where grant is set",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "grant": {
          "canBeNull": false,
          "description": "Grant set",
          "fullType": "hosting.PrivateDatabase.grant.GrantEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.PrivateDatabase.grant.GrantEnum"
        }
      }
    },
    "hosting.privateDatabase.ldpKind": {
      "description": "Log kind for your instance",
      "id": "ldpKind",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "additionalReturnedFields": {
          "canBeNull": false,
          "description": "List of additional log fields managed in this log kind",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Creation date of the log kind",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "displayName": {
          "canBeNull": false,
          "description": "Log kind display name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "kindId": {
          "canBeNull": false,
          "description": "Log kind ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "name": {
          "canBeNull": false,
          "description": "Log kind name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Last update date of the log kind",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "hosting.privateDatabase.ldpSubscription": {
      "description": "Log subscription for your instance",
      "id": "ldpSubscription",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "Creation date of the subscription",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "kind": {
          "canBeNull": false,
          "description": "Log kind name of this subscription",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "resource": {
          "canBeNull": false,
          "description": "Subscribed resource, where the logs come from",
          "fullType": "hosting.PrivateDatabase.LogSubscriptionResource",
          "readOnly": true,
          "required": false,
          "type": "hosting.PrivateDatabase.LogSubscriptionResource"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Name of the destination log service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "streamId": {
          "canBeNull": false,
          "description": "Id of the destination log stream",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "subscriptionId": {
          "canBeNull": false,
          "description": "Subscription ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Last update date of the subscription",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "hosting.privateDatabase.task": {
      "description": "Tasks",
      "id": "task",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "databaseName": {
          "canBeNull": true,
          "description": "Database name on which the task is working",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "doneDate": {
          "canBeNull": true,
          "description": "Completion date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "dumpId": {
          "canBeNull": true,
          "description": "DumpId on which the task is working",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "function": {
          "canBeNull": false,
          "description": "Function name",
          "fullType": "hosting.PrivateDatabase.task.FunctionEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.PrivateDatabase.task.FunctionEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "The id of the task",
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
        "startDate": {
          "canBeNull": false,
          "description": "Task Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "hosting.PrivateDatabase.task.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.PrivateDatabase.task.StatusEnum"
        },
        "userName": {
          "canBeNull": true,
          "description": "User name on which the task is working",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.privateDatabase.task.FunctionEnum": {
      "description": "Task's dunction",
      "enum": [
        "abuse",
        "changeFtpPassword",
        "changeRam",
        "changeVersion",
        "configuration/update",
        "create",
        "database/copy",
        "database/copyRestore",
        "database/create",
        "database/delete",
        "database/dump",
        "database/dump/delete",
        "database/extension/create",
        "database/extension/delete",
        "database/import",
        "database/restore",
        "database/wizard",
        "delete",
        "grant/create",
        "grant/delete",
        "grant/update",
        "install",
        "overquota/in",
        "overquota/out",
        "quotaRefresh",
        "refresh",
        "reopen",
        "restart",
        "start",
        "stop",
        "suspend",
        "user/changePassword",
        "user/create",
        "user/delete",
        "webhostingNetwork/disable",
        "webhostingNetwork/enable",
        "whitelist/create",
        "whitelist/delete",
        "whitelist/update"
      ],
      "enumType": "string",
      "id": "FunctionEnum",
      "namespace": "hosting.privateDatabase.task"
    },
    "hosting.privateDatabase.task.StatusEnum": {
      "description": "Task's status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "hosting.privateDatabase.task"
    },
    "hosting.privateDatabase.user": {
      "description": "Users",
      "id": "user",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of the user",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "databases": {
          "canBeNull": false,
          "description": "Databases granted for this user",
          "fullType": "hosting.PrivateDatabase.User.Database[]",
          "readOnly": true,
          "required": false,
          "type": "hosting.PrivateDatabase.User.Database[]"
        },
        "userName": {
          "canBeNull": false,
          "description": "User name used to connect to your databases",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.privateDatabase.webhostingNetwork": {
      "description": "webhosting Network",
      "id": "webhostingNetwork",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "status": {
          "canBeNull": false,
          "description": "Webhosting network status",
          "fullType": "hosting.privateDatabase.webhostingNetwork.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "hosting.privateDatabase.webhostingNetwork.StatusEnum"
        }
      }
    },
    "hosting.privateDatabase.webhostingNetwork.StatusEnum": {
      "description": "Webhosting network status",
      "enum": [
        "disabled",
        "disabling",
        "enabled",
        "enabling"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "hosting.privateDatabase.webhostingNetwork"
    },
    "hosting.privateDatabase.whitelist": {
      "description": "IP whitelisting for your instance",
      "id": "whitelist",
      "namespace": "hosting.privateDatabase",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of this whitelist",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "ip": {
          "canBeNull": false,
          "description": "The whitelisted IP in your instance",
          "fullType": "ipBlock",
          "readOnly": true,
          "required": false,
          "type": "ipBlock"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "The last update date of this whitelist",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "name": {
          "canBeNull": true,
          "description": "Custom name for your Whitelisted IP",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "service": {
          "canBeNull": false,
          "description": "Authorize this IP to access service port",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "sftp": {
          "canBeNull": false,
          "description": "Authorize this IP to access sftp port",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "status": {
          "canBeNull": false,
          "description": "Whitelist status",
          "fullType": "hosting.PrivateDatabase.Whitelist.Status",
          "readOnly": true,
          "required": false,
          "type": "hosting.PrivateDatabase.Whitelist.Status"
        },
        "taskId": {
          "canBeNull": true,
          "description": "The id of the task working on this object",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "hosting.privateDatabase.whitelist.StatusEnum": {
      "description": "Whitelist status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updating"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "hosting.privateDatabase.whitelist"
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
    }
  },
  "resourcePath": "/hosting/privateDatabase"
}