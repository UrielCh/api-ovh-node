import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/dedicated/server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the DEDICATED service"
    },
    {
      "path": "/dedicated/server/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.Dedicated",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dedicated.server.Dedicated",
              "paramType": "body",
              "fullType": "dedicated.server.Dedicated",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Server informations"
    },
    {
      "path": "/dedicated/server/{serviceName}/authenticationSecret",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.Access[]",
          "noAuthentication": false,
          "description": "Retrieve secret to connect to the server / application"
        }
      ],
      "description": "authenticationSecret operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/backupCloudOfferDetails",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.backup.BackupOffer",
          "noAuthentication": false,
          "description": "Get details on offered backup cloud if available for the current server"
        }
      ],
      "description": "backupCloudOfferDetails operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/biosSettings",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.biosSettings.BiosSettings",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Your BiosSettings"
    },
    {
      "path": "/dedicated/server/{serviceName}/biosSettings/sgx",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.biosSettingsSgx.BiosSettingsSgx",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Your BiosSettings for SGX feature"
    },
    {
      "path": "/dedicated/server/{serviceName}/biosSettings/sgx/configure",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "prmrr",
              "dataType": "dedicated.server.BiosSettingsSgxPrmrrEnum",
              "paramType": "body",
              "fullType": "dedicated.server.BiosSettingsSgxPrmrrEnum",
              "required": false,
              "description": "Size of the Processor Reserved Memory"
            },
            {
              "name": "status",
              "dataType": "dedicated.server.BiosSettingsSgxStatusEnum",
              "paramType": "body",
              "fullType": "dedicated.server.BiosSettingsSgxStatusEnum",
              "required": false,
              "description": "Desired SGX status"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.Task",
          "noAuthentication": false,
          "description": "Configure SGX feature"
        }
      ],
      "description": "configure operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/boot",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "bootType",
              "dataType": "dedicated.server.BootTypeEnum",
              "paramType": "query",
              "fullType": "dedicated.server.BootTypeEnum",
              "required": false,
              "description": "Filter the value of bootType property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Server compatibles netboots"
        }
      ],
      "description": "List the dedicated.server.Netboot objects"
    },
    {
      "path": "/dedicated/server/{serviceName}/boot/{bootId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "bootId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Boot ID"
            }
          ],
          "responseType": "dedicated.server.Netboot",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Available boots"
    },
    {
      "path": "/dedicated/server/{serviceName}/boot/{bootId}/option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "bootId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Boot ID"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.BootOptionEnum[]",
          "noAuthentication": false,
          "description": "Option used on this netboot"
        }
      ],
      "description": "List the dedicated.server.netbootOption objects"
    },
    {
      "path": "/dedicated/server/{serviceName}/boot/{bootId}/option/{option}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "bootId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Boot ID"
            },
            {
              "name": "option",
              "dataType": "dedicated.server.BootOptionEnum",
              "paramType": "path",
              "fullType": "dedicated.server.BootOptionEnum",
              "required": true,
              "description": "Option"
            }
          ],
          "responseType": "dedicated.server.netbootOption",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Available boot options"
    },
    {
      "path": "/dedicated/server/{serviceName}/bringYourOwnImage",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete your current image installation"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.ByoiStatus",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "URL",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Image URL"
            },
            {
              "name": "checkSum",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Image checksum"
            },
            {
              "name": "hostname",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Hostname"
            },
            {
              "name": "diskGroupId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Disk group id to process install on (only available for some templates)"
            },
            {
              "name": "userMetadatas",
              "dataType": "complexType.SafeKeyValue<string>[]",
              "paramType": "body",
              "fullType": "complexType.SafeKeyValue<string>[]",
              "required": false,
              "description": "Metadas"
            },
            {
              "name": "httpHeader",
              "dataType": "complexType.SafeKeyValue<password>[]",
              "paramType": "body",
              "fullType": "complexType.SafeKeyValue<password>[]",
              "required": false,
              "description": "HTTP Headers"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Image description"
            },
            {
              "name": "checkSumType",
              "dataType": "dedicated.CheckSumTypesEnum",
              "paramType": "body",
              "fullType": "dedicated.CheckSumTypesEnum",
              "required": true,
              "description": "Checksum type"
            },
            {
              "name": "userData",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": false,
              "description": "Configuration script"
            },
            {
              "name": "type",
              "dataType": "dedicated.ImageTypesEnum",
              "paramType": "body",
              "fullType": "dedicated.ImageTypesEnum",
              "required": true,
              "description": "Image type"
            },
            {
              "name": "sshKey",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "SshKey"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Start an install with your own image"
        }
      ],
      "description": "Bring you own Image on your server"
    },
    {
      "path": "/dedicated/server/{serviceName}/confirmTermination",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "reason",
              "dataType": "service.TerminationReasonEnum",
              "paramType": "body",
              "fullType": "service.TerminationReasonEnum",
              "required": false,
              "description": "Reason of your termination request"
            },
            {
              "name": "commentary",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Commentary about your termination request"
            },
            {
              "name": "token",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The termination token sent by mail to the admin contact"
            },
            {
              "name": "futureUse",
              "dataType": "service.TerminationFutureUseEnum",
              "paramType": "body",
              "fullType": "service.TerminationFutureUseEnum",
              "required": false,
              "description": "What next after your termination request"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Confirm termination of your service"
        }
      ],
      "description": "Confirm termination of your service"
    },
    {
      "path": "/dedicated/server/{serviceName}/install/compatibleTemplatePartitionSchemes",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": ""
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Retrieve compatible  install template partitions scheme"
        }
      ],
      "description": "compatibleTemplatePartitionSchemes operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/install/compatibleTemplates",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.InstallTemplate",
          "noAuthentication": false,
          "description": "Retrieve compatible  install templates names"
        }
      ],
      "description": "compatibleTemplates operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/install/hardwareRaidProfile",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.HardwareRaidProfile",
          "noAuthentication": false,
          "description": "Retrieve hardware RAID profile"
        }
      ],
      "description": "hardwareRaidProfile operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/install/hardwareRaidSize",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "partitionSchemeName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Partition scheme name"
            },
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            }
          ],
          "responseType": "dedicated.server.HardwareRaidSize",
          "noAuthentication": false,
          "description": "Get hardware RAID size for a given configuration"
        }
      ],
      "description": "hardwareRaidSize operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/install/start",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "partitionSchemeName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Partition scheme name"
            },
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Template name"
            },
            {
              "name": "details",
              "dataType": "dedicated.server.InstallCustom",
              "paramType": "body",
              "fullType": "dedicated.server.InstallCustom",
              "required": false,
              "description": "parameters for default install"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.Task",
          "noAuthentication": false,
          "description": "Start an install"
        }
      ],
      "description": "start operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/install/status",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.InstallationProgressStatus",
          "noAuthentication": false,
          "description": "Get installation status"
        }
      ],
      "description": "status operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/install/templateCapabilities",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": ""
            }
          ],
          "responseType": "dedicated.server.TemplateCaps",
          "noAuthentication": false,
          "description": "Gives some capabilities regarding the template for the current dedicated server."
        }
      ],
      "description": "templateCapabilities operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/intervention",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "technical intervention history"
        }
      ],
      "description": "List the dedicated.server.Intervention objects"
    },
    {
      "path": "/dedicated/server/{serviceName}/intervention/{interventionId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "interventionId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Intervention ID"
            }
          ],
          "responseType": "dedicated.server.Intervention",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Intervention made on this server"
    },
    {
      "path": "/dedicated/server/{serviceName}/ips",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "ipBlock[]",
          "noAuthentication": false,
          "description": "List all ip from server"
        }
      ],
      "description": "ips operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/mrtg",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-04-23T00:00:00+01:00",
            "deprecatedDate": "2017-10-23T00:00:00+01:00",
            "replacement": "/dedicated/server/{serviceName}/networkInterfaceController"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "type",
              "dataType": "dedicated.server.MrtgTypeEnum",
              "paramType": "query",
              "fullType": "dedicated.server.MrtgTypeEnum",
              "required": true,
              "description": "mrtg type"
            },
            {
              "name": "period",
              "dataType": "dedicated.server.MrtgPeriodEnum",
              "paramType": "query",
              "fullType": "dedicated.server.MrtgPeriodEnum",
              "required": true,
              "description": "mrtg period"
            }
          ],
          "responseType": "dedicated.server.MrtgTimestampValue[]",
          "noAuthentication": false,
          "description": "Retrieve traffic graph values"
        }
      ],
      "description": "mrtg operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/networkInterfaceController",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "linkType",
              "dataType": "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum",
              "paramType": "query",
              "fullType": "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum",
              "required": false,
              "description": "Filter the value of linkType property (=)"
            }
          ],
          "responseType": "macAddress[]",
          "noAuthentication": false,
          "description": "List server networkInterfaceController"
        }
      ],
      "description": "List the dedicated.networkInterfaceController.NetworkInterfaceController objects"
    },
    {
      "path": "/dedicated/server/{serviceName}/networkInterfaceController/{mac}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "mac",
              "dataType": "macAddress",
              "paramType": "path",
              "fullType": "macAddress",
              "required": true,
              "description": "Mac"
            }
          ],
          "responseType": "dedicated.networkInterfaceController.NetworkInterfaceController",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Your networkInterfaceController"
    },
    {
      "path": "/dedicated/server/{serviceName}/networkInterfaceController/{mac}/mrtg",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "mac",
              "dataType": "macAddress",
              "paramType": "path",
              "fullType": "macAddress",
              "required": true,
              "description": "Mac"
            },
            {
              "name": "type",
              "dataType": "dedicated.server.MrtgTypeEnum",
              "paramType": "query",
              "fullType": "dedicated.server.MrtgTypeEnum",
              "required": true,
              "description": "mrtg type"
            },
            {
              "name": "period",
              "dataType": "dedicated.server.MrtgPeriodEnum",
              "paramType": "query",
              "fullType": "dedicated.server.MrtgPeriodEnum",
              "required": true,
              "description": "mrtg period"
            }
          ],
          "responseType": "dedicated.server.MrtgTimestampValue[]",
          "noAuthentication": false,
          "description": "Retrieve traffic graph values"
        }
      ],
      "description": "mrtg operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.OptionEnum[]",
          "noAuthentication": false,
          "description": "List of dedicated server options"
        }
      ],
      "description": "List the dedicated.server.Option objects"
    },
    {
      "path": "/dedicated/server/{serviceName}/option/{option}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "option",
              "dataType": "dedicated.server.OptionEnum",
              "paramType": "path",
              "fullType": "dedicated.server.OptionEnum",
              "required": true,
              "description": "Option"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Release a given option"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "option",
              "dataType": "dedicated.server.OptionEnum",
              "paramType": "path",
              "fullType": "dedicated.server.OptionEnum",
              "required": true,
              "description": "Option"
            }
          ],
          "responseType": "dedicated.server.Option",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Information about the options of a dedicated server"
    },
    {
      "path": "/dedicated/server/{serviceName}/reboot",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.Task",
          "noAuthentication": false,
          "description": "Hard reboot this server"
        }
      ],
      "description": "reboot operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/secondaryDnsDomains",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of secondary dns domain name"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": false,
              "description": ""
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The domain to add"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "add a domain on secondary dns"
        }
      ],
      "description": "List the secondaryDns.SecondaryDNS objects"
    },
    {
      "path": "/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "remove this domain"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "secondaryDns.SecondaryDNS",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "secondaryDns.SecondaryDNS",
              "paramType": "body",
              "fullType": "secondaryDns.SecondaryDNS",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Secondary dns infos"
    },
    {
      "path": "/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}/dnsServer",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "secondaryDns.SecondaryDNSNameServer",
          "noAuthentication": false,
          "description": "domain name server informations"
        }
      ],
      "description": "dnsServer operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/secondaryDnsNameDomainToken",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "The domain to check"
            }
          ],
          "responseType": "secondaryDns.SecondaryDNSCheckField",
          "noAuthentication": false,
          "description": "DNS field to temporarily add to your zone so that we can verify you are the owner of this domain"
        }
      ],
      "description": "secondaryDnsNameDomainToken operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/secondaryDnsNameServerAvailable",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "secondaryDns.SecondaryDNSNameServer",
          "noAuthentication": false,
          "description": "Secondary nameServer available for your Server"
        }
      ],
      "description": "secondaryDnsNameServerAvailable operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/serviceInfos",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "services.Service",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "services.Service",
              "paramType": "body",
              "fullType": "services.Service",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Details about a Service"
    },
    {
      "path": "/dedicated/server/{serviceName}/specifications/hardware",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.HardwareSpecifications",
          "noAuthentication": false,
          "description": "Retrieve hardware informations about this dedicated server"
        }
      ],
      "description": "hardware operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/specifications/ip",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.IpOrderable",
          "noAuthentication": false,
          "description": "Retrieve IP capabilities about this dedicated server"
        }
      ],
      "description": "ip operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/specifications/network",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.NetworkSpecifications",
          "noAuthentication": false,
          "description": "Retrieve network informations about this dedicated server"
        }
      ],
      "description": "network operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.Rtm",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Servers statistics sent by RTM (Real Time Monitoring)"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/chart",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "type",
              "dataType": "dedicated.server.RtmChartTypeEnum",
              "paramType": "query",
              "fullType": "dedicated.server.RtmChartTypeEnum",
              "required": true,
              "description": "RTM chart type"
            },
            {
              "name": "period",
              "dataType": "dedicated.server.RtmChartPeriodEnum",
              "paramType": "query",
              "fullType": "dedicated.server.RtmChartPeriodEnum",
              "required": true,
              "description": "chart period"
            }
          ],
          "responseType": "complexType.ChartReturn",
          "noAuthentication": false,
          "description": "Retrieve RTM graph values"
        }
      ],
      "description": "chart operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/connection",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.RtmConnection[]",
          "noAuthentication": false,
          "description": "Get server opened connections"
        }
      ],
      "description": "connection operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/cpu",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.RtmCpu",
          "noAuthentication": false,
          "description": "Get server cpu informations"
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
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Server disks"
        }
      ],
      "description": "List the dedicated.server.RtmDisk objects"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/disk/{disk}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "disk",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Disk"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.RtmDisk",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Server disks informations"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/disk/{disk}/smart",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "disk",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Disk"
            }
          ],
          "responseType": "dedicated.server.RtmDiskSmart",
          "noAuthentication": false,
          "description": "Get disk smart informations"
        }
      ],
      "description": "smart operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/load",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.RtmLoad",
          "noAuthentication": false,
          "description": "Get server load"
        }
      ],
      "description": "load operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/memory",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.RtmMemory[]",
          "noAuthentication": false,
          "description": "Get server memory informations"
        }
      ],
      "description": "memory operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/motherboard",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.RtmMotherboardHw",
          "noAuthentication": false,
          "description": "Get server motherboard hardware informations"
        }
      ],
      "description": "motherboard operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/os",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.RtmOs",
          "noAuthentication": false,
          "description": "Get server os informations"
        }
      ],
      "description": "os operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/partition",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Server partitions"
        }
      ],
      "description": "List the dedicated.server.RtmPartition objects"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/partition/{partition}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "partition",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition"
            }
          ],
          "responseType": "dedicated.server.RtmPartition",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Server partitions informations"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/partition/{partition}/chart",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "partition",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition"
            },
            {
              "name": "period",
              "dataType": "dedicated.server.RtmChartPeriodEnum",
              "paramType": "query",
              "fullType": "dedicated.server.RtmChartPeriodEnum",
              "required": true,
              "description": "chart period"
            }
          ],
          "responseType": "complexType.ChartReturn",
          "noAuthentication": false,
          "description": "Retrieve partition charts"
        }
      ],
      "description": "chart operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/pci",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.RtmPci[]",
          "noAuthentication": false,
          "description": "Get server PCI devices informations"
        }
      ],
      "description": "pci operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/process",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.RtmCommandSize[]",
          "noAuthentication": false,
          "description": "Get server process"
        }
      ],
      "description": "process operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/raid",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Server raid informations"
        }
      ],
      "description": "List the dedicated.server.RtmRaid objects"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "unit",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Unit"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "dedicated.server.RtmRaid",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Server raid informations"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}/volume",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "unit",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Unit"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Raid unit volumes"
        }
      ],
      "description": "List the dedicated.server.RtmRaidVolume objects"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "unit",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Unit"
            },
            {
              "name": "volume",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Volume"
            }
          ],
          "responseType": "dedicated.server.RtmRaidVolume",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Server raid volume information"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "unit",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Unit"
            },
            {
              "name": "volume",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Volume"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Raid unit volume ports"
        }
      ],
      "description": "List the dedicated.server.RtmRaidVolumePort objects"
    },
    {
      "path": "/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port/{port}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "unit",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Unit"
            },
            {
              "name": "volume",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Volume"
            },
            {
              "name": "port",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Port"
            }
          ],
          "responseType": "dedicated.server.RtmRaidVolumePort",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Server raid volume port informations"
    },
    {
      "path": "/dedicated/server/{serviceName}/support/replace/cooling",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "details",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "Technical details or logs"
            },
            {
              "name": "comment",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "User comment"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "support.NewMessageInfo",
          "noAuthentication": false,
          "description": "Ask for a cooling module replacement"
        }
      ],
      "description": "cooling operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/support/replace/hardDiskDrive",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "inverse",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "If set to 'true', replace only NON LISTED DISKS"
            },
            {
              "name": "comment",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "User comment"
            },
            {
              "name": "disks",
              "dataType": "dedicated.server.SupportReplaceHddInfo[]",
              "paramType": "body",
              "fullType": "dedicated.server.SupportReplaceHddInfo[]",
              "required": true,
              "description": "If 'inverse' is set as 'false', the list of HDD TO REPLACE. If 'inverse' is set as 'true', the list of HDD TO NOT REPLACE."
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "support.NewMessageInfo",
          "noAuthentication": false,
          "description": "Ask for a broken HDD replacement"
        }
      ],
      "description": "hardDiskDrive operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/support/replace/memory",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "slots",
              "dataType": "string[]",
              "paramType": "body",
              "fullType": "string[]",
              "required": false,
              "description": "The list of faulty RAM slots (if you have the information)"
            },
            {
              "name": "details",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "Technical details or logs"
            },
            {
              "name": "comment",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "User comment"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "support.NewMessageInfo",
          "noAuthentication": false,
          "description": "Ask for a faulty RAM module replacement"
        }
      ],
      "description": "memory operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/task",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "function",
              "dataType": "dedicated.TaskFunctionEnum",
              "paramType": "query",
              "fullType": "dedicated.TaskFunctionEnum",
              "required": false,
              "description": "Filter the value of function property (=)"
            },
            {
              "name": "status",
              "dataType": "dedicated.TaskStatusEnum",
              "paramType": "query",
              "fullType": "dedicated.TaskStatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Dedicated server todos"
        }
      ],
      "description": "List the dedicated.server.Task objects"
    },
    {
      "path": "/dedicated/server/{serviceName}/task/{taskId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "taskId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Task ID"
            }
          ],
          "responseType": "dedicated.server.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Server tasks"
    },
    {
      "path": "/dedicated/server/{serviceName}/task/{taskId}/cancel",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "taskId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Task ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "this action stop the task progression if it's possible"
        }
      ],
      "description": "cancel operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/terminate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Terminate your service"
        }
      ],
      "description": "Terminate your service"
    },
    {
      "path": "/dedicated/server/{serviceName}/virtualNetworkInterface",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "vrack",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of vrack property (=)"
            },
            {
              "name": "mode",
              "dataType": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum",
              "paramType": "query",
              "fullType": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum",
              "required": false,
              "description": "Filter the value of mode property (=)"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of name property (=)"
            },
            {
              "name": "enabled",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Filter the value of enabled property (=)"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "List server VirtualNetworkInterfaces"
        }
      ],
      "description": "List the dedicated.virtualNetworkInterface.VirtualNetworkInterface objects"
    },
    {
      "path": "/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "uuid",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Uuid"
            }
          ],
          "responseType": "dedicated.virtualNetworkInterface.VirtualNetworkInterface",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dedicated.virtualNetworkInterface.VirtualNetworkInterface",
              "paramType": "body",
              "fullType": "dedicated.virtualNetworkInterface.VirtualNetworkInterface",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "uuid",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Uuid"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Your VirtualNetworkInterface"
    },
    {
      "path": "/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}/disable",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "uuid",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Uuid"
            }
          ],
          "responseType": "dedicated.server.Task",
          "noAuthentication": false,
          "description": "Disable this VirtualNetworkInterface"
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}/enable",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "uuid",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Uuid"
            }
          ],
          "responseType": "dedicated.server.Task",
          "noAuthentication": false,
          "description": "Enable this VirtualNetworkInterface"
        }
      ],
      "description": "enable operations"
    }
  ],
  "resourcePath": "/dedicated/server",
  "basePath": "https://eu.api.kimsufi.com/1.0",
  "models": {
    "complexType.ChartReturn": {
      "id": "ChartReturn",
      "namespace": "complexType",
      "description": "Chart",
      "properties": {
        "unit": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "values": {
          "type": "complexType.ChartTimestampValue[]",
          "fullType": "complexType.ChartTimestampValue[]",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "complexType.ChartTimestampValue": {
      "id": "ChartTimestampValue",
      "namespace": "complexType",
      "description": "A timestamp associated to a value",
      "properties": {
        "timestamp": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "complexType.SafeKeyValue<T>": {
      "id": "SafeKeyValue",
      "namespace": "complexType",
      "description": "Key and value, with proper key strings",
      "generics": [
        "T"
      ],
      "properties": {
        "key": {
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
    "dedicated.CheckSumTypesEnum": {
      "id": "CheckSumTypesEnum",
      "namespace": "dedicated",
      "description": "CheckSum type",
      "enum": [
        "md5",
        "sha1",
        "sha256",
        "sha512"
      ],
      "enumType": "string"
    },
    "dedicated.DatacenterEnum": {
      "id": "DatacenterEnum",
      "namespace": "dedicated",
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
      "enumType": "string"
    },
    "dedicated.ImageTypesEnum": {
      "id": "ImageTypesEnum",
      "namespace": "dedicated",
      "description": "Type of your image",
      "enum": [
        "qcow2",
        "raw"
      ],
      "enumType": "string"
    },
    "dedicated.TaskFunctionEnum": {
      "id": "TaskFunctionEnum",
      "namespace": "dedicated",
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
      "enumType": "string"
    },
    "dedicated.TaskStatusEnum": {
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
      ],
      "enumType": "string"
    },
    "dedicated.biosSettings.BiosSettings": {
      "id": "BiosSettings",
      "namespace": "dedicated.biosSettings",
      "description": "Your BiosSettings",
      "properties": {
        "supportedSettings": {
          "type": "dedicated.server.BiosSettingsSupport",
          "fullType": "dedicated.server.BiosSettingsSupport",
          "canBeNull": false,
          "readOnly": true,
          "description": "List supported setting",
          "required": true
        }
      }
    },
    "dedicated.biosSettingsSgx.BiosSettingsSgx": {
      "id": "BiosSettingsSgx",
      "namespace": "dedicated.biosSettingsSgx",
      "description": "Your BiosSettings for SGX feature",
      "properties": {
        "prmrr": {
          "type": "dedicated.server.BiosSettingsSgxPrmrrEnum",
          "fullType": "dedicated.server.BiosSettingsSgxPrmrrEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Settings sections",
          "required": true
        },
        "status": {
          "type": "dedicated.server.BiosSettingsSgxStatusEnum",
          "fullType": "dedicated.server.BiosSettingsSgxStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Settings sections",
          "required": true
        }
      }
    },
    "dedicated.networkInterfaceController.NetworkInterfaceController": {
      "id": "NetworkInterfaceController",
      "namespace": "dedicated.networkInterfaceController",
      "description": "Your networkInterfaceController",
      "properties": {
        "linkType": {
          "type": "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum",
          "fullType": "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "NetworkInterfaceController linkType",
          "required": true
        },
        "mac": {
          "type": "macAddress",
          "fullType": "macAddress",
          "canBeNull": false,
          "readOnly": true,
          "description": "NetworkInterfaceController mac",
          "required": true
        },
        "virtualNetworkInterface": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "VirtualNetworkInterface bound to this NetworkInterfaceController",
          "required": false
        }
      }
    },
    "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum": {
      "id": "NetworkInterfaceControllerLinkTypeEnum",
      "namespace": "dedicated.networkInterfaceController",
      "description": "List NetworkInterfaceController linktype",
      "enum": [
        "isolated",
        "private",
        "private_lag",
        "provisioning",
        "public"
      ],
      "enumType": "string"
    },
    "dedicated.server.Access": {
      "id": "Access",
      "namespace": "dedicated.server",
      "description": "A structure describing the server's access",
      "properties": {
        "password": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": false,
          "description": "Password",
          "required": true
        },
        "type": {
          "type": "dedicated.server.AccessTypeEnum",
          "fullType": "dedicated.server.AccessTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Application access type",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Url",
          "required": false
        },
        "user": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Login",
          "required": false
        }
      }
    },
    "dedicated.server.AccessTypeEnum": {
      "id": "AccessTypeEnum",
      "namespace": "dedicated.server",
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
      "enumType": "string"
    },
    "dedicated.server.BandwidthDetails": {
      "id": "BandwidthDetails",
      "namespace": "dedicated.server",
      "description": "A structure describing bandwidth informations about this dedicated server",
      "properties": {
        "InternetToOvh": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "bandwidth limitation Internet to OVH",
          "required": false
        },
        "OvhToInternet": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "bandwidth limitation OVH to Internet",
          "required": false
        },
        "OvhToOvh": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "bandwidth limitation OVH to OVH",
          "required": false
        },
        "type": {
          "type": "dedicated.server.BandwidthTypeEnum",
          "fullType": "dedicated.server.BandwidthTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "bandwidth offer type",
          "required": false
        }
      }
    },
    "dedicated.server.BandwidthTypeEnum": {
      "id": "BandwidthTypeEnum",
      "namespace": "dedicated.server",
      "description": " Different Bandwidth type",
      "enum": [
        "included",
        "platinum",
        "premium",
        "standard",
        "ultimate"
      ],
      "enumType": "string"
    },
    "dedicated.server.BandwidthvRackDetails": {
      "id": "BandwidthvRackDetails",
      "namespace": "dedicated.server",
      "description": "A structure describing vRack bandwidth informations about this dedicated server",
      "properties": {
        "bandwidth": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "vrack bandwidth limitation",
          "required": false
        },
        "type": {
          "type": "dedicated.server.BandwidthvRackTypeEnum",
          "fullType": "dedicated.server.BandwidthvRackTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "bandwidth offer type",
          "required": false
        }
      }
    },
    "dedicated.server.BandwidthvRackTypeEnum": {
      "id": "BandwidthvRackTypeEnum",
      "namespace": "dedicated.server",
      "description": " Different Bandwidth type",
      "enum": [
        "included",
        "standard"
      ],
      "enumType": "string"
    },
    "dedicated.server.BiosSettingsSgxPrmrrEnum": {
      "id": "BiosSettingsSgxPrmrrEnum",
      "namespace": "dedicated.server",
      "description": "SGX PRMRR value enum",
      "enum": [
        "128",
        "256",
        "32",
        "64"
      ],
      "enumType": "string"
    },
    "dedicated.server.BiosSettingsSgxStatusEnum": {
      "id": "BiosSettingsSgxStatusEnum",
      "namespace": "dedicated.server",
      "description": "SGX Status enum",
      "enum": [
        "disabled",
        "enabled",
        "software controlled"
      ],
      "enumType": "string"
    },
    "dedicated.server.BiosSettingsSupport": {
      "id": "BiosSettingsSupport",
      "namespace": "dedicated.server",
      "description": "A structure describing supported bios settings",
      "properties": {
        "sgx": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "SGX feature support",
          "required": true
        },
        "sgxOptions": {
          "type": "dedicated.server.BiosSettingsSupportSgxOptions",
          "fullType": "dedicated.server.BiosSettingsSupportSgxOptions",
          "canBeNull": false,
          "readOnly": false,
          "description": "Supported SGX options",
          "required": true
        }
      }
    },
    "dedicated.server.BiosSettingsSupportSgxOptions": {
      "id": "BiosSettingsSupportSgxOptions",
      "namespace": "dedicated.server",
      "description": "A structure describing supported SGX options values",
      "properties": {
        "prmrr": {
          "type": "dedicated.server.BiosSettingsSgxPrmrrEnum[]",
          "fullType": "dedicated.server.BiosSettingsSgxPrmrrEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Supported SGX prmrr values",
          "required": true
        },
        "status": {
          "type": "dedicated.server.BiosSettingsSgxStatusEnum[]",
          "fullType": "dedicated.server.BiosSettingsSgxStatusEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Supported SGX statuses",
          "required": true
        }
      }
    },
    "dedicated.server.BootModeEnum": {
      "id": "BootModeEnum",
      "namespace": "dedicated.server",
      "description": "Server boot mode",
      "enum": [
        "legacy",
        "uefi",
        "uefi-legacy"
      ],
      "enumType": "string"
    },
    "dedicated.server.BootOptionEnum": {
      "id": "BootOptionEnum",
      "namespace": "dedicated.server",
      "description": "Different option activated on netboot ",
      "enum": [
        "cpufamily",
        "grsec",
        "ipv6",
        "smp"
      ],
      "enumType": "string"
    },
    "dedicated.server.BootTypeEnum": {
      "id": "BootTypeEnum",
      "namespace": "dedicated.server",
      "description": " Different netboot boot",
      "enum": [
        "harddisk",
        "internal",
        "ipxeCustomerScript",
        "network",
        "rescue"
      ],
      "enumType": "string"
    },
    "dedicated.server.ByoiStatus": {
      "id": "ByoiStatus",
      "namespace": "dedicated.server",
      "description": "Bring you own Image on your server",
      "properties": {
        "checksum": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last checksum",
          "required": false
        },
        "message": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last message",
          "required": false
        },
        "servername": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Server name",
          "required": false
        },
        "status": {
          "type": "dedicated.server.ByoiStatusEnum",
          "fullType": "dedicated.server.ByoiStatusEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Status",
          "required": false
        }
      }
    },
    "dedicated.server.ByoiStatusEnum": {
      "id": "ByoiStatusEnum",
      "namespace": "dedicated.server",
      "description": "All states a status can be in",
      "enum": [
        "doing",
        "done",
        "error"
      ],
      "enumType": "string"
    },
    "dedicated.server.CpuFamilyEnum": {
      "id": "CpuFamilyEnum",
      "namespace": "dedicated.server",
      "description": "cpu family ",
      "enum": [
        "arm64",
        "armhf32",
        "ppc64",
        "x86",
        "x86-ht",
        "x86_64"
      ],
      "enumType": "string"
    },
    "dedicated.server.Dedicated": {
      "id": "Dedicated",
      "namespace": "dedicated.server",
      "description": "Server informations",
      "properties": {
        "bootId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "commercialRange": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "dedicater server commercial range",
          "required": false
        },
        "datacenter": {
          "type": "dedicated.DatacenterEnum",
          "fullType": "dedicated.DatacenterEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "dedicated datacenter localisation",
          "required": true
        },
        "ip": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "description": "dedicated server ip",
          "required": true
        },
        "linkSpeed": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "monitoring": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Icmp monitoring state",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "dedicated server name",
          "required": true
        },
        "os": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Operating system",
          "required": true
        },
        "professionalUse": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Does this server have professional use option",
          "required": true
        },
        "rack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "rescueMail": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "reverse": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "dedicated server reverse",
          "required": false
        },
        "rootDevice": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "serverId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "your server id",
          "required": true
        },
        "state": {
          "type": "dedicated.server.StateEnum",
          "fullType": "dedicated.server.StateEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "supportLevel": {
          "type": "dedicated.server.SupportLevelEnum",
          "fullType": "dedicated.server.SupportLevelEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Dedicated server support level",
          "required": true
        }
      }
    },
    "dedicated.server.DiskTypeEnum": {
      "id": "DiskTypeEnum",
      "namespace": "dedicated.server",
      "description": "Disk interface type enum",
      "enum": [
        "NVMe",
        "SAS",
        "SATA",
        "SSD",
        "Unknown"
      ],
      "enumType": "string"
    },
    "dedicated.server.FormFactorEnum": {
      "id": "FormFactorEnum",
      "namespace": "dedicated.server",
      "description": "Server form factor",
      "enum": [
        "0.25u",
        "0.5u",
        "1u",
        "2u",
        "3u",
        "4u"
      ],
      "enumType": "string"
    },
    "dedicated.server.HardwareRaidConfiguration": {
      "id": "HardwareRaidConfiguration",
      "namespace": "dedicated.server",
      "description": "Simulated result of how the hardware RAID template will be configured on this server",
      "properties": {
        "capacity": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "description": "RAID total capacity",
          "required": true
        },
        "diskCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Disk count",
          "required": true
        },
        "diskSize": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Disk capacity",
          "required": true
        },
        "diskSpanSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Size of disk spans on RAID",
          "required": true
        },
        "mode": {
          "type": "dedicated.server.HardwareSpecificationsRaidHardEnum",
          "fullType": "dedicated.server.HardwareSpecificationsRaidHardEnum",
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
          "description": "RAID configuration name",
          "required": true
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "RAID controller type",
          "required": true
        }
      }
    },
    "dedicated.server.HardwareRaidController": {
      "id": "HardwareRaidController",
      "namespace": "dedicated.server",
      "description": "RAID controller configuration",
      "properties": {
        "disks": {
          "type": "dedicated.server.HardwareRaidDiskGroup[]",
          "fullType": "dedicated.server.HardwareRaidDiskGroup[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Connected disk type",
          "required": true
        },
        "model": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Raid controler model",
          "required": true
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Raid controler type",
          "required": true
        }
      }
    },
    "dedicated.server.HardwareRaidDiskGroup": {
      "id": "HardwareRaidDiskGroup",
      "namespace": "dedicated.server",
      "description": "Disk attached to a RAID controller",
      "properties": {
        "capacity": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Disk capacity",
          "required": true
        },
        "names": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Disk names",
          "required": true
        },
        "speed": {
          "type": "complexType.UnitAndValue<string>",
          "fullType": "complexType.UnitAndValue<string>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Disk insterface speed",
          "required": true
        },
        "type": {
          "type": "dedicated.server.DiskTypeEnum",
          "fullType": "dedicated.server.DiskTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Disk type",
          "required": true
        }
      }
    },
    "dedicated.server.HardwareRaidProfile": {
      "id": "HardwareRaidProfile",
      "namespace": "dedicated.server",
      "description": "A structure describing the server's hardware RAID configuration",
      "properties": {
        "controllers": {
          "type": "dedicated.server.HardwareRaidController[]",
          "fullType": "dedicated.server.HardwareRaidController[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Hardware RAID controller list",
          "required": true
        }
      }
    },
    "dedicated.server.HardwareRaidSize": {
      "id": "HardwareRaidSize",
      "namespace": "dedicated.server",
      "description": "A structure describing the server's resulting layout after RAID configuration",
      "properties": {
        "configurations": {
          "type": "dedicated.server.HardwareRaidConfiguration[]",
          "fullType": "dedicated.server.HardwareRaidConfiguration[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Hardware RAID configuration list",
          "required": true
        }
      }
    },
    "dedicated.server.HardwareSpecifications": {
      "id": "HardwareSpecifications",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about this dedicated server",
      "properties": {
        "bootMode": {
          "type": "dedicated.server.BootModeEnum",
          "fullType": "dedicated.server.BootModeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Server boot mode",
          "required": true
        },
        "coresPerProcessor": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "number of cores per processor",
          "required": false
        },
        "defaultHardwareRaidSize": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "Default hardware raid size for this server",
          "required": false
        },
        "defaultHardwareRaidType": {
          "type": "dedicated.server.HardwareSpecificationsRaidHardEnum",
          "fullType": "dedicated.server.HardwareSpecificationsRaidHardEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Default hardware raid type configured on this server",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "commercial name of this server",
          "required": false
        },
        "diskGroups": {
          "type": "dedicated.server.HardwareSpecificationsDisk[]",
          "fullType": "dedicated.server.HardwareSpecificationsDisk[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "details about the groups of disks in the server",
          "required": false
        },
        "expansionCards": {
          "type": "dedicated.server.HardwareSpecificationsExpansionCard[]",
          "fullType": "dedicated.server.HardwareSpecificationsExpansionCard[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "details about the server's expansion cards",
          "required": false
        },
        "formFactor": {
          "type": "dedicated.server.FormFactorEnum",
          "fullType": "dedicated.server.FormFactorEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Server form factor",
          "required": false
        },
        "memorySize": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "ram capacity",
          "required": false
        },
        "motherboard": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "server motherboard",
          "required": false
        },
        "numberOfProcessors": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "number of processors in this dedicated server",
          "required": false
        },
        "processorArchitecture": {
          "type": "dedicated.server.CpuFamilyEnum",
          "fullType": "dedicated.server.CpuFamilyEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "processor architecture bit",
          "required": false
        },
        "processorName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "processor name",
          "required": false
        },
        "threadsPerProcessor": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "number of threads per processor",
          "required": false
        },
        "usbKeys": {
          "type": "complexType.UnitAndValue<long>[]",
          "fullType": "complexType.UnitAndValue<long>[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Capacity of the USB keys installed on your server, if any",
          "required": false
        }
      }
    },
    "dedicated.server.HardwareSpecificationsDisk": {
      "id": "HardwareSpecificationsDisk",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about server disks",
      "properties": {
        "defaultHardwareRaidSize": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "default hardware raid size for this disk group",
          "required": false
        },
        "defaultHardwareRaidType": {
          "type": "dedicated.server.HardwareSpecificationsRaidHardEnum",
          "fullType": "dedicated.server.HardwareSpecificationsRaidHardEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "default hardware raid type for this disk group",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "human readable description of this disk group",
          "required": false
        },
        "diskGroupId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "identifier of this disk group",
          "required": false
        },
        "diskSize": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "disk capacity",
          "required": false
        },
        "diskType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "type of the disk (SSD, SATA, SAS, ...)",
          "required": false
        },
        "numberOfDisks": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "number of disks in this group",
          "required": false
        },
        "raidController": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "raid controller, if any, managing this group of disks",
          "required": false
        }
      }
    },
    "dedicated.server.HardwareSpecificationsExpansionCard": {
      "id": "HardwareSpecificationsExpansionCard",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about server expansion cards",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "expansion card description",
          "required": true
        },
        "type": {
          "type": "dedicated.server.HardwareSpecificationsExpansionCardTypeEnum",
          "fullType": "dedicated.server.HardwareSpecificationsExpansionCardTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "expansion card type",
          "required": true
        }
      }
    },
    "dedicated.server.HardwareSpecificationsExpansionCardTypeEnum": {
      "id": "HardwareSpecificationsExpansionCardTypeEnum",
      "namespace": "dedicated.server",
      "description": "Expansion card type enum",
      "enum": [
        "fpga",
        "gpu"
      ],
      "enumType": "string"
    },
    "dedicated.server.HardwareSpecificationsRaidHardEnum": {
      "id": "HardwareSpecificationsRaidHardEnum",
      "namespace": "dedicated.server",
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
      "enumType": "string"
    },
    "dedicated.server.InstallCustom": {
      "id": "InstallCustom",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about installation custom",
      "properties": {
        "customHostname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Personnal hostname to use in server reinstallation",
          "required": false
        },
        "diskGroupId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Disk group id to process install on (only available for some templates)",
          "required": false
        },
        "installRTM": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "true if you want to install RTM",
          "required": false
        },
        "installSqlServer": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "true if you want to install windows with sql feature",
          "required": false
        },
        "language": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "install language for ovh install choice",
          "required": false
        },
        "noRaid": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "true if you want to install only on the first disk",
          "required": false
        },
        "postInstallationScriptLink": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "the url to your custom install script",
          "required": false
        },
        "postInstallationScriptReturn": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": " the return of your script if everythings ok. Advice: your script should return a unique validation string in case of succes. A good example is \"loh1Xee7eo OK OK OK UGh8Ang1Gu",
          "required": false
        },
        "resetHwRaid": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Specify if we should attempt to reset hw raid on install.",
          "required": false
        },
        "softRaidDevices": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number of devices to use for system's software RAID",
          "required": false
        },
        "sshKeyName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The name of ssh key to install",
          "required": false
        },
        "useDistribKernel": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "true if you want to install with distrib kernel",
          "required": false
        },
        "useSpla": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "true if you want to install windows with your spla license",
          "required": false
        }
      }
    },
    "dedicated.server.InstallTemplate": {
      "id": "InstallTemplate",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about an Installation templates",
      "properties": {
        "ovh": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Names list of ovh installationtemplates compatibles with this server",
          "required": false
        },
        "personal": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Names list of yours installation templates compatibles with this server",
          "required": false
        }
      }
    },
    "dedicated.server.InstallationProgressStatus": {
      "id": "InstallationProgressStatus",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about this dedicated server installation status",
      "properties": {
        "elapsedTime": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Elapsed time in seconds since installation beggining",
          "required": true
        },
        "progress": {
          "type": "dedicated.server.InstallationProgressSteps[]",
          "fullType": "dedicated.server.InstallationProgressSteps[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Installation steps",
          "required": false
        }
      }
    },
    "dedicated.server.InstallationProgressStatusEnum": {
      "id": "InstallationProgressStatusEnum",
      "namespace": "dedicated.server",
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
      "enumType": "string"
    },
    "dedicated.server.InstallationProgressSteps": {
      "id": "InstallationProgressSteps",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about this dedicated server installation steps",
      "properties": {
        "comment": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Informations about this installation step",
          "required": true
        },
        "error": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Error details if state is error",
          "required": false
        },
        "status": {
          "type": "dedicated.server.InstallationProgressStatusEnum",
          "fullType": "dedicated.server.InstallationProgressStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Status of this installation step",
          "required": true
        }
      }
    },
    "dedicated.server.Intervention": {
      "id": "Intervention",
      "namespace": "dedicated.server",
      "description": "Intervention made on this server",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "the intervention start date",
          "required": false
        },
        "interventionId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "The intervention id",
          "required": true
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "the intervention type",
          "required": false
        }
      }
    },
    "dedicated.server.IpBlockSizeEnum": {
      "id": "IpBlockSizeEnum",
      "namespace": "dedicated.server",
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
      "enumType": "long"
    },
    "dedicated.server.IpOrderable": {
      "id": "IpOrderable",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about orderable IP address",
      "properties": {
        "ipv4": {
          "type": "dedicated.server.IpOrderableDetails[]",
          "fullType": "dedicated.server.IpOrderableDetails[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Orderable IP v4 details",
          "required": false
        },
        "ipv6": {
          "type": "dedicated.server.IpOrderableDetails[]",
          "fullType": "dedicated.server.IpOrderableDetails[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Orderable IP v6 details",
          "required": false
        }
      }
    },
    "dedicated.server.IpOrderableDetails": {
      "id": "IpOrderableDetails",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about orderable IP address",
      "properties": {
        "blockSizes": {
          "type": "dedicated.server.IpBlockSizeEnum[]",
          "fullType": "dedicated.server.IpBlockSizeEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Orderable IP blocks sizes",
          "required": true
        },
        "included": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Are those IP included with your offer",
          "required": true
        },
        "ipNumber": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Total number of IP that can be routed to this server",
          "required": false
        },
        "number": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Total number of prefixes that can be routed to this server",
          "required": true
        },
        "optionRequired": {
          "type": "dedicated.server.OptionRequiredEnum",
          "fullType": "dedicated.server.OptionRequiredEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Which option is required to order this type of IP",
          "required": false
        },
        "type": {
          "type": "dedicated.server.IpTypeOrderableEnum",
          "fullType": "dedicated.server.IpTypeOrderableEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "this IP type",
          "required": true
        }
      }
    },
    "dedicated.server.IpTypeOrderableEnum": {
      "id": "IpTypeOrderableEnum",
      "namespace": "dedicated.server",
      "description": "Orderable IP type",
      "enum": [
        "failover",
        "static",
        "unshielded"
      ],
      "enumType": "string"
    },
    "dedicated.server.MrtgPeriodEnum": {
      "id": "MrtgPeriodEnum",
      "namespace": "dedicated.server",
      "description": "distincts MRTG period",
      "enum": [
        "daily",
        "hourly",
        "monthly",
        "weekly",
        "yearly"
      ],
      "enumType": "string"
    },
    "dedicated.server.MrtgTimestampValue": {
      "id": "MrtgTimestampValue",
      "namespace": "dedicated.server",
      "description": "A timestamp associated to a value",
      "properties": {
        "timestamp": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "dedicated.server.MrtgTypeEnum": {
      "id": "MrtgTypeEnum",
      "namespace": "dedicated.server",
      "description": "distincts MRTG type",
      "enum": [
        "errors:download",
        "errors:upload",
        "packets:download",
        "packets:upload",
        "traffic:download",
        "traffic:upload"
      ],
      "enumType": "string"
    },
    "dedicated.server.Netboot": {
      "id": "Netboot",
      "namespace": "dedicated.server",
      "description": "Available boots",
      "properties": {
        "bootId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "boot id",
          "required": true
        },
        "bootType": {
          "type": "dedicated.server.BootTypeEnum",
          "fullType": "dedicated.server.BootTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "the boot system",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "the boot description",
          "required": true
        },
        "kernel": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The boot kernel",
          "required": true
        }
      }
    },
    "dedicated.server.NetworkSpecifications": {
      "id": "NetworkSpecifications",
      "namespace": "dedicated.server",
      "description": "A structure describing network informations about this dedicated server",
      "properties": {
        "bandwidth": {
          "type": "dedicated.server.BandwidthDetails",
          "fullType": "dedicated.server.BandwidthDetails",
          "canBeNull": true,
          "readOnly": false,
          "description": "Bandwidth details",
          "required": false
        },
        "connection": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "Network connection flow rate",
          "required": false
        },
        "ola": {
          "type": "dedicated.server.OlaDetails",
          "fullType": "dedicated.server.OlaDetails",
          "canBeNull": true,
          "readOnly": false,
          "description": "OLA details",
          "required": false
        },
        "routing": {
          "type": "dedicated.server.RoutingDetails",
          "fullType": "dedicated.server.RoutingDetails",
          "canBeNull": true,
          "readOnly": false,
          "description": "Routing details",
          "required": false
        },
        "switching": {
          "type": "dedicated.server.SwitchingDetails",
          "fullType": "dedicated.server.SwitchingDetails",
          "canBeNull": true,
          "readOnly": false,
          "description": "Switching details",
          "required": false
        },
        "traffic": {
          "type": "dedicated.server.TrafficDetails",
          "fullType": "dedicated.server.TrafficDetails",
          "canBeNull": true,
          "readOnly": false,
          "description": "Traffic details",
          "required": false
        },
        "vrack": {
          "type": "dedicated.server.BandwidthvRackDetails",
          "fullType": "dedicated.server.BandwidthvRackDetails",
          "canBeNull": true,
          "readOnly": false,
          "description": "vRack details",
          "required": false
        }
      }
    },
    "dedicated.server.OlaDetails": {
      "id": "OlaDetails",
      "namespace": "dedicated.server",
      "description": "A structure describing OVH Link Aggregation available modes for this dedicated server",
      "properties": {
        "available": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Is the OLA feature available",
          "required": true
        },
        "supportedModes": {
          "type": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum[]",
          "fullType": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "What modes are supported",
          "required": false
        }
      }
    },
    "dedicated.server.Option": {
      "id": "Option",
      "namespace": "dedicated.server",
      "description": "Information about the options of a dedicated server",
      "properties": {
        "option": {
          "type": "dedicated.server.OptionEnum",
          "fullType": "dedicated.server.OptionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The option name",
          "required": true
        },
        "state": {
          "type": "dedicated.server.OptionStateEnum",
          "fullType": "dedicated.server.OptionStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The state of the option",
          "required": true
        }
      }
    },
    "dedicated.server.OptionEnum": {
      "id": "OptionEnum",
      "namespace": "dedicated.server",
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
      "enumType": "string"
    },
    "dedicated.server.OptionRequiredEnum": {
      "id": "OptionRequiredEnum",
      "namespace": "dedicated.server",
      "description": "Required option",
      "enum": [
        "professionalUse"
      ],
      "enumType": "string"
    },
    "dedicated.server.OptionStateEnum": {
      "id": "OptionStateEnum",
      "namespace": "dedicated.server",
      "description": "All states a dedicated server option can be in",
      "enum": [
        "released",
        "subscribed"
      ],
      "enumType": "string"
    },
    "dedicated.server.RoutingDetails": {
      "id": "RoutingDetails",
      "namespace": "dedicated.server",
      "description": "A structure describing routing informations about this dedicated server",
      "properties": {
        "ipv4": {
          "type": "dedicated.server.RoutingDetailsIpv4",
          "fullType": "dedicated.server.RoutingDetailsIpv4",
          "canBeNull": true,
          "readOnly": false,
          "description": "Ipv4 routing details",
          "required": false
        },
        "ipv6": {
          "type": "dedicated.server.RoutingDetailsIpv6",
          "fullType": "dedicated.server.RoutingDetailsIpv6",
          "canBeNull": true,
          "readOnly": false,
          "description": "Ipv6 routing details",
          "required": false
        }
      }
    },
    "dedicated.server.RoutingDetailsIpv4": {
      "id": "RoutingDetailsIpv4",
      "namespace": "dedicated.server",
      "description": "A structure describing IPv4 routing informations about this dedicated server",
      "properties": {
        "gateway": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": true,
          "readOnly": false,
          "description": "Server gateway",
          "required": false
        },
        "ip": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": true,
          "readOnly": false,
          "description": "Server main IP",
          "required": false
        },
        "network": {
          "type": "ipv4Block",
          "fullType": "ipv4Block",
          "canBeNull": true,
          "readOnly": false,
          "description": "Server network",
          "required": false
        }
      }
    },
    "dedicated.server.RoutingDetailsIpv6": {
      "id": "RoutingDetailsIpv6",
      "namespace": "dedicated.server",
      "description": "A structure describing IPv6 routing informations about this dedicated server",
      "properties": {
        "gateway": {
          "type": "ipv6",
          "fullType": "ipv6",
          "canBeNull": true,
          "readOnly": false,
          "description": "Server gateway",
          "required": false
        },
        "ip": {
          "type": "ipv6Block",
          "fullType": "ipv6Block",
          "canBeNull": true,
          "readOnly": false,
          "description": "Server main IP",
          "required": false
        },
        "network": {
          "type": "ipv6Block",
          "fullType": "ipv6Block",
          "canBeNull": true,
          "readOnly": false,
          "description": "Server network",
          "required": false
        }
      }
    },
    "dedicated.server.Rtm": {
      "id": "Rtm",
      "namespace": "dedicated.server",
      "description": "Servers statistics sent by RTM (Real Time Monitoring)",
      "properties": {
        "currentVersion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "RTM current version",
          "required": false
        },
        "installedVersion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "RTM currently installed version",
          "required": false
        },
        "needsUpdate": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "You need to update RTM script on your server",
          "required": true
        }
      }
    },
    "dedicated.server.RtmChartPeriodEnum": {
      "id": "RtmChartPeriodEnum",
      "namespace": "dedicated.server",
      "description": "distincts RTM charts period",
      "enum": [
        "daily",
        "monthly",
        "weekly",
        "yearly"
      ],
      "enumType": "string"
    },
    "dedicated.server.RtmChartTypeEnum": {
      "id": "RtmChartTypeEnum",
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
      ],
      "enumType": "string"
    },
    "dedicated.server.RtmCommandSize": {
      "id": "RtmCommandSize",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about RTM",
      "properties": {
        "command": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Complete command line used for starting this process",
          "required": false
        },
        "memory": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "Memory used by this process",
          "required": false
        }
      }
    },
    "dedicated.server.RtmConnection": {
      "id": "RtmConnection",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about opened sockets on the server",
      "properties": {
        "cmdline": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Complete command line used for starting this process",
          "required": false
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Domain used by the process",
          "required": false
        },
        "exe": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Path to the program",
          "required": false
        },
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": false,
          "description": "The IP address connected",
          "required": false
        },
        "pid": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Process ID",
          "required": false
        },
        "port": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Port opened",
          "required": false
        },
        "procname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of the process",
          "required": false
        },
        "uid": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "System user ID",
          "required": false
        },
        "username": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Username used to start the process",
          "required": false
        }
      }
    },
    "dedicated.server.RtmCpu": {
      "id": "RtmCpu",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about server cpu",
      "properties": {
        "cache": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "CPU cache size",
          "required": false
        },
        "core": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "CPU core number",
          "required": false
        },
        "freq": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "CPU frequency",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "CPU  name",
          "required": false
        }
      }
    },
    "dedicated.server.RtmDisk": {
      "id": "RtmDisk",
      "namespace": "dedicated.server",
      "description": "Server disks informations",
      "properties": {
        "capacity": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": true,
          "description": "Disk capacity",
          "required": false
        },
        "disk": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Disk",
          "required": true
        },
        "model": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Disk model",
          "required": false
        },
        "temperature": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": true,
          "description": "Disk temperature",
          "required": false
        }
      }
    },
    "dedicated.server.RtmDiskSmart": {
      "id": "RtmDiskSmart",
      "namespace": "dedicated.server",
      "description": "A structure describing SMART health disk status",
      "properties": {
        "current_pending_sector": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Current pending sectors",
          "required": false
        },
        "multizone_error_rate": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Multizone error rate",
          "required": false
        },
        "offline_seek_performance": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Offline seek rate",
          "required": false
        },
        "offline_uncorrectable": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Offline uncorrectable",
          "required": false
        },
        "other_errors": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Other errors",
          "required": false
        },
        "realocated_event_count": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Realocated event count",
          "required": false
        },
        "temperature_celsius": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "temperature",
          "required": false
        },
        "udma_crc_error": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "UDMA crc error",
          "required": false
        },
        "uncorrected_read_errors": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Uncorrected read errors",
          "required": false
        },
        "uncorrected_write_errors": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Uncorrected write errors",
          "required": false
        }
      }
    },
    "dedicated.server.RtmLoad": {
      "id": "RtmLoad",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about server load",
      "properties": {
        "cpu": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": true,
          "readOnly": false,
          "description": "CPU usage",
          "required": false
        },
        "loadavg1": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "Load average in the last 1 minute",
          "required": false
        },
        "loadavg15": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "Load average in the last 15 minutes",
          "required": false
        },
        "loadavg5": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "Load average in the last 5 minutes",
          "required": false
        },
        "memory": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": true,
          "readOnly": false,
          "description": "Memory usage",
          "required": false
        },
        "processCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number of processes using or waiting for CPU time",
          "required": false
        },
        "processRunning": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number of process running",
          "required": false
        },
        "swap": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": true,
          "readOnly": false,
          "description": "Swap usage",
          "required": false
        },
        "uptime": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Server uptime",
          "required": false
        }
      }
    },
    "dedicated.server.RtmMemory": {
      "id": "RtmMemory",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about server memory",
      "properties": {
        "capacity": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "Memory capacity ",
          "required": false
        },
        "slot": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Memory slot",
          "required": false
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
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Motherboard manufacturer",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Motherboard name",
          "required": false
        }
      }
    },
    "dedicated.server.RtmOs": {
      "id": "RtmOs",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about Rtm os",
      "properties": {
        "kernelRelease": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "OS kernel release",
          "required": false
        },
        "kernelVersion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "OS kernel version",
          "required": false
        },
        "release": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "OS release",
          "required": false
        }
      }
    },
    "dedicated.server.RtmPartition": {
      "id": "RtmPartition",
      "namespace": "dedicated.server",
      "description": "Server partitions informations",
      "properties": {
        "inodeUsage": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": true,
          "description": "Partition inode",
          "required": false
        },
        "mountPoint": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Partition mount point",
          "required": false
        },
        "partition": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Partition",
          "required": true
        },
        "usage": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": true,
          "description": "Partition usage",
          "required": false
        }
      }
    },
    "dedicated.server.RtmPci": {
      "id": "RtmPci",
      "namespace": "dedicated.server",
      "description": "A structure describing informations about server PCI devices",
      "properties": {
        "bus": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "PCI bus device",
          "required": false
        },
        "device": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "PCI device information",
          "required": false
        }
      }
    },
    "dedicated.server.RtmRaid": {
      "id": "RtmRaid",
      "namespace": "dedicated.server",
      "description": "Server raid informations",
      "properties": {
        "unit": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Raid unit",
          "required": true
        }
      }
    },
    "dedicated.server.RtmRaidStatusEnum": {
      "id": "RtmRaidStatusEnum",
      "namespace": "dedicated.server",
      "description": " Different RAID status",
      "enum": [
        "KO",
        "OK",
        "REBUILDING",
        "UNKNOWN"
      ],
      "enumType": "string"
    },
    "dedicated.server.RtmRaidVolume": {
      "id": "RtmRaidVolume",
      "namespace": "dedicated.server",
      "description": "Server raid volume information",
      "properties": {
        "capacity": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": true,
          "readOnly": true,
          "description": "Raid volume capacity",
          "required": false
        },
        "chunks": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Raid volume chunks",
          "required": false
        },
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Raid volume label",
          "required": false
        },
        "letter": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Raid volume letter",
          "required": false
        },
        "phys": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Raid volume phys",
          "required": false
        },
        "status": {
          "type": "dedicated.server.RtmRaidStatusEnum",
          "fullType": "dedicated.server.RtmRaidStatusEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Raid volume status",
          "required": false
        },
        "stripe": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Raid volume stripe",
          "required": false
        },
        "syncprogress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Raid volume synchronization progress",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Raid volume type",
          "required": false
        },
        "volume": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Raid volume name",
          "required": false
        }
      }
    },
    "dedicated.server.RtmRaidVolumePort": {
      "id": "RtmRaidVolumePort",
      "namespace": "dedicated.server",
      "description": "Server raid volume port informations",
      "properties": {
        "capacity": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": true,
          "readOnly": true,
          "description": "Port capacity",
          "required": false
        },
        "disk": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Port disk",
          "required": false
        },
        "model": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Port model name",
          "required": false
        },
        "port": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Raid volume port",
          "required": false
        },
        "serial": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Serial of this port",
          "required": false
        },
        "status": {
          "type": "dedicated.server.RtmRaidStatusEnum",
          "fullType": "dedicated.server.RtmRaidStatusEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Status of this port",
          "required": false
        },
        "syncprogress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Raid port synchronization progress",
          "required": false
        }
      }
    },
    "dedicated.server.StateEnum": {
      "id": "StateEnum",
      "namespace": "dedicated.server",
      "description": "All states a Dedicated can in",
      "enum": [
        "error",
        "hacked",
        "hackedBlocked",
        "ok"
      ],
      "enumType": "string"
    },
    "dedicated.server.SupportLevelEnum": {
      "id": "SupportLevelEnum",
      "namespace": "dedicated.server",
      "description": "distincts support level",
      "enum": [
        "critical",
        "fastpath",
        "gs",
        "pro"
      ],
      "enumType": "string"
    },
    "dedicated.server.SupportReplaceHddInfo": {
      "id": "SupportReplaceHddInfo",
      "namespace": "dedicated.server",
      "description": "Hdd replace support request details. ",
      "properties": {
        "disk_serial": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Disk serial number",
          "required": true
        },
        "slot_id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Disk slotId (if any)",
          "required": false
        }
      }
    },
    "dedicated.server.SwitchingDetails": {
      "id": "SwitchingDetails",
      "namespace": "dedicated.server",
      "description": "A structure describing switching informations about this dedicated server",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Switch name",
          "required": false
        }
      }
    },
    "dedicated.server.Task": {
      "id": "Task",
      "namespace": "dedicated.server",
      "description": "Server tasks",
      "properties": {
        "comment": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Details of this task",
          "required": false
        },
        "doneDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Completion date",
          "required": false
        },
        "function": {
          "type": "dedicated.TaskFunctionEnum",
          "fullType": "dedicated.TaskFunctionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Function name",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "last update",
          "required": false
        },
        "startDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task Creation date",
          "required": true
        },
        "status": {
          "type": "dedicated.TaskStatusEnum",
          "fullType": "dedicated.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task status",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "the id of the task",
          "required": true
        }
      }
    },
    "dedicated.server.TemplateCaps": {
      "id": "TemplateCaps",
      "namespace": "dedicated.server",
      "description": "Miscellaneous template capabilities regarding the server.",
      "properties": {
        "hybridSupport": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "This boolean tells if the template supports hybrid install for the considered server.",
          "required": true
        }
      }
    },
    "dedicated.server.TrafficDetails": {
      "id": "TrafficDetails",
      "namespace": "dedicated.server",
      "description": "A structure describing traffic informations about this dedicated server",
      "properties": {
        "inputQuotaSize": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "Monthly input traffic quota allowed",
          "required": false
        },
        "inputQuotaUsed": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "Monthly input traffic consumed this month",
          "required": false
        },
        "isThrottled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Is bandwidth throttleted for being over quota",
          "required": false
        },
        "outputQuotaSize": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "Monthly output traffic quota allowed",
          "required": false
        },
        "outputQuotaUsed": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "Monthly output traffic consumed this month",
          "required": false
        },
        "resetQuotaDate": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Next reset quota date for traffic counter",
          "required": false
        }
      }
    },
    "dedicated.server.backup.BackupOffer": {
      "id": "BackupOffer",
      "namespace": "dedicated.server.backup",
      "description": "Backup cloud offer description for a dedicated server",
      "properties": {
        "maxArchive": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "Archive container max size.",
          "required": false
        },
        "maxBandwidthArchive": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "Archive volume r/w bandwidth limit: read/write volume offered per month on the container.",
          "required": false
        },
        "maxBandwidthStorage": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "Storage volume r/w bandwidth limit: read/write volume offered per month on the container.",
          "required": false
        },
        "maxStorage": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "Storage container max size.",
          "required": false
        }
      }
    },
    "dedicated.server.netbootOption": {
      "id": "netbootOption",
      "namespace": "dedicated.server",
      "description": "Available boot options",
      "properties": {
        "option": {
          "type": "dedicated.server.BootOptionEnum",
          "fullType": "dedicated.server.BootOptionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The option of this boot",
          "required": true
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "the value of this option",
          "required": true
        }
      }
    },
    "dedicated.virtualNetworkInterface.VirtualNetworkInterface": {
      "id": "VirtualNetworkInterface",
      "namespace": "dedicated.virtualNetworkInterface",
      "description": "Your VirtualNetworkInterface",
      "properties": {
        "enabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "VirtualNetworkInterface activation state",
          "required": true
        },
        "mode": {
          "type": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum",
          "fullType": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "VirtualNetworkInterface mode",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "User defined VirtualNetworkInterface name",
          "required": true
        },
        "networkInterfaceController": {
          "type": "macAddress[]",
          "fullType": "macAddress[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "NetworkInterfaceControllers bound to this VirtualNetworkInterface",
          "required": true
        },
        "serverName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Server bound to this VirtualNetworkInterface",
          "required": true
        },
        "uuid": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "VirtualNetworkInterface unique id",
          "required": true
        },
        "vrack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "vRack name",
          "required": false
        }
      }
    },
    "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum": {
      "id": "VirtualNetworkInterfaceModeEnum",
      "namespace": "dedicated.virtualNetworkInterface",
      "description": "Available VirtualNetworkInterface modes",
      "enum": [
        "public",
        "vrack",
        "vrack_aggregation"
      ],
      "enumType": "string"
    },
    "secondaryDns.SecondaryDNS": {
      "id": "SecondaryDNS",
      "namespace": "secondaryDns",
      "description": "Secondary dns infos",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "dns": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "secondary dns server",
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "domain on slave server",
          "required": true
        },
        "ipMaster": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": false,
          "description": "master ip",
          "required": true
        }
      }
    },
    "secondaryDns.SecondaryDNSCheckField": {
      "id": "SecondaryDNSCheckField",
      "namespace": "secondaryDns",
      "description": "A structure describing informations about secondary dns check field",
      "properties": {
        "fieldType": {
          "type": "zone.NamedResolutionFieldTypeEnum",
          "fullType": "zone.NamedResolutionFieldTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The field type to add on your DNS zone for this subDomain",
          "required": true
        },
        "fieldValue": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The field value to add on your DNS zone for this subDomain",
          "required": true
        },
        "subDomain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The subdomain to add on your DNS zone for the domain",
          "required": true
        }
      }
    },
    "secondaryDns.SecondaryDNSNameServer": {
      "id": "SecondaryDNSNameServer",
      "namespace": "secondaryDns",
      "description": "A structure describing informations about available nameserver for secondary dns ",
      "properties": {
        "hostname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "the name server",
          "required": true
        },
        "ip": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "ipv6": {
          "type": "ipv6",
          "fullType": "ipv6",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "service.RenewType": {
      "id": "RenewType",
      "namespace": "service",
      "description": "Map a possible renew for a specific service",
      "properties": {
        "automatic": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "The service is automatically renewed",
          "required": true
        },
        "deleteAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "The service will be deleted at expiration",
          "required": true
        },
        "forced": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "The service forced to be renewed",
          "required": true
        },
        "manualPayment": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "The service needs to be manually renewed and paid",
          "required": false
        },
        "period": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "period of renew in month",
          "required": false
        }
      }
    },
    "service.RenewalTypeEnum": {
      "id": "RenewalTypeEnum",
      "namespace": "service",
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
      "enumType": "string"
    },
    "service.StateEnum": {
      "id": "StateEnum",
      "namespace": "service",
      "enum": [
        "expired",
        "inCreation",
        "ok",
        "pendingDebt",
        "unPaid"
      ],
      "enumType": "string"
    },
    "service.TerminationFutureUseEnum": {
      "id": "TerminationFutureUseEnum",
      "namespace": "service",
      "description": "All future uses you can provide for a service termination",
      "enum": [
        "NOT_REPLACING_SERVICE",
        "OTHER",
        "SUBSCRIBE_AN_OTHER_SERVICE",
        "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
        "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
      ],
      "enumType": "string"
    },
    "service.TerminationReasonEnum": {
      "id": "TerminationReasonEnum",
      "namespace": "service",
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
      "enumType": "string"
    },
    "services.Service": {
      "id": "Service",
      "namespace": "services",
      "description": "Details about a Service",
      "properties": {
        "canDeleteAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates that the service can be set up to be deleted at expiration",
          "required": true
        },
        "contactAdmin": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "contactBilling": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "contactTech": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "creation": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "engagedUpTo": {
          "type": "date",
          "fullType": "date",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "expiration": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "possibleRenewPeriod": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "All the possible renew period of your service in month",
          "required": false
        },
        "renew": {
          "type": "service.RenewType",
          "fullType": "service.RenewType",
          "canBeNull": true,
          "readOnly": false,
          "description": "Way of handling the renew",
          "required": false
        },
        "renewalType": {
          "type": "service.RenewalTypeEnum",
          "fullType": "service.RenewalTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "serviceId": {
          "type": "coreTypes.ServiceId:long",
          "fullType": "coreTypes.ServiceId:long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "service.StateEnum",
          "fullType": "service.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "support.NewMessageInfo": {
      "id": "NewMessageInfo",
      "namespace": "support",
      "description": "Newly created support identifiers",
      "properties": {
        "messageId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Message identifier",
          "required": true
        },
        "ticketId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Ticket identifier",
          "required": true
        },
        "ticketNumber": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Ticket external number",
          "required": true
        }
      }
    },
    "zone.NamedResolutionFieldTypeEnum": {
      "id": "NamedResolutionFieldTypeEnum",
      "namespace": "zone",
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
      "enumType": "string"
    }
  }
}