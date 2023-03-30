import {Schema} from '../../src/schema';

// imported from https://eu.api.soyoustart.com:443/1.0/license/virtuozzo.json

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
          "iamActions": [
            "licenseVirtuozzo:apiovh:get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/license/virtuozzo"
    },
    {
      "description": "Your Virtuozzo license",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "licenseVirtuozzo:apiovh:get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "license.virtuozzo.Virtuozzo"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "licenseVirtuozzo:apiovh:put"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.virtuozzo.Virtuozzo",
              "description": "New object properties",
              "fullType": "license.virtuozzo.Virtuozzo",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/license/virtuozzo/{serviceName}"
    },
    {
      "description": "allowedDestinationIp operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns an array of ips where the license can be moved to",
          "httpMethod": "GET",
          "iamActions": [
            "licenseVirtuozzo:apiovh:allowedDestinationIp/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipBlock[]"
        }
      ],
      "path": "/license/virtuozzo/{serviceName}/allowedDestinationIp"
    },
    {
      "description": "canLicenseBeMovedTo operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Will tell if the ip can accept the license",
          "httpMethod": "GET",
          "iamActions": [
            "licenseVirtuozzo:apiovh:canLicenseBeMovedTo/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "The Ip on which you want to move this license",
              "fullType": "ipv4",
              "name": "destinationIp",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "license.ChangeIpStatus"
        }
      ],
      "path": "/license/virtuozzo/{serviceName}/canLicenseBeMovedTo"
    },
    {
      "description": "changeIp operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Move this license to another Ip",
          "httpMethod": "POST",
          "iamActions": [
            "licenseVirtuozzo:apiovh:changeIp"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "The Ip on which you want to move this license",
              "fullType": "ipv4",
              "name": "destinationIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "license.Task"
        }
      ],
      "path": "/license/virtuozzo/{serviceName}/changeIp"
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
          "iamActions": [
            "licenseVirtuozzo:apiovh:confirmTermination"
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
              "description": "The termination token sent by mail to the admin contact",
              "fullType": "string",
              "name": "token",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/license/virtuozzo/{serviceName}/confirmTermination"
    },
    {
      "description": "List the license.Option objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Options linked to this license",
          "httpMethod": "GET",
          "iamActions": [
            "licenseVirtuozzo:apiovh:option/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "license.OptionLabel",
              "description": "Filter the value of label property (=)",
              "fullType": "license.OptionLabel",
              "name": "label",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "license.OptionLabel[]"
        }
      ],
      "path": "/license/virtuozzo/{serviceName}/option"
    },
    {
      "description": "Your License options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "release this Option",
          "httpMethod": "DELETE",
          "iamActions": [
            "licenseVirtuozzo:apiovh:option/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OptionLabel",
              "description": "This option designation",
              "fullType": "license.OptionLabel",
              "name": "label",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "license.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "licenseVirtuozzo:apiovh:option/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OptionLabel",
              "description": "This option designation",
              "fullType": "license.OptionLabel",
              "name": "label",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "license.Option"
        }
      ],
      "path": "/license/virtuozzo/{serviceName}/option/{label}"
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
          "iamActions": [
            "licenseVirtuozzo:apiovh:serviceInfos/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
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
          "iamActions": [
            "licenseVirtuozzo:apiovh:serviceInfos/edit"
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
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/license/virtuozzo/{serviceName}/serviceInfos"
    },
    {
      "description": "List the license.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "tasks linked to this license",
          "httpMethod": "GET",
          "iamActions": [
            "licenseVirtuozzo:apiovh:tasks/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
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
          "responseType": "long[]"
        }
      ],
      "path": "/license/virtuozzo/{serviceName}/tasks"
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
          "iamActions": [
            "licenseVirtuozzo:apiovh:tasks/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
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
          "responseType": "license.Task"
        }
      ],
      "path": "/license/virtuozzo/{serviceName}/tasks/{taskId}"
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
          "iamActions": [
            "licenseVirtuozzo:apiovh:terminate"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/license/virtuozzo/{serviceName}/terminate"
    },
    {
      "description": "Get the orderable Virtuozzo versions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the orderable Virtuozzo versions",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:licenseVirtuozzo/orderableVersions/get"
          ],
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
          "responseType": "license.VirtuozzoOrderConfiguration[]"
        }
      ],
      "path": "/license/virtuozzo/orderableVersions"
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
    "license.ChangeIpMessageEnum": {
      "description": "Messages from change IP",
      "enum": [
        "OK",
        "destinationNotAllowed",
        "licenseAlreadyExists",
        "notAllowedToHandleThis",
        "notSameType",
        "sameIp",
        "versionNotAllowed"
      ],
      "enumType": "string",
      "id": "ChangeIpMessageEnum",
      "namespace": "license"
    },
    "license.ChangeIpStatus": {
      "description": "License change ip status return",
      "id": "ChangeIpStatus",
      "namespace": "license",
      "properties": {
        "message": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "license.ChangeIpMessageEnum"
        },
        "success": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
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
    "license.Option": {
      "description": "Your License options",
      "id": "Option",
      "namespace": "license",
      "properties": {
        "amount": {
          "canBeNull": true,
          "description": "Quantity or corresponding label of the designated option enabled on your license",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "canBeDeleted": {
          "canBeNull": false,
          "description": "Specifies whether this option can be released or not",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "expirationDate": {
          "canBeNull": false,
          "description": "This option expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "label": {
          "canBeNull": false,
          "description": "This option designation",
          "fullType": "license.OptionLabel",
          "readOnly": true,
          "required": false,
          "type": "license.OptionLabel"
        },
        "version": {
          "canBeNull": true,
          "description": "This option related version",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "license.OptionLabel": {
      "description": "The name of an option currently enabled on your license",
      "enum": [
        "ANTISPAM_SPAMASSASSIN",
        "ANTIVIRUS_DRWEB",
        "ANTIVIRUS_KASPERSKY",
        "DOMAINS",
        "LANGUAGE_PACK",
        "POWERPACK",
        "SQL_SERVER",
        "VIRTUOZZO_CONTAINERS"
      ],
      "enumType": "string",
      "id": "OptionLabel",
      "namespace": "license"
    },
    "license.OrderableVirtuozzoCompatibilityInfos": {
      "description": "All versions available for Virtuozzo products",
      "id": "OrderableVirtuozzoCompatibilityInfos",
      "namespace": "license",
      "properties": {
        "compliantContainers": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "license.OrderableVirtuozzoContainerNumberEnum[]"
        },
        "potentialProblems": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "license.PotentialProblemVirtuozzoEnum[]"
        },
        "version": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "license.OrderableVirtuozzoVersionEnum"
        }
      }
    },
    "license.OrderableVirtuozzoContainerNumberEnum": {
      "description": "All quantities of container available for a Virtuozzo license",
      "enum": [
        "2_CPU_001_CONTAINER",
        "2_CPU_003_CONTAINER",
        "2_CPU_010_CONTAINER",
        "2_CPU_030_CONTAINER",
        "2_CPU_060_CONTAINER",
        "2_CPU_100_CONTAINER"
      ],
      "enumType": "string",
      "id": "OrderableVirtuozzoContainerNumberEnum",
      "namespace": "license"
    },
    "license.OrderableVirtuozzoVersionEnum": {
      "description": "All versions available for Virtuozzo products",
      "enum": [
        "VIRTUOZZO_CONTAINERS_4_FOR_LINUX",
        "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS",
        "virtuozzo-4",
        "virtuozzo-4-for-windows"
      ],
      "enumType": "string",
      "id": "OrderableVirtuozzoVersionEnum",
      "namespace": "license"
    },
    "license.PotentialProblemVirtuozzoEnum": {
      "description": "Tests that have failed for Virtuozzo products",
      "enum": [
        "isLinuxOs",
        "isOsVirtuozzo4Like",
        "isWindowsOs"
      ],
      "enumType": "string",
      "id": "PotentialProblemVirtuozzoEnum",
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
    "license.VirtuozzoContainerNumberEnum": {
      "description": "All quantities of container available for a Virtuozzo license",
      "enum": [
        "2_CPU_001_CONTAINER",
        "2_CPU_003_CONTAINER",
        "2_CPU_010_CONTAINER",
        "2_CPU_030_CONTAINER",
        "2_CPU_060_CONTAINER",
        "2_CPU_100_CONTAINER"
      ],
      "enumType": "string",
      "id": "VirtuozzoContainerNumberEnum",
      "namespace": "license"
    },
    "license.VirtuozzoOrderConfiguration": {
      "description": "The serviceTypes allowed to Order a Virtuozzo version",
      "id": "VirtuozzoOrderConfiguration",
      "namespace": "license",
      "properties": {
        "orderableVersions": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "license.OrderableVirtuozzoCompatibilityInfos[]"
        },
        "serviceType": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "license.LicenseTypeEnum"
        }
      }
    },
    "license.VirtuozzoVersionEnum": {
      "description": "All versions available for Virtuozzo products",
      "enum": [
        "VIRTUOZZO_CONTAINERS_4_FOR_LINUX",
        "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS"
      ],
      "enumType": "string",
      "id": "VirtuozzoVersionEnum",
      "namespace": "license"
    },
    "license.virtuozzo.Virtuozzo": {
      "description": "Your Virtuozzo license",
      "id": "Virtuozzo",
      "namespace": "license.virtuozzo",
      "properties": {
        "containerNumber": {
          "canBeNull": false,
          "description": "The amount of containers this license can manage",
          "fullType": "license.VirtuozzoContainerNumberEnum",
          "readOnly": true,
          "required": false,
          "type": "license.VirtuozzoContainerNumberEnum"
        },
        "creation": {
          "canBeNull": false,
          "description": "This license creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "Shall we delete this on expiration ?",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "domain": {
          "canBeNull": false,
          "description": "The internal name of your license",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "informationKey": {
          "canBeNull": true,
          "description": "This license Information key",
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
        "productKey": {
          "canBeNull": true,
          "description": "This license product key",
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
          "fullType": "license.VirtuozzoVersionEnum",
          "readOnly": true,
          "required": false,
          "type": "license.VirtuozzoVersionEnum"
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
  "resourcePath": "/license/virtuozzo"
}