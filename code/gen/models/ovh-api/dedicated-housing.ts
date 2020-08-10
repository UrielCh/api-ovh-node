import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/dedicated/housing",
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
      "description": "Operations about the HOUSING service"
    },
    {
      "path": "/dedicated/housing/{serviceName}",
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
          "responseType": "dedicated.housing.Housing",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Housing bay"
    },
    {
      "path": "/dedicated/housing/{serviceName}/features/backupFTP",
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
          "responseType": "dedicated.server.Task",
          "noAuthentication": false,
          "description": "Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED"
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
          "responseType": "dedicated.server.BackupFtp",
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
          "description": "Create a new Backup FTP space"
        }
      ],
      "description": "Backup Ftp assigned to this server"
    },
    {
      "path": "/dedicated/housing/{serviceName}/features/backupFTP/access",
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
          "description": "List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "nfs",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Wether to allow the NFS protocol for this ACL"
            },
            {
              "name": "ipBlock",
              "dataType": "ipBlock",
              "paramType": "body",
              "fullType": "ipBlock",
              "required": true,
              "description": "The IP Block specific to this ACL. It musts belong to your server."
            },
            {
              "name": "ftp",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Wether to allow the FTP protocol for this ACL"
            },
            {
              "name": "cifs",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Wether to allow the CIFS (SMB) protocol for this ACL"
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
          "description": "Create a new Backup FTP ACL"
        }
      ],
      "description": "List the dedicated.server.BackupFtpAcl objects"
    },
    {
      "path": "/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}",
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
              "name": "ipBlock",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip block"
            }
          ],
          "responseType": "dedicated.server.Task",
          "noAuthentication": false,
          "description": "Revoke this ACL"
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
              "name": "ipBlock",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip block"
            }
          ],
          "responseType": "dedicated.server.BackupFtpAcl",
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
              "dataType": "dedicated.server.BackupFtpAcl",
              "paramType": "body",
              "fullType": "dedicated.server.BackupFtpAcl",
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
              "name": "ipBlock",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip block"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Backup Ftp ACL for this server and Backup Ftp"
    },
    {
      "path": "/dedicated/housing/{serviceName}/features/backupFTP/authorizableBlocks",
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
          "description": "Get all IP blocks that can be used in the ACL"
        }
      ],
      "description": "authorizableBlocks operations"
    },
    {
      "path": "/dedicated/housing/{serviceName}/features/backupFTP/password",
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
          "description": "Change your Backup FTP password"
        }
      ],
      "description": "password operations"
    },
    {
      "path": "/dedicated/housing/{serviceName}/orderable/APC",
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
          "responseType": "dedicated.housing.ApcOrderable",
          "noAuthentication": false,
          "description": "Is an APC orderable for this housing bay"
        }
      ],
      "description": "APC operations"
    },
    {
      "path": "/dedicated/housing/{serviceName}/serviceInfos",
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
      "path": "/dedicated/housing/{serviceName}/task",
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
              "name": "status",
              "dataType": "dedicated.TaskStatusEnum",
              "paramType": "query",
              "fullType": "dedicated.TaskStatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "name": "function",
              "dataType": "dedicated.housing.TaskFunctionEnum",
              "paramType": "query",
              "fullType": "dedicated.housing.TaskFunctionEnum",
              "required": false,
              "description": "Filter the value of function property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "View task list"
        }
      ],
      "description": "List the dedicated.housing.Task objects"
    },
    {
      "path": "/dedicated/housing/{serviceName}/task/{taskId}",
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
          "responseType": "dedicated.housing.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Housing tasks"
    },
    {
      "path": "/dedicated/housing/{serviceName}/task/{taskId}/cancel",
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
    }
  ],
  "resourcePath": "/dedicated/housing",
  "basePath": "https://eu.api.ovh.com/1.0",
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
    "dedicated.housing.ApcOrderable": {
      "id": "ApcOrderable",
      "namespace": "dedicated.housing",
      "description": "A structure describing informations for APC orderable for this housing bay",
      "properties": {
        "free": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Is this APC free",
          "required": true
        },
        "orderable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Is an APC is orderable for this housing bay",
          "required": true
        }
      }
    },
    "dedicated.housing.DatacenterEnum": {
      "id": "DatacenterEnum",
      "namespace": "dedicated.housing",
      "description": "Housing bay datacenters",
      "enum": [
        "gsw",
        "pdc1"
      ],
      "enumType": "string"
    },
    "dedicated.housing.Housing": {
      "id": "Housing",
      "namespace": "dedicated.housing",
      "description": "Housing bay",
      "properties": {
        "datacenter": {
          "type": "dedicated.housing.DatacenterEnum",
          "fullType": "dedicated.housing.DatacenterEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Housing bay datacenter",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The name you give to the bay",
          "required": true
        },
        "network": {
          "type": "dedicated.housing.NetworkInfo[]",
          "fullType": "dedicated.housing.NetworkInfo[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Housing bay network",
          "required": true
        },
        "options": {
          "type": "dedicated.housing.Options",
          "fullType": "dedicated.housing.Options",
          "canBeNull": false,
          "readOnly": true,
          "description": "Housing bay options",
          "required": true
        },
        "rack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The bay's description",
          "required": true
        },
        "securityCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Bay Security code",
          "required": true
        }
      }
    },
    "dedicated.housing.IpInfo": {
      "id": "IpInfo",
      "namespace": "dedicated.housing",
      "description": "A structure describing the Bay's network configuration",
      "properties": {
        "gateway": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": false,
          "description": "Network gateway of the bay",
          "required": false
        },
        "network": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": false,
          "description": "Network address of the bay",
          "required": true
        },
        "reservedAddresses": {
          "type": "ip[]",
          "fullType": "ip[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Reserved addresses. You should not use them in your network",
          "required": false
        }
      }
    },
    "dedicated.housing.LinkInfo": {
      "id": "LinkInfo",
      "namespace": "dedicated.housing",
      "description": "A structure describing the Bay`s link information",
      "properties": {
        "port": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Router port number",
          "required": true
        },
        "router": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Router in charge of your network",
          "required": true
        }
      }
    },
    "dedicated.housing.NetworkInfo": {
      "id": "NetworkInfo",
      "namespace": "dedicated.housing",
      "description": "A structure describing the Bay`s network configuration",
      "properties": {
        "ipv4": {
          "type": "dedicated.housing.IpInfo",
          "fullType": "dedicated.housing.IpInfo",
          "canBeNull": true,
          "readOnly": false,
          "description": "IPv4 network information",
          "required": false
        },
        "ipv6": {
          "type": "dedicated.housing.IpInfo",
          "fullType": "dedicated.housing.IpInfo",
          "canBeNull": true,
          "readOnly": false,
          "description": "IPv6 network information",
          "required": false
        },
        "link": {
          "type": "dedicated.housing.LinkInfo",
          "fullType": "dedicated.housing.LinkInfo",
          "canBeNull": true,
          "readOnly": false,
          "description": "Router related information",
          "required": false
        }
      }
    },
    "dedicated.housing.Options": {
      "id": "Options",
      "namespace": "dedicated.housing",
      "description": "A structure describing current housing options",
      "properties": {
        "apcCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of APC connected to this housing bay",
          "required": true
        },
        "handsneyes": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Is this housing bay have handsneyes service",
          "required": true
        },
        "highAvailabilityRouting": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "High Availability routing service offer",
          "required": true
        }
      }
    },
    "dedicated.housing.Task": {
      "id": "Task",
      "namespace": "dedicated.housing",
      "description": "Housing tasks",
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
          "type": "dedicated.housing.TaskFunctionEnum",
          "fullType": "dedicated.housing.TaskFunctionEnum",
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
    "dedicated.housing.TaskFunctionEnum": {
      "id": "TaskFunctionEnum",
      "namespace": "dedicated.housing",
      "description": "Distincts task",
      "enum": [
        "applyBackupFtpAcls",
        "applyBackupFtpQuota",
        "changePasswordBackupFTP",
        "createBackupFTP",
        "migrateBackupFTP",
        "removeBackupFTP"
      ],
      "enumType": "string"
    },
    "dedicated.server.BackupFtp": {
      "id": "BackupFtp",
      "namespace": "dedicated.server",
      "description": "Backup Ftp assigned to this server",
      "properties": {
        "ftpBackupName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The backup FTP server name",
          "required": true
        },
        "quota": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": true,
          "description": "The disk space available in gigabytes",
          "required": false
        },
        "readOnlyDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "If not-null, gives the date since when your account was set in read-only mode because the quota was exceeded",
          "required": false
        },
        "type": {
          "type": "dedicated.server.BackupStorageTypeEnum",
          "fullType": "dedicated.server.BackupStorageTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The backup FTP type",
          "required": true
        },
        "usage": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": true,
          "description": "The disk space currently used on your backup FTP in percent",
          "required": false
        }
      }
    },
    "dedicated.server.BackupFtpAcl": {
      "id": "BackupFtpAcl",
      "namespace": "dedicated.server",
      "description": "Backup Ftp ACL for this server and Backup Ftp",
      "properties": {
        "cifs": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Wether to allow the CIFS (SMB) protocol for this ACL",
          "required": true
        },
        "ftp": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Wether to allow the FTP protocol for this ACL",
          "required": true
        },
        "ipBlock": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": true,
          "description": "The IP Block specific to this ACL",
          "required": true
        },
        "isApplied": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Whether the rule has been applied on the Backup Ftp",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the last object modification",
          "required": true
        },
        "nfs": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Wether to allow the NFS protocol for this ACL",
          "required": true
        }
      }
    },
    "dedicated.server.BackupStorageTypeEnum": {
      "id": "BackupStorageTypeEnum",
      "namespace": "dedicated.server",
      "description": "Different backup storage type",
      "enum": [
        "included",
        "storage"
      ],
      "enumType": "string"
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
    }
  }
}