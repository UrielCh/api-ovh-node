import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/license/plesk",
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
      "description": "Operations about the LICENSE service"
    },
    {
      "path": "/license/plesk/orderableVersions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Your license Ip"
            }
          ],
          "responseType": "license.PleskOrderConfiguration[]",
          "noAuthentication": false,
          "description": "Get the orderable Plesk versions and their associated compatibilities"
        }
      ],
      "description": "Get the orderable Plesk versions and their associated compatibilities"
    },
    {
      "path": "/license/plesk/{serviceName}",
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
          "responseType": "license.plesk.Plesk",
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
              "dataType": "license.plesk.Plesk",
              "paramType": "body",
              "fullType": "license.plesk.Plesk",
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
      "description": "Your Plesk license"
    },
    {
      "path": "/license/plesk/{serviceName}/allowedDestinationIp",
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
          "responseType": "ipBlock[]",
          "noAuthentication": false,
          "description": "Returns an array of ips where the license can be moved to"
        }
      ],
      "description": "allowedDestinationIp operations"
    },
    {
      "path": "/license/plesk/{serviceName}/canLicenseBeMovedTo",
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
              "name": "destinationIp",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "The Ip on which you want to move this license"
            }
          ],
          "responseType": "license.ChangeIpStatus",
          "noAuthentication": false,
          "description": "Will tell if the ip can accept the license"
        }
      ],
      "description": "canLicenseBeMovedTo operations"
    },
    {
      "path": "/license/plesk/{serviceName}/changeIp",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "destinationIp",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "The Ip on which you want to move this license"
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
          "responseType": "license.Task",
          "noAuthentication": false,
          "description": "Move this license to another Ip"
        }
      ],
      "description": "changeIp operations"
    },
    {
      "path": "/license/plesk/{serviceName}/confirmTermination",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "reason",
              "dataType": "service.TerminationReasonEnum",
              "paramType": "body",
              "fullType": "service.TerminationReasonEnum",
              "required": false,
              "description": "Reason of your termination request"
            },
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
      "path": "/license/plesk/{serviceName}/option",
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
          "responseType": "license.OptionLabel[]",
          "noAuthentication": false,
          "description": "options attached to this license"
        }
      ],
      "description": "List the license.Option objects"
    },
    {
      "path": "/license/plesk/{serviceName}/option/{label}",
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
              "name": "label",
              "dataType": "license.OptionLabel",
              "paramType": "path",
              "fullType": "license.OptionLabel",
              "required": true,
              "description": "Label"
            }
          ],
          "responseType": "license.Task",
          "noAuthentication": false,
          "description": "release this Option"
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
              "name": "label",
              "dataType": "license.OptionLabel",
              "paramType": "path",
              "fullType": "license.OptionLabel",
              "required": true,
              "description": "Label"
            }
          ],
          "responseType": "license.Option",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Your License options"
    },
    {
      "path": "/license/plesk/{serviceName}/serviceInfos",
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
      "path": "/license/plesk/{serviceName}/tasks",
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
              "dataType": "license.TaskStateEnum",
              "paramType": "query",
              "fullType": "license.TaskStateEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "name": "action",
              "dataType": "license.ActionType",
              "paramType": "query",
              "fullType": "license.ActionType",
              "required": false,
              "description": "Filter the value of action property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "tasks linked to this license"
        }
      ],
      "description": "List the license.Task objects"
    },
    {
      "path": "/license/plesk/{serviceName}/tasks/{taskId}",
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
              "name": "taskId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Task ID"
            }
          ],
          "responseType": "license.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "licenses Todos"
    },
    {
      "path": "/license/plesk/{serviceName}/terminate",
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
    }
  ],
  "resourcePath": "/license/plesk",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "license.ActionType": {
      "id": "ActionType",
      "namespace": "license",
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
      "enumType": "string"
    },
    "license.ChangeIpMessageEnum": {
      "id": "ChangeIpMessageEnum",
      "namespace": "license",
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
      "enumType": "string"
    },
    "license.ChangeIpStatus": {
      "id": "ChangeIpStatus",
      "namespace": "license",
      "description": "License change ip status return",
      "properties": {
        "message": {
          "type": "license.ChangeIpMessageEnum",
          "fullType": "license.ChangeIpMessageEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "success": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "license.DomainNumberEnum": {
      "id": "DomainNumberEnum",
      "namespace": "license",
      "description": "All quantities of domain available for a license",
      "enum": [
        "0",
        "1",
        "10",
        "100",
        "30",
        "300",
        "unlimited"
      ],
      "enumType": "string"
    },
    "license.LicenseTypeEnum": {
      "id": "LicenseTypeEnum",
      "namespace": "license",
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
      "enumType": "string"
    },
    "license.Option": {
      "id": "Option",
      "namespace": "license",
      "description": "Your License options",
      "properties": {
        "amount": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Quantity or corresponding label of the designated option enabled on your license",
          "required": false
        },
        "canBeDeleted": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Specifies whether this option can be released or not",
          "required": true
        },
        "expirationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "This option expiration date",
          "required": true
        },
        "label": {
          "type": "license.OptionLabel",
          "fullType": "license.OptionLabel",
          "canBeNull": false,
          "readOnly": true,
          "description": "This option designation",
          "required": true
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "This option related version",
          "required": false
        }
      }
    },
    "license.OptionLabel": {
      "id": "OptionLabel",
      "namespace": "license",
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
      "enumType": "string"
    },
    "license.OrderableAntivirusEnum": {
      "id": "OrderableAntivirusEnum",
      "namespace": "license",
      "description": "All antivirus available for Plesk products",
      "enum": [
        "DR_WEB",
        "KASPERSKY_UNLIMITED_MAILBOXES",
        "kaspersky"
      ],
      "enumType": "string"
    },
    "license.OrderablePleskCompatibilityInfos": {
      "id": "OrderablePleskCompatibilityInfos",
      "namespace": "license",
      "description": "All versions available for Plesk products",
      "properties": {
        "canHavePowerPack": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canHaveResellerManagement": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canHaveWordpressToolkit": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "compliantAntivirus": {
          "type": "license.OrderableAntivirusEnum[]",
          "fullType": "license.OrderableAntivirusEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "compliantApplicationSets": {
          "type": "license.PleskApplicationSetEnum[]",
          "fullType": "license.PleskApplicationSetEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "compliantDomains": {
          "type": "license.OrderablePleskDomainNumberEnum[]",
          "fullType": "license.OrderablePleskDomainNumberEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "compliantLanguagePack": {
          "type": "license.OrderablePleskLanguagePackEnum[]",
          "fullType": "license.OrderablePleskLanguagePackEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "potentialProblems": {
          "type": "license.PotentialProblemPleskEnum[]",
          "fullType": "license.PotentialProblemPleskEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "version": {
          "type": "license.PleskVersionEnum",
          "fullType": "license.PleskVersionEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "license.OrderablePleskDomainNumberEnum": {
      "id": "OrderablePleskDomainNumberEnum",
      "namespace": "license",
      "description": "All domain available for Plesk products",
      "enum": [
        "10",
        "100",
        "30",
        "300",
        "hostingsuite",
        "unlimited"
      ],
      "enumType": "string"
    },
    "license.OrderablePleskLanguagePackEnum": {
      "id": "OrderablePleskLanguagePackEnum",
      "namespace": "license",
      "description": "All language pack numbers available for Plesk products",
      "enum": [
        "1",
        "1-extra-language-for-plesk12",
        "2",
        "2-extra-languages-for-plesk12",
        "3",
        "3-extra-languages-for-plesk12",
        "4",
        "4-extra-languages-for-plesk12",
        "5",
        "5-extra-languages-for-plesk12",
        "unlimited",
        "unlimited-extra-languages-for-plesk12"
      ],
      "enumType": "string"
    },
    "license.PleskApplicationSetEnum": {
      "id": "PleskApplicationSetEnum",
      "namespace": "license",
      "description": "Application set available for Plesk products",
      "enum": [
        "applicationpack",
        "developerpack",
        "power-pack-for-plesk12",
        "powerpack"
      ],
      "enumType": "string"
    },
    "license.PleskOrderConfiguration": {
      "id": "PleskOrderConfiguration",
      "namespace": "license",
      "description": "The serviceTypes allowed to Order a plesk version and associated Versions",
      "properties": {
        "orderableVersions": {
          "type": "license.OrderablePleskCompatibilityInfos[]",
          "fullType": "license.OrderablePleskCompatibilityInfos[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "serviceType": {
          "type": "license.LicenseTypeEnum",
          "fullType": "license.LicenseTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "license.PleskVersionEnum": {
      "id": "PleskVersionEnum",
      "namespace": "license",
      "description": "All versions available for Plesk products",
      "enum": [
        "PLESK_10_AND_LATER",
        "PLESK_10_AND_LATER_FOR_KVM",
        "PLESK_10_AND_LATER_FOR_VMWARE",
        "PLESK_10_AND_LATER_FOR_VZ",
        "PLESK_10_AND_LATER_FOR_WIN",
        "PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE",
        "PLESK_10_AND_LATER_FOR_WIN_FOR_VZ",
        "PLESK_10_AND_LATER_FOR_WIN_FOR_XEN",
        "PLESK_10_AND_LATER_FOR_XEN",
        "PLESK_12_VPS_WEB_ADMIN",
        "PLESK_12_VPS_WEB_APP",
        "PLESK_12_VPS_WEB_HOST",
        "PLESK_12_VPS_WEB_HOST_CLNX",
        "PLESK_12_VPS_WEB_PRO",
        "PLESK_12_VPS_WEB_PRO_CLNX",
        "PLESK_12_WEB_ADMIN",
        "PLESK_12_WEB_APP",
        "PLESK_12_WEB_HOST",
        "PLESK_12_WEB_HOST_CLNX",
        "PLESK_12_WEB_PRO",
        "PLESK_12_WEB_PRO_CLNX",
        "PLESK_75_RELOADED",
        "PLESK_80",
        "PLESK_80_FOR_VZ",
        "PLESK_81_FOR_WIN",
        "PLESK_9",
        "PLESK_95",
        "PLESK_95_FOR_VZ",
        "PLESK_95_FOR_WIN",
        "PLESK_9_FOR_VZ",
        "PLESK_9_FOR_WIN",
        "PLESK_ONYX_VPS_WEB_ADMIN",
        "PLESK_ONYX_VPS_WEB_APP",
        "PLESK_ONYX_VPS_WEB_HOST",
        "PLESK_ONYX_VPS_WEB_HOST_CLNX",
        "PLESK_ONYX_VPS_WEB_PRO",
        "PLESK_ONYX_VPS_WEB_PRO_CLNX",
        "PLESK_ONYX_WEB_ADMIN",
        "PLESK_ONYX_WEB_APP",
        "PLESK_ONYX_WEB_HOST",
        "PLESK_ONYX_WEB_HOST_CLNX",
        "PLESK_ONYX_WEB_PRO",
        "PLESK_ONYX_WEB_PRO_CLNX",
        "plesk-12-webadmin-for-vps",
        "plesk-12-webhost",
        "plesk-12-webhost-for-vps",
        "plesk-12-webpro",
        "plesk-12-webpro-for-vps"
      ],
      "enumType": "string"
    },
    "license.PotentialProblemPleskEnum": {
      "id": "PotentialProblemPleskEnum",
      "namespace": "license",
      "description": "Tests that have failed for Plesk products",
      "enum": [
        "isHostOsHyperVLike",
        "isHostOsVMwareLike",
        "isHostOsVirtuozzo4Like",
        "isHostOsXenLike",
        "isLinuxOs",
        "isOsCloudLinux",
        "isOsPlesk10andLater",
        "isOsPlesk12",
        "isOsPleskOnyx",
        "isWindowsOs"
      ],
      "enumType": "string"
    },
    "license.StateEnum": {
      "id": "StateEnum",
      "namespace": "license",
      "description": "All states a license can be in",
      "enum": [
        "ok",
        "released",
        "terminated",
        "toDeliver"
      ],
      "enumType": "string"
    },
    "license.Task": {
      "id": "Task",
      "namespace": "license",
      "description": "licenses Todos",
      "properties": {
        "action": {
          "type": "license.ActionType",
          "fullType": "license.ActionType",
          "canBeNull": false,
          "readOnly": true,
          "description": "This Task description",
          "required": true
        },
        "doneDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "When was this Task done",
          "required": false
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "The last time this Task was updated",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "This Task name",
          "required": true
        },
        "status": {
          "type": "license.TaskStateEnum",
          "fullType": "license.TaskStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current Taks status",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "This Task id",
          "required": true
        },
        "todoDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "When was this Task created",
          "required": true
        }
      }
    },
    "license.TaskStateEnum": {
      "id": "TaskStateEnum",
      "namespace": "license",
      "description": "All states a license Task can be in",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string"
    },
    "license.plesk.Plesk": {
      "id": "Plesk",
      "namespace": "license.plesk",
      "description": "Your Plesk license",
      "properties": {
        "creation": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "This license creation date",
          "required": true
        },
        "deleteAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Shall we delete this on expiration ?",
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The internal name of your license",
          "required": true
        },
        "domainNumber": {
          "type": "license.DomainNumberEnum",
          "fullType": "license.DomainNumberEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "The amount of domain this license can manage",
          "required": false
        },
        "informationKey": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "This license Information key",
          "required": false
        },
        "ip": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "description": "The ip on which this license is attached",
          "required": true
        },
        "key": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "This license key",
          "required": true
        },
        "licenseId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The license id on license provider side",
          "required": true
        },
        "productKey": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "This license product key",
          "required": false
        },
        "status": {
          "type": "license.StateEnum",
          "fullType": "license.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "This license state",
          "required": true
        },
        "version": {
          "type": "license.PleskVersionEnum",
          "fullType": "license.PleskVersionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "This license version",
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