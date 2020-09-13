import {Schema} from '../../src/schema';

// imported from https://ca.api.kimsufi.com:443/1.0/dedicated/server.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
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
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "services.Service",
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
              "name": null,
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}/serviceInfos"
    },
    {
      "description": "Server informations",
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
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Dedicated",
          "responseType": "dedicated.server.Dedicated"
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
              "dataType": "dedicated.server.Dedicated",
              "description": "New object properties",
              "fullType": "dedicated.server.Dedicated",
              "name": null,
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}"
    },
    {
      "description": "templateCapabilities operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Gives some capabilities regarding the template for the current dedicated server.",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "templateName",
              "paramType": "query",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.TemplateCaps",
          "responseType": "dedicated.server.TemplateCaps"
        }
      ],
      "path": "/dedicated/server/{serviceName}/install/templateCapabilities"
    },
    {
      "description": "status operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get installation status",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.InstallationProgressStatus",
          "responseType": "dedicated.server.InstallationProgressStatus"
        }
      ],
      "path": "/dedicated/server/{serviceName}/install/status"
    },
    {
      "description": "compatibleTemplates operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve compatible  install templates names",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.InstallTemplate",
          "responseType": "dedicated.server.InstallTemplate"
        }
      ],
      "path": "/dedicated/server/{serviceName}/install/compatibleTemplates"
    },
    {
      "description": "compatibleTemplatePartitionSchemes operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve compatible  install template partitions scheme",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "name": "templateName",
              "paramType": "query",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/install/compatibleTemplatePartitionSchemes"
    },
    {
      "description": "start operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Start an install",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.InstallCustom",
              "description": "parameters for default install",
              "fullType": "dedicated.server.InstallCustom",
              "name": "details",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Partition scheme name",
              "fullType": "string",
              "name": "partitionSchemeName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task",
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/install/start"
    },
    {
      "description": "hardwareRaidSize operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get hardware RAID size for a given configuration",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Partition scheme name",
              "fullType": "string",
              "name": "partitionSchemeName",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "query",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.HardwareRaidSize",
          "responseType": "dedicated.server.HardwareRaidSize"
        }
      ],
      "path": "/dedicated/server/{serviceName}/install/hardwareRaidSize"
    },
    {
      "description": "hardwareRaidProfile operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve hardware RAID profile",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.HardwareRaidProfile",
          "responseType": "dedicated.server.HardwareRaidProfile"
        }
      ],
      "path": "/dedicated/server/{serviceName}/install/hardwareRaidProfile"
    },
    {
      "description": "Bring you own Image on your server",
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
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.ByoiStatus",
          "responseType": "dedicated.server.ByoiStatus"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Start an install with your own image",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Image checksum",
              "fullType": "string",
              "name": "checkSum",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.CheckSumTypesEnum",
              "description": "Checksum type",
              "fullType": "dedicated.CheckSumTypesEnum",
              "name": "checkSumType",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.server.ConfigDrive",
              "description": "enable and set ConfigDrive",
              "fullType": "dedicated.server.ConfigDrive",
              "name": "configdrive",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Image description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Disk group id to process install on (only available for some templates)",
              "fullType": "long",
              "name": "diskGroupId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "complexType.SafeKeyValueCanBeNull<password>[]",
              "description": "HTTP Headers",
              "fullType": "complexType.SafeKeyValueCanBeNull<password>[]",
              "name": "httpHeader",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "dedicated.ImageTypesEnum",
              "description": "Image type",
              "fullType": "dedicated.ImageTypesEnum",
              "name": "type",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Image URL",
              "fullType": "string",
              "name": "URL",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete your current image installation",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}/bringYourOwnImage"
    },
    {
      "description": "configure operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Configure SGX feature",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.BiosSettingsSgxPrmrrEnum",
              "description": "Size of the Processor Reserved Memory",
              "fullType": "dedicated.server.BiosSettingsSgxPrmrrEnum",
              "name": "prmrr",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "dedicated.server.BiosSettingsSgxStatusEnum",
              "description": "Desired SGX status",
              "fullType": "dedicated.server.BiosSettingsSgxStatusEnum",
              "name": "status",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task",
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/biosSettings/sgx/configure"
    },
    {
      "description": "Your BiosSettings for SGX feature",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.biosSettingsSgx.BiosSettingsSgx",
          "responseType": "dedicated.biosSettingsSgx.BiosSettingsSgx"
        }
      ],
      "path": "/dedicated/server/{serviceName}/biosSettings/sgx"
    },
    {
      "description": "Your BiosSettings",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.biosSettings.BiosSettings",
          "responseType": "dedicated.biosSettings.BiosSettings"
        }
      ],
      "path": "/dedicated/server/{serviceName}/biosSettings"
    },
    {
      "description": "List the dedicated.server.Netboot objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Server compatibles netboots",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.BootTypeEnum",
              "description": "Filter the value of bootType property (=)",
              "fullType": "dedicated.server.BootTypeEnum",
              "name": "bootType",
              "paramType": "query",
              "required": false
            }
          ],
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/boot"
    },
    {
      "description": "Available boots",
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
              "description": "boot id",
              "fullType": "long",
              "name": "bootId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Netboot",
          "responseType": "dedicated.server.Netboot"
        }
      ],
      "path": "/dedicated/server/{serviceName}/boot/{bootId}"
    },
    {
      "description": "Available boot options",
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
              "description": "boot id",
              "fullType": "long",
              "name": "bootId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.BootOptionEnum",
              "description": "The option of this boot",
              "fullType": "dedicated.server.BootOptionEnum",
              "name": "option",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.netbootOption",
          "responseType": "dedicated.server.netbootOption"
        }
      ],
      "path": "/dedicated/server/{serviceName}/boot/{bootId}/option/{option}"
    },
    {
      "description": "List the dedicated.server.netbootOption objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Option used on this netboot",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "boot id",
              "fullType": "long",
              "name": "bootId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.BootOptionEnum[]",
          "responseType": "dedicated.server.BootOptionEnum[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/boot/{bootId}/option"
    },
    {
      "description": "mrtg operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-04-23T00:00:00+01:00",
            "deprecatedDate": "2017-10-23T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dedicated/server/{serviceName}/networkInterfaceController",
            "value": "DEPRECATED"
          },
          "description": "Retrieve traffic graph values",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.MrtgPeriodEnum",
              "description": "mrtg period",
              "fullType": "dedicated.server.MrtgPeriodEnum",
              "name": "period",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicated.server.MrtgTypeEnum",
              "description": "mrtg type",
              "fullType": "dedicated.server.MrtgTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.MrtgTimestampValue[]",
          "responseType": "dedicated.server.MrtgTimestampValue[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/mrtg"
    },
    {
      "description": "secondaryDnsNameServerAvailable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Secondary nameServer available for your Server",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "secondaryDns.SecondaryDNSNameServer",
          "responseType": "secondaryDns.SecondaryDNSNameServer"
        }
      ],
      "path": "/dedicated/server/{serviceName}/secondaryDnsNameServerAvailable"
    },
    {
      "description": "backupCloudOfferDetails operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get details on offered backup cloud if available for the current server",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.backup.BackupOffer",
          "responseType": "dedicated.server.backup.BackupOffer"
        }
      ],
      "path": "/dedicated/server/{serviceName}/backupCloudOfferDetails"
    },
    {
      "description": "Information about the options of a dedicated server",
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
              "dataType": "dedicated.server.OptionEnum",
              "description": "The option name",
              "fullType": "dedicated.server.OptionEnum",
              "name": "option",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Option",
          "responseType": "dedicated.server.Option"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Release a given option",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.OptionEnum",
              "description": "The option name",
              "fullType": "dedicated.server.OptionEnum",
              "name": "option",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}/option/{option}"
    },
    {
      "description": "List the dedicated.server.Option objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of dedicated server options",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.OptionEnum[]",
          "responseType": "dedicated.server.OptionEnum[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/option"
    },
    {
      "description": "connection operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get server opened connections",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmConnection[]",
          "responseType": "dedicated.server.RtmConnection[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/connection"
    },
    {
      "description": "pci operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get server PCI devices informations",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmPci[]",
          "responseType": "dedicated.server.RtmPci[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/pci"
    },
    {
      "description": "os operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get server os informations",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmOs",
          "responseType": "dedicated.server.RtmOs"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/os"
    },
    {
      "description": "cpu operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get server cpu informations",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmCpu",
          "responseType": "dedicated.server.RtmCpu"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/cpu"
    },
    {
      "description": "memory operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get server memory informations",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmMemory[]",
          "responseType": "dedicated.server.RtmMemory[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/memory"
    },
    {
      "description": "chart operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve RTM graph values",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.RtmChartPeriodEnum",
              "description": "chart period",
              "fullType": "dedicated.server.RtmChartPeriodEnum",
              "name": "period",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicated.server.RtmChartTypeEnum",
              "description": "RTM chart type",
              "fullType": "dedicated.server.RtmChartTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "complexType.ChartReturn",
          "responseType": "complexType.ChartReturn"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/chart"
    },
    {
      "description": "List the dedicated.server.RtmPartition objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Server partitions",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/partition"
    },
    {
      "description": "Server partitions informations",
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
              "description": "Partition",
              "fullType": "string",
              "name": "partition",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmPartition",
          "responseType": "dedicated.server.RtmPartition"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/partition/{partition}"
    },
    {
      "description": "chart operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve partition charts",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Partition",
              "fullType": "string",
              "name": "partition",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.RtmChartPeriodEnum",
              "description": "chart period",
              "fullType": "dedicated.server.RtmChartPeriodEnum",
              "name": "period",
              "paramType": "query",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "complexType.ChartReturn",
          "responseType": "complexType.ChartReturn"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/partition/{partition}/chart"
    },
    {
      "description": "load operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get server load",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmLoad",
          "responseType": "dedicated.server.RtmLoad"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/load"
    },
    {
      "description": "process operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get server process",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmCommandSize[]",
          "responseType": "dedicated.server.RtmCommandSize[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/process"
    },
    {
      "description": "Server raid informations",
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
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Raid unit",
              "fullType": "string",
              "name": "unit",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmRaid",
          "responseType": "dedicated.server.RtmRaid"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}"
    },
    {
      "description": "List the dedicated.server.RtmRaidVolumePort objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Raid unit volume ports",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Raid unit",
              "fullType": "string",
              "name": "unit",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Raid volume name",
              "fullType": "string",
              "name": "volume",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port"
    },
    {
      "description": "Server raid volume port informations",
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
              "description": "Raid volume port",
              "fullType": "string",
              "name": "port",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Raid unit",
              "fullType": "string",
              "name": "unit",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Raid volume name",
              "fullType": "string",
              "name": "volume",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmRaidVolumePort",
          "responseType": "dedicated.server.RtmRaidVolumePort"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port/{port}"
    },
    {
      "description": "Server raid volume information",
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
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Raid unit",
              "fullType": "string",
              "name": "unit",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Raid volume name",
              "fullType": "string",
              "name": "volume",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmRaidVolume",
          "responseType": "dedicated.server.RtmRaidVolume"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}"
    },
    {
      "description": "List the dedicated.server.RtmRaidVolume objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Raid unit volumes",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Raid unit",
              "fullType": "string",
              "name": "unit",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}/volume"
    },
    {
      "description": "List the dedicated.server.RtmRaid objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Server raid informations",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/raid"
    },
    {
      "description": "Servers statistics sent by RTM (Real Time Monitoring)",
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
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Rtm",
          "responseType": "dedicated.server.Rtm"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics"
    },
    {
      "description": "Server disks informations",
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
              "description": "Disk",
              "fullType": "string",
              "name": "disk",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmDisk",
          "responseType": "dedicated.server.RtmDisk"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/disk/{disk}"
    },
    {
      "description": "smart operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get disk smart informations",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Disk",
              "fullType": "string",
              "name": "disk",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmDiskSmart",
          "responseType": "dedicated.server.RtmDiskSmart"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/disk/{disk}/smart"
    },
    {
      "description": "List the dedicated.server.RtmDisk objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Server disks",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/disk"
    },
    {
      "description": "motherboard operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get server motherboard hardware informations",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmMotherboardHw",
          "responseType": "dedicated.server.RtmMotherboardHw"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/motherboard"
    },
    {
      "description": "reboot operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Hard reboot this server",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task",
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/reboot"
    },
    {
      "description": "network operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve network informations about this dedicated server",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.NetworkSpecifications",
          "responseType": "dedicated.server.NetworkSpecifications"
        }
      ],
      "path": "/dedicated/server/{serviceName}/specifications/network"
    },
    {
      "description": "ip operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve IP capabilities about this dedicated server",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.IpOrderable",
          "responseType": "dedicated.server.IpOrderable"
        }
      ],
      "path": "/dedicated/server/{serviceName}/specifications/ip"
    },
    {
      "description": "hardware operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve hardware informations about this dedicated server",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.HardwareSpecifications",
          "responseType": "dedicated.server.HardwareSpecifications"
        }
      ],
      "path": "/dedicated/server/{serviceName}/specifications/hardware"
    },
    {
      "description": "cooling operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Ask for a cooling module replacement",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "text",
              "description": "User comment",
              "fullType": "text",
              "name": "comment",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "text",
              "description": "Technical details or logs",
              "fullType": "text",
              "name": "details",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "support.NewMessageInfo",
          "responseType": "support.NewMessageInfo"
        }
      ],
      "path": "/dedicated/server/{serviceName}/support/replace/cooling"
    },
    {
      "description": "hardDiskDrive operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Ask for a broken HDD replacement",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "text",
              "description": "User comment",
              "fullType": "text",
              "name": "comment",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.server.SupportReplaceHddInfo[]",
              "description": "If 'inverse' is set as 'false', the list of HDD TO REPLACE. If 'inverse' is set as 'true', the list of HDD TO NOT REPLACE.",
              "fullType": "dedicated.server.SupportReplaceHddInfo[]",
              "name": "disks",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "If set to 'true', replace only NON LISTED DISKS",
              "fullType": "boolean",
              "name": "inverse",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "support.NewMessageInfo",
          "responseType": "support.NewMessageInfo"
        }
      ],
      "path": "/dedicated/server/{serviceName}/support/replace/hardDiskDrive"
    },
    {
      "description": "memory operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Ask for a faulty RAM module replacement",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "text",
              "description": "User comment",
              "fullType": "text",
              "name": "comment",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "text",
              "description": "Technical details or logs",
              "fullType": "text",
              "name": "details",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string[]",
              "description": "The list of faulty RAM slots (if you have the information)",
              "fullType": "string[]",
              "name": "slots",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "support.NewMessageInfo",
          "responseType": "support.NewMessageInfo"
        }
      ],
      "path": "/dedicated/server/{serviceName}/support/replace/memory"
    },
    {
      "description": "ips operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all ip from server",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "ipBlock[]",
          "responseType": "ipBlock[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/ips"
    },
    {
      "description": "List the dedicated.server.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Dedicated server todos",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.TaskFunctionEnum",
              "description": "Filter the value of function property (=)",
              "fullType": "dedicated.TaskFunctionEnum",
              "name": "function",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicated.TaskStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "dedicated.TaskStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/task"
    },
    {
      "description": "Server tasks",
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
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "the id of the task",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task",
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/task/{taskId}"
    },
    {
      "description": "cancel operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "this action stop the task progression if it's possible",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "the id of the task",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}/task/{taskId}/cancel"
    },
    {
      "description": "authenticationSecret operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve secret to connect to the server / application",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Access[]",
          "responseType": "dedicated.server.Access[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/authenticationSecret"
    },
    {
      "description": "Your networkInterfaceController",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "macAddress",
              "description": "NetworkInterfaceController mac",
              "fullType": "macAddress",
              "name": "mac",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.networkInterfaceController.NetworkInterfaceController",
          "responseType": "dedicated.networkInterfaceController.NetworkInterfaceController"
        }
      ],
      "path": "/dedicated/server/{serviceName}/networkInterfaceController/{mac}"
    },
    {
      "description": "mrtg operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve traffic graph values",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "macAddress",
              "description": "NetworkInterfaceController mac",
              "fullType": "macAddress",
              "name": "mac",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.server.MrtgPeriodEnum",
              "description": "mrtg period",
              "fullType": "dedicated.server.MrtgPeriodEnum",
              "name": "period",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicated.server.MrtgTypeEnum",
              "description": "mrtg type",
              "fullType": "dedicated.server.MrtgTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.MrtgTimestampValue[]",
          "responseType": "dedicated.server.MrtgTimestampValue[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/networkInterfaceController/{mac}/mrtg"
    },
    {
      "description": "List the dedicated.networkInterfaceController.NetworkInterfaceController objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List server networkInterfaceController",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum",
              "description": "Filter the value of linkType property (=)",
              "fullType": "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum",
              "name": "linkType",
              "paramType": "query",
              "required": false
            }
          ],
          "resellerOnly": false,
          "responseFullType": "macAddress[]",
          "responseType": "macAddress[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/networkInterfaceController"
    },
    {
      "description": "Your VirtualNetworkInterface",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "VirtualNetworkInterface unique id",
              "fullType": "uuid",
              "name": "uuid",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.virtualNetworkInterface.VirtualNetworkInterface",
          "responseType": "dedicated.virtualNetworkInterface.VirtualNetworkInterface"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.virtualNetworkInterface.VirtualNetworkInterface",
              "description": "New object properties",
              "fullType": "dedicated.virtualNetworkInterface.VirtualNetworkInterface",
              "name": null,
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "VirtualNetworkInterface unique id",
              "fullType": "uuid",
              "name": "uuid",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Enable this VirtualNetworkInterface",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "VirtualNetworkInterface unique id",
              "fullType": "uuid",
              "name": "uuid",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task",
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}/enable"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Disable this VirtualNetworkInterface",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "VirtualNetworkInterface unique id",
              "fullType": "uuid",
              "name": "uuid",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task",
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}/disable"
    },
    {
      "description": "List the dedicated.virtualNetworkInterface.VirtualNetworkInterface objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List server VirtualNetworkInterfaces",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Filter the value of enabled property (=)",
              "fullType": "boolean",
              "name": "enabled",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum",
              "description": "Filter the value of mode property (=)",
              "fullType": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum",
              "name": "mode",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of name property (=)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of vrack property (=)",
              "fullType": "string",
              "name": "vrack",
              "paramType": "query",
              "required": false
            }
          ],
          "resellerOnly": false,
          "responseFullType": "uuid[]",
          "responseType": "uuid[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/virtualNetworkInterface"
    },
    {
      "description": "Secondary dns infos",
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
              "description": "domain on slave server",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "secondaryDns.SecondaryDNS",
          "responseType": "secondaryDns.SecondaryDNS"
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
              "dataType": "secondaryDns.SecondaryDNS",
              "description": "New object properties",
              "fullType": "secondaryDns.SecondaryDNS",
              "name": null,
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "domain on slave server",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "remove this domain",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "domain on slave server",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}"
    },
    {
      "description": "dnsServer operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "domain name server informations",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "domain on slave server",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "secondaryDns.SecondaryDNSNameServer",
          "responseType": "secondaryDns.SecondaryDNSNameServer"
        }
      ],
      "path": "/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}/dnsServer"
    },
    {
      "description": "List the secondaryDns.SecondaryDNS objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of secondary dns domain name",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "add a domain on secondary dns",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The domain to add",
              "fullType": "string",
              "name": "domain",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}/secondaryDnsDomains"
    },
    {
      "description": "secondaryDnsNameDomainToken operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "DNS field to temporarily add to your zone so that we can verify you are the owner of this domain",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The domain to check",
              "fullType": "string",
              "name": "domain",
              "paramType": "query",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "secondaryDns.SecondaryDNSCheckField",
          "responseType": "secondaryDns.SecondaryDNSCheckField"
        }
      ],
      "path": "/dedicated/server/{serviceName}/secondaryDnsNameDomainToken"
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
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string",
          "responseType": "string"
        }
      ],
      "path": "/dedicated/server/{serviceName}/terminate"
    },
    {
      "description": "List the dedicated.server.Intervention objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "technical intervention history",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/intervention"
    },
    {
      "description": "Intervention made on this server",
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
              "description": "The intervention id",
              "fullType": "long",
              "name": "interventionId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Intervention",
          "responseType": "dedicated.server.Intervention"
        }
      ],
      "path": "/dedicated/server/{serviceName}/intervention/{interventionId}"
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
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string",
          "responseType": "string"
        }
      ],
      "path": "/dedicated/server/{serviceName}/confirmTermination"
    },
    {
      "description": "Operations about the DEDICATED service",
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
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/server"
    }
  ],
  "basePath": "https://ca.api.kimsufi.com/1.0",
  "models": {
    "complexType.ChartReturn": {
      "description": "Chart",
      "id": "ChartReturn",
      "namespace": "complexType",
      "properties": {
        "unit": {
          "canBeNull": true,
          "description": null,
          "type": "string"
        },
        "values": {
          "canBeNull": true,
          "description": null,
          "type": "complexType.ChartTimestampValue[]"
        }
      }
    },
    "complexType.ChartTimestampValue": {
      "description": "A timestamp associated to a value",
      "id": "ChartTimestampValue",
      "namespace": "complexType",
      "properties": {
        "timestamp": {
          "canBeNull": false,
          "description": null,
          "type": "long"
        },
        "value": {
          "canBeNull": true,
          "description": null,
          "type": "double"
        }
      }
    },
    "complexType.SafeKeyValueCanBeNull<T>": {
      "description": "Key and value, with proper key strings",
      "generics": [
        "T"
      ],
      "id": "SafeKeyValueCanBeNull",
      "namespace": "complexType",
      "properties": {
        "key": {
          "canBeNull": true,
          "description": null,
          "type": "string"
        },
        "value": {
          "canBeNull": true,
          "description": null,
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
          "description": null,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": null,
          "type": "T"
        }
      }
    },
    "dedicated.CheckSumTypesEnum": {
      "description": "CheckSum type",
      "enum": [
        "md5",
        "sha1",
        "sha256",
        "sha512"
      ],
      "enumType": "string",
      "id": "CheckSumTypesEnum",
      "namespace": "dedicated"
    },
    "dedicated.DatacenterEnum": {
      "description": "ovh datacenter",
      "enum": [
        "bhs1",
        "bhs2",
        "bhs3",
        "bhs4",
        "bhs5",
        "bhs6",
        "bhs7",
        "dc1",
        "eri1",
        "gra1",
        "gra2",
        "gsw",
        "hil1",
        "lim1",
        "p19",
        "rbx-hz",
        "rbx1",
        "rbx2",
        "rbx3",
        "rbx4",
        "rbx5",
        "rbx6",
        "rbx7",
        "rbx8",
        "sbg1",
        "sbg2",
        "sbg3",
        "sbg4",
        "sgp1",
        "syd1",
        "vin1",
        "waw1"
      ],
      "enumType": "string",
      "id": "DatacenterEnum",
      "namespace": "dedicated"
    },
    "dedicated.ImageTypesEnum": {
      "description": "Type of your image",
      "enum": [
        "qcow2",
        "raw"
      ],
      "enumType": "string",
      "id": "ImageTypesEnum",
      "namespace": "dedicated"
    },
    "dedicated.TaskFunctionEnum": {
      "description": "different task operation",
      "enum": [
        "INFRA_002_VirtualNetworkInterface",
        "INFRA_002_VirtualNetworkInterface_group",
        "INFRA_002_VirtualNetworkInterface_ungroup",
        "addVirtualMac",
        "addWindowSplaFromExistingSerial",
        "applyBackupFtpAcls",
        "applyBackupFtpQuota",
        "bypassAntiDDosGame",
        "changePasswordBackupFTP",
        "changeRipeOrg",
        "checkAndReleaseIp",
        "createBackupFTP",
        "createOrUpdateRipeOrg",
        "createPrivateNetwork",
        "disableFirewall",
        "enableFirewall",
        "genericMoveFloatingIp",
        "hardReboot",
        "ipmi/configureSGX",
        "migrateBackupFTP",
        "moveFloatingIp",
        "moveVirtualMac",
        "rebootPower8To",
        "reinstallServer",
        "releaseIp",
        "removeBackupFTP",
        "removeVirtualMac",
        "requestAccessIPMI",
        "resetIPMI",
        "resetIPMISession",
        "testIPMIhttp",
        "testIPMIpassword",
        "testIPMIping",
        "virtualMacAdd",
        "virtualMacDelete"
      ],
      "enumType": "string",
      "id": "TaskFunctionEnum",
      "namespace": "dedicated"
    },
    "dedicated.TaskStatusEnum": {
      "description": "different task status",
      "enum": [
        "cancelled",
        "customerError",
        "doing",
        "done",
        "init",
        "ovhError",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "dedicated"
    },
    "dedicated.biosSettings.BiosSettings": {
      "description": "Your BiosSettings",
      "id": "BiosSettings",
      "namespace": "dedicated.biosSettings",
      "properties": {
        "supportedSettings": {
          "canBeNull": false,
          "description": "List supported setting",
          "fullType": "dedicated.server.BiosSettingsSupport",
          "readOnly": true,
          "type": "dedicated.server.BiosSettingsSupport"
        }
      }
    },
    "dedicated.biosSettingsSgx.BiosSettingsSgx": {
      "description": "Your BiosSettings for SGX feature",
      "id": "BiosSettingsSgx",
      "namespace": "dedicated.biosSettingsSgx",
      "properties": {
        "prmrr": {
          "canBeNull": false,
          "description": "Settings sections",
          "fullType": "dedicated.server.BiosSettingsSgxPrmrrEnum",
          "readOnly": true,
          "type": "dedicated.server.BiosSettingsSgxPrmrrEnum"
        },
        "status": {
          "canBeNull": false,
          "description": "Settings sections",
          "fullType": "dedicated.server.BiosSettingsSgxStatusEnum",
          "readOnly": true,
          "type": "dedicated.server.BiosSettingsSgxStatusEnum"
        }
      }
    },
    "dedicated.networkInterfaceController.NetworkInterfaceController": {
      "description": "Your networkInterfaceController",
      "id": "NetworkInterfaceController",
      "namespace": "dedicated.networkInterfaceController",
      "properties": {
        "linkType": {
          "canBeNull": false,
          "description": "NetworkInterfaceController linkType",
          "fullType": "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum",
          "readOnly": true,
          "type": "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum"
        },
        "mac": {
          "canBeNull": false,
          "description": "NetworkInterfaceController mac",
          "fullType": "macAddress",
          "readOnly": true,
          "type": "macAddress"
        },
        "virtualNetworkInterface": {
          "canBeNull": true,
          "description": "VirtualNetworkInterface bound to this NetworkInterfaceController",
          "fullType": "uuid",
          "readOnly": true,
          "type": "uuid"
        }
      }
    },
    "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum": {
      "description": "List NetworkInterfaceController linktype",
      "enum": [
        "isolated",
        "private",
        "private_lag",
        "provisioning",
        "public"
      ],
      "enumType": "string",
      "id": "NetworkInterfaceControllerLinkTypeEnum",
      "namespace": "dedicated.networkInterfaceController"
    },
    "dedicated.server.Access": {
      "description": "A structure describing the server's access",
      "id": "Access",
      "namespace": "dedicated.server",
      "properties": {
        "password": {
          "canBeNull": false,
          "description": "Password",
          "type": "password"
        },
        "type": {
          "canBeNull": false,
          "description": "Application access type",
          "type": "dedicated.server.AccessTypeEnum"
        },
        "url": {
          "canBeNull": true,
          "description": "Url",
          "type": "string"
        },
        "user": {
          "canBeNull": true,
          "description": "Login",
          "type": "string"
        }
      }
    },
    "dedicated.server.AccessTypeEnum": {
      "description": "Application access type",
      "enum": [
        "DIRECTADMIN_PANEL",
        "PLESK_PANEL",
        "PROXMOX_PANEL",
        "RDP",
        "SQL_SERVER",
        "SSH",
        "WEB_PANEL"
      ],
      "enumType": "string",
      "id": "AccessTypeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.BandwidthDetails": {
      "description": "A structure describing bandwidth informations about this dedicated server",
      "id": "BandwidthDetails",
      "namespace": "dedicated.server",
      "properties": {
        "InternetToOvh": {
          "canBeNull": true,
          "description": "bandwidth limitation Internet to OVH",
          "type": "complexType.UnitAndValue<long>"
        },
        "OvhToInternet": {
          "canBeNull": true,
          "description": "bandwidth limitation OVH to Internet",
          "type": "complexType.UnitAndValue<long>"
        },
        "OvhToOvh": {
          "canBeNull": true,
          "description": "bandwidth limitation OVH to OVH",
          "type": "complexType.UnitAndValue<long>"
        },
        "type": {
          "canBeNull": true,
          "description": "bandwidth offer type",
          "type": "dedicated.server.BandwidthTypeEnum"
        }
      }
    },
    "dedicated.server.BandwidthTypeEnum": {
      "description": " Different Bandwidth type",
      "enum": [
        "included",
        "platinum",
        "premium",
        "standard",
        "ultimate"
      ],
      "enumType": "string",
      "id": "BandwidthTypeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.BandwidthvRackDetails": {
      "description": "A structure describing vRack bandwidth informations about this dedicated server",
      "id": "BandwidthvRackDetails",
      "namespace": "dedicated.server",
      "properties": {
        "bandwidth": {
          "canBeNull": true,
          "description": "vrack bandwidth limitation",
          "type": "complexType.UnitAndValue<long>"
        },
        "type": {
          "canBeNull": true,
          "description": "bandwidth offer type",
          "type": "dedicated.server.BandwidthvRackTypeEnum"
        }
      }
    },
    "dedicated.server.BandwidthvRackTypeEnum": {
      "description": " Different Bandwidth type",
      "enum": [
        "included",
        "standard"
      ],
      "enumType": "string",
      "id": "BandwidthvRackTypeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.BiosSettingsSgxPrmrrEnum": {
      "description": "SGX PRMRR value enum",
      "enum": [
        "128",
        "256",
        "32",
        "64"
      ],
      "enumType": "string",
      "id": "BiosSettingsSgxPrmrrEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.BiosSettingsSgxStatusEnum": {
      "description": "SGX Status enum",
      "enum": [
        "disabled",
        "enabled",
        "software controlled"
      ],
      "enumType": "string",
      "id": "BiosSettingsSgxStatusEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.BiosSettingsSupport": {
      "description": "A structure describing supported bios settings",
      "id": "BiosSettingsSupport",
      "namespace": "dedicated.server",
      "properties": {
        "sgx": {
          "canBeNull": false,
          "description": "SGX feature support",
          "type": "boolean"
        },
        "sgxOptions": {
          "canBeNull": false,
          "description": "Supported SGX options",
          "type": "dedicated.server.BiosSettingsSupportSgxOptions"
        }
      }
    },
    "dedicated.server.BiosSettingsSupportSgxOptions": {
      "description": "A structure describing supported SGX options values",
      "id": "BiosSettingsSupportSgxOptions",
      "namespace": "dedicated.server",
      "properties": {
        "prmrr": {
          "canBeNull": false,
          "description": "Supported SGX prmrr values",
          "type": "dedicated.server.BiosSettingsSgxPrmrrEnum[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Supported SGX statuses",
          "type": "dedicated.server.BiosSettingsSgxStatusEnum[]"
        }
      }
    },
    "dedicated.server.BootModeEnum": {
      "description": "Server boot mode",
      "enum": [
        "legacy",
        "uefi",
        "uefi-legacy"
      ],
      "enumType": "string",
      "id": "BootModeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.BootOptionEnum": {
      "description": "Different option activated on netboot ",
      "enum": [
        "cpufamily",
        "grsec",
        "ipv6",
        "smp"
      ],
      "enumType": "string",
      "id": "BootOptionEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.BootTypeEnum": {
      "description": " Different netboot boot",
      "enum": [
        "harddisk",
        "internal",
        "ipxeCustomerScript",
        "network",
        "rescue"
      ],
      "enumType": "string",
      "id": "BootTypeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.ByoiStatus": {
      "description": "Bring you own Image on your server",
      "id": "ByoiStatus",
      "namespace": "dedicated.server",
      "properties": {
        "checksum": {
          "canBeNull": true,
          "description": "Last checksum",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "message": {
          "canBeNull": true,
          "description": "Last message",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "servername": {
          "canBeNull": true,
          "description": "Server name",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "status": {
          "canBeNull": true,
          "description": "Status",
          "fullType": "dedicated.server.ByoiStatusEnum",
          "readOnly": true,
          "type": "dedicated.server.ByoiStatusEnum"
        }
      }
    },
    "dedicated.server.ByoiStatusEnum": {
      "description": "All states a status can be in",
      "enum": [
        "doing",
        "done",
        "error"
      ],
      "enumType": "string",
      "id": "ByoiStatusEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.ConfigDrive": {
      "description": "Configurations used by cloud-init or cloudbase-init",
      "id": "ConfigDrive",
      "namespace": "dedicated.server",
      "properties": {
        "enable": {
          "canBeNull": true,
          "description": "enable ConfigDrive",
          "type": "boolean"
        },
        "hostname": {
          "canBeNull": true,
          "description": "Hostname",
          "type": "string"
        },
        "sshKey": {
          "canBeNull": true,
          "description": "SshKey",
          "type": "string"
        },
        "userData": {
          "canBeNull": true,
          "description": "Configuration script",
          "type": "text"
        },
        "userMetadatas": {
          "canBeNull": true,
          "description": "Metadas",
          "type": "complexType.SafeKeyValueCanBeNull<string>[]"
        }
      }
    },
    "dedicated.server.CpuFamilyEnum": {
      "description": "cpu family ",
      "enum": [
        "arm64",
        "armhf32",
        "ppc64",
        "x86",
        "x86-ht",
        "x86_64"
      ],
      "enumType": "string",
      "id": "CpuFamilyEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.Dedicated": {
      "description": "Server informations",
      "id": "Dedicated",
      "namespace": "dedicated.server",
      "properties": {
        "bootId": {
          "canBeNull": true,
          "description": null,
          "fullType": "long",
          "readOnly": false,
          "type": "long"
        },
        "commercialRange": {
          "canBeNull": true,
          "description": "dedicater server commercial range",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "datacenter": {
          "canBeNull": false,
          "description": "dedicated datacenter localisation",
          "fullType": "dedicated.DatacenterEnum",
          "readOnly": true,
          "type": "dedicated.DatacenterEnum"
        },
        "ip": {
          "canBeNull": false,
          "description": "dedicated server ip",
          "fullType": "ipv4",
          "readOnly": true,
          "type": "ipv4"
        },
        "linkSpeed": {
          "canBeNull": true,
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "monitoring": {
          "canBeNull": false,
          "description": "Icmp monitoring state",
          "fullType": "boolean",
          "readOnly": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "dedicated server name",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "os": {
          "canBeNull": false,
          "description": "Operating system",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "professionalUse": {
          "canBeNull": false,
          "description": "Does this server have professional use option",
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "rack": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "rescueMail": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "reverse": {
          "canBeNull": true,
          "description": "dedicated server reverse",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "rootDevice": {
          "canBeNull": true,
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "serverId": {
          "canBeNull": false,
          "description": "your server id",
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": null,
          "fullType": "dedicated.server.StateEnum",
          "readOnly": false,
          "type": "dedicated.server.StateEnum"
        },
        "supportLevel": {
          "canBeNull": false,
          "description": "Dedicated server support level",
          "fullType": "dedicated.server.SupportLevelEnum",
          "readOnly": true,
          "type": "dedicated.server.SupportLevelEnum"
        }
      }
    },
    "dedicated.server.DiskTypeEnum": {
      "description": "Disk interface type enum",
      "enum": [
        "NVMe",
        "SAS",
        "SATA",
        "SSD",
        "Unknown"
      ],
      "enumType": "string",
      "id": "DiskTypeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.FormFactorEnum": {
      "description": "Server form factor",
      "enum": [
        "0.25u",
        "0.5u",
        "1u",
        "2u",
        "3u",
        "4u"
      ],
      "enumType": "string",
      "id": "FormFactorEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.HardwareRaidConfiguration": {
      "description": "Simulated result of how the hardware RAID template will be configured on this server",
      "id": "HardwareRaidConfiguration",
      "namespace": "dedicated.server",
      "properties": {
        "capacity": {
          "canBeNull": false,
          "description": "RAID total capacity",
          "type": "complexType.UnitAndValue<long>"
        },
        "diskCount": {
          "canBeNull": false,
          "description": "Disk count",
          "type": "long"
        },
        "diskSize": {
          "canBeNull": false,
          "description": "Disk capacity",
          "type": "complexType.UnitAndValue<long>"
        },
        "diskSpanSize": {
          "canBeNull": false,
          "description": "Size of disk spans on RAID",
          "type": "long"
        },
        "mode": {
          "canBeNull": false,
          "description": "RAID mode",
          "type": "dedicated.server.HardwareSpecificationsRaidHardEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "RAID configuration name",
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "RAID controller type",
          "type": "string"
        }
      }
    },
    "dedicated.server.HardwareRaidController": {
      "description": "RAID controller configuration",
      "id": "HardwareRaidController",
      "namespace": "dedicated.server",
      "properties": {
        "disks": {
          "canBeNull": false,
          "description": "Connected disk type",
          "type": "dedicated.server.HardwareRaidDiskGroup[]"
        },
        "model": {
          "canBeNull": false,
          "description": "Raid controler model",
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Raid controler type",
          "type": "string"
        }
      }
    },
    "dedicated.server.HardwareRaidDiskGroup": {
      "description": "Disk attached to a RAID controller",
      "id": "HardwareRaidDiskGroup",
      "namespace": "dedicated.server",
      "properties": {
        "capacity": {
          "canBeNull": false,
          "description": "Disk capacity",
          "type": "complexType.UnitAndValue<long>"
        },
        "names": {
          "canBeNull": false,
          "description": "Disk names",
          "type": "string[]"
        },
        "speed": {
          "canBeNull": false,
          "description": "Disk insterface speed",
          "type": "complexType.UnitAndValue<string>"
        },
        "type": {
          "canBeNull": false,
          "description": "Disk type",
          "type": "dedicated.server.DiskTypeEnum"
        }
      }
    },
    "dedicated.server.HardwareRaidProfile": {
      "description": "A structure describing the server's hardware RAID configuration",
      "id": "HardwareRaidProfile",
      "namespace": "dedicated.server",
      "properties": {
        "controllers": {
          "canBeNull": false,
          "description": "Hardware RAID controller list",
          "type": "dedicated.server.HardwareRaidController[]"
        }
      }
    },
    "dedicated.server.HardwareRaidSize": {
      "description": "A structure describing the server's resulting layout after RAID configuration",
      "id": "HardwareRaidSize",
      "namespace": "dedicated.server",
      "properties": {
        "configurations": {
          "canBeNull": false,
          "description": "Hardware RAID configuration list",
          "type": "dedicated.server.HardwareRaidConfiguration[]"
        }
      }
    },
    "dedicated.server.HardwareSpecifications": {
      "description": "A structure describing informations about this dedicated server",
      "id": "HardwareSpecifications",
      "namespace": "dedicated.server",
      "properties": {
        "bootMode": {
          "canBeNull": false,
          "description": "Server boot mode",
          "type": "dedicated.server.BootModeEnum"
        },
        "coresPerProcessor": {
          "canBeNull": true,
          "description": "number of cores per processor",
          "type": "long"
        },
        "defaultHardwareRaidSize": {
          "canBeNull": true,
          "description": "Default hardware raid size for this server",
          "type": "complexType.UnitAndValue<long>"
        },
        "defaultHardwareRaidType": {
          "canBeNull": true,
          "description": "Default hardware raid type configured on this server",
          "type": "dedicated.server.HardwareSpecificationsRaidHardEnum"
        },
        "description": {
          "canBeNull": true,
          "description": "commercial name of this server",
          "type": "string"
        },
        "diskGroups": {
          "canBeNull": true,
          "description": "details about the groups of disks in the server",
          "type": "dedicated.server.HardwareSpecificationsDisk[]"
        },
        "expansionCards": {
          "canBeNull": true,
          "description": "details about the server's expansion cards",
          "type": "dedicated.server.HardwareSpecificationsExpansionCard[]"
        },
        "formFactor": {
          "canBeNull": true,
          "description": "Server form factor",
          "type": "dedicated.server.FormFactorEnum"
        },
        "memorySize": {
          "canBeNull": true,
          "description": "ram capacity",
          "type": "complexType.UnitAndValue<long>"
        },
        "motherboard": {
          "canBeNull": true,
          "description": "server motherboard",
          "type": "string"
        },
        "numberOfProcessors": {
          "canBeNull": true,
          "description": "number of processors in this dedicated server",
          "type": "long"
        },
        "processorArchitecture": {
          "canBeNull": true,
          "description": "processor architecture bit",
          "type": "dedicated.server.CpuFamilyEnum"
        },
        "processorName": {
          "canBeNull": true,
          "description": "processor name",
          "type": "string"
        },
        "threadsPerProcessor": {
          "canBeNull": true,
          "description": "number of threads per processor",
          "type": "long"
        },
        "usbKeys": {
          "canBeNull": true,
          "description": "Capacity of the USB keys installed on your server, if any",
          "type": "complexType.UnitAndValue<long>[]"
        }
      }
    },
    "dedicated.server.HardwareSpecificationsDisk": {
      "description": "A structure describing informations about server disks",
      "id": "HardwareSpecificationsDisk",
      "namespace": "dedicated.server",
      "properties": {
        "defaultHardwareRaidSize": {
          "canBeNull": true,
          "description": "default hardware raid size for this disk group",
          "type": "complexType.UnitAndValue<long>"
        },
        "defaultHardwareRaidType": {
          "canBeNull": true,
          "description": "default hardware raid type for this disk group",
          "type": "dedicated.server.HardwareSpecificationsRaidHardEnum"
        },
        "description": {
          "canBeNull": true,
          "description": "human readable description of this disk group",
          "type": "string"
        },
        "diskGroupId": {
          "canBeNull": true,
          "description": "identifier of this disk group",
          "type": "long"
        },
        "diskSize": {
          "canBeNull": true,
          "description": "disk capacity",
          "type": "complexType.UnitAndValue<long>"
        },
        "diskType": {
          "canBeNull": true,
          "description": "type of the disk (SSD, SATA, SAS, ...)",
          "type": "string"
        },
        "numberOfDisks": {
          "canBeNull": true,
          "description": "number of disks in this group",
          "type": "long"
        },
        "raidController": {
          "canBeNull": true,
          "description": "raid controller, if any, managing this group of disks",
          "type": "string"
        }
      }
    },
    "dedicated.server.HardwareSpecificationsExpansionCard": {
      "description": "A structure describing informations about server expansion cards",
      "id": "HardwareSpecificationsExpansionCard",
      "namespace": "dedicated.server",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "expansion card description",
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "expansion card type",
          "type": "dedicated.server.HardwareSpecificationsExpansionCardTypeEnum"
        }
      }
    },
    "dedicated.server.HardwareSpecificationsExpansionCardTypeEnum": {
      "description": "Expansion card type enum",
      "enum": [
        "fpga",
        "gpu"
      ],
      "enumType": "string",
      "id": "HardwareSpecificationsExpansionCardTypeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.HardwareSpecificationsRaidHardEnum": {
      "description": "Raid hard configuration",
      "enum": [
        "raid0",
        "raid1",
        "raid10",
        "raid1E",
        "raid5",
        "raid50",
        "raid6",
        "raid60"
      ],
      "enumType": "string",
      "id": "HardwareSpecificationsRaidHardEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.InstallCustom": {
      "description": "A structure describing informations about installation custom",
      "id": "InstallCustom",
      "namespace": "dedicated.server",
      "properties": {
        "customHostname": {
          "canBeNull": true,
          "description": "Personnal hostname to use in server reinstallation",
          "type": "string"
        },
        "diskGroupId": {
          "canBeNull": true,
          "description": "Disk group id to process install on (only available for some templates)",
          "type": "long"
        },
        "installRTM": {
          "canBeNull": true,
          "description": "true if you want to install RTM",
          "type": "boolean"
        },
        "installSqlServer": {
          "canBeNull": true,
          "description": "true if you want to install windows with sql feature",
          "type": "boolean"
        },
        "language": {
          "canBeNull": true,
          "description": "install language for ovh install choice",
          "type": "string"
        },
        "noRaid": {
          "canBeNull": true,
          "description": "true if you want to install only on the first disk",
          "type": "boolean"
        },
        "postInstallationScriptLink": {
          "canBeNull": true,
          "description": "the url to your custom install script",
          "type": "string"
        },
        "postInstallationScriptReturn": {
          "canBeNull": true,
          "description": " the return of your script if everythings ok. Advice: your script should return a unique validation string in case of succes. A good example is \"loh1Xee7eo OK OK OK UGh8Ang1Gu",
          "type": "string"
        },
        "resetHwRaid": {
          "canBeNull": true,
          "description": "Specify if we should attempt to reset hw raid on install.",
          "type": "boolean"
        },
        "softRaidDevices": {
          "canBeNull": true,
          "description": "Number of devices to use for system's software RAID",
          "type": "long"
        },
        "sshKeyName": {
          "canBeNull": true,
          "description": "The name of ssh key to install",
          "type": "string"
        },
        "useDistribKernel": {
          "canBeNull": true,
          "description": "true if you want to install with distrib kernel",
          "type": "boolean"
        },
        "useSpla": {
          "canBeNull": true,
          "description": "true if you want to install windows with your spla license",
          "type": "boolean"
        }
      }
    },
    "dedicated.server.InstallTemplate": {
      "description": "A structure describing informations about an Installation templates",
      "id": "InstallTemplate",
      "namespace": "dedicated.server",
      "properties": {
        "ovh": {
          "canBeNull": true,
          "description": "Names list of ovh installationtemplates compatibles with this server",
          "type": "string[]"
        },
        "personal": {
          "canBeNull": true,
          "description": "Names list of yours installation templates compatibles with this server",
          "type": "string[]"
        }
      }
    },
    "dedicated.server.InstallationProgressStatus": {
      "description": "A structure describing informations about this dedicated server installation status",
      "id": "InstallationProgressStatus",
      "namespace": "dedicated.server",
      "properties": {
        "elapsedTime": {
          "canBeNull": false,
          "description": "Elapsed time in seconds since installation beggining",
          "type": "long"
        },
        "progress": {
          "canBeNull": true,
          "description": "Installation steps",
          "type": "dedicated.server.InstallationProgressSteps[]"
        }
      }
    },
    "dedicated.server.InstallationProgressStatusEnum": {
      "description": "Distinct Installation status",
      "enum": [
        "doing",
        "done",
        "error",
        "expired",
        "idle",
        "pending",
        "stopping",
        "todo"
      ],
      "enumType": "string",
      "id": "InstallationProgressStatusEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.InstallationProgressSteps": {
      "description": "A structure describing informations about this dedicated server installation steps",
      "id": "InstallationProgressSteps",
      "namespace": "dedicated.server",
      "properties": {
        "comment": {
          "canBeNull": false,
          "description": "Informations about this installation step",
          "type": "string"
        },
        "error": {
          "canBeNull": true,
          "description": "Error details if state is error",
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of this installation step",
          "type": "dedicated.server.InstallationProgressStatusEnum"
        }
      }
    },
    "dedicated.server.Intervention": {
      "description": "Intervention made on this server",
      "id": "Intervention",
      "namespace": "dedicated.server",
      "properties": {
        "date": {
          "canBeNull": true,
          "description": "the intervention start date",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "interventionId": {
          "canBeNull": false,
          "description": "The intervention id",
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "type": {
          "canBeNull": true,
          "description": "the intervention type",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        }
      }
    },
    "dedicated.server.IpBlockSizeEnum": {
      "description": "IP block size",
      "enum": [
        "1",
        "128",
        "16",
        "256",
        "32",
        "4",
        "64",
        "8"
      ],
      "enumType": "long",
      "id": "IpBlockSizeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.IpOrderable": {
      "description": "A structure describing informations about orderable IP address",
      "id": "IpOrderable",
      "namespace": "dedicated.server",
      "properties": {
        "ipv4": {
          "canBeNull": true,
          "description": "Orderable IP v4 details",
          "type": "dedicated.server.IpOrderableDetails[]"
        },
        "ipv6": {
          "canBeNull": true,
          "description": "Orderable IP v6 details",
          "type": "dedicated.server.IpOrderableDetails[]"
        }
      }
    },
    "dedicated.server.IpOrderableDetails": {
      "description": "A structure describing informations about orderable IP address",
      "id": "IpOrderableDetails",
      "namespace": "dedicated.server",
      "properties": {
        "blockSizes": {
          "canBeNull": false,
          "description": "Orderable IP blocks sizes",
          "type": "dedicated.server.IpBlockSizeEnum[]"
        },
        "included": {
          "canBeNull": false,
          "description": "Are those IP included with your offer",
          "type": "boolean"
        },
        "ipNumber": {
          "canBeNull": true,
          "description": "Total number of IP that can be routed to this server",
          "type": "long"
        },
        "number": {
          "canBeNull": false,
          "description": "Total number of prefixes that can be routed to this server",
          "type": "long"
        },
        "optionRequired": {
          "canBeNull": true,
          "description": "Which option is required to order this type of IP",
          "type": "dedicated.server.OptionRequiredEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "this IP type",
          "type": "dedicated.server.IpTypeOrderableEnum"
        }
      }
    },
    "dedicated.server.IpTypeOrderableEnum": {
      "description": "Orderable IP type",
      "enum": [
        "failover",
        "static",
        "unshielded"
      ],
      "enumType": "string",
      "id": "IpTypeOrderableEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.MrtgPeriodEnum": {
      "description": "distincts MRTG period",
      "enum": [
        "daily",
        "hourly",
        "monthly",
        "weekly",
        "yearly"
      ],
      "enumType": "string",
      "id": "MrtgPeriodEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.MrtgTimestampValue": {
      "description": "A timestamp associated to a value",
      "id": "MrtgTimestampValue",
      "namespace": "dedicated.server",
      "properties": {
        "timestamp": {
          "canBeNull": false,
          "description": null,
          "type": "long"
        },
        "value": {
          "canBeNull": true,
          "description": null,
          "type": "complexType.UnitAndValue<double>"
        }
      }
    },
    "dedicated.server.MrtgTypeEnum": {
      "description": "distincts MRTG type",
      "enum": [
        "errors:download",
        "errors:upload",
        "packets:download",
        "packets:upload",
        "traffic:download",
        "traffic:upload"
      ],
      "enumType": "string",
      "id": "MrtgTypeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.Netboot": {
      "description": "Available boots",
      "id": "Netboot",
      "namespace": "dedicated.server",
      "properties": {
        "bootId": {
          "canBeNull": false,
          "description": "boot id",
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        },
        "bootType": {
          "canBeNull": false,
          "description": "the boot system",
          "fullType": "dedicated.server.BootTypeEnum",
          "readOnly": true,
          "type": "dedicated.server.BootTypeEnum"
        },
        "description": {
          "canBeNull": false,
          "description": "the boot description",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "kernel": {
          "canBeNull": false,
          "description": "The boot kernel",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        }
      }
    },
    "dedicated.server.NetworkSpecifications": {
      "description": "A structure describing network informations about this dedicated server",
      "id": "NetworkSpecifications",
      "namespace": "dedicated.server",
      "properties": {
        "bandwidth": {
          "canBeNull": true,
          "description": "Bandwidth details",
          "type": "dedicated.server.BandwidthDetails"
        },
        "connection": {
          "canBeNull": true,
          "description": "Network connection flow rate",
          "type": "complexType.UnitAndValue<long>"
        },
        "ola": {
          "canBeNull": true,
          "description": "OLA details",
          "type": "dedicated.server.OlaDetails"
        },
        "routing": {
          "canBeNull": true,
          "description": "Routing details",
          "type": "dedicated.server.RoutingDetails"
        },
        "switching": {
          "canBeNull": true,
          "description": "Switching details",
          "type": "dedicated.server.SwitchingDetails"
        },
        "traffic": {
          "canBeNull": true,
          "description": "Traffic details",
          "type": "dedicated.server.TrafficDetails"
        },
        "vrack": {
          "canBeNull": true,
          "description": "vRack details",
          "type": "dedicated.server.BandwidthvRackDetails"
        }
      }
    },
    "dedicated.server.OlaDetails": {
      "description": "A structure describing OVH Link Aggregation available modes for this dedicated server",
      "id": "OlaDetails",
      "namespace": "dedicated.server",
      "properties": {
        "available": {
          "canBeNull": false,
          "description": "Is the OLA feature available",
          "type": "boolean"
        },
        "supportedModes": {
          "canBeNull": true,
          "description": "What modes are supported",
          "type": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum[]"
        }
      }
    },
    "dedicated.server.Option": {
      "description": "Information about the options of a dedicated server",
      "id": "Option",
      "namespace": "dedicated.server",
      "properties": {
        "option": {
          "canBeNull": false,
          "description": "The option name",
          "fullType": "dedicated.server.OptionEnum",
          "readOnly": true,
          "type": "dedicated.server.OptionEnum"
        },
        "state": {
          "canBeNull": false,
          "description": "The state of the option",
          "fullType": "dedicated.server.OptionStateEnum",
          "readOnly": true,
          "type": "dedicated.server.OptionStateEnum"
        }
      }
    },
    "dedicated.server.OptionEnum": {
      "description": "All options a dedicated server can have and release",
      "enum": [
        "BACKUPPROTOCOL",
        "BANDWIDTH",
        "BANDWIDTH_VRACK",
        "OLA",
        "SGX",
        "TRAFFIC",
        "TRAFFIC_DISCOVER",
        "TUNING",
        "TUNING_FIREWALL",
        "TUNING_KVM",
        "USB_KVM_IP"
      ],
      "enumType": "string",
      "id": "OptionEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.OptionRequiredEnum": {
      "description": "Required option",
      "enum": [
        "professionalUse"
      ],
      "enumType": "string",
      "id": "OptionRequiredEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.OptionStateEnum": {
      "description": "All states a dedicated server option can be in",
      "enum": [
        "released",
        "subscribed"
      ],
      "enumType": "string",
      "id": "OptionStateEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.RoutingDetails": {
      "description": "A structure describing routing informations about this dedicated server",
      "id": "RoutingDetails",
      "namespace": "dedicated.server",
      "properties": {
        "ipv4": {
          "canBeNull": true,
          "description": "Ipv4 routing details",
          "type": "dedicated.server.RoutingDetailsIpv4"
        },
        "ipv6": {
          "canBeNull": true,
          "description": "Ipv6 routing details",
          "type": "dedicated.server.RoutingDetailsIpv6"
        }
      }
    },
    "dedicated.server.RoutingDetailsIpv4": {
      "description": "A structure describing IPv4 routing informations about this dedicated server",
      "id": "RoutingDetailsIpv4",
      "namespace": "dedicated.server",
      "properties": {
        "gateway": {
          "canBeNull": true,
          "description": "Server gateway",
          "type": "ipv4"
        },
        "ip": {
          "canBeNull": true,
          "description": "Server main IP",
          "type": "ipv4"
        },
        "network": {
          "canBeNull": true,
          "description": "Server network",
          "type": "ipv4Block"
        }
      }
    },
    "dedicated.server.RoutingDetailsIpv6": {
      "description": "A structure describing IPv6 routing informations about this dedicated server",
      "id": "RoutingDetailsIpv6",
      "namespace": "dedicated.server",
      "properties": {
        "gateway": {
          "canBeNull": true,
          "description": "Server gateway",
          "type": "ipv6"
        },
        "ip": {
          "canBeNull": true,
          "description": "Server main IP",
          "type": "ipv6Block"
        },
        "network": {
          "canBeNull": true,
          "description": "Server network",
          "type": "ipv6Block"
        }
      }
    },
    "dedicated.server.Rtm": {
      "description": "Servers statistics sent by RTM (Real Time Monitoring)",
      "id": "Rtm",
      "namespace": "dedicated.server",
      "properties": {
        "currentVersion": {
          "canBeNull": true,
          "description": "RTM current version",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "installedVersion": {
          "canBeNull": true,
          "description": "RTM currently installed version",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "needsUpdate": {
          "canBeNull": false,
          "description": "You need to update RTM script on your server",
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        }
      }
    },
    "dedicated.server.RtmChartPeriodEnum": {
      "description": "distincts RTM charts period",
      "enum": [
        "daily",
        "monthly",
        "weekly",
        "yearly"
      ],
      "enumType": "string",
      "id": "RtmChartPeriodEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.RtmChartTypeEnum": {
      "description": "distincts probes type",
      "enum": [
        "cpu",
        "loadavg1",
        "loadavg15",
        "loadavg5",
        "memory",
        "processCount",
        "processRunning",
        "swap"
      ],
      "enumType": "string",
      "id": "RtmChartTypeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.RtmCommandSize": {
      "description": "A structure describing informations about RTM",
      "id": "RtmCommandSize",
      "namespace": "dedicated.server",
      "properties": {
        "command": {
          "canBeNull": true,
          "description": "Complete command line used for starting this process",
          "type": "string"
        },
        "memory": {
          "canBeNull": true,
          "description": "Memory used by this process",
          "type": "complexType.UnitAndValue<long>"
        }
      }
    },
    "dedicated.server.RtmConnection": {
      "description": "A structure describing informations about opened sockets on the server",
      "id": "RtmConnection",
      "namespace": "dedicated.server",
      "properties": {
        "cmdline": {
          "canBeNull": true,
          "description": "Complete command line used for starting this process",
          "type": "string"
        },
        "domain": {
          "canBeNull": true,
          "description": "Domain used by the process",
          "type": "string"
        },
        "exe": {
          "canBeNull": true,
          "description": "Path to the program",
          "type": "string"
        },
        "ip": {
          "canBeNull": true,
          "description": "The IP address connected",
          "type": "ip"
        },
        "pid": {
          "canBeNull": true,
          "description": "Process ID",
          "type": "long"
        },
        "port": {
          "canBeNull": true,
          "description": "Port opened",
          "type": "long"
        },
        "procname": {
          "canBeNull": true,
          "description": "Name of the process",
          "type": "string"
        },
        "uid": {
          "canBeNull": true,
          "description": "System user ID",
          "type": "long"
        },
        "username": {
          "canBeNull": true,
          "description": "Username used to start the process",
          "type": "string"
        }
      }
    },
    "dedicated.server.RtmCpu": {
      "description": "A structure describing informations about server cpu",
      "id": "RtmCpu",
      "namespace": "dedicated.server",
      "properties": {
        "cache": {
          "canBeNull": true,
          "description": "CPU cache size",
          "type": "complexType.UnitAndValue<long>"
        },
        "core": {
          "canBeNull": true,
          "description": "CPU core number",
          "type": "long"
        },
        "freq": {
          "canBeNull": true,
          "description": "CPU frequency",
          "type": "complexType.UnitAndValue<long>"
        },
        "name": {
          "canBeNull": true,
          "description": "CPU  name",
          "type": "string"
        }
      }
    },
    "dedicated.server.RtmDisk": {
      "description": "Server disks informations",
      "id": "RtmDisk",
      "namespace": "dedicated.server",
      "properties": {
        "capacity": {
          "canBeNull": true,
          "description": "Disk capacity",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "type": "complexType.UnitAndValue<long>"
        },
        "disk": {
          "canBeNull": false,
          "description": "Disk",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "model": {
          "canBeNull": true,
          "description": "Disk model",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "temperature": {
          "canBeNull": true,
          "description": "Disk temperature",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "type": "complexType.UnitAndValue<long>"
        }
      }
    },
    "dedicated.server.RtmDiskSmart": {
      "description": "A structure describing SMART health disk status",
      "id": "RtmDiskSmart",
      "namespace": "dedicated.server",
      "properties": {
        "current_pending_sector": {
          "canBeNull": true,
          "description": "Current pending sectors",
          "type": "long"
        },
        "multizone_error_rate": {
          "canBeNull": true,
          "description": "Multizone error rate",
          "type": "long"
        },
        "offline_seek_performance": {
          "canBeNull": true,
          "description": "Offline seek rate",
          "type": "long"
        },
        "offline_uncorrectable": {
          "canBeNull": true,
          "description": "Offline uncorrectable",
          "type": "long"
        },
        "other_errors": {
          "canBeNull": true,
          "description": "Other errors",
          "type": "long"
        },
        "realocated_event_count": {
          "canBeNull": true,
          "description": "Realocated event count",
          "type": "long"
        },
        "temperature_celsius": {
          "canBeNull": true,
          "description": "temperature",
          "type": "long"
        },
        "udma_crc_error": {
          "canBeNull": true,
          "description": "UDMA crc error",
          "type": "long"
        },
        "uncorrected_read_errors": {
          "canBeNull": true,
          "description": "Uncorrected read errors",
          "type": "long"
        },
        "uncorrected_write_errors": {
          "canBeNull": true,
          "description": "Uncorrected write errors",
          "type": "long"
        }
      }
    },
    "dedicated.server.RtmLoad": {
      "description": "A structure describing informations about server load",
      "id": "RtmLoad",
      "namespace": "dedicated.server",
      "properties": {
        "cpu": {
          "canBeNull": true,
          "description": "CPU usage",
          "type": "complexType.UnitAndValue<double>"
        },
        "loadavg1": {
          "canBeNull": true,
          "description": "Load average in the last 1 minute",
          "type": "double"
        },
        "loadavg15": {
          "canBeNull": true,
          "description": "Load average in the last 15 minutes",
          "type": "double"
        },
        "loadavg5": {
          "canBeNull": true,
          "description": "Load average in the last 5 minutes",
          "type": "double"
        },
        "memory": {
          "canBeNull": true,
          "description": "Memory usage",
          "type": "complexType.UnitAndValue<double>"
        },
        "processCount": {
          "canBeNull": true,
          "description": "Number of processes using or waiting for CPU time",
          "type": "long"
        },
        "processRunning": {
          "canBeNull": true,
          "description": "Number of process running",
          "type": "long"
        },
        "swap": {
          "canBeNull": true,
          "description": "Swap usage",
          "type": "complexType.UnitAndValue<double>"
        },
        "uptime": {
          "canBeNull": true,
          "description": "Server uptime",
          "type": "long"
        }
      }
    },
    "dedicated.server.RtmMemory": {
      "description": "A structure describing informations about server memory",
      "id": "RtmMemory",
      "namespace": "dedicated.server",
      "properties": {
        "capacity": {
          "canBeNull": true,
          "description": "Memory capacity ",
          "type": "complexType.UnitAndValue<long>"
        },
        "slot": {
          "canBeNull": true,
          "description": "Memory slot",
          "type": "string"
        }
      }
    },
    "dedicated.server.RtmMotherboardHw": {
      "description": "A structure describing informations about motherboard",
      "id": "RtmMotherboardHw",
      "namespace": "dedicated.server",
      "properties": {
        "manufacturer": {
          "canBeNull": true,
          "description": "Motherboard manufacturer",
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Motherboard name",
          "type": "string"
        }
      }
    },
    "dedicated.server.RtmOs": {
      "description": "A structure describing informations about Rtm os",
      "id": "RtmOs",
      "namespace": "dedicated.server",
      "properties": {
        "kernelRelease": {
          "canBeNull": true,
          "description": "OS kernel release",
          "type": "string"
        },
        "kernelVersion": {
          "canBeNull": true,
          "description": "OS kernel version",
          "type": "string"
        },
        "release": {
          "canBeNull": true,
          "description": "OS release",
          "type": "string"
        }
      }
    },
    "dedicated.server.RtmPartition": {
      "description": "Server partitions informations",
      "id": "RtmPartition",
      "namespace": "dedicated.server",
      "properties": {
        "inodeUsage": {
          "canBeNull": true,
          "description": "Partition inode",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "type": "complexType.UnitAndValue<long>"
        },
        "mountPoint": {
          "canBeNull": true,
          "description": "Partition mount point",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "partition": {
          "canBeNull": false,
          "description": "Partition",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "usage": {
          "canBeNull": true,
          "description": "Partition usage",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "type": "complexType.UnitAndValue<long>"
        }
      }
    },
    "dedicated.server.RtmPci": {
      "description": "A structure describing informations about server PCI devices",
      "id": "RtmPci",
      "namespace": "dedicated.server",
      "properties": {
        "bus": {
          "canBeNull": true,
          "description": "PCI bus device",
          "type": "string"
        },
        "device": {
          "canBeNull": true,
          "description": "PCI device information",
          "type": "string"
        }
      }
    },
    "dedicated.server.RtmRaid": {
      "description": "Server raid informations",
      "id": "RtmRaid",
      "namespace": "dedicated.server",
      "properties": {
        "unit": {
          "canBeNull": false,
          "description": "Raid unit",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        }
      }
    },
    "dedicated.server.RtmRaidStatusEnum": {
      "description": " Different RAID status",
      "enum": [
        "KO",
        "OK",
        "REBUILDING",
        "UNKNOWN"
      ],
      "enumType": "string",
      "id": "RtmRaidStatusEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.RtmRaidVolume": {
      "description": "Server raid volume information",
      "id": "RtmRaidVolume",
      "namespace": "dedicated.server",
      "properties": {
        "capacity": {
          "canBeNull": true,
          "description": "Raid volume capacity",
          "fullType": "complexType.UnitAndValue<double>",
          "readOnly": true,
          "type": "complexType.UnitAndValue<double>"
        },
        "chunks": {
          "canBeNull": true,
          "description": "Raid volume chunks",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "label": {
          "canBeNull": true,
          "description": "Raid volume label",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "letter": {
          "canBeNull": true,
          "description": "Raid volume letter",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "phys": {
          "canBeNull": true,
          "description": "Raid volume phys",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "status": {
          "canBeNull": true,
          "description": "Raid volume status",
          "fullType": "dedicated.server.RtmRaidStatusEnum",
          "readOnly": true,
          "type": "dedicated.server.RtmRaidStatusEnum"
        },
        "stripe": {
          "canBeNull": true,
          "description": "Raid volume stripe",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "syncprogress": {
          "canBeNull": true,
          "description": "Raid volume synchronization progress",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "type": {
          "canBeNull": true,
          "description": "Raid volume type",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "volume": {
          "canBeNull": true,
          "description": "Raid volume name",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        }
      }
    },
    "dedicated.server.RtmRaidVolumePort": {
      "description": "Server raid volume port informations",
      "id": "RtmRaidVolumePort",
      "namespace": "dedicated.server",
      "properties": {
        "capacity": {
          "canBeNull": true,
          "description": "Port capacity",
          "fullType": "complexType.UnitAndValue<double>",
          "readOnly": true,
          "type": "complexType.UnitAndValue<double>"
        },
        "disk": {
          "canBeNull": true,
          "description": "Port disk",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "model": {
          "canBeNull": true,
          "description": "Port model name",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "port": {
          "canBeNull": true,
          "description": "Raid volume port",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "serial": {
          "canBeNull": true,
          "description": "Serial of this port",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "status": {
          "canBeNull": true,
          "description": "Status of this port",
          "fullType": "dedicated.server.RtmRaidStatusEnum",
          "readOnly": true,
          "type": "dedicated.server.RtmRaidStatusEnum"
        },
        "syncprogress": {
          "canBeNull": true,
          "description": "Raid port synchronization progress",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        }
      }
    },
    "dedicated.server.StateEnum": {
      "description": "All states a Dedicated can in",
      "enum": [
        "error",
        "hacked",
        "hackedBlocked",
        "ok"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.SupportLevelEnum": {
      "description": "distincts support level",
      "enum": [
        "critical",
        "fastpath",
        "gs",
        "pro"
      ],
      "enumType": "string",
      "id": "SupportLevelEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.SupportLevelOrderable": {
      "description": "A structure describing informations support level orderable for this dedicated server",
      "id": "SupportLevelOrderable",
      "namespace": "dedicated.server",
      "properties": {
        "levels": {
          "canBeNull": true,
          "description": "Support level  orderable",
          "type": "dedicated.server.SupportLevelOrderableEnum[]"
        },
        "orderable": {
          "canBeNull": false,
          "description": "Is a support level is orderable for this server",
          "type": "boolean"
        }
      }
    },
    "dedicated.server.SupportLevelOrderableEnum": {
      "description": "distincts support level",
      "enum": [
        "critical",
        "fastpath",
        "gs"
      ],
      "enumType": "string",
      "id": "SupportLevelOrderableEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.SupportReplaceHddInfo": {
      "description": "Hdd replace support request details. ",
      "id": "SupportReplaceHddInfo",
      "namespace": "dedicated.server",
      "properties": {
        "disk_serial": {
          "canBeNull": false,
          "description": "Disk serial number",
          "type": "string"
        },
        "slot_id": {
          "canBeNull": true,
          "description": "Disk slotId (if any)",
          "type": "long"
        }
      }
    },
    "dedicated.server.SwitchingDetails": {
      "description": "A structure describing switching informations about this dedicated server",
      "id": "SwitchingDetails",
      "namespace": "dedicated.server",
      "properties": {
        "name": {
          "canBeNull": true,
          "description": "Switch name",
          "type": "string"
        }
      }
    },
    "dedicated.server.Task": {
      "description": "Server tasks",
      "id": "Task",
      "namespace": "dedicated.server",
      "properties": {
        "comment": {
          "canBeNull": true,
          "description": "Details of this task",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "doneDate": {
          "canBeNull": true,
          "description": "Completion date",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Function name",
          "fullType": "dedicated.TaskFunctionEnum",
          "readOnly": true,
          "type": "dedicated.TaskFunctionEnum"
        },
        "lastUpdate": {
          "canBeNull": true,
          "description": "last update",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Task Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "dedicated.TaskStatusEnum",
          "readOnly": true,
          "type": "dedicated.TaskStatusEnum"
        },
        "taskId": {
          "canBeNull": false,
          "description": "the id of the task",
          "fullType": "long",
          "readOnly": true,
          "type": "long"
        }
      }
    },
    "dedicated.server.TemplateCaps": {
      "description": "Miscellaneous template capabilities regarding the server.",
      "id": "TemplateCaps",
      "namespace": "dedicated.server",
      "properties": {
        "hybridSupport": {
          "canBeNull": false,
          "description": "This boolean tells if the template supports hybrid install for the considered server.",
          "type": "boolean"
        }
      }
    },
    "dedicated.server.TrafficDetails": {
      "description": "A structure describing traffic informations about this dedicated server",
      "id": "TrafficDetails",
      "namespace": "dedicated.server",
      "properties": {
        "inputQuotaSize": {
          "canBeNull": true,
          "description": "Monthly input traffic quota allowed",
          "type": "complexType.UnitAndValue<long>"
        },
        "inputQuotaUsed": {
          "canBeNull": true,
          "description": "Monthly input traffic consumed this month",
          "type": "complexType.UnitAndValue<long>"
        },
        "isThrottled": {
          "canBeNull": true,
          "description": "Is bandwidth throttleted for being over quota",
          "type": "boolean"
        },
        "outputQuotaSize": {
          "canBeNull": true,
          "description": "Monthly output traffic quota allowed",
          "type": "complexType.UnitAndValue<long>"
        },
        "outputQuotaUsed": {
          "canBeNull": true,
          "description": "Monthly output traffic consumed this month",
          "type": "complexType.UnitAndValue<long>"
        },
        "resetQuotaDate": {
          "canBeNull": true,
          "description": "Next reset quota date for traffic counter",
          "type": "string"
        }
      }
    },
    "dedicated.server.backup.BackupOffer": {
      "description": "Backup cloud offer description for a dedicated server",
      "id": "BackupOffer",
      "namespace": "dedicated.server.backup",
      "properties": {
        "maxArchive": {
          "canBeNull": true,
          "description": "Archive container max size.",
          "type": "complexType.UnitAndValue<long>"
        },
        "maxBandwidthArchive": {
          "canBeNull": true,
          "description": "Archive volume r/w bandwidth limit: read/write volume offered per month on the container.",
          "type": "complexType.UnitAndValue<long>"
        },
        "maxBandwidthStorage": {
          "canBeNull": true,
          "description": "Storage volume r/w bandwidth limit: read/write volume offered per month on the container.",
          "type": "complexType.UnitAndValue<long>"
        },
        "maxStorage": {
          "canBeNull": true,
          "description": "Storage container max size.",
          "type": "complexType.UnitAndValue<long>"
        }
      }
    },
    "dedicated.server.netbootOption": {
      "description": "Available boot options",
      "id": "netbootOption",
      "namespace": "dedicated.server",
      "properties": {
        "option": {
          "canBeNull": false,
          "description": "The option of this boot",
          "fullType": "dedicated.server.BootOptionEnum",
          "readOnly": true,
          "type": "dedicated.server.BootOptionEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "the value of this option",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        }
      }
    },
    "dedicated.virtualNetworkInterface.VirtualNetworkInterface": {
      "description": "Your VirtualNetworkInterface",
      "id": "VirtualNetworkInterface",
      "namespace": "dedicated.virtualNetworkInterface",
      "properties": {
        "enabled": {
          "canBeNull": false,
          "description": "VirtualNetworkInterface activation state",
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean"
        },
        "mode": {
          "canBeNull": false,
          "description": "VirtualNetworkInterface mode",
          "fullType": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum",
          "readOnly": false,
          "type": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "User defined VirtualNetworkInterface name",
          "fullType": "string",
          "readOnly": false,
          "type": "string"
        },
        "networkInterfaceController": {
          "canBeNull": false,
          "description": "NetworkInterfaceControllers bound to this VirtualNetworkInterface",
          "fullType": "macAddress[]",
          "readOnly": true,
          "type": "macAddress[]"
        },
        "serverName": {
          "canBeNull": false,
          "description": "Server bound to this VirtualNetworkInterface",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "uuid": {
          "canBeNull": false,
          "description": "VirtualNetworkInterface unique id",
          "fullType": "uuid",
          "readOnly": true,
          "type": "uuid"
        },
        "vrack": {
          "canBeNull": true,
          "description": "vRack name",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        }
      }
    },
    "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum": {
      "description": "Available VirtualNetworkInterface modes",
      "enum": [
        "public",
        "vrack",
        "vrack_aggregation"
      ],
      "enumType": "string",
      "id": "VirtualNetworkInterfaceModeEnum",
      "namespace": "dedicated.virtualNetworkInterface"
    },
    "secondaryDns.SecondaryDNS": {
      "description": "Secondary dns infos",
      "id": "SecondaryDNS",
      "namespace": "secondaryDns",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime"
        },
        "dns": {
          "canBeNull": false,
          "description": "secondary dns server",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "description": "domain on slave server",
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "ipMaster": {
          "canBeNull": false,
          "description": "master ip",
          "fullType": "ipv4",
          "readOnly": false,
          "type": "ipv4"
        }
      }
    },
    "secondaryDns.SecondaryDNSCheckField": {
      "description": "A structure describing informations about secondary dns check field",
      "id": "SecondaryDNSCheckField",
      "namespace": "secondaryDns",
      "properties": {
        "fieldType": {
          "canBeNull": false,
          "description": "The field type to add on your DNS zone for this subDomain",
          "type": "zone.NamedResolutionFieldTypeEnum"
        },
        "fieldValue": {
          "canBeNull": false,
          "description": "The field value to add on your DNS zone for this subDomain",
          "type": "string"
        },
        "subDomain": {
          "canBeNull": false,
          "description": "The subdomain to add on your DNS zone for the domain",
          "type": "string"
        }
      }
    },
    "secondaryDns.SecondaryDNSNameServer": {
      "description": "A structure describing informations about available nameserver for secondary dns ",
      "id": "SecondaryDNSNameServer",
      "namespace": "secondaryDns",
      "properties": {
        "hostname": {
          "canBeNull": false,
          "description": "the name server",
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "description": null,
          "type": "ipv4"
        },
        "ipv6": {
          "canBeNull": true,
          "description": null,
          "type": "ipv6"
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
          "type": "boolean"
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "The service will be deleted at expiration",
          "type": "boolean"
        },
        "forced": {
          "canBeNull": false,
          "description": "The service forced to be renewed",
          "type": "boolean"
        },
        "manualPayment": {
          "canBeNull": true,
          "description": "The service needs to be manually renewed and paid",
          "type": "boolean"
        },
        "period": {
          "canBeNull": true,
          "description": "period of renew in month",
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
      "description": "",
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
          "type": "boolean"
        },
        "contactAdmin": {
          "canBeNull": false,
          "description": null,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "type": "string"
        },
        "contactBilling": {
          "canBeNull": false,
          "description": null,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "type": "string"
        },
        "contactTech": {
          "canBeNull": false,
          "description": null,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "type": "string"
        },
        "creation": {
          "canBeNull": false,
          "description": null,
          "fullType": "date",
          "readOnly": true,
          "type": "date"
        },
        "domain": {
          "canBeNull": false,
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "type": "string"
        },
        "engagedUpTo": {
          "canBeNull": true,
          "description": null,
          "fullType": "date",
          "readOnly": true,
          "type": "date"
        },
        "expiration": {
          "canBeNull": false,
          "description": null,
          "fullType": "date",
          "readOnly": true,
          "type": "date"
        },
        "possibleRenewPeriod": {
          "canBeNull": true,
          "description": "All the possible renew period of your service in month",
          "fullType": "long[]",
          "readOnly": true,
          "type": "long[]"
        },
        "renew": {
          "canBeNull": true,
          "description": "Way of handling the renew",
          "fullType": "service.RenewType",
          "readOnly": false,
          "type": "service.RenewType"
        },
        "renewalType": {
          "canBeNull": false,
          "description": null,
          "fullType": "service.RenewalTypeEnum",
          "readOnly": true,
          "type": "service.RenewalTypeEnum"
        },
        "serviceId": {
          "canBeNull": false,
          "description": null,
          "fullType": "coreTypes.ServiceId:long",
          "readOnly": true,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": null,
          "fullType": "service.StateEnum",
          "readOnly": true,
          "type": "service.StateEnum"
        }
      }
    },
    "support.NewMessageInfo": {
      "description": "Newly created support identifiers",
      "id": "NewMessageInfo",
      "namespace": "support",
      "properties": {
        "messageId": {
          "canBeNull": false,
          "description": "Message identifier",
          "type": "long"
        },
        "ticketId": {
          "canBeNull": false,
          "description": "Ticket identifier",
          "type": "long"
        },
        "ticketNumber": {
          "canBeNull": false,
          "description": "Ticket external number",
          "type": "long"
        }
      }
    },
    "zone.NamedResolutionFieldTypeEnum": {
      "description": "Resource record fieldType",
      "enum": [
        "A",
        "AAAA",
        "CAA",
        "CNAME",
        "DKIM",
        "DMARC",
        "LOC",
        "MX",
        "NAPTR",
        "NS",
        "PTR",
        "SPF",
        "SRV",
        "SSHFP",
        "TLSA",
        "TXT"
      ],
      "enumType": "string",
      "id": "NamedResolutionFieldTypeEnum",
      "namespace": "zone"
    }
  },
  "resourcePath": "/dedicated/server"
}