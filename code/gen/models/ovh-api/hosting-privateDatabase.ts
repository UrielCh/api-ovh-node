import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/hosting/privateDatabase",
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
      "description": "Operations about the SQLPRIVE service"
    },
    {
      "path": "/hosting/privateDatabase/availableOrderCapacities",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "offer",
              "dataType": "hosting.PrivateDatabase.OfferEnum",
              "paramType": "query",
              "fullType": "hosting.PrivateDatabase.OfferEnum",
              "required": true,
              "description": "Offer available order capacities to choose"
            }
          ],
          "responseType": "hosting.PrivateDatabase.AvailableOrderCapacities",
          "noAuthentication": false,
          "description": "Get available order capacitie"
        }
      ],
      "description": "Get available order capacitie"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.privateDatabase.Service",
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
              "dataType": "hosting.privateDatabase.Service",
              "paramType": "body",
              "fullType": "hosting.privateDatabase.Service",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Private database"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/availableVersions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.PrivateDatabase.AvailableVersionEnum[]",
          "noAuthentication": false,
          "description": "Get the availables versions for this private database"
        }
      ],
      "description": "availableVersions operations"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/changeContact",
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
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
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
      "path": "/hosting/privateDatabase/{serviceName}/changeFtpPassword",
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
              "description": "New ftp admin password ( alphanumeric and 8 characters minimum )"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Change your ftp admin password"
        }
      ],
      "description": "changeFtpPassword operations"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/changeVersion",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "version",
              "dataType": "hosting.PrivateDatabase.AvailableVersionEnum",
              "paramType": "body",
              "fullType": "hosting.PrivateDatabase.AvailableVersionEnum",
              "required": true,
              "description": "Private database versions"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Change the private database engine version"
        }
      ],
      "description": "changeVersion operations"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/config",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.privateDatabase.Configuration",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Configuration"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/config/update",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "parameters",
              "dataType": "complexType.SafeKeyValue<string>[]",
              "paramType": "body",
              "fullType": "complexType.SafeKeyValue<string>[]",
              "required": true,
              "description": "Array of instance configuration parameters"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.privateDatabase.Configuration",
          "noAuthentication": false,
          "description": "Update the configuration"
        }
      ],
      "description": "update operations"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/confirmTermination",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "commentary",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Commentary about your termination request"
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
              "name": "futureUse",
              "dataType": "service.TerminationFutureUseEnum",
              "paramType": "body",
              "fullType": "service.TerminationFutureUseEnum",
              "required": false,
              "description": "What next after your termination request"
            },
            {
              "name": "reason",
              "dataType": "service.TerminationReasonEnum",
              "paramType": "body",
              "fullType": "service.TerminationReasonEnum",
              "required": false,
              "description": "Reason of your termination request"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Confirm termination of your service"
        }
      ],
      "description": "Confirm termination of your service"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/database",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Databases linked to your private database service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of your new database"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Create a new database on your private database service"
        }
      ],
      "description": "List the hosting.privateDatabase.database objects"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Database name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Delete the database"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Database name"
            }
          ],
          "responseType": "hosting.privateDatabase.database",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Databas"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Database name"
            },
            {
              "name": "deletionDate",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of deletionDate property (like)"
            },
            {
              "name": "creationDate",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDate property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Dump available for your databases"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "sendEmail",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Send an email when dump will be available? Default: false"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Database name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Request the dump of this database ( an email will be send with a link available 30 days )"
        }
      ],
      "description": "List the hosting.privateDatabase.database.dump objects"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Database name"
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
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Delete dump before expiration date"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Database name"
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
          "responseType": "hosting.privateDatabase.database.dump",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Dump"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}/restore",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Database name"
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
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Request the restore from this dump"
        }
      ],
      "description": "restore operations"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Database name"
            },
            {
              "name": "status",
              "dataType": "hosting.PrivateDatabase.Database.Extension.Status",
              "paramType": "query",
              "fullType": "hosting.PrivateDatabase.Database.Extension.Status",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "name": "extensionName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of extensionName property (like)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Extensions linked to your database"
        }
      ],
      "description": "List the hosting.privateDatabase.database.extension objects"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Database name"
            },
            {
              "name": "extensionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Extension name"
            }
          ],
          "responseType": "hosting.privateDatabase.database.extension",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Databases extension"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}/disable",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Database name"
            },
            {
              "name": "extensionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Extension name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Disable an extension from a database"
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}/enable",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "extensionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Extension name"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Database name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Enable an extension on a database"
        }
      ],
      "description": "enable operations"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/import",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "documentId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Documents ID of the dump from /me/documents"
            },
            {
              "name": "sendEmail",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Send an email when the import will be done? Default: false"
            },
            {
              "name": "flushDatabase",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "If database will be flushed before importing the dump. Default: false"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Database name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Request the import in this database"
        }
      ],
      "description": "import operations"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/databaseWizard",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "grant",
              "dataType": "hosting.PrivateDatabase.grant.GrantEnum",
              "paramType": "body",
              "fullType": "hosting.PrivateDatabase.grant.GrantEnum",
              "required": true,
              "description": "Grant of the user on this database"
            },
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of your new database"
            },
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Password for the new user ( alphanumeric and 8 characters minimum )"
            },
            {
              "name": "userName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "New user name used to connect on your database"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Create a new database/user and grant it"
        }
      ],
      "description": "databaseWizard operations"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/dump",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "orphan",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Filter the value of orphan property (=)"
            },
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of databaseName property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Dumps available for your private database service"
        }
      ],
      "description": "List the hosting.privateDatabase.dump objects"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/dump/{dumpId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "dumpId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Dump ID"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Delete dump before expiration date"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "dumpId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Dump ID"
            }
          ],
          "responseType": "hosting.privateDatabase.dump",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Dump"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/dump/{dumpId}/restore",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The database where you want to restore this dump"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "dumpId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Dump ID"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Request the restore from this dump"
        }
      ],
      "description": "restore operations"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/generateTemporaryLogsLink",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.PrivateDatabase.TemporaryLogsLink",
          "noAuthentication": false,
          "description": "Generate a temporary url to retrieve instance logs"
        }
      ],
      "description": "generateTemporaryLogsLink operations"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/oom",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.PrivateDatabase.Oom[]",
          "noAuthentication": false,
          "description": "List of privatesql OOM kill"
        }
      ],
      "description": "oom operations"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/quotaRefresh",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Refresh the quota of your private database"
        }
      ],
      "description": "quotaRefresh operations"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/restart",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Restart the private database"
        }
      ],
      "description": "restart operations"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/serviceInfos",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
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
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
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
      "path": "/hosting/privateDatabase/{serviceName}/start",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Start the private database"
        }
      ],
      "description": "start operations"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/stop",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Stop the private database"
        }
      ],
      "description": "stop operations"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/tasks",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "status",
              "dataType": "hosting.PrivateDatabase.task.StatusEnum",
              "paramType": "query",
              "fullType": "hosting.PrivateDatabase.task.StatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "name": "function",
              "dataType": "hosting.PrivateDatabase.task.FunctionEnum",
              "paramType": "query",
              "fullType": "hosting.PrivateDatabase.task.FunctionEnum",
              "required": false,
              "description": "Filter the value of function property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Tasks attached to your private database service"
        }
      ],
      "description": "List the hosting.privateDatabase.task objects"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/tasks/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
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
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Task"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/terminate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Terminate your service"
        }
      ],
      "description": "Terminate your service"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/user",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "User allowed to connect on your databases"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "userName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "User name used to connect on your databases"
            },
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Password for the new user ( alphanumeric and 8 characters minimum )"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Create a new user on your service"
        }
      ],
      "description": "List the hosting.privateDatabase.user objects"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/user/{userName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "userName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Delete a user"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "userName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User name"
            }
          ],
          "responseType": "hosting.privateDatabase.user",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "User"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/user/{userName}/changePassword",
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
              "description": "The new user password ( alphanumeric and 8 characters minimum )"
            },
            {
              "name": "userName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User name"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Request a change password for a user"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/user/{userName}/grant",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "userName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "User grant's on your databases"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Database name where add grant"
            },
            {
              "name": "grant",
              "dataType": "hosting.PrivateDatabase.grant.GrantEnum",
              "paramType": "body",
              "fullType": "hosting.PrivateDatabase.grant.GrantEnum",
              "required": true,
              "description": "Grant you want set on the database for this user"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "userName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Add grant on a database"
        }
      ],
      "description": "List the hosting.privateDatabase.grant objects"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "userName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User name"
            },
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Database name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Delete a grant on a database"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "userName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User name"
            },
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Database name"
            }
          ],
          "responseType": "hosting.privateDatabase.grant",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Grant"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}/update",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "grant",
              "dataType": "hosting.PrivateDatabase.grant.GrantEnum",
              "paramType": "body",
              "fullType": "hosting.PrivateDatabase.grant.GrantEnum",
              "required": true,
              "description": "Grant you want set on the database for this user"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "userName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User name"
            },
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Database name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Update user grant"
        }
      ],
      "description": "update operations"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/webs",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List linked webs"
        }
      ],
      "description": "webs operations"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/whitelist",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "query",
              "fullType": "ipBlock",
              "required": false,
              "description": "Filter the value of ip property (contains or equals)"
            },
            {
              "name": "sftp",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Filter the value of sftp property (=)"
            },
            {
              "name": "service",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Filter the value of service property (=)"
            }
          ],
          "responseType": "ipBlock[]",
          "noAuthentication": false,
          "description": "Whitelist allowed on your privatesql"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "body",
              "fullType": "ipBlock",
              "required": true,
              "description": "The IP to whitelist in your instance"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Custom name for your Whitelisted IP"
            },
            {
              "name": "sftp",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Authorize this IP to access sftp port"
            },
            {
              "name": "service",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Authorize this IP to access service port"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Create a new IP whitelist"
        }
      ],
      "description": "List the hosting.privateDatabase.whitelist objects"
    },
    {
      "path": "/hosting/privateDatabase/{serviceName}/whitelist/{ip}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "hosting.privateDatabase.task",
          "noAuthentication": false,
          "description": "Delete ain IP whitelist"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "hosting.privateDatabase.whitelist",
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
              "dataType": "hosting.privateDatabase.whitelist",
              "paramType": "body",
              "fullType": "hosting.privateDatabase.whitelist",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "IP whitelisting for your instance"
    }
  ],
  "resourcePath": "/hosting/privateDatabase",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "complexType.SafeKeyValue<T>": {
      "id": "SafeKeyValue",
      "namespace": "complexType",
      "description": "Key and value, with proper key strings",
      "generics": [
        "T"
      ],
      "properties": {
        "key": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "T",
          "fullType": "T",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "complexType.UnitAndValue<T>": {
      "id": "UnitAndValue",
      "namespace": "complexType",
      "description": "A numeric value tagged with its unit",
      "generics": [
        "T"
      ],
      "properties": {
        "unit": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "T",
          "fullType": "T",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "hosting.PrivateDatabase.AvailableOrderCapacities": {
      "id": "AvailableOrderCapacities",
      "namespace": "hosting.PrivateDatabase",
      "description": "Description for available order capacities following an offer",
      "properties": {
        "datacenter": {
          "type": "hosting.PrivateDatabase.DatacenterEnum[]",
          "fullType": "hosting.PrivateDatabase.DatacenterEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "A list of datacenter available for this offer",
          "required": true
        },
        "offer": {
          "type": "hosting.PrivateDatabase.OfferEnum",
          "fullType": "hosting.PrivateDatabase.OfferEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Offer",
          "required": true
        },
        "ram": {
          "type": "hosting.PrivateDatabase.AvailableRamSizeEnum[]",
          "fullType": "hosting.PrivateDatabase.AvailableRamSizeEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "A list of ram size available for this offer",
          "required": true
        },
        "version": {
          "type": "hosting.PrivateDatabase.AvailableVersionEnum[]",
          "fullType": "hosting.PrivateDatabase.AvailableVersionEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "A list of version available for this offer",
          "required": true
        }
      }
    },
    "hosting.PrivateDatabase.AvailableRamSizeEnum": {
      "id": "AvailableRamSizeEnum",
      "namespace": "hosting.PrivateDatabase",
      "description": "Private database available ram sizes",
      "enum": [
        "1024",
        "2048",
        "4096",
        "512"
      ],
      "enumType": "string"
    },
    "hosting.PrivateDatabase.AvailableVersionEnum": {
      "id": "AvailableVersionEnum",
      "namespace": "hosting.PrivateDatabase",
      "description": "Private database available versions",
      "enum": [
        "mariadb_10.1",
        "mariadb_10.2",
        "mariadb_10.3",
        "mariadb_10.4",
        "mariadb_10.5",
        "mongodb_3.4",
        "mongodb_4.0",
        "mysql_4.1",
        "mysql_5.0",
        "mysql_5.1",
        "mysql_5.5",
        "mysql_5.6",
        "mysql_5.7",
        "postgresql_10",
        "postgresql_11",
        "postgresql_12",
        "postgresql_9.4",
        "postgresql_9.5",
        "postgresql_9.6",
        "redis_3.2",
        "redis_4.0"
      ],
      "enumType": "string"
    },
    "hosting.PrivateDatabase.Capability": {
      "id": "Capability",
      "namespace": "hosting.PrivateDatabase",
      "description": "Private database capability",
      "properties": {
        "create": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Can the object be created",
          "required": true
        },
        "delete": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Can the object be deleted",
          "required": true
        },
        "object": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Object name",
          "required": true
        },
        "update": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Can the object be updated",
          "required": true
        }
      }
    },
    "hosting.PrivateDatabase.Configuration.Detail": {
      "id": "Detail",
      "namespace": "hosting.PrivateDatabase.Configuration",
      "description": "Configuration detail property",
      "properties": {
        "availableValues": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Configuration available values",
          "required": true
        },
        "defaultValue": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Configuration default value",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Configuration description",
          "required": true
        },
        "key": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Configuration key name",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Configuration last update date",
          "required": true
        },
        "type": {
          "type": "hosting.PrivateDatabase.Configuration.DetailType",
          "fullType": "hosting.PrivateDatabase.Configuration.DetailType",
          "canBeNull": false,
          "readOnly": false,
          "description": "Configuration value type",
          "required": true
        },
        "unit": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Configuration unit type",
          "required": false
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Configuration current value",
          "required": true
        }
      }
    },
    "hosting.PrivateDatabase.Configuration.DetailType": {
      "id": "DetailType",
      "namespace": "hosting.PrivateDatabase.Configuration",
      "description": "Configuration detail type",
      "enum": [
        "boolean",
        "number",
        "string"
      ],
      "enumType": "string"
    },
    "hosting.PrivateDatabase.Configuration.Status": {
      "id": "Status",
      "namespace": "hosting.PrivateDatabase.Configuration",
      "description": "Configuration status",
      "enum": [
        "applied",
        "updating"
      ],
      "enumType": "string"
    },
    "hosting.PrivateDatabase.Database.Extension.Status": {
      "id": "Status",
      "namespace": "hosting.PrivateDatabase.Database.Extension",
      "description": "Extension status",
      "enum": [
        "disabled",
        "disabling",
        "enabled",
        "enabling"
      ],
      "enumType": "string"
    },
    "hosting.PrivateDatabase.Database.User": {
      "id": "User",
      "namespace": "hosting.PrivateDatabase.Database",
      "description": "User granted to a database",
      "properties": {
        "grantId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The grantId associated for this databaseName and this userName",
          "required": true
        },
        "grantType": {
          "type": "hosting.PrivateDatabase.grant.GrantEnum",
          "fullType": "hosting.PrivateDatabase.grant.GrantEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "User's rights on this database",
          "required": true
        },
        "userName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "User's name granted on this database",
          "required": true
        }
      }
    },
    "hosting.PrivateDatabase.DatacenterEnum": {
      "id": "DatacenterEnum",
      "namespace": "hosting.PrivateDatabase",
      "description": "Available datacenters",
      "enum": [
        "bhs1",
        "gra1",
        "gra2",
        "p19"
      ],
      "enumType": "string"
    },
    "hosting.PrivateDatabase.GraphEndpoint": {
      "id": "GraphEndpoint",
      "namespace": "hosting.PrivateDatabase",
      "description": "Parameters required to query metrics from OpenTSDB",
      "properties": {
        "host": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The OpenTSDB host",
          "required": true
        },
        "readToken": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "A read-only token",
          "required": true
        },
        "readTokenId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "A read-only token ID",
          "required": true
        }
      }
    },
    "hosting.PrivateDatabase.OfferEnum": {
      "id": "OfferEnum",
      "namespace": "hosting.PrivateDatabase",
      "description": "Available offers",
      "enum": [
        "classic",
        "public"
      ],
      "enumType": "string"
    },
    "hosting.PrivateDatabase.Oom": {
      "id": "Oom",
      "namespace": "hosting.PrivateDatabase",
      "description": "OOM kill informations",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Date of the OOM kill",
          "required": true
        },
        "sizeReached": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Memory size reached",
          "required": true
        }
      }
    },
    "hosting.PrivateDatabase.StateEnum": {
      "id": "StateEnum",
      "namespace": "hosting.PrivateDatabase",
      "description": "Private database state",
      "enum": [
        "detached",
        "restartPending",
        "startPending",
        "started",
        "stopPending",
        "stopped"
      ],
      "enumType": "string"
    },
    "hosting.PrivateDatabase.TemporaryLogsLink": {
      "id": "TemporaryLogsLink",
      "namespace": "hosting.PrivateDatabase",
      "description": "Temporary url informations",
      "properties": {
        "expirationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Temporary url expiration date",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Temporary url",
          "required": true
        }
      }
    },
    "hosting.PrivateDatabase.TypeEnum": {
      "id": "TypeEnum",
      "namespace": "hosting.PrivateDatabase",
      "description": "Private database type",
      "enum": [
        "mariadb",
        "mongodb",
        "mysql",
        "postgresql",
        "redis"
      ],
      "enumType": "string"
    },
    "hosting.PrivateDatabase.User.Database": {
      "id": "Database",
      "namespace": "hosting.PrivateDatabase.User",
      "description": "Databases linked to an user",
      "properties": {
        "databaseName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Database's name linked to this user",
          "required": true
        },
        "grantId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The grantId associated to this userName for this databaseName",
          "required": true
        },
        "grantType": {
          "type": "hosting.PrivateDatabase.grant.GrantEnum",
          "fullType": "hosting.PrivateDatabase.grant.GrantEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Grant of this user for this database",
          "required": true
        }
      }
    },
    "hosting.PrivateDatabase.Whitelist.Status": {
      "id": "Status",
      "namespace": "hosting.PrivateDatabase.Whitelist",
      "description": "Whitelist status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updating"
      ],
      "enumType": "string"
    },
    "hosting.PrivateDatabase.grant.GrantEnum": {
      "id": "GrantEnum",
      "namespace": "hosting.PrivateDatabase.grant",
      "description": "Grant on a database for a specific user",
      "enum": [
        "admin",
        "none",
        "ro",
        "rw"
      ],
      "enumType": "string"
    },
    "hosting.PrivateDatabase.task.FunctionEnum": {
      "id": "FunctionEnum",
      "namespace": "hosting.PrivateDatabase.task",
      "description": "Task's function",
      "enum": [
        "boot",
        "changeFtpPassword",
        "changeRam",
        "changeRootPassword",
        "changeVersion",
        "configuration/update",
        "create",
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
        "halt",
        "install",
        "refresh",
        "reopen",
        "restart",
        "restore",
        "start",
        "stop",
        "suspend",
        "user/changePassword",
        "user/create",
        "user/delete",
        "whitelist/create",
        "whitelist/delete",
        "whitelist/update"
      ],
      "enumType": "string"
    },
    "hosting.PrivateDatabase.task.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "hosting.PrivateDatabase.task",
      "description": "Task's status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "init",
        "todo"
      ],
      "enumType": "string"
    },
    "hosting.privateDatabase.Configuration": {
      "id": "Configuration",
      "namespace": "hosting.privateDatabase",
      "description": "Configuration",
      "properties": {
        "details": {
          "type": "hosting.PrivateDatabase.Configuration.Detail[]",
          "fullType": "hosting.PrivateDatabase.Configuration.Detail[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Configuration full details",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last update date",
          "required": true
        },
        "status": {
          "type": "hosting.PrivateDatabase.Configuration.Status",
          "fullType": "hosting.PrivateDatabase.Configuration.Status",
          "canBeNull": false,
          "readOnly": true,
          "description": "Configuration status",
          "required": true
        },
        "taskId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Configuration linked task id",
          "required": false
        }
      }
    },
    "hosting.privateDatabase.Service": {
      "id": "Service",
      "namespace": "hosting.privateDatabase",
      "description": "Private database",
      "properties": {
        "capabilities": {
          "type": "hosting.PrivateDatabase.Capability[]",
          "fullType": "hosting.PrivateDatabase.Capability[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Private database capabilities",
          "required": true
        },
        "cpu": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number of cpu on your private database",
          "required": true
        },
        "datacenter": {
          "type": "hosting.PrivateDatabase.DatacenterEnum",
          "fullType": "hosting.PrivateDatabase.DatacenterEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Datacenter where this private database is located",
          "required": true
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Set the name displayed in customer panel for your private database (max 50 chars)",
          "required": false
        },
        "graphEndpoint": {
          "type": "hosting.PrivateDatabase.GraphEndpoint",
          "fullType": "hosting.PrivateDatabase.GraphEndpoint",
          "canBeNull": true,
          "readOnly": true,
          "description": "Parameters required to query metrics from OpenTSDB",
          "required": false
        },
        "guiURL": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "URL for the graphical user interface",
          "required": false
        },
        "hostname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Private database hostname",
          "required": false
        },
        "hostnameFtp": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Private database ftp hostname",
          "required": false
        },
        "infrastructure": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Infrastructure where service was stored",
          "required": true
        },
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "Private database ip",
          "required": false
        },
        "lastCheck": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the last data synchronization",
          "required": true
        },
        "offer": {
          "type": "hosting.PrivateDatabase.OfferEnum",
          "fullType": "hosting.PrivateDatabase.OfferEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type of the private database offer",
          "required": true
        },
        "port": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Private database service port",
          "required": true
        },
        "portFtp": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Private database ftp port",
          "required": false
        },
        "quotaSize": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": true,
          "description": "Space allowed on your private database",
          "required": true
        },
        "quotaUsed": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total space used on your private database",
          "required": true
        },
        "ram": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": true,
          "description": "Amount of ram on your private database",
          "required": true
        },
        "server": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Private database server name",
          "required": false
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service name",
          "required": true
        },
        "state": {
          "type": "hosting.PrivateDatabase.StateEnum",
          "fullType": "hosting.PrivateDatabase.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Private database state",
          "required": true
        },
        "tlsCa": {
          "type": "text",
          "fullType": "text",
          "canBeNull": true,
          "readOnly": true,
          "description": "Return the TLS certificate authority used by the private database",
          "required": false
        },
        "type": {
          "type": "hosting.PrivateDatabase.TypeEnum",
          "fullType": "hosting.PrivateDatabase.TypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Private database type",
          "required": true
        },
        "version": {
          "type": "hosting.PrivateDatabase.AvailableVersionEnum",
          "fullType": "hosting.PrivateDatabase.AvailableVersionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Private database version",
          "required": true
        },
        "versionLabel": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Private database version label",
          "required": true
        },
        "versionNumber": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Private database version number",
          "required": true
        }
      }
    },
    "hosting.privateDatabase.database": {
      "id": "database",
      "namespace": "hosting.privateDatabase",
      "description": "Databases",
      "properties": {
        "backupTime": {
          "type": "time",
          "fullType": "time",
          "canBeNull": true,
          "readOnly": true,
          "description": "Time of the next backup ( every day )",
          "required": false
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of the database",
          "required": true
        },
        "databaseName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Database name",
          "required": true
        },
        "quotaUsed": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": true,
          "description": "Space used by the database",
          "required": true
        },
        "users": {
          "type": "hosting.PrivateDatabase.Database.User[]",
          "fullType": "hosting.PrivateDatabase.Database.User[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Users granted to this database",
          "required": true
        }
      }
    },
    "hosting.privateDatabase.database.dump": {
      "id": "dump",
      "namespace": "hosting.privateDatabase.database",
      "description": "Dump",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of the dump",
          "required": true
        },
        "databaseName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Dump of this database name",
          "required": true
        },
        "deletionDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Automatic deletion date of the dump",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Dump id",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Dump url access",
          "required": true
        }
      }
    },
    "hosting.privateDatabase.database.extension": {
      "id": "extension",
      "namespace": "hosting.privateDatabase.database",
      "description": "Databases extension",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Extension description",
          "required": true
        },
        "extensionName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Extension name",
          "required": true
        },
        "requiredExtensions": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of required extensions to enable this one",
          "required": true
        },
        "status": {
          "type": "hosting.PrivateDatabase.Database.Extension.Status",
          "fullType": "hosting.PrivateDatabase.Database.Extension.Status",
          "canBeNull": false,
          "readOnly": true,
          "description": "Extension status",
          "required": true
        }
      }
    },
    "hosting.privateDatabase.dump": {
      "id": "dump",
      "namespace": "hosting.privateDatabase",
      "description": "Dump",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of the dump",
          "required": true
        },
        "databaseName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Dump of this database name",
          "required": true
        },
        "deletionDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Automatic deletion date of the dump",
          "required": true
        },
        "dumpId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Dump id",
          "required": true
        },
        "orphan": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Dump orphan flag ( true if database does not exists )",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Dump url access",
          "required": true
        }
      }
    },
    "hosting.privateDatabase.grant": {
      "id": "grant",
      "namespace": "hosting.privateDatabase",
      "description": "Grants",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of the grant",
          "required": true
        },
        "databaseName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Database name where grant is set",
          "required": true
        },
        "grant": {
          "type": "hosting.PrivateDatabase.grant.GrantEnum",
          "fullType": "hosting.PrivateDatabase.grant.GrantEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Grant set",
          "required": true
        }
      }
    },
    "hosting.privateDatabase.task": {
      "id": "task",
      "namespace": "hosting.privateDatabase",
      "description": "Tasks",
      "properties": {
        "databaseName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Database name on which the task is working",
          "required": false
        },
        "doneDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Completion date",
          "required": false
        },
        "dumpId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "DumpId on which the task is working",
          "required": false
        },
        "function": {
          "type": "hosting.PrivateDatabase.task.FunctionEnum",
          "fullType": "hosting.PrivateDatabase.task.FunctionEnum",
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
          "description": "The id of the task",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last update",
          "required": false
        },
        "startDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task Creation date",
          "required": true
        },
        "status": {
          "type": "hosting.PrivateDatabase.task.StatusEnum",
          "fullType": "hosting.PrivateDatabase.task.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task status",
          "required": true
        },
        "userName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "User name on which the task is working",
          "required": false
        }
      }
    },
    "hosting.privateDatabase.user": {
      "id": "user",
      "namespace": "hosting.privateDatabase",
      "description": "Users",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of the user",
          "required": true
        },
        "databases": {
          "type": "hosting.PrivateDatabase.User.Database[]",
          "fullType": "hosting.PrivateDatabase.User.Database[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Databases granted for this user",
          "required": true
        },
        "userName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "User name used to connect to your databases",
          "required": true
        }
      }
    },
    "hosting.privateDatabase.whitelist": {
      "id": "whitelist",
      "namespace": "hosting.privateDatabase",
      "description": "IP whitelisting for your instance",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of this whitelist",
          "required": true
        },
        "ip": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": true,
          "description": "The whitelisted IP in your instance",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "The last update date of this whitelist",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Custom name for your Whitelisted IP",
          "required": false
        },
        "service": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Authorize this IP to access service port",
          "required": true
        },
        "sftp": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Authorize this IP to access sftp port",
          "required": true
        },
        "status": {
          "type": "hosting.PrivateDatabase.Whitelist.Status",
          "fullType": "hosting.PrivateDatabase.Whitelist.Status",
          "canBeNull": false,
          "readOnly": true,
          "description": "Whitelist status",
          "required": true
        },
        "taskId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "The id of the task working on this object",
          "required": false
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
    "service.TerminationFutureUseEnum": {
      "id": "TerminationFutureUseEnum",
      "namespace": "service",
      "description": "All future uses you can provide for a service termination",
      "enum": [
        "NOT_REPLACING_SERVICE",
        "OTHER",
        "SUBSCRIBE_AN_OTHER_SERVICE",
        "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
        "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
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
    }
  }
}