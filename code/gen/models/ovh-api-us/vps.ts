import {Schema} from '../../src/schema';

// imported from https://api.us.ovhcloud.com:443/1.0/vps.json

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "description": "Operations about the PUBLICCLOUD service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
            },
            {
              "dataType": "string",
              "description": "VPS OS selection in order api",
              "fullType": "string",
              "name": "os",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "vps.order.rule.Datacenters"
        }
      ],
      "path": "/vps/order/rule/datacenter"
    },
    {
      "description": "VPS Virtual Machine",
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
              "description": "Service name",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
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
      "description": "Backup your VPS",
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
      "description": "attachedBackup operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Backup attached to your VPS",
          "httpMethod": "GET",
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
      "description": "detachBackup operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
      "description": "restore operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Creates a VPS.Task that will restore the given restorePoint",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
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
              "dataType": "boolean",
              "description": "Only with restore full on VPS Cloud 2014",
              "fullType": "boolean",
              "name": "changePassword",
              "paramType": "body",
              "required": false
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
      "description": "restorePoints operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get available Restore Points",
          "httpMethod": "GET",
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
      "description": "Confirm termination of your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Confirm termination of your service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
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
              "description": "Commentary about your termination request",
              "fullType": "string",
              "name": "commentary",
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
      "description": "createSnapshot operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
      "description": "Information about a datacenter of a VPS Virtual Machine",
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
      "description": "List the vps.Disk objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Disks associated to this virtual server",
          "httpMethod": "GET",
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
      "description": "Information about a disk of a VPS Virtual Machine",
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Disk"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
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
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Return many statistics about the disk for a given period",
          "httpMethod": "GET",
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
              "description": "Id",
              "fullType": "long",
              "name": "id",
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
            },
            {
              "dataType": "vps.VpsMonitoringPeriodEnum",
              "description": "The period the statistics are fetched for",
              "fullType": "vps.VpsMonitoringPeriodEnum",
              "name": "period",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Return many statistics about the disk at that time",
          "httpMethod": "GET",
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
              "description": "Id",
              "fullType": "long",
              "name": "id",
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
      "description": "getConsoleUrl operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Return the VPS console URL",
          "httpMethod": "POST",
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Id",
              "fullType": "string",
              "name": "id",
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
      "description": "ipCountryAvailable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get the countries you can select for your IPs geolocation",
          "httpMethod": "GET",
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
      "description": "List the vps.Ip objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Ips associated to this virtual server",
          "httpMethod": "GET",
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
      "description": "Information about an IP address for a VPS Virtual Machine",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Release a given Ip (Additional Ip)",
          "httpMethod": "DELETE",
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
              "dataType": "ip",
              "description": "Ip address",
              "fullType": "ip",
              "name": "ipAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "Ip address",
              "fullType": "ip",
              "name": "ipAddress",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vps.Ip"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
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
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "Ip address",
              "fullType": "ip",
              "name": "ipAddress",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get information on a possible migration of a VPS Cloud 2014 to VPS Cloud 2020",
          "httpMethod": "GET",
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
          "responseType": "vps.migration.Cloud2014to2020"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
      "path": "/vps/{serviceName}/migration2014"
    },
    {
      "description": "monitoring operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Return many statistics about the virtual machine for a given period",
          "httpMethod": "GET",
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
          "responseType": "complexType.UnitAndValues<vps.VpsTimestampValue>"
        }
      ],
      "path": "/vps/{serviceName}/monitoring"
    },
    {
      "description": "List the vps.Option objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List of VPS options",
          "httpMethod": "GET",
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
      "description": "Information about the options of a VPS Virtual Machine",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Release a given option",
          "httpMethod": "DELETE",
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
              "dataType": "vps.VpsOptionEnum",
              "description": "Option",
              "fullType": "vps.VpsOptionEnum",
              "name": "option",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "vps.VpsOptionEnum",
              "description": "Option",
              "fullType": "vps.VpsOptionEnum",
              "name": "option",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Request a reboot of the machine",
          "httpMethod": "POST",
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
              "dataType": "string",
              "description": "SSH key name to pre-install on your VPS (name from /me/sshKey)",
              "fullType": "string",
              "name": "sshKey",
              "paramType": "body",
              "required": false
            },
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
      "description": "List the secondaryDns.SecondaryDNS objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List of secondary dns domain name",
          "httpMethod": "GET",
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
            "description": "Beta version",
            "value": "BETA"
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
      "description": "Secondary dns infos",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "remove this domain",
          "httpMethod": "DELETE",
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
              "dataType": "string",
              "description": "Domain",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "secondaryDns.SecondaryDNS"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain",
              "fullType": "string",
              "name": "domain",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "domain name server informations",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Domain",
              "fullType": "string",
              "name": "domain",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Secondary nameServer available for your Server",
          "httpMethod": "GET",
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
      "description": "Details about a Service",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
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
      "description": "Information about the snapshot of a VPS Virtual Machine",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Creates a vps.Task that will delete the Snapshot",
          "httpMethod": "DELETE",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
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
      "description": "revert operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Revert the Virtual Server to this snapshot",
          "httpMethod": "POST",
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
      "description": "start operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Request the machine to start",
          "httpMethod": "POST",
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
      "description": "stop operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Request the machine to stop",
          "httpMethod": "POST",
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
      "description": "List the vps.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Tasks associated to this virtual server",
          "httpMethod": "GET",
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
              "dataType": "vps.TaskTypeEnum",
              "description": "Filter the value of type property (=)",
              "fullType": "vps.TaskTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "vps.TaskStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "vps.TaskStateEnum",
              "name": "state",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "description": "Id",
              "fullType": "long",
              "name": "id",
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
      "description": "Terminate your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Terminate your service",
          "httpMethod": "POST",
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
    }
  ],
  "basePath": "https://api.us.ovhcloud.com/1.0",
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
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "fullType": "T",
          "readOnly": false,
          "required": true,
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
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "values": {
          "canBeNull": false,
          "fullType": "T[]",
          "readOnly": false,
          "required": true,
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
    "nichandle.OvhSubsidiaryEnum": {
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
          "required": true,
          "type": "datetime"
        },
        "dns": {
          "canBeNull": false,
          "description": "secondary dns server",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "description": "domain on slave server",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "ipMaster": {
          "canBeNull": false,
          "description": "master ip",
          "fullType": "ipv4",
          "readOnly": false,
          "required": true,
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
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "fullType": "ipv4",
          "readOnly": false,
          "required": true,
          "type": "ipv4"
        },
        "ipv6": {
          "canBeNull": true,
          "fullType": "ipv6",
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
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "The service will be deleted at expiration",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "forced": {
          "canBeNull": false,
          "description": "The service forced to be renewed",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
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
          "required": true,
          "type": "boolean"
        },
        "contactAdmin": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.AccountId:string"
        },
        "contactBilling": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.AccountId:string"
        },
        "contactTech": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.AccountId:string"
        },
        "creation": {
          "canBeNull": false,
          "fullType": "date",
          "readOnly": true,
          "required": true,
          "type": "date"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
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
          "required": true,
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
          "required": true,
          "type": "service.RenewalTypeEnum"
        },
        "serviceId": {
          "canBeNull": false,
          "fullType": "coreTypes.ServiceId:long",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.ServiceId:long"
        },
        "status": {
          "canBeNull": false,
          "fullType": "service.StateEnum",
          "readOnly": true,
          "required": true,
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
          "required": true,
          "type": "vps.BackupStateEnum"
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
          "required": true,
          "type": "coreTypes.CountryEnum"
        },
        "longName": {
          "canBeNull": false,
          "description": "Datacenter display name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Datacenter name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
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
          "required": true,
          "type": "long"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
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
          "required": true,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "fullType": "vps.disk.StateEnum",
          "readOnly": true,
          "required": true,
          "type": "vps.disk.StateEnum"
        },
        "type": {
          "canBeNull": false,
          "fullType": "vps.disk.TypeEnum",
          "readOnly": true,
          "required": true,
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
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
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
          "required": true,
          "type": "vps.ip.GeolocationEnum"
        },
        "ipAddress": {
          "canBeNull": false,
          "description": "The effective ip address of the Ip object",
          "fullType": "ip",
          "readOnly": true,
          "required": true,
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
          "required": true,
          "type": "vps.ip.TypeEnum"
        },
        "version": {
          "canBeNull": false,
          "fullType": "coreTypes.IpVersionEnum",
          "readOnly": true,
          "required": true,
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
          "required": true,
          "type": "vps.VpsOptionEnum[]"
        },
        "datacenter": {
          "canBeNull": false,
          "fullType": "string[]",
          "readOnly": false,
          "required": true,
          "type": "string[]"
        },
        "disk": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "maximumAdditionnalIp": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "memory": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "offer": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "vcore": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "version": {
          "canBeNull": false,
          "fullType": "vps.VpsVersionEnum",
          "readOnly": false,
          "required": true,
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
          "required": true,
          "type": "vps.VpsOptionEnum"
        },
        "state": {
          "canBeNull": false,
          "description": "The state of the option",
          "fullType": "vps.VpsOptionStateEnum",
          "readOnly": true,
          "required": true,
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
          "required": true,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
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
          "required": true,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "progress": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "fullType": "vps.TaskStateEnum",
          "readOnly": true,
          "required": true,
          "type": "vps.TaskStateEnum"
        },
        "type": {
          "canBeNull": false,
          "fullType": "vps.TaskTypeEnum",
          "readOnly": true,
          "required": true,
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
    "vps.VPS": {
      "description": "VPS Virtual Machine",
      "id": "VPS",
      "namespace": "vps",
      "properties": {
        "cluster": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
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
          "required": true,
          "type": "long"
        },
        "model": {
          "canBeNull": false,
          "fullType": "vps.Model",
          "readOnly": true,
          "required": true,
          "type": "vps.Model"
        },
        "monitoringIpBlocks": {
          "canBeNull": false,
          "description": "Ip blocks for OVH monitoring servers",
          "fullType": "ipBlock[]",
          "readOnly": true,
          "required": true,
          "type": "ipBlock[]"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "netbootMode": {
          "canBeNull": false,
          "description": "Reboot your VPS 'Cloud' after change, VPS 'Classic/LowLat' will reboot automatically. Credentials for rescue mode will be sent by mail",
          "fullType": "vps.VpsNetbootEnum",
          "readOnly": false,
          "required": true,
          "type": "vps.VpsNetbootEnum"
        },
        "offerType": {
          "canBeNull": false,
          "fullType": "vps.VpsOfferEnum",
          "readOnly": true,
          "required": true,
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
          "required": true,
          "type": "vps.VpsStateEnum"
        },
        "vcore": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "zone": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
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
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "value": {
          "canBeNull": true,
          "fullType": "double",
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
          "fullType": "vps.automatedBackup.attached.Infos",
          "readOnly": false,
          "required": true,
          "type": "vps.automatedBackup.attached.Infos"
        },
        "restorePoint": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": false,
          "required": true,
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "nfs": {
          "canBeNull": true,
          "description": "NFS URL of the backup",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "smb": {
          "canBeNull": true,
          "description": "SMB URL of the backup",
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
      "enumType": "coreTypes.CountryEnum",
      "id": "GeolocationEnum",
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
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "model": {
          "canBeNull": true,
          "description": "VPS 2020 model name and version",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "notAfter": {
          "canBeNull": true,
          "description": "Latest migration date possible",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "notBefore": {
          "canBeNull": true,
          "description": "Earliest migration date possible",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "options": {
          "canBeNull": false,
          "description": "Mapping of VPS options from VPS 2014 to VPS 2020",
          "fullType": "vps.migration.OptionMapping[]",
          "readOnly": false,
          "required": true,
          "type": "vps.migration.OptionMapping[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the migration task",
          "fullType": "vps.migration.StatusEnum",
          "readOnly": false,
          "required": true,
          "type": "vps.migration.StatusEnum"
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
          "fullType": "vps.VpsOptionEnum",
          "readOnly": false,
          "required": true,
          "type": "vps.VpsOptionEnum"
        },
        "vps2020code": {
          "canBeNull": false,
          "description": "VPS 2020 option code",
          "fullType": "string",
          "readOnly": false,
          "required": true,
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
    }
  },
  "resourcePath": "/vps"
}