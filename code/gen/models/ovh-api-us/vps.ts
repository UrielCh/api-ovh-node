import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/vps",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the PUBLICCLOUD service"
    },
    {
      "path": "/vps/order/rule/datacenter",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary to sort datacenters"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "VPS plan code from order api"
            },
            {
              "name": "os",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "VPS OS selection in order api"
            }
          ],
          "responseType": "vps.order.rule.Datacenters",
          "noAuthentication": true,
          "description": "List datacenters with priority and stock status"
        }
      ],
      "description": ""
    },
    {
      "path": "/vps/{serviceName}",
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
          "responseType": "vps.VPS",
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
              "dataType": "vps.VPS",
              "paramType": "body",
              "fullType": "vps.VPS",
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
      "description": "VPS Virtual Machine"
    },
    {
      "path": "/vps/{serviceName}/activeOptions",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2013-11-23T10:00:00+01:00",
            "deprecatedDate": "2013-10-23T10:00:00+01:00",
            "replacement": "/vps/{serviceName}/option"
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
          "responseType": "vps.VpsOptionEnum[]",
          "noAuthentication": false,
          "description": "Return all active options for the virtual server"
        }
      ],
      "description": "activeOptions operations"
    },
    {
      "path": "/vps/{serviceName}/automatedBackup",
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
          "responseType": "vps.AutomatedBackup",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Backup your VPS"
    },
    {
      "path": "/vps/{serviceName}/automatedBackup/attachedBackup",
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
          "responseType": "vps.automatedBackup.Attached[]",
          "noAuthentication": false,
          "description": "Backup attached to your VPS"
        }
      ],
      "description": "attachedBackup operations"
    },
    {
      "path": "/vps/{serviceName}/automatedBackup/detachBackup",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "restorePoint",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": true,
              "description": "restorePoint fetched in /vps/{serviceName}/automatedBackup/attachedBackup"
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
          "responseType": "vps.Task",
          "noAuthentication": false,
          "description": "Create a VPS.Task that will umount a restored backup on your VPS"
        }
      ],
      "description": "detachBackup operations"
    },
    {
      "path": "/vps/{serviceName}/automatedBackup/restore",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "restorePoint",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": true,
              "description": "Restore Point fetched in /automatedBackup/restorePoints"
            },
            {
              "name": "type",
              "dataType": "vps.RestoreTypeEnum",
              "paramType": "body",
              "fullType": "vps.RestoreTypeEnum",
              "required": true,
              "description": "file: Attach/export restored disk to your current VPS - full: Replace your current VPS by the given restorePoint"
            },
            {
              "name": "changePassword",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Only with restore full on VPS Cloud 2014"
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
          "responseType": "vps.Task",
          "noAuthentication": false,
          "description": "Creates a VPS.Task that will restore the given restorePoint"
        }
      ],
      "description": "restore operations"
    },
    {
      "path": "/vps/{serviceName}/automatedBackup/restorePoints",
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
              "name": "state",
              "dataType": "vps.RestoreStateEnum",
              "paramType": "query",
              "fullType": "vps.RestoreStateEnum",
              "required": true,
              "description": "The state of the restore point"
            }
          ],
          "responseType": "datetime[]",
          "noAuthentication": false,
          "description": "Get available Restore Points"
        }
      ],
      "description": "restorePoints operations"
    },
    {
      "path": "/vps/{serviceName}/confirmTermination",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "futureUse",
              "dataType": "service.TerminationFutureUseEnum",
              "paramType": "body",
              "fullType": "service.TerminationFutureUseEnum",
              "required": false,
              "description": "What next after your termination request"
            },
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
      "path": "/vps/{serviceName}/createSnapshot",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "A textual description for your snapshot"
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
          "responseType": "vps.Task",
          "noAuthentication": false,
          "description": "Create a snapshot of the Virtual Server if the snapshot option is enabled and if there is no existing snapshot"
        }
      ],
      "description": "createSnapshot operations"
    },
    {
      "path": "/vps/{serviceName}/datacenter",
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
          "responseType": "vps.Datacenter",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Information about a datacenter of a VPS Virtual Machine"
    },
    {
      "path": "/vps/{serviceName}/disks",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Disks associated to this virtual server"
        }
      ],
      "description": "List the vps.Disk objects"
    },
    {
      "path": "/vps/{serviceName}/disks/{id}",
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "vps.Disk",
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
              "dataType": "vps.Disk",
              "paramType": "body",
              "fullType": "vps.Disk",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
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
      "description": "Information about a disk of a VPS Virtual Machine"
    },
    {
      "path": "/vps/{serviceName}/disks/{id}/monitoring",
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            },
            {
              "name": "period",
              "dataType": "vps.VpsMonitoringPeriodEnum",
              "paramType": "query",
              "fullType": "vps.VpsMonitoringPeriodEnum",
              "required": true,
              "description": "The period the statistics are fetched for"
            },
            {
              "name": "type",
              "dataType": "vps.disk.StatisticTypeEnum",
              "paramType": "query",
              "fullType": "vps.disk.StatisticTypeEnum",
              "required": true,
              "description": "The type of statistic to be fetched"
            }
          ],
          "responseType": "complexType.UnitAndValues<vps.VpsTimestampValue>",
          "noAuthentication": false,
          "description": "Return many statistics about the disk for a given period"
        }
      ],
      "description": "monitoring operations"
    },
    {
      "path": "/vps/{serviceName}/disks/{id}/use",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
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
              "name": "type",
              "dataType": "vps.disk.StatisticTypeEnum",
              "paramType": "query",
              "fullType": "vps.disk.StatisticTypeEnum",
              "required": true,
              "description": "The type of statistic to be fetched"
            }
          ],
          "responseType": "complexType.UnitAndValue<double>",
          "noAuthentication": false,
          "description": "Return many statistics about the disk at that time"
        }
      ],
      "description": "use operations"
    },
    {
      "path": "/vps/{serviceName}/getConsoleUrl",
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
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Return the VPS console URL"
        }
      ],
      "description": "getConsoleUrl operations"
    },
    {
      "path": "/vps/{serviceName}/images/available",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Images available for this virtual server"
        }
      ],
      "description": "List the vps.Image objects"
    },
    {
      "path": "/vps/{serviceName}/images/available/{id}",
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
              "name": "id",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "vps.Image",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Installation image for a VPS"
    },
    {
      "path": "/vps/{serviceName}/images/current",
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
          "responseType": "vps.Image",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Installation image for a VPS"
    },
    {
      "path": "/vps/{serviceName}/ipCountryAvailable",
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
          "responseType": "vps.ip.GeolocationEnum[]",
          "noAuthentication": false,
          "description": "Get the countries you can select for your IPs geolocation"
        }
      ],
      "description": "ipCountryAvailable operations"
    },
    {
      "path": "/vps/{serviceName}/ips",
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
          "responseType": "ip[]",
          "noAuthentication": false,
          "description": "Ips associated to this virtual server"
        }
      ],
      "description": "List the vps.Ip objects"
    },
    {
      "path": "/vps/{serviceName}/ips/{ipAddress}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "ipAddress",
              "dataType": "ip",
              "paramType": "path",
              "fullType": "ip",
              "required": true,
              "description": "Ip address"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Release a given Ip (Additional Ip)"
        },
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
              "name": "ipAddress",
              "dataType": "ip",
              "paramType": "path",
              "fullType": "ip",
              "required": true,
              "description": "Ip address"
            }
          ],
          "responseType": "vps.Ip",
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
              "dataType": "vps.Ip",
              "paramType": "body",
              "fullType": "vps.Ip",
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
              "name": "ipAddress",
              "dataType": "ip",
              "paramType": "path",
              "fullType": "ip",
              "required": true,
              "description": "Ip address"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Information about an IP address for a VPS Virtual Machine"
    },
    {
      "path": "/vps/{serviceName}/migration2014",
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
          "responseType": "vps.migration.Cloud2014to2020",
          "noAuthentication": false,
          "description": "Get information on a possible migration of a VPS Cloud 2014 to VPS Cloud 2020"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "date",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": true,
              "description": "When the migration should start"
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
          "responseType": "vps.Task",
          "noAuthentication": false,
          "description": "Schedule the migration of a VPS Cloud 2014 to VPS Cloud 2020"
        }
      ],
      "description": "migration2014 operations"
    },
    {
      "path": "/vps/{serviceName}/monitoring",
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
              "name": "period",
              "dataType": "vps.VpsMonitoringPeriodEnum",
              "paramType": "query",
              "fullType": "vps.VpsMonitoringPeriodEnum",
              "required": true,
              "description": "The period the statistics are fetched for"
            },
            {
              "name": "type",
              "dataType": "vps.VpsStatisticTypeEnum",
              "paramType": "query",
              "fullType": "vps.VpsStatisticTypeEnum",
              "required": true,
              "description": "The type of statistic to be fetched"
            }
          ],
          "responseType": "complexType.UnitAndValues<vps.VpsTimestampValue>",
          "noAuthentication": false,
          "description": "Return many statistics about the virtual machine for a given period"
        }
      ],
      "description": "monitoring operations"
    },
    {
      "path": "/vps/{serviceName}/option",
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
          "responseType": "vps.VpsOptionEnum[]",
          "noAuthentication": false,
          "description": "List of VPS options"
        }
      ],
      "description": "List the vps.Option objects"
    },
    {
      "path": "/vps/{serviceName}/option/{option}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "dataType": "vps.VpsOptionEnum",
              "paramType": "path",
              "fullType": "vps.VpsOptionEnum",
              "required": true,
              "description": "Option"
            },
            {
              "name": "deleteNow",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Delete option now, don't wait for expiration"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Release a given option"
        },
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
              "name": "option",
              "dataType": "vps.VpsOptionEnum",
              "paramType": "path",
              "fullType": "vps.VpsOptionEnum",
              "required": true,
              "description": "Option"
            }
          ],
          "responseType": "vps.Option",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Information about the options of a VPS Virtual Machine"
    },
    {
      "path": "/vps/{serviceName}/reboot",
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
            }
          ],
          "responseType": "vps.Task",
          "noAuthentication": false,
          "description": "Request a reboot of the machine"
        }
      ],
      "description": "reboot operations"
    },
    {
      "path": "/vps/{serviceName}/rebuild",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "sshKey",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "SSH key name to pre-install on your VPS (name from /me/sshKey)"
            },
            {
              "name": "imageId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Id of the vps.Image fetched in /images list"
            },
            {
              "name": "doNotSendPassword",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "If asked, the installation password will NOT be sent (only if sshKey defined)"
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
          "responseType": "vps.Task",
          "noAuthentication": false,
          "description": "Reinstall the virtual server"
        }
      ],
      "description": "rebuild operations"
    },
    {
      "path": "/vps/{serviceName}/secondaryDnsDomains",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of secondary dns domain name"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The domain to add"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": false,
              "description": ""
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
      "path": "/vps/{serviceName}/secondaryDnsDomains/{domain}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
          "responseType": "secondaryDns.SecondaryDNS",
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
      "path": "/vps/{serviceName}/secondaryDnsDomains/{domain}/dnsServer",
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
      "path": "/vps/{serviceName}/secondaryDnsNameServerAvailable",
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
          "responseType": "secondaryDns.SecondaryDNSNameServer",
          "noAuthentication": false,
          "description": "Secondary nameServer available for your Server"
        }
      ],
      "description": "secondaryDnsNameServerAvailable operations"
    },
    {
      "path": "/vps/{serviceName}/serviceInfos",
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
          "responseType": "services.Service",
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
      "path": "/vps/{serviceName}/snapshot",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "vps.Task",
          "noAuthentication": false,
          "description": "Creates a vps.Task that will delete the Snapshot"
        },
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
          "responseType": "vps.Snapshot",
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
              "dataType": "vps.Snapshot",
              "paramType": "body",
              "fullType": "vps.Snapshot",
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
      "description": "Information about the snapshot of a VPS Virtual Machine"
    },
    {
      "path": "/vps/{serviceName}/snapshot/revert",
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
            }
          ],
          "responseType": "vps.Task",
          "noAuthentication": false,
          "description": "Revert the Virtual Server to this snapshot"
        }
      ],
      "description": "revert operations"
    },
    {
      "path": "/vps/{serviceName}/start",
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
            }
          ],
          "responseType": "vps.Task",
          "noAuthentication": false,
          "description": "Request the machine to start"
        }
      ],
      "description": "start operations"
    },
    {
      "path": "/vps/{serviceName}/stop",
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
            }
          ],
          "responseType": "vps.Task",
          "noAuthentication": false,
          "description": "Request the machine to stop"
        }
      ],
      "description": "stop operations"
    },
    {
      "path": "/vps/{serviceName}/tasks",
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
              "name": "state",
              "dataType": "vps.TaskStateEnum",
              "paramType": "query",
              "fullType": "vps.TaskStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            },
            {
              "name": "type",
              "dataType": "vps.TaskTypeEnum",
              "paramType": "query",
              "fullType": "vps.TaskTypeEnum",
              "required": false,
              "description": "Filter the value of type property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Tasks associated to this virtual server"
        }
      ],
      "description": "List the vps.Task objects"
    },
    {
      "path": "/vps/{serviceName}/tasks/{id}",
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "vps.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Operation on a VPS Virtual Machine"
    },
    {
      "path": "/vps/{serviceName}/terminate",
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
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Terminate your service"
        }
      ],
      "description": "Terminate your service"
    }
  ],
  "resourcePath": "/vps",
  "basePath": "https://api.us.ovhcloud.com/1.0",
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
    "complexType.UnitAndValues<T>": {
      "id": "UnitAndValues",
      "namespace": "complexType",
      "description": "A value set tagged with its unit",
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
        "values": {
          "type": "T[]",
          "fullType": "T[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "coreTypes.CountryEnum": {
      "id": "CountryEnum",
      "namespace": "coreTypes",
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
      "enumType": "string"
    },
    "coreTypes.IpVersionEnum": {
      "id": "IpVersionEnum",
      "namespace": "coreTypes",
      "description": "Ip versions",
      "enum": [
        "v4",
        "v6"
      ],
      "enumType": "string"
    },
    "nichandle.OvhSubsidiaryEnum": {
      "id": "OvhSubsidiaryEnum",
      "namespace": "nichandle",
      "description": "OVH subsidiaries",
      "enum": [
        "CZ",
        "DE",
        "ES",
        "EU",
        "FI",
        "FR",
        "GB",
        "IE",
        "IT",
        "LT",
        "MA",
        "NL",
        "PL",
        "PT",
        "SN",
        "TN",
        "ASIA",
        "AU",
        "CA",
        "QC",
        "SG",
        "WE",
        "WS",
        "US"
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
    "vps.AutomatedBackup": {
      "id": "AutomatedBackup",
      "namespace": "vps",
      "description": "Backup your VPS",
      "properties": {
        "schedule": {
          "type": "time",
          "fullType": "time",
          "canBeNull": true,
          "readOnly": true,
          "description": "Scheduled time of your daily backup",
          "required": false
        },
        "state": {
          "type": "vps.BackupStateEnum",
          "fullType": "vps.BackupStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Backup state",
          "required": true
        }
      }
    },
    "vps.BackupStateEnum": {
      "id": "BackupStateEnum",
      "namespace": "vps",
      "description": "Available AutomatedBackup states",
      "enum": [
        "disabled",
        "enabled"
      ],
      "enumType": "string"
    },
    "vps.Datacenter": {
      "id": "Datacenter",
      "namespace": "vps",
      "description": "Information about a datacenter of a VPS Virtual Machine",
      "properties": {
        "country": {
          "type": "coreTypes.CountryEnum",
          "fullType": "coreTypes.CountryEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Datacenter ISO country code",
          "required": true
        },
        "longName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Datacenter display name",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Datacenter name",
          "required": true
        }
      }
    },
    "vps.Disk": {
      "id": "Disk",
      "namespace": "vps",
      "description": "Information about a disk of a VPS Virtual Machine",
      "properties": {
        "bandwidthLimit": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "lowFreeSpaceThreshold": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "The low disk free space threshold in MiB",
          "required": false
        },
        "monitoring": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "The monitoring state of this disk",
          "required": false
        },
        "size": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "state": {
          "type": "vps.disk.StateEnum",
          "fullType": "vps.disk.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "type": {
          "type": "vps.disk.TypeEnum",
          "fullType": "vps.disk.TypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "vps.Image": {
      "id": "Image",
      "namespace": "vps",
      "description": "Installation image for a VPS",
      "properties": {
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "vps.Ip": {
      "id": "Ip",
      "namespace": "vps",
      "description": "Information about an IP address for a VPS Virtual Machine",
      "properties": {
        "gateway": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "geolocation": {
          "type": "vps.ip.GeolocationEnum",
          "fullType": "vps.ip.GeolocationEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "ipAddress": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": true,
          "description": "The effective ip address of the Ip object",
          "required": true
        },
        "macAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "reverse": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "type": {
          "type": "vps.ip.TypeEnum",
          "fullType": "vps.ip.TypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "version": {
          "type": "coreTypes.IpVersionEnum",
          "fullType": "coreTypes.IpVersionEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "vps.Model": {
      "id": "Model",
      "namespace": "vps",
      "description": "A structure describing characteristics of a VPS model",
      "properties": {
        "availableOptions": {
          "type": "vps.VpsOptionEnum[]",
          "fullType": "vps.VpsOptionEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "datacenter": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "disk": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "maximumAdditionnalIp": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "memory": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "offer": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "vcore": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "version": {
          "type": "vps.VpsVersionEnum",
          "fullType": "vps.VpsVersionEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "vps.Option": {
      "id": "Option",
      "namespace": "vps",
      "description": "Information about the options of a VPS Virtual Machine",
      "properties": {
        "option": {
          "type": "vps.VpsOptionEnum",
          "fullType": "vps.VpsOptionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The option name",
          "required": true
        },
        "state": {
          "type": "vps.VpsOptionStateEnum",
          "fullType": "vps.VpsOptionStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The state of the option",
          "required": true
        }
      }
    },
    "vps.RestoreStateEnum": {
      "id": "RestoreStateEnum",
      "namespace": "vps",
      "description": "Available restore state",
      "enum": [
        "available",
        "restored",
        "restoring"
      ],
      "enumType": "string"
    },
    "vps.RestoreTypeEnum": {
      "id": "RestoreTypeEnum",
      "namespace": "vps",
      "description": "Available restore types",
      "enum": [
        "file",
        "full"
      ],
      "enumType": "string"
    },
    "vps.Snapshot": {
      "id": "Snapshot",
      "namespace": "vps",
      "description": "Information about the snapshot of a VPS Virtual Machine",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "vps.Task": {
      "id": "Task",
      "namespace": "vps",
      "description": "Operation on a VPS Virtual Machine",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "progress": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "state": {
          "type": "vps.TaskStateEnum",
          "fullType": "vps.TaskStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "type": {
          "type": "vps.TaskTypeEnum",
          "fullType": "vps.TaskTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "vps.TaskStateEnum": {
      "id": "TaskStateEnum",
      "namespace": "vps",
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
      "enumType": "string"
    },
    "vps.TaskTypeEnum": {
      "id": "TaskTypeEnum",
      "namespace": "vps",
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
      "enumType": "string"
    },
    "vps.VPS": {
      "id": "VPS",
      "namespace": "vps",
      "description": "VPS Virtual Machine",
      "properties": {
        "cluster": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Set the name displayed in ManagerV6 for your VPS (max 50 chars)",
          "required": false
        },
        "keymap": {
          "type": "vps.VpsKeymapEnum",
          "fullType": "vps.VpsKeymapEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Set KVM keyboard layout on VPS Cloud. Reboot your VPS after change",
          "required": false
        },
        "memoryLimit": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "model": {
          "type": "vps.Model",
          "fullType": "vps.Model",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "monitoringIpBlocks": {
          "type": "ipBlock[]",
          "fullType": "ipBlock[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Ip blocks for OVH monitoring servers",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "netbootMode": {
          "type": "vps.VpsNetbootEnum",
          "fullType": "vps.VpsNetbootEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Reboot your VPS 'Cloud' after change, VPS 'Classic/LowLat' will reboot automatically. Credentials for rescue mode will be sent by mail",
          "required": true
        },
        "offerType": {
          "type": "vps.VpsOfferEnum",
          "fullType": "vps.VpsOfferEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "slaMonitoring": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "state": {
          "type": "vps.VpsStateEnum",
          "fullType": "vps.VpsStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "vcore": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "zone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "vps.VpsKeymapEnum": {
      "id": "VpsKeymapEnum",
      "namespace": "vps",
      "description": "All values keymap can be in",
      "enum": [
        "fr",
        "us"
      ],
      "enumType": "string"
    },
    "vps.VpsMonitoringPeriodEnum": {
      "id": "VpsMonitoringPeriodEnum",
      "namespace": "vps",
      "description": "Available periods for the VPS monitoring",
      "enum": [
        "lastday",
        "lastmonth",
        "lastweek",
        "lastyear",
        "today"
      ],
      "enumType": "string"
    },
    "vps.VpsNetbootEnum": {
      "id": "VpsNetbootEnum",
      "namespace": "vps",
      "description": "All values a VPS netboot mode can be in",
      "enum": [
        "local",
        "rescue"
      ],
      "enumType": "string"
    },
    "vps.VpsOfferEnum": {
      "id": "VpsOfferEnum",
      "namespace": "vps",
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
      "enumType": "string"
    },
    "vps.VpsOptionEnum": {
      "id": "VpsOptionEnum",
      "namespace": "vps",
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
      "enumType": "string"
    },
    "vps.VpsOptionStateEnum": {
      "id": "VpsOptionStateEnum",
      "namespace": "vps",
      "description": "All states a VPS Option can be in",
      "enum": [
        "released",
        "subscribed"
      ],
      "enumType": "string"
    },
    "vps.VpsStateEnum": {
      "id": "VpsStateEnum",
      "namespace": "vps",
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
      "enumType": "string"
    },
    "vps.VpsStatisticTypeEnum": {
      "id": "VpsStatisticTypeEnum",
      "namespace": "vps",
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
      "enumType": "string"
    },
    "vps.VpsTimestampValue": {
      "id": "VpsTimestampValue",
      "namespace": "vps",
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
    "vps.VpsVersionEnum": {
      "id": "VpsVersionEnum",
      "namespace": "vps",
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
      "enumType": "string"
    },
    "vps.automatedBackup.Attached": {
      "id": "Attached",
      "namespace": "vps.automatedBackup",
      "description": "A backup attached to your VPS",
      "properties": {
        "access": {
          "type": "vps.automatedBackup.attached.Infos",
          "fullType": "vps.automatedBackup.attached.Infos",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "restorePoint": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "vps.automatedBackup.attached.Infos": {
      "id": "Infos",
      "namespace": "vps.automatedBackup.attached",
      "description": "A structure describing a backup's access informations",
      "properties": {
        "additionalDisk": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Additional Disk details",
          "required": false
        },
        "nfs": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "NFS URL of the backup",
          "required": false
        },
        "smb": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "SMB URL of the backup",
          "required": false
        }
      }
    },
    "vps.disk.StateEnum": {
      "id": "StateEnum",
      "namespace": "vps.disk",
      "description": "Possible states the disk can be in",
      "enum": [
        "connected",
        "disconnected",
        "pending"
      ],
      "enumType": "string"
    },
    "vps.disk.StatisticTypeEnum": {
      "id": "StatisticTypeEnum",
      "namespace": "vps.disk",
      "description": "Available types for the Disk monitoring and use",
      "enum": [
        "max",
        "used"
      ],
      "enumType": "string"
    },
    "vps.disk.TypeEnum": {
      "id": "TypeEnum",
      "namespace": "vps.disk",
      "description": "Possible type a disk can be in",
      "enum": [
        "additional",
        "primary"
      ],
      "enumType": "string"
    },
    "vps.ip.GeolocationEnum": {
      "id": "GeolocationEnum",
      "namespace": "vps.ip",
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
      "enumType": "coreTypes.CountryEnum"
    },
    "vps.ip.TypeEnum": {
      "id": "TypeEnum",
      "namespace": "vps.ip",
      "description": "Ip types on a VPS",
      "enum": [
        "additional",
        "primary"
      ],
      "enumType": "string"
    },
    "vps.migration.Cloud2014to2020": {
      "id": "Cloud2014to2020",
      "namespace": "vps.migration",
      "description": "A structure describing a migration from VPS Cloud 2014 to VPS 2020",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Scheduled migration date",
          "required": false
        },
        "model": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "VPS 2020 model name and version",
          "required": false
        },
        "notAfter": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Latest migration date possible",
          "required": false
        },
        "notBefore": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Earliest migration date possible",
          "required": false
        },
        "options": {
          "type": "vps.migration.OptionMapping[]",
          "fullType": "vps.migration.OptionMapping[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Mapping of VPS options from VPS 2014 to VPS 2020",
          "required": true
        },
        "status": {
          "type": "vps.migration.StatusEnum",
          "fullType": "vps.migration.StatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Status of the migration task",
          "required": true
        }
      }
    },
    "vps.migration.OptionMapping": {
      "id": "OptionMapping",
      "namespace": "vps.migration",
      "description": "Mapping between a VPS 2014 option code and a VPS 2020 option code",
      "properties": {
        "vps2014code": {
          "type": "vps.VpsOptionEnum",
          "fullType": "vps.VpsOptionEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "VPS 2014 option code",
          "required": true
        },
        "vps2020code": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "VPS 2020 option code",
          "required": true
        }
      }
    },
    "vps.migration.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "vps.migration",
      "description": "All status a migration task can be in",
      "enum": [
        "notAvailable",
        "planned",
        "toPlan"
      ],
      "enumType": "string"
    },
    "vps.order.rule.Datacenter": {
      "id": "Datacenter",
      "namespace": "vps.order.rule",
      "description": "Datacenter rules",
      "properties": {
        "datacenter": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "status": {
          "type": "vps.order.rule.DatacenterStatusEnum",
          "fullType": "vps.order.rule.DatacenterStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        }
      }
    },
    "vps.order.rule.DatacenterStatusEnum": {
      "id": "DatacenterStatusEnum",
      "namespace": "vps.order.rule",
      "description": "Possible values for datacenter status",
      "enum": [
        "available",
        "out-of-stock"
      ],
      "enumType": "string"
    },
    "vps.order.rule.Datacenters": {
      "id": "Datacenters",
      "namespace": "vps.order.rule",
      "description": "Datacenters rules",
      "properties": {
        "datacenters": {
          "type": "vps.order.rule.Datacenter[]",
          "fullType": "vps.order.rule.Datacenter[]",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        }
      }
    }
  }
}