import {Schema} from '../../src/schema';

export const schema: Schema = {
  "resourcePath": "/dedicated/server",
  "apis": [
    {
      "path": "/dedicated/server",
      "description": "Operations about the DEDICATED service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "string[]",
          "noAuthentication": false,
          "parameters": [],
          "description": "List available services",
          "httpMethod": "GET",
          "responseFullType": "string[]",
          "resellerOnly": false
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/authenticationSecret",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Access[]",
          "httpMethod": "POST",
          "description": "Retrieve secret to connect to the server / application",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseType": "dedicated.server.Access[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "authenticationSecret operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/backupCloudOfferDetails",
      "description": "backupCloudOfferDetails operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "responseType": "dedicated.server.backup.BackupOffer",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "name": "serviceName"
            }
          ],
          "description": "Get details on offered backup cloud if available for the current server",
          "responseFullType": "dedicated.server.backup.BackupOffer",
          "httpMethod": "GET",
          "resellerOnly": false
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/mrtg",
      "operations": [
        {
          "parameters": [
            {
              "required": true,
              "paramType": "query",
              "description": "mrtg period",
              "fullType": "dedicated.server.MrtgPeriodEnum",
              "dataType": "dedicated.server.MrtgPeriodEnum",
              "name": "period"
            },
            {
              "name": "type",
              "dataType": "dedicated.server.MrtgTypeEnum",
              "description": "mrtg type",
              "fullType": "dedicated.server.MrtgTypeEnum",
              "paramType": "query",
              "required": true
            },
            {
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "dataType": "string",
              "name": "serviceName"
            }
          ],
          "resellerOnly": false,
          "description": "Retrieve traffic graph values",
          "responseFullType": "dedicated.server.MrtgTimestampValue[]",
          "httpMethod": "GET",
          "responseType": "dedicated.server.MrtgTimestampValue[]",
          "noAuthentication": false,
          "apiStatus": {
            "replacement": "/dedicated/server/{serviceName}/networkInterfaceController",
            "deletionDate": "2018-04-23T00:00:00+01:00",
            "deprecatedDate": "2017-10-23T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          }
        }
      ],
      "description": "mrtg operations"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "dedicated.server.Task",
          "resellerOnly": false,
          "httpMethod": "POST",
          "description": "Start an install",
          "responseFullType": "dedicated.server.Task",
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "description": "Template name",
              "fullType": "string",
              "dataType": "string",
              "name": "templateName"
            },
            {
              "name": "partitionSchemeName",
              "dataType": "string",
              "fullType": "string",
              "description": "Partition scheme name",
              "paramType": "body",
              "required": false
            },
            {
              "description": "parameters for default install",
              "fullType": "dedicated.server.InstallCustom",
              "paramType": "body",
              "required": false,
              "name": "details",
              "dataType": "dedicated.server.InstallCustom"
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "name": "serviceName"
            }
          ]
        }
      ],
      "description": "start operations",
      "path": "/dedicated/server/{serviceName}/install/start"
    },
    {
      "path": "/dedicated/server/{serviceName}/install/compatibleTemplatePartitionSchemes",
      "operations": [
        {
          "parameters": [
            {
              "fullType": "string",
              "description": null,
              "paramType": "query",
              "required": true,
              "name": "templateName",
              "dataType": "string"
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "name": "serviceName"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Retrieve compatible  install template partitions scheme",
          "responseFullType": "string[]",
          "responseType": "string[]",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "compatibleTemplatePartitionSchemes operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/install/templateCapabilities",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "required": true,
              "paramType": "query",
              "description": null,
              "fullType": "string",
              "dataType": "string",
              "name": "templateName"
            },
            {
              "dataType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "resellerOnly": false,
          "description": "Gives some capabilities regarding the template for the current dedicated server.",
          "httpMethod": "GET",
          "responseFullType": "dedicated.server.TemplateCaps",
          "responseType": "dedicated.server.TemplateCaps",
          "noAuthentication": false
        }
      ],
      "description": "templateCapabilities operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/install/hardwareRaidSize",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.HardwareRaidSize",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Partition scheme name",
              "fullType": "string",
              "paramType": "query",
              "required": true,
              "name": "partitionSchemeName",
              "dataType": "string"
            },
            {
              "dataType": "string",
              "name": "templateName",
              "required": true,
              "paramType": "query",
              "fullType": "string",
              "description": "Template name"
            },
            {
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "dataType": "string",
              "name": "serviceName"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Get hardware RAID size for a given configuration",
          "responseFullType": "dedicated.server.HardwareRaidSize"
        }
      ],
      "description": "hardwareRaidSize operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/install/hardwareRaidProfile",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseFullType": "dedicated.server.HardwareRaidProfile",
          "httpMethod": "GET",
          "description": "Retrieve hardware RAID profile",
          "parameters": [
            {
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "responseType": "dedicated.server.HardwareRaidProfile"
        }
      ],
      "description": "hardwareRaidProfile operations"
    },
    {
      "operations": [
        {
          "description": "Retrieve compatible  install templates names",
          "httpMethod": "GET",
          "responseFullType": "dedicated.server.InstallTemplate",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "responseType": "dedicated.server.InstallTemplate",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "compatibleTemplates operations",
      "path": "/dedicated/server/{serviceName}/install/compatibleTemplates"
    },
    {
      "path": "/dedicated/server/{serviceName}/install/status",
      "description": "status operations",
      "operations": [
        {
          "responseFullType": "dedicated.server.InstallationProgressStatus",
          "httpMethod": "GET",
          "description": "Get installation status",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseType": "dedicated.server.InstallationProgressStatus",
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
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task",
          "httpMethod": "POST",
          "description": "Hard reboot this server",
          "parameters": [
            {
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "responseType": "dedicated.server.Task",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "reboot operations",
      "path": "/dedicated/server/{serviceName}/reboot"
    },
    {
      "description": "hardware operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "description": "Retrieve hardware informations about this dedicated server",
          "responseFullType": "dedicated.server.HardwareSpecifications",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseType": "dedicated.server.HardwareSpecifications"
        }
      ],
      "path": "/dedicated/server/{serviceName}/specifications/hardware"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Retrieve IP capabilities about this dedicated server",
          "responseFullType": "dedicated.server.IpOrderable",
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "responseType": "dedicated.server.IpOrderable"
        }
      ],
      "description": "ip operations",
      "path": "/dedicated/server/{serviceName}/specifications/ip"
    },
    {
      "description": "network operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "dedicated.server.NetworkSpecifications",
          "responseFullType": "dedicated.server.NetworkSpecifications",
          "description": "Retrieve network informations about this dedicated server",
          "httpMethod": "GET",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true
            }
          ]
        }
      ],
      "path": "/dedicated/server/{serviceName}/specifications/network"
    },
    {
      "operations": [
        {
          "responseType": "dedicated.server.Intervention",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "name": "interventionId",
              "dataType": "long",
              "description": "The intervention id",
              "fullType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "dedicated.server.Intervention",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "Intervention made on this server",
      "path": "/dedicated/server/{serviceName}/intervention/{interventionId}"
    },
    {
      "path": "/dedicated/server/{serviceName}/intervention",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "name": "serviceName"
            }
          ],
          "resellerOnly": false,
          "description": "technical intervention history",
          "responseFullType": "long[]",
          "httpMethod": "GET",
          "responseType": "long[]",
          "noAuthentication": false
        }
      ],
      "description": "List the dedicated.server.Intervention objects"
    },
    {
      "path": "/dedicated/server/{serviceName}/support/replace/cooling",
      "operations": [
        {
          "httpMethod": "POST",
          "description": "Ask for a cooling module replacement",
          "responseFullType": "support.NewMessageInfo",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "comment",
              "dataType": "text",
              "description": "User comment",
              "fullType": "text",
              "paramType": "body",
              "required": true
            },
            {
              "name": "details",
              "dataType": "text",
              "description": "Technical details or logs",
              "fullType": "text",
              "paramType": "body",
              "required": true
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseType": "support.NewMessageInfo",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          }
        }
      ],
      "description": "cooling operations"
    },
    {
      "description": "memory operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "resellerOnly": false,
          "responseFullType": "support.NewMessageInfo",
          "description": "Ask for a faulty RAM module replacement",
          "httpMethod": "POST",
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "description": "Technical details or logs",
              "fullType": "text",
              "dataType": "text",
              "name": "details"
            },
            {
              "name": "slots",
              "dataType": "string[]",
              "fullType": "string[]",
              "description": "The list of faulty RAM slots (if you have the information)",
              "paramType": "body",
              "required": false
            },
            {
              "required": true,
              "paramType": "body",
              "description": "User comment",
              "fullType": "text",
              "dataType": "text",
              "name": "comment"
            },
            {
              "dataType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "responseType": "support.NewMessageInfo"
        }
      ],
      "path": "/dedicated/server/{serviceName}/support/replace/memory"
    },
    {
      "path": "/dedicated/server/{serviceName}/support/replace/hardDiskDrive",
      "description": "hardDiskDrive operations",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "support.NewMessageInfo",
          "httpMethod": "POST",
          "description": "Ask for a broken HDD replacement",
          "responseFullType": "support.NewMessageInfo",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "inverse",
              "dataType": "boolean",
              "fullType": "boolean",
              "description": "If set to 'true', replace only NON LISTED DISKS",
              "paramType": "body",
              "required": true
            },
            {
              "name": "comment",
              "dataType": "text",
              "description": "User comment",
              "fullType": "text",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.server.SupportReplaceHddInfo[]",
              "name": "disks",
              "required": true,
              "paramType": "body",
              "fullType": "dedicated.server.SupportReplaceHddInfo[]",
              "description": "If 'inverse' is set as 'false', the list of HDD TO REPLACE. If 'inverse' is set as 'true', the list of HDD TO NOT REPLACE."
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "name": "serviceName"
            }
          ],
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          }
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/ips",
      "description": "ips operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "dataType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server",
              "fullType": "string"
            }
          ],
          "description": "List all ip from server",
          "responseFullType": "ipBlock[]",
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseType": "ipBlock[]",
          "noAuthentication": false
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}",
      "description": "Secondary dns infos",
      "operations": [
        {
          "parameters": [
            {
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "dataType": "string"
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "domain on slave server",
              "dataType": "string",
              "name": "domain"
            }
          ],
          "resellerOnly": false,
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "secondaryDns.SecondaryDNS",
          "responseType": "secondaryDns.SecondaryDNS",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "parameters": [
            {
              "dataType": "secondaryDns.SecondaryDNS",
              "name": null,
              "required": true,
              "paramType": "body",
              "fullType": "secondaryDns.SecondaryDNS",
              "description": "New object properties"
            },
            {
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "dataType": "string"
            },
            {
              "description": "domain on slave server",
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "domain",
              "dataType": "string"
            }
          ],
          "httpMethod": "PUT",
          "description": "Alter this object properties",
          "responseFullType": "void",
          "resellerOnly": false,
          "responseType": "void",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "dataType": "string",
              "name": "serviceName"
            },
            {
              "dataType": "string",
              "name": "domain",
              "required": true,
              "paramType": "path",
              "description": "domain on slave server",
              "fullType": "string"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "DELETE",
          "responseFullType": "void",
          "description": "remove this domain"
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}/dnsServer",
      "description": "dnsServer operations",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "secondaryDns.SecondaryDNSNameServer",
          "httpMethod": "GET",
          "description": "domain name server informations",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "name": "serviceName"
            },
            {
              "description": "domain on slave server",
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "domain",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "responseType": "secondaryDns.SecondaryDNSNameServer",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true
            }
          ],
          "description": "List of secondary dns domain name",
          "responseFullType": "string[]",
          "httpMethod": "GET",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipv4",
              "description": "",
              "fullType": "ipv4",
              "paramType": "body",
              "required": false
            },
            {
              "required": true,
              "paramType": "body",
              "description": "The domain to add",
              "fullType": "string",
              "dataType": "string",
              "name": "domain"
            },
            {
              "dataType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "description": "add a domain on secondary dns",
          "responseFullType": "void",
          "httpMethod": "POST",
          "resellerOnly": false,
          "responseType": "void",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the secondaryDns.SecondaryDNS objects",
      "path": "/dedicated/server/{serviceName}/secondaryDnsDomains"
    },
    {
      "path": "/dedicated/server/{serviceName}/boot/{bootId}/option/{option}",
      "description": "Available boot options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "dedicated.server.netbootOption",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "dedicated.server.netbootOption",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true
            },
            {
              "description": "boot id",
              "fullType": "long",
              "paramType": "path",
              "required": true,
              "name": "bootId",
              "dataType": "long"
            },
            {
              "name": "option",
              "dataType": "dedicated.server.BootOptionEnum",
              "fullType": "dedicated.server.BootOptionEnum",
              "description": "The option of this boot",
              "paramType": "path",
              "required": true
            }
          ]
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
          "httpMethod": "GET",
          "description": "Option used on this netboot",
          "responseFullType": "dedicated.server.BootOptionEnum[]",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server",
              "fullType": "string"
            },
            {
              "name": "bootId",
              "dataType": "long",
              "description": "boot id",
              "fullType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseType": "dedicated.server.BootOptionEnum[]"
        }
      ],
      "description": "List the dedicated.server.netbootOption objects",
      "path": "/dedicated/server/{serviceName}/boot/{bootId}/option"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "dedicated.server.Netboot",
          "httpMethod": "GET",
          "responseFullType": "dedicated.server.Netboot",
          "description": "Get this object properties",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "name": "bootId",
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": "boot id"
            }
          ]
        }
      ],
      "description": "Available boots",
      "path": "/dedicated/server/{serviceName}/boot/{bootId}"
    },
    {
      "path": "/dedicated/server/{serviceName}/boot",
      "description": "List the dedicated.server.Netboot objects",
      "operations": [
        {
          "parameters": [
            {
              "required": false,
              "paramType": "query",
              "description": "Filter the value of bootType property (=)",
              "fullType": "dedicated.server.BootTypeEnum",
              "dataType": "dedicated.server.BootTypeEnum",
              "name": "bootType"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Server compatibles netboots",
          "responseFullType": "long[]",
          "responseType": "long[]",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "description": "Information about the options of a dedicated server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "dedicated.server.Option",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "dedicated.server.Option",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "dedicated.server.OptionEnum",
              "description": "The option name",
              "dataType": "dedicated.server.OptionEnum",
              "name": "option"
            }
          ]
        },
        {
          "noAuthentication": false,
          "responseType": "void",
          "resellerOnly": false,
          "httpMethod": "DELETE",
          "description": "Release a given option",
          "responseFullType": "void",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "dataType": "string",
              "name": "serviceName"
            },
            {
              "dataType": "dedicated.server.OptionEnum",
              "name": "option",
              "required": true,
              "paramType": "path",
              "fullType": "dedicated.server.OptionEnum",
              "description": "The option name"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/dedicated/server/{serviceName}/option/{option}"
    },
    {
      "path": "/dedicated/server/{serviceName}/option",
      "description": "List the dedicated.server.Option objects",
      "operations": [
        {
          "responseFullType": "dedicated.server.OptionEnum[]",
          "httpMethod": "GET",
          "description": "List of dedicated server options",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseType": "dedicated.server.OptionEnum[]",
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
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true
            }
          ],
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "services.Service",
          "resellerOnly": false,
          "responseType": "services.Service",
          "noAuthentication": false
        },
        {
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "services.Service",
              "name": null,
              "required": true,
              "paramType": "body",
              "description": "New object properties",
              "fullType": "services.Service"
            },
            {
              "dataType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server",
              "fullType": "string"
            }
          ],
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "responseFullType": "void",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "Details about a Service",
      "path": "/dedicated/server/{serviceName}/serviceInfos"
    },
    {
      "path": "/dedicated/server/{serviceName}/confirmTermination",
      "operations": [
        {
          "responseType": "string",
          "noAuthentication": false,
          "parameters": [
            {
              "required": false,
              "paramType": "body",
              "description": "What next after your termination request",
              "fullType": "service.TerminationFutureUseEnum",
              "dataType": "service.TerminationFutureUseEnum",
              "name": "futureUse"
            },
            {
              "dataType": "service.TerminationReasonEnum",
              "name": "reason",
              "required": false,
              "paramType": "body",
              "description": "Reason of your termination request",
              "fullType": "service.TerminationReasonEnum"
            },
            {
              "dataType": "string",
              "name": "commentary",
              "required": false,
              "paramType": "body",
              "fullType": "string",
              "description": "Commentary about your termination request"
            },
            {
              "required": true,
              "paramType": "body",
              "description": "The termination token sent by mail to the admin contact",
              "fullType": "string",
              "dataType": "string",
              "name": "token"
            },
            {
              "dataType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "resellerOnly": false,
          "description": "Confirm termination of your service",
          "responseFullType": "string",
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "Confirm termination of your service"
    },
    {
      "path": "/dedicated/server/{serviceName}/task",
      "operations": [
        {
          "resellerOnly": false,
          "description": "Dedicated server todos",
          "httpMethod": "GET",
          "responseFullType": "long[]",
          "parameters": [
            {
              "fullType": "dedicated.TaskFunctionEnum",
              "description": "Filter the value of function property (=)",
              "paramType": "query",
              "required": false,
              "name": "function",
              "dataType": "dedicated.TaskFunctionEnum"
            },
            {
              "name": "status",
              "dataType": "dedicated.TaskStatusEnum",
              "fullType": "dedicated.TaskStatusEnum",
              "description": "Filter the value of status property (=)",
              "paramType": "query",
              "required": false
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseType": "long[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the dedicated.server.Task objects"
    },
    {
      "description": "cancel operations",
      "operations": [
        {
          "resellerOnly": false,
          "httpMethod": "POST",
          "description": "this action stop the task progression if it's possible",
          "responseFullType": "void",
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "dataType": "string"
            },
            {
              "name": "taskId",
              "dataType": "long",
              "fullType": "long",
              "description": "the id of the task",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/dedicated/server/{serviceName}/task/{taskId}/cancel"
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "name": "serviceName"
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": "the id of the task",
              "dataType": "long",
              "name": "taskId"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseFullType": "dedicated.server.Task",
          "description": "Get this object properties",
          "responseType": "dedicated.server.Task",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "Server tasks",
      "path": "/dedicated/server/{serviceName}/task/{taskId}"
    },
    {
      "path": "/dedicated/server/{serviceName}/biosSettings/sgx/configure",
      "description": "configure operations",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "dedicated.server.Task",
          "resellerOnly": false,
          "responseFullType": "dedicated.server.Task",
          "description": "Configure SGX feature",
          "httpMethod": "POST",
          "parameters": [
            {
              "required": false,
              "paramType": "body",
              "description": "Desired SGX status",
              "fullType": "dedicated.server.BiosSettingsSgxStatusEnum",
              "dataType": "dedicated.server.BiosSettingsSgxStatusEnum",
              "name": "status"
            },
            {
              "description": "Size of the Processor Reserved Memory",
              "fullType": "dedicated.server.BiosSettingsSgxPrmrrEnum",
              "paramType": "body",
              "required": false,
              "name": "prmrr",
              "dataType": "dedicated.server.BiosSettingsSgxPrmrrEnum"
            },
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "dataType": "string"
            }
          ],
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "dedicated.biosSettingsSgx.BiosSettingsSgx",
          "parameters": [
            {
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "responseType": "dedicated.biosSettingsSgx.BiosSettingsSgx",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          }
        }
      ],
      "description": "Your BiosSettings for SGX feature",
      "path": "/dedicated/server/{serviceName}/biosSettings/sgx"
    },
    {
      "description": "Your BiosSettings",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "dedicated.biosSettings.BiosSettings",
          "resellerOnly": false,
          "responseFullType": "dedicated.biosSettings.BiosSettings",
          "description": "Get this object properties",
          "httpMethod": "GET",
          "parameters": [
            {
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "dataType": "string"
            }
          ],
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          }
        }
      ],
      "path": "/dedicated/server/{serviceName}/biosSettings"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Raid unit volumes",
          "responseFullType": "string[]",
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "dataType": "string"
            },
            {
              "name": "unit",
              "dataType": "string",
              "fullType": "string",
              "description": "Raid unit",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the dedicated.server.RtmRaidVolume objects",
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}/volume"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "dedicated.server.RtmRaidVolumePort",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "name": "unit",
              "dataType": "string",
              "fullType": "string",
              "description": "Raid unit",
              "paramType": "path",
              "required": true
            },
            {
              "required": true,
              "paramType": "path",
              "description": "Raid volume name",
              "fullType": "string",
              "dataType": "string",
              "name": "volume"
            },
            {
              "dataType": "string",
              "name": "port",
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "Raid volume port"
            }
          ],
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "dedicated.server.RtmRaidVolumePort",
          "resellerOnly": false
        }
      ],
      "description": "Server raid volume port informations",
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port/{port}"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port",
      "description": "List the dedicated.server.RtmRaidVolumePort objects",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "string[]",
          "resellerOnly": false,
          "responseFullType": "string[]",
          "description": "Raid unit volume ports",
          "httpMethod": "GET",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "name": "serviceName"
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "Raid unit",
              "dataType": "string",
              "name": "unit"
            },
            {
              "required": true,
              "paramType": "path",
              "description": "Raid volume name",
              "fullType": "string",
              "dataType": "string",
              "name": "volume"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}",
      "description": "Server raid volume information",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "dedicated.server.RtmRaidVolume",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "name": "unit",
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "Raid unit"
            },
            {
              "description": "Raid volume name",
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "volume",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "responseType": "dedicated.server.RtmRaidVolume"
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
          "responseType": "dedicated.server.RtmRaid",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "dataType": "string"
            },
            {
              "dataType": "string",
              "name": "unit",
              "required": true,
              "paramType": "path",
              "description": "Raid unit",
              "fullType": "string"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseFullType": "dedicated.server.RtmRaid",
          "description": "Get this object properties"
        }
      ],
      "description": "Server raid informations",
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/raid",
      "operations": [
        {
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "httpMethod": "GET",
          "description": "Server raid informations",
          "responseFullType": "string[]",
          "resellerOnly": false,
          "responseType": "string[]",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the dedicated.server.RtmRaid objects"
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "required": true,
              "paramType": "query",
              "fullType": "dedicated.server.RtmChartPeriodEnum",
              "description": "chart period",
              "dataType": "dedicated.server.RtmChartPeriodEnum",
              "name": "period"
            },
            {
              "dataType": "dedicated.server.RtmChartTypeEnum",
              "name": "type",
              "required": true,
              "paramType": "query",
              "fullType": "dedicated.server.RtmChartTypeEnum",
              "description": "RTM chart type"
            },
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "dataType": "string"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Retrieve RTM graph values",
          "responseFullType": "complexType.ChartReturn",
          "responseType": "complexType.ChartReturn",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "chart operations",
      "path": "/dedicated/server/{serviceName}/statistics/chart"
    },
    {
      "description": "Servers statistics sent by RTM (Real Time Monitoring)",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "dedicated.server.Rtm",
          "responseFullType": "dedicated.server.Rtm",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true
            }
          ]
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics"
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true
            }
          ],
          "httpMethod": "GET",
          "description": "Get server os informations",
          "responseFullType": "dedicated.server.RtmOs",
          "resellerOnly": false,
          "responseType": "dedicated.server.RtmOs",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "os operations",
      "path": "/dedicated/server/{serviceName}/statistics/os"
    },
    {
      "description": "connection operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "description": "Get server opened connections",
          "httpMethod": "GET",
          "responseFullType": "dedicated.server.RtmConnection[]",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "dataType": "string",
              "name": "serviceName"
            }
          ],
          "noAuthentication": false,
          "responseType": "dedicated.server.RtmConnection[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/connection"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/process",
      "operations": [
        {
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "name": "serviceName"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Get server process",
          "responseFullType": "dedicated.server.RtmCommandSize[]",
          "responseType": "dedicated.server.RtmCommandSize[]",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "process operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/memory",
      "description": "memory operations",
      "operations": [
        {
          "parameters": [
            {
              "dataType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server",
              "fullType": "string"
            }
          ],
          "description": "Get server memory informations",
          "httpMethod": "GET",
          "responseFullType": "dedicated.server.RtmMemory[]",
          "resellerOnly": false,
          "responseType": "dedicated.server.RtmMemory[]",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/cpu",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "dedicated.server.RtmCpu",
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Get server cpu informations",
          "responseFullType": "dedicated.server.RtmCpu",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "dataType": "string",
              "name": "serviceName"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "cpu operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/disk",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseFullType": "string[]",
          "description": "Server disks",
          "httpMethod": "GET",
          "parameters": [
            {
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "responseType": "string[]"
        }
      ],
      "description": "List the dedicated.server.RtmDisk objects"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true
            },
            {
              "required": true,
              "paramType": "path",
              "description": "Disk",
              "fullType": "string",
              "dataType": "string",
              "name": "disk"
            }
          ],
          "httpMethod": "GET",
          "responseFullType": "dedicated.server.RtmDisk",
          "description": "Get this object properties",
          "resellerOnly": false,
          "responseType": "dedicated.server.RtmDisk",
          "noAuthentication": false
        }
      ],
      "description": "Server disks informations",
      "path": "/dedicated/server/{serviceName}/statistics/disk/{disk}"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/disk/{disk}/smart",
      "description": "smart operations",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.server.RtmDiskSmart",
          "description": "Get disk smart informations",
          "httpMethod": "GET",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "name": "serviceName"
            },
            {
              "required": true,
              "paramType": "path",
              "description": "Disk",
              "fullType": "string",
              "dataType": "string",
              "name": "disk"
            }
          ],
          "noAuthentication": false,
          "responseType": "dedicated.server.RtmDiskSmart",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/load",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseFullType": "dedicated.server.RtmLoad",
          "httpMethod": "GET",
          "description": "Get server load",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseType": "dedicated.server.RtmLoad"
        }
      ],
      "description": "load operations"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "complexType.ChartReturn",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "query",
              "description": "chart period",
              "fullType": "dedicated.server.RtmChartPeriodEnum",
              "dataType": "dedicated.server.RtmChartPeriodEnum",
              "name": "period"
            },
            {
              "dataType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server",
              "fullType": "string"
            },
            {
              "name": "partition",
              "dataType": "string",
              "description": "Partition",
              "fullType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseFullType": "complexType.ChartReturn",
          "description": "Retrieve partition charts"
        }
      ],
      "description": "chart operations",
      "path": "/dedicated/server/{serviceName}/statistics/partition/{partition}/chart"
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "name": "partition",
              "required": true,
              "paramType": "path",
              "description": "Partition",
              "fullType": "string"
            }
          ],
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "dedicated.server.RtmPartition",
          "resellerOnly": false,
          "responseType": "dedicated.server.RtmPartition",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "Server partitions informations",
      "path": "/dedicated/server/{serviceName}/statistics/partition/{partition}"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/partition",
      "description": "List the dedicated.server.RtmPartition objects",
      "operations": [
        {
          "responseType": "string[]",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "dataType": "string"
            }
          ],
          "resellerOnly": false,
          "description": "Server partitions",
          "responseFullType": "string[]",
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "description": "motherboard operations",
      "operations": [
        {
          "responseType": "dedicated.server.RtmMotherboardHw",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "name": "serviceName"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Get server motherboard hardware informations",
          "responseFullType": "dedicated.server.RtmMotherboardHw",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/dedicated/server/{serviceName}/statistics/motherboard"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/pci",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "dedicated.server.RtmPci[]",
          "responseFullType": "dedicated.server.RtmPci[]",
          "description": "Get server PCI devices informations",
          "httpMethod": "GET",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "pci operations"
    },
    {
      "description": "Server informations",
      "operations": [
        {
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true
            }
          ],
          "description": "Get this object properties",
          "responseFullType": "dedicated.server.Dedicated",
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseType": "dedicated.server.Dedicated",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "fullType": "dedicated.server.Dedicated",
              "description": "New object properties",
              "dataType": "dedicated.server.Dedicated",
              "name": null
            },
            {
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "dataType": "string",
              "name": "serviceName"
            }
          ],
          "resellerOnly": false,
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "responseFullType": "void",
          "responseType": "void",
          "noAuthentication": false
        }
      ],
      "path": "/dedicated/server/{serviceName}"
    },
    {
      "path": "/dedicated/server/{serviceName}/secondaryDnsNameServerAvailable",
      "description": "secondaryDnsNameServerAvailable operations",
      "operations": [
        {
          "responseType": "secondaryDns.SecondaryDNSNameServer",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ],
          "httpMethod": "GET",
          "description": "Secondary nameServer available for your Server",
          "responseFullType": "secondaryDns.SecondaryDNSNameServer",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/bringYourOwnImage",
      "operations": [
        {
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "dedicated.server.ByoiStatus",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "responseType": "dedicated.server.ByoiStatus",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "required": false,
              "paramType": "body",
              "fullType": "long",
              "description": "Disk group id to process install on (only available for some templates)",
              "dataType": "long",
              "name": "diskGroupId"
            },
            {
              "description": "Hostname",
              "fullType": "string",
              "paramType": "body",
              "required": true,
              "name": "hostname",
              "dataType": "string"
            },
            {
              "dataType": "string",
              "name": "checkSum",
              "required": true,
              "paramType": "body",
              "fullType": "string",
              "description": "Image checksum"
            },
            {
              "fullType": "text",
              "description": "Configuration script",
              "paramType": "body",
              "required": false,
              "name": "userData",
              "dataType": "text"
            },
            {
              "fullType": "complexType.SafeKeyValue<password>[]",
              "description": "HTTP Headers",
              "paramType": "body",
              "required": false,
              "name": "httpHeader",
              "dataType": "complexType.SafeKeyValue<password>[]"
            },
            {
              "name": "checkSumType",
              "dataType": "dedicated.CheckSumTypesEnum",
              "description": "Checksum type",
              "fullType": "dedicated.CheckSumTypesEnum",
              "paramType": "body",
              "required": true
            },
            {
              "name": "type",
              "dataType": "dedicated.ImageTypesEnum",
              "description": "Image type",
              "fullType": "dedicated.ImageTypesEnum",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "name": "sshKey",
              "required": true,
              "paramType": "body",
              "description": "SshKey",
              "fullType": "string"
            },
            {
              "dataType": "complexType.SafeKeyValue<string>[]",
              "name": "userMetadatas",
              "required": false,
              "paramType": "body",
              "description": "Metadas",
              "fullType": "complexType.SafeKeyValue<string>[]"
            },
            {
              "name": "description",
              "dataType": "string",
              "description": "Image description",
              "fullType": "string",
              "paramType": "body",
              "required": false
            },
            {
              "name": "URL",
              "dataType": "string",
              "fullType": "string",
              "description": "Image URL",
              "paramType": "body",
              "required": true
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "name": "serviceName"
            }
          ],
          "resellerOnly": false,
          "description": "Start an install with your own image",
          "responseFullType": "void",
          "httpMethod": "POST"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "void",
          "httpMethod": "DELETE",
          "description": "Delete your current image installation",
          "responseFullType": "void",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            }
          ]
        }
      ],
      "description": "Bring you own Image on your server"
    },
    {
      "path": "/dedicated/server/{serviceName}/terminate",
      "description": "Terminate your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "dataType": "string",
              "name": "serviceName"
            }
          ],
          "resellerOnly": false,
          "description": "Terminate your service",
          "responseFullType": "string",
          "httpMethod": "POST",
          "responseType": "string",
          "noAuthentication": false
        }
      ]
    },
    {
      "path": "/dedicated/server/{serviceName}/networkInterfaceController/{mac}/mrtg",
      "description": "mrtg operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Retrieve traffic graph values",
          "responseFullType": "dedicated.server.MrtgTimestampValue[]",
          "parameters": [
            {
              "required": true,
              "paramType": "query",
              "description": "mrtg period",
              "fullType": "dedicated.server.MrtgPeriodEnum",
              "dataType": "dedicated.server.MrtgPeriodEnum",
              "name": "period"
            },
            {
              "dataType": "dedicated.server.MrtgTypeEnum",
              "name": "type",
              "required": true,
              "paramType": "query",
              "description": "mrtg type",
              "fullType": "dedicated.server.MrtgTypeEnum"
            },
            {
              "dataType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "macAddress",
              "description": "NetworkInterfaceController mac",
              "dataType": "macAddress",
              "name": "mac"
            }
          ],
          "noAuthentication": false,
          "responseType": "dedicated.server.MrtgTimestampValue[]"
        }
      ]
    },
    {
      "description": "Your networkInterfaceController",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "parameters": [
            {
              "dataType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server"
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "macAddress",
              "description": "NetworkInterfaceController mac",
              "dataType": "macAddress",
              "name": "mac"
            }
          ],
          "description": "Get this object properties",
          "responseFullType": "dedicated.networkInterfaceController.NetworkInterfaceController",
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseType": "dedicated.networkInterfaceController.NetworkInterfaceController",
          "noAuthentication": false
        }
      ],
      "path": "/dedicated/server/{serviceName}/networkInterfaceController/{mac}"
    },
    {
      "path": "/dedicated/server/{serviceName}/networkInterfaceController",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "resellerOnly": false,
          "responseFullType": "macAddress[]",
          "description": "List server networkInterfaceController",
          "httpMethod": "GET",
          "parameters": [
            {
              "required": false,
              "paramType": "query",
              "fullType": "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum",
              "description": "Filter the value of linkType property (=)",
              "dataType": "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum",
              "name": "linkType"
            },
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "responseType": "macAddress[]"
        }
      ],
      "description": "List the dedicated.networkInterfaceController.NetworkInterfaceController objects"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "responseType": "dedicated.server.Task",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "dataType": "string",
              "name": "serviceName"
            },
            {
              "name": "uuid",
              "dataType": "uuid",
              "fullType": "uuid",
              "description": "VirtualNetworkInterface unique id",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "httpMethod": "POST",
          "description": "Enable this VirtualNetworkInterface",
          "responseFullType": "dedicated.server.Task",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          }
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
          "responseType": "dedicated.server.Task",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "description": "The internal name of your dedicated server",
              "fullType": "string"
            },
            {
              "name": "uuid",
              "dataType": "uuid",
              "description": "VirtualNetworkInterface unique id",
              "fullType": "uuid",
              "paramType": "path",
              "required": true
            }
          ],
          "httpMethod": "POST",
          "responseFullType": "dedicated.server.Task",
          "description": "Disable this VirtualNetworkInterface",
          "resellerOnly": false
        }
      ],
      "path": "/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}/disable"
    },
    {
      "description": "Your VirtualNetworkInterface",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.virtualNetworkInterface.VirtualNetworkInterface",
          "description": "Get this object properties",
          "httpMethod": "GET",
          "parameters": [
            {
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "dataType": "string"
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "uuid",
              "description": "VirtualNetworkInterface unique id",
              "dataType": "uuid",
              "name": "uuid"
            }
          ],
          "noAuthentication": false,
          "responseType": "dedicated.virtualNetworkInterface.VirtualNetworkInterface",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          }
        },
        {
          "noAuthentication": false,
          "responseType": "void",
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "responseFullType": "void",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "dedicated.virtualNetworkInterface.VirtualNetworkInterface",
              "name": null,
              "required": true,
              "paramType": "body",
              "fullType": "dedicated.virtualNetworkInterface.VirtualNetworkInterface",
              "description": "New object properties"
            },
            {
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "serviceName",
              "dataType": "string"
            },
            {
              "dataType": "uuid",
              "name": "uuid",
              "required": true,
              "paramType": "path",
              "description": "VirtualNetworkInterface unique id",
              "fullType": "uuid"
            }
          ],
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          }
        }
      ],
      "path": "/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}"
    },
    {
      "path": "/dedicated/server/{serviceName}/virtualNetworkInterface",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "responseType": "uuid[]",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "mode",
              "dataType": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum",
              "description": "Filter the value of mode property (=)",
              "fullType": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum",
              "paramType": "query",
              "required": false
            },
            {
              "required": false,
              "paramType": "query",
              "description": "Filter the value of name property (=)",
              "fullType": "string",
              "dataType": "string",
              "name": "name"
            },
            {
              "name": "enabled",
              "dataType": "boolean",
              "fullType": "boolean",
              "description": "Filter the value of enabled property (=)",
              "paramType": "query",
              "required": false
            },
            {
              "required": false,
              "paramType": "query",
              "fullType": "string",
              "description": "Filter the value of vrack property (=)",
              "dataType": "string",
              "name": "vrack"
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "dataType": "string",
              "name": "serviceName"
            }
          ],
          "httpMethod": "GET",
          "responseFullType": "uuid[]",
          "description": "List server VirtualNetworkInterfaces",
          "resellerOnly": false
        }
      ],
      "description": "List the dedicated.virtualNetworkInterface.VirtualNetworkInterface objects"
    },
    {
      "path": "/dedicated/server/{serviceName}/secondaryDnsNameDomainToken",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "description": "The domain to check",
              "fullType": "string",
              "paramType": "query",
              "required": true,
              "name": "domain",
              "dataType": "string"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "fullType": "string",
              "description": "The internal name of your dedicated server",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseFullType": "secondaryDns.SecondaryDNSCheckField",
          "description": "DNS field to temporarily add to your zone so that we can verify you are the owner of this domain",
          "responseType": "secondaryDns.SecondaryDNSCheckField",
          "noAuthentication": false
        }
      ],
      "description": "secondaryDnsNameDomainToken operations"
    }
  ],
  "models": {
    "dedicated.biosSettings.BiosSettings": {
      "id": "BiosSettings",
      "namespace": "dedicated.biosSettings",
      "properties": {
        "supportedSettings": {
          "type": "dedicated.server.BiosSettingsSupport",
          "readOnly": true,
          "fullType": "dedicated.server.BiosSettingsSupport",
          "canBeNull": false,
          "description": "List supported setting"
        }
      },
      "description": "Your BiosSettings"
    },
    "dedicated.server.RtmRaidVolume": {
      "properties": {
        "stripe": {
          "type": "string",
          "description": "Raid volume stripe",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "string"
        },
        "label": {
          "readOnly": true,
          "fullType": "string",
          "canBeNull": true,
          "description": "Raid volume label",
          "type": "string"
        },
        "capacity": {
          "description": "Raid volume capacity",
          "canBeNull": true,
          "readOnly": true,
          "fullType": "complexType.UnitAndValue<double>",
          "type": "complexType.UnitAndValue<double>"
        },
        "volume": {
          "type": "string",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "string",
          "description": "Raid volume name"
        },
        "status": {
          "canBeNull": true,
          "readOnly": true,
          "fullType": "dedicated.server.RtmRaidStatusEnum",
          "description": "Raid volume status",
          "type": "dedicated.server.RtmRaidStatusEnum"
        },
        "chunks": {
          "type": "string",
          "fullType": "string",
          "readOnly": true,
          "canBeNull": true,
          "description": "Raid volume chunks"
        },
        "phys": {
          "readOnly": true,
          "fullType": "string",
          "canBeNull": true,
          "description": "Raid volume phys",
          "type": "string"
        },
        "syncprogress": {
          "type": "string",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "string",
          "description": "Raid volume synchronization progress"
        },
        "type": {
          "type": "string",
          "description": "Raid volume type",
          "fullType": "string",
          "readOnly": true,
          "canBeNull": true
        },
        "letter": {
          "type": "string",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "string",
          "description": "Raid volume letter"
        }
      },
      "description": "Server raid volume information",
      "id": "RtmRaidVolume",
      "namespace": "dedicated.server"
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
      "namespace": "dedicated.server",
      "enumType": "string",
      "id": "OptionEnum"
    },
    "dedicated.server.RoutingDetailsIpv6": {
      "properties": {
        "network": {
          "type": "ipv6Block",
          "canBeNull": true,
          "description": "Server network"
        },
        "gateway": {
          "canBeNull": true,
          "description": "Server gateway",
          "type": "ipv6"
        },
        "ip": {
          "description": "Server main IP",
          "canBeNull": true,
          "type": "ipv6Block"
        }
      },
      "description": "A structure describing IPv6 routing informations about this dedicated server",
      "id": "RoutingDetailsIpv6",
      "namespace": "dedicated.server"
    },
    "dedicated.server.RtmDiskSmart": {
      "id": "RtmDiskSmart",
      "namespace": "dedicated.server",
      "description": "A structure describing SMART health disk status",
      "properties": {
        "multizone_error_rate": {
          "type": "long",
          "description": "Multizone error rate",
          "canBeNull": true
        },
        "temperature_celsius": {
          "type": "long",
          "description": "temperature",
          "canBeNull": true
        },
        "udma_crc_error": {
          "type": "long",
          "canBeNull": true,
          "description": "UDMA crc error"
        },
        "offline_uncorrectable": {
          "canBeNull": true,
          "description": "Offline uncorrectable",
          "type": "long"
        },
        "uncorrected_read_errors": {
          "type": "long",
          "canBeNull": true,
          "description": "Uncorrected read errors"
        },
        "realocated_event_count": {
          "type": "long",
          "description": "Realocated event count",
          "canBeNull": true
        },
        "other_errors": {
          "canBeNull": true,
          "description": "Other errors",
          "type": "long"
        },
        "offline_seek_performance": {
          "canBeNull": true,
          "description": "Offline seek rate",
          "type": "long"
        },
        "uncorrected_write_errors": {
          "type": "long",
          "description": "Uncorrected write errors",
          "canBeNull": true
        },
        "current_pending_sector": {
          "canBeNull": true,
          "description": "Current pending sectors",
          "type": "long"
        }
      }
    },
    "zone.NamedResolutionFieldTypeEnum": {
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
      "description": "Resource record fieldType",
      "namespace": "zone",
      "enumType": "string",
      "id": "NamedResolutionFieldTypeEnum"
    },
    "dedicated.server.MrtgTypeEnum": {
      "enum": [
        "errors:download",
        "errors:upload",
        "packets:download",
        "packets:upload",
        "traffic:download",
        "traffic:upload"
      ],
      "description": "distincts MRTG type",
      "namespace": "dedicated.server",
      "id": "MrtgTypeEnum",
      "enumType": "string"
    },
    "dedicated.server.BandwidthvRackTypeEnum": {
      "enum": [
        "included",
        "standard"
      ],
      "description": " Different Bandwidth type",
      "enumType": "string",
      "id": "BandwidthvRackTypeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.TemplateCaps": {
      "id": "TemplateCaps",
      "namespace": "dedicated.server",
      "description": "Miscellaneous template capabilities regarding the server.",
      "properties": {
        "hybridSupport": {
          "type": "boolean",
          "description": "This boolean tells if the template supports hybrid install for the considered server.",
          "canBeNull": false
        }
      }
    },
    "dedicated.server.FormFactorEnum": {
      "id": "FormFactorEnum",
      "enumType": "string",
      "namespace": "dedicated.server",
      "enum": [
        "0.25u",
        "0.5u",
        "1u",
        "2u",
        "3u",
        "4u"
      ],
      "description": "Server form factor"
    },
    "complexType.ChartReturn": {
      "id": "ChartReturn",
      "namespace": "complexType",
      "properties": {
        "unit": {
          "type": "string",
          "description": null,
          "canBeNull": true
        },
        "values": {
          "type": "complexType.ChartTimestampValue[]",
          "description": null,
          "canBeNull": true
        }
      },
      "description": "Chart"
    },
    "secondaryDns.SecondaryDNS": {
      "description": "Secondary dns infos",
      "properties": {
        "domain": {
          "type": "string",
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "description": "domain on slave server"
        },
        "creationDate": {
          "type": "datetime",
          "description": "",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "datetime"
        },
        "dns": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "description": "secondary dns server",
          "type": "string"
        },
        "ipMaster": {
          "description": "master ip",
          "readOnly": false,
          "fullType": "ipv4",
          "canBeNull": false,
          "type": "ipv4"
        }
      },
      "id": "SecondaryDNS",
      "namespace": "secondaryDns"
    },
    "dedicated.server.RtmRaidVolumePort": {
      "id": "RtmRaidVolumePort",
      "namespace": "dedicated.server",
      "description": "Server raid volume port informations",
      "properties": {
        "model": {
          "type": "string",
          "canBeNull": true,
          "readOnly": true,
          "fullType": "string",
          "description": "Port model name"
        },
        "port": {
          "type": "string",
          "description": "Raid volume port",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": true
        },
        "capacity": {
          "fullType": "complexType.UnitAndValue<double>",
          "readOnly": true,
          "canBeNull": true,
          "description": "Port capacity",
          "type": "complexType.UnitAndValue<double>"
        },
        "disk": {
          "fullType": "string",
          "readOnly": true,
          "canBeNull": true,
          "description": "Port disk",
          "type": "string"
        },
        "serial": {
          "type": "string",
          "description": "Serial of this port",
          "canBeNull": true,
          "readOnly": true,
          "fullType": "string"
        },
        "syncprogress": {
          "description": "Raid port synchronization progress",
          "fullType": "string",
          "readOnly": true,
          "canBeNull": true,
          "type": "string"
        },
        "status": {
          "readOnly": true,
          "canBeNull": true,
          "fullType": "dedicated.server.RtmRaidStatusEnum",
          "description": "Status of this port",
          "type": "dedicated.server.RtmRaidStatusEnum"
        }
      }
    },
    "dedicated.server.netbootOption": {
      "namespace": "dedicated.server",
      "id": "netbootOption",
      "description": "Available boot options",
      "properties": {
        "value": {
          "description": "the value of this option",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "type": "string"
        },
        "option": {
          "type": "dedicated.server.BootOptionEnum",
          "description": "The option of this boot",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "dedicated.server.BootOptionEnum"
        }
      }
    },
    "dedicated.server.RtmMemory": {
      "id": "RtmMemory",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about server memory",
      "properties": {
        "slot": {
          "type": "string",
          "description": "Memory slot",
          "canBeNull": true
        },
        "capacity": {
          "type": "complexType.UnitAndValue<long>",
          "description": "Memory capacity ",
          "canBeNull": true
        }
      }
    },
    "service.RenewType": {
      "id": "RenewType",
      "namespace": "service",
      "description": "Map a possible renew for a specific service",
      "properties": {
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
        "period": {
          "description": "period of renew in month",
          "canBeNull": true,
          "type": "long"
        },
        "manualPayment": {
          "description": "The service needs to be manually renewed and paid",
          "canBeNull": true,
          "type": "boolean"
        },
        "deleteAtExpiration": {
          "type": "boolean",
          "canBeNull": false,
          "description": "The service will be deleted at expiration"
        }
      }
    },
    "dedicated.server.InstallationProgressSteps": {
      "properties": {
        "status": {
          "description": "Status of this installation step",
          "canBeNull": false,
          "type": "dedicated.server.InstallationProgressStatusEnum"
        },
        "comment": {
          "type": "string",
          "description": "Informations about this installation step",
          "canBeNull": false
        },
        "error": {
          "type": "string",
          "canBeNull": true,
          "description": "Error details if state is error"
        }
      },
      "description": "A structure describing informations about this dedicated server installation steps",
      "namespace": "dedicated.server",
      "id": "InstallationProgressSteps"
    },
    "dedicated.server.HardwareRaidDiskGroup": {
      "id": "HardwareRaidDiskGroup",
      "namespace": "dedicated.server",
      "description": "Disk attached to a RAID controller",
      "properties": {
        "speed": {
          "canBeNull": false,
          "description": "Disk insterface speed",
          "type": "complexType.UnitAndValue<string>"
        },
        "type": {
          "type": "dedicated.server.DiskTypeEnum",
          "canBeNull": false,
          "description": "Disk type"
        },
        "names": {
          "type": "string[]",
          "description": "Disk names",
          "canBeNull": false
        },
        "capacity": {
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "description": "Disk capacity"
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
    "dedicated.CheckSumTypesEnum": {
      "enumType": "string",
      "id": "CheckSumTypesEnum",
      "namespace": "dedicated",
      "enum": [
        "md5",
        "sha1",
        "sha256",
        "sha512"
      ],
      "description": "CheckSum type"
    },
    "dedicated.server.TrafficDetails": {
      "namespace": "dedicated.server",
      "id": "TrafficDetails",
      "description": "A structure describing traffic informations about this dedicated server",
      "properties": {
        "outputQuotaSize": {
          "description": "Monthly output traffic quota allowed",
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>"
        },
        "inputQuotaSize": {
          "canBeNull": true,
          "description": "Monthly input traffic quota allowed",
          "type": "complexType.UnitAndValue<long>"
        },
        "resetQuotaDate": {
          "type": "string",
          "description": "Next reset quota date for traffic counter",
          "canBeNull": true
        },
        "inputQuotaUsed": {
          "description": "Monthly input traffic consumed this month",
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>"
        },
        "outputQuotaUsed": {
          "type": "complexType.UnitAndValue<long>",
          "description": "Monthly output traffic consumed this month",
          "canBeNull": true
        },
        "isThrottled": {
          "type": "boolean",
          "description": "Is bandwidth throttleted for being over quota",
          "canBeNull": true
        }
      }
    },
    "dedicated.server.MrtgTimestampValue": {
      "namespace": "dedicated.server",
      "id": "MrtgTimestampValue",
      "description": "A timestamp associated to a value",
      "properties": {
        "value": {
          "type": "complexType.UnitAndValue<double>",
          "description": null,
          "canBeNull": true
        },
        "timestamp": {
          "type": "long",
          "description": null,
          "canBeNull": false
        }
      }
    },
    "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum": {
      "enum": [
        "public",
        "vrack",
        "vrack_aggregation"
      ],
      "description": "Available VirtualNetworkInterface modes",
      "namespace": "dedicated.virtualNetworkInterface",
      "enumType": "string",
      "id": "VirtualNetworkInterfaceModeEnum"
    },
    "dedicated.server.RtmCommandSize": {
      "namespace": "dedicated.server",
      "id": "RtmCommandSize",
      "description": "A structure describing informations about RTM",
      "properties": {
        "memory": {
          "canBeNull": true,
          "description": "Memory used by this process",
          "type": "complexType.UnitAndValue<long>"
        },
        "command": {
          "description": "Complete command line used for starting this process",
          "canBeNull": true,
          "type": "string"
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
      "namespace": "dedicated.networkInterfaceController",
      "enumType": "string",
      "id": "NetworkInterfaceControllerLinkTypeEnum"
    },
    "dedicated.server.HardwareSpecificationsDisk": {
      "description": "A structure describing informations about server disks",
      "properties": {
        "defaultHardwareRaidSize": {
          "type": "complexType.UnitAndValue<long>",
          "description": "default hardware raid size for this disk group",
          "canBeNull": true
        },
        "numberOfDisks": {
          "canBeNull": true,
          "description": "number of disks in this group",
          "type": "long"
        },
        "raidController": {
          "description": "raid controller, if any, managing this group of disks",
          "canBeNull": true,
          "type": "string"
        },
        "diskGroupId": {
          "description": "identifier of this disk group",
          "canBeNull": true,
          "type": "long"
        },
        "diskType": {
          "type": "string",
          "canBeNull": true,
          "description": "type of the disk (SSD, SATA, SAS, ...)"
        },
        "description": {
          "canBeNull": true,
          "description": "human readable description of this disk group",
          "type": "string"
        },
        "diskSize": {
          "type": "complexType.UnitAndValue<long>",
          "description": "disk capacity",
          "canBeNull": true
        },
        "defaultHardwareRaidType": {
          "canBeNull": true,
          "description": "default hardware raid type for this disk group",
          "type": "dedicated.server.HardwareSpecificationsRaidHardEnum"
        }
      },
      "id": "HardwareSpecificationsDisk",
      "namespace": "dedicated.server"
    },
    "dedicated.server.ByoiStatus": {
      "description": "Bring you own Image on your server",
      "properties": {
        "message": {
          "description": "Last message",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": true,
          "type": "string"
        },
        "status": {
          "canBeNull": true,
          "readOnly": true,
          "fullType": "dedicated.server.ByoiStatusEnum",
          "description": "Status",
          "type": "dedicated.server.ByoiStatusEnum"
        },
        "servername": {
          "readOnly": true,
          "fullType": "string",
          "canBeNull": true,
          "description": "Server name",
          "type": "string"
        },
        "checksum": {
          "description": "Last checksum",
          "canBeNull": true,
          "readOnly": true,
          "fullType": "string",
          "type": "string"
        }
      },
      "namespace": "dedicated.server",
      "id": "ByoiStatus"
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
      "id": "TaskFunctionEnum",
      "enumType": "string",
      "namespace": "dedicated"
    },
    "dedicated.server.RtmPartition": {
      "properties": {
        "partition": {
          "type": "string",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "description": "Partition"
        },
        "inodeUsage": {
          "type": "complexType.UnitAndValue<long>",
          "description": "Partition inode",
          "readOnly": true,
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true
        },
        "usage": {
          "canBeNull": true,
          "readOnly": true,
          "fullType": "complexType.UnitAndValue<long>",
          "description": "Partition usage",
          "type": "complexType.UnitAndValue<long>"
        },
        "mountPoint": {
          "type": "string",
          "description": "Partition mount point",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": true
        }
      },
      "description": "Server partitions informations",
      "namespace": "dedicated.server",
      "id": "RtmPartition"
    },
    "dedicated.server.BiosSettingsSupport": {
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
      "description": "A structure describing supported bios settings",
      "namespace": "dedicated.server",
      "id": "BiosSettingsSupport"
    },
    "dedicated.server.OptionRequiredEnum": {
      "enum": [
        "professionalUse"
      ],
      "description": "Required option",
      "namespace": "dedicated.server",
      "enumType": "string",
      "id": "OptionRequiredEnum"
    },
    "dedicated.server.HardwareSpecificationsExpansionCard": {
      "namespace": "dedicated.server",
      "id": "HardwareSpecificationsExpansionCard",
      "description": "A structure describing informations about server expansion cards",
      "properties": {
        "type": {
          "canBeNull": false,
          "description": "expansion card type",
          "type": "dedicated.server.HardwareSpecificationsExpansionCardTypeEnum"
        },
        "description": {
          "description": "expansion card description",
          "canBeNull": false,
          "type": "string"
        }
      }
    },
    "dedicated.server.OptionStateEnum": {
      "enum": [
        "released",
        "subscribed"
      ],
      "description": "All states a dedicated server option can be in",
      "namespace": "dedicated.server",
      "id": "OptionStateEnum",
      "enumType": "string"
    },
    "dedicated.server.RtmDisk": {
      "properties": {
        "model": {
          "type": "string",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "string",
          "description": "Disk model"
        },
        "capacity": {
          "description": "Disk capacity",
          "readOnly": true,
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>"
        },
        "disk": {
          "type": "string",
          "description": "Disk",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string"
        },
        "temperature": {
          "readOnly": true,
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "description": "Disk temperature",
          "type": "complexType.UnitAndValue<long>"
        }
      },
      "description": "Server disks informations",
      "id": "RtmDisk",
      "namespace": "dedicated.server"
    },
    "dedicated.server.BiosSettingsSupportSgxOptions": {
      "id": "BiosSettingsSupportSgxOptions",
      "namespace": "dedicated.server",
      "description": "A structure describing supported SGX options values",
      "properties": {
        "prmrr": {
          "canBeNull": false,
          "description": "Supported SGX prmrr values",
          "type": "dedicated.server.BiosSettingsSgxPrmrrEnum[]"
        },
        "status": {
          "description": "Supported SGX statuses",
          "canBeNull": false,
          "type": "dedicated.server.BiosSettingsSgxStatusEnum[]"
        }
      }
    },
    "dedicated.server.SupportLevelOrderable": {
      "namespace": "dedicated.server",
      "id": "SupportLevelOrderable",
      "description": "A structure describing informations support level orderable for this dedicated server",
      "properties": {
        "orderable": {
          "type": "boolean",
          "canBeNull": false,
          "description": "Is a support level is orderable for this server"
        },
        "levels": {
          "description": "Support level  orderable",
          "canBeNull": true,
          "type": "dedicated.server.SupportLevelOrderableEnum[]"
        }
      }
    },
    "dedicated.server.IpBlockSizeEnum": {
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
      "description": "IP block size",
      "namespace": "dedicated.server",
      "id": "IpBlockSizeEnum",
      "enumType": "long"
    },
    "dedicated.server.SupportLevelOrderableEnum": {
      "id": "SupportLevelOrderableEnum",
      "enumType": "string",
      "namespace": "dedicated.server",
      "enum": [
        "critical",
        "fastpath",
        "gs"
      ],
      "description": "distincts support level"
    },
    "dedicated.server.CpuFamilyEnum": {
      "enum": [
        "arm64",
        "armhf32",
        "ppc64",
        "x86",
        "x86-ht",
        "x86_64"
      ],
      "description": "cpu family ",
      "enumType": "string",
      "id": "CpuFamilyEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.Rtm": {
      "description": "Servers statistics sent by RTM (Real Time Monitoring)",
      "properties": {
        "needsUpdate": {
          "description": "You need to update RTM script on your server",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "boolean",
          "type": "boolean"
        },
        "currentVersion": {
          "type": "string",
          "fullType": "string",
          "readOnly": true,
          "canBeNull": true,
          "description": "RTM current version"
        },
        "installedVersion": {
          "description": "RTM currently installed version",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "string",
          "type": "string"
        }
      },
      "id": "Rtm",
      "namespace": "dedicated.server"
    },
    "dedicated.server.SupportReplaceHddInfo": {
      "description": "Hdd replace support request details. ",
      "properties": {
        "slot_id": {
          "type": "long",
          "description": "Disk slotId (if any)",
          "canBeNull": true
        },
        "disk_serial": {
          "canBeNull": false,
          "description": "Disk serial number",
          "type": "string"
        }
      },
      "namespace": "dedicated.server",
      "id": "SupportReplaceHddInfo"
    },
    "dedicated.TaskStatusEnum": {
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "dedicated",
      "description": "different task status",
      "enum": [
        "cancelled",
        "customerError",
        "doing",
        "done",
        "init",
        "ovhError",
        "todo"
      ]
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
      "namespace": "dedicated.server",
      "enumType": "string",
      "id": "BootTypeEnum"
    },
    "dedicated.server.ByoiStatusEnum": {
      "namespace": "dedicated.server",
      "id": "ByoiStatusEnum",
      "enumType": "string",
      "enum": [
        "doing",
        "done",
        "error"
      ],
      "description": "All states a status can be in"
    },
    "dedicated.server.BiosSettingsSgxStatusEnum": {
      "enumType": "string",
      "id": "BiosSettingsSgxStatusEnum",
      "namespace": "dedicated.server",
      "description": "SGX Status enum",
      "enum": [
        "disabled",
        "enabled",
        "software controlled"
      ]
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
    "dedicated.server.SwitchingDetails": {
      "id": "SwitchingDetails",
      "namespace": "dedicated.server",
      "properties": {
        "name": {
          "type": "string",
          "description": "Switch name",
          "canBeNull": true
        }
      },
      "description": "A structure describing switching informations about this dedicated server"
    },
    "dedicated.server.RtmCpu": {
      "properties": {
        "cache": {
          "description": "CPU cache size",
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>"
        },
        "core": {
          "description": "CPU core number",
          "canBeNull": true,
          "type": "long"
        },
        "freq": {
          "type": "complexType.UnitAndValue<long>",
          "description": "CPU frequency",
          "canBeNull": true
        },
        "name": {
          "type": "string",
          "description": "CPU  name",
          "canBeNull": true
        }
      },
      "description": "A structure describing informations about server cpu",
      "namespace": "dedicated.server",
      "id": "RtmCpu"
    },
    "dedicated.virtualNetworkInterface.VirtualNetworkInterface": {
      "id": "VirtualNetworkInterface",
      "namespace": "dedicated.virtualNetworkInterface",
      "description": "Your VirtualNetworkInterface",
      "properties": {
        "vrack": {
          "type": "string",
          "description": "vRack name",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "string"
        },
        "serverName": {
          "type": "string",
          "description": "Server bound to this VirtualNetworkInterface",
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false
        },
        "networkInterfaceController": {
          "readOnly": true,
          "fullType": "macAddress[]",
          "canBeNull": false,
          "description": "NetworkInterfaceControllers bound to this VirtualNetworkInterface",
          "type": "macAddress[]"
        },
        "mode": {
          "type": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum",
          "fullType": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum",
          "readOnly": false,
          "canBeNull": false,
          "description": "VirtualNetworkInterface mode"
        },
        "enabled": {
          "type": "boolean",
          "description": "VirtualNetworkInterface activation state",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "boolean"
        },
        "uuid": {
          "type": "uuid",
          "description": "VirtualNetworkInterface unique id",
          "fullType": "uuid",
          "readOnly": true,
          "canBeNull": false
        },
        "name": {
          "type": "string",
          "description": "User defined VirtualNetworkInterface name",
          "fullType": "string",
          "readOnly": false,
          "canBeNull": false
        }
      }
    },
    "dedicated.server.StateEnum": {
      "enum": [
        "error",
        "hacked",
        "hackedBlocked",
        "ok"
      ],
      "description": "All states a Dedicated can in",
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "dedicated.server"
    },
    "services.Service": {
      "properties": {
        "renew": {
          "description": "Way of handling the renew",
          "fullType": "service.RenewType",
          "readOnly": false,
          "canBeNull": true,
          "type": "service.RenewType"
        },
        "serviceId": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "coreTypes.ServiceId:long",
          "description": null,
          "type": "long"
        },
        "contactTech": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "description": null,
          "type": "string"
        },
        "creation": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "date",
          "type": "date"
        },
        "expiration": {
          "type": "date",
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "fullType": "date"
        },
        "engagedUpTo": {
          "readOnly": true,
          "canBeNull": true,
          "fullType": "date",
          "description": null,
          "type": "date"
        },
        "possibleRenewPeriod": {
          "type": "long[]",
          "description": "All the possible renew period of your service in month",
          "canBeNull": true,
          "readOnly": true,
          "fullType": "long[]"
        },
        "contactBilling": {
          "type": "string",
          "description": null,
          "readOnly": true,
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false
        },
        "domain": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "description": null,
          "type": "string"
        },
        "renewalType": {
          "type": "service.RenewalTypeEnum",
          "description": null,
          "readOnly": true,
          "fullType": "service.RenewalTypeEnum",
          "canBeNull": false
        },
        "status": {
          "fullType": "service.StateEnum",
          "readOnly": true,
          "canBeNull": false,
          "description": null,
          "type": "service.StateEnum"
        },
        "contactAdmin": {
          "type": "string",
          "readOnly": true,
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "description": null
        },
        "canDeleteAtExpiration": {
          "type": "boolean",
          "description": "Indicates that the service can be set up to be deleted at expiration",
          "readOnly": true,
          "fullType": "boolean",
          "canBeNull": false
        }
      },
      "description": "Details about a Service",
      "id": "Service",
      "namespace": "services"
    },
    "dedicated.networkInterfaceController.NetworkInterfaceController": {
      "properties": {
        "linkType": {
          "fullType": "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum",
          "readOnly": true,
          "canBeNull": false,
          "description": "NetworkInterfaceController linkType",
          "type": "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum"
        },
        "virtualNetworkInterface": {
          "description": "VirtualNetworkInterface bound to this NetworkInterfaceController",
          "fullType": "uuid",
          "readOnly": true,
          "canBeNull": true,
          "type": "uuid"
        },
        "mac": {
          "description": "NetworkInterfaceController mac",
          "readOnly": true,
          "fullType": "macAddress",
          "canBeNull": false,
          "type": "macAddress"
        }
      },
      "description": "Your networkInterfaceController",
      "id": "NetworkInterfaceController",
      "namespace": "dedicated.networkInterfaceController"
    },
    "dedicated.server.HardwareRaidSize": {
      "namespace": "dedicated.server",
      "id": "HardwareRaidSize",
      "description": "A structure describing the server's resulting layout after RAID configuration",
      "properties": {
        "configurations": {
          "canBeNull": false,
          "description": "Hardware RAID configuration list",
          "type": "dedicated.server.HardwareRaidConfiguration[]"
        }
      }
    },
    "dedicated.server.HardwareSpecificationsExpansionCardTypeEnum": {
      "enum": [
        "fpga",
        "gpu"
      ],
      "description": "Expansion card type enum",
      "enumType": "string",
      "id": "HardwareSpecificationsExpansionCardTypeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.DiskTypeEnum": {
      "enumType": "string",
      "id": "DiskTypeEnum",
      "namespace": "dedicated.server",
      "description": "Disk interface type enum",
      "enum": [
        "NVMe",
        "SAS",
        "SATA",
        "SSD",
        "Unknown"
      ]
    },
    "secondaryDns.SecondaryDNSCheckField": {
      "namespace": "secondaryDns",
      "id": "SecondaryDNSCheckField",
      "description": "A structure describing informations about secondary dns check field",
      "properties": {
        "fieldValue": {
          "type": "string",
          "description": "The field value to add on your DNS zone for this subDomain",
          "canBeNull": false
        },
        "subDomain": {
          "type": "string",
          "description": "The subdomain to add on your DNS zone for the domain",
          "canBeNull": false
        },
        "fieldType": {
          "type": "zone.NamedResolutionFieldTypeEnum",
          "canBeNull": false,
          "description": "The field type to add on your DNS zone for this subDomain"
        }
      }
    },
    "service.TerminationReasonEnum": {
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
      "namespace": "service",
      "id": "TerminationReasonEnum",
      "enumType": "string"
    },
    "dedicated.server.backup.BackupOffer": {
      "id": "BackupOffer",
      "namespace": "dedicated.server.backup",
      "properties": {
        "maxArchive": {
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "description": "Archive container max size."
        },
        "maxBandwidthStorage": {
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "description": "Storage volume r/w bandwidth limit: read/write volume offered per month on the container."
        },
        "maxBandwidthArchive": {
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "description": "Archive volume r/w bandwidth limit: read/write volume offered per month on the container."
        },
        "maxStorage": {
          "type": "complexType.UnitAndValue<long>",
          "description": "Storage container max size.",
          "canBeNull": true
        }
      },
      "description": "Backup cloud offer description for a dedicated server"
    },
    "complexType.SafeKeyValue<T>": {
      "properties": {
        "key": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "value": {
          "description": null,
          "canBeNull": false,
          "type": "T"
        }
      },
      "description": "Key and value, with proper key strings",
      "id": "SafeKeyValue",
      "generics": [
        "T"
      ],
      "namespace": "complexType"
    },
    "dedicated.server.RtmRaidStatusEnum": {
      "enum": [
        "KO",
        "OK",
        "REBUILDING",
        "UNKNOWN"
      ],
      "description": " Different RAID status",
      "id": "RtmRaidStatusEnum",
      "enumType": "string",
      "namespace": "dedicated.server"
    },
    "dedicated.server.InstallCustom": {
      "namespace": "dedicated.server",
      "id": "InstallCustom",
      "properties": {
        "language": {
          "description": "install language for ovh install choice",
          "canBeNull": true,
          "type": "string"
        },
        "resetHwRaid": {
          "canBeNull": true,
          "description": "Specify if we should attempt to reset hw raid on install.",
          "type": "boolean"
        },
        "sshKeyName": {
          "canBeNull": true,
          "description": "The name of ssh key to install",
          "type": "string"
        },
        "installRTM": {
          "type": "boolean",
          "description": "true if you want to install RTM",
          "canBeNull": true
        },
        "postInstallationScriptLink": {
          "type": "string",
          "description": "the url to your custom install script",
          "canBeNull": true
        },
        "installSqlServer": {
          "canBeNull": true,
          "description": "true if you want to install windows with sql feature",
          "type": "boolean"
        },
        "postInstallationScriptReturn": {
          "description": " the return of your script if everythings ok. Advice: your script should return a unique validation string in case of succes. A good example is \"loh1Xee7eo OK OK OK UGh8Ang1Gu",
          "canBeNull": true,
          "type": "string"
        },
        "useSpla": {
          "type": "boolean",
          "canBeNull": true,
          "description": "true if you want to install windows with your spla license"
        },
        "useDistribKernel": {
          "description": "true if you want to install with distrib kernel",
          "canBeNull": true,
          "type": "boolean"
        },
        "noRaid": {
          "type": "boolean",
          "description": "true if you want to install only on the first disk",
          "canBeNull": true
        },
        "diskGroupId": {
          "canBeNull": true,
          "description": "Disk group id to process install on (only available for some templates)",
          "type": "long"
        },
        "customHostname": {
          "description": "Personnal hostname to use in server reinstallation",
          "canBeNull": true,
          "type": "string"
        },
        "softRaidDevices": {
          "type": "long",
          "description": "Number of devices to use for system's software RAID",
          "canBeNull": true
        }
      },
      "description": "A structure describing informations about installation custom"
    },
    "dedicated.server.InstallationProgressStatus": {
      "description": "A structure describing informations about this dedicated server installation status",
      "properties": {
        "progress": {
          "type": "dedicated.server.InstallationProgressSteps[]",
          "canBeNull": true,
          "description": "Installation steps"
        },
        "elapsedTime": {
          "type": "long",
          "canBeNull": false,
          "description": "Elapsed time in seconds since installation beggining"
        }
      },
      "namespace": "dedicated.server",
      "id": "InstallationProgressStatus"
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
      "namespace": "service",
      "enumType": "string",
      "id": "StateEnum"
    },
    "service.RenewalTypeEnum": {
      "namespace": "service",
      "enumType": "string",
      "id": "RenewalTypeEnum",
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
    "dedicated.server.Netboot": {
      "namespace": "dedicated.server",
      "id": "Netboot",
      "properties": {
        "bootType": {
          "type": "dedicated.server.BootTypeEnum",
          "fullType": "dedicated.server.BootTypeEnum",
          "readOnly": true,
          "canBeNull": false,
          "description": "the boot system"
        },
        "kernel": {
          "type": "string",
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "description": "The boot kernel"
        },
        "bootId": {
          "type": "long",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "description": "boot id"
        },
        "description": {
          "type": "string",
          "description": "the boot description",
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false
        }
      },
      "description": "Available boots"
    },
    "support.NewMessageInfo": {
      "description": "Newly created support identifiers",
      "properties": {
        "ticketNumber": {
          "type": "long",
          "canBeNull": false,
          "description": "Ticket external number"
        },
        "ticketId": {
          "description": "Ticket identifier",
          "canBeNull": false,
          "type": "long"
        },
        "messageId": {
          "description": "Message identifier",
          "canBeNull": false,
          "type": "long"
        }
      },
      "id": "NewMessageInfo",
      "namespace": "support"
    },
    "dedicated.server.BootModeEnum": {
      "namespace": "dedicated.server",
      "id": "BootModeEnum",
      "enumType": "string",
      "description": "Server boot mode",
      "enum": [
        "legacy",
        "uefi",
        "uefi-legacy"
      ]
    },
    "dedicated.ImageTypesEnum": {
      "namespace": "dedicated",
      "id": "ImageTypesEnum",
      "enumType": "string",
      "description": "Type of your image",
      "enum": [
        "qcow2",
        "raw"
      ]
    },
    "dedicated.server.HardwareRaidConfiguration": {
      "namespace": "dedicated.server",
      "id": "HardwareRaidConfiguration",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "RAID configuration name",
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "RAID controller type",
          "type": "string"
        },
        "mode": {
          "type": "dedicated.server.HardwareSpecificationsRaidHardEnum",
          "canBeNull": false,
          "description": "RAID mode"
        },
        "diskSpanSize": {
          "type": "long",
          "description": "Size of disk spans on RAID",
          "canBeNull": false
        },
        "diskSize": {
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "description": "Disk capacity"
        },
        "diskCount": {
          "canBeNull": false,
          "description": "Disk count",
          "type": "long"
        },
        "capacity": {
          "type": "complexType.UnitAndValue<long>",
          "description": "RAID total capacity",
          "canBeNull": false
        }
      },
      "description": "Simulated result of how the hardware RAID template will be configured on this server"
    },
    "dedicated.server.Option": {
      "namespace": "dedicated.server",
      "id": "Option",
      "description": "Information about the options of a dedicated server",
      "properties": {
        "state": {
          "description": "The state of the option",
          "readOnly": true,
          "fullType": "dedicated.server.OptionStateEnum",
          "canBeNull": false,
          "type": "dedicated.server.OptionStateEnum"
        },
        "option": {
          "type": "dedicated.server.OptionEnum",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "dedicated.server.OptionEnum",
          "description": "The option name"
        }
      }
    },
    "dedicated.server.BiosSettingsSgxPrmrrEnum": {
      "enum": [
        "128",
        "256",
        "32",
        "64"
      ],
      "description": "SGX PRMRR value enum",
      "enumType": "string",
      "id": "BiosSettingsSgxPrmrrEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.BandwidthTypeEnum": {
      "enumType": "string",
      "id": "BandwidthTypeEnum",
      "namespace": "dedicated.server",
      "description": " Different Bandwidth type",
      "enum": [
        "included",
        "platinum",
        "premium",
        "standard",
        "ultimate"
      ]
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
    "dedicated.server.OlaDetails": {
      "properties": {
        "supportedModes": {
          "type": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum[]",
          "description": "What modes are supported",
          "canBeNull": true
        },
        "available": {
          "type": "boolean",
          "canBeNull": false,
          "description": "Is the OLA feature available"
        }
      },
      "description": "A structure describing OVH Link Aggregation available modes for this dedicated server",
      "namespace": "dedicated.server",
      "id": "OlaDetails"
    },
    "dedicated.server.HardwareRaidController": {
      "properties": {
        "model": {
          "canBeNull": false,
          "description": "Raid controler model",
          "type": "string"
        },
        "disks": {
          "type": "dedicated.server.HardwareRaidDiskGroup[]",
          "canBeNull": false,
          "description": "Connected disk type"
        },
        "type": {
          "type": "string",
          "canBeNull": false,
          "description": "Raid controler type"
        }
      },
      "description": "RAID controller configuration",
      "id": "HardwareRaidController",
      "namespace": "dedicated.server"
    },
    "complexType.UnitAndValue<T>": {
      "id": "UnitAndValue",
      "generics": [
        "T"
      ],
      "namespace": "complexType",
      "properties": {
        "value": {
          "type": "T",
          "description": null,
          "canBeNull": false
        },
        "unit": {
          "type": "string",
          "description": null,
          "canBeNull": false
        }
      },
      "description": "A numeric value tagged with its unit"
    },
    "dedicated.biosSettingsSgx.BiosSettingsSgx": {
      "properties": {
        "prmrr": {
          "type": "dedicated.server.BiosSettingsSgxPrmrrEnum",
          "description": "Settings sections",
          "readOnly": true,
          "fullType": "dedicated.server.BiosSettingsSgxPrmrrEnum",
          "canBeNull": false
        },
        "status": {
          "type": "dedicated.server.BiosSettingsSgxStatusEnum",
          "readOnly": true,
          "fullType": "dedicated.server.BiosSettingsSgxStatusEnum",
          "canBeNull": false,
          "description": "Settings sections"
        }
      },
      "description": "Your BiosSettings for SGX feature",
      "id": "BiosSettingsSgx",
      "namespace": "dedicated.biosSettingsSgx"
    },
    "dedicated.DatacenterEnum": {
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
      "description": "ovh datacenter",
      "enumType": "string",
      "id": "DatacenterEnum",
      "namespace": "dedicated"
    },
    "complexType.ChartTimestampValue": {
      "description": "A timestamp associated to a value",
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
      },
      "namespace": "complexType",
      "id": "ChartTimestampValue"
    },
    "dedicated.server.InstallTemplate": {
      "id": "InstallTemplate",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about an Installation templates",
      "properties": {
        "personal": {
          "type": "string[]",
          "canBeNull": true,
          "description": "Names list of yours installation templates compatibles with this server"
        },
        "ovh": {
          "canBeNull": true,
          "description": "Names list of ovh installationtemplates compatibles with this server",
          "type": "string[]"
        }
      }
    },
    "dedicated.server.RtmChartTypeEnum": {
      "id": "RtmChartTypeEnum",
      "enumType": "string",
      "namespace": "dedicated.server",
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
      ]
    },
    "dedicated.server.RtmLoad": {
      "namespace": "dedicated.server",
      "id": "RtmLoad",
      "properties": {
        "processRunning": {
          "type": "long",
          "description": "Number of process running",
          "canBeNull": true
        },
        "cpu": {
          "description": "CPU usage",
          "canBeNull": true,
          "type": "complexType.UnitAndValue<double>"
        },
        "loadavg1": {
          "description": "Load average in the last 1 minute",
          "canBeNull": true,
          "type": "double"
        },
        "memory": {
          "description": "Memory usage",
          "canBeNull": true,
          "type": "complexType.UnitAndValue<double>"
        },
        "loadavg15": {
          "canBeNull": true,
          "description": "Load average in the last 15 minutes",
          "type": "double"
        },
        "processCount": {
          "canBeNull": true,
          "description": "Number of processes using or waiting for CPU time",
          "type": "long"
        },
        "swap": {
          "type": "complexType.UnitAndValue<double>",
          "description": "Swap usage",
          "canBeNull": true
        },
        "uptime": {
          "type": "long",
          "canBeNull": true,
          "description": "Server uptime"
        },
        "loadavg5": {
          "canBeNull": true,
          "description": "Load average in the last 5 minutes",
          "type": "double"
        }
      },
      "description": "A structure describing informations about server load"
    },
    "dedicated.server.BandwidthDetails": {
      "id": "BandwidthDetails",
      "namespace": "dedicated.server",
      "properties": {
        "InternetToOvh": {
          "canBeNull": true,
          "description": "bandwidth limitation Internet to OVH",
          "type": "complexType.UnitAndValue<long>"
        },
        "OvhToOvh": {
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "description": "bandwidth limitation OVH to OVH"
        },
        "type": {
          "canBeNull": true,
          "description": "bandwidth offer type",
          "type": "dedicated.server.BandwidthTypeEnum"
        },
        "OvhToInternet": {
          "description": "bandwidth limitation OVH to Internet",
          "canBeNull": true,
          "type": "complexType.UnitAndValue<long>"
        }
      },
      "description": "A structure describing bandwidth informations about this dedicated server"
    },
    "dedicated.server.IpTypeOrderableEnum": {
      "enumType": "string",
      "id": "IpTypeOrderableEnum",
      "namespace": "dedicated.server",
      "enum": [
        "failover",
        "static",
        "unshielded"
      ],
      "description": "Orderable IP type"
    },
    "dedicated.server.IpOrderable": {
      "id": "IpOrderable",
      "namespace": "dedicated.server",
      "properties": {
        "ipv6": {
          "type": "dedicated.server.IpOrderableDetails[]",
          "description": "Orderable IP v6 details",
          "canBeNull": true
        },
        "ipv4": {
          "type": "dedicated.server.IpOrderableDetails[]",
          "description": "Orderable IP v4 details",
          "canBeNull": true
        }
      },
      "description": "A structure describing informations about orderable IP address"
    },
    "dedicated.server.Task": {
      "properties": {
        "lastUpdate": {
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": true,
          "description": "last update",
          "type": "datetime"
        },
        "taskId": {
          "type": "long",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "description": "the id of the task"
        },
        "doneDate": {
          "description": "Completion date",
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": true,
          "type": "datetime"
        },
        "status": {
          "description": "Task status",
          "readOnly": true,
          "fullType": "dedicated.TaskStatusEnum",
          "canBeNull": false,
          "type": "dedicated.TaskStatusEnum"
        },
        "function": {
          "readOnly": true,
          "fullType": "dedicated.TaskFunctionEnum",
          "canBeNull": false,
          "description": "Function name",
          "type": "dedicated.TaskFunctionEnum"
        },
        "comment": {
          "type": "string",
          "description": "Details of this task",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "string"
        },
        "startDate": {
          "type": "datetime",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "datetime",
          "description": "Task Creation date"
        }
      },
      "description": "Server tasks",
      "namespace": "dedicated.server",
      "id": "Task"
    },
    "dedicated.server.RtmOs": {
      "id": "RtmOs",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about Rtm os",
      "properties": {
        "release": {
          "type": "string",
          "canBeNull": true,
          "description": "OS release"
        },
        "kernelVersion": {
          "description": "OS kernel version",
          "canBeNull": true,
          "type": "string"
        },
        "kernelRelease": {
          "description": "OS kernel release",
          "canBeNull": true,
          "type": "string"
        }
      }
    },
    "dedicated.server.HardwareSpecifications": {
      "id": "HardwareSpecifications",
      "namespace": "dedicated.server",
      "properties": {
        "defaultHardwareRaidSize": {
          "canBeNull": true,
          "description": "Default hardware raid size for this server",
          "type": "complexType.UnitAndValue<long>"
        },
        "coresPerProcessor": {
          "type": "long",
          "description": "number of cores per processor",
          "canBeNull": true
        },
        "diskGroups": {
          "type": "dedicated.server.HardwareSpecificationsDisk[]",
          "description": "details about the groups of disks in the server",
          "canBeNull": true
        },
        "bootMode": {
          "type": "dedicated.server.BootModeEnum",
          "canBeNull": false,
          "description": "Server boot mode"
        },
        "processorName": {
          "type": "string",
          "canBeNull": true,
          "description": "processor name"
        },
        "threadsPerProcessor": {
          "type": "long",
          "description": "number of threads per processor",
          "canBeNull": true
        },
        "description": {
          "type": "string",
          "canBeNull": true,
          "description": "commercial name of this server"
        },
        "numberOfProcessors": {
          "description": "number of processors in this dedicated server",
          "canBeNull": true,
          "type": "long"
        },
        "processorArchitecture": {
          "type": "dedicated.server.CpuFamilyEnum",
          "description": "processor architecture bit",
          "canBeNull": true
        },
        "expansionCards": {
          "type": "dedicated.server.HardwareSpecificationsExpansionCard[]",
          "canBeNull": true,
          "description": "details about the server's expansion cards"
        },
        "memorySize": {
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "description": "ram capacity"
        },
        "usbKeys": {
          "type": "complexType.UnitAndValue<long>[]",
          "canBeNull": true,
          "description": "Capacity of the USB keys installed on your server, if any"
        },
        "motherboard": {
          "canBeNull": true,
          "description": "server motherboard",
          "type": "string"
        },
        "defaultHardwareRaidType": {
          "type": "dedicated.server.HardwareSpecificationsRaidHardEnum",
          "canBeNull": true,
          "description": "Default hardware raid type configured on this server"
        },
        "formFactor": {
          "description": "Server form factor",
          "canBeNull": true,
          "type": "dedicated.server.FormFactorEnum"
        }
      },
      "description": "A structure describing informations about this dedicated server"
    },
    "dedicated.server.HardwareRaidProfile": {
      "description": "A structure describing the server's hardware RAID configuration",
      "properties": {
        "controllers": {
          "description": "Hardware RAID controller list",
          "canBeNull": false,
          "type": "dedicated.server.HardwareRaidController[]"
        }
      },
      "id": "HardwareRaidProfile",
      "namespace": "dedicated.server"
    },
    "dedicated.server.IpOrderableDetails": {
      "description": "A structure describing informations about orderable IP address",
      "properties": {
        "blockSizes": {
          "canBeNull": false,
          "description": "Orderable IP blocks sizes",
          "type": "dedicated.server.IpBlockSizeEnum[]"
        },
        "included": {
          "type": "boolean",
          "canBeNull": false,
          "description": "Are those IP included with your offer"
        },
        "ipNumber": {
          "type": "long",
          "canBeNull": true,
          "description": "Total number of IP that can be routed to this server"
        },
        "number": {
          "type": "long",
          "description": "Total number of prefixes that can be routed to this server",
          "canBeNull": false
        },
        "optionRequired": {
          "type": "dedicated.server.OptionRequiredEnum",
          "description": "Which option is required to order this type of IP",
          "canBeNull": true
        },
        "type": {
          "description": "this IP type",
          "canBeNull": false,
          "type": "dedicated.server.IpTypeOrderableEnum"
        }
      },
      "id": "IpOrderableDetails",
      "namespace": "dedicated.server"
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
      "namespace": "dedicated.server",
      "enumType": "string",
      "id": "InstallationProgressStatusEnum"
    },
    "dedicated.server.AccessTypeEnum": {
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
      "namespace": "dedicated.server",
      "enumType": "string",
      "id": "AccessTypeEnum"
    },
    "dedicated.server.BootOptionEnum": {
      "namespace": "dedicated.server",
      "enumType": "string",
      "id": "BootOptionEnum",
      "enum": [
        "cpufamily",
        "grsec",
        "ipv6",
        "smp"
      ],
      "description": "Different option activated on netboot "
    },
    "dedicated.server.RoutingDetailsIpv4": {
      "description": "A structure describing IPv4 routing informations about this dedicated server",
      "properties": {
        "network": {
          "canBeNull": true,
          "description": "Server network",
          "type": "ipv4Block"
        },
        "ip": {
          "canBeNull": true,
          "description": "Server main IP",
          "type": "ipv4"
        },
        "gateway": {
          "canBeNull": true,
          "description": "Server gateway",
          "type": "ipv4"
        }
      },
      "namespace": "dedicated.server",
      "id": "RoutingDetailsIpv4"
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
      "namespace": "dedicated.server",
      "id": "HardwareSpecificationsRaidHardEnum",
      "enumType": "string"
    },
    "dedicated.server.NetworkSpecifications": {
      "properties": {
        "connection": {
          "type": "complexType.UnitAndValue<long>",
          "description": "Network connection flow rate",
          "canBeNull": true
        },
        "traffic": {
          "type": "dedicated.server.TrafficDetails",
          "description": "Traffic details",
          "canBeNull": true
        },
        "vrack": {
          "type": "dedicated.server.BandwidthvRackDetails",
          "description": "vRack details",
          "canBeNull": true
        },
        "bandwidth": {
          "type": "dedicated.server.BandwidthDetails",
          "description": "Bandwidth details",
          "canBeNull": true
        },
        "ola": {
          "type": "dedicated.server.OlaDetails",
          "description": "OLA details",
          "canBeNull": true
        },
        "switching": {
          "type": "dedicated.server.SwitchingDetails",
          "canBeNull": true,
          "description": "Switching details"
        },
        "routing": {
          "canBeNull": true,
          "description": "Routing details",
          "type": "dedicated.server.RoutingDetails"
        }
      },
      "description": "A structure describing network informations about this dedicated server",
      "id": "NetworkSpecifications",
      "namespace": "dedicated.server"
    },
    "dedicated.server.RtmRaid": {
      "namespace": "dedicated.server",
      "id": "RtmRaid",
      "properties": {
        "unit": {
          "type": "string",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "description": "Raid unit"
        }
      },
      "description": "Server raid informations"
    },
    "dedicated.server.Dedicated": {
      "properties": {
        "serverId": {
          "type": "long",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "long",
          "description": "your server id"
        },
        "datacenter": {
          "description": "dedicated datacenter localisation",
          "fullType": "dedicated.DatacenterEnum",
          "readOnly": true,
          "canBeNull": false,
          "type": "dedicated.DatacenterEnum"
        },
        "ip": {
          "description": "dedicated server ip",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "ipv4",
          "type": "ipv4"
        },
        "bootId": {
          "description": null,
          "readOnly": false,
          "canBeNull": true,
          "fullType": "long",
          "type": "long"
        },
        "monitoring": {
          "type": "boolean",
          "description": "Icmp monitoring state",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "boolean"
        },
        "supportLevel": {
          "type": "dedicated.server.SupportLevelEnum",
          "description": "Dedicated server support level",
          "readOnly": true,
          "fullType": "dedicated.server.SupportLevelEnum",
          "canBeNull": false
        },
        "rootDevice": {
          "readOnly": false,
          "canBeNull": true,
          "fullType": "string",
          "description": null,
          "type": "string"
        },
        "os": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "description": "Operating system",
          "type": "string"
        },
        "rack": {
          "type": "string",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "description": null
        },
        "rescueMail": {
          "fullType": "string",
          "readOnly": false,
          "canBeNull": true,
          "description": null,
          "type": "string"
        },
        "state": {
          "fullType": "dedicated.server.StateEnum",
          "readOnly": false,
          "canBeNull": false,
          "description": null,
          "type": "dedicated.server.StateEnum"
        },
        "linkSpeed": {
          "type": "long",
          "description": null,
          "canBeNull": true,
          "readOnly": true,
          "fullType": "long"
        },
        "name": {
          "description": "dedicated server name",
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "type": "string"
        },
        "professionalUse": {
          "type": "boolean",
          "readOnly": true,
          "fullType": "boolean",
          "canBeNull": false,
          "description": "Does this server have professional use option"
        },
        "reverse": {
          "readOnly": true,
          "canBeNull": true,
          "fullType": "string",
          "description": "dedicated server reverse",
          "type": "string"
        },
        "commercialRange": {
          "type": "string",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": true,
          "description": "dedicater server commercial range"
        }
      },
      "description": "Server informations",
      "id": "Dedicated",
      "namespace": "dedicated.server"
    },
    "dedicated.server.Access": {
      "namespace": "dedicated.server",
      "id": "Access",
      "description": "A structure describing the server's access",
      "properties": {
        "user": {
          "type": "string",
          "description": "Login",
          "canBeNull": true
        },
        "url": {
          "canBeNull": true,
          "description": "Url",
          "type": "string"
        },
        "password": {
          "description": "Password",
          "canBeNull": false,
          "type": "password"
        },
        "type": {
          "description": "Application access type",
          "canBeNull": false,
          "type": "dedicated.server.AccessTypeEnum"
        }
      }
    },
    "dedicated.server.RoutingDetails": {
      "id": "RoutingDetails",
      "namespace": "dedicated.server",
      "description": "A structure describing routing informations about this dedicated server",
      "properties": {
        "ipv6": {
          "type": "dedicated.server.RoutingDetailsIpv6",
          "canBeNull": true,
          "description": "Ipv6 routing details"
        },
        "ipv4": {
          "description": "Ipv4 routing details",
          "canBeNull": true,
          "type": "dedicated.server.RoutingDetailsIpv4"
        }
      }
    },
    "secondaryDns.SecondaryDNSNameServer": {
      "namespace": "secondaryDns",
      "id": "SecondaryDNSNameServer",
      "description": "A structure describing informations about available nameserver for secondary dns ",
      "properties": {
        "ipv6": {
          "description": null,
          "canBeNull": true,
          "type": "ipv6"
        },
        "ip": {
          "canBeNull": false,
          "description": null,
          "type": "ipv4"
        },
        "hostname": {
          "type": "string",
          "description": "the name server",
          "canBeNull": false
        }
      }
    },
    "dedicated.server.RtmPci": {
      "description": "A structure describing informations about server PCI devices",
      "properties": {
        "device": {
          "type": "string",
          "description": "PCI device information",
          "canBeNull": true
        },
        "bus": {
          "type": "string",
          "description": "PCI bus device",
          "canBeNull": true
        }
      },
      "namespace": "dedicated.server",
      "id": "RtmPci"
    },
    "dedicated.server.BandwidthvRackDetails": {
      "id": "BandwidthvRackDetails",
      "namespace": "dedicated.server",
      "description": "A structure describing vRack bandwidth informations about this dedicated server",
      "properties": {
        "bandwidth": {
          "canBeNull": true,
          "description": "vrack bandwidth limitation",
          "type": "complexType.UnitAndValue<long>"
        },
        "type": {
          "description": "bandwidth offer type",
          "canBeNull": true,
          "type": "dedicated.server.BandwidthvRackTypeEnum"
        }
      }
    },
    "dedicated.server.RtmMotherboardHw": {
      "id": "RtmMotherboardHw",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about motherboard",
      "properties": {
        "manufacturer": {
          "type": "string",
          "description": "Motherboard manufacturer",
          "canBeNull": true
        },
        "name": {
          "type": "string",
          "description": "Motherboard name",
          "canBeNull": true
        }
      }
    },
    "dedicated.server.RtmConnection": {
      "description": "A structure describing informations about opened sockets on the server",
      "properties": {
        "ip": {
          "canBeNull": true,
          "description": "The IP address connected",
          "type": "ip"
        },
        "procname": {
          "canBeNull": true,
          "description": "Name of the process",
          "type": "string"
        },
        "username": {
          "type": "string",
          "description": "Username used to start the process",
          "canBeNull": true
        },
        "exe": {
          "description": "Path to the program",
          "canBeNull": true,
          "type": "string"
        },
        "pid": {
          "canBeNull": true,
          "description": "Process ID",
          "type": "long"
        },
        "uid": {
          "type": "long",
          "description": "System user ID",
          "canBeNull": true
        },
        "port": {
          "type": "long",
          "description": "Port opened",
          "canBeNull": true
        },
        "cmdline": {
          "type": "string",
          "canBeNull": true,
          "description": "Complete command line used for starting this process"
        },
        "domain": {
          "description": "Domain used by the process",
          "canBeNull": true,
          "type": "string"
        }
      },
      "id": "RtmConnection",
      "namespace": "dedicated.server"
    },
    "dedicated.server.Intervention": {
      "properties": {
        "date": {
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": true,
          "description": "the intervention start date",
          "type": "datetime"
        },
        "type": {
          "description": "the intervention type",
          "fullType": "string",
          "readOnly": true,
          "canBeNull": true,
          "type": "string"
        },
        "interventionId": {
          "type": "long",
          "readOnly": true,
          "fullType": "long",
          "canBeNull": false,
          "description": "The intervention id"
        }
      },
      "description": "Intervention made on this server",
      "namespace": "dedicated.server",
      "id": "Intervention"
    },
    "dedicated.server.MrtgPeriodEnum": {
      "namespace": "dedicated.server",
      "id": "MrtgPeriodEnum",
      "enumType": "string",
      "enum": [
        "daily",
        "hourly",
        "monthly",
        "weekly",
        "yearly"
      ],
      "description": "distincts MRTG period"
    }
  },
  "apiVersion": "1.0",
  "basePath": "https://ca.api.kimsufi.com/1.0"
}