import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/dedicated/nasha",
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
      "description": "Operations about the STORAGE service"
    },
    {
      "path": "/dedicated/nasha/availabilities",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "dedicated.NasHAAvailabilities[]",
          "noAuthentication": false,
          "description": "Get availabilities of nasha offer"
        }
      ],
      "description": "Get availabilities of nasha offer"
    },
    {
      "path": "/dedicated/nasha/{serviceName}",
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
          "responseType": "dedicated.nasha.Storage",
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
              "dataType": "dedicated.nasha.Storage",
              "paramType": "body",
              "fullType": "dedicated.nasha.Storage",
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
      "description": "Storage nas HA"
    },
    {
      "path": "/dedicated/nasha/{serviceName}/changeContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "contactAdmin",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as admin contact"
            },
            {
              "name": "contactTech",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as tech contact"
            },
            {
              "name": "contactBilling",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as billing contact"
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Launch a contact change procedure"
        }
      ],
      "description": "Change the contacts of this service"
    },
    {
      "path": "/dedicated/nasha/{serviceName}/confirmTermination",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
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
      "path": "/dedicated/nasha/{serviceName}/partition",
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
          "description": "Get partition list"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "protocol",
              "dataType": "dedicated.storage.ProtocolEnum",
              "paramType": "body",
              "fullType": "dedicated.storage.ProtocolEnum",
              "required": true,
              "description": "NFS|CIFS|NFS_CIFS"
            },
            {
              "name": "partitionName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            },
            {
              "name": "size",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Partition size"
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
          "responseType": "dedicated.nasTask.Task",
          "noAuthentication": false,
          "description": "Create a new partition"
        }
      ],
      "description": "List the dedicated.nasha.Partition objects"
    },
    {
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}",
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "noAuthentication": false,
          "description": "Delete this partition"
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            }
          ],
          "responseType": "dedicated.nasha.Partition",
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
              "dataType": "dedicated.nasha.Partition",
              "paramType": "body",
              "fullType": "dedicated.nasha.Partition",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
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
      "description": "Storage zpool partition"
    },
    {
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/access",
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            }
          ],
          "responseType": "ipBlock[]",
          "noAuthentication": false,
          "description": "get ACL for this partition"
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
              "dataType": "ipBlock",
              "paramType": "body",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip or block to add"
            },
            {
              "name": "type",
              "dataType": "dedicated.storage.AclTypeEnum",
              "paramType": "body",
              "fullType": "dedicated.storage.AclTypeEnum",
              "required": false,
              "description": "ACL type"
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "noAuthentication": false,
          "description": "Add a new ACL entry"
        }
      ],
      "description": "List the dedicated.nasha.Access objects"
    },
    {
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            },
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
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
          "responseType": "dedicated.nasTask.Task",
          "noAuthentication": false,
          "description": "Delete an ACL entry"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            }
          ],
          "responseType": "dedicated.nasha.Access",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Define Acl for partition"
    },
    {
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks",
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            }
          ],
          "responseType": "ipBlock[]",
          "noAuthentication": false,
          "description": "Get all RIPE/ARIN blocks that can be used in the ACL"
        }
      ],
      "description": "authorizableBlocks operations"
    },
    {
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps",
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            }
          ],
          "responseType": "ip[]",
          "noAuthentication": false,
          "description": "Get all IPs that can be used in the ACL"
        }
      ],
      "description": "authorizableIps operations"
    },
    {
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot",
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get custom snapshots for this partition"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "expiration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "optional expiration date/time, in iso8601 format"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "the name of the snapshot"
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "noAuthentication": false,
          "description": "Create a new snapshot"
        }
      ],
      "description": "List the dedicated.nasha.customSnap objects"
    },
    {
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}",
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
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
          "responseType": "dedicated.nasTask.Task",
          "noAuthentication": false,
          "description": "Delete a given snapshot"
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
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
          "responseType": "dedicated.nasha.customSnap",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Custom Snapshot"
    },
    {
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/options",
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            }
          ],
          "responseType": "dedicated.nasha.options",
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
              "name": "atime",
              "dataType": "dedicated.storage.AtimeEnum",
              "paramType": "body",
              "fullType": "dedicated.storage.AtimeEnum",
              "required": false,
              "description": "atime setting"
            },
            {
              "name": "recordsize",
              "dataType": "dedicated.storage.RecordSizeEnum",
              "paramType": "body",
              "fullType": "dedicated.storage.RecordSizeEnum",
              "required": false,
              "description": "ZFS recordsize"
            },
            {
              "name": "sync",
              "dataType": "dedicated.storage.SyncEnum",
              "paramType": "body",
              "fullType": "dedicated.storage.SyncEnum",
              "required": false,
              "description": "sync setting"
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "noAuthentication": false,
          "description": "Setup options"
        }
      ],
      "description": "Partition options"
    },
    {
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/quota",
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Get quota for this partition"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "uid",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "the uid to set quota on"
            },
            {
              "name": "size",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "the size to set in MB"
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "noAuthentication": false,
          "description": "Set a new quota"
        }
      ],
      "description": "List the dedicated.nasha.Quota objects"
    },
    {
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}",
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            },
            {
              "name": "uid",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Uid"
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "noAuthentication": false,
          "description": "Delete a given quota"
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            },
            {
              "name": "uid",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Uid"
            }
          ],
          "responseType": "dedicated.nasha.Quota",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Partition Quota"
    },
    {
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot",
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            }
          ],
          "responseType": "dedicated.storage.SnapshotEnum[]",
          "noAuthentication": false,
          "description": "Get scheduled snapshot types for this partition"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "snapshotType",
              "dataType": "dedicated.storage.SnapshotEnum",
              "paramType": "body",
              "fullType": "dedicated.storage.SnapshotEnum",
              "required": true,
              "description": "Snapshot interval to add"
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "noAuthentication": false,
          "description": "Schedule a new snapshot type"
        }
      ],
      "description": "List the dedicated.nasha.Snapshot objects"
    },
    {
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}",
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            },
            {
              "name": "snapshotType",
              "dataType": "dedicated.storage.SnapshotEnum",
              "paramType": "path",
              "fullType": "dedicated.storage.SnapshotEnum",
              "required": true,
              "description": "Snapshot type"
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "noAuthentication": false,
          "description": "Delete a given snapshot"
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            },
            {
              "name": "snapshotType",
              "dataType": "dedicated.storage.SnapshotEnum",
              "paramType": "path",
              "fullType": "dedicated.storage.SnapshotEnum",
              "required": true,
              "description": "Snapshot type"
            }
          ],
          "responseType": "dedicated.nasha.Snapshot",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Partition Snapshot"
    },
    {
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/use",
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            },
            {
              "name": "type",
              "dataType": "dedicated.storage.PartitionUsageTypeEnum",
              "paramType": "query",
              "fullType": "dedicated.storage.PartitionUsageTypeEnum",
              "required": true,
              "description": "The type of statistic to be fetched"
            }
          ],
          "responseType": "complexType.UnitAndValue<double>",
          "noAuthentication": false,
          "description": "Return statistics about the partition"
        }
      ],
      "description": "use operations"
    },
    {
      "path": "/dedicated/nasha/{serviceName}/serviceInfos",
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
      "path": "/dedicated/nasha/{serviceName}/task",
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
              "name": "operation",
              "dataType": "dedicated.storage.TaskFunctionEnum",
              "paramType": "query",
              "fullType": "dedicated.storage.TaskFunctionEnum",
              "required": false,
              "description": "Filter the value of operation property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "View task list"
        }
      ],
      "description": "List the dedicated.nasTask.Task objects"
    },
    {
      "path": "/dedicated/nasha/{serviceName}/task/{taskId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "taskId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Task ID"
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
          "responseType": "dedicated.nasTask.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Storage task"
    },
    {
      "path": "/dedicated/nasha/{serviceName}/terminate",
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
      "path": "/dedicated/nasha/{serviceName}/use",
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
              "dataType": "dedicated.storage.NasUsageTypeEnum",
              "paramType": "query",
              "fullType": "dedicated.storage.NasUsageTypeEnum",
              "required": true,
              "description": "The type of statistic to be fetched"
            }
          ],
          "responseType": "complexType.UnitAndValue<double>",
          "noAuthentication": false,
          "description": "Return statistics about the nas"
        }
      ],
      "description": "use operations"
    },
    {
      "path": "/dedicated/nasha/{serviceName}/vrack",
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
          "responseType": "dedicated.nasTask.Task",
          "noAuthentication": false,
          "description": "Delete the vrack container"
        }
      ],
      "description": "Partition Vrack"
    }
  ],
  "resourcePath": "/dedicated/nasha",
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
    "dedicated.NasHAAvailabilities": {
      "id": "NasHAAvailabilities",
      "namespace": "dedicated",
      "description": "ovh Nas HA offer availabilities",
      "properties": {
        "datacenters": {
          "type": "dedicated.NasHAAvailabilityDatacenter[]",
          "fullType": "dedicated.NasHAAvailabilityDatacenter[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Zone of the DC",
          "required": true
        },
        "offer": {
          "type": "dedicated.NasHAOfferEnum",
          "fullType": "dedicated.NasHAOfferEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the offer",
          "required": true
        }
      }
    },
    "dedicated.NasHAAvailabilityDatacenter": {
      "id": "NasHAAvailabilityDatacenter",
      "namespace": "dedicated",
      "description": "A structure describing the availability of offer for each datacenter",
      "properties": {
        "availability": {
          "type": "dedicated.NasHAAvailabilityEnum",
          "fullType": "dedicated.NasHAAvailabilityEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The availability",
          "required": true
        },
        "datacenter": {
          "type": "dedicated.NasHAZoneEnum",
          "fullType": "dedicated.NasHAZoneEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The code of the datacenter",
          "required": true
        }
      }
    },
    "dedicated.NasHAAvailabilityEnum": {
      "id": "NasHAAvailabilityEnum",
      "namespace": "dedicated",
      "description": "The availability",
      "enum": [
        "1H",
        "240H",
        "24H",
        "72H",
        "unknown"
      ],
      "enumType": "string"
    },
    "dedicated.NasHAOfferEnum": {
      "id": "NasHAOfferEnum",
      "namespace": "dedicated",
      "description": "ovh Nas HA offer",
      "enum": [
        "1200g",
        "13200g",
        "19200g",
        "2400g",
        "26400g",
        "3600g",
        "7200g"
      ],
      "enumType": "string"
    },
    "dedicated.NasHAZoneEnum": {
      "id": "NasHAZoneEnum",
      "namespace": "dedicated",
      "description": "Nas HA localization",
      "enum": [
        "bhs",
        "rbx",
        "sbg"
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
    "dedicated.nasTask.Task": {
      "id": "Task",
      "namespace": "dedicated.nasTask",
      "description": "Storage task",
      "properties": {
        "details": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "information about operation",
          "required": false
        },
        "doneDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "the date when the task finished",
          "required": false
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "last modification of task",
          "required": false
        },
        "operation": {
          "type": "dedicated.storage.TaskFunctionEnum",
          "fullType": "dedicated.storage.TaskFunctionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task type of operation",
          "required": true
        },
        "partitionName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "name of the partition",
          "required": false
        },
        "status": {
          "type": "dedicated.TaskStatusEnum",
          "fullType": "dedicated.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The actual state of the task",
          "required": true
        },
        "storageName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "the name of your service",
          "required": false
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "id of the task",
          "required": true
        },
        "todoDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Insertion of task in the todo",
          "required": false
        }
      }
    },
    "dedicated.nasha.Access": {
      "id": "Access",
      "namespace": "dedicated.nasha",
      "description": "Define Acl for partition",
      "properties": {
        "accessId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "the id of the access",
          "required": true
        },
        "ip": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": true,
          "description": "the ip in root on storage",
          "required": true
        },
        "type": {
          "type": "dedicated.storage.AclTypeEnum",
          "fullType": "dedicated.storage.AclTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "ACL type",
          "required": true
        }
      }
    },
    "dedicated.nasha.Partition": {
      "id": "Partition",
      "namespace": "dedicated.nasha",
      "description": "Storage zpool partition",
      "properties": {
        "partitionCapacity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "percentage of partition space used in %",
          "required": false
        },
        "partitionName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "the given name of partition",
          "required": true
        },
        "protocol": {
          "type": "dedicated.storage.ProtocolEnum",
          "fullType": "dedicated.storage.ProtocolEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "must be nfs cifs or both",
          "required": true
        },
        "size": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Partition size",
          "required": true
        },
        "usedBySnapshots": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "percentage of partition space used by snapshots, in %",
          "required": false
        }
      }
    },
    "dedicated.nasha.Quota": {
      "id": "Quota",
      "namespace": "dedicated.nasha",
      "description": "Partition Quota",
      "properties": {
        "size": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "the size to set in MB",
          "required": true
        },
        "uid": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "the uid to set quota on",
          "required": true
        }
      }
    },
    "dedicated.nasha.Snapshot": {
      "id": "Snapshot",
      "namespace": "dedicated.nasha",
      "description": "Partition Snapshot",
      "properties": {
        "snapshotType": {
          "type": "dedicated.storage.SnapshotEnum",
          "fullType": "dedicated.storage.SnapshotEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "the interval of snapshot",
          "required": true
        }
      }
    },
    "dedicated.nasha.Storage": {
      "id": "Storage",
      "namespace": "dedicated.nasha",
      "description": "Storage nas HA",
      "properties": {
        "canCreatePartition": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "True, if partition creation is allowed on this nas HA",
          "required": true
        },
        "customName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The name you give to the nas",
          "required": false
        },
        "datacenter": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "area of nas",
          "required": false
        },
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "Access ip of nas",
          "required": false
        },
        "monitored": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Send an email to customer if any issue is detected",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The storage service name",
          "required": true
        },
        "zpoolCapacity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "percentage of nas space used in %",
          "required": true
        },
        "zpoolSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "the size of the nas",
          "required": true
        }
      }
    },
    "dedicated.nasha.customSnap": {
      "id": "customSnap",
      "namespace": "dedicated.nasha",
      "description": "Custom Snapshot",
      "properties": {
        "expiration": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "date and time at which snapshot will be automatically destroyed",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "name of the snapshot",
          "required": true
        }
      }
    },
    "dedicated.nasha.options": {
      "id": "options",
      "namespace": "dedicated.nasha",
      "description": "Partition options",
      "properties": {
        "atime": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "atime setting",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "ID",
          "required": true
        },
        "recordsize": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "ZFS recordsize",
          "required": true
        },
        "sync": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "sync setting",
          "required": true
        }
      }
    },
    "dedicated.storage.AclTypeEnum": {
      "id": "AclTypeEnum",
      "namespace": "dedicated.storage",
      "description": "Acl Type",
      "enum": [
        "readonly",
        "readwrite"
      ],
      "enumType": "string"
    },
    "dedicated.storage.AtimeEnum": {
      "id": "AtimeEnum",
      "namespace": "dedicated.storage",
      "description": "Atime values",
      "enum": [
        "off",
        "on"
      ],
      "enumType": "string"
    },
    "dedicated.storage.NasUsageTypeEnum": {
      "id": "NasUsageTypeEnum",
      "namespace": "dedicated.storage",
      "description": "Available types for NAS usage",
      "enum": [
        "size",
        "used",
        "usedbysnapshots"
      ],
      "enumType": "string"
    },
    "dedicated.storage.PartitionUsageTypeEnum": {
      "id": "PartitionUsageTypeEnum",
      "namespace": "dedicated.storage",
      "description": "Available types for NAS partition usage",
      "enum": [
        "size",
        "used",
        "usedbysnapshots"
      ],
      "enumType": "string"
    },
    "dedicated.storage.ProtocolEnum": {
      "id": "ProtocolEnum",
      "namespace": "dedicated.storage",
      "description": "Partition Protocol",
      "enum": [
        "CIFS",
        "NFS",
        "NFS_CIFS"
      ],
      "enumType": "string"
    },
    "dedicated.storage.RecordSizeEnum": {
      "id": "RecordSizeEnum",
      "namespace": "dedicated.storage",
      "description": "Recordsize values",
      "enum": [
        "131072",
        "16384",
        "32768",
        "4096",
        "65536",
        "8192"
      ],
      "enumType": "string"
    },
    "dedicated.storage.SnapshotEnum": {
      "id": "SnapshotEnum",
      "namespace": "dedicated.storage",
      "description": "Partition snapshot allowed ",
      "enum": [
        "day-1",
        "day-2",
        "day-3",
        "day-7",
        "hour-1",
        "hour-6"
      ],
      "enumType": "string"
    },
    "dedicated.storage.SyncEnum": {
      "id": "SyncEnum",
      "namespace": "dedicated.storage",
      "description": "Sync values",
      "enum": [
        "always",
        "disabled",
        "standard"
      ],
      "enumType": "string"
    },
    "dedicated.storage.TaskFunctionEnum": {
      "id": "TaskFunctionEnum",
      "namespace": "dedicated.storage",
      "description": "Distincts task",
      "enum": [
        "backupRecursiveDestroy",
        "clusterLeclercAclUpdate",
        "clusterLeclercChangeServiceIp",
        "clusterLeclercCustomSnapCreate",
        "clusterLeclercCustomSnapDelete",
        "clusterLeclercDeleteSnapshotDirectory",
        "clusterLeclercDestroyNasContainer",
        "clusterLeclercPartitionAdd",
        "clusterLeclercPartitionDelete",
        "clusterLeclercPartitionUpdate",
        "clusterLeclercQuotaUpdate",
        "clusterLeclercSetupNasContainer",
        "clusterLeclercSnapshotUpdate",
        "clusterLeclercZfsOptions",
        "nasAclUpdate",
        "nasDeleteSnapshotDirectory",
        "nasPartitionAdd",
        "nasPartitionDelete",
        "nasPartitionUpdate",
        "nasQuotaUpdate",
        "remoteBackupRecursiveDestroy"
      ],
      "enumType": "string"
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
    }
  }
}