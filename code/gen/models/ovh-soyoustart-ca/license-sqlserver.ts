import {Schema} from '../../src/schema';

export const schema: Schema = {
  "basePath": "https://ca.api.soyoustart.com/1.0",
  "apis": [
    {
      "path": "/license/sqlserver/{serviceName}/terminate",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "description": "The name of your SQL Server license",
              "paramType": "path",
              "fullType": "string",
              "dataType": "string",
              "name": "serviceName"
            }
          ],
          "responseFullType": "string",
          "resellerOnly": false,
          "description": "Terminate your service",
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string"
        }
      ],
      "description": "Terminate your service"
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "paramType": "path",
              "fullType": "string",
              "dataType": "string",
              "name": "serviceName",
              "required": true,
              "description": "The name of your SQL Server license"
            }
          ],
          "responseFullType": "license.sqlserver.SqlServer",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "license.sqlserver.SqlServer",
          "resellerOnly": false,
          "description": "Get this object properties",
          "httpMethod": "GET"
        }
      ],
      "path": "/license/sqlserver/{serviceName}",
      "description": "Your SQL Server license"
    },
    {
      "description": "Details about a Service",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The name of your SQL Server license",
              "required": true,
              "dataType": "string",
              "name": "serviceName",
              "fullType": "string",
              "paramType": "path"
            }
          ],
          "responseFullType": "services.Service",
          "description": "Get this object properties",
          "resellerOnly": false,
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "services.Service"
        },
        {
          "noAuthentication": false,
          "responseFullType": "void",
          "parameters": [
            {
              "paramType": "body",
              "fullType": "services.Service",
              "dataType": "services.Service",
              "name": null,
              "required": true,
              "description": "New object properties"
            },
            {
              "description": "The name of your SQL Server license",
              "required": true,
              "name": "serviceName",
              "dataType": "string",
              "fullType": "string",
              "paramType": "path"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "resellerOnly": false,
          "description": "Alter this object properties",
          "httpMethod": "PUT"
        }
      ],
      "path": "/license/sqlserver/{serviceName}/serviceInfos"
    },
    {
      "description": "Confirm termination of your service",
      "path": "/license/sqlserver/{serviceName}/confirmTermination",
      "operations": [
        {
          "description": "Confirm termination of your service",
          "resellerOnly": false,
          "httpMethod": "POST",
          "responseType": "string",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "name": "futureUse",
              "dataType": "service.TerminationFutureUseEnum",
              "fullType": "service.TerminationFutureUseEnum",
              "paramType": "body",
              "description": "What next after your termination request",
              "required": false
            },
            {
              "name": "reason",
              "dataType": "service.TerminationReasonEnum",
              "fullType": "service.TerminationReasonEnum",
              "paramType": "body",
              "description": "Reason of your termination request",
              "required": false
            },
            {
              "dataType": "string",
              "name": "commentary",
              "fullType": "string",
              "paramType": "body",
              "description": "Commentary about your termination request",
              "required": false
            },
            {
              "dataType": "string",
              "name": "token",
              "fullType": "string",
              "paramType": "body",
              "description": "The termination token sent by mail to the admin contact",
              "required": true
            },
            {
              "dataType": "string",
              "name": "serviceName",
              "fullType": "string",
              "paramType": "path",
              "description": "The name of your SQL Server license",
              "required": true
            }
          ],
          "responseFullType": "string"
        }
      ]
    },
    {
      "operations": [
        {
          "description": "Tasks linked to this license",
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseType": "long[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseFullType": "long[]",
          "parameters": [
            {
              "paramType": "query",
              "fullType": "license.TaskStateEnum",
              "dataType": "license.TaskStateEnum",
              "name": "status",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "description": "Filter the value of action property (=)",
              "required": false,
              "name": "action",
              "dataType": "license.ActionType",
              "paramType": "query",
              "fullType": "license.ActionType"
            },
            {
              "description": "The name of your SQL Server license",
              "required": true,
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string"
            }
          ]
        }
      ],
      "path": "/license/sqlserver/{serviceName}/tasks",
      "description": "List the license.Task objects"
    },
    {
      "operations": [
        {
          "responseFullType": "license.Task",
          "parameters": [
            {
              "description": "The name of your SQL Server license",
              "required": true,
              "dataType": "string",
              "name": "serviceName",
              "fullType": "string",
              "paramType": "path"
            },
            {
              "paramType": "path",
              "fullType": "long",
              "name": "taskId",
              "dataType": "long",
              "required": true,
              "description": "This Task id"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "GET",
          "description": "Get this object properties",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "license.Task"
        }
      ],
      "path": "/license/sqlserver/{serviceName}/tasks/{taskId}",
      "description": "licenses Todos"
    },
    {
      "path": "/license/sqlserver/orderableVersions",
      "operations": [
        {
          "httpMethod": "GET",
          "description": "Get the orderable Sql Server versions",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "license.SqlServerOrderConfiguration[]",
          "responseFullType": "license.SqlServerOrderConfiguration[]",
          "parameters": [
            {
              "description": "Your license Ip",
              "required": true,
              "dataType": "ipv4",
              "name": "ip",
              "fullType": "ipv4",
              "paramType": "query"
            }
          ],
          "noAuthentication": false
        }
      ],
      "description": "Get the orderable Sql Server versions"
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "resellerOnly": false,
          "description": "List available services",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "responseFullType": "string[]",
          "parameters": [],
          "noAuthentication": false
        }
      ],
      "path": "/license/sqlserver",
      "description": "Operations about the LICENSE service"
    }
  ],
  "apiVersion": "1.0",
  "models": {
    "license.SqlServerOrderConfiguration": {
      "id": "SqlServerOrderConfiguration",
      "description": "Allowed SQL Server versions and their compliant options per matching serviceTypes",
      "namespace": "license",
      "properties": {
        "serviceType": {
          "canBeNull": false,
          "description": null,
          "type": "license.LicenseTypeEnum"
        },
        "orderableVersions": {
          "description": null,
          "type": "license.OrderableSqlServerCompatibilityInfos[]",
          "canBeNull": false
        }
      }
    },
    "license.sqlserver.SqlServer": {
      "id": "SqlServer",
      "properties": {
        "status": {
          "fullType": "license.StateEnum",
          "readOnly": true,
          "canBeNull": false,
          "type": "license.StateEnum",
          "description": "This license state"
        },
        "licenseId": {
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "description": "The license id on license provider side",
          "type": "string"
        },
        "ip": {
          "fullType": "ipv4",
          "readOnly": true,
          "canBeNull": false,
          "description": "The ip on which this license is attached",
          "type": "ipv4"
        },
        "domain": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "description": "The internal name of your license",
          "type": "string"
        },
        "creation": {
          "description": "This license creation date",
          "type": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "datetime"
        },
        "version": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "license.SqlServerVersionEnum",
          "type": "license.SqlServerVersionEnum",
          "description": "This license version"
        }
      },
      "namespace": "license.sqlserver",
      "description": "Your SQL Server license"
    },
    "service.RenewType": {
      "id": "RenewType",
      "properties": {
        "forced": {
          "canBeNull": false,
          "type": "boolean",
          "description": "The service forced to be renewed"
        },
        "automatic": {
          "type": "boolean",
          "description": "The service is automatically renewed",
          "canBeNull": false
        },
        "period": {
          "canBeNull": true,
          "type": "long",
          "description": "period of renew in month"
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "The service will be deleted at expiration",
          "type": "boolean"
        },
        "manualPayment": {
          "description": "The service needs to be manually renewed and paid",
          "type": "boolean",
          "canBeNull": true
        }
      },
      "description": "Map a possible renew for a specific service",
      "namespace": "service"
    },
    "service.StateEnum": {
      "id": "StateEnum",
      "enum": [
        "expired",
        "inCreation",
        "ok",
        "pendingDebt",
        "unPaid"
      ],
      "namespace": "service",
      "enumType": "string",
      "description": ""
    },
    "service.RenewalTypeEnum": {
      "id": "RenewalTypeEnum",
      "enum": [
        "automaticForcedProduct",
        "automaticV2012",
        "automaticV2014",
        "automaticV2016",
        "manual",
        "oneShot",
        "option"
      ],
      "namespace": "service",
      "description": "Detailed renewal type of a service",
      "enumType": "string"
    },
    "license.TaskStateEnum": {
      "namespace": "license",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "description": "All states a license Task can be in",
      "id": "TaskStateEnum"
    },
    "license.Task": {
      "id": "Task",
      "description": "licenses Todos",
      "namespace": "license",
      "properties": {
        "action": {
          "fullType": "license.ActionType",
          "readOnly": true,
          "canBeNull": false,
          "type": "license.ActionType",
          "description": "This Task description"
        },
        "lastUpdate": {
          "description": "The last time this Task was updated",
          "type": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "datetime"
        },
        "doneDate": {
          "description": "When was this Task done",
          "type": "datetime",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "datetime"
        },
        "todoDate": {
          "description": "When was this Task created",
          "type": "datetime",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "datetime"
        },
        "taskId": {
          "description": "This Task id",
          "type": "long",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long"
        },
        "status": {
          "type": "license.TaskStateEnum",
          "description": "Current Taks status",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "license.TaskStateEnum"
        },
        "name": {
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "type": "string",
          "description": "This Task name"
        }
      }
    },
    "license.LicenseTypeEnum": {
      "id": "LicenseTypeEnum",
      "enumType": "string",
      "description": "Possible values for license type",
      "namespace": "license",
      "enum": [
        "dedicated",
        "dedicatedCloud",
        "dedicatedFailover",
        "failover",
        "vm",
        "vps",
        "vps_ceph",
        "vps_classic",
        "vps_cloud",
        "vps_cloud_2016",
        "vps_ssd"
      ]
    },
    "license.OrderableSqlServerCompatibilityInfos": {
      "id": "OrderableSqlServerCompatibilityInfos",
      "namespace": "license",
      "description": "All options available for SQL Server products",
      "properties": {
        "version": {
          "description": null,
          "type": "license.SqlServerVersionEnum",
          "canBeNull": false
        }
      }
    },
    "service.TerminationFutureUseEnum": {
      "id": "TerminationFutureUseEnum",
      "namespace": "service",
      "enum": [
        "NOT_REPLACING_SERVICE",
        "OTHER",
        "SUBSCRIBE_AN_OTHER_SERVICE",
        "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
        "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
      ],
      "enumType": "string",
      "description": "All future uses you can provide for a service termination"
    },
    "service.TerminationReasonEnum": {
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
      "namespace": "service",
      "enumType": "string",
      "description": "All reasons you can provide for a service termination",
      "id": "TerminationReasonEnum"
    },
    "license.ActionType": {
      "namespace": "license",
      "enum": [
        "addWindowFromExistingSerial",
        "changeIp",
        "changeOs",
        "installLicense",
        "optionUpgrade",
        "releaseOption",
        "versionUpgrade"
      ],
      "enumType": "string",
      "description": "A short description of what does the Task on your license",
      "id": "ActionType"
    },
    "license.StateEnum": {
      "id": "StateEnum",
      "description": "All states a license can be in",
      "enumType": "string",
      "namespace": "license",
      "enum": [
        "ok",
        "released",
        "terminated",
        "toDeliver"
      ]
    },
    "services.Service": {
      "description": "Details about a Service",
      "namespace": "services",
      "properties": {
        "renew": {
          "readOnly": false,
          "canBeNull": true,
          "fullType": "service.RenewType",
          "description": "Way of handling the renew",
          "type": "service.RenewType"
        },
        "contactBilling": {
          "description": null,
          "type": "string",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "coreTypes.AccountId:string"
        },
        "engagedUpTo": {
          "type": "date",
          "description": null,
          "readOnly": true,
          "fullType": "date",
          "canBeNull": true
        },
        "domain": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "description": null,
          "type": "string"
        },
        "renewalType": {
          "fullType": "service.RenewalTypeEnum",
          "readOnly": true,
          "canBeNull": false,
          "description": null,
          "type": "service.RenewalTypeEnum"
        },
        "contactAdmin": {
          "type": "string",
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "fullType": "coreTypes.AccountId:string"
        },
        "expiration": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "date",
          "type": "date",
          "description": null
        },
        "creation": {
          "fullType": "date",
          "readOnly": true,
          "canBeNull": false,
          "type": "date",
          "description": null
        },
        "contactTech": {
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "canBeNull": false,
          "type": "string",
          "description": null
        },
        "canDeleteAtExpiration": {
          "type": "boolean",
          "description": "Indicates that the service can be set up to be deleted at expiration",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "boolean"
        },
        "serviceId": {
          "fullType": "coreTypes.ServiceId:long",
          "readOnly": true,
          "canBeNull": false,
          "type": "long",
          "description": null
        },
        "status": {
          "type": "service.StateEnum",
          "description": null,
          "readOnly": true,
          "fullType": "service.StateEnum",
          "canBeNull": false
        },
        "possibleRenewPeriod": {
          "description": "All the possible renew period of your service in month",
          "type": "long[]",
          "canBeNull": true,
          "readOnly": true,
          "fullType": "long[]"
        }
      },
      "id": "Service"
    },
    "license.SqlServerVersionEnum": {
      "id": "SqlServerVersionEnum",
      "namespace": "license",
      "enum": [
        "SQL_SERVER_2008_STANDARD_EDITION_2_CPU",
        "SQL_SERVER_2008_STANDARD_EDITION_4_CPU",
        "SQL_SERVER_2008_WEB_EDITION_2_CPU",
        "SQL_SERVER_2008_WEB_EDITION_4_CPU",
        "SQL_SERVER_2012_STANDARD_EDITION_10_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_12_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_16_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_18_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_20_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_24_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_2_CPU",
        "SQL_SERVER_2012_STANDARD_EDITION_32_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_6_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_8_CORES",
        "SQL_SERVER_2012_WEB_EDITION_10_CORES",
        "SQL_SERVER_2012_WEB_EDITION_12_CORES",
        "SQL_SERVER_2012_WEB_EDITION_16_CORES",
        "SQL_SERVER_2012_WEB_EDITION_18_CORES",
        "SQL_SERVER_2012_WEB_EDITION_20_CORES",
        "SQL_SERVER_2012_WEB_EDITION_24_CORES",
        "SQL_SERVER_2012_WEB_EDITION_32_CORES",
        "SQL_SERVER_2012_WEB_EDITION_4_CORES",
        "SQL_SERVER_2012_WEB_EDITION_6_CORES",
        "SQL_SERVER_2012_WEB_EDITION_8_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_10_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_12_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_16_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_18_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_20_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_24_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_6_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_8_CORES",
        "SQL_SERVER_2014_WEB_EDITION_10_CORES",
        "SQL_SERVER_2014_WEB_EDITION_12_CORES",
        "SQL_SERVER_2014_WEB_EDITION_16_CORES",
        "SQL_SERVER_2014_WEB_EDITION_18_CORES",
        "SQL_SERVER_2014_WEB_EDITION_20_CORES",
        "SQL_SERVER_2014_WEB_EDITION_24_CORES",
        "SQL_SERVER_2014_WEB_EDITION_4_CORES",
        "SQL_SERVER_2014_WEB_EDITION_6_CORES",
        "SQL_SERVER_2014_WEB_EDITION_8_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_10_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_12_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_14_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_16_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_6_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_8_CORES",
        "SQL_SERVER_2016_WEB_EDITION_10_CORES",
        "SQL_SERVER_2016_WEB_EDITION_12_CORES",
        "SQL_SERVER_2016_WEB_EDITION_14_CORES",
        "SQL_SERVER_2016_WEB_EDITION_16_CORES",
        "SQL_SERVER_2016_WEB_EDITION_4_CORES",
        "SQL_SERVER_2016_WEB_EDITION_6_CORES",
        "SQL_SERVER_2016_WEB_EDITION_8_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_10_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_12_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_14_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_16_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_18_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_20_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_22_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_24_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_26_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_28_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_30_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_32_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_6_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_8_CORES",
        "SQL_SERVER_2017_WEB_EDITION_10_CORES",
        "SQL_SERVER_2017_WEB_EDITION_12_CORES",
        "SQL_SERVER_2017_WEB_EDITION_14_CORES",
        "SQL_SERVER_2017_WEB_EDITION_16_CORES",
        "SQL_SERVER_2017_WEB_EDITION_18_CORES",
        "SQL_SERVER_2017_WEB_EDITION_20_CORES",
        "SQL_SERVER_2017_WEB_EDITION_22_CORES",
        "SQL_SERVER_2017_WEB_EDITION_24_CORES",
        "SQL_SERVER_2017_WEB_EDITION_26_CORES",
        "SQL_SERVER_2017_WEB_EDITION_28_CORES",
        "SQL_SERVER_2017_WEB_EDITION_30_CORES",
        "SQL_SERVER_2017_WEB_EDITION_32_CORES",
        "SQL_SERVER_2017_WEB_EDITION_4_CORES",
        "SQL_SERVER_2017_WEB_EDITION_6_CORES",
        "SQL_SERVER_2017_WEB_EDITION_8_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_10_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_12_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_14_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_16_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_18_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_20_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_22_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_24_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_26_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_28_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_30_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_32_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_6_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_8_CORES",
        "SQL_SERVER_2019_WEB_EDITION_10_CORES",
        "SQL_SERVER_2019_WEB_EDITION_12_CORES",
        "SQL_SERVER_2019_WEB_EDITION_14_CORES",
        "SQL_SERVER_2019_WEB_EDITION_16_CORES",
        "SQL_SERVER_2019_WEB_EDITION_18_CORES",
        "SQL_SERVER_2019_WEB_EDITION_20_CORES",
        "SQL_SERVER_2019_WEB_EDITION_22_CORES",
        "SQL_SERVER_2019_WEB_EDITION_24_CORES",
        "SQL_SERVER_2019_WEB_EDITION_26_CORES",
        "SQL_SERVER_2019_WEB_EDITION_28_CORES",
        "SQL_SERVER_2019_WEB_EDITION_30_CORES",
        "SQL_SERVER_2019_WEB_EDITION_32_CORES",
        "SQL_SERVER_2019_WEB_EDITION_4_CORES",
        "SQL_SERVER_2019_WEB_EDITION_6_CORES",
        "SQL_SERVER_2019_WEB_EDITION_8_CORES",
        "sql-server-2008-license-standard-edition-2-cpu",
        "sql-server-2008-license-standard-edition-4-cpu",
        "sql-server-2008-license-web-edition-2-cpu",
        "sql-server-2008-license-web-edition-4-cpu",
        "sql-server-2012-license-standard-edition-10-cores",
        "sql-server-2012-license-standard-edition-12-cores",
        "sql-server-2012-license-standard-edition-16-cores",
        "sql-server-2012-license-standard-edition-18-cores",
        "sql-server-2012-license-standard-edition-2-cpu",
        "sql-server-2012-license-standard-edition-20-cores",
        "sql-server-2012-license-standard-edition-24-cores",
        "sql-server-2012-license-standard-edition-32-cores",
        "sql-server-2012-license-standard-edition-4-cores",
        "sql-server-2012-license-standard-edition-6-cores",
        "sql-server-2012-license-standard-edition-8-cores",
        "sql-server-2012-license-web-edition-10-cores",
        "sql-server-2012-license-web-edition-12-cores",
        "sql-server-2012-license-web-edition-16-cores",
        "sql-server-2012-license-web-edition-18-cores",
        "sql-server-2012-license-web-edition-20-cores",
        "sql-server-2012-license-web-edition-24-cores",
        "sql-server-2012-license-web-edition-32-cores",
        "sql-server-2012-license-web-edition-4-cores",
        "sql-server-2012-license-web-edition-6-cores",
        "sql-server-2012-license-web-edition-8-cores",
        "sql-server-2014-license-standard-edition-10-cores",
        "sql-server-2014-license-standard-edition-12-cores",
        "sql-server-2014-license-standard-edition-16-cores",
        "sql-server-2014-license-standard-edition-18-cores",
        "sql-server-2014-license-standard-edition-20-cores",
        "sql-server-2014-license-standard-edition-24-cores",
        "sql-server-2014-license-standard-edition-4-cores",
        "sql-server-2014-license-standard-edition-6-cores",
        "sql-server-2014-license-standard-edition-8-cores",
        "sql-server-2014-license-web-edition-10-cores",
        "sql-server-2014-license-web-edition-12-cores",
        "sql-server-2014-license-web-edition-16-cores",
        "sql-server-2014-license-web-edition-18-cores",
        "sql-server-2014-license-web-edition-20-cores",
        "sql-server-2014-license-web-edition-24-cores",
        "sql-server-2014-license-web-edition-4-cores",
        "sql-server-2014-license-web-edition-6-cores",
        "sql-server-2014-license-web-edition-8-cores",
        "sql-server-2016-license-standard-edition-10-cores",
        "sql-server-2016-license-standard-edition-12-cores",
        "sql-server-2016-license-standard-edition-14-cores",
        "sql-server-2016-license-standard-edition-16-cores",
        "sql-server-2016-license-standard-edition-4-cores",
        "sql-server-2016-license-standard-edition-6-cores",
        "sql-server-2016-license-standard-edition-8-cores",
        "sql-server-2016-license-web-edition-10-cores",
        "sql-server-2016-license-web-edition-12-cores",
        "sql-server-2016-license-web-edition-14-cores",
        "sql-server-2016-license-web-edition-16-cores",
        "sql-server-2016-license-web-edition-4-cores",
        "sql-server-2016-license-web-edition-6-cores",
        "sql-server-2016-license-web-edition-8-cores",
        "sql-server-2017-license-standard-edition-10-cores",
        "sql-server-2017-license-standard-edition-12-cores",
        "sql-server-2017-license-standard-edition-14-cores",
        "sql-server-2017-license-standard-edition-16-cores",
        "sql-server-2017-license-standard-edition-18-cores",
        "sql-server-2017-license-standard-edition-20-cores",
        "sql-server-2017-license-standard-edition-22-cores",
        "sql-server-2017-license-standard-edition-24-cores",
        "sql-server-2017-license-standard-edition-26-cores",
        "sql-server-2017-license-standard-edition-28-cores",
        "sql-server-2017-license-standard-edition-30-cores",
        "sql-server-2017-license-standard-edition-32-cores",
        "sql-server-2017-license-standard-edition-4-cores",
        "sql-server-2017-license-standard-edition-6-cores",
        "sql-server-2017-license-standard-edition-8-cores",
        "sql-server-2017-license-web-edition-10-cores",
        "sql-server-2017-license-web-edition-12-cores",
        "sql-server-2017-license-web-edition-14-cores",
        "sql-server-2017-license-web-edition-16-cores",
        "sql-server-2017-license-web-edition-18-cores",
        "sql-server-2017-license-web-edition-20-cores",
        "sql-server-2017-license-web-edition-22-cores",
        "sql-server-2017-license-web-edition-24-cores",
        "sql-server-2017-license-web-edition-26-cores",
        "sql-server-2017-license-web-edition-28-cores",
        "sql-server-2017-license-web-edition-30-cores",
        "sql-server-2017-license-web-edition-32-cores",
        "sql-server-2017-license-web-edition-4-cores",
        "sql-server-2017-license-web-edition-6-cores",
        "sql-server-2017-license-web-edition-8-cores",
        "sql-server-2019-license-standard-edition-10-cores",
        "sql-server-2019-license-standard-edition-12-cores",
        "sql-server-2019-license-standard-edition-14-cores",
        "sql-server-2019-license-standard-edition-16-cores",
        "sql-server-2019-license-standard-edition-18-cores",
        "sql-server-2019-license-standard-edition-20-cores",
        "sql-server-2019-license-standard-edition-22-cores",
        "sql-server-2019-license-standard-edition-24-cores",
        "sql-server-2019-license-standard-edition-26-cores",
        "sql-server-2019-license-standard-edition-28-cores",
        "sql-server-2019-license-standard-edition-30-cores",
        "sql-server-2019-license-standard-edition-32-cores",
        "sql-server-2019-license-standard-edition-4-cores",
        "sql-server-2019-license-standard-edition-6-cores",
        "sql-server-2019-license-standard-edition-8-cores",
        "sql-server-2019-license-web-edition-10-cores",
        "sql-server-2019-license-web-edition-12-cores",
        "sql-server-2019-license-web-edition-14-cores",
        "sql-server-2019-license-web-edition-16-cores",
        "sql-server-2019-license-web-edition-18-cores",
        "sql-server-2019-license-web-edition-20-cores",
        "sql-server-2019-license-web-edition-22-cores",
        "sql-server-2019-license-web-edition-24-cores",
        "sql-server-2019-license-web-edition-26-cores",
        "sql-server-2019-license-web-edition-28-cores",
        "sql-server-2019-license-web-edition-30-cores",
        "sql-server-2019-license-web-edition-32-cores",
        "sql-server-2019-license-web-edition-4-cores",
        "sql-server-2019-license-web-edition-6-cores",
        "sql-server-2019-license-web-edition-8-cores"
      ],
      "enumType": "string",
      "description": "All versions for SQL Server product"
    }
  },
  "resourcePath": "/license/sqlserver"
}