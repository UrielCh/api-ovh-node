import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/cloudDB/enterprise/cluster",
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
      "description": "Operations about the CLOUDDB service"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster",
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
              "dataType": "cloudDB.enterprise.Cluster",
              "paramType": "body",
              "fullType": "cloudDB.enterprise.Cluster",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Cluster"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/backup",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Backups of this cluster"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Backup name"
            },
            {
              "name": "clusterId",
              "dataType": "uuid",
              "paramType": "body",
              "fullType": "uuid",
              "required": true,
              "description": "Cluster id"
            },
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.Backup",
          "noAuthentication": false,
          "description": "Create a cluster backup"
        }
      ],
      "description": "List the cloudDB.enterprise.Cluster.Backup objects"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/backup/{backupId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            },
            {
              "name": "backupId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Backup ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a cluster backup"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            },
            {
              "name": "backupId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Backup ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.Backup",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Backup"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/confirmTermination",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
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
      "path": "/cloudDB/enterprise/cluster/{clusterId}/endpoint",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Cluster endpoints"
        }
      ],
      "description": "List the cloudDB.enterprise.Cluster.Endpoint objects"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/endpoint/{endpointId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            },
            {
              "name": "endpointId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Endpoint ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.Endpoint",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Endpoint"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/host",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Hosts of this cluster"
        }
      ],
      "description": "List the cloudDB.enterprise.Cluster.Host objects"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/host/{hostId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            },
            {
              "name": "hostId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Host ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.Host",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Host"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/logs",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Logs access for this cluster"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "note",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Note regarding this username"
            },
            {
              "name": "username",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Logs Data Platform username"
            },
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.LdpMember",
          "noAuthentication": false,
          "description": "Grant access to cluster logs"
        }
      ],
      "description": "List the cloudDB.enterprise.Cluster.LdpMember objects"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/logs/{logsId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            },
            {
              "name": "logsId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Logs ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Revoke access to cluster's logs"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            },
            {
              "name": "logsId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Logs ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.LdpMember",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Member"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/maintenance",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Cluster maintenances"
        }
      ],
      "description": "List the cloudDB.enterprise.Cluster.Maintenance objects"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/maintenance/{maintenanceId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            },
            {
              "name": "maintenanceId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Maintenance ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete the maintenance"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            },
            {
              "name": "maintenanceId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Maintenance ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.Maintenance",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Maintenance window"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete the maintenance window"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.MaintenanceWindow",
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
              "name": "duration",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Maximum duration of maintenance window in minutes"
            },
            {
              "name": "startTime",
              "dataType": "time",
              "paramType": "body",
              "fullType": "time",
              "required": false,
              "description": "Hour and minute the maintenance will start in UTC"
            },
            {
              "name": "dayOfWeek",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Day of the week the maintenance will start with ISO 8601 numbering"
            },
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.MaintenanceWindow",
          "noAuthentication": false,
          "description": "Add a maintenance window to this cluster"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "cloudDB.enterprise.Cluster.MaintenanceWindow",
              "paramType": "body",
              "fullType": "cloudDB.enterprise.Cluster.MaintenanceWindow",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Maintenance window"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/restore",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Restores of this cluster"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "timestamp",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "Date and time used for the PITR"
            },
            {
              "name": "backupId",
              "dataType": "uuid",
              "paramType": "body",
              "fullType": "uuid",
              "required": false,
              "description": "Backup id"
            },
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.Restore",
          "noAuthentication": false,
          "description": "Create a cluster restore at a given point in time"
        }
      ],
      "description": "List the cloudDB.enterprise.Cluster.Restore objects"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            },
            {
              "name": "restoreId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Restore ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a restore"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "restoreId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Restore ID"
            },
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.Restore",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Restore"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}/user",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            },
            {
              "name": "restoreId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Restore ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.Restore.User",
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
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Secret used to access this restored instance"
            },
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            },
            {
              "name": "restoreId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Restore ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.Restore.User",
          "noAuthentication": false,
          "description": "Create a user on this restored instance"
        }
      ],
      "description": "User"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/scale",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "count",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Number of nodes (positive for scaling up, negative for scaling down)"
            },
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster",
          "noAuthentication": false,
          "description": "Scale a cluster"
        }
      ],
      "description": "scale operations"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/securityGroup",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Cluster security groups"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Security group name"
            },
            {
              "name": "clusterId",
              "dataType": "uuid",
              "paramType": "body",
              "fullType": "uuid",
              "required": true,
              "description": "Cluster id"
            },
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.SecurityGroup",
          "noAuthentication": false,
          "description": "Add a security group to this cluster"
        }
      ],
      "description": "List the cloudDB.enterprise.Cluster.SecurityGroup objects"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            },
            {
              "name": "securityGroupId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Security group ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a security group from this cluster"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            },
            {
              "name": "securityGroupId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Security group ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.SecurityGroup",
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
              "dataType": "cloudDB.enterprise.Cluster.SecurityGroup",
              "paramType": "body",
              "fullType": "cloudDB.enterprise.Cluster.SecurityGroup",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            },
            {
              "name": "securityGroupId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Security group ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Security group"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "securityGroupId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Security group ID"
            },
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Security group rules"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "source",
              "dataType": "ipBlock",
              "paramType": "body",
              "fullType": "ipBlock",
              "required": true,
              "description": "Network range to allow"
            },
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            },
            {
              "name": "securityGroupId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Security group ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.SecurityGroup.Rule",
          "noAuthentication": false,
          "description": "Add a rule to this security group"
        }
      ],
      "description": "List the cloudDB.enterprise.Cluster.SecurityGroup.Rule objects"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule/{ruleId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            },
            {
              "name": "securityGroupId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Security group ID"
            },
            {
              "name": "ruleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Rule ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a rule from this security group"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            },
            {
              "name": "securityGroupId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Security group ID"
            },
            {
              "name": "ruleId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Rule ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.SecurityGroup.Rule",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Security group rule"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/serviceInfos",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
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
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
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
      "path": "/cloudDB/enterprise/cluster/{clusterId}/task",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            },
            {
              "name": "status",
              "dataType": "cloudDB.task.Status",
              "paramType": "query",
              "fullType": "cloudDB.task.Status",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "name": "function",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of function property (=)"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "Cluster tasks"
        }
      ],
      "description": "List the cloudDB.Task objects"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/task/{taskId}",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Task ID"
            },
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "cloudDB.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Task"
    },
    {
      "path": "/cloudDB/enterprise/cluster/{clusterId}/terminate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
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
      "path": "/cloudDB/enterprise/cluster/{clusterId}/user",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.User",
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
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Secret used to access cluster"
            },
            {
              "name": "clusterId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cluster ID"
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.User",
          "noAuthentication": false,
          "description": "Create a user on this cluster"
        }
      ],
      "description": "User"
    },
    {
      "path": "/cloudDB/enterprise/offer",
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
          "description": "Offers with their capabilities"
        }
      ],
      "description": "List the cloudDB.enterprise.Offer objects"
    },
    {
      "path": "/cloudDB/enterprise/offer/{offerName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "offerName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Offer name"
            }
          ],
          "responseType": "cloudDB.enterprise.Offer",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Offer"
    },
    {
      "path": "/cloudDB/enterprise/offer/{offerName}/region",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "offerName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Offer name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Regions of this offer"
        }
      ],
      "description": "List the cloudDB.enterprise.Offer.Region objects"
    },
    {
      "path": "/cloudDB/enterprise/offer/{offerName}/region/{regionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "offerName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Offer name"
            },
            {
              "name": "regionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Region name"
            }
          ],
          "responseType": "cloudDB.enterprise.Offer.Region",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Offer capabilities for this region"
    },
    {
      "path": "/cloudDB/enterprise/region",
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
          "description": "Regions with their capabilities"
        }
      ],
      "description": "List the cloudDB.enterprise.Region objects"
    },
    {
      "path": "/cloudDB/enterprise/region/{regionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "regionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Region name"
            }
          ],
          "responseType": "cloudDB.enterprise.Region",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Region"
    }
  ],
  "resourcePath": "/cloudDB",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "cloudDB.Task": {
      "id": "Task",
      "namespace": "cloudDB",
      "description": "Tasks",
      "properties": {
        "endDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Task completion date",
          "required": false
        },
        "function": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task function name",
          "required": true
        },
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task id",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Task last update",
          "required": false
        },
        "progress": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task percentage progression (0 = begin / 100 = end)",
          "required": true
        },
        "startDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task start date",
          "required": true
        },
        "status": {
          "type": "cloudDB.task.Status",
          "fullType": "cloudDB.task.Status",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task status",
          "required": true
        }
      }
    },
    "cloudDB.enterprise.Backup.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Backup",
      "description": "Backup status",
      "enum": [
        "archived",
        "archiving",
        "created",
        "creating",
        "deleting"
      ],
      "enumType": "string"
    },
    "cloudDB.enterprise.Cluster": {
      "id": "Cluster",
      "namespace": "cloudDB.enterprise",
      "description": "Cluster",
      "properties": {
        "autoBackup": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Automatic managed backup activated",
          "required": true
        },
        "backupSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Total size of manual backups in bytes",
          "required": false
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of this cluster",
          "required": true
        },
        "hostCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Number of hosts",
          "required": false
        },
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster id",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "The last update date of this cluster",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Cluster name",
          "required": true
        },
        "offerName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Offer name",
          "required": true
        },
        "offerType": {
          "type": "cloudDB.enterprise.Offer.TypeEnum",
          "fullType": "cloudDB.enterprise.Offer.TypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Offer type",
          "required": true
        },
        "regionName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster region name",
          "required": true
        },
        "restoredVolumeSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Total restored volume size in GB",
          "required": false
        },
        "status": {
          "type": "cloudDB.enterprise.Cluster.StatusEnum",
          "fullType": "cloudDB.enterprise.Cluster.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster status",
          "required": true
        },
        "taskId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "The id of the task working on this object",
          "required": false
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster version",
          "required": true
        }
      }
    },
    "cloudDB.enterprise.Cluster.Backup": {
      "id": "Backup",
      "namespace": "cloudDB.enterprise.Cluster",
      "description": "Backup",
      "properties": {
        "clusterId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster id",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Backup task creation date and time",
          "required": true
        },
        "effectiveCreationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Backup object creation date and time",
          "required": false
        },
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Backup id",
          "required": true
        },
        "internal": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Created by auto backup process",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last time this backup has been updated",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Backup name",
          "required": true
        },
        "restoreDuration": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Time in seconds it took to restore this backup for validation",
          "required": false
        },
        "size": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Manual backup size in bytes",
          "required": false
        },
        "status": {
          "type": "cloudDB.enterprise.Backup.StatusEnum",
          "fullType": "cloudDB.enterprise.Backup.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Backup status",
          "required": true
        },
        "taskId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current task managing this backup",
          "required": false
        },
        "validationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Date and time when this backup has been validated",
          "required": false
        }
      }
    },
    "cloudDB.enterprise.Cluster.Endpoint": {
      "id": "Endpoint",
      "namespace": "cloudDB.enterprise.Cluster",
      "description": "Endpoints",
      "properties": {
        "clusterId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster id",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Endpoint creation date and time",
          "required": true
        },
        "fqdn": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Endpoint fully qualified domain name",
          "required": true
        },
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Endpoint id",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last time this endpoint has been updated",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Endpoint name",
          "required": true
        },
        "port": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Endpoint port",
          "required": true
        },
        "status": {
          "type": "cloudDB.enterprise.Endpoint.StatusEnum",
          "fullType": "cloudDB.enterprise.Endpoint.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Endpoint status",
          "required": true
        },
        "taskId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current task managing this endpoint",
          "required": false
        }
      }
    },
    "cloudDB.enterprise.Cluster.Host": {
      "id": "Host",
      "namespace": "cloudDB.enterprise.Cluster",
      "description": "Host",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of this host",
          "required": true
        },
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Host id",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "The last update date of this host",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Host name",
          "required": true
        },
        "status": {
          "type": "cloudDB.enterprise.Host.StatusEnum",
          "fullType": "cloudDB.enterprise.Host.StatusEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Host status",
          "required": false
        },
        "taskId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "The id of the task working on this object",
          "required": false
        }
      }
    },
    "cloudDB.enterprise.Cluster.LdpMember": {
      "id": "LdpMember",
      "namespace": "cloudDB.enterprise.Cluster",
      "description": "Member",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Logs Data Platform access creation date and time",
          "required": true
        },
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "User id",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last time this ldp access has been updated",
          "required": true
        },
        "note": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Note regarding this username",
          "required": false
        },
        "status": {
          "type": "cloudDB.enterprise.LdpMember.StatusEnum",
          "fullType": "cloudDB.enterprise.LdpMember.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Logs Data Platform access status",
          "required": true
        },
        "taskId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current task managing this Logs Data Platform access",
          "required": false
        },
        "username": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Logs Data Platform username",
          "required": true
        }
      }
    },
    "cloudDB.enterprise.Cluster.Maintenance": {
      "id": "Maintenance",
      "namespace": "cloudDB.enterprise.Cluster",
      "description": "Maintenance window",
      "properties": {
        "clusterId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster id",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maintenance creation date and time",
          "required": true
        },
        "duration": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum duration of the maintenance in minutes",
          "required": true
        },
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maintenance id",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last time this maintenance has been updated",
          "required": true
        },
        "scheduledAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date and time the maintenance will start in UTC",
          "required": true
        },
        "status": {
          "type": "cloudDB.enterprise.Maintenance.StatusEnum",
          "fullType": "cloudDB.enterprise.Maintenance.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maintenance status",
          "required": true
        },
        "taskId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current task managing this maintenance",
          "required": false
        }
      }
    },
    "cloudDB.enterprise.Cluster.MaintenanceWindow": {
      "id": "MaintenanceWindow",
      "namespace": "cloudDB.enterprise.Cluster",
      "description": "Maintenance window",
      "properties": {
        "clusterId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster id",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maintenance window creation date and time",
          "required": true
        },
        "dayOfWeek": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Day of the week the maintenance will start with ISO 8601 numbering",
          "required": true
        },
        "duration": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum duration of maintenance window in hours",
          "required": true
        },
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maintenance window id",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last time this maintenance window has been updated",
          "required": true
        },
        "startTime": {
          "type": "time",
          "fullType": "time",
          "canBeNull": false,
          "readOnly": false,
          "description": "Hour and minute the maintenance will start in UTC",
          "required": true
        },
        "status": {
          "type": "cloudDB.enterprise.MaintenanceWindow.StatusEnum",
          "fullType": "cloudDB.enterprise.MaintenanceWindow.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maintenance window status",
          "required": true
        },
        "taskId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current task managing this security group",
          "required": false
        }
      }
    },
    "cloudDB.enterprise.Cluster.Restore": {
      "id": "Restore",
      "namespace": "cloudDB.enterprise.Cluster",
      "description": "Restore",
      "properties": {
        "backupId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Base backup id",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Restore creation date and time",
          "required": true
        },
        "fqdn": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Restore fully qualified domain name",
          "required": false
        },
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Restore id",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last time this restore has been updated",
          "required": true
        },
        "port": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Restore port",
          "required": false
        },
        "status": {
          "type": "cloudDB.enterprise.Restore.StatusEnum",
          "fullType": "cloudDB.enterprise.Restore.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Restore status",
          "required": true
        },
        "taskId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current task managing this restore",
          "required": false
        },
        "timestamp": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Date and time used for PITR",
          "required": false
        },
        "volumeSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Restore volume size in GB",
          "required": false
        }
      }
    },
    "cloudDB.enterprise.Cluster.Restore.User": {
      "id": "User",
      "namespace": "cloudDB.enterprise.Cluster.Restore",
      "description": "User",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "User creation date and time",
          "required": true
        },
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "User id",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last time this user has been updated",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "User name",
          "required": true
        },
        "restoreId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Restored instance id",
          "required": true
        },
        "status": {
          "type": "cloudDB.enterprise.Restore.User.StatusEnum",
          "fullType": "cloudDB.enterprise.Restore.User.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "User status",
          "required": true
        },
        "taskId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current task managing this user",
          "required": false
        }
      }
    },
    "cloudDB.enterprise.Cluster.SecurityGroup": {
      "id": "SecurityGroup",
      "namespace": "cloudDB.enterprise.Cluster",
      "description": "Security group",
      "properties": {
        "clusterId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster id",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Security group creation date and time",
          "required": true
        },
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Security group id",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last time this security group has been updated",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Security group name",
          "required": true
        },
        "rulesCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number of rules contained by this security group",
          "required": true
        },
        "status": {
          "type": "cloudDB.enterprise.SecurityGroup.StatusEnum",
          "fullType": "cloudDB.enterprise.SecurityGroup.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Security group status",
          "required": true
        },
        "taskId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current task managing this security group",
          "required": false
        }
      }
    },
    "cloudDB.enterprise.Cluster.SecurityGroup.Rule": {
      "id": "Rule",
      "namespace": "cloudDB.enterprise.Cluster.SecurityGroup",
      "description": "Security group rule",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Rule creation date and time",
          "required": true
        },
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Rule id",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last time this rule has been updated",
          "required": true
        },
        "securityGroupId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Security group id",
          "required": true
        },
        "source": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": true,
          "description": "Network range to allow",
          "required": true
        },
        "status": {
          "type": "cloudDB.enterprise.SecurityGroupRule.StatusEnum",
          "fullType": "cloudDB.enterprise.SecurityGroupRule.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Rule status",
          "required": true
        },
        "taskId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current task managing this rule",
          "required": false
        }
      }
    },
    "cloudDB.enterprise.Cluster.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Cluster",
      "description": "Cluster status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "reopening",
        "restarting",
        "scaling",
        "suspended",
        "suspending",
        "updating"
      ],
      "enumType": "string"
    },
    "cloudDB.enterprise.Cluster.User": {
      "id": "User",
      "namespace": "cloudDB.enterprise.Cluster",
      "description": "User",
      "properties": {
        "clusterId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster id",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "User creation date and time",
          "required": true
        },
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "User id",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last time this user has been updated",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "User name",
          "required": true
        },
        "status": {
          "type": "cloudDB.enterprise.User.StatusEnum",
          "fullType": "cloudDB.enterprise.User.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "User status",
          "required": true
        },
        "taskId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current task managing this user",
          "required": false
        }
      }
    },
    "cloudDB.enterprise.Endpoint.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Endpoint",
      "description": "Endpoint status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "disabled",
        "disabling",
        "enabled",
        "enabling"
      ],
      "enumType": "string"
    },
    "cloudDB.enterprise.Host.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Host",
      "description": "Host status",
      "enum": [
        "configured",
        "created",
        "creating",
        "deleting",
        "rebooted",
        "rebooting",
        "reinstalling",
        "reopening",
        "replacing",
        "suspended",
        "suspending"
      ],
      "enumType": "string"
    },
    "cloudDB.enterprise.LdpMember.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.LdpMember",
      "description": "LdpMember status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updated",
        "updating"
      ],
      "enumType": "string"
    },
    "cloudDB.enterprise.Maintenance.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Maintenance",
      "description": "Maintenance status",
      "enum": [
        "cancelled",
        "done",
        "running",
        "scheduled"
      ],
      "enumType": "string"
    },
    "cloudDB.enterprise.MaintenanceWindow.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.MaintenanceWindow",
      "description": "Maintenance window status",
      "enum": [
        "created",
        "creating",
        "deleting"
      ],
      "enumType": "string"
    },
    "cloudDB.enterprise.Offer": {
      "id": "Offer",
      "namespace": "cloudDB.enterprise",
      "description": "Offer",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Offer creation date and time",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last time this offer has been updated",
          "required": true
        },
        "maxHostCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Maximum number of hosts required",
          "required": false
        },
        "minHostCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Minimum number of hosts required",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Offer name",
          "required": true
        },
        "status": {
          "type": "cloudDB.enterprise.Offer.StatusEnum",
          "fullType": "cloudDB.enterprise.Offer.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Offer status",
          "required": true
        }
      }
    },
    "cloudDB.enterprise.Offer.Region": {
      "id": "Region",
      "namespace": "cloudDB.enterprise.Offer",
      "description": "Offer capabilities for this region",
      "properties": {
        "hostLeft": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Number of hosts available for this offer in this region",
          "required": false
        },
        "offerName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Offer name",
          "required": true
        },
        "regionName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Region name",
          "required": true
        },
        "status": {
          "type": "cloudDB.enterprise.Offer.Region.StatusEnum",
          "fullType": "cloudDB.enterprise.Offer.Region.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of an offer in a region",
          "required": true
        }
      }
    },
    "cloudDB.enterprise.Offer.Region.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Offer.Region",
      "description": "Status of an offer in a region",
      "enum": [
        "available",
        "unavailable"
      ],
      "enumType": "string"
    },
    "cloudDB.enterprise.Offer.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Offer",
      "description": "Offer status",
      "enum": [
        "available",
        "planned",
        "testing",
        "unavailable"
      ],
      "enumType": "string"
    },
    "cloudDB.enterprise.Offer.TypeEnum": {
      "id": "TypeEnum",
      "namespace": "cloudDB.enterprise.Offer",
      "description": "Offer type",
      "enum": [
        "postgresql"
      ],
      "enumType": "string"
    },
    "cloudDB.enterprise.Region": {
      "id": "Region",
      "namespace": "cloudDB.enterprise",
      "description": "Region",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Region creation date and time",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last time this region has been updated",
          "required": true
        },
        "maintenanceDayOfWeek": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Day of the week the maintenance will start with ISO 8601 numbering",
          "required": true
        },
        "maintenanceDuration": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum duration of maintenance window in hours",
          "required": true
        },
        "maintenanceStartTime": {
          "type": "time",
          "fullType": "time",
          "canBeNull": false,
          "readOnly": true,
          "description": "Hour and minute the maintenance will start in UTC",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Region name",
          "required": true
        },
        "status": {
          "type": "cloudDB.enterprise.Region.StatusEnum",
          "fullType": "cloudDB.enterprise.Region.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Region status",
          "required": true
        }
      }
    },
    "cloudDB.enterprise.Region.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Region",
      "description": "Region status",
      "enum": [
        "created"
      ],
      "enumType": "string"
    },
    "cloudDB.enterprise.Restore.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Restore",
      "description": "Restore status",
      "enum": [
        "created",
        "creating",
        "deleting"
      ],
      "enumType": "string"
    },
    "cloudDB.enterprise.Restore.User.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Restore.User",
      "description": "User status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updated",
        "updating"
      ],
      "enumType": "string"
    },
    "cloudDB.enterprise.SecurityGroup.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.SecurityGroup",
      "description": "Security group status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updated",
        "updating"
      ],
      "enumType": "string"
    },
    "cloudDB.enterprise.SecurityGroupRule.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.SecurityGroupRule",
      "description": "Security group rule status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updated",
        "updating"
      ],
      "enumType": "string"
    },
    "cloudDB.enterprise.User.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.User",
      "description": "User status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updated",
        "updating"
      ],
      "enumType": "string"
    },
    "cloudDB.task.Status": {
      "id": "Status",
      "namespace": "cloudDB.task",
      "description": "Task status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
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