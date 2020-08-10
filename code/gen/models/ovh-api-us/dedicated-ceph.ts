import {Schema} from '../../src/schema';

// imported from https://api.us.ovhcloud.com:443/1.0/dedicated/ceph.json

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "description": "Operations about the CEPH service",
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
      "path": "/dedicated/ceph"
    },
    {
      "description": "dedicated.ceph.clusterGet",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get cluster details",
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
          "responseType": "dedicated.ceph.clusterGet.response"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Update cluster details",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.ceph.clusterUpdate.crushTunablesEnum",
              "description": "Tunables of cluster",
              "fullType": "dedicated.ceph.clusterUpdate.crushTunablesEnum",
              "name": "crushTunables",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the cluster",
              "fullType": "string",
              "name": "label",
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
      "path": "/dedicated/ceph/{serviceName}"
    },
    {
      "description": "dedicated.ceph.aclCreate",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get list of all IP ACLs in a cluster",
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
          "responseType": "dedicated.ceph.aclList.response[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create one or more new IP ACLs",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip[]",
              "description": "List of new ACLs",
              "fullType": "ip[]",
              "name": "aclList",
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
      "path": "/dedicated/ceph/{serviceName}/acl"
    },
    {
      "description": "dedicated.ceph.aclDeleteSingle",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete single IP ACL",
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
              "description": "Acl ID",
              "fullType": "string",
              "name": "aclId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get details about IP ACL",
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
              "description": "Acl ID",
              "fullType": "string",
              "name": "aclId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.ceph.aclGet.response"
        }
      ],
      "path": "/dedicated/ceph/{serviceName}/acl/{aclId}"
    },
    {
      "description": "dedicated.ceph.cephfsList",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List CephFS filestystems",
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
          "responseType": "dedicated.ceph.cephfsList.response[]"
        }
      ],
      "path": "/dedicated/ceph/{serviceName}/cephfs"
    },
    {
      "description": "dedicated.ceph.cephfsGet",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Purge CephFS filesystem",
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
              "description": "Fs name",
              "fullType": "string",
              "name": "fsName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get CephFS filestystem information",
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
              "description": "Fs name",
              "fullType": "string",
              "name": "fsName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.ceph.cephfsGet.response"
        }
      ],
      "path": "/dedicated/ceph/{serviceName}/cephfs/{fsName}"
    },
    {
      "description": "dedicated.ceph.cephfsDisable",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Disable CephFS filesystem",
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
            },
            {
              "dataType": "string",
              "description": "Fs name",
              "fullType": "string",
              "name": "fsName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/dedicated/ceph/{serviceName}/cephfs/{fsName}/disable"
    },
    {
      "description": "dedicated.ceph.cephfsEnable",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Enable CephFS filesystem",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Fs name",
              "fullType": "string",
              "name": "fsName",
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
          "responseType": "string"
        }
      ],
      "path": "/dedicated/ceph/{serviceName}/cephfs/{fsName}/enable"
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
      "path": "/dedicated/ceph/{serviceName}/confirmTermination"
    },
    {
      "description": "dedicated.ceph.clusterHealth",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get cluster health",
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
          "responseType": "dedicated.ceph.clusterHealth.response"
        }
      ],
      "path": "/dedicated/ceph/{serviceName}/health"
    },
    {
      "description": "dedicated.ceph.poolCreate",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get list of all pools in a cluster",
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
          "responseType": "dedicated.ceph.poolList.response[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create a new ceph pool",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of new pool",
              "fullType": "string",
              "name": "poolName",
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
      "path": "/dedicated/ceph/{serviceName}/pool"
    },
    {
      "description": "dedicated.ceph.poolDelete",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete a single ceph pool",
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
              "description": "Pool name",
              "fullType": "string",
              "name": "poolName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get details about an existing ceph pool",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Pool name",
              "fullType": "string",
              "name": "poolName",
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
          "responseType": "dedicated.ceph.poolGet.response"
        }
      ],
      "path": "/dedicated/ceph/{serviceName}/pool/{poolName}"
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
      "path": "/dedicated/ceph/{serviceName}/serviceInfos"
    },
    {
      "description": "dedicated.ceph.taskList",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List tasks in progress",
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
          "responseType": "dedicated.ceph.taskList.response[]"
        }
      ],
      "path": "/dedicated/ceph/{serviceName}/task"
    },
    {
      "description": "dedicated.ceph.taskGet",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get task details",
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
              "description": "Task ID",
              "fullType": "string",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.ceph.taskGet.response[]"
        }
      ],
      "path": "/dedicated/ceph/{serviceName}/task/{taskId}"
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
      "path": "/dedicated/ceph/{serviceName}/terminate"
    },
    {
      "description": "dedicated.ceph.userCreate",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get list of all users in a cluster",
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
          "responseType": "dedicated.ceph.userList.response[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create a new ceph user",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of new user",
              "fullType": "string",
              "name": "userName",
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
      "path": "/dedicated/ceph/{serviceName}/user"
    },
    {
      "description": "dedicated.ceph.userDelete",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete an existing single ceph user",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "User name",
              "fullType": "string",
              "name": "userName",
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
          "responseType": "string"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get details about a ceph user",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "User name",
              "fullType": "string",
              "name": "userName",
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
          "responseType": "dedicated.ceph.userGet.response"
        }
      ],
      "path": "/dedicated/ceph/{serviceName}/user/{userName}"
    },
    {
      "description": "dedicated.ceph.userPoolPermList",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List user-pool permissions",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "User name",
              "fullType": "string",
              "name": "userName",
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
          "responseType": "dedicated.ceph.userPoolPermList.response[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create new user-pool permissions. All old permissions will be cleared",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.ceph.userPoolPermSetAll.permissions[]",
              "description": "Permissions",
              "fullType": "dedicated.ceph.userPoolPermSetAll.permissions[]",
              "name": "permissions",
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
            },
            {
              "dataType": "string",
              "description": "User name",
              "fullType": "string",
              "name": "userName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Update user-pool permission for single pool",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of Ceph pool",
              "fullType": "string",
              "name": "poolName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Class read permission",
              "fullType": "boolean",
              "name": "classRead",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Write permission",
              "fullType": "boolean",
              "name": "write",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Execute permission",
              "fullType": "boolean",
              "name": "execute",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Class write permission",
              "fullType": "boolean",
              "name": "classWrite",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Read permission",
              "fullType": "boolean",
              "name": "read",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User name",
              "fullType": "string",
              "name": "userName",
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
          "responseType": "string"
        }
      ],
      "path": "/dedicated/ceph/{serviceName}/user/{userName}/pool"
    },
    {
      "description": "dedicated.ceph.userPoolPermDelete",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Clear user-pool permission for single pool",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "User name",
              "fullType": "string",
              "name": "userName",
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
              "dataType": "string",
              "description": "Pool name",
              "fullType": "string",
              "name": "poolName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/dedicated/ceph/{serviceName}/user/{userName}/pool/{poolName}"
    }
  ],
  "basePath": "https://api.us.ovhcloud.com/1.0",
  "models": {
    "dedicated.ceph.aclGet.response": {
      "description": "IP ACL",
      "id": "response",
      "namespace": "dedicated.ceph.aclGet",
      "properties": {
        "family": {
          "canBeNull": false,
          "description": "Family of IP ACL",
          "fullType": "dedicated.ceph.aclGet.response.familyEnum",
          "readOnly": false,
          "required": true,
          "type": "dedicated.ceph.aclGet.response.familyEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "ID of IP ACL",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "netmask": {
          "canBeNull": false,
          "description": "Netmask of IP ACL",
          "fullType": "ip",
          "readOnly": false,
          "required": true,
          "type": "ip"
        },
        "network": {
          "canBeNull": false,
          "description": "Network of IP ACL",
          "fullType": "ip",
          "readOnly": false,
          "required": true,
          "type": "ip"
        }
      }
    },
    "dedicated.ceph.aclGet.response.familyEnum": {
      "description": "Family of IP ACL",
      "enum": [
        "IPV4",
        "IPV6"
      ],
      "enumType": "string",
      "id": "familyEnum",
      "namespace": "dedicated.ceph.aclGet.response"
    },
    "dedicated.ceph.aclList.response": {
      "description": "Structure holding IP ACLs",
      "id": "response",
      "namespace": "dedicated.ceph.aclList",
      "properties": {
        "family": {
          "canBeNull": false,
          "description": "Family of IP ACL",
          "fullType": "dedicated.ceph.aclList.response.familyEnum",
          "readOnly": false,
          "required": true,
          "type": "dedicated.ceph.aclList.response.familyEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "ID of IP ACL",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "netmask": {
          "canBeNull": false,
          "description": "Netmask of IP ACL",
          "fullType": "ip",
          "readOnly": false,
          "required": true,
          "type": "ip"
        },
        "network": {
          "canBeNull": false,
          "description": "Network of IP ACL",
          "fullType": "ip",
          "readOnly": false,
          "required": true,
          "type": "ip"
        }
      }
    },
    "dedicated.ceph.aclList.response.familyEnum": {
      "description": "Family of IP ACL",
      "enum": [
        "IPV4",
        "IPV6"
      ],
      "enumType": "string",
      "id": "familyEnum",
      "namespace": "dedicated.ceph.aclList.response"
    },
    "dedicated.ceph.cephfsGet.response": {
      "description": "CephFS filesystem data",
      "id": "response",
      "namespace": "dedicated.ceph.cephfsGet",
      "properties": {
        "enabled": {
          "canBeNull": false,
          "description": "Filesystem state",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "fsName": {
          "canBeNull": false,
          "description": "Filesystem name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dedicated.ceph.cephfsList.response": {
      "description": "List of CephFS filesystems",
      "id": "response",
      "namespace": "dedicated.ceph.cephfsList",
      "properties": {
        "enabled": {
          "canBeNull": false,
          "description": "Filesystem state",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "fsName": {
          "canBeNull": false,
          "description": "Filesystem name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dedicated.ceph.clusterGet.response": {
      "description": "Details about ceph cluster",
      "id": "response",
      "namespace": "dedicated.ceph.clusterGet",
      "properties": {
        "cephMons": {
          "canBeNull": false,
          "description": "List of CEPH monitor IPs",
          "fullType": "ip[]",
          "readOnly": false,
          "required": true,
          "type": "ip[]"
        },
        "cephVersion": {
          "canBeNull": false,
          "description": "Used version of ceph",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "createDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "crushTunables": {
          "canBeNull": false,
          "description": "Tunables of cluster",
          "fullType": "dedicated.ceph.clusterGet.response.crushTunablesEnum",
          "readOnly": false,
          "required": true,
          "type": "dedicated.ceph.clusterGet.response.crushTunablesEnum"
        },
        "label": {
          "canBeNull": false,
          "description": "Name of cluster",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Name of region where cluster is located",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "ID of cluster",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Size of cluster in TB",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "State of cluster",
          "fullType": "dedicated.ceph.clusterGet.response.stateEnum",
          "readOnly": false,
          "required": true,
          "type": "dedicated.ceph.clusterGet.response.stateEnum"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of cluster",
          "fullType": "dedicated.ceph.clusterGet.response.statusEnum",
          "readOnly": false,
          "required": true,
          "type": "dedicated.ceph.clusterGet.response.statusEnum"
        },
        "updateDate": {
          "canBeNull": false,
          "description": "Last update date",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dedicated.ceph.clusterGet.response.crushTunablesEnum": {
      "description": "Tunables of cluster",
      "enum": [
        "OPTIMAL",
        "DEFAULT",
        "LEGACY",
        "BOBTAIL",
        "ARGONAUT",
        "FIREFLY",
        "HAMMER",
        "JEWEL"
      ],
      "enumType": "string",
      "id": "crushTunablesEnum",
      "namespace": "dedicated.ceph.clusterGet.response"
    },
    "dedicated.ceph.clusterGet.response.stateEnum": {
      "description": "State of cluster",
      "enum": [
        "ACTIVE",
        "SUSPENDED"
      ],
      "enumType": "string",
      "id": "stateEnum",
      "namespace": "dedicated.ceph.clusterGet.response"
    },
    "dedicated.ceph.clusterGet.response.statusEnum": {
      "description": "Status of cluster",
      "enum": [
        "CREATING",
        "INSTALLED",
        "DELETING",
        "DELETED",
        "TASK_IN_PROGRESS"
      ],
      "enumType": "string",
      "id": "statusEnum",
      "namespace": "dedicated.ceph.clusterGet.response"
    },
    "dedicated.ceph.clusterHealth.response": {
      "description": "Health of ceph cluster",
      "id": "response",
      "namespace": "dedicated.ceph.clusterHealth",
      "properties": {
        "availableBytes": {
          "canBeNull": false,
          "description": "All available space in bytes",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "healthy": {
          "canBeNull": false,
          "description": "True or False",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "ID of cluster",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of ceph cluster",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "totalBytes": {
          "canBeNull": false,
          "description": "Total cluster space in bytes",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "usedBytes": {
          "canBeNull": false,
          "description": "Used cluster space in bytes",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "dedicated.ceph.clusterUpdate.crushTunablesEnum": {
      "description": "Tunables of cluster",
      "enum": [
        "OPTIMAL",
        "DEFAULT",
        "LEGACY",
        "BOBTAIL",
        "ARGONAUT",
        "FIREFLY",
        "HAMMER",
        "JEWEL"
      ],
      "enumType": "string",
      "id": "crushTunablesEnum",
      "namespace": "dedicated.ceph.clusterUpdate"
    },
    "dedicated.ceph.poolGet.response": {
      "description": "Ceph pool",
      "id": "response",
      "namespace": "dedicated.ceph.poolGet",
      "properties": {
        "backup": {
          "canBeNull": false,
          "description": "Determine if pool should be backuped",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "minActiveReplicas": {
          "canBeNull": false,
          "description": "Minimum active replicas",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of ceph user",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "poolType": {
          "canBeNull": false,
          "description": "Type of pool",
          "fullType": "dedicated.ceph.poolGet.response.poolTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "dedicated.ceph.poolGet.response.poolTypeEnum"
        },
        "replicaCount": {
          "canBeNull": false,
          "description": "Number of replica",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "ID of cluster",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dedicated.ceph.poolGet.response.poolTypeEnum": {
      "description": "Type of pool",
      "enum": [
        "REPLICATED",
        "ERASURE_CODED"
      ],
      "enumType": "string",
      "id": "poolTypeEnum",
      "namespace": "dedicated.ceph.poolGet.response"
    },
    "dedicated.ceph.poolList.response": {
      "description": "List of cluster pools",
      "id": "response",
      "namespace": "dedicated.ceph.poolList",
      "properties": {
        "backup": {
          "canBeNull": false,
          "description": "Determine if pool should be backuped",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "minActiveReplicas": {
          "canBeNull": false,
          "description": "Minimum active replicas",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of ceph user",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "poolType": {
          "canBeNull": false,
          "description": "Type of pool",
          "fullType": "dedicated.ceph.poolList.response.poolTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "dedicated.ceph.poolList.response.poolTypeEnum"
        },
        "replicaCount": {
          "canBeNull": false,
          "description": "Number of replica",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "ID of cluster",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dedicated.ceph.poolList.response.poolTypeEnum": {
      "description": "Type of pool",
      "enum": [
        "REPLICATED",
        "ERASURE_CODED"
      ],
      "enumType": "string",
      "id": "poolTypeEnum",
      "namespace": "dedicated.ceph.poolList.response"
    },
    "dedicated.ceph.taskGet.response": {
      "description": "list of task subtasks",
      "id": "response",
      "namespace": "dedicated.ceph.taskGet",
      "properties": {
        "createDate": {
          "canBeNull": false,
          "description": "Creation date of task",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "finishDate": {
          "canBeNull": true,
          "description": "Finish date of task",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of task",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "state": {
          "canBeNull": true,
          "description": "State of task",
          "fullType": "dedicated.ceph.taskGet.response.stateEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.ceph.taskGet.response.stateEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of task",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dedicated.ceph.taskGet.response.stateEnum": {
      "description": "State of task",
      "enum": [
        "IN PROGRESS",
        "DONE",
        "FAILED"
      ],
      "enumType": "string",
      "id": "stateEnum",
      "namespace": "dedicated.ceph.taskGet.response"
    },
    "dedicated.ceph.taskList.response": {
      "description": "List of active tasks",
      "id": "response",
      "namespace": "dedicated.ceph.taskList",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "ID of task",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of task",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dedicated.ceph.userGet.response": {
      "description": "Ceph user",
      "id": "response",
      "namespace": "dedicated.ceph.userGet",
      "properties": {
        "key": {
          "canBeNull": false,
          "description": "Key of user to connect into cluster",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "mdsCaps": {
          "canBeNull": false,
          "description": "Capabilities of user on MDS",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "monCaps": {
          "canBeNull": false,
          "description": "Capabilities of user on MON",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of ceph user",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "osdCaps": {
          "canBeNull": false,
          "description": "Capabilities of user on OSD",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "ID of cluster",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dedicated.ceph.userList.response": {
      "description": "List of cluster users",
      "id": "response",
      "namespace": "dedicated.ceph.userList",
      "properties": {
        "key": {
          "canBeNull": false,
          "description": "Key of user to connect into cluster",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "mdsCaps": {
          "canBeNull": false,
          "description": "Capabilities of user on MDS",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "monCaps": {
          "canBeNull": false,
          "description": "Capabilities of user on MON",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of ceph user",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "osdCaps": {
          "canBeNull": false,
          "description": "Capabilities of user on OSD",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "ID of cluster",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dedicated.ceph.userPoolPermList.response": {
      "description": "List of permissions",
      "id": "response",
      "namespace": "dedicated.ceph.userPoolPermList",
      "properties": {
        "classRead": {
          "canBeNull": false,
          "description": "Class read permission",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "classWrite": {
          "canBeNull": false,
          "description": "Class write permission",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "execute": {
          "canBeNull": false,
          "description": "Execute permission",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "poolName": {
          "canBeNull": false,
          "description": "Name of Ceph pool",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "read": {
          "canBeNull": false,
          "description": "Read permission",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "write": {
          "canBeNull": false,
          "description": "Write permission",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        }
      }
    },
    "dedicated.ceph.userPoolPermSetAll.permissions": {
      "description": "List of permissions",
      "id": "permissions",
      "namespace": "dedicated.ceph.userPoolPermSetAll",
      "properties": {
        "classRead": {
          "canBeNull": false,
          "description": "Class read permission",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "classWrite": {
          "canBeNull": false,
          "description": "Class write permission",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "execute": {
          "canBeNull": false,
          "description": "Execute permission",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "poolName": {
          "canBeNull": false,
          "description": "Name of Ceph pool",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "read": {
          "canBeNull": false,
          "description": "Read permission",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "write": {
          "canBeNull": false,
          "description": "Write permission",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
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
    }
  },
  "resourcePath": "/dedicated/ceph"
}