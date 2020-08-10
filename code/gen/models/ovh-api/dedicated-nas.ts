import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/dedicated/nas",
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
      "path": "/dedicated/nas/{serviceName}",
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
          "responseType": "dedicated.nas.Nas",
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
              "dataType": "dedicated.nas.Nas",
              "paramType": "body",
              "fullType": "dedicated.nas.Nas",
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
      "description": "Storage nas"
    },
    {
      "path": "/dedicated/nas/{serviceName}/partition",
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
              "name": "protocol",
              "dataType": "dedicated.storage.ProtocolEnum",
              "paramType": "body",
              "fullType": "dedicated.storage.ProtocolEnum",
              "required": true,
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
          "responseType": "dedicated.nasTask.Task",
          "noAuthentication": false,
          "description": "Create a  new partition"
        }
      ],
      "description": "List the dedicated.nas.Partition objects"
    },
    {
      "path": "/dedicated/nas/{serviceName}/partition/{partitionName}",
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
          "responseType": "dedicated.nas.Partition",
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
              "dataType": "dedicated.nas.Partition",
              "paramType": "body",
              "fullType": "dedicated.nas.Partition",
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
              "name": "partitionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partition name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Storage partition"
    },
    {
      "path": "/dedicated/nas/{serviceName}/partition/{partitionName}/access",
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
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip to add"
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
          "description": "Add an Acl to this  partition"
        }
      ],
      "description": "List the dedicated.nas.Access objects"
    },
    {
      "path": "/dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
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
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "dedicated.nas.Access",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Define Acl for partition"
    },
    {
      "path": "/dedicated/nas/{serviceName}/partition/{partitionName}/authorizableIps",
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
      "path": "/dedicated/nas/{serviceName}/partition/{partitionName}/quota",
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
              "name": "size",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "the size to set in MB"
            },
            {
              "name": "uid",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "the uid to set quota on"
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
      "description": "List the dedicated.nas.Quota objects"
    },
    {
      "path": "/dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}",
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
              "name": "uid",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Uid"
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
          "responseType": "dedicated.nas.Quota",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Partition Quota"
    },
    {
      "path": "/dedicated/nas/{serviceName}/serviceInfos",
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
      "path": "/dedicated/nas/{serviceName}/task",
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
              "name": "operation",
              "dataType": "dedicated.storage.TaskFunctionEnum",
              "paramType": "query",
              "fullType": "dedicated.storage.TaskFunctionEnum",
              "required": false,
              "description": "Filter the value of operation property (=)"
            },
            {
              "name": "status",
              "dataType": "dedicated.TaskStatusEnum",
              "paramType": "query",
              "fullType": "dedicated.TaskStatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
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
      "path": "/dedicated/nas/{serviceName}/task/{taskId}",
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
          "responseType": "dedicated.nasTask.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Storage task"
    }
  ],
  "resourcePath": "/dedicated/nas",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
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
    "dedicated.nas.Access": {
      "id": "Access",
      "namespace": "dedicated.nas",
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
        }
      }
    },
    "dedicated.nas.Nas": {
      "id": "Nas",
      "namespace": "dedicated.nas",
      "description": "Storage nas",
      "properties": {
        "canCreatePartition": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "True, if partition creation is allowed on this nas",
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
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": true,
          "readOnly": true,
          "description": "Access ip of nas",
          "required": false
        },
        "mountPath": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The storage mount path",
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
    "dedicated.nas.Partition": {
      "id": "Partition",
      "namespace": "dedicated.nas",
      "description": "Storage partition",
      "properties": {
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
        }
      }
    },
    "dedicated.nas.Quota": {
      "id": "Quota",
      "namespace": "dedicated.nas",
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