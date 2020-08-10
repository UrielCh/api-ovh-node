import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1.0",
  "basePath": "https://ca.api.kimsufi.com/1.0",
  "models": {
    "dedicated.TemplateOsUsageEnum": {
      "enum": [
        "basic",
        "customer",
        "hosting",
        "other",
        "readyToUse",
        "virtualisation"
      ],
      "id": "TemplateOsUsageEnum",
      "description": "Os usage definition",
      "namespace": "dedicated",
      "enumType": "string"
    },
    "dedicated.TemplateOsFileSystemEnum": {
      "id": "TemplateOsFileSystemEnum",
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
      "namespace": "dedicated",
      "description": "Filesystems available",
      "enumType": "string"
    },
    "dedicated.server.BitFormatEnum": {
      "enum": [
        "32",
        "64"
      ],
      "id": "BitFormatEnum",
      "enumType": "long",
      "namespace": "dedicated.server",
      "description": "Available os bit format"
    },
    "dedicated.TemplateOsProperties": {
      "properties": {
        "sshKeyName": {
          "description": "Name of the ssh key that should be installed. Password login will be disabled",
          "canBeNull": true,
          "type": "string"
        },
        "customHostname": {
          "description": "Set up the server using the provided hostname instead of the default hostname",
          "type": "string",
          "canBeNull": true
        },
        "postInstallationScriptLink": {
          "description": "Indicate the URL where your postinstall customisation script is located",
          "canBeNull": true,
          "type": "string"
        },
        "useDistributionKernel": {
          "description": "Use the distribution's native kernel instead of the recommended OVH Kernel",
          "canBeNull": true,
          "type": "boolean"
        },
        "postInstallationScriptReturn": {
          "canBeNull": true,
          "type": "string",
          "description": "indicate the string returned by your postinstall customisation script on successful execution. Advice: your script should return a unique validation string in case of succes. A good example is \"loh1Xee7eo OK OK OK UGh8Ang1Gu"
        },
        "rating": {
          "canBeNull": true,
          "type": "long",
          "description": ""
        },
        "changeLog": {
          "type": "text",
          "canBeNull": true,
          "description": "Template change log details"
        }
      },
      "id": "TemplateOsProperties",
      "description": "A structure describing properties customizables about this dedicated installation template",
      "namespace": "dedicated"
    },
    "dedicated.installationTemplate.Templates": {
      "namespace": "dedicated.installationTemplate",
      "description": "Available installation templates",
      "id": "Templates",
      "properties": {
        "availableLanguages": {
          "canBeNull": false,
          "type": "dedicated.TemplateOsLanguageEnum[]",
          "readOnly": true,
          "description": "list of all language available for this template",
          "fullType": "dedicated.TemplateOsLanguageEnum[]"
        },
        "distribution": {
          "fullType": "string",
          "description": "the distribution this template is based on",
          "type": "string",
          "readOnly": true,
          "canBeNull": false
        },
        "family": {
          "type": "dedicated.TemplateOsTypeEnum",
          "readOnly": true,
          "canBeNull": false,
          "description": "this template family type",
          "fullType": "dedicated.TemplateOsTypeEnum"
        },
        "description": {
          "type": "string",
          "readOnly": true,
          "canBeNull": false,
          "description": "information about this template",
          "fullType": "string"
        },
        "lastModification": {
          "description": "Date of last modification of the base image",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "type": "datetime"
        },
        "supportsSqlServer": {
          "description": "This distribution supports the microsoft SQL server",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "type": "boolean"
        },
        "templateName": {
          "type": "string",
          "readOnly": false,
          "canBeNull": false,
          "description": "This template name",
          "fullType": "string"
        },
        "supportsRTM": {
          "readOnly": true,
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean",
          "description": "This distribution supports RTM software"
        },
        "lvmReady": {
          "description": "This distribution supports Logical Volumes (Linux LVM)",
          "fullType": "boolean",
          "readOnly": true,
          "type": "boolean",
          "canBeNull": true
        },
        "filesystems": {
          "fullType": "dedicated.TemplateOsFileSystemEnum[]",
          "description": "list of all filesystems  available for this template",
          "type": "dedicated.TemplateOsFileSystemEnum[]",
          "readOnly": true,
          "canBeNull": false
        },
        "deprecated": {
          "fullType": "boolean",
          "description": "is this distribution deprecated",
          "type": "boolean",
          "readOnly": true,
          "canBeNull": true
        },
        "supportsDistributionKernel": {
          "fullType": "boolean",
          "description": "This distribution supports installation using the distribution's native kernel instead of the recommended OVH kernel",
          "canBeNull": true,
          "type": "boolean",
          "readOnly": true
        },
        "customization": {
          "description": "Customizable template properties ",
          "fullType": "dedicated.TemplateOsProperties",
          "readOnly": false,
          "type": "dedicated.TemplateOsProperties",
          "canBeNull": true
        },
        "hardRaidConfiguration": {
          "type": "boolean",
          "readOnly": true,
          "canBeNull": true,
          "description": "This distribution supports hardware raid configuration through the OVH API",
          "fullType": "boolean"
        },
        "beta": {
          "fullType": "boolean",
          "description": "This distribution is new, and although tested and functional, may still display odd behaviour",
          "type": "boolean",
          "readOnly": true,
          "canBeNull": true
        },
        "category": {
          "description": "category of this template (informative only)",
          "fullType": "dedicated.TemplateOsUsageEnum",
          "canBeNull": false,
          "readOnly": true,
          "type": "dedicated.TemplateOsUsageEnum"
        },
        "defaultLanguage": {
          "type": "dedicated.TemplateOsLanguageEnum",
          "readOnly": false,
          "canBeNull": false,
          "description": "the default language of this template",
          "fullType": "dedicated.TemplateOsLanguageEnum"
        },
        "supportsGptLabel": {
          "type": "boolean",
          "readOnly": true,
          "canBeNull": true,
          "description": "This distribution supports the GUID Partition Table (GPT), providing up to 128 partitions that can have more than 2 TB",
          "fullType": "boolean"
        },
        "bitFormat": {
          "description": "this template  bit format",
          "fullType": "dedicated.server.BitFormatEnum",
          "canBeNull": false,
          "readOnly": true,
          "type": "dedicated.server.BitFormatEnum"
        },
        "supportsUEFI": {
          "type": "dedicated.server.SupportsUEFIEnum",
          "readOnly": true,
          "canBeNull": true,
          "description": "This distribution supports UEFI setup",
          "fullType": "dedicated.server.SupportsUEFIEnum"
        }
      }
    },
    "dedicated.installationTemplate.templatePartitions": {
      "namespace": "dedicated.installationTemplate",
      "description": " Partitions defined in this partitioning scheme",
      "id": "templatePartitions",
      "properties": {
        "raid": {
          "fullType": "dedicated.server.PartitionRaidEnum",
          "description": "raid partition type",
          "canBeNull": true,
          "readOnly": false,
          "type": "dedicated.server.PartitionRaidEnum"
        },
        "size": {
          "type": "complexType.UnitAndValue<long>",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "complexType.UnitAndValue<long>",
          "description": "size of partition in Mb, 0 => rest of the space"
        },
        "filesystem": {
          "fullType": "dedicated.TemplateOsFileSystemEnum",
          "description": "Partition filesytem",
          "canBeNull": false,
          "readOnly": false,
          "type": "dedicated.TemplateOsFileSystemEnum"
        },
        "order": {
          "fullType": "long",
          "description": "specifies the creation order of the partition on the disk",
          "canBeNull": false,
          "readOnly": false,
          "type": "long"
        },
        "mountpoint": {
          "fullType": "string",
          "description": "partition mount point",
          "readOnly": false,
          "type": "string",
          "canBeNull": false
        },
        "type": {
          "description": null,
          "fullType": "dedicated.TemplatePartitionTypeEnum",
          "type": "dedicated.TemplatePartitionTypeEnum",
          "readOnly": false,
          "canBeNull": false
        },
        "volumeName": {
          "description": "The volume name needed for proxmox distribution",
          "fullType": "string",
          "type": "string",
          "readOnly": false,
          "canBeNull": true
        }
      }
    },
    "dedicated.installationTemplate.hardwareRaid": {
      "id": "hardwareRaid",
      "properties": {
        "name": {
          "type": "string",
          "readOnly": false,
          "canBeNull": false,
          "description": "Hardware RAID name",
          "fullType": "string"
        },
        "step": {
          "fullType": "long",
          "description": "Specifies the creation order of the hardware RAID",
          "type": "long",
          "readOnly": false,
          "canBeNull": false
        },
        "disks": {
          "fullType": "string[]",
          "description": "Disk list",
          "type": "string[]",
          "readOnly": false,
          "canBeNull": false
        },
        "mode": {
          "type": "dedicated.TemplateOsHardwareRaidEnum",
          "readOnly": false,
          "canBeNull": false,
          "description": "RAID mode",
          "fullType": "dedicated.TemplateOsHardwareRaidEnum"
        }
      },
      "description": "Hardware RAID defined in this partitioning scheme",
      "namespace": "dedicated.installationTemplate"
    },
    "dedicated.TemplatePartitionTypeEnum": {
      "enumType": "string",
      "namespace": "dedicated",
      "description": "partition type",
      "enum": [
        "logical",
        "lv",
        "primary"
      ],
      "id": "TemplatePartitionTypeEnum"
    },
    "dedicated.TemplateOsHardwareRaidEnum": {
      "enumType": "string",
      "description": "Hardware RAID enum",
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
    "dedicated.TemplateOsTypeEnum": {
      "enum": [
        "bsd",
        "linux",
        "solaris",
        "windows"
      ],
      "id": "TemplateOsTypeEnum",
      "description": "Os type",
      "namespace": "dedicated",
      "enumType": "string"
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
      "enumType": "string",
      "namespace": "dedicated",
      "description": "all language available"
    },
    "dedicated.server.PartitionRaidEnum": {
      "enumType": "string",
      "namespace": "dedicated.server",
      "description": "partition raid type",
      "enum": [
        "0",
        "1",
        "10",
        "5",
        "6"
      ],
      "id": "PartitionRaidEnum"
    },
    "dedicated.installationTemplate.templatePartitioningSchemes": {
      "properties": {
        "priority": {
          "description": "on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications)",
          "fullType": "long",
          "canBeNull": false,
          "type": "long",
          "readOnly": false
        },
        "name": {
          "fullType": "string",
          "description": "name of this partitioning scheme",
          "readOnly": false,
          "type": "string",
          "canBeNull": false
        }
      },
      "id": "templatePartitioningSchemes",
      "namespace": "dedicated.installationTemplate",
      "description": "Partitioning schemes available on this template"
    },
    "dedicated.server.SupportsUEFIEnum": {
      "enumType": "string",
      "namespace": "dedicated.server",
      "description": "supports UEFI setup",
      "enum": [
        "no",
        "only",
        "yes"
      ],
      "id": "SupportsUEFIEnum"
    },
    "complexType.UnitAndValue<T>": {
      "id": "UnitAndValue",
      "properties": {
        "unit": {
          "canBeNull": false,
          "type": "string",
          "description": null
        },
        "value": {
          "canBeNull": false,
          "type": "T",
          "description": null
        }
      },
      "generics": [
        "T"
      ],
      "namespace": "complexType",
      "description": "A numeric value tagged with its unit"
    }
  },
  "apis": [
    {
      "description": "List the dedicated.installationTemplate.Templates objects",
      "path": "/dedicated/installationTemplate",
      "operations": [
        {
          "httpMethod": "GET",
          "parameters": [],
          "noAuthentication": true,
          "responseFullType": "string[]",
          "responseType": "string[]",
          "description": "OVH operating system installation templates",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false
        }
      ]
    },
    {
      "description": "Available installation templates",
      "path": "/dedicated/installationTemplate/{templateName}",
      "operations": [
        {
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "templateName",
              "required": true,
              "fullType": "string",
              "paramType": "path",
              "description": "This template name",
              "dataType": "string"
            }
          ],
          "noAuthentication": true,
          "responseFullType": "dedicated.installationTemplate.Templates",
          "responseType": "dedicated.installationTemplate.Templates",
          "description": "Get this object properties",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "dedicated.installationTemplate.templatePartitioningSchemes",
          "responseType": "dedicated.installationTemplate.templatePartitioningSchemes",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Get this object properties",
          "resellerOnly": false,
          "httpMethod": "GET",
          "parameters": [
            {
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "description": "This template name",
              "required": true,
              "name": "templateName"
            },
            {
              "required": true,
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "description": "name of this partitioning scheme",
              "fullType": "string"
            }
          ],
          "noAuthentication": false
        }
      ],
      "description": "Partitioning schemes available on this template",
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}"
    },
    {
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition",
      "description": "List the dedicated.installationTemplate.templatePartitions objects",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "description": "This template name",
              "paramType": "path",
              "fullType": "string",
              "dataType": "string",
              "name": "templateName",
              "required": true
            },
            {
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "description": "name of this partitioning scheme",
              "required": true,
              "name": "schemeName"
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Partitions defined in this partitioning scheme",
          "resellerOnly": false,
          "responseType": "string[]",
          "responseFullType": "string[]"
        }
      ]
    },
    {
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}",
      "description": " Partitions defined in this partitioning scheme",
      "operations": [
        {
          "responseFullType": "dedicated.installationTemplate.templatePartitions",
          "responseType": "dedicated.installationTemplate.templatePartitions",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Get this object properties",
          "resellerOnly": false,
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "templateName",
              "required": true,
              "fullType": "string",
              "paramType": "path",
              "description": "This template name",
              "dataType": "string"
            },
            {
              "name": "schemeName",
              "required": true,
              "fullType": "string",
              "paramType": "path",
              "description": "name of this partitioning scheme",
              "dataType": "string"
            },
            {
              "description": "partition mount point",
              "paramType": "path",
              "fullType": "string",
              "dataType": "string",
              "name": "mountpoint",
              "required": true
            }
          ],
          "noAuthentication": false
        }
      ]
    },
    {
      "description": "Hardware RAID defined in this partitioning scheme",
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}",
      "operations": [
        {
          "noAuthentication": false,
          "httpMethod": "GET",
          "parameters": [
            {
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "description": "This template name",
              "required": true,
              "name": "templateName"
            },
            {
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "description": "name of this partitioning scheme",
              "required": true,
              "name": "schemeName"
            },
            {
              "required": true,
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "description": "Hardware RAID name",
              "fullType": "string"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Get this object properties",
          "resellerOnly": false,
          "responseType": "dedicated.installationTemplate.hardwareRaid",
          "responseFullType": "dedicated.installationTemplate.hardwareRaid"
        }
      ]
    },
    {
      "operations": [
        {
          "description": "Hardware RAIDs defined in this partitioning scheme",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseType": "string[]",
          "responseFullType": "string[]",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "description": "This template name",
              "fullType": "string"
            },
            {
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "description": "name of this partitioning scheme",
              "required": true,
              "name": "schemeName"
            }
          ],
          "httpMethod": "GET"
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid",
      "description": "List the dedicated.installationTemplate.hardwareRaid objects"
    },
    {
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme",
      "description": "List the dedicated.installationTemplate.templatePartitioningSchemes objects",
      "operations": [
        {
          "responseType": "string[]",
          "description": "Partitioning schemes available on this template",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "string[]",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "This template name",
              "paramType": "path",
              "fullType": "string",
              "dataType": "string",
              "name": "templateName",
              "required": true
            }
          ],
          "httpMethod": "GET"
        }
      ]
    }
  ],
  "resourcePath": "/dedicated/installationTemplate"
}