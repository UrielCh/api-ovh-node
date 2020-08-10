import {Schema} from '../../src/schema';

export const schema: Schema = {
  "models": {
    "dedicated.server.SupportsUEFIEnum": {
      "namespace": "dedicated.server",
      "enum": [
        "no",
        "only",
        "yes"
      ],
      "enumType": "string",
      "description": "supports UEFI setup",
      "id": "SupportsUEFIEnum"
    },
    "dedicated.installationTemplate.templatePartitioningSchemes": {
      "properties": {
        "priority": {
          "fullType": "long",
          "readOnly": false,
          "canBeNull": false,
          "type": "long",
          "description": "on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications)"
        },
        "name": {
          "description": "name of this partitioning scheme",
          "type": "string",
          "readOnly": false,
          "fullType": "string",
          "canBeNull": false
        }
      },
      "description": "Partitioning schemes available on this template",
      "namespace": "dedicated.installationTemplate",
      "id": "templatePartitioningSchemes"
    },
    "dedicated.TemplateOsUsageEnum": {
      "description": "Os usage definition",
      "enumType": "string",
      "enum": [
        "basic",
        "customer",
        "hosting",
        "other",
        "readyToUse",
        "virtualisation"
      ],
      "namespace": "dedicated",
      "id": "TemplateOsUsageEnum"
    },
    "complexType.UnitAndValue<T>": {
      "generics": [
        "T"
      ],
      "id": "UnitAndValue",
      "properties": {
        "value": {
          "canBeNull": false,
          "type": "T",
          "description": null
        },
        "unit": {
          "type": "string",
          "description": null,
          "canBeNull": false
        }
      },
      "namespace": "complexType",
      "description": "A numeric value tagged with its unit"
    },
    "dedicated.server.PartitionRaidEnum": {
      "id": "PartitionRaidEnum",
      "namespace": "dedicated.server",
      "enum": [
        "0",
        "1",
        "10",
        "5",
        "6"
      ],
      "enumType": "string",
      "description": "partition raid type"
    },
    "dedicated.server.BitFormatEnum": {
      "id": "BitFormatEnum",
      "description": "Available os bit format",
      "enumType": "long",
      "namespace": "dedicated.server",
      "enum": [
        "32",
        "64"
      ]
    },
    "dedicated.TemplatePartitionTypeEnum": {
      "description": "partition type",
      "enumType": "string",
      "enum": [
        "logical",
        "lv",
        "primary"
      ],
      "namespace": "dedicated",
      "id": "TemplatePartitionTypeEnum"
    },
    "dedicated.installationTemplate.hardwareRaid": {
      "id": "hardwareRaid",
      "description": "Hardware RAID defined in this partitioning scheme",
      "namespace": "dedicated.installationTemplate",
      "properties": {
        "step": {
          "type": "long",
          "description": "Specifies the creation order of the hardware RAID",
          "fullType": "long",
          "readOnly": false,
          "canBeNull": false
        },
        "name": {
          "canBeNull": false,
          "readOnly": false,
          "fullType": "string",
          "type": "string",
          "description": "Hardware RAID name"
        },
        "mode": {
          "canBeNull": false,
          "readOnly": false,
          "fullType": "dedicated.TemplateOsHardwareRaidEnum",
          "type": "dedicated.TemplateOsHardwareRaidEnum",
          "description": "RAID mode"
        },
        "disks": {
          "readOnly": false,
          "canBeNull": false,
          "fullType": "string[]",
          "description": "Disk list",
          "type": "string[]"
        }
      }
    },
    "dedicated.TemplateOsTypeEnum": {
      "id": "TemplateOsTypeEnum",
      "enum": [
        "bsd",
        "linux",
        "solaris",
        "windows"
      ],
      "namespace": "dedicated",
      "description": "Os type",
      "enumType": "string"
    },
    "dedicated.installationTemplate.Templates": {
      "properties": {
        "lvmReady": {
          "type": "boolean",
          "description": "This distribution supports Logical Volumes (Linux LVM)",
          "fullType": "boolean",
          "readOnly": true,
          "canBeNull": true
        },
        "supportsSqlServer": {
          "readOnly": true,
          "fullType": "boolean",
          "canBeNull": true,
          "type": "boolean",
          "description": "This distribution supports the microsoft SQL server"
        },
        "filesystems": {
          "type": "dedicated.TemplateOsFileSystemEnum[]",
          "description": "list of all filesystems  available for this template",
          "fullType": "dedicated.TemplateOsFileSystemEnum[]",
          "readOnly": true,
          "canBeNull": false
        },
        "availableLanguages": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "dedicated.TemplateOsLanguageEnum[]",
          "type": "dedicated.TemplateOsLanguageEnum[]",
          "description": "list of all language available for this template"
        },
        "templateName": {
          "type": "string",
          "description": "This template name",
          "fullType": "string",
          "readOnly": false,
          "canBeNull": false
        },
        "category": {
          "description": "category of this template (informative only)",
          "type": "dedicated.TemplateOsUsageEnum",
          "fullType": "dedicated.TemplateOsUsageEnum",
          "readOnly": true,
          "canBeNull": false
        },
        "family": {
          "description": "this template family type",
          "type": "dedicated.TemplateOsTypeEnum",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "dedicated.TemplateOsTypeEnum"
        },
        "supportsDistributionKernel": {
          "description": "This distribution supports installation using the distribution's native kernel instead of the recommended OVH kernel",
          "type": "boolean",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "boolean"
        },
        "supportsGptLabel": {
          "type": "boolean",
          "description": "This distribution supports the GUID Partition Table (GPT), providing up to 128 partitions that can have more than 2 TB",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "boolean"
        },
        "description": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "description": "information about this template",
          "type": "string"
        },
        "supportsUEFI": {
          "readOnly": true,
          "fullType": "dedicated.server.SupportsUEFIEnum",
          "canBeNull": true,
          "type": "dedicated.server.SupportsUEFIEnum",
          "description": "This distribution supports UEFI setup"
        },
        "bitFormat": {
          "readOnly": true,
          "fullType": "dedicated.server.BitFormatEnum",
          "canBeNull": false,
          "type": "dedicated.server.BitFormatEnum",
          "description": "this template  bit format"
        },
        "beta": {
          "canBeNull": true,
          "readOnly": true,
          "fullType": "boolean",
          "description": "This distribution is new, and although tested and functional, may still display odd behaviour",
          "type": "boolean"
        },
        "customization": {
          "description": "Customizable template properties ",
          "type": "dedicated.TemplateOsProperties",
          "fullType": "dedicated.TemplateOsProperties",
          "readOnly": false,
          "canBeNull": true
        },
        "distribution": {
          "type": "string",
          "description": "the distribution this template is based on",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string"
        },
        "defaultLanguage": {
          "canBeNull": false,
          "readOnly": false,
          "fullType": "dedicated.TemplateOsLanguageEnum",
          "description": "the default language of this template",
          "type": "dedicated.TemplateOsLanguageEnum"
        },
        "lastModification": {
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": true,
          "description": "Date of last modification of the base image",
          "type": "datetime"
        },
        "hardRaidConfiguration": {
          "canBeNull": true,
          "readOnly": true,
          "fullType": "boolean",
          "description": "This distribution supports hardware raid configuration through the OVH API",
          "type": "boolean"
        },
        "supportsRTM": {
          "readOnly": true,
          "fullType": "boolean",
          "canBeNull": false,
          "description": "This distribution supports RTM software",
          "type": "boolean"
        },
        "deprecated": {
          "readOnly": true,
          "fullType": "boolean",
          "canBeNull": true,
          "description": "is this distribution deprecated",
          "type": "boolean"
        }
      },
      "namespace": "dedicated.installationTemplate",
      "description": "Available installation templates",
      "id": "Templates"
    },
    "dedicated.TemplateOsProperties": {
      "id": "TemplateOsProperties",
      "namespace": "dedicated",
      "description": "A structure describing properties customizables about this dedicated installation template",
      "properties": {
        "customHostname": {
          "type": "string",
          "description": "Set up the server using the provided hostname instead of the default hostname",
          "canBeNull": true
        },
        "postInstallationScriptReturn": {
          "description": "indicate the string returned by your postinstall customisation script on successful execution. Advice: your script should return a unique validation string in case of succes. A good example is \"loh1Xee7eo OK OK OK UGh8Ang1Gu",
          "type": "string",
          "canBeNull": true
        },
        "rating": {
          "canBeNull": true,
          "type": "long",
          "description": ""
        },
        "sshKeyName": {
          "canBeNull": true,
          "type": "string",
          "description": "Name of the ssh key that should be installed. Password login will be disabled"
        },
        "changeLog": {
          "type": "text",
          "description": "Template change log details",
          "canBeNull": true
        },
        "useDistributionKernel": {
          "type": "boolean",
          "description": "Use the distribution's native kernel instead of the recommended OVH Kernel",
          "canBeNull": true
        },
        "postInstallationScriptLink": {
          "type": "string",
          "description": "Indicate the URL where your postinstall customisation script is located",
          "canBeNull": true
        }
      }
    },
    "dedicated.installationTemplate.templatePartitions": {
      "properties": {
        "filesystem": {
          "readOnly": false,
          "fullType": "dedicated.TemplateOsFileSystemEnum",
          "canBeNull": false,
          "description": "Partition filesytem",
          "type": "dedicated.TemplateOsFileSystemEnum"
        },
        "type": {
          "canBeNull": false,
          "readOnly": false,
          "fullType": "dedicated.TemplatePartitionTypeEnum",
          "type": "dedicated.TemplatePartitionTypeEnum",
          "description": null
        },
        "size": {
          "canBeNull": false,
          "readOnly": false,
          "fullType": "complexType.UnitAndValue<long>",
          "type": "complexType.UnitAndValue<long>",
          "description": "size of partition in Mb, 0 => rest of the space"
        },
        "volumeName": {
          "canBeNull": true,
          "readOnly": false,
          "fullType": "string",
          "description": "The volume name needed for proxmox distribution",
          "type": "string"
        },
        "mountpoint": {
          "description": "partition mount point",
          "type": "string",
          "fullType": "string",
          "readOnly": false,
          "canBeNull": false
        },
        "order": {
          "description": "specifies the creation order of the partition on the disk",
          "type": "long",
          "fullType": "long",
          "readOnly": false,
          "canBeNull": false
        },
        "raid": {
          "type": "dedicated.server.PartitionRaidEnum",
          "description": "raid partition type",
          "readOnly": false,
          "canBeNull": true,
          "fullType": "dedicated.server.PartitionRaidEnum"
        }
      },
      "description": " Partitions defined in this partitioning scheme",
      "namespace": "dedicated.installationTemplate",
      "id": "templatePartitions"
    },
    "dedicated.TemplateOsHardwareRaidEnum": {
      "description": "Hardware RAID enum",
      "enumType": "string",
      "namespace": "dedicated",
      "enum": [
        "raid0",
        "raid1",
        "raid10",
        "raid5",
        "raid50",
        "raid6",
        "raid60"
      ],
      "id": "TemplateOsHardwareRaidEnum"
    },
    "dedicated.TemplateOsLanguageEnum": {
      "id": "TemplateOsLanguageEnum",
      "enum": [
        "ar",
        "bg",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "es",
        "et",
        "fi",
        "fr",
        "he",
        "hr",
        "hu",
        "it",
        "ja",
        "ko",
        "lt",
        "lv",
        "nb",
        "nl",
        "no",
        "pl",
        "pt",
        "ro",
        "ru",
        "sk",
        "sl",
        "sr",
        "sv",
        "th",
        "tr",
        "tu",
        "uk",
        "zh-Hans-CN",
        "zh-Hans-HK"
      ],
      "namespace": "dedicated",
      "enumType": "string",
      "description": "all language available"
    },
    "dedicated.TemplateOsFileSystemEnum": {
      "id": "TemplateOsFileSystemEnum",
      "namespace": "dedicated",
      "enum": [
        "btrfs",
        "ext3",
        "ext4",
        "ntfs",
        "reiserfs",
        "swap",
        "ufs",
        "xfs",
        "zfs"
      ],
      "enumType": "string",
      "description": "Filesystems available"
    }
  },
  "resourcePath": "/dedicated/installationTemplate",
  "apiVersion": "1.0",
  "basePath": "https://ca.api.soyoustart.com/1.0",
  "apis": [
    {
      "description": "List the dedicated.installationTemplate.Templates objects",
      "operations": [
        {
          "parameters": [],
          "responseFullType": "string[]",
          "noAuthentication": true,
          "httpMethod": "GET",
          "description": "OVH operating system installation templates",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/installationTemplate"
    },
    {
      "description": "List the dedicated.installationTemplate.templatePartitioningSchemes objects",
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme",
      "operations": [
        {
          "httpMethod": "GET",
          "resellerOnly": false,
          "description": "Partitioning schemes available on this template",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "responseFullType": "string[]",
          "parameters": [
            {
              "fullType": "string",
              "paramType": "path",
              "name": "templateName",
              "dataType": "string",
              "required": true,
              "description": "This template name"
            }
          ],
          "noAuthentication": false
        }
      ]
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "description": "This template name",
              "fullType": "string",
              "paramType": "path",
              "name": "templateName",
              "dataType": "string"
            },
            {
              "fullType": "string",
              "paramType": "path",
              "name": "schemeName",
              "dataType": "string",
              "required": true,
              "description": "name of this partitioning scheme"
            }
          ],
          "responseFullType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "resellerOnly": false,
          "description": "Hardware RAIDs defined in this partitioning scheme",
          "httpMethod": "GET"
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid",
      "description": "List the dedicated.installationTemplate.hardwareRaid objects"
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "name": "templateName",
              "paramType": "path",
              "fullType": "string",
              "description": "This template name",
              "required": true
            },
            {
              "required": true,
              "description": "name of this partitioning scheme",
              "fullType": "string",
              "paramType": "path",
              "name": "schemeName",
              "dataType": "string"
            },
            {
              "description": "Hardware RAID name",
              "required": true,
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string"
            }
          ],
          "responseFullType": "dedicated.installationTemplate.hardwareRaid",
          "resellerOnly": false,
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseType": "dedicated.installationTemplate.hardwareRaid",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}",
      "description": "Hardware RAID defined in this partitioning scheme"
    },
    {
      "description": "Partitioning schemes available on this template",
      "operations": [
        {
          "parameters": [
            {
              "required": true,
              "description": "This template name",
              "fullType": "string",
              "paramType": "path",
              "name": "templateName",
              "dataType": "string"
            },
            {
              "fullType": "string",
              "paramType": "path",
              "name": "schemeName",
              "dataType": "string",
              "required": true,
              "description": "name of this partitioning scheme"
            }
          ],
          "responseFullType": "dedicated.installationTemplate.templatePartitioningSchemes",
          "noAuthentication": false,
          "httpMethod": "GET",
          "resellerOnly": false,
          "description": "Get this object properties",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.installationTemplate.templatePartitioningSchemes"
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseType": "dedicated.installationTemplate.templatePartitions",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "description": "This template name",
              "fullType": "string",
              "paramType": "path",
              "name": "templateName",
              "dataType": "string"
            },
            {
              "description": "name of this partitioning scheme",
              "required": true,
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string"
            },
            {
              "description": "partition mount point",
              "required": true,
              "name": "mountpoint",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string"
            }
          ],
          "responseFullType": "dedicated.installationTemplate.templatePartitions"
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}",
      "description": " Partitions defined in this partitioning scheme"
    },
    {
      "description": "List the dedicated.installationTemplate.templatePartitions objects",
      "operations": [
        {
          "description": "Partitions defined in this partitioning scheme",
          "resellerOnly": false,
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "description": "This template name",
              "fullType": "string",
              "paramType": "path",
              "dataType": "string",
              "name": "templateName"
            },
            {
              "dataType": "string",
              "name": "schemeName",
              "paramType": "path",
              "fullType": "string",
              "description": "name of this partitioning scheme",
              "required": true
            }
          ],
          "responseFullType": "string[]"
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition"
    },
    {
      "path": "/dedicated/installationTemplate/{templateName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.installationTemplate.Templates",
          "description": "Get this object properties",
          "resellerOnly": false,
          "httpMethod": "GET",
          "noAuthentication": true,
          "responseFullType": "dedicated.installationTemplate.Templates",
          "parameters": [
            {
              "fullType": "string",
              "paramType": "path",
              "name": "templateName",
              "dataType": "string",
              "required": true,
              "description": "This template name"
            }
          ]
        }
      ],
      "description": "Available installation templates"
    }
  ]
}