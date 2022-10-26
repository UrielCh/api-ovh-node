import {Schema} from '../../src/schema';

// imported from https://eu.api.soyoustart.com:443/1.0/license/sqlserver.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the LICENSE service",
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
            "product/licenses/all"
          ]
        }
      ],
      "path": "/license/sqlserver"
    },
    {
      "description": "Your SQL Server license",
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
              "description": "The name of your SQL Server license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "license.sqlserver.SqlServer",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        }
      ],
      "path": "/license/sqlserver/{serviceName}"
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
              "description": "The name of your SQL Server license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        }
      ],
      "path": "/license/sqlserver/{serviceName}/confirmTermination"
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
              "description": "The name of your SQL Server license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service",
          "scopes": [
            "all",
            "product/licenses/all"
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
              "description": "The name of your SQL Server license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        }
      ],
      "path": "/license/sqlserver/{serviceName}/serviceInfos"
    },
    {
      "description": "List the license.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Tasks linked to this license",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your SQL Server license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "license.ActionType",
              "description": "Filter the value of action property (=)",
              "fullType": "license.ActionType",
              "name": "action",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.TaskStateEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "license.TaskStateEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        }
      ],
      "path": "/license/sqlserver/{serviceName}/tasks"
    },
    {
      "description": "licenses Todos",
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
              "description": "The name of your SQL Server license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "This Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "license.Task",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        }
      ],
      "path": "/license/sqlserver/{serviceName}/tasks/{taskId}"
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
              "description": "The name of your SQL Server license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        }
      ],
      "path": "/license/sqlserver/{serviceName}/terminate"
    },
    {
      "description": "Get the orderable Sql Server versions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the orderable Sql Server versions",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Your license Ip",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "license.SqlServerOrderConfiguration[]",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        }
      ],
      "path": "/license/sqlserver/orderableVersions"
    }
  ],
  "basePath": "https://eu.api.soyoustart.com/1.0",
  "models": {
    "license.ActionType": {
      "description": "A short description of what does the Task on your license",
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
      "id": "ActionType",
      "namespace": "license"
    },
    "license.LicenseTypeEnum": {
      "description": "Possible values for license type",
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
      ],
      "enumType": "string",
      "id": "LicenseTypeEnum",
      "namespace": "license"
    },
    "license.OrderableSqlServerCompatibilityInfos": {
      "description": "All options available for SQL Server products",
      "id": "OrderableSqlServerCompatibilityInfos",
      "namespace": "license",
      "properties": {
        "version": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "license.SqlServerVersionEnum"
        }
      }
    },
    "license.SqlServerOrderConfiguration": {
      "description": "Allowed SQL Server versions and their compliant options per matching serviceTypes",
      "id": "SqlServerOrderConfiguration",
      "namespace": "license",
      "properties": {
        "orderableVersions": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "license.OrderableSqlServerCompatibilityInfos[]"
        },
        "serviceType": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "license.LicenseTypeEnum"
        }
      }
    },
    "license.SqlServerVersionEnum": {
      "description": "All versions for SQL Server product",
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
        "SQL_SERVER_2019_ENTERPRISE_EDITION_10_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_12_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_14_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_16_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_18_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_20_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_22_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_24_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_26_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_28_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_30_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_32_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_34_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_36_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_38_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_40_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_42_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_44_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_46_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_48_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_4_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_50_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_52_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_54_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_56_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_58_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_60_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_62_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_64_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_6_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_8_CORES",
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
        "SQL_SERVER_2019_STANDARD_EDITION_34_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_36_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_38_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_40_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_42_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_44_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_46_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_48_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_50_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_52_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_54_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_56_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_58_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_60_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_62_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_64_CORES",
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
        "SQL_SERVER_2019_WEB_EDITION_34_CORES",
        "SQL_SERVER_2019_WEB_EDITION_36_CORES",
        "SQL_SERVER_2019_WEB_EDITION_38_CORES",
        "SQL_SERVER_2019_WEB_EDITION_40_CORES",
        "SQL_SERVER_2019_WEB_EDITION_42_CORES",
        "SQL_SERVER_2019_WEB_EDITION_44_CORES",
        "SQL_SERVER_2019_WEB_EDITION_46_CORES",
        "SQL_SERVER_2019_WEB_EDITION_48_CORES",
        "SQL_SERVER_2019_WEB_EDITION_4_CORES",
        "SQL_SERVER_2019_WEB_EDITION_50_CORES",
        "SQL_SERVER_2019_WEB_EDITION_52_CORES",
        "SQL_SERVER_2019_WEB_EDITION_54_CORES",
        "SQL_SERVER_2019_WEB_EDITION_56_CORES",
        "SQL_SERVER_2019_WEB_EDITION_58_CORES",
        "SQL_SERVER_2019_WEB_EDITION_60_CORES",
        "SQL_SERVER_2019_WEB_EDITION_62_CORES",
        "SQL_SERVER_2019_WEB_EDITION_64_CORES",
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
        "sql-server-2019-license-enterprise-edition-10-cores",
        "sql-server-2019-license-enterprise-edition-12-cores",
        "sql-server-2019-license-enterprise-edition-14-cores",
        "sql-server-2019-license-enterprise-edition-16-cores",
        "sql-server-2019-license-enterprise-edition-18-cores",
        "sql-server-2019-license-enterprise-edition-20-cores",
        "sql-server-2019-license-enterprise-edition-22-cores",
        "sql-server-2019-license-enterprise-edition-24-cores",
        "sql-server-2019-license-enterprise-edition-26-cores",
        "sql-server-2019-license-enterprise-edition-28-cores",
        "sql-server-2019-license-enterprise-edition-30-cores",
        "sql-server-2019-license-enterprise-edition-32-cores",
        "sql-server-2019-license-enterprise-edition-34-cores",
        "sql-server-2019-license-enterprise-edition-36-cores",
        "sql-server-2019-license-enterprise-edition-38-cores",
        "sql-server-2019-license-enterprise-edition-4-cores",
        "sql-server-2019-license-enterprise-edition-40-cores",
        "sql-server-2019-license-enterprise-edition-42-cores",
        "sql-server-2019-license-enterprise-edition-44-cores",
        "sql-server-2019-license-enterprise-edition-46-cores",
        "sql-server-2019-license-enterprise-edition-48-cores",
        "sql-server-2019-license-enterprise-edition-50-cores",
        "sql-server-2019-license-enterprise-edition-52-cores",
        "sql-server-2019-license-enterprise-edition-54-cores",
        "sql-server-2019-license-enterprise-edition-56-cores",
        "sql-server-2019-license-enterprise-edition-58-cores",
        "sql-server-2019-license-enterprise-edition-6-cores",
        "sql-server-2019-license-enterprise-edition-60-cores",
        "sql-server-2019-license-enterprise-edition-62-cores",
        "sql-server-2019-license-enterprise-edition-64-cores",
        "sql-server-2019-license-enterprise-edition-8-cores",
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
        "sql-server-2019-license-standard-edition-34-cores",
        "sql-server-2019-license-standard-edition-36-cores",
        "sql-server-2019-license-standard-edition-38-cores",
        "sql-server-2019-license-standard-edition-4-cores",
        "sql-server-2019-license-standard-edition-40-cores",
        "sql-server-2019-license-standard-edition-42-cores",
        "sql-server-2019-license-standard-edition-44-cores",
        "sql-server-2019-license-standard-edition-46-cores",
        "sql-server-2019-license-standard-edition-48-cores",
        "sql-server-2019-license-standard-edition-50-cores",
        "sql-server-2019-license-standard-edition-52-cores",
        "sql-server-2019-license-standard-edition-54-cores",
        "sql-server-2019-license-standard-edition-56-cores",
        "sql-server-2019-license-standard-edition-58-cores",
        "sql-server-2019-license-standard-edition-6-cores",
        "sql-server-2019-license-standard-edition-60-cores",
        "sql-server-2019-license-standard-edition-62-cores",
        "sql-server-2019-license-standard-edition-64-cores",
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
        "sql-server-2019-license-web-edition-34-cores",
        "sql-server-2019-license-web-edition-36-cores",
        "sql-server-2019-license-web-edition-38-cores",
        "sql-server-2019-license-web-edition-4-cores",
        "sql-server-2019-license-web-edition-40-cores",
        "sql-server-2019-license-web-edition-42-cores",
        "sql-server-2019-license-web-edition-44-cores",
        "sql-server-2019-license-web-edition-46-cores",
        "sql-server-2019-license-web-edition-48-cores",
        "sql-server-2019-license-web-edition-50-cores",
        "sql-server-2019-license-web-edition-52-cores",
        "sql-server-2019-license-web-edition-54-cores",
        "sql-server-2019-license-web-edition-56-cores",
        "sql-server-2019-license-web-edition-58-cores",
        "sql-server-2019-license-web-edition-6-cores",
        "sql-server-2019-license-web-edition-60-cores",
        "sql-server-2019-license-web-edition-62-cores",
        "sql-server-2019-license-web-edition-64-cores",
        "sql-server-2019-license-web-edition-8-cores"
      ],
      "enumType": "string",
      "id": "SqlServerVersionEnum",
      "namespace": "license"
    },
    "license.StateEnum": {
      "description": "All states a license can be in",
      "enum": [
        "ok",
        "released",
        "terminated",
        "toDeliver"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "license"
    },
    "license.Task": {
      "description": "licenses Todos",
      "id": "Task",
      "namespace": "license",
      "properties": {
        "action": {
          "canBeNull": false,
          "description": "This Task description",
          "fullType": "license.ActionType",
          "readOnly": true,
          "required": false,
          "type": "license.ActionType"
        },
        "doneDate": {
          "canBeNull": true,
          "description": "When was this Task done",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "The last time this Task was updated",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "This Task name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Current Taks status",
          "fullType": "license.TaskStateEnum",
          "readOnly": true,
          "required": false,
          "type": "license.TaskStateEnum"
        },
        "taskId": {
          "canBeNull": false,
          "description": "This Task id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "todoDate": {
          "canBeNull": false,
          "description": "When was this Task created",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "license.TaskStateEnum": {
      "description": "All states a license Task can be in",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStateEnum",
      "namespace": "license"
    },
    "license.sqlserver.SqlServer": {
      "description": "Your SQL Server license",
      "id": "SqlServer",
      "namespace": "license.sqlserver",
      "properties": {
        "creation": {
          "canBeNull": false,
          "description": "This license creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "domain": {
          "canBeNull": false,
          "description": "The internal name of your license",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "description": "The ip on which this license is attached",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "licenseId": {
          "canBeNull": false,
          "description": "The license id on license provider side",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "This license state",
          "fullType": "license.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "license.StateEnum"
        },
        "version": {
          "canBeNull": false,
          "description": "This license version",
          "fullType": "license.SqlServerVersionEnum",
          "readOnly": true,
          "required": false,
          "type": "license.SqlServerVersionEnum"
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
  "resourcePath": "/license/sqlserver"
}