"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = {
    "apiVersion": "1.0",
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
                            "description": "Enterprise cluster ID",
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
                            "description": "New object properties",
                            "fullType": "cloudDB.enterprise.Cluster",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Enterprise cluster ID",
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
                            "description": "Enterprise cluster ID",
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
                            "dataType": "uuid",
                            "description": "Backup id",
                            "fullType": "uuid",
                            "name": "backupId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Enterprise cluster ID",
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
                            "dataType": "uuid",
                            "description": "Backup id",
                            "fullType": "uuid",
                            "name": "backupId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
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
                            "description": "Enterprise cluster ID",
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
                            "description": "Enterprise cluster ID",
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
            "description": "Endpoints",
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
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Endpoint id",
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
                            "description": "Enterprise cluster ID",
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
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Host id",
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
                            "description": "Enterprise cluster ID",
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
                            "description": "Enterprise cluster ID",
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
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "User id",
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
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "User id",
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
                            "description": "Enterprise cluster ID",
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
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Maintenance id",
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
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Maintenance id",
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
                            "description": "Enterprise cluster ID",
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
                            "description": "Enterprise cluster ID",
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
                            "description": "Day of the week the maintenance will start with ISO 8601 numbering",
                            "fullType": "long",
                            "name": "dayOfWeek",
                            "paramType": "body",
                            "required": false
                        },
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
                            "dataType": "string",
                            "description": "Enterprise cluster ID",
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
                            "description": "New object properties",
                            "fullType": "cloudDB.enterprise.Cluster.MaintenanceWindow",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Enterprise cluster ID",
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
                            "description": "Enterprise cluster ID",
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
                            "description": "Enterprise cluster ID",
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
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Restore id",
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
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Restore id",
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
                            "dataType": "string",
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Restore id",
                            "fullType": "uuid",
                            "name": "restoreId",
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
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Restore id",
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
                            "description": "Enterprise cluster ID",
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
                            "description": "Enterprise cluster ID",
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
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Security group id",
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
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Security group id",
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
                            "description": "New object properties",
                            "fullType": "cloudDB.enterprise.Cluster.SecurityGroup",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Security group id",
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
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Security group id",
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
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Security group id",
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
                            "dataType": "string",
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Rule id",
                            "fullType": "uuid",
                            "name": "ruleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Security group id",
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
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Rule id",
                            "fullType": "uuid",
                            "name": "ruleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Security group id",
                            "fullType": "uuid",
                            "name": "securityGroupId",
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
                            "description": "Enterprise cluster ID",
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
                            "description": "New object properties",
                            "fullType": "services.Service",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Enterprise cluster ID",
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
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Filter the value of function property (=)",
                            "fullType": "string",
                            "name": "function",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "cloudDB.task.Status",
                            "description": "Filter the value of status property (=)",
                            "fullType": "cloudDB.task.Status",
                            "name": "status",
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
            "description": "Tasks",
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
                            "description": "Enterprise cluster ID",
                            "fullType": "string",
                            "name": "clusterId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Task id",
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
                            "description": "Enterprise cluster ID",
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
                            "description": "Enterprise cluster ID",
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
                            "description": "Enterprise cluster ID",
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
    "basePath": "https://eu.api.soyoustart.com/1.0",
    "models": {
        "cloudDB.Dump": {
            "description": "Dumps",
            "id": "Dump",
            "namespace": "cloudDB",
            "properties": {
                "creationDate": {
                    "canBeNull": false,
                    "description": "Creation date of the dump",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "databaseName": {
                    "canBeNull": false,
                    "description": "Database name associated to this dump",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "expirationDate": {
                    "canBeNull": true,
                    "description": "Deletion date of the dump",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Dump id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "instanceId": {
                    "canBeNull": false,
                    "description": "Instance id associated to this dump",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "instanceType": {
                    "canBeNull": false,
                    "description": "Instance type associated to this dump",
                    "fullType": "cloudDB.instance.Type",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.instance.Type"
                },
                "name": {
                    "canBeNull": true,
                    "description": "Dump name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "size": {
                    "canBeNull": true,
                    "description": "Dump size",
                    "fullType": "complexType.UnitAndValue<long>",
                    "readOnly": true,
                    "required": false,
                    "type": "complexType.UnitAndValue<long>"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Dump status",
                    "fullType": "cloudDB.dump.Status",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.dump.Status"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The task id working on this object",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "url": {
                    "canBeNull": true,
                    "description": "Dump url",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloudDB.Service": {
            "description": "CloudDB Project",
            "id": "Service",
            "namespace": "cloudDB",
            "properties": {
                "creationDate": {
                    "canBeNull": false,
                    "description": "Project creation date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Project id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Project last update date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Project custom name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "quotas": {
                    "canBeNull": false,
                    "description": "Project quota limitation",
                    "fullType": "cloudDB.project.Quotas",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.project.Quotas"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Project status",
                    "fullType": "cloudDB.project.Status",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.project.Status"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The task id working on this object",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                }
            }
        },
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
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Task id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
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
                    "required": false,
                    "type": "long"
                },
                "startDate": {
                    "canBeNull": false,
                    "description": "Task start date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Task status",
                    "fullType": "cloudDB.task.Status",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.task.Status"
                }
            }
        },
        "cloudDB.dump.Status": {
            "description": "Dump status",
            "enum": [
                "created",
                "creating",
                "deleting"
            ],
            "enumType": "string",
            "id": "Status",
            "namespace": "cloudDB.dump"
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
            "id": "enterprise.Cluster",
            "namespace": "cloudDB",
            "properties": {
                "autoBackup": {
                    "canBeNull": false,
                    "description": "Automatic managed backup activated",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
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
                    "required": false,
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
                    "required": false,
                    "type": "uuid"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "The last update date of this cluster",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Cluster name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "offerName": {
                    "canBeNull": false,
                    "description": "Offer name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "offerType": {
                    "canBeNull": false,
                    "description": "Offer type",
                    "fullType": "cloudDB.enterprise.Offer.TypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.enterprise.Offer.TypeEnum"
                },
                "regionName": {
                    "canBeNull": false,
                    "description": "Cluster region name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
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
                    "required": false,
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
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloudDB.enterprise.Cluster.Backup": {
            "description": "Backup",
            "id": "enterprise.Cluster.Backup",
            "namespace": "cloudDB",
            "properties": {
                "clusterId": {
                    "canBeNull": false,
                    "description": "Cluster id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "creationDate": {
                    "canBeNull": false,
                    "description": "Backup task creation date and time",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
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
                    "required": false,
                    "type": "uuid"
                },
                "internal": {
                    "canBeNull": false,
                    "description": "Created by auto backup process",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Last time this backup has been updated",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Backup name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
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
                    "required": false,
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
            "id": "enterprise.Cluster.Endpoint",
            "namespace": "cloudDB",
            "properties": {
                "clusterId": {
                    "canBeNull": false,
                    "description": "Cluster id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "creationDate": {
                    "canBeNull": false,
                    "description": "Endpoint creation date and time",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "fqdn": {
                    "canBeNull": false,
                    "description": "Endpoint fully qualified domain name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Endpoint id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Last time this endpoint has been updated",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Endpoint name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "port": {
                    "canBeNull": false,
                    "description": "Endpoint port",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Endpoint status",
                    "fullType": "cloudDB.enterprise.Endpoint.StatusEnum",
                    "readOnly": true,
                    "required": false,
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
            "id": "enterprise.Cluster.Host",
            "namespace": "cloudDB",
            "properties": {
                "creationDate": {
                    "canBeNull": false,
                    "description": "Creation date of this host",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Host id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "The last update date of this host",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Host name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
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
            "id": "enterprise.Cluster.LdpMember",
            "namespace": "cloudDB",
            "properties": {
                "creationDate": {
                    "canBeNull": false,
                    "description": "Logs Data Platform access creation date and time",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "id": {
                    "canBeNull": false,
                    "description": "User id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Last time this ldp access has been updated",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
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
                    "required": false,
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
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloudDB.enterprise.Cluster.Maintenance": {
            "description": "Maintenance window",
            "id": "enterprise.Cluster.Maintenance",
            "namespace": "cloudDB",
            "properties": {
                "clusterId": {
                    "canBeNull": false,
                    "description": "Cluster id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "creationDate": {
                    "canBeNull": false,
                    "description": "Maintenance creation date and time",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "duration": {
                    "canBeNull": false,
                    "description": "Maximum duration of the maintenance in minutes",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Maintenance id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Last time this maintenance has been updated",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "scheduledAt": {
                    "canBeNull": false,
                    "description": "Date and time the maintenance will start in UTC",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Maintenance status",
                    "fullType": "cloudDB.enterprise.Maintenance.StatusEnum",
                    "readOnly": true,
                    "required": false,
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
            "id": "enterprise.Cluster.MaintenanceWindow",
            "namespace": "cloudDB",
            "properties": {
                "clusterId": {
                    "canBeNull": false,
                    "description": "Cluster id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "creationDate": {
                    "canBeNull": false,
                    "description": "Maintenance window creation date and time",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "dayOfWeek": {
                    "canBeNull": false,
                    "description": "Day of the week the maintenance will start with ISO 8601 numbering",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "duration": {
                    "canBeNull": false,
                    "description": "Maximum duration of maintenance window in hours",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Maintenance window id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Last time this maintenance window has been updated",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "startTime": {
                    "canBeNull": false,
                    "description": "Hour and minute the maintenance will start in UTC",
                    "fullType": "time",
                    "readOnly": false,
                    "required": false,
                    "type": "time"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Maintenance window status",
                    "fullType": "cloudDB.enterprise.MaintenanceWindow.StatusEnum",
                    "readOnly": true,
                    "required": false,
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
            "id": "enterprise.Cluster.Restore",
            "namespace": "cloudDB",
            "properties": {
                "backupId": {
                    "canBeNull": false,
                    "description": "Base backup id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "creationDate": {
                    "canBeNull": false,
                    "description": "Restore creation date and time",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
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
                    "required": false,
                    "type": "uuid"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Last time this restore has been updated",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
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
                    "required": false,
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
            "id": "enterprise.Cluster.Restore.User",
            "namespace": "cloudDB",
            "properties": {
                "creationDate": {
                    "canBeNull": false,
                    "description": "User creation date and time",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "id": {
                    "canBeNull": false,
                    "description": "User id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Last time this user has been updated",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "name": {
                    "canBeNull": false,
                    "description": "User name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "restoreId": {
                    "canBeNull": false,
                    "description": "Restored instance id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "status": {
                    "canBeNull": false,
                    "description": "User status",
                    "fullType": "cloudDB.enterprise.Restore.User.StatusEnum",
                    "readOnly": true,
                    "required": false,
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
            "id": "enterprise.Cluster.SecurityGroup",
            "namespace": "cloudDB",
            "properties": {
                "clusterId": {
                    "canBeNull": false,
                    "description": "Cluster id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "creationDate": {
                    "canBeNull": false,
                    "description": "Security group creation date and time",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Security group id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Last time this security group has been updated",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Security group name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "rulesCount": {
                    "canBeNull": false,
                    "description": "Number of rules contained by this security group",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Security group status",
                    "fullType": "cloudDB.enterprise.SecurityGroup.StatusEnum",
                    "readOnly": true,
                    "required": false,
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
            "id": "enterprise.Cluster.SecurityGroup.Rule",
            "namespace": "cloudDB",
            "properties": {
                "creationDate": {
                    "canBeNull": false,
                    "description": "Rule creation date and time",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Rule id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Last time this rule has been updated",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "securityGroupId": {
                    "canBeNull": false,
                    "description": "Security group id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "source": {
                    "canBeNull": false,
                    "description": "Network range to allow",
                    "fullType": "ipBlock",
                    "readOnly": true,
                    "required": false,
                    "type": "ipBlock"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Rule status",
                    "fullType": "cloudDB.enterprise.SecurityGroupRule.StatusEnum",
                    "readOnly": true,
                    "required": false,
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
            "id": "enterprise.Cluster.User",
            "namespace": "cloudDB",
            "properties": {
                "clusterId": {
                    "canBeNull": false,
                    "description": "Cluster id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "creationDate": {
                    "canBeNull": false,
                    "description": "User creation date and time",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "id": {
                    "canBeNull": false,
                    "description": "User id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Last time this user has been updated",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "name": {
                    "canBeNull": false,
                    "description": "User name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "User status",
                    "fullType": "cloudDB.enterprise.User.StatusEnum",
                    "readOnly": true,
                    "required": false,
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
            "id": "enterprise.Offer",
            "namespace": "cloudDB",
            "properties": {
                "creationDate": {
                    "canBeNull": false,
                    "description": "Offer creation date and time",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Last time this offer has been updated",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
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
                    "required": false,
                    "type": "long"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Offer name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Offer status",
                    "fullType": "cloudDB.enterprise.Offer.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.enterprise.Offer.StatusEnum"
                }
            }
        },
        "cloudDB.enterprise.Offer.Region": {
            "description": "Offer capabilities for this region",
            "id": "enterprise.Offer.Region",
            "namespace": "cloudDB",
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
                    "required": false,
                    "type": "string"
                },
                "regionName": {
                    "canBeNull": false,
                    "description": "Region name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Status of an offer in a region",
                    "fullType": "cloudDB.enterprise.Offer.Region.StatusEnum",
                    "readOnly": true,
                    "required": false,
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
            "id": "enterprise.Region",
            "namespace": "cloudDB",
            "properties": {
                "creationDate": {
                    "canBeNull": false,
                    "description": "Region creation date and time",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Last time this region has been updated",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "maintenanceDayOfWeek": {
                    "canBeNull": false,
                    "description": "Day of the week the maintenance will start with ISO 8601 numbering",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maintenanceDuration": {
                    "canBeNull": false,
                    "description": "Maximum duration of maintenance window in hours",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "maintenanceStartTime": {
                    "canBeNull": false,
                    "description": "Hour and minute the maintenance will start in UTC",
                    "fullType": "time",
                    "readOnly": true,
                    "required": false,
                    "type": "time"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Region name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Region status",
                    "fullType": "cloudDB.enterprise.Region.StatusEnum",
                    "readOnly": true,
                    "required": false,
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
        "cloudDB.instance.Type": {
            "description": "Instance type accessible",
            "enum": [
                "standard"
            ],
            "enumType": "string",
            "id": "Type",
            "namespace": "cloudDB.instance"
        },
        "cloudDB.project.Quotas": {
            "description": "Quota limitation for a project",
            "id": "Quotas",
            "namespace": "cloudDB.project",
            "properties": {
                "standard": {
                    "canBeNull": false,
                    "description": "Standard instances quotas",
                    "readOnly": false,
                    "required": false,
                    "type": "cloudDB.project.quotas.Standard"
                }
            }
        },
        "cloudDB.project.Status": {
            "description": "CloudDB project status",
            "enum": [
                "created",
                "creating",
                "deleting",
                "reopening",
                "suspended",
                "suspending"
            ],
            "enumType": "string",
            "id": "Status",
            "namespace": "cloudDB.project"
        },
        "cloudDB.project.quotas.Standard": {
            "description": "Quota limitation for a standard instance",
            "id": "Standard",
            "namespace": "cloudDB.project.quotas",
            "properties": {
                "instance": {
                    "canBeNull": false,
                    "description": "Standard instances \"instance\" quotas",
                    "readOnly": false,
                    "required": false,
                    "type": "cloudDB.project.quotas.standard.Quota"
                }
            }
        },
        "cloudDB.project.quotas.standard.Quota": {
            "description": "Quota limitation for a standard instance",
            "id": "Quota",
            "namespace": "cloudDB.project.quotas.standard",
            "properties": {
                "current": {
                    "canBeNull": false,
                    "description": "The current number of this kind of object",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "max": {
                    "canBeNull": false,
                    "description": "The max number of this kind of object",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "cloudDB.standard.Configuration": {
            "description": "Configurations",
            "id": "standard.Configuration",
            "namespace": "cloudDB",
            "properties": {
                "details": {
                    "canBeNull": false,
                    "description": "Configuration full details",
                    "fullType": "cloudDB.standard.configuration.Detail[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.configuration.Detail[]"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Last update date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Configuration status",
                    "fullType": "cloudDB.standard.configuration.Status",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.configuration.Status"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "Configuration linked task id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                }
            }
        },
        "cloudDB.standard.Database": {
            "description": "Databases",
            "id": "standard.Database",
            "namespace": "cloudDB",
            "properties": {
                "backupTime": {
                    "canBeNull": true,
                    "description": "Time of the next backup ( every day )",
                    "fullType": "time",
                    "readOnly": true,
                    "required": false,
                    "type": "time"
                },
                "creationDate": {
                    "canBeNull": false,
                    "description": "Creation date of the database",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "dumpCount": {
                    "canBeNull": false,
                    "description": "The number of available dumps associated to this database",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "extensions": {
                    "canBeNull": false,
                    "description": "List of enabled extensions on this database",
                    "fullType": "string[]",
                    "readOnly": true,
                    "required": false,
                    "type": "string[]"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Database name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "quotaUsed": {
                    "canBeNull": false,
                    "description": "Space used by the database",
                    "fullType": "complexType.UnitAndValue<long>",
                    "readOnly": true,
                    "required": false,
                    "type": "complexType.UnitAndValue<long>"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Database status",
                    "fullType": "cloudDB.standard.database.Status",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.database.Status"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The id of the task working on this object",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "users": {
                    "canBeNull": false,
                    "description": "Users granted to this database",
                    "fullType": "cloudDB.standard.database.User[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.database.User[]"
                }
            }
        },
        "cloudDB.standard.Flavor": {
            "description": "Standard flavors",
            "id": "standard.Flavor",
            "namespace": "cloudDB",
            "properties": {
                "cpu": {
                    "canBeNull": true,
                    "description": "Flavor cpu informations",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "disk": {
                    "canBeNull": true,
                    "description": "Flavor disk informations",
                    "fullType": "complexType.UnitAndValue<long>",
                    "readOnly": true,
                    "required": false,
                    "type": "complexType.UnitAndValue<long>"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Flavor name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "ram": {
                    "canBeNull": true,
                    "description": "Flavor RAM informations",
                    "fullType": "complexType.UnitAndValue<long>",
                    "readOnly": true,
                    "required": false,
                    "type": "complexType.UnitAndValue<long>"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Flavor status",
                    "fullType": "cloudDB.standard.flavor.Status",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.flavor.Status"
                },
                "supportedRegionNames": {
                    "canBeNull": false,
                    "description": "Flavor supported regions",
                    "fullType": "string[]",
                    "readOnly": true,
                    "required": false,
                    "type": "string[]"
                }
            }
        },
        "cloudDB.standard.Grant": {
            "description": "Grants",
            "id": "standard.Grant",
            "namespace": "cloudDB",
            "properties": {
                "creationDate": {
                    "canBeNull": false,
                    "description": "Creation date of the grant",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "databaseName": {
                    "canBeNull": false,
                    "description": "Database's name for this grant",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Grant id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "The last update date of this grant",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Grant status",
                    "fullType": "cloudDB.standard.grant.Status",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.grant.Status"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The id of the task working on this object",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Grant type",
                    "fullType": "cloudDB.standard.grant.Type",
                    "readOnly": false,
                    "required": false,
                    "type": "cloudDB.standard.grant.Type"
                },
                "userName": {
                    "canBeNull": false,
                    "description": "User name to grant",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloudDB.standard.Image": {
            "description": "Standard images",
            "id": "standard.Image",
            "namespace": "cloudDB",
            "properties": {
                "name": {
                    "canBeNull": false,
                    "description": "Image name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Image status",
                    "fullType": "cloudDB.standard.image.Status",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.image.Status"
                },
                "supportedFlavorNames": {
                    "canBeNull": false,
                    "description": "Image supported flavorss",
                    "fullType": "string[]",
                    "readOnly": true,
                    "required": false,
                    "type": "string[]"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Image type",
                    "fullType": "cloudDB.standard.image.Type",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.image.Type"
                },
                "version": {
                    "canBeNull": false,
                    "description": "Image version",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloudDB.standard.Instance": {
            "description": "Standard instances",
            "id": "standard.Instance",
            "namespace": "cloudDB",
            "properties": {
                "accessCommand": {
                    "canBeNull": false,
                    "description": "Command to access to your instance",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "creationDate": {
                    "canBeNull": false,
                    "description": "Instance creation date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "creationRules": {
                    "canBeNull": false,
                    "description": "Creation rules",
                    "fullType": "cloudDB.standard.instance.CreationRules",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.instance.CreationRules"
                },
                "diskOverquota": {
                    "canBeNull": true,
                    "description": "If set to TRUE, the instance is currently in overquota state",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "diskUsed": {
                    "canBeNull": false,
                    "description": "Instance used disk informations",
                    "fullType": "complexType.UnitAndValue<long>",
                    "readOnly": true,
                    "required": false,
                    "type": "complexType.UnitAndValue<long>"
                },
                "endpoint": {
                    "canBeNull": true,
                    "description": "Instance endpoint",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "flavor": {
                    "canBeNull": false,
                    "description": "Flavor informations",
                    "fullType": "cloudDB.standard.instance.Flavor",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.instance.Flavor"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Instance uuid",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "image": {
                    "canBeNull": false,
                    "description": "Image informations",
                    "fullType": "cloudDB.standard.instance.Image",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.instance.Image"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Instance last update date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "metrics": {
                    "canBeNull": true,
                    "description": "Metrics data",
                    "fullType": "cloudDB.standard.instance.MetricsData",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.instance.MetricsData"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Instance name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "port": {
                    "canBeNull": true,
                    "description": "Instance service port",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Region informations",
                    "fullType": "cloudDB.standard.instance.Region",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.instance.Region"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Instance status",
                    "fullType": "cloudDB.standard.instance.Status",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.instance.Status"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The task id working on this object",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                }
            }
        },
        "cloudDB.standard.Oom": {
            "description": "OOM kill informations",
            "id": "Oom",
            "namespace": "cloudDB.standard",
            "properties": {
                "date": {
                    "canBeNull": false,
                    "description": "Date of the OOM kill",
                    "readOnly": false,
                    "required": false,
                    "type": "datetime"
                },
                "sizeReached": {
                    "canBeNull": false,
                    "description": "Memory size reached",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "cloudDB.standard.Region": {
            "description": "Standard regions",
            "id": "standard.Region",
            "namespace": "cloudDB",
            "properties": {
                "name": {
                    "canBeNull": false,
                    "description": "Region name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Region status",
                    "fullType": "cloudDB.standard.region.Status",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.region.Status"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Region type",
                    "fullType": "cloudDB.standard.region.Type",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.region.Type"
                }
            }
        },
        "cloudDB.standard.TemporaryLogsLink": {
            "description": "Temporary url informations",
            "id": "TemporaryLogsLink",
            "namespace": "cloudDB.standard",
            "properties": {
                "expirationDate": {
                    "canBeNull": false,
                    "description": "Temporary url expiration date",
                    "readOnly": false,
                    "required": false,
                    "type": "datetime"
                },
                "url": {
                    "canBeNull": false,
                    "description": "Temporary url",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloudDB.standard.User": {
            "description": "Users",
            "id": "standard.User",
            "namespace": "cloudDB",
            "properties": {
                "creationDate": {
                    "canBeNull": false,
                    "description": "Creation date of the user",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "databases": {
                    "canBeNull": false,
                    "description": "Databases granted for this user",
                    "fullType": "cloudDB.standard.user.Database[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.user.Database[]"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "The last update date of the user",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "name": {
                    "canBeNull": false,
                    "description": "User name used to connect to your databases",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "User status",
                    "fullType": "cloudDB.standard.user.Status",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.user.Status"
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
        "cloudDB.standard.Whitelist": {
            "description": "IP whitelisting for your instance",
            "id": "standard.Whitelist",
            "namespace": "cloudDB",
            "properties": {
                "creationDate": {
                    "canBeNull": false,
                    "description": "Creation date of this whitelist",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "The last update date of this whitelist",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Custom name for your Whitelisted IP",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "network": {
                    "canBeNull": false,
                    "description": "The whitelisted network on your instance",
                    "fullType": "ipBlock",
                    "readOnly": true,
                    "required": false,
                    "type": "ipBlock"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Whitelist status",
                    "fullType": "cloudDB.standard.whitelist.Status",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.whitelist.Status"
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
        "cloudDB.standard.configuration.Detail": {
            "description": "Configuration detail property",
            "id": "Detail",
            "namespace": "cloudDB.standard.configuration",
            "properties": {
                "availableValues": {
                    "canBeNull": false,
                    "description": "Configuration available values",
                    "readOnly": false,
                    "required": false,
                    "type": "string[]"
                },
                "defaultValue": {
                    "canBeNull": false,
                    "description": "Configuration default value",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Configuration description",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "key": {
                    "canBeNull": false,
                    "description": "Configuration key name",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Configuration last update date",
                    "readOnly": false,
                    "required": false,
                    "type": "datetime"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Configuration value type",
                    "readOnly": false,
                    "required": false,
                    "type": "cloudDB.standard.configuration.detail.Type"
                },
                "unit": {
                    "canBeNull": true,
                    "description": "Configuration unit type",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "value": {
                    "canBeNull": false,
                    "description": "Configuration current value",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloudDB.standard.configuration.Status": {
            "description": "Configuration status",
            "enum": [
                "applied",
                "updating"
            ],
            "enumType": "string",
            "id": "Status",
            "namespace": "cloudDB.standard.configuration"
        },
        "cloudDB.standard.configuration.detail.Type": {
            "description": "Configuration detail type",
            "enum": [
                "boolean",
                "number",
                "string"
            ],
            "enumType": "string",
            "id": "Type",
            "namespace": "cloudDB.standard.configuration.detail"
        },
        "cloudDB.standard.database.Dump": {
            "description": "Databases extension",
            "id": "standard.database.Dump",
            "namespace": "cloudDB",
            "properties": {
                "creationDate": {
                    "canBeNull": false,
                    "description": "Creation date of the dump",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "expirationDate": {
                    "canBeNull": true,
                    "description": "Deletion date of the dump",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Dump id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "name": {
                    "canBeNull": true,
                    "description": "Dump name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "size": {
                    "canBeNull": true,
                    "description": "Dump size",
                    "fullType": "complexType.UnitAndValue<long>",
                    "readOnly": true,
                    "required": false,
                    "type": "complexType.UnitAndValue<long>"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Dump status",
                    "fullType": "cloudDB.dump.Status",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.dump.Status"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The task id working on this object",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "url": {
                    "canBeNull": true,
                    "description": "Dump url",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloudDB.standard.database.Extension": {
            "description": "Databases extension",
            "id": "standard.database.Extension",
            "namespace": "cloudDB",
            "properties": {
                "description": {
                    "canBeNull": false,
                    "description": "Extension description",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Extension name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "requiredExtensions": {
                    "canBeNull": false,
                    "description": "Name of required extensions to enable this one",
                    "fullType": "string[]",
                    "readOnly": true,
                    "required": false,
                    "type": "string[]"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Extension status",
                    "fullType": "cloudDB.standard.database.extension.Status",
                    "readOnly": true,
                    "required": false,
                    "type": "cloudDB.standard.database.extension.Status"
                }
            }
        },
        "cloudDB.standard.database.Status": {
            "description": "Database status",
            "enum": [
                "created",
                "creating",
                "deleting",
                "dumping",
                "importing",
                "restoring"
            ],
            "enumType": "string",
            "id": "Status",
            "namespace": "cloudDB.standard.database"
        },
        "cloudDB.standard.database.User": {
            "description": "User granted to a database",
            "id": "User",
            "namespace": "cloudDB.standard.database",
            "properties": {
                "grantId": {
                    "canBeNull": false,
                    "description": "The grantId associated for this databaseName and this userName",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "grantType": {
                    "canBeNull": false,
                    "description": "User's rights on this database",
                    "readOnly": false,
                    "required": false,
                    "type": "cloudDB.standard.grant.Type"
                },
                "userName": {
                    "canBeNull": false,
                    "description": "User's name granted on this database",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloudDB.standard.database.extension.Status": {
            "description": "Extension status",
            "enum": [
                "disabled",
                "disabling",
                "enabled",
                "enabling"
            ],
            "enumType": "string",
            "id": "Status",
            "namespace": "cloudDB.standard.database.extension"
        },
        "cloudDB.standard.flavor.Status": {
            "description": "Flavor status",
            "enum": [
                "available",
                "testing",
                "unavailable"
            ],
            "enumType": "string",
            "id": "Status",
            "namespace": "cloudDB.standard.flavor"
        },
        "cloudDB.standard.grant.Status": {
            "description": "Grant status",
            "enum": [
                "created",
                "creating",
                "deleting",
                "updating"
            ],
            "enumType": "string",
            "id": "Status",
            "namespace": "cloudDB.standard.grant"
        },
        "cloudDB.standard.grant.Type": {
            "description": "Grant type",
            "enum": [
                "admin",
                "none",
                "ro",
                "rw"
            ],
            "enumType": "string",
            "id": "Type",
            "namespace": "cloudDB.standard.grant"
        },
        "cloudDB.standard.image.Capabilities": {
            "description": "Image capabilities",
            "id": "Capabilities",
            "namespace": "cloudDB.standard.image",
            "properties": {
                "database": {
                    "canBeNull": false,
                    "description": "Database capbilities",
                    "readOnly": false,
                    "required": false,
                    "type": "cloudDB.standard.image.capabilities.Capability"
                },
                "dump": {
                    "canBeNull": false,
                    "description": "Dump capbilities",
                    "readOnly": false,
                    "required": false,
                    "type": "cloudDB.standard.image.capabilities.Capability"
                },
                "grant": {
                    "canBeNull": false,
                    "description": "Grant capbilities",
                    "readOnly": false,
                    "required": false,
                    "type": "cloudDB.standard.image.capabilities.Capability"
                },
                "user": {
                    "canBeNull": false,
                    "description": "User capbilities",
                    "readOnly": false,
                    "required": false,
                    "type": "cloudDB.standard.image.capabilities.Capability"
                }
            }
        },
        "cloudDB.standard.image.Status": {
            "description": "Image status",
            "enum": [
                "available",
                "testing",
                "unavailable"
            ],
            "enumType": "string",
            "id": "Status",
            "namespace": "cloudDB.standard.image"
        },
        "cloudDB.standard.image.Type": {
            "description": "Image type",
            "enum": [
                "mariadb",
                "mongodb",
                "mysql",
                "postgresql",
                "redis"
            ],
            "enumType": "string",
            "id": "Type",
            "namespace": "cloudDB.standard.image"
        },
        "cloudDB.standard.image.capabilities.Capability": {
            "description": "Object capability",
            "id": "Capability",
            "namespace": "cloudDB.standard.image.capabilities",
            "properties": {
                "create": {
                    "canBeNull": false,
                    "description": "Can the object be created",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "delete": {
                    "canBeNull": false,
                    "description": "Can the object be deleted",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "update": {
                    "canBeNull": false,
                    "description": "Can the object be updated",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                }
            }
        },
        "cloudDB.standard.instance.CreationRules": {
            "description": "Creation rules",
            "id": "CreationRules",
            "namespace": "cloudDB.standard.instance",
            "properties": {
                "databaseName": {
                    "canBeNull": true,
                    "description": "Database name creation rules",
                    "readOnly": false,
                    "required": false,
                    "type": "cloudDB.standard.instance.creationRules.CreationRule"
                },
                "userName": {
                    "canBeNull": true,
                    "description": "User name creation rules",
                    "readOnly": false,
                    "required": false,
                    "type": "cloudDB.standard.instance.creationRules.CreationRule"
                },
                "userPassword": {
                    "canBeNull": true,
                    "description": "User password creation rules",
                    "readOnly": false,
                    "required": false,
                    "type": "cloudDB.standard.instance.creationRules.CreationRule"
                }
            }
        },
        "cloudDB.standard.instance.Flavor": {
            "description": "Flavor detail property",
            "id": "Flavor",
            "namespace": "cloudDB.standard.instance",
            "properties": {
                "cpu": {
                    "canBeNull": true,
                    "description": "Flavor cpu informations",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "disk": {
                    "canBeNull": true,
                    "description": "Flavor disk informations",
                    "readOnly": false,
                    "required": false,
                    "type": "complexType.UnitAndValue<long>"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Flavor name",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "ram": {
                    "canBeNull": true,
                    "description": "Flavor RAM informations",
                    "readOnly": false,
                    "required": false,
                    "type": "complexType.UnitAndValue<long>"
                }
            }
        },
        "cloudDB.standard.instance.Image": {
            "description": "Image detail property",
            "id": "Image",
            "namespace": "cloudDB.standard.instance",
            "properties": {
                "capabilities": {
                    "canBeNull": false,
                    "description": "Image instance capabilities",
                    "readOnly": false,
                    "required": false,
                    "type": "cloudDB.standard.image.Capabilities"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Image name",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloudDB.standard.instance.MetricsData": {
            "description": "Metrics data",
            "id": "MetricsData",
            "namespace": "cloudDB.standard.instance",
            "properties": {
                "endpoint": {
                    "canBeNull": false,
                    "description": "Metrics endpoint",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "readToken": {
                    "canBeNull": false,
                    "description": "Metrics read token",
                    "readOnly": false,
                    "required": false,
                    "type": "password"
                }
            }
        },
        "cloudDB.standard.instance.Region": {
            "description": "Region detail property",
            "id": "Region",
            "namespace": "cloudDB.standard.instance",
            "properties": {
                "name": {
                    "canBeNull": true,
                    "description": "Region name",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "type": {
                    "canBeNull": true,
                    "description": "Region type",
                    "readOnly": false,
                    "required": false,
                    "type": "cloudDB.standard.region.Type"
                }
            }
        },
        "cloudDB.standard.instance.Status": {
            "description": "Standard instance status",
            "enum": [
                "creating",
                "deleting",
                "reopening",
                "restarting",
                "running",
                "starting",
                "stopped",
                "stopping",
                "suspended",
                "suspending",
                "updating"
            ],
            "enumType": "string",
            "id": "Status",
            "namespace": "cloudDB.standard.instance"
        },
        "cloudDB.standard.instance.creationRules.CreationRule": {
            "description": "Creation rule",
            "id": "CreationRule",
            "namespace": "cloudDB.standard.instance.creationRules",
            "properties": {
                "exclude": {
                    "canBeNull": false,
                    "description": "List of regex that must not match the object",
                    "readOnly": false,
                    "required": false,
                    "type": "string[]"
                },
                "max": {
                    "canBeNull": false,
                    "description": "Object max length",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "min": {
                    "canBeNull": false,
                    "description": "Object min length",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "regex": {
                    "canBeNull": false,
                    "description": "Regex to validate the object",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloudDB.standard.region.Status": {
            "description": "Region status",
            "enum": [
                "available",
                "testing",
                "unavailable"
            ],
            "enumType": "string",
            "id": "Status",
            "namespace": "cloudDB.standard.region"
        },
        "cloudDB.standard.region.Type": {
            "description": "Region type",
            "enum": [
                "hosting",
                "internal",
                "public"
            ],
            "enumType": "string",
            "id": "Type",
            "namespace": "cloudDB.standard.region"
        },
        "cloudDB.standard.user.Database": {
            "description": "Databases linked to an user",
            "id": "Database",
            "namespace": "cloudDB.standard.user",
            "properties": {
                "databaseName": {
                    "canBeNull": false,
                    "description": "Database's name linked to this user",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "grantId": {
                    "canBeNull": false,
                    "description": "The grantId associated to this userName for this databaseName",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "grantType": {
                    "canBeNull": false,
                    "description": "Grant of this user for this database",
                    "readOnly": false,
                    "required": false,
                    "type": "cloudDB.standard.grant.Type"
                }
            }
        },
        "cloudDB.standard.user.Status": {
            "description": "User status",
            "enum": [
                "created",
                "creating",
                "deleting",
                "updating"
            ],
            "enumType": "string",
            "id": "Status",
            "namespace": "cloudDB.standard.user"
        },
        "cloudDB.standard.whitelist.Status": {
            "description": "Whitelist status",
            "enum": [
                "created",
                "creating",
                "deleting",
                "updating"
            ],
            "enumType": "string",
            "id": "Status",
            "namespace": "cloudDB.standard.whitelist"
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
        }
    },
    "resourcePath": "/cloudDB"
};
//# sourceMappingURL=cloudDB.js.map