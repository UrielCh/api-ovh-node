import {Schema} from '../../src/schema';

export const schema: Schema = {
  "basePath": "https://ca.api.soyoustart.com/1.0",
  "models": {
    "service.RenewalTypeEnum": {
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
      "enumType": "string",
      "description": "Detailed renewal type of a service",
      "id": "RenewalTypeEnum"
    },
    "license.cpanel.Cpanel": {
      "namespace": "license.cpanel",
      "properties": {
        "status": {
          "type": "license.StateEnum",
          "canBeNull": false,
          "fullType": "license.StateEnum",
          "description": "This license state",
          "readOnly": true
        },
        "creation": {
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime",
          "description": "This license creation date",
          "readOnly": true
        },
        "deleteAtExpiration": {
          "fullType": "boolean",
          "canBeNull": false,
          "type": "boolean",
          "readOnly": false,
          "description": "Shall we delete this on expiration ?"
        },
        "ip": {
          "description": "The ip on which this license is attached",
          "readOnly": true,
          "fullType": "ipv4",
          "canBeNull": false,
          "type": "ipv4"
        },
        "domain": {
          "fullType": "string",
          "canBeNull": false,
          "type": "string",
          "description": "The internal name of your license",
          "readOnly": true
        },
        "licenseId": {
          "description": "The license id on license provider side",
          "readOnly": true,
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        },
        "version": {
          "description": "This license version",
          "readOnly": true,
          "type": "license.CpanelVersionEnum",
          "canBeNull": false,
          "fullType": "license.CpanelVersionEnum"
        }
      },
      "description": "Your Cpanel license",
      "id": "Cpanel"
    },
    "license.TaskStateEnum": {
      "enumType": "string",
      "id": "TaskStateEnum",
      "description": "All states a license Task can be in",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "namespace": "license"
    },
    "license.ChangeIpMessageEnum": {
      "description": "Messages from change IP",
      "id": "ChangeIpMessageEnum",
      "enumType": "string",
      "enum": [
        "OK",
        "destinationNotAllowed",
        "licenseAlreadyExists",
        "notAllowedToHandleThis",
        "notSameType",
        "sameIp",
        "versionNotAllowed"
      ],
      "namespace": "license"
    },
    "license.ActionType": {
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
      "description": "A short description of what does the Task on your license",
      "namespace": "license"
    },
    "license.ChangeIpStatus": {
      "id": "ChangeIpStatus",
      "description": "License change ip status return",
      "properties": {
        "message": {
          "description": null,
          "canBeNull": false,
          "type": "license.ChangeIpMessageEnum"
        },
        "success": {
          "type": "boolean",
          "canBeNull": false,
          "description": null
        }
      },
      "namespace": "license"
    },
    "license.OrderableCpanelCompatibilityInfos": {
      "properties": {
        "version": {
          "description": null,
          "canBeNull": false,
          "type": "license.OrderableCpanelVersionEnum"
        }
      },
      "description": "All versions available for Cpanel products",
      "id": "OrderableCpanelCompatibilityInfos",
      "namespace": "license"
    },
    "service.RenewType": {
      "id": "RenewType",
      "description": "Map a possible renew for a specific service",
      "properties": {
        "period": {
          "canBeNull": true,
          "type": "long",
          "description": "period of renew in month"
        },
        "automatic": {
          "description": "The service is automatically renewed",
          "canBeNull": false,
          "type": "boolean"
        },
        "forced": {
          "type": "boolean",
          "canBeNull": false,
          "description": "The service forced to be renewed"
        },
        "manualPayment": {
          "description": "The service needs to be manually renewed and paid",
          "type": "boolean",
          "canBeNull": true
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "type": "boolean",
          "description": "The service will be deleted at expiration"
        }
      },
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
      "description": "",
      "id": "StateEnum",
      "enumType": "string",
      "namespace": "service"
    },
    "license.OrderableCpanelVersionEnum": {
      "id": "OrderableCpanelVersionEnum",
      "description": "All versions available for Cpanel products",
      "enumType": "string",
      "enum": [
        "VERSION_11_FOR_LINUX",
        "VERSION_11_FOR_VIRTUOZZO",
        "VERSION_11_FOR_VPS",
        "cpanel-license-premier-cloud-1000-accounts",
        "cpanel-license-premier-cloud-10000-accounts",
        "cpanel-license-premier-cloud-1100-accounts",
        "cpanel-license-premier-cloud-1200-accounts",
        "cpanel-license-premier-cloud-1300-accounts",
        "cpanel-license-premier-cloud-1400-accounts",
        "cpanel-license-premier-cloud-1500-accounts",
        "cpanel-license-premier-cloud-1600-accounts",
        "cpanel-license-premier-cloud-1700-accounts",
        "cpanel-license-premier-cloud-1800-accounts",
        "cpanel-license-premier-cloud-1900-accounts",
        "cpanel-license-premier-cloud-2000-accounts",
        "cpanel-license-premier-cloud-2100-accounts",
        "cpanel-license-premier-cloud-2200-accounts",
        "cpanel-license-premier-cloud-2300-accounts",
        "cpanel-license-premier-cloud-2400-accounts",
        "cpanel-license-premier-cloud-2500-accounts",
        "cpanel-license-premier-cloud-2600-accounts",
        "cpanel-license-premier-cloud-2700-accounts",
        "cpanel-license-premier-cloud-2800-accounts",
        "cpanel-license-premier-cloud-2900-accounts",
        "cpanel-license-premier-cloud-300-accounts",
        "cpanel-license-premier-cloud-3000-accounts",
        "cpanel-license-premier-cloud-3100-accounts",
        "cpanel-license-premier-cloud-3200-accounts",
        "cpanel-license-premier-cloud-3300-accounts",
        "cpanel-license-premier-cloud-3400-accounts",
        "cpanel-license-premier-cloud-3500-accounts",
        "cpanel-license-premier-cloud-3600-accounts",
        "cpanel-license-premier-cloud-3700-accounts",
        "cpanel-license-premier-cloud-3800-accounts",
        "cpanel-license-premier-cloud-3900-accounts",
        "cpanel-license-premier-cloud-400-accounts",
        "cpanel-license-premier-cloud-4000-accounts",
        "cpanel-license-premier-cloud-4100-accounts",
        "cpanel-license-premier-cloud-4200-accounts",
        "cpanel-license-premier-cloud-4300-accounts",
        "cpanel-license-premier-cloud-4400-accounts",
        "cpanel-license-premier-cloud-4500-accounts",
        "cpanel-license-premier-cloud-4600-accounts",
        "cpanel-license-premier-cloud-4700-accounts",
        "cpanel-license-premier-cloud-4800-accounts",
        "cpanel-license-premier-cloud-4900-accounts",
        "cpanel-license-premier-cloud-500-accounts",
        "cpanel-license-premier-cloud-5000-accounts",
        "cpanel-license-premier-cloud-5100-accounts",
        "cpanel-license-premier-cloud-5200-accounts",
        "cpanel-license-premier-cloud-5300-accounts",
        "cpanel-license-premier-cloud-5400-accounts",
        "cpanel-license-premier-cloud-5500-accounts",
        "cpanel-license-premier-cloud-5600-accounts",
        "cpanel-license-premier-cloud-5700-accounts",
        "cpanel-license-premier-cloud-5800-accounts",
        "cpanel-license-premier-cloud-5900-accounts",
        "cpanel-license-premier-cloud-600-accounts",
        "cpanel-license-premier-cloud-6000-accounts",
        "cpanel-license-premier-cloud-6100-accounts",
        "cpanel-license-premier-cloud-6200-accounts",
        "cpanel-license-premier-cloud-6300-accounts",
        "cpanel-license-premier-cloud-6400-accounts",
        "cpanel-license-premier-cloud-6500-accounts",
        "cpanel-license-premier-cloud-6600-accounts",
        "cpanel-license-premier-cloud-6700-accounts",
        "cpanel-license-premier-cloud-6800-accounts",
        "cpanel-license-premier-cloud-6900-accounts",
        "cpanel-license-premier-cloud-700-accounts",
        "cpanel-license-premier-cloud-7000-accounts",
        "cpanel-license-premier-cloud-7100-accounts",
        "cpanel-license-premier-cloud-7200-accounts",
        "cpanel-license-premier-cloud-7300-accounts",
        "cpanel-license-premier-cloud-7400-accounts",
        "cpanel-license-premier-cloud-7500-accounts",
        "cpanel-license-premier-cloud-7600-accounts",
        "cpanel-license-premier-cloud-7700-accounts",
        "cpanel-license-premier-cloud-7800-accounts",
        "cpanel-license-premier-cloud-7900-accounts",
        "cpanel-license-premier-cloud-800-accounts",
        "cpanel-license-premier-cloud-8000-accounts",
        "cpanel-license-premier-cloud-8100-accounts",
        "cpanel-license-premier-cloud-8200-accounts",
        "cpanel-license-premier-cloud-8300-accounts",
        "cpanel-license-premier-cloud-8400-accounts",
        "cpanel-license-premier-cloud-8500-accounts",
        "cpanel-license-premier-cloud-8600-accounts",
        "cpanel-license-premier-cloud-8700-accounts",
        "cpanel-license-premier-cloud-8800-accounts",
        "cpanel-license-premier-cloud-8900-accounts",
        "cpanel-license-premier-cloud-900-accounts",
        "cpanel-license-premier-cloud-9000-accounts",
        "cpanel-license-premier-cloud-9100-accounts",
        "cpanel-license-premier-cloud-9200-accounts",
        "cpanel-license-premier-cloud-9300-accounts",
        "cpanel-license-premier-cloud-9400-accounts",
        "cpanel-license-premier-cloud-9500-accounts",
        "cpanel-license-premier-cloud-9600-accounts",
        "cpanel-license-premier-cloud-9700-accounts",
        "cpanel-license-premier-cloud-9800-accounts",
        "cpanel-license-premier-cloud-9900-accounts",
        "cpanel-license-premier-metal-1000-accounts",
        "cpanel-license-premier-metal-10000-accounts",
        "cpanel-license-premier-metal-1100-accounts",
        "cpanel-license-premier-metal-1200-accounts",
        "cpanel-license-premier-metal-1300-accounts",
        "cpanel-license-premier-metal-1400-accounts",
        "cpanel-license-premier-metal-1500-accounts",
        "cpanel-license-premier-metal-1600-accounts",
        "cpanel-license-premier-metal-1700-accounts",
        "cpanel-license-premier-metal-1800-accounts",
        "cpanel-license-premier-metal-1900-accounts",
        "cpanel-license-premier-metal-2000-accounts",
        "cpanel-license-premier-metal-2100-accounts",
        "cpanel-license-premier-metal-2200-accounts",
        "cpanel-license-premier-metal-2300-accounts",
        "cpanel-license-premier-metal-2400-accounts",
        "cpanel-license-premier-metal-2500-accounts",
        "cpanel-license-premier-metal-2600-accounts",
        "cpanel-license-premier-metal-2700-accounts",
        "cpanel-license-premier-metal-2800-accounts",
        "cpanel-license-premier-metal-2900-accounts",
        "cpanel-license-premier-metal-300-accounts",
        "cpanel-license-premier-metal-3000-accounts",
        "cpanel-license-premier-metal-3100-accounts",
        "cpanel-license-premier-metal-3200-accounts",
        "cpanel-license-premier-metal-3300-accounts",
        "cpanel-license-premier-metal-3400-accounts",
        "cpanel-license-premier-metal-3500-accounts",
        "cpanel-license-premier-metal-3600-accounts",
        "cpanel-license-premier-metal-3700-accounts",
        "cpanel-license-premier-metal-3800-accounts",
        "cpanel-license-premier-metal-3900-accounts",
        "cpanel-license-premier-metal-400-accounts",
        "cpanel-license-premier-metal-4000-accounts",
        "cpanel-license-premier-metal-4100-accounts",
        "cpanel-license-premier-metal-4200-accounts",
        "cpanel-license-premier-metal-4300-accounts",
        "cpanel-license-premier-metal-4400-accounts",
        "cpanel-license-premier-metal-4500-accounts",
        "cpanel-license-premier-metal-4600-accounts",
        "cpanel-license-premier-metal-4700-accounts",
        "cpanel-license-premier-metal-4800-accounts",
        "cpanel-license-premier-metal-4900-accounts",
        "cpanel-license-premier-metal-500-accounts",
        "cpanel-license-premier-metal-5000-accounts",
        "cpanel-license-premier-metal-5100-accounts",
        "cpanel-license-premier-metal-5200-accounts",
        "cpanel-license-premier-metal-5300-accounts",
        "cpanel-license-premier-metal-5400-accounts",
        "cpanel-license-premier-metal-5500-accounts",
        "cpanel-license-premier-metal-5600-accounts",
        "cpanel-license-premier-metal-5700-accounts",
        "cpanel-license-premier-metal-5800-accounts",
        "cpanel-license-premier-metal-5900-accounts",
        "cpanel-license-premier-metal-600-accounts",
        "cpanel-license-premier-metal-6000-accounts",
        "cpanel-license-premier-metal-6100-accounts",
        "cpanel-license-premier-metal-6200-accounts",
        "cpanel-license-premier-metal-6300-accounts",
        "cpanel-license-premier-metal-6400-accounts",
        "cpanel-license-premier-metal-6500-accounts",
        "cpanel-license-premier-metal-6600-accounts",
        "cpanel-license-premier-metal-6700-accounts",
        "cpanel-license-premier-metal-6800-accounts",
        "cpanel-license-premier-metal-6900-accounts",
        "cpanel-license-premier-metal-700-accounts",
        "cpanel-license-premier-metal-7000-accounts",
        "cpanel-license-premier-metal-7100-accounts",
        "cpanel-license-premier-metal-7200-accounts",
        "cpanel-license-premier-metal-7300-accounts",
        "cpanel-license-premier-metal-7400-accounts",
        "cpanel-license-premier-metal-7500-accounts",
        "cpanel-license-premier-metal-7600-accounts",
        "cpanel-license-premier-metal-7700-accounts",
        "cpanel-license-premier-metal-7800-accounts",
        "cpanel-license-premier-metal-7900-accounts",
        "cpanel-license-premier-metal-800-accounts",
        "cpanel-license-premier-metal-8000-accounts",
        "cpanel-license-premier-metal-8100-accounts",
        "cpanel-license-premier-metal-8200-accounts",
        "cpanel-license-premier-metal-8300-accounts",
        "cpanel-license-premier-metal-8400-accounts",
        "cpanel-license-premier-metal-8500-accounts",
        "cpanel-license-premier-metal-8600-accounts",
        "cpanel-license-premier-metal-8700-accounts",
        "cpanel-license-premier-metal-8800-accounts",
        "cpanel-license-premier-metal-8900-accounts",
        "cpanel-license-premier-metal-900-accounts",
        "cpanel-license-premier-metal-9000-accounts",
        "cpanel-license-premier-metal-9100-accounts",
        "cpanel-license-premier-metal-9200-accounts",
        "cpanel-license-premier-metal-9300-accounts",
        "cpanel-license-premier-metal-9400-accounts",
        "cpanel-license-premier-metal-9500-accounts",
        "cpanel-license-premier-metal-9600-accounts",
        "cpanel-license-premier-metal-9700-accounts",
        "cpanel-license-premier-metal-9800-accounts",
        "cpanel-license-premier-metal-9900-accounts",
        "cpanel-license-version-11",
        "cpanel-license-version-11-for-virtuozzo",
        "cpanel-license-version-11-for-vps",
        "version-admin-cloud",
        "version-premier-cloud-100",
        "version-premier-cloud-1000",
        "version-premier-cloud-10000",
        "version-premier-cloud-1100",
        "version-premier-cloud-1200",
        "version-premier-cloud-1300",
        "version-premier-cloud-1400",
        "version-premier-cloud-1500",
        "version-premier-cloud-1600",
        "version-premier-cloud-1700",
        "version-premier-cloud-1800",
        "version-premier-cloud-1900",
        "version-premier-cloud-200",
        "version-premier-cloud-2000",
        "version-premier-cloud-2100",
        "version-premier-cloud-2200",
        "version-premier-cloud-2300",
        "version-premier-cloud-2400",
        "version-premier-cloud-2500",
        "version-premier-cloud-2600",
        "version-premier-cloud-2700",
        "version-premier-cloud-2800",
        "version-premier-cloud-2900",
        "version-premier-cloud-300",
        "version-premier-cloud-3000",
        "version-premier-cloud-3100",
        "version-premier-cloud-3200",
        "version-premier-cloud-3300",
        "version-premier-cloud-3400",
        "version-premier-cloud-3500",
        "version-premier-cloud-3600",
        "version-premier-cloud-3700",
        "version-premier-cloud-3800",
        "version-premier-cloud-3900",
        "version-premier-cloud-400",
        "version-premier-cloud-4000",
        "version-premier-cloud-4100",
        "version-premier-cloud-4200",
        "version-premier-cloud-4300",
        "version-premier-cloud-4400",
        "version-premier-cloud-4500",
        "version-premier-cloud-4600",
        "version-premier-cloud-4700",
        "version-premier-cloud-4800",
        "version-premier-cloud-4900",
        "version-premier-cloud-500",
        "version-premier-cloud-5000",
        "version-premier-cloud-5100",
        "version-premier-cloud-5200",
        "version-premier-cloud-5300",
        "version-premier-cloud-5400",
        "version-premier-cloud-5500",
        "version-premier-cloud-5600",
        "version-premier-cloud-5700",
        "version-premier-cloud-5800",
        "version-premier-cloud-5900",
        "version-premier-cloud-600",
        "version-premier-cloud-6000",
        "version-premier-cloud-6100",
        "version-premier-cloud-6200",
        "version-premier-cloud-6300",
        "version-premier-cloud-6400",
        "version-premier-cloud-6500",
        "version-premier-cloud-6600",
        "version-premier-cloud-6700",
        "version-premier-cloud-6800",
        "version-premier-cloud-6900",
        "version-premier-cloud-700",
        "version-premier-cloud-7000",
        "version-premier-cloud-7100",
        "version-premier-cloud-7200",
        "version-premier-cloud-7300",
        "version-premier-cloud-7400",
        "version-premier-cloud-7500",
        "version-premier-cloud-7600",
        "version-premier-cloud-7700",
        "version-premier-cloud-7800",
        "version-premier-cloud-7900",
        "version-premier-cloud-800",
        "version-premier-cloud-8000",
        "version-premier-cloud-8100",
        "version-premier-cloud-8200",
        "version-premier-cloud-8300",
        "version-premier-cloud-8400",
        "version-premier-cloud-8500",
        "version-premier-cloud-8600",
        "version-premier-cloud-8700",
        "version-premier-cloud-8800",
        "version-premier-cloud-8900",
        "version-premier-cloud-900",
        "version-premier-cloud-9000",
        "version-premier-cloud-9100",
        "version-premier-cloud-9200",
        "version-premier-cloud-9300",
        "version-premier-cloud-9400",
        "version-premier-cloud-9500",
        "version-premier-cloud-9600",
        "version-premier-cloud-9700",
        "version-premier-cloud-9800",
        "version-premier-cloud-9900",
        "version-premier-metal-1000",
        "version-premier-metal-10000",
        "version-premier-metal-1100",
        "version-premier-metal-1200",
        "version-premier-metal-1300",
        "version-premier-metal-1400",
        "version-premier-metal-1500",
        "version-premier-metal-1600",
        "version-premier-metal-1700",
        "version-premier-metal-1800",
        "version-premier-metal-1900",
        "version-premier-metal-2000",
        "version-premier-metal-2100",
        "version-premier-metal-2200",
        "version-premier-metal-2300",
        "version-premier-metal-2400",
        "version-premier-metal-2500",
        "version-premier-metal-2600",
        "version-premier-metal-2700",
        "version-premier-metal-2800",
        "version-premier-metal-2900",
        "version-premier-metal-300",
        "version-premier-metal-3000",
        "version-premier-metal-3100",
        "version-premier-metal-3200",
        "version-premier-metal-3300",
        "version-premier-metal-3400",
        "version-premier-metal-3500",
        "version-premier-metal-3600",
        "version-premier-metal-3700",
        "version-premier-metal-3800",
        "version-premier-metal-3900",
        "version-premier-metal-400",
        "version-premier-metal-4000",
        "version-premier-metal-4100",
        "version-premier-metal-4200",
        "version-premier-metal-4300",
        "version-premier-metal-4400",
        "version-premier-metal-4500",
        "version-premier-metal-4600",
        "version-premier-metal-4700",
        "version-premier-metal-4800",
        "version-premier-metal-4900",
        "version-premier-metal-500",
        "version-premier-metal-5000",
        "version-premier-metal-5100",
        "version-premier-metal-5200",
        "version-premier-metal-5300",
        "version-premier-metal-5400",
        "version-premier-metal-5500",
        "version-premier-metal-5600",
        "version-premier-metal-5700",
        "version-premier-metal-5800",
        "version-premier-metal-5900",
        "version-premier-metal-600",
        "version-premier-metal-6000",
        "version-premier-metal-6100",
        "version-premier-metal-6200",
        "version-premier-metal-6300",
        "version-premier-metal-6400",
        "version-premier-metal-6500",
        "version-premier-metal-6600",
        "version-premier-metal-6700",
        "version-premier-metal-6800",
        "version-premier-metal-6900",
        "version-premier-metal-700",
        "version-premier-metal-7000",
        "version-premier-metal-7100",
        "version-premier-metal-7200",
        "version-premier-metal-7300",
        "version-premier-metal-7400",
        "version-premier-metal-7500",
        "version-premier-metal-7600",
        "version-premier-metal-7700",
        "version-premier-metal-7800",
        "version-premier-metal-7900",
        "version-premier-metal-800",
        "version-premier-metal-8000",
        "version-premier-metal-8100",
        "version-premier-metal-8200",
        "version-premier-metal-8300",
        "version-premier-metal-8400",
        "version-premier-metal-8500",
        "version-premier-metal-8600",
        "version-premier-metal-8700",
        "version-premier-metal-8800",
        "version-premier-metal-8900",
        "version-premier-metal-900",
        "version-premier-metal-9000",
        "version-premier-metal-9100",
        "version-premier-metal-9200",
        "version-premier-metal-9300",
        "version-premier-metal-9400",
        "version-premier-metal-9500",
        "version-premier-metal-9600",
        "version-premier-metal-9700",
        "version-premier-metal-9800",
        "version-premier-metal-9900",
        "version-pro-cloud",
        "version-solo-cloud",
        "version-solo-metal"
      ],
      "namespace": "license"
    },
    "license.CpanelVersionEnum": {
      "namespace": "license",
      "id": "CpanelVersionEnum",
      "description": "All versions available for Cpanel products",
      "enumType": "string",
      "enum": [
        "VERSION_11_FOR_LINUX",
        "VERSION_11_FOR_VIRTUOZZO",
        "VERSION_11_FOR_VPS",
        "cpanel-license-version-11",
        "cpanel-license-version-11-for-virtuozzo",
        "cpanel-license-version-11-for-vps",
        "version-admin-cloud",
        "version-premier-cloud-100",
        "version-premier-cloud-1000",
        "version-premier-cloud-10000",
        "version-premier-cloud-1100",
        "version-premier-cloud-1200",
        "version-premier-cloud-1300",
        "version-premier-cloud-1400",
        "version-premier-cloud-1500",
        "version-premier-cloud-1600",
        "version-premier-cloud-1700",
        "version-premier-cloud-1800",
        "version-premier-cloud-1900",
        "version-premier-cloud-200",
        "version-premier-cloud-2000",
        "version-premier-cloud-2100",
        "version-premier-cloud-2200",
        "version-premier-cloud-2300",
        "version-premier-cloud-2400",
        "version-premier-cloud-2500",
        "version-premier-cloud-2600",
        "version-premier-cloud-2700",
        "version-premier-cloud-2800",
        "version-premier-cloud-2900",
        "version-premier-cloud-300",
        "version-premier-cloud-3000",
        "version-premier-cloud-3100",
        "version-premier-cloud-3200",
        "version-premier-cloud-3300",
        "version-premier-cloud-3400",
        "version-premier-cloud-3500",
        "version-premier-cloud-3600",
        "version-premier-cloud-3700",
        "version-premier-cloud-3800",
        "version-premier-cloud-3900",
        "version-premier-cloud-400",
        "version-premier-cloud-4000",
        "version-premier-cloud-4100",
        "version-premier-cloud-4200",
        "version-premier-cloud-4300",
        "version-premier-cloud-4400",
        "version-premier-cloud-4500",
        "version-premier-cloud-4600",
        "version-premier-cloud-4700",
        "version-premier-cloud-4800",
        "version-premier-cloud-4900",
        "version-premier-cloud-500",
        "version-premier-cloud-5000",
        "version-premier-cloud-5100",
        "version-premier-cloud-5200",
        "version-premier-cloud-5300",
        "version-premier-cloud-5400",
        "version-premier-cloud-5500",
        "version-premier-cloud-5600",
        "version-premier-cloud-5700",
        "version-premier-cloud-5800",
        "version-premier-cloud-5900",
        "version-premier-cloud-600",
        "version-premier-cloud-6000",
        "version-premier-cloud-6100",
        "version-premier-cloud-6200",
        "version-premier-cloud-6300",
        "version-premier-cloud-6400",
        "version-premier-cloud-6500",
        "version-premier-cloud-6600",
        "version-premier-cloud-6700",
        "version-premier-cloud-6800",
        "version-premier-cloud-6900",
        "version-premier-cloud-700",
        "version-premier-cloud-7000",
        "version-premier-cloud-7100",
        "version-premier-cloud-7200",
        "version-premier-cloud-7300",
        "version-premier-cloud-7400",
        "version-premier-cloud-7500",
        "version-premier-cloud-7600",
        "version-premier-cloud-7700",
        "version-premier-cloud-7800",
        "version-premier-cloud-7900",
        "version-premier-cloud-800",
        "version-premier-cloud-8000",
        "version-premier-cloud-8100",
        "version-premier-cloud-8200",
        "version-premier-cloud-8300",
        "version-premier-cloud-8400",
        "version-premier-cloud-8500",
        "version-premier-cloud-8600",
        "version-premier-cloud-8700",
        "version-premier-cloud-8800",
        "version-premier-cloud-8900",
        "version-premier-cloud-900",
        "version-premier-cloud-9000",
        "version-premier-cloud-9100",
        "version-premier-cloud-9200",
        "version-premier-cloud-9300",
        "version-premier-cloud-9400",
        "version-premier-cloud-9500",
        "version-premier-cloud-9600",
        "version-premier-cloud-9700",
        "version-premier-cloud-9800",
        "version-premier-cloud-9900",
        "version-premier-metal-100",
        "version-premier-metal-1000",
        "version-premier-metal-10000",
        "version-premier-metal-1100",
        "version-premier-metal-1200",
        "version-premier-metal-1300",
        "version-premier-metal-1400",
        "version-premier-metal-1500",
        "version-premier-metal-1600",
        "version-premier-metal-1700",
        "version-premier-metal-1800",
        "version-premier-metal-1900",
        "version-premier-metal-200",
        "version-premier-metal-2000",
        "version-premier-metal-2100",
        "version-premier-metal-2200",
        "version-premier-metal-2300",
        "version-premier-metal-2400",
        "version-premier-metal-2500",
        "version-premier-metal-2600",
        "version-premier-metal-2700",
        "version-premier-metal-2800",
        "version-premier-metal-2900",
        "version-premier-metal-300",
        "version-premier-metal-3000",
        "version-premier-metal-3100",
        "version-premier-metal-3200",
        "version-premier-metal-3300",
        "version-premier-metal-3400",
        "version-premier-metal-3500",
        "version-premier-metal-3600",
        "version-premier-metal-3700",
        "version-premier-metal-3800",
        "version-premier-metal-3900",
        "version-premier-metal-400",
        "version-premier-metal-4000",
        "version-premier-metal-4100",
        "version-premier-metal-4200",
        "version-premier-metal-4300",
        "version-premier-metal-4400",
        "version-premier-metal-4500",
        "version-premier-metal-4600",
        "version-premier-metal-4700",
        "version-premier-metal-4800",
        "version-premier-metal-4900",
        "version-premier-metal-500",
        "version-premier-metal-5000",
        "version-premier-metal-5100",
        "version-premier-metal-5200",
        "version-premier-metal-5300",
        "version-premier-metal-5400",
        "version-premier-metal-5500",
        "version-premier-metal-5600",
        "version-premier-metal-5700",
        "version-premier-metal-5800",
        "version-premier-metal-5900",
        "version-premier-metal-600",
        "version-premier-metal-6000",
        "version-premier-metal-6100",
        "version-premier-metal-6200",
        "version-premier-metal-6300",
        "version-premier-metal-6400",
        "version-premier-metal-6500",
        "version-premier-metal-6600",
        "version-premier-metal-6700",
        "version-premier-metal-6800",
        "version-premier-metal-6900",
        "version-premier-metal-700",
        "version-premier-metal-7000",
        "version-premier-metal-7100",
        "version-premier-metal-7200",
        "version-premier-metal-7300",
        "version-premier-metal-7400",
        "version-premier-metal-7500",
        "version-premier-metal-7600",
        "version-premier-metal-7700",
        "version-premier-metal-7800",
        "version-premier-metal-7900",
        "version-premier-metal-800",
        "version-premier-metal-8000",
        "version-premier-metal-8100",
        "version-premier-metal-8200",
        "version-premier-metal-8300",
        "version-premier-metal-8400",
        "version-premier-metal-8500",
        "version-premier-metal-8600",
        "version-premier-metal-8700",
        "version-premier-metal-8800",
        "version-premier-metal-8900",
        "version-premier-metal-900",
        "version-premier-metal-9000",
        "version-premier-metal-9100",
        "version-premier-metal-9200",
        "version-premier-metal-9300",
        "version-premier-metal-9400",
        "version-premier-metal-9500",
        "version-premier-metal-9600",
        "version-premier-metal-9700",
        "version-premier-metal-9800",
        "version-premier-metal-9900",
        "version-pro-cloud",
        "version-solo-cloud",
        "version-solo-metal"
      ]
    },
    "services.Service": {
      "namespace": "services",
      "id": "Service",
      "description": "Details about a Service",
      "properties": {
        "possibleRenewPeriod": {
          "type": "long[]",
          "canBeNull": true,
          "fullType": "long[]",
          "description": "All the possible renew period of your service in month",
          "readOnly": true
        },
        "serviceId": {
          "description": null,
          "readOnly": true,
          "fullType": "coreTypes.ServiceId:long",
          "canBeNull": false,
          "type": "long"
        },
        "contactAdmin": {
          "description": null,
          "readOnly": true,
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "type": "string"
        },
        "expiration": {
          "type": "date",
          "canBeNull": false,
          "fullType": "date",
          "description": null,
          "readOnly": true
        },
        "status": {
          "type": "service.StateEnum",
          "canBeNull": false,
          "fullType": "service.StateEnum",
          "description": null,
          "readOnly": true
        },
        "contactTech": {
          "type": "string",
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "description": null,
          "readOnly": true
        },
        "engagedUpTo": {
          "type": "date",
          "canBeNull": true,
          "fullType": "date",
          "description": null,
          "readOnly": true
        },
        "contactBilling": {
          "description": null,
          "readOnly": true,
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "type": "string"
        },
        "domain": {
          "type": "string",
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "description": null
        },
        "canDeleteAtExpiration": {
          "readOnly": true,
          "description": "Indicates that the service can be set up to be deleted at expiration",
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean"
        },
        "renewalType": {
          "readOnly": true,
          "description": null,
          "type": "service.RenewalTypeEnum",
          "canBeNull": false,
          "fullType": "service.RenewalTypeEnum"
        },
        "creation": {
          "fullType": "date",
          "canBeNull": false,
          "type": "date",
          "readOnly": true,
          "description": null
        },
        "renew": {
          "fullType": "service.RenewType",
          "canBeNull": true,
          "type": "service.RenewType",
          "readOnly": false,
          "description": "Way of handling the renew"
        }
      }
    },
    "service.TerminationReasonEnum": {
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
      "description": "All reasons you can provide for a service termination",
      "id": "TerminationReasonEnum",
      "enumType": "string"
    },
    "license.Task": {
      "properties": {
        "taskId": {
          "type": "long",
          "canBeNull": false,
          "fullType": "long",
          "description": "This Task id",
          "readOnly": true
        },
        "todoDate": {
          "readOnly": true,
          "description": "When was this Task created",
          "type": "datetime",
          "canBeNull": false,
          "fullType": "datetime"
        },
        "doneDate": {
          "type": "datetime",
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "description": "When was this Task done"
        },
        "lastUpdate": {
          "description": "The last time this Task was updated",
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime"
        },
        "action": {
          "fullType": "license.ActionType",
          "canBeNull": false,
          "type": "license.ActionType",
          "description": "This Task description",
          "readOnly": true
        },
        "status": {
          "fullType": "license.TaskStateEnum",
          "canBeNull": false,
          "type": "license.TaskStateEnum",
          "readOnly": true,
          "description": "Current Taks status"
        },
        "name": {
          "readOnly": true,
          "description": "This Task name",
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        }
      },
      "description": "licenses Todos",
      "id": "Task",
      "namespace": "license"
    },
    "license.StateEnum": {
      "enum": [
        "ok",
        "released",
        "terminated",
        "toDeliver"
      ],
      "enumType": "string",
      "description": "All states a license can be in",
      "id": "StateEnum",
      "namespace": "license"
    },
    "license.CpanelOrderConfiguration": {
      "namespace": "license",
      "properties": {
        "orderableVersions": {
          "description": null,
          "type": "license.OrderableCpanelCompatibilityInfos[]",
          "canBeNull": false
        },
        "serviceType": {
          "canBeNull": false,
          "type": "license.LicenseTypeEnum",
          "description": null
        }
      },
      "description": "The serviceTypes allowed to Order a CPanel version",
      "id": "CpanelOrderConfiguration"
    },
    "license.LicenseTypeEnum": {
      "namespace": "license",
      "enumType": "string",
      "id": "LicenseTypeEnum",
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
      ]
    },
    "service.TerminationFutureUseEnum": {
      "description": "All future uses you can provide for a service termination",
      "id": "TerminationFutureUseEnum",
      "enumType": "string",
      "enum": [
        "NOT_REPLACING_SERVICE",
        "OTHER",
        "SUBSCRIBE_AN_OTHER_SERVICE",
        "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
        "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
      ],
      "namespace": "service"
    }
  },
  "apiVersion": "1.0",
  "resourcePath": "/license/cpanel",
  "apis": [
    {
      "description": "Operations about the LICENSE service",
      "path": "/license/cpanel",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "description": "List available services",
          "parameters": [],
          "noAuthentication": false
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "license.ChangeIpStatus",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The Ip on which you want to move this license",
              "fullType": "ipv4",
              "name": "destinationIp",
              "paramType": "query",
              "required": true,
              "dataType": "ipv4"
            },
            {
              "description": "The name of your Cpanel license",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            }
          ],
          "description": "Will tell if the ip can accept the license",
          "httpMethod": "GET",
          "responseType": "license.ChangeIpStatus",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "canLicenseBeMovedTo operations",
      "path": "/license/cpanel/{serviceName}/canLicenseBeMovedTo"
    },
    {
      "path": "/license/cpanel/{serviceName}/tasks/{taskId}",
      "description": "licenses Todos",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "license.Task",
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "license.Task",
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The name of your Cpanel license"
            },
            {
              "name": "taskId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "description": "This Task id"
            }
          ]
        }
      ]
    },
    {
      "description": "List the license.Task objects",
      "path": "/license/cpanel/{serviceName}/tasks",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "long[]",
          "description": "tasks linked to this license",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "status",
              "fullType": "license.TaskStateEnum",
              "dataType": "license.TaskStateEnum",
              "paramType": "query",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "fullType": "license.ActionType",
              "name": "action",
              "paramType": "query",
              "required": false,
              "dataType": "license.ActionType",
              "description": "Filter the value of action property (=)"
            },
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The name of your Cpanel license"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "long[]",
          "httpMethod": "GET"
        }
      ]
    },
    {
      "operations": [
        {
          "description": "Terminate your service",
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The name of your Cpanel license"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string",
          "httpMethod": "POST",
          "resellerOnly": false,
          "responseFullType": "string"
        }
      ],
      "path": "/license/cpanel/{serviceName}/terminate",
      "description": "Terminate your service"
    },
    {
      "description": "Details about a Service",
      "path": "/license/cpanel/{serviceName}/serviceInfos",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "services.Service",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ],
          "description": "Get this object properties",
          "responseType": "services.Service",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "httpMethod": "PUT",
          "description": "Alter this object properties",
          "parameters": [
            {
              "dataType": "services.Service",
              "required": true,
              "paramType": "body",
              "name": null,
              "fullType": "services.Service",
              "description": "New object properties"
            },
            {
              "description": "The name of your Cpanel license",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "responseFullType": "void",
          "resellerOnly": false
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "license.cpanel.Cpanel",
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The name of your Cpanel license"
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "license.cpanel.Cpanel"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "parameters": [
            {
              "description": "New object properties",
              "name": null,
              "fullType": "license.cpanel.Cpanel",
              "dataType": "license.cpanel.Cpanel",
              "paramType": "body",
              "required": true
            },
            {
              "description": "The name of your Cpanel license",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "Your Cpanel license",
      "path": "/license/cpanel/{serviceName}"
    },
    {
      "path": "/license/cpanel/{serviceName}/changeIp",
      "description": "changeIp operations",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "license.Task",
          "responseType": "license.Task",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "description": "The Ip on which you want to move this license",
              "fullType": "ipv4",
              "name": "destinationIp",
              "paramType": "body",
              "required": true,
              "dataType": "ipv4"
            },
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The name of your Cpanel license"
            }
          ],
          "noAuthentication": false,
          "description": "Move this license to another Ip"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "ipBlock[]",
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "ipBlock[]",
          "description": "Returns an array of ips where the license can be moved to",
          "parameters": [
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The name of your Cpanel license"
            }
          ],
          "noAuthentication": false
        }
      ],
      "description": "allowedDestinationIp operations",
      "path": "/license/cpanel/{serviceName}/allowedDestinationIp"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string",
          "description": "Confirm termination of your service",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "service.TerminationFutureUseEnum",
              "required": false,
              "paramType": "body",
              "name": "futureUse",
              "fullType": "service.TerminationFutureUseEnum",
              "description": "What next after your termination request"
            },
            {
              "fullType": "service.TerminationReasonEnum",
              "name": "reason",
              "paramType": "body",
              "required": false,
              "dataType": "service.TerminationReasonEnum",
              "description": "Reason of your termination request"
            },
            {
              "description": "Commentary about your termination request",
              "dataType": "string",
              "required": false,
              "paramType": "body",
              "name": "commentary",
              "fullType": "string"
            },
            {
              "description": "The termination token sent by mail to the admin contact",
              "fullType": "string",
              "name": "token",
              "paramType": "body",
              "required": true,
              "dataType": "string"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The name of your Cpanel license"
            }
          ],
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string"
        }
      ],
      "path": "/license/cpanel/{serviceName}/confirmTermination",
      "description": "Confirm termination of your service"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "license.CpanelOrderConfiguration[]",
          "description": "Get the orderable CPanel versions",
          "parameters": [
            {
              "name": "ip",
              "fullType": "ipv4",
              "dataType": "ipv4",
              "paramType": "query",
              "required": true,
              "description": "Your license Ip"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "license.CpanelOrderConfiguration[]",
          "httpMethod": "GET"
        }
      ],
      "path": "/license/cpanel/orderableVersions",
      "description": "Get the orderable CPanel versions"
    }
  ]
}