import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/vps.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "",
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
              "name": "vps:apiovh:get",
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
      "path": "/vps"
    },
    {
      "description": "",
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
              "name": "vps:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.VPSWithIAM"
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
              "name": "vps:apiovh:put",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.VPS",
              "description": "Request Body",
              "fullType": "vps.VPS",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Abort ongoing snapshot or autobackup",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vps:apiovh:abortSnapshot",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/vps/{serviceName}/abortSnapshot"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2013-11-23T00:00:00Z",
            "deprecatedDate": "2013-10-23T00:00:00Z",
            "description": "Deprecated, will be removed",
            "replacement": "/1.0/vps/{serviceName}/option",
            "value": "DEPRECATED"
          },
          "description": "Return all active options for the virtual server",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:activeOptions/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:automatedBackup/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Backup attached to your VPS",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:automatedBackup/attachedBackup/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a VPS.Task that will umount a restored backup on your VPS",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vps:apiovh:automatedBackup/detachBackup",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.automatedBackup.detachBackup.post",
              "description": "Request Body",
              "fullType": "vps.automatedBackup.detachBackup.post",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the scheduled time of your daily backup",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vps:apiovh:automatedBackup/reschedule",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.automatedBackup.reschedule.post",
              "description": "Request Body",
              "fullType": "vps.automatedBackup.reschedule.post",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Task"
        }
      ],
      "path": "/vps/{serviceName}/automatedBackup/reschedule"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Creates a VPS.Task that will restore the given restorePoint",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vps:apiovh:automatedBackup/restore",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.automatedBackup.restore.post",
              "description": "Request Body",
              "fullType": "vps.automatedBackup.restore.post",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get available Restore Points",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:automatedBackup/restorePoints/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return all models the virtual server can be upgraded to",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:availableUpgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:backupftp/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:backupftp/access/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
              "name": "vps:apiovh:backupftp/access/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.backupftp.access.post",
              "description": "Request Body",
              "fullType": "vps.backupftp.access.post",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:backupftp/access/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "Ip block",
              "fullType": "ipBlock",
              "name": "ipBlock",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
              "name": "vps:apiovh:backupftp/access/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "Ip block",
              "fullType": "ipBlock",
              "name": "ipBlock",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
              "name": "vps:apiovh:backupftp/access/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.BackupFtpAcl",
              "description": "Request Body",
              "fullType": "dedicated.server.BackupFtpAcl",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "Ip block",
              "fullType": "ipBlock",
              "name": "ipBlock",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:backupftp/authorizableBlocks/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:backupftp/password/set",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Launch a contact change procedure",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vps:apiovh:changeContact/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.changeContact.post",
              "description": "Request Body",
              "fullType": "vps.changeContact.post",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:confirmTermination",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.confirmTermination.post",
              "description": "Request Body",
              "fullType": "vps.confirmTermination.post",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a snapshot of the Virtual Server if the snapshot option is enabled and if there is no existing snapshot",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vps:apiovh:snapshot/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.createSnapshot.post",
              "description": "Request Body",
              "fullType": "vps.createSnapshot.post",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:datacenter/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disks associated to this virtual server",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:disks/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:disks/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
          "iamActions": [
            {
              "name": "vps:apiovh:disks/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.Disk",
              "description": "Request Body",
              "fullType": "vps.Disk",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return many statistics about the disk for a given period",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:disks/monitoring/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
          "responseType": "complexType.UnitAndValues_vps.VpsTimestampValue"
        }
      ],
      "path": "/vps/{serviceName}/disks/{id}/monitoring"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return many statistics about the disk at that time",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:disks/use/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
          "responseType": "complexType.UnitAndValue_double"
        }
      ],
      "path": "/vps/{serviceName}/disks/{id}/use"
    },
    {
      "description": "",
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
              "name": "vps:apiovh:distribution/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available softwares for this template Id",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:distribution/software/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:distribution/software/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Software ID",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return the VPS console URL",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vps:apiovh:getConsoleUrl",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Images available for this virtual server",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:images/available/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:images/available/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Id",
              "fullType": "string",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:images/current/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the countries you can select for your IPs geolocation",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:ipCountryAvailable/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Ips associated to this virtual server",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:ips/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Release a given Ip (Additional Ip)",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "vps:apiovh:ips/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "Ip address",
              "fullType": "ip",
              "name": "ipAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
              "name": "vps:apiovh:ips/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "Ip address",
              "fullType": "ip",
              "name": "ipAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
          "iamActions": [
            {
              "name": "vps:apiovh:ips/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.Ip",
              "description": "Request Body",
              "fullType": "vps.Ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "Ip address",
              "fullType": "ip",
              "name": "ipAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-05-01T00:00:00Z",
            "deprecatedDate": "2022-04-01T00:00:00Z",
            "description": "Deprecated, will be removed",
            "replacement": "/1.0/vps/{serviceName}/migration2018",
            "value": "DEPRECATED"
          },
          "description": "Get information on a possible migration of a VPS 2016 to VPS 2020",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:migration2016/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.migration.VPS2016to2020"
        },
        {
          "apiStatus": {
            "deletionDate": "2022-05-01T00:00:00Z",
            "deprecatedDate": "2022-04-01T00:00:00Z",
            "description": "Deprecated, will be removed",
            "replacement": "/1.0/vps/{serviceName}/migration2018",
            "value": "DEPRECATED"
          },
          "description": "Schedule the migration of a VPS 2016 to VPS 2020",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vps:apiovh:migration2016/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Task"
        }
      ],
      "path": "/vps/{serviceName}/migration2016"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get information on a possible migration of a VPS 2016/2018 to VPS 2020",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:migration2018/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.migration.VPS2018to2020"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Schedule the migration of a VPS 2016/2018 to VPS 2020",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vps:apiovh:migration2018/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.migration2018.post",
              "description": "Request Body",
              "fullType": "vps.migration2018.post",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Task"
        }
      ],
      "path": "/vps/{serviceName}/migration2018"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return all models for the range of the virtual server",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:models/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return many statistics about the virtual machine for a given period",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:monitoring/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
          "responseType": "complexType.UnitAndValues_vps.VpsTimestampValue"
        }
      ],
      "path": "/vps/{serviceName}/monitoring"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return the necessary informations to open a VNC connection to your VPS",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vps:apiovh:openConsoleAccess",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.openConsoleAccess.post",
              "description": "Request Body",
              "fullType": "vps.openConsoleAccess.post",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of VPS options",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:option/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2024-06-01T00:00:00Z",
            "deprecatedDate": "2023-12-22T00:00:00Z",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Release a given option",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "vps:apiovh:option/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.VpsOptionEnum",
              "description": "Option",
              "fullType": "vps.VpsOptionEnum",
              "name": "option",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
          "iamActions": [
            {
              "name": "vps:apiovh:option/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.VpsOptionEnum",
              "description": "Option",
              "fullType": "vps.VpsOptionEnum",
              "name": "option",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request a reboot of the machine",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vps:apiovh:reboot",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Reinstall the virtual server",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vps:apiovh:rebuild",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.rebuild.post",
              "description": "Request Body",
              "fullType": "vps.rebuild.post",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reinstall the virtual server",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vps:apiovh:reinstall",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.reinstall.post",
              "description": "Request Body",
              "fullType": "vps.reinstall.post",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:secondaryDnsDomains/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
              "name": "vps:apiovh:secondaryDnsDomains/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.secondaryDnsDomains.post",
              "description": "Request Body",
              "fullType": "vps.secondaryDnsDomains.post",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:secondaryDnsDomains/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
              "name": "vps:apiovh:secondaryDnsDomains/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
              "name": "vps:apiovh:secondaryDnsDomains/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "secondaryDns.SecondaryDNS",
              "description": "Request Body",
              "fullType": "secondaryDns.SecondaryDNS",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:secondaryDnsDomains/dnsServer/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:secondaryDnsNameServerAvailable/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:serviceInfos/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
              "name": "vps:apiovh:serviceInfos/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "services.Service",
              "description": "Request Body",
              "fullType": "services.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Start the process in order to set the root password of the virtual machine",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vps:apiovh:setPassword",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Creates a vps.Task that will delete the Snapshot",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "vps:apiovh:snapshot/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
          "iamActions": [
            {
              "name": "vps:apiovh:snapshot/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
          "iamActions": [
            {
              "name": "vps:apiovh:snapshot/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.Snapshot",
              "description": "Request Body",
              "fullType": "vps.Snapshot",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Download the snapshot",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:snapshot/download/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.DownloadSnapshotURL"
        }
      ],
      "path": "/vps/{serviceName}/snapshot/download"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Revert the Virtual Server to this snapshot",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vps:apiovh:snapshot/revert",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request the machine to start",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vps:apiovh:start",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2024-01-07T00:00:00Z",
            "deprecatedDate": "2023-11-07T00:00:00Z",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Return monitoring statistics about the virtual machine",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:statistics/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.VpsMonitoringStatistics"
        }
      ],
      "path": "/vps/{serviceName}/statistics"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Give the status of the services of the main IP",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:status/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request the machine to stop",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vps:apiovh:stop",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Tasks associated to this virtual server",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:tasks/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:tasks/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Templates available for this virtual server",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:templates/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:templates/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available softwares for this template Id",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:templates/software/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:templates/software/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Software ID",
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
      "description": "",
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
              "name": "vps:apiovh:terminate",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-10-01T00:00:00Z",
            "deprecatedDate": "2023-07-31T00:00:00Z",
            "description": "Deprecated, will be removed",
            "replacement": "/1.0/vps/{serviceName}/monitoring",
            "value": "DEPRECATED"
          },
          "description": "Return many statistics about the virtual machine at that time",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:use/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
          "responseType": "complexType.UnitAndValue_double"
        }
      ],
      "path": "/vps/{serviceName}/use"
    },
    {
      "description": "",
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
              "name": "vps:apiovh:veeam/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Creates a VPS.Task that will unmount the backup",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "vps:apiovh:veeam/restoredBackup/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
          "iamActions": [
            {
              "name": "vps:apiovh:veeam/restoredBackup/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Veeam restore points for the VPS",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "vps:apiovh:veeam/restorePoints/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "name": "vps:apiovh:veeam/restorePoints/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Creates a VPS.Task that will restore the given restorePoint",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "vps:apiovh:veeam/restorePoints/restore",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.veeam.restorePoints.restore.post",
              "description": "Request Body",
              "fullType": "vps.veeam.restorePoints.restore.post",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "",
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
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/vps/datacenter"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List datacenters with priority and stock status",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "VPS OS selection in order api",
              "fullType": "string",
              "name": "os",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary to sort datacenters",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "VPS plan code from order api",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "vps.order.rule.Datacenters"
        }
      ],
      "path": "/vps/order/rule/datacenter"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List OS choices with status",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "VPS datacenter",
              "fullType": "string",
              "name": "datacenter",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "VPS OS selection in order api",
              "fullType": "string",
              "name": "os",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "vps.order.rule.OSChoices"
        }
      ],
      "path": "/vps/order/rule/osChoices"
    }
  ],
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "complexType.SafeKeyValueCanBeNull_string": {
      "description": "complexType.SafeKeyValueCanBeNull_string",
      "id": "SafeKeyValueCanBeNull_string",
      "namespace": "complexType",
      "properties": {
        "key": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "complexType.UnitAndValue_double": {
      "description": "complexType.UnitAndValue_double",
      "id": "UnitAndValue_double",
      "namespace": "complexType",
      "properties": {
        "unit": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "complexType.UnitAndValue_long": {
      "description": "complexType.UnitAndValue_long",
      "id": "UnitAndValue_long",
      "namespace": "complexType",
      "properties": {
        "unit": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "complexType.UnitAndValues_vps.VpsTimestampValue": {
      "description": "complexType.UnitAndValues_vps.VpsTimestampValue",
      "id": "VpsTimestampValue",
      "namespace": "complexType.UnitAndValues_vps",
      "properties": {
        "unit": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "values": {
          "canBeNull": false,
          "fullType": "vps.VpsTimestampValue[]",
          "readOnly": true,
          "required": false,
          "type": "vps.VpsTimestampValue[]"
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
          "fullType": "complexType.SafeKeyValueCanBeNull_string[]",
          "readOnly": true,
          "required": false,
          "type": "complexType.SafeKeyValueCanBeNull_string[]"
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
    "nichandle.OvhSubsidiaryEnum": {
      "description": "OVH subsidiaries",
      "enum": [
        "ASIA",
        "AU",
        "CA",
        "IN",
        "QC",
        "SG",
        "WE",
        "WS"
      ],
      "enumType": "string",
      "id": "OvhSubsidiaryEnum",
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
          "description": "IPv4 address (e.g., 192.0.2.0)",
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "description": "IPv4 address (e.g., 192.0.2.0)",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "ipv6": {
          "canBeNull": true,
          "fullType": "ipv6",
          "readOnly": true,
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
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "The service will be deleted at expiration",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "forced": {
          "canBeNull": false,
          "description": "The service forced to be renewed",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "manualPayment": {
          "canBeNull": true,
          "description": "The service needs to be manually renewed and paid",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "period": {
          "canBeNull": true,
          "description": "period of renew in month",
          "fullType": "long",
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
      "description": "service.StateEnum",
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "contactBilling": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "contactTech": {
          "canBeNull": false,
          "fullType": "string",
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
          "fullType": "long",
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
          "fullType": "complexType.UnitAndValue_long",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue_long"
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
          "fullType": "complexType.UnitAndValue_long",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue_long"
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
        "serviceName": {
          "canBeNull": true,
          "description": "Service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
    "vps.DownloadSnapshotURL": {
      "description": "URL to download the VPS snapshot",
      "id": "DownloadSnapshotURL",
      "namespace": "vps",
      "properties": {
        "size": {
          "canBeNull": false,
          "description": "Snapshot size (bytes)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "url": {
          "canBeNull": false,
          "description": "URL to download the snapshot",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
          "fullType": "vps.VpsOptionEnum[]",
          "readOnly": false,
          "required": false,
          "type": "vps.VpsOptionEnum[]"
        },
        "datacenter": {
          "canBeNull": false,
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "disk": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "maximumAdditionnalIp": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "memory": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "offer": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "vcore": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "version": {
          "canBeNull": false,
          "description": "All versions that VPS can have",
          "fullType": "vps.VpsVersionEnum",
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
        },
        "id": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
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
        "rescheduleAutoBackup",
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
        32,
        64
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
          "description": "All values a VPS netboot mode can be in",
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
    "vps.VPSWithIAM": {
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
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
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
          "description": "All values a VPS netboot mode can be in",
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "password": {
          "canBeNull": false,
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        },
        "port": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
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
          "fullType": "long",
          "readOnly": true,
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
    "vps.VpsMonitoringStatistics": {
      "description": "Statistics about resource usage",
      "id": "VpsMonitoringStatistics",
      "namespace": "vps",
      "properties": {
        "cpu": {
          "canBeNull": false,
          "description": "Average CPU usage in percentage over the last 24 hours",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "disk": {
          "canBeNull": false,
          "description": "Current disk usage in percentage",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "memory": {
          "canBeNull": false,
          "description": "Average memory usage in percentage over the last 24 hours",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
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
        "backuping",
        "installing",
        "maintenance",
        "rebooting",
        "rescued",
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
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "value": {
          "canBeNull": true,
          "fullType": "double",
          "readOnly": true,
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
          "description": "A structure describing a backup's access informations",
          "fullType": "vps.automatedBackup.attached.Infos",
          "readOnly": true,
          "required": false,
          "type": "vps.automatedBackup.attached.Infos"
        },
        "restorePoint": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nfs": {
          "canBeNull": true,
          "description": "NFS URL of the backup",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "smb": {
          "canBeNull": true,
          "description": "SMB URL of the backup",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vps.automatedBackup.detachBackup.post": {
      "description": "vps.automatedBackup.detachBackup.post",
      "id": "post",
      "namespace": "vps.automatedBackup.detachBackup",
      "properties": {
        "restorePoint": {
          "canBeNull": false,
          "description": "restorePoint fetched in /vps/{serviceName}/automatedBackup/attachedBackup",
          "fullType": "datetime",
          "readOnly": false,
          "required": true,
          "type": "datetime"
        }
      }
    },
    "vps.automatedBackup.reschedule.post": {
      "description": "vps.automatedBackup.reschedule.post",
      "id": "post",
      "namespace": "vps.automatedBackup.reschedule",
      "properties": {
        "schedule": {
          "canBeNull": false,
          "description": "Time (e.g., 15:04:05)",
          "fullType": "time",
          "readOnly": false,
          "required": true,
          "type": "time"
        }
      }
    },
    "vps.automatedBackup.restore.post": {
      "description": "vps.automatedBackup.restore.post",
      "id": "post",
      "namespace": "vps.automatedBackup.restore",
      "properties": {
        "changePassword": {
          "canBeNull": false,
          "description": "Only with restore full on VPS Cloud 2014",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "restorePoint": {
          "canBeNull": false,
          "description": "Restore Point fetched in /automatedBackup/restorePoints",
          "fullType": "datetime",
          "readOnly": false,
          "required": true,
          "type": "datetime"
        },
        "type": {
          "canBeNull": false,
          "description": "Available restore types",
          "fullType": "vps.RestoreTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "vps.RestoreTypeEnum"
        }
      }
    },
    "vps.backupftp.access.post": {
      "description": "vps.backupftp.access.post",
      "id": "post",
      "namespace": "vps.backupftp.access",
      "properties": {
        "cifs": {
          "canBeNull": false,
          "description": "Whether to allow the CIFS (SMB) protocol for this ACL",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
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
          "description": "IP CIDR notation (e.g., 192.0.2.0/24)",
          "fullType": "ipBlock",
          "readOnly": false,
          "required": true,
          "type": "ipBlock"
        },
        "nfs": {
          "canBeNull": false,
          "description": "Whether to allow the NFS protocol for this ACL",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        }
      }
    },
    "vps.changeContact.post": {
      "description": "vps.changeContact.post",
      "id": "post",
      "namespace": "vps.changeContact",
      "properties": {
        "contactAdmin": {
          "canBeNull": false,
          "description": "The contact to set as admin contact",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "contactBilling": {
          "canBeNull": false,
          "description": "The contact to set as billing contact",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "contactTech": {
          "canBeNull": false,
          "description": "The contact to set as tech contact",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "vps.confirmTermination.post": {
      "description": "vps.confirmTermination.post",
      "id": "post",
      "namespace": "vps.confirmTermination",
      "properties": {
        "commentary": {
          "canBeNull": false,
          "description": "Commentary about your termination request",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "futureUse": {
          "canBeNull": false,
          "description": "All future uses you can provide for a service termination",
          "fullType": "service.TerminationFutureUseEnum",
          "readOnly": false,
          "required": false,
          "type": "service.TerminationFutureUseEnum"
        },
        "reason": {
          "canBeNull": false,
          "description": "All reasons you can provide for a service termination",
          "fullType": "service.TerminationReasonEnum",
          "readOnly": false,
          "required": false,
          "type": "service.TerminationReasonEnum"
        },
        "token": {
          "canBeNull": false,
          "description": "The termination token sent by email to the admin contact",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "vps.createSnapshot.post": {
      "description": "vps.createSnapshot.post",
      "id": "post",
      "namespace": "vps.createSnapshot",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "A textual description for your snapshot",
          "fullType": "string",
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
      "enumType": "string",
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
          "description": "Port and state of a service on an IP",
          "fullType": "vps.ip.ServiceStatusService",
          "readOnly": true,
          "required": false,
          "type": "vps.ip.ServiceStatusService"
        },
        "http": {
          "canBeNull": false,
          "description": "Port and state of a service on an IP",
          "fullType": "vps.ip.ServiceStatusService",
          "readOnly": true,
          "required": false,
          "type": "vps.ip.ServiceStatusService"
        },
        "https": {
          "canBeNull": false,
          "description": "Port and state of a service on an IP",
          "fullType": "vps.ip.ServiceStatusService",
          "readOnly": true,
          "required": false,
          "type": "vps.ip.ServiceStatusService"
        },
        "ping": {
          "canBeNull": false,
          "description": "Possible states of a service (ping, port)",
          "fullType": "vps.ip.ServiceStatusStateEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.ip.ServiceStatusStateEnum"
        },
        "smtp": {
          "canBeNull": false,
          "description": "Port and state of a service on an IP",
          "fullType": "vps.ip.ServiceStatusService",
          "readOnly": true,
          "required": false,
          "type": "vps.ip.ServiceStatusService"
        },
        "ssh": {
          "canBeNull": false,
          "description": "Port and state of a service on an IP",
          "fullType": "vps.ip.ServiceStatusService",
          "readOnly": true,
          "required": false,
          "type": "vps.ip.ServiceStatusService"
        },
        "tools": {
          "canBeNull": true,
          "fullType": "vps.ip.ServiceStatusStateEnum",
          "readOnly": true,
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
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "Possible states of a service (ping, port)",
          "fullType": "vps.ip.ServiceStatusStateEnum",
          "readOnly": true,
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
    "vps.migration.DatacenterEnum": {
      "description": "All datacenter of vps migration",
      "enum": [
        "BHS",
        "DE",
        "GRA",
        "SBG",
        "SGP",
        "SYD",
        "UK",
        "WAW"
      ],
      "enumType": "string",
      "id": "DatacenterEnum",
      "namespace": "vps.migration"
    },
    "vps.migration.OptionMapping2016": {
      "description": "Mapping between a VPS 2016 option code and a VPS 2020 option code",
      "id": "OptionMapping2016",
      "namespace": "vps.migration",
      "properties": {
        "currentPlan": {
          "canBeNull": false,
          "description": "VPS option current plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "newPlan": {
          "canBeNull": false,
          "description": "New VPS option plan code after migration",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "options": {
          "canBeNull": false,
          "description": "Mapping of VPS options of option from VPS 2016 to VPS 2020",
          "fullType": "vps.migration.OptionOptionMapping2016[]",
          "readOnly": true,
          "required": false,
          "type": "vps.migration.OptionOptionMapping2016[]"
        },
        "product": {
          "canBeNull": false,
          "description": "VPS option product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vps.migration.OptionOptionMapping2016": {
      "description": "Mapping between a VPS 2016 option code and a VPS 2020 option code",
      "id": "OptionOptionMapping2016",
      "namespace": "vps.migration",
      "properties": {
        "currentPlan": {
          "canBeNull": false,
          "description": "VPS option current plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "newPlan": {
          "canBeNull": false,
          "description": "New VPS option plan code after migration",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "product": {
          "canBeNull": false,
          "description": "VPS option product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vps.migration.StatusEnum": {
      "description": "All status a migration task can be in",
      "enum": [
        "available",
        "notAvailable",
        "ongoing",
        "planned",
        "toPlan"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "vps.migration"
    },
    "vps.migration.VPS2016to2020": {
      "description": "A structure describing a migration from VPS 2016 to VPS 2020",
      "id": "VPS2016to2020",
      "namespace": "vps.migration",
      "properties": {
        "currentPlan": {
          "canBeNull": false,
          "description": "VPS current plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "datacenter": {
          "canBeNull": false,
          "description": "All datacenter of vps migration",
          "fullType": "vps.migration.DatacenterEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.migration.DatacenterEnum"
        },
        "date": {
          "canBeNull": true,
          "description": "Migration start date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "newPlan": {
          "canBeNull": false,
          "description": "New VPS plan code after migration",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "options": {
          "canBeNull": false,
          "description": "Mapping of VPS options from VPS 2016 to VPS 2020",
          "fullType": "vps.migration.OptionMapping2016[]",
          "readOnly": true,
          "required": false,
          "type": "vps.migration.OptionMapping2016[]"
        },
        "product": {
          "canBeNull": false,
          "description": "VPS product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "All status a migration task can be in",
          "fullType": "vps.migration.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.migration.StatusEnum"
        }
      }
    },
    "vps.migration.VPS2018to2020": {
      "description": "A structure describing a migration from VPS 2016/2018 to VPS 2020",
      "id": "VPS2018to2020",
      "namespace": "vps.migration",
      "properties": {
        "datacenter": {
          "canBeNull": false,
          "description": "All datacenter of vps migration",
          "fullType": "vps.migration.DatacenterEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.migration.DatacenterEnum"
        },
        "date": {
          "canBeNull": true,
          "description": "Migration start date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "plans": {
          "canBeNull": false,
          "description": "List of available plans to migrate",
          "fullType": "vps.migration.VPS2018to2020Plan[]",
          "readOnly": true,
          "required": false,
          "type": "vps.migration.VPS2018to2020Plan[]"
        },
        "status": {
          "canBeNull": false,
          "description": "All status a migration task can be in",
          "fullType": "vps.migration.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.migration.StatusEnum"
        }
      }
    },
    "vps.migration.VPS2018to2020Plan": {
      "description": "A structure describing a migration plan from VPS 2016/2018 to VPS 2020",
      "id": "VPS2018to2020Plan",
      "namespace": "vps.migration",
      "properties": {
        "currentPlan": {
          "canBeNull": false,
          "description": "VPS current plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "newPlan": {
          "canBeNull": false,
          "description": "New VPS plan code after migration",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "options": {
          "canBeNull": false,
          "description": "Mapping of VPS options from VPS 2016 to VPS 2020",
          "fullType": "vps.migration.OptionMapping2016[]",
          "readOnly": true,
          "required": false,
          "type": "vps.migration.OptionMapping2016[]"
        },
        "product": {
          "canBeNull": false,
          "description": "VPS product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "vps.migration2018.post": {
      "description": "vps.migration2018.post",
      "id": "post",
      "namespace": "vps.migration2018",
      "properties": {
        "newPlan": {
          "canBeNull": false,
          "description": "Choosen plan for migration",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "vps.openConsoleAccess.post": {
      "description": "vps.openConsoleAccess.post",
      "id": "post",
      "namespace": "vps.openConsoleAccess",
      "properties": {
        "protocol": {
          "canBeNull": false,
          "description": "All supported VNC protocols by VPS",
          "fullType": "vps.VncProtocolEnum",
          "readOnly": false,
          "required": false,
          "type": "vps.VncProtocolEnum"
        }
      }
    },
    "vps.order.rule.Datacenter": {
      "description": "Datacenter rules",
      "id": "Datacenter",
      "namespace": "vps.order.rule",
      "properties": {
        "datacenter": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "fullType": "vps.order.rule.DatacenterStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.order.rule.DatacenterStatusEnum"
        }
      }
    },
    "vps.order.rule.DatacenterStatusEnum": {
      "description": "Possible values for datacenter status",
      "enum": [
        "available",
        "out-of-stock"
      ],
      "enumType": "string",
      "id": "DatacenterStatusEnum",
      "namespace": "vps.order.rule"
    },
    "vps.order.rule.Datacenters": {
      "description": "Datacenters rules",
      "id": "Datacenters",
      "namespace": "vps.order.rule",
      "properties": {
        "datacenters": {
          "canBeNull": false,
          "fullType": "vps.order.rule.Datacenter[]",
          "readOnly": true,
          "required": false,
          "type": "vps.order.rule.Datacenter[]"
        }
      }
    },
    "vps.order.rule.OSChoice": {
      "description": "OS choice rules",
      "id": "OSChoice",
      "namespace": "vps.order.rule",
      "properties": {
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "fullType": "vps.order.rule.OSChoiceStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "vps.order.rule.OSChoiceStatusEnum"
        }
      }
    },
    "vps.order.rule.OSChoiceStatusEnum": {
      "description": "Possible values for OS choice status",
      "enum": [
        "available",
        "checked-by-default",
        "unavailable"
      ],
      "enumType": "string",
      "id": "OSChoiceStatusEnum",
      "namespace": "vps.order.rule"
    },
    "vps.order.rule.OSChoices": {
      "description": "OS choices rules",
      "id": "OSChoices",
      "namespace": "vps.order.rule",
      "properties": {
        "choices": {
          "canBeNull": false,
          "fullType": "vps.order.rule.OSChoice[]",
          "readOnly": true,
          "required": false,
          "type": "vps.order.rule.OSChoice[]"
        }
      }
    },
    "vps.rebuild.post": {
      "description": "vps.rebuild.post",
      "id": "post",
      "namespace": "vps.rebuild",
      "properties": {
        "doNotSendPassword": {
          "canBeNull": false,
          "description": "If asked, the installation password will NOT be sent (only if sshKey defined)",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "imageId": {
          "canBeNull": false,
          "description": "Id of the vps.Image fetched in /images list",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "installRTM": {
          "canBeNull": false,
          "description": "If asked, RTM will be installed on your VPS",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "publicSshKey": {
          "canBeNull": false,
          "description": "Public SSH key to pre-install on your VPS",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "sshKey": {
          "canBeNull": false,
          "description": "SSH key name to pre-install on your VPS (name from /me/sshKey)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "vps.reinstall.post": {
      "description": "vps.reinstall.post",
      "id": "post",
      "namespace": "vps.reinstall",
      "properties": {
        "doNotSendPassword": {
          "canBeNull": false,
          "description": "If asked, the installation password will NOT be sent (only if sshKey defined)",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "language": {
          "canBeNull": false,
          "description": "Distribution language. default : en",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "publicSshKey": {
          "canBeNull": false,
          "description": "Public SSH key to pre-install on your VPS",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "softwareId": {
          "canBeNull": false,
          "description": "Id of the vps.Software type fetched in /template/{id}/software",
          "fullType": "long[]",
          "readOnly": false,
          "required": false,
          "type": "long[]"
        },
        "sshKey": {
          "canBeNull": false,
          "description": "SSH key names to pre-install on your VPS (name from /me/sshKey)",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "templateId": {
          "canBeNull": false,
          "description": "Id of the vps.Template fetched in /templates list",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "vps.secondaryDnsDomains.post": {
      "description": "vps.secondaryDnsDomains.post",
      "id": "post",
      "namespace": "vps.secondaryDnsDomains",
      "properties": {
        "domain": {
          "canBeNull": false,
          "description": "The domain to add",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "description": "IPv4 address (e.g., 192.0.2.0)",
          "fullType": "ipv4",
          "readOnly": false,
          "required": false,
          "type": "ipv4"
        }
      }
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "smb": {
          "canBeNull": false,
          "description": "SMB URL of the backup",
          "fullType": "string",
          "readOnly": true,
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
    },
    "vps.veeam.restorePoints.restore.post": {
      "description": "vps.veeam.restorePoints.restore.post",
      "id": "post",
      "namespace": "vps.veeam.restorePoints.restore",
      "properties": {
        "changePassword": {
          "canBeNull": false,
          "description": "(Full only) Change the restored VPS root password when done",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "export": {
          "canBeNull": false,
          "description": "A structure describing a Veeam backup's export options",
          "fullType": "vps.veeam.ExportTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "vps.veeam.ExportTypeEnum"
        },
        "full": {
          "canBeNull": false,
          "description": "Replace your current VPS by the restorePoint",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        }
      }
    }
  },
  "resourcePath": "/vps"
}