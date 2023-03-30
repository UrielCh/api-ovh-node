import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/dedicated/nas.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the STORAGE service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            "dedicatedNas:apiovh:get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/nas"
    },
    {
      "description": "Storage nas",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "dedicatedNas:apiovh:get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nas.Nas"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "dedicatedNas:apiovh:put"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.nas.Nas",
              "description": "New object properties",
              "fullType": "dedicated.nas.Nas",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/dedicated/nas/{serviceName}"
    },
    {
      "description": "List the dedicated.nas.Partition objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get partition list",
          "httpMethod": "GET",
          "iamActions": [
            "dedicatedNas:apiovh:partition/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your storage",
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
          "description": "Create a  new partition",
          "httpMethod": "POST",
          "iamActions": [
            "dedicatedNas:apiovh:partition/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Partition name",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.storage.ProtocolEnum",
              "description": "",
              "fullType": "dedicated.storage.ProtocolEnum",
              "name": "protocol",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Partition size",
              "fullType": "long",
              "name": "size",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task"
        }
      ],
      "path": "/dedicated/nas/{serviceName}/partition"
    },
    {
      "description": "Storage partition",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this partition",
          "httpMethod": "DELETE",
          "iamActions": [
            "dedicatedNas:apiovh:partition/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "dedicatedNas:apiovh:partition/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nas.Partition"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "dedicatedNas:apiovh:partition/edit"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.nas.Partition",
              "description": "New object properties",
              "fullType": "dedicated.nas.Partition",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/dedicated/nas/{serviceName}/partition/{partitionName}"
    },
    {
      "description": "List the dedicated.nas.Access objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "get ACL for this partition",
          "httpMethod": "GET",
          "iamActions": [
            "dedicatedNas:apiovh:partition/access/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
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
          "description": "Add an Acl to this  partition",
          "httpMethod": "POST",
          "iamActions": [
            "dedicatedNas:apiovh:partition/access/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip to add",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task"
        }
      ],
      "path": "/dedicated/nas/{serviceName}/partition/{partitionName}/access"
    },
    {
      "description": "Define Acl for partition",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a given snapshot",
          "httpMethod": "DELETE",
          "iamActions": [
            "dedicatedNas:apiovh:partition/access/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "the ip in root on storage",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "dedicatedNas:apiovh:partition/access/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "the ip in root on storage",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nas.Access"
        }
      ],
      "path": "/dedicated/nas/{serviceName}/partition/{partitionName}/access/{ip}"
    },
    {
      "description": "authorizableIps operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all IPs that can be used in the ACL",
          "httpMethod": "GET",
          "iamActions": [
            "dedicatedNas:apiovh:partition/authorizableIps/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip[]"
        }
      ],
      "path": "/dedicated/nas/{serviceName}/partition/{partitionName}/authorizableIps"
    },
    {
      "description": "List the dedicated.nas.Quota objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get quota for this partition",
          "httpMethod": "GET",
          "iamActions": [
            "dedicatedNas:apiovh:partition/quota/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Set a new quota",
          "httpMethod": "POST",
          "iamActions": [
            "dedicatedNas:apiovh:partition/quota/create"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "the size to set in MB",
              "fullType": "long",
              "name": "size",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "the uid to set quota on",
              "fullType": "long",
              "name": "uid",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task"
        }
      ],
      "path": "/dedicated/nas/{serviceName}/partition/{partitionName}/quota"
    },
    {
      "description": "Partition Quota",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a given quota",
          "httpMethod": "DELETE",
          "iamActions": [
            "dedicatedNas:apiovh:partition/quota/delete"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "the uid to set quota on",
              "fullType": "long",
              "name": "uid",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "dedicatedNas:apiovh:partition/quota/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "the uid to set quota on",
              "fullType": "long",
              "name": "uid",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nas.Quota"
        }
      ],
      "path": "/dedicated/nas/{serviceName}/partition/{partitionName}/quota/{uid}"
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
          "iamActions": [
            "dedicatedNas:apiovh:serviceInfos/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your storage",
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
          "iamActions": [
            "dedicatedNas:apiovh:serviceInfos/edit"
          ],
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
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/dedicated/nas/{serviceName}/serviceInfos"
    },
    {
      "description": "List the dedicated.nasTask.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "View task list",
          "httpMethod": "GET",
          "iamActions": [
            "dedicatedNas:apiovh:task/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.storage.TaskFunctionEnum",
              "description": "Filter the value of operation property (=)",
              "fullType": "dedicated.storage.TaskFunctionEnum",
              "name": "operation",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicated.TaskStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "dedicated.TaskStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicated/nas/{serviceName}/task"
    },
    {
      "description": "Storage task",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "dedicatedNas:apiovh:task/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "id of the task",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task"
        }
      ],
      "path": "/dedicated/nas/{serviceName}/task/{taskId}"
    }
  ],
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
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
    "dedicated.nas.Access": {
      "description": "Define Acl for partition",
      "id": "Access",
      "namespace": "dedicated.nas",
      "properties": {
        "accessId": {
          "canBeNull": false,
          "description": "the id of the access",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ip": {
          "canBeNull": false,
          "description": "the ip in root on storage",
          "fullType": "ipBlock",
          "readOnly": true,
          "required": false,
          "type": "ipBlock"
        }
      }
    },
    "dedicated.nas.Nas": {
      "description": "Storage nas",
      "id": "Nas",
      "namespace": "dedicated.nas",
      "properties": {
        "canCreatePartition": {
          "canBeNull": false,
          "description": "True, if partition creation is allowed on this nas",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "customName": {
          "canBeNull": true,
          "description": "The name you give to the nas",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "datacenter": {
          "canBeNull": true,
          "description": "area of nas",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": true,
          "description": "Access ip of nas",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "mountPath": {
          "canBeNull": false,
          "description": "The storage mount path",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "The storage service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "zpoolSize": {
          "canBeNull": false,
          "description": "the size of the nas",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicated.nas.Partition": {
      "description": "Storage partition",
      "id": "Partition",
      "namespace": "dedicated.nas",
      "properties": {
        "partitionName": {
          "canBeNull": false,
          "description": "the given name of partition",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "protocol": {
          "canBeNull": false,
          "description": "must be nfs cifs or both",
          "fullType": "dedicated.storage.ProtocolEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.storage.ProtocolEnum"
        },
        "size": {
          "canBeNull": false,
          "description": "Partition size",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicated.nas.Quota": {
      "description": "Partition Quota",
      "id": "Quota",
      "namespace": "dedicated.nas",
      "properties": {
        "size": {
          "canBeNull": false,
          "description": "the size to set in MB",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "uid": {
          "canBeNull": false,
          "description": "the uid to set quota on",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicated.nasTask.Task": {
      "description": "Storage task",
      "id": "Task",
      "namespace": "dedicated.nasTask",
      "properties": {
        "details": {
          "canBeNull": true,
          "description": "information about operation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "doneDate": {
          "canBeNull": true,
          "description": "the date when the task finished",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastUpdate": {
          "canBeNull": true,
          "description": "last modification of task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "operation": {
          "canBeNull": false,
          "description": "Task type of operation",
          "fullType": "dedicated.storage.TaskFunctionEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.storage.TaskFunctionEnum"
        },
        "partitionName": {
          "canBeNull": true,
          "description": "name of the partition",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "The actual state of the task",
          "fullType": "dedicated.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TaskStatusEnum"
        },
        "storageName": {
          "canBeNull": true,
          "description": "the name of your service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "taskId": {
          "canBeNull": false,
          "description": "id of the task",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "todoDate": {
          "canBeNull": true,
          "description": "Insertion of task in the todo",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "dedicated.storage.ProtocolEnum": {
      "description": "Partition Protocol",
      "enum": [
        "CIFS",
        "NFS",
        "NFS_CIFS"
      ],
      "enumType": "string",
      "id": "ProtocolEnum",
      "namespace": "dedicated.storage"
    },
    "dedicated.storage.TaskFunctionEnum": {
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
      "enumType": "string",
      "id": "TaskFunctionEnum",
      "namespace": "dedicated.storage"
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
  "resourcePath": "/dedicated/nas"
}