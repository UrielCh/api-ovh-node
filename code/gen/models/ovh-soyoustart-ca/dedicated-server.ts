import {Schema} from '../../src/schema';

export const schema: Schema = {
  "resourcePath": "/dedicated/server",
  "apis": [
    {
      "operations": [
        {
          "httpMethod": "GET",
          "apiStatus": {
            "value": "BETA",
            "description": "Beta version"
          },
          "responseType": "dedicated.server.backup.BackupOffer",
          "description": "Get details on offered backup cloud if available for the current server",
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "dedicated.server.backup.BackupOffer"
        }
      ],
      "description": "backupCloudOfferDetails operations",
      "path": "/dedicated/server/{serviceName}/backupCloudOfferDetails"
    },
    {
      "description": "compatibleTemplates operations",
      "path": "/dedicated/server/{serviceName}/install/compatibleTemplates",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "Retrieve compatible  install templates names",
          "httpMethod": "GET",
          "responseType": "dedicated.server.InstallTemplate",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseFullType": "dedicated.server.InstallTemplate",
          "resellerOnly": false
        }
      ]
    },
    {
      "description": "hardwareRaidSize operations",
      "path": "/dedicated/server/{serviceName}/install/hardwareRaidSize",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.HardwareRaidSize",
          "httpMethod": "GET",
          "description": "Get hardware RAID size for a given configuration",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "query",
              "dataType": "string",
              "fullType": "string",
              "name": "templateName",
              "description": "Template name"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "query",
              "name": "partitionSchemeName",
              "fullType": "string",
              "description": "Partition scheme name"
            },
            {
              "description": "The internal name of your dedicated server",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.HardwareRaidSize"
        }
      ]
    },
    {
      "operations": [
        {
          "description": "Retrieve compatible  install template partitions scheme",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "string",
              "name": "templateName",
              "required": true,
              "paramType": "query",
              "dataType": "string",
              "description": null
            },
            {
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "httpMethod": "GET",
          "responseFullType": "string[]",
          "resellerOnly": false
        }
      ],
      "description": "compatibleTemplatePartitionSchemes operations",
      "path": "/dedicated/server/{serviceName}/install/compatibleTemplatePartitionSchemes"
    },
    {
      "operations": [
        {
          "description": "Start an install",
          "noAuthentication": false,
          "parameters": [
            {
              "required": false,
              "paramType": "body",
              "dataType": "dedicated.server.InstallCustom",
              "fullType": "dedicated.server.InstallCustom",
              "name": "details",
              "description": "parameters for default install"
            },
            {
              "name": "partitionSchemeName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": false,
              "description": "Partition scheme name"
            },
            {
              "description": "Template name",
              "required": true,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "templateName"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.Task",
          "httpMethod": "POST",
          "responseFullType": "dedicated.server.Task",
          "resellerOnly": false
        }
      ],
      "description": "start operations",
      "path": "/dedicated/server/{serviceName}/install/start"
    },
    {
      "path": "/dedicated/server/{serviceName}/install/status",
      "description": "status operations",
      "operations": [
        {
          "responseType": "dedicated.server.InstallationProgressStatus",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            }
          ],
          "description": "Get installation status",
          "resellerOnly": false,
          "responseFullType": "dedicated.server.InstallationProgressStatus"
        }
      ]
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "fullType": "string",
              "name": "templateName",
              "paramType": "query",
              "required": true,
              "dataType": "string"
            },
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "Gives some capabilities regarding the template for the current dedicated server.",
          "httpMethod": "GET",
          "responseType": "dedicated.server.TemplateCaps",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseFullType": "dedicated.server.TemplateCaps"
        }
      ],
      "path": "/dedicated/server/{serviceName}/install/templateCapabilities",
      "description": "templateCapabilities operations"
    },
    {
      "operations": [
        {
          "description": "Retrieve hardware RAID profile",
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.HardwareRaidProfile",
          "resellerOnly": false,
          "responseFullType": "dedicated.server.HardwareRaidProfile"
        }
      ],
      "description": "hardwareRaidProfile operations",
      "path": "/dedicated/server/{serviceName}/install/hardwareRaidProfile"
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "description": "Filter the value of linkType property (=)",
              "name": "linkType",
              "fullType": "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum",
              "dataType": "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum",
              "paramType": "query",
              "required": false
            },
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false,
          "description": "List server networkInterfaceController",
          "responseType": "macAddress[]",
          "apiStatus": {
            "value": "BETA",
            "description": "Beta version"
          },
          "httpMethod": "GET",
          "responseFullType": "macAddress[]",
          "resellerOnly": false
        }
      ],
      "description": "List the dedicated.networkInterfaceController.NetworkInterfaceController objects",
      "path": "/dedicated/server/{serviceName}/networkInterfaceController"
    },
    {
      "path": "/dedicated/server/{serviceName}/networkInterfaceController/{mac}/mrtg",
      "description": "mrtg operations",
      "operations": [
        {
          "responseType": "dedicated.server.MrtgTimestampValue[]",
          "apiStatus": {
            "value": "BETA",
            "description": "Beta version"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "description": "mrtg period",
              "required": true,
              "paramType": "query",
              "dataType": "dedicated.server.MrtgPeriodEnum",
              "fullType": "dedicated.server.MrtgPeriodEnum",
              "name": "period"
            },
            {
              "name": "type",
              "fullType": "dedicated.server.MrtgTypeEnum",
              "dataType": "dedicated.server.MrtgTypeEnum",
              "paramType": "query",
              "required": true,
              "description": "mrtg type"
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            },
            {
              "name": "mac",
              "fullType": "macAddress",
              "dataType": "macAddress",
              "paramType": "path",
              "required": true,
              "description": "NetworkInterfaceController mac"
            }
          ],
          "noAuthentication": false,
          "description": "Retrieve traffic graph values",
          "resellerOnly": false,
          "responseFullType": "dedicated.server.MrtgTimestampValue[]"
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/networkInterfaceController/{mac}",
      "description": "Your networkInterfaceController",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            },
            {
              "dataType": "macAddress",
              "required": true,
              "paramType": "path",
              "name": "mac",
              "fullType": "macAddress",
              "description": "NetworkInterfaceController mac"
            }
          ],
          "description": "Get this object properties",
          "responseType": "dedicated.networkInterfaceController.NetworkInterfaceController",
          "apiStatus": {
            "value": "BETA",
            "description": "Beta version"
          },
          "httpMethod": "GET",
          "responseFullType": "dedicated.networkInterfaceController.NetworkInterfaceController",
          "resellerOnly": false
        }
      ]
    },
    {
      "description": "hardDiskDrive operations",
      "path": "/dedicated/server/{serviceName}/support/replace/hardDiskDrive",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "support.NewMessageInfo",
          "parameters": [
            {
              "description": "If 'inverse' is set as 'false', the list of HDD TO REPLACE. If 'inverse' is set as 'true', the list of HDD TO NOT REPLACE.",
              "required": true,
              "paramType": "body",
              "dataType": "dedicated.server.SupportReplaceHddInfo[]",
              "fullType": "dedicated.server.SupportReplaceHddInfo[]",
              "name": "disks"
            },
            {
              "required": true,
              "paramType": "body",
              "dataType": "text",
              "fullType": "text",
              "name": "comment",
              "description": "User comment"
            },
            {
              "description": "If set to 'true', replace only NON LISTED DISKS",
              "name": "inverse",
              "fullType": "boolean",
              "dataType": "boolean",
              "paramType": "body",
              "required": true
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false,
          "description": "Ask for a broken HDD replacement",
          "responseType": "support.NewMessageInfo",
          "apiStatus": {
            "value": "BETA",
            "description": "Beta version"
          },
          "httpMethod": "POST"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "support.NewMessageInfo",
          "description": "Ask for a cooling module replacement",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "comment",
              "fullType": "text",
              "dataType": "text",
              "paramType": "body",
              "required": true,
              "description": "User comment"
            },
            {
              "description": "Technical details or logs",
              "fullType": "text",
              "name": "details",
              "paramType": "body",
              "required": true,
              "dataType": "text"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "apiStatus": {
            "value": "BETA",
            "description": "Beta version"
          },
          "responseType": "support.NewMessageInfo",
          "httpMethod": "POST"
        }
      ],
      "path": "/dedicated/server/{serviceName}/support/replace/cooling",
      "description": "cooling operations"
    },
    {
      "description": "memory operations",
      "path": "/dedicated/server/{serviceName}/support/replace/memory",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "support.NewMessageInfo",
          "parameters": [
            {
              "description": "Technical details or logs",
              "required": true,
              "paramType": "body",
              "dataType": "text",
              "fullType": "text",
              "name": "details"
            },
            {
              "required": true,
              "paramType": "body",
              "dataType": "text",
              "fullType": "text",
              "name": "comment",
              "description": "User comment"
            },
            {
              "dataType": "string[]",
              "required": false,
              "paramType": "body",
              "name": "slots",
              "fullType": "string[]",
              "description": "The list of faulty RAM slots (if you have the information)"
            },
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "description": "Ask for a faulty RAM module replacement",
          "httpMethod": "POST",
          "responseType": "support.NewMessageInfo",
          "apiStatus": {
            "value": "BETA",
            "description": "Beta version"
          }
        }
      ]
    },
    {
      "description": "Secondary dns infos",
      "path": "/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}",
      "operations": [
        {
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "secondaryDns.SecondaryDNS",
          "description": "Get this object properties",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "domain",
              "description": "domain on slave server"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "secondaryDns.SecondaryDNS"
        },
        {
          "responseFullType": "void",
          "resellerOnly": false,
          "httpMethod": "PUT",
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "description": "New object properties",
              "dataType": "secondaryDns.SecondaryDNS",
              "required": true,
              "paramType": "body",
              "name": null,
              "fullType": "secondaryDns.SecondaryDNS"
            },
            {
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string"
            },
            {
              "description": "domain on slave server",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ],
          "description": "Alter this object properties"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "httpMethod": "DELETE",
          "description": "remove this domain",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "domain",
              "fullType": "string",
              "description": "domain on slave server"
            }
          ],
          "noAuthentication": false
        }
      ]
    },
    {
      "description": "dnsServer operations",
      "path": "/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}/dnsServer",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "secondaryDns.SecondaryDNSNameServer",
          "httpMethod": "GET",
          "description": "domain name server informations",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            },
            {
              "name": "domain",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "domain on slave server"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "secondaryDns.SecondaryDNSNameServer"
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "string[]",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "httpMethod": "GET",
          "description": "List of secondary dns domain name",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            }
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "httpMethod": "POST",
          "description": "add a domain on secondary dns",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": false,
              "dataType": "ipv4",
              "description": ""
            },
            {
              "fullType": "string",
              "name": "domain",
              "paramType": "body",
              "required": true,
              "dataType": "string",
              "description": "The domain to add"
            },
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}/secondaryDnsDomains",
      "description": "List the secondaryDns.SecondaryDNS objects"
    },
    {
      "path": "/dedicated/server/{serviceName}/specifications/ip",
      "description": "ip operations",
      "operations": [
        {
          "responseFullType": "dedicated.server.IpOrderable",
          "resellerOnly": false,
          "responseType": "dedicated.server.IpOrderable",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            }
          ],
          "noAuthentication": false,
          "description": "Retrieve IP capabilities about this dedicated server"
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "dedicated.server.NetworkSpecifications",
          "resellerOnly": false,
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.NetworkSpecifications",
          "description": "Retrieve network informations about this dedicated server",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            }
          ]
        }
      ],
      "description": "network operations",
      "path": "/dedicated/server/{serviceName}/specifications/network"
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "description": "Retrieve hardware informations about this dedicated server",
          "responseType": "dedicated.server.HardwareSpecifications",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseFullType": "dedicated.server.HardwareSpecifications"
        }
      ],
      "description": "hardware operations",
      "path": "/dedicated/server/{serviceName}/specifications/hardware"
    },
    {
      "path": "/dedicated/server/{serviceName}/ipBlockMerge",
      "description": "ipBlockMerge operations",
      "operations": [
        {
          "responseType": "dedicated.server.Task",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The splitted block you want to merge",
              "dataType": "ipBlock",
              "required": true,
              "paramType": "body",
              "name": "block",
              "fullType": "ipBlock"
            },
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "Merge a splitted block and route it to the choosen server. You cannot undo this operation",
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task"
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/option",
      "description": "List the dedicated.server.Option objects",
      "operations": [
        {
          "responseFullType": "dedicated.server.OptionEnum[]",
          "resellerOnly": false,
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.OptionEnum[]",
          "description": "List of dedicated server options",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
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
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "dedicated.server.OptionEnum",
              "fullType": "dedicated.server.OptionEnum",
              "name": "option",
              "description": "The option name"
            }
          ],
          "description": "Get this object properties",
          "responseType": "dedicated.server.Option",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Option"
        },
        {
          "responseFullType": "void",
          "resellerOnly": false,
          "description": "Release a given option",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "name": "option",
              "fullType": "dedicated.server.OptionEnum",
              "dataType": "dedicated.server.OptionEnum",
              "paramType": "path",
              "required": true,
              "description": "The option name"
            }
          ],
          "httpMethod": "DELETE",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}/option/{option}",
      "description": "Information about the options of a dedicated server"
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.UsbKeyOrderableDetails",
          "description": "Get USB keys orderable with your server",
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "dedicated.server.UsbKeyOrderableDetails"
        }
      ],
      "path": "/dedicated/server/{serviceName}/orderable/usbKey",
      "description": "usbKey operations"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "boolean",
          "responseType": "boolean",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            }
          ],
          "description": "Is a KVM express orderable with your server"
        }
      ],
      "path": "/dedicated/server/{serviceName}/orderable/kvmExpress",
      "description": "kvmExpress operations"
    },
    {
      "operations": [
        {
          "responseFullType": "dedicated.server.BackupStorageOrderable",
          "resellerOnly": false,
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.BackupStorageOrderable",
          "description": "Get the backup storage orderable with your server.",
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false
        }
      ],
      "description": "backupStorage operations",
      "path": "/dedicated/server/{serviceName}/orderable/backupStorage"
    },
    {
      "description": "feature operations",
      "path": "/dedicated/server/{serviceName}/orderable/feature",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "boolean",
          "parameters": [
            {
              "description": "the feature",
              "name": "feature",
              "fullType": "dedicated.server.OrderableSysFeatureEnum",
              "dataType": "dedicated.server.OrderableSysFeatureEnum",
              "paramType": "query",
              "required": true
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false,
          "description": "Is this feature orderable with your server",
          "responseType": "boolean",
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
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.IpOrderable",
          "httpMethod": "GET",
          "description": "Get IP orderable with your server.",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.IpOrderable"
        }
      ],
      "description": "ip operations",
      "path": "/dedicated/server/{serviceName}/orderable/ip"
    },
    {
      "description": "configure operations",
      "path": "/dedicated/server/{serviceName}/biosSettings/sgx/configure",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task",
          "responseType": "dedicated.server.Task",
          "apiStatus": {
            "value": "BETA",
            "description": "Beta version"
          },
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Size of the Processor Reserved Memory",
              "dataType": "dedicated.server.BiosSettingsSgxPrmrrEnum",
              "required": false,
              "paramType": "body",
              "name": "prmrr",
              "fullType": "dedicated.server.BiosSettingsSgxPrmrrEnum"
            },
            {
              "description": "Desired SGX status",
              "fullType": "dedicated.server.BiosSettingsSgxStatusEnum",
              "name": "status",
              "paramType": "body",
              "required": false,
              "dataType": "dedicated.server.BiosSettingsSgxStatusEnum"
            },
            {
              "description": "The internal name of your dedicated server",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "description": "Configure SGX feature"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.biosSettingsSgx.BiosSettingsSgx",
          "responseType": "dedicated.biosSettingsSgx.BiosSettingsSgx",
          "apiStatus": {
            "value": "BETA",
            "description": "Beta version"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "description": "Get this object properties"
        }
      ],
      "path": "/dedicated/server/{serviceName}/biosSettings/sgx",
      "description": "Your BiosSettings for SGX feature"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.biosSettings.BiosSettings",
          "httpMethod": "GET",
          "responseType": "dedicated.biosSettings.BiosSettings",
          "apiStatus": {
            "value": "BETA",
            "description": "Beta version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string"
            }
          ],
          "description": "Get this object properties"
        }
      ],
      "path": "/dedicated/server/{serviceName}/biosSettings",
      "description": "Your BiosSettings"
    },
    {
      "path": "/dedicated/server/{serviceName}/boot/{bootId}/option",
      "description": "List the dedicated.server.netbootOption objects",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "description": "boot id",
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "bootId"
            }
          ],
          "description": "Option used on this netboot",
          "httpMethod": "GET",
          "responseType": "dedicated.server.BootOptionEnum[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseFullType": "dedicated.server.BootOptionEnum[]"
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/boot/{bootId}/option/{option}",
      "description": "Available boot options",
      "operations": [
        {
          "description": "Get this object properties",
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "boot id",
              "fullType": "long",
              "name": "bootId",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "dedicated.server.BootOptionEnum",
              "fullType": "dedicated.server.BootOptionEnum",
              "name": "option",
              "description": "The option of this boot"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.netbootOption",
          "httpMethod": "GET",
          "responseFullType": "dedicated.server.netbootOption",
          "resellerOnly": false
        }
      ]
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "description": "boot id",
              "fullType": "long",
              "name": "bootId",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            }
          ],
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseType": "dedicated.server.Netboot",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Netboot"
        }
      ],
      "path": "/dedicated/server/{serviceName}/boot/{bootId}",
      "description": "Available boots"
    },
    {
      "description": "List the dedicated.server.Netboot objects",
      "path": "/dedicated/server/{serviceName}/boot",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "long[]",
          "description": "Server compatibles netboots",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "bootType",
              "fullType": "dedicated.server.BootTypeEnum",
              "dataType": "dedicated.server.BootTypeEnum",
              "paramType": "query",
              "required": false,
              "description": "Filter the value of bootType property (=)"
            },
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string"
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
      "path": "/dedicated/server/{serviceName}/firewall/binary/link",
      "description": "link operations",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.BinaryFirewallLink",
          "httpMethod": "GET",
          "apiStatus": {
            "value": "BETA",
            "description": "Beta version"
          },
          "responseType": "dedicated.BinaryFirewallLink",
          "description": "Get url of binary to update firewall asa",
          "parameters": [
            {
              "fullType": "string",
              "name": "binaryName",
              "paramType": "query",
              "required": true,
              "dataType": "string",
              "description": "Binary name"
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false
        }
      ]
    },
    {
      "operations": [
        {
          "description": "Get name binary for asa",
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "GET",
          "apiStatus": {
            "value": "BETA",
            "description": "Beta version"
          },
          "responseType": "dedicated.BinaryFirewall",
          "resellerOnly": false,
          "responseFullType": "dedicated.BinaryFirewall"
        }
      ],
      "path": "/dedicated/server/{serviceName}/firewall/binary/compatible",
      "description": "compatible operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/virtualMac",
      "description": "List the dedicated.server.VirtualMac objects",
      "operations": [
        {
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "description": "Virtual MAC addresses of the server",
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "responseFullType": "string[]",
          "resellerOnly": false
        },
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task",
          "description": "Add a virtual mac to an IP address",
          "parameters": [
            {
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "body",
              "required": true,
              "dataType": "ipv4",
              "description": "Ip address to link with this virtualMac"
            },
            {
              "required": true,
              "paramType": "body",
              "dataType": "dedicated.server.VmacTypeEnum",
              "fullType": "dedicated.server.VmacTypeEnum",
              "name": "type",
              "description": "vmac address type"
            },
            {
              "fullType": "string",
              "name": "virtualMachineName",
              "paramType": "body",
              "required": true,
              "dataType": "string",
              "description": "Friendly name of your Virtual Machine behind this IP/MAC"
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.Task",
          "httpMethod": "POST"
        }
      ]
    },
    {
      "operations": [
        {
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "Virtual MAC address in 00:00:00:00:00:00 format",
              "fullType": "string",
              "name": "macAddress",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            },
            {
              "dataType": "ipv4",
              "required": true,
              "paramType": "path",
              "name": "ipAddress",
              "fullType": "ipv4",
              "description": "IP address"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.VirtualMacManagement",
          "httpMethod": "GET",
          "responseFullType": "dedicated.server.VirtualMacManagement",
          "resellerOnly": false
        },
        {
          "httpMethod": "DELETE",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.Task",
          "description": "Remove this ip from virtual mac , if you remove the last linked Ip, virtualmac will be deleted",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "Virtual MAC address in 00:00:00:00:00:00 format",
              "name": "macAddress",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "description": "IP address",
              "name": "ipAddress",
              "fullType": "ipv4",
              "dataType": "ipv4",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task"
        }
      ],
      "description": " ip address linked with this virtual mac address",
      "path": "/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}"
    },
    {
      "operations": [
        {
          "description": "List of IPs associated to this Virtual MAC",
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "Virtual MAC address in 00:00:00:00:00:00 format",
              "fullType": "string",
              "name": "macAddress",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "ipv4[]",
          "resellerOnly": false,
          "responseFullType": "ipv4[]"
        },
        {
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.Task",
          "description": "Add an IP to this Virtual MAC",
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "dataType": "ipv4",
              "fullType": "ipv4",
              "name": "ipAddress",
              "description": "IP address to link to this virtual MAC"
            },
            {
              "required": true,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "virtualMachineName",
              "description": "Friendly name of your Virtual Machine behind this IP/MAC"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "Virtual MAC address in 00:00:00:00:00:00 format",
              "name": "macAddress",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress",
      "description": "List the dedicated.server.VirtualMacManagement objects"
    },
    {
      "operations": [
        {
          "description": "Get this object properties",
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "Virtual MAC address in 00:00:00:00:00:00 format",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "macAddress"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.VirtualMac",
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseFullType": "dedicated.server.VirtualMac"
        }
      ],
      "path": "/dedicated/server/{serviceName}/virtualMac/{macAddress}",
      "description": "A virtual MAC address associated to one or more IPs"
    },
    {
      "operations": [
        {
          "responseFullType": "long[]",
          "resellerOnly": false,
          "responseType": "long[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Filter the value of function property (=)",
              "name": "function",
              "fullType": "dedicated.TaskFunctionEnum",
              "dataType": "dedicated.TaskFunctionEnum",
              "paramType": "query",
              "required": false
            },
            {
              "description": "Filter the value of status property (=)",
              "dataType": "dedicated.TaskStatusEnum",
              "required": false,
              "paramType": "query",
              "name": "status",
              "fullType": "dedicated.TaskStatusEnum"
            },
            {
              "description": "The internal name of your dedicated server",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            }
          ],
          "description": "Dedicated server todos"
        }
      ],
      "path": "/dedicated/server/{serviceName}/task",
      "description": "List the dedicated.server.Task objects"
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "dedicated.server.Task",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string"
            },
            {
              "description": "the id of the task",
              "name": "taskId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "description": "Get this object properties",
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task"
        }
      ],
      "description": "Server tasks",
      "path": "/dedicated/server/{serviceName}/task/{taskId}"
    },
    {
      "operations": [
        {
          "httpMethod": "POST",
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "description": "the id of the task",
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "taskId",
              "fullType": "long"
            }
          ],
          "noAuthentication": false,
          "description": "this action stop the task progression if it's possible",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ],
      "description": "cancel operations",
      "path": "/dedicated/server/{serviceName}/task/{taskId}/cancel"
    },
    {
      "path": "/dedicated/server/{serviceName}",
      "description": "Server informations",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Dedicated",
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties",
          "responseType": "dedicated.server.Dedicated",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET"
        },
        {
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "New object properties",
              "fullType": "dedicated.server.Dedicated",
              "name": null,
              "paramType": "body",
              "required": true,
              "dataType": "dedicated.server.Dedicated"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "Alter this object properties",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "description": "List the dedicated.server.spla objects",
      "path": "/dedicated/server/{serviceName}/spla",
      "operations": [
        {
          "description": "Your own SPLA licenses attached to this dedicated server",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "status",
              "fullType": "dedicated.server.SplaStatusEnum",
              "dataType": "dedicated.server.SplaStatusEnum",
              "paramType": "query",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "dataType": "dedicated.server.SplaTypeEnum",
              "required": false,
              "paramType": "query",
              "name": "type",
              "fullType": "dedicated.server.SplaTypeEnum",
              "description": "Filter the value of type property (=)"
            },
            {
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "long[]",
          "httpMethod": "GET",
          "responseFullType": "long[]",
          "resellerOnly": false
        },
        {
          "responseFullType": "long",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "long",
          "httpMethod": "POST",
          "description": "Add a new SPLA license",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "string",
              "name": "serialNumber",
              "paramType": "body",
              "required": true,
              "dataType": "string",
              "description": "License serial number"
            },
            {
              "required": true,
              "paramType": "body",
              "dataType": "dedicated.server.SplaTypeEnum",
              "fullType": "dedicated.server.SplaTypeEnum",
              "name": "type",
              "description": "License type"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ]
        }
      ]
    },
    {
      "description": "SPLA licenses management",
      "path": "/dedicated/server/{serviceName}/spla/{id}",
      "operations": [
        {
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string"
            },
            {
              "description": "License id",
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "id"
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties",
          "responseType": "dedicated.server.spla",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseFullType": "dedicated.server.spla"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "New object properties",
              "name": null,
              "fullType": "dedicated.server.spla",
              "dataType": "dedicated.server.spla",
              "paramType": "body",
              "required": true
            },
            {
              "description": "The internal name of your dedicated server",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            },
            {
              "name": "id",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "description": "License id"
            }
          ],
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "void",
          "resellerOnly": false,
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "description": "Revoke an SPLA license",
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "License id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            }
          ],
          "noAuthentication": false
        }
      ],
      "path": "/dedicated/server/{serviceName}/spla/{id}/revoke",
      "description": "revoke operations"
    },
    {
      "description": "authenticationSecret operations",
      "path": "/dedicated/server/{serviceName}/authenticationSecret",
      "operations": [
        {
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.Access[]",
          "description": "Retrieve secret to connect to the server / application",
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Access[]"
        }
      ]
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "description": "mrtg period",
              "required": true,
              "paramType": "query",
              "dataType": "dedicated.server.MrtgPeriodEnum",
              "fullType": "dedicated.server.MrtgPeriodEnum",
              "name": "period"
            },
            {
              "dataType": "dedicated.server.MrtgTypeEnum",
              "required": true,
              "paramType": "query",
              "name": "type",
              "fullType": "dedicated.server.MrtgTypeEnum",
              "description": "mrtg type"
            },
            {
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string"
            }
          ],
          "description": "Retrieve traffic graph values",
          "httpMethod": "GET",
          "responseType": "dedicated.server.MrtgTimestampValue[]",
          "apiStatus": {
            "value": "DEPRECATED",
            "description": "Deprecated, will be removed",
            "deprecatedDate": "2017-10-23T00:00:00+01:00",
            "replacement": "/dedicated/server/{serviceName}/networkInterfaceController",
            "deletionDate": "2018-04-23T00:00:00+01:00"
          },
          "resellerOnly": false,
          "responseFullType": "dedicated.server.MrtgTimestampValue[]"
        }
      ],
      "description": "mrtg operations",
      "path": "/dedicated/server/{serviceName}/mrtg"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            },
            {
              "dataType": "uuid",
              "required": true,
              "paramType": "path",
              "name": "uuid",
              "fullType": "uuid",
              "description": "VirtualNetworkInterface unique id"
            }
          ],
          "description": "Enable this VirtualNetworkInterface",
          "httpMethod": "POST",
          "responseType": "dedicated.server.Task",
          "apiStatus": {
            "value": "BETA",
            "description": "Beta version"
          }
        }
      ],
      "path": "/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}/enable",
      "description": "enable operations"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task",
          "responseType": "dedicated.server.Task",
          "apiStatus": {
            "value": "BETA",
            "description": "Beta version"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "VirtualNetworkInterface unique id",
              "fullType": "uuid",
              "name": "uuid",
              "paramType": "path",
              "required": true,
              "dataType": "uuid"
            }
          ],
          "noAuthentication": false,
          "description": "Disable this VirtualNetworkInterface"
        }
      ],
      "description": "disable operations",
      "path": "/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}/disable"
    },
    {
      "path": "/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}",
      "description": "Your VirtualNetworkInterface",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.virtualNetworkInterface.VirtualNetworkInterface",
          "description": "Get this object properties",
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            },
            {
              "description": "VirtualNetworkInterface unique id",
              "name": "uuid",
              "fullType": "uuid",
              "dataType": "uuid",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "value": "BETA",
            "description": "Beta version"
          },
          "responseType": "dedicated.virtualNetworkInterface.VirtualNetworkInterface",
          "httpMethod": "GET"
        },
        {
          "responseType": "void",
          "apiStatus": {
            "value": "BETA",
            "description": "Beta version"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "dataType": "dedicated.virtualNetworkInterface.VirtualNetworkInterface",
              "fullType": "dedicated.virtualNetworkInterface.VirtualNetworkInterface",
              "name": null,
              "description": "New object properties"
            },
            {
              "description": "The internal name of your dedicated server",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "name": "uuid",
              "fullType": "uuid",
              "dataType": "uuid",
              "paramType": "path",
              "required": true,
              "description": "VirtualNetworkInterface unique id"
            }
          ],
          "noAuthentication": false,
          "description": "Alter this object properties",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "operations": [
        {
          "description": "List server VirtualNetworkInterfaces",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Filter the value of enabled property (=)",
              "name": "enabled",
              "fullType": "boolean",
              "dataType": "boolean",
              "paramType": "query",
              "required": false
            },
            {
              "required": false,
              "paramType": "query",
              "dataType": "string",
              "fullType": "string",
              "name": "name",
              "description": "Filter the value of name property (=)"
            },
            {
              "description": "Filter the value of vrack property (=)",
              "dataType": "string",
              "required": false,
              "paramType": "query",
              "name": "vrack",
              "fullType": "string"
            },
            {
              "name": "mode",
              "fullType": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum",
              "dataType": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum",
              "paramType": "query",
              "required": false,
              "description": "Filter the value of mode property (=)"
            },
            {
              "description": "The internal name of your dedicated server",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "value": "BETA",
            "description": "Beta version"
          },
          "responseType": "uuid[]",
          "resellerOnly": false,
          "responseFullType": "uuid[]"
        }
      ],
      "description": "List the dedicated.virtualNetworkInterface.VirtualNetworkInterface objects",
      "path": "/dedicated/server/{serviceName}/virtualNetworkInterface"
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "secondaryDns.SecondaryDNSCheckField",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "required": true,
              "paramType": "query",
              "dataType": "string",
              "fullType": "string",
              "name": "domain",
              "description": "The domain to check"
            },
            {
              "description": "The internal name of your dedicated server",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            }
          ],
          "noAuthentication": false,
          "description": "DNS field to temporarily add to your zone so that we can verify you are the owner of this domain",
          "resellerOnly": false,
          "responseFullType": "secondaryDns.SecondaryDNSCheckField"
        }
      ],
      "description": "secondaryDnsNameDomainToken operations",
      "path": "/dedicated/server/{serviceName}/secondaryDnsNameDomainToken"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "parameters": [
            {
              "name": "ip",
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "paramType": "query",
              "required": true,
              "description": "The ip to move to this server"
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false,
          "description": "Check if given IP can be moved to this server",
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET"
        }
      ],
      "path": "/dedicated/server/{serviceName}/ipCanBeMovedTo",
      "description": "ipCanBeMovedTo operations"
    },
    {
      "operations": [
        {
          "responseFullType": "secondaryDns.SecondaryDNSNameServer",
          "resellerOnly": false,
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "Secondary nameServer available for your Server",
          "httpMethod": "GET",
          "responseType": "secondaryDns.SecondaryDNSNameServer",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "secondaryDnsNameServerAvailable operations",
      "path": "/dedicated/server/{serviceName}/secondaryDnsNameServerAvailable"
    },
    {
      "description": "Bring you own Image on your server",
      "path": "/dedicated/server/{serviceName}/bringYourOwnImage",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.ByoiStatus",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "dedicated.server.ByoiStatus"
        },
        {
          "noAuthentication": false,
          "parameters": [
            {
              "name": "checkSum",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": true,
              "description": "Image checksum"
            },
            {
              "required": true,
              "paramType": "body",
              "dataType": "dedicated.ImageTypesEnum",
              "fullType": "dedicated.ImageTypesEnum",
              "name": "type",
              "description": "Image type"
            },
            {
              "description": "SshKey",
              "required": true,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "sshKey"
            },
            {
              "description": "Metadas",
              "required": false,
              "paramType": "body",
              "dataType": "complexType.SafeKeyValue<string>[]",
              "fullType": "complexType.SafeKeyValue<string>[]",
              "name": "userMetadatas"
            },
            {
              "description": "Image description",
              "required": false,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "description"
            },
            {
              "description": "HTTP Headers",
              "dataType": "complexType.SafeKeyValue<password>[]",
              "required": false,
              "paramType": "body",
              "name": "httpHeader",
              "fullType": "complexType.SafeKeyValue<password>[]"
            },
            {
              "required": false,
              "paramType": "body",
              "dataType": "long",
              "fullType": "long",
              "name": "diskGroupId",
              "description": "Disk group id to process install on (only available for some templates)"
            },
            {
              "description": "Checksum type",
              "name": "checkSumType",
              "fullType": "dedicated.CheckSumTypesEnum",
              "dataType": "dedicated.CheckSumTypesEnum",
              "paramType": "body",
              "required": true
            },
            {
              "description": "Image URL",
              "dataType": "string",
              "required": true,
              "paramType": "body",
              "name": "URL",
              "fullType": "string"
            },
            {
              "required": false,
              "paramType": "body",
              "dataType": "text",
              "fullType": "text",
              "name": "userData",
              "description": "Configuration script"
            },
            {
              "description": "Hostname",
              "dataType": "string",
              "required": true,
              "paramType": "body",
              "name": "hostname",
              "fullType": "string"
            },
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "Start an install with your own image",
          "httpMethod": "POST",
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseFullType": "void"
        },
        {
          "httpMethod": "DELETE",
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "Delete your current image installation",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.Intervention",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string"
            },
            {
              "name": "interventionId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "description": "The intervention id"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Intervention"
        }
      ],
      "description": "Intervention made on this server",
      "path": "/dedicated/server/{serviceName}/intervention/{interventionId}"
    },
    {
      "operations": [
        {
          "responseFullType": "long[]",
          "resellerOnly": false,
          "noAuthentication": false,
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "technical intervention history",
          "httpMethod": "GET",
          "responseType": "long[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the dedicated.server.Intervention objects",
      "path": "/dedicated/server/{serviceName}/intervention"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "ipBlock[]",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "List all ip from server",
          "httpMethod": "GET",
          "responseType": "ipBlock[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "ips operations",
      "path": "/dedicated/server/{serviceName}/ips"
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "description": "Server disks",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "string[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/disk",
      "description": "List the dedicated.server.RtmDisk objects"
    },
    {
      "description": "smart operations",
      "path": "/dedicated/server/{serviceName}/statistics/disk/{disk}/smart",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "Disk",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "disk"
            }
          ],
          "description": "Get disk smart informations",
          "responseType": "dedicated.server.RtmDiskSmart",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmDiskSmart"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmDisk",
          "responseType": "dedicated.server.RtmDisk",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "Disk",
              "name": "disk",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/disk/{disk}",
      "description": "Server disks informations"
    },
    {
      "operations": [
        {
          "responseFullType": "complexType.ChartReturn",
          "resellerOnly": false,
          "description": "Retrieve RTM graph values",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "RTM chart type",
              "fullType": "dedicated.server.RtmChartTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true,
              "dataType": "dedicated.server.RtmChartTypeEnum"
            },
            {
              "required": true,
              "paramType": "query",
              "dataType": "dedicated.server.RtmChartPeriodEnum",
              "fullType": "dedicated.server.RtmChartPeriodEnum",
              "name": "period",
              "description": "chart period"
            },
            {
              "description": "The internal name of your dedicated server",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "complexType.ChartReturn"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/chart",
      "description": "chart operations"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Rtm",
          "httpMethod": "GET",
          "responseType": "dedicated.server.Rtm",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "Get this object properties"
        }
      ],
      "description": "Servers statistics sent by RTM (Real Time Monitoring)",
      "path": "/dedicated/server/{serviceName}/statistics"
    },
    {
      "description": "motherboard operations",
      "path": "/dedicated/server/{serviceName}/statistics/motherboard",
      "operations": [
        {
          "parameters": [
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false,
          "description": "Get server motherboard hardware informations",
          "httpMethod": "GET",
          "responseType": "dedicated.server.RtmMotherboardHw",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmMotherboardHw"
        }
      ]
    },
    {
      "description": "process operations",
      "path": "/dedicated/server/{serviceName}/statistics/process",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "Get server process",
          "httpMethod": "GET",
          "responseType": "dedicated.server.RtmCommandSize[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmCommandSize[]"
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "dedicated.server.RtmRaidVolume",
          "resellerOnly": false,
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "unit",
              "fullType": "string",
              "description": "Raid unit"
            },
            {
              "fullType": "string",
              "name": "volume",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "Raid volume name"
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.RtmRaidVolume"
        }
      ],
      "description": "Server raid volume information",
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}"
    },
    {
      "description": "Server raid volume port informations",
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port/{port}",
      "operations": [
        {
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "unit",
              "fullType": "string",
              "description": "Raid unit"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "volume",
              "fullType": "string",
              "description": "Raid volume name"
            },
            {
              "fullType": "string",
              "name": "port",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "Raid volume port"
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.RtmRaidVolumePort",
          "responseFullType": "dedicated.server.RtmRaidVolumePort",
          "resellerOnly": false
        }
      ]
    },
    {
      "description": "List the dedicated.server.RtmRaidVolumePort objects",
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port",
      "operations": [
        {
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "Raid unit",
              "fullType": "string",
              "name": "unit",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            },
            {
              "description": "Raid volume name",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "volume",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "description": "Raid unit volume ports",
          "httpMethod": "GET",
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseFullType": "string[]"
        }
      ]
    },
    {
      "description": "List the dedicated.server.RtmRaidVolume objects",
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}/volume",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "Raid unit",
              "fullType": "string",
              "name": "unit",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ],
          "description": "Raid unit volumes",
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseFullType": "string[]"
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}",
      "description": "Server raid informations",
      "operations": [
        {
          "responseType": "dedicated.server.RtmRaid",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "Raid unit",
              "name": "unit",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties",
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmRaid"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "httpMethod": "GET",
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false,
          "description": "Server raid informations"
        }
      ],
      "description": "List the dedicated.server.RtmRaid objects",
      "path": "/dedicated/server/{serviceName}/statistics/raid"
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "dedicated.server.RtmCpu",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "Get server cpu informations",
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmCpu"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/cpu",
      "description": "cpu operations"
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "Get server memory informations",
          "httpMethod": "GET",
          "responseType": "dedicated.server.RtmMemory[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseFullType": "dedicated.server.RtmMemory[]",
          "resellerOnly": false
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/memory",
      "description": "memory operations"
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "required": true,
              "paramType": "query",
              "dataType": "dedicated.server.RtmChartPeriodEnum",
              "fullType": "dedicated.server.RtmChartPeriodEnum",
              "name": "period",
              "description": "chart period"
            },
            {
              "description": "The internal name of your dedicated server",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            },
            {
              "description": "Partition",
              "fullType": "string",
              "name": "partition",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "description": "Retrieve partition charts",
          "httpMethod": "GET",
          "responseType": "complexType.ChartReturn",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseFullType": "complexType.ChartReturn"
        }
      ],
      "description": "chart operations",
      "path": "/dedicated/server/{serviceName}/statistics/partition/{partition}/chart"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/partition/{partition}",
      "description": "Server partitions informations",
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "dedicated.server.RtmPartition",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "partition",
              "fullType": "string",
              "description": "Partition"
            }
          ],
          "description": "Get this object properties",
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmPartition"
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/partition",
      "description": "List the dedicated.server.RtmPartition objects",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "Server partitions",
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseFullType": "string[]"
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/os",
      "description": "os operations",
      "operations": [
        {
          "description": "Get server os informations",
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.RtmOs",
          "responseFullType": "dedicated.server.RtmOs",
          "resellerOnly": false
        }
      ]
    },
    {
      "description": "load operations",
      "path": "/dedicated/server/{serviceName}/statistics/load",
      "operations": [
        {
          "responseFullType": "dedicated.server.RtmLoad",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.RtmLoad",
          "httpMethod": "GET",
          "description": "Get server load",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string"
            }
          ]
        }
      ]
    },
    {
      "description": "connection operations",
      "path": "/dedicated/server/{serviceName}/statistics/connection",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.RtmConnection[]",
          "httpMethod": "GET",
          "description": "Get server opened connections",
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseFullType": "dedicated.server.RtmConnection[]",
          "resellerOnly": false
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "dedicated.server.RtmPci[]",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.RtmPci[]",
          "httpMethod": "GET",
          "description": "Get server PCI devices informations",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            }
          ]
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/pci",
      "description": "pci operations"
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
          "noAuthentication": false,
          "parameters": [
            {
              "name": "futureUse",
              "fullType": "service.TerminationFutureUseEnum",
              "dataType": "service.TerminationFutureUseEnum",
              "paramType": "body",
              "required": false,
              "description": "What next after your termination request"
            },
            {
              "description": "Reason of your termination request",
              "required": false,
              "paramType": "body",
              "dataType": "service.TerminationReasonEnum",
              "fullType": "service.TerminationReasonEnum",
              "name": "reason"
            },
            {
              "required": false,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "commentary",
              "description": "Commentary about your termination request"
            },
            {
              "description": "The termination token sent by mail to the admin contact",
              "required": true,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "token"
            },
            {
              "description": "The internal name of your dedicated server",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            }
          ],
          "description": "Confirm termination of your service",
          "resellerOnly": false,
          "responseFullType": "string"
        }
      ],
      "description": "Confirm termination of your service",
      "path": "/dedicated/server/{serviceName}/confirmTermination"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.Task",
          "httpMethod": "POST",
          "description": "Add your existing windows license serial to this dedicated server. Will be manageable in /license/windows.",
          "parameters": [
            {
              "description": "Your license version",
              "name": "version",
              "fullType": "license.WindowsOsVersionEnum",
              "dataType": "license.WindowsOsVersionEnum",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "body",
              "name": "licenseId",
              "fullType": "string",
              "description": "Your license serial number"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false
        }
      ],
      "path": "/dedicated/server/{serviceName}/license/windows",
      "description": "windows operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/license/compliantWindowsSqlServer",
      "description": "compliantWindowsSqlServer operations",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "license.WindowsSqlVersionEnum[]",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "Get the windows SQL server license compliant with your server.",
          "httpMethod": "GET",
          "responseType": "license.WindowsSqlVersionEnum[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "license.WindowsOsVersionEnum[]",
          "description": "Get the windows license compliant with your server.",
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseFullType": "license.WindowsOsVersionEnum[]",
          "resellerOnly": false
        }
      ],
      "path": "/dedicated/server/{serviceName}/license/compliantWindows",
      "description": "compliantWindows operations"
    },
    {
      "operations": [
        {
          "responseFullType": "dedicated.server.Task",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.Task",
          "httpMethod": "POST",
          "description": "Move an Ip failover to this server",
          "parameters": [
            {
              "description": "The ip to move to this server",
              "name": "ip",
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "paramType": "body",
              "required": true
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false
        }
      ],
      "path": "/dedicated/server/{serviceName}/ipMove",
      "description": "ipMove operations"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.serviceMonitoring",
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "name": "monitoringId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "description": "This monitoring id"
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseType": "dedicated.server.serviceMonitoring",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "responseFullType": "void",
          "resellerOnly": false,
          "httpMethod": "PUT",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "description": "Alter this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "New object properties",
              "name": null,
              "fullType": "dedicated.server.serviceMonitoring",
              "dataType": "dedicated.server.serviceMonitoring",
              "paramType": "body",
              "required": true
            },
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            },
            {
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "monitoringId",
              "fullType": "long",
              "description": "This monitoring id"
            }
          ]
        },
        {
          "responseFullType": "void",
          "resellerOnly": false,
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "fullType": "long",
              "name": "monitoringId",
              "paramType": "path",
              "required": true,
              "dataType": "long",
              "description": "This monitoring id"
            }
          ],
          "description": "Remove this service monitoring",
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE"
        }
      ],
      "path": "/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}",
      "description": "Service monitoring details"
    },
    {
      "path": "/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email",
      "description": "List the dedicated.server.emailAlert objects",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "long[]",
          "parameters": [
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "This monitoring id",
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "monitoringId",
              "fullType": "long"
            }
          ],
          "noAuthentication": false,
          "description": "Service monitoring alert by email",
          "responseType": "long[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET"
        },
        {
          "description": "Add a new email alert",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Alert language",
              "name": "language",
              "fullType": "dedicated.server.AlertLanguageEnum",
              "dataType": "dedicated.server.AlertLanguageEnum",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "body",
              "name": "email",
              "fullType": "string",
              "description": "Alert destination"
            },
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            },
            {
              "fullType": "long",
              "name": "monitoringId",
              "paramType": "path",
              "required": true,
              "dataType": "long",
              "description": "This monitoring id"
            }
          ],
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.emailAlert",
          "responseFullType": "dedicated.server.emailAlert",
          "resellerOnly": false
        }
      ]
    },
    {
      "description": "Service monitoring Email alert",
      "path": "/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}",
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "dedicated.server.emailAlert",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "This monitoring id",
              "fullType": "long",
              "name": "monitoringId",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            },
            {
              "description": "This monitoring id",
              "name": "alertId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties",
          "resellerOnly": false,
          "responseFullType": "dedicated.server.emailAlert"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "httpMethod": "PUT",
          "description": "Alter this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "New object properties",
              "dataType": "dedicated.server.emailAlert",
              "required": true,
              "paramType": "body",
              "name": null,
              "fullType": "dedicated.server.emailAlert"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "monitoringId",
              "fullType": "long",
              "description": "This monitoring id"
            },
            {
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "alertId",
              "fullType": "long",
              "description": "This monitoring id"
            }
          ]
        },
        {
          "httpMethod": "DELETE",
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            },
            {
              "fullType": "long",
              "name": "monitoringId",
              "paramType": "path",
              "required": true,
              "dataType": "long",
              "description": "This monitoring id"
            },
            {
              "description": "This monitoring id",
              "fullType": "long",
              "name": "alertId",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            }
          ],
          "description": "Remove this Email alert monitoring",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}",
      "description": "Monitoring SMS alert details, This service is currently not supported for servers at BHS ",
      "operations": [
        {
          "responseFullType": "dedicated.server.smsAlert",
          "resellerOnly": false,
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "This monitoring id",
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "monitoringId"
            },
            {
              "description": "Id of this alert",
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "alertId",
              "fullType": "long"
            }
          ],
          "description": "Get this object properties",
          "responseType": "dedicated.server.smsAlert",
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
              "description": "New object properties",
              "name": null,
              "fullType": "dedicated.server.smsAlert",
              "dataType": "dedicated.server.smsAlert",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "fullType": "long",
              "name": "monitoringId",
              "paramType": "path",
              "required": true,
              "dataType": "long",
              "description": "This monitoring id"
            },
            {
              "description": "Id of this alert",
              "name": "alertId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "void"
        },
        {
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "This monitoring id",
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "monitoringId",
              "fullType": "long"
            },
            {
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "alertId",
              "fullType": "long",
              "description": "Id of this alert"
            }
          ],
          "noAuthentication": false,
          "description": "Remove this SMS alert",
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "description": "List the dedicated.server.smsAlert objects",
      "path": "/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms",
      "operations": [
        {
          "description": "Service monitoring alert by SMS",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            },
            {
              "description": "This monitoring id",
              "name": "monitoringId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "long[]",
          "resellerOnly": false,
          "responseFullType": "long[]"
        },
        {
          "responseFullType": "dedicated.server.smsAlert",
          "resellerOnly": false,
          "description": "Create a SMS alert",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Daily hour end time for SMS notification",
              "required": false,
              "paramType": "body",
              "dataType": "long",
              "fullType": "long",
              "name": "toHour"
            },
            {
              "description": "Your SMS account",
              "name": "smsAccount",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": true
            },
            {
              "required": true,
              "paramType": "body",
              "dataType": "dedicated.server.AlertLanguageEnum",
              "fullType": "dedicated.server.AlertLanguageEnum",
              "name": "language",
              "description": "Alert language"
            },
            {
              "description": "Daily hour start time for SMS notification",
              "fullType": "long",
              "name": "fromHour",
              "paramType": "body",
              "required": false,
              "dataType": "long"
            },
            {
              "description": "Alert destination",
              "dataType": "string",
              "required": true,
              "paramType": "body",
              "name": "phoneNumberTo",
              "fullType": "string"
            },
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "monitoringId",
              "description": "This monitoring id"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.smsAlert",
          "httpMethod": "POST"
        }
      ]
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "long[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false,
          "description": "Service monitoring details",
          "resellerOnly": false,
          "responseFullType": "long[]"
        },
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.serviceMonitoring",
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.serviceMonitoring",
          "description": "Add a new service monitoring",
          "parameters": [
            {
              "description": "The URL to test",
              "fullType": "string",
              "name": "url",
              "paramType": "body",
              "required": false,
              "dataType": "string"
            },
            {
              "description": "The expected return",
              "dataType": "string",
              "required": false,
              "paramType": "body",
              "name": "challengeText",
              "fullType": "string"
            },
            {
              "required": true,
              "paramType": "body",
              "dataType": "dedicated.server.MonitoringProtocolEnum",
              "fullType": "dedicated.server.MonitoringProtocolEnum",
              "name": "protocol",
              "description": "The protocol to use"
            },
            {
              "fullType": "long",
              "name": "port",
              "paramType": "body",
              "required": true,
              "dataType": "long",
              "description": "The service port to monitor"
            },
            {
              "description": "Is this service monitoring is enabled",
              "name": "enabled",
              "fullType": "boolean",
              "dataType": "boolean",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4",
              "required": true,
              "paramType": "body",
              "name": "ip",
              "fullType": "ipv4",
              "description": "The IP to monitor"
            },
            {
              "name": "interval",
              "fullType": "dedicated.server.MonitoringIntervalEnum",
              "dataType": "dedicated.server.MonitoringIntervalEnum",
              "paramType": "body",
              "required": true,
              "description": "The test interval"
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false
        }
      ],
      "path": "/dedicated/server/{serviceName}/serviceMonitoring",
      "description": "List the dedicated.server.serviceMonitoring objects"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.IpCountryEnum[]",
          "description": "Retrieve available country for IP order",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.IpCountryEnum[]",
          "httpMethod": "GET"
        }
      ],
      "description": "ipCountryAvailable operations",
      "path": "/dedicated/server/{serviceName}/ipCountryAvailable"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string",
          "description": "Terminate your service",
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string",
          "httpMethod": "POST"
        }
      ],
      "path": "/dedicated/server/{serviceName}/terminate",
      "description": "Terminate your service"
    },
    {
      "description": "Details about a Service",
      "path": "/dedicated/server/{serviceName}/serviceInfos",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "services.Service",
          "httpMethod": "GET",
          "responseType": "services.Service",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "httpMethod": "PUT",
          "description": "Alter this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "New object properties",
              "name": null,
              "fullType": "services.Service",
              "dataType": "services.Service",
              "paramType": "body",
              "required": true
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            }
          ]
        }
      ]
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false,
          "description": "Hard reboot this server",
          "httpMethod": "POST",
          "responseType": "dedicated.server.Task",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/reboot",
      "description": "reboot operations"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task",
          "responseType": "dedicated.server.Task",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "Change your Backup FTP password"
        }
      ],
      "path": "/dedicated/server/{serviceName}/features/backupFTP/password",
      "description": "password operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}",
      "description": "Backup Ftp ACL for this server and Backup Ftp",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "description": "The IP Block specific to this ACL",
              "dataType": "ipBlock",
              "required": true,
              "paramType": "path",
              "name": "ipBlock",
              "fullType": "ipBlock"
            }
          ],
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseType": "dedicated.server.BackupFtpAcl",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseFullType": "dedicated.server.BackupFtpAcl"
        },
        {
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "dataType": "dedicated.server.BackupFtpAcl",
              "fullType": "dedicated.server.BackupFtpAcl",
              "name": null,
              "description": "New object properties"
            },
            {
              "description": "The internal name of your dedicated server",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            },
            {
              "description": "The IP Block specific to this ACL",
              "required": true,
              "paramType": "path",
              "dataType": "ipBlock",
              "fullType": "ipBlock",
              "name": "ipBlock"
            }
          ],
          "noAuthentication": false,
          "description": "Alter this object properties",
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "resellerOnly": false,
          "responseFullType": "void"
        },
        {
          "parameters": [
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            },
            {
              "fullType": "ipBlock",
              "name": "ipBlock",
              "paramType": "path",
              "required": true,
              "dataType": "ipBlock",
              "description": "The IP Block specific to this ACL"
            }
          ],
          "noAuthentication": false,
          "description": "Revoke this ACL",
          "httpMethod": "DELETE",
          "responseType": "dedicated.server.Task",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task"
        }
      ]
    },
    {
      "description": "List the dedicated.server.BackupFtpAcl objects",
      "path": "/dedicated/server/{serviceName}/features/backupFTP/access",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "ipBlock[]",
          "description": "List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP",
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "ipBlock[]"
        },
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task",
          "description": "Create a new Backup FTP ACL",
          "parameters": [
            {
              "description": "The IP Block specific to this ACL. It musts belong to your server.",
              "name": "ipBlock",
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "paramType": "body",
              "required": true
            },
            {
              "fullType": "boolean",
              "name": "ftp",
              "paramType": "body",
              "required": false,
              "dataType": "boolean",
              "description": "Wether to allow the FTP protocol for this ACL"
            },
            {
              "description": "Wether to allow the NFS protocol for this ACL",
              "name": "nfs",
              "fullType": "boolean",
              "dataType": "boolean",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "required": true,
              "paramType": "body",
              "name": "cifs",
              "fullType": "boolean",
              "description": "Wether to allow the CIFS (SMB) protocol for this ACL"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.Task"
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/features/backupFTP",
      "description": "Backup Ftp assigned to this server",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.BackupFtp",
          "httpMethod": "GET",
          "responseType": "dedicated.server.BackupFtp",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName",
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "Get this object properties"
        },
        {
          "httpMethod": "POST",
          "responseType": "dedicated.server.Task",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "Create a new Backup FTP space",
          "responseFullType": "dedicated.server.Task",
          "resellerOnly": false
        },
        {
          "description": "Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED",
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.Task",
          "httpMethod": "DELETE",
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task"
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/features/backupFTP/authorizableBlocks",
      "description": "authorizableBlocks operations",
      "operations": [
        {
          "responseFullType": "ipBlock[]",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false,
          "description": "Get all IP blocks that can be used in the ACL",
          "httpMethod": "GET",
          "responseType": "ipBlock[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "description": "Physical KVM",
      "path": "/dedicated/server/{serviceName}/features/kvm",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.kvm",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.kvm",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ],
          "noAuthentication": false
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/features/firewall",
      "description": "Firewall attached to this server",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Firewall",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "Get this object properties",
          "responseType": "dedicated.server.Firewall",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET"
        },
        {
          "description": "Alter this object properties",
          "parameters": [
            {
              "description": "New object properties",
              "dataType": "dedicated.server.Firewall",
              "required": true,
              "paramType": "body",
              "name": null,
              "fullType": "dedicated.server.Firewall"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "PUT",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/features/ipmi/test",
      "description": "test operations",
      "operations": [
        {
          "responseFullType": "dedicated.server.Task",
          "resellerOnly": false,
          "description": "Launch test on KVM IPMI interface",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Result time to live in minutes",
              "name": "ttl",
              "fullType": "dedicated.server.CacheTTLEnum",
              "dataType": "dedicated.server.CacheTTLEnum",
              "paramType": "body",
              "required": true
            },
            {
              "description": "Test to make on KVM IPMI interface",
              "name": "type",
              "fullType": "dedicated.server.IpmiTestTypeEnum",
              "dataType": "dedicated.server.IpmiTestTypeEnum",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "serviceName",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.Task"
        },
        {
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.IpmiTestResult",
          "description": "Result of http, ping and identification tests on IPMI interface",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Test type result on KVM IPMI interface",
              "name": "type",
              "fullType": "dedicated.server.IpmiTestTypeEnum",
              "dataType": "dedicated.server.IpmiTestTypeEnum",
              "paramType": "query",
              "required": true
            },
            {
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "The internal name of your dedicated server"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "dedicated.server.IpmiTestResult"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task",
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.Task",
          "description": "Reset KVM IPMI sessions",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ]
        }
      ],
      "path": "/dedicated/server/{serviceName}/features/ipmi/resetSessions",
      "description": "resetSessions operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/features/ipmi",
      "description": "Server IPMI interface",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Ipmi",
          "httpMethod": "GET",
          "responseType": "dedicated.server.Ipmi",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ]
    },
    {
      "description": "access operations",
      "path": "/dedicated/server/{serviceName}/features/ipmi/access",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task",
          "parameters": [
            {
              "name": "ttl",
              "fullType": "dedicated.server.CacheTTLEnum",
              "dataType": "dedicated.server.CacheTTLEnum",
              "paramType": "body",
              "required": true,
              "description": "Session access time to live in minutes"
            },
            {
              "dataType": "string",
              "required": false,
              "paramType": "body",
              "name": "sshKey",
              "fullType": "string",
              "description": "SSH key name to allow access on KVM/IP interface with (name from /me/sshKey)"
            },
            {
              "fullType": "ipv4",
              "name": "ipToAllow",
              "paramType": "body",
              "required": false,
              "dataType": "ipv4",
              "description": "IP to allow connection from for this IPMI session"
            },
            {
              "description": "IPMI console access",
              "name": "type",
              "fullType": "dedicated.server.IpmiAccessTypeEnum",
              "dataType": "dedicated.server.IpmiAccessTypeEnum",
              "paramType": "body",
              "required": true
            },
            {
              "description": "The internal name of your dedicated server",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "serviceName"
            }
          ],
          "noAuthentication": false,
          "description": "Request an acces on KVM IPMI interface",
          "responseType": "dedicated.server.Task",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST"
        },
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.IpmiAccessValue",
          "httpMethod": "GET",
          "responseType": "dedicated.server.IpmiAccessValue",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "required": true,
              "paramType": "query",
              "dataType": "dedicated.server.IpmiAccessTypeEnum",
              "fullType": "dedicated.server.IpmiAccessTypeEnum",
              "name": "type",
              "description": "IPMI console access"
            },
            {
              "description": "The internal name of your dedicated server",
              "name": "serviceName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "description": "IPMI access method"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task",
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.Task",
          "description": "Reset KVM IPMI interface",
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ],
          "noAuthentication": false
        }
      ],
      "description": "resetInterface operations",
      "path": "/dedicated/server/{serviceName}/features/ipmi/resetInterface"
    },
    {
      "description": "Operations about the DEDICATED service",
      "path": "/dedicated/server",
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
    }
  ],
  "apiVersion": "1.0",
  "models": {
    "dedicated.server.RtmChartTypeEnum": {
      "namespace": "dedicated.server",
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
      "id": "RtmChartTypeEnum",
      "description": "distincts probes type",
      "enumType": "string"
    },
    "dedicated.server.RtmPci": {
      "namespace": "dedicated.server",
      "properties": {
        "device": {
          "description": "PCI device information",
          "canBeNull": true,
          "type": "string"
        },
        "bus": {
          "description": "PCI bus device",
          "canBeNull": true,
          "type": "string"
        }
      },
      "id": "RtmPci",
      "description": "A structure describing informations about server PCI devices"
    },
    "dedicated.server.BackupFtpAcl": {
      "description": "Backup Ftp ACL for this server and Backup Ftp",
      "id": "BackupFtpAcl",
      "properties": {
        "isApplied": {
          "description": "Whether the rule has been applied on the Backup Ftp",
          "readOnly": true,
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean"
        },
        "cifs": {
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": false,
          "description": "Wether to allow the CIFS (SMB) protocol for this ACL"
        },
        "ipBlock": {
          "fullType": "ipBlock",
          "canBeNull": false,
          "type": "ipBlock",
          "readOnly": true,
          "description": "The IP Block specific to this ACL"
        },
        "lastUpdate": {
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime",
          "readOnly": true,
          "description": "Date of the last object modification"
        },
        "ftp": {
          "readOnly": false,
          "description": "Wether to allow the FTP protocol for this ACL",
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean"
        },
        "nfs": {
          "readOnly": false,
          "description": "Wether to allow the NFS protocol for this ACL",
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean"
        }
      },
      "namespace": "dedicated.server"
    },
    "service.RenewalTypeEnum": {
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
      "id": "RenewalTypeEnum",
      "namespace": "service"
    },
    "dedicated.server.Rtm": {
      "namespace": "dedicated.server",
      "properties": {
        "needsUpdate": {
          "readOnly": true,
          "description": "You need to update RTM script on your server",
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean"
        },
        "installedVersion": {
          "readOnly": true,
          "description": "RTM currently installed version",
          "type": "string",
          "canBeNull": true,
          "fullType": "string"
        },
        "currentVersion": {
          "fullType": "string",
          "canBeNull": true,
          "type": "string",
          "description": "RTM current version",
          "readOnly": true
        }
      },
      "description": "Servers statistics sent by RTM (Real Time Monitoring)",
      "id": "Rtm"
    },
    "dedicated.server.VirtualMacManagement": {
      "id": "VirtualMacManagement",
      "description": " ip address linked with this virtual mac address",
      "properties": {
        "ipAddress": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "description": "IP address",
          "readOnly": true
        },
        "virtualMachineName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "description": "Friendly name of your Virtual Machine behind this IP/MAC",
          "readOnly": true
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.HardwareSpecificationsExpansionCard": {
      "namespace": "dedicated.server",
      "description": "A structure describing informations about server expansion cards",
      "id": "HardwareSpecificationsExpansionCard",
      "properties": {
        "type": {
          "description": "expansion card type",
          "canBeNull": false,
          "type": "dedicated.server.HardwareSpecificationsExpansionCardTypeEnum"
        },
        "description": {
          "description": "expansion card description",
          "type": "string",
          "canBeNull": false
        }
      }
    },
    "dedicated.server.ByoiStatusEnum": {
      "namespace": "dedicated.server",
      "enumType": "string",
      "description": "All states a status can be in",
      "id": "ByoiStatusEnum",
      "enum": [
        "doing",
        "done",
        "error"
      ]
    },
    "dedicated.server.Option": {
      "namespace": "dedicated.server",
      "id": "Option",
      "description": "Information about the options of a dedicated server",
      "properties": {
        "option": {
          "type": "dedicated.server.OptionEnum",
          "fullType": "dedicated.server.OptionEnum",
          "canBeNull": false,
          "description": "The option name",
          "readOnly": true
        },
        "state": {
          "description": "The state of the option",
          "readOnly": true,
          "type": "dedicated.server.OptionStateEnum",
          "fullType": "dedicated.server.OptionStateEnum",
          "canBeNull": false
        }
      }
    },
    "complexType.ChartTimestampValue": {
      "id": "ChartTimestampValue",
      "description": "A timestamp associated to a value",
      "properties": {
        "value": {
          "description": null,
          "type": "double",
          "canBeNull": true
        },
        "timestamp": {
          "description": null,
          "type": "long",
          "canBeNull": false
        }
      },
      "namespace": "complexType"
    },
    "dedicated.server.BackupFtp": {
      "namespace": "dedicated.server",
      "id": "BackupFtp",
      "description": "Backup Ftp assigned to this server",
      "properties": {
        "type": {
          "description": "The backup FTP type",
          "readOnly": true,
          "type": "dedicated.server.BackupStorageTypeEnum",
          "canBeNull": false,
          "fullType": "dedicated.server.BackupStorageTypeEnum"
        },
        "readOnlyDate": {
          "description": "If not-null, gives the date since when your account was set in read-only mode because the quota was exceeded",
          "readOnly": true,
          "type": "datetime",
          "canBeNull": true,
          "fullType": "datetime"
        },
        "usage": {
          "readOnly": true,
          "description": "The disk space currently used on your backup FTP in percent",
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "fullType": "complexType.UnitAndValue<long>"
        },
        "ftpBackupName": {
          "type": "string",
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "description": "The backup FTP server name"
        },
        "quota": {
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "description": "The disk space available in gigabytes"
        }
      }
    },
    "dedicated.TaskStatusEnum": {
      "namespace": "dedicated",
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
      "description": "different task status",
      "id": "TaskStatusEnum"
    },
    "service.RenewType": {
      "namespace": "service",
      "id": "RenewType",
      "description": "Map a possible renew for a specific service",
      "properties": {
        "forced": {
          "canBeNull": false,
          "type": "boolean",
          "description": "The service forced to be renewed"
        },
        "manualPayment": {
          "type": "boolean",
          "canBeNull": true,
          "description": "The service needs to be manually renewed and paid"
        },
        "deleteAtExpiration": {
          "description": "The service will be deleted at expiration",
          "type": "boolean",
          "canBeNull": false
        },
        "period": {
          "description": "period of renew in month",
          "type": "long",
          "canBeNull": true
        },
        "automatic": {
          "canBeNull": false,
          "type": "boolean",
          "description": "The service is automatically renewed"
        }
      }
    },
    "dedicated.server.OrderableSysFeatureEnum": {
      "enum": [
        "backupProtocol",
        "monitoring"
      ],
      "description": "Dedicated server orderable features",
      "id": "OrderableSysFeatureEnum",
      "enumType": "string",
      "namespace": "dedicated.server"
    },
    "dedicated.server.BandwidthvRackDetails": {
      "id": "BandwidthvRackDetails",
      "description": "A structure describing vRack bandwidth informations about this dedicated server",
      "properties": {
        "type": {
          "description": "bandwidth offer type",
          "canBeNull": true,
          "type": "dedicated.server.BandwidthvRackTypeEnum"
        },
        "bandwidth": {
          "description": "vrack bandwidth limitation",
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": true
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.IpmiAccessValue": {
      "namespace": "dedicated.server",
      "properties": {
        "value": {
          "description": "value",
          "canBeNull": true,
          "type": "string"
        },
        "expiration": {
          "description": "Session expiration date",
          "type": "datetime",
          "canBeNull": true
        }
      },
      "description": "A structure describing ipmi access value",
      "id": "IpmiAccessValue"
    },
    "dedicated.server.BiosSettingsSgxStatusEnum": {
      "namespace": "dedicated.server",
      "enumType": "string",
      "id": "BiosSettingsSgxStatusEnum",
      "description": "SGX Status enum",
      "enum": [
        "disabled",
        "enabled",
        "software controlled"
      ]
    },
    "dedicated.server.RoutingDetailsIpv4": {
      "id": "RoutingDetailsIpv4",
      "description": "A structure describing IPv4 routing informations about this dedicated server",
      "properties": {
        "network": {
          "type": "ipv4Block",
          "canBeNull": true,
          "description": "Server network"
        },
        "ip": {
          "description": "Server main IP",
          "type": "ipv4",
          "canBeNull": true
        },
        "gateway": {
          "canBeNull": true,
          "type": "ipv4",
          "description": "Server gateway"
        }
      },
      "namespace": "dedicated.server"
    },
    "complexType.ChartReturn": {
      "namespace": "complexType",
      "description": "Chart",
      "id": "ChartReturn",
      "properties": {
        "values": {
          "canBeNull": true,
          "type": "complexType.ChartTimestampValue[]",
          "description": null
        },
        "unit": {
          "description": null,
          "type": "string",
          "canBeNull": true
        }
      }
    },
    "license.WindowsOsVersionEnum": {
      "namespace": "license",
      "id": "WindowsOsVersionEnum",
      "description": "All versions for Windows products",
      "enumType": "string",
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
      ]
    },
    "dedicated.server.HardwareRaidSize": {
      "description": "A structure describing the server's resulting layout after RAID configuration",
      "id": "HardwareRaidSize",
      "properties": {
        "configurations": {
          "canBeNull": false,
          "type": "dedicated.server.HardwareRaidConfiguration[]",
          "description": "Hardware RAID configuration list"
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.virtualNetworkInterface.VirtualNetworkInterface": {
      "properties": {
        "mode": {
          "canBeNull": false,
          "fullType": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum",
          "type": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum",
          "readOnly": false,
          "description": "VirtualNetworkInterface mode"
        },
        "serverName": {
          "readOnly": true,
          "description": "Server bound to this VirtualNetworkInterface",
          "type": "string",
          "fullType": "string",
          "canBeNull": false
        },
        "networkInterfaceController": {
          "description": "NetworkInterfaceControllers bound to this VirtualNetworkInterface",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "macAddress[]",
          "type": "macAddress[]"
        },
        "uuid": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "VirtualNetworkInterface unique id"
        },
        "name": {
          "readOnly": false,
          "description": "User defined VirtualNetworkInterface name",
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "vrack": {
          "description": "vRack name",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "string",
          "type": "string"
        },
        "enabled": {
          "canBeNull": false,
          "fullType": "boolean",
          "type": "boolean",
          "description": "VirtualNetworkInterface activation state",
          "readOnly": true
        }
      },
      "description": "Your VirtualNetworkInterface",
      "id": "VirtualNetworkInterface",
      "namespace": "dedicated.virtualNetworkInterface"
    },
    "dedicated.server.VmacTypeEnum": {
      "enum": [
        "ovh",
        "vmware"
      ],
      "enumType": "string",
      "id": "VmacTypeEnum",
      "description": "Distinct type of virtual mac",
      "namespace": "dedicated.server"
    },
    "dedicated.server.IpmiSupportedFeatures": {
      "id": "IpmiSupportedFeatures",
      "description": "A structure describing the IPMI supported features",
      "properties": {
        "serialOverLanSshKey": {
          "type": "boolean",
          "canBeNull": false,
          "description": "Access to the virtual serial port of your server through an SSH client"
        },
        "serialOverLanURL": {
          "description": "Access to the virtual serial port of your server through an HTML command line interface",
          "canBeNull": false,
          "type": "boolean"
        },
        "kvmipJnlp": {
          "description": "Access to the KVM through a Java web launch application",
          "type": "boolean",
          "canBeNull": false
        },
        "kvmipHtml5URL": {
          "description": "Access to the KVM through an HTML web interface",
          "canBeNull": false,
          "type": "boolean"
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.biosSettings.BiosSettings": {
      "properties": {
        "supportedSettings": {
          "type": "dedicated.server.BiosSettingsSupport",
          "fullType": "dedicated.server.BiosSettingsSupport",
          "canBeNull": false,
          "readOnly": true,
          "description": "List supported setting"
        }
      },
      "description": "Your BiosSettings",
      "id": "BiosSettings",
      "namespace": "dedicated.biosSettings"
    },
    "dedicated.server.RtmMotherboardHw": {
      "properties": {
        "manufacturer": {
          "description": "Motherboard manufacturer",
          "canBeNull": true,
          "type": "string"
        },
        "name": {
          "description": "Motherboard name",
          "canBeNull": true,
          "type": "string"
        }
      },
      "id": "RtmMotherboardHw",
      "description": "A structure describing informations about motherboard",
      "namespace": "dedicated.server"
    },
    "dedicated.server.RtmDisk": {
      "id": "RtmDisk",
      "description": "Server disks informations",
      "properties": {
        "capacity": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "description": "Disk capacity",
          "readOnly": true
        },
        "model": {
          "readOnly": true,
          "description": "Disk model",
          "canBeNull": true,
          "fullType": "string",
          "type": "string"
        },
        "temperature": {
          "canBeNull": true,
          "fullType": "complexType.UnitAndValue<long>",
          "type": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "description": "Disk temperature"
        },
        "disk": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "description": "Disk",
          "readOnly": true
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.BackupStorageOrderable": {
      "namespace": "dedicated.server",
      "description": "A structure describing informations storage backup orderable for this dedicated server",
      "id": "BackupStorageOrderable",
      "properties": {
        "capacities": {
          "description": "Backup storage orderable capacities in gigabytes",
          "canBeNull": true,
          "type": "dedicated.server.BackupStorageCapacityEnum[]"
        },
        "orderable": {
          "description": "Is a backup storage is orderable for this server",
          "type": "boolean",
          "canBeNull": false
        }
      }
    },
    "dedicated.CheckSumTypesEnum": {
      "namespace": "dedicated",
      "enumType": "string",
      "id": "CheckSumTypesEnum",
      "description": "CheckSum type",
      "enum": [
        "md5",
        "sha1",
        "sha256",
        "sha512"
      ]
    },
    "dedicated.server.RtmRaid": {
      "description": "Server raid informations",
      "id": "RtmRaid",
      "properties": {
        "unit": {
          "type": "string",
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "description": "Raid unit"
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.StateEnum": {
      "enum": [
        "error",
        "hacked",
        "hackedBlocked",
        "ok"
      ],
      "enumType": "string",
      "description": "All states a Dedicated can in",
      "id": "StateEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.StatusEnum": {
      "enum": [
        "disable",
        "enable"
      ],
      "id": "StatusEnum",
      "description": "enable or disable",
      "enumType": "string",
      "namespace": "dedicated"
    },
    "dedicated.server.BandwidthvRackTypeEnum": {
      "namespace": "dedicated.server",
      "id": "BandwidthvRackTypeEnum",
      "description": " Different Bandwidth type",
      "enumType": "string",
      "enum": [
        "included",
        "standard"
      ]
    },
    "dedicated.server.kvm": {
      "namespace": "dedicated.server",
      "id": "kvm",
      "description": "Physical KVM",
      "properties": {
        "name": {
          "type": "string",
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "description": "KVM hostname"
        },
        "expiration": {
          "description": "KVM expiration date",
          "readOnly": true,
          "type": "datetime",
          "canBeNull": false,
          "fullType": "datetime"
        },
        "ip": {
          "type": "ipv4",
          "canBeNull": true,
          "fullType": "ipv4",
          "readOnly": true,
          "description": "KVM access ip"
        }
      }
    },
    "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum": {
      "enum": [
        "public",
        "vrack",
        "vrack_aggregation"
      ],
      "enumType": "string",
      "id": "VirtualNetworkInterfaceModeEnum",
      "description": "Available VirtualNetworkInterface modes",
      "namespace": "dedicated.virtualNetworkInterface"
    },
    "dedicated.server.spla": {
      "description": "SPLA licenses management",
      "id": "spla",
      "properties": {
        "status": {
          "type": "dedicated.server.SplaStatusEnum",
          "canBeNull": false,
          "fullType": "dedicated.server.SplaStatusEnum",
          "description": "Status of license",
          "readOnly": true
        },
        "type": {
          "description": "License type",
          "readOnly": true,
          "fullType": "dedicated.server.SplaTypeEnum",
          "canBeNull": false,
          "type": "dedicated.server.SplaTypeEnum"
        },
        "lastUpdate": {
          "description": "Last update timestamp",
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime"
        },
        "id": {
          "description": "License id",
          "readOnly": true,
          "fullType": "long",
          "canBeNull": false,
          "type": "long"
        },
        "serialNumber": {
          "readOnly": false,
          "description": "License serial number",
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.UsbKeyCapacityEnum": {
      "namespace": "dedicated.server",
      "enum": [
        "128",
        "16",
        "256",
        "32",
        "64"
      ],
      "enumType": "long",
      "description": " Different USB key capacity in gigabytes",
      "id": "UsbKeyCapacityEnum"
    },
    "dedicated.server.RtmCommandSize": {
      "description": "A structure describing informations about RTM",
      "id": "RtmCommandSize",
      "properties": {
        "memory": {
          "description": "Memory used by this process",
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>"
        },
        "command": {
          "description": "Complete command line used for starting this process",
          "type": "string",
          "canBeNull": true
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.HardwareSpecificationsDisk": {
      "properties": {
        "diskType": {
          "canBeNull": true,
          "type": "string",
          "description": "type of the disk (SSD, SATA, SAS, ...)"
        },
        "numberOfDisks": {
          "canBeNull": true,
          "type": "long",
          "description": "number of disks in this group"
        },
        "diskGroupId": {
          "type": "long",
          "canBeNull": true,
          "description": "identifier of this disk group"
        },
        "defaultHardwareRaidType": {
          "description": "default hardware raid type for this disk group",
          "canBeNull": true,
          "type": "dedicated.server.HardwareSpecificationsRaidHardEnum"
        },
        "defaultHardwareRaidSize": {
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>",
          "description": "default hardware raid size for this disk group"
        },
        "description": {
          "type": "string",
          "canBeNull": true,
          "description": "human readable description of this disk group"
        },
        "raidController": {
          "description": "raid controller, if any, managing this group of disks",
          "canBeNull": true,
          "type": "string"
        },
        "diskSize": {
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>",
          "description": "disk capacity"
        }
      },
      "description": "A structure describing informations about server disks",
      "id": "HardwareSpecificationsDisk",
      "namespace": "dedicated.server"
    },
    "dedicated.server.IpmiTestTypeEnum": {
      "namespace": "dedicated.server",
      "id": "IpmiTestTypeEnum",
      "description": "Different test can be made on IPMI interface",
      "enumType": "string",
      "enum": [
        "http",
        "password",
        "ping"
      ]
    },
    "dedicated.server.HardwareRaidController": {
      "namespace": "dedicated.server",
      "description": "RAID controller configuration",
      "id": "HardwareRaidController",
      "properties": {
        "type": {
          "description": "Raid controler type",
          "type": "string",
          "canBeNull": false
        },
        "disks": {
          "type": "dedicated.server.HardwareRaidDiskGroup[]",
          "canBeNull": false,
          "description": "Connected disk type"
        },
        "model": {
          "canBeNull": false,
          "type": "string",
          "description": "Raid controler model"
        }
      }
    },
    "secondaryDns.SecondaryDNSNameServer": {
      "properties": {
        "ip": {
          "type": "ipv4",
          "canBeNull": false,
          "description": null
        },
        "hostname": {
          "description": "the name server",
          "canBeNull": false,
          "type": "string"
        },
        "ipv6": {
          "canBeNull": true,
          "type": "ipv6",
          "description": null
        }
      },
      "id": "SecondaryDNSNameServer",
      "description": "A structure describing informations about available nameserver for secondary dns ",
      "namespace": "secondaryDns"
    },
    "dedicated.server.InstallationProgressStatus": {
      "namespace": "dedicated.server",
      "id": "InstallationProgressStatus",
      "description": "A structure describing informations about this dedicated server installation status",
      "properties": {
        "progress": {
          "description": "Installation steps",
          "type": "dedicated.server.InstallationProgressSteps[]",
          "canBeNull": true
        },
        "elapsedTime": {
          "description": "Elapsed time in seconds since installation beggining",
          "type": "long",
          "canBeNull": false
        }
      }
    },
    "dedicated.server.RtmOs": {
      "namespace": "dedicated.server",
      "properties": {
        "release": {
          "description": "OS release",
          "type": "string",
          "canBeNull": true
        },
        "kernelVersion": {
          "description": "OS kernel version",
          "canBeNull": true,
          "type": "string"
        },
        "kernelRelease": {
          "type": "string",
          "canBeNull": true,
          "description": "OS kernel release"
        }
      },
      "id": "RtmOs",
      "description": "A structure describing informations about Rtm os"
    },
    "dedicated.server.RtmRaidVolumePort": {
      "properties": {
        "serial": {
          "description": "Serial of this port",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "string",
          "type": "string"
        },
        "port": {
          "readOnly": true,
          "description": "Raid volume port",
          "canBeNull": true,
          "fullType": "string",
          "type": "string"
        },
        "model": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "description": "Port model name",
          "readOnly": true
        },
        "capacity": {
          "description": "Port capacity",
          "readOnly": true,
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": true
        },
        "status": {
          "readOnly": true,
          "description": "Status of this port",
          "type": "dedicated.server.RtmRaidStatusEnum",
          "fullType": "dedicated.server.RtmRaidStatusEnum",
          "canBeNull": true
        },
        "disk": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "description": "Port disk",
          "readOnly": true
        },
        "syncprogress": {
          "description": "Raid port synchronization progress",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "string",
          "type": "string"
        }
      },
      "description": "Server raid volume port informations",
      "id": "RtmRaidVolumePort",
      "namespace": "dedicated.server"
    },
    "dedicated.server.MonitoringProtocolEnum": {
      "namespace": "dedicated.server",
      "enum": [
        "DNS",
        "FTP",
        "HTTP",
        "IMAP",
        "POP",
        "SMTP",
        "SSH",
        "openTCP"
      ],
      "description": "Monitoring protocol",
      "id": "MonitoringProtocolEnum",
      "enumType": "string"
    },
    "dedicated.server.SwitchingDetails": {
      "id": "SwitchingDetails",
      "description": "A structure describing switching informations about this dedicated server",
      "properties": {
        "name": {
          "canBeNull": true,
          "type": "string",
          "description": "Switch name"
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.BootOptionEnum": {
      "namespace": "dedicated.server",
      "enumType": "string",
      "description": "Different option activated on netboot ",
      "id": "BootOptionEnum",
      "enum": [
        "cpufamily",
        "grsec",
        "ipv6",
        "smp"
      ]
    },
    "dedicated.TaskFunctionEnum": {
      "namespace": "dedicated",
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
      "description": "different task operation",
      "id": "TaskFunctionEnum",
      "enumType": "string"
    },
    "dedicated.server.HardwareRaidProfile": {
      "namespace": "dedicated.server",
      "properties": {
        "controllers": {
          "type": "dedicated.server.HardwareRaidController[]",
          "canBeNull": false,
          "description": "Hardware RAID controller list"
        }
      },
      "description": "A structure describing the server's hardware RAID configuration",
      "id": "HardwareRaidProfile"
    },
    "dedicated.server.FirewallModelEnum": {
      "namespace": "dedicated.server",
      "enum": [
        "asa5505",
        "asa5510",
        "asa5520"
      ],
      "description": "Firewall model name",
      "id": "FirewallModelEnum",
      "enumType": "string"
    },
    "dedicated.server.MrtgTypeEnum": {
      "namespace": "dedicated.server",
      "enumType": "string",
      "id": "MrtgTypeEnum",
      "description": "distincts MRTG type",
      "enum": [
        "errors:download",
        "errors:upload",
        "packets:download",
        "packets:upload",
        "traffic:download",
        "traffic:upload"
      ]
    },
    "dedicated.server.HardwareSpecifications": {
      "namespace": "dedicated.server",
      "id": "HardwareSpecifications",
      "description": "A structure describing informations about this dedicated server",
      "properties": {
        "processorArchitecture": {
          "canBeNull": true,
          "type": "dedicated.server.CpuFamilyEnum",
          "description": "processor architecture bit"
        },
        "numberOfProcessors": {
          "canBeNull": true,
          "type": "long",
          "description": "number of processors in this dedicated server"
        },
        "description": {
          "canBeNull": true,
          "type": "string",
          "description": "commercial name of this server"
        },
        "coresPerProcessor": {
          "type": "long",
          "canBeNull": true,
          "description": "number of cores per processor"
        },
        "bootMode": {
          "description": "Server boot mode",
          "type": "dedicated.server.BootModeEnum",
          "canBeNull": false
        },
        "formFactor": {
          "description": "Server form factor",
          "type": "dedicated.server.FormFactorEnum",
          "canBeNull": true
        },
        "expansionCards": {
          "description": "details about the server's expansion cards",
          "type": "dedicated.server.HardwareSpecificationsExpansionCard[]",
          "canBeNull": true
        },
        "defaultHardwareRaidSize": {
          "description": "Default hardware raid size for this server",
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": true
        },
        "processorName": {
          "description": "processor name",
          "type": "string",
          "canBeNull": true
        },
        "defaultHardwareRaidType": {
          "description": "Default hardware raid type configured on this server",
          "type": "dedicated.server.HardwareSpecificationsRaidHardEnum",
          "canBeNull": true
        },
        "threadsPerProcessor": {
          "description": "number of threads per processor",
          "type": "long",
          "canBeNull": true
        },
        "motherboard": {
          "description": "server motherboard",
          "type": "string",
          "canBeNull": true
        },
        "usbKeys": {
          "description": "Capacity of the USB keys installed on your server, if any",
          "type": "complexType.UnitAndValue<long>[]",
          "canBeNull": true
        },
        "memorySize": {
          "description": "ram capacity",
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>"
        },
        "diskGroups": {
          "type": "dedicated.server.HardwareSpecificationsDisk[]",
          "canBeNull": true,
          "description": "details about the groups of disks in the server"
        }
      }
    },
    "dedicated.server.BootModeEnum": {
      "enumType": "string",
      "description": "Server boot mode",
      "id": "BootModeEnum",
      "enum": [
        "legacy",
        "uefi",
        "uefi-legacy"
      ],
      "namespace": "dedicated.server"
    },
    "dedicated.server.RoutingDetails": {
      "namespace": "dedicated.server",
      "id": "RoutingDetails",
      "description": "A structure describing routing informations about this dedicated server",
      "properties": {
        "ipv6": {
          "canBeNull": true,
          "type": "dedicated.server.RoutingDetailsIpv6",
          "description": "Ipv6 routing details"
        },
        "ipv4": {
          "canBeNull": true,
          "type": "dedicated.server.RoutingDetailsIpv4",
          "description": "Ipv4 routing details"
        }
      }
    },
    "services.Service": {
      "namespace": "services",
      "id": "Service",
      "description": "Details about a Service",
      "properties": {
        "renew": {
          "description": "Way of handling the renew",
          "readOnly": false,
          "canBeNull": true,
          "fullType": "service.RenewType",
          "type": "service.RenewType"
        },
        "domain": {
          "readOnly": true,
          "description": null,
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        },
        "canDeleteAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "description": "Indicates that the service can be set up to be deleted at expiration",
          "readOnly": true
        },
        "renewalType": {
          "description": null,
          "readOnly": true,
          "fullType": "service.RenewalTypeEnum",
          "canBeNull": false,
          "type": "service.RenewalTypeEnum"
        },
        "creation": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "date",
          "type": "date"
        },
        "contactTech": {
          "description": null,
          "readOnly": true,
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "type": "string"
        },
        "engagedUpTo": {
          "description": null,
          "readOnly": true,
          "type": "date",
          "fullType": "date",
          "canBeNull": true
        },
        "contactBilling": {
          "type": "string",
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "description": null,
          "readOnly": true
        },
        "possibleRenewPeriod": {
          "description": "All the possible renew period of your service in month",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "long[]",
          "type": "long[]"
        },
        "serviceId": {
          "description": null,
          "readOnly": true,
          "fullType": "coreTypes.ServiceId:long",
          "canBeNull": false,
          "type": "long"
        },
        "contactAdmin": {
          "readOnly": true,
          "description": null,
          "type": "string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false
        },
        "expiration": {
          "description": null,
          "readOnly": true,
          "type": "date",
          "canBeNull": false,
          "fullType": "date"
        },
        "status": {
          "readOnly": true,
          "description": null,
          "type": "service.StateEnum",
          "fullType": "service.StateEnum",
          "canBeNull": false
        }
      }
    },
    "dedicated.server.InstallationProgressSteps": {
      "properties": {
        "comment": {
          "canBeNull": false,
          "type": "string",
          "description": "Informations about this installation step"
        },
        "status": {
          "type": "dedicated.server.InstallationProgressStatusEnum",
          "canBeNull": false,
          "description": "Status of this installation step"
        },
        "error": {
          "description": "Error details if state is error",
          "type": "string",
          "canBeNull": true
        }
      },
      "description": "A structure describing informations about this dedicated server installation steps",
      "id": "InstallationProgressSteps",
      "namespace": "dedicated.server"
    },
    "dedicated.server.IpmiTestResult": {
      "properties": {
        "date": {
          "canBeNull": true,
          "type": "datetime",
          "description": "Test running date"
        },
        "status": {
          "type": "string",
          "canBeNull": true,
          "description": "Test result"
        }
      },
      "description": "A structure describing IPMI test result",
      "id": "IpmiTestResult",
      "namespace": "dedicated.server"
    },
    "dedicated.server.RtmCpu": {
      "namespace": "dedicated.server",
      "properties": {
        "cache": {
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "description": "CPU cache size"
        },
        "name": {
          "type": "string",
          "canBeNull": true,
          "description": "CPU  name"
        },
        "core": {
          "type": "long",
          "canBeNull": true,
          "description": "CPU core number"
        },
        "freq": {
          "description": "CPU frequency",
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>"
        }
      },
      "id": "RtmCpu",
      "description": "A structure describing informations about server cpu"
    },
    "dedicated.server.InstallCustom": {
      "namespace": "dedicated.server",
      "properties": {
        "installRTM": {
          "type": "boolean",
          "canBeNull": true,
          "description": "true if you want to install RTM"
        },
        "sshKeyName": {
          "description": "The name of ssh key to install",
          "canBeNull": true,
          "type": "string"
        },
        "installSqlServer": {
          "canBeNull": true,
          "type": "boolean",
          "description": "true if you want to install windows with sql feature"
        },
        "language": {
          "description": "install language for ovh install choice",
          "type": "string",
          "canBeNull": true
        },
        "resetHwRaid": {
          "type": "boolean",
          "canBeNull": true,
          "description": "Specify if we should attempt to reset hw raid on install."
        },
        "postInstallationScriptReturn": {
          "description": " the return of your script if everythings ok. Advice: your script should return a unique validation string in case of succes. A good example is \"loh1Xee7eo OK OK OK UGh8Ang1Gu",
          "canBeNull": true,
          "type": "string"
        },
        "useDistribKernel": {
          "canBeNull": true,
          "type": "boolean",
          "description": "true if you want to install with distrib kernel"
        },
        "useSpla": {
          "canBeNull": true,
          "type": "boolean",
          "description": "true if you want to install windows with your spla license"
        },
        "noRaid": {
          "description": "true if you want to install only on the first disk",
          "type": "boolean",
          "canBeNull": true
        },
        "postInstallationScriptLink": {
          "type": "string",
          "canBeNull": true,
          "description": "the url to your custom install script"
        },
        "diskGroupId": {
          "description": "Disk group id to process install on (only available for some templates)",
          "canBeNull": true,
          "type": "long"
        },
        "softRaidDevices": {
          "canBeNull": true,
          "type": "long",
          "description": "Number of devices to use for system's software RAID"
        },
        "customHostname": {
          "canBeNull": true,
          "type": "string",
          "description": "Personnal hostname to use in server reinstallation"
        }
      },
      "id": "InstallCustom",
      "description": "A structure describing informations about installation custom"
    },
    "dedicated.server.BackupStorageTypeEnum": {
      "enumType": "string",
      "description": "Different backup storage type",
      "id": "BackupStorageTypeEnum",
      "enum": [
        "included",
        "storage"
      ],
      "namespace": "dedicated.server"
    },
    "dedicated.DatacenterEnum": {
      "namespace": "dedicated",
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
      "description": "ovh datacenter",
      "id": "DatacenterEnum"
    },
    "dedicated.server.IpOrderableDetails": {
      "properties": {
        "type": {
          "type": "dedicated.server.IpTypeOrderableEnum",
          "canBeNull": false,
          "description": "this IP type"
        },
        "included": {
          "canBeNull": false,
          "type": "boolean",
          "description": "Are those IP included with your offer"
        },
        "ipNumber": {
          "description": "Total number of IP that can be routed to this server",
          "canBeNull": true,
          "type": "long"
        },
        "optionRequired": {
          "description": "Which option is required to order this type of IP",
          "type": "dedicated.server.OptionRequiredEnum",
          "canBeNull": true
        },
        "blockSizes": {
          "type": "dedicated.server.IpBlockSizeEnum[]",
          "canBeNull": false,
          "description": "Orderable IP blocks sizes"
        },
        "number": {
          "type": "long",
          "canBeNull": false,
          "description": "Total number of prefixes that can be routed to this server"
        }
      },
      "description": "A structure describing informations about orderable IP address",
      "id": "IpOrderableDetails",
      "namespace": "dedicated.server"
    },
    "zone.NamedResolutionFieldTypeEnum": {
      "namespace": "zone",
      "description": "Resource record fieldType",
      "id": "NamedResolutionFieldTypeEnum",
      "enumType": "string",
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
      ]
    },
    "dedicated.server.MrtgTimestampValue": {
      "namespace": "dedicated.server",
      "id": "MrtgTimestampValue",
      "description": "A timestamp associated to a value",
      "properties": {
        "value": {
          "description": null,
          "canBeNull": true,
          "type": "complexType.UnitAndValue<double>"
        },
        "timestamp": {
          "canBeNull": false,
          "type": "long",
          "description": null
        }
      }
    },
    "dedicated.server.RoutingDetailsIpv6": {
      "namespace": "dedicated.server",
      "properties": {
        "gateway": {
          "type": "ipv6",
          "canBeNull": true,
          "description": "Server gateway"
        },
        "ip": {
          "canBeNull": true,
          "type": "ipv6Block",
          "description": "Server main IP"
        },
        "network": {
          "description": "Server network",
          "canBeNull": true,
          "type": "ipv6Block"
        }
      },
      "id": "RoutingDetailsIpv6",
      "description": "A structure describing IPv6 routing informations about this dedicated server"
    },
    "dedicated.networkInterfaceController.NetworkInterfaceController": {
      "description": "Your networkInterfaceController",
      "id": "NetworkInterfaceController",
      "properties": {
        "linkType": {
          "description": "NetworkInterfaceController linkType",
          "readOnly": true,
          "type": "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum",
          "canBeNull": false,
          "fullType": "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum"
        },
        "mac": {
          "description": "NetworkInterfaceController mac",
          "readOnly": true,
          "type": "macAddress",
          "canBeNull": false,
          "fullType": "macAddress"
        },
        "virtualNetworkInterface": {
          "fullType": "uuid",
          "canBeNull": true,
          "type": "uuid",
          "readOnly": true,
          "description": "VirtualNetworkInterface bound to this NetworkInterfaceController"
        }
      },
      "namespace": "dedicated.networkInterfaceController"
    },
    "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum": {
      "enum": [
        "isolated",
        "private",
        "private_lag",
        "provisioning",
        "public"
      ],
      "enumType": "string",
      "description": "List NetworkInterfaceController linktype",
      "id": "NetworkInterfaceControllerLinkTypeEnum",
      "namespace": "dedicated.networkInterfaceController"
    },
    "secondaryDns.SecondaryDNSCheckField": {
      "properties": {
        "fieldValue": {
          "description": "The field value to add on your DNS zone for this subDomain",
          "type": "string",
          "canBeNull": false
        },
        "fieldType": {
          "canBeNull": false,
          "type": "zone.NamedResolutionFieldTypeEnum",
          "description": "The field type to add on your DNS zone for this subDomain"
        },
        "subDomain": {
          "description": "The subdomain to add on your DNS zone for the domain",
          "canBeNull": false,
          "type": "string"
        }
      },
      "id": "SecondaryDNSCheckField",
      "description": "A structure describing informations about secondary dns check field",
      "namespace": "secondaryDns"
    },
    "dedicated.server.SupportLevelOrderable": {
      "properties": {
        "levels": {
          "description": "Support level  orderable",
          "canBeNull": true,
          "type": "dedicated.server.SupportLevelOrderableEnum[]"
        },
        "orderable": {
          "description": "Is a support level is orderable for this server",
          "canBeNull": false,
          "type": "boolean"
        }
      },
      "id": "SupportLevelOrderable",
      "description": "A structure describing informations support level orderable for this dedicated server",
      "namespace": "dedicated.server"
    },
    "support.NewMessageInfo": {
      "properties": {
        "ticketId": {
          "description": "Ticket identifier",
          "type": "long",
          "canBeNull": false
        },
        "ticketNumber": {
          "description": "Ticket external number",
          "type": "long",
          "canBeNull": false
        },
        "messageId": {
          "description": "Message identifier",
          "type": "long",
          "canBeNull": false
        }
      },
      "description": "Newly created support identifiers",
      "id": "NewMessageInfo",
      "namespace": "support"
    },
    "dedicated.biosSettingsSgx.BiosSettingsSgx": {
      "id": "BiosSettingsSgx",
      "description": "Your BiosSettings for SGX feature",
      "properties": {
        "prmrr": {
          "canBeNull": false,
          "fullType": "dedicated.server.BiosSettingsSgxPrmrrEnum",
          "type": "dedicated.server.BiosSettingsSgxPrmrrEnum",
          "readOnly": true,
          "description": "Settings sections"
        },
        "status": {
          "description": "Settings sections",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "dedicated.server.BiosSettingsSgxStatusEnum",
          "type": "dedicated.server.BiosSettingsSgxStatusEnum"
        }
      },
      "namespace": "dedicated.biosSettingsSgx"
    },
    "dedicated.server.DiskTypeEnum": {
      "enum": [
        "NVMe",
        "SAS",
        "SATA",
        "SSD",
        "Unknown"
      ],
      "id": "DiskTypeEnum",
      "description": "Disk interface type enum",
      "enumType": "string",
      "namespace": "dedicated.server"
    },
    "dedicated.server.OptionRequiredEnum": {
      "enum": [
        "professionalUse"
      ],
      "enumType": "string",
      "id": "OptionRequiredEnum",
      "description": "Required option",
      "namespace": "dedicated.server"
    },
    "dedicated.server.IpTypeOrderableEnum": {
      "namespace": "dedicated.server",
      "enum": [
        "failover",
        "static",
        "unshielded"
      ],
      "id": "IpTypeOrderableEnum",
      "description": "Orderable IP type",
      "enumType": "string"
    },
    "service.TerminationReasonEnum": {
      "enumType": "string",
      "description": "All reasons you can provide for a service termination",
      "id": "TerminationReasonEnum",
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
      "namespace": "service"
    },
    "complexType.UnitAndValue<T>": {
      "namespace": "complexType",
      "id": "UnitAndValue",
      "generics": [
        "T"
      ],
      "description": "A numeric value tagged with its unit",
      "properties": {
        "unit": {
          "description": null,
          "type": "string",
          "canBeNull": false
        },
        "value": {
          "type": "T",
          "canBeNull": false,
          "description": null
        }
      }
    },
    "dedicated.server.RtmLoad": {
      "namespace": "dedicated.server",
      "properties": {
        "swap": {
          "canBeNull": true,
          "type": "complexType.UnitAndValue<double>",
          "description": "Swap usage"
        },
        "processRunning": {
          "description": "Number of process running",
          "canBeNull": true,
          "type": "long"
        },
        "uptime": {
          "description": "Server uptime",
          "canBeNull": true,
          "type": "long"
        },
        "loadavg1": {
          "type": "double",
          "canBeNull": true,
          "description": "Load average in the last 1 minute"
        },
        "memory": {
          "canBeNull": true,
          "type": "complexType.UnitAndValue<double>",
          "description": "Memory usage"
        },
        "cpu": {
          "description": "CPU usage",
          "canBeNull": true,
          "type": "complexType.UnitAndValue<double>"
        },
        "loadavg5": {
          "description": "Load average in the last 5 minutes",
          "canBeNull": true,
          "type": "double"
        },
        "loadavg15": {
          "type": "double",
          "canBeNull": true,
          "description": "Load average in the last 15 minutes"
        },
        "processCount": {
          "description": "Number of processes using or waiting for CPU time",
          "type": "long",
          "canBeNull": true
        }
      },
      "description": "A structure describing informations about server load",
      "id": "RtmLoad"
    },
    "dedicated.server.Netboot": {
      "namespace": "dedicated.server",
      "description": "Available boots",
      "id": "Netboot",
      "properties": {
        "bootType": {
          "canBeNull": false,
          "fullType": "dedicated.server.BootTypeEnum",
          "type": "dedicated.server.BootTypeEnum",
          "description": "the boot system",
          "readOnly": true
        },
        "kernel": {
          "description": "The boot kernel",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "description": {
          "readOnly": true,
          "description": "the boot description",
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "bootId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "description": "boot id",
          "readOnly": true
        }
      }
    },
    "dedicated.server.HardwareSpecificationsExpansionCardTypeEnum": {
      "enum": [
        "fpga",
        "gpu"
      ],
      "enumType": "string",
      "description": "Expansion card type enum",
      "id": "HardwareSpecificationsExpansionCardTypeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.RtmRaidVolume": {
      "namespace": "dedicated.server",
      "properties": {
        "chunks": {
          "type": "string",
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "description": "Raid volume chunks"
        },
        "capacity": {
          "type": "complexType.UnitAndValue<double>",
          "canBeNull": true,
          "fullType": "complexType.UnitAndValue<double>",
          "description": "Raid volume capacity",
          "readOnly": true
        },
        "phys": {
          "fullType": "string",
          "canBeNull": true,
          "type": "string",
          "readOnly": true,
          "description": "Raid volume phys"
        },
        "label": {
          "type": "string",
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "description": "Raid volume label"
        },
        "type": {
          "type": "string",
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "description": "Raid volume type"
        },
        "volume": {
          "description": "Raid volume name",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": true,
          "type": "string"
        },
        "status": {
          "fullType": "dedicated.server.RtmRaidStatusEnum",
          "canBeNull": true,
          "type": "dedicated.server.RtmRaidStatusEnum",
          "description": "Raid volume status",
          "readOnly": true
        },
        "stripe": {
          "fullType": "string",
          "canBeNull": true,
          "type": "string",
          "readOnly": true,
          "description": "Raid volume stripe"
        },
        "letter": {
          "type": "string",
          "canBeNull": true,
          "fullType": "string",
          "description": "Raid volume letter",
          "readOnly": true
        },
        "syncprogress": {
          "readOnly": true,
          "description": "Raid volume synchronization progress",
          "type": "string",
          "canBeNull": true,
          "fullType": "string"
        }
      },
      "id": "RtmRaidVolume",
      "description": "Server raid volume information"
    },
    "dedicated.server.BandwidthTypeEnum": {
      "namespace": "dedicated.server",
      "enum": [
        "included",
        "platinum",
        "premium",
        "standard",
        "ultimate"
      ],
      "description": " Different Bandwidth type",
      "id": "BandwidthTypeEnum",
      "enumType": "string"
    },
    "dedicated.server.RtmPartition": {
      "properties": {
        "usage": {
          "description": "Partition usage",
          "readOnly": true,
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "fullType": "complexType.UnitAndValue<long>"
        },
        "partition": {
          "type": "string",
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "description": "Partition"
        },
        "inodeUsage": {
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>",
          "description": "Partition inode",
          "readOnly": true
        },
        "mountPoint": {
          "type": "string",
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "description": "Partition mount point"
        }
      },
      "id": "RtmPartition",
      "description": "Server partitions informations",
      "namespace": "dedicated.server"
    },
    "dedicated.server.BootTypeEnum": {
      "enum": [
        "harddisk",
        "internal",
        "ipxeCustomerScript",
        "network",
        "rescue"
      ],
      "id": "BootTypeEnum",
      "description": " Different netboot boot",
      "enumType": "string",
      "namespace": "dedicated.server"
    },
    "dedicated.server.BiosSettingsSupportSgxOptions": {
      "properties": {
        "prmrr": {
          "canBeNull": false,
          "type": "dedicated.server.BiosSettingsSgxPrmrrEnum[]",
          "description": "Supported SGX prmrr values"
        },
        "status": {
          "type": "dedicated.server.BiosSettingsSgxStatusEnum[]",
          "canBeNull": false,
          "description": "Supported SGX statuses"
        }
      },
      "description": "A structure describing supported SGX options values",
      "id": "BiosSettingsSupportSgxOptions",
      "namespace": "dedicated.server"
    },
    "dedicated.BinaryFirewall": {
      "description": "Get list of compatible firewall binaries",
      "id": "BinaryFirewall",
      "properties": {
        "asdm": {
          "canBeNull": false,
          "type": "string[]",
          "description": "List of compatible asdm binaries names"
        },
        "asa": {
          "canBeNull": false,
          "type": "string[]",
          "description": "List of compatible asa binaries names"
        },
        "type": {
          "description": null,
          "type": "dedicated.ProfileFirewallEnum",
          "canBeNull": false
        }
      },
      "namespace": "dedicated"
    },
    "license.WindowsSqlVersionEnum": {
      "namespace": "license",
      "enumType": "string",
      "description": "All SQL Server versions for Windows products",
      "id": "WindowsSqlVersionEnum",
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
    "dedicated.server.OptionEnum": {
      "namespace": "dedicated.server",
      "enumType": "string",
      "description": "All options a dedicated server can have and release",
      "id": "OptionEnum",
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
      ]
    },
    "dedicated.server.emailAlert": {
      "id": "emailAlert",
      "description": "Service monitoring Email alert",
      "properties": {
        "email": {
          "readOnly": false,
          "description": "Alert destination",
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        },
        "language": {
          "type": "dedicated.server.AlertLanguageEnum",
          "canBeNull": false,
          "fullType": "dedicated.server.AlertLanguageEnum",
          "description": "Alert language",
          "readOnly": false
        },
        "alertId": {
          "fullType": "long",
          "canBeNull": false,
          "type": "long",
          "readOnly": true,
          "description": "This monitoring id"
        },
        "enabled": {
          "description": "Is this monitor enabled",
          "readOnly": false,
          "fullType": "boolean",
          "canBeNull": false,
          "type": "boolean"
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.MonitoringIntervalEnum": {
      "namespace": "dedicated.server",
      "enumType": "string",
      "description": "Monitoring interval in seconds",
      "id": "MonitoringIntervalEnum",
      "enum": [
        "1800",
        "21600",
        "300",
        "3600"
      ]
    },
    "dedicated.server.BiosSettingsSgxPrmrrEnum": {
      "namespace": "dedicated.server",
      "enum": [
        "128",
        "256",
        "32",
        "64"
      ],
      "enumType": "string",
      "description": "SGX PRMRR value enum",
      "id": "BiosSettingsSgxPrmrrEnum"
    },
    "dedicated.server.Ipmi": {
      "namespace": "dedicated.server",
      "id": "Ipmi",
      "description": "Server IPMI interface",
      "properties": {
        "supportedFeatures": {
          "description": "A structure describing the IPMI supported features",
          "readOnly": true,
          "type": "dedicated.server.IpmiSupportedFeatures",
          "fullType": "dedicated.server.IpmiSupportedFeatures",
          "canBeNull": false
        },
        "activated": {
          "readOnly": true,
          "description": "true, if IPMI is available on this server",
          "canBeNull": false,
          "fullType": "boolean",
          "type": "boolean"
        }
      }
    },
    "dedicated.server.IpBlockSizeEnum": {
      "namespace": "dedicated.server",
      "enumType": "long",
      "id": "IpBlockSizeEnum",
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
      ]
    },
    "dedicated.server.RtmMemory": {
      "properties": {
        "slot": {
          "description": "Memory slot",
          "canBeNull": true,
          "type": "string"
        },
        "capacity": {
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "description": "Memory capacity "
        }
      },
      "description": "A structure describing informations about server memory",
      "id": "RtmMemory",
      "namespace": "dedicated.server"
    },
    "dedicated.server.AccessTypeEnum": {
      "namespace": "dedicated.server",
      "enum": [
        "DIRECTADMIN_PANEL",
        "PLESK_PANEL",
        "PROXMOX_PANEL",
        "RDP",
        "SQL_SERVER",
        "SSH",
        "WEB_PANEL"
      ],
      "description": "Application access type",
      "id": "AccessTypeEnum",
      "enumType": "string"
    },
    "dedicated.server.UsbKeyOrderableDetails": {
      "description": "A structure describing informations about orderable USB keys",
      "id": "UsbKeyOrderableDetails",
      "properties": {
        "number": {
          "description": "Number of USB keys that can be ordered for this server",
          "canBeNull": false,
          "type": "long"
        },
        "capacity": {
          "description": "Orderable USB keys capacity in gigabytes",
          "type": "dedicated.server.UsbKeyCapacityEnum[]",
          "canBeNull": false
        },
        "orderable": {
          "type": "boolean",
          "canBeNull": false,
          "description": "Is USB keys orderable for this server"
        },
        "optionRequired": {
          "type": "dedicated.server.OptionRequiredEnum",
          "canBeNull": true,
          "description": "Which option is required to order an USB key"
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.BandwidthDetails": {
      "namespace": "dedicated.server",
      "id": "BandwidthDetails",
      "description": "A structure describing bandwidth informations about this dedicated server",
      "properties": {
        "InternetToOvh": {
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>",
          "description": "bandwidth limitation Internet to OVH"
        },
        "type": {
          "description": "bandwidth offer type",
          "canBeNull": true,
          "type": "dedicated.server.BandwidthTypeEnum"
        },
        "OvhToOvh": {
          "description": "bandwidth limitation OVH to OVH",
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": true
        },
        "OvhToInternet": {
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>",
          "description": "bandwidth limitation OVH to Internet"
        }
      }
    },
    "dedicated.server.Access": {
      "description": "A structure describing the server's access",
      "id": "Access",
      "properties": {
        "type": {
          "description": "Application access type",
          "canBeNull": false,
          "type": "dedicated.server.AccessTypeEnum"
        },
        "password": {
          "canBeNull": false,
          "type": "password",
          "description": "Password"
        },
        "user": {
          "type": "string",
          "canBeNull": true,
          "description": "Login"
        },
        "url": {
          "description": "Url",
          "type": "string",
          "canBeNull": true
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.Firewall": {
      "id": "Firewall",
      "description": "Firewall attached to this server",
      "properties": {
        "model": {
          "type": "dedicated.server.FirewallModelEnum",
          "canBeNull": true,
          "fullType": "dedicated.server.FirewallModelEnum",
          "readOnly": true,
          "description": "Firewall model"
        },
        "mode": {
          "readOnly": true,
          "description": "transparent mode : device is invisible on the network; routed mode : the security appliance is considered to be a router hop in the network",
          "fullType": "dedicated.server.FirewallModeEnum",
          "canBeNull": false,
          "type": "dedicated.server.FirewallModeEnum"
        },
        "ip": {
          "description": "Firewall management IP",
          "readOnly": true,
          "fullType": "ipv4",
          "canBeNull": false,
          "type": "ipv4"
        },
        "enabled": {
          "description": null,
          "readOnly": false,
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean"
        },
        "firewall": {
          "fullType": "string",
          "canBeNull": false,
          "type": "string",
          "readOnly": true,
          "description": null
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.ByoiStatus": {
      "properties": {
        "checksum": {
          "fullType": "string",
          "canBeNull": true,
          "type": "string",
          "description": "Last checksum",
          "readOnly": true
        },
        "message": {
          "readOnly": true,
          "description": "Last message",
          "type": "string",
          "canBeNull": true,
          "fullType": "string"
        },
        "status": {
          "description": "Status",
          "readOnly": true,
          "fullType": "dedicated.server.ByoiStatusEnum",
          "canBeNull": true,
          "type": "dedicated.server.ByoiStatusEnum"
        },
        "servername": {
          "fullType": "string",
          "canBeNull": true,
          "type": "string",
          "readOnly": true,
          "description": "Server name"
        }
      },
      "description": "Bring you own Image on your server",
      "id": "ByoiStatus",
      "namespace": "dedicated.server"
    },
    "dedicated.server.Intervention": {
      "id": "Intervention",
      "description": "Intervention made on this server",
      "properties": {
        "interventionId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "The intervention id"
        },
        "type": {
          "canBeNull": true,
          "fullType": "string",
          "type": "string",
          "description": "the intervention type",
          "readOnly": true
        },
        "date": {
          "readOnly": true,
          "description": "the intervention start date",
          "canBeNull": true,
          "fullType": "datetime",
          "type": "datetime"
        }
      },
      "namespace": "dedicated.server"
    },
    "service.StateEnum": {
      "namespace": "service",
      "enumType": "string",
      "description": "",
      "id": "StateEnum",
      "enum": [
        "expired",
        "inCreation",
        "ok",
        "pendingDebt",
        "unPaid"
      ]
    },
    "secondaryDns.SecondaryDNS": {
      "namespace": "secondaryDns",
      "id": "SecondaryDNS",
      "description": "Secondary dns infos",
      "properties": {
        "ipMaster": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "description": "master ip",
          "readOnly": false
        },
        "creationDate": {
          "description": "",
          "readOnly": true,
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false
        },
        "dns": {
          "readOnly": true,
          "description": "secondary dns server",
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "description": "domain on slave server",
          "readOnly": true
        }
      }
    },
    "dedicated.server.SupportLevelEnum": {
      "namespace": "dedicated.server",
      "enum": [
        "critical",
        "fastpath",
        "gs",
        "pro"
      ],
      "enumType": "string",
      "id": "SupportLevelEnum",
      "description": "distincts support level"
    },
    "coreTypes.CountryEnum": {
      "id": "CountryEnum",
      "description": "ISO country codes",
      "enumType": "string",
      "enum": [
        "ac",
        "ad",
        "ae",
        "af",
        "ag",
        "ai",
        "al",
        "am",
        "an",
        "ao",
        "aq",
        "ar",
        "as",
        "at",
        "au",
        "aw",
        "ax",
        "az",
        "ba",
        "bb",
        "bd",
        "be",
        "bf",
        "bg",
        "bh",
        "bi",
        "bj",
        "bl",
        "bm",
        "bn",
        "bo",
        "bq",
        "br",
        "bs",
        "bt",
        "bv",
        "bw",
        "by",
        "bz",
        "ca",
        "cc",
        "cd",
        "cf",
        "cg",
        "ch",
        "ci",
        "ck",
        "cl",
        "cm",
        "cn",
        "co",
        "cr",
        "cs",
        "cu",
        "cv",
        "cw",
        "cx",
        "cy",
        "cz",
        "de",
        "dj",
        "dk",
        "dm",
        "do",
        "dz",
        "ec",
        "ee",
        "eg",
        "eh",
        "er",
        "es",
        "et",
        "fc",
        "fd",
        "fi",
        "fj",
        "fk",
        "fm",
        "fo",
        "fr",
        "fx",
        "ga",
        "gb",
        "gd",
        "ge",
        "gf",
        "gg",
        "gh",
        "gi",
        "gl",
        "gm",
        "gn",
        "gp",
        "gq",
        "gr",
        "gs",
        "gt",
        "gu",
        "gw",
        "gy",
        "hk",
        "hm",
        "hn",
        "hr",
        "ht",
        "hu",
        "id",
        "ie",
        "il",
        "im",
        "in",
        "io",
        "iq",
        "ir",
        "is",
        "it",
        "je",
        "jm",
        "jo",
        "jp",
        "ke",
        "kg",
        "kh",
        "ki",
        "km",
        "kn",
        "kp",
        "kr",
        "kw",
        "ky",
        "kz",
        "la",
        "lb",
        "lc",
        "li",
        "lk",
        "lr",
        "ls",
        "lt",
        "lu",
        "lv",
        "ly",
        "ma",
        "mc",
        "md",
        "me",
        "mf",
        "mg",
        "mh",
        "mk",
        "ml",
        "mm",
        "mn",
        "mo",
        "mp",
        "mq",
        "mr",
        "ms",
        "mt",
        "mu",
        "mv",
        "mw",
        "mx",
        "my",
        "mz",
        "na",
        "nc",
        "ne",
        "nf",
        "ng",
        "ni",
        "nl",
        "no",
        "np",
        "nr",
        "nu",
        "nz",
        "om",
        "pa",
        "pe",
        "pf",
        "pg",
        "ph",
        "pk",
        "pl",
        "pm",
        "pn",
        "pr",
        "ps",
        "pt",
        "pw",
        "py",
        "qa",
        "qc",
        "re",
        "ro",
        "rs",
        "ru",
        "rw",
        "sa",
        "sb",
        "sc",
        "sd",
        "se",
        "sg",
        "sh",
        "si",
        "sj",
        "sk",
        "sl",
        "sm",
        "sn",
        "so",
        "sr",
        "ss",
        "st",
        "sv",
        "sx",
        "sy",
        "sz",
        "tc",
        "td",
        "tf",
        "tg",
        "th",
        "tj",
        "tk",
        "tl",
        "tm",
        "tn",
        "to",
        "tp",
        "tr",
        "tt",
        "tv",
        "tw",
        "tz",
        "ua",
        "ug",
        "uk",
        "um",
        "us",
        "uy",
        "uz",
        "va",
        "vc",
        "ve",
        "vg",
        "vi",
        "vn",
        "vu",
        "we",
        "wf",
        "ws",
        "ye",
        "yt",
        "yu",
        "za",
        "zm",
        "zw"
      ],
      "namespace": "coreTypes"
    },
    "service.TerminationFutureUseEnum": {
      "enum": [
        "NOT_REPLACING_SERVICE",
        "OTHER",
        "SUBSCRIBE_AN_OTHER_SERVICE",
        "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
        "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
      ],
      "description": "All future uses you can provide for a service termination",
      "id": "TerminationFutureUseEnum",
      "enumType": "string",
      "namespace": "service"
    },
    "dedicated.server.RtmConnection": {
      "properties": {
        "port": {
          "description": "Port opened",
          "canBeNull": true,
          "type": "long"
        },
        "cmdline": {
          "canBeNull": true,
          "type": "string",
          "description": "Complete command line used for starting this process"
        },
        "procname": {
          "type": "string",
          "canBeNull": true,
          "description": "Name of the process"
        },
        "uid": {
          "description": "System user ID",
          "type": "long",
          "canBeNull": true
        },
        "exe": {
          "description": "Path to the program",
          "type": "string",
          "canBeNull": true
        },
        "pid": {
          "description": "Process ID",
          "canBeNull": true,
          "type": "long"
        },
        "domain": {
          "type": "string",
          "canBeNull": true,
          "description": "Domain used by the process"
        },
        "ip": {
          "description": "The IP address connected",
          "type": "ip",
          "canBeNull": true
        },
        "username": {
          "description": "Username used to start the process",
          "type": "string",
          "canBeNull": true
        }
      },
      "description": "A structure describing informations about opened sockets on the server",
      "id": "RtmConnection",
      "namespace": "dedicated.server"
    },
    "dedicated.server.BackupStorageCapacityEnum": {
      "enum": [
        "1000",
        "10000",
        "500",
        "5000"
      ],
      "id": "BackupStorageCapacityEnum",
      "description": "Different backup storage capacity in gigabytes",
      "enumType": "long",
      "namespace": "dedicated.server"
    },
    "dedicated.server.IpOrderable": {
      "description": "A structure describing informations about orderable IP address",
      "id": "IpOrderable",
      "properties": {
        "ipv4": {
          "description": "Orderable IP v4 details",
          "canBeNull": true,
          "type": "dedicated.server.IpOrderableDetails[]"
        },
        "ipv6": {
          "canBeNull": true,
          "type": "dedicated.server.IpOrderableDetails[]",
          "description": "Orderable IP v6 details"
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.SupportLevelOrderableEnum": {
      "description": "distincts support level",
      "id": "SupportLevelOrderableEnum",
      "enumType": "string",
      "enum": [
        "critical",
        "fastpath",
        "gs"
      ],
      "namespace": "dedicated.server"
    },
    "dedicated.server.SplaStatusEnum": {
      "enumType": "string",
      "id": "SplaStatusEnum",
      "description": "SPLA license status",
      "enum": [
        "terminated",
        "used",
        "waitingToCheck"
      ],
      "namespace": "dedicated.server"
    },
    "dedicated.server.Dedicated": {
      "namespace": "dedicated.server",
      "properties": {
        "linkSpeed": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "description": null,
          "readOnly": true
        },
        "commercialRange": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "dedicater server commercial range"
        },
        "bootId": {
          "readOnly": false,
          "description": null,
          "type": "long",
          "fullType": "long",
          "canBeNull": true
        },
        "ip": {
          "description": "dedicated server ip",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "ipv4",
          "type": "ipv4"
        },
        "os": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "description": "Operating system",
          "readOnly": true
        },
        "state": {
          "canBeNull": false,
          "fullType": "dedicated.server.StateEnum",
          "type": "dedicated.server.StateEnum",
          "description": null,
          "readOnly": false
        },
        "monitoring": {
          "canBeNull": false,
          "fullType": "boolean",
          "type": "boolean",
          "description": "Icmp monitoring state",
          "readOnly": false
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "description": "dedicated server name",
          "readOnly": true
        },
        "datacenter": {
          "type": "dedicated.DatacenterEnum",
          "fullType": "dedicated.DatacenterEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "dedicated datacenter localisation"
        },
        "rootDevice": {
          "description": null,
          "readOnly": false,
          "type": "string",
          "fullType": "string",
          "canBeNull": true
        },
        "supportLevel": {
          "canBeNull": false,
          "fullType": "dedicated.server.SupportLevelEnum",
          "type": "dedicated.server.SupportLevelEnum",
          "description": "Dedicated server support level",
          "readOnly": true
        },
        "professionalUse": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "description": "Does this server have professional use option",
          "readOnly": true
        },
        "rack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": null
        },
        "rescueMail": {
          "description": null,
          "readOnly": false,
          "canBeNull": true,
          "fullType": "string",
          "type": "string"
        },
        "reverse": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "description": "dedicated server reverse",
          "readOnly": true
        },
        "serverId": {
          "canBeNull": false,
          "fullType": "long",
          "type": "long",
          "readOnly": true,
          "description": "your server id"
        }
      },
      "id": "Dedicated",
      "description": "Server informations"
    },
    "dedicated.server.AlertLanguageEnum": {
      "enumType": "string",
      "id": "AlertLanguageEnum",
      "description": "Monitoring alert language",
      "enum": [
        "cz",
        "de",
        "en",
        "es",
        "fi",
        "fr",
        "it",
        "lt",
        "nl",
        "pl",
        "pt"
      ],
      "namespace": "dedicated.server"
    },
    "dedicated.server.FirewallModeEnum": {
      "enum": [
        "routed",
        "transparent"
      ],
      "description": "Dedicated server firewall mode",
      "id": "FirewallModeEnum",
      "enumType": "string",
      "namespace": "dedicated.server"
    },
    "dedicated.ProfileFirewallEnum": {
      "enumType": "string",
      "id": "ProfileFirewallEnum",
      "description": "profile firewall asa",
      "enum": [
        "cisco.asa5505",
        "cisco.asa5510",
        "cisco.asa5520"
      ],
      "namespace": "dedicated"
    },
    "dedicated.server.NetworkSpecifications": {
      "namespace": "dedicated.server",
      "id": "NetworkSpecifications",
      "description": "A structure describing network informations about this dedicated server",
      "properties": {
        "traffic": {
          "type": "dedicated.server.TrafficDetails",
          "canBeNull": true,
          "description": "Traffic details"
        },
        "vrack": {
          "description": "vRack details",
          "canBeNull": true,
          "type": "dedicated.server.BandwidthvRackDetails"
        },
        "ola": {
          "canBeNull": true,
          "type": "dedicated.server.OlaDetails",
          "description": "OLA details"
        },
        "connection": {
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>",
          "description": "Network connection flow rate"
        },
        "bandwidth": {
          "canBeNull": true,
          "type": "dedicated.server.BandwidthDetails",
          "description": "Bandwidth details"
        },
        "routing": {
          "canBeNull": true,
          "type": "dedicated.server.RoutingDetails",
          "description": "Routing details"
        },
        "switching": {
          "description": "Switching details",
          "type": "dedicated.server.SwitchingDetails",
          "canBeNull": true
        }
      }
    },
    "dedicated.server.BiosSettingsSupport": {
      "id": "BiosSettingsSupport",
      "description": "A structure describing supported bios settings",
      "properties": {
        "sgx": {
          "description": "SGX feature support",
          "canBeNull": false,
          "type": "boolean"
        },
        "sgxOptions": {
          "type": "dedicated.server.BiosSettingsSupportSgxOptions",
          "canBeNull": false,
          "description": "Supported SGX options"
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.InstallationProgressStatusEnum": {
      "id": "InstallationProgressStatusEnum",
      "description": "Distinct Installation status",
      "enumType": "string",
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
      "namespace": "dedicated.server"
    },
    "dedicated.BinaryFirewallLink": {
      "properties": {
        "url": {
          "description": "Temporary URL to download binary",
          "type": "string",
          "canBeNull": false
        }
      },
      "id": "BinaryFirewallLink",
      "description": "Get temporary URL link to download binary",
      "namespace": "dedicated"
    },
    "dedicated.server.HardwareSpecificationsRaidHardEnum": {
      "namespace": "dedicated.server",
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
      "id": "HardwareSpecificationsRaidHardEnum",
      "description": "Raid hard configuration",
      "enumType": "string"
    },
    "dedicated.server.TrafficDetails": {
      "id": "TrafficDetails",
      "description": "A structure describing traffic informations about this dedicated server",
      "properties": {
        "isThrottled": {
          "description": "Is bandwidth throttleted for being over quota",
          "canBeNull": true,
          "type": "boolean"
        },
        "resetQuotaDate": {
          "description": "Next reset quota date for traffic counter",
          "type": "string",
          "canBeNull": true
        },
        "outputQuotaUsed": {
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>",
          "description": "Monthly output traffic consumed this month"
        },
        "inputQuotaSize": {
          "description": "Monthly input traffic quota allowed",
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>"
        },
        "inputQuotaUsed": {
          "description": "Monthly input traffic consumed this month",
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>"
        },
        "outputQuotaSize": {
          "description": "Monthly output traffic quota allowed",
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>"
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.SplaTypeEnum": {
      "enum": [
        "os",
        "sqlstd",
        "sqlweb"
      ],
      "id": "SplaTypeEnum",
      "description": "SPLA license type",
      "enumType": "string",
      "namespace": "dedicated.server"
    },
    "dedicated.server.OlaDetails": {
      "description": "A structure describing OVH Link Aggregation available modes for this dedicated server",
      "id": "OlaDetails",
      "properties": {
        "supportedModes": {
          "description": "What modes are supported",
          "type": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum[]",
          "canBeNull": true
        },
        "available": {
          "canBeNull": false,
          "type": "boolean",
          "description": "Is the OLA feature available"
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.CpuFamilyEnum": {
      "description": "cpu family ",
      "id": "CpuFamilyEnum",
      "enumType": "string",
      "enum": [
        "arm64",
        "armhf32",
        "ppc64",
        "x86",
        "x86-ht",
        "x86_64"
      ],
      "namespace": "dedicated.server"
    },
    "dedicated.server.SupportReplaceHddInfo": {
      "id": "SupportReplaceHddInfo",
      "description": "Hdd replace support request details. ",
      "properties": {
        "slot_id": {
          "description": "Disk slotId (if any)",
          "canBeNull": true,
          "type": "long"
        },
        "disk_serial": {
          "description": "Disk serial number",
          "canBeNull": false,
          "type": "string"
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.Task": {
      "namespace": "dedicated.server",
      "id": "Task",
      "description": "Server tasks",
      "properties": {
        "function": {
          "description": "Function name",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "dedicated.TaskFunctionEnum",
          "type": "dedicated.TaskFunctionEnum"
        },
        "doneDate": {
          "readOnly": true,
          "description": "Completion date",
          "canBeNull": true,
          "fullType": "datetime",
          "type": "datetime"
        },
        "startDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task Creation date"
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "the id of the task"
        },
        "status": {
          "canBeNull": false,
          "fullType": "dedicated.TaskStatusEnum",
          "type": "dedicated.TaskStatusEnum",
          "description": "Task status",
          "readOnly": true
        },
        "comment": {
          "readOnly": true,
          "description": "Details of this task",
          "type": "string",
          "fullType": "string",
          "canBeNull": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "last update"
        }
      }
    },
    "dedicated.server.IpCountryEnum": {
      "enumType": "coreTypes.CountryEnum",
      "id": "IpCountryEnum",
      "description": "Available localization for this static IP",
      "enum": [
        "au",
        "be",
        "ca",
        "cz",
        "de",
        "es",
        "fi",
        "fr",
        "ie",
        "it",
        "lt",
        "nl",
        "pl",
        "pt",
        "sg",
        "uk",
        "us"
      ],
      "namespace": "dedicated.server"
    },
    "dedicated.server.smsAlert": {
      "namespace": "dedicated.server",
      "description": "Monitoring SMS alert details, This service is currently not supported for servers at BHS ",
      "id": "smsAlert",
      "properties": {
        "enabled": {
          "description": "Is this alert enabled",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "boolean",
          "type": "boolean"
        },
        "language": {
          "description": "Alert language",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "dedicated.server.AlertLanguageEnum",
          "type": "dedicated.server.AlertLanguageEnum"
        },
        "smsAccount": {
          "description": "Your SMS account",
          "readOnly": false,
          "type": "string",
          "fullType": "string",
          "canBeNull": false
        },
        "alertId": {
          "readOnly": true,
          "description": "Id of this alert",
          "canBeNull": false,
          "fullType": "long",
          "type": "long"
        },
        "toHour": {
          "canBeNull": true,
          "fullType": "long",
          "type": "long",
          "readOnly": false,
          "description": "Daily hour start time for SMS notification"
        },
        "fromHour": {
          "canBeNull": true,
          "fullType": "long",
          "type": "long",
          "description": "Daily hour end time for SMS notification",
          "readOnly": false
        },
        "phoneNumberTo": {
          "description": "Alert destination",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        }
      }
    },
    "dedicated.server.CacheTTLEnum": {
      "namespace": "dedicated.server",
      "enum": [
        "1",
        "10",
        "15",
        "3",
        "5"
      ],
      "id": "CacheTTLEnum",
      "description": "Time to live in minutes for cache",
      "enumType": "long"
    },
    "dedicated.server.RtmDiskSmart": {
      "namespace": "dedicated.server",
      "description": "A structure describing SMART health disk status",
      "id": "RtmDiskSmart",
      "properties": {
        "temperature_celsius": {
          "description": "temperature",
          "canBeNull": true,
          "type": "long"
        },
        "uncorrected_read_errors": {
          "description": "Uncorrected read errors",
          "type": "long",
          "canBeNull": true
        },
        "current_pending_sector": {
          "type": "long",
          "canBeNull": true,
          "description": "Current pending sectors"
        },
        "offline_seek_performance": {
          "type": "long",
          "canBeNull": true,
          "description": "Offline seek rate"
        },
        "offline_uncorrectable": {
          "type": "long",
          "canBeNull": true,
          "description": "Offline uncorrectable"
        },
        "realocated_event_count": {
          "type": "long",
          "canBeNull": true,
          "description": "Realocated event count"
        },
        "uncorrected_write_errors": {
          "type": "long",
          "canBeNull": true,
          "description": "Uncorrected write errors"
        },
        "multizone_error_rate": {
          "description": "Multizone error rate",
          "canBeNull": true,
          "type": "long"
        },
        "udma_crc_error": {
          "description": "UDMA crc error",
          "canBeNull": true,
          "type": "long"
        },
        "other_errors": {
          "description": "Other errors",
          "type": "long",
          "canBeNull": true
        }
      }
    },
    "dedicated.server.RtmRaidStatusEnum": {
      "namespace": "dedicated.server",
      "enum": [
        "KO",
        "OK",
        "REBUILDING",
        "UNKNOWN"
      ],
      "enumType": "string",
      "id": "RtmRaidStatusEnum",
      "description": " Different RAID status"
    },
    "complexType.SafeKeyValue<T>": {
      "namespace": "complexType",
      "generics": [
        "T"
      ],
      "id": "SafeKeyValue",
      "description": "Key and value, with proper key strings",
      "properties": {
        "key": {
          "canBeNull": false,
          "type": "string",
          "description": null
        },
        "value": {
          "type": "T",
          "canBeNull": false,
          "description": null
        }
      }
    },
    "dedicated.ImageTypesEnum": {
      "namespace": "dedicated",
      "enum": [
        "qcow2",
        "raw"
      ],
      "enumType": "string",
      "description": "Type of your image",
      "id": "ImageTypesEnum"
    },
    "dedicated.server.netbootOption": {
      "description": "Available boot options",
      "id": "netbootOption",
      "properties": {
        "value": {
          "readOnly": true,
          "description": "the value of this option",
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        },
        "option": {
          "description": "The option of this boot",
          "readOnly": true,
          "fullType": "dedicated.server.BootOptionEnum",
          "canBeNull": false,
          "type": "dedicated.server.BootOptionEnum"
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.FormFactorEnum": {
      "namespace": "dedicated.server",
      "id": "FormFactorEnum",
      "description": "Server form factor",
      "enumType": "string",
      "enum": [
        "0.25u",
        "0.5u",
        "1u",
        "2u",
        "3u",
        "4u"
      ]
    },
    "dedicated.server.serviceMonitoring": {
      "namespace": "dedicated.server",
      "properties": {
        "interval": {
          "canBeNull": false,
          "fullType": "dedicated.server.MonitoringIntervalEnum",
          "type": "dedicated.server.MonitoringIntervalEnum",
          "description": "The test interval in seconds",
          "readOnly": false
        },
        "enabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "description": "Is this service monitoring is enabled",
          "readOnly": false
        },
        "port": {
          "canBeNull": false,
          "fullType": "long",
          "type": "long",
          "description": "The service port to monitor",
          "readOnly": false
        },
        "challengeText": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The expected return"
        },
        "url": {
          "description": "The URL to test",
          "readOnly": false,
          "canBeNull": true,
          "fullType": "string",
          "type": "string"
        },
        "monitoringId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "This monitoring id"
        },
        "ip": {
          "readOnly": true,
          "description": "The ip to monitor",
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false
        },
        "protocol": {
          "description": "The protocol to use",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "dedicated.server.MonitoringProtocolEnum",
          "type": "dedicated.server.MonitoringProtocolEnum"
        }
      },
      "description": "Service monitoring details",
      "id": "serviceMonitoring"
    },
    "dedicated.server.InstallTemplate": {
      "id": "InstallTemplate",
      "description": "A structure describing informations about an Installation templates",
      "properties": {
        "ovh": {
          "canBeNull": true,
          "type": "string[]",
          "description": "Names list of ovh installationtemplates compatibles with this server"
        },
        "personal": {
          "description": "Names list of yours installation templates compatibles with this server",
          "canBeNull": true,
          "type": "string[]"
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.TemplateCaps": {
      "namespace": "dedicated.server",
      "properties": {
        "hybridSupport": {
          "description": "This boolean tells if the template supports hybrid install for the considered server.",
          "canBeNull": false,
          "type": "boolean"
        }
      },
      "id": "TemplateCaps",
      "description": "Miscellaneous template capabilities regarding the server."
    },
    "dedicated.server.VirtualMac": {
      "description": "A virtual MAC address associated to one or more IPs",
      "id": "VirtualMac",
      "properties": {
        "macAddress": {
          "type": "string",
          "canBeNull": false,
          "fullType": "string",
          "description": "Virtual MAC address in 00:00:00:00:00:00 format",
          "readOnly": true
        },
        "type": {
          "description": "Virtual MAC address type",
          "readOnly": true,
          "type": "dedicated.server.VmacTypeEnum",
          "canBeNull": false,
          "fullType": "dedicated.server.VmacTypeEnum"
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.backup.BackupOffer": {
      "properties": {
        "maxBandwidthStorage": {
          "description": "Storage volume r/w bandwidth limit: read/write volume offered per month on the container.",
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>"
        },
        "maxStorage": {
          "description": "Storage container max size.",
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>"
        },
        "maxBandwidthArchive": {
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "description": "Archive volume r/w bandwidth limit: read/write volume offered per month on the container."
        },
        "maxArchive": {
          "description": "Archive container max size.",
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": true
        }
      },
      "id": "BackupOffer",
      "description": "Backup cloud offer description for a dedicated server",
      "namespace": "dedicated.server.backup"
    },
    "dedicated.server.MrtgPeriodEnum": {
      "namespace": "dedicated.server",
      "enum": [
        "daily",
        "hourly",
        "monthly",
        "weekly",
        "yearly"
      ],
      "enumType": "string",
      "description": "distincts MRTG period",
      "id": "MrtgPeriodEnum"
    },
    "dedicated.server.HardwareRaidDiskGroup": {
      "description": "Disk attached to a RAID controller",
      "id": "HardwareRaidDiskGroup",
      "properties": {
        "capacity": {
          "description": "Disk capacity",
          "canBeNull": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "names": {
          "description": "Disk names",
          "canBeNull": false,
          "type": "string[]"
        },
        "speed": {
          "description": "Disk insterface speed",
          "canBeNull": false,
          "type": "complexType.UnitAndValue<string>"
        },
        "type": {
          "description": "Disk type",
          "canBeNull": false,
          "type": "dedicated.server.DiskTypeEnum"
        }
      },
      "namespace": "dedicated.server"
    },
    "dedicated.server.OptionStateEnum": {
      "namespace": "dedicated.server",
      "id": "OptionStateEnum",
      "description": "All states a dedicated server option can be in",
      "enumType": "string",
      "enum": [
        "released",
        "subscribed"
      ]
    },
    "dedicated.server.HardwareRaidConfiguration": {
      "namespace": "dedicated.server",
      "properties": {
        "type": {
          "description": "RAID controller type",
          "type": "string",
          "canBeNull": false
        },
        "diskSpanSize": {
          "canBeNull": false,
          "type": "long",
          "description": "Size of disk spans on RAID"
        },
        "diskCount": {
          "type": "long",
          "canBeNull": false,
          "description": "Disk count"
        },
        "name": {
          "canBeNull": false,
          "type": "string",
          "description": "RAID configuration name"
        },
        "capacity": {
          "description": "RAID total capacity",
          "canBeNull": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "diskSize": {
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "description": "Disk capacity"
        },
        "mode": {
          "description": "RAID mode",
          "type": "dedicated.server.HardwareSpecificationsRaidHardEnum",
          "canBeNull": false
        }
      },
      "id": "HardwareRaidConfiguration",
      "description": "Simulated result of how the hardware RAID template will be configured on this server"
    },
    "dedicated.server.IpmiAccessTypeEnum": {
      "namespace": "dedicated.server",
      "enum": [
        "kvmipHtml5URL",
        "kvmipJnlp",
        "serialOverLanSshKey",
        "serialOverLanURL"
      ],
      "description": "Distinct way to acces a KVM IPMI session",
      "id": "IpmiAccessTypeEnum",
      "enumType": "string"
    },
    "dedicated.server.RtmChartPeriodEnum": {
      "namespace": "dedicated.server",
      "id": "RtmChartPeriodEnum",
      "description": "distincts RTM charts period",
      "enumType": "string",
      "enum": [
        "daily",
        "monthly",
        "weekly",
        "yearly"
      ]
    }
  },
  "basePath": "https://ca.api.soyoustart.com/1.0"
}