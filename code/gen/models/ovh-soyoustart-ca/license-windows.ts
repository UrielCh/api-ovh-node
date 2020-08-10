import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1.0",
  "models": {
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
    "license.OrderableWindowsCompatibilityInfos": {
      "description": "All SQL options available for Windows products",
      "properties": {
        "version": {
          "description": null,
          "type": "license.WindowsOsVersionEnum",
          "canBeNull": false
        },
        "compliantSql": {
          "canBeNull": false,
          "type": "license.WindowsSqlVersionEnum[]",
          "description": null
        }
      },
      "id": "OrderableWindowsCompatibilityInfos",
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
    "license.Task": {
      "id": "Task",
      "namespace": "license",
      "properties": {
        "name": {
          "type": "string",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "description": "This Task name"
        },
        "action": {
          "description": "This Task description",
          "fullType": "license.ActionType",
          "readOnly": true,
          "canBeNull": false,
          "type": "license.ActionType"
        },
        "lastUpdate": {
          "fullType": "datetime",
          "description": "The last time this Task was updated",
          "canBeNull": false,
          "type": "datetime",
          "readOnly": true
        },
        "todoDate": {
          "readOnly": true,
          "type": "datetime",
          "canBeNull": false,
          "description": "When was this Task created",
          "fullType": "datetime"
        },
        "taskId": {
          "readOnly": true,
          "type": "long",
          "canBeNull": false,
          "description": "This Task id",
          "fullType": "long"
        },
        "status": {
          "description": "Current Taks status",
          "fullType": "license.TaskStateEnum",
          "readOnly": true,
          "type": "license.TaskStateEnum",
          "canBeNull": false
        },
        "doneDate": {
          "type": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "fullType": "datetime",
          "description": "When was this Task done"
        }
      },
      "description": "licenses Todos"
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
    "license.WindowsOsVersionEnum": {
      "description": "All versions for Windows products",
      "enum": [
        "WINDOWS_SERVER_2003_ENTERPRISE_EDITION",
        "WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU",
        "WINDOWS_SERVER_2003_STANDARD_EDITION",
        "WINDOWS_SERVER_2003_WEB_EDITION",
        "WINDOWS_SERVER_2003_WEB_EDITION_2_CPU",
        "WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION",
        "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION",
        "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU",
        "WINDOWS_SERVER_2008_DATACENTER_EDITION",
        "WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU",
        "WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU",
        "WINDOWS_SERVER_2008_ENTERPRISE_EDITION",
        "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU",
        "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU",
        "WINDOWS_SERVER_2008_STANDARD_EDITION",
        "WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU",
        "WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU",
        "WINDOWS_SERVER_2008_WEB_EDITION",
        "WINDOWS_SERVER_2008_WEB_EDITION_2_CPU",
        "WINDOWS_SERVER_2008_WEB_EDITION_4_CPU",
        "WINDOWS_SERVER_2008_WEB_STANDARD_EDITION",
        "WINDOWS_SERVER_2012_DATACENTER_EDITION",
        "WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU",
        "WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU",
        "WINDOWS_SERVER_2012_ENTERPRISE_EDITION",
        "WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU",
        "WINDOWS_SERVER_2012_STANDARD_EDITION",
        "WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU",
        "WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU",
        "WINDOWS_SERVER_2012_WEB_EDITION",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES",
        "windows-server-2008-license-datacenter-edition-1-cpu",
        "windows-server-2008-license-datacenter-edition-2-cpu",
        "windows-server-2008-license-datacenter-edition-4-cpu",
        "windows-server-2008-license-enterprise-edition-1-cpu",
        "windows-server-2008-license-enterprise-edition-2-cpu",
        "windows-server-2008-license-enterprise-edition-4-cpu",
        "windows-server-2008-license-standard-edition-1-cpu",
        "windows-server-2008-license-standard-edition-2-cpu",
        "windows-server-2008-license-standard-edition-4-cpu",
        "windows-server-2008-license-web-edition-1-cpu",
        "windows-server-2008-license-web-edition-2-cpu",
        "windows-server-2008-license-web-edition-4-cpu",
        "windows-server-2012-license-datacenter-edition-1-cpu",
        "windows-server-2012-license-datacenter-edition-2-cpu",
        "windows-server-2012-license-datacenter-edition-4-cpu",
        "windows-server-2012-license-standard-edition-1-cpu",
        "windows-server-2012-license-standard-edition-2-cpu",
        "windows-server-2012-license-standard-edition-4-cpu",
        "windows-server-2016-license-datacenter-edition-1-cpu-10-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-12-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-14-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-16-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-18-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-20-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-22-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-24-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-8-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-10-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-12-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-14-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-16-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-18-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-20-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-22-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-24-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-8-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-10-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-12-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-14-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-16-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-18-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-20-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-22-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-24-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-8-cores",
        "windows-server-2016-license-standard-edition-1-cpu-10-cores",
        "windows-server-2016-license-standard-edition-1-cpu-12-cores",
        "windows-server-2016-license-standard-edition-1-cpu-14-cores",
        "windows-server-2016-license-standard-edition-1-cpu-16-cores",
        "windows-server-2016-license-standard-edition-1-cpu-18-cores",
        "windows-server-2016-license-standard-edition-1-cpu-20-cores",
        "windows-server-2016-license-standard-edition-1-cpu-22-cores",
        "windows-server-2016-license-standard-edition-1-cpu-24-cores",
        "windows-server-2016-license-standard-edition-1-cpu-8-cores",
        "windows-server-2016-license-standard-edition-2-cpu-10-cores",
        "windows-server-2016-license-standard-edition-2-cpu-12-cores",
        "windows-server-2016-license-standard-edition-2-cpu-14-cores",
        "windows-server-2016-license-standard-edition-2-cpu-16-cores",
        "windows-server-2016-license-standard-edition-2-cpu-18-cores",
        "windows-server-2016-license-standard-edition-2-cpu-20-cores",
        "windows-server-2016-license-standard-edition-2-cpu-22-cores",
        "windows-server-2016-license-standard-edition-2-cpu-24-cores",
        "windows-server-2016-license-standard-edition-2-cpu-8-cores",
        "windows-server-2016-license-standard-edition-4-cpu-10-cores",
        "windows-server-2016-license-standard-edition-4-cpu-12-cores",
        "windows-server-2016-license-standard-edition-4-cpu-14-cores",
        "windows-server-2016-license-standard-edition-4-cpu-16-cores",
        "windows-server-2016-license-standard-edition-4-cpu-18-cores",
        "windows-server-2016-license-standard-edition-4-cpu-20-cores",
        "windows-server-2016-license-standard-edition-4-cpu-22-cores",
        "windows-server-2016-license-standard-edition-4-cpu-24-cores",
        "windows-server-2016-license-standard-edition-4-cpu-8-cores",
        "windows-server-2019-license-datacenter-edition-10-cores",
        "windows-server-2019-license-datacenter-edition-12-cores",
        "windows-server-2019-license-datacenter-edition-14-cores",
        "windows-server-2019-license-datacenter-edition-16-cores",
        "windows-server-2019-license-datacenter-edition-18-cores",
        "windows-server-2019-license-datacenter-edition-20-cores",
        "windows-server-2019-license-datacenter-edition-22-cores",
        "windows-server-2019-license-datacenter-edition-24-cores",
        "windows-server-2019-license-datacenter-edition-26-cores",
        "windows-server-2019-license-datacenter-edition-28-cores",
        "windows-server-2019-license-datacenter-edition-30-cores",
        "windows-server-2019-license-datacenter-edition-32-cores",
        "windows-server-2019-license-datacenter-edition-34-cores",
        "windows-server-2019-license-datacenter-edition-36-cores",
        "windows-server-2019-license-datacenter-edition-38-cores",
        "windows-server-2019-license-datacenter-edition-40-cores",
        "windows-server-2019-license-datacenter-edition-42-cores",
        "windows-server-2019-license-datacenter-edition-44-cores",
        "windows-server-2019-license-datacenter-edition-46-cores",
        "windows-server-2019-license-datacenter-edition-48-cores",
        "windows-server-2019-license-datacenter-edition-50-cores",
        "windows-server-2019-license-datacenter-edition-52-cores",
        "windows-server-2019-license-datacenter-edition-54-cores",
        "windows-server-2019-license-datacenter-edition-56-cores",
        "windows-server-2019-license-datacenter-edition-58-cores",
        "windows-server-2019-license-datacenter-edition-60-cores",
        "windows-server-2019-license-datacenter-edition-62-cores",
        "windows-server-2019-license-datacenter-edition-64-cores",
        "windows-server-2019-license-datacenter-edition-8-cores",
        "windows-server-2019-license-standard-edition-10-cores",
        "windows-server-2019-license-standard-edition-12-cores",
        "windows-server-2019-license-standard-edition-14-cores",
        "windows-server-2019-license-standard-edition-16-cores",
        "windows-server-2019-license-standard-edition-18-cores",
        "windows-server-2019-license-standard-edition-20-cores",
        "windows-server-2019-license-standard-edition-22-cores",
        "windows-server-2019-license-standard-edition-24-cores",
        "windows-server-2019-license-standard-edition-26-cores",
        "windows-server-2019-license-standard-edition-28-cores",
        "windows-server-2019-license-standard-edition-30-cores",
        "windows-server-2019-license-standard-edition-32-cores",
        "windows-server-2019-license-standard-edition-34-cores",
        "windows-server-2019-license-standard-edition-36-cores",
        "windows-server-2019-license-standard-edition-38-cores",
        "windows-server-2019-license-standard-edition-40-cores",
        "windows-server-2019-license-standard-edition-42-cores",
        "windows-server-2019-license-standard-edition-44-cores",
        "windows-server-2019-license-standard-edition-46-cores",
        "windows-server-2019-license-standard-edition-48-cores",
        "windows-server-2019-license-standard-edition-50-cores",
        "windows-server-2019-license-standard-edition-52-cores",
        "windows-server-2019-license-standard-edition-54-cores",
        "windows-server-2019-license-standard-edition-56-cores",
        "windows-server-2019-license-standard-edition-58-cores",
        "windows-server-2019-license-standard-edition-60-cores",
        "windows-server-2019-license-standard-edition-62-cores",
        "windows-server-2019-license-standard-edition-64-cores",
        "windows-server-2019-license-standard-edition-8-cores"
      ],
      "namespace": "license",
      "id": "WindowsOsVersionEnum",
      "enumType": "string"
    },
    "license.Option": {
      "id": "Option",
      "namespace": "license",
      "description": "Your License options",
      "properties": {
        "canBeDeleted": {
          "readOnly": true,
          "canBeNull": false,
          "type": "boolean",
          "description": "Specifies whether this option can be released or not",
          "fullType": "boolean"
        },
        "label": {
          "readOnly": true,
          "type": "license.OptionLabel",
          "canBeNull": false,
          "description": "This option designation",
          "fullType": "license.OptionLabel"
        },
        "expirationDate": {
          "fullType": "datetime",
          "description": "This option expiration date",
          "type": "datetime",
          "canBeNull": false,
          "readOnly": true
        },
        "amount": {
          "description": "Quantity or corresponding label of the designated option enabled on your license",
          "fullType": "string",
          "readOnly": true,
          "canBeNull": true,
          "type": "string"
        },
        "version": {
          "type": "string",
          "canBeNull": true,
          "readOnly": true,
          "fullType": "string",
          "description": "This option related version"
        }
      }
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
    "service.RenewType": {
      "namespace": "service",
      "id": "RenewType",
      "properties": {
        "period": {
          "description": "period of renew in month",
          "type": "long",
          "canBeNull": true
        },
        "manualPayment": {
          "description": "The service needs to be manually renewed and paid",
          "canBeNull": true,
          "type": "boolean"
        },
        "deleteAtExpiration": {
          "description": "The service will be deleted at expiration",
          "type": "boolean",
          "canBeNull": false
        },
        "forced": {
          "canBeNull": false,
          "type": "boolean",
          "description": "The service forced to be renewed"
        },
        "automatic": {
          "description": "The service is automatically renewed",
          "type": "boolean",
          "canBeNull": false
        }
      },
      "description": "Map a possible renew for a specific service"
    },
    "license.WindowsSqlVersionEnum": {
      "enumType": "string",
      "namespace": "license",
      "id": "WindowsSqlVersionEnum",
      "description": "All SQL Server versions for Windows products",
      "enum": [
        "SQL_SERVER_2008_STANDARD_EDITION",
        "SQL_SERVER_2008_STANDARD_EDITION_2_CPU",
        "SQL_SERVER_2008_WEB_EDITION",
        "SQL_SERVER_2008_WEB_EDITION_2_CPU",
        "SQL_SERVER_2012_STANDARD_EDITION",
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
        "SQL_SERVER_2012_WEB_EDITION_12_CORES",
        "SQL_SERVER_2012_WEB_EDITION_16_CORES",
        "SQL_SERVER_2012_WEB_EDITION_18_CORES",
        "SQL_SERVER_2012_WEB_EDITION_20_CORES",
        "SQL_SERVER_2012_WEB_EDITION_24_CORES",
        "SQL_SERVER_2012_WEB_EDITION_32_CORES",
        "SQL_SERVER_2012_WEB_EDITION_4_CORES",
        "SQL_SERVER_2012_WEB_EDITION_6_CORES",
        "SQL_SERVER_2012_WEB_EDITION_8_CORES"
      ]
    },
    "services.Service": {
      "description": "Details about a Service",
      "properties": {
        "domain": {
          "readOnly": true,
          "canBeNull": false,
          "type": "string",
          "description": null,
          "fullType": "string"
        },
        "contactAdmin": {
          "description": null,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "canBeNull": false,
          "type": "string"
        },
        "possibleRenewPeriod": {
          "fullType": "long[]",
          "description": "All the possible renew period of your service in month",
          "canBeNull": true,
          "type": "long[]",
          "readOnly": true
        },
        "renew": {
          "description": "Way of handling the renew",
          "fullType": "service.RenewType",
          "readOnly": false,
          "canBeNull": true,
          "type": "service.RenewType"
        },
        "engagedUpTo": {
          "type": "date",
          "canBeNull": true,
          "readOnly": true,
          "description": null,
          "fullType": "date"
        },
        "status": {
          "description": null,
          "fullType": "service.StateEnum",
          "canBeNull": false,
          "type": "service.StateEnum",
          "readOnly": true
        },
        "expiration": {
          "type": "date",
          "canBeNull": false,
          "readOnly": true,
          "description": null,
          "fullType": "date"
        },
        "creation": {
          "description": null,
          "fullType": "date",
          "type": "date",
          "canBeNull": false,
          "readOnly": true
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
          "canBeNull": false,
          "type": "service.RenewalTypeEnum",
          "readOnly": true,
          "description": null,
          "fullType": "service.RenewalTypeEnum"
        },
        "contactBilling": {
          "type": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": null,
          "fullType": "coreTypes.AccountId:string"
        }
      },
      "namespace": "services",
      "id": "Service"
    },
    "license.WindowsOrderConfiguration": {
      "description": "Allowed windows versions and their compliant options per matching serviceTypes",
      "properties": {
        "serviceType": {
          "description": null,
          "canBeNull": false,
          "type": "license.LicenseTypeEnum"
        },
        "orderableVersions": {
          "description": null,
          "type": "license.OrderableWindowsCompatibilityInfos[]",
          "canBeNull": false
        }
      },
      "namespace": "license",
      "id": "WindowsOrderConfiguration"
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
    "license.windows.Windows": {
      "description": "Your Windows license",
      "properties": {
        "status": {
          "readOnly": true,
          "type": "license.StateEnum",
          "canBeNull": false,
          "description": "This license state",
          "fullType": "license.StateEnum"
        },
        "version": {
          "readOnly": true,
          "canBeNull": false,
          "type": "license.WindowsOsVersionEnum",
          "description": "This license version",
          "fullType": "license.WindowsOsVersionEnum"
        },
        "licenseId": {
          "fullType": "string",
          "description": "The license id on license provider side",
          "canBeNull": false,
          "type": "string",
          "readOnly": true
        },
        "deleteAtExpiration": {
          "fullType": "boolean",
          "description": "Shall we delete this on expiration ?",
          "type": "boolean",
          "canBeNull": false,
          "readOnly": false
        },
        "creation": {
          "readOnly": true,
          "type": "datetime",
          "canBeNull": false,
          "description": "This license creation date",
          "fullType": "datetime"
        },
        "ip": {
          "readOnly": true,
          "type": "ipv4",
          "canBeNull": false,
          "description": "The ip on which this license is attached",
          "fullType": "ipv4"
        },
        "domain": {
          "readOnly": true,
          "canBeNull": false,
          "type": "string",
          "description": "The internal name of your license",
          "fullType": "string"
        }
      },
      "namespace": "license.windows",
      "id": "Windows"
    }
  },
  "basePath": "https://ca.api.soyoustart.com/1.0",
  "apis": [
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "responseType": "license.Task",
          "description": "Link your own sql server license to this Windows license",
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "dataType": "string",
              "name": "licenseId",
              "description": "Your license serial number",
              "fullType": "string"
            },
            {
              "fullType": "license.WindowsSqlVersionEnum",
              "description": "Your license version",
              "required": true,
              "paramType": "body",
              "dataType": "license.WindowsSqlVersionEnum",
              "name": "version"
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "name": "serviceName",
              "description": "The name of your Windows license",
              "fullType": "string"
            }
          ],
          "responseFullType": "license.Task",
          "noAuthentication": false,
          "resellerOnly": false
        }
      ],
      "path": "/license/windows/{serviceName}/sqlServer",
      "description": "sqlServer operations"
    },
    {
      "description": "Your Windows license",
      "path": "/license/windows/{serviceName}",
      "operations": [
        {
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "license.windows.Windows",
          "description": "Get this object properties",
          "resellerOnly": false,
          "parameters": [
            {
              "description": "The name of your Windows license",
              "fullType": "string",
              "paramType": "path",
              "name": "serviceName",
              "dataType": "string",
              "required": true
            }
          ],
          "responseFullType": "license.windows.Windows",
          "noAuthentication": false
        },
        {
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "noAuthentication": false,
          "responseFullType": "void",
          "parameters": [
            {
              "paramType": "body",
              "name": null,
              "dataType": "license.windows.Windows",
              "required": true,
              "fullType": "license.windows.Windows",
              "description": "New object properties"
            },
            {
              "description": "The name of your Windows license",
              "fullType": "string",
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "description": "Alter this object properties"
        }
      ]
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "responseFullType": "long[]",
          "parameters": [
            {
              "description": "Filter the value of action property (=)",
              "fullType": "license.ActionType",
              "paramType": "query",
              "name": "action",
              "dataType": "license.ActionType",
              "required": false
            },
            {
              "required": false,
              "dataType": "license.TaskStateEnum",
              "name": "status",
              "paramType": "query",
              "description": "Filter the value of status property (=)",
              "fullType": "license.TaskStateEnum"
            },
            {
              "description": "The name of your Windows license",
              "fullType": "string",
              "paramType": "path",
              "name": "serviceName",
              "dataType": "string",
              "required": true
            }
          ],
          "resellerOnly": false,
          "description": "tasks linked to this license",
          "responseType": "long[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET"
        }
      ],
      "path": "/license/windows/{serviceName}/tasks",
      "description": "List the license.Task objects"
    },
    {
      "description": "licenses Todos",
      "path": "/license/windows/{serviceName}/tasks/{taskId}",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "license.Task",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The name of your Windows license",
              "fullType": "string",
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "required": true,
              "dataType": "long",
              "name": "taskId",
              "paramType": "path",
              "description": "This Task id",
              "fullType": "long"
            }
          ],
          "description": "Get this object properties",
          "responseType": "license.Task",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "parameters": [
            {
              "required": true,
              "dataType": "string",
              "name": "serviceName",
              "paramType": "path",
              "description": "The name of your Windows license",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "responseFullType": "string",
          "description": "Terminate your service",
          "responseType": "string",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST"
        }
      ],
      "path": "/license/windows/{serviceName}/terminate",
      "description": "Terminate your service"
    },
    {
      "operations": [
        {
          "responseType": "services.Service",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "resellerOnly": false,
          "parameters": [
            {
              "required": true,
              "dataType": "string",
              "name": "serviceName",
              "paramType": "path",
              "description": "The name of your Windows license",
              "fullType": "string"
            }
          ],
          "responseFullType": "services.Service",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "responseType": "void",
          "httpMethod": "PUT",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "fullType": "services.Service",
              "description": "New object properties",
              "required": true,
              "paramType": "body",
              "dataType": "services.Service",
              "name": null
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "fullType": "string",
              "description": "The name of your Windows license"
            }
          ],
          "responseFullType": "void",
          "noAuthentication": false,
          "resellerOnly": false,
          "description": "Alter this object properties"
        }
      ],
      "path": "/license/windows/{serviceName}/serviceInfos",
      "description": "Details about a Service"
    },
    {
      "operations": [
        {
          "description": "options attached to this license",
          "resellerOnly": false,
          "responseFullType": "license.OptionLabel[]",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "name": "serviceName",
              "description": "The name of your Windows license",
              "fullType": "string"
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "license.OptionLabel[]"
        }
      ],
      "path": "/license/windows/{serviceName}/option",
      "description": "List the license.Option objects"
    },
    {
      "operations": [
        {
          "description": "Get this object properties",
          "resellerOnly": false,
          "responseFullType": "license.Option",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The name of your Windows license",
              "fullType": "string",
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "fullType": "license.OptionLabel",
              "description": "This option designation",
              "required": true,
              "dataType": "license.OptionLabel",
              "name": "label",
              "paramType": "path"
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "license.Option"
        },
        {
          "description": "release this Option",
          "resellerOnly": false,
          "responseFullType": "license.Task",
          "parameters": [
            {
              "description": "The name of your Windows license",
              "fullType": "string",
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "paramType": "path",
              "name": "label",
              "dataType": "license.OptionLabel",
              "required": true,
              "fullType": "license.OptionLabel",
              "description": "This option designation"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "responseType": "license.Task"
        }
      ],
      "path": "/license/windows/{serviceName}/option/{label}",
      "description": "Your License options"
    },
    {
      "operations": [
        {
          "responseType": "string",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "resellerOnly": false,
          "responseFullType": "string",
          "parameters": [
            {
              "description": "What next after your termination request",
              "fullType": "service.TerminationFutureUseEnum",
              "name": "futureUse",
              "dataType": "service.TerminationFutureUseEnum",
              "paramType": "body",
              "required": false
            },
            {
              "fullType": "service.TerminationReasonEnum",
              "description": "Reason of your termination request",
              "required": false,
              "paramType": "body",
              "dataType": "service.TerminationReasonEnum",
              "name": "reason"
            },
            {
              "paramType": "body",
              "name": "commentary",
              "dataType": "string",
              "required": false,
              "fullType": "string",
              "description": "Commentary about your termination request"
            },
            {
              "name": "token",
              "dataType": "string",
              "paramType": "body",
              "required": true,
              "fullType": "string",
              "description": "The termination token sent by mail to the admin contact"
            },
            {
              "fullType": "string",
              "description": "The name of your Windows license",
              "required": true,
              "dataType": "string",
              "name": "serviceName",
              "paramType": "path"
            }
          ],
          "noAuthentication": false,
          "description": "Confirm termination of your service"
        }
      ],
      "path": "/license/windows/{serviceName}/confirmTermination",
      "description": "Confirm termination of your service"
    },
    {
      "operations": [
        {
          "responseType": "license.WindowsOrderConfiguration[]",
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "parameters": [
            {
              "paramType": "query",
              "name": "ip",
              "dataType": "ipv4",
              "required": true,
              "fullType": "ipv4",
              "description": "Your license Ip"
            }
          ],
          "responseFullType": "license.WindowsOrderConfiguration[]",
          "noAuthentication": false,
          "description": "Get the orderable Windows versions"
        }
      ],
      "path": "/license/windows/orderableVersions",
      "description": "Get the orderable Windows versions"
    },
    {
      "description": "Operations about the LICENSE service",
      "path": "/license/windows",
      "operations": [
        {
          "resellerOnly": false,
          "parameters": [],
          "responseFullType": "string[]",
          "noAuthentication": false,
          "description": "List available services",
          "responseType": "string[]",
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    }
  ],
  "resourcePath": "/license/windows"
}