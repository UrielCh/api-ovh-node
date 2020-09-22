"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = {
    "apiVersion": "1.0",
    "apis": [
        {
            "description": "Operations about the SQLPRIVE service",
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
            "path": "/hosting/privateDatabase"
        },
        {
            "description": "Get available order capacitie",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get available order capacitie",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "hosting.PrivateDatabase.OfferEnum",
                            "description": "Offer available order capacities to choose",
                            "fullType": "hosting.PrivateDatabase.OfferEnum",
                            "name": "offer",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.PrivateDatabase.AvailableOrderCapacities"
                }
            ],
            "path": "/hosting/privateDatabase/availableOrderCapacities"
        },
        {
            "description": "Private database",
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
                            "description": "The internal name of your private database",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.privateDatabase.Service"
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
                            "dataType": "hosting.privateDatabase.Service",
                            "description": "New object properties",
                            "fullType": "hosting.privateDatabase.Service",
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
            "path": "/hosting/privateDatabase/{serviceName}"
        },
        {
            "description": "availableVersions operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get the availables versions for this private database",
                    "httpMethod": "GET",
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
                    "responseType": "hosting.PrivateDatabase.AvailableVersionEnum[]"
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
            "description": "changeFtpPassword operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Change your ftp admin password",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "password",
                            "description": "New ftp admin password ( alphanumeric and 8 characters minimum )",
                            "fullType": "password",
                            "name": "password",
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
                    "responseType": "hosting.privateDatabase.task"
                }
            ],
            "path": "/hosting/privateDatabase/{serviceName}/changeFtpPassword"
        },
        {
            "description": "changeVersion operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Change the private database engine version",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "hosting.PrivateDatabase.AvailableVersionEnum",
                            "description": "Private database versions",
                            "fullType": "hosting.PrivateDatabase.AvailableVersionEnum",
                            "name": "version",
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
                    "responseType": "hosting.privateDatabase.task"
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
            "description": "List the hosting.privateDatabase.database objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Databases linked to your private database service",
                    "httpMethod": "GET",
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
                    "responseType": "string[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Create a new database on your private database service",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Name of your new database",
                            "fullType": "string",
                            "name": "databaseName",
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
                    "responseType": "hosting.privateDatabase.task"
                }
            ],
            "path": "/hosting/privateDatabase/{serviceName}/database"
        },
        {
            "description": "Databases",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete the database",
                    "httpMethod": "DELETE",
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
                    "responseType": "hosting.privateDatabase.task"
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
                    "responseType": "hosting.privateDatabase.database"
                }
            ],
            "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}"
        },
        {
            "description": "List the hosting.privateDatabase.database.dump objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Dump available for your databases",
                    "httpMethod": "GET",
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
                            "dataType": "datetime",
                            "description": "Filter the value of creationDate property (like)",
                            "fullType": "datetime",
                            "name": "creationDate",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "datetime",
                            "description": "Filter the value of deletionDate property (like)",
                            "fullType": "datetime",
                            "name": "deletionDate",
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
                    "description": "Request the dump of this database ( an email will be send with a link available 30 days )",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "boolean",
                            "description": "Send an email when dump will be available? Default: false",
                            "fullType": "boolean",
                            "name": "sendEmail",
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
            "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump"
        },
        {
            "description": "Dump",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete dump before expiration date",
                    "httpMethod": "DELETE",
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
                            "description": "Dump id",
                            "fullType": "long",
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
                    "responseType": "hosting.privateDatabase.task"
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
                            "description": "Database name",
                            "fullType": "string",
                            "name": "databaseName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "long",
                            "description": "Dump id",
                            "fullType": "long",
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
                    "responseType": "hosting.privateDatabase.database.dump"
                }
            ],
            "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}"
        },
        {
            "description": "restore operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Request the restore from this dump",
                    "httpMethod": "POST",
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
                            "description": "Dump id",
                            "fullType": "long",
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
                    "responseType": "hosting.privateDatabase.task"
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
            "description": "import operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Request the import in this database",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Documents ID of the dump from /me/documents",
                            "fullType": "string",
                            "name": "documentId",
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
                            "dataType": "boolean",
                            "description": "Send an email when the import will be done? Default: false",
                            "fullType": "boolean",
                            "name": "sendEmail",
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
            "path": "/hosting/privateDatabase/{serviceName}/database/{databaseName}/import"
        },
        {
            "description": "databaseWizard operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Create a new database/user and grant it",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Name of your new database",
                            "fullType": "string",
                            "name": "databaseName",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "hosting.PrivateDatabase.grant.GrantEnum",
                            "description": "Grant of the user on this database",
                            "fullType": "hosting.PrivateDatabase.grant.GrantEnum",
                            "name": "grant",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "password",
                            "description": "Password for the new user ( alphanumeric and 8 characters minimum )",
                            "fullType": "password",
                            "name": "password",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "New user name used to connect on your database",
                            "fullType": "string",
                            "name": "userName",
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
                    "responseType": "hosting.privateDatabase.task"
                }
            ],
            "path": "/hosting/privateDatabase/{serviceName}/databaseWizard"
        },
        {
            "description": "List the hosting.privateDatabase.dump objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Dumps available for your private database service",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
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
            "description": "Dump",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete dump before expiration date",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "long",
                            "description": "Dump id",
                            "fullType": "long",
                            "name": "dumpId",
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
                            "description": "Dump id",
                            "fullType": "long",
                            "name": "dumpId",
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
                    "responseType": "hosting.privateDatabase.dump"
                }
            ],
            "path": "/hosting/privateDatabase/{serviceName}/dump/{dumpId}"
        },
        {
            "description": "restore operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Request the restore from this dump",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The database where you want to restore this dump",
                            "fullType": "string",
                            "name": "databaseName",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "long",
                            "description": "Dump id",
                            "fullType": "long",
                            "name": "dumpId",
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
            "path": "/hosting/privateDatabase/{serviceName}/dump/{dumpId}/restore"
        },
        {
            "description": "generateTemporaryLogsLink operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Generate a temporary url to retrieve instance logs",
                    "httpMethod": "POST",
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
                    "responseType": "hosting.PrivateDatabase.TemporaryLogsLink"
                }
            ],
            "path": "/hosting/privateDatabase/{serviceName}/generateTemporaryLogsLink"
        },
        {
            "description": "oom operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List of privatesql OOM kill",
                    "httpMethod": "GET",
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
                    "responseType": "hosting.PrivateDatabase.Oom[]"
                }
            ],
            "path": "/hosting/privateDatabase/{serviceName}/oom"
        },
        {
            "description": "quotaRefresh operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Refresh the quota of your private database",
                    "httpMethod": "POST",
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
            "path": "/hosting/privateDatabase/{serviceName}/quotaRefresh"
        },
        {
            "description": "restart operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Restart the private database",
                    "httpMethod": "POST",
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
                    "description": "Get this object properties",
                    "httpMethod": "GET",
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
            "description": "List the hosting.privateDatabase.task objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Tasks attached to your private database service",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The internal name of your private database",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "hosting.PrivateDatabase.task.FunctionEnum",
                            "description": "Filter the value of function property (=)",
                            "fullType": "hosting.PrivateDatabase.task.FunctionEnum",
                            "name": "function",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "hosting.PrivateDatabase.task.StatusEnum",
                            "description": "Filter the value of status property (=)",
                            "fullType": "hosting.PrivateDatabase.task.StatusEnum",
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
            "description": "Tasks",
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
                            "description": "The id of the task",
                            "fullType": "long",
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
                    "responseType": "hosting.privateDatabase.task"
                }
            ],
            "path": "/hosting/privateDatabase/{serviceName}/tasks/{id}"
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
            "description": "List the hosting.privateDatabase.user objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "User allowed to connect on your databases",
                    "httpMethod": "GET",
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
                    "responseType": "string[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Create a new user on your service",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "password",
                            "description": "Password for the new user ( alphanumeric and 8 characters minimum )",
                            "fullType": "password",
                            "name": "password",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "User name used to connect on your databases",
                            "fullType": "string",
                            "name": "userName",
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
                    "responseType": "hosting.privateDatabase.task"
                }
            ],
            "path": "/hosting/privateDatabase/{serviceName}/user"
        },
        {
            "description": "Users",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete a user",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
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
                            "description": "User name used to connect to your databases",
                            "fullType": "string",
                            "name": "userName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.privateDatabase.task"
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
                            "description": "The internal name of your private database",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "User name used to connect to your databases",
                            "fullType": "string",
                            "name": "userName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.privateDatabase.user"
                }
            ],
            "path": "/hosting/privateDatabase/{serviceName}/user/{userName}"
        },
        {
            "description": "changePassword operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Request a change password for a user",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "password",
                            "description": "The new user password ( alphanumeric and 8 characters minimum )",
                            "fullType": "password",
                            "name": "password",
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
                        },
                        {
                            "dataType": "string",
                            "description": "User name used to connect to your databases",
                            "fullType": "string",
                            "name": "userName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.privateDatabase.task"
                }
            ],
            "path": "/hosting/privateDatabase/{serviceName}/user/{userName}/changePassword"
        },
        {
            "description": "List the hosting.privateDatabase.grant objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "User grant's on your databases",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
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
                            "description": "User name used to connect to your databases",
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
                    "description": "Add grant on a database",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Database name where add grant",
                            "fullType": "string",
                            "name": "databaseName",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "hosting.PrivateDatabase.grant.GrantEnum",
                            "description": "Grant you want set on the database for this user",
                            "fullType": "hosting.PrivateDatabase.grant.GrantEnum",
                            "name": "grant",
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
                        },
                        {
                            "dataType": "string",
                            "description": "User name used to connect to your databases",
                            "fullType": "string",
                            "name": "userName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.privateDatabase.task"
                }
            ],
            "path": "/hosting/privateDatabase/{serviceName}/user/{userName}/grant"
        },
        {
            "description": "Grants",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete a grant on a database",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Database name where grant is set",
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
                            "description": "User name used to connect to your databases",
                            "fullType": "string",
                            "name": "userName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.privateDatabase.task"
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
                            "description": "Database name where grant is set",
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
                            "description": "User name used to connect to your databases",
                            "fullType": "string",
                            "name": "userName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.privateDatabase.grant"
                }
            ],
            "path": "/hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}"
        },
        {
            "description": "update operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Update user grant",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "hosting.PrivateDatabase.grant.GrantEnum",
                            "description": "Grant you want set on the database for this user",
                            "fullType": "hosting.PrivateDatabase.grant.GrantEnum",
                            "name": "grant",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Database name where grant is set",
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
                            "description": "User name used to connect to your databases",
                            "fullType": "string",
                            "name": "userName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.privateDatabase.task"
                }
            ],
            "path": "/hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}/update"
        },
        {
            "description": "webs operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List linked webs",
                    "httpMethod": "GET",
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
                    "responseType": "string[]"
                }
            ],
            "path": "/hosting/privateDatabase/{serviceName}/webs"
        },
        {
            "description": "List the hosting.privateDatabase.whitelist objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Whitelist allowed on your privatesql",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The internal name of your private database",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "ipBlock",
                            "description": "Filter the value of ip property (contains or equals)",
                            "fullType": "ipBlock",
                            "name": "ip",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "boolean",
                            "description": "Filter the value of service property (=)",
                            "fullType": "boolean",
                            "name": "service",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "boolean",
                            "description": "Filter the value of sftp property (=)",
                            "fullType": "boolean",
                            "name": "sftp",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "ipBlock[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Create a new IP whitelist",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "ipBlock",
                            "description": "The IP to whitelist in your instance",
                            "fullType": "ipBlock",
                            "name": "ip",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Custom name for your Whitelisted IP",
                            "fullType": "string",
                            "name": "name",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "boolean",
                            "description": "Authorize this IP to access service port",
                            "fullType": "boolean",
                            "name": "service",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "boolean",
                            "description": "Authorize this IP to access sftp port",
                            "fullType": "boolean",
                            "name": "sftp",
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
                    "responseType": "hosting.privateDatabase.task"
                }
            ],
            "path": "/hosting/privateDatabase/{serviceName}/whitelist"
        },
        {
            "description": "IP whitelisting for your instance",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete ain IP whitelist",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "ipBlock",
                            "description": "The whitelisted IP in your instance",
                            "fullType": "ipBlock",
                            "name": "ip",
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
                            "dataType": "ipBlock",
                            "description": "The whitelisted IP in your instance",
                            "fullType": "ipBlock",
                            "name": "ip",
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
                    "responseType": "hosting.privateDatabase.whitelist"
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
                            "dataType": "hosting.privateDatabase.whitelist",
                            "description": "New object properties",
                            "fullType": "hosting.privateDatabase.whitelist",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "ipBlock",
                            "description": "The whitelisted IP in your instance",
                            "fullType": "ipBlock",
                            "name": "ip",
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
                }
            ],
            "path": "/hosting/privateDatabase/{serviceName}/whitelist/{ip}"
        }
    ],
    "basePath": "https://eu.api.kimsufi.com/1.0",
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
                "mysql_8.0",
                "postgresql_10",
                "postgresql_11",
                "postgresql_12",
                "postgresql_9.4",
                "postgresql_9.5",
                "postgresql_9.6",
                "redis_3.2",
                "redis_4.0"
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
                "mongodb",
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
                "init",
                "todo"
            ],
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "hosting.PrivateDatabase.task"
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
        "hosting.privateDatabase.Service": {
            "description": "Private database",
            "id": "Service",
            "namespace": "hosting.privateDatabase",
            "properties": {
                "capabilities": {
                    "canBeNull": false,
                    "description": "Private database capabilities",
                    "fullType": "hosting.PrivateDatabase.Capability[]",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.PrivateDatabase.Capability[]"
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
                    "fullType": "hosting.PrivateDatabase.DatacenterEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.PrivateDatabase.DatacenterEnum"
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
                    "fullType": "hosting.PrivateDatabase.GraphEndpoint",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.PrivateDatabase.GraphEndpoint"
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
                    "canBeNull": true,
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
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "ip": {
                    "canBeNull": true,
                    "description": "Private database ip",
                    "fullType": "ip",
                    "readOnly": true,
                    "required": false,
                    "type": "ip"
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
                    "fullType": "hosting.PrivateDatabase.OfferEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.PrivateDatabase.OfferEnum"
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
                    "canBeNull": true,
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
                    "fullType": "hosting.PrivateDatabase.StateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.PrivateDatabase.StateEnum"
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
                    "fullType": "hosting.PrivateDatabase.TypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.PrivateDatabase.TypeEnum"
                },
                "version": {
                    "canBeNull": false,
                    "description": "Private database version",
                    "fullType": "hosting.PrivateDatabase.AvailableVersionEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.PrivateDatabase.AvailableVersionEnum"
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
};
//# sourceMappingURL=hosting-privateDatabase.js.map