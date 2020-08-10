import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/dedicated/ceph",
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
      "description": "Operations about the CEPH service"
    },
    {
      "path": "/dedicated/ceph/{serviceName}",
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
          "responseType": "dedicated.ceph.clusterGet.response",
          "noAuthentication": false,
          "description": "Get cluster details"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "crushTunables",
              "dataType": "dedicated.ceph.clusterUpdate.crushTunablesEnum",
              "paramType": "body",
              "fullType": "dedicated.ceph.clusterUpdate.crushTunablesEnum",
              "required": true,
              "description": "Tunables of cluster"
            },
            {
              "name": "label",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of the cluster"
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
          "description": "Update cluster details"
        }
      ],
      "description": "dedicated.ceph.clusterGet"
    },
    {
      "path": "/dedicated/ceph/{serviceName}/acl",
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
          "responseType": "dedicated.ceph.aclList.response[]",
          "noAuthentication": false,
          "description": "Get list of all IP ACLs in a cluster"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "aclList",
              "dataType": "ip[]",
              "paramType": "body",
              "fullType": "ip[]",
              "required": true,
              "description": "List of new ACLs"
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
          "description": "Create one or more new IP ACLs"
        }
      ],
      "description": "dedicated.ceph.aclCreate"
    },
    {
      "path": "/dedicated/ceph/{serviceName}/acl/{aclId}",
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
              "name": "aclId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Acl ID"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Delete single IP ACL"
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
              "name": "aclId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Acl ID"
            }
          ],
          "responseType": "dedicated.ceph.aclGet.response",
          "noAuthentication": false,
          "description": "Get details about IP ACL"
        }
      ],
      "description": "dedicated.ceph.aclDeleteSingle"
    },
    {
      "path": "/dedicated/ceph/{serviceName}/cephfs",
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
          "responseType": "dedicated.ceph.cephfsList.response[]",
          "noAuthentication": false,
          "description": "List CephFS filestystems"
        }
      ],
      "description": "dedicated.ceph.cephfsList"
    },
    {
      "path": "/dedicated/ceph/{serviceName}/cephfs/{fsName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "fsName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Fs name"
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
          "description": "Purge CephFS filesystem"
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
              "name": "fsName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Fs name"
            }
          ],
          "responseType": "dedicated.ceph.cephfsGet.response",
          "noAuthentication": false,
          "description": "Get CephFS filestystem information"
        }
      ],
      "description": "dedicated.ceph.cephfsGet"
    },
    {
      "path": "/dedicated/ceph/{serviceName}/cephfs/{fsName}/disable",
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
            },
            {
              "name": "fsName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Fs name"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Disable CephFS filesystem"
        }
      ],
      "description": "dedicated.ceph.cephfsDisable"
    },
    {
      "path": "/dedicated/ceph/{serviceName}/cephfs/{fsName}/enable",
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
            },
            {
              "name": "fsName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Fs name"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Enable CephFS filesystem"
        }
      ],
      "description": "dedicated.ceph.cephfsEnable"
    },
    {
      "path": "/dedicated/ceph/{serviceName}/confirmTermination",
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
      "path": "/dedicated/ceph/{serviceName}/health",
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
          "responseType": "dedicated.ceph.clusterHealth.response",
          "noAuthentication": false,
          "description": "Get cluster health"
        }
      ],
      "description": "dedicated.ceph.clusterHealth"
    },
    {
      "path": "/dedicated/ceph/{serviceName}/pool",
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
          "responseType": "dedicated.ceph.poolList.response[]",
          "noAuthentication": false,
          "description": "Get list of all pools in a cluster"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "poolName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of new pool"
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
          "description": "Create a new ceph pool"
        }
      ],
      "description": "dedicated.ceph.poolCreate"
    },
    {
      "path": "/dedicated/ceph/{serviceName}/pool/{poolName}",
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
              "name": "poolName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pool name"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Delete a single ceph pool"
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
              "name": "poolName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pool name"
            }
          ],
          "responseType": "dedicated.ceph.poolGet.response",
          "noAuthentication": false,
          "description": "Get details about an existing ceph pool"
        }
      ],
      "description": "dedicated.ceph.poolDelete"
    },
    {
      "path": "/dedicated/ceph/{serviceName}/serviceInfos",
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
      "path": "/dedicated/ceph/{serviceName}/task",
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
          "responseType": "dedicated.ceph.taskList.response[]",
          "noAuthentication": false,
          "description": "List tasks in progress"
        }
      ],
      "description": "dedicated.ceph.taskList"
    },
    {
      "path": "/dedicated/ceph/{serviceName}/task/{taskId}",
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
              "name": "taskId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Task ID"
            }
          ],
          "responseType": "dedicated.ceph.taskGet.response[]",
          "noAuthentication": false,
          "description": "Get task details"
        }
      ],
      "description": "dedicated.ceph.taskGet"
    },
    {
      "path": "/dedicated/ceph/{serviceName}/terminate",
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
    },
    {
      "path": "/dedicated/ceph/{serviceName}/user",
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
          "responseType": "dedicated.ceph.userList.response[]",
          "noAuthentication": false,
          "description": "Get list of all users in a cluster"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "userName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of new user"
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
          "description": "Create a new ceph user"
        }
      ],
      "description": "dedicated.ceph.userCreate"
    },
    {
      "path": "/dedicated/ceph/{serviceName}/user/{userName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "userName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User name"
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
          "description": "Delete an existing single ceph user"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "userName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User name"
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
          "responseType": "dedicated.ceph.userGet.response",
          "noAuthentication": false,
          "description": "Get details about a ceph user"
        }
      ],
      "description": "dedicated.ceph.userDelete"
    },
    {
      "path": "/dedicated/ceph/{serviceName}/user/{userName}/pool",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "userName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User name"
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
          "responseType": "dedicated.ceph.userPoolPermList.response[]",
          "noAuthentication": false,
          "description": "List user-pool permissions"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "permissions",
              "dataType": "dedicated.ceph.userPoolPermSetAll.permissions[]",
              "paramType": "body",
              "fullType": "dedicated.ceph.userPoolPermSetAll.permissions[]",
              "required": false,
              "description": "Permissions"
            },
            {
              "name": "userName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User name"
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
          "description": "Create new user-pool permissions. All old permissions will be cleared"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "write",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Write permission"
            },
            {
              "name": "execute",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Execute permission"
            },
            {
              "name": "classWrite",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Class write permission"
            },
            {
              "name": "read",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Read permission"
            },
            {
              "name": "poolName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of Ceph pool"
            },
            {
              "name": "classRead",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Class read permission"
            },
            {
              "name": "userName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User name"
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
          "description": "Update user-pool permission for single pool"
        }
      ],
      "description": "dedicated.ceph.userPoolPermList"
    },
    {
      "path": "/dedicated/ceph/{serviceName}/user/{userName}/pool/{poolName}",
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
              "name": "poolName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pool name"
            },
            {
              "name": "userName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User name"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Clear user-pool permission for single pool"
        }
      ],
      "description": "dedicated.ceph.userPoolPermDelete"
    }
  ],
  "resourcePath": "/dedicated/ceph",
  "basePath": "https://api.us.ovhcloud.com/1.0",
  "models": {
    "dedicated.ceph.aclGet.response": {
      "id": "response",
      "namespace": "dedicated.ceph.aclGet",
      "description": "IP ACL",
      "properties": {
        "family": {
          "type": "dedicated.ceph.aclGet.response.familyEnum",
          "fullType": "dedicated.ceph.aclGet.response.familyEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Family of IP ACL",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "ID of IP ACL",
          "required": true
        },
        "netmask": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "Netmask of IP ACL",
          "required": true
        },
        "network": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "Network of IP ACL",
          "required": true
        }
      }
    },
    "dedicated.ceph.aclGet.response.familyEnum": {
      "id": "familyEnum",
      "namespace": "dedicated.ceph.aclGet.response",
      "description": "Family of IP ACL",
      "enum": [
        "IPV4",
        "IPV6"
      ],
      "enumType": "string"
    },
    "dedicated.ceph.aclList.response": {
      "id": "response",
      "namespace": "dedicated.ceph.aclList",
      "description": "Structure holding IP ACLs",
      "properties": {
        "family": {
          "type": "dedicated.ceph.aclList.response.familyEnum",
          "fullType": "dedicated.ceph.aclList.response.familyEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Family of IP ACL",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "ID of IP ACL",
          "required": true
        },
        "netmask": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "Netmask of IP ACL",
          "required": true
        },
        "network": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "Network of IP ACL",
          "required": true
        }
      }
    },
    "dedicated.ceph.aclList.response.familyEnum": {
      "id": "familyEnum",
      "namespace": "dedicated.ceph.aclList.response",
      "description": "Family of IP ACL",
      "enum": [
        "IPV4",
        "IPV6"
      ],
      "enumType": "string"
    },
    "dedicated.ceph.cephfsGet.response": {
      "id": "response",
      "namespace": "dedicated.ceph.cephfsGet",
      "description": "CephFS filesystem data",
      "properties": {
        "enabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Filesystem state",
          "required": true
        },
        "fsName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Filesystem name",
          "required": true
        }
      }
    },
    "dedicated.ceph.cephfsList.response": {
      "id": "response",
      "namespace": "dedicated.ceph.cephfsList",
      "description": "List of CephFS filesystems",
      "properties": {
        "enabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Filesystem state",
          "required": true
        },
        "fsName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Filesystem name",
          "required": true
        }
      }
    },
    "dedicated.ceph.clusterGet.response": {
      "id": "response",
      "namespace": "dedicated.ceph.clusterGet",
      "description": "Details about ceph cluster",
      "properties": {
        "cephMons": {
          "type": "ip[]",
          "fullType": "ip[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of CEPH monitor IPs",
          "required": true
        },
        "cephVersion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Used version of ceph",
          "required": true
        },
        "createDate": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Creation date",
          "required": true
        },
        "crushTunables": {
          "type": "dedicated.ceph.clusterGet.response.crushTunablesEnum",
          "fullType": "dedicated.ceph.clusterGet.response.crushTunablesEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Tunables of cluster",
          "required": true
        },
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of cluster",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of region where cluster is located",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "ID of cluster",
          "required": true
        },
        "size": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Size of cluster in TB",
          "required": true
        },
        "state": {
          "type": "dedicated.ceph.clusterGet.response.stateEnum",
          "fullType": "dedicated.ceph.clusterGet.response.stateEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "State of cluster",
          "required": true
        },
        "status": {
          "type": "dedicated.ceph.clusterGet.response.statusEnum",
          "fullType": "dedicated.ceph.clusterGet.response.statusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Status of cluster",
          "required": true
        },
        "updateDate": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Last update date",
          "required": true
        }
      }
    },
    "dedicated.ceph.clusterGet.response.crushTunablesEnum": {
      "id": "crushTunablesEnum",
      "namespace": "dedicated.ceph.clusterGet.response",
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
      "enumType": "string"
    },
    "dedicated.ceph.clusterGet.response.stateEnum": {
      "id": "stateEnum",
      "namespace": "dedicated.ceph.clusterGet.response",
      "description": "State of cluster",
      "enum": [
        "ACTIVE",
        "SUSPENDED"
      ],
      "enumType": "string"
    },
    "dedicated.ceph.clusterGet.response.statusEnum": {
      "id": "statusEnum",
      "namespace": "dedicated.ceph.clusterGet.response",
      "description": "Status of cluster",
      "enum": [
        "CREATING",
        "INSTALLED",
        "DELETING",
        "DELETED",
        "TASK_IN_PROGRESS"
      ],
      "enumType": "string"
    },
    "dedicated.ceph.clusterHealth.response": {
      "id": "response",
      "namespace": "dedicated.ceph.clusterHealth",
      "description": "Health of ceph cluster",
      "properties": {
        "availableBytes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "All available space in bytes",
          "required": true
        },
        "healthy": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "True or False",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "ID of cluster",
          "required": true
        },
        "status": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Status of ceph cluster",
          "required": true
        },
        "totalBytes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Total cluster space in bytes",
          "required": true
        },
        "usedBytes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Used cluster space in bytes",
          "required": true
        }
      }
    },
    "dedicated.ceph.clusterUpdate.crushTunablesEnum": {
      "id": "crushTunablesEnum",
      "namespace": "dedicated.ceph.clusterUpdate",
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
      "enumType": "string"
    },
    "dedicated.ceph.poolGet.response": {
      "id": "response",
      "namespace": "dedicated.ceph.poolGet",
      "description": "Ceph pool",
      "properties": {
        "backup": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Determine if pool should be backuped",
          "required": true
        },
        "minActiveReplicas": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Minimum active replicas",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of ceph user",
          "required": true
        },
        "poolType": {
          "type": "dedicated.ceph.poolGet.response.poolTypeEnum",
          "fullType": "dedicated.ceph.poolGet.response.poolTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of pool",
          "required": true
        },
        "replicaCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of replica",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "ID of cluster",
          "required": true
        }
      }
    },
    "dedicated.ceph.poolGet.response.poolTypeEnum": {
      "id": "poolTypeEnum",
      "namespace": "dedicated.ceph.poolGet.response",
      "description": "Type of pool",
      "enum": [
        "REPLICATED",
        "ERASURE_CODED"
      ],
      "enumType": "string"
    },
    "dedicated.ceph.poolList.response": {
      "id": "response",
      "namespace": "dedicated.ceph.poolList",
      "description": "List of cluster pools",
      "properties": {
        "backup": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Determine if pool should be backuped",
          "required": true
        },
        "minActiveReplicas": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Minimum active replicas",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of ceph user",
          "required": true
        },
        "poolType": {
          "type": "dedicated.ceph.poolList.response.poolTypeEnum",
          "fullType": "dedicated.ceph.poolList.response.poolTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of pool",
          "required": true
        },
        "replicaCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of replica",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "ID of cluster",
          "required": true
        }
      }
    },
    "dedicated.ceph.poolList.response.poolTypeEnum": {
      "id": "poolTypeEnum",
      "namespace": "dedicated.ceph.poolList.response",
      "description": "Type of pool",
      "enum": [
        "REPLICATED",
        "ERASURE_CODED"
      ],
      "enumType": "string"
    },
    "dedicated.ceph.taskGet.response": {
      "id": "response",
      "namespace": "dedicated.ceph.taskGet",
      "description": "list of task subtasks",
      "properties": {
        "createDate": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Creation date of task",
          "required": true
        },
        "finishDate": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Finish date of task",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of task",
          "required": true
        },
        "state": {
          "type": "dedicated.ceph.taskGet.response.stateEnum",
          "fullType": "dedicated.ceph.taskGet.response.stateEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "State of task",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of task",
          "required": true
        }
      }
    },
    "dedicated.ceph.taskGet.response.stateEnum": {
      "id": "stateEnum",
      "namespace": "dedicated.ceph.taskGet.response",
      "description": "State of task",
      "enum": [
        "IN PROGRESS",
        "DONE",
        "FAILED"
      ],
      "enumType": "string"
    },
    "dedicated.ceph.taskList.response": {
      "id": "response",
      "namespace": "dedicated.ceph.taskList",
      "description": "List of active tasks",
      "properties": {
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "ID of task",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of task",
          "required": true
        }
      }
    },
    "dedicated.ceph.userGet.response": {
      "id": "response",
      "namespace": "dedicated.ceph.userGet",
      "description": "Ceph user",
      "properties": {
        "key": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Key of user to connect into cluster",
          "required": true
        },
        "mdsCaps": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Capabilities of user on MDS",
          "required": true
        },
        "monCaps": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Capabilities of user on MON",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of ceph user",
          "required": true
        },
        "osdCaps": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Capabilities of user on OSD",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "ID of cluster",
          "required": true
        }
      }
    },
    "dedicated.ceph.userList.response": {
      "id": "response",
      "namespace": "dedicated.ceph.userList",
      "description": "List of cluster users",
      "properties": {
        "key": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Key of user to connect into cluster",
          "required": true
        },
        "mdsCaps": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Capabilities of user on MDS",
          "required": true
        },
        "monCaps": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Capabilities of user on MON",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of ceph user",
          "required": true
        },
        "osdCaps": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Capabilities of user on OSD",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "ID of cluster",
          "required": true
        }
      }
    },
    "dedicated.ceph.userPoolPermList.response": {
      "id": "response",
      "namespace": "dedicated.ceph.userPoolPermList",
      "description": "List of permissions",
      "properties": {
        "classRead": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Class read permission",
          "required": true
        },
        "classWrite": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Class write permission",
          "required": true
        },
        "execute": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Execute permission",
          "required": true
        },
        "poolName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of Ceph pool",
          "required": true
        },
        "read": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Read permission",
          "required": true
        },
        "write": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Write permission",
          "required": true
        }
      }
    },
    "dedicated.ceph.userPoolPermSetAll.permissions": {
      "id": "permissions",
      "namespace": "dedicated.ceph.userPoolPermSetAll",
      "description": "List of permissions",
      "properties": {
        "classRead": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Class read permission",
          "required": true
        },
        "classWrite": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Class write permission",
          "required": true
        },
        "execute": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Execute permission",
          "required": true
        },
        "poolName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of Ceph pool",
          "required": true
        },
        "read": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Read permission",
          "required": true
        },
        "write": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Write permission",
          "required": true
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
    }
  }
}