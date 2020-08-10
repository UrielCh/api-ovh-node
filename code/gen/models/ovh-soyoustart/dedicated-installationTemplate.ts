import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/dedicated/installationTemplate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": true,
          "description": "OVH operating system installation templates"
        }
      ],
      "description": "List the dedicated.installationTemplate.Templates objects"
    },
    {
      "path": "/dedicated/installationTemplate/{templateName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            }
          ],
          "responseType": "dedicated.installationTemplate.Templates",
          "noAuthentication": true,
          "description": "Get this object properties"
        }
      ],
      "description": "Available installation templates"
    },
    {
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Partitioning schemes available on this template"
        }
      ],
      "description": "List the dedicated.installationTemplate.templatePartitioningSchemes objects"
    },
    {
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Scheme name"
            }
          ],
          "responseType": "dedicated.installationTemplate.templatePartitioningSchemes",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Partitioning schemes available on this template"
    },
    {
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Scheme name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Hardware RAIDs defined in this partitioning scheme"
        }
      ],
      "description": "List the dedicated.installationTemplate.hardwareRaid objects"
    },
    {
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Scheme name"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "dedicated.installationTemplate.hardwareRaid",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Hardware RAID defined in this partitioning scheme"
    },
    {
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Scheme name"
            },
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Partitions defined in this partitioning scheme"
        }
      ],
      "description": "List the dedicated.installationTemplate.templatePartitions objects"
    },
    {
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Scheme name"
            },
            {
              "name": "mountpoint",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mountpoint"
            }
          ],
          "responseType": "dedicated.installationTemplate.templatePartitions",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": " Partitions defined in this partitioning scheme"
    }
  ],
  "resourcePath": "/dedicated/installationTemplate",
  "basePath": "https://eu.api.soyoustart.com/1.0",
  "models": {
    "complexType.UnitAndValue<T>": {
      "id": "UnitAndValue",
      "namespace": "complexType",
      "description": "A numeric value tagged with its unit",
      "generics": [
        "T"
      ],
      "properties": {
        "unit": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "T",
          "fullType": "T",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "dedicated.TemplateOsFileSystemEnum": {
      "id": "TemplateOsFileSystemEnum",
      "namespace": "dedicated",
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
      "enumType": "string"
    },
    "dedicated.TemplateOsHardwareRaidEnum": {
      "id": "TemplateOsHardwareRaidEnum",
      "namespace": "dedicated",
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
      "enumType": "string"
    },
    "dedicated.TemplateOsLanguageEnum": {
      "id": "TemplateOsLanguageEnum",
      "namespace": "dedicated",
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
      "enumType": "string"
    },
    "dedicated.TemplateOsProperties": {
      "id": "TemplateOsProperties",
      "namespace": "dedicated",
      "description": "A structure describing properties customizables about this dedicated installation template",
      "properties": {
        "changeLog": {
          "type": "text",
          "fullType": "text",
          "canBeNull": true,
          "readOnly": false,
          "description": "Template change log details",
          "required": false
        },
        "customHostname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Set up the server using the provided hostname instead of the default hostname",
          "required": false
        },
        "postInstallationScriptLink": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Indicate the URL where your postinstall customisation script is located",
          "required": false
        },
        "postInstallationScriptReturn": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "indicate the string returned by your postinstall customisation script on successful execution. Advice: your script should return a unique validation string in case of succes. A good example is \"loh1Xee7eo OK OK OK UGh8Ang1Gu",
          "required": false
        },
        "rating": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "sshKeyName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of the ssh key that should be installed. Password login will be disabled",
          "required": false
        },
        "useDistributionKernel": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Use the distribution's native kernel instead of the recommended OVH Kernel",
          "required": false
        }
      }
    },
    "dedicated.TemplateOsTypeEnum": {
      "id": "TemplateOsTypeEnum",
      "namespace": "dedicated",
      "description": "Os type",
      "enum": [
        "bsd",
        "linux",
        "solaris",
        "windows"
      ],
      "enumType": "string"
    },
    "dedicated.TemplateOsUsageEnum": {
      "id": "TemplateOsUsageEnum",
      "namespace": "dedicated",
      "description": "Os usage definition",
      "enum": [
        "basic",
        "customer",
        "hosting",
        "other",
        "readyToUse",
        "virtualisation"
      ],
      "enumType": "string"
    },
    "dedicated.TemplatePartitionTypeEnum": {
      "id": "TemplatePartitionTypeEnum",
      "namespace": "dedicated",
      "description": "partition type",
      "enum": [
        "logical",
        "lv",
        "primary"
      ],
      "enumType": "string"
    },
    "dedicated.installationTemplate.Templates": {
      "id": "Templates",
      "namespace": "dedicated.installationTemplate",
      "description": "Available installation templates",
      "properties": {
        "availableLanguages": {
          "type": "dedicated.TemplateOsLanguageEnum[]",
          "fullType": "dedicated.TemplateOsLanguageEnum[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "list of all language available for this template",
          "required": true
        },
        "beta": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "This distribution is new, and although tested and functional, may still display odd behaviour",
          "required": false
        },
        "bitFormat": {
          "type": "dedicated.server.BitFormatEnum",
          "fullType": "dedicated.server.BitFormatEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "this template  bit format",
          "required": true
        },
        "category": {
          "type": "dedicated.TemplateOsUsageEnum",
          "fullType": "dedicated.TemplateOsUsageEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "category of this template (informative only)",
          "required": true
        },
        "customization": {
          "type": "dedicated.TemplateOsProperties",
          "fullType": "dedicated.TemplateOsProperties",
          "canBeNull": true,
          "readOnly": false,
          "description": "Customizable template properties ",
          "required": false
        },
        "defaultLanguage": {
          "type": "dedicated.TemplateOsLanguageEnum",
          "fullType": "dedicated.TemplateOsLanguageEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "the default language of this template",
          "required": true
        },
        "deprecated": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "is this distribution deprecated",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "information about this template",
          "required": true
        },
        "distribution": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "the distribution this template is based on",
          "required": true
        },
        "family": {
          "type": "dedicated.TemplateOsTypeEnum",
          "fullType": "dedicated.TemplateOsTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "this template family type",
          "required": true
        },
        "filesystems": {
          "type": "dedicated.TemplateOsFileSystemEnum[]",
          "fullType": "dedicated.TemplateOsFileSystemEnum[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "list of all filesystems  available for this template",
          "required": true
        },
        "hardRaidConfiguration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "This distribution supports hardware raid configuration through the OVH API",
          "required": false
        },
        "lastModification": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Date of last modification of the base image",
          "required": false
        },
        "lvmReady": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "This distribution supports Logical Volumes (Linux LVM)",
          "required": false
        },
        "supportsDistributionKernel": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "This distribution supports installation using the distribution's native kernel instead of the recommended OVH kernel",
          "required": false
        },
        "supportsGptLabel": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "This distribution supports the GUID Partition Table (GPT), providing up to 128 partitions that can have more than 2 TB",
          "required": false
        },
        "supportsRTM": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "This distribution supports RTM software",
          "required": true
        },
        "supportsSqlServer": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "This distribution supports the microsoft SQL server",
          "required": false
        },
        "supportsUEFI": {
          "type": "dedicated.server.SupportsUEFIEnum",
          "fullType": "dedicated.server.SupportsUEFIEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "This distribution supports UEFI setup",
          "required": false
        },
        "templateName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "This template name",
          "required": true
        }
      }
    },
    "dedicated.installationTemplate.hardwareRaid": {
      "id": "hardwareRaid",
      "namespace": "dedicated.installationTemplate",
      "description": "Hardware RAID defined in this partitioning scheme",
      "properties": {
        "disks": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Disk list",
          "required": true
        },
        "mode": {
          "type": "dedicated.TemplateOsHardwareRaidEnum",
          "fullType": "dedicated.TemplateOsHardwareRaidEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "RAID mode",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Hardware RAID name",
          "required": true
        },
        "step": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Specifies the creation order of the hardware RAID",
          "required": true
        }
      }
    },
    "dedicated.installationTemplate.templatePartitioningSchemes": {
      "id": "templatePartitioningSchemes",
      "namespace": "dedicated.installationTemplate",
      "description": "Partitioning schemes available on this template",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "name of this partitioning scheme",
          "required": true
        },
        "priority": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications)",
          "required": true
        }
      }
    },
    "dedicated.installationTemplate.templatePartitions": {
      "id": "templatePartitions",
      "namespace": "dedicated.installationTemplate",
      "description": " Partitions defined in this partitioning scheme",
      "properties": {
        "filesystem": {
          "type": "dedicated.TemplateOsFileSystemEnum",
          "fullType": "dedicated.TemplateOsFileSystemEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Partition filesytem",
          "required": true
        },
        "mountpoint": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "partition mount point",
          "required": true
        },
        "order": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "specifies the creation order of the partition on the disk",
          "required": true
        },
        "raid": {
          "type": "dedicated.server.PartitionRaidEnum",
          "fullType": "dedicated.server.PartitionRaidEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "raid partition type",
          "required": false
        },
        "size": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "description": "size of partition in Mb, 0 => rest of the space",
          "required": true
        },
        "type": {
          "type": "dedicated.TemplatePartitionTypeEnum",
          "fullType": "dedicated.TemplatePartitionTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "volumeName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The volume name needed for proxmox distribution",
          "required": false
        }
      }
    },
    "dedicated.server.BitFormatEnum": {
      "id": "BitFormatEnum",
      "namespace": "dedicated.server",
      "description": "Available os bit format",
      "enum": [
        "32",
        "64"
      ],
      "enumType": "long"
    },
    "dedicated.server.PartitionRaidEnum": {
      "id": "PartitionRaidEnum",
      "namespace": "dedicated.server",
      "description": "partition raid type",
      "enum": [
        "0",
        "1",
        "10",
        "5",
        "6"
      ],
      "enumType": "string"
    },
    "dedicated.server.SupportsUEFIEnum": {
      "id": "SupportsUEFIEnum",
      "namespace": "dedicated.server",
      "description": "supports UEFI setup",
      "enum": [
        "no",
        "only",
        "yes"
      ],
      "enumType": "string"
    }
  }
}