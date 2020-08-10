import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apis": [
    {
      "operations": [
        {
          "resellerOnly": false,
          "parameters": [
            {
              "description": "The name of your Plesk license",
              "fullType": "string",
              "required": true,
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path"
            }
          ],
          "responseFullType": "services.Service",
          "noAuthentication": false,
          "description": "Get this object properties",
          "responseType": "services.Service",
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "httpMethod": "PUT",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "description": "Alter this object properties",
          "resellerOnly": false,
          "noAuthentication": false,
          "parameters": [
            {
              "description": "New object properties",
              "fullType": "services.Service",
              "required": true,
              "name": null,
              "dataType": "services.Service",
              "paramType": "body"
            },
            {
              "dataType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "fullType": "string",
              "description": "The name of your Plesk license"
            }
          ],
          "responseFullType": "void"
        }
      ],
      "path": "/license/plesk/{serviceName}/serviceInfos",
      "description": "Details about a Service"
    },
    {
      "description": "Terminate your service",
      "path": "/license/plesk/{serviceName}/terminate",
      "operations": [
        {
          "description": "Terminate your service",
          "responseFullType": "string",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "string",
              "description": "The name of your Plesk license",
              "required": true,
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string"
        }
      ]
    },
    {
      "description": "licenses Todos",
      "path": "/license/plesk/{serviceName}/tasks/{taskId}",
      "operations": [
        {
          "responseType": "license.Task",
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "noAuthentication": false,
          "responseFullType": "license.Task",
          "parameters": [
            {
              "paramType": "path",
              "dataType": "string",
              "name": "serviceName",
              "required": true,
              "fullType": "string",
              "description": "The name of your Plesk license"
            },
            {
              "description": "This Task id",
              "fullType": "long",
              "required": true,
              "name": "taskId",
              "dataType": "long",
              "paramType": "path"
            }
          ],
          "description": "Get this object properties"
        }
      ]
    },
    {
      "description": "List the license.Task objects",
      "path": "/license/plesk/{serviceName}/tasks",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "responseType": "long[]",
          "description": "tasks linked to this license",
          "resellerOnly": false,
          "noAuthentication": false,
          "responseFullType": "long[]",
          "parameters": [
            {
              "dataType": "license.TaskStateEnum",
              "name": "status",
              "paramType": "query",
              "required": false,
              "description": "Filter the value of status property (=)",
              "fullType": "license.TaskStateEnum"
            },
            {
              "required": false,
              "name": "action",
              "dataType": "license.ActionType",
              "paramType": "query",
              "description": "Filter the value of action property (=)",
              "fullType": "license.ActionType"
            },
            {
              "fullType": "string",
              "description": "The name of your Plesk license",
              "required": true,
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path"
            }
          ]
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "ipBlock[]",
          "parameters": [
            {
              "description": "The name of your Plesk license",
              "fullType": "string",
              "dataType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "description": "Returns an array of ips where the license can be moved to",
          "responseType": "ipBlock[]",
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/license/plesk/{serviceName}/allowedDestinationIp",
      "description": "allowedDestinationIp operations"
    },
    {
      "description": "Your Plesk license",
      "path": "/license/plesk/{serviceName}",
      "operations": [
        {
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "dataType": "string",
              "description": "The name of your Plesk license",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "responseFullType": "license.plesk.Plesk",
          "resellerOnly": false,
          "description": "Get this object properties",
          "responseType": "license.plesk.Plesk",
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "description": "Alter this object properties",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "license.plesk.Plesk",
              "name": null,
              "paramType": "body",
              "required": true,
              "description": "New object properties",
              "fullType": "license.plesk.Plesk"
            },
            {
              "fullType": "string",
              "description": "The name of your Plesk license",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "dataType": "string"
            }
          ],
          "responseFullType": "void",
          "noAuthentication": false,
          "httpMethod": "PUT",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void"
        }
      ]
    },
    {
      "description": "changeIp operations",
      "path": "/license/plesk/{serviceName}/changeIp",
      "operations": [
        {
          "description": "Move this license to another Ip",
          "resellerOnly": false,
          "responseFullType": "license.Task",
          "parameters": [
            {
              "paramType": "body",
              "dataType": "ipv4",
              "name": "destinationIp",
              "required": true,
              "fullType": "ipv4",
              "description": "The Ip on which you want to move this license"
            },
            {
              "description": "The name of your Plesk license",
              "fullType": "string",
              "dataType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "responseType": "license.Task"
        }
      ]
    },
    {
      "description": "Your License options",
      "path": "/license/plesk/{serviceName}/option/{label}",
      "operations": [
        {
          "resellerOnly": false,
          "noAuthentication": false,
          "responseFullType": "license.Option",
          "parameters": [
            {
              "fullType": "string",
              "description": "The name of your Plesk license",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "dataType": "string"
            },
            {
              "required": true,
              "paramType": "path",
              "name": "label",
              "dataType": "license.OptionLabel",
              "description": "This option designation",
              "fullType": "license.OptionLabel"
            }
          ],
          "description": "Get this object properties",
          "responseType": "license.Option",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET"
        },
        {
          "description": "release this Option",
          "resellerOnly": false,
          "responseFullType": "license.Task",
          "parameters": [
            {
              "fullType": "string",
              "description": "The name of your Plesk license",
              "paramType": "path",
              "dataType": "string",
              "name": "serviceName",
              "required": true
            },
            {
              "required": true,
              "paramType": "path",
              "name": "label",
              "dataType": "license.OptionLabel",
              "description": "This option designation",
              "fullType": "license.OptionLabel"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "DELETE",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "license.Task"
        }
      ]
    },
    {
      "operations": [
        {
          "description": "options attached to this license",
          "responseFullType": "license.OptionLabel[]",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "dataType": "string",
              "fullType": "string",
              "description": "The name of your Plesk license"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "responseType": "license.OptionLabel[]"
        }
      ],
      "path": "/license/plesk/{serviceName}/option",
      "description": "List the license.Option objects"
    },
    {
      "description": "Confirm termination of your service",
      "path": "/license/plesk/{serviceName}/confirmTermination",
      "operations": [
        {
          "responseType": "string",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "resellerOnly": false,
          "noAuthentication": false,
          "responseFullType": "string",
          "parameters": [
            {
              "fullType": "service.TerminationFutureUseEnum",
              "description": "What next after your termination request",
              "paramType": "body",
              "dataType": "service.TerminationFutureUseEnum",
              "name": "futureUse",
              "required": false
            },
            {
              "fullType": "service.TerminationReasonEnum",
              "description": "Reason of your termination request",
              "required": false,
              "paramType": "body",
              "name": "reason",
              "dataType": "service.TerminationReasonEnum"
            },
            {
              "required": false,
              "name": "commentary",
              "dataType": "string",
              "paramType": "body",
              "description": "Commentary about your termination request",
              "fullType": "string"
            },
            {
              "paramType": "body",
              "dataType": "string",
              "name": "token",
              "required": true,
              "description": "The termination token sent by mail to the admin contact",
              "fullType": "string"
            },
            {
              "dataType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "description": "The name of your Plesk license",
              "fullType": "string"
            }
          ],
          "description": "Confirm termination of your service"
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "license.ChangeIpStatus",
          "parameters": [
            {
              "description": "The Ip on which you want to move this license",
              "fullType": "ipv4",
              "dataType": "ipv4",
              "name": "destinationIp",
              "paramType": "query",
              "required": true
            },
            {
              "description": "The name of your Plesk license",
              "fullType": "string",
              "dataType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "description": "Will tell if the ip can accept the license",
          "responseType": "license.ChangeIpStatus",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET"
        }
      ],
      "path": "/license/plesk/{serviceName}/canLicenseBeMovedTo",
      "description": "canLicenseBeMovedTo operations"
    },
    {
      "operations": [
        {
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "responseFullType": "string[]",
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "description": "List available services"
        }
      ],
      "path": "/license/plesk",
      "description": "Operations about the LICENSE service"
    },
    {
      "operations": [
        {
          "responseType": "license.PleskOrderConfiguration[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "paramType": "query",
              "dataType": "ipv4",
              "name": "ip",
              "required": true,
              "fullType": "ipv4",
              "description": "Your license Ip"
            }
          ],
          "responseFullType": "license.PleskOrderConfiguration[]",
          "noAuthentication": false,
          "resellerOnly": false,
          "description": "Get the orderable Plesk versions and their associated compatibilities"
        }
      ],
      "path": "/license/plesk/orderableVersions",
      "description": "Get the orderable Plesk versions and their associated compatibilities"
    }
  ],
  "resourcePath": "/license/plesk",
  "apiVersion": "1.0",
  "models": {
    "license.plesk.Plesk": {
      "properties": {
        "productKey": {
          "readOnly": true,
          "canBeNull": true,
          "type": "string",
          "description": "This license product key",
          "fullType": "string"
        },
        "status": {
          "description": "This license state",
          "fullType": "license.StateEnum",
          "type": "license.StateEnum",
          "canBeNull": false,
          "readOnly": true
        },
        "domain": {
          "fullType": "string",
          "description": "The internal name of your license",
          "canBeNull": false,
          "type": "string",
          "readOnly": true
        },
        "licenseId": {
          "readOnly": true,
          "type": "string",
          "canBeNull": false,
          "fullType": "string",
          "description": "The license id on license provider side"
        },
        "domainNumber": {
          "fullType": "license.DomainNumberEnum",
          "description": "The amount of domain this license can manage",
          "type": "license.DomainNumberEnum",
          "canBeNull": true,
          "readOnly": true
        },
        "version": {
          "fullType": "license.PleskVersionEnum",
          "description": "This license version",
          "readOnly": true,
          "type": "license.PleskVersionEnum",
          "canBeNull": false
        },
        "informationKey": {
          "fullType": "string",
          "description": "This license Information key",
          "type": "string",
          "canBeNull": true,
          "readOnly": true
        },
        "ip": {
          "fullType": "ipv4",
          "description": "The ip on which this license is attached",
          "readOnly": true,
          "type": "ipv4",
          "canBeNull": false
        },
        "creation": {
          "fullType": "datetime",
          "description": "This license creation date",
          "canBeNull": false,
          "type": "datetime",
          "readOnly": true
        },
        "key": {
          "description": "This license key",
          "fullType": "string",
          "type": "string",
          "canBeNull": false,
          "readOnly": true
        },
        "deleteAtExpiration": {
          "description": "Shall we delete this on expiration ?",
          "fullType": "boolean",
          "readOnly": false,
          "type": "boolean",
          "canBeNull": false
        }
      },
      "description": "Your Plesk license",
      "namespace": "license.plesk",
      "id": "Plesk"
    },
    "license.ActionType": {
      "enumType": "string",
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
      ]
    },
    "license.PleskOrderConfiguration": {
      "description": "The serviceTypes allowed to Order a plesk version and associated Versions",
      "properties": {
        "serviceType": {
          "canBeNull": false,
          "type": "license.LicenseTypeEnum",
          "description": null
        },
        "orderableVersions": {
          "canBeNull": false,
          "type": "license.OrderablePleskCompatibilityInfos[]",
          "description": null
        }
      },
      "id": "PleskOrderConfiguration",
      "namespace": "license"
    },
    "license.Task": {
      "id": "Task",
      "namespace": "license",
      "properties": {
        "name": {
          "readOnly": true,
          "type": "string",
          "canBeNull": false,
          "description": "This Task name",
          "fullType": "string"
        },
        "action": {
          "fullType": "license.ActionType",
          "description": "This Task description",
          "canBeNull": false,
          "type": "license.ActionType",
          "readOnly": true
        },
        "lastUpdate": {
          "readOnly": true,
          "type": "datetime",
          "canBeNull": false,
          "description": "The last time this Task was updated",
          "fullType": "datetime"
        },
        "todoDate": {
          "fullType": "datetime",
          "description": "When was this Task created",
          "canBeNull": false,
          "type": "datetime",
          "readOnly": true
        },
        "taskId": {
          "readOnly": true,
          "canBeNull": false,
          "type": "long",
          "description": "This Task id",
          "fullType": "long"
        },
        "status": {
          "readOnly": true,
          "type": "license.TaskStateEnum",
          "canBeNull": false,
          "description": "Current Taks status",
          "fullType": "license.TaskStateEnum"
        },
        "doneDate": {
          "description": "When was this Task done",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime",
          "canBeNull": true
        }
      },
      "description": "licenses Todos"
    },
    "license.OrderablePleskCompatibilityInfos": {
      "description": "All versions available for Plesk products",
      "properties": {
        "canHaveWordpressToolkit": {
          "canBeNull": false,
          "type": "boolean",
          "description": null
        },
        "compliantLanguagePack": {
          "description": null,
          "canBeNull": false,
          "type": "license.OrderablePleskLanguagePackEnum[]"
        },
        "potentialProblems": {
          "canBeNull": false,
          "type": "license.PotentialProblemPleskEnum[]",
          "description": null
        },
        "compliantApplicationSets": {
          "type": "license.PleskApplicationSetEnum[]",
          "canBeNull": false,
          "description": null
        },
        "version": {
          "description": null,
          "canBeNull": false,
          "type": "license.PleskVersionEnum"
        },
        "compliantDomains": {
          "description": null,
          "canBeNull": false,
          "type": "license.OrderablePleskDomainNumberEnum[]"
        },
        "canHavePowerPack": {
          "type": "boolean",
          "canBeNull": false,
          "description": null
        },
        "canHaveResellerManagement": {
          "description": null,
          "canBeNull": false,
          "type": "boolean"
        },
        "compliantAntivirus": {
          "description": null,
          "canBeNull": false,
          "type": "license.OrderableAntivirusEnum[]"
        }
      },
      "id": "OrderablePleskCompatibilityInfos",
      "namespace": "license"
    },
    "service.RenewalTypeEnum": {
      "enumType": "string",
      "id": "RenewalTypeEnum",
      "namespace": "service",
      "enum": [
        "automaticForcedProduct",
        "automaticV2012",
        "automaticV2014",
        "automaticV2016",
        "manual",
        "oneShot",
        "option"
      ],
      "description": "Detailed renewal type of a service"
    },
    "license.StateEnum": {
      "enumType": "string",
      "namespace": "license",
      "id": "StateEnum",
      "description": "All states a license can be in",
      "enum": [
        "ok",
        "released",
        "terminated",
        "toDeliver"
      ]
    },
    "license.Option": {
      "id": "Option",
      "namespace": "license",
      "description": "Your License options",
      "properties": {
        "canBeDeleted": {
          "canBeNull": false,
          "type": "boolean",
          "readOnly": true,
          "description": "Specifies whether this option can be released or not",
          "fullType": "boolean"
        },
        "label": {
          "canBeNull": false,
          "type": "license.OptionLabel",
          "readOnly": true,
          "description": "This option designation",
          "fullType": "license.OptionLabel"
        },
        "expirationDate": {
          "fullType": "datetime",
          "description": "This option expiration date",
          "readOnly": true,
          "type": "datetime",
          "canBeNull": false
        },
        "amount": {
          "description": "Quantity or corresponding label of the designated option enabled on your license",
          "fullType": "string",
          "type": "string",
          "canBeNull": true,
          "readOnly": true
        },
        "version": {
          "description": "This option related version",
          "fullType": "string",
          "canBeNull": true,
          "type": "string",
          "readOnly": true
        }
      }
    },
    "service.StateEnum": {
      "id": "StateEnum",
      "namespace": "service",
      "enumType": "string",
      "enum": [
        "expired",
        "inCreation",
        "ok",
        "pendingDebt",
        "unPaid"
      ],
      "description": ""
    },
    "license.ChangeIpStatus": {
      "namespace": "license",
      "id": "ChangeIpStatus",
      "properties": {
        "success": {
          "type": "boolean",
          "canBeNull": false,
          "description": null
        },
        "message": {
          "type": "license.ChangeIpMessageEnum",
          "canBeNull": false,
          "description": null
        }
      },
      "description": "License change ip status return"
    },
    "license.LicenseTypeEnum": {
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
      "description": "Possible values for license type",
      "enumType": "string",
      "id": "LicenseTypeEnum",
      "namespace": "license"
    },
    "service.TerminationReasonEnum": {
      "enumType": "string",
      "id": "TerminationReasonEnum",
      "namespace": "service",
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
      "description": "All reasons you can provide for a service termination"
    },
    "license.PleskApplicationSetEnum": {
      "enum": [
        "applicationpack",
        "developerpack",
        "power-pack-for-plesk12",
        "powerpack"
      ],
      "description": "Application set available for Plesk products",
      "id": "PleskApplicationSetEnum",
      "namespace": "license",
      "enumType": "string"
    },
    "license.OptionLabel": {
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
      "description": "The name of an option currently enabled on your license",
      "enumType": "string",
      "id": "OptionLabel",
      "namespace": "license"
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
      "namespace": "license",
      "id": "TaskStateEnum"
    },
    "license.OrderablePleskDomainNumberEnum": {
      "enum": [
        "10",
        "100",
        "30",
        "300",
        "hostingsuite",
        "unlimited"
      ],
      "description": "All domain available for Plesk products",
      "id": "OrderablePleskDomainNumberEnum",
      "namespace": "license",
      "enumType": "string"
    },
    "license.OrderablePleskLanguagePackEnum": {
      "enumType": "string",
      "namespace": "license",
      "id": "OrderablePleskLanguagePackEnum",
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
      ]
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
    "license.PleskVersionEnum": {
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
      "enumType": "string",
      "id": "PleskVersionEnum",
      "namespace": "license"
    },
    "license.DomainNumberEnum": {
      "namespace": "license",
      "id": "DomainNumberEnum",
      "enumType": "string",
      "description": "All quantities of domain available for a license",
      "enum": [
        "0",
        "1",
        "10",
        "100",
        "30",
        "300",
        "unlimited"
      ]
    },
    "license.ChangeIpMessageEnum": {
      "enumType": "string",
      "namespace": "license",
      "id": "ChangeIpMessageEnum",
      "description": "Messages from change IP",
      "enum": [
        "OK",
        "destinationNotAllowed",
        "licenseAlreadyExists",
        "notAllowedToHandleThis",
        "notSameType",
        "sameIp",
        "versionNotAllowed"
      ]
    },
    "service.RenewType": {
      "namespace": "service",
      "id": "RenewType",
      "properties": {
        "period": {
          "canBeNull": true,
          "type": "long",
          "description": "period of renew in month"
        },
        "manualPayment": {
          "canBeNull": true,
          "type": "boolean",
          "description": "The service needs to be manually renewed and paid"
        },
        "deleteAtExpiration": {
          "description": "The service will be deleted at expiration",
          "canBeNull": false,
          "type": "boolean"
        },
        "forced": {
          "description": "The service forced to be renewed",
          "type": "boolean",
          "canBeNull": false
        },
        "automatic": {
          "description": "The service is automatically renewed",
          "canBeNull": false,
          "type": "boolean"
        }
      },
      "description": "Map a possible renew for a specific service"
    },
    "license.OrderableAntivirusEnum": {
      "id": "OrderableAntivirusEnum",
      "namespace": "license",
      "enumType": "string",
      "enum": [
        "DR_WEB",
        "KASPERSKY_UNLIMITED_MAILBOXES",
        "kaspersky"
      ],
      "description": "All antivirus available for Plesk products"
    },
    "license.PotentialProblemPleskEnum": {
      "enumType": "string",
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
      ]
    },
    "services.Service": {
      "description": "Details about a Service",
      "properties": {
        "domain": {
          "description": null,
          "fullType": "string",
          "canBeNull": false,
          "type": "string",
          "readOnly": true
        },
        "contactAdmin": {
          "fullType": "coreTypes.AccountId:string",
          "description": null,
          "readOnly": true,
          "type": "string",
          "canBeNull": false
        },
        "possibleRenewPeriod": {
          "readOnly": true,
          "canBeNull": true,
          "type": "long[]",
          "fullType": "long[]",
          "description": "All the possible renew period of your service in month"
        },
        "renew": {
          "canBeNull": true,
          "type": "service.RenewType",
          "readOnly": false,
          "description": "Way of handling the renew",
          "fullType": "service.RenewType"
        },
        "engagedUpTo": {
          "canBeNull": true,
          "type": "date",
          "readOnly": true,
          "description": null,
          "fullType": "date"
        },
        "status": {
          "fullType": "service.StateEnum",
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "type": "service.StateEnum"
        },
        "expiration": {
          "type": "date",
          "canBeNull": false,
          "readOnly": true,
          "description": null,
          "fullType": "date"
        },
        "creation": {
          "readOnly": true,
          "type": "date",
          "canBeNull": false,
          "fullType": "date",
          "description": null
        },
        "serviceId": {
          "readOnly": true,
          "type": "long",
          "canBeNull": false,
          "fullType": "coreTypes.ServiceId:long",
          "description": null
        },
        "contactTech": {
          "description": null,
          "fullType": "coreTypes.AccountId:string",
          "type": "string",
          "canBeNull": false,
          "readOnly": true
        },
        "canDeleteAtExpiration": {
          "readOnly": true,
          "canBeNull": false,
          "type": "boolean",
          "fullType": "boolean",
          "description": "Indicates that the service can be set up to be deleted at expiration"
        },
        "renewalType": {
          "fullType": "service.RenewalTypeEnum",
          "description": null,
          "readOnly": true,
          "type": "service.RenewalTypeEnum",
          "canBeNull": false
        },
        "contactBilling": {
          "readOnly": true,
          "canBeNull": false,
          "type": "string",
          "fullType": "coreTypes.AccountId:string",
          "description": null
        }
      },
      "namespace": "services",
      "id": "Service"
    }
  },
  "basePath": "https://ca.api.soyoustart.com/1.0"
}