import {Schema} from '../../src/schema';

// imported from https://eu.api.kimsufi.com:443/1.0/vps.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the VPS service",
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
          "responseType": "string[]"
        }
      ],
      "path": "/vps"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all the datacenters for a specific country",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.CountryEnum",
              "description": "Country targeted",
              "fullType": "nichandle.CountryEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/vps/datacenter"
    },
    {
      "description": "VPS Virtual Machine",
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
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.VPS"
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
              "dataType": "vps.VPS",
              "description": "New object properties",
              "fullType": "vps.VPS",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/vps/{serviceName}"
    },
    {
      "description": "activeOptions operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2013-11-23T10:00:00+01:00",
            "deprecatedDate": "2013-10-23T10:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/vps/{serviceName}/option",
            "value": "DEPRECATED"
          },
          "description": "Return all active options for the virtual server",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.VpsOptionEnum[]"
        }
      ],
      "path": "/vps/{serviceName}/activeOptions"
    },
    {
      "description": "Backup your VPS",
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
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.AutomatedBackup"
        }
      ],
      "path": "/vps/{serviceName}/automatedBackup"
    },
    {
      "description": "attachedBackup operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Backup attached to your VPS",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.automatedBackup.Attached[]"
        }
      ],
      "path": "/vps/{serviceName}/automatedBackup/attachedBackup"
    },
    {
      "description": "detachBackup operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a VPS.Task that will umount a restored backup on your VPS",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "restorePoint fetched in /vps/{serviceName}/automatedBackup/attachedBackup",
              "fullType": "datetime",
              "name": "restorePoint",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Task"
        }
      ],
      "path": "/vps/{serviceName}/automatedBackup/detachBackup"
    },
    {
      "description": "restore operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Creates a VPS.Task that will restore the given restorePoint",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Only with restore full on VPS Cloud 2014",
              "fullType": "boolean",
              "name": "changePassword",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Restore Point fetched in /automatedBackup/restorePoints",
              "fullType": "datetime",
              "name": "restorePoint",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "vps.RestoreTypeEnum",
              "description": "file: Attach/export restored disk to your current VPS - full: Replace your current VPS by the given restorePoint",
              "fullType": "vps.RestoreTypeEnum",
              "name": "type",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Task"
        }
      ],
      "path": "/vps/{serviceName}/automatedBackup/restore"
    },
    {
      "description": "restorePoints operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get available Restore Points",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "vps.RestoreStateEnum",
              "description": "The state of the restore point",
              "fullType": "vps.RestoreStateEnum",
              "name": "state",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "datetime[]"
        }
      ],
      "path": "/vps/{serviceName}/automatedBackup/restorePoints"
    },
    {
      "description": "availableUpgrade operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return all models the virtual server can be upgraded to",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Model[]"
        }
      ],
      "path": "/vps/{serviceName}/availableUpgrade"
    },
    {
      "description": "Backup Ftp assigned to this VPS",
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
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.BackupFtp"
        }
      ],
      "path": "/vps/{serviceName}/backupftp"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Wether to allow the CIFS (SMB) protocol for this ACL",
              "fullType": "boolean",
              "name": "cifs",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Wether to allow the FTP protocol for this ACL",
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
              "description": "Wether to allow the NFS protocol for this ACL",
              "fullType": "boolean",
              "name": "nfs",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/vps/{serviceName}/backupftp/access"
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
              "description": "The internal name of your VPS offer",
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
              "description": "The internal name of your VPS offer",
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
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/vps/{serviceName}/backupftp/access/{ipBlock}"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipBlock[]"
        }
      ],
      "path": "/vps/{serviceName}/backupftp/authorizableBlocks"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/vps/{serviceName}/backupftp/password"
    },
    {
      "description": "Change the contacts of this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Launch a contact change procedure",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The contact to set as admin contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactAdmin",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The contact to set as billing contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactBilling",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The contact to set as tech contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactTech",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/vps/{serviceName}/changeContact"
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
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/vps/{serviceName}/confirmTermination"
    },
    {
      "description": "createSnapshot operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a snapshot of the Virtual Server if the snapshot option is enabled and if there is no existing snapshot",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "A textual description for your snapshot",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Task"
        }
      ],
      "path": "/vps/{serviceName}/createSnapshot"
    },
    {
      "description": "Information about a datacenter of a VPS Virtual Machine",
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
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Datacenter"
        }
      ],
      "path": "/vps/{serviceName}/datacenter"
    },
    {
      "description": "List the vps.Disk objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disks associated to this virtual server",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/vps/{serviceName}/disks"
    },
    {
      "description": "Information about a disk of a VPS Virtual Machine",
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
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Disk"
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
              "dataType": "vps.Disk",
              "description": "New object properties",
              "fullType": "vps.Disk",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/vps/{serviceName}/disks/{id}"
    },
    {
      "description": "monitoring operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return many statistics about the disk for a given period",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "vps.VpsMonitoringPeriodEnum",
              "description": "The period the statistics are fetched for",
              "fullType": "vps.VpsMonitoringPeriodEnum",
              "name": "period",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "vps.disk.StatisticTypeEnum",
              "description": "The type of statistic to be fetched",
              "fullType": "vps.disk.StatisticTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "complexType.UnitAndValues<vps.VpsTimestampValue>"
        }
      ],
      "path": "/vps/{serviceName}/disks/{id}/monitoring"
    },
    {
      "description": "use operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return many statistics about the disk at that time",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "vps.disk.StatisticTypeEnum",
              "description": "The type of statistic to be fetched",
              "fullType": "vps.disk.StatisticTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "complexType.UnitAndValue<double>"
        }
      ],
      "path": "/vps/{serviceName}/disks/{id}/use"
    },
    {
      "description": "Installation template for a VPS Virtual Machine",
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
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Template"
        }
      ],
      "path": "/vps/{serviceName}/distribution"
    },
    {
      "description": "List the vps.Software objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available softwares for this template Id",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/vps/{serviceName}/distribution/software"
    },
    {
      "description": "Available softwares on a Template",
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
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "softwareId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Software"
        }
      ],
      "path": "/vps/{serviceName}/distribution/software/{softwareId}"
    },
    {
      "description": "getConsoleUrl operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return the VPS console URL",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/vps/{serviceName}/getConsoleUrl"
    },
    {
      "description": "List the vps.Image objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Images available for this virtual server",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/vps/{serviceName}/images/available"
    },
    {
      "description": "Installation image for a VPS",
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
              "description": "Id of the object",
              "fullType": "string",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Image"
        }
      ],
      "path": "/vps/{serviceName}/images/available/{id}"
    },
    {
      "description": "Installation image for a VPS",
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
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Image"
        }
      ],
      "path": "/vps/{serviceName}/images/current"
    },
    {
      "description": "ipCountryAvailable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the countries you can select for your IPs geolocation",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.ip.GeolocationEnum[]"
        }
      ],
      "path": "/vps/{serviceName}/ipCountryAvailable"
    },
    {
      "description": "List the vps.Ip objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Ips associated to this virtual server",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip[]"
        }
      ],
      "path": "/vps/{serviceName}/ips"
    },
    {
      "description": "Information about an IP address for a VPS Virtual Machine",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Release a given Ip (Additional Ip)",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "The effective ip address of the Ip object",
              "fullType": "ip",
              "name": "ipAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "The effective ip address of the Ip object",
              "fullType": "ip",
              "name": "ipAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Ip"
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
              "dataType": "vps.Ip",
              "description": "New object properties",
              "fullType": "vps.Ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "The effective ip address of the Ip object",
              "fullType": "ip",
              "name": "ipAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/vps/{serviceName}/ips/{ipAddress}"
    },
    {
      "description": "migration2014 operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information on a possible migration of a VPS Cloud 2014 to VPS Cloud 2020",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.migration.Cloud2014to2020"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Schedule the migration of a VPS Cloud 2014 to VPS Cloud 2020",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "When the migration should start",
              "fullType": "datetime",
              "name": "date",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Task"
        }
      ],
      "path": "/vps/{serviceName}/migration2014"
    },
    {
      "description": "models operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return all models for the range of the virtual server",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Model[]"
        }
      ],
      "path": "/vps/{serviceName}/models"
    },
    {
      "description": "monitoring operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return many statistics about the virtual machine for a given period",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "vps.VpsMonitoringPeriodEnum",
              "description": "The period the statistics are fetched for",
              "fullType": "vps.VpsMonitoringPeriodEnum",
              "name": "period",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "vps.VpsStatisticTypeEnum",
              "description": "The type of statistic to be fetched",
              "fullType": "vps.VpsStatisticTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "complexType.UnitAndValues<vps.VpsTimestampValue>"
        }
      ],
      "path": "/vps/{serviceName}/monitoring"
    },
    {
      "description": "openConsoleAccess operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return the necessary informations to open a VNC connection to your VPS",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.VncProtocolEnum",
              "description": "The console protocol you want",
              "fullType": "vps.VncProtocolEnum",
              "name": "protocol",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Vnc"
        }
      ],
      "path": "/vps/{serviceName}/openConsoleAccess"
    },
    {
      "description": "List the vps.Option objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of VPS options",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.VpsOptionEnum[]"
        }
      ],
      "path": "/vps/{serviceName}/option"
    },
    {
      "description": "Information about the options of a VPS Virtual Machine",
      "operations": [
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
              "dataType": "vps.VpsOptionEnum",
              "description": "The option name",
              "fullType": "vps.VpsOptionEnum",
              "name": "option",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Delete option now, don't wait for expiration",
              "fullType": "boolean",
              "name": "deleteNow",
              "paramType": "query",
              "required": false
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.VpsOptionEnum",
              "description": "The option name",
              "fullType": "vps.VpsOptionEnum",
              "name": "option",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Option"
        }
      ],
      "path": "/vps/{serviceName}/option/{option}"
    },
    {
      "description": "reboot operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request a reboot of the machine",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Task"
        }
      ],
      "path": "/vps/{serviceName}/reboot"
    },
    {
      "description": "rebuild operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Reinstall the virtual server",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "If asked, the installation password will NOT be sent (only if sshKey defined)",
              "fullType": "boolean",
              "name": "doNotSendPassword",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Id of the vps.Image fetched in /images list",
              "fullType": "string",
              "name": "imageId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "SSH key name to pre-install on your VPS (name from /me/sshKey)",
              "fullType": "string",
              "name": "sshKey",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Task"
        }
      ],
      "path": "/vps/{serviceName}/rebuild"
    },
    {
      "description": "reinstall operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reinstall the virtual server",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "If asked, the installation password will NOT be sent (only if sshKey defined)",
              "fullType": "boolean",
              "name": "doNotSendPassword",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Distribution language. default : en",
              "fullType": "string",
              "name": "language",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long[]",
              "description": "Id of the vps.Software type fetched in /template/{id}/software",
              "fullType": "long[]",
              "name": "softwareId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string[]",
              "description": "SSH key names to pre-install on your VPS (name from /me/sshKey)",
              "fullType": "string[]",
              "name": "sshKey",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Id of the vps.Template fetched in /templates list",
              "fullType": "long",
              "name": "templateId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Task"
        }
      ],
      "path": "/vps/{serviceName}/reinstall"
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
              "description": "The internal name of your VPS offer",
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
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/vps/{serviceName}/secondaryDnsDomains"
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
              "description": "The internal name of your VPS offer",
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
              "description": "The internal name of your VPS offer",
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
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/vps/{serviceName}/secondaryDnsDomains/{domain}"
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
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "secondaryDns.SecondaryDNSNameServer"
        }
      ],
      "path": "/vps/{serviceName}/secondaryDnsDomains/{domain}/dnsServer"
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
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "secondaryDns.SecondaryDNSNameServer"
        }
      ],
      "path": "/vps/{serviceName}/secondaryDnsNameServerAvailable"
    },
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
              "description": "The internal name of your VPS offer",
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
          "description": "Alter this object properties",
          "httpMethod": "PUT",
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
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/vps/{serviceName}/serviceInfos"
    },
    {
      "description": "setPassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Start the process in order to set the root password of the virtual machine. Be careful, in case of Cloud model, a reboot is mandatory.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Task"
        }
      ],
      "path": "/vps/{serviceName}/setPassword"
    },
    {
      "description": "Information about the snapshot of a VPS Virtual Machine",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Creates a vps.Task that will delete the Snapshot",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Task"
        },
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
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Snapshot"
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
              "dataType": "vps.Snapshot",
              "description": "New object properties",
              "fullType": "vps.Snapshot",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/vps/{serviceName}/snapshot"
    },
    {
      "description": "revert operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Revert the Virtual Server to this snapshot",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Task"
        }
      ],
      "path": "/vps/{serviceName}/snapshot/revert"
    },
    {
      "description": "start operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request the machine to start",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Task"
        }
      ],
      "path": "/vps/{serviceName}/start"
    },
    {
      "description": "status operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Give the status of the services of the main IP",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.ip.ServiceStatus"
        }
      ],
      "path": "/vps/{serviceName}/status"
    },
    {
      "description": "stop operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request the machine to stop",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Task"
        }
      ],
      "path": "/vps/{serviceName}/stop"
    },
    {
      "description": "List the vps.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Tasks associated to this virtual server",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "vps.TaskStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "vps.TaskStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "vps.TaskTypeEnum",
              "description": "Filter the value of type property (=)",
              "fullType": "vps.TaskTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/vps/{serviceName}/tasks"
    },
    {
      "description": "Operation on a VPS Virtual Machine",
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
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Task"
        }
      ],
      "path": "/vps/{serviceName}/tasks/{id}"
    },
    {
      "description": "List the vps.Template objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Templates available for this virtual server",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/vps/{serviceName}/templates"
    },
    {
      "description": "Installation template for a VPS Virtual Machine",
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
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Template"
        }
      ],
      "path": "/vps/{serviceName}/templates/{id}"
    },
    {
      "description": "List the vps.Software objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available softwares for this template Id",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/vps/{serviceName}/templates/{id}/software"
    },
    {
      "description": "Available softwares on a Template",
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
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "softwareId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Software"
        }
      ],
      "path": "/vps/{serviceName}/templates/{id}/software/{softwareId}"
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
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/vps/{serviceName}/terminate"
    },
    {
      "description": "use operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return many statistics about the virtual machine at that time",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "vps.VpsStatisticTypeEnum",
              "description": "The type of statistic to be fetched",
              "fullType": "vps.VpsStatisticTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "complexType.UnitAndValue<double>"
        }
      ],
      "path": "/vps/{serviceName}/use"
    },
    {
      "description": "Informations about a VPS Veeam backups",
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
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Veeam"
        }
      ],
      "path": "/vps/{serviceName}/veeam"
    },
    {
      "description": "List the vps.veeam.RestorePoint objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Veeam restore points for the VPS",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of creationTime property (like)",
              "fullType": "datetime",
              "name": "creationTime",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/vps/{serviceName}/veeam/restorePoints"
    },
    {
      "description": "Informations about a VPS Veeam restore points",
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
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.veeam.RestorePoint"
        }
      ],
      "path": "/vps/{serviceName}/veeam/restorePoints/{id}"
    },
    {
      "description": "restore operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Creates a VPS.Task that will restore the given restorePoint",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "(Full only) Change the restored VPS root password when done",
              "fullType": "boolean",
              "name": "changePassword",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "vps.veeam.ExportTypeEnum",
              "description": "(Except full) The export method for your restore - defaults to both",
              "fullType": "vps.veeam.ExportTypeEnum",
              "name": "export",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Replace your current VPS by the restorePoint",
              "fullType": "boolean",
              "name": "full",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Task"
        }
      ],
      "path": "/vps/{serviceName}/veeam/restorePoints/{id}/restore"
    },
    {
      "description": "Currently restored backup",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Creates a VPS.Task that will unmount the backup",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Task"
        },
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
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.veeam.RestoredBackup"
        }
      ],
      "path": "/vps/{serviceName}/veeam/restoredBackup"
    }
  ],
  "basePath": "https://eu.api.kimsufi.com/1.0",
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
    "complexType.UnitAndValues<T>": {
      "description": "A value set tagged with its unit",
      "generics": [
        "T"
      ],
      "id": "UnitAndValues",
      "namespace": "complexType",
      "properties": {
        "unit": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "values": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "T[]"
        }
      }
    },
    "coreTypes.CountryEnum": {
      "description": "ISO country codes",
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
      "enumType": "string",
      "id": "CountryEnum",
      "namespace": "coreTypes"
    },
    "coreTypes.IpVersionEnum": {
      "description": "Ip versions",
      "enum": [
        "v4",
        "v6"
      ],
      "enumType": "string",
      "id": "IpVersionEnum",
      "namespace": "coreTypes"
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
    "dedicated.server.BackupFtpAcl": {
      "description": "Backup Ftp ACL for this server and Backup Ftp",
      "id": "BackupFtpAcl",
      "namespace": "dedicated.server",
      "properties": {
        "cifs": {
          "canBeNull": false,
          "description": "Wether to allow the CIFS (SMB) protocol for this ACL",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "ftp": {
          "canBeNull": false,
          "description": "Wether to allow the FTP protocol for this ACL",
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
          "description": "Wether to allow the NFS protocol for this ACL",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
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
        "taskId": {
          "canBeNull": false,
          "description": "the id of the task",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "nichandle.CountryEnum": {
      "description": "Countries a nichandle can choose",
      "enum": [
        "AC",
        "AD",
        "AE",
        "AF",
        "AG",
        "AI",
        "AL",
        "AM",
        "AO",
        "AQ",
        "AR",
        "AS",
        "AT",
        "AU",
        "AW",
        "AX",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BL",
        "BM",
        "BN",
        "BO",
        "BQ",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CC",
        "CD",
        "CF",
        "CG",
        "CH",
        "CI",
        "CK",
        "CL",
        "CM",
        "CN",
        "CO",
        "CR",
        "CU",
        "CV",
        "CW",
        "CX",
        "CY",
        "CZ",
        "DE",
        "DG",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EA",
        "EC",
        "EE",
        "EG",
        "EH",
        "ER",
        "ES",
        "ET",
        "FI",
        "FJ",
        "FK",
        "FM",
        "FO",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GF",
        "GG",
        "GH",
        "GI",
        "GL",
        "GM",
        "GN",
        "GP",
        "GQ",
        "GR",
        "GS",
        "GT",
        "GU",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "IC",
        "ID",
        "IE",
        "IL",
        "IM",
        "IN",
        "IO",
        "IQ",
        "IR",
        "IS",
        "IT",
        "JE",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KP",
        "KR",
        "KW",
        "KY",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MF",
        "MG",
        "MH",
        "MK",
        "ML",
        "MM",
        "MN",
        "MO",
        "MP",
        "MQ",
        "MR",
        "MS",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NC",
        "NE",
        "NF",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NU",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PF",
        "PG",
        "PH",
        "PK",
        "PL",
        "PM",
        "PN",
        "PR",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RE",
        "RO",
        "RS",
        "RU",
        "RW",
        "SA",
        "SB",
        "SC",
        "SD",
        "SE",
        "SG",
        "SH",
        "SI",
        "SJ",
        "SK",
        "SL",
        "SM",
        "SN",
        "SO",
        "SR",
        "SS",
        "ST",
        "SV",
        "SX",
        "SY",
        "SZ",
        "TA",
        "TC",
        "TD",
        "TF",
        "TG",
        "TH",
        "TJ",
        "TK",
        "TL",
        "TM",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "UM",
        "UNKNOWN",
        "US",
        "UY",
        "UZ",
        "VA",
        "VC",
        "VE",
        "VG",
        "VI",
        "VN",
        "VU",
        "WF",
        "WS",
        "XK",
        "YE",
        "YT",
        "ZA",
        "ZM",
        "ZW"
      ],
      "enumType": "string",
      "id": "CountryEnum",
      "namespace": "nichandle"
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
    "vps.AutomatedBackup": {
      "description": "Backup your VPS",
      "id": "AutomatedBackup",
      "namespace": "vps",
      "properties": {
        "schedule": {
          "canBeNull": true,
          "description": "Scheduled time of your daily backup",
          "fullType": "time",
          "readOnly": true,
          "required": false,
          "type": "time"
        },
        "state": {
          "canBeNull": false,
          "description": "Backup state",
          "fullType": "vps.BackupStateEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.BackupStateEnum"
        }
      }
    },
    "vps.BackupFtp": {
      "description": "Backup Ftp assigned to this VPS",
      "id": "BackupFtp",
      "namespace": "vps",
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
          "description": "The disk space available on your backup FTP",
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "usage": {
          "canBeNull": true,
          "description": "The disk space currently used on your backup FTP",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        }
      }
    },
    "vps.BackupStateEnum": {
      "description": "Available AutomatedBackup states",
      "enum": [
        "disabled",
        "enabled"
      ],
      "enumType": "string",
      "id": "BackupStateEnum",
      "namespace": "vps"
    },
    "vps.Datacenter": {
      "description": "Information about a datacenter of a VPS Virtual Machine",
      "id": "Datacenter",
      "namespace": "vps",
      "properties": {
        "country": {
          "canBeNull": false,
          "description": "Datacenter ISO country code",
          "fullType": "coreTypes.CountryEnum",
          "readOnly": true,
          "required": false,
          "type": "coreTypes.CountryEnum"
        },
        "longName": {
          "canBeNull": false,
          "description": "Datacenter display name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Datacenter name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vps.Disk": {
      "description": "Information about a disk of a VPS Virtual Machine",
      "id": "Disk",
      "namespace": "vps",
      "properties": {
        "bandwidthLimit": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lowFreeSpaceThreshold": {
          "canBeNull": true,
          "description": "The low disk free space threshold in MiB",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "monitoring": {
          "canBeNull": true,
          "description": "The monitoring state of this disk",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "size": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "fullType": "vps.disk.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.disk.StateEnum"
        },
        "type": {
          "canBeNull": false,
          "fullType": "vps.disk.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.disk.TypeEnum"
        }
      }
    },
    "vps.Image": {
      "description": "Installation image for a VPS",
      "id": "Image",
      "namespace": "vps",
      "properties": {
        "id": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vps.Ip": {
      "description": "Information about an IP address for a VPS Virtual Machine",
      "id": "Ip",
      "namespace": "vps",
      "properties": {
        "gateway": {
          "canBeNull": true,
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "geolocation": {
          "canBeNull": false,
          "fullType": "vps.ip.GeolocationEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.ip.GeolocationEnum"
        },
        "ipAddress": {
          "canBeNull": false,
          "description": "The effective ip address of the Ip object",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "macAddress": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "reverse": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "fullType": "vps.ip.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.ip.TypeEnum"
        },
        "version": {
          "canBeNull": false,
          "fullType": "coreTypes.IpVersionEnum",
          "readOnly": true,
          "required": false,
          "type": "coreTypes.IpVersionEnum"
        }
      }
    },
    "vps.Model": {
      "description": "A structure describing characteristics of a VPS model",
      "id": "Model",
      "namespace": "vps",
      "properties": {
        "availableOptions": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "vps.VpsOptionEnum[]"
        },
        "datacenter": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "disk": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "maximumAdditionnalIp": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "memory": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "offer": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "vcore": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "version": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "vps.VpsVersionEnum"
        }
      }
    },
    "vps.Option": {
      "description": "Information about the options of a VPS Virtual Machine",
      "id": "Option",
      "namespace": "vps",
      "properties": {
        "option": {
          "canBeNull": false,
          "description": "The option name",
          "fullType": "vps.VpsOptionEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.VpsOptionEnum"
        },
        "state": {
          "canBeNull": false,
          "description": "The state of the option",
          "fullType": "vps.VpsOptionStateEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.VpsOptionStateEnum"
        }
      }
    },
    "vps.RestoreStateEnum": {
      "description": "Available restore state",
      "enum": [
        "available",
        "restored",
        "restoring"
      ],
      "enumType": "string",
      "id": "RestoreStateEnum",
      "namespace": "vps"
    },
    "vps.RestoreTypeEnum": {
      "description": "Available restore types",
      "enum": [
        "file",
        "full"
      ],
      "enumType": "string",
      "id": "RestoreTypeEnum",
      "namespace": "vps"
    },
    "vps.Snapshot": {
      "description": "Information about the snapshot of a VPS Virtual Machine",
      "id": "Snapshot",
      "namespace": "vps",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "vps.Software": {
      "description": "Available softwares on a Template",
      "id": "Software",
      "namespace": "vps",
      "properties": {
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "fullType": "vps.SoftwareStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.SoftwareStatusEnum"
        },
        "type": {
          "canBeNull": false,
          "fullType": "vps.SoftwareTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.SoftwareTypeEnum"
        }
      }
    },
    "vps.SoftwareStatusEnum": {
      "description": "Available Status for a vps Software",
      "enum": [
        "deprecated",
        "stable",
        "testing"
      ],
      "enumType": "string",
      "id": "SoftwareStatusEnum",
      "namespace": "vps"
    },
    "vps.SoftwareTypeEnum": {
      "description": "Available Type for a vps Software",
      "enum": [
        "database",
        "environment",
        "webserver"
      ],
      "enumType": "string",
      "id": "SoftwareTypeEnum",
      "namespace": "vps"
    },
    "vps.Task": {
      "description": "Operation on a VPS Virtual Machine",
      "id": "Task",
      "namespace": "vps",
      "properties": {
        "date": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "progress": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "fullType": "vps.TaskStateEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.TaskStateEnum"
        },
        "type": {
          "canBeNull": false,
          "fullType": "vps.TaskTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.TaskTypeEnum"
        }
      }
    },
    "vps.TaskStateEnum": {
      "description": "All states a VPS task can be in",
      "enum": [
        "blocked",
        "cancelled",
        "doing",
        "done",
        "error",
        "paused",
        "todo",
        "waitingAck"
      ],
      "enumType": "string",
      "id": "TaskStateEnum",
      "namespace": "vps"
    },
    "vps.TaskTypeEnum": {
      "description": "All type a VPS task can be",
      "enum": [
        "addVeeamBackupJob",
        "changeRootPassword",
        "createSnapshot",
        "deleteSnapshot",
        "deliverVm",
        "getConsoleUrl",
        "internalTask",
        "migrate",
        "openConsoleAccess",
        "provisioningAdditionalIp",
        "reOpenVm",
        "rebootVm",
        "reinstallVm",
        "removeVeeamBackup",
        "restoreFullVeeamBackup",
        "restoreVeeamBackup",
        "restoreVm",
        "revertSnapshot",
        "setMonitoring",
        "setNetboot",
        "startVm",
        "stopVm",
        "upgradeVm"
      ],
      "enumType": "string",
      "id": "TaskTypeEnum",
      "namespace": "vps"
    },
    "vps.Template": {
      "description": "Installation template for a VPS Virtual Machine",
      "id": "Template",
      "namespace": "vps",
      "properties": {
        "availableLanguage": {
          "canBeNull": false,
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "bitFormat": {
          "canBeNull": false,
          "fullType": "vps.TemplateBitFormatEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.TemplateBitFormatEnum"
        },
        "distribution": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "locale": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vps.TemplateBitFormatEnum": {
      "description": "Bitness of a VPS template",
      "enum": [
        "32",
        "64"
      ],
      "enumType": "long",
      "id": "TemplateBitFormatEnum",
      "namespace": "vps"
    },
    "vps.VPS": {
      "description": "VPS Virtual Machine",
      "id": "VPS",
      "namespace": "vps",
      "properties": {
        "cluster": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Set the name displayed in ManagerV6 for your VPS (max 50 chars)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "keymap": {
          "canBeNull": true,
          "description": "Set KVM keyboard layout on VPS Cloud. Reboot your VPS after change",
          "fullType": "vps.VpsKeymapEnum",
          "readOnly": false,
          "required": false,
          "type": "vps.VpsKeymapEnum"
        },
        "memoryLimit": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "model": {
          "canBeNull": false,
          "fullType": "vps.Model",
          "readOnly": true,
          "required": false,
          "type": "vps.Model"
        },
        "monitoringIpBlocks": {
          "canBeNull": false,
          "description": "Ip blocks for OVH monitoring servers",
          "fullType": "ipBlock[]",
          "readOnly": true,
          "required": false,
          "type": "ipBlock[]"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "netbootMode": {
          "canBeNull": false,
          "description": "Reboot your VPS 'Cloud' after change, VPS 'Classic/LowLat' will reboot automatically. Credentials for rescue mode will be sent by mail",
          "fullType": "vps.VpsNetbootEnum",
          "readOnly": false,
          "required": false,
          "type": "vps.VpsNetbootEnum"
        },
        "offerType": {
          "canBeNull": false,
          "fullType": "vps.VpsOfferEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.VpsOfferEnum"
        },
        "slaMonitoring": {
          "canBeNull": true,
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "state": {
          "canBeNull": false,
          "fullType": "vps.VpsStateEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.VpsStateEnum"
        },
        "vcore": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "zone": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vps.Veeam": {
      "description": "Informations about a VPS Veeam backups",
      "id": "Veeam",
      "namespace": "vps",
      "properties": {
        "backup": {
          "canBeNull": false,
          "description": "Backup state",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "vps.Vnc": {
      "description": "A VNC connection informations",
      "id": "Vnc",
      "namespace": "vps",
      "properties": {
        "host": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "password": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "password"
        },
        "port": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "vps.VncProtocolEnum": {
      "description": "All supported VNC protocols by VPS",
      "enum": [
        "VNC",
        "VNCOverWebSocket"
      ],
      "enumType": "string",
      "id": "VncProtocolEnum",
      "namespace": "vps"
    },
    "vps.VpsBillingVersion": {
      "description": "VPS billing version",
      "id": "VpsBillingVersion",
      "namespace": "vps",
      "properties": {
        "version": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "vps.VpsKeymapEnum": {
      "description": "All values keymap can be in",
      "enum": [
        "fr",
        "us"
      ],
      "enumType": "string",
      "id": "VpsKeymapEnum",
      "namespace": "vps"
    },
    "vps.VpsMonitoringPeriodEnum": {
      "description": "Available periods for the VPS monitoring",
      "enum": [
        "lastday",
        "lastmonth",
        "lastweek",
        "lastyear",
        "today"
      ],
      "enumType": "string",
      "id": "VpsMonitoringPeriodEnum",
      "namespace": "vps"
    },
    "vps.VpsNetbootEnum": {
      "description": "All values a VPS netboot mode can be in",
      "enum": [
        "local",
        "rescue"
      ],
      "enumType": "string",
      "id": "VpsNetbootEnum",
      "namespace": "vps"
    },
    "vps.VpsOfferEnum": {
      "description": "All offers a VPS can have",
      "enum": [
        "beta-classic",
        "classic",
        "cloud",
        "cloudram",
        "game-classic",
        "lowlat",
        "ssd"
      ],
      "enumType": "string",
      "id": "VpsOfferEnum",
      "namespace": "vps"
    },
    "vps.VpsOptionEnum": {
      "description": "All options a VPS can have",
      "enum": [
        "additionalDisk",
        "automatedBackup",
        "cpanel",
        "ftpbackup",
        "plesk",
        "snapshot",
        "veeam",
        "windows"
      ],
      "enumType": "string",
      "id": "VpsOptionEnum",
      "namespace": "vps"
    },
    "vps.VpsOptionStateEnum": {
      "description": "All states a VPS Option can be in",
      "enum": [
        "released",
        "subscribed"
      ],
      "enumType": "string",
      "id": "VpsOptionStateEnum",
      "namespace": "vps"
    },
    "vps.VpsStateEnum": {
      "description": "All states a VPS can be in",
      "enum": [
        "installing",
        "maintenance",
        "rebooting",
        "running",
        "stopped",
        "stopping",
        "upgrading"
      ],
      "enumType": "string",
      "id": "VpsStateEnum",
      "namespace": "vps"
    },
    "vps.VpsStatisticTypeEnum": {
      "description": "Available types for the VPS monitoring and use",
      "enum": [
        "cpu:iowait",
        "cpu:max",
        "cpu:nice",
        "cpu:sys",
        "cpu:used",
        "cpu:user",
        "mem:max",
        "mem:used",
        "net:rx",
        "net:tx"
      ],
      "enumType": "string",
      "id": "VpsStatisticTypeEnum",
      "namespace": "vps"
    },
    "vps.VpsTimestampValue": {
      "description": "A timestamp associated to a value",
      "id": "VpsTimestampValue",
      "namespace": "vps",
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
          "type": "double"
        }
      }
    },
    "vps.VpsVersionEnum": {
      "description": "All versions that VPS can have",
      "enum": [
        "2013v1",
        "2014v1",
        "2015v1",
        "2017v1",
        "2017v2",
        "2017v3",
        "2018v1",
        "2018v2",
        "2019v1"
      ],
      "enumType": "string",
      "id": "VpsVersionEnum",
      "namespace": "vps"
    },
    "vps.automatedBackup.Attached": {
      "description": "A backup attached to your VPS",
      "id": "Attached",
      "namespace": "vps.automatedBackup",
      "properties": {
        "access": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "vps.automatedBackup.attached.Infos"
        },
        "restorePoint": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "vps.automatedBackup.attached.Infos": {
      "description": "A structure describing a backup's access informations",
      "id": "Infos",
      "namespace": "vps.automatedBackup.attached",
      "properties": {
        "additionalDisk": {
          "canBeNull": true,
          "description": "Additional Disk details",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "nfs": {
          "canBeNull": true,
          "description": "NFS URL of the backup",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "smb": {
          "canBeNull": true,
          "description": "SMB URL of the backup",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "vps.disk.StateEnum": {
      "description": "Possible states the disk can be in",
      "enum": [
        "connected",
        "disconnected",
        "pending"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "vps.disk"
    },
    "vps.disk.StatisticTypeEnum": {
      "description": "Available types for the Disk monitoring and use",
      "enum": [
        "max",
        "used"
      ],
      "enumType": "string",
      "id": "StatisticTypeEnum",
      "namespace": "vps.disk"
    },
    "vps.disk.TypeEnum": {
      "description": "Possible type a disk can be in",
      "enum": [
        "additional",
        "primary"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "vps.disk"
    },
    "vps.ip.GeolocationEnum": {
      "description": "Geolocation of the IP Address",
      "enum": [
        "au",
        "be",
        "ca",
        "cz",
        "de",
        "es",
        "fi",
        "fr",
        "gb",
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
      "enumType": "coreTypes.CountryEnum",
      "id": "GeolocationEnum",
      "namespace": "vps.ip"
    },
    "vps.ip.ServiceStatus": {
      "description": "Service states for an Ip",
      "id": "ServiceStatus",
      "namespace": "vps.ip",
      "properties": {
        "dns": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "vps.ip.ServiceStatusService"
        },
        "http": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "vps.ip.ServiceStatusService"
        },
        "https": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "vps.ip.ServiceStatusService"
        },
        "ping": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "vps.ip.ServiceStatusStateEnum"
        },
        "smtp": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "vps.ip.ServiceStatusService"
        },
        "ssh": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "vps.ip.ServiceStatusService"
        },
        "tools": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "vps.ip.ServiceStatusStateEnum"
        }
      }
    },
    "vps.ip.ServiceStatusService": {
      "description": "Port and state of a service on an IP",
      "id": "ServiceStatusService",
      "namespace": "vps.ip",
      "properties": {
        "port": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "vps.ip.ServiceStatusStateEnum"
        }
      }
    },
    "vps.ip.ServiceStatusStateEnum": {
      "description": "Possible states of a service (ping, port)",
      "enum": [
        "down",
        "up"
      ],
      "enumType": "string",
      "id": "ServiceStatusStateEnum",
      "namespace": "vps.ip"
    },
    "vps.ip.TypeEnum": {
      "description": "Ip types on a VPS",
      "enum": [
        "additional",
        "primary"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "vps.ip"
    },
    "vps.migration.Cloud2014to2020": {
      "description": "A structure describing a migration from VPS Cloud 2014 to VPS 2020",
      "id": "Cloud2014to2020",
      "namespace": "vps.migration",
      "properties": {
        "date": {
          "canBeNull": true,
          "description": "Scheduled migration date",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "model": {
          "canBeNull": true,
          "description": "VPS 2020 model name and version",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "notAfter": {
          "canBeNull": true,
          "description": "Latest migration date possible",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "notBefore": {
          "canBeNull": true,
          "description": "Earliest migration date possible",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "options": {
          "canBeNull": false,
          "description": "Mapping of VPS options from VPS 2014 to VPS 2020",
          "readOnly": false,
          "required": false,
          "type": "vps.migration.OptionMapping[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the migration task",
          "readOnly": false,
          "required": false,
          "type": "vps.migration.StatusEnum"
        }
      }
    },
    "vps.migration.Migration": {
      "description": "Description not available",
      "id": "Migration",
      "namespace": "vps.migration",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": "The planned date of the migration",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Migration Id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vps.migration.OptionMapping": {
      "description": "Mapping between a VPS 2014 option code and a VPS 2020 option code",
      "id": "OptionMapping",
      "namespace": "vps.migration",
      "properties": {
        "vps2014code": {
          "canBeNull": false,
          "description": "VPS 2014 option code",
          "readOnly": false,
          "required": false,
          "type": "vps.VpsOptionEnum"
        },
        "vps2020code": {
          "canBeNull": false,
          "description": "VPS 2020 option code",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "vps.migration.StatusEnum": {
      "description": "All status a migration task can be in",
      "enum": [
        "notAvailable",
        "planned",
        "toPlan"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "vps.migration"
    },
    "vps.veeam.ExportTypeEnum": {
      "description": "A structure describing a Veeam backup's export options",
      "enum": [
        "nfs",
        "smb"
      ],
      "enumType": "string",
      "id": "ExportTypeEnum",
      "namespace": "vps.veeam"
    },
    "vps.veeam.Infos": {
      "description": "A structure describing a Veeam backup's access informations",
      "id": "Infos",
      "namespace": "vps.veeam",
      "properties": {
        "nfs": {
          "canBeNull": false,
          "description": "NFS URL of the backup",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "smb": {
          "canBeNull": false,
          "description": "SMB URL of the backup",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "vps.veeam.RestorePoint": {
      "description": "Informations about a VPS Veeam restore points",
      "id": "RestorePoint",
      "namespace": "vps.veeam",
      "properties": {
        "creationTime": {
          "canBeNull": false,
          "description": "The restore point's creation time",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "The restore point's id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "vps.veeam.RestoredBackup": {
      "description": "Currently restored backup",
      "id": "RestoredBackup",
      "namespace": "vps.veeam",
      "properties": {
        "accessInfos": {
          "canBeNull": false,
          "description": "Backup access informations",
          "fullType": "vps.veeam.Infos",
          "readOnly": true,
          "required": false,
          "type": "vps.veeam.Infos"
        },
        "restorePointId": {
          "canBeNull": false,
          "description": "The restore point id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "The restored backup state",
          "fullType": "vps.veeam.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.veeam.StateEnum"
        }
      }
    },
    "vps.veeam.StateEnum": {
      "description": "A structure describing a Veeam restored backup's state",
      "enum": [
        "mounted",
        "restoring",
        "unmounted",
        "unmounting"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "vps.veeam"
    }
  },
  "resourcePath": "/vps"
}