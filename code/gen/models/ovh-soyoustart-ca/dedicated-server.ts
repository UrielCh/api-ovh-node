import {Schema} from '../../src/schema';

// imported from https://ca.api.soyoustart.com:443/1.0/dedicated/server.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "map[string][]iam.resource.TagFilter",
              "description": "Filter resources on IAM tags",
              "name": "iamTags",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/server"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.DedicatedWithIAM"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:put",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.Dedicated",
              "description": "New object properties",
              "fullType": "dedicated.server.Dedicated",
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
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:authenticationSecret/create",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.Access[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/authenticationSecret"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:backupCloudOfferDetails/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.backup.BackupOffer"
        }
      ],
      "path": "/dedicated/server/{serviceName}/backupCloudOfferDetails"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:biosSettings/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.biosSettings.BiosSettings"
        }
      ],
      "path": "/dedicated/server/{serviceName}/biosSettings"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:biosSettings/sgx/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.biosSettingsSgx.BiosSettingsSgx"
        }
      ],
      "path": "/dedicated/server/{serviceName}/biosSettings/sgx"
    },
    {
      "description": "configure operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Enable or disable SGX and configure PRMRR size",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:biosSettings/sgx/configure",
              "required": true
            }
          ],
          "longDescription": "Enable or disable SGX and configure PRMRR size. This will cause your server to reboot one or several time(s).",
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
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/biosSettings/sgx/configure"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:boot/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:boot/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.Netboot"
        }
      ],
      "path": "/dedicated/server/{serviceName}/boot/{bootId}"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:boot/option/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.BootOptionEnum[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/boot/{bootId}/option"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:boot/option/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.netbootOption"
        }
      ],
      "path": "/dedicated/server/{serviceName}/boot/{bootId}/option/{option}"
    },
    {
      "description": "Confirm service termination",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Confirm service termination",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:confirmTermination",
              "required": true
            }
          ],
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
              "description": "The termination token sent by email to the admin contact",
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
          "responseType": "string"
        }
      ],
      "path": "/dedicated/server/{serviceName}/confirmTermination"
    },
    {
      "description": "Backup Ftp assigned to this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/backupFTP/delete",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/backupFTP/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.BackupFtp"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new Backup FTP space",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/backupFTP/create",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/features/backupFTP"
    },
    {
      "description": "List the dedicated.server.BackupFtpAcl objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/backupFTP/access/get",
              "required": true
            }
          ],
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
          "responseType": "ipBlock[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new Backup FTP ACL",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/backupFTP/access/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Whether to allow the CIFS (SMB) protocol for this ACL",
              "fullType": "boolean",
              "name": "cifs",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Whether to allow the FTP protocol for this ACL",
              "fullType": "boolean",
              "name": "ftp",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "The IP Block specific to this ACL. It musts belong to your server.",
              "fullType": "ipBlock",
              "name": "ipBlock",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Whether to allow the NFS protocol for this ACL",
              "fullType": "boolean",
              "name": "nfs",
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
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/features/backupFTP/access"
    },
    {
      "description": "Backup Ftp ACL for this server and Backup Ftp",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Revoke this ACL",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/backupFTP/access/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "The IP Block specific to this ACL",
              "fullType": "ipBlock",
              "name": "ipBlock",
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
          "responseType": "dedicated.server.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/backupFTP/access/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "The IP Block specific to this ACL",
              "fullType": "ipBlock",
              "name": "ipBlock",
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
          "responseType": "dedicated.server.BackupFtpAcl"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/backupFTP/access/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.BackupFtpAcl",
              "description": "New object properties",
              "fullType": "dedicated.server.BackupFtpAcl",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "The IP Block specific to this ACL",
              "fullType": "ipBlock",
              "name": "ipBlock",
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
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}"
    },
    {
      "description": "authorizableBlocks operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all IP blocks that can be used in the ACL",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/backupFTP/authorizableBlocks/get",
              "required": true
            }
          ],
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
          "responseType": "ipBlock[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/features/backupFTP/authorizableBlocks"
    },
    {
      "description": "password operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change your Backup FTP password",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/backupFTP/password/create",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/features/backupFTP/password"
    },
    {
      "description": "Firewall attached to this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/firewall/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.Firewall"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/firewall/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.Firewall",
              "description": "New object properties",
              "fullType": "dedicated.server.Firewall",
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
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}/features/firewall"
    },
    {
      "description": "Server IPMI interface",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/ipmi/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.Ipmi"
        }
      ],
      "path": "/dedicated/server/{serviceName}/features/ipmi"
    },
    {
      "description": "access operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "IPMI access method",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/ipmi/access/get",
              "required": true
            }
          ],
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
              "dataType": "dedicated.server.IpmiAccessTypeEnum",
              "description": "IPMI console access",
              "fullType": "dedicated.server.IpmiAccessTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "dedicated.server.IpmiAccessValue"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request an acces on KVM IPMI interface",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/ipmi/access/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "IP to allow connection from for this IPMI session",
              "fullType": "ipv4",
              "name": "ipToAllow",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "text",
              "description": "Public SSH key for Serial Over Lan SSH access",
              "fullType": "text",
              "name": "sshKey",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "dedicated.server.CacheTTLEnum",
              "description": "Session access time to live in minutes",
              "fullType": "dedicated.server.CacheTTLEnum",
              "name": "ttl",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.server.IpmiAccessTypeEnum",
              "description": "IPMI console access",
              "fullType": "dedicated.server.IpmiAccessTypeEnum",
              "name": "type",
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
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/features/ipmi/access"
    },
    {
      "description": "resetInterface operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reset KVM IPMI interface",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/ipmi/resetInterface",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/features/ipmi/resetInterface"
    },
    {
      "description": "resetSessions operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reset KVM IPMI sessions",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/ipmi/resetSessions",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/features/ipmi/resetSessions"
    },
    {
      "description": "test operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Result of http, ping and identification tests on IPMI interface",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/ipmi/test/get",
              "required": true
            }
          ],
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
              "dataType": "dedicated.server.IpmiTestTypeEnum",
              "description": "Test type result on KVM IPMI interface",
              "fullType": "dedicated.server.IpmiTestTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "dedicated.server.IpmiTestResult"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Launch test on KVM IPMI interface",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/ipmi/test/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.CacheTTLEnum",
              "description": "Result time to live in minutes",
              "fullType": "dedicated.server.CacheTTLEnum",
              "name": "ttl",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.server.IpmiTestTypeEnum",
              "description": "Test to make on KVM IPMI interface",
              "fullType": "dedicated.server.IpmiTestTypeEnum",
              "name": "type",
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
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/features/ipmi/test"
    },
    {
      "description": "Physical KVM",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:features/kvm/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.kvm"
        }
      ],
      "path": "/dedicated/server/{serviceName}/features/kvm"
    },
    {
      "description": "compatible operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get name binary for asa",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:firewall/binary/compatible/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.BinaryFirewall"
        }
      ],
      "path": "/dedicated/server/{serviceName}/firewall/binary/compatible"
    },
    {
      "description": "link operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get url of binary to update firewall asa",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:firewall/binary/link/get",
              "required": true
            }
          ],
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
              "description": "Binary name",
              "fullType": "string",
              "name": "binaryName",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "dedicated.BinaryFirewallLink"
        }
      ],
      "path": "/dedicated/server/{serviceName}/firewall/binary/link"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:install/compatibleTemplatePartitionSchemes/get",
              "required": true
            }
          ],
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
              "description": "",
              "fullType": "string",
              "name": "templateName",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/install/compatibleTemplatePartitionSchemes"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:install/compatibleTemplates/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.InstallTemplate"
        }
      ],
      "path": "/dedicated/server/{serviceName}/install/compatibleTemplates"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:install/hardwareRaidProfile/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.HardwareRaidProfile"
        }
      ],
      "path": "/dedicated/server/{serviceName}/install/hardwareRaidProfile"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:install/hardwareRaidSize/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.HardwareRaidSize"
        }
      ],
      "path": "/dedicated/server/{serviceName}/install/hardwareRaidSize"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:install/start",
              "required": true
            }
          ],
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
              "dataType": "complexType.SafeKeyValue<string>[]",
              "description": "Metadata",
              "fullType": "complexType.SafeKeyValue<string>[]",
              "name": "userMetadata",
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
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/install/start"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:install/status/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.InstallationProgressStatus"
        }
      ],
      "path": "/dedicated/server/{serviceName}/install/status"
    },
    {
      "description": "templateCapabilities operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2024-07-03T08:30:00Z",
            "deprecatedDate": "2024-05-02T10:00:00Z",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Gives some capabilities regarding the template for the current dedicated server.",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:install/templateCapabilities/get",
              "required": true
            }
          ],
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
              "description": "",
              "fullType": "string",
              "name": "templateName",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "dedicated.server.TemplateCaps"
        }
      ],
      "path": "/dedicated/server/{serviceName}/install/templateCapabilities"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:intervention/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:intervention/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.Intervention"
        }
      ],
      "path": "/dedicated/server/{serviceName}/intervention/{interventionId}"
    },
    {
      "description": "ipBlockMerge operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Merge a splitted block and route it to the choosen server. You cannot undo this operation",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:ipBlockMerge",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "The splitted block you want to merge",
              "fullType": "ipBlock",
              "name": "block",
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
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/ipBlockMerge"
    },
    {
      "description": "ipCanBeMovedTo operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Check if given IP can be moved to this server",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:ipCanBeMovedTo/get",
              "required": true
            }
          ],
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
              "dataType": "ipBlock",
              "description": "The ip to move to this server",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}/ipCanBeMovedTo"
    },
    {
      "description": "ipCountryAvailable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve available country for IP order",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:ipCountryAvailable/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.IpCountryEnum[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/ipCountryAvailable"
    },
    {
      "description": "ipMove operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Move an Ip failover to this server",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:ipMove",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "The ip to move to this server",
              "fullType": "ipBlock",
              "name": "ip",
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
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/ipMove"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:ips/get",
              "required": true
            }
          ],
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
          "responseType": "ipBlock[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/ips"
    },
    {
      "description": "compliantWindows operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the windows license compliant with your server.",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:license/compliantWindows/get",
              "required": true
            }
          ],
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
          "responseType": "license.WindowsOsVersionEnum[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/license/compliantWindows"
    },
    {
      "description": "compliantWindowsSqlServer operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the windows SQL server license compliant with your server.",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:license/compliantWindowsSqlServer/get",
              "required": true
            }
          ],
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
          "responseType": "license.WindowsSqlVersionEnum[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/license/compliantWindowsSqlServer"
    },
    {
      "description": "windows operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add your existing windows license serial to this dedicated server",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:license/windows/create",
              "required": true
            }
          ],
          "longDescription": "Add your existing windows license serial to this dedicated server. Will be manageable in /license/windows.",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Your license serial number",
              "fullType": "string",
              "name": "licenseId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "license.WindowsOsVersionEnum",
              "description": "Your license version",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
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
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/license/windows"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:mrtg/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.MrtgTimestampValue[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/mrtg"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:networkInterfaceController/get",
              "required": true
            }
          ],
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
          "responseType": "macAddress[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/networkInterfaceController"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:networkInterfaceController/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:networkInterfaceController/mrtg/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.MrtgTimestampValue[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/networkInterfaceController/{mac}/mrtg"
    },
    {
      "description": "ongoing operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "What is ongoing on this server",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:ongoing/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.ExposedTask[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/ongoing"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:option/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.OptionEnum[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/option"
    },
    {
      "description": "Information about the options of a dedicated server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Release a given option",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:option/delete",
              "required": true
            }
          ],
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
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:option/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.Option"
        }
      ],
      "path": "/dedicated/server/{serviceName}/option/{option}"
    },
    {
      "description": "backupStorage operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the backup storage orderable with your server.",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:orderable/backupStorage/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.BackupStorageOrderable"
        }
      ],
      "path": "/dedicated/server/{serviceName}/orderable/backupStorage"
    },
    {
      "description": "feature operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Is this feature orderable with your server",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:orderable/feature/get",
              "required": true
            }
          ],
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
              "dataType": "dedicated.server.OrderableSysFeatureEnum",
              "description": "the feature",
              "fullType": "dedicated.server.OrderableSysFeatureEnum",
              "name": "feature",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "boolean"
        }
      ],
      "path": "/dedicated/server/{serviceName}/orderable/feature"
    },
    {
      "description": "ip operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get IP orderable with your server.",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:orderable/ip/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.IpOrderable"
        }
      ],
      "path": "/dedicated/server/{serviceName}/orderable/ip"
    },
    {
      "description": "kvmExpress operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Is a KVM express orderable with your server",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:orderable/kvmExpress/get",
              "required": true
            }
          ],
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
          "responseType": "boolean"
        }
      ],
      "path": "/dedicated/server/{serviceName}/orderable/kvmExpress"
    },
    {
      "description": "usbKey operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get USB keys orderable with your server",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:orderable/usbKey/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.UsbKeyOrderableDetails"
        }
      ],
      "path": "/dedicated/server/{serviceName}/orderable/usbKey"
    },
    {
      "description": "List the dedicated.server.PlannedIntervention objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Planned interventions for the server",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:plannedIntervention/get",
              "required": true
            }
          ],
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
          "responseType": "long[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/plannedIntervention"
    },
    {
      "description": "Planned intervention on the server",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:plannedIntervention/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "ID of the intervention",
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
          "responseType": "dedicated.server.PlannedIntervention"
        }
      ],
      "path": "/dedicated/server/{serviceName}/plannedIntervention/{interventionId}"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:reboot",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/reboot"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:secondaryDnsDomains/get",
              "required": true
            }
          ],
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "add a domain on secondary dns",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:secondaryDnsDomains/create",
              "required": true
            }
          ],
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
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}/secondaryDnsDomains"
    },
    {
      "description": "Secondary dns infos",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "remove this domain",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:secondaryDnsDomains/delete",
              "required": true
            }
          ],
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
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:secondaryDnsDomains/get",
              "required": true
            }
          ],
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
          "responseType": "secondaryDns.SecondaryDNS"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:secondaryDnsDomains/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "secondaryDns.SecondaryDNS",
              "description": "New object properties",
              "fullType": "secondaryDns.SecondaryDNS",
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:secondaryDnsDomains/dnsServer/get",
              "required": true
            }
          ],
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
          "responseType": "secondaryDns.SecondaryDNSNameServer"
        }
      ],
      "path": "/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}/dnsServer"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:secondaryDnsNameDomainToken/get",
              "required": true
            }
          ],
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
          "responseType": "secondaryDns.SecondaryDNSCheckField"
        }
      ],
      "path": "/dedicated/server/{serviceName}/secondaryDnsNameDomainToken"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:secondaryDnsNameServerAvailable/get",
              "required": true
            }
          ],
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
          "responseType": "secondaryDns.SecondaryDNSNameServer"
        }
      ],
      "path": "/dedicated/server/{serviceName}/secondaryDnsNameServerAvailable"
    },
    {
      "description": "Details about a Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get service information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:serviceInfos/get",
              "required": true
            }
          ],
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
          "responseType": "services.Service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update service information",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:serviceInfos/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "services.Service",
              "description": "New object properties",
              "fullType": "services.Service",
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
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}/serviceInfos"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:specifications/hardware/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.HardwareSpecifications"
        }
      ],
      "path": "/dedicated/server/{serviceName}/specifications/hardware"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:specifications/ip/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.IpOrderable"
        }
      ],
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
          "description": "Retrieve network informations about this dedicated server",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:specifications/network/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.NetworkSpecifications"
        }
      ],
      "path": "/dedicated/server/{serviceName}/specifications/network"
    },
    {
      "description": "List the dedicated.server.spla objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Your own SPLA licenses attached to this dedicated server",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:spla/get",
              "required": true
            }
          ],
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
              "dataType": "dedicated.server.SplaStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "dedicated.server.SplaStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicated.server.SplaTypeEnum",
              "description": "Filter the value of type property (=)",
              "fullType": "dedicated.server.SplaTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new SPLA license",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:spla/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "License serial number",
              "fullType": "string",
              "name": "serialNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.server.SplaTypeEnum",
              "description": "License type",
              "fullType": "dedicated.server.SplaTypeEnum",
              "name": "type",
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
          "responseType": "long"
        }
      ],
      "path": "/dedicated/server/{serviceName}/spla"
    },
    {
      "description": "SPLA licenses management",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:spla/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "License id",
              "fullType": "long",
              "name": "id",
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
          "responseType": "dedicated.server.spla"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:spla/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.spla",
              "description": "New object properties",
              "fullType": "dedicated.server.spla",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "License id",
              "fullType": "long",
              "name": "id",
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
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}/spla/{id}"
    },
    {
      "description": "revoke operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Revoke an SPLA license",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:spla/revoke",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "License id",
              "fullType": "long",
              "name": "id",
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
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}/spla/{id}/revoke"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:support/replace/cooling/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:support/replace/hardDiskDrive/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:support/replace/memory/create",
              "required": true
            }
          ],
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
          "responseType": "support.NewMessageInfo"
        }
      ],
      "path": "/dedicated/server/{serviceName}/support/replace/memory"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:task/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:task/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/task/{taskId}"
    },
    {
      "description": "availableTimeslots operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List available time slots for intervention",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:task/availableTimeslots/get",
              "required": true
            }
          ],
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
            },
            {
              "dataType": "date",
              "description": "End of the period to query",
              "fullType": "date",
              "name": "periodEnd",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "date",
              "description": "Begining of the period to query",
              "fullType": "date",
              "name": "periodStart",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "dedicated.PlannedInterventionTimeSlot[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/task/{taskId}/availableTimeslots"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:task/cancel",
              "required": true
            }
          ],
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
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}/task/{taskId}/cancel"
    },
    {
      "description": "schedule operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Schedule intervention",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:task/schedule",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Whether or not you have made a backup of your data",
              "fullType": "boolean",
              "name": "hasPerformedBackup",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "datetime",
              "description": "Wanted begining date for your intervention",
              "fullType": "datetime",
              "name": "wantedBeginingDate",
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
              "dataType": "long",
              "description": "the id of the task",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}/task/{taskId}/schedule"
    },
    {
      "description": "Ask for the termination of your service. Admin contact of this service will receive a termination token in order to confirm its termination with /confirmTermination endpoint.",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Ask for the termination of your service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:terminate",
              "required": true
            }
          ],
          "longDescription": "Ask for the termination of your service. Admin contact of this service will receive a termination token by email in order to confirm its termination with /confirmTermination endpoint.",
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
          "responseType": "string"
        }
      ],
      "path": "/dedicated/server/{serviceName}/terminate"
    },
    {
      "description": "List the dedicated.server.VirtualMac objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Virtual MAC addresses of the server",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:virtualMac/get",
              "required": true
            }
          ],
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a virtual mac to an IP address",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:virtualMac/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip address to link with this virtualMac",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.server.VmacTypeEnum",
              "description": "vmac address type",
              "fullType": "dedicated.server.VmacTypeEnum",
              "name": "type",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Friendly name of your Virtual Machine behind this IP/MAC",
              "fullType": "string",
              "name": "virtualMachineName",
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
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/virtualMac"
    },
    {
      "description": "A virtual MAC address associated to one or more IPs",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:virtualMac/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Virtual MAC address in 00:00:00:00:00:00 format",
              "fullType": "string",
              "name": "macAddress",
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
          "responseType": "dedicated.server.VirtualMac"
        }
      ],
      "path": "/dedicated/server/{serviceName}/virtualMac/{macAddress}"
    },
    {
      "description": "List the dedicated.server.VirtualMacManagement objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of IPs associated to this Virtual MAC",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:virtualMac/virtualAddress/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Virtual MAC address in 00:00:00:00:00:00 format",
              "fullType": "string",
              "name": "macAddress",
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
          "responseType": "ipv4[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add an IP to this Virtual MAC",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:virtualMac/virtualAddress/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "IP address to link to this virtual MAC",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Friendly name of your Virtual Machine behind this IP/MAC",
              "fullType": "string",
              "name": "virtualMachineName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Virtual MAC address in 00:00:00:00:00:00 format",
              "fullType": "string",
              "name": "macAddress",
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
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress"
    },
    {
      "description": " ip address linked with this virtual mac address",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove this ip from virtual mac , if you remove the last linked Ip, virtualmac will be deleted",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:virtualMac/virtualAddress/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "IP address",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Virtual MAC address in 00:00:00:00:00:00 format",
              "fullType": "string",
              "name": "macAddress",
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
          "responseType": "dedicated.server.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:virtualMac/virtualAddress/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "IP address",
              "fullType": "ipv4",
              "name": "ipAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Virtual MAC address in 00:00:00:00:00:00 format",
              "fullType": "string",
              "name": "macAddress",
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
          "responseType": "dedicated.server.VirtualMacManagement"
        }
      ],
      "path": "/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:virtualNetworkInterface/get",
              "required": true
            }
          ],
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
          "responseType": "uuid[]"
        }
      ],
      "path": "/dedicated/server/{serviceName}/virtualNetworkInterface"
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
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:virtualNetworkInterface/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.virtualNetworkInterface.VirtualNetworkInterface"
        },
        {
          "apiStatus": {
            "deletionDate": "2021-04-08T00:00:00+01:00",
            "deprecatedDate": "2021-01-08T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dedicated/server/{serviceName}/ola/aggregation",
            "value": "DEPRECATED"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:virtualNetworkInterface/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.virtualNetworkInterface.VirtualNetworkInterface",
              "description": "New object properties",
              "fullType": "dedicated.virtualNetworkInterface.VirtualNetworkInterface",
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
          "responseType": "void"
        }
      ],
      "path": "/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2021-04-08T00:00:00+01:00",
            "deprecatedDate": "2021-01-08T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dedicated/server/{serviceName}/ola/aggregation",
            "value": "DEPRECATED"
          },
          "description": "Disable this VirtualNetworkInterface",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:virtualNetworkInterface/disable",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2021-04-08T00:00:00+01:00",
            "deprecatedDate": "2021-01-08T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dedicated/server/{serviceName}/ola/aggregation",
            "value": "DEPRECATED"
          },
          "description": "Enable this VirtualNetworkInterface",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:virtualNetworkInterface/enable",
              "required": true
            }
          ],
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
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}/enable"
    },
    {
      "description": "Get public logs for servers",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "0001-01-01T00:00:00Z",
            "deprecatedDate": "0001-01-01T00:00:00Z",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get public logs for servers",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedServer:apiovh:log/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.DatacenterEnum",
              "description": "Restrict on the given datacenter",
              "fullType": "dedicated.DatacenterEnum",
              "name": "datacenter",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Amount of rows per page",
              "fullType": "long",
              "name": "limit",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Page to display",
              "fullType": "long",
              "name": "page",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Restrict on the given server",
              "fullType": "string",
              "name": "server",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "dedicated.PublicLog"
        }
      ],
      "path": "/dedicated/server/log"
    }
  ],
  "basePath": "https://ca.api.soyoustart.com/1.0",
  "models": {
    "complexType.SafeKeyValue<T>": {
      "description": "Key and value, with proper key strings",
      "generics": [
        "T"
      ],
      "id": "SafeKeyValue",
      "namespace": "complexType",
      "properties": {
        "key": {
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "T"
        }
      }
    },
    "complexType.SafeKeyValueCanBeNull<string>": {
      "description": "Key and value, with proper key strings",
      "generics": [
        "T"
      ],
      "id": "SafeKeyValueCanBeNull",
      "namespace": "complexType",
      "properties": {
        "key": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
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
    "complexType.UnitAndValue<double>": {
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
    "complexType.UnitAndValue<long>": {
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
    "complexType.UnitAndValue<string>": {
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
    "dedicated.BinaryFirewall": {
      "description": "Get list of compatible firewall binaries",
      "id": "BinaryFirewall",
      "namespace": "dedicated",
      "properties": {
        "asa": {
          "canBeNull": false,
          "description": "List of compatible asa binaries names",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "asdm": {
          "canBeNull": false,
          "description": "List of compatible asdm binaries names",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "type": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "dedicated.ProfileFirewallEnum"
        }
      }
    },
    "dedicated.BinaryFirewallLink": {
      "description": "Get temporary URL link to download binary",
      "id": "BinaryFirewallLink",
      "namespace": "dedicated",
      "properties": {
        "url": {
          "canBeNull": false,
          "description": "Temporary URL to download binary",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
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
        "bhs8",
        "cch01",
        "crx1",
        "crx2",
        "dc1",
        "eri1",
        "eri2",
        "gra04",
        "gra1",
        "gra2",
        "gra3",
        "gsw",
        "hil1",
        "ieb01",
        "lil1-int1",
        "lim1",
        "lim2",
        "lim3",
        "mr901",
        "p19",
        "rbx",
        "rbx-hz",
        "rbx1",
        "rbx10",
        "rbx2",
        "rbx3",
        "rbx4",
        "rbx5",
        "rbx6",
        "rbx7",
        "rbx8",
        "rbx9",
        "sbg1",
        "sbg2",
        "sbg3",
        "sbg4",
        "sbg5",
        "sgp02",
        "sgp1",
        "syd03",
        "syd1",
        "syd2",
        "vin1",
        "waw1",
        "ynm1",
        "yyz01"
      ],
      "enumType": "string",
      "id": "DatacenterEnum",
      "namespace": "dedicated"
    },
    "dedicated.ExposedTask": {
      "description": "A task for a dedicated server",
      "id": "ExposedTask",
      "namespace": "dedicated",
      "properties": {
        "datacenter": {
          "canBeNull": false,
          "description": "Location of the server",
          "readOnly": false,
          "required": false,
          "type": "dedicated.DatacenterEnum"
        },
        "description": {
          "canBeNull": false,
          "description": "Short text describing the entry",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "server": {
          "canBeNull": false,
          "description": "Name of the dedicated server",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "todoDate": {
          "canBeNull": false,
          "description": "Timestamp for processing",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "dedicated.OperationFunctionEnum": {
      "description": "List of operation type",
      "enum": [
        "bmc/javaKvm",
        "bmc/restart",
        "bmc/revokeSessions",
        "bmc/sshSol",
        "bmc/testPassword",
        "bmc/testPing",
        "bmc/testWeb",
        "bmc/webKvm",
        "bmc/webSol"
      ],
      "enumType": "string",
      "id": "OperationFunctionEnum",
      "namespace": "dedicated"
    },
    "dedicated.PlannedInterventionStatusEnum": {
      "description": "Intervention status",
      "enum": [
        "doing",
        "done",
        "todo"
      ],
      "enumType": "string",
      "id": "PlannedInterventionStatusEnum",
      "namespace": "dedicated"
    },
    "dedicated.PlannedInterventionTimeSlot": {
      "description": "A time slot for a planned intervention",
      "id": "PlannedInterventionTimeSlot",
      "namespace": "dedicated",
      "properties": {
        "endDate": {
          "canBeNull": false,
          "description": "End date for the planned intervention",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Start date for the planned intervention",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "dedicated.PlannedInterventionTypeEnum": {
      "description": "Intervention type",
      "enum": [
        "HARDWARE_UPGRADE_ON_ACTIVE_SERVER"
      ],
      "enumType": "string",
      "id": "PlannedInterventionTypeEnum",
      "namespace": "dedicated"
    },
    "dedicated.ProfileFirewallEnum": {
      "description": "profile firewall asa",
      "enum": [
        "cisco.asa5505",
        "cisco.asa5510",
        "cisco.asa5520"
      ],
      "enumType": "string",
      "id": "ProfileFirewallEnum",
      "namespace": "dedicated"
    },
    "dedicated.PublicLog": {
      "description": "List of logs",
      "id": "PublicLog",
      "namespace": "dedicated",
      "properties": {
        "cacheDate": {
          "canBeNull": true,
          "description": "Cache store timestamp",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "count": {
          "canBeNull": false,
          "description": "Total amount of lines",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "data": {
          "canBeNull": false,
          "description": "Logs",
          "readOnly": false,
          "required": false,
          "type": "dedicated.PublicLogEntry[]"
        }
      }
    },
    "dedicated.PublicLogEntry": {
      "description": "A log entry for a specific server",
      "id": "PublicLogEntry",
      "namespace": "dedicated",
      "properties": {
        "datetime": {
          "canBeNull": false,
          "description": "Timestamp logged",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "resume": {
          "canBeNull": false,
          "description": "Short text describing the entry",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "server": {
          "canBeNull": false,
          "description": "Name of the dedicated server",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.StatusEnum": {
      "description": "enable or disable",
      "enum": [
        "disable",
        "enable"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "dedicated"
    },
    "dedicated.TaskFunctionEnum": {
      "description": "different task operation",
      "enum": [
        "INFRA_002_VirtualNetworkInterface",
        "INFRA_002_VirtualNetworkInterface_group",
        "INFRA_002_VirtualNetworkInterface_ungroup",
        "INFRA_ONE_NETWORK_ONEAPI_VirtualNetworkInterface_group",
        "INFRA_ONE_NETWORK_ONEAPI_VirtualNetworkInterface_ungroup",
        "INFRA_ONE_NETWORK_VirtualNetworkInterface_group",
        "INFRA_ONE_NETWORK_VirtualNetworkInterface_ungroup",
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
        "hardware_update",
        "ipmi/configureSGX",
        "migrateBackupFTP",
        "moveFloatingIp",
        "moveVirtualMac",
        "reagregateBlock",
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
          "required": false,
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
          "required": false,
          "type": "dedicated.server.BiosSettingsSgxPrmrrEnum"
        },
        "status": {
          "canBeNull": false,
          "description": "Settings sections",
          "fullType": "dedicated.server.BiosSettingsSgxStatusEnum",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum"
        },
        "mac": {
          "canBeNull": false,
          "description": "NetworkInterfaceController mac",
          "fullType": "macAddress",
          "readOnly": true,
          "required": false,
          "type": "macAddress"
        },
        "virtualNetworkInterface": {
          "canBeNull": true,
          "description": "VirtualNetworkInterface bound to this NetworkInterfaceController",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
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
        "provisioning_lag",
        "public",
        "public_lag"
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
          "canBeNull": true,
          "description": "Password",
          "readOnly": false,
          "required": false,
          "type": "password"
        },
        "type": {
          "canBeNull": false,
          "description": "Application access type",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.AccessTypeEnum"
        },
        "url": {
          "canBeNull": true,
          "description": "Url",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "user": {
          "canBeNull": true,
          "description": "Login",
          "readOnly": false,
          "required": false,
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
    "dedicated.server.AddonFamilyEnum": {
      "description": "Addon family",
      "enum": [
        "memory",
        "storage"
      ],
      "enumType": "string",
      "id": "AddonFamilyEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.BMC": {
      "description": "Server BMC interface (formerly named IPMI)",
      "id": "BMC",
      "namespace": "dedicated.server",
      "properties": {
        "available": {
          "canBeNull": false,
          "description": "True, if a BMC is available on this server",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "supportedFeatures": {
          "canBeNull": false,
          "description": "A structure describing the BMC supported features",
          "fullType": "dedicated.server.BmcSupportedFeatures",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.BmcSupportedFeatures"
        }
      }
    },
    "dedicated.server.BackupFtp": {
      "description": "Backup Ftp assigned to this server",
      "id": "BackupFtp",
      "namespace": "dedicated.server",
      "properties": {
        "ftpBackupName": {
          "canBeNull": false,
          "description": "The backup FTP server name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quota": {
          "canBeNull": true,
          "description": "The disk space available in gigabytes",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "readOnlyDate": {
          "canBeNull": true,
          "description": "If not-null, gives the date since when your account was set in read-only mode because the quota was exceeded",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "type": {
          "canBeNull": false,
          "description": "The backup FTP type",
          "fullType": "dedicated.server.BackupStorageTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.BackupStorageTypeEnum"
        },
        "usage": {
          "canBeNull": true,
          "description": "The disk space currently used on your backup FTP in percent",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        }
      }
    },
    "dedicated.server.BackupFtpAcl": {
      "description": "Backup Ftp ACL for this server and Backup Ftp",
      "id": "BackupFtpAcl",
      "namespace": "dedicated.server",
      "properties": {
        "cifs": {
          "canBeNull": false,
          "description": "Whether to allow the CIFS (SMB) protocol for this ACL",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "ftp": {
          "canBeNull": false,
          "description": "Whether to allow the FTP protocol for this ACL",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "ipBlock": {
          "canBeNull": false,
          "description": "The IP Block specific to this ACL",
          "fullType": "ipBlock",
          "readOnly": true,
          "required": false,
          "type": "ipBlock"
        },
        "isApplied": {
          "canBeNull": false,
          "description": "Whether the rule has been applied on the Backup Ftp",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Date of the last object modification",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "nfs": {
          "canBeNull": false,
          "description": "Whether to allow the NFS protocol for this ACL",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "dedicated.server.BackupStorageCapacityEnum": {
      "description": "Different backup storage capacity in gigabytes",
      "enum": [
        "500",
        "1000",
        "5000",
        "10000"
      ],
      "enumType": "long",
      "id": "BackupStorageCapacityEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.BackupStorageOrderable": {
      "description": "A structure describing informations storage backup orderable for this dedicated server",
      "id": "BackupStorageOrderable",
      "namespace": "dedicated.server",
      "properties": {
        "capacities": {
          "canBeNull": true,
          "description": "Backup storage orderable capacities in gigabytes",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.BackupStorageCapacityEnum[]"
        },
        "orderable": {
          "canBeNull": false,
          "description": "Is a backup storage is orderable for this server",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "dedicated.server.BackupStorageTypeEnum": {
      "description": "Different backup storage type",
      "enum": [
        "included",
        "storage"
      ],
      "enumType": "string",
      "id": "BackupStorageTypeEnum",
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
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "OvhToInternet": {
          "canBeNull": true,
          "description": "bandwidth limitation OVH to Internet",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "OvhToOvh": {
          "canBeNull": true,
          "description": "bandwidth limitation OVH to OVH",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "type": {
          "canBeNull": true,
          "description": "bandwidth offer type",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.BandwidthTypeEnum"
        }
      }
    },
    "dedicated.server.BandwidthTypeEnum": {
      "description": " Different Bandwidth type",
      "enum": [
        "improved",
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
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "type": {
          "canBeNull": true,
          "description": "bandwidth offer type",
          "readOnly": false,
          "required": false,
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
    "dedicated.server.BillingAddon": {
      "description": "Dedicated server addon.",
      "id": "BillingAddon",
      "namespace": "dedicated.server",
      "properties": {
        "family": {
          "canBeNull": false,
          "description": "Addon family",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.AddonFamilyEnum"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Plan code to order",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.server.BiosSettingsSgxPrmrrEnum": {
      "description": "SGX PRMRR value enum",
      "enum": [
        "128",
        "131072",
        "16384",
        "2048",
        "256",
        "32",
        "32768",
        "4096",
        "512",
        "64",
        "65536",
        "8192"
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
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "sgxOptions": {
          "canBeNull": false,
          "description": "Supported SGX options",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.BiosSettingsSgxPrmrrEnum[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Supported SGX statuses",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.BiosSettingsSgxStatusEnum[]"
        }
      }
    },
    "dedicated.server.BmcJavaKvmValue": {
      "description": "Java KVM session information",
      "id": "BmcJavaKvmValue",
      "namespace": "dedicated.server",
      "properties": {
        "expirationDate": {
          "canBeNull": false,
          "description": "Date on which the credentials will no longer be retrievable",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "jnlp": {
          "canBeNull": false,
          "description": "value",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.server.BmcSshSolValue": {
      "description": "Ssh SOL session information",
      "id": "BmcSshSolValue",
      "namespace": "dedicated.server",
      "properties": {
        "expirationDate": {
          "canBeNull": false,
          "description": "Date on which the credentials will no longer be retrievable",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "uri": {
          "canBeNull": false,
          "description": "Ssh user and host in \"user@host\" format",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.server.BmcSupportedFeatures": {
      "description": "A structure describing the BMC supported features",
      "id": "BmcSupportedFeatures",
      "namespace": "dedicated.server",
      "properties": {
        "javaKvm": {
          "canBeNull": false,
          "description": "Access to the KVM through a Java web launch application",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "sshSol": {
          "canBeNull": false,
          "description": "Access to the virtual serial port of your server through a SSH client",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "testPassword": {
          "canBeNull": false,
          "description": "Test that the access to the BMC is operational",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "testPing": {
          "canBeNull": false,
          "description": "Test that the BMC is reachable",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "testWeb": {
          "canBeNull": false,
          "description": "Test that the Web interface of the BMC is operational",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "webKvm": {
          "canBeNull": false,
          "description": "Access to the KVM through a Web interface",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "webSol": {
          "canBeNull": false,
          "description": "Access to the virtual serial port of your server through a Web interface",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "dedicated.server.BmcTestResult": {
      "description": "A structure describing BMC test result",
      "id": "BmcTestResult",
      "namespace": "dedicated.server",
      "properties": {
        "expirationDate": {
          "canBeNull": false,
          "description": "Date of expiration of the result of this test",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "message": {
          "canBeNull": true,
          "description": "Error message, null if the test is successfully executed",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Test result, true if successful",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "dedicated.server.BmcTestTypeEnum": {
      "description": "List of tests to run on a BMC",
      "enum": [
        "password",
        "ping",
        "web"
      ],
      "enumType": "string",
      "id": "BmcTestTypeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.BmcWebKvmValue": {
      "description": "Web KVM session information",
      "id": "BmcWebKvmValue",
      "namespace": "dedicated.server",
      "properties": {
        "expirationDate": {
          "canBeNull": false,
          "description": "Date on which the credentials will no longer be retrievable",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "url": {
          "canBeNull": false,
          "description": "URL of the Web KVM session",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.server.BmcWebSolValue": {
      "description": "Web SOL session information",
      "id": "BmcWebSolValue",
      "namespace": "dedicated.server",
      "properties": {
        "expirationDate": {
          "canBeNull": false,
          "description": "Date on which the credentials will no longer be retrievable",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "url": {
          "canBeNull": false,
          "description": "URL of the Web SOL session",
          "readOnly": false,
          "required": false,
          "type": "string"
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
        "power",
        "rescue"
      ],
      "enumType": "string",
      "id": "BootTypeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.CacheTTLEnum": {
      "description": "Time to live in minutes for cache",
      "enum": [
        "1",
        "3",
        "5",
        "10",
        "15"
      ],
      "enumType": "long",
      "id": "CacheTTLEnum",
      "namespace": "dedicated.server"
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
        "availabilityZone": {
          "canBeNull": false,
          "description": "dedicated AZ localisation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "bootId": {
          "canBeNull": true,
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "bootScript": {
          "canBeNull": true,
          "description": "Ipxe script served on boot",
          "fullType": "text",
          "readOnly": false,
          "required": false,
          "type": "text"
        },
        "commercialRange": {
          "canBeNull": true,
          "description": "dedicater server commercial range",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "datacenter": {
          "canBeNull": false,
          "description": "dedicated datacenter localisation",
          "fullType": "dedicated.DatacenterEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.DatacenterEnum"
        },
        "ip": {
          "canBeNull": false,
          "description": "dedicated server ip",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "linkSpeed": {
          "canBeNull": true,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "monitoring": {
          "canBeNull": false,
          "description": "Icmp monitoring state",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "dedicated server name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "newUpgradeSystem": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "noIntervention": {
          "canBeNull": false,
          "description": "Prevent datacenter intervention",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "os": {
          "canBeNull": false,
          "description": "Operating system",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "powerState": {
          "canBeNull": false,
          "description": "Power state of the server",
          "fullType": "dedicated.server.PowerStateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.PowerStateEnum"
        },
        "professionalUse": {
          "canBeNull": false,
          "description": "Does this server have professional use option",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "rack": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "dedicated region localisation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "rescueMail": {
          "canBeNull": true,
          "description": "Custom email used to receive rescue credentials",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "rescueSshKey": {
          "canBeNull": true,
          "description": "Public SSH Key used in the rescue mode",
          "fullType": "text",
          "readOnly": false,
          "required": false,
          "type": "text"
        },
        "reverse": {
          "canBeNull": true,
          "description": "dedicated server reverse",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "rootDevice": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "serverId": {
          "canBeNull": false,
          "description": "your server id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "fullType": "dedicated.server.StateEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.StateEnum"
        },
        "supportLevel": {
          "canBeNull": false,
          "description": "Dedicated server support level",
          "fullType": "dedicated.server.SupportLevelEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.SupportLevelEnum"
        }
      }
    },
    "dedicated.server.DedicatedWithIAM": {
      "description": "Server informations",
      "id": "Dedicated",
      "namespace": "dedicated.server",
      "properties": {
        "availabilityZone": {
          "canBeNull": false,
          "description": "dedicated AZ localisation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "bootId": {
          "canBeNull": true,
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "bootScript": {
          "canBeNull": true,
          "description": "Ipxe script served on boot",
          "fullType": "text",
          "readOnly": false,
          "required": false,
          "type": "text"
        },
        "commercialRange": {
          "canBeNull": true,
          "description": "dedicater server commercial range",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "datacenter": {
          "canBeNull": false,
          "description": "dedicated datacenter localisation",
          "fullType": "dedicated.DatacenterEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.DatacenterEnum"
        },
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
        },
        "ip": {
          "canBeNull": false,
          "description": "dedicated server ip",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "linkSpeed": {
          "canBeNull": true,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "monitoring": {
          "canBeNull": false,
          "description": "Icmp monitoring state",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "dedicated server name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "newUpgradeSystem": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "noIntervention": {
          "canBeNull": false,
          "description": "Prevent datacenter intervention",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "os": {
          "canBeNull": false,
          "description": "Operating system",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "powerState": {
          "canBeNull": false,
          "description": "Power state of the server",
          "fullType": "dedicated.server.PowerStateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.PowerStateEnum"
        },
        "professionalUse": {
          "canBeNull": false,
          "description": "Does this server have professional use option",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "rack": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "dedicated region localisation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "rescueMail": {
          "canBeNull": true,
          "description": "Custom email used to receive rescue credentials",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "rescueSshKey": {
          "canBeNull": true,
          "description": "Public SSH Key used in the rescue mode",
          "fullType": "text",
          "readOnly": false,
          "required": false,
          "type": "text"
        },
        "reverse": {
          "canBeNull": true,
          "description": "dedicated server reverse",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "rootDevice": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "serverId": {
          "canBeNull": false,
          "description": "your server id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "fullType": "dedicated.server.StateEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.StateEnum"
        },
        "supportLevel": {
          "canBeNull": false,
          "description": "Dedicated server support level",
          "fullType": "dedicated.server.SupportLevelEnum",
          "readOnly": true,
          "required": false,
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
    "dedicated.server.Firewall": {
      "description": "Firewall attached to this server",
      "id": "Firewall",
      "namespace": "dedicated.server",
      "properties": {
        "enabled": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "firewall": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "description": "Firewall management IP",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "mode": {
          "canBeNull": false,
          "description": "transparent mode : device is invisible on the network; routed mode : the security appliance is considered to be a router hop in the network",
          "fullType": "dedicated.server.FirewallModeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.FirewallModeEnum"
        },
        "model": {
          "canBeNull": true,
          "description": "Firewall model",
          "fullType": "dedicated.server.FirewallModelEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.FirewallModelEnum"
        }
      }
    },
    "dedicated.server.FirewallModeEnum": {
      "description": "Dedicated server firewall mode",
      "enum": [
        "routed",
        "transparent"
      ],
      "enumType": "string",
      "id": "FirewallModeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.FirewallModelEnum": {
      "description": "Firewall model name",
      "enum": [
        "asa5505",
        "asa5510",
        "asa5520"
      ],
      "enumType": "string",
      "id": "FirewallModelEnum",
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
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "diskCount": {
          "canBeNull": false,
          "description": "Disk count",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "diskSize": {
          "canBeNull": false,
          "description": "Disk capacity",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "diskSpanSize": {
          "canBeNull": false,
          "description": "Size of disk spans on RAID",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "mode": {
          "canBeNull": false,
          "description": "RAID mode",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.HardwareSpecificationsRaidHardEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "RAID configuration name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "RAID controller type",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.HardwareRaidDiskGroup[]"
        },
        "model": {
          "canBeNull": false,
          "description": "Raid controler model",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Raid controler type",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "names": {
          "canBeNull": false,
          "description": "Disk names",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "speed": {
          "canBeNull": false,
          "description": "Disk insterface speed",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<string>"
        },
        "type": {
          "canBeNull": false,
          "description": "Disk type",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.BootModeEnum"
        },
        "coresPerProcessor": {
          "canBeNull": true,
          "description": "number of cores per processor",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "defaultHardwareRaidSize": {
          "canBeNull": true,
          "description": "Default hardware raid size for this server",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "defaultHardwareRaidType": {
          "canBeNull": true,
          "description": "Default hardware raid type configured on this server",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.HardwareSpecificationsRaidHardEnum"
        },
        "description": {
          "canBeNull": true,
          "description": "commercial name of this server",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "diskGroups": {
          "canBeNull": true,
          "description": "details about the groups of disks in the server",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.HardwareSpecificationsDisk[]"
        },
        "expansionCards": {
          "canBeNull": true,
          "description": "details about the server's expansion cards",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.HardwareSpecificationsExpansionCard[]"
        },
        "formFactor": {
          "canBeNull": true,
          "description": "Server form factor",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.FormFactorEnum"
        },
        "memorySize": {
          "canBeNull": true,
          "description": "ram capacity",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "motherboard": {
          "canBeNull": true,
          "description": "server motherboard",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "numberOfProcessors": {
          "canBeNull": true,
          "description": "number of processors in this dedicated server",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "processorArchitecture": {
          "canBeNull": true,
          "description": "processor architecture bit",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.CpuFamilyEnum"
        },
        "processorName": {
          "canBeNull": true,
          "description": "processor name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "threadsPerProcessor": {
          "canBeNull": true,
          "description": "number of threads per processor",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "usbKeys": {
          "canBeNull": true,
          "description": "Capacity of the USB keys installed on your server, if any",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "defaultHardwareRaidType": {
          "canBeNull": true,
          "description": "default hardware raid type for this disk group",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.HardwareSpecificationsRaidHardEnum"
        },
        "description": {
          "canBeNull": true,
          "description": "human readable description of this disk group",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "diskGroupId": {
          "canBeNull": true,
          "description": "identifier of this disk group",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "diskSize": {
          "canBeNull": true,
          "description": "disk capacity",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "diskType": {
          "canBeNull": true,
          "description": "type of the disk (SSD, SATA, SAS, ...)",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "numberOfDisks": {
          "canBeNull": true,
          "description": "number of disks in this group",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "raidController": {
          "canBeNull": true,
          "description": "raid controller, if any, managing this group of disks",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "expansion card type",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "diskGroupId": {
          "canBeNull": true,
          "description": "Disk group id to process install on (only available for some templates)",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "noRaid": {
          "canBeNull": true,
          "description": "true if you want to install only on the first disk",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "postInstallationScriptLink": {
          "canBeNull": true,
          "description": "the url to your custom install script",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "postInstallationScriptReturn": {
          "canBeNull": true,
          "description": " the return of your script if everythings ok. Advice: your script should return a unique validation string in case of succes. A good example is \"loh1Xee7eo OK OK OK UGh8Ang1Gu",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "softRaidDevices": {
          "canBeNull": true,
          "description": "Number of devices to use for system's software RAID",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "sshKeyName": {
          "canBeNull": true,
          "description": "The name of ssh key to install",
          "readOnly": false,
          "required": false,
          "type": "string"
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
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "personal": {
          "canBeNull": true,
          "description": "Names list of yours installation templates compatibles with this server",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "progress": {
          "canBeNull": true,
          "description": "Installation steps",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "error": {
          "canBeNull": true,
          "description": "Error details if state is error",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of this installation step",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.InstallationProgressStatusEnum"
        }
      }
    },
    "dedicated.server.Interfaces": {
      "description": "Interface or interfaces aggregation",
      "id": "Interfaces",
      "namespace": "dedicated.server",
      "properties": {
        "macs": {
          "canBeNull": false,
          "description": "Mac address or list of mac addresses",
          "readOnly": false,
          "required": false,
          "type": "macAddress[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Network type",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.NetworkingTypeEnum"
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
          "required": false,
          "type": "datetime"
        },
        "interventionId": {
          "canBeNull": false,
          "description": "The intervention id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": true,
          "description": "the intervention type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.server.IpBlockSizeEnum": {
      "description": "IP block size",
      "enum": [
        "1",
        "4",
        "8",
        "16",
        "32",
        "64",
        "128",
        "256"
      ],
      "enumType": "long",
      "id": "IpBlockSizeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.IpCountryEnum": {
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
        "in",
        "it",
        "lt",
        "nl",
        "pl",
        "pt",
        "sg",
        "uk",
        "us"
      ],
      "enumType": "string",
      "id": "IpCountryEnum",
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
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.IpOrderableDetails[]"
        },
        "ipv6": {
          "canBeNull": true,
          "description": "Orderable IP v6 details",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.IpBlockSizeEnum[]"
        },
        "included": {
          "canBeNull": false,
          "description": "Are those IP included with your offer",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "ipNumber": {
          "canBeNull": true,
          "description": "Total number of IP that can be routed to this server",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "number": {
          "canBeNull": false,
          "description": "Total number of prefixes that can be routed to this server",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "optionRequired": {
          "canBeNull": true,
          "description": "Which option is required to order this type of IP",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.OptionRequiredEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "this IP type",
          "readOnly": false,
          "required": false,
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
    "dedicated.server.Ipmi": {
      "description": "Server IPMI interface",
      "id": "Ipmi",
      "namespace": "dedicated.server",
      "properties": {
        "activated": {
          "canBeNull": false,
          "description": "true, if IPMI is available on this server",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "supportedFeatures": {
          "canBeNull": false,
          "description": "A structure describing the IPMI supported features",
          "fullType": "dedicated.server.IpmiSupportedFeatures",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.IpmiSupportedFeatures"
        }
      }
    },
    "dedicated.server.IpmiAccessTypeEnum": {
      "description": "Distinct way to acces a KVM IPMI session",
      "enum": [
        "kvmipHtml5URL",
        "kvmipJnlp",
        "serialOverLanSshKey",
        "serialOverLanURL"
      ],
      "enumType": "string",
      "id": "IpmiAccessTypeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.IpmiAccessValue": {
      "description": "A structure describing ipmi access value",
      "id": "IpmiAccessValue",
      "namespace": "dedicated.server",
      "properties": {
        "expiration": {
          "canBeNull": true,
          "description": "Session expiration date",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "value": {
          "canBeNull": true,
          "description": "value",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.server.IpmiSupportedFeatures": {
      "description": "A structure describing the IPMI supported features",
      "id": "IpmiSupportedFeatures",
      "namespace": "dedicated.server",
      "properties": {
        "kvmipHtml5URL": {
          "canBeNull": false,
          "description": "Access to the KVM through an HTML web interface",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "kvmipJnlp": {
          "canBeNull": false,
          "description": "Access to the KVM through a Java web launch application",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "serialOverLanSshKey": {
          "canBeNull": false,
          "description": "Access to the virtual serial port of your server through an SSH client",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "serialOverLanURL": {
          "canBeNull": false,
          "description": "Access to the virtual serial port of your server through an HTML command line interface",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "dedicated.server.IpmiTestResult": {
      "description": "A structure describing IPMI test result",
      "id": "IpmiTestResult",
      "namespace": "dedicated.server",
      "properties": {
        "date": {
          "canBeNull": true,
          "description": "Test running date",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": true,
          "description": "Test result",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.server.IpmiTestTypeEnum": {
      "description": "Different test can be made on IPMI interface",
      "enum": [
        "http",
        "password",
        "ping"
      ],
      "enumType": "string",
      "id": "IpmiTestTypeEnum",
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
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "value": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
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
          "required": false,
          "type": "long"
        },
        "bootType": {
          "canBeNull": false,
          "description": "the boot system",
          "fullType": "dedicated.server.BootTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.BootTypeEnum"
        },
        "description": {
          "canBeNull": false,
          "description": "the boot description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "kernel": {
          "canBeNull": false,
          "description": "The boot kernel",
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.BandwidthDetails"
        },
        "connection": {
          "canBeNull": true,
          "description": "Network connection flow rate",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "ola": {
          "canBeNull": true,
          "description": "OLA details",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.OlaDetails"
        },
        "routing": {
          "canBeNull": true,
          "description": "Routing details",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.RoutingDetails"
        },
        "switching": {
          "canBeNull": true,
          "description": "Switching details",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.SwitchingDetails"
        },
        "traffic": {
          "canBeNull": true,
          "description": "Traffic details",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.TrafficDetails"
        },
        "vmac": {
          "canBeNull": false,
          "description": "A structure describing VMAC Infos for this dedicated server",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.VmacDetails"
        },
        "vrack": {
          "canBeNull": true,
          "description": "vRack details",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.BandwidthvRackDetails"
        }
      }
    },
    "dedicated.server.Networking": {
      "description": "Network configuration",
      "id": "Networking",
      "namespace": "dedicated.server",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Operation description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "interfaces": {
          "canBeNull": false,
          "description": "Interface or interfaces aggregation",
          "fullType": "dedicated.server.Interfaces[]",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.Interfaces[]"
        },
        "status": {
          "canBeNull": true,
          "description": "Operation status",
          "fullType": "dedicated.server.NetworkingOperationEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.NetworkingOperationEnum"
        }
      }
    },
    "dedicated.server.NetworkingOperationEnum": {
      "description": "Network operation states",
      "enum": [
        "active",
        "deploying"
      ],
      "enumType": "string",
      "id": "NetworkingOperationEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.NetworkingTypeEnum": {
      "description": "Network type",
      "enum": [
        "public",
        "vrack"
      ],
      "enumType": "string",
      "id": "NetworkingTypeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.OlaAvailableModes": {
      "description": "A structure describing OVH Link Aggregation available modes",
      "id": "OlaAvailableModes",
      "namespace": "dedicated.server",
      "properties": {
        "default": {
          "canBeNull": false,
          "description": "Is it the default configuration of the server",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "interfaces": {
          "canBeNull": false,
          "description": "Interface layout",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.OlaInterface[]"
        },
        "name": {
          "canBeNull": false,
          "description": "Mode name",
          "readOnly": false,
          "required": false,
          "type": "string"
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
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "availableModes": {
          "canBeNull": false,
          "description": "What modes are supported",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.OlaAvailableModes[]"
        },
        "supportedModes": {
          "canBeNull": true,
          "description": "(DEPRECATED) What modes are supported",
          "readOnly": false,
          "required": false,
          "type": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum[]"
        }
      }
    },
    "dedicated.server.OlaInterface": {
      "description": "A structure describing OVH Link Aggregation interface configuration",
      "id": "OlaInterface",
      "namespace": "dedicated.server",
      "properties": {
        "aggregation": {
          "canBeNull": false,
          "description": "Interface aggregation status",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "count": {
          "canBeNull": false,
          "description": "Interface count",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "Interface mode",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.OlaInterfaceModeEnum"
        }
      }
    },
    "dedicated.server.OlaInterfaceModeEnum": {
      "description": "An enum describing OVH Link Aggregation interface types",
      "enum": [
        "public",
        "vrack"
      ],
      "enumType": "string",
      "id": "OlaInterfaceModeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.Operation": {
      "description": "Server operations",
      "id": "Operation",
      "namespace": "dedicated.server",
      "properties": {
        "comment": {
          "canBeNull": true,
          "description": "Details of this task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "doneDate": {
          "canBeNull": true,
          "description": "Completion date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Function name",
          "fullType": "dedicated.OperationFunctionEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.OperationFunctionEnum"
        },
        "lastUpdate": {
          "canBeNull": true,
          "description": "Last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "operationId": {
          "canBeNull": false,
          "description": "The unique identifier of the operation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Task Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "dedicated.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TaskStatusEnum"
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
          "required": false,
          "type": "dedicated.server.OptionEnum"
        },
        "state": {
          "canBeNull": false,
          "description": "The state of the option",
          "fullType": "dedicated.server.OptionStateEnum",
          "readOnly": true,
          "required": false,
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
    "dedicated.server.OrderableSysFeatureEnum": {
      "description": "Dedicated server orderable features",
      "enum": [
        "backupProtocol",
        "monitoring"
      ],
      "enumType": "string",
      "id": "OrderableSysFeatureEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.PlannedIntervention": {
      "description": "Planned intervention on the server",
      "id": "PlannedIntervention",
      "namespace": "dedicated.server",
      "properties": {
        "expectedEndDate": {
          "canBeNull": false,
          "description": "Expected end date for this intervention",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "ID of the intervention",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the intervention",
          "fullType": "dedicated.PlannedInterventionStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.PlannedInterventionStatusEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "Operation purpose",
          "fullType": "dedicated.PlannedInterventionTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.PlannedInterventionTypeEnum"
        },
        "wantedStartDate": {
          "canBeNull": false,
          "description": "Wanted start date for this intervention",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "dedicated.server.PowerStateEnum": {
      "description": "Power states of a Dedicated",
      "enum": [
        "poweroff",
        "poweron"
      ],
      "enumType": "string",
      "id": "PowerStateEnum",
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
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.RoutingDetailsIpv4"
        },
        "ipv6": {
          "canBeNull": true,
          "description": "Ipv6 routing details",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "ipv4"
        },
        "ip": {
          "canBeNull": true,
          "description": "Server main IP",
          "readOnly": false,
          "required": false,
          "type": "ipv4"
        },
        "network": {
          "canBeNull": true,
          "description": "Server network",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "ipv6"
        },
        "ip": {
          "canBeNull": true,
          "description": "Server main IP",
          "readOnly": false,
          "required": false,
          "type": "ipv6Block"
        },
        "network": {
          "canBeNull": true,
          "description": "Server network",
          "readOnly": false,
          "required": false,
          "type": "ipv6Block"
        }
      }
    },
    "dedicated.server.SplaStatusEnum": {
      "description": "SPLA license status",
      "enum": [
        "terminated",
        "used",
        "waitingToCheck"
      ],
      "enumType": "string",
      "id": "SplaStatusEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.SplaTypeEnum": {
      "description": "SPLA license type",
      "enum": [
        "os",
        "sqlstd",
        "sqlweb"
      ],
      "enumType": "string",
      "id": "SplaTypeEnum",
      "namespace": "dedicated.server"
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
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.SupportLevelOrderableEnum[]"
        },
        "orderable": {
          "canBeNull": false,
          "description": "Is a support level is orderable for this server",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "slot_id": {
          "canBeNull": true,
          "description": "Disk slotId (if any)",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
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
          "required": false,
          "type": "string"
        },
        "doneDate": {
          "canBeNull": true,
          "description": "Completion date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Function name",
          "fullType": "dedicated.TaskFunctionEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TaskFunctionEnum"
        },
        "lastUpdate": {
          "canBeNull": true,
          "description": "last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "needSchedule": {
          "canBeNull": false,
          "description": "Whether this task need to be scheduled or not",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "note": {
          "canBeNull": true,
          "description": "Extra information about this task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "plannedInterventionId": {
          "canBeNull": true,
          "description": "ID of the planned intervention for this task",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Task Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "dedicated.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TaskStatusEnum"
        },
        "tags": {
          "canBeNull": true,
          "description": "Task result tags output",
          "fullType": "complexType.SafeKeyValueCanBeNull<string>[]",
          "readOnly": true,
          "required": false,
          "type": "complexType.SafeKeyValueCanBeNull<string>[]"
        },
        "taskId": {
          "canBeNull": false,
          "description": "the id of the task",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ticketReference": {
          "canBeNull": true,
          "description": "Reference of the thread on the support tool",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "inputQuotaUsed": {
          "canBeNull": true,
          "description": "Monthly input traffic consumed this month",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "isThrottled": {
          "canBeNull": true,
          "description": "Is bandwidth throttleted for being over quota",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "outputQuotaSize": {
          "canBeNull": true,
          "description": "Monthly output traffic quota allowed",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "outputQuotaUsed": {
          "canBeNull": true,
          "description": "Monthly output traffic consumed this month",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "resetQuotaDate": {
          "canBeNull": true,
          "description": "Next reset quota date for traffic counter",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.server.UsbKeyCapacityEnum": {
      "description": " Different USB key capacity in gigabytes",
      "enum": [
        "16",
        "32",
        "64",
        "128",
        "256"
      ],
      "enumType": "long",
      "id": "UsbKeyCapacityEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.UsbKeyOrderableDetails": {
      "description": "A structure describing informations about orderable USB keys",
      "id": "UsbKeyOrderableDetails",
      "namespace": "dedicated.server",
      "properties": {
        "capacity": {
          "canBeNull": false,
          "description": "Orderable USB keys capacity in gigabytes",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.UsbKeyCapacityEnum[]"
        },
        "number": {
          "canBeNull": false,
          "description": "Number of USB keys that can be ordered for this server",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "optionRequired": {
          "canBeNull": true,
          "description": "Which option is required to order an USB key",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.OptionRequiredEnum"
        },
        "orderable": {
          "canBeNull": false,
          "description": "Is USB keys orderable for this server",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "dedicated.server.VirtualMac": {
      "description": "A virtual MAC address associated to one or more IPs",
      "id": "VirtualMac",
      "namespace": "dedicated.server",
      "properties": {
        "macAddress": {
          "canBeNull": false,
          "description": "Virtual MAC address in 00:00:00:00:00:00 format",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Virtual MAC address type",
          "fullType": "dedicated.server.VmacTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.VmacTypeEnum"
        }
      }
    },
    "dedicated.server.VirtualMacManagement": {
      "description": " ip address linked with this virtual mac address",
      "id": "VirtualMacManagement",
      "namespace": "dedicated.server",
      "properties": {
        "ipAddress": {
          "canBeNull": false,
          "description": "IP address",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "virtualMachineName": {
          "canBeNull": false,
          "description": "Friendly name of your Virtual Machine behind this IP/MAC",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.server.VmacDetails": {
      "description": "A structure describing VMAC Infos for this dedicated server",
      "id": "VmacDetails",
      "namespace": "dedicated.server",
      "properties": {
        "supported": {
          "canBeNull": false,
          "description": "Server is compatible vmac or not",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "dedicated.server.VmacTypeEnum": {
      "description": "Distinct type of virtual mac",
      "enum": [
        "ovh",
        "vmware"
      ],
      "enumType": "string",
      "id": "VmacTypeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.backup.BackupOffer": {
      "description": "Backup cloud offer description for a dedicated server",
      "id": "BackupOffer",
      "namespace": "dedicated.server.backup",
      "properties": {
        "maxArchive": {
          "canBeNull": true,
          "description": "Archive container max size.",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "maxBandwidthArchive": {
          "canBeNull": true,
          "description": "Archive volume r/w bandwidth limit: read/write volume offered per month on the container.",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "maxBandwidthStorage": {
          "canBeNull": true,
          "description": "Storage volume r/w bandwidth limit: read/write volume offered per month on the container.",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "maxStorage": {
          "canBeNull": true,
          "description": "Storage container max size.",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        }
      }
    },
    "dedicated.server.kvm": {
      "description": "Physical KVM",
      "id": "kvm",
      "namespace": "dedicated.server",
      "properties": {
        "expiration": {
          "canBeNull": false,
          "description": "KVM expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "ip": {
          "canBeNull": true,
          "description": "KVM access ip",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "name": {
          "canBeNull": false,
          "description": "KVM hostname",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
          "required": false,
          "type": "dedicated.server.BootOptionEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "the value of this option",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.server.spla": {
      "description": "SPLA licenses management",
      "id": "spla",
      "namespace": "dedicated.server",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "License id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update timestamp",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "serialNumber": {
          "canBeNull": false,
          "description": "License serial number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of license",
          "fullType": "dedicated.server.SplaStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.SplaStatusEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "License type",
          "fullType": "dedicated.server.SplaTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.SplaTypeEnum"
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
          "required": false,
          "type": "boolean"
        },
        "mode": {
          "canBeNull": false,
          "description": "VirtualNetworkInterface mode",
          "fullType": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "User defined VirtualNetworkInterface name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "networkInterfaceController": {
          "canBeNull": false,
          "description": "NetworkInterfaceControllers bound to this VirtualNetworkInterface",
          "fullType": "macAddress[]",
          "readOnly": true,
          "required": false,
          "type": "macAddress[]"
        },
        "serverName": {
          "canBeNull": false,
          "description": "Server bound to this VirtualNetworkInterface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "uuid": {
          "canBeNull": false,
          "description": "VirtualNetworkInterface unique id",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "vrack": {
          "canBeNull": true,
          "description": "vRack name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum": {
      "description": "Available VirtualNetworkInterface modes",
      "enum": [
        "public",
        "public_aggregation",
        "vrack",
        "vrack_aggregation"
      ],
      "enumType": "string",
      "id": "VirtualNetworkInterfaceModeEnum",
      "namespace": "dedicated.virtualNetworkInterface"
    },
    "iam.ResourceMetadata": {
      "description": "IAM resource metadata embedded in services models",
      "id": "ResourceMetadata",
      "namespace": "iam",
      "properties": {
        "displayName": {
          "canBeNull": true,
          "description": "Resource display name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Unique identifier of the resource",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "tags": {
          "canBeNull": true,
          "description": "Resource tags. Tags that were internally computed are prefixed with ovh:",
          "fullType": "map[string]string",
          "readOnly": true,
          "required": false,
          "type": "map[string]string"
        },
        "urn": {
          "canBeNull": false,
          "description": "Unique resource name used in policies",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "iam.resource.TagFilter": {
      "description": "Resource tag filter",
      "id": "TagFilter",
      "namespace": "iam.resource",
      "properties": {
        "operator": {
          "canBeNull": true,
          "description": "Operator to use in order to filter on the value (defaults to 'EQ')",
          "fullType": "iam.resource.TagFilter.OperatorEnum",
          "readOnly": true,
          "required": false,
          "type": "iam.resource.TagFilter.OperatorEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "Value to use in order to filter tags",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "iam.resource.TagFilter.OperatorEnum": {
      "description": "Operator that can be used in order to filter resources tags",
      "enum": [
        "EQ"
      ],
      "enumType": "string",
      "id": "OperatorEnum",
      "namespace": "iam.resource.TagFilter"
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
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_128_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_256_CORES",
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
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_512_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_96_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_128_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_256_CORES",
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
        "WINDOWS_SERVER_2019_STANDARD_EDITION_512_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_96_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_10_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_128_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_12_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_14_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_16_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_18_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_20_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_22_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_24_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_256_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_26_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_28_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_30_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_32_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_34_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_36_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_38_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_40_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_42_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_44_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_46_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_48_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_50_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_512_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_52_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_54_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_56_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_58_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_60_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_62_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_64_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_8_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_96_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_10_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_128_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_12_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_14_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_16_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_18_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_20_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_22_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_24_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_256_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_26_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_28_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_30_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_32_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_34_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_36_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_38_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_40_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_42_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_44_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_46_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_48_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_50_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_512_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_52_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_54_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_56_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_58_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_60_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_62_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_64_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_8_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_96_CORES",
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
        "windows-server-2019-license-datacenter-edition-128-cores",
        "windows-server-2019-license-datacenter-edition-14-cores",
        "windows-server-2019-license-datacenter-edition-16-cores",
        "windows-server-2019-license-datacenter-edition-18-cores",
        "windows-server-2019-license-datacenter-edition-20-cores",
        "windows-server-2019-license-datacenter-edition-22-cores",
        "windows-server-2019-license-datacenter-edition-24-cores",
        "windows-server-2019-license-datacenter-edition-256-cores",
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
        "windows-server-2019-license-datacenter-edition-512-cores",
        "windows-server-2019-license-datacenter-edition-52-cores",
        "windows-server-2019-license-datacenter-edition-54-cores",
        "windows-server-2019-license-datacenter-edition-56-cores",
        "windows-server-2019-license-datacenter-edition-58-cores",
        "windows-server-2019-license-datacenter-edition-60-cores",
        "windows-server-2019-license-datacenter-edition-62-cores",
        "windows-server-2019-license-datacenter-edition-64-cores",
        "windows-server-2019-license-datacenter-edition-8-cores",
        "windows-server-2019-license-datacenter-edition-96-cores",
        "windows-server-2019-license-standard-edition-10-cores",
        "windows-server-2019-license-standard-edition-12-cores",
        "windows-server-2019-license-standard-edition-128-cores",
        "windows-server-2019-license-standard-edition-14-cores",
        "windows-server-2019-license-standard-edition-16-cores",
        "windows-server-2019-license-standard-edition-18-cores",
        "windows-server-2019-license-standard-edition-20-cores",
        "windows-server-2019-license-standard-edition-22-cores",
        "windows-server-2019-license-standard-edition-24-cores",
        "windows-server-2019-license-standard-edition-256-cores",
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
        "windows-server-2019-license-standard-edition-512-cores",
        "windows-server-2019-license-standard-edition-52-cores",
        "windows-server-2019-license-standard-edition-54-cores",
        "windows-server-2019-license-standard-edition-56-cores",
        "windows-server-2019-license-standard-edition-58-cores",
        "windows-server-2019-license-standard-edition-60-cores",
        "windows-server-2019-license-standard-edition-62-cores",
        "windows-server-2019-license-standard-edition-64-cores",
        "windows-server-2019-license-standard-edition-8-cores",
        "windows-server-2019-license-standard-edition-96-cores",
        "windows-server-2022-license-datacenter-edition-10-cores",
        "windows-server-2022-license-datacenter-edition-12-cores",
        "windows-server-2022-license-datacenter-edition-128-cores",
        "windows-server-2022-license-datacenter-edition-14-cores",
        "windows-server-2022-license-datacenter-edition-16-cores",
        "windows-server-2022-license-datacenter-edition-18-cores",
        "windows-server-2022-license-datacenter-edition-20-cores",
        "windows-server-2022-license-datacenter-edition-22-cores",
        "windows-server-2022-license-datacenter-edition-24-cores",
        "windows-server-2022-license-datacenter-edition-256-cores",
        "windows-server-2022-license-datacenter-edition-26-cores",
        "windows-server-2022-license-datacenter-edition-28-cores",
        "windows-server-2022-license-datacenter-edition-30-cores",
        "windows-server-2022-license-datacenter-edition-32-cores",
        "windows-server-2022-license-datacenter-edition-34-cores",
        "windows-server-2022-license-datacenter-edition-36-cores",
        "windows-server-2022-license-datacenter-edition-38-cores",
        "windows-server-2022-license-datacenter-edition-40-cores",
        "windows-server-2022-license-datacenter-edition-42-cores",
        "windows-server-2022-license-datacenter-edition-44-cores",
        "windows-server-2022-license-datacenter-edition-46-cores",
        "windows-server-2022-license-datacenter-edition-48-cores",
        "windows-server-2022-license-datacenter-edition-50-cores",
        "windows-server-2022-license-datacenter-edition-512-cores",
        "windows-server-2022-license-datacenter-edition-52-cores",
        "windows-server-2022-license-datacenter-edition-54-cores",
        "windows-server-2022-license-datacenter-edition-56-cores",
        "windows-server-2022-license-datacenter-edition-58-cores",
        "windows-server-2022-license-datacenter-edition-60-cores",
        "windows-server-2022-license-datacenter-edition-62-cores",
        "windows-server-2022-license-datacenter-edition-64-cores",
        "windows-server-2022-license-datacenter-edition-8-cores",
        "windows-server-2022-license-datacenter-edition-96-cores",
        "windows-server-2022-license-standard-edition-10-cores",
        "windows-server-2022-license-standard-edition-12-cores",
        "windows-server-2022-license-standard-edition-128-cores",
        "windows-server-2022-license-standard-edition-14-cores",
        "windows-server-2022-license-standard-edition-16-cores",
        "windows-server-2022-license-standard-edition-18-cores",
        "windows-server-2022-license-standard-edition-20-cores",
        "windows-server-2022-license-standard-edition-22-cores",
        "windows-server-2022-license-standard-edition-24-cores",
        "windows-server-2022-license-standard-edition-256-cores",
        "windows-server-2022-license-standard-edition-26-cores",
        "windows-server-2022-license-standard-edition-28-cores",
        "windows-server-2022-license-standard-edition-30-cores",
        "windows-server-2022-license-standard-edition-32-cores",
        "windows-server-2022-license-standard-edition-34-cores",
        "windows-server-2022-license-standard-edition-36-cores",
        "windows-server-2022-license-standard-edition-38-cores",
        "windows-server-2022-license-standard-edition-40-cores",
        "windows-server-2022-license-standard-edition-42-cores",
        "windows-server-2022-license-standard-edition-44-cores",
        "windows-server-2022-license-standard-edition-46-cores",
        "windows-server-2022-license-standard-edition-48-cores",
        "windows-server-2022-license-standard-edition-50-cores",
        "windows-server-2022-license-standard-edition-512-cores",
        "windows-server-2022-license-standard-edition-52-cores",
        "windows-server-2022-license-standard-edition-54-cores",
        "windows-server-2022-license-standard-edition-56-cores",
        "windows-server-2022-license-standard-edition-58-cores",
        "windows-server-2022-license-standard-edition-60-cores",
        "windows-server-2022-license-standard-edition-62-cores",
        "windows-server-2022-license-standard-edition-64-cores",
        "windows-server-2022-license-standard-edition-8-cores",
        "windows-server-2022-license-standard-edition-96-cores"
      ],
      "enumType": "string",
      "id": "WindowsOsVersionEnum",
      "namespace": "license"
    },
    "license.WindowsSqlVersionEnum": {
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
      ],
      "enumType": "string",
      "id": "WindowsSqlVersionEnum",
      "namespace": "license"
    },
    "secondaryDns.SecondaryDNS": {
      "description": "Secondary dns infos",
      "id": "SecondaryDNS",
      "namespace": "secondaryDns",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "dns": {
          "canBeNull": false,
          "description": "secondary dns server",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "description": "domain on slave server",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ipMaster": {
          "canBeNull": false,
          "description": "master ip",
          "fullType": "ipv4",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "zone.NamedResolutionFieldTypeEnum"
        },
        "fieldValue": {
          "canBeNull": false,
          "description": "The field value to add on your DNS zone for this subDomain",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "subDomain": {
          "canBeNull": false,
          "description": "The subdomain to add on your DNS zone for the domain",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "ipv4"
        },
        "ipv6": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "The service will be deleted at expiration",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "forced": {
          "canBeNull": false,
          "description": "The service forced to be renewed",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "manualPayment": {
          "canBeNull": true,
          "description": "The service needs to be manually renewed and paid",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "period": {
          "canBeNull": true,
          "description": "period of renew in month",
          "readOnly": false,
          "required": false,
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
          "required": false,
          "type": "boolean"
        },
        "contactAdmin": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "contactBilling": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "contactTech": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "creation": {
          "canBeNull": false,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "engagedUpTo": {
          "canBeNull": true,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "expiration": {
          "canBeNull": false,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "possibleRenewPeriod": {
          "canBeNull": true,
          "description": "All the possible renew period of your service in month",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        },
        "renew": {
          "canBeNull": true,
          "description": "Way of handling the renew",
          "fullType": "service.RenewType",
          "readOnly": false,
          "required": false,
          "type": "service.RenewType"
        },
        "renewalType": {
          "canBeNull": false,
          "fullType": "service.RenewalTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "service.RenewalTypeEnum"
        },
        "serviceId": {
          "canBeNull": false,
          "fullType": "coreTypes.ServiceId:long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "fullType": "service.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "service.StateEnum"
        }
      }
    },
    "support.NewMessageInfo": {
      "description": "Newly created support identifiers",
      "id": "NewMessageInfo",
      "namespace": "support",
      "properties": {
        "additionalNotice": {
          "canBeNull": true,
          "description": "Notice or warning",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "messageId": {
          "canBeNull": false,
          "description": "Message identifier",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "ticketId": {
          "canBeNull": false,
          "description": "Ticket identifier",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "ticketNumber": {
          "canBeNull": false,
          "description": "Ticket external number",
          "readOnly": false,
          "required": false,
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
        "DNAME",
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