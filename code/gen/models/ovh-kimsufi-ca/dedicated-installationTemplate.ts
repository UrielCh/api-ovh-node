import {Schema} from '../../src/schema';

// imported from https://ca.api.kimsufi.com:443/1.0/dedicated/installationTemplate.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "List the dedicated.installationTemplate.Templates objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "OVH operating system installation templates",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/installationTemplate"
    },
    {
      "description": "Available installation templates",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.installationTemplate.Templates"
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}"
    },
    {
      "description": "List the dedicated.installationTemplate.templatePartitioningSchemes objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Partitioning schemes available on this template",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme"
    },
    {
      "description": "Partitioning schemes available on this template",
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
              "description": "name of this partitioning scheme",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.installationTemplate.templatePartitioningSchemes"
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}"
    },
    {
      "description": "List the dedicated.installationTemplate.hardwareRaid objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Hardware RAIDs defined in this partitioning scheme",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "name of this partitioning scheme",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid"
    },
    {
      "description": "Hardware RAID defined in this partitioning scheme",
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
              "description": "Hardware RAID name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "name of this partitioning scheme",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.installationTemplate.hardwareRaid"
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}"
    },
    {
      "description": "List the dedicated.installationTemplate.templatePartitions objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Partitions defined in this partitioning scheme",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "name of this partitioning scheme",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition"
    },
    {
      "description": " Partitions defined in this partitioning scheme",
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
              "description": "partition mount point",
              "fullType": "string",
              "name": "mountpoint",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "name of this partitioning scheme",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.installationTemplate.templatePartitions"
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}"
    }
  ],
  "basePath": "https://ca.api.kimsufi.com/1.0",
  "models": {
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "T"
        }
      }
    },
    "dedicated.TemplateOsFileSystemEnum": {
      "description": "Filesystems available",
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
      "id": "TemplateOsFileSystemEnum",
      "namespace": "dedicated"
    },
    "dedicated.TemplateOsHardwareRaidEnum": {
      "description": "Hardware RAID enum",
      "enum": [
        "raid0",
        "raid1",
        "raid10",
        "raid5",
        "raid50",
        "raid6",
        "raid60"
      ],
      "enumType": "string",
      "id": "TemplateOsHardwareRaidEnum",
      "namespace": "dedicated"
    },
    "dedicated.TemplateOsLanguageEnum": {
      "description": "all language available",
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
      "id": "TemplateOsLanguageEnum",
      "namespace": "dedicated"
    },
    "dedicated.TemplateOsProperties": {
      "description": "A structure describing properties customizables about this dedicated installation template",
      "id": "TemplateOsProperties",
      "namespace": "dedicated",
      "properties": {
        "changeLog": {
          "canBeNull": true,
          "description": "Template change log details",
          "readOnly": false,
          "required": false,
          "type": "text"
        },
        "customHostname": {
          "canBeNull": true,
          "description": "Set up the server using the provided hostname instead of the default hostname",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "postInstallationScriptLink": {
          "canBeNull": true,
          "description": "Indicate the URL where your postinstall customisation script is located",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "postInstallationScriptReturn": {
          "canBeNull": true,
          "description": "indicate the string returned by your postinstall customisation script on successful execution. Advice: your script should return a unique validation string in case of succes. A good example is \"loh1Xee7eo OK OK OK UGh8Ang1Gu",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "rating": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "sshKeyName": {
          "canBeNull": true,
          "description": "Name of the ssh key that should be installed. Password login will be disabled",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "useDistributionKernel": {
          "canBeNull": true,
          "description": "Use the distribution's native kernel instead of the recommended OVH Kernel",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "dedicated.TemplateOsTypeEnum": {
      "description": "Os type",
      "enum": [
        "bsd",
        "ibm",
        "linux",
        "solaris",
        "unix",
        "windows"
      ],
      "enumType": "string",
      "id": "TemplateOsTypeEnum",
      "namespace": "dedicated"
    },
    "dedicated.TemplateOsUsageEnum": {
      "description": "Os usage definition",
      "enum": [
        "basic",
        "customer",
        "database",
        "hosting",
        "management",
        "other",
        "readyToUse",
        "virtualisation",
        "virtualization"
      ],
      "enumType": "string",
      "id": "TemplateOsUsageEnum",
      "namespace": "dedicated"
    },
    "dedicated.TemplatePartitionTypeEnum": {
      "description": "partition type",
      "enum": [
        "logical",
        "lv",
        "primary"
      ],
      "enumType": "string",
      "id": "TemplatePartitionTypeEnum",
      "namespace": "dedicated"
    },
    "dedicated.installationTemplate.Templates": {
      "description": "Available installation templates",
      "id": "Templates",
      "namespace": "dedicated.installationTemplate",
      "properties": {
        "availableLanguages": {
          "canBeNull": false,
          "description": "list of all language available for this template",
          "fullType": "dedicated.TemplateOsLanguageEnum[]",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TemplateOsLanguageEnum[]"
        },
        "beta": {
          "canBeNull": true,
          "description": "This distribution is new, and although tested and functional, may still display odd behaviour",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "bitFormat": {
          "canBeNull": false,
          "description": "this template  bit format",
          "fullType": "dedicated.server.BitFormatEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.BitFormatEnum"
        },
        "category": {
          "canBeNull": false,
          "description": "category of this template (informative only)",
          "fullType": "dedicated.TemplateOsUsageEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TemplateOsUsageEnum"
        },
        "customization": {
          "canBeNull": true,
          "description": "Customizable template properties ",
          "fullType": "dedicated.TemplateOsProperties",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsProperties"
        },
        "defaultLanguage": {
          "canBeNull": false,
          "description": "the default language of this template",
          "fullType": "dedicated.TemplateOsLanguageEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsLanguageEnum"
        },
        "deprecated": {
          "canBeNull": true,
          "description": "is this distribution deprecated",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": false,
          "description": "information about this template",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "distribution": {
          "canBeNull": false,
          "description": "the distribution this template is based on",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "family": {
          "canBeNull": false,
          "description": "this template family type",
          "fullType": "dedicated.TemplateOsTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TemplateOsTypeEnum"
        },
        "filesystems": {
          "canBeNull": false,
          "description": "list of all filesystems  available for this template",
          "fullType": "dedicated.TemplateOsFileSystemEnum[]",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TemplateOsFileSystemEnum[]"
        },
        "hardRaidConfiguration": {
          "canBeNull": true,
          "description": "This distribution supports hardware raid configuration through the OVH API",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "lastModification": {
          "canBeNull": true,
          "description": "Date of last modification of the base image",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lvmReady": {
          "canBeNull": true,
          "description": "This distribution supports Logical Volumes (Linux LVM)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "supportsDistributionKernel": {
          "canBeNull": true,
          "description": "This distribution supports installation using the distribution's native kernel instead of the recommended OVH kernel",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "supportsGptLabel": {
          "canBeNull": true,
          "description": "This distribution supports the GUID Partition Table (GPT), providing up to 128 partitions that can have more than 2 TB",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "supportsRTM": {
          "canBeNull": false,
          "description": "This distribution supports RTM software",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "supportsSqlServer": {
          "canBeNull": true,
          "description": "This distribution supports the microsoft SQL server",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "supportsUEFI": {
          "canBeNull": true,
          "description": "This distribution supports UEFI setup",
          "fullType": "dedicated.server.SupportsUEFIEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.SupportsUEFIEnum"
        },
        "templateName": {
          "canBeNull": false,
          "description": "This template name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.installationTemplate.hardwareRaid": {
      "description": "Hardware RAID defined in this partitioning scheme",
      "id": "hardwareRaid",
      "namespace": "dedicated.installationTemplate",
      "properties": {
        "disks": {
          "canBeNull": false,
          "description": "Disk list",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "mode": {
          "canBeNull": false,
          "description": "RAID mode",
          "fullType": "dedicated.TemplateOsHardwareRaidEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsHardwareRaidEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "Hardware RAID name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "step": {
          "canBeNull": false,
          "description": "Specifies the creation order of the hardware RAID",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicated.installationTemplate.templatePartitioningSchemes": {
      "description": "Partitioning schemes available on this template",
      "id": "templatePartitioningSchemes",
      "namespace": "dedicated.installationTemplate",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "name of this partitioning scheme",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "priority": {
          "canBeNull": false,
          "description": "on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications)",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicated.installationTemplate.templatePartitions": {
      "description": " Partitions defined in this partitioning scheme",
      "id": "templatePartitions",
      "namespace": "dedicated.installationTemplate",
      "properties": {
        "filesystem": {
          "canBeNull": false,
          "description": "Partition filesytem",
          "fullType": "dedicated.TemplateOsFileSystemEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsFileSystemEnum"
        },
        "mountpoint": {
          "canBeNull": false,
          "description": "partition mount point",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "order": {
          "canBeNull": false,
          "description": "specifies the creation order of the partition on the disk",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "raid": {
          "canBeNull": true,
          "description": "raid partition type",
          "fullType": "dedicated.server.PartitionRaidEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.PartitionRaidEnum"
        },
        "size": {
          "canBeNull": false,
          "description": "size of partition in Mb, 0 => rest of the space",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "type": {
          "canBeNull": false,
          "fullType": "dedicated.TemplatePartitionTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplatePartitionTypeEnum"
        },
        "volumeName": {
          "canBeNull": true,
          "description": "The volume name needed for proxmox distribution",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.server.BitFormatEnum": {
      "description": "Available os bit format",
      "enum": [
        "32",
        "64"
      ],
      "enumType": "long",
      "id": "BitFormatEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.PartitionRaidEnum": {
      "description": "partition raid type",
      "enum": [
        "0",
        "1",
        "10",
        "5",
        "6"
      ],
      "enumType": "string",
      "id": "PartitionRaidEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.SupportsUEFIEnum": {
      "description": "supports UEFI setup",
      "enum": [
        "no",
        "only",
        "yes"
      ],
      "enumType": "string",
      "id": "SupportsUEFIEnum",
      "namespace": "dedicated.server"
    }
  },
  "resourcePath": "/dedicated/installationTemplate"
}