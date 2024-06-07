import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/dedicated/ceph.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "map[string][]iam.resource.TagFilter",
              "description": "Filter resources on IAM tags",
              "name": "iamTags",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/ceph"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get cluster details",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.ceph.clusterGet.responseWithIAM"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update cluster details",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:put",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.ceph.UpdateClusterDetails",
              "description": "Request Body",
              "fullType": "dedicated.ceph.UpdateClusterDetails",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get list of all IP ACLs in a cluster",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:acl/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.ceph.aclGet.response[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create one or more new IP ACLs",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:acl/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.ceph.acl.Create",
              "description": "Request Body",
              "fullType": "dedicated.ceph.acl.Create",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete single IP ACL",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:acl/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Acl ID",
              "fullType": "long",
              "name": "aclId",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get details about IP ACL",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:acl/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Acl ID",
              "fullType": "long",
              "name": "aclId",
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
          "responseType": "dedicated.ceph.aclGet.response"
        }
      ],
      "path": "/dedicated/ceph/{serviceName}/acl/{aclId}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List CephFS filesystems",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:cephfs/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.ceph.cephfsGet.response[]"
        }
      ],
      "path": "/dedicated/ceph/{serviceName}/cephfs"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Purge CephFS filesystem",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:cephfs/delete",
              "required": true
            }
          ],
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
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get CephFS filesystem information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:cephfs/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.ceph.cephfsGet.response"
        }
      ],
      "path": "/dedicated/ceph/{serviceName}/cephfs/{fsName}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Disable CephFS filesystem",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:cephfs/disable",
              "required": true
            }
          ],
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
      "path": "/dedicated/ceph/{serviceName}/cephfs/{fsName}/disable"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Enable CephFS filesystem",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:cephfs/enable",
              "required": true
            }
          ],
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
      "description": "Change the contacts of this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Launch a contact change procedure",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:changeContact",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The contact to set as admin contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactAdmin",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The contact to set as billing contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactBilling",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The contact to set as tech contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactTech",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal ID of your ceph cluster",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicated/ceph/{serviceName}/changeContact"
    },
    {
      "description": "Confirm service termination",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Confirm service termination",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:confirmTermination",
              "required": true
            }
          ],
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
              "description": "The termination token sent by email to the admin contact",
              "fullType": "string",
              "name": "token",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of your ceph cluster",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get cluster health",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:health/get",
              "required": true
            }
          ],
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get list of all pools in a cluster",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:pool/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.ceph.poolGet.response[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new ceph pool",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:pool/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.ceph.pool.Create",
              "description": "Request Body",
              "fullType": "dedicated.ceph.pool.Create",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a single ceph pool",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:pool/delete",
              "required": true
            }
          ],
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
          "responseType": "string"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get details about an existing ceph pool",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:pool/get",
              "required": true
            }
          ],
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Open 5 minutes window for deleting single ceph pool",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:pool/allowDeletion",
              "required": true
            }
          ],
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
          "responseType": "string"
        }
      ],
      "path": "/dedicated/ceph/{serviceName}/pool/{poolName}/allowDeletion"
    },
    {
      "description": "Details about a Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get service information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:serviceInfos/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of your ceph cluster",
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
          "description": "Update service information",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:serviceInfos/edit",
              "required": true
            }
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
              "description": "The internal ID of your ceph cluster",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List tasks in progress",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:task/get",
              "required": true
            }
          ],
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get task details",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:task/get",
              "required": true
            }
          ],
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
      "description": "Ask for the termination of your service. Admin contact of this service will receive a termination token in order to confirm its termination with /confirmTermination endpoint.",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Ask for the termination of your service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:terminate",
              "required": true
            }
          ],
          "longDescription": "Ask for the termination of your service. Admin contact of this service will receive a termination token by email in order to confirm its termination with /confirmTermination endpoint.",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of your ceph cluster",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get list of all users in a cluster",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:user/get",
              "required": true
            }
          ],
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
          "responseType": "dedicated.ceph.userGet.response[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new ceph user",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:user/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.ceph.user.Create",
              "description": "Request Body",
              "fullType": "dedicated.ceph.user.Create",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an existing single ceph user",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:user/delete",
              "required": true
            }
          ],
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get details about a ceph user",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:user/get",
              "required": true
            }
          ],
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
              "description": "User name",
              "fullType": "string",
              "name": "userName",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List user-pool permissions",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:user/pool/get",
              "required": true
            }
          ],
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
              "description": "User name",
              "fullType": "string",
              "name": "userName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.ceph.userPoolPermList.response[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create new user-pool permissions. All old permissions will be cleared",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:user/pool/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.ceph.user.pool.CreatePermissions",
              "description": "Request Body",
              "fullType": "dedicated.ceph.user.pool.CreatePermissions",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update user-pool permission for single pool",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:user/pool/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.ceph.user.pool.UpdatePermission",
              "description": "Request Body",
              "fullType": "dedicated.ceph.user.pool.UpdatePermission",
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
              "description": "User name",
              "fullType": "string",
              "name": "userName",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Clear user-pool permission for single pool",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "dedicatedCeph:apiovh:user/pool/delete",
              "required": true
            }
          ],
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
        }
      ],
      "path": "/dedicated/ceph/{serviceName}/user/{userName}/pool/{poolName}"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "dedicated.ceph.UpdateClusterDetails": {
      "description": "Update cluster details",
      "id": "UpdateClusterDetails",
      "namespace": "dedicated.ceph",
      "properties": {
        "crushTunables": {
          "canBeNull": false,
          "description": "Tunables of cluster",
          "fullType": "dedicated.ceph.clusterUpdate.crushTunablesEnum",
          "readOnly": false,
          "required": true,
          "type": "dedicated.ceph.clusterUpdate.crushTunablesEnum"
        },
        "label": {
          "canBeNull": false,
          "description": "Name of the cluster",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dedicated.ceph.acl.Create": {
      "description": "Create one or more new IP ACLs",
      "id": "Create",
      "namespace": "dedicated.ceph.acl",
      "properties": {
        "aclList": {
          "canBeNull": false,
          "description": "List of new ACLs",
          "fullType": "string[]",
          "readOnly": false,
          "required": true,
          "type": "string[]"
        }
      }
    },
    "dedicated.ceph.aclGet.response": {
      "description": "IP ACL",
      "id": "response",
      "namespace": "dedicated.ceph.aclGet",
      "properties": {
        "family": {
          "canBeNull": false,
          "description": "Family of IP ACL",
          "fullType": "dedicated.ceph.aclGet.response.familyEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.ceph.aclGet.response.familyEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "ID of IP ACL",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "netmask": {
          "canBeNull": false,
          "description": "IP address (e.g., 192.0.2.0)",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "network": {
          "canBeNull": false,
          "description": "IP address (e.g., 192.0.2.0)",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
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
    "dedicated.ceph.cephfsGet.response": {
      "description": "CephFS filesystem data",
      "id": "response",
      "namespace": "dedicated.ceph.cephfsGet",
      "properties": {
        "enabled": {
          "canBeNull": false,
          "description": "Filesystem state",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "fsName": {
          "canBeNull": false,
          "description": "Filesystem name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "cephVersion": {
          "canBeNull": false,
          "description": "Used version of ceph",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "createDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "crushTunables": {
          "canBeNull": false,
          "description": "Tunables of cluster",
          "fullType": "dedicated.ceph.clusterGet.response.crushTunablesEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.ceph.clusterGet.response.crushTunablesEnum"
        },
        "label": {
          "canBeNull": false,
          "description": "Name of cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Name of region where cluster is located",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "ID of cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Size of cluster in TB",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "State of cluster",
          "fullType": "dedicated.ceph.clusterGet.response.stateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.ceph.clusterGet.response.stateEnum"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of cluster",
          "fullType": "dedicated.ceph.clusterGet.response.statusEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.ceph.clusterGet.response.statusEnum"
        },
        "updateDate": {
          "canBeNull": false,
          "description": "Last update date",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.ceph.clusterGet.response.crushTunablesEnum": {
      "description": "Tunables of cluster",
      "enum": [
        "ARGONAUT",
        "BOBTAIL",
        "DEFAULT",
        "FIREFLY",
        "HAMMER",
        "JEWEL",
        "LEGACY",
        "OPTIMAL"
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
        "DELETED",
        "DELETING",
        "INSTALLED",
        "TASK_IN_PROGRESS"
      ],
      "enumType": "string",
      "id": "statusEnum",
      "namespace": "dedicated.ceph.clusterGet.response"
    },
    "dedicated.ceph.clusterGet.responseWithIAM": {
      "description": "Details about ceph cluster",
      "id": "response",
      "namespace": "dedicated.ceph.clusterGet",
      "properties": {
        "cephMons": {
          "canBeNull": false,
          "description": "List of CEPH monitor IPs",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "cephVersion": {
          "canBeNull": false,
          "description": "Used version of ceph",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "createDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "crushTunables": {
          "canBeNull": false,
          "description": "Tunables of cluster",
          "fullType": "dedicated.ceph.clusterGet.response.crushTunablesEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.ceph.clusterGet.response.crushTunablesEnum"
        },
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
        },
        "label": {
          "canBeNull": false,
          "description": "Name of cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Name of region where cluster is located",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "ID of cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Size of cluster in TB",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "State of cluster",
          "fullType": "dedicated.ceph.clusterGet.response.stateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.ceph.clusterGet.response.stateEnum"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of cluster",
          "fullType": "dedicated.ceph.clusterGet.response.statusEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.ceph.clusterGet.response.statusEnum"
        },
        "updateDate": {
          "canBeNull": false,
          "description": "Last update date",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
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
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "healthy": {
          "canBeNull": false,
          "description": "True or False",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "ID of cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of ceph cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "totalBytes": {
          "canBeNull": false,
          "description": "Total cluster space in bytes",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "usedBytes": {
          "canBeNull": false,
          "description": "Used cluster space in bytes",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicated.ceph.clusterUpdate.crushTunablesEnum": {
      "description": "Tunables of cluster",
      "enum": [
        "ARGONAUT",
        "BOBTAIL",
        "DEFAULT",
        "FIREFLY",
        "HAMMER",
        "JEWEL",
        "LEGACY",
        "OPTIMAL"
      ],
      "enumType": "string",
      "id": "crushTunablesEnum",
      "namespace": "dedicated.ceph.clusterUpdate"
    },
    "dedicated.ceph.pool.Create": {
      "description": "Create a new ceph pool",
      "id": "Create",
      "namespace": "dedicated.ceph.pool",
      "properties": {
        "poolName": {
          "canBeNull": false,
          "description": "Name of the new pool",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dedicated.ceph.poolErasure.Create": {
      "description": "Create a new ceph erasure pool",
      "id": "Create",
      "namespace": "dedicated.ceph.poolErasure",
      "properties": {
        "poolName": {
          "canBeNull": false,
          "description": "Name of the new pool erasure",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
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
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "minActiveReplicas": {
          "canBeNull": false,
          "description": "Minimum active replicas",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the pool",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "poolType": {
          "canBeNull": false,
          "description": "Type of pool",
          "fullType": "dedicated.ceph.poolGet.response.poolTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.ceph.poolGet.response.poolTypeEnum"
        },
        "replicaCount": {
          "canBeNull": false,
          "description": "Number of replica",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "ID of cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.ceph.poolGet.response.poolTypeEnum": {
      "description": "Type of pool",
      "enum": [
        "ERASURE_CODED",
        "REPLICATED"
      ],
      "enumType": "string",
      "id": "poolTypeEnum",
      "namespace": "dedicated.ceph.poolGet.response"
    },
    "dedicated.ceph.taskGet.response": {
      "description": "List of task subtasks",
      "id": "response",
      "namespace": "dedicated.ceph.taskGet",
      "properties": {
        "createDate": {
          "canBeNull": false,
          "description": "Creation date of the task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "finishDate": {
          "canBeNull": true,
          "description": "Finish date of the task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the task",
          "fullType": "dedicated.ceph.taskGet.response.stateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.ceph.taskGet.response.stateEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.ceph.taskGet.response.stateEnum": {
      "description": "State of task",
      "enum": [
        "DONE",
        "FAILED",
        "IN PROGRESS"
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
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.ceph.user.Create": {
      "description": "Create a new ceph user",
      "id": "Create",
      "namespace": "dedicated.ceph.user",
      "properties": {
        "userName": {
          "canBeNull": false,
          "description": "Name of the new user",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dedicated.ceph.user.pool.CreatePermissions": {
      "description": "Create new user-pool permissions",
      "id": "CreatePermissions",
      "namespace": "dedicated.ceph.user.pool",
      "properties": {
        "permissions": {
          "canBeNull": false,
          "description": "Permissions",
          "fullType": "dedicated.ceph.userPoolPermSetAll.permissions[]",
          "readOnly": false,
          "required": false,
          "type": "dedicated.ceph.userPoolPermSetAll.permissions[]"
        }
      }
    },
    "dedicated.ceph.user.pool.UpdatePermission": {
      "description": "Update user-pool permission for single pool",
      "id": "UpdatePermission",
      "namespace": "dedicated.ceph.user.pool",
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
    "dedicated.ceph.userGet.response": {
      "description": "Ceph user",
      "id": "response",
      "namespace": "dedicated.ceph.userGet",
      "properties": {
        "key": {
          "canBeNull": false,
          "description": "Key of user to connect into cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "mdsCaps": {
          "canBeNull": true,
          "description": "Capabilities of user on MDS",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "monCaps": {
          "canBeNull": false,
          "description": "Capabilities of user on MON",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of ceph user",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "osdCaps": {
          "canBeNull": false,
          "description": "Capabilities of user on OSD",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "ID of cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "classWrite": {
          "canBeNull": false,
          "description": "Class write permission",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "execute": {
          "canBeNull": false,
          "description": "Execute permission",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "poolName": {
          "canBeNull": false,
          "description": "Name of Ceph pool",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "read": {
          "canBeNull": false,
          "description": "Read permission",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "write": {
          "canBeNull": false,
          "description": "Write permission",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "boolean"
        },
        "classWrite": {
          "canBeNull": false,
          "description": "Class write permission",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "execute": {
          "canBeNull": false,
          "description": "Execute permission",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "poolName": {
          "canBeNull": false,
          "description": "Name of Ceph pool",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "read": {
          "canBeNull": false,
          "description": "Read permission",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "write": {
          "canBeNull": false,
          "description": "Write permission",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "iam.ResourceMetadata": {
      "description": "IAM resource metadata embedded in services models",
      "id": "ResourceMetadata",
      "namespace": "iam",
      "properties": {
        "displayName": {
          "canBeNull": true,
          "description": "Resource display name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Unique identifier of the resource",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "tags": {
          "canBeNull": true,
          "description": "Resource tags. Tags that were internally computed are prefixed with ovh:",
          "fullType": "map[string]string",
          "readOnly": true,
          "required": false,
          "type": "map[string]string"
        },
        "urn": {
          "canBeNull": false,
          "description": "Unique resource name used in policies",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "iam.resource.TagFilter": {
      "description": "Resource tag filter",
      "id": "TagFilter",
      "namespace": "iam.resource",
      "properties": {
        "operator": {
          "canBeNull": true,
          "description": "Operator to use in order to filter on the value (defaults to 'EQ')",
          "fullType": "iam.resource.TagFilter.OperatorEnum",
          "readOnly": true,
          "required": false,
          "type": "iam.resource.TagFilter.OperatorEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "Value to use in order to filter tags",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "iam.resource.TagFilter.OperatorEnum": {
      "description": "Operator that can be used in order to filter resources tags",
      "enum": [
        "EQ"
      ],
      "enumType": "string",
      "id": "OperatorEnum",
      "namespace": "iam.resource.TagFilter"
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
  "resourcePath": "/dedicated/ceph"
}