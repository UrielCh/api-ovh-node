import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/cloudDB.json

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "description": "Operations about the CLOUDDB service",
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
      "path": "/cloudDB/enterprise/cluster"
    },
    {
      "description": "Cluster",
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
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster"
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
              "dataType": "cloudDB.enterprise.Cluster",
              "description": "Request Body",
              "fullType": "cloudDB.enterprise.Cluster",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}"
    },
    {
      "description": "List the cloudDB.enterprise.Cluster.Backup objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Backups of this cluster",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a cluster backup",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Cluster id",
              "fullType": "uuid",
              "name": "clusterId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Backup name",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.Backup"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/backup"
    },
    {
      "description": "Backup",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a cluster backup",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Backup ID",
              "fullType": "uuid",
              "name": "backupId",
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
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Backup ID",
              "fullType": "uuid",
              "name": "backupId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.Backup"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/backup/{backupId}"
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
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/confirmTermination"
    },
    {
      "description": "List the cloudDB.enterprise.Cluster.Endpoint objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cluster endpoints",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/endpoint"
    },
    {
      "description": "Endpoint",
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
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Endpoint ID",
              "fullType": "uuid",
              "name": "endpointId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.Endpoint"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/endpoint/{endpointId}"
    },
    {
      "description": "List the cloudDB.enterprise.Cluster.Host objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Hosts of this cluster",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/host"
    },
    {
      "description": "Host",
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
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Host ID",
              "fullType": "uuid",
              "name": "hostId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.Host"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/host/{hostId}"
    },
    {
      "description": "List the cloudDB.enterprise.Cluster.LdpMember objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Logs access for this cluster",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Grant access to cluster logs",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Note regarding this username",
              "fullType": "string",
              "name": "note",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Logs Data Platform username",
              "fullType": "string",
              "name": "username",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.LdpMember"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/logs"
    },
    {
      "description": "Member",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Revoke access to cluster's logs",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Logs ID",
              "fullType": "uuid",
              "name": "logsId",
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
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Logs ID",
              "fullType": "uuid",
              "name": "logsId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.LdpMember"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/logs/{logsId}"
    },
    {
      "description": "List the cloudDB.enterprise.Cluster.Maintenance objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cluster maintenances",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/maintenance"
    },
    {
      "description": "Maintenance window",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the maintenance",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Maintenance ID",
              "fullType": "uuid",
              "name": "maintenanceId",
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
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Maintenance ID",
              "fullType": "uuid",
              "name": "maintenanceId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.Maintenance"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/maintenance/{maintenanceId}"
    },
    {
      "description": "Maintenance window",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the maintenance window",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
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
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.MaintenanceWindow"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a maintenance window to this cluster",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Maximum duration of maintenance window in minutes",
              "fullType": "long",
              "name": "duration",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "time",
              "description": "Hour and minute the maintenance will start in UTC",
              "fullType": "time",
              "name": "startTime",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Day of the week the maintenance will start with ISO 8601 numbering",
              "fullType": "long",
              "name": "dayOfWeek",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.MaintenanceWindow"
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
              "dataType": "cloudDB.enterprise.Cluster.MaintenanceWindow",
              "description": "Request Body",
              "fullType": "cloudDB.enterprise.Cluster.MaintenanceWindow",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow"
    },
    {
      "description": "List the cloudDB.enterprise.Cluster.Restore objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Restores of this cluster",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a cluster restore at a given point in time",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Backup id",
              "fullType": "uuid",
              "name": "backupId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Date and time used for the PITR",
              "fullType": "datetime",
              "name": "timestamp",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.Restore"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/restore"
    },
    {
      "description": "Restore",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a restore",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Restore ID",
              "fullType": "uuid",
              "name": "restoreId",
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
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Restore ID",
              "fullType": "uuid",
              "name": "restoreId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.Restore"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}"
    },
    {
      "description": "User",
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
              "dataType": "uuid",
              "description": "Restore ID",
              "fullType": "uuid",
              "name": "restoreId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.Restore.User"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a user on this restored instance",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "Secret used to access this restored instance",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Restore ID",
              "fullType": "uuid",
              "name": "restoreId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.Restore.User"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}/user"
    },
    {
      "description": "scale operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Scale a cluster",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Number of nodes (positive for scaling up, negative for scaling down)",
              "fullType": "long",
              "name": "count",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/scale"
    },
    {
      "description": "List the cloudDB.enterprise.Cluster.SecurityGroup objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cluster security groups",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a security group to this cluster",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Cluster id",
              "fullType": "uuid",
              "name": "clusterId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Security group name",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.SecurityGroup"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/securityGroup"
    },
    {
      "description": "Security group",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a security group from this cluster",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Security group ID",
              "fullType": "uuid",
              "name": "securityGroupId",
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
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Security group ID",
              "fullType": "uuid",
              "name": "securityGroupId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.SecurityGroup"
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
              "dataType": "cloudDB.enterprise.Cluster.SecurityGroup",
              "description": "Request Body",
              "fullType": "cloudDB.enterprise.Cluster.SecurityGroup",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Security group ID",
              "fullType": "uuid",
              "name": "securityGroupId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}"
    },
    {
      "description": "List the cloudDB.enterprise.Cluster.SecurityGroup.Rule objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Security group rules",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Security group ID",
              "fullType": "uuid",
              "name": "securityGroupId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a rule to this security group",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "Network range to allow",
              "fullType": "ipBlock",
              "name": "source",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Security group ID",
              "fullType": "uuid",
              "name": "securityGroupId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.SecurityGroup.Rule"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule"
    },
    {
      "description": "Security group rule",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a rule from this security group",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Rule ID",
              "fullType": "uuid",
              "name": "ruleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Security group ID",
              "fullType": "uuid",
              "name": "securityGroupId",
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
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Security group ID",
              "fullType": "uuid",
              "name": "securityGroupId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Rule ID",
              "fullType": "uuid",
              "name": "ruleId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.SecurityGroup.Rule"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule/{ruleId}"
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
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
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
              "description": "Request Body",
              "fullType": "services.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/serviceInfos"
    },
    {
      "description": "List the cloudDB.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cluster tasks",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "cloudDB.task.Status",
              "description": "Filter the value of status property (=)",
              "fullType": "cloudDB.task.Status",
              "name": "status",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of function property (=)",
              "fullType": "string",
              "name": "function",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "uuid[]"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/task"
    },
    {
      "description": "Task",
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
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Task ID",
              "fullType": "uuid",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.Task"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/task/{taskId}"
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
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/terminate"
    },
    {
      "description": "User",
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
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.User"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a user on this cluster",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "Secret used to access cluster",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Cluster.User"
        }
      ],
      "path": "/cloudDB/enterprise/cluster/{clusterId}/user"
    },
    {
      "description": "List the cloudDB.enterprise.Offer objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Offers with their capabilities",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/cloudDB/enterprise/offer"
    },
    {
      "description": "Offer",
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
              "description": "Offer name",
              "fullType": "string",
              "name": "offerName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Offer"
        }
      ],
      "path": "/cloudDB/enterprise/offer/{offerName}"
    },
    {
      "description": "List the cloudDB.enterprise.Offer.Region objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Regions of this offer",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Offer name",
              "fullType": "string",
              "name": "offerName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/cloudDB/enterprise/offer/{offerName}/region"
    },
    {
      "description": "Offer capabilities for this region",
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
              "description": "Offer name",
              "fullType": "string",
              "name": "offerName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Region name",
              "fullType": "string",
              "name": "regionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Offer.Region"
        }
      ],
      "path": "/cloudDB/enterprise/offer/{offerName}/region/{regionName}"
    },
    {
      "description": "List the cloudDB.enterprise.Region objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Regions with their capabilities",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/cloudDB/enterprise/region"
    },
    {
      "description": "Region",
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
              "description": "Region name",
              "fullType": "string",
              "name": "regionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloudDB.enterprise.Region"
        }
      ],
      "path": "/cloudDB/enterprise/region/{regionName}"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "cloudDB.Task": {
      "description": "Tasks",
      "id": "Task",
      "namespace": "cloudDB",
      "properties": {
        "endDate": {
          "canBeNull": true,
          "description": "Task completion date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Task function name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Task id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "lastUpdate": {
          "canBeNull": true,
          "description": "Task last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "progress": {
          "canBeNull": false,
          "description": "Task percentage progression (0 = begin / 100 = end)",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Task start date",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "cloudDB.task.Status",
          "readOnly": true,
          "required": true,
          "type": "cloudDB.task.Status"
        }
      }
    },
    "cloudDB.enterprise.Backup.StatusEnum": {
      "description": "Backup status",
      "enum": [
        "archived",
        "archiving",
        "created",
        "creating",
        "deleting"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Backup"
    },
    "cloudDB.enterprise.Cluster": {
      "description": "Cluster",
      "id": "Cluster",
      "namespace": "cloudDB.enterprise",
      "properties": {
        "autoBackup": {
          "canBeNull": false,
          "description": "Automatic managed backup activated",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "backupSize": {
          "canBeNull": true,
          "description": "Total size of manual backups in bytes",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of this cluster",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "hostCount": {
          "canBeNull": true,
          "description": "Number of hosts",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "id": {
          "canBeNull": false,
          "description": "Cluster id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "The last update date of this cluster",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Cluster name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "offerName": {
          "canBeNull": false,
          "description": "Offer name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "offerType": {
          "canBeNull": false,
          "description": "Offer type",
          "fullType": "cloudDB.enterprise.Offer.TypeEnum",
          "readOnly": true,
          "required": true,
          "type": "cloudDB.enterprise.Offer.TypeEnum"
        },
        "regionName": {
          "canBeNull": false,
          "description": "Cluster region name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "restoredVolumeSize": {
          "canBeNull": true,
          "description": "Total restored volume size in GB",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Cluster status",
          "fullType": "cloudDB.enterprise.Cluster.StatusEnum",
          "readOnly": true,
          "required": true,
          "type": "cloudDB.enterprise.Cluster.StatusEnum"
        },
        "taskId": {
          "canBeNull": true,
          "description": "The id of the task working on this object",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "version": {
          "canBeNull": false,
          "description": "Cluster version",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloudDB.enterprise.Cluster.Backup": {
      "description": "Backup",
      "id": "Backup",
      "namespace": "cloudDB.enterprise.Cluster",
      "properties": {
        "clusterId": {
          "canBeNull": false,
          "description": "Cluster id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Backup task creation date and time",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "effectiveCreationDate": {
          "canBeNull": true,
          "description": "Backup object creation date and time",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Backup id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "internal": {
          "canBeNull": false,
          "description": "Created by auto backup process",
          "fullType": "boolean",
          "readOnly": true,
          "required": true,
          "type": "boolean"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last time this backup has been updated",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Backup name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "restoreDuration": {
          "canBeNull": true,
          "description": "Time in seconds it took to restore this backup for validation",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "size": {
          "canBeNull": true,
          "description": "Manual backup size in bytes",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Backup status",
          "fullType": "cloudDB.enterprise.Backup.StatusEnum",
          "readOnly": true,
          "required": true,
          "type": "cloudDB.enterprise.Backup.StatusEnum"
        },
        "taskId": {
          "canBeNull": true,
          "description": "Current task managing this backup",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "validationDate": {
          "canBeNull": true,
          "description": "Date and time when this backup has been validated",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "cloudDB.enterprise.Cluster.Endpoint": {
      "description": "Endpoints",
      "id": "Endpoint",
      "namespace": "cloudDB.enterprise.Cluster",
      "properties": {
        "clusterId": {
          "canBeNull": false,
          "description": "Cluster id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Endpoint creation date and time",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "fqdn": {
          "canBeNull": false,
          "description": "Endpoint fully qualified domain name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Endpoint id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last time this endpoint has been updated",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Endpoint name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "port": {
          "canBeNull": false,
          "description": "Endpoint port",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Endpoint status",
          "fullType": "cloudDB.enterprise.Endpoint.StatusEnum",
          "readOnly": true,
          "required": true,
          "type": "cloudDB.enterprise.Endpoint.StatusEnum"
        },
        "taskId": {
          "canBeNull": true,
          "description": "Current task managing this endpoint",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        }
      }
    },
    "cloudDB.enterprise.Cluster.Host": {
      "description": "Host",
      "id": "Host",
      "namespace": "cloudDB.enterprise.Cluster",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of this host",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Host id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "The last update date of this host",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Host name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "status": {
          "canBeNull": true,
          "description": "Host status",
          "fullType": "cloudDB.enterprise.Host.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloudDB.enterprise.Host.StatusEnum"
        },
        "taskId": {
          "canBeNull": true,
          "description": "The id of the task working on this object",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        }
      }
    },
    "cloudDB.enterprise.Cluster.LdpMember": {
      "description": "Member",
      "id": "LdpMember",
      "namespace": "cloudDB.enterprise.Cluster",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Logs Data Platform access creation date and time",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "User id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last time this ldp access has been updated",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "note": {
          "canBeNull": true,
          "description": "Note regarding this username",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Logs Data Platform access status",
          "fullType": "cloudDB.enterprise.LdpMember.StatusEnum",
          "readOnly": true,
          "required": true,
          "type": "cloudDB.enterprise.LdpMember.StatusEnum"
        },
        "taskId": {
          "canBeNull": true,
          "description": "Current task managing this Logs Data Platform access",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "username": {
          "canBeNull": false,
          "description": "Logs Data Platform username",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloudDB.enterprise.Cluster.Maintenance": {
      "description": "Maintenance window",
      "id": "Maintenance",
      "namespace": "cloudDB.enterprise.Cluster",
      "properties": {
        "clusterId": {
          "canBeNull": false,
          "description": "Cluster id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Maintenance creation date and time",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "duration": {
          "canBeNull": false,
          "description": "Maximum duration of the maintenance in minutes",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "id": {
          "canBeNull": false,
          "description": "Maintenance id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last time this maintenance has been updated",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "scheduledAt": {
          "canBeNull": false,
          "description": "Date and time the maintenance will start in UTC",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Maintenance status",
          "fullType": "cloudDB.enterprise.Maintenance.StatusEnum",
          "readOnly": true,
          "required": true,
          "type": "cloudDB.enterprise.Maintenance.StatusEnum"
        },
        "taskId": {
          "canBeNull": true,
          "description": "Current task managing this maintenance",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        }
      }
    },
    "cloudDB.enterprise.Cluster.MaintenanceWindow": {
      "description": "Maintenance window",
      "id": "MaintenanceWindow",
      "namespace": "cloudDB.enterprise.Cluster",
      "properties": {
        "clusterId": {
          "canBeNull": false,
          "description": "Cluster id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Maintenance window creation date and time",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "dayOfWeek": {
          "canBeNull": false,
          "description": "Day of the week the maintenance will start with ISO 8601 numbering",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "duration": {
          "canBeNull": false,
          "description": "Maximum duration of maintenance window in hours",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "id": {
          "canBeNull": false,
          "description": "Maintenance window id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last time this maintenance window has been updated",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "startTime": {
          "canBeNull": false,
          "description": "Hour and minute the maintenance will start in UTC",
          "fullType": "time",
          "readOnly": false,
          "required": true,
          "type": "time"
        },
        "status": {
          "canBeNull": false,
          "description": "Maintenance window status",
          "fullType": "cloudDB.enterprise.MaintenanceWindow.StatusEnum",
          "readOnly": true,
          "required": true,
          "type": "cloudDB.enterprise.MaintenanceWindow.StatusEnum"
        },
        "taskId": {
          "canBeNull": true,
          "description": "Current task managing this security group",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        }
      }
    },
    "cloudDB.enterprise.Cluster.Restore": {
      "description": "Restore",
      "id": "Restore",
      "namespace": "cloudDB.enterprise.Cluster",
      "properties": {
        "backupId": {
          "canBeNull": false,
          "description": "Base backup id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Restore creation date and time",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "fqdn": {
          "canBeNull": true,
          "description": "Restore fully qualified domain name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Restore id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last time this restore has been updated",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "port": {
          "canBeNull": true,
          "description": "Restore port",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Restore status",
          "fullType": "cloudDB.enterprise.Restore.StatusEnum",
          "readOnly": true,
          "required": true,
          "type": "cloudDB.enterprise.Restore.StatusEnum"
        },
        "taskId": {
          "canBeNull": true,
          "description": "Current task managing this restore",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "timestamp": {
          "canBeNull": true,
          "description": "Date and time used for PITR",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "volumeSize": {
          "canBeNull": true,
          "description": "Restore volume size in GB",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloudDB.enterprise.Cluster.Restore.User": {
      "description": "User",
      "id": "User",
      "namespace": "cloudDB.enterprise.Cluster.Restore",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "User creation date and time",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "User id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last time this user has been updated",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "User name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "restoreId": {
          "canBeNull": false,
          "description": "Restored instance id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "status": {
          "canBeNull": false,
          "description": "User status",
          "fullType": "cloudDB.enterprise.Restore.User.StatusEnum",
          "readOnly": true,
          "required": true,
          "type": "cloudDB.enterprise.Restore.User.StatusEnum"
        },
        "taskId": {
          "canBeNull": true,
          "description": "Current task managing this user",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        }
      }
    },
    "cloudDB.enterprise.Cluster.SecurityGroup": {
      "description": "Security group",
      "id": "SecurityGroup",
      "namespace": "cloudDB.enterprise.Cluster",
      "properties": {
        "clusterId": {
          "canBeNull": false,
          "description": "Cluster id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Security group creation date and time",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Security group id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last time this security group has been updated",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Security group name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "rulesCount": {
          "canBeNull": false,
          "description": "Number of rules contained by this security group",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Security group status",
          "fullType": "cloudDB.enterprise.SecurityGroup.StatusEnum",
          "readOnly": true,
          "required": true,
          "type": "cloudDB.enterprise.SecurityGroup.StatusEnum"
        },
        "taskId": {
          "canBeNull": true,
          "description": "Current task managing this security group",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        }
      }
    },
    "cloudDB.enterprise.Cluster.SecurityGroup.Rule": {
      "description": "Security group rule",
      "id": "Rule",
      "namespace": "cloudDB.enterprise.Cluster.SecurityGroup",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Rule creation date and time",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Rule id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last time this rule has been updated",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "securityGroupId": {
          "canBeNull": false,
          "description": "Security group id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "source": {
          "canBeNull": false,
          "description": "Network range to allow",
          "fullType": "ipBlock",
          "readOnly": true,
          "required": true,
          "type": "ipBlock"
        },
        "status": {
          "canBeNull": false,
          "description": "Rule status",
          "fullType": "cloudDB.enterprise.SecurityGroupRule.StatusEnum",
          "readOnly": true,
          "required": true,
          "type": "cloudDB.enterprise.SecurityGroupRule.StatusEnum"
        },
        "taskId": {
          "canBeNull": true,
          "description": "Current task managing this rule",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        }
      }
    },
    "cloudDB.enterprise.Cluster.StatusEnum": {
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
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Cluster"
    },
    "cloudDB.enterprise.Cluster.User": {
      "description": "User",
      "id": "User",
      "namespace": "cloudDB.enterprise.Cluster",
      "properties": {
        "clusterId": {
          "canBeNull": false,
          "description": "Cluster id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "User creation date and time",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "User id",
          "fullType": "uuid",
          "readOnly": true,
          "required": true,
          "type": "uuid"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last time this user has been updated",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "User name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "User status",
          "fullType": "cloudDB.enterprise.User.StatusEnum",
          "readOnly": true,
          "required": true,
          "type": "cloudDB.enterprise.User.StatusEnum"
        },
        "taskId": {
          "canBeNull": true,
          "description": "Current task managing this user",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        }
      }
    },
    "cloudDB.enterprise.Endpoint.StatusEnum": {
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
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Endpoint"
    },
    "cloudDB.enterprise.Host.StatusEnum": {
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
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Host"
    },
    "cloudDB.enterprise.LdpMember.StatusEnum": {
      "description": "LdpMember status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updated",
        "updating"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.LdpMember"
    },
    "cloudDB.enterprise.Maintenance.StatusEnum": {
      "description": "Maintenance status",
      "enum": [
        "cancelled",
        "done",
        "running",
        "scheduled"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Maintenance"
    },
    "cloudDB.enterprise.MaintenanceWindow.StatusEnum": {
      "description": "Maintenance window status",
      "enum": [
        "created",
        "creating",
        "deleting"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.MaintenanceWindow"
    },
    "cloudDB.enterprise.Offer": {
      "description": "Offer",
      "id": "Offer",
      "namespace": "cloudDB.enterprise",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Offer creation date and time",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last time this offer has been updated",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "maxHostCount": {
          "canBeNull": true,
          "description": "Maximum number of hosts required",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minHostCount": {
          "canBeNull": false,
          "description": "Minimum number of hosts required",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Offer name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Offer status",
          "fullType": "cloudDB.enterprise.Offer.StatusEnum",
          "readOnly": true,
          "required": true,
          "type": "cloudDB.enterprise.Offer.StatusEnum"
        }
      }
    },
    "cloudDB.enterprise.Offer.Region": {
      "description": "Offer capabilities for this region",
      "id": "Region",
      "namespace": "cloudDB.enterprise.Offer",
      "properties": {
        "hostLeft": {
          "canBeNull": true,
          "description": "Number of hosts available for this offer in this region",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "offerName": {
          "canBeNull": false,
          "description": "Offer name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "regionName": {
          "canBeNull": false,
          "description": "Region name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of an offer in a region",
          "fullType": "cloudDB.enterprise.Offer.Region.StatusEnum",
          "readOnly": true,
          "required": true,
          "type": "cloudDB.enterprise.Offer.Region.StatusEnum"
        }
      }
    },
    "cloudDB.enterprise.Offer.Region.StatusEnum": {
      "description": "Status of an offer in a region",
      "enum": [
        "available",
        "unavailable"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Offer.Region"
    },
    "cloudDB.enterprise.Offer.StatusEnum": {
      "description": "Offer status",
      "enum": [
        "available",
        "planned",
        "testing",
        "unavailable"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Offer"
    },
    "cloudDB.enterprise.Offer.TypeEnum": {
      "description": "Offer type",
      "enum": [
        "postgresql"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "cloudDB.enterprise.Offer"
    },
    "cloudDB.enterprise.Region": {
      "description": "Region",
      "id": "Region",
      "namespace": "cloudDB.enterprise",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Region creation date and time",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last time this region has been updated",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "maintenanceDayOfWeek": {
          "canBeNull": false,
          "description": "Day of the week the maintenance will start with ISO 8601 numbering",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "maintenanceDuration": {
          "canBeNull": false,
          "description": "Maximum duration of maintenance window in hours",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "maintenanceStartTime": {
          "canBeNull": false,
          "description": "Hour and minute the maintenance will start in UTC",
          "fullType": "time",
          "readOnly": true,
          "required": true,
          "type": "time"
        },
        "name": {
          "canBeNull": false,
          "description": "Region name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Region status",
          "fullType": "cloudDB.enterprise.Region.StatusEnum",
          "readOnly": true,
          "required": true,
          "type": "cloudDB.enterprise.Region.StatusEnum"
        }
      }
    },
    "cloudDB.enterprise.Region.StatusEnum": {
      "description": "Region status",
      "enum": [
        "created"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Region"
    },
    "cloudDB.enterprise.Restore.StatusEnum": {
      "description": "Restore status",
      "enum": [
        "created",
        "creating",
        "deleting"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Restore"
    },
    "cloudDB.enterprise.Restore.User.StatusEnum": {
      "description": "User status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updated",
        "updating"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.Restore.User"
    },
    "cloudDB.enterprise.SecurityGroup.StatusEnum": {
      "description": "Security group status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updated",
        "updating"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.SecurityGroup"
    },
    "cloudDB.enterprise.SecurityGroupRule.StatusEnum": {
      "description": "Security group rule status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updated",
        "updating"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.SecurityGroupRule"
    },
    "cloudDB.enterprise.User.StatusEnum": {
      "description": "User status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updated",
        "updating"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "cloudDB.enterprise.User"
    },
    "cloudDB.task.Status": {
      "description": "Task status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "Status",
      "namespace": "cloudDB.task"
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
    }
  },
  "resourcePath": "/cloudDB"
}